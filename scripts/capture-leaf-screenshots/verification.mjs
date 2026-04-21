import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { setTimeout as delay } from 'node:timers/promises'

import pixelmatch from 'pixelmatch'
import { PNG } from 'pngjs'

import { BASE_URL, ROOT } from './constants.mjs'
import { pathExists } from './folder-pruning.mjs'
import { performScenarioAction } from './playwright-actions.mjs'

function toBufferPng(png) {
	return PNG.sync.write(png)
}

async function comparePngFiles(baselinePath, verifyPath, diffPath) {
	const [baselineRaw, verifyRaw] = await Promise.all([
		readFile(baselinePath),
		readFile(verifyPath),
	])
	const baseline = PNG.sync.read(baselineRaw)
	const verify = PNG.sync.read(verifyRaw)
	const totalPixels = baseline.width * baseline.height

	if (baseline.width !== verify.width || baseline.height !== verify.height) {
		return {
			ok: false,
			reason: `Image dimensions mismatch: baseline=${baseline.width}x${baseline.height}, verify=${verify.width}x${verify.height}`,
			diffPixels: Number.POSITIVE_INFINITY,
			diffRatio: Number.POSITIVE_INFINITY,
			totalPixels,
		}
	}

	const diff = new PNG({ width: baseline.width, height: baseline.height })
	const diffPixels = pixelmatch(
		baseline.data,
		verify.data,
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

export async function verifyScenarioCssRendering({
	browser,
	themeName,
	themeSlug,
	route,
	routePath,
	scenario,
	stateFolder,
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

	const themeCssPath = path.join(ROOT, 'screenshots', themeSlug, 'theme.css')
	const scenarioCssPath = path.join(
		ROOT,
		'screenshots',
		themeSlug,
		routePath,
		stateFolder,
		'style.css',
	)

	if (!(await pathExists(themeCssPath))) {
		return {
			skipped: true,
			matched: false,
			diffPixels: 0,
			diffRatio: 0,
			reason: `Global CSS file not found: ${path.relative(ROOT, themeCssPath)}`,
		}
	}
	if (!(await pathExists(scenarioCssPath))) {
		return {
			skipped: true,
			matched: false,
			diffPixels: 0,
			diffRatio: 0,
			reason: `Scenario CSS file not found: ${path.relative(ROOT, scenarioCssPath)}`,
		}
	}

	const verifyPath = baselinePath.replace(/\.png$/i, '.verify.png')
	const diffPath = baselinePath.replace(/\.png$/i, '.verify.diff.png')

	const context = await browser.newContext({
		viewport: { width: requestedWidth, height: measuredHeight },
		colorScheme: 'light',
	})
	const page = await context.newPage()

	try {
		const localUrl = `${BASE_URL}${route}?theme=${encodeURIComponent(themeName)}&css=local&state=${encodeURIComponent(stateFolder)}`
		await page.goto(localUrl, { waitUntil: 'load', timeout: 60000 })
		await delay(150)
		await page.evaluate(() => document.getAnimations().forEach(a => a.pause()))
		await performScenarioAction(page, scenario, themeSlug)
		await page.setViewportSize({ width: requestedWidth, height: measuredHeight })
		await delay(120)
		await page.screenshot({ path: verifyPath, fullPage: false, timeout: 20000 })

		const compared = await comparePngFiles(baselinePath, verifyPath, diffPath)
		if (!compared.ok) {
			return {
				skipped: false,
				matched: false,
				diffPixels: compared.diffPixels,
				diffRatio: compared.diffRatio,
				totalPixels: compared.totalPixels,
				reason: compared.reason,
				verifyPath,
				diffPath,
			}
		}

		const matched = compared.diffRatio <= maxDiffRatio
		return {
			skipped: false,
			matched,
			diffPixels: compared.diffPixels,
			diffRatio: compared.diffRatio,
			totalPixels: compared.totalPixels,
			reason: matched ? null : `Diff ratio ${compared.diffRatio.toFixed(6)} exceeds max ${maxDiffRatio.toFixed(6)}`,
			verifyPath,
			diffPath,
		}
	} finally {
		await context.close()
	}
}
