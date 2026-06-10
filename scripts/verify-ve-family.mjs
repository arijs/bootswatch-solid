#!/usr/bin/env node
/**
 * Run VE2 verification for one theme + one style family (or all families in order).
 *
 * Usage:
 *   node scripts/verify-ve-family.mjs --theme=bootstrap --family=ui/card
 *   node scripts/verify-ve-family.mjs --theme=bootstrap --all-families
 *   node scripts/verify-ve-family.mjs --theme=bootstrap --all-families --threshold=0.1
 */
import { readFileSync, appendFileSync, mkdirSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import path from 'node:path'

import { EMIT_FAMILIES } from './generate-ve-theme/constants.mjs'
import { getFamiliesForRoute } from './generate-ve-theme/route-families.mjs'

const ROOT = process.cwd()
const VE2_INDEX = path.join(ROOT, 've-project2', 'src', 'index.tsx')
const RUN_DIR =
	process.argv.find((a) => a.startsWith('--run-dir='))?.split('=')[1] ??
	'docs/ve-theme-generator-validation/family-audit'

function parseArg(name, fallback = null) {
	const hit = process.argv.find((a) => a.startsWith(`--${name}=`))
	return hit ? hit.slice(name.length + 3) : fallback
}

function hasFlag(name) {
	return process.argv.includes(`--${name}`)
}

function getLeafRoutes() {
	const source = readFileSync(VE2_INDEX, 'utf8')
	const routes = []
	for (const m of source.matchAll(/<Route\s+path="([^"]+)"\s+component=\{/g)) {
		const route = m[1]
		if (route === '/' || route.startsWith('/poc')) continue
		routes.push(route)
	}
	return [...new Set(routes)].sort()
}

/** Micromatch route pattern when a family has many leaf routes. */
const FAMILY_ROUTE_GLOB = {
	'contents/basic': '/contents/typography/{blockquote,lead,text-elements}',
	'contents/heading': '/contents/typography/heading',
	'contents/display': '/contents/typography/display',
	'contents/lists': '/contents/typography/{inline-list,unstyled-list}',
	'contents/tables': '/contents/tables/**',
	'contents/images': '/contents/{images,figures}/**',
	forms: '/forms/**',
	'ui/accordion': '/ui/accordion/**',
	'ui/alerts': '/ui/alerts/**',
	'ui/badge': '/ui/badge/**',
	'ui/breadcrumb': '/ui/breadcrumb/**',
	'ui/button-group': '/ui/button-group/**',
	'ui/buttons': '/ui/buttons/**',
	'ui/card': '/ui/card/**',
	'ui/card-tabs': '/ui/card-tabs/**',
	'ui/carousel': '/ui/carousel/**',
	'ui/dropdowns': '/ui/dropdowns/**',
	'ui/list-group': '/ui/list-group/**',
	'ui/modal': '/ui/modal/**',
	'ui/navbar': '/ui/navbar/**',
	'ui/navs': '/ui/navs/**',
	'ui/pagination': '/ui/pagination/**',
	'ui/popovers': '/ui/popovers/**',
	'ui/progress': '/ui/progress/**',
	'ui/scrollspy': '/ui/scrollspy/**',
	'ui/spinners': '/ui/spinners/**',
	'ui/toasts': '/ui/toasts/**',
	'ui/tooltips': '/ui/tooltips/**',
}

function routesForFamily(family, leafRoutes) {
	if (family === 'utilities') {
		return []
	}
	if (family === 'contents/basic') {
		return leafRoutes.filter(
			(route) =>
				route.startsWith('/contents/typography/') &&
				!route.endsWith('/heading') &&
				route !== '/contents/typography/display' &&
				!route.endsWith('/inline-list') &&
				!route.endsWith('/unstyled-list'),
		)
	}
	return leafRoutes.filter((route) => {
		const families = getFamiliesForRoute(route)
		return families.includes(family)
	})
}

function routeFilterArg(family, leafRoutes) {
	const glob = FAMILY_ROUTE_GLOB[family]
	if (glob) return glob
	const routes = routesForFamily(family, leafRoutes)
	return routes.length > 0 ? routes.join(',') : null
}

