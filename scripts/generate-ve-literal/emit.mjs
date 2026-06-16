/**
 * T4 — v2 literal emitter.
 *
 * Reads screenshots/{theme}/bootstrap.css and emits
 * ve-project2/src/themes/{theme}/literal/styles.css.ts
 * via the uniform 1:1 selector-translation algorithm from plan §6.
 *
 * No per-family special cases. No heuristics. No fallbacks.
 */

import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

import {
	buildContractRegistry,
	getContractImportPath,
	getVarsImportPath,
} from '../generate-ve-theme/contract-registry.mjs'
import { VE2_THEMES_ROOT, themeScopeExportName } from '../generate-ve-theme/constants.mjs'
import { TAG_TO_CONTRACT } from '../generate-ve-theme-literal/element-registry.mjs'
import {
	loadBootstrapCss,
	parseBootstrapCss,
	walkCssEmitUnits,
} from '../generate-ve-theme-literal/parse-css-tree.mjs'
import { EXTRA_RULES, applySplitProps, findAdditions, findDivergence, findRemaps } from './divergence-manifest.mjs'
import { buildLiteralRegistry } from './registry.mjs'
import { splitByCombinators, splitSelectorList } from './selector-parser.mjs'
import { cssPropToVeKey, formatVeValue, parseVeValue } from './value-format.mjs'

const REL_CONTRACT_ROOT = '../../../theme-contract'
const REL_SCOPE = '../scope.css'

// Contract symbols that live in theme-contract.css (not element or class contracts).
// These appear when the divergence manifest or the body-tag route emits bodyText/bodyFrame.
const ROOT_CONTRACT_SYMBOLS = new Set(['bodyText', 'bodyFrame', 'vars', 'body'])

// Pre-built set of all element contract symbol values for fast bucket lookup.
const ELEMENT_CONTRACT_VALUES = new Set(Object.values(TAG_TO_CONTRACT))

// ─── ref helper ───────────────────────────────────────────────────────────────
const ref = (sym) => `\${${sym}}`

// ─── selector translation ─────────────────────────────────────────────────────

/**
 * Translate all `.class-name` tokens in a text fragment, recursing into `(...)`.
 * Attribute selectors `[...]` are copied verbatim.
 */
function translateClasses(text, registry, unresolved) {
	let result = ''
	let i = 0
	let foundAny = false

	while (i < text.length) {
		const ch = text[i]

		if (ch === '[') {
			// Attribute selector — copy verbatim until matching ]
			let depth = 1
			let j = i + 1
			while (j < text.length && depth > 0) {
				if (text[j] === '[') depth++
				else if (text[j] === ']') depth--
				j++
			}
			result += text.slice(i, j)
			i = j
		} else if (ch === '(') {
			// Pseudo-function args — recurse to translate class names inside
			let depth = 1
			let j = i + 1
			while (j < text.length && depth > 0) {
				if (text[j] === '(') depth++
				else if (text[j] === ')') depth--
				j++
			}
			const inner = text.slice(i + 1, j - 1)
			const { translated: t, foundAny: f } = translateClasses(inner, registry, unresolved)
			if (f) foundAny = true
			result += `(${t})`
			i = j
		} else if (ch === '.') {
			// Class token
			i++
			const start = i
			while (i < text.length && /[\w-]/.test(text[i])) i++
			const cls = text.slice(start, i)
			const symbol = registry.classToContract(cls)
			if (symbol) {
				result += ref(symbol)
				foundAny = true
			} else {
				unresolved.push(`.${cls}`)
				result += `.${cls}`
			}
		} else {
			result += ch
			i++
		}
	}

	return { translated: result, foundAny }
}

/**
 * Translate a single compound selector segment (no combinators).
 * Returns the VE template-literal content for this segment.
 */
