import { parse as parseCss } from '@adobe/css-tools'

/** Normalize selector text for lookup keys. */
export function normalizeSelector(selectorText) {
	return selectorText.replace(/\s+/g, ' ').replace(/\s*,\s*/g, ', ').trim()
}

/** Normalize selector for familyMap lookup (unquoted attribute values). */
export function normalizeSelectorForLookup(selectorText) {
	return normalizeSelector(selectorText)
		.replace(/="([^"]+)"/g, '=$1')
		.replace(/='([^']+)'/g, '=$1')
}

/** Convert CSS property name to VE camelCase object key. */
export function cssPropToVeKey(prop) {
	if (prop.startsWith('--')) return prop
	if (prop === 'float') return 'float'
	return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

/** Convert --bs-* custom property to varBs* symbol. */
export function cssVarNameToSymbol(cssVarName) {
	const stripped = cssVarName.replace(/^--bs-/, '')
	const parts = stripped.split('-')
	const pascal = parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')
	return `varBs${pascal}`
}

/** Convert varBs* symbol back to --bs-* name. */
export function symbolToCssVarName(symbol) {
	if (!symbol.startsWith('varBs')) return null
	const rest = symbol.slice(5)
	const kebab = rest
		.replace(/([A-Z])/g, '-$1')
		.toLowerCase()
		.replace(/^-/, '')
	return `--bs-${kebab}`
}

/** Convert contract export name to primary Bootstrap CSS selector. */
export function contractToSelector(exportName) {
	if (CONTRACT_SELECTOR_OVERRIDES[exportName]) {
		return CONTRACT_SELECTOR_OVERRIDES[exportName]
	}
	if (/^h[1-6]$/.test(exportName)) return exportName
	if (exportName === 'paragraph') return 'p'
	if (exportName === 'horizontalRule') return 'hr'
	return `.${camelToKebab(exportName)}`
}

export function camelToKebab(value) {
	return value.replace(/([A-Z])/g, '-$1').toLowerCase()
}

/** Contract exports that do not map to a simple CSS class selector. */
export const CONTRACT_SELECTOR_OVERRIDES = {
	btnActiveHook: '.btn.active',
	btnShowHook: '.btn.show',
	btnDisabledHook: '.btn.disabled',
	tooltipShow: '.tooltip.show',
	popoverShow: '.popover.show',
	alertBtnCloseDisabledHook: '.btn-close.disabled',
	alertBtnClose: '.btn-close',
	inputFontFamily: 'input, button, select, optgroup, textarea',
	body: 'body',
	bodyText: 'body',
	bodyFrame: 'body', // canvas subset: background/margin only in scope-emitter
	vars: ':root',
	p5: '.p-5',
	bgDark: '.bg-dark',
	alignItemsCenter: '.align-items-center',
	modalOpenHook: '.modal-open',
	tooltipVe: '.tooltip',
	popoverVe: '.popover',
	containerFluid: '.container-fluid',
	// Bootstrap grid/gutter utilities — camelCase cannot infer digit/hyphen boundaries.
	g0: '.g-0',
	g3: '.g-3',
	g4: '.g-4',
	rowCols1: '.row-cols-1',
	rowColsMd2: '.row-cols-md-2',
	colMd2: '.col-md-2',
	colMd3: '.col-md-3',
	colMd4: '.col-md-4',
	colMd5: '.col-md-5',
	colMd6: '.col-md-6',
	colMd8: '.col-md-8',
	colSm6: '.col-sm-6',
	mb3: '.mb-3',
	tabContent: '.tab-content',
	tabPane: '.tab-pane',
}

/** Bootstrap class → contract symbol overrides (name differs from camelCase-kebab). */
export const CLASS_TO_CONTRACT_OVERRIDES = {
	'.btn-close': 'alertBtnClose',
	'.me-2': 'me2',
	'.visually-hidden': 'visuallyHidden',
	'.mt-5': 'mt5',
	'.mb-2': 'mb2',
	'.mb-lg-0': 'mbLg0',
	'.rounded-pill': 'badgeRoundedPill',
}

/** Family-specific Bootstrap class → contract (e.g. `.fade` in toasts vs modals). */
export const FAMILY_CLASS_TO_CONTRACT = {
	'ui/toasts': {
		'.fade': 'toastFade',
	},
	'ui/modal': {
		'.fade': 'fade',
	},
	'ui/navbar': {
		// Compound navbar variants — one contract class absorbs multiple Bootstrap classes.
		'.navbar-light': 'navbarBgLight',
		'.bg-light': 'navbarBgLight',
		'.navbar-dark': 'navbarDarkBgPrimary',
		'.bg-primary': 'navbarDarkBgPrimary',
		'.collapse': 'collapse',
	},
	'ui/badge': {
		'.bg-primary': 'badgePrimary',
		'.bg-secondary': 'badgeSecondary',
		'.bg-success': 'badgeSuccess',
		'.bg-danger': 'badgeDanger',
		'.bg-warning': 'badgeWarning',
		'.bg-info': 'badgeInfo',
		'.bg-light': 'badgeLight',
		'.bg-dark': 'badgeDark',
		'.text-dark': 'badgeLight',
	},
	'ui/tooltips': {
		'.fade': 'fade',
		'.d-flex': 'frame',
		'.flex-column': 'frameColumn',
		'.flex-row': 'frameRow',
		'.align-items-center': 'alignItemsCenter',
		'.justify-content-center': 'justifyCenter',
		'.justify-content-start': 'justifyStart',
		'.justify-content-end': 'justifyEnd',
		'.border': 'frame',
	},
	'ui/popovers': {
		'.fade': 'fade',
		'.d-flex': 'frame',
		'.flex-column': 'frameColumn',
		'.flex-row': 'frameRow',
		'.align-items-center': 'alignItemsCenter',
		'.justify-content-center': 'justifyCenter',
		'.justify-content-start': 'justifyStart',
		'.justify-content-end': 'justifyEnd',
		'.border': 'frame',
	},
	'ui/navs': {
		'.tab-content': 'tabContent',
		'.tab-pane': 'tabPane',
		'.fade': 'fade',
	},
	'ui/progress': {
		'.bg-success': 'progressBarSuccess',
		'.bg-info': 'progressBarInfo',
		'.bg-warning': 'progressBarWarning',
		'.bg-danger': 'progressBarDanger',
		'.text-dark': 'progressBarTextDark',
	},
}

/**
 * Map Bootstrap state classes to contract symbols given a parent class selector.
 * Used for compound selectors like `.carousel-item.active`.
 */
export const STATE_CLASS_BY_PARENT_SELECTOR = {
	'.carousel-item': { '.active': 'carouselActive' },
	'.carousel-indicators': { '.active': 'carouselActive' },
	'.nav-link': { '.active': 'navLinkActive', '.disabled': 'navLinkDisabled' },
	'.nav-tabs': { '.active': 'navLinkActive' },
	'.nav-pills': { '.active': 'navLinkActive' },
	'.page-item': { '.active': 'pageItemActive', '.disabled': 'pageItemDisabled' },
	'.page-link': { '.active': 'pageItemActive', '.disabled': 'pageItemDisabled' },
	'.dropdown-item': { '.active': 'dropdownItemActive', '.disabled': 'dropdownItemDisabled' },
	'.breadcrumb-item': { '.active': 'breadcrumbItemActive' },
	'.list-group-item': { '.active': 'listGroupItemActive', '.disabled': 'listGroupItemDisabled' },
	'.list-group-item-action': { '.active': 'listGroupItemActive', '.disabled': 'listGroupItemDisabled' },
	'.accordion-button': { '.collapsed': 'accordionButtonCollapsed' },
	'.collapse': { '.show': 'accordionCollapseShow' },
	'.fade': { '.show': 'modalShowHook' },
	'.modal': { '.show': 'modalShowHook' },
	'.modal-backdrop': { '.show': 'modalShowHook' },
	'.toast': { '.show': 'toastShow' },
	'.dropdown-menu': { '.show': 'dropdownMenuShow' },
	'.btn': { '.show': 'btnShowHook', '.active': 'btnActiveHook', '.disabled': 'btnDisabledHook' },
	'.btn-close': { '.disabled': 'alertBtnCloseDisabledHook' },
}

/**
 * Standalone state-only parent segments (e.g. pagination `.active > .page-link` where
 * Bootstrap omits `.page-item` on the parent).
 */
export const ORPHAN_STATE_SEGMENT_BY_FAMILY = {
	'ui/pagination': {
		'.active': ['pageItem', 'pageItemActive'],
		'.disabled': ['pageItem', 'pageItemDisabled'],
	},
}

/** Family-specific state class overrides (e.g. `.fade.show` in toasts vs modals). */
export const FAMILY_STATE_CLASS_BY_PARENT = {
	'ui/toasts': { '.fade': { '.show': 'toastShow' } },
	'ui/modal': { '.fade': { '.show': 'modalShowHook' } },
	'ui/navbar': { '.collapse': { '.show': 'collapseShow' } },
	'ui/navs': {
		'.fade': { '.show': 'show' },
		'.tab-content': { '.active': 'tabPaneActive' },
		'.nav-item': { '.show': 'navItemShow' },
	},
	'ui/tooltips': {
		'.tooltip': { '.show': 'tooltipShow' },
		'.fade': { '.show': 'tooltipShow' },
	},
	'ui/popovers': {
		'.popover': { '.show': 'popoverShow' },
		'.fade': { '.show': 'popoverShow' },
	},
}

/**
 * Bootstrap bundle bleed — selectors pulled in via @import that a family never uses.
 * Emitting them causes cross-family collisions (e.g. alerts `.fade:not(.show)` vs modal backdrop).
 */
export const SKIP_SELECTORS_BY_FAMILY = {
	'ui/alerts': ['.fade', '.fade:not(.show)'],
}

/** Bare `.form-control` / `.input-group*` selectors owned exclusively by the forms family. */
export function isBareFormsOwnedSelector(selector) {
	const normalized = normalizeSelector(selector)
	if (/[\s>+~]/.test(normalized)) return false
	return /^\.(?:form-(?:control|select|check|input|range|floating|text|label|switch)|input-group(?:-text|-lg|-sm)?)(?:$|[:\[.])/i.test(
		normalized,
	)
}

/** Bare `h1`–`h6` reboot selectors owned exclusively by contents/heading. */
export function isBareHeadingOwnedSelector(selector) {
	const normalized = normalizeSelector(selector)
	if (/[\s>+~]/.test(normalized)) return false
	const base = normalized.split(/[:[\s]/)[0]
	return /^h[1-6]$/i.test(base)
}

export function shouldSkipFamilySelector(family, selector) {
	if (family && family !== 'forms' && isBareFormsOwnedSelector(selector)) return true
	if (family && family !== 'contents/heading' && isBareHeadingOwnedSelector(selector)) return true
	const skipList = family ? SKIP_SELECTORS_BY_FAMILY[family] : null
	if (!skipList) return false
	const normalized = normalizeSelector(selector)
	return skipList.some((entry) => normalized === normalizeSelector(entry))
}

/**
 * VE2 architecture: family theme files must only emit `${scope}${contract}` compound selectors.
 * Raw element selectors (`button`, `p`) and unmapped utility classes (`.w-100`) are skipped.
 */
const LITERAL_BOOTSTRAP_STATE_CLASS = /\.(show|disabled|active|collapsed)(?:[^a-z0-9_-]|$)/

export function isScopedFamilySelector(veSelector, scopeName) {
	if (!veSelector || typeof veSelector !== 'string') return false
	const compound = `\${${scopeName}}\${`
	if (!veSelector.includes(compound)) return false
	// Bootstrap state tokens must map to VE contract symbols — never literal `.show` / `.disabled`.
	if (LITERAL_BOOTSTRAP_STATE_CLASS.test(veSelector)) return false
	return true
}

export const STATE_ONLY_CLASSES = new Set(['.active', '.show', '.disabled', '.collapsed'])

/** Parse CSS text into flat rule list: { selectors, declarations, type, media? } */
export function parseCssRules(cssText) {
	const ast = parseCss(cssText)
	const rules = []

	function walk(node, mediaQuery = null) {
		if (!node) return
		if (Array.isArray(node)) {
			for (const child of node) walk(child, mediaQuery)
			return
		}
		if (node.type === 'media') {
			const mq = `@media ${node.media}`
			for (const child of node.rules ?? []) walk(child, mq)
			return
		}
		if (node.type === 'rule') {
			const selectors = (node.selectors ?? []).map(normalizeSelector)
			const declarations = {}
			for (const decl of node.declarations ?? []) {
				if (decl.type !== 'declaration') continue
				declarations[decl.property] = decl.value
			}
			rules.push({ selectors, declarations, type: 'rule', media: mediaQuery })
			return
		}
		if (node.type === 'keyframes') {
			rules.push({
				selectors: [`@keyframes ${node.name}`],
				declarations: node.keyframes ?? node.rules ?? [],
				type: 'keyframes',
				media: mediaQuery,
			})
		}
	}

	walk(ast.stylesheet?.rules ?? ast)
	return rules
}

/** Build selector → merged declarations map from rules (last wins). */
export function buildSelectorMap(rules) {
	const map = new Map()
	for (const rule of rules) {
		if (rule.type !== 'rule') continue
		for (const selector of rule.selectors) {
			const key = rule.media ? `${rule.media}|||${selector}` : selector
			const existing = map.get(key) ?? {}
			map.set(key, { ...existing, ...rule.declarations, _media: rule.media })
		}
	}
	return map
}

/**
 * Score a root-var selector for extraction priority.
 * Light / default theme tokens must win over `[data-bs-theme="dark"]` blocks that
 * appear later in Bootswatch bootstrap.css bundles.
 */
function rootVarSelectorPriority(selector) {
	if (/\[data-bs-theme=["']dark["']\]/i.test(selector)) return 0
	if (/\[data-bs-theme=["']light["']\]/i.test(selector)) return 2
	if (/:root\b/.test(selector)) return 2
	if (/\[data-bs-theme/.test(selector)) return 1
	return 0
}

/** Only extract custom properties from bare :root / [data-bs-theme] blocks. */
function isRootVarSelector(selector) {
	const parts = normalizeSelector(selector)
		.split(',')
		.map((part) => part.trim())
		.filter(Boolean)
	if (parts.length === 0) return false
	return parts.every((part) => /^(:root|\[data-bs-theme=[^\]]+\])$/.test(part))
}

/** Extract :root / [data-bs-theme] custom properties from parsed CSS. */
export function extractRootVars(cssText) {
	const rules = parseCssRules(cssText)
	const vars = {}
	const priority = new Map()

	for (const rule of rules) {
		for (const selector of rule.selectors) {
			if (!isRootVarSelector(selector)) continue
			const score = rootVarSelectorPriority(selector)
			for (const [prop, value] of Object.entries(rule.declarations)) {
				if (!prop.startsWith('--bs-')) continue
				const prev = priority.get(prop) ?? -1
				if (score >= prev) {
					vars[prop] = value
					priority.set(prop, score)
				}
			}
		}
	}
	return vars
}

/** Map bare HTML element selectors to contract symbols per VE family. */
export const ELEMENT_SELECTOR_BY_FAMILY = {
	'contents/tables': {
		table: 'tableElement',
		thead: 'tableSection',
		tbody: 'tableSection',
		tfoot: 'tableSection',
		tr: 'tableRow',
		th: 'tableHeaderCell',
		td: 'tableCell',
		'*': 'tableCell',
	},
	'ui/toasts': {
		strong: 'toastBrand',
		b: 'toastBrand',
		small: 'small',
		svg: 'placeholderIcon',
		img: 'bdPlaceholderImg',
	},
	'ui/navs': {
		button: 'navButtonReset',
	},
	'ui/buttons': {
		button: 'inputFontFamily',
		input: 'inputFontFamily',
		select: 'inputFontFamily',
		textarea: 'inputFontFamily',
		optgroup: 'inputFontFamily',
	},
	'forms': {
		fieldset: 'fieldset',
	},
	'contents/basic': {
		a: 'link',
		code: 'inlineCode',
	},
	'contents/images': {
		img: 'bdPlaceholderImg',
		svg: 'bdPlaceholderImg',
	},
	'contents/lists': {
		ol: 'listUnstyled',
		ul: 'listUnstyled',
	},
}

/** Resolve a `*` segment within a tables-family selector. */
export function resolveTableWildcardContract(starIndex, totalStars, previousSegment) {
	if (totalStars === 2) {
		return starIndex === 0 ? 'tableRow' : 'tableCell'
	}
	if (totalStars === 1) {
		if (/^tr\b|\$\{[^}]+\}\$\{tableRow\}/.test(previousSegment)) {
			return 'tableCell'
		}
		return 'tableSection'
	}
	return 'tableCell'
}

/** Extract top-level @import lines from CSS text. */
export function extractFontImports(cssText) {
	return cssText
		.split('\n')
		.map((line) => line.trim())
		.filter((line) => line.startsWith('@import'))
}

/** Parse a CSS value: return { kind: 'var'|'literal', symbol?, raw } */
export function parseCssValue(value, registry) {
	const trimmed = value.trim()
	const varMatch = trimmed.match(/^var\(\s*(--bs-[^,)]+)(?:\s*,\s*([^)]+))?\s*\)$/)
	if (varMatch) {
		const cssVar = varMatch[1]
		const symbol = registry?.cssVarToSymbol?.get(cssVar) ?? cssVarNameToSymbol(cssVar)
		return { kind: 'var', symbol, cssVar, raw: trimmed }
	}
	return { kind: 'literal', raw: trimmed }
}

/** Escape a CSS literal for use in generated TypeScript. */
export function formatLiteralCssValue(value) {
	if (/^-?\d+(\.\d+)?$/.test(value)) return value
	return JSON.stringify(value)
}

/** Split a CSS value into tokens, keeping var(...) groups intact. */
export function tokenizeCssValue(value) {
	const tokens = []
	let i = 0
	while (i < value.length) {
		while (i < value.length && /\s/.test(value[i])) i++
		if (i >= value.length) break

		if (value.slice(i).startsWith('var(')) {
			let depth = 0
			let j = i
			for (; j < value.length; j++) {
				if (value[j] === '(') depth++
				if (value[j] === ')') {
					depth--
					if (depth === 0) {
						j++
						break
					}
				}
			}
			tokens.push(value.slice(i, j))
			i = j
			continue
		}

		const match = value.slice(i).match(/^[^\s]+/)
		if (match) {
			tokens.push(match[0])
			i += match[0].length
		} else {
			i++
		}
	}
	return tokens
}

/** Convert calc(...) expressions so all var(--bs-*) refs use VE symbols. */
export function formatCalcValue(value, registry) {
	const calcMatch = value.match(/^calc\((.+)\)$/i)
	if (!calcMatch) return null
	const inner = calcMatch[1].replace(/var\(\s*(--bs-[^)]+)\s*\)/g, (_, cssVar) => {
		const symbol = registry?.cssVarToSymbol?.get(cssVar) ?? cssVarNameToSymbol(cssVar)
		return `\${${symbol}}`
	})
	return `\`calc(${inner})\``
}

/** Format a VE property value from CSS value string. */
export function formatVeValue(value, registry) {
	let trimmed = value.trim()
	let suffix = ''
	const importantMatch = trimmed.match(/^(.+?)(\s+!important\s*)$/i)
	if (importantMatch) {
		trimmed = importantMatch[1].trim()
		suffix = ' !important'
	}

	const calcFormatted = formatCalcValue(trimmed, registry)
	if (calcFormatted) return calcFormatted + suffix

	// calc(...) embedded in shorthand (e.g. padding with * and -) — still convert var refs
	if (trimmed.includes('calc(')) {
		const converted = trimmed.replace(/var\(\s*(--bs-[^)]+)\s*\)/g, (_, cssVar) => {
			const symbol = registry?.cssVarToSymbol?.get(cssVar) ?? cssVarNameToSymbol(cssVar)
			return `\${${symbol}}`
		})
		if (converted !== trimmed) return `\`${converted}\`${suffix}`
	}

	// rgba(var(--bs-*-rgb), var(--bs-bg-opacity)) — Bootstrap bg-* utility pattern
	const rgbaBgUtilityMatch = trimmed.match(
		/^rgba\(\s*var\(\s*(--bs-[^)]+)\s*\)\s*,\s*var\(\s*--bs-bg-opacity\s*\)\s*\)$/i,
	)
	if (rgbaBgUtilityMatch) {
		const symbol =
			registry?.cssVarToSymbol?.get(rgbaBgUtilityMatch[1]) ?? cssVarNameToSymbol(rgbaBgUtilityMatch[1])
		return `\`rgba(\${${symbol}}, 1)${suffix}\``
	}

	// rgba(var(--bs-primary-rgb), 0.5) pattern
	const rgbaVarMatch = trimmed.match(
		/^rgba\(\s*var\(\s*(--bs-[^)]+)\s*\)\s*,\s*([^)]+)\s*\)$/i,
	)
	if (rgbaVarMatch) {
		const symbol = registry?.cssVarToSymbol?.get(rgbaVarMatch[1]) ?? cssVarNameToSymbol(rgbaVarMatch[1])
		return `\`rgba(\${${symbol}}, ${rgbaVarMatch[2]})${suffix}\``
	}


	// Compound values: var(--a) var(--b), var(--a) solid var(--b), etc.
	const tokens = tokenizeCssValue(trimmed)
	if (tokens.length > 1) {
		let hasVar = false
		const parts = tokens.map((token) => {
			const parsed = parseCssValue(token, registry)
			if (parsed.kind === 'var') {
				hasVar = true
				return `\${${parsed.symbol}}`
			}
			return token
		})
		if (hasVar) return `\`${parts.join(' ')}${suffix}\``
	}

	const parsed = parseCssValue(trimmed, registry)
	if (parsed.kind === 'var') {
		return suffix ? `\`\${${parsed.symbol}}${suffix}\`` : parsed.symbol
	}

	// var(--bs-*, fallback) — preserve CSS fallback (e.g. breadcrumb divider default "/")
	const varFallbackMatch = trimmed.match(/^var\(\s*(--bs-[^,)]+)\s*,\s*([^)]+)\s*\)$/i)
	if (varFallbackMatch) {
		const symbol =
			registry?.cssVarToSymbol?.get(varFallbackMatch[1]) ?? cssVarNameToSymbol(varFallbackMatch[1])
		return `\`var(\${${symbol}}, ${varFallbackMatch[2].trim()})${suffix}\``
	}

	if (suffix) return JSON.stringify(trimmed + suffix)

	return formatLiteralCssValue(trimmed)
}
