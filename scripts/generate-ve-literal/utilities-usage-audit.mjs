#!/usr/bin/env node
/**
 * One-off audit: of the ~1731 contract symbols the family table assigns to the
 * `utilities` family, how many are ACTUALLY USED in the demo markup (the 433
 * leaf scenarios + their aggregator pages), and how do the used ones cluster
 * into candidate sub-families?
 *
 * "Used" = the Bootstrap class token appears in any demo source file's markup
 * (src/components/**, the SolidJS demo that the screenshots render). We tokenize
 * every class string and intersect with the utility-class set, rather than
 * parsing JSX — robust against dynamic class composition.
 *
 *   node scripts/generate-ve-literal/utilities-usage-audit.mjs
 */

import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { buildFamilyTable } from './family-table.mjs'
import { ALL_THEMES, buildLiteralRegistry } from './registry.mjs'

const ROOT = process.cwd()
const DEMO_DIRS = [
	path.join(ROOT, 'src', 'components'),
	path.join(ROOT, 've-project2', 'src', 'components'),
]

async function walk(dir, out = []) {
	let entries
	try {
		entries = await readdir(dir, { withFileTypes: true })
	} catch {
		return out
	}
	for (const e of entries) {
		const p = path.join(dir, e.name)
		if (e.isDirectory()) await walk(p, out)
		else if (/\.(tsx|jsx|xml|html)$/.test(e.name)) out.push(p)
	}
	return out
}

