#!/usr/bin/env node
/**
 * G4 — Granular family closure check.
 *
 * The literal monolith cannot under-load: every rule is always present. Granular
 * loading introduces one new failure mode — a route renders an element whose
 * matching rule lives in a family the route never requested. This check proves,
 * statically and deterministically, that no such gap exists BEFORE any screenshot
 * runs (the pixel gate is G5).
 *
 * For every route (from index.tsx) it simulates exactly what Ve2GranularShell
 * loads at runtime:
 *
 *   loaded(route) = {global}                              (always-on baseline)
 *                 ∪ getVe2RouteStyleLoadPlan(route)       (route-driven preload)
 *                 ∪ component ve2RequiredStyleFamilies    (demand signal, incl.
 *                                                          composed sibling examples)
 *
 * Then for each rendered VE DOM capture of that route it extracts every stamped
 * contract symbol, maps it to its family via the G1 table, and asserts the family
 * is in loaded(route). Any family stamped-but-not-loaded is a closure gap — a
 * missing `ve2RequiredStyleFamilies` / route-plan entry — reported per route.
 *
 *   node scripts/generate-ve-literal/family-closure-check.mjs [--family=<f>] [--verbose]
 *
 * Exit 0 when the closure report is empty, 2 otherwise.
 */
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { getVe2RouteStyleLoadPlan } from '../../ve-project2/src/theme-runtime/route-style-families.ts'
import { buildFamilyTable } from './family-table.mjs'

const ROOT = process.cwd()
const VE2_SRC = path.join(ROOT, 've-project2', 'src')
const INDEX = path.join(VE2_SRC, 'index.tsx')
// Demo markup is theme-independent, so one theme's 433 captures cover the full
// stamped-symbol set (same convention as utilities-rendered-check.mjs).
const DIST = path.join(ROOT, 'dist', 'theme', 'bootstrap')

// {moduleId}_{symbol}__{hash} → symbol (inlined from markup-class-parity.mjs).
function extractVeSymbol(veClass) {
	const sepIdx = veClass.lastIndexOf('__')
	if (sepIdx === -1) return null
	const beforeHash = veClass.slice(0, sepIdx)
	const lastUnderscore = beforeHash.lastIndexOf('_')
	if (lastUnderscore === -1) return beforeHash
	return beforeHash.slice(lastUnderscore + 1) || null
}

// ─── index.tsx: route → component file ───────────────────────────────────────

async function buildRouteComponentMap() {
	const src = await readFile(INDEX, 'utf8')
	const imports = new Map() // ComponentName → absolute .tsx path
	for (const m of src.matchAll(/^import\s+([A-Z][A-Za-z0-9]*)\s+from\s+'(\.[^']+)'/gm)) {
		imports.set(m[1], `${path.resolve(VE2_SRC, m[2])}.tsx`)
	}
	const routes = new Map() // route → ComponentName
	for (const m of src.matchAll(/<Route\s+path="([^"]+)"\s+component=\{([A-Za-z0-9]+)\}/g)) {
		if (m[1] === '/' || m[1].startsWith('/poc')) continue
		routes.set(m[1], m[2])
	}
	return { imports, routes }
}

// ─── component ve2RequiredStyleFamilies (with sibling composition) ────────────

function extractDeclArray(src) {
	const m = src.match(/export const ve2RequiredStyleFamilies[^=]*=\s*\[([\s\S]*?)\]/)
	if (!m) return []
	return [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1])
}

const declCache = new Map()

async function getFileDecls(file, seen = new Set()) {
	if (declCache.has(file)) return declCache.get(file)
	let src
	try {
		src = await readFile(file, 'utf8')
	} catch {
		return new Set()
	}
	const fams = new Set(extractDeclArray(src))
	// A few routes compose sibling example components (e.g. CardsGrid renders
	// FeaturedCard/…). Those children fire their own demand signal at runtime, so
	// union their declarations too — one level of `./Pascal` default imports.
	for (const m of src.matchAll(/^import\s+[A-Z][A-Za-z0-9]*\s+from\s+'(\.\/[A-Z][^']+)'/gm)) {
		const sibling = `${path.resolve(path.dirname(file), m[1])}.tsx`
		if (seen.has(sibling)) continue
		seen.add(sibling)
		for (const f of await getFileDecls(sibling, seen)) fams.add(f)
	}
	declCache.set(file, fams)
	return fams
}

// ─── captures ────────────────────────────────────────────────────────────────

async function walkCaptures(dir, out = []) {
	let entries
	try {
		entries = await readdir(dir, { withFileTypes: true })
	} catch {
		return out
	}
	for (const e of entries) {
		const p = path.join(dir, e.name)
		if (e.isDirectory()) await walkCaptures(p, out)
		else if (e.name === 'markup-ve.html') out.push(p)
	}
	return out
}

// Shell-stamped VE symbols (theme scope, root vars, body contracts) live in the
// always-loaded baseline, never in a component family — ignore them (mirrors
// markup-class-parity.mjs isShellSymbol).
const ALWAYS_SHELL_SYMBOLS = new Set(['vars', 'bodyFrame', 'bodyText'])
function isShellSymbol(symbol) {
	return ALWAYS_SHELL_SYMBOLS.has(symbol) || symbol.endsWith('Scope')
}

