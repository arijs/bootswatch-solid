import { getContractImportPath, getVarsImportPath } from './contract-registry.mjs'

/**
 * Relative path from a theme family file to scope.css.ts in the theme root.
 */
export function scopeImportPath(family) {
	const depth = family.split('/').length
	return '../'.repeat(depth) + 'scope.css'
}

/**
 * Relative path from a theme family file to theme-contract/.
 */
export function themeContractBasePath(family) {
	const depth = family.split('/').length + 2
	return '../'.repeat(depth) + 'theme-contract/'
}

/**
 * Scan generated TS for var and contract symbols that need importing.
 */
export function collectUsedSymbols(code, scopeName, registry) {
	const varSymbols = new Set()
	const contractSymbols = new Set()

	for (const m of code.matchAll(/\[(\w+)\]/g)) {
		if (m[1].startsWith('varBs')) varSymbols.add(m[1])
	}

	for (const m of code.matchAll(/\b(varBs\w+)\b/g)) {
		varSymbols.add(m[1])
	}

	// ${scope}${contract} and ${scope}${contract}${hook}
	const scopeEsc = scopeName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
	const scopedContract = new RegExp(`\\$\\{${scopeEsc}\\}\\$\\{(\\w+)\\}`, 'g')
	for (const m of code.matchAll(scopedContract)) {
		if (registry.allContracts.has(m[1])) contractSymbols.add(m[1])
	}

	for (const m of code.matchAll(/\$\{(\w+)\}\$\{(\w+)\}/g)) {
		for (const sym of [m[1], m[2]]) {
			if (sym !== scopeName && registry.allContracts.has(sym)) {
				contractSymbols.add(sym)
			}
		}
	}

	// Bare contract identifiers used as property values (e.g. fontFamily: varBsBtnFontFamily)
	for (const sym of registry.allContracts) {
		const re = new RegExp(`\\b${sym}\\b`)
		if (re.test(code)) contractSymbols.add(sym)
	}

	return { varSymbols, contractSymbols }
}

function groupVarsByImportPath(varSymbols, registry, basePath) {
	const groups = new Map()
	for (const sym of varSymbols) {
		const family = registry.symbolToFamily.get(sym) ?? 'global'
		const rel = getVarsImportPath(family)
		if (!rel) continue
		const full = basePath + rel
		if (!groups.has(full)) groups.set(full, [])
		groups.get(full).push(sym)
	}
	return groups
}

function groupContractsByImportPath(contractSymbols, registry, basePath) {
	const groups = new Map()
	for (const sym of contractSymbols) {
		let family = null
		for (const [fam, syms] of registry.contractsByFamily) {
			if (syms.has(sym)) {
				family = fam
				break
			}
		}
		if (!family) continue
		const rel = getContractImportPath(family)
		if (!rel) continue
		const full = basePath + rel
		if (!groups.has(full)) groups.set(full, [])
		groups.get(full).push(sym)
	}
	return groups
}

function formatImportBlock(symbols, importPath) {
	const sorted = [...symbols].sort()
	return `import {\n\t${sorted.join(',\n\t')},\n} from '${importPath}'`
}

/**
 * Build import section for a generated family styles file.
 */
export function emitFamilyImports({ code, family, scopeName, registry }) {
	const basePath = themeContractBasePath(family)
	const { varSymbols, contractSymbols } = collectUsedSymbols(code, scopeName, registry)

	const lines = ["import { globalStyle } from '@vanilla-extract/css'"]

	const varGroups = groupVarsByImportPath(varSymbols, registry, basePath)
	for (const [importPath, syms] of [...varGroups.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
		lines.push(formatImportBlock(syms, importPath))
	}

	const contractGroups = groupContractsByImportPath(contractSymbols, registry, basePath)
	for (const [importPath, syms] of [...contractGroups.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
		lines.push(formatImportBlock(syms, importPath))
	}

	lines.push(`import { ${scopeName} } from '${scopeImportPath(family)}'`)

	return lines.join('\n')
}

/**
 * Prepend collected imports to generated family code (replacing minimal header).
 */
export function injectFamilyImports(code, { family, scopeName, registry }) {
	const headerEnd = code.indexOf('\n\n// AUTO-GENERATED')
	if (headerEnd === -1) {
		const imports = emitFamilyImports({ code, family, scopeName, registry })
		return `${imports}\n\n${code.replace(/^import[^\n]*\n(?:import[^\n]*\n)*/m, '')}`
	}

	const body = code.slice(headerEnd + 2)
	const imports = emitFamilyImports({ code: body, family, scopeName, registry })
	return `${imports}\n\n${body}`
}
