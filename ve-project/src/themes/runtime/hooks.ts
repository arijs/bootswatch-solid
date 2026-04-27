import type { VeButtonThemeContract, VeDropdownThemeContract, VeGlobalThemeContract } from './contracts'
import { getRequiredFamiliesForPath } from './route-families'
import { bootstrapButtonRuntimeClasses, bootstrapDropdownRuntimeClasses, bootstrapGlobalRuntimeClasses, resolveVeThemeForRoute } from './registry'

const emittedWarnings = new Set<string>()

function warnUnsupportedIfNeeded(requiredFamilyPath: string) {
	const resolution = resolveVeThemeForRoute(
		window.location.search,
		window.location.pathname,
		getRequiredFamiliesForPath(requiredFamilyPath),
	)

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
	warnUnsupportedIfNeeded(window.location.pathname)
	return bootstrapGlobalRuntimeClasses
}

export function useVeDropdownThemeClasses(): VeGlobalThemeContract & VeDropdownThemeContract {
	warnUnsupportedIfNeeded(window.location.pathname)
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapDropdownRuntimeClasses,
	}
}

export function useVeButtonThemeClasses(): VeGlobalThemeContract & VeButtonThemeContract {
	warnUnsupportedIfNeeded(window.location.pathname)
	return {
		...bootstrapGlobalRuntimeClasses,
		...bootstrapButtonRuntimeClasses,
	}
}
