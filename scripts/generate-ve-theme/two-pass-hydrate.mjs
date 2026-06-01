import { readFile } from 'node:fs/promises'
import path from 'node:path'

import { VE2_THEMES_ROOT, STRUCTURE_REFERENCE_THEME } from './constants.mjs'
import { lookupDeclarations } from './css-source.mjs'
import {
	cssPropToVeKey,
	formatVeValue,
	shouldSkipFamilySelector,
	symbolToCssVarName,
} from './css-utils.mjs'
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
	const globalStyleRegex = /globalStyle\(\s*(?:`([^`]+)`|\[([\s\S]*?)\](?:\.join\([^)]*\))?)\s*,\s*\{/g
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
		blocks.push({ veSelector, body, bodyStart, startIdx, endIdx: i })
	}
	return blocks
}

function findOutputBlockForSourceSelector(source, sourceSelector) {
	for (const block of parseGlobalStyleBlocks(source)) {
		if (findSourceSelectorForBlock(source, block.startIdx) === sourceSelector) return block
	}
	return null
}

/** Remove cross-family owned blocks copied from bootstrap reference into overlay families. */
function stripCrossFamilyOwnedBlocks(source, refSource, family) {
	if (family === 'forms' || family === 'contents/heading') return source

	const refBlocks = parseGlobalStyleBlocks(refSource)
	let result = source
	for (let i = refBlocks.length - 1; i >= 0; i--) {
		const sourceSelector = findSourceSelectorForBlock(refSource, refBlocks[i].startIdx)
		if (!sourceSelector || !shouldSkipFamilySelector(family, sourceSelector)) continue

		const outBlock = findOutputBlockForSourceSelector(result, sourceSelector)
		if (!outBlock) continue

		let removeStart = outBlock.startIdx
		while (removeStart > 0) {
			let lineStart = removeStart
			while (lineStart > 0 && result[lineStart - 1] !== '\n') lineStart--
			if (lineStart === 0) break
			const prevLine = result.slice(lineStart, removeStart).trim()
			if (!prevLine.startsWith('//')) break
			removeStart = lineStart
			if (removeStart > 0 && result[removeStart - 1] === '\n') removeStart--
		}

		let removeEnd = outBlock.endIdx
		while (removeEnd < result.length && /[\s]/.test(result[removeEnd]) && result[removeEnd] !== '\n') {
			removeEnd++
		}
		if (result[removeEnd] === ')') removeEnd++
		while (removeEnd < result.length && result[removeEnd] === '\n') removeEnd++

		result = `${result.slice(0, removeStart)}${result.slice(removeEnd)}`
	}

	return result
}

/** Paint props Bootswatch theme deltas set literally while structure vars keep Bootstrap subtle tokens. */
const PAINT_PROP_TO_CSS_VARS = {
	'background-color': ['--bs-list-group-bg', '--bs-alert-bg', '--bs-card-bg'],
	'color': ['--bs-list-group-color', '--bs-alert-color'],
	'border-color': ['--bs-list-group-border-color', '--bs-alert-border-color', '--bs-card-border-color'],
}

function isSelfVarReference(value, cssVar, registry) {
	if (value == null) return false
	const trimmed = value.trim()
	const selfRef = `var(${cssVar})`
	if (trimmed === selfRef) return true
	const symbol = registry.cssVarToSymbol.get(cssVar)
	if (!symbol) return false
	return formatVeValue(trimmed, registry) === symbol
}

function syncPaintPropsToVars(body, declarations, registry) {
	let result = body
	for (const [prop, cssVars] of Object.entries(PAINT_PROP_TO_CSS_VARS)) {
		for (const cssVar of cssVars) {
			const symbol = registry.cssVarToSymbol.get(cssVar)
			if (!symbol) continue
			// Prefer literal --bs-* overrides; skip background-color: var(--bs-card-bg) self-refs
			const paintSource =
				declarations[cssVar] != null && !isSelfVarReference(declarations[cssVar], cssVar, registry)
					? declarations[cssVar]
					: declarations[prop]
			if (paintSource == null || isSelfVarReference(paintSource, cssVar, registry)) continue
			const paintValue = formatVeValue(paintSource, registry)
			if (paintValue === symbol) continue
			const pattern = new RegExp(`(\\[${symbol}\\]:\\s*)(?:[^,\\n]+)`, 'g')
			const updated = result.replace(pattern, `$1${paintValue}`)
			if (updated !== result) result = updated
		}
	}
	return result
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

	// Replace [varBsXxx]: `template` entries when theme overrides the CSS variable
	result = result.replace(
		/(\[(\w+)\]:\s*)`[^`]+`,/g,
		(full, prefix, symbol) => {
			const cssVar = symbolToCssVarName(symbol)
			if (cssVar && declarations[cssVar] !== undefined) {
				return `${prefix}${formatVeValue(declarations[cssVar], registry)},`
			}
			return full
		},
	)

	// Replace [varBsXxx]: varOtherSymbol when theme overrides the CSS variable
	result = result.replace(
		/(\[(\w+)\]:\s*)(varBs\w+),/g,
		(full, prefix, symbol) => {
			const cssVar = symbolToCssVarName(symbol)
			if (cssVar && declarations[cssVar] !== undefined) {
				return `${prefix}${formatVeValue(declarations[cssVar], registry)},`
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

	return syncPaintPropsToVars(result, declarations, registry)
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

/** Merge overlay prop lines into a block body, replacing same-key properties when present. */
function mergeOverlayPropEntries(body, propEntries) {
	let result = body
	for (const line of propEntries) {
		const key = line.match(/^\t(\w+):/)?.[1]
		if (!key) continue
		const pattern = new RegExp(`^\t${key}:[^\n]*,?\\n`, 'm')
		if (pattern.test(result)) {
			result = result.replace(pattern, `${line}\n`)
		} else {
			result = `${result.trimEnd()}\n${line}\n`
		}
	}
	return result
}

/** Bootswatch sketchy-style `.btn` paint overrides must win over variant var blocks. */
const BTN_PAINT_FOOTER_SELECTORS = [
	'.btn',
	'.btn:hover',
	'.btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show',
	'.btn.disabled',
]

async function appendBtnPaintFooters(result, { family, familyMap, targetScope, registry }) {
	if (family !== 'ui/buttons' || !familyMap) return result

	const { emitGlobalStyleBlock } = await import('./rule-transpiler.mjs')
	const footers = []

	for (const selector of BTN_PAINT_FOOTER_SELECTORS) {
		const declarations = lookupDeclarations(familyMap, selector)
		if (!declarations) continue
		const paintDecl = {}
		for (const prop of ['margin', 'border-color', 'box-shadow', 'transform', 'transition']) {
			if (declarations[prop] != null) paintDecl[prop] = declarations[prop]
		}
		if (Object.keys(paintDecl).length === 0) continue
		footers.push({ selector, declarations: paintDecl })
	}

	if (footers.length === 0) return result

	let output = `${result}\n// ── Theme paint footers (cascade after variant blocks) ─────────────────────────\n`
	for (const { selector, declarations } of footers) {
		const { code } = emitGlobalStyleBlock({
			cssSelector: selector,
			declarations,
			scopeName: targetScope,
			registry,
			family,
			isDelta: true,
		})
		output += code
	}
	return output
}

/**
 * Find the SOURCE CSS comment selector preceding a globalStyle block.
 */
function findSourceSelectorForBlock(source, blockStartIdx) {
	const before = source.slice(0, blockStartIdx)
	const lines = before.split('\n')
	for (let i = lines.length - 1; i >= 0 && i >= lines.length - 8; i--) {
		const line = lines[i]
		const trimmed = line.trim()
		if (trimmed === '})') break
		if (trimmed === '// SOURCE CSS:') continue
		// Skip generator metadata between SOURCE CSS and globalStyle.
		if (/^\/\/\s*\[(UNMAPPED_VAR|UNMAPPED_SELECTOR|DELTA)\]/.test(trimmed)) continue
		// Stop at section comments (e.g. manual paint blocks, reboot helpers).
		if (
			/^\/\//.test(trimmed) &&
			!/^\/\/\s*(\.|h[1-6]|:[a-z]|[a-z][\w-]*\s*\{)/i.test(trimmed)
		) {
			break
		}
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

/** Overlay families duplicate .btn-* rules; hydrate from ui/buttons when missing locally. */
const BTN_FALLBACK_SELECTOR = /^\.btn(?:-[a-z0-9-]+)?(?:[:.[]|$)/i

function lookupThemeDeclarations(familyMap, fallbackMaps, sourceSelector) {
	const primary = lookupDeclarations(familyMap, sourceSelector)
	if (primary && Object.keys(primary).length > 0) return primary
	if (!BTN_FALLBACK_SELECTOR.test(sourceSelector.trim())) return primary
	const buttonsMap = fallbackMaps?.get?.('ui/buttons')
	if (!buttonsMap) return primary
	return lookupDeclarations(buttonsMap, sourceSelector) ?? primary
}

/**
 * Two-pass hydrate: clone bootstrap structure, replace scope name, hydrate values.
 */
export async function hydrateFamilyStyles({
	themeSlug,
	family,
	familyMap: familyMapInput,
	familyMaps,
	registry,
	referenceTheme = STRUCTURE_REFERENCE_THEME,
}) {
	const familyMap = familyMapInput ?? new Map()
	const relPath = family.includes('/') ? `${family}/styles.css.ts` : `${family}/styles.css.ts`
	const refPath = path.join(VE2_THEMES_ROOT, referenceTheme, `${relPath}`)
	const refSource = await readFile(refPath, 'utf8')

	const refScope = themeScopeExportName(referenceTheme)
	const targetScope = themeScopeExportName(themeSlug)

	// Pass A: replace scope export name throughout
	let output = refSource.replaceAll(refScope, targetScope)
	// Fix comment references to theme name
	output = output.replace(new RegExp(`${referenceTheme}Scope`, 'g'), targetScope)
	output = stripCrossFamilyOwnedBlocks(output, refSource, family)

	// Pass A.5: re-transpile selectors from SOURCE CSS comments (applies generator fixes)
	const { cssSelectorToVeSelector, finalizeVeSelector } = await import('./rule-transpiler.mjs')
	const blocks = parseGlobalStyleBlocks(refSource)

	// Pass B: hydrate each globalStyle block — match output blocks to SOURCE selectors, not indices
	// (stripCrossFamilyOwnedBlocks removes blocks and would desync index pairing).
	let result = output
	const outputBlocks = parseGlobalStyleBlocks(result)
	for (let i = outputBlocks.length - 1; i >= 0; i--) {
		const outBlock = outputBlocks[i]
		const sourceSelector = findSourceSelectorForBlock(result, outBlock.startIdx)
		if (!sourceSelector || shouldSkipFamilySelector(family, sourceSelector)) continue
		const declarations = lookupThemeDeclarations(familyMap, familyMaps, sourceSelector)
		if (!declarations) continue
		let newBody = hydrateBlockBody(outBlock.body, declarations, registry)
		const overlayDecl = computeOverlayDeclarations(newBody, declarations, registry)
		if (Object.keys(overlayDecl).length > 0) {
			const { declarationsToVeProps, upgradeBtnBorderOverride } = await import('./rule-transpiler.mjs')
			const { propEntries } = declarationsToVeProps(overlayDecl, registry, { propsOnly: true })
			upgradeBtnBorderOverride(sourceSelector, propEntries, overlayDecl)
			newBody = mergeOverlayPropEntries(newBody, propEntries)
		}
		if (newBody === outBlock.body) continue
		result = `${result.slice(0, outBlock.bodyStart)}${newBody}${result.slice(outBlock.endIdx - 1)}`
	}

	for (const block of [...blocks].reverse()) {
		const sourceSelector = findSourceSelectorForBlock(refSource, block.startIdx)
		if (!sourceSelector) continue
		const declarations = lookupThemeDeclarations(familyMap, familyMaps, sourceSelector) ?? {}
		const { veSelector: newVeSelector } = cssSelectorToVeSelector(sourceSelector, targetScope, registry, {
			family,
		})
		const finalizedVeSelector = finalizeVeSelector(sourceSelector, newVeSelector, declarations, family)
		const blockSlice = refSource.slice(block.startIdx, block.endIdx)
		const oldSingle = blockSlice.match(/globalStyle\(\s*`([^`]+)`\s*,\s*\{/)?.[1]
		if (!oldSingle) continue
		const { veSelector: refTranspiled } = cssSelectorToVeSelector(sourceSelector, refScope, registry, {
			family,
		})
		const refFinalized = finalizeVeSelector(sourceSelector, refTranspiled, declarations, family)
		// Preserve manual contract selectors that reuse a SOURCE CSS comment for hydration only.
		if (oldSingle !== refTranspiled && oldSingle !== refFinalized) continue
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
			if (shouldSkipFamilySelector(family, selector)) continue
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

	result = await appendBtnPaintFooters(result, {
		family,
		familyMap,
		targetScope,
		registry,
	})

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
