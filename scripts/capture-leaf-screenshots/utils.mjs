export function parseCsvArg(argv, name) {
	const prefix = `${name}=`
	const raw = argv.find((arg) => arg.startsWith(prefix))
	if (!raw) return null
	const values = raw
		.slice(prefix.length)
		.split(',')
		.map((value) => value.trim())
		.filter(Boolean)
	return values.length > 0 ? new Set(values) : null
}

export function parseIntArg(argv, name, fallback) {
	const prefix = `${name}=`
	const raw = argv.find((arg) => arg.startsWith(prefix))
	if (!raw) return fallback
	const value = Number.parseInt(raw.slice(prefix.length), 10)
	return Number.isFinite(value) && value > 0 ? value : fallback
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
