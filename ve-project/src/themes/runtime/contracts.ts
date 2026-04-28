import type { VeThemeSlug } from './theme-slugs'

export const VE_THEME_FAMILIES = ['global', 'contents', 'forms', 'ui', 'dropdowns', 'buttons', 'buttonGroup', 'alerts', 'breadcrumb', 'navbar', 'nav', 'modal', 'card', 'badge', 'popovers', 'tooltips', 'accordion', 'scrollspy', 'pagination', 'carousel', 'progress', 'spinners', 'toasts'] as const

export type VeThemeFamily = (typeof VE_THEME_FAMILIES)[number]

export interface VeGlobalThemeContract {
	bsTheme: string
	body: string
	containerFluid: string
}

export interface VeContentsThemeContract {
	alignSelfStart: string
	bdHeading: string
	bdPlaceholderImg: string
	bdPlaceholderImgLg: string
	h3: string
	h4: string
	h5: string
	mb3: string
	mbXl2: string
	mt5: string
	mtXl0: string
	my3: string
	paragraph: string
	px3: string
	stickyXlTop: string
}

export interface VeFormsThemeContract {
	colMd3: string
	colMd6: string
	colSm6: string
	fieldset: string
	floatingLabel: string
	form: string
	formCheck: string
	formCheckInput: string
	formCheckLabel: string
	formControl: string
	formControlFloating: string
	formControlLg: string
	formControlSm: string
	formFloating: string
	formLabel: string
	formRange: string
	formSelect: string
	formSelectLg: string
	formSelectSm: string
	formSwitch: string
	formText: string
	g3: string
	hasValidation: string
	inputGroup: string
	inputGroupText: string
	invalidFeedback: string
	isInvalid: string
	isValid: string
	legend: string
	legendClear: string
	mb3: string
	row: string
	rowCol: string
	validFeedback: string
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

export interface VeButtonGroupThemeContract {
	btnGroup: string
	btnGroupButton: string
	btnGroupInteractive: string
	btnToolbar: string
	marginEnd2: string
}

export interface VeAlertThemeContract {
	alert: string
	alertDanger: string
	alertDark: string
	alertDismissible: string
	alertHeading: string
	alertHr: string
	alertInfo: string
	alertLight: string
	alertLink: string
	alertPrimary: string
	alertSecondary: string
	alertSuccess: string
	alertWarning: string
	btnClose: string
	fade: string
	mb0: string
	show: string
}

export interface VeBreadcrumbThemeContract {
	breadcrumb: string
	breadcrumbItem: string
	breadcrumbItemActive: string
	link: string
	listBase: string
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

export interface VeScrollspyThemeContract {
	scrollspyExample: string
}

export interface VePaginationThemeContract {
	flexWrap: string
	pagination: string
	paginationLarge: string
	paginationSmall: string
	pageItem: string
	pageItemActive: string
	pageItemDisabled: string
	pageLink: string
}

export interface VeCarouselThemeContract {
	carousel: string
	carouselActive: string
	carouselCaption: string
	carouselCaptionResponsive: string
	carouselControlNext: string
	carouselControlNextIcon: string
	carouselControlPrev: string
	carouselControlPrevIcon: string
	carouselIndicators: string
	carouselIndicatorsTarget: string
	carouselInner: string
	carouselItem: string
	carouselSlide: string
	carouselSlideImage: string
	visuallyHidden: string
}

export interface VeProgressThemeContract {
	progress: string
	progressBar: string
	progressBarAnimated: string
	progressBarDanger: string
	progressBarInfo: string
	progressBarStriped: string
	progressBarSuccess: string
	progressBarTextDark: string
}

export interface VeSpinnerThemeContract {
	spinnerBorder: string
	spinnerGrow: string
	textDanger: string
	textDark: string
	textInfo: string
	textLight: string
	textPrimary: string
	textSecondary: string
	textSuccess: string
	textWarning: string
	visuallyHidden: string
}

export interface VeToastThemeContract {
	bdPlaceholderImg: string
	btnClose: string
	placeholderIcon: string
	toast: string
	toastBody: string
	toastBrand: string
	toastExample: string
	toastFade: string
	toastHeader: string
	toastHide: string
	toastRuntime: string
	toastShow: string
	toastShowing: string
	toastTimestamp: string
}

export interface VeThemeContracts {
	global: VeGlobalThemeContract
	contents: VeContentsThemeContract
	forms: VeFormsThemeContract
	carousel: VeCarouselThemeContract
	dropdowns: VeDropdownThemeContract
	buttons: VeButtonThemeContract
	buttonGroup: VeButtonGroupThemeContract
	alerts: VeAlertThemeContract
	breadcrumb: VeBreadcrumbThemeContract
	navbar: VeNavbarThemeContract
	nav: VeNavThemeContract
	modal: VeModalThemeContract
	card: VeCardThemeContract
	badge: VeBadgeThemeContract
	popovers: VePopoverThemeContract
	tooltips: VeTooltipThemeContract
	accordion: VeAccordionThemeContract
	scrollspy: VeScrollspyThemeContract
	pagination: VePaginationThemeContract
	progress: VeProgressThemeContract
	spinners: VeSpinnerThemeContract
	toasts: VeToastThemeContract
}

export interface VeThemeDefinition {
	slug: VeThemeSlug
	contracts: VeThemeContracts
	availableFamilies: ReadonlySet<VeThemeFamily>
}

export const VE_ALL_ROUTE_FAMILIES: readonly VeThemeFamily[] = ['global', 'contents', 'forms', 'ui', 'dropdowns', 'buttons', 'buttonGroup', 'alerts', 'breadcrumb', 'navbar', 'nav', 'modal', 'card', 'badge', 'popovers', 'tooltips', 'accordion', 'scrollspy', 'pagination', 'carousel', 'progress', 'spinners', 'toasts']