// Pull candidate class tokens out of a source file. We grab the contents of
// every class="..." / class={'...'} / class={`...`} plus classList keys, then
// split on whitespace. Over-collecting is fine — we intersect with the known
// utility-class set afterward.
function extractTokens(src) {
	const tokens = new Set()
	const add = (s) => {
		for (const t of s.split(/[\s"'`{}()|&?:]+/)) {
			if (t && /^[a-z][a-z0-9-]*$/.test(t)) tokens.add(t)
		}
	}
	// class="..."  class='...'
	for (const m of src.matchAll(/class(?:Name)?\s*=\s*"([^"]*)"/g)) add(m[1])
	for (const m of src.matchAll(/class(?:Name)?\s*=\s*'([^']*)'/g)) add(m[1])
	// class={ ... } / classList={{ ... }} — grab quoted/backtick string contents
	for (const m of src.matchAll(/class(?:Name|List)?\s*=\s*\{([^}]*)\}/g)) {
		for (const sm of m[1].matchAll(/['"`]([^'"`]*)['"`]/g)) add(sm[1])
	}
	return tokens
}

// Categorize a Bootstrap utility class into a candidate sub-family.
function categorize(cls) {
	const c = cls
	// strip a leading responsive breakpoint for prefix matching: m-md-3 → m-3
	const noBp = c.replace(/^([a-z]+)-(sm|md|lg|xl|xxl)-/, '$1-')
	const has = (re) => re.test(noBp)

	if (has(/^(m|p)[trblxyse]?-(auto|n?\d)/) || has(/^(m|p)[trblxyse]?$/)) return 'spacing'
	if (has(/^g[xy]?-\d/)) return 'spacing' // gutters
	if (
		has(/^(d|flex|justify-content|align-items|align-self|align-content|order|gap)-/) ||
		c === 'd-flex' ||
		c === 'flex-fill'
	)
		return 'flex-display'
	if (has(/^(row|col|container|row-cols|offset)/) || c === 'row' || c === 'col') return 'grid'
	if (has(/^(w|h|mw|mh|vw|vh|vh-100|min-vh|max-w|max-h)-/)) return 'sizing'
	if (
		has(
			/^(text|fs|fw|fst|lh|font|text-truncate|text-break|text-nowrap|text-wrap|text-decoration)/,
		)
	)
		return 'typography'
	if (has(/^(bg|text-bg|gradient)/)) return 'color-bg'
	if (has(/^(border|rounded)/)) return 'borders'
	if (has(/^(position|top|bottom|start|end|translate|fixed|sticky|absolute|relative)/))
		return 'position'
	if (
		has(
			/^(d-none|d-block|d-inline|d-grid|d-table|invisible|visible|visually|overflow|float|clearfix)/,
		)
	)
		return 'display-visibility'
	if (has(/^(shadow|opacity|user-select|pe-none|pe-auto)/)) return 'effects'
	if (has(/^(align-baseline|align-top|align-middle|align-bottom|align-text)/))
		return 'vertical-align'
	if (has(/^(ratio)/)) return 'ratio'
	return 'other'
}

async function main() {
	const [table, literal, files] = await Promise.all([
		buildFamilyTable(),
		buildLiteralRegistry(ALL_THEMES),
		Promise.all(DEMO_DIRS.map((d) => walk(d))).then((a) => a.flat()),
	])

	// utility class set: class → symbol where symbol maps to `utilities`.
	const utilityClasses = new Map() // class → symbol
	for (const [cls, sym] of literal.classMap) {
		if (table.familyForSymbol(sym) === 'utilities') utilityClasses.set(cls, sym)
	}

	// Tokens actually present in demo markup.
	const used = new Set()
	for (const f of files) {
		const src = await readFile(f, 'utf8')
		for (const t of extractTokens(src)) used.add(t)
	}

	const usedUtil = []
	const unusedUtil = []
	for (const cls of utilityClasses.keys()) {
		if (used.has(cls)) usedUtil.push(cls)
		else unusedUtil.push(cls)
	}
	usedUtil.sort()
	unusedUtil.sort()

	// Categorize both used and full set.
	const catUsed = new Map()
	const catAll = new Map()
	for (const cls of utilityClasses.keys()) {
		const cat = categorize(cls)
		catAll.set(cat, (catAll.get(cat) ?? 0) + 1)
		if (used.has(cls)) catUsed.set(cat, (catUsed.get(cat) ?? 0) + 1)
	}

	console.log(`\n=== Utilities usage audit ===\n`)
	console.log(`Demo source files scanned: ${files.length}`)
	console.log(`Utility-family symbols:    ${utilityClasses.size}`)
	console.log(`  USED in demo markup:     ${usedUtil.length}`)
	console.log(`  UNUSED (dead in demo):   ${unusedUtil.length}`)

	console.log(`\n--- Candidate sub-family breakdown (used / total) ---`)
	const cats = [...new Set([...catAll.keys()])].sort(
		(a, b) => (catAll.get(b) ?? 0) - (catAll.get(a) ?? 0),
	)
	for (const cat of cats) {
		console.log(
			`  ${cat.padEnd(20)} ${String(catUsed.get(cat) ?? 0).padStart(4)} / ${String(catAll.get(cat) ?? 0).padStart(4)}`,
		)
	}

	console.log(`\n--- USED utilities by sub-family ---`)
	const byCat = new Map()
	for (const cls of usedUtil) {
		const cat = categorize(cls)
		if (!byCat.has(cat)) byCat.set(cat, [])
		byCat.get(cat).push(cls)
	}
	for (const cat of [...byCat.keys()].sort()) {
		console.log(`\n  [${cat}] (${byCat.get(cat).length})`)
		console.log(`    ${byCat.get(cat).join(', ')}`)
	}

	// Emit the used class → contract SYMBOL list grouped by sub-family, ready to
	// paste into family-table.mjs's USED_UTILITY_SYMBOLS set.
	const lines = ['// used utility contract symbols by sub-family']
	for (const cat of [...byCat.keys()].sort()) {
		const syms = byCat.get(cat).map((cls) => `${utilityClasses.get(cls)} /* .${cls} */`)
		lines.push(`// [${cat}] (${syms.length})`)
		lines.push(syms.join(',\n'))
	}
	await writeFile('used-utility-symbols.generated.txt', `${lines.join('\n')}\n`)
	console.log('\n[wrote used-utility-symbols.generated.txt]')
}

main().catch((err) => {
	console.error(err)
	process.exit(1)
})
