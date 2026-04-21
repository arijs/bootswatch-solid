import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { setTimeout as delay } from 'node:timers/promises'
import { chromium } from 'playwright'

import {
	BASE_URL,
	DEFAULT_VIEWPORT,
	MAX_ATTEMPTS_PER_SCREENSHOT,
	RESTART_BROWSER_EVERY,
	ROOT,
} from './constants.mjs'
import {
	createThemeCssAccumulator,
	extractScenarioCssArtifacts,
	writeScenarioCssArtifact,
	writeThemeCssArtifact,
} from './css-extraction.mjs'
import { resolveConfiguredHeight } from './directives.mjs'
import {
	normalizeRelativePath,
	pathExists,
	pruneThemeFolder,
	removeScreenshotsForWidthWithDifferentHeight,
} from './folder-pruning.mjs'
import { clampHeight, measureContentHeight } from './measurements.mjs'
import {
	loadComponentModel,
	persistComponentModels,
	recordWritebackMeasure,
} from './persistence.mjs'
import { performScenarioAction, stabilizeForScreenshot } from './playwright-actions.mjs'
import { getScenarioStateFolder } from './scenarios.mjs'
import { slugifyTheme } from './utils.mjs'
import { verifyScenarioCssRendering } from './verification.mjs'
import { applyWritebackQueue } from './writeback.mjs'