function symbolsInMarkup(src) {
	const symbols = new Set()
	for (const m of src.matchAll(/class="([^"]*)"/g)) {
		for (const tok of m[1].split(/\s+/)) {
			const sym = extractVeSymbol(tok)
			if (sym && !isShellSymbol(sym)) symbols.add(sym)
		}
	}
	return symbols
}

/** Longest route key that is a path-prefix of the capture's relative dir. */
function routeForCapture(relDir, routeKeys) {
	let best = null
	for (const route of routeKeys) {
		const key = `${route.slice(1)}/` // drop leading '/', require segment boundary
		if (`${relDir}/`.startsWith(key) && (!best || route.length > best.length)) {
			best = route
		}
	}
	return best
}

// ─── main ────────────────────────────────────────────────────────────────────

async function main() {
	const familyFilter = process.argv
		.find((a) => a.startsWith('--family='))
		?.slice('--family='.length)
	const verbose = process.argv.includes('--verbose')

	const [table, { imports, routes }, captureFiles] = await Promise.all([
		buildFamilyTable(),
		buildRouteComponentMap(),
		walkCaptures(DIST),
	])

	// Pre-compute the loaded-family set per route (runtime simulation).
	const loadedByRoute = new Map()
	for (const [route, name] of routes) {
		const file = imports.get(name)
		const declared = new Set(['global'])
		if (file) for (const f of await getFileDecls(file)) declared.add(f)
		const plan = getVe2RouteStyleLoadPlan(route)
		if (plan.fullThemeFallback) {
			for (const f of table.validFamilies) declared.add(f)
		} else {
			for (const f of plan.families) declared.add(f)
		}
		loadedByRoute.set(route, declared)
	}

	const routeKeys = [...routes.keys()]
	const gapsByFamily = new Map() // family → Map<route, Set<symbol>>
	const unmappedSymbols = new Map() // symbol → example capture
	let capturesChecked = 0
	let capturesWithGaps = 0
	const capturesNoRoute = []

	for (const file of captureFiles) {
		const relDir = path.relative(DIST, path.dirname(file)).split(path.sep).join('/')
		const route = routeForCapture(relDir, routeKeys)
		if (!route) {
			capturesNoRoute.push(relDir)
			continue
		}
		const loaded = loadedByRoute.get(route)
		const src = await readFile(file, 'utf8')
		capturesChecked++

		let hasGap = false
		for (const sym of symbolsInMarkup(src)) {
			const family = table.familyForSymbol(sym)
			if (!family) {
				if (!unmappedSymbols.has(sym)) unmappedSymbols.set(sym, relDir)
				continue
			}
			if (family === 'global' || loaded.has(family)) continue
			if (familyFilter && family !== familyFilter) continue
			hasGap = true
			if (!gapsByFamily.has(family)) gapsByFamily.set(family, new Map())
			const byRoute = gapsByFamily.get(family)
			if (!byRoute.has(route)) byRoute.set(route, new Set())
			byRoute.get(route).add(sym)
		}
		if (hasGap) capturesWithGaps++
	}

	// ─── report ────────────────────────────────────────────────────────────
	console.log('\n=== Granular Family Closure Check ===\n')
	console.log(`Routes:             ${routes.size}`)
	console.log(`Captures checked:   ${capturesChecked}`)
	console.log(`Captures with gaps: ${capturesWithGaps}`)
	console.log(`Families with gaps: ${gapsByFamily.size}`)
	if (familyFilter) console.log(`(filtered to family: ${familyFilter})`)

	if (capturesNoRoute.length > 0) {
		console.log(`\n[WARN] ${capturesNoRoute.length} capture(s) matched no route (ignored):`)
		for (const r of capturesNoRoute.slice(0, 10)) console.log(`  ${r}`)
	}

	if (unmappedSymbols.size > 0) {
		console.log(
			`\n[ERROR] ${unmappedSymbols.size} stamped symbol(s) map to NO family (fix the table):`,
		)
		for (const [sym, ex] of [...unmappedSymbols].sort())
			console.log(`  ${sym.padEnd(36)} e.g. ${ex}`)
	}

	if (gapsByFamily.size > 0) {
		console.log('\n--- Closure gaps (family stamped but not loaded by the route) ---')
		for (const [family, byRoute] of [...gapsByFamily].sort((a, b) =>
			a[0].localeCompare(b[0]),
		)) {
			console.log(`\n  ${family}  (${byRoute.size} route(s))`)
			const rows = [...byRoute].sort((a, b) => a[0].localeCompare(b[0]))
			for (const [route, syms] of verbose ? rows : rows.slice(0, 8)) {
				console.log(`    ${route}  ←  ${[...syms].sort().join(', ')}`)
			}
			if (!verbose && rows.length > 8)
				console.log(`    … ${rows.length - 8} more route(s) (--verbose)`)
		}
	}

	const clean = gapsByFamily.size === 0 && unmappedSymbols.size === 0
	console.log(
		clean
			? '\n[OK] Closure clean — every stamped family is loaded by its route. Ready for G5.'
			: '\n[ATTENTION] Resolve closure gaps before G5 (granular pixel verify).',
	)
	process.exit(clean ? 0 : 2)
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