function translateCompoundSegment(
	segment,
	scopeVarName,
	registry,
	unresolved,
	isPureElementSelector = false,
) {
	const s = segment.trim()
	if (!s || s === '*') return s

	let i = 0
	let segContent = ''
	let hasNamedParts = false
	let isElementContract = false

	// Leading element tag (e.g. `a`, `h1`, `input`)
	if (/[a-zA-Z_]/.test(s[0])) {
		while (i < s.length && /[\w-]/.test(s[i])) i++
		const tag = s.slice(0, i).toLowerCase()
		const contract = registry.tagToContract(tag)
		if (contract) {
			segContent += ref(contract)
			hasNamedParts = true
			isElementContract = true
		} else if (registry.isDivergenceTag(tag)) {
			// `body` in descendant position (e.g. Quartz's `[data-bs-theme=dark] body`)
			// Route to bodyText — same contract used by the scope.css.ts bodyText rule.
			segContent += ref('bodyText')
			hasNamedParts = true
		} else {
			// Unknown tag — keep literal (no scope prefix for this segment)
			segContent += tag
		}
	}

	// Remaining: classes, pseudos, attrs, ::before, etc.
	const remaining = s.slice(i)
	if (remaining) {
		const { translated, foundAny } = translateClasses(remaining, registry, unresolved)
		segContent += translated
		if (foundAny) hasNamedParts = true
	}

	// Only prefix with scope if the segment has at least one named contract ref —
	// EXCEPT an attribute-only segment (e.g. `[type=checkbox]`, `[disabled]`), which still
	// targets a scoped element. Scope-prefix it so it stays theme-scoped and carries
	// class-level specificity (0,2,0), competing with `${scope}${contract}` rules instead of
	// being a global (0,1,0) selector that loses to them. Pure `*` / bare pseudo stay unscoped.
	if (!hasNamedParts) {
		if (segContent.includes('[')) return ref(scopeVarName) + segContent
		return segContent
	}

	// Bare element segments of a PURE-element selector (e.g. `a`, `h1`, `table th`, `ol ol`)
	// use :where() to keep element-level (low) specificity, so class-bearing rules win as in
	// Bootstrap. A trailing element in a class-bearing selector (e.g. `.table-dark th`) keeps
	// its specificity so it can beat the `.table > … > *` cell rule.
	if (isElementContract && !remaining.trim() && isPureElementSelector) {
		return `:where(${ref(scopeVarName)}${segContent})`
	}
	return ref(scopeVarName) + segContent
}

/**
 * Extract combinator strings between adjacent segments.
 * Returns an array of length (segments.length - 1).
 */
function extractCombinators(selector, segments) {
	const combinators = []
	let pos = 0
	for (let k = 0; k < segments.length - 1; k++) {
		const idx = selector.indexOf(segments[k], pos)
		pos = idx + segments[k].length
		const nextIdx = selector.indexOf(segments[k + 1], pos)
		const between = selector.slice(pos, nextIdx).trim()
		if (between === '>') combinators.push(' > ')
		else if (between === '+') combinators.push(' + ')
		else if (between === '~') combinators.push(' ~ ')
		else combinators.push(' ')
		pos = nextIdx
	}
	return combinators
}

/**
 * Expand a lone substring/prefix class-attribute selector (`[class*=btn-outline-]`,
 * `[class^=col-]`, …) into the contract classes it matches. In the element-owned model
 * the real DOM classes are hashed, so such attribute selectors can never match by passing
 * through verbatim — they must be rewritten to the set of contract refs whose Bootstrap
 * class name matches. Returns an array of `${scope}${contract}` strings, or null if the
 * comma-part is not a lone class-attribute selector.
 *
 * ponytail: only the standalone single-segment form occurs in the 27 themes
 * (`[class*=btn-outline-]`). A compound like `.x [class*=y]` would need a cartesian
 * expansion — add that only if such a selector ever appears.
 */
