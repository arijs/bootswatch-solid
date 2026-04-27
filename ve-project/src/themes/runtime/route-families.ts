import type { VeThemeFamily } from './contracts'

const dropdownRouteFamilies: readonly VeThemeFamily[] = ['global', 'dropdowns']

const explicitRouteFamilies: Record<string, readonly VeThemeFamily[]> = {
	'/ui/dropdowns': dropdownRouteFamilies,
	'/ui/dropdowns/aligned-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/end-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/large-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/normal-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/small-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/split-danger-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/split-dark-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/split-info-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/split-light-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/split-primary-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/split-secondary-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/split-success-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/split-warning-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/start-dropdown': dropdownRouteFamilies,
	'/ui/dropdowns/up-dropdown': dropdownRouteFamilies,
	'/ui/navbar': ['global', 'navbar'],
	'/ui/navbar/navbar-example': ['global', 'navbar'],
	'/ui/navs': ['global', 'nav'],
	'/ui/navs/basic-nav': ['global', 'nav'],
	'/ui/navs/pill-nav': ['global', 'nav'],
	'/ui/navs/tabbed-nav': ['global', 'nav'],
	'/ui/card-tabs': ['global', 'buttons', 'nav', 'card'],
	'/ui/card-tabs/card-tabs-example': ['global', 'buttons', 'nav', 'card'],
	'/ui/scrollspy': ['global', 'dropdowns', 'nav', 'navbar', 'ui'],
	'/ui/scrollspy/scrollspy-example': ['global', 'dropdowns', 'nav', 'navbar', 'ui'],
	'/ui/modal': ['global', 'buttons', 'modal'],
	'/ui/modal/centered-scrollable-modal': ['global', 'buttons', 'modal'],
	'/ui/modal/default-modal': ['global', 'buttons', 'modal'],
	'/ui/modal/fullscreen-modal': ['global', 'buttons', 'modal'],
	'/ui/modal/static-backdrop-modal': ['global', 'buttons', 'modal'],
	'/ui/card': ['global', 'buttons', 'card'],
	'/ui/card/featured-card': ['card', 'buttons'],
	'/ui/card/horizontal-card': ['card'],
	'/ui/card/image-top-card': ['card', 'buttons'],
	'/ui/card/list-card': ['card'],
	'/ui/card/cards-grid': ['global', 'buttons', 'card'],
	'/ui/badge': ['global', 'badge'],
	'/ui/badge/heading-badges': ['global', 'badge'],
	'/ui/badge/pill-badges': ['global', 'badge'],
	'/ui/popovers': ['global', 'buttons', 'popovers'],
	'/ui/popovers/basic-popover': ['global', 'buttons', 'popovers'],
	'/ui/popovers/bottom-popover': ['global', 'buttons', 'popovers'],
	'/ui/popovers/end-popover': ['global', 'buttons', 'popovers'],
	'/ui/popovers/start-popover': ['global', 'buttons', 'popovers'],
	'/ui/popovers/top-popover': ['global', 'buttons', 'popovers'],
	'/ui/tooltips': ['global', 'buttons', 'tooltips'],
	'/ui/tooltips/bottom-tooltip': ['global', 'buttons', 'tooltips'],
	'/ui/tooltips/end-tooltip': ['global', 'buttons', 'tooltips'],
	'/ui/tooltips/html-tooltip': ['global', 'buttons', 'tooltips'],
	'/ui/tooltips/start-tooltip': ['global', 'buttons', 'tooltips'],
	'/ui/tooltips/top-tooltip': ['global', 'buttons', 'tooltips'],
	'/ui/accordion': ['global', 'accordion'],
	'/ui/accordion/accordion-example': ['global', 'accordion'],
}

export function getRequiredFamiliesForPath(pathname: string): readonly VeThemeFamily[] {
	const explicit = explicitRouteFamilies[pathname]
	if (explicit) return explicit
	if (pathname.startsWith('/ui/buttons')) return ['global', 'buttons']
	if (pathname.startsWith('/forms')) return ['global', 'forms']
	if (pathname.startsWith('/ui')) return ['global', 'ui']
	if (pathname.startsWith('/contents')) return ['global', 'contents']
	return ['global']
}
