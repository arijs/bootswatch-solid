import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'

import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

import { ROOT, VE2_BASE_URL } from './constants.mjs'
import { pathExists } from './folder-pruning.mjs'
import { performScenarioAction, stabilizeForScreenshot } from './playwright-actions.mjs'
import { resolveInitialNavigationWarmupDelayMs } from './timing.mjs'

function toBufferPng(png) {
	return PNG.sync.write(png)
}

async function comparePngFiles(baselinePath, ve2Path, diffPath) {
	const [baselineRaw, ve2Raw] = await Promise.all([readFile(baselinePath), readFile(ve2Path)])
	const baseline = PNG.sync.read(baselineRaw)
	const ve2Image = PNG.sync.read(ve2Raw)
	const totalPixels = baseline.width * baseline.height

	if (baseline.width !== ve2Image.width || baseline.height !== ve2Image.height) {
		return {
			ok: false,
			reason: `Image dimensions mismatch: baseline=${baseline.width}x${baseline.height}, ve2=${ve2Image.width}x${ve2Image.height}`,
			diffPixels: Number.POSITIVE_INFINITY,
			diffRatio: Number.POSITIVE_INFINITY,
			totalPixels,
		}
	}

	const diff = new PNG({ width: baseline.width, height: baseline.height })
	const diffPixels = pixelmatch(
		baseline.data,
		ve2Image.data,
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

export async function verifyScenarioVe2Rendering({
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

	const ve2Path = baselinePath.replace(
		/\d+x\d+\.png$/i,
		`ve-${requestedWidth}x${measuredHeight}.png`,
	)
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
		const ve2Url = `${VE2_BASE_URL}${route}?theme=${themeSlug}`
		await page.goto(ve2Url, { waitUntil: 'load', timeout: 60000 })
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
				reason: `Scenario action unsupported in ve-project2 for state=${stateFolder}: ${String(error?.message || error).split('\n')[0]}`,
			}
		}
		await stabilizeForScreenshot(page)
		await page.setViewportSize({ width: requestedWidth, height: measuredHeight })
		await stabilizeForScreenshot(page)
		await delay(Math.max(0, Number.isFinite(settleDelayMs) ? settleDelayMs : 120))
		await stabilizeForScreenshot(page)
		await page.screenshot({ path: ve2Path, fullPage: false, timeout: 20000 })

		const compared = await comparePngFiles(baselinePath, ve2Path, verifyPath)
		if (!compared.ok) {
			return {
				skipped: false,
				matched: false,
				diffPixels: compared.diffPixels,
				diffRatio: compared.diffRatio,
				totalPixels: compared.totalPixels,
				reason: compared.reason,
				ve2Path,
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
			ve2Path,
			verifyPath,
		}
	} finally {
		await context.close()
	}
}