function expandClassAttrSelector(commaPart, scopeVarName, registry) {
	const m = /^\[class([*^$~|]?)=(['"]?)([^'"\]]+)\2\]$/.exec(commaPart.trim())
	if (!m) return null
	const [, op, , value] = m
	const matches = (cls) => {
		switch (op) {
			case '*': return cls.includes(value)
			case '^': return cls.startsWith(value)
			case '$': return cls.endsWith(value)
			case '|': return cls === value || cls.startsWith(`${value}-`)
			default: return cls === value // '' (exact) and '~' (single-word class)
		}
	}
	const syms = []
	for (const [cls, sym] of registry.classMap) {
		if (matches(cls)) syms.push(sym)
	}
	if (syms.length === 0) return null
	// Dedupe symbols (distinct classes can map to the same contract) and emit one ref each.
	return [...new Set(syms)].map((sym) => `${ref(scopeVarName)}${ref(sym)}`)
}

/**
 * Translate a full CSS selector to its VE template-literal content.
 * Returns { translated, unresolved } or null if untranslatable.
 */
function translateSelector(cssSelector, scopeVarName, registry) {
	const unresolved = []
	const commaParts = splitSelectorList(cssSelector)
	const veParts = []

	for (const commaPart of commaParts) {
		// Substring/prefix class-attribute selectors expand to the matching contracts.
		const expanded = expandClassAttrSelector(commaPart, scopeVarName, registry)
		if (expanded) {
			veParts.push(...expanded)
			continue
		}

		const segments = splitByCombinators(commaPart)
		if (segments.length === 0) continue
		const combinators = extractCombinators(commaPart, segments)
		// A "pure element" selector contains only tags / combinators / `*` — no class, id,
		// attribute, or pseudo. Such selectors carry only element specificity in the source
		// (e.g. `table th` = 0,0,2) and must STAY low so class-bearing rules win, so every
		// element segment is wrapped in :where(). When any class/attr/etc. is present the
		// element segments keep their specificity (e.g. `.table-dark th` must beat the
		// `.table > … > *` cell rule).
		const isPureElementSelector = !/[.#[:\]]/.test(commaPart)
		const veSegs = []
		for (const seg of segments) {
			const t = translateCompoundSegment(
				seg,
				scopeVarName,
				registry,
				unresolved,
				isPureElementSelector,
			)
			if (t === null) return null
			veSegs.push(t)
		}
		let vePart = veSegs[0]
		for (let k = 1; k < veSegs.length; k++) vePart += combinators[k - 1] + veSegs[k]
		veParts.push(vePart)
	}

	return { translated: veParts.join(', '), unresolved }
}

// ─── declaration translation ──────────────────────────────────────────────────

/**
 * Split CSS declarations into regular props and CSS custom-property assignments.
 * CSS vars (`--*`) must go in a VE `vars: {}` block, not as top-level keys.
 *
 * @returns {{ propLines: string[], varLines: string[] }}
 *   propLines — `key: value,` lines (no leading indent)
 *   varLines  — `[sym]: value,` or `'--x': value,` lines (no leading indent)
 */
function translateDeclarations(declarations, cssVarToSymbol, usedVarSymbols) {
	const propLines = []
	const varLines = []

	for (const [prop, rawValue] of Object.entries(declarations)) {
		const formatted = formatVeValue(
			parseVeValue(rawValue, (cssVar) => {
				const sym = cssVarToSymbol(cssVar)
				if (sym) usedVarSymbols.add(sym)
				return sym
			}),
		)

		if (prop.startsWith('--')) {
			// CSS custom property assignment → must go in vars block
			const propSym = cssVarToSymbol(prop)
			if (propSym) {
				usedVarSymbols.add(propSym)
				varLines.push(`[${propSym}]: ${formatted},`)
			} else {
				varLines.push(`'${prop}': ${formatted},`)
			}
		} else {
			propLines.push(`${cssPropToVeKey(prop)}: ${formatted},`)
		}
	}

	return { propLines, varLines }
}

// ─── output helpers ───────────────────────────────────────────────────────────

/**
 * @param {string} veSelector
 * @param {{ propLines: string[], varLines: string[] }} decls
 * @param {string[]} mediaStack
 */
function emitGlobalStyle(veSelector, { propLines, varLines }, mediaStack) {
	if (propLines.length === 0 && varLines.length === 0) return ''
	const selectorLiteral = '`' + veSelector + '`'

	if (mediaStack.length === 0) {
		const body = []
		if (varLines.length > 0) {
			body.push('\tvars: {')
			for (const l of varLines) body.push(`\t\t${l}`)
			body.push('\t},')
		}
		for (const l of propLines) body.push(`\t${l}`)
		return [`globalStyle(${selectorLiteral}, {`, ...body, '})', ''].join('\n')
	}

	const raw = mediaStack[0]
	const atRuleType = raw.startsWith('supports ')
		? '@supports'
		: raw.startsWith('container ') ? '@container' : '@media'
	const query = raw.replace(/^(supports|container) /, '')

	const inner = []
	if (varLines.length > 0) {
		inner.push('\t\t\tvars: {')
		for (const l of varLines) inner.push(`\t\t\t\t${l}`)
		inner.push('\t\t\t},')
	}
	for (const l of propLines) inner.push(`\t\t\t${l}`)

	return [
		`globalStyle(${selectorLiteral}, {`,
		`\t'${atRuleType}': {`,
		`\t\t'${query}': {`,
		...inner,
		`\t\t},`,
		`\t},`,
		'})',
		'',
	].join('\n')
}

function emitKeyframes(name, steps) {
	const lines = [`globalKeyframes('${name}', {`]
	for (const step of steps) {
		let pct
		if (Array.isArray(step.values)) pct = step.values.join(', ')
		else if (step.type === 'from') pct = 'from'
		else if (step.type === 'to') pct = 'to'
		else pct = String(step.value ?? '0%')

		lines.push(`\t'${pct}': {`)
		for (const d of (step.declarations ?? [])) {
			if (d.type === 'declaration') lines.push(`\t\t${cssPropToVeKey(d.property)}: '${d.value}',`)
		}
		lines.push('\t},')
	}
	lines.push('})', '')
	return lines.join('\n')
}

// ─── import building ──────────────────────────────────────────────────────────

/** Build a symbol → import path map for element contracts from contractsByFamily.
 *
 * Priority (lowest → highest, later passes override earlier):
 *   1. utilities/generated — massive catch-all; lowest priority
 *   2. literal             — covers all Bootstrap class tokens; beats generated
 *   3. utilities           — curated hand-written subset; beats literal
 *   4. everything else     — specific family contracts; highest priority
 *
 * The literal pass sits between utilities/generated and utilities so that
 * utility symbols absent from utilities/contract.css (e.g. mb0) resolve to
 * literal/contract.css — matching what components stamp — while symbols
 * that ARE in utilities/contract.css (e.g. mb3) still resolve there.
 */
function buildElementImportPaths(varRegistry) {
	const symbolToPath = new Map()
	// Pass 1: utilities/generated (lowest priority)
	for (const [family, symbols] of varRegistry.contractsByFamily) {
		if (family !== 'utilities/generated') continue
		const importPath = getContractImportPath(family)
		if (!importPath) continue
		for (const sym of symbols) {
			symbolToPath.set(sym, `${REL_CONTRACT_ROOT}/${importPath}`)
		}
	}
	// Pass 2: literal (overrides utilities/generated; gets overridden by utilities)
	for (const [family, symbols] of varRegistry.contractsByFamily) {
		if (family !== 'literal') continue
		const importPath = getContractImportPath(family)
		if (!importPath) continue
		for (const sym of symbols) {
			symbolToPath.set(sym, `${REL_CONTRACT_ROOT}/${importPath}`)
		}
	}
	// Pass 3: utilities (overrides literal for symbols also in utilities/contract.css)
	for (const [family, symbols] of varRegistry.contractsByFamily) {
		if (family !== 'utilities') continue
		const importPath = getContractImportPath(family)
		if (!importPath) continue
		for (const sym of symbols) {
			symbolToPath.set(sym, `${REL_CONTRACT_ROOT}/${importPath}`)
		}
	}
	// Pass 4: all specific families (highest priority)
	for (const [family, symbols] of varRegistry.contractsByFamily) {
		if (family === 'utilities/generated' || family === 'utilities' || family === 'literal') continue
		const importPath = getContractImportPath(family)
		if (!importPath) continue
		for (const sym of symbols) {
			symbolToPath.set(sym, `${REL_CONTRACT_ROOT}/${importPath}`)
		}
	}
	return symbolToPath
}

/** Emit a single import statement, multi-line if > 3 symbols. */
function emitImport(lines, sortedSymbols, importPath) {
	if (sortedSymbols.length === 0) return
	if (sortedSymbols.length <= 3) {
		lines.push(`import { ${sortedSymbols.join(', ')} } from '${importPath}'`)
	} else {
		lines.push(`import {`)
		for (const s of sortedSymbols) lines.push(`\t${s},`)
		lines.push(`} from '${importPath}'`)
	}
}

function buildImportBlock(
	scopeVarName,
	usedClassSymbols,
	usedElementSymbols,
	usedVarSymbols,
	usedRootSymbols,
	varRegistry,
	elementImportPaths,
	usesFallbackVar = false,
) {
	const lines = []
	const veImports = usesFallbackVar
		? 'fallbackVar, globalKeyframes, globalStyle'
		: 'globalKeyframes, globalStyle'
	lines.push(`import { ${veImports} } from '@vanilla-extract/css'`)
	lines.push(`import { ${scopeVarName} } from '${REL_SCOPE}'`)
	lines.push('')

	// Var symbols grouped by _vars.css import path
	const varsByPath = new Map()
	for (const sym of usedVarSymbols) {
		const family = varRegistry.symbolToFamily.get(sym)
		if (!family) continue
		const vPath = getVarsImportPath(family)
		if (!vPath) continue
		const full = `${REL_CONTRACT_ROOT}/${vPath}`
		if (!varsByPath.has(full)) varsByPath.set(full, new Set())
		varsByPath.get(full).add(sym)
	}
	if (varsByPath.size > 0) {
		for (const [iPath, syms] of [...varsByPath].sort()) {
			emitImport(lines, [...syms].sort(), iPath)
		}
		lines.push('')
	}

	// Element contracts grouped by their contract file
	const elementByPath = new Map()
	for (const sym of usedElementSymbols) {
		const iPath = elementImportPaths.get(sym)
		if (!iPath) {
			console.warn(`  [emit] no import path found for element contract "${sym}"`)
			continue
		}
		if (!elementByPath.has(iPath)) elementByPath.set(iPath, new Set())
		elementByPath.get(iPath).add(sym)
	}
	if (elementByPath.size > 0) {
		for (const [iPath, syms] of [...elementByPath].sort()) {
			emitImport(lines, [...syms].sort(), iPath)
		}
		lines.push('')
	}

	// Root contracts (bodyText/bodyFrame) from theme-contract.css
	if (usedRootSymbols.size > 0) {
		const sorted = [...usedRootSymbols].sort()
		emitImport(lines, sorted, `${REL_CONTRACT_ROOT}/theme-contract.css`)
		lines.push('')
	}

	// Class contracts: route each symbol to the highest-priority family contract that
	// defines it (per buildElementImportPaths priority). Symbols found in no family
	// contract fall back to literal/contract.css.
	const classByPath = new Map()
	const literalFallbackSymbols = []
	for (const sym of usedClassSymbols) {
		const knownPath = elementImportPaths.get(sym)
		if (knownPath) {
			if (!classByPath.has(knownPath)) classByPath.set(knownPath, new Set())
			classByPath.get(knownPath).add(sym)
		} else {
			literalFallbackSymbols.push(sym)
		}
	}
	if (classByPath.size > 0) {
		for (const [iPath, syms] of [...classByPath].sort()) {
			emitImport(lines, [...syms].sort(), iPath)
		}
		lines.push('')
	}
	if (literalFallbackSymbols.length > 0) {
		emitImport(lines, literalFallbackSymbols.sort(), `${REL_CONTRACT_ROOT}/literal/contract.css`)
		lines.push('')
	}

	return lines.join('\n')
}

// ─── main emitter ─────────────────────────────────────────────────────────────

/**
 * Generate the v2 literal styles file for one theme.
 *
 * @param {string} theme - theme slug (e.g. 'bootstrap')
 * @param {{ filter?: string, dryRun?: boolean, strict?: boolean }} opts
 * @returns {Promise<{ report: object, outPath: string, exitCode: number }>}
 */
export async function emitLiteralStyles(theme, opts = {}) {
	const { filter, dryRun = false, strict = false } = opts

	const [cssText, literalRegistry, varRegistry] = await Promise.all([
		loadBootstrapCss(theme),
		buildLiteralRegistry(),
		buildContractRegistry(),
	])

	const ast = parseBootstrapCss(cssText)
	const units = walkCssEmitUnits(ast, { includeRootVars: true })
	const scopeVarName = themeScopeExportName(theme)
	const cssVarToSymbol = (cssVar) => varRegistry.cssVarToSymbol.get(cssVar) ?? null
	const elementImportPaths = buildElementImportPaths(varRegistry)

	const usedClassSymbols = new Set()
	const usedElementSymbols = new Set()
	const usedVarSymbols = new Set()
	const usedRootSymbols = new Set()

	const bodyLines = []
	const skipped = []
	const report = {
		emitted: 0,
		skippedCount: 0,
		keyframesEmitted: 0,
		skipped: [],
	}

	for (const unit of units) {
		if (unit.kind === 'keyframes') {
			bodyLines.push(emitKeyframes(unit.name, unit.steps))
			report.keyframesEmitted++
			continue
		}

		// Global `--bs-*` var blocks (`:root` / `[data-bs-theme=dark]`) are assigned onto
		// the `vars` contract so all themed descendants inherit them via the cascade — the
		// single source of truth for root vars (plan §6.3). The registry resolves each var
		// symbol to its owning `_vars.css` module, so component vars set at `:root`
		// (e.g. `--bs-carousel-*` in `ui/carousel/_vars.css`) can never be misrouted.
		if (unit.kind === 'rootVars') {
			const decls = translateDeclarations(unit.declarations, cssVarToSymbol, usedVarSymbols)
			if (decls.varLines.length === 0 && decls.propLines.length === 0) continue
			const veSelector =
				unit.variant === 'dark'
					? `${ref(scopeVarName)}${ref('vars')}[data-bs-theme=dark]`
					: `${ref(scopeVarName)}${ref('vars')}`
			usedRootSymbols.add('vars')
			bodyLines.push(emitGlobalStyle(veSelector, decls, unit.media))
			report.emitted++
			continue
		}

		if (unit.kind !== 'rule') continue
		const { selector, declarations, media } = unit

		if (filter && !selector.toLowerCase().includes(filter.toLowerCase())) continue

		// Primary divergence — intercepts and replaces normal processing
		const divergence = findDivergence(selector)
		if (divergence) {
			if (divergence.action === 'skip') {
				skipped.push({ selector, reason: `divergence:${divergence.id}` })
				continue
			}
			if (divergence.action === 'splitProps') {
				const routes = applySplitProps(divergence, declarations)
				for (const { contract: contractName, declarations: routeDecls } of routes) {
					const decls = translateDeclarations(routeDecls, cssVarToSymbol, usedVarSymbols)
					if (decls.propLines.length === 0 && decls.varLines.length === 0) continue
					const veSelector = `${ref(scopeVarName)}${ref(contractName)}`
					usedRootSymbols.add(contractName)
					bodyLines.push(emitGlobalStyle(veSelector, decls, media))
					report.emitted++
				}
				continue
			}
			if (divergence.action === 'overrideSelector') {
				// Build VE selector from the manifest-specified contract list
				const veSelector = ref(scopeVarName) + divergence.contracts.map(ref).join('')
				for (const sym of divergence.contracts) {
					if (ROOT_CONTRACT_SYMBOLS.has(sym)) usedRootSymbols.add(sym)
					else if (ELEMENT_CONTRACT_VALUES.has(sym)) usedElementSymbols.add(sym)
					else usedClassSymbols.add(sym)
				}
				const decls = translateDeclarations(declarations, cssVarToSymbol, usedVarSymbols)
				if (decls.propLines.length > 0 || decls.varLines.length > 0) {
					bodyLines.push(emitGlobalStyle(veSelector, decls, media))
					report.emitted++
				}
				continue
			}
		}

		// Translate selector
		const result = translateSelector(selector, scopeVarName, literalRegistry)
		if (!result) {
			skipped.push({ selector, reason: 'untranslatable' })
			report.skippedCount++
			if (strict) console.error(`[strict] Untranslatable selector: ${selector}`)
			continue
		}

		const { translated: rawVeSelector, unresolved } = result
		if (unresolved.length > 0) {
			skipped.push({ selector, reason: `unresolved: ${unresolved.join(', ')}` })
			report.skippedCount++
			if (strict) console.error(`[strict] Unresolved tokens in "${selector}": ${unresolved.join(', ')}`)
			continue
		}

		// Apply remapSymbols divergences: substitute component-specific contracts for
		// shared state contracts (e.g. active→navLinkActive) in matching selectors.
		let veSelector = rawVeSelector
		for (const remap of findRemaps(selector)) {
			for (const [from, to] of Object.entries(remap.symbolMap)) {
				veSelector = veSelector.replaceAll(`\${${from}}`, `\${${to}}`)
			}
		}

		const decls = translateDeclarations(declarations, cssVarToSymbol, usedVarSymbols)
		if (decls.propLines.length === 0 && decls.varLines.length === 0) continue

		bodyLines.push(emitGlobalStyle(veSelector, decls, media))
		report.emitted++

		// Track which contract symbols were used in this selector
		for (const m of veSelector.matchAll(/\$\{(\w+)\}/g)) {
			const sym = m[1]
			if (sym === scopeVarName) continue
			if (ROOT_CONTRACT_SYMBOLS.has(sym)) {
				usedRootSymbols.add(sym)
			} else if (ELEMENT_CONTRACT_VALUES.has(sym)) {
				usedElementSymbols.add(sym)
			} else {
				usedClassSymbols.add(sym)
			}
		}

		// Additive divergences — emit extra rules without replacing the original
		for (const addition of findAdditions(selector)) {
			if (addition.action === 'addMirrorRule') {
				const subs = addition.substitutes ?? [addition.substitute]
				let mirrorSelector = veSelector
				for (const sub of subs) {
					mirrorSelector = mirrorSelector.replaceAll(ref(sub.fromContract), ref(sub.toContract))
				}
				if (mirrorSelector !== veSelector) {
					bodyLines.push(emitGlobalStyle(mirrorSelector, decls, media))
					report.emitted++
					for (const sub of subs) {
						const sym = sub.toContract
						if (ROOT_CONTRACT_SYMBOLS.has(sym)) usedRootSymbols.add(sym)
						else if (ELEMENT_CONTRACT_VALUES.has(sym)) usedElementSymbols.add(sym)
						else usedClassSymbols.add(sym)
					}
				}
			}
		}
	}

	// Append extra class-contract rules that have no Bootstrap CSS class selector
	// but are stamped directly by VE2 components (mirrors of element rules).
	for (const extra of EXTRA_RULES) {
		const contracts = extra.contracts ?? [extra.contract]
		const veSelector = `${ref(scopeVarName)}${contracts.map((c) => ref(c)).join('')}`
		const propLines = Object.entries(extra.props).map(([k, v]) => `${k}: '${v}',`)
		bodyLines.push(emitGlobalStyle(veSelector, { propLines, varLines: [] }, []))
		report.emitted++
		for (const sym of contracts) {
			if (ROOT_CONTRACT_SYMBOLS.has(sym)) usedRootSymbols.add(sym)
			else if (ELEMENT_CONTRACT_VALUES.has(sym)) usedElementSymbols.add(sym)
			else usedClassSymbols.add(sym)
		}
	}

	report.skipped = skipped

	const outPath = path.join(VE2_THEMES_ROOT, theme, 'literal', 'styles.css.ts')

	if (!dryRun) {
		const usesFallbackVar = bodyLines.some((l) => l.includes('fallbackVar('))
		const importBlock = buildImportBlock(
			scopeVarName,
			usedClassSymbols,
			usedElementSymbols,
			usedVarSymbols,
			usedRootSymbols,
			varRegistry,
			elementImportPaths,
			usesFallbackVar,
		)
		const content = importBlock + '\n' + bodyLines.join('\n')
		await mkdir(path.dirname(outPath), { recursive: true })
		await writeFile(outPath, content, 'utf8')
	}

	const exitCode = strict && report.skippedCount > 0 ? 1 : 0
	return { report, outPath, exitCode }
}
