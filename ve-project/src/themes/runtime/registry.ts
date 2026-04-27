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
	},
	availableFamilies: new Set<VeThemeFamily>(['global', 'contents', 'forms', 'ui', 'dropdowns', 'buttons', 'navbar', 'nav']),
}

export const bootstrapDropdownRuntimeClasses = bootstrapThemeDefinition.contracts.dropdowns
export const bootstrapGlobalRuntimeClasses = bootstrapThemeDefinition.contracts.global
export { bootstrapButtonRuntimeClasses }
export { bootstrapNavbarRuntimeClasses }
export { bootstrapNavRuntimeClasses }

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
