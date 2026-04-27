import type { VeBadgeThemeContract, VeButtonThemeContract, VeCardThemeContract, VeDropdownThemeContract, VeGlobalThemeContract, VeModalThemeContract, VeNavThemeContract, VeNavbarThemeContract } from './contracts'
import {
	bootstrapBadgeRuntimeClasses,
	bootstrapButtonRuntimeClasses,
	bootstrapCardRuntimeClasses,
	bootstrapDropdownRuntimeClasses,
	bootstrapGlobalRuntimeClasses,
	bootstrapModalRuntimeClasses,
	bootstrapNavRuntimeClasses,
	bootstrapNavbarRuntimeClasses,
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
