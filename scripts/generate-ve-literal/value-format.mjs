/**
 * CSS value parser and formatter for the v2 literal emitter.
 *
 * Handles the conversion of raw CSS property values (which may contain
 * `var(--bs-*)` references) into TypeScript expressions for VE style objects.
 *
 * From plan §6.2: parse var() properly (not regex). Must handle nesting +
 * fallbacks: `rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))`.
 *
 * Also handles nested var-fallback chains like:
 *   var(--a, var(--b, var(--c)))  →  fallbackVar(varA, fallbackVar(varB, varC))
 *   var(--a, none)                →  fallbackVar(varA, 'none')
 */

/**
 * @typedef {Object} ParsedLiteral
 * @property {'lit'} type
 * @property {string} value
 */

/**
 * @typedef {Object} ParsedVar
 * @property {'var'} type
 * @property {string} symbol  - e.g. 'varBsBorderRadius'
 * @property {ParsedVar|ParsedLiteral|null} fallback - optional fallback node
 */

/**
 * @typedef {Object} ParsedValue
 * @property {'plain'|'singleVar'|'template'} type
 * @property {string} [value]   - for 'plain'
 * @property {string} [symbol]  - for 'singleVar'
 * @property {ParsedVar|ParsedLiteral|null} [fallback] - for 'singleVar'
 * @property {Array<ParsedLiteral|ParsedVar>} [parts]  - for 'template'
 */

/**
 * Find the index of the first top-level comma in a string (not inside parens).
 */
function findTopLevelComma(s) {
	let depth = 0
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') depth++
		else if (s[i] === ')') depth--
		else if (s[i] === ',' && depth === 0) return i
	}
	return -1
}

/**
 * Parse the inner content of a var(…) call into a ParsedVar node.
 * Recursively handles nested var() fallbacks.
 *
 * @param {string} innerContent - content inside `var(…)`, e.g. `--bs-x, var(--bs-y, none)`
 * @param {(cssVar: string) => string|null} cssVarToSymbol
 * @returns {ParsedVar|ParsedLiteral|null}
 */
function parseVarNode(innerContent, cssVarToSymbol) {
	const splitIdx = findTopLevelComma(innerContent)
	const varName = (splitIdx >= 0 ? innerContent.slice(0, splitIdx) : innerContent).trim()
	const fallbackRaw = splitIdx >= 0 ? innerContent.slice(splitIdx + 1).trim() : null

	const symbol = cssVarToSymbol(varName)
	if (!symbol) return null // unknown var → caller emits as literal

	let fallback = null
	if (fallbackRaw !== null) {
		if (fallbackRaw.startsWith('var(')) {
			// Nested var() fallback — extract inner and recurse
			let depth = 1
			let j = 4
			while (j < fallbackRaw.length && depth > 0) {
				if (fallbackRaw[j] === '(') depth++
				else if (fallbackRaw[j] === ')') depth--
				j++
			}
			const nestedInner = fallbackRaw.slice(4, j - 1).trim()
			const nestedNode = parseVarNode(nestedInner, cssVarToSymbol)
			// If the nested var is unknown, treat the fallback raw string as a literal
			fallback = nestedNode ?? { type: 'lit', value: fallbackRaw }
		} else {
			fallback = { type: 'lit', value: fallbackRaw }
		}
	}

	return { type: 'var', symbol, fallback }
}

/**
 * Parse a CSS property value, extracting `var(--bs-*)` references.
 *
 * @param {string} cssValue - raw CSS value string
 * @param {(cssVar: string) => string|null} cssVarToSymbol - maps '--bs-x' → 'varBsX'
 * @returns {ParsedValue}
 */
export function parseVeValue(cssValue, cssVarToSymbol) {
	const parts = []
	let i = 0
	let litStart = 0

	while (i < cssValue.length) {
		// Look for 'var('
		if (cssValue[i] === 'v' && cssValue.startsWith('var(', i)) {
			// Flush preceding literal
			if (i > litStart) parts.push({ type: 'lit', value: cssValue.slice(litStart, i) })

			// Find matching close paren (depth-tracked for nested var())
			let depth = 1
			let j = i + 4
			while (j < cssValue.length && depth > 0) {
				if (cssValue[j] === '(') depth++
				else if (cssValue[j] === ')') depth--
				j++
			}
			// j is now the index AFTER the closing ')'

			const innerContent = cssValue.slice(i + 4, j - 1).trim()
			const node = parseVarNode(innerContent, cssVarToSymbol)

			if (node) {
				parts.push(node)
			} else {
				// Unknown var — emit the raw var() text as a literal
				parts.push({ type: 'lit', value: cssValue.slice(i, j) })
			}

			litStart = j
			i = j
		} else {
			i++
		}
	}

	// Flush trailing literal
	if (litStart < cssValue.length) {
		parts.push({ type: 'lit', value: cssValue.slice(litStart) })
	}

	// Determine result type
	if (parts.length === 0) {
		return { type: 'plain', value: cssValue }
	}
	if (parts.every((p) => p.type === 'lit')) {
		return { type: 'plain', value: cssValue }
	}
	if (parts.length === 1 && parts[0].type === 'var') {
		const varPart = parts[0]
		return { type: 'singleVar', symbol: varPart.symbol, fallback: varPart.fallback ?? null }
	}
	return { type: 'template', parts }
}

/**
 * Format a single ParsedVar node into a TypeScript expression.
 * Uses fallbackVar() when the node has a fallback.
 */
function formatVarNode(node) {
	if (!node.fallback) return node.symbol
	const fallbackExpr =
		node.fallback.type === 'var'
			? formatVarNode(node.fallback)
			: `'${node.fallback.value.replace(/'/g, "\\'")}'`
	return `fallbackVar(${node.symbol}, ${fallbackExpr})`
}

/**
 * Format a ParsedValue into a TypeScript source expression string.
 *
 * plain     → `'value'`  (single-quoted)
 * singleVar → `varBsSymbol`  (JS identifier, no quotes; or fallbackVar(...) if fallback)
 * template  → `` `literal${symbol}literal` ``  (template literal)
 */
export function formatVeValue(parsed) {
	if (parsed.type === 'plain') {
		// Escape internal single quotes
		return `'${parsed.value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
	}
	if (parsed.type === 'singleVar') {
		if (parsed.fallback) {
			const fallbackExpr =
				parsed.fallback.type === 'var'
					? formatVarNode(parsed.fallback)
					: `'${parsed.fallback.value.replace(/'/g, "\\'")}'`
			return `fallbackVar(${parsed.symbol}, ${fallbackExpr})`
		}
		return parsed.symbol
	}
	// template
	const content = parsed.parts
		.map((p) =>
			p.type === 'var'
				? `\${${formatVarNode(p)}}`
				: escapeLiteralPart(p.value),
		)
		.join('')
	return '`' + content + '`'
}

/** Escape backticks and `${` inside template literal content. */
function escapeLiteralPart(str) {
	return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

/**
 * Convert a CSS property name to its VE camelCase key.
 * Re-exports the same logic as css-utils.mjs so the emitter stays self-contained.
 */
export function cssPropToVeKey(prop) {
	if (prop.startsWith('--')) return prop
	if (prop === 'float') return 'float'
	return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}
