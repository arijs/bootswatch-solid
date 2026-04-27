import { body } from '../bootstrap/body.css'
import { containerFluid } from '../bootstrap/container.css'
import { bsTheme } from '../bootstrap/_vars.css'
import { h6 } from '../bootstrap/contents/generated.css'
import { mt5 } from '../bootstrap/contents/generated.css'
import { btn, btnActiveHook, btnShowHook } from '../bootstrap/ui/buttons/base.css'
import {
	btnCheck,
	btnDanger,
	btnDark,
	btnInfo,
	btnLg,
	btnLight,
	btnLink,
	btnOutlineDanger,
	btnOutlineDark,
	btnOutlineInfo,
	btnOutlineLight,
	btnOutlinePrimary,
	btnOutlineSecondary,
	btnOutlineSuccess,
	btnOutlineWarning,
	btnPrimary,
	btnSecondary,
	btnSm,
	btnSuccess,
	btnWarning,
} from '../bootstrap/ui/buttons/generated.css'
import {
	btnGroup,
	dropdown,
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownMenu,
	dropdownMenuEnd,
	dropdownMenuShow,
	dropdownToggle,
	dropdownToggleSplit,
	dropend,
	dropendMenu,
	dropendToggle,
	dropstart,
	dropstartMenu,
	dropstartToggle,
	dropup,
	dropupMenu,
	dropupToggle,
	visuallyHidden,
} from '../bootstrap/ui/dropdowns/base.css'
import {
	alignTop,
	bgLight,
	bgPrimary,
	dInlineBlock,
	navbar,
	navbarBrand,
	navbarDark,
	navbarInner,
	navbarLogoMuted,
	navbarToggler,
	navbarTogglerIcon,
} from '../bootstrap/ui/navbar/base.css'
import {
	fade,
	nav,
	navButtonReset,
	navItem,
	navLink,
	navLinkActive,
	navLinkDisabled,
	navPills,
	navTabs,
	show,
	tabContent,
	tabPane,
	tabPaneActive,
} from '../bootstrap/ui/nav/base.css'
import { bodyText } from '../bootstrap/body.css'
import { h1, h2, h3, h4, h5, paragraph, bdPlaceholderImg, smallText } from '../bootstrap/contents/generated.css'
import { btnClose } from '../bootstrap/ui/alerts/base.css'
import {
	actionsRow,
	flexWrap,
	justifyContentBetween,
	modal,
	modalBody,
	modalContent,
	modalDialog,
	modalDialogCentered,
	modalDialogScrollable,
	modalFade,
	modalFooter,
	modalFullscreen,
	modalHeader,
	modalTitle,
	fade as modalFadeClass,
} from '../bootstrap/ui/modal/base.css'
import {
	card,
	cardBody,
	cardExample,
	cardFooter,
	cardGridRow,
	cardHeader,
	cardImgTop,
	cardLink,
	cardRow,
	cardText,
	cardTitle,
	textMuted,
} from '../bootstrap/ui/card/base.css'
import { cardHeaderTabs, col, rowG4, textCenter } from '../bootstrap/ui/card-tabs/base.css'
import { listGroup, listGroupFlush, listGroupItem } from '../bootstrap/ui/list-group/base.css'
import {
	badge,
	bgDark,
	bgDanger,
	bgInfo,
	bgLight as badgeBgLight,
	bgPrimary as badgeBgPrimary,
	bgSecondary,
	bgSuccess,
	bgWarning,
	roundedPill,
	textDark,
} from '../bootstrap/ui/badge/base.css'
import {
	frame as popoverFrame,
	frameColumn as popoverFrameColumn,
	frameRow as popoverFrameRow,
	justifyEnd as popoverJustifyEnd,
	justifyStart as popoverJustifyStart,
	popoverArrow,
	popoverBody,
	popoverClass,
	popoverHeader,
} from '../bootstrap/ui/popovers/base.css'
import {
	frame as tooltipFrame,
	frameColumn as tooltipFrameColumn,
	frameRow as tooltipFrameRow,
	justifyCenter,
	justifyEnd as tooltipJustifyEnd,
	justifyStart as tooltipJustifyStart,
	tooltipArrow,
	tooltipClass,
	tooltipInner,
} from '../bootstrap/ui/tooltips/base.css'
import type { VeThemeDefinition, VeThemeFamily } from './contracts'
import { VE_DEFAULT_THEME_SLUG, isKnownThemeSlug, parseKnownThemeSlug } from './theme-slugs'

