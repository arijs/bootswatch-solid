import {
	cssPropToVeKey,
	formatVeValue,
	normalizeSelector,
	ELEMENT_SELECTOR_BY_FAMILY,
	FAMILY_CLASS_TO_CONTRACT,
	FAMILY_STATE_CLASS_BY_PARENT,
	isScopedFamilySelector,
	ORPHAN_STATE_SEGMENT_BY_FAMILY,
	resolveTableWildcardContract,
	STATE_CLASS_BY_PARENT_SELECTOR,
	STATE_ONLY_CLASSES,
} from './css-utils.mjs'

const IDENTIFIER_PATTERN = /^[a-zA-Z_$][\w$]*$/

/**
 * Convert CSS declarations object to VE style object entries.
 */
export function declarationsToVeProps(declarations, registry, { varsOnly = false, propsOnly = false } = {}) {
	const varsEntries = []
	const propEntries = []
	const unmappedVars = []

	for (const [prop, value] of Object.entries(declarations)) {
		if (prop.startsWith('--bs-')) {
			const symbol = registry.cssVarToSymbol.get(prop)
			if (!symbol) {
				unmappedVars.push(prop)
				continue
			}
			varsEntries.push(`\t\t[${symbol}]: ${formatVeValue(value, registry)},`)
		} else if (!varsOnly) {
			const key = cssPropToVeKey(prop)
			propEntries.push(`\t${key}: ${formatVeValue(value, registry)},`)
		}
	}

	if (varsOnly) return { varsEntries, propEntries: [], unmappedVars }
	if (propsOnly) return { varsEntries: [], propEntries, unmappedVars }
	return { varsEntries, propEntries, unmappedVars }
}

/**
 * Split a CSS selector into segments and combinators, respecting parentheses.
 */
function tokenizeCssSelector(selector) {
	const tokens = []
	let current = ''
	let depth = 0

	const pushSegment = () => {
		const trimmed = current.trim()
		if (trimmed) tokens.push({ type: 'segment', value: trimmed })
		current = ''
	}

	for (let i = 0; i < selector.length; i++) {
		const ch = selector[i]
		if (ch === '(') depth++
		if (ch === ')') depth = Math.max(0, depth - 1)

		if (depth === 0 && (ch === '>' || ch === '+' || ch === '~')) {
			pushSegment()
			tokens.push({ type: 'combinator', value: ch })
			continue
		}

		if (depth === 0 && /\s/.test(ch)) {
			let j = i + 1
			while (j < selector.length && /\s/.test(selector[j])) j++
			const next = selector[j]
			if (current.trim() && next && next !== '>' && next !== '+' && next !== '~') {
				pushSegment()
				tokens.push({ type: 'combinator', value: ' ' })
				i = j - 1
				continue
			}
			if (!current.trim()) continue
		}

		current += ch
	}

	pushSegment()
	return tokens
}

function combinatorToString(combinator) {
	if (combinator === ' ') return ' '
	if (combinator === '>') return ' > '
	if (combinator === '+') return ' + '
	if (combinator === '~') return ' ~ '
	return combinator
}

/** Extract leading class tokens and trailing pseudo suffix from a simple segment. */
function extractClassesAndSuffix(segment) {
	const classes = []
	let i = 0
	while (i < segment.length) {
		if (segment[i] === '.') {
			const match = segment.slice(i).match(/^\.([a-z0-9_-]+)/i)
			if (match) {
				classes.push(`.${match[1]}`)
				i += match[0].length
				continue
			}
		}
		break
	}
	return { classes, suffix: segment.slice(i) }
}

function inferPrimarySelectorFromClasses(classes) {
	for (const cls of classes) {
		if (!STATE_ONLY_CLASSES.has(cls)) return cls
	}
	return null
}

