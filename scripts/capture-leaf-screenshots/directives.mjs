import { normalizeThemeToken } from './utils.mjs'

export function parseDirectiveLine(line, lineIndex) {
	const match = line.match(/^\s*\/\/\s*@screenshot\s+([^:]+):\s*(.*)$/)
	if (!match) return null

	const key = match[1].trim()
	const value = match[2].trim()
	const keyParts = key
		.split('/')
		.map((part) => part.trim())
		.filter(Boolean)
	if (keyParts.length === 0) return null

	const theme = normalizeThemeToken(keyParts[0])
	const state = keyParts.length > 1 ? keyParts.slice(1).join('/') : null
	const widthMappings = []
	const fallbacks = []
	const tokens = value.length > 0 ? value.split(/\s+/).filter(Boolean) : []

	for (const token of tokens) {
		const widthMatch = token.match(/^(\d+)x(\d+)$/)
		if (widthMatch) {
			widthMappings.push({
				width: Number.parseInt(widthMatch[1], 10),
				height: Number.parseInt(widthMatch[2], 10),
			})
			continue
		}
		if (/^\d+$/.test(token)) {
			fallbacks.push(Number.parseInt(token, 10))
		}
	}

	return {
		lineIndex,
		theme,
		state,
		widthMappings,
		fallbacks,
	}
}

export function directiveKey(theme, state) {
	return `${theme}::${state ?? ''}`
}

export function parseDirectivesFromLines(lines) {
	const directives = []
	for (let i = 0; i < lines.length; i += 1) {
		const parsed = parseDirectiveLine(lines[i], i)
		if (parsed) {
			directives.push(parsed)
		}
	}
	return directives
}

export function stripTrailingBlankLines(lines) {
	const normalized = [...lines]
	while (normalized.length > 0 && normalized[normalized.length - 1].trim() === '') {
		normalized.pop()
	}
	return normalized
}

export function selectHeightFromDirective(directive, requestedWidth) {
	const sortedMappings = [...directive.widthMappings].sort((a, b) => a.width - b.width)
	const selected = sortedMappings.find((mapping) => mapping.width >= requestedWidth)
	if (selected) return selected.height
	if (directive.fallbacks.length > 0) return directive.fallbacks[0]
	return null
}

export function resolveConfiguredHeight(directives, theme, state, requestedWidth) {
	const precedence = [
		{ theme, state },
		{ theme: '*', state },
		{ theme, state: null },
		{ theme: '*', state: null },
	]

	for (const target of precedence) {
		const directive = directives.find(
			(candidate) => candidate.theme === target.theme && candidate.state === target.state,
		)
		if (!directive) continue
		const height = selectHeightFromDirective(directive, requestedWidth)
		if (height) {
			return {
				height,
				source: 'directive',
				directive,
			}
		}
	}

	return {
		height: null,
		source: 'missing',
		directive: null,
	}
}

export function formatDirective(theme, state, widthMappings, fallbacks) {
	const key = state ? `${theme}/${state}` : theme
	const widthTokens = [...widthMappings]
		.sort((a, b) => a.width - b.width)
		.map((entry) => `${entry.width}x${entry.height}`)
	const fallbackTokens = fallbacks.map((value) => String(value))
	const values = [...widthTokens, ...fallbackTokens].join(' ').trim()
	return `// @screenshot ${key}: ${values}`
}

export function directiveValuesSignature(widthMappings, fallbacks) {
	const sortedMappings = [...widthMappings]
		.sort((a, b) => a.width - b.width)
		.map((entry) => `${entry.width}x${entry.height}`)
		.join('|')
	const fallbackSignature = [...fallbacks].map((value) => String(value)).join('|')
	return `${sortedMappings}::${fallbackSignature}`
}