export async function executeCaptureWorkflow({
	themes,
	scenarios,
	routeToComponentFile,
	requestedWidth,
	routeFilter,
	stateFilter,
	skipExisting,
	writebackEnabled,
	dryRunWriteback,
	cssExtractionEnabled,
	verificationEnabled,
	verificationMaxDiffRatio,
}) {
	async function freshBrowser(initialHeight = DEFAULT_VIEWPORT.height) {
		const browser = await chromium.launch({ headless: true })
		const context = await browser.newContext({
			viewport: { width: requestedWidth, height: initialHeight },
			colorScheme: 'light',
		})
		const page = await context.newPage()
		return { browser, context, page }
	}

	const totalCapturesPlanned = themes.length * scenarios.length
	const componentCache = new Map()
	const writebackQueue = new Map()
	const cssAccumulator = createThemeCssAccumulator()

	let { browser, context, page } = await freshBrowser()
	const failed = []
	let savedCount = 0
	let skippedCount = 0
	let cssScenarioCount = 0
	let cssThemeCount = 0
	let verificationMatched = 0
	let verificationMismatched = 0
	let verificationSkipped = 0
	let verificationRan = 0
		const verificationMismatches = []
	const verificationStats = {
		ran: () => {
			verificationRan += 1
		},
		matched: () => {
			verificationMatched += 1
		},
		mismatched: () => {
			verificationMismatched += 1
		},
		skipped: () => {
			verificationSkipped += 1
		},
	}
	let processedScenarioIndex = 0
	let processedThemeIndex = 0
	let shotsSinceRestart = 0
	const scenarioSummary = new Map()
	const hasStateFilter = stateFilter instanceof Set && stateFilter.size > 0

	try {
		for (const themeName of themes) {
			processedThemeIndex += 1
			const themeSlug = slugifyTheme(themeName)
			let themeHasScenarioCss = false
			console.log(`Theme ${processedThemeIndex}/${themes.length}: ${themeSlug}`)

			const mappedFolders = new Set(
				scenarios.map((scenario) => {
					const routePath = scenario.route.replace(/^\//, '')
					const stateFolder = getScenarioStateFolder(scenario.state)
					return normalizeRelativePath(path.join(routePath, stateFolder))
				}),
			)
			const themeRootPath = path.join(ROOT, 'screenshots', themeSlug)

			if (hasStateFilter) {
				console.log(
					`Skipping folder pruning for ${themeSlug} because --state filter is active; preserving all existing state folders.`,
				)
			} else if (routeFilter) {
				let totalDeletedDirs = 0
				let totalDeletedFiles = 0
				const filteredRoutePaths = [
					...new Set(scenarios.map((scenario) => scenario.route.replace(/^\//, ''))),
				]

				for (const routePath of filteredRoutePaths) {
					const routeRootPath = path.join(themeRootPath, routePath)
					const mappedStatesForRoute = new Set(
						scenarios
							.filter((scenario) => scenario.route.replace(/^\//, '') === routePath)
							.map((scenario) => getScenarioStateFolder(scenario.state)),
					)
					const pruneResult = await pruneThemeFolder(routeRootPath, mappedStatesForRoute)
					totalDeletedDirs += pruneResult.deletedDirs
					totalDeletedFiles += pruneResult.deletedFiles
				}

				if (totalDeletedDirs > 0 || totalDeletedFiles > 0) {
					console.log(
						`Pruned ${themeSlug} (route-scoped): deleted ${totalDeletedDirs} folder(s), ${totalDeletedFiles} file(s) outside mapped state folders for selected routes.`,
					)
				}
			} else {
				const pruneResult = await pruneThemeFolder(themeRootPath, mappedFolders)
				if (pruneResult.deletedDirs > 0 || pruneResult.deletedFiles > 0) {
					console.log(
						`Pruned ${themeSlug}: deleted ${pruneResult.deletedDirs} folder(s), ${pruneResult.deletedFiles} file(s) outside mapped route/state folders.`,
					)
				}
			}

			for (const scenario of scenarios) {
				processedScenarioIndex += 1
				const route = scenario.route
				const componentFile = routeToComponentFile.get(route)
				if (!componentFile) {
					failed.push({
						theme: themeSlug,
						route,
						state: scenario.state,
						reason: 'Route component file not found from src/index.tsx imports',
					})
					continue
				}

				const routePath = route.replace(/^\//, '')
				const stateFolder = getScenarioStateFolder(scenario.state)

				const summaryKey = stateFolder
				if (!scenarioSummary.has(summaryKey)) {
					scenarioSummary.set(summaryKey, { saved: 0, skipped: 0, failed: 0 })
				}

				let captured = false
				for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_SCREENSHOT; attempt += 1) {
					try {
						const model = await loadComponentModel(componentFile, componentCache)
						const configured = resolveConfiguredHeight(
							model.directives,
							themeSlug,
							scenario.state,
							requestedWidth,
						)

						if (verificationEnabled) {
							if (configured.source !== 'directive' || configured.height == null) {
								throw new Error(
									`Missing @screenshot directive height for theme=${themeSlug} state=${stateFolder} width=${requestedWidth} in ${path.relative(ROOT, componentFile)}`,
								)
							}

							const measuredHeight = configured.height
							const outputPath = path.join(
								ROOT,
								'screenshots',
								themeSlug,
								routePath,
								stateFolder,
								`${requestedWidth}x${measuredHeight}.png`,
							)

							const verification = await runVerificationIfEnabled({
								verificationEnabled,
								verificationStats,
								verificationMismatches,
								browser,
								themeName,
								themeSlug,
								route,
								routePath,
								scenario,
								stateFolder,
								requestedWidth,
								measuredHeight,
								outputPath,
								verificationMaxDiffRatio,
							})
							skippedCount += 1
							scenarioSummary.get(summaryKey).skipped += 1
							captured = true
							console.log(
								`[${processedScenarioIndex}/${totalCapturesPlanned}] Skipped ${path.relative(ROOT, outputPath)} (${configured.source} -> measured ${measuredHeight})${getVerificationLogInfo(verification)}`,
							)
							break
						}

						const initialHeight = clampHeight(
							configured.height ?? DEFAULT_VIEWPORT.height,
						)
						await page.setViewportSize({
							width: requestedWidth,
							height: initialHeight,
						})

						const url = `${BASE_URL}${route}?theme=${encodeURIComponent(themeName)}`
						await page.goto(url, { waitUntil: 'load', timeout: 60000 })
						await delay(150)
						await performScenarioAction(page, scenario, themeSlug)
						await stabilizeForScreenshot(page)
						const measuredHeight = await measureContentHeight(page)
						await page.setViewportSize({
							width: requestedWidth,
							height: measuredHeight,
						})
						await stabilizeForScreenshot(page)
						await delay(80)

						const outputPath = path.join(
							ROOT,
							'screenshots',
							themeSlug,
							routePath,
							stateFolder,
							`${requestedWidth}x${measuredHeight}.png`,
						)

						if (cssExtractionEnabled) {
							const cssArtifacts = await extractScenarioCssArtifacts(page)
							await writeScenarioCssArtifact({
								themeSlug,
								routePath,
								stateFolder,
								scenarioRules: cssArtifacts.scenarioRules,
								globalRules: cssArtifacts.globalRules,
								hasFileInput: cssArtifacts.hasFileInput,
								accumulator: cssAccumulator,
							})
							themeHasScenarioCss = true
							cssScenarioCount += 1
						}

						recordWritebackMeasure(
							writebackQueue,
							componentFile,
							themeSlug,
							scenario.state,
							requestedWidth,
							measuredHeight,
						)

						const outputDir = path.dirname(outputPath)

						await mkdir(outputDir, { recursive: true })
						const deletedStaleCount =
							await removeScreenshotsForWidthWithDifferentHeight(
								outputDir,
								requestedWidth,
								measuredHeight,
							)
						if (deletedStaleCount > 0) {
							console.log(
								`Removed ${deletedStaleCount} stale screenshot(s) from ${path.relative(ROOT, outputDir)} for width ${requestedWidth}`,
							)
						}

						if (skipExisting && (await pathExists(outputPath))) {
							skippedCount += 1
							scenarioSummary.get(summaryKey).skipped += 1
							captured = true
							console.log(
								`[${processedScenarioIndex}/${totalCapturesPlanned}] Skipped ${path.relative(ROOT, outputPath)} (${configured.source} -> measured ${measuredHeight})`,
							)
							break
						}

						await page.screenshot({ path: outputPath, fullPage: false, timeout: 20000 })
						savedCount += 1
						scenarioSummary.get(summaryKey).saved += 1
						shotsSinceRestart += 1
						captured = true
						console.log(
							`[${processedScenarioIndex}/${totalCapturesPlanned}] Saved ${path.relative(ROOT, outputPath)} (${configured.source} -> measured ${measuredHeight})`,
						)
						break
					} catch (err) {
						const reason = err?.message
							? String(err.message).split('\n')[0]
							: String(err)
						if (attempt === MAX_ATTEMPTS_PER_SCREENSHOT) {
							console.error(
								`FAILED ${themeSlug} ${route} [${stateFolder}]: ${reason}`,
							)
							failed.push({ theme: themeSlug, route, state: scenario.state, reason })
							scenarioSummary.get(summaryKey).failed += 1
						}
						try {
							await context.close()
						} catch {
							// ignore
						}
						try {
							await browser.close()
						} catch {
							// ignore
						}
						;({ browser, context, page } = await freshBrowser())
						await delay(200)
					}
				}

				if (!captured) {
					continue
				}

				if (shotsSinceRestart >= RESTART_BROWSER_EVERY) {
					try {
						await context.close()
					} catch {
						// ignore
					}
					try {
						await browser.close()
					} catch {
						// ignore
					}
					;({ browser, context, page } = await freshBrowser())
					shotsSinceRestart = 0
				}
			}

			if (cssExtractionEnabled && themeHasScenarioCss) {
				// Write once per theme after all selected scenarios have contributed global rules.
				await writeThemeCssArtifact({ themeSlug, accumulator: cssAccumulator })
				cssThemeCount += 1
			}
		}
	} finally {
		try {
			await context.close()
		} catch {
			// ignore
		}
		try {
			await browser.close()
		} catch {
			// ignore
		}
	}

	if (cssExtractionEnabled) {
		console.log(
			`CSS extraction: scenario-files=${cssScenarioCount}, theme-files=${cssThemeCount}, writes=${cssAccumulator.writes}`,
		)
	}

	if (verificationEnabled) {
		console.log(
			`CSS verification: ran=${verificationRan}, matched=${verificationMatched}, mismatched=${verificationMismatched}, skipped=${verificationSkipped}, maxDiffRatio=${verificationMaxDiffRatio}`,
		)
		if (verificationMismatches.length > 0) {
			console.warn(`\nCSS verification mismatches (${verificationMismatches.length}):`)
			for (const m of verificationMismatches) {
				console.warn(`  ${path.relative(ROOT, m.outputPath)}: ${m.reason}`)
				if (m.verifyPath && m.diffPath) {
					console.warn(
						`    verify=${path.relative(ROOT, m.verifyPath)} diff=${path.relative(ROOT, m.diffPath)} ratio=${m.diffRatio.toFixed(6)} pixels=${m.diffPixels}/${m.totalPixels}`,
					)
				}
			}
		}
	}

	let writebackResults = []
	let modifiedFiles = []
	if (writebackEnabled) {
		writebackResults = await applyWritebackQueue(writebackQueue, componentCache)
		if (!dryRunWriteback) {
			modifiedFiles = await persistComponentModels(componentCache)
		}
	}

	console.log(`\nSummary: saved=${savedCount}, skipped=${skippedCount}, failed=${failed.length}`)
	for (const [stateName, values] of scenarioSummary.entries()) {
		console.log(
			`  state=${stateName} saved=${values.saved} skipped=${values.skipped} failed=${values.failed}`,
		)
	}

	if (writebackEnabled) {
		console.log(
			`Writeback: updates=${writebackResults.length}, files=${
				dryRunWriteback ? 'dry-run' : modifiedFiles.length
			}`,
		)
		if (!dryRunWriteback && modifiedFiles.length > 0) {
			for (const filePath of modifiedFiles) {
				console.log(`  updated ${path.relative(ROOT, filePath)}`)
			}
		}
	}

	if (failed.length > 0) {
		console.error(`\n${failed.length} capture(s) failed:`)
		for (const failure of failed) {
			const stateName = failure.state ?? 'static'
			console.error(`  [${failure.theme}] ${failure.route} (${stateName}): ${failure.reason}`)
		}
		process.exitCode = 1
	} else {
		console.log('\nAll captures completed successfully.')
	}
}

async function runVerificationIfEnabled({
	verificationEnabled,
	verificationStats,
	verificationMismatches,
	browser,
	themeName,
	themeSlug,
	route,
	routePath,
	scenario,
	stateFolder,
	requestedWidth,
	measuredHeight,
	outputPath,
	verificationMaxDiffRatio,
}) {
	if (!verificationEnabled) return null
	verificationStats.ran()

	const verification = await verifyScenarioCssRendering({
		browser,
		themeName,
		themeSlug,
		route,
		routePath,
		scenario,
		stateFolder,
		requestedWidth,
		measuredHeight,
		baselinePath: outputPath,
		maxDiffRatio: verificationMaxDiffRatio,
	})

	if (verification.skipped) {
		verificationStats.skipped()
		console.warn(
			`Verification skipped for ${path.relative(ROOT, outputPath)}: ${verification.reason}`,
		)
		return verification
	}

	if (verification.matched) {
		verificationStats.matched()
		return verification
	}

	verificationStats.mismatched()
	verificationMismatches.push({
		outputPath,
		diffRatio: verification.diffRatio,
		diffPixels: verification.diffPixels,
		totalPixels: verification.totalPixels,
		verifyPath: verification.verifyPath,
		diffPath: verification.diffPath,
		reason: verification.reason,
	})

	return verification
}

function getVerificationLogInfo(verification) {
	return verification
		? ` css ${
				verification.matched
					? `OK ${verification.diffRatio.toFixed(6)} - ${verification.diffPixels}/${verification.totalPixels}`
					: verification.skipped
						? '-'
						: `MISMATCH ratio=${verification.diffRatio.toFixed(6)} pixels=${verification.diffPixels}/${verification.totalPixels}`
			}`
		: ''
}
