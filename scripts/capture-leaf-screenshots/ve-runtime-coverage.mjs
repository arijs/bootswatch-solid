import { readFileSync } from 'node:fs'
import {
	VE_RUNTIME_REGISTRY_FILE,
	VE_RUNTIME_ROUTE_FAMILIES_FILE,
} from './constants.mjs'
import { slugifyTheme } from './utils.mjs'

function parseStringArrayLiteral(source) {
	const values = []
	const itemRegex = /'([^']+)'/g
	for (const match of source.matchAll(itemRegex)) {
		values.push(match[1])
	}
	return values
}

function parseRouteFamilyResolver(routeFamiliesSource) {
	const aliasFamilies = new Map()
	const aliasRegex = /const\s+(\w+):\s*readonly VeThemeFamily\[\]\s*=\s*\[([^\]]*)\]/g
	for (const match of routeFamiliesSource.matchAll(aliasRegex)) {
		aliasFamilies.set(match[1], parseStringArrayLiteral(match[2]))
	}

	const explicitStart = routeFamiliesSource.indexOf('const explicitRouteFamilies:')
	const explicitEnd = routeFamiliesSource.indexOf('export function getRequiredFamiliesForPath')
	if (explicitStart === -1 || explicitEnd === -1 || explicitEnd <= explicitStart) {
		throw new Error('Failed to parse explicit route family map from route-families.ts.')
	}

	const explicitBlock = routeFamiliesSource.slice(explicitStart, explicitEnd)
	const explicitFamilies = new Map()
	for (const line of explicitBlock.split('\n')) {
		const match = line.match(/^\s*'([^']+)':\s*(.+),\s*$/)
		if (!match) continue
		const routePath = match[1]
		const rawValue = match[2].trim()
		if (rawValue.startsWith('[')) {
			explicitFamilies.set(routePath, parseStringArrayLiteral(rawValue))
			continue
		}
		const aliasResolved = aliasFamilies.get(rawValue)
		if (!aliasResolved) {
			throw new Error(
				`Failed to resolve route family alias "${rawValue}" for route ${routePath}.`,
			)
		}
		explicitFamilies.set(routePath, aliasResolved)
	}

	const fallbackRules = []
	const fallbackRegex = /if \(pathname\.startsWith\('([^']+)'\)\) return \[([^\]]*)\]/g
	for (const match of routeFamiliesSource.matchAll(fallbackRegex)) {
		fallbackRules.push({
			prefix: match[1],
			families: parseStringArrayLiteral(match[2]),
		})
	}

	const defaultMatch = routeFamiliesSource.match(/return \[([^\]]*)\]\s*\n}\s*$/)
	if (!defaultMatch) {
		throw new Error('Failed to parse default route family fallback from route-families.ts.')
	}
	const defaultFamilies = parseStringArrayLiteral(defaultMatch[1])

	return function getRequiredFamiliesForPath(pathname) {
		const explicit = explicitFamilies.get(pathname)
		if (explicit) return explicit
		for (const fallback of fallbackRules) {
			if (pathname.startsWith(fallback.prefix)) {
				return fallback.families
			}
		}
		return defaultFamilies
	}
}

function parseImplementedThemeFamilies(registrySource) {
	const themeDefinitions = new Map()

	// Legacy shape:
	// const fooThemeDefinition: VeThemeDefinition = { slug: 'foo', ..., availableFamilies: new Set<VeThemeFamily>(['...']) }
	const legacyDefinitionRegex =
		/const\s+(\w+ThemeDefinition)\s*:\s*VeThemeDefinition\s*=\s*{[\s\S]*?slug:\s*'([^']+)'[\s\S]*?availableFamilies:\s*new Set<VeThemeFamily>\(\[([\s\S]*?)\]\),[\s\S]*?}\s*/g

	for (const match of registrySource.matchAll(legacyDefinitionRegex)) {
		themeDefinitions.set(match[1], {
			slug: match[2],
			families: parseStringArrayLiteral(match[3]),
		})
	}

	// Current shape:
	// const fooThemeDefinition = buildThemeDefinition('foo', { contracts... }, ['optionalExtraFamilies'])
	const builderDefinitionRegex =
		/const\s+(\w+ThemeDefinition)\s*=\s*buildThemeDefinition\(\s*'([^']+)'\s*,\s*{([\s\S]*?)}\s*(?:,\s*\[([\s\S]*?)\])?\s*\)/g

	for (const match of registrySource.matchAll(builderDefinitionRegex)) {
		const definitionKey = match[1]
		const slug = match[2]
		const contractsObjectSource = match[3]
		const extrasSource = match[4] ?? ''

		const contractFamilies = []
		for (const line of contractsObjectSource.split('\n')) {
			const contractMatch = line.match(/^\s*(\w+)\s*:\s*/)
			if (!contractMatch) continue
			contractFamilies.push(contractMatch[1])
		}

		const extras = parseStringArrayLiteral(extrasSource)
		const dedupedFamilies = [...new Set([...contractFamilies, ...extras])]

		themeDefinitions.set(definitionKey, {
			slug,
			families: dedupedFamilies,
		})
	}

	const registryMatch = registrySource.match(
		/const\s+implementedThemeRegistry:\s*Record<string, VeThemeDefinition>\s*=\s*{([\s\S]*?)}\s*/,
	)
	if (!registryMatch) {
		throw new Error('Failed to parse implementedThemeRegistry from registry.ts.')
	}

	const implemented = new Map()
	const entryRegex = /(\w+)\s*:\s*(\w+ThemeDefinition)/g
	for (const match of registryMatch[1].matchAll(entryRegex)) {
		const slug = match[1]
		const definitionKey = match[2]
		const definition = themeDefinitions.get(definitionKey)
		if (!definition) continue
		implemented.set(slug, new Set(definition.families))
	}

	return implemented
}

