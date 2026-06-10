/**
 * CSS value parser and formatter for the v2 literal emitter.
 *
 * Handles the conversion of raw CSS property values (which may contain
 * `var(--bs-*)` references) into TypeScript expressions for VE style objects.
 *
 * From plan §6.2: parse var() properly (not regex). Must handle nesting +
 * fallbacks: `rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))`.
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
 */

/**
 * @typedef {Object} ParsedValue
 * @property {'plain'|'singleVar'|'template'} type
 * @property {string} [value]   - for 'plain'
 * @property {string} [symbol]  - for 'singleVar'
 * @property {Array<ParsedLiteral|ParsedVar>} [parts]  - for 'template'
 */

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

			// Extract var name (everything before the first comma inside the parens)
			const innerContent = cssValue.slice(i + 4, j - 1).trim()
			const firstCommaIdx = innerContent.indexOf(',')
			const varName = (firstCommaIdx >= 0
				? innerContent.slice(0, firstCommaIdx)
				: innerContent).trim()

			const symbol = cssVarToSymbol(varName)
			if (symbol) {
				parts.push({ type: 'var', symbol })
			} else {
				// Unknown var — emit as literal (e.g. non-bs vars)
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
		return { type: 'singleVar', symbol: parts[0].symbol }
	}
	return { type: 'template', parts }
}

/**
 * Format a ParsedValue into a TypeScript source expression string.
 *
 * plain     → `'value'`  (single-quoted)
 * singleVar → `varBsSymbol`  (JS identifier, no quotes)
 * template  → `` `literal${symbol}literal` ``  (template literal)
 */
export function formatVeValue(parsed) {
	if (parsed.type === 'plain') {
		// Escape internal single quotes
		return `'${parsed.value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
	}
	if (parsed.type === 'singleVar') {
		return parsed.symbol
	}
	// template
	const content = parsed.parts
		.map((p) => (p.type === 'var' ? `\${${p.symbol}}` : escapeLiteralPart(p.value)))
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
