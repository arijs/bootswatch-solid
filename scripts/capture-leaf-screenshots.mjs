import { readFile } from 'node:fs/promises'
import path from 'node:path'
import micromatch from 'micromatch'
import { parseCaptureCli } from './capture-leaf-screenshots/cli.mjs'
import { reportVeRuntimeCoverageGaps } from './capture-leaf-screenshots/ve-runtime-coverage.mjs'
import {
	BASE_URL,
	INDEX_FILE,
	THEMES_FILE,
	VE_BASE_URL,
	VE_INDEX_FILE,
	VE2_BASE_URL,
	VE2_INDEX_FILE,
} from './capture-leaf-screenshots/constants.mjs'
import {
	getLeafRoutes,
	parseRoutesAndComponents,
	parseThemeNames,
} from './capture-leaf-screenshots/discovery.mjs'
import {
	assertBuildOutputExists,
	assertVeBuildOutputExists,
	assertVe2BuildOutputExists,
	buildProject,
	buildVeProject,
	buildVe2Project,
	startPreviewServer,
	startVePreviewServer,
	startVe2PreviewServer,
	stopServer,
	waitForServer,
} from './capture-leaf-screenshots/preview-server.mjs'
import {
	assertCuratedScenarioRoutes,
	createScenarioCatalog,
	filterScenarios,
	filterThemes,
} from './capture-leaf-screenshots/scenarios.mjs'
import { executeCaptureWorkflow } from './capture-leaf-screenshots/workflow.mjs'

const {
	skipExisting,
	buildBeforeCapture,
	writebackEnabled,
	dryRunWriteback,
	cssExtractionEnabled,
	verificationEnabled,
	ve1VerificationEnabled,
	veVerificationEnabled,
	ve1MissingOnly,
	veMissingOnly,
	ve1RuntimeMissingOnly,
	ve1RuntimeMissingLeafs,
	verificationMaxDiffRatio,
	strictScenarioAssert,
	routeFilter,
	themeFilter,
	stateFilter,
	maxThemes,
	maxThemesSpecified,
	requestedWidth,
} = parseCaptureCli()

