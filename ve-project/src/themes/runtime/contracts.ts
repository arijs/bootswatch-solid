import type { VeThemeSlug } from './theme-slugs'

export const VE_THEME_FAMILIES = ['global', 'contents', 'forms', 'ui', 'dropdowns'] as const

export type VeThemeFamily = (typeof VE_THEME_FAMILIES)[number]

export interface VeGlobalThemeContract {
	bsTheme: string
	body: string
	containerFluid: string
}

export interface VeDropdownThemeContract {
	h6: string
	btn: string
	btnShowHook: string
	btnLg: string
	btnSm: string
	btnPrimary: string
	btnSecondary: string
	btnSuccess: string
	btnInfo: string
	btnWarning: string
	btnDanger: string
	btnLight: string
	btnDark: string
	btnGroup: string
	dropdown: string
	dropdownDivider: string
	dropdownHeader: string
	dropdownItem: string
	dropdownMenu: string
	dropdownMenuShow: string
	dropdownMenuEnd: string
	dropdownToggle: string
	dropdownToggleSplit: string
	dropup: string
	dropupMenu: string
	dropupToggle: string
	dropend: string
	dropendMenu: string
	dropendToggle: string
	dropstart: string
	dropstartMenu: string
	dropstartToggle: string
	visuallyHidden: string
}

export interface VeThemeContracts {
	global: VeGlobalThemeContract
	dropdowns: VeDropdownThemeContract
}

export interface VeThemeDefinition {
	slug: VeThemeSlug
	contracts: VeThemeContracts
	availableFamilies: ReadonlySet<VeThemeFamily>
}

export const VE_ALL_ROUTE_FAMILIES: readonly VeThemeFamily[] = ['global', 'contents', 'forms', 'ui', 'dropdowns']
