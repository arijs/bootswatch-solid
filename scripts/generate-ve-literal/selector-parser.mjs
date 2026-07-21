/**
 * CSS selector tokenizer for the v2 literal converter.
 *
 * Extracts class tokens and element tags from a selector string for census
 * and for the emitter's 1:1 translation algorithm.
 *
 * Rules (per architecture M1–M4):
 * - Class `.foo-bar` → contract symbol `fooBar` (kebab→camelCase)
 * - Element tag `h1` → element contract via TAG_TO_CONTRACT table
 * - `*`, pseudos (`:hover`, `::before`), attributes (`[attr=val]`) → passthrough verbatim
 * - Content inside pseudo-function args (`:not(...)`, `:is(...)`) is NOT extracted as top-level tokens
 */

/** Advance past a balanced ( ) or [ ] block starting at index i. */
function skipBalanced(str, i) {
	const open = str[i]
	const close = open === '(' ? ')' : ']'
	let depth = 1
	i++
	while (i < str.length && depth > 0) {
		if (str[i] === open) depth++
		else if (str[i] === close) depth--
		i++
	}
	return i
}

/**
 * Split a full selector string by top-level commas.
 * Handles parens/brackets so commas inside :not(.a, .b) are not split points.
 */
export function splitSelectorList(selector) {
	const parts = []
	let depth = 0
	let start = 0
	for (let i = 0; i < selector.length; i++) {
		const ch = selector[i]
		if (ch === '(' || ch === '[') depth++
		else if (ch === ')' || ch === ']') depth--
		else if (ch === ',' && depth === 0) {
			parts.push(selector.slice(start, i).trim())
			start = i + 1
		}
	}
	parts.push(selector.slice(start).trim())
	return parts.filter(Boolean)
}

/**
 * Split a single (non-comma) selector into compound segment strings.
 * Combinators (space, >, +, ~) are dropped; only the segments are returned.
 * Content inside parens/brackets is kept within the segment it belongs to.
 *
 * ".card > .card-header" → [".card", ".card-header"]
 * "ol ol" → ["ol", "ol"]
 * ".table > :not(caption) > * > *" → [".table", ":not(caption)", "*", "*"]
 */
export function splitByCombinators(selector) {
	const segments = []
	let depth = 0
	let segStart = 0
	let i = 0

	while (i < selector.length) {
		const ch = selector[i]

		if (ch === '(' || ch === '[') {
			depth++
			i++
			continue
		}
		if (ch === ')' || ch === ']') {
			depth--
			i++
			continue
		}
		if (depth > 0) {
			i++
			continue
		}

		// Combinator characters at top level
		if (ch === '>' || ch === '+' || ch === '~') {
			const seg = selector.slice(segStart, i).trim()
			if (seg) segments.push(seg)
			// Skip the combinator and surrounding whitespace
			while (i < selector.length && /[\s>+~]/.test(selector[i])) i++
			segStart = i
		} else if (ch === ' ') {
			// Descendant combinator — peek ahead: if next non-space is >, +, ~ that combinator owns the space
			const seg = selector.slice(segStart, i).trim()
			while (i < selector.length && selector[i] === ' ') i++
			// If the next char is also a combinator, skip — that combinator will handle the segment flush
			if (selector[i] === '>' || selector[i] === '+' || selector[i] === '~') {
				// The explicit combinator will handle the flush; just update segStart
				if (seg) segments.push(seg)
				segStart = i
			} else {
				// Plain descendant space
				if (seg) segments.push(seg)
				segStart = i
			}
		} else {
			i++
		}
	}

	const tail = selector.slice(segStart).trim()
	if (tail) segments.push(tail)
	return segments
}

/**
 * Parse one compound segment (no combinators) into { tag, classes, passthrough }.
 *
 * tag: bare element name at start (e.g. 'h1', 'button'), or null
 * classes: array of class names WITHOUT the leading dot (e.g. ['btn', 'btn-primary'])
 * passthrough: true if the segment is pure passthrough (*, :pseudo, [attr]) with no tag/class
 */
export function parseCompoundSegment(segment) {
	const classes = []
	let tag = null
	let i = 0
	const s = segment.trim()

	// Leading element tag: sequence of word-chars at start, before any . : [ *
	if (i < s.length && /[a-zA-Z_]/.test(s[i])) {
		const start = i
		while (i < s.length && /[\w-]/.test(s[i])) i++
		tag = s.slice(start, i).toLowerCase()
	}

	while (i < s.length) {
		const ch = s[i]

		if (ch === '.') {
			i++ // skip dot
			const start = i
			while (i < s.length && /[\w-]/.test(s[i])) i++
			if (i > start) classes.push(s.slice(start, i))
		} else if (ch === ':') {
			// pseudo-class or pseudo-element — passthrough
			i++
			if (i < s.length && s[i] === ':') i++ // ::
			while (i < s.length && /[\w-]/.test(s[i])) i++ // pseudo name
			if (i < s.length && s[i] === '(') i = skipBalanced(s, i) // args
		} else if (ch === '[') {
			// attribute selector — passthrough
			i = skipBalanced(s, i)
		} else if (ch === '*') {
			i++
		} else {
			i++
		}
	}

	const passthrough = tag === null && classes.length === 0

	return { tag, classes, passthrough }
}

/**
 * Extract all { tag, classes } tokens from a full CSS selector string.
 * Splits by comma, then by combinators, then parses each compound segment.
 *
 * Returns:
 *   classTokens: Set<string>  — CSS class names without dot (e.g. 'btn-primary')
 *   tagTokens:   Set<string>  — element tag names (e.g. 'h1')
 */
export function extractSelectorTokens(selector) {
	const classTokens = new Set()
	const tagTokens = new Set()

	for (const part of splitSelectorList(selector)) {
		for (const segment of splitByCombinators(part)) {
			const { tag, classes } = parseCompoundSegment(segment)
			if (tag) tagTokens.add(tag)
			for (const cls of classes) classTokens.add(cls)
		}
	}

	return { classTokens, tagTokens }
}

/**
 * Convert a CSS class name (without dot) to a camelCase contract symbol.
 * e.g. 'btn-primary' → 'btnPrimary', 'col-md-6' → 'colMd6', 'p-5' → 'p5'
 */
export function classToSymbol(cssClass) {
	return cssClass.replace(/-([a-zA-Z0-9])/g, (_, c) => c.toUpperCase())
}
