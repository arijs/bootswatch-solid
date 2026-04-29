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

export function filterScenarios(scenarios, routeFilter, stateFilter) {
	const routePatterns = routeFilter ? [...routeFilter] : null
	return scenarios.filter((scenario) => {
		if (routePatterns && !micromatch.isMatch(scenario.route, routePatterns)) return false
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
