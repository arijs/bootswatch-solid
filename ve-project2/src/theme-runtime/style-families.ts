export const VE2_STYLE_FAMILIES = [
	'global',
	'contents',
	'contents/basic',
	'contents/heading',
	'contents/display',
	'contents/lists',
	'contents/tables',
	'contents/images',
	'forms',
	'utilities',
	'utilities/used',
	'ui/accordion',
	'ui/alerts',
	'ui/badge',
	'ui/breadcrumb',
	'ui/button-group',
	'ui/buttons',
	'ui/card',
	'ui/card-tabs',
	'ui/carousel',
	'ui/dropdowns',
	'ui/list-group',
	'ui/modal',
	'ui/navbar',
	'ui/navs',
	'ui/offcanvas',
	'ui/pagination',
	'ui/popovers',
	'ui/progress',
	'ui/scrollspy',
	'ui/spinners',
	'ui/toasts',
	'ui/tooltips',
] as const

export type Ve2StyleFamily = (typeof VE2_STYLE_FAMILIES)[number]

export const VE2_BASELINE_STYLE_FAMILIES: readonly Ve2StyleFamily[] = ['global']

const knownFamilies = new Set<string>(VE2_STYLE_FAMILIES)

export function isVe2StyleFamily(value: string): value is Ve2StyleFamily {
	return knownFamilies.has(value)
}

export function normalizeVe2StyleFamilies(
	families: readonly string[],
	includeBaseline = true,
): Ve2StyleFamily[] {
	const normalized: Ve2StyleFamily[] = []
	const seen = new Set<Ve2StyleFamily>()

	if (includeBaseline) {
		for (const baselineFamily of VE2_BASELINE_STYLE_FAMILIES) {
			if (!seen.has(baselineFamily)) {
				seen.add(baselineFamily)
				normalized.push(baselineFamily)
			}
		}
	}

	for (const family of families) {
		if (!isVe2StyleFamily(family) || seen.has(family)) continue
		seen.add(family)
		normalized.push(family)
	}

	return normalized
}
