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

function inferFamilyFromPath(filePath) {
	const rel = path.relative(VE2_CONTRACT_ROOT, filePath).replace(/\\/g, '/')
	if (rel === '_vars.css.ts') return 'global'
	if (rel === 'theme-contract.css.ts') return 'root-contract'
	if (rel.startsWith('forms/')) return 'forms'
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
	if (rel.startsWith('layout/')) return 'contents/basic'
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

		for (const symbol of exports) {
			if (symbol.startsWith('varBs')) {
				const cssVar = symbolToCssVarName(symbol)
				if (cssVar) {
					cssVarToSymbol.set(cssVar, symbol)
					symbolToCssVar.set(symbol, cssVar)
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

			const selector = contractToSelector(symbol)
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
	if (family === 'forms') return 'forms/contract.css'
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
