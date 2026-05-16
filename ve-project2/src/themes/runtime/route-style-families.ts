import type { Ve2StyleFamily } from './style-families'

export interface Ve2RouteStyleLoadPlan {
	families: readonly Ve2StyleFamily[]
	fullThemeFallback: boolean
}

const DEFAULT_FAMILIES: readonly Ve2StyleFamily[] = ['contents', 'utilities']

const UI_ROUTE_FAMILY_MAP: Array<readonly [prefix: string, families: readonly Ve2StyleFamily[]]> = [
	['/ui/accordion/', ['ui/accordion']],
	['/ui/alerts/', ['ui/alerts']],
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
	['/ui/pagination/', ['ui/pagination']],
	['/ui/popovers/', ['ui/popovers']],
	['/ui/progress/', ['ui/progress']],
	['/ui/scrollspy/', ['ui/scrollspy', 'ui/navs', 'ui/navbar', 'ui/dropdowns']],
	['/ui/spinners/', ['ui/spinners']],
	['/ui/toasts/', ['ui/toasts']],
	['/ui/tooltips/', ['ui/tooltips']],
]

export function getVe2RouteStyleLoadPlan(pathname: string): Ve2RouteStyleLoadPlan {
	for (const [prefix, families] of UI_ROUTE_FAMILY_MAP) {
		if (pathname.startsWith(prefix)) {
			return {
				families: [...families, ...DEFAULT_FAMILIES],
				fullThemeFallback: false,
			}
		}
	}

	if (pathname.startsWith('/forms/')) {
		return {
			families: ['forms', ...DEFAULT_FAMILIES],
			fullThemeFallback: false,
		}
	}

	if (pathname.startsWith('/contents/')) {
		return {
			families: [...DEFAULT_FAMILIES],
			fullThemeFallback: false,
		}
	}

	return {
		families: [],
		fullThemeFallback: true,
	}
}
