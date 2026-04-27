import type { VeThemeSlug } from './theme-slugs'

export const VE_THEME_FAMILIES = ['global', 'contents', 'forms', 'ui', 'dropdowns', 'buttons', 'navbar', 'nav', 'modal', 'card', 'badge', 'popovers', 'tooltips', 'accordion'] as const

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

export interface VeButtonThemeContract {
	btn: string
	btnActiveHook: string
	btnCheck: string
	btnDanger: string
	btnDark: string
	btnInfo: string
	btnLg: string
	btnLight: string
	btnLink: string
	btnOutlineDanger: string
	btnOutlineDark: string
	btnOutlineInfo: string
	btnOutlineLight: string
	btnOutlinePrimary: string
	btnOutlineSecondary: string
	btnOutlineSuccess: string
	btnOutlineWarning: string
	btnPrimary: string
	btnSecondary: string
	btnSm: string
	btnSuccess: string
	btnWarning: string
}

export interface VeNavbarThemeContract {
	mt5: string
	alignTop: string
	bgLight: string
	bgPrimary: string
	dInlineBlock: string
	navbar: string
	navbarBrand: string
	navbarDark: string
	navbarInner: string
	navbarLogoMuted: string
	navbarToggler: string
	navbarTogglerIcon: string
}

export interface VeNavThemeContract {
	fade: string
	nav: string
	navButtonReset: string
	navItem: string
	navLink: string
	navLinkActive: string
	navLinkDisabled: string
	navPills: string
	navTabs: string
	show: string
	tabContent: string
	tabPane: string
	tabPaneActive: string
}

export interface VeModalThemeContract {
	actionsRow: string
	bodyText: string
	btnClose: string
	fade: string
	flexWrap: string
	h4: string
	h5: string
	justifyContentBetween: string
	modal: string
	modalBody: string
	modalContent: string
	modalDialog: string
	modalDialogCentered: string
	modalDialogScrollable: string
	modalFade: string
	modalFooter: string
	modalFullscreen: string
	modalHeader: string
	modalTitle: string
}

export interface VeCardThemeContract {
	bdPlaceholderImg: string
	card: string
	cardBody: string
	cardExample: string
	cardFooter: string
	cardGridRow: string
	cardHeader: string
	cardHeaderTabs: string
	cardImgTop: string
	cardLink: string
	cardRow: string
	cardText: string
	cardTitle: string
	col: string
	h5: string
	listGroup: string
	listGroupFlush: string
	listGroupItem: string
	paragraph: string
	rowG4: string
	smallText: string
	textCenter: string
	textMuted: string
}

export interface VeBadgeThemeContract {
	badge: string
	bgDark: string
	bgDanger: string
	bgInfo: string
	bgLight: string
	bgPrimary: string
	bgSecondary: string
	bgSuccess: string
	bgWarning: string
	h1: string
	h2: string
	h3: string
	h4: string
	h5: string
	h6: string
	roundedPill: string
	textDark: string
}

export interface VePopoverThemeContract {
	frame: string
	frameColumn: string
	frameRow: string
	h3: string
	justifyEnd: string
	justifyStart: string
	popoverArrow: string
	popoverBody: string
	popoverClass: string
	popoverHeader: string
}

export interface VeTooltipThemeContract {
	frame: string
	frameColumn: string
	frameRow: string
	justifyCenter: string
	justifyEnd: string
	justifyStart: string
	tooltipArrow: string
	tooltipClass: string
	tooltipInner: string
}

export interface VeAccordionThemeContract {
	accordion: string
	accordionBody: string
	accordionButton: string
	accordionButtonCollapsed: string
	accordionCollapse: string
	accordionCollapseShow: string
	accordionCollapsing: string
	accordionHeader: string
	accordionItem: string
	h4: string
}

export interface VeThemeContracts {
	global: VeGlobalThemeContract
	dropdowns: VeDropdownThemeContract
	buttons: VeButtonThemeContract
	navbar: VeNavbarThemeContract
	nav: VeNavThemeContract
	modal: VeModalThemeContract
	card: VeCardThemeContract
	badge: VeBadgeThemeContract
	popovers: VePopoverThemeContract
	tooltips: VeTooltipThemeContract
	accordion: VeAccordionThemeContract
}

export interface VeThemeDefinition {
	slug: VeThemeSlug
	contracts: VeThemeContracts
	availableFamilies: ReadonlySet<VeThemeFamily>
}

export const VE_ALL_ROUTE_FAMILIES: readonly VeThemeFamily[] = ['global', 'contents', 'forms', 'ui', 'dropdowns', 'buttons', 'navbar', 'nav', 'modal', 'card', 'badge', 'popovers', 'tooltips', 'accordion']