async function main() {
	const indexSource = await readFile(INDEX_FILE, 'utf8')
	const themeSource = ve1MissingOnly || veMissingOnly ? null : await readFile(THEMES_FILE, 'utf8')
	const ve1IndexSource = ve1VerificationEnabled ? await readFile(VE_INDEX_FILE, 'utf8') : null
	const ve2IndexSource = veVerificationEnabled ? await readFile(VE2_INDEX_FILE, 'utf8') : null

	const { routes, routeToComponentFile } = parseRoutesAndComponents(indexSource, INDEX_FILE)
	const leafRoutes = getLeafRoutes(routes)
	const ve1LeafRoutes = ve1IndexSource
		? getLeafRoutes(parseRoutesAndComponents(ve1IndexSource, VE_INDEX_FILE).routes)
		: []
	const ve2LeafRoutes = ve2IndexSource
		? getLeafRoutes(parseRoutesAndComponents(ve2IndexSource, VE2_INDEX_FILE).routes)
		: []
	const ve1RouteSet = new Set(ve1LeafRoutes)
	const ve2RouteSet = new Set(ve2LeafRoutes)
	assertCuratedScenarioRoutes(leafRoutes, strictScenarioAssert)

	if (leafRoutes.length === 0) {
		throw new Error('No leaf routes found in src/index.tsx for /contents, /forms, /ui')
	}

	const unresolvedRoutes = leafRoutes.filter((route) => !routeToComponentFile.has(route))
	if (unresolvedRoutes.length > 0) {
		console.warn(`Warning: ${unresolvedRoutes.length} leaf route(s) missing component mapping.`)
	}

	if (ve1MissingOnly) {
		const routePatterns = routeFilter ? [...routeFilter] : null
		const selectedLeafRoutes = routePatterns
			? leafRoutes.filter((route) => micromatch.isMatch(route, routePatterns))
			: leafRoutes
		if (selectedLeafRoutes.length === 0) {
			throw new Error('No leaf routes selected for --ve1-missing-only after applying --route filters.')
		}

		const missingRoutes = selectedLeafRoutes.filter((route) => !ve1RouteSet.has(route))
		const convertedCount = selectedLeafRoutes.length - missingRoutes.length

		console.log('Mode: VE1 missing-only enabled (--ve1-missing-only).')
		console.log(`Selected leaf routes: ${selectedLeafRoutes.length}.`)
		console.log(`VE1 migration status: converted=${convertedCount}, missing=${missingRoutes.length}.`)

		if (missingRoutes.length === 0) {
			console.log('All selected leaf routes are already migrated to VE1.')
			return
		}

		console.warn(`\nComponents still missing VE1 migration (${missingRoutes.length}):`)
		for (const route of missingRoutes) {
			const componentFile = routeToComponentFile.get(route)
			const componentRef = componentFile
				? path.relative(process.cwd(), componentFile)
				: '[component-file-unresolved]'
			console.warn(`  ${route} -> ${componentRef}`)
		}
		return
	}

	if (veMissingOnly) {
		const routePatterns = routeFilter ? [...routeFilter] : null
		const selectedLeafRoutes = routePatterns
			? leafRoutes.filter((route) => micromatch.isMatch(route, routePatterns))
			: leafRoutes
		if (selectedLeafRoutes.length === 0) {
			throw new Error('No leaf routes selected for --ve-missing-only after applying --route filters.')
		}

		const missingRoutes = selectedLeafRoutes.filter((route) => !ve2RouteSet.has(route))
		const convertedCount = selectedLeafRoutes.length - missingRoutes.length

		console.log('Mode: VE missing-only enabled (--ve-missing-only).')
		console.log(`Selected leaf routes: ${selectedLeafRoutes.length}.`)
		console.log(`VE migration status: converted=${convertedCount}, missing=${missingRoutes.length}.`)

		if (missingRoutes.length === 0) {
			console.log('All selected leaf routes are already migrated to VE (ve-project2).')
			return
		}

		console.warn(`\nComponents still missing VE migration in ve-project2 (${missingRoutes.length}):`)
		for (const route of missingRoutes) {
			const componentFile = routeToComponentFile.get(route)
			const componentRef = componentFile
				? path.relative(process.cwd(), componentFile)
				: '[component-file-unresolved]'
			console.warn(`  ${route} -> ${componentRef}`)
		}
		return
	}

	if (ve1RuntimeMissingOnly) {
		if (!themeSource) {
			throw new Error('Theme source unavailable for --ve1-runtime-missing-only mode.')
		}

		const routePatterns = routeFilter ? [...routeFilter] : null
		const selectedLeafRoutes = routePatterns
			? leafRoutes.filter((route) => micromatch.isMatch(route, routePatterns))
			: leafRoutes
		if (selectedLeafRoutes.length === 0) {
			throw new Error(
				'No leaf routes selected for --ve1-runtime-missing-only after applying --route filters.',
			)
		}

		const themeNames = parseThemeNames(themeSource)
		let selectedThemes = filterThemes(themeNames, themeFilter)
		const themesBeforeLimit = selectedThemes.length
		if (maxThemesSpecified) {
			selectedThemes = selectedThemes.slice(0, maxThemes)
		}

		if (selectedThemes.length === 0) {
			throw new Error('No themes selected for --ve1-runtime-missing-only after applying filters.')
		}

		reportVeRuntimeCoverageGaps({
			selectedLeafRoutes,
			selectedThemes,
			themesBeforeLimit,
			maxThemes,
			maxThemesSpecified,
			includeLeafRoutes: ve1RuntimeMissingLeafs,
		})
		return
	}

	const themeNames = parseThemeNames(themeSource)
	let themes = filterThemes(themeNames, themeFilter)
	const scenarios = filterScenarios(createScenarioCatalog(leafRoutes), routeFilter, stateFilter)

	// Apply max-themes limit for safety
	const themesBeforeLimit = themes.length
	themes = themes.slice(0, maxThemes)

	const totalCapturesPlanned = themes.length * scenarios.length

	if (themes.length === 0) {
		throw new Error('No themes selected after filter')
	}
	if (scenarios.length === 0) {
		throw new Error('No scenarios selected after filter')
	}

	console.log(`Found ${leafRoutes.length} leaf routes across target sections.`)
	console.log(
		`Found ${themes.length} themes${themesBeforeLimit > themes.length ? ` (limited to ${maxThemes} of ${themesBeforeLimit})` : ''}.`,
	)
	console.log(`Planned scenarios per theme: ${scenarios.length}`)
	console.log(`Total captures planned: ${totalCapturesPlanned}`)
	console.log(`Mode: max-themes=${maxThemes}.`)
	if (skipExisting) {
		console.log('Mode: skipping screenshots that already exist (--skip-existing).')
	}
	if (!writebackEnabled) {
		console.log('Mode: writeback disabled (--no-writeback).')
	}
	if (dryRunWriteback) {
		console.log('Mode: dry-run writeback enabled (--dry-run-writeback).')
	}
	if (!cssExtractionEnabled) {
		console.log('Mode: CSS extraction disabled (--no-css-extraction).')
	}
	if (ve1VerificationEnabled) {
		console.log(
			`Mode: VE1 verification enabled (--verify-ve1-rendering, maxDiffRatio=${verificationMaxDiffRatio}).`,
		)
		console.log(`Mode: VE1 route coverage available for ${ve1LeafRoutes.length} leaf route(s).`)
	}
	if (veVerificationEnabled) {
		console.log(
			`Mode: VE verification enabled (--verify-ve-rendering, maxDiffRatio=${verificationMaxDiffRatio}).`,
		)
		const ve2Routes = ve2IndexSource
			? getLeafRoutes(parseRoutesAndComponents(ve2IndexSource, VE2_INDEX_FILE).routes)
			: []
		console.log(`Mode: VE route coverage available for ${ve2Routes.length} leaf route(s).`)
	}
	if (strictScenarioAssert) {
		console.log('Mode: strict scenario assertions enabled (--strict-scenarios).')
	}
	// Verification always requires a fresh build to ensure CSS files are up-to-date
	if (verificationEnabled) {
		console.log(
			`Mode: CSS verification enabled (--verify-css-rendering, maxDiffRatio=${verificationMaxDiffRatio}).`,
		)
		console.log('Mode: Forcing rebuild to ensure CSS artifacts are current.')
		buildProject()
	} else if (ve1VerificationEnabled) {
		console.log('Mode: Forcing VE1 rebuild to ensure Vanilla Extract artifacts are current.')
		buildVeProject()
		assertVeBuildOutputExists()
	} else if (veVerificationEnabled) {
		console.log('Mode: Forcing VE rebuild to ensure Vanilla Extract artifacts are current.')
		buildVe2Project()
		assertVe2BuildOutputExists()
	} else if (buildBeforeCapture) {
		console.log('Mode: build enabled (--build).')
		console.log('Building project for screenshot capture...')
		buildProject()
	} else {
		console.log('Mode: reusing existing build output (default).')
		assertBuildOutputExists()
	}

	let previewServer = null
	let ve1PreviewServer = null
	let ve2PreviewServer = null

	if (ve1VerificationEnabled) {
		console.log('Mode: using VE1 Vite preview server for screenshot verification.')
		ve1PreviewServer = startVePreviewServer()
	} else if (veVerificationEnabled) {
		console.log('Mode: using VE Vite preview server for screenshot verification.')
		ve2PreviewServer = startVe2PreviewServer()
	} else {
		console.log('Mode: using Vite preview server for screenshot capture.')
		previewServer = startPreviewServer()
	}

	// Derive VE2 route set for use in workflow (already computed above)

	try {
		if (ve1VerificationEnabled) {
			await waitForServer(VE_BASE_URL)
		} else if (veVerificationEnabled) {
			await waitForServer(VE2_BASE_URL)
		} else {
			await waitForServer(BASE_URL)
		}
		await executeCaptureWorkflow({
			themes,
			scenarios,
			ve1RouteSet,
			ve2RouteSet,
			routeToComponentFile,
			requestedWidth,
			routeFilter,
			stateFilter,
			skipExisting,
			writebackEnabled,
			dryRunWriteback,
			cssExtractionEnabled,
			verificationEnabled,
			ve1VerificationEnabled,
			veVerificationEnabled,
			verificationMaxDiffRatio,
		})
	} finally {
		await Promise.all([
			stopServer(previewServer),
			stopServer(ve1PreviewServer),
			stopServer(ve2PreviewServer),
		])
	}
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
