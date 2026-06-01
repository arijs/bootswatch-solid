import { access, readdir, readFile } from 'node:fs/promises'
import path from 'node:path'

import { SCREENSHOTS_ROOT } from './constants.mjs'
import {
	buildSelectorMap,
	isBareFormsOwnedSelector,
	isBareHeadingOwnedSelector,
	normalizeSelector,
	normalizeSelectorForLookup,
	parseCssRules,
} from './css-utils.mjs'
import { getFamiliesForRoute, resolveFamilyForSelector } from './route-families.mjs'

async function fileExists(filePath) {
	try {
		await access(filePath)
		return true
	} catch {
		return false
	}
}

async function walkStyleCssFiles(themeDir) {
	const results = []
	async function walk(dir, routeParts = []) {
		const entries = await readdir(dir, { withFileTypes: true })
		for (const entry of entries) {
			const full = path.join(dir, entry.name)
			if (entry.isDirectory()) {
				await walk(full, [...routeParts, entry.name])
			} else if (entry.name === 'style.css') {
				results.push({
					filePath: full,
					routePath: routeParts.slice(0, -1).join('/'),
					stateFolder: routeParts.at(-1) ?? 'static',
				})
			}
		}
	}
	await walk(themeDir)
	return results
}

function mergeRulesIntoFamily(familyRules, family, rules) {
	if (!familyRules.has(family)) familyRules.set(family, [])
	familyRules.get(family).push(...rules)
}

function bucketRulesByFamily(rules, routePath) {
	const routeFamilies = getFamiliesForRoute(`/${routePath}`)
	const buckets = new Map()
	for (const family of routeFamilies) buckets.set(family, [])

	for (const rule of rules) {
		if (rule.type !== 'rule') continue
		let assigned = false
		for (const selector of rule.selectors) {
			const guessed = resolveFamilyForSelector(selector)
			if (guessed && buckets.has(guessed)) {
				buckets.get(guessed).push(rule)
				assigned = true
				break
			}
		}
		if (!assigned && routeFamilies.length > 0) {
			// Do not bleed bare element selectors into the route's primary family.
			const hasClassSelector = rule.selectors.some((s) => /\.[a-z]/i.test(s))
			if (!hasClassSelector) continue

			// Bare form/heading selectors belong to their owning family — never route-fallback bleed.
			if (rule.selectors.some((s) => isBareFormsOwnedSelector(s) || isBareHeadingOwnedSelector(s))) continue

			// Fallback: first non-utilities family on the route
			const primary = routeFamilies.find((f) => !f.startsWith('contents/basic') && f !== 'utilities')
			if (primary) buckets.get(primary).push(rule)
		}
	}
	return buckets
}

/**
 * Load theme.css text for a theme.
 * @param {string} themeSlug
 */
export async function loadThemeCss(themeSlug) {
	const themeCssPath = path.join(SCREENSHOTS_ROOT, themeSlug, 'theme.css')
	if (await fileExists(themeCssPath)) {
		return readFile(themeCssPath, 'utf8')
	}
	const bootstrapCssPath = path.join(SCREENSHOTS_ROOT, themeSlug, 'bootstrap.css')
	if (await fileExists(bootstrapCssPath)) {
		return readFile(bootstrapCssPath, 'utf8')
	}
	throw new Error(`No theme.css or bootstrap.css found for theme "${themeSlug}"`)
}

/**
 * Aggregate per-family CSS rules from screenshot style.css files.
 * @returns {Promise<Map<string, Map<string, Record<string, string>>>} family → selectorMap
 */
export async function aggregateFamilyCss(themeSlug) {
	const themeDir = path.join(SCREENSHOTS_ROOT, themeSlug)
	const familyRules = new Map()

	// Bundled theme CSS first — route style.css overrides win (matches screenshot capture source).
	const fullCss = await loadThemeCss(themeSlug)
	const fullRules = parseCssRules(fullCss)
	for (const rule of fullRules) {
		if (rule.type !== 'rule') continue
		for (const selector of rule.selectors) {
			const family = resolveFamilyForSelector(selector)
			if (family) mergeRulesIntoFamily(familyRules, family, [rule])
		}
	}

	const styleFiles = await walkStyleCssFiles(themeDir)
	for (const { filePath, routePath } of styleFiles) {
		const cssText = await readFile(filePath, 'utf8')
		const rules = parseCssRules(cssText)
		const buckets = bucketRulesByFamily(rules, routePath)
		for (const [family, familyRuleList] of buckets) {
			mergeRulesIntoFamily(familyRules, family, familyRuleList)
		}
	}

	const familyMaps = new Map()
	for (const [family, rules] of familyRules) {
		familyMaps.set(family, buildSelectorMap(rules))
	}
	return familyMaps
}

/**
 * Get declarations for a selector from aggregated family CSS.
 * Tries exact match, then simple class match without pseudo/combinators.
 */
export function lookupDeclarations(familyMap, sourceSelector) {
	if (!familyMap) return null
	const normalized = normalizeSelectorForLookup(sourceSelector)
	if (familyMap.has(normalized)) {
		const decl = familyMap.get(normalized)
		const { _media, ...rest } = decl
		return rest
	}

	// Compound class selectors only (.btn.btn-primary) — not pseudo/attribute variants
	const simpleClass = normalized.match(/^(\.[a-z0-9-]+)/i)?.[1]
	if (simpleClass && familyMap.has(simpleClass)) {
		const suffix = normalized.slice(simpleClass.length)
		if (suffix.startsWith('.')) {
			const decl = familyMap.get(simpleClass)
			const { _media, ...rest } = decl
			return rest
		}
	}

	return null
}

/**
 * Collect all unique selectors in a family map.
 */
export function getFamilySelectors(familyMap) {
	return [...familyMap.keys()].filter((k) => !k.includes('|||'))
}
