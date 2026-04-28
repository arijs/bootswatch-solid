import type {
	VeAccordionThemeContract,
	VeAlertThemeContract,
	VeBadgeThemeContract,
	VeBreadcrumbThemeContract,
	VeButtonGroupThemeContract,
	VeButtonThemeContract,
	VeCarouselThemeContract,
	VeCardThemeContract,
	VeContentsThemeContract,
	VeDropdownThemeContract,
	VeFormsThemeContract,
	VeGlobalThemeContract,
	VeModalThemeContract,
	VeNavThemeContract,
	VeNavbarThemeContract,
	VePopoverThemeContract,
	VeProgressThemeContract,
	VePaginationThemeContract,
	VeScrollspyThemeContract,
	VeSpinnerThemeContract,
	VeToastThemeContract,
	VeTooltipThemeContract,
} from './contracts'
import {
	bootstrapAccordionRuntimeClasses,
	bootstrapAlertRuntimeClasses,
	bootstrapBadgeRuntimeClasses,
	bootstrapBreadcrumbRuntimeClasses,
	bootstrapButtonGroupRuntimeClasses,
	bootstrapButtonRuntimeClasses,
	bootstrapCarouselRuntimeClasses,
	bootstrapCardRuntimeClasses,
	bootstrapContentsRuntimeClasses,
	bootstrapDropdownRuntimeClasses,
	bootstrapFormsRuntimeClasses,
	bootstrapGlobalRuntimeClasses,
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
	type VeThemeResolution,
} from './registry'
import { useVeThemeRuntime } from './provider'

const emittedWarnings = new Set<string>()

function warnUnsupportedIfNeeded(resolution: VeThemeResolution) {
	if (resolution.supported) return
	const warningKey = [resolution.selectedThemeSlug, resolution.routePath, resolution.reason].join('|')
	if (emittedWarnings.has(warningKey)) return
	emittedWarnings.add(warningKey)

	console.warn('[ve-theme-skip]', {
		selectedThemeSlug: resolution.selectedThemeSlug,
		routePath: resolution.routePath,
		requiredFamilies: resolution.requiredFamilies,
		reason: resolution.reason,
	})
}

export function useVeGlobalThemeClasses(): VeGlobalThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return bootstrapGlobalRuntimeClasses
}

export function useVeContentsThemeClasses(): VeContentsThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return bootstrapContentsRuntimeClasses
}

export function useVeFormsThemeClasses(): VeGlobalThemeContract & VeFormsThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapFormsRuntimeClasses,
	}
}

export function useVeDropdownThemeClasses(): VeGlobalThemeContract & VeDropdownThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapDropdownRuntimeClasses,
	}
}

export function useVeButtonThemeClasses(): VeGlobalThemeContract & VeButtonThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapButtonRuntimeClasses,
	}
}

export function useVeButtonGroupThemeClasses(): VeButtonGroupThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return bootstrapButtonGroupRuntimeClasses
}

export function useVeAlertThemeClasses(): VeGlobalThemeContract & VeAlertThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapAlertRuntimeClasses,
	}
}

export function useVeBreadcrumbThemeClasses(): VeGlobalThemeContract & VeBreadcrumbThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapBreadcrumbRuntimeClasses,
	}
}

export function useVeNavbarThemeClasses(): VeGlobalThemeContract & VeNavbarThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapNavbarRuntimeClasses,
	}
}

export function useVeNavThemeClasses(): VeGlobalThemeContract & VeNavThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapNavRuntimeClasses,
	}
}

export function useVeModalThemeClasses(): VeModalThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return bootstrapModalRuntimeClasses
}

export function useVeCardThemeClasses(): VeCardThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return bootstrapCardRuntimeClasses
}

export function useVeBadgeThemeClasses(): VeGlobalThemeContract & VeBadgeThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapBadgeRuntimeClasses,
	}
}

export function useVePopoverThemeClasses(): VeGlobalThemeContract & VeButtonThemeContract & VePopoverThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapButtonRuntimeClasses,
		...bootstrapPopoverRuntimeClasses,
	}
}

export function useVeTooltipThemeClasses(): VeGlobalThemeContract & VeButtonThemeContract & VeTooltipThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapButtonRuntimeClasses,
		...bootstrapTooltipRuntimeClasses,
	}
}

export function useVeAccordionThemeClasses(): VeGlobalThemeContract & VeAccordionThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapAccordionRuntimeClasses,
	}
}

export function useVeScrollspyThemeClasses(): VeScrollspyThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return bootstrapScrollspyRuntimeClasses
}

export function useVePaginationThemeClasses(): VeGlobalThemeContract & VePaginationThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapPaginationRuntimeClasses,
	}
}

export function useVeProgressThemeClasses(): VeGlobalThemeContract & VeProgressThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapProgressRuntimeClasses,
	}
}

export function useVeSpinnerThemeClasses(): VeGlobalThemeContract & VeSpinnerThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapSpinnerRuntimeClasses,
	}
}

export function useVeCarouselThemeClasses(): VeGlobalThemeContract & VeContentsThemeContract & VeCarouselThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapContentsRuntimeClasses,
		...bootstrapCarouselRuntimeClasses,
	}
}

export function useVeToastThemeClasses(): VeGlobalThemeContract & VeToastThemeContract {
	const runtime = useVeThemeRuntime()
	warnUnsupportedIfNeeded(runtime())
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapToastRuntimeClasses,
	}
}
