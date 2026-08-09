#!/usr/bin/env node
/**
 * Contract wiring gate — static pre-build check.
 *
 * A contract export is a zero-style `style({})` identifier. It is only useful if
 * some theme writes CSS for it. Nothing in the type system says so: an unwired
 * contract compiles, exports a real hashed class, and renders nothing.
 *
 * Contract NAMES are declared more than once on purpose — `literal/contract.css.ts`
 * is the full 1:1 registry output and the per-family modules re-declare the subset
 * they own, so most names have two hashes and only one is styled. `build-contract.mjs`
 * resolves that by picking the candidate with a live rule. So the question a gate must
 * ask is not "is this pair wired" but "is ANY copy of this name wired" — a name with
 * no live copy anywhere is what reaches consumers as a silent no-op.
 *
 *   1. dead name     — no copy referenced by any family chunk. Ships, styles nothing.
 *   2. monolith-only — styled by themes/{t}/literal/ but not by the family chunks the
 *                      package is built from, so it is dead for consumers.
 *   3. closure       — a source CSS class whose registry symbol no module declares.
 *
 * The authoritative version of check 1 runs inside build-contract.mjs against real
 * hashes and real CSS; this one is the fast approximation you can run before a build.
 *
 * Usage:
 *   node scripts/check-contract-wiring.mjs            # gate: exit 1 on failure
 *   node scripts/check-contract-wiring.mjs --report   # inventory, always exit 0
 *   node scripts/check-contract-wiring.mjs --no-closure
 */

import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import { UNWIRED_ALLOWLIST } from './contract-wiring-allowlist.mjs'
import { VE2_CONTRACT_ROOT, VE2_THEMES_ROOT } from './generate-ve-theme/constants.mjs'

const STYLE_EXPORT = /export const (\w+) = style\(\{(\}?)\)?/g
const IMPORT_BLOCK = /import\s*\{([^}]+)\}\s*from\s*'([^']+)'/g
const CONTRACT_REF = /\$\{(\w+)\}/g

async function collect(dir, suffix) {
	const out = []
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name)
		if (entry.isDirectory()) out.push(...(await collect(full, suffix)))
		else if (entry.name.endsWith(suffix)) out.push(full)
	}
	return out
}

/**
 * Contract name → the modules that declare it.
 *
 * `zeroStyleOnly` (the gate's view) keeps only `style({})` identifiers. A contract
 * declared with real properties carries its own CSS and needs no theme rule, so it
 * can never be "unwired"; callers that resolve imports want those too.
 */
export async function readContracts({ zeroStyleOnly = true } = {}) {
	const bySymbol = new Map()
	for (const file of await collect(VE2_CONTRACT_ROOT, '.css.ts')) {
		const mod = path.relative(VE2_CONTRACT_ROOT, file).replace(/\\/g, '/').replace(/\.ts$/, '')
		const src = (await readFile(file, 'utf8')).replace(/\r/g, '')
		STYLE_EXPORT.lastIndex = 0
		let m
		// biome-ignore lint/suspicious/noAssignInExpressions: idioma de iteração com regex.exec()
		while ((m = STYLE_EXPORT.exec(src)) !== null) {
			if (zeroStyleOnly && m[2] !== '}') continue
			if (!bySymbol.has(m[1])) bySymbol.set(m[1], new Set())
			bySymbol.get(m[1]).add(mod)
		}
	}
	return bySymbol
}

/** Contract names a generated theme file both imports and interpolates into a selector. */
function symbolsStyledIn(src) {
	const imported = new Set()
	IMPORT_BLOCK.lastIndex = 0
	let m
	// biome-ignore lint/suspicious/noAssignInExpressions: idioma de iteração com regex.exec()
	while ((m = IMPORT_BLOCK.exec(src)) !== null) {
		if (!m[2].includes('theme-contract/')) continue
		for (const raw of m[1].split(',')) {
			const name = raw
				.trim()
				.split(/\s+as\s+/)
				.pop()
			if (name) imported.add(name)
		}
	}

	const styled = new Set()
	CONTRACT_REF.lastIndex = 0
	// biome-ignore lint/suspicious/noAssignInExpressions: idioma de iteração com regex.exec()
	while ((m = CONTRACT_REF.exec(src)) !== null) {
		if (imported.has(m[1])) styled.add(m[1])
	}
	return styled
}

