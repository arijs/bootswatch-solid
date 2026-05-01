import micromatch from 'micromatch'
import { INTERACTIVE_SCENARIOS } from './interactive-scenarios.mjs'
import { slugifyTheme } from './utils.mjs'

export function buildStaticScenarios(leafRoutes) {
	return leafRoutes.map((route) => ({
		route,
		state: null,
		kind: 'static',
	}))
}

export function getScenarioStateFolder(state) {
	return state ?? 'static'
}

export function filterThemes(themes, themeFilter) {
	if (!themeFilter) return themes
	return themes.filter((theme) => themeFilter.has(slugifyTheme(theme)) || themeFilter.has(theme))
}

export function matchesRouteFilter(route, routeFilter) {
	if (!routeFilter || routeFilter.size === 0) return true

	const patterns = [...routeFilter]
	const includePatterns = patterns.filter((pattern) => !pattern.startsWith('!'))
	const excludePatterns = patterns
		.filter((pattern) => pattern.startsWith('!'))
		.map((pattern) => pattern.slice(1))
		.filter(Boolean)

	if (includePatterns.length > 0 && !micromatch.isMatch(route, includePatterns)) {
		return false
	}

	if (excludePatterns.length > 0 && micromatch.isMatch(route, excludePatterns)) {
		return false
	}

	return true
}

export function filterScenarios(scenarios, routeFilter, stateFilter) {
	return scenarios.filter((scenario) => {
		if (!matchesRouteFilter(scenario.route, routeFilter)) return false
		const stateName = scenario.state ?? 'static'
		if (stateFilter && !stateFilter.has(stateName)) return false
		return true
	})
}

export function createScenarioCatalog(leafRoutes) {
	const staticScenarios = buildStaticScenarios(leafRoutes)
	const routeSet = new Set(leafRoutes)
	const curatedScenarios = INTERACTIVE_SCENARIOS.filter((scenario) =>
		routeSet.has(scenario.route),
	)
	return [...staticScenarios, ...curatedScenarios]
}

export function assertCuratedScenarioRoutes(leafRoutes, strictScenarioAssert) {
	const leafRouteSet = new Set(leafRoutes)
	const curatedRoutes = [...new Set(INTERACTIVE_SCENARIOS.map((scenario) => scenario.route))]
	const missingRoutes = curatedRoutes.filter((route) => !leafRouteSet.has(route))

	if (missingRoutes.length === 0) {
		return
	}

	const message = [
		`Curated interactive scenario route assertion failed (${missingRoutes.length} missing route(s)).`,
		...missingRoutes.map((route) => `  - ${route}`),
		'Update INTERACTIVE_SCENARIOS to match src/index.tsx leaf routes.',
	].join('\n')

	if (strictScenarioAssert) {
		throw new Error(message)
	}

	console.warn(`${message}\nProceeding because --strict-scenarios was not provided.`)
}
