#!/usr/bin/env node
/**
 * G2 gate check — validate the per-family chunks for a theme are self-consistent:
 *   1. every symbol the chunk references (`${sym}` selector interpolations, `varBs*`
 *      identifiers, VE fns) is imported;
 *   2. every imported name is actually used (Biome would otherwise reject the file);
 *   3. the union of chunk rule-blocks equals the monolith's blocks (rule-equivalent).
 *
 *   node scripts/generate-ve-literal/validate-family-chunks.mjs --theme=bootstrap
 */
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import {
	EMIT_FAMILIES,
	familyToRelativePath,
	VE2_THEMES_ROOT,
} from '../generate-ve-theme/constants.mjs'

/** All imported binding names in a chunk source. */
function parseImports(src) {
	const names = new Set()
	for (const m of src.matchAll(/import\s*\{([^}]*)\}\s*from/g)) {
		for (const part of m[1].split(',')) {
			const name = part.trim()
			if (name) names.add(name)
		}
	}
	return names
}

/** All names a chunk references: VE fns called, scope/contract `${sym}`, and varBs* idents. */
function parseReferences(src) {
	const refs = new Set()
	for (const m of src.matchAll(/\b(globalStyle|globalKeyframes|fallbackVar)\s*\(/g))
		refs.add(m[1])
	// `${sym}` interpolations inside selector backticks (scope + class/element/root contracts).
	for (const m of src.matchAll(/\$\{(\w+)\}/g)) refs.add(m[1])
	// var contracts referenced as bare identifiers in bodies.
	for (const m of src.matchAll(/\bvarBs[A-Za-z0-9_]*\b/g)) refs.add(m[0])
	return refs
}

/** Split a chunk's source into its rule-block texts (import header stripped). */
function ruleBlocks(src) {
	const idx = src.search(/^global(Style|Keyframes)\(/m)
	if (idx === -1) return []
	return src
		.slice(idx)
		.split(/\n(?=global(?:Style|Keyframes)\()/)
		.map((b) => b.trim())
		.filter(Boolean)
}

async function main() {
	const themeArg = process.argv.find((a) => a.startsWith('--theme='))
	const theme = themeArg ? themeArg.slice('--theme='.length) : 'bootstrap'

	const families = [...EMIT_FAMILIES, 'global']
	let problems = 0
	const allChunkBlocks = []

	for (const family of families) {
		const file = path.join(VE2_THEMES_ROOT, theme, familyToRelativePath(family))
		let src
		try {
			src = await readFile(file, 'utf8')
		} catch {
			continue // family produced no chunk (no rules) — fine
		}
		const imports = parseImports(src)
		const refs = parseReferences(src)

		// Every referenced name (incl. VE fns) must be imported in the chunk.
		const trulyMissing = [...refs].filter((r) => !imports.has(r))
		const unused = [...imports].filter((i) => !refs.has(i))

		if (trulyMissing.length || unused.length) {
			problems++
			console.log(`\n[${family}]  ${path.relative(process.cwd(), file)}`)
			if (trulyMissing.length) console.log(`  MISSING imports: ${trulyMissing.join(', ')}`)
			if (unused.length) console.log(`  UNUSED imports:  ${unused.join(', ')}`)
		}
		for (const b of ruleBlocks(src)) allChunkBlocks.push(b)
	}

	// Rule-equivalence vs the monolith.
	const monolith = await readFile(
		path.join(VE2_THEMES_ROOT, theme, 'literal', 'styles.css.ts'),
		'utf8',
	)
	const monoBlocks = ruleBlocks(monolith)
	const norm = (arr) => arr.map((b) => b.trim()).sort()
	const a = norm(allChunkBlocks)
	const b = norm(monoBlocks)
	const equal = a.length === b.length && a.every((x, i) => x === b[i])

	console.log(`\n=== G2 chunk validation (${theme}) ===`)
	console.log(`Chunk rule-blocks:    ${allChunkBlocks.length}`)
	console.log(`Monolith rule-blocks: ${monoBlocks.length}`)
	console.log(`Rule-equivalent:      ${equal ? 'YES' : 'NO'}`)
	console.log(`Import problems:      ${problems} chunk(s)`)
	if (equal && problems === 0) {
		console.log('\n[OK] All chunks self-consistent and rule-equivalent to the monolith.')
		process.exit(0)
	}
	console.log('\n[FAIL] Resolve the issues above.')
	process.exit(1)
}

main().catch((e) => {
	console.error(e)
	process.exit(1)
})