const bootstrapButtonRuntimeClasses = {
	btn,
	btnActiveHook,
	btnCheck,
	btnDanger,
	btnDark,
	btnInfo,
	btnLg,
	btnLight,
	btnLink,
	btnOutlineDanger,
	btnOutlineDark,
	btnOutlineInfo,
	btnOutlineLight,
	btnOutlinePrimary,
	btnOutlineSecondary,
	btnOutlineSuccess,
	btnOutlineWarning,
	btnPrimary,
	btnSecondary,
	btnSm,
	btnSuccess,
	btnWarning,
} as const

const bootstrapNavbarRuntimeClasses = {
	mt5,
	alignTop,
	bgLight,
	bgPrimary,
	dInlineBlock,
	navbar,
	navbarBrand,
	navbarDark,
	navbarInner,
	navbarLogoMuted,
	navbarToggler,
	navbarTogglerIcon,
} as const

const bootstrapNavRuntimeClasses = {
	fade,
	nav,
	navButtonReset,
	navItem,
	navLink,
	navLinkActive,
	navLinkDisabled,
	navPills,
	navTabs,
	show,
	tabContent,
	tabPane,
	tabPaneActive,
} as const

const bootstrapModalRuntimeClasses = {
	actionsRow,
	bodyText,
	btnClose,
	fade: modalFadeClass,
	flexWrap,
	h4,
	h5,
	justifyContentBetween,
	modal,
	modalBody,
	modalContent,
	modalDialog,
	modalDialogCentered,
	modalDialogScrollable,
	modalFade,
	modalFooter,
	modalFullscreen,
	modalHeader,
	modalTitle,
} as const

const bootstrapCardRuntimeClasses = {
	bdPlaceholderImg,
	card,
	cardBody,
	cardExample,
	cardFooter,
	cardGridRow,
	cardHeader,
	cardHeaderTabs,
	cardImgTop,
	cardLink,
	cardRow,
	cardText,
	cardTitle,
	col,
	h5,
	listGroup,
	listGroupFlush,
	listGroupItem,
	paragraph,
	rowG4,
	smallText,
	textCenter,
	textMuted,
} as const

const bootstrapBadgeRuntimeClasses = {
	badge,
	bgDark,
	bgDanger,
	bgInfo,
	bgLight: badgeBgLight,
	bgPrimary: badgeBgPrimary,
	bgSecondary,
	bgSuccess,
	bgWarning,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	roundedPill,
	textDark,
} as const

const bootstrapPopoverRuntimeClasses = {
	frame: popoverFrame,
	frameColumn: popoverFrameColumn,
	frameRow: popoverFrameRow,
	h3,
	justifyEnd: popoverJustifyEnd,
	justifyStart: popoverJustifyStart,
	popoverArrow,
	popoverBody,
	popoverClass,
	popoverHeader,
} as const

const bootstrapTooltipRuntimeClasses = {
	frame: tooltipFrame,
	frameColumn: tooltipFrameColumn,
	frameRow: tooltipFrameRow,
	justifyCenter,
	justifyEnd: tooltipJustifyEnd,
	justifyStart: tooltipJustifyStart,
	tooltipArrow,
	tooltipClass,
	tooltipInner,
} as const

