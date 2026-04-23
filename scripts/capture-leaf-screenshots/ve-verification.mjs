import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'

import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

import { ROOT, VE_BASE_URL } from './constants.mjs'
import { pathExists } from './folder-pruning.mjs'
import { performScenarioAction, stabilizeForScreenshot } from './playwright-actions.mjs'
import { resolveInitialNavigationWarmupDelayMs } from './timing.mjs'

function toBufferPng(png) {
	return PNG.sync.write(png)
}

async function comparePngFiles(baselinePath, vePath, diffPath) {
	const [baselineRaw, veRaw] = await Promise.all([readFile(baselinePath), readFile(vePath)])
	const baseline = PNG.sync.read(baselineRaw)
	const veImage = PNG.sync.read(veRaw)
	const totalPixels = baseline.width * baseline.height

	if (baseline.width !== veImage.width || baseline.height !== veImage.height) {
		return {
			ok: false,
			reason: `Image dimensions mismatch: baseline=${baseline.width}x${baseline.height}, ve=${veImage.width}x${veImage.height}`,
			diffPixels: Number.POSITIVE_INFINITY,
			diffRatio: Number.POSITIVE_INFINITY,
			totalPixels,
		}
	}

	const diff = new PNG({ width: baseline.width, height: baseline.height })
	const diffPixels = pixelmatch(
		baseline.data,
		veImage.data,
		diff.data,
		baseline.width,
		baseline.height,
		{ threshold: 0.1 },
	)
	const diffRatio = totalPixels > 0 ? diffPixels / totalPixels : 1
	await writeFile(diffPath, toBufferPng(diff))

	return {
		ok: true,
		diffPixels,
		diffRatio,
		totalPixels,
		reason: null,
	}
}

export async function verifyScenarioVeRendering({
	browser,
	themeSlug,
	route,
	stateFolder,
	scenario,
	settleDelayMs,
	requestedWidth,
	measuredHeight,
	baselinePath,
	maxDiffRatio,
}) {
	if (!(await pathExists(baselinePath))) {
		return {
			skipped: true,
			matched: false,
			diffPixels: 0,
			diffRatio: 0,
			reason: `Baseline screenshot not found: ${path.relative(ROOT, baselinePath)}`,
		}
	}

	const vePath = baselinePath.replace(/\d+x\d+\.png$/i, `ve-${requestedWidth}x${measuredHeight}.png`)
	const verifyPath = baselinePath.replace(
		/\d+x\d+\.png$/i,
		`ve-${requestedWidth}x${measuredHeight}.verify.png`,
	)

	const context = await browser.newContext({
		viewport: { width: requestedWidth, height: measuredHeight },
		colorScheme: 'light',
	})
	const page = await context.newPage()

	try {
		const veUrl = `${VE_BASE_URL}${route}`
		await page.goto(veUrl, { waitUntil: 'load', timeout: 60000 })
		await delay(150)
		const warmupDelayMs = resolveInitialNavigationWarmupDelayMs({
			themeSlug,
			route,
			stateFolder,
		})
		if (warmupDelayMs > 0) {
			await stabilizeForScreenshot(page)
			await delay(warmupDelayMs)
		}
		try {
			await performScenarioAction(page, scenario, themeSlug)
		} catch (error) {
			return {
				skipped: true,
				matched: false,
				diffPixels: 0,
				diffRatio: 0,
				reason: `Scenario action unsupported in ve-project for state=${stateFolder}: ${String(error?.message || error).split('\n')[0]}`,
			}
		}
		await stabilizeForScreenshot(page)
		await page.setViewportSize({ width: requestedWidth, height: measuredHeight })
		await stabilizeForScreenshot(page)
		await delay(Math.max(0, Number.isFinite(settleDelayMs) ? settleDelayMs : 120))
		await stabilizeForScreenshot(page)
		await page.screenshot({ path: vePath, fullPage: false, timeout: 20000 })

		const compared = await comparePngFiles(baselinePath, vePath, verifyPath)
		if (!compared.ok) {
			return {
				skipped: false,
				matched: false,
				diffPixels: compared.diffPixels,
				diffRatio: compared.diffRatio,
				totalPixels: compared.totalPixels,
				reason: compared.reason,
				vePath,
				verifyPath,
			}
		}

		const matched = compared.diffRatio <= maxDiffRatio
		return {
			skipped: false,
			matched,
			diffPixels: compared.diffPixels,
			diffRatio: compared.diffRatio,
			totalPixels: compared.totalPixels,
			reason: matched
				? null
				: `Diff ratio ${compared.diffRatio.toFixed(6)} exceeds max ${maxDiffRatio.toFixed(6)}`,
			vePath,
			verifyPath,
		}
	} finally {
		await context.close()
	}
}
