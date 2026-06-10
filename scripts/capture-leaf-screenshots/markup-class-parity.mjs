import { readFile } from 'node:fs/promises'
import path from 'node:path'

import { getParser } from '@arijs/stream-xml-parser'

import { ROOT } from './constants.mjs'

const LITERAL_CONTRACT_PATH = path.join(
	ROOT,
	've-project2',
	'src',
	'theme-contract',
	'literal',
	'contract.css.ts',
)

// Classes that the outer wrapper/shell stamps — not from Bootstrap component classes.
const SHELL_CLASS_PREFIXES = new Set(['bd-example', 'bd-example-ve2', 'scope-wrapper'])

// VE symbols the shell always stamps (scope, vars, body contracts) — ignore in extra list.
const ALWAYS_SHELL_SYMBOLS = new Set(['vars', 'bodyFrame', 'bodyText'])
function isShellSymbol(symbol) {
	if (ALWAYS_SHELL_SYMBOLS.has(symbol)) return true
	// All theme scope symbols end with 'Scope' (bootstrapScope, ceruleanScope, …)
	if (symbol.endsWith('Scope')) return true
	return false
}

// Classes to skip when mapping baseline → required symbols (layout wrappers, ids, etc.)
const SKIP_BASELINE_CLASSES = new Set([
	'bd-example',
	'bd-example-ve2',
	'container-fluid',
	'scope-wrapper',
])

/**
 * Parse literal/contract.css.ts provenance comments to build:
 *   Map<bootstrapClassName, contractSymbol>
 * e.g. 'accordion-button' → 'accordionButton'
 */
async function buildLiteralClassRegistry(contractPath = LITERAL_CONTRACT_PATH) {
	const source = await readFile(contractPath, 'utf8')
	const map = new Map()
	const lines = source.split('\n')
	for (let i = 0; i < lines.length - 1; i++) {
		const commentMatch = lines[i].match(/^\/\/\s*(\.[a-z0-9][\w-]*)\s*$/i)
		if (!commentMatch) continue
		const nextLine = lines[i + 1] ?? ''
		const exportMatch = nextLine.match(/^export const (\w+) = style\(\{\}\)/)
		if (exportMatch) {
			// '.accordion-button' → key 'accordion-button', value 'accordionButton'
			map.set(commentMatch[1].slice(1), exportMatch[1])
		}
	}
	return map
}

let _cachedRegistry = null

export async function getLiteralClassRegistry() {
	if (!_cachedRegistry) _cachedRegistry = buildLiteralClassRegistry()
	return _cachedRegistry
}

/**
 * Extract the VanillaExtract symbol from a hashed class name.
 * Format: {moduleId}_{symbol}__{hash}
 * Examples:
 *   'contract_accordionButton__qhfotm3' → 'accordionButton'
 *   'scope_bootstrapScope__qve0r20'     → 'bootstrapScope'
 *   'theme-contract_bodyText__yhmc2d2'  → 'bodyText'
 */
export function extractVeSymbol(veClass) {
	const sepIdx = veClass.lastIndexOf('__')
	if (sepIdx === -1) return null
	const beforeHash = veClass.slice(0, sepIdx)
	const lastUnderscore = beforeHash.lastIndexOf('_')
	if (lastUnderscore === -1) return beforeHash
	return beforeHash.slice(lastUnderscore + 1) || null
}

function extractBaselineClasses(classAttr) {
	if (!classAttr) return []
	return classAttr
		.trim()
		.split(/\s+/)
		.filter((c) => c && !SKIP_BASELINE_CLASSES.has(c))
}

function extractVeSymbols(classAttr) {
	if (!classAttr) return new Set()
	const symbols = new Set()
	for (const token of classAttr.trim().split(/\s+/).filter(Boolean)) {
		const sym = extractVeSymbol(token)
		if (sym) symbols.add(sym)
	}
	return symbols
}

function attrsToMap(node) {
	const map = new Map()
	for (const attr of node?.attrs ?? []) {
		if (attr && typeof attr.name === 'string') map.set(attr.name, String(attr.value ?? ''))
	}
	return map
}

function isElement(node) {
	return Boolean(node && typeof node.name === 'string' && !node.name.startsWith('#'))
}

function buildNodeIndex(markup) {
	const parser = getParser()
	parser.end(markup)
	const result = parser.getResult()
	if (result.error) throw new Error(`Unable to parse markup: ${result.error.message || result.error}`)
	const tree = result.tree ?? []

	const index = new Map()

	function visit(node, nodePath) {
		if (!isElement(node)) return
		const attrs = attrsToMap(node)
		index.set(nodePath, { tag: node.name, classAttr: attrs.get('class') ?? '' })

		const siblingCount = new Map()
		for (const child of node.children ?? []) {
			if (!isElement(child)) continue
			const n = (siblingCount.get(child.name) ?? 0) + 1
			siblingCount.set(child.name, n)
			visit(child, `${nodePath}/${child.name}[${n}]`)
		}
	}

	const rootCount = new Map()
	for (const root of tree) {
		if (!isElement(root)) continue
		const n = (rootCount.get(root.name) ?? 0) + 1
		rootCount.set(root.name, n)
		visit(root, `/${root.name}[${n}]`)
	}

	return index
}

/**
 * Compute class parity gaps between a baseline (Bootstrap) and VE markup.
 *
 * For each element in the baseline:
 *   1. Extract Bootstrap class tokens.
 *   2. Map each token through classRegistry → required contract symbols.
 *   3. Assert the VE element at the same path stamps those symbols.
 *   4. Report missing symbols.
 *
 * @param {string} baselineMarkup  HTML text of the baseline (Bootstrap) capture.
 * @param {string} veMarkup        HTML text of the VE capture.
 * @param {Map<string,string>} classRegistry  Bootstrap class name → contract symbol.
 * @returns {object} Gap report.
 */
export function diffClassParity(baselineMarkup, veMarkup, classRegistry) {
	const baselineIndex = buildNodeIndex(baselineMarkup)
	const veIndex = buildNodeIndex(veMarkup)

	const gaps = []
	let totalExpected = 0
	let totalMissing = 0

	for (const [nodePath, baselineNode] of baselineIndex.entries()) {
		const veNode = veIndex.get(nodePath)
		if (!veNode) continue // Missing node — handled by style diff

		const baselineClasses = extractBaselineClasses(baselineNode.classAttr)
		if (baselineClasses.length === 0) continue

		// Map Bootstrap classes → expected contract symbols
		const expectedSymbols = []
		const unmappedClasses = []
		for (const cls of baselineClasses) {
			const sym = classRegistry.get(cls)
			if (sym) expectedSymbols.push(sym)
			else unmappedClasses.push(cls)
		}

		if (expectedSymbols.length === 0) continue

		totalExpected += expectedSymbols.length

		const stampedSymbols = extractVeSymbols(veNode.classAttr)
		const missing = expectedSymbols.filter((sym) => !stampedSymbols.has(sym))
		const stampedNonShell = [...stampedSymbols].filter((s) => !isShellSymbol(s))

		totalMissing += missing.length

		if (missing.length > 0 || unmappedClasses.length > 0) {
			gaps.push({
				path: nodePath,
				tag: baselineNode.tag,
				baselineClasses,
				expectedSymbols,
				stampedSymbols: stampedNonShell,
				missingSymbols: missing,
				unmappedClasses,
			})
		}
	}

	return {
		summary: {
			totalElements: baselineIndex.size,
			elementsChecked: baselineIndex.size,
			elementsWithGaps: gaps.length,
			totalExpected,
			totalMissing,
		},
		gaps,
	}
}
