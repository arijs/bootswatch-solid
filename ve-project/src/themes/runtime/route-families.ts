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