function resolveStateContract(stateClass, parentSelector, family, registry, siblingClasses = []) {
	const familyMap = family ? FAMILY_STATE_CLASS_BY_PARENT[family] : null
	if (parentSelector && familyMap?.[parentSelector]?.[stateClass]) {
		return familyMap[parentSelector][stateClass]
	}
	if (parentSelector && STATE_CLASS_BY_PARENT_SELECTOR[parentSelector]?.[stateClass]) {
		return STATE_CLASS_BY_PARENT_SELECTOR[parentSelector][stateClass]
	}
	if (
		stateClass === '.active' &&
		siblingClasses.some((cls) => cls.startsWith('.carousel-item'))
	) {
		return 'carouselActive'
	}
	return registry.resolveContractForSelector(stateClass)
}

function convertClassToken(
	className,
	scopeName,
	registry,
	warnings,
	{ elementParent, ancestorSelector, siblingClasses, family, scopePrefix = true },
) {
	if (STATE_ONLY_CLASSES.has(className)) {
		const primary =
			elementParent ??
			inferPrimarySelectorFromClasses(siblingClasses) ??
			ancestorSelector ??
			null
		const contract = resolveStateContract(className, primary, family, registry, siblingClasses)
		if (contract) return `\${${contract}}`
		warnings.push(`[UNMAPPED_SELECTOR] state class "${className}" — no contract mapping`)
		return className
	}

	const familyContract = family ? FAMILY_CLASS_TO_CONTRACT[family]?.[className] : null
	if (familyContract) {
		return scopePrefix ? `\${${scopeName}}\${${familyContract}}` : `\${${familyContract}}`
	}

	const contract = registry.resolveContractForSelector(className)
	if (!contract) {
		warnings.push(`[UNMAPPED_SELECTOR] class "${className}" — no contract mapping`)
		return className
	}
	return scopePrefix ? `\${${scopeName}}\${${contract}}` : `\${${contract}}`
}

function convertClassList(classes, scopeName, registry, warnings, { elementParent, ancestorSelector, family }) {
	return classes
		.map((className, index) =>
			convertClassToken(className, scopeName, registry, warnings, {
				elementParent,
				ancestorSelector,
				siblingClasses: classes,
				family,
				scopePrefix: index === 0,
			}),
		)
		.join('')
}

function convertPseudoSuffix(suffix, scopeName, registry, warnings, context) {
	if (!suffix) return ''

	return suffix.replace(/:not\(([^)]+)\)/g, (_, inner) => {
		const innerTrimmed = inner.trim()
		const { classes } = extractClassesAndSuffix(innerTrimmed)
		if (classes.length > 0) {
			const converted = convertClassList(classes, scopeName, registry, warnings, context)
			return `:not(${converted})`
		}
		const converted = convertSimpleSegment(innerTrimmed, scopeName, registry, warnings, context)
		return `:not(${converted})`
	})
}

/**
 * Build VE selector from Bootstrap CSS selector using scope + contract symbols.
 * Returns { veSelector, warnings }
 */
export function cssSelectorToVeSelector(cssSelector, scopeName, registry, { family = null } = {}) {
	const warnings = []
	const tokens = tokenizeCssSelector(cssSelector)
	const starCount = tokens.filter((t) => t.type === 'segment' && t.value === '*').length
	let starIndex = 0
	let ancestorSelector = null
	let previousSegment = ''
	const converted = tokens.map((token) => {
		if (token.type === 'combinator') return combinatorToString(token.value)
		const result = convertSimpleSegment(token.value, scopeName, registry, warnings, {
			ancestorSelector,
			family,
			starIndex: token.value === '*' ? starIndex : null,
			totalStars: starCount,
			previousSegment,
		})
		if (token.value === '*') starIndex++
		const { classes } = extractClassesAndSuffix(token.value)
		const primary = inferPrimarySelectorFromClasses(classes)
		if (primary) ancestorSelector = primary
		previousSegment = result
		return result
	})

	return { veSelector: converted.join(''), warnings }
}

