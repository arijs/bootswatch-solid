/** Port of ve-project2/src/theme-runtime/route-style-families.ts for CSS bucketing. */

const DEFAULT_FAMILIES = ['contents/basic', 'utilities']

const UI_ROUTE_FAMILY_MAP = [
	['/ui/accordion/', ['ui/accordion']],
	['/ui/alerts/', ['ui/alerts']],
	['/ui/badge/heading-badges', ['ui/badge', 'contents/heading']],
	['/ui/badge/', ['ui/badge']],
	['/ui/breadcrumb/', ['ui/breadcrumb']],
	['/ui/button-group/', ['ui/button-group', 'ui/buttons']],
	['/ui/buttons/', ['ui/buttons']],
	['/ui/card/', ['ui/card']],
	['/ui/card-tabs/', ['ui/card-tabs', 'ui/card', 'ui/navs']],
	['/ui/carousel/', ['ui/carousel']],
	['/ui/dropdowns/', ['ui/dropdowns', 'ui/buttons']],
	['/ui/list-group/', ['ui/list-group']],
	['/ui/modal/', ['ui/modal', 'ui/buttons']],
	['/ui/navbar/', ['ui/navbar', 'ui/navs', 'ui/dropdowns', 'ui/buttons']],
	['/ui/navs/', ['ui/navs']],
	['/ui/offcanvas/', ['ui/offcanvas', 'ui/buttons', 'ui/dropdowns']],
	['/ui/pagination/', ['ui/pagination']],
	['/ui/popovers/', ['ui/popovers']],
	['/ui/progress/', ['ui/progress']],
	['/ui/scrollspy/', ['ui/scrollspy', 'ui/navs', 'ui/navbar', 'ui/dropdowns']],
	['/ui/spinners/', ['ui/spinners']],
	['/ui/toasts/', ['ui/toasts']],
	['/ui/tooltips/', ['ui/tooltips']],
]

function getContentsSpecificFamily(pathname) {
	if (pathname.startsWith('/contents/typography/heading')) return 'contents/heading'
	if (pathname.startsWith('/contents/typography/display')) return 'contents/display'
	if (
		pathname.startsWith('/contents/typography/unstyled-list') ||
		pathname.startsWith('/contents/typography/inline-list')
	) {
		return 'contents/lists'
	}
	if (pathname.startsWith('/contents/tables/')) return 'contents/tables'
	if (pathname.startsWith('/contents/images/') || pathname.startsWith('/contents/figures/')) {
		return 'contents/images'
	}
	if (pathname.startsWith('/contents/typography/')) return 'contents/basic'
	return null
}

/** @returns {readonly string[]} */
export function getFamiliesForRoute(routePath) {
	const pathname = routePath.startsWith('/') ? routePath : `/${routePath}`

	for (const [prefix, families] of UI_ROUTE_FAMILY_MAP) {
		if (pathname.startsWith(prefix)) {
			return [...new Set([...families, ...DEFAULT_FAMILIES])]
		}
	}

	if (pathname.startsWith('/forms/')) {
		return ['forms', ...DEFAULT_FAMILIES]
	}

	if (pathname.startsWith('/contents/')) {
		const specific = getContentsSpecificFamily(pathname)
		return specific ? [specific, ...DEFAULT_FAMILIES] : [...DEFAULT_FAMILIES]
	}

	return []
}

/** Heuristic: map a CSS class selector prefix to a likely family owner. */
export function guessFamilyForSelector(selector) {
	const classMatch = selector.match(/\.([a-z0-9-]+)/i)
	if (!classMatch) return null
	const cls = classMatch[1]

	const prefixMap = [
		['btn-', 'ui/buttons'],
		['alert-', 'ui/alerts'],
		['badge', 'ui/badge'],
		['breadcrumb', 'ui/breadcrumb'],
		['btn-group', 'ui/button-group'],
		['card-', 'ui/card'],
		['carousel-', 'ui/carousel'],
		['dropdown-', 'ui/dropdowns'],
		['list-group', 'ui/list-group'],
		['modal-', 'ui/modal'],
		['offcanvas', 'ui/offcanvas'],
		['navbar-', 'ui/navbar'],
		['nav-', 'ui/navs'],
		['pagination-', 'ui/pagination'],
		['page-', 'ui/pagination'],
		['popover', 'ui/popovers'],
		['progress', 'ui/progress'],
		['spinner-', 'ui/spinners'],
		['toast', 'ui/toasts'],
		['tooltip', 'ui/tooltips'],
		['accordion', 'ui/accordion'],
		['input-group', 'forms'],
		['form-', 'forms'],
		['table', 'contents/tables'],
		['container', 'contents/basic'],
	]

	for (const [prefix, family] of prefixMap) {
		if (cls === prefix.replace(/-$/, '') || cls.startsWith(prefix)) return family
	}
	if (cls === 'btn') return 'ui/buttons'
	if (cls === 'alert') return 'ui/alerts'
	if (cls === 'card') return 'ui/card'
	return null
}

/** Route bare element selectors (no class) to a VE family via contract mapping. */
export function guessFamilyForElementSelector(selector) {
	const base = selector.trim().split(/[:[\s>+~]/)[0]
	if (/^h[1-6]$/.test(base)) return 'contents/heading'
	if (base === 'p' || base === 'hr' || base === 'small' || base === 'a' || base === 'dl') {
		return 'contents/basic'
	}
	if (base === 'button' || base === 'input') return 'ui/buttons'
	if (base === 'select' || base === 'textarea' || base === 'optgroup' || base === 'fieldset' || base === 'legend') {
		return 'forms'
	}
	if (base === 'img' || base === 'svg') return 'contents/images'
	if (base === 'ol' || base === 'ul') return 'contents/lists'
	return null
}

export function resolveFamilyForSelector(selector) {
	return guessFamilyForSelector(selector) ?? guessFamilyForElementSelector(selector)
}
