import { readFile } from 'node:fs/promises'
import path from 'node:path'

import { VE2_THEMES_ROOT, STRUCTURE_REFERENCE_THEME } from './constants.mjs'
import { lookupDeclarations } from './css-source.mjs'
import { cssPropToVeKey, formatVeValue, shouldSkipFamilySelector, symbolToCssVarName } from './css-utils.mjs'
import { themeScopeExportName } from './constants.mjs'
import { scopeImportPath } from './import-emitter.mjs'

const SOURCE_CSS_SELECTOR_PATTERN = /^\/\/\s*(\.[^{]+|:[^{]+|[a-z][^{]*)\s*\{/

/**
 * Extract SOURCE CSS selectors from comments in a reference styles file.
 */
export function extractSourceSelectorsFromComments(source) {
	const selectors = []
	for (const line of source.split('\n')) {
		const m = line.match(/^\/\/\s*(\.[a-z0-9][^{]*)\s*\{/i)
		if (m) selectors.push(m[1].trim())
		// Also match // .btn:hover { style
		const m2 = line.match(/^\/\/\s*(\.[a-z0-9-]+:[a-z-]+)\s*\{/i)
		if (m2) selectors.push(m2[1].trim())
	}
	return selectors
}

/**
 * Parse globalStyle blocks from reference TS — returns array of { veSelector, body, startLine, endLine }
 */
export function parseGlobalStyleBlocks(source) {
	const blocks = []
	const globalStyleRegex = /globalStyle\(\s*(?:`([^`]+)`|\[([\s\S]*?)\]\.join\([^)]*\))\s*,\s*\{/g
	let match
	while ((match = globalStyleRegex.exec(source)) !== null) {
		const veSelector = match[1] ?? match[2]?.replace(/\s+/g, ' ').trim()
		const startIdx = match.index
		// Brace after selector template — not the `{` inside `${scope}` placeholders
		const braceIdx = startIdx + match[0].length - 1
		let depth = 0
		let i = braceIdx
		const bodyStart = i + 1
		depth = 1
		i++
		while (i < source.length && depth > 0) {
			if (source[i] === '{') depth++
			if (source[i] === '}') depth--
			i++
		}
		const body = source.slice(bodyStart, i - 1)
		blocks.push({ veSelector, body, startIdx, endIdx: i })
	}
	return blocks
}

/**
 * Hydrate a vars/props block body by replacing literal values from theme CSS.
 */
export function hydrateBlockBody(body, declarations, registry) {
	if (!declarations || Object.keys(declarations).length === 0) return body

	let result = body

	// Replace [varBsXxx]: 'literal' or "literal" entries (skip template literals)
	result = result.replace(
		/(\[(\w+)\]:\s*)(['"])((?:\\.|(?!\3).)*)\3/g,
		(full, prefix, symbol, quote, literal) => {
			if (full.includes('`')) return full
			const cssVar = symbolToCssVarName(symbol)
			if (cssVar && declarations[cssVar] !== undefined) {
				return `${prefix}${formatVeValue(declarations[cssVar], registry)}`
			}
			return full
		},
	)

	// Replace property: 'literal' or "literal" (skip template literals and var refs)
	result = result.replace(
		/^(\t(\w+)):\s*(['"])((?:\\.|(?!\3).)*)\3,/gm,
		(full, indent, prop, quote, literal) => {
			if (full.includes('`')) return full
			const cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase()
			if (declarations[cssProp] !== undefined) {
				return `${indent}: ${formatVeValue(declarations[cssProp], registry)},`
			}
			// Fix raw var(--bs-*) strings that don't resolve in VE
			if (/var\(--bs-/.test(literal)) {
				return `${indent}: ${formatVeValue(literal, registry)},`
			}
			return full
		},
	)

	// Replace property: varSymbol references when theme provides a literal override
	result = result.replace(
		/^(\t(\w+)):\s*([a-zA-Z]\w*),/gm,
		(full, indent, prop, symbol) => {
			if (!symbol.startsWith('var')) return full
			const cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase()
			if (declarations[cssProp] !== undefined) {
				return `${indent}: ${formatVeValue(declarations[cssProp], registry)},`
			}
			return full
		},
	)

	// Replace property: `template` values when theme overrides the same CSS property
	result = result.replace(
		/^(\t(\w+)):\s*`[^`]+`,/gm,
		(full, indent, prop) => {
			const cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase()
			if (declarations[cssProp] !== undefined) {
				return `${indent}: ${formatVeValue(declarations[cssProp], registry)},`
			}
			return full
		},
	)

	return result
}

/**
 * Theme declarations not already represented in a hydrated globalStyle body.
 * Emitted as overlay delta blocks on the same selector.
 */
export function computeOverlayDeclarations(body, themeDeclarations, registry) {
	const overlay = {}
	if (!themeDeclarations) return overlay

	const bodyText = body ?? ''

	for (const [prop, value] of Object.entries(themeDeclarations)) {
		if (prop === '_media' || value == null) continue
		if (prop.startsWith('--bs-')) {
			const symbol = registry.cssVarToSymbol.get(prop)
			if (!symbol) continue
			const themeVeValue = formatVeValue(value, registry)
			const varPattern = new RegExp(`\\[${symbol}\\]:\\s*([^,\\n]+)`)
			const match = bodyText.match(varPattern)
			if (!match || match[1].trim() !== themeVeValue.trim()) {
				overlay[prop] = value
			}
			continue
		}

		const veKey = cssPropToVeKey(prop)
		const themeVeValue = formatVeValue(value, registry)
		const propPattern = new RegExp(`\\t${veKey}:\\s*([^,\\n]+)`)
		const match = bodyText.match(propPattern)
		if (!match || match[1].trim() !== themeVeValue.trim()) {
			overlay[prop] = value
		}
	}

	return overlay
}

/**
 * Find the SOURCE CSS comment selector preceding a globalStyle block.
 */
function findSourceSelectorForBlock(source, blockStartIdx) {
	const before = source.slice(0, blockStartIdx)
	const lines = before.split('\n')
	for (let i = lines.length - 1; i >= 0 && i >= lines.length - 30; i--) {
		if (!lines[i].includes('globalStyle(') && i < lines.length - 1 && lines[i + 1]?.includes('globalStyle(')) {
			const m = lines[i].match(/^\/\/\s*(\.[^{]+)\s*\{/)
			if (m) return m[1].trim()
			const m2 = lines[i].match(/^\/\/\s*([a-z0-9,.:#\s-]+)\s*\{$/i)
			if (m2 && (m2[1].includes('.') || m2[1].includes('+'))) return m2[1].trim()
			const m3 = lines[i].match(/^\/\/\s*([a-z][\w-]*(?::[\w():.-]+)?)\s*\{/)
			if (m3) return m3[1].trim()
		}
		const m = lines[i].match(/^\/\/\s*(\.[^{]+)\s*\{/)
		if (m) return m[1].trim()
		const m2 = lines[i].match(/^\/\/\s*([a-z0-9,.:#\s-]+)\s*\{$/i)
		if (m2 && (m2[1].includes('.') || m2[1].includes('+'))) return m2[1].trim()
		const m3 = lines[i].match(/^\/\/\s*([a-z][\w-]*(?::[\w():.-]+)?)\s*\{/)
		if (m3) return m3[1].trim()
	}
	return null
}

/**
 * Two-pass hydrate: clone bootstrap structure, replace scope name, hydrate values.
 */
export async function hydrateFamilyStyles({
	themeSlug,
	family,
	familyMap,
	registry,
	referenceTheme = STRUCTURE_REFERENCE_THEME,
}) {
	const relPath = family.includes('/') ? `${family}/styles.css.ts` : `${family}/styles.css.ts`
	const refPath = path.join(VE2_THEMES_ROOT, referenceTheme, `${relPath}`)
	const refSource = await readFile(refPath, 'utf8')

	const refScope = themeScopeExportName(referenceTheme)
	const targetScope = themeScopeExportName(themeSlug)

	// Pass A: replace scope export name throughout
	let output = refSource.replaceAll(refScope, targetScope)
	// Fix comment references to theme name
	output = output.replace(new RegExp(`${referenceTheme}Scope`, 'g'), targetScope)

	// Pass A.5: re-transpile selectors from SOURCE CSS comments (applies generator fixes)
	const { cssSelectorToVeSelector, finalizeVeSelector } = await import('./rule-transpiler.mjs')
	const blocks = parseGlobalStyleBlocks(refSource)

	// Pass B: hydrate each globalStyle block in the output string
	let result = output
	for (const block of blocks) {
		const sourceSelector = findSourceSelectorForBlock(refSource, block.startIdx)
		if (!sourceSelector) continue
		const declarations = lookupDeclarations(familyMap, sourceSelector)
		if (!declarations) continue
		let hydratedBody = hydrateBlockBody(block.body, declarations, registry)
		if (hydratedBody !== block.body) {
			result = result.replace(block.body, hydratedBody)
		}
		const overlayDecl = computeOverlayDeclarations(hydratedBody, declarations, registry)
		if (Object.keys(overlayDecl).length > 0) {
			const { declarationsToVeProps, upgradeBtnBorderOverride } = await import('./rule-transpiler.mjs')
			const { propEntries } = declarationsToVeProps(overlayDecl, registry, { propsOnly: true })
			upgradeBtnBorderOverride(sourceSelector, propEntries, overlayDecl)
			if (propEntries.length > 0) {
				const mergedBody = `${hydratedBody.trimEnd()}\n${propEntries.join('\n')}\n`
				result = result.replace(hydratedBody, mergedBody)
				hydratedBody = mergedBody
			}
		}
	}

	for (const block of [...blocks].reverse()) {
		const sourceSelector = findSourceSelectorForBlock(refSource, block.startIdx)
		if (!sourceSelector) continue
		const declarations = lookupDeclarations(familyMap, sourceSelector) ?? {}
		const { veSelector: newVeSelector } = cssSelectorToVeSelector(sourceSelector, targetScope, registry, {
			family,
		})
		const finalizedVeSelector = finalizeVeSelector(sourceSelector, newVeSelector, declarations, family)
		const blockSlice = refSource.slice(block.startIdx, block.endIdx)
		const oldSingle = blockSlice.match(/globalStyle\(\s*`([^`]+)`\s*,\s*\{/)?.[1]
		if (!oldSingle) continue
		const oldInOutput = oldSingle.replaceAll(refScope, targetScope)
		if (oldInOutput === finalizedVeSelector) continue
		const needle = `\`${oldInOutput}\``
		const outputBlockStart = result.lastIndexOf('globalStyle(', block.startIdx + (targetScope.length - refScope.length) * 10)
		const searchFrom = outputBlockStart >= 0 ? outputBlockStart : 0
		const idx = result.indexOf(needle, searchFrom)
		if (idx === -1) continue
		result = `${result.slice(0, idx)}\`${finalizedVeSelector}\`${result.slice(idx + needle.length)}`
	}

	// Pass C: delta rules — theme-specific selectors not in bootstrap structure + overlays
	const coveredSelectors = new Set()
	for (const block of blocks) {
		const sel = findSourceSelectorForBlock(refSource, block.startIdx)
		if (sel) coveredSelectors.add(sel)
	}

	const { emitGlobalStyleBlock, formatSourceCssComment } = await import('./rule-transpiler.mjs')
	const deltaBlocks = []
	const unmapped = []

	if (familyMap) {
		for (const [selector, decl] of familyMap) {
			if (selector.includes('|||')) continue
			if (coveredSelectors.has(selector)) continue
			if (!selector.startsWith('.')) {
				unmapped.push(selector)
				continue
			}
			const { _media, ...declarations } = decl
			if (Object.keys(declarations).length === 0) continue
			deltaBlocks.push({ selector, declarations })
			unmapped.push(selector)
		}
	}

	if (deltaBlocks.length > 0) {
		result += '\n// ── Delta rules (theme-specific overrides) ───────────────────────────────────\n'
		for (const { selector, declarations } of deltaBlocks) {
			const { code } = emitGlobalStyleBlock({
				cssSelector: selector,
				declarations,
				scopeName: targetScope,
				registry,
				comment: formatSourceCssComment(selector, declarations),
				isDelta: true,
				family,
			})
			if (code) result += code
		}
	}

	return { code: result, unmappedSelectors: unmapped }
}

/**
 * Generate family styles from scratch using rule transpiler (no reference theme).
 */
export async function generateFamilyFromCss({ themeSlug, family, familyMap, registry }) {
	const { emitGlobalStyleBlock, formatSourceCssComment } = await import('./rule-transpiler.mjs')
	const scopeName = themeScopeExportName(themeSlug)

	const lines = []
	lines.push("import { globalStyle } from '@vanilla-extract/css'")
	lines.push(`import { ${scopeName} } from '${scopeImportPath(family)}'`)
	lines.push('')
	lines.push(`// AUTO-GENERATED family styles for ${themeSlug}/${family}`)
	lines.push('// Review [UNMAPPED] and [DELTA] comments before committing.')
	lines.push('')

	const allWarnings = []
	if (!familyMap) {
		lines.push('export {}')
		return { code: lines.join('\n'), warnings: ['No CSS source found for family'] }
	}

	for (const [selector, decl] of familyMap) {
		if (selector.includes('|||')) continue
		if (shouldSkipFamilySelector(family, selector)) continue
		const { _media, ...declarations } = decl
		const { code, warnings } = emitGlobalStyleBlock({
			cssSelector: selector,
			declarations,
			scopeName,
			registry,
			comment: formatSourceCssComment(selector, declarations),
			family,
		})
		if (code) lines.push(code)
		allWarnings.push(...warnings)
	}

	if (lines.length <= 6) {
		lines.push('export {}')
	}

	return { code: lines.join('\n'), warnings: allWarnings }
}