function convertSimpleSegment(
	segment,
	scopeName,
	registry,
	warnings,
	{ ancestorSelector = null, family = null, starIndex = null, totalStars = 0, previousSegment = '' } = {},
) {
	const notOnly = segment.match(/^:not\((.+)\)$/)
	if (notOnly) {
		const inner = convertSimpleSegment(notOnly[1], scopeName, registry, warnings, {
			ancestorSelector,
			family,
			previousSegment,
		})
		return `:not(${inner})`
	}

	if (!segment.startsWith('.')) {
		if (/^h[1-6]$/.test(segment) || segment === 'p' || segment === 'hr' || segment === 'small') {
			const contract = registry.resolveContractForSelector(segment)
			if (!contract) {
				warnings.push(`[UNMAPPED_SELECTOR] element selector "${segment}" — map to a contract class`)
				return segment
			}
			return `\${${scopeName}}\${${contract}}`
		}

		const familyElements = family ? ELEMENT_SELECTOR_BY_FAMILY[family] : null
		if (familyElements) {
			const elementMatch = segment.match(/^(\*|[a-z]+)((?:[:[].*)?)$/i)
			if (elementMatch) {
				const tag = elementMatch[1].toLowerCase()
				const suffix = elementMatch[2] ?? ''
				let contract = familyElements[tag]
				if (tag === '*' && family === 'contents/tables' && starIndex !== null) {
					contract = resolveTableWildcardContract(starIndex, totalStars, previousSegment)
				}
				if (contract) {
					return `\${${scopeName}}\${${contract}}${suffix}`
				}
				if (tag === 'caption') {
					return 'caption'
				}
			}
		}

		if (segment.startsWith(':')) {
			return segment
		}
		warnings.push(`[UNMAPPED_SELECTOR] element selector "${segment}" — map to a contract class`)
		return segment
	}

	const { classes, suffix } = extractClassesAndSuffix(segment)
	if (classes.length === 0) return segment

	const orphanParents =
		classes.length === 1 && STATE_ONLY_CLASSES.has(classes[0])
			? ORPHAN_STATE_SEGMENT_BY_FAMILY[family]?.[classes[0]]
			: null
	if (orphanParents) {
		const [parentContract, stateContract] = orphanParents
		const convertedSuffix = convertPseudoSuffix(suffix, scopeName, registry, warnings, {
			elementParent: null,
			ancestorSelector,
			family,
		})
		return `\${${scopeName}}\${${parentContract}}\${${stateContract}}${convertedSuffix}`
	}

	const elementParent = inferPrimarySelectorFromClasses(classes)
	const convertedClasses = convertClassList(classes, scopeName, registry, warnings, {
		elementParent,
		ancestorSelector,
		family,
	})

	const convertedSuffix = convertPseudoSuffix(suffix, scopeName, registry, warnings, {
		elementParent,
		ancestorSelector,
		family,
	})

	return `${convertedClasses}${convertedSuffix}`
}

/** In tables family, `> *` cell wildcards match both td and th contracts. */
function expandTableCellSelectors(veSelector, family) {
	if (family !== 'contents/tables') return [veSelector]
	if (!/\$\{tableCell\}/.test(veSelector)) return [veSelector]
	return [veSelector, veSelector.replace(/\$\{tableCell\}/g, '${tableHeaderCell}')]
}

function formatGlobalStyleSelector(selectors) {
	if (selectors.length === 1) return `\`${selectors[0]}\``
	return `[\n\t\`${selectors[0]}\`,\n\t\`${selectors[1]}\`,\n]`
}

function appendBtnVariantPaintProps(propEntries, declarations) {
	if (!declarations['--bs-btn-bg']) return
	const paint = [
		['backgroundColor', 'varBsBtnBg'],
		['color', 'varBsBtnColor'],
	]
	for (const [key, symbol] of paint) {
		if (propEntries.some((line) => line.includes(`${key}:`))) continue
		propEntries.push(`\t${key}: ${symbol},`)
	}
}

export function upgradeBtnBorderOverride(cssSelector, propEntries, declarations) {
	upgradeBorderColorOverlay(cssSelector, propEntries, declarations)
}

/** When theme delta sets border-color, emit a full border shorthand so it overrides earlier `border` rules. */
export function upgradeBorderColorOverlay(cssSelector, propEntries, declarations) {
	if (declarations['border-color'] == null) return
	const sel = normalizeSelector(cssSelector)
	const isBtn = sel === '.btn'
	const isListGroupItem = sel === '.list-group-item' || /^\.list-group-item-[a-z]+$/.test(sel)
	if (!isBtn && !isListGroupItem) return
	const idx = propEntries.findIndex((line) => /\bborderColor:/.test(line))
	if (idx < 0) return
	propEntries.splice(idx, 1)
	const widthVar = isBtn ? 'varBsBtnBorderWidth' : 'varBsListGroupBorderWidth'
	propEntries.push(`\tborder: \`\${${widthVar}} solid ${declarations['border-color']}\`,`)
}

/**
 * Apply generator-specific selector fixes after cssSelectorToVeSelector.
 * Shared by scratch generation and two-pass hydrate re-transpilation.
 */
export function finalizeVeSelector(cssSelector, veSelector, declarations, family) {
	let resolvedSelector = veSelector

	if (
		family === 'ui/modal' &&
		normalizeSelector(cssSelector) === '.fade:not(.show)'
	) {
		resolvedSelector = resolvedSelector.replace(
			/\$\{(\w+)\}\$\{fade\}/,
			'${$1}${modal}${fade}',
		)
		resolvedSelector = resolvedSelector.replace(
			/:not\(\$\{modalShowHook\}\)$|:not\(\.show\)$/,
			':not(${modalShowHook})',
		)
	}

	if (
		family === 'ui/card' &&
		normalizeSelector(cssSelector) === '.card-header-tabs .nav-link.active'
	) {
		resolvedSelector = resolvedSelector.replace(
			/\$\{(\w+)\}\$\{cardHeaderTabs\}/,
			'${$1}${navTabs}${cardHeaderTabs}',
		)
	}

	if (
		family === 'ui/modal' &&
		normalizeSelector(cssSelector) === '.modal-backdrop.fade' &&
		declarations.opacity === '0'
	) {
		resolvedSelector = `${resolvedSelector}:not(\${modalShowHook})`
	}

	// Nav tab panes own fade opacity — bare `.fade:not(.show)` would hit modal/backdrop fade.
	if (
		family === 'ui/navs' &&
		normalizeSelector(cssSelector) === '.fade:not(.show)' &&
		declarations.opacity === '0'
	) {
		resolvedSelector = resolvedSelector.replace(
			/\$\{(\w+)\}\$\{fade\}/,
			'${$1}${tabPane}${fade}',
		)
	}

	// Tooltips/popovers reuse modal `fade`; scope opacity rule to the tooltip/popover root.
	if (
		(family === 'ui/tooltips' || family === 'ui/popovers') &&
		normalizeSelector(cssSelector) === '.fade:not(.show)' &&
		declarations.opacity === '0'
	) {
		const rootContract = family === 'ui/tooltips' ? 'tooltipVe' : 'popoverVe'
		const showHook = family === 'ui/tooltips' ? 'tooltipShow' : 'popoverShow'
		resolvedSelector = resolvedSelector.replace(
			/\$\{(\w+)\}\$\{fade\}/,
			`\${$1}\${${rootContract}}\${fade}`,
		)
		resolvedSelector = resolvedSelector.replace(/:not\(\.show\)$/, `:not(\${${showHook}})`)
	}

	const btnSizeMatch = resolvedSelector.match(/^\$\{(\w+)\}\$\{(btn(?:Lg|Sm))\}$/)
	if (btnSizeMatch) {
		const [, scope, size] = btnSizeMatch
		resolvedSelector = `\${${scope}}\${btn}\${${size}}`
	}

	const btnVariantMatch = resolvedSelector.match(
		/^\$\{(\w+)\}\$\{(btn(?:Primary|Secondary|Success|Danger|Warning|Info|Light|Dark|Link))\}$/,
	)
	if (btnVariantMatch) {
		const [, scope, variant] = btnVariantMatch
		resolvedSelector = `\${${scope}}\${btn}\${${variant}}`
	}

	const dropdownSplitMatch = resolvedSelector.match(/^\$\{(\w+)\}\$\{(dropdownToggleSplit)\}$/)
	if (dropdownSplitMatch) {
		const [, scope, split] = dropdownSplitMatch
		resolvedSelector = `\${${scope}}\${btn}\${${split}}`
	}

	if (family === 'ui/modal' && normalizeSelector(cssSelector) === '.modal-title') {
		resolvedSelector = resolvedSelector.replace('${modalTitle}', '${h5}${modalTitle}')
	}

	// Table cell rules: use explicit section/row path (matches hover/striped selectors).
	if (family === 'contents/tables') {
		resolvedSelector = resolvedSelector.replace(
			/:not\(caption\) > \$\{(\w+)\}\$\{tableRow\}/g,
			'${$1}${tableSection} > ${$1}${tableRow}',
		)
	}

	return resolvedSelector
}

/**
 * Emit a globalStyle block from a CSS rule.
 */
export function emitGlobalStyleBlock({
	cssSelector,
	declarations,
	scopeName,
	registry,
	comment,
	isDelta = false,
	family = null,
}) {
	const { veSelector, warnings } = cssSelectorToVeSelector(cssSelector, scopeName, registry, { family })
	const { varsEntries, propEntries, unmappedVars } = declarationsToVeProps(declarations, registry)

	for (const v of unmappedVars) {
		warnings.push(`[UNMAPPED_VAR] ${v}`)
	}

	const lines = []
	if (comment) {
		lines.push('// SOURCE CSS:')
		for (const line of comment.split('\n')) lines.push(`// ${line}`)
	}
	if (isDelta) lines.push('// [DELTA] theme-specific rule not in bootstrap structure')
	for (const w of warnings) lines.push(`// ${w}`)

	if (varsEntries.length === 0 && propEntries.length === 0) return { code: '', warnings }

	let resolvedSelector = finalizeVeSelector(cssSelector, veSelector, declarations, family)

	if (!isScopedFamilySelector(resolvedSelector, scopeName)) {
		warnings.push(
			'[SKIPPED] selector not scoped to contract — raw element/unmapped class (see ve-architecture.md)',
		)
		return { code: '', warnings }
	}

	if (/btn(?:Primary|Secondary|Success|Danger|Warning|Info|Light|Dark|Link)/.test(veSelector)) {
		appendBtnVariantPaintProps(propEntries, declarations)
	}

	upgradeBtnBorderOverride(cssSelector, propEntries, declarations)

	const selectors = expandTableCellSelectors(resolvedSelector, family)
	lines.push(`globalStyle(${formatGlobalStyleSelector(selectors)}, {`)
	if (varsEntries.length > 0) {
		lines.push('\tvars: {')
		lines.push(...varsEntries)
		lines.push('\t},')
	}
	lines.push(...propEntries)
	lines.push('})')
	lines.push('')

	return { code: lines.join('\n'), warnings }
}

/**
 * Format a CSS rule as a compact SOURCE CSS comment string.
 */
export function formatSourceCssComment(selector, declarations) {
	const declStr = Object.entries(declarations)
		.map(([k, v]) => `${k}: ${v}`)
		.join('; ')
	return `${selector} { ${declStr}; }`
}

export function isIdentifierValue(value) {
	return IDENTIFIER_PATTERN.test(value.trim())
}
