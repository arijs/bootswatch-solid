const VE_THEME_SLUGS = [
	'bootstrap',
	'brite',
	'cerulean',
	'cosmo',
	'cyborg',
	'darkly',
	'flatly',
	'journal',
	'litera',
	'lumen',
	'lux',
	'materia',
	'minty',
	'morph',
	'pulse',
	'quartz',
	'sandstone',
	'simplex',
	'sketchy',
	'slate',
	'solar',
	'spacelab',
	'superhero',
	'united',
	'vapor',
	'yeti',
	'zephyr',
] as const

export type VeThemeSlug = (typeof VE_THEME_SLUGS)[number]

export const VE_DEFAULT_THEME_SLUG: VeThemeSlug = 'bootstrap'

const veThemeSlugSet = new Set<string>(VE_THEME_SLUGS)

export function normalizeThemeSlug(input: string): string {
	return input
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
}

export function parseKnownThemeSlug(input: string | null | undefined): VeThemeSlug | undefined {
	if (!input) return undefined
	const normalized = normalizeThemeSlug(input)
	return veThemeSlugSet.has(normalized) ? (normalized as VeThemeSlug) : undefined
}

export function isKnownThemeSlug(slug: string): slug is VeThemeSlug {
	return veThemeSlugSet.has(slug)
}