function parseVerificationLog(text) {
	const summary = text.match(
		/VE verification: ran=(\d+), matched=(\d+), mismatched=(\d+), skipped=(\d+)/,
	)
	const mismatches = []
	for (const line of text.split('\n')) {
		const ok = line.match(
			/Skipped screenshots\\(.+?) \(directive.*verification OK ([0-9.]+) - (\d+)\/(\d+)/,
		)
		if (ok) {
			mismatches.push({
				path: ok[1].replace(/\\/g, '/'),
				ratio: parseFloat(ok[2]),
				diffPixels: parseInt(ok[3], 10),
				totalPixels: parseInt(ok[4], 10),
				matched: true,
			})
			continue
		}
		const bad = line.match(
			/Skipped screenshots\\(.+?) \(directive.*MISMATCH ratio=([0-9.]+) pixels=(\d+)\/(\d+)/,
		)
		if (bad) {
			mismatches.push({
				path: bad[1].replace(/\\/g, '/'),
				ratio: parseFloat(bad[2]),
				diffPixels: parseInt(bad[3], 10),
				totalPixels: parseInt(bad[4], 10),
				matched: false,
			})
		}
	}
	return {
		ran: summary ? parseInt(summary[1], 10) : 0,
		matched: summary ? parseInt(summary[2], 10) : 0,
		mismatched: summary ? parseInt(summary[3], 10) : 0,
		skipped: summary ? parseInt(summary[4], 10) : 0,
		scenarios: mismatches,
	}
}

function runFamilyVerification(theme, family, routeArg, logPath) {
	if (!routeArg) {
		return { theme, family, ran: 0, matched: 0, mismatched: 0, skipped: 0, scenarios: [], noRoutes: true }
	}

	const styleLoader = parseArg('style-loader', 'theme')
	const args = [
		'scripts/capture-leaf-screenshots.mjs',
		`--theme=${theme}`,
		'--verify-ve-rendering',
		'--skip-existing',
		`--route=${routeArg}`,
		`--style-loader=${styleLoader}`,
	]

	const result = spawnSync('node', args, {
		cwd: ROOT,
		encoding: 'utf8',
		maxBuffer: 64 * 1024 * 1024,
	})

	const output = `${result.stdout ?? ''}${result.stderr ?? ''}`
	mkdirSync(path.dirname(logPath), { recursive: true })
	appendFileSync(logPath, `\n\n=== ${theme} / ${family} (${routeArg}) ===\n${output}\n`)

	const parsed = parseVerificationLog(output)
	return { theme, family, ...parsed, exitCode: result.status ?? 1 }
}

function printFamilyReport(result, threshold) {
	const { theme, family, ran, matched, mismatched, skipped, scenarios, noRoutes } = result
	if (noRoutes) {
		console.log(`${theme}/${family}: (no dedicated routes — skip)`)
		return { needsWork: false }
	}

	const failures = scenarios.filter((s) => !s.matched)
	const worst = [...failures].sort((a, b) => b.ratio - a.ratio)[0]
	const overThreshold = failures.filter((s) => s.ratio > threshold)

	console.log(
		`${theme}/${family}: ran=${ran} matched=${matched} mismatched=${mismatched} skipped=${skipped}` +
			(worst ? ` worst=${worst.ratio.toFixed(4)} (${worst.path})` : ''),
	)

	if (overThreshold.length > 0) {
		console.log(`  > threshold ${threshold}: ${overThreshold.length} scenario(s)`)
		for (const s of overThreshold.slice(0, 5)) {
			console.log(`    ${s.ratio.toFixed(4)}  ${s.path}`)
		}
	}

	return { needsWork: overThreshold.length > 0, overThreshold, worst }
}

async function main() {
	const theme = parseArg('theme', 'bootstrap')
	const family = parseArg('family')
	const allFamilies = hasFlag('all-families')
	const threshold = parseFloat(parseArg('threshold', '0.001'))
	const logPath = path.join(RUN_DIR, `verify-${theme}-families.log`)

	mkdirSync(RUN_DIR, { recursive: true })

	const leafRoutes = getLeafRoutes()
	const families = allFamilies ? EMIT_FAMILIES : family ? [family] : []

	if (families.length === 0) {
		console.error('Provide --family=X or --all-families')
		process.exit(1)
	}

	console.log(`VE family audit: theme=${theme} families=${families.length} threshold=${threshold}`)
	console.log(`Log: ${logPath}\n`)

	const needsWork = []

	for (const fam of families) {
		const routeArg = routeFilterArg(fam, leafRoutes)
		const result = runFamilyVerification(theme, fam, routeArg, logPath)
		const report = printFamilyReport(result, threshold)
		if (report.needsWork) {
			needsWork.push({ family: fam, ...report })
		}
	}

	console.log('\n--- Summary ---')
	console.log(`Families needing work (ratio > ${threshold}): ${needsWork.length}`)
	for (const item of needsWork.sort((a, b) => (b.worst?.ratio ?? 0) - (a.worst?.ratio ?? 0))) {
		console.log(
			`  ${item.family.padEnd(22)} worst=${item.worst.ratio.toFixed(4)}  n>${threshold}=${item.overThreshold.length}`,
		)
	}

	process.exit(needsWork.length > 0 ? 2 : 0)
}

main()
