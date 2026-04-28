import { body } from '../bootstrap/body.css'
import { containerFluid } from '../bootstrap/container.css'
import { bsTheme } from '../bootstrap/_vars.css'
import { bootstrapContentsRuntimeClasses } from '../bootstrap/contents/runtime'
import { bootstrapFormsRuntimeClasses } from '../bootstrap/forms/runtime'
import { bootstrapAccordionRuntimeClasses } from '../bootstrap/ui/accordion/runtime'
import { bootstrapAlertRuntimeClasses } from '../bootstrap/ui/alerts/runtime'
import { bootstrapBadgeRuntimeClasses } from '../bootstrap/ui/badge/runtime'
import { bootstrapBreadcrumbRuntimeClasses } from '../bootstrap/ui/breadcrumb/runtime'
import { bootstrapButtonGroupRuntimeClasses } from '../bootstrap/ui/button-group/runtime'
import { bootstrapButtonRuntimeClasses } from '../bootstrap/ui/buttons/runtime'
import { bootstrapCardRuntimeClasses } from '../bootstrap/ui/card/runtime'
import { bootstrapCarouselRuntimeClasses } from '../bootstrap/ui/carousel/runtime'
import { bootstrapDropdownRuntimeClasses } from '../bootstrap/ui/dropdowns/runtime'
import { bootstrapModalRuntimeClasses } from '../bootstrap/ui/modal/runtime'
import { bootstrapNavRuntimeClasses } from '../bootstrap/ui/nav/runtime'
import { bootstrapNavbarRuntimeClasses } from '../bootstrap/ui/navbar/runtime'
import { bootstrapPaginationRuntimeClasses } from '../bootstrap/ui/pagination/runtime'
import { bootstrapPopoverRuntimeClasses } from '../bootstrap/ui/popovers/runtime'
import { bootstrapProgressRuntimeClasses } from '../bootstrap/ui/progress/runtime'
import { bootstrapScrollspyRuntimeClasses } from '../bootstrap/ui/scrollspy/runtime'
import { bootstrapSpinnerRuntimeClasses } from '../bootstrap/ui/spinners/runtime'
import { bootstrapToastRuntimeClasses } from '../bootstrap/ui/toasts/runtime'
import { bootstrapTooltipRuntimeClasses } from '../bootstrap/ui/tooltips/runtime'
import type { VeThemeDefinition, VeThemeFamily } from './contracts'
import { VE_DEFAULT_THEME_SLUG, isKnownThemeSlug, parseKnownThemeSlug } from './theme-slugs'

export const bootstrapGlobalRuntimeClasses = {
	bsTheme,
	body,
	containerFluid,
} as const

const bootstrapThemeDefinition: VeThemeDefinition = {
	slug: 'bootstrap',
	contracts: {
		global: bootstrapGlobalRuntimeClasses,
		contents: bootstrapContentsRuntimeClasses,
		forms: bootstrapFormsRuntimeClasses,
		dropdowns: bootstrapDropdownRuntimeClasses,
		buttons: bootstrapButtonRuntimeClasses,
		buttonGroup: bootstrapButtonGroupRuntimeClasses,
		alerts: bootstrapAlertRuntimeClasses,
		breadcrumb: bootstrapBreadcrumbRuntimeClasses,
		navbar: bootstrapNavbarRuntimeClasses,
		nav: bootstrapNavRuntimeClasses,
		modal: bootstrapModalRuntimeClasses,
		card: bootstrapCardRuntimeClasses,
		badge: bootstrapBadgeRuntimeClasses,
		popovers: bootstrapPopoverRuntimeClasses,
		tooltips: bootstrapTooltipRuntimeClasses,
		accordion: bootstrapAccordionRuntimeClasses,
		scrollspy: bootstrapScrollspyRuntimeClasses,
		pagination: bootstrapPaginationRuntimeClasses,
		carousel: bootstrapCarouselRuntimeClasses,
		progress: bootstrapProgressRuntimeClasses,
		spinners: bootstrapSpinnerRuntimeClasses,
		toasts: bootstrapToastRuntimeClasses,
	},
	availableFamilies: new Set<VeThemeFamily>(['global', 'contents', 'forms', 'ui', 'dropdowns', 'buttons', 'buttonGroup', 'alerts', 'breadcrumb', 'navbar', 'nav', 'modal', 'card', 'badge', 'popovers', 'tooltips', 'accordion', 'scrollspy', 'pagination', 'carousel', 'progress', 'spinners', 'toasts']),
}

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

export {
	bootstrapAccordionRuntimeClasses,
	bootstrapAlertRuntimeClasses,
	bootstrapBadgeRuntimeClasses,
	bootstrapBreadcrumbRuntimeClasses,
	bootstrapButtonGroupRuntimeClasses,
	bootstrapButtonRuntimeClasses,
	bootstrapCardRuntimeClasses,
	bootstrapCarouselRuntimeClasses,
	bootstrapContentsRuntimeClasses,
	bootstrapDropdownRuntimeClasses,
	bootstrapFormsRuntimeClasses,
	bootstrapModalRuntimeClasses,
	bootstrapNavRuntimeClasses,
	bootstrapNavbarRuntimeClasses,
	bootstrapPaginationRuntimeClasses,
	bootstrapPopoverRuntimeClasses,
	bootstrapProgressRuntimeClasses,
	bootstrapScrollspyRuntimeClasses,
	bootstrapSpinnerRuntimeClasses,
	bootstrapToastRuntimeClasses,
	bootstrapTooltipRuntimeClasses,
}
