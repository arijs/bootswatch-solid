export function parseCsvArg(argv, name) {
	const prefix = `${name}=`
	const raw = argv.find((arg) => arg.startsWith(prefix))
	if (!raw) return null
	const values = splitTopLevelCsv(raw.slice(prefix.length))
		.map((value) => value.trim())
		.filter(Boolean)
	return values.length > 0 ? new Set(values) : null
}

// Split on commas, but ignore commas inside micromatch brace groups (e.g.
// `**/{card-tabs,list-group}/**`) so glob brace expansion survives CSV parsing.
function splitTopLevelCsv(input) {
	const parts = []
	let depth = 0
	let current = ''
	for (const char of input) {
		if (char === '{') depth++
		else if (char === '}') depth = Math.max(0, depth - 1)
		if (char === ',' && depth === 0) {
			parts.push(current)
			current = ''
			continue
		}
		current += char
	}
	parts.push(current)
	return parts
}

export function parseIntArg(argv, name, fallback) {
	const prefix = `${name}=`
	const raw = argv.find((arg) => arg.startsWith(prefix))
	if (!raw) return fallback
	const value = Number.parseInt(raw.slice(prefix.length), 10)
	return Number.isFinite(value) && value > 0 ? value : fallback
}

export function parseFloatArg(argv, name, fallback, min = 0) {
	const prefix = `${name}=`
	const raw = argv.find((arg) => arg.startsWith(prefix))
	if (!raw) return fallback
	const value = Number.parseFloat(raw.slice(prefix.length))
	return Number.isFinite(value) && value >= min ? value : fallback
}

export function slugifyTheme(name) {
	return name
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

export function normalizeThemeToken(token) {
	if (!token) return '*'
	if (token === '*') return '*'
	return slugifyTheme(token)
}