export function reportVeRuntimeCoverageGaps({
	selectedLeafRoutes,
	selectedThemes,
	themesBeforeLimit,
	maxThemes,
	maxThemesSpecified,
	includeLeafRoutes,
}) {
	const routeFamiliesSource = readFileSync(VE_RUNTIME_ROUTE_FAMILIES_FILE, 'utf8')
	const registrySource = readFileSync(VE_RUNTIME_REGISTRY_FILE, 'utf8')

	const getRequiredFamiliesForPath = parseRouteFamilyResolver(routeFamiliesSource)
	const implementedThemeFamilies = parseImplementedThemeFamilies(registrySource)

	console.log('Mode: VE1 runtime missing-only enabled (--ve1-runtime-missing-only).')
	console.log(`Selected leaf routes: ${selectedLeafRoutes.length}.`)
	console.log(
		`Selected themes: ${selectedThemes.length}${maxThemesSpecified && themesBeforeLimit > selectedThemes.length ? ` (limited to ${maxThemes} of ${themesBeforeLimit})` : ''}.`,
	)
	console.log(
		`Leaf route detail: ${includeLeafRoutes ? 'shown (--ve1-runtime-missing-leafs)' : 'hidden (use --ve1-runtime-missing-leafs to show affected routes)'}.`,
	)

	const sortedRoutes = [...selectedLeafRoutes].sort((a, b) => a.localeCompare(b))
	const themedResults = selectedThemes
		.map((themeName) => {
			const themeSlug = slugifyTheme(themeName)
			const availableFamilies =
				implementedThemeFamilies.get(themeSlug) ??
				new Set()
			const familyToRoutes = new Map()
			let impactedRouteCount = 0

			for (const routePath of sortedRoutes) {
				const requiredFamilies = getRequiredFamiliesForPath(routePath)
				const missingFamilies = requiredFamilies.filter((family) => !availableFamilies.has(family))
				if (missingFamilies.length === 0) continue
				impactedRouteCount += 1
				for (const family of missingFamilies) {
					const routes = familyToRoutes.get(family) ?? []
					routes.push(routePath)
					familyToRoutes.set(family, routes)
				}
			}

			return {
				themeName,
				themeSlug,
				familyToRoutes,
				impactedRouteCount,
			}
		})
		.sort((a, b) => a.themeSlug.localeCompare(b.themeSlug))

	let anyMissingCoverage = false
	for (const themeResult of themedResults) {
		if (themeResult.familyToRoutes.size === 0) {
			console.log(`\nTheme ${themeResult.themeSlug}: all required families available for selected routes.`)
			continue
		}
		anyMissingCoverage = true
		console.warn(
			`\nTheme ${themeResult.themeSlug}: missing ${themeResult.familyToRoutes.size} family/families across ${themeResult.impactedRouteCount}/${sortedRoutes.length} selected routes.`,
		)

		const families = [...themeResult.familyToRoutes.keys()].sort((a, b) =>
			a.localeCompare(b),
		)
		for (const family of families) {
			const routes = themeResult.familyToRoutes.get(family) ?? []
			console.warn(`  - ${family} (${routes.length} route(s))`)
			if (includeLeafRoutes) {
				for (const routePath of routes) {
					console.warn(`      ${routePath}`)
				}
			}
		}
	}

	if (!anyMissingCoverage) {
		console.log('\nVE runtime coverage report: no missing family contracts for selected themes/routes.')
		return
	}

	console.warn('\nVE runtime coverage report complete: missing family contracts detected.')
}