const bootstrapThemeDefinition: VeThemeDefinition = {
	slug: 'bootstrap',
	contracts: {
		global: {
			bsTheme,
			body,
			containerFluid,
		},
		dropdowns: {
			h6,
			btn,
			btnShowHook,
			btnLg,
			btnSm,
			btnPrimary,
			btnSecondary,
			btnSuccess,
			btnInfo,
			btnWarning,
			btnDanger,
			btnLight,
			btnDark,
			btnGroup,
			dropdown,
			dropdownDivider,
			dropdownHeader,
			dropdownItem,
			dropdownMenu,
			dropdownMenuShow,
			dropdownMenuEnd,
			dropdownToggle,
			dropdownToggleSplit,
			dropup,
			dropupMenu,
			dropupToggle,
			dropend,
			dropendMenu,
			dropendToggle,
			dropstart,
			dropstartMenu,
			dropstartToggle,
			visuallyHidden,
		},
		buttons: bootstrapButtonRuntimeClasses,
		navbar: bootstrapNavbarRuntimeClasses,
		nav: bootstrapNavRuntimeClasses,
		modal: bootstrapModalRuntimeClasses,
		card: bootstrapCardRuntimeClasses,
		badge: bootstrapBadgeRuntimeClasses,
		popovers: bootstrapPopoverRuntimeClasses,
		tooltips: bootstrapTooltipRuntimeClasses,
	},
	availableFamilies: new Set<VeThemeFamily>(['global', 'contents', 'forms', 'ui', 'dropdowns', 'buttons', 'navbar', 'nav', 'modal', 'card', 'badge', 'popovers', 'tooltips']),
}

export const bootstrapDropdownRuntimeClasses = bootstrapThemeDefinition.contracts.dropdowns
export const bootstrapGlobalRuntimeClasses = bootstrapThemeDefinition.contracts.global
export { bootstrapButtonRuntimeClasses }
export { bootstrapNavbarRuntimeClasses }
export { bootstrapNavRuntimeClasses }
export { bootstrapModalRuntimeClasses }
export { bootstrapCardRuntimeClasses }
export { bootstrapBadgeRuntimeClasses }
export { bootstrapPopoverRuntimeClasses }
export { bootstrapTooltipRuntimeClasses }

const implementedThemeRegistry: Record<string, VeThemeDefinition> = {
	bootstrap: bootstrapThemeDefinition,
}

export type VeThemeResolutionReason = 'unknown-theme' | 'missing-family-contract'

export interface VeThemeResolution {
	requestedThemeParam: string | null
	selectedThemeSlug: string
	routePath: string
	requiredFamilies: readonly VeThemeFamily[]
	supported: boolean
	reason?: VeThemeResolutionReason
	missingFamilies?: readonly VeThemeFamily[]
	theme?: VeThemeDefinition
}

export function resolveVeThemeForRoute(search: string, routePath: string, requiredFamilies: readonly VeThemeFamily[]): VeThemeResolution {
	const params = new URLSearchParams(search)
	const rawTheme = params.get('theme')
	const requestedSlug = parseKnownThemeSlug(rawTheme)

	if (rawTheme && !requestedSlug) {
		return {
			requestedThemeParam: rawTheme,
			selectedThemeSlug: rawTheme,
			routePath,
			requiredFamilies,
			supported: false,
			reason: 'unknown-theme',
			missingFamilies: requiredFamilies,
		}
	}

	const selectedSlug = requestedSlug ?? VE_DEFAULT_THEME_SLUG
	const theme = implementedThemeRegistry[selectedSlug]

	if (!theme) {
		return {
			requestedThemeParam: rawTheme,
			selectedThemeSlug: selectedSlug,
			routePath,
			requiredFamilies,
			supported: false,
			reason: isKnownThemeSlug(selectedSlug) ? 'missing-family-contract' : 'unknown-theme',
			missingFamilies: requiredFamilies,
		}
	}

	const missingFamilies = requiredFamilies.filter((family) => !theme.availableFamilies.has(family))
	if (missingFamilies.length > 0) {
		return {
			requestedThemeParam: rawTheme,
			selectedThemeSlug: selectedSlug,
			routePath,
			requiredFamilies,
			supported: false,
			reason: 'missing-family-contract',
			missingFamilies,
			theme,
		}
	}

	return {
		requestedThemeParam: rawTheme,
		selectedThemeSlug: selectedSlug,
		routePath,
		requiredFamilies,
		supported: true,
		theme,
	}
}