/**
 * The package is built from the per-family chunks; `themes/{t}/literal/styles.css.ts`
 * is an alternative monolith loader the package excludes, so track the two separately.
 */
async function readThemeUsage() {
	const families = new Set()
	const monolith = new Set()
	const themes = (await readdir(VE2_THEMES_ROOT, { withFileTypes: true }))
		.filter((e) => e.isDirectory())
		.map((e) => e.name)

	for (const theme of themes) {
		for (const file of await collect(path.join(VE2_THEMES_ROOT, theme), '.css.ts')) {
			const rel = path.relative(VE2_THEMES_ROOT, file).replace(/\\/g, '/')
			const target = rel.includes('/literal/') ? monolith : families
			const src = (await readFile(file, 'utf8')).replace(/\r/g, '')
			for (const symbol of symbolsStyledIn(src)) target.add(symbol)
		}
	}
	return { families, monolith, themeCount: themes.length }
}

async function checkClosure(bySymbol) {
	const { buildLiteralRegistry } = await import('./generate-ve-literal/registry.mjs')
	const registry = await buildLiteralRegistry()
	const missing = []
	for (const [cssClass, symbol] of registry.classMap) {
		if (!bySymbol.has(symbol)) missing.push({ cssClass, symbol })
	}
	return missing.sort((a, b) => a.cssClass.localeCompare(b.cssClass))
}

function printGroup(title, blurb, rows, format) {
	if (rows.length === 0) return
	console.log(`\n${title} — ${rows.length}`)
	console.log(`    ${blurb}`)
	for (const row of rows) console.log(`      ${format(row)}`)
}

async function main() {
	const argv = process.argv.slice(2)
	const reportOnly = argv.includes('--report')
	const skipClosure = argv.includes('--no-closure')

	const bySymbol = await readContracts()
	const { families, monolith, themeCount } = await readThemeUsage()

	const dead = []
	const monolithOnly = []
	const stale = []
	for (const [symbol, modules] of bySymbol) {
		const allowed = Boolean(UNWIRED_ALLOWLIST[symbol])
		if (families.has(symbol)) {
			if (allowed) stale.push(symbol)
			continue
		}
		if (allowed) continue
		const row = { symbol, modules: [...modules].sort().join(', ') }
		if (monolith.has(symbol)) monolithOnly.push(row)
		else dead.push(row)
	}
	const bySymbolName = (a, b) => a.symbol.localeCompare(b.symbol)
	dead.sort(bySymbolName)
	monolithOnly.sort(bySymbolName)

	const missing = skipClosure ? [] : await checkClosure(bySymbol)

	console.log(
		`contract wiring: ${bySymbol.size} contract names, ${themeCount} themes, ` +
			`${Object.keys(UNWIRED_ALLOWLIST).length} allowlisted`,
	)

	printGroup(
		'[1] dead contract',
		'Exported and hashed, but no family chunk in any theme styles it. Applying it is a no-op.',
		dead,
		({ symbol, modules }) => `${symbol.padEnd(28)} ${modules}`,
	)

	printGroup(
		'[2] monolith-only contract',
		'Styled by themes/{t}/literal/ but not by the family chunks the package is built from.',
		monolithOnly,
		({ symbol, modules }) => `${symbol.padEnd(28)} ${modules}`,
	)

	printGroup(
		'[2b] stale allowlist entry',
		'Now styled by a family chunk; drop it from the allowlist.',
		stale.sort(),
		(symbol) => symbol,
	)

	printGroup(
		'[3] registry closure gap',
		'Source CSS class whose registry symbol no contract module declares.',
		missing,
		({ cssClass, symbol }) => `.${cssClass.padEnd(40)} → ${symbol}`,
	)

	const failures = dead.length + monolithOnly.length + stale.length + missing.length
	if (failures === 0) {
		console.log('\n✔ every contract is styled by some theme and the registry is closed')
		process.exit(0)
	}
	console.log(`\n${failures} problem(s)`)
	process.exit(reportOnly ? 0 : 1)
}

if (process.argv[1]?.endsWith('check-contract-wiring.mjs')) {
	main().catch((err) => {
		console.error(err)
		process.exit(1)
	})
}
