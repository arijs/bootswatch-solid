#!/usr/bin/env node
/**
 * Ground-truth cross-check for the utilities usage audit: scan the 433 rendered
 * VE DOM captures (dist/theme/<theme>/**\/markup-ve.html), extract every
 * contract symbol actually stamped, and count how many resolve to `utilities`.
 *
 *   node scripts/generate-ve-literal/utilities-rendered-check.mjs
 */
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { buildFamilyTable } from './family-table.mjs'

// Inlined from markup-class-parity.mjs ({moduleId}_{symbol}__{hash} → symbol).
function extractVeSymbol(veClass) {
	const sepIdx = veClass.lastIndexOf('__')
	if (sepIdx === -1) return null
	const beforeHash = veClass.slice(0, sepIdx)
	const lastUnderscore = beforeHash.lastIndexOf('_')
	if (lastUnderscore === -1) return beforeHash
	return beforeHash.slice(lastUnderscore + 1) || null
}

const ROOT = process.cwd()
// Demo markup is theme-independent (same components, different styling), so one
// theme's 433 captures cover the full used-symbol set — no need to scan all 27.
const DIST = path.join(ROOT, 'dist', 'theme', 'bootstrap')

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
		else if (e.name === 'markup-ve.html') out.push(p)
	}
	return out
}

async function main() {
	const [table, files] = await Promise.all([buildFamilyTable(), walk(DIST)])
	const utilSymbols = new Set()
	const allSymbols = new Set()
	for (const f of files) {
		const src = await readFile(f, 'utf8')
		for (const m of src.matchAll(/class="([^"]*)"/g)) {
			for (const tok of m[1].split(/\s+/)) {
				const sym = extractVeSymbol(tok)
				if (!sym) continue
				allSymbols.add(sym)
				if (table.familyForSymbol(sym) === 'utilities') utilSymbols.add(sym)
			}
		}
	}
	console.log(`Captures scanned:                  ${files.length}`)
	console.log(`Distinct contract symbols stamped: ${allSymbols.size}`)
	console.log(`  → resolving to utilities:        ${utilSymbols.size}`)
	console.log(`\nRendered utilities symbols:`)
	console.log([...utilSymbols].sort().join(', '))
}

main().catch((e) => {
	console.error(e)
	process.exit(1)
})
