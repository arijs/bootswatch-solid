import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

import { VE2_CONTRACT_ROOT } from './constants.mjs'
import {
	CONTRACT_SELECTOR_OVERRIDES,
	CLASS_TO_CONTRACT_OVERRIDES,
	contractToSelector,
	symbolToCssVarName,
} from './css-utils.mjs'

const EXPORT_CONST_PATTERN = /export const (\w+) = (?:createVar\(\)|style\(\{)/g
const VAR_CSS_COMMENT_PATTERN = /\/\/\s*(--bs-[\w-]+)\s*$/

/** Manual overrides where camelCase → kebab does not match Bootstrap class names. */
const CONTRACT_CLASS_OVERRIDES = {
	...CONTRACT_SELECTOR_OVERRIDES,
}

/** Map Bootstrap class → contract symbol (e.g. '.btn-primary' → 'btnPrimary'). */
const CLASS_TO_CONTRACT_FROM_SYMBOLS = Object.fromEntries(
	Object.entries(CONTRACT_CLASS_OVERRIDES)
		.filter(([, sel]) => sel.startsWith('.'))
		.map(([symbol, sel]) => [sel, symbol]),
)

const MERGED_CLASS_TO_CONTRACT = {
	...CLASS_TO_CONTRACT_FROM_SYMBOLS,
	...CLASS_TO_CONTRACT_OVERRIDES,
}

let cachedRegistry = null

async function collectFiles(dir, pattern = /\.css\.ts$/) {
	const entries = await readdir(dir, { withFileTypes: true })
	const files = []
	for (const entry of entries) {
		const full = path.join(dir, entry.name)
		if (entry.isDirectory()) {
			files.push(...(await collectFiles(full, pattern)))
		} else if (pattern.test(entry.name)) {
			files.push(full)
		}
	}
	return files
}

function parseExports(source) {
	const exports = []
	let match
	EXPORT_CONST_PATTERN.lastIndex = 0
	while ((match = EXPORT_CONST_PATTERN.exec(source)) !== null) {
		exports.push(match[1])
	}
	return exports
}

/** Read `// --bs-*` trailing comments on createVar() exports. */
function parseVarCssComments(source) {
	const map = new Map()
	const lines = source.split('\n')
	for (const line of lines) {
		const exportMatch = line.match(/export const (\w+) = createVar\(\)/)
		if (!exportMatch) continue
		const commentMatch = line.match(VAR_CSS_COMMENT_PATTERN)
		if (commentMatch) {
			map.set(commentMatch[1], exportMatch[1])
			continue
		}
		const inline = line.match(/createVar\(\)\s*\/\/\s*(--bs-[\w-]+)/)
		if (inline) map.set(inline[1], exportMatch[1])
	}
	return map
}

/** Read `// .class-name` lines above auto-generated contract exports. */
function findCssVarForSymbol(symbol, varCssComments) {
	for (const [cssVar, sym] of varCssComments.entries()) {
		if (sym === symbol) return cssVar
	}
	return null
}

function parseGeneratedSelectorComments(source) {
	const map = new Map()
	const lines = source.split('\n')
	for (let i = 0; i < lines.length; i++) {
		const comment = lines[i].match(/^\/\/\s*(\.[a-z0-9][\w-]*)\s*$/i)
		if (!comment) continue
		const next = lines[i + 1] ?? ''
		const sym = next.match(/export const (\w+) = style\(\{\}\)/)
		if (sym) map.set(sym[1], comment[1])
	}
	return map
}

function inferFamilyFromPath(filePath) {
	const rel = path.relative(VE2_CONTRACT_ROOT, filePath).replace(/\\/g, '/')
	if (rel === '_vars.css.ts') return 'global'
	if (rel === 'theme-contract.css.ts') return 'root-contract'
	if (rel.startsWith('global-elements/')) return 'global-elements'
	if (rel.startsWith('layout/')) return 'layout'
	if (rel.startsWith('forms/')) return 'forms'
		if (rel === 'utilities/generated/_vars.css.ts') return 'utilities/generated-vars'
		if (rel.startsWith('utilities/generated/')) return 'utilities/generated'
	if (rel.startsWith('utilities/')) return 'utilities'
	if (rel.startsWith('contents/')) {
		const parts = rel.split('/')
		if (parts.length >= 3) return `contents/${parts[1]}`
		return 'contents'
	}
	if (rel.startsWith('ui/')) {
		const parts = rel.split('/')
		return `ui/${parts[1]}`
	}
	return null
}

/**
 * Build the contract registry by scanning theme-contract CSS contract files.
 */
export async function buildContractRegistry() {
	if (cachedRegistry) return cachedRegistry

	const files = await collectFiles(VE2_CONTRACT_ROOT)
	const cssVarToSymbol = new Map()
	const symbolToCssVar = new Map()
	const symbolToFamily = new Map()
	const contractsByFamily = new Map()
	const contractToSelectorMap = new Map()
	const selectorToContract = new Map()
	const allVarSymbols = new Set()
	const allContracts = new Set()

	for (const filePath of files) {
		const source = await readFile(filePath, 'utf8')
		const family = inferFamilyFromPath(filePath)
		const exports = parseExports(source)
		const generatedSelectorBySymbol = parseGeneratedSelectorComments(source)
		const varCssComments = parseVarCssComments(source)
		for (const [cssVar, sym] of varCssComments.entries()) {
			cssVarToSymbol.set(cssVar, sym)
			symbolToCssVar.set(sym, cssVar)
			allVarSymbols.add(sym)
			if (family) symbolToFamily.set(sym, family)
		}

		for (const symbol of exports) {
			if (symbol.startsWith('varBs')) {
				if (allVarSymbols.has(symbol)) continue
				const resolvedCssVar =
					findCssVarForSymbol(symbol, varCssComments) ?? symbolToCssVarName(symbol)
				if (resolvedCssVar) {
					cssVarToSymbol.set(resolvedCssVar, symbol)
					symbolToCssVar.set(symbol, resolvedCssVar)
					allVarSymbols.add(symbol)
					if (family) symbolToFamily.set(symbol, family)
				}
				continue
			}

			allContracts.add(symbol)
			if (family) {
				if (!contractsByFamily.has(family)) contractsByFamily.set(family, new Set())
				contractsByFamily.get(family).add(symbol)
			}

			const selector = generatedSelectorBySymbol.get(symbol) ?? contractToSelector(symbol)
			contractToSelectorMap.set(symbol, selector)
			if (selector.startsWith('.')) {
				selectorToContract.set(selector, symbol)
			} else if (/^h[1-6]$/.test(selector) || selector === 'p' || selector === 'hr') {
				selectorToContract.set(selector, symbol)
			}
			if (symbol === 'small') {
				selectorToContract.set('small', symbol)
				selectorToContract.set('.small', symbol)
			}
		}
	}

	for (const [symbol, selector] of Object.entries(CONTRACT_CLASS_OVERRIDES)) {
		contractToSelectorMap.set(symbol, selector)
		if (selector.startsWith('.')) {
			selectorToContract.set(selector, symbol)
		}
	}

	for (const [selector, symbol] of Object.entries(MERGED_CLASS_TO_CONTRACT)) {
		selectorToContract.set(selector, symbol)
	}

	cachedRegistry = {
		cssVarToSymbol,
		symbolToCssVar,
		symbolToFamily,
		contractsByFamily,
		contractToSelectorMap,
		selectorToContract,
		allVarSymbols,
		allContracts,
		resolveContractForSelector(selector) {
			const trimmed = selector.trim()
			if (selectorToContract.has(trimmed)) return selectorToContract.get(trimmed)
			if (MERGED_CLASS_TO_CONTRACT[trimmed]) return MERGED_CLASS_TO_CONTRACT[trimmed]
			return null
		},
	}
	return cachedRegistry
}

export function getContractImportPath(family) {
	if (family === 'global-elements') return 'global-elements/contract.css'
	if (family === 'layout') return 'layout/container.css'
	if (family === 'forms') return 'forms/contract.css'
	if (family === 'utilities/generated') return 'utilities/generated/contract.css'
	if (family === 'utilities/generated-vars') return 'utilities/generated/_vars.css'
	if (family === 'utilities') return 'utilities/contract.css'
	if (family.startsWith('contents/')) {
		const sub = family.split('/')[1]
		return `contents/${sub}/contract.css`
	}
	if (family.startsWith('ui/')) {
		const sub = family.split('/')[1]
		return `ui/${sub}/contract.css`
	}
	return null
}

export function getVarsImportPath(family) {
	if (family === 'layout') return 'layout/container.css'
	if (family === 'utilities/generated-vars') return 'utilities/generated/_vars.css'
	if (family === 'global') return '_vars.css'
	if (family === 'forms') return 'forms/_vars.css'
	if (family.startsWith('ui/')) {
		const sub = family.split('/')[1]
		return `ui/${sub}/_vars.css`
	}
	if (family.startsWith('contents/')) {
		return 'contents/_vars.css'
	}
	if (family === 'contents') return 'contents/_vars.css'
	return null
}

export function resetContractRegistryCache() {
	cachedRegistry = null
}
