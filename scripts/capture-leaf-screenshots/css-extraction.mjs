import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { parse as parseCss } from '@adobe/css-tools'

import { ROOT } from './constants.mjs'

const GLOBAL_SELECTOR_EXCLUSIONS = new Set([
	'html',
	'body',
	':root',
	'.container-fluid',
	'*',
	'::before',
	'::after',
])

const FORCE_SCENARIO_SELECTOR_INCLUSIONS = [
	'.modal-backdrop',
	'.tooltip',
	'.popover',
	'.offcanvas-backdrop',
]

const SOURCE_STYLE_RULE_CACHE = new Map()
const THEME_SOURCE_URL_CACHE = new Map()
const THEMES_SOURCE_PATH = path.join(ROOT, 'src', 'logic', 'themes.ts')

export function createThemeCssAccumulator() {
	return {
		themeGlobalRules: new Map(),
		themeGlobalRuleSeen: new Map(),
		writes: 0,
	}
}

function ensureThemeAccumulator(accumulator, themeSlug) {
	if (!accumulator.themeGlobalRules.has(themeSlug)) {
		accumulator.themeGlobalRules.set(themeSlug, [])
		accumulator.themeGlobalRuleSeen.set(themeSlug, new Set())
	}
	return {
		rules: accumulator.themeGlobalRules.get(themeSlug),
		seen: accumulator.themeGlobalRuleSeen.get(themeSlug),
	}
}

function mergeThemeGlobalRules(accumulator, themeSlug, rules) {
	const { rules: merged, seen } = ensureThemeAccumulator(accumulator, themeSlug)
	for (const rule of rules) {
		if (seen.has(rule)) continue
		seen.add(rule)
		merged.push(rule)
	}
}

function resolveThemeArtifactPaths(themeSlug, routePath, stateFolder) {
	const scenarioDir = path.join(ROOT, 'screenshots', themeSlug, routePath, stateFolder)
	const scenarioCssPath = path.join(scenarioDir, 'style.css')
	const themeCssPath = path.join(ROOT, 'screenshots', themeSlug, 'theme.css')
	return { scenarioDir, scenarioCssPath, themeCssPath }
}

function formatCss(rules) {
	if (rules.length === 0) return ''
	return `${rules.join('\n\n')}\n`
}

function normalizeSelectorForLookup(selectorText) {
	return selectorText
		.replace(/\s+/g, ' ')
		.replace(/\s*,\s*/g, ', ')
		.trim()
}

function slugifyThemeName(name) {
	return name
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
}

function parseThemeHrefMap(themesSource) {
	const map = new Map()
	const entryPattern =
		/name:\s*(?:`([^`]+)`|'([^']+)'|"([^"]+)")\s*,[\s\S]*?href:\s*(?:`([^`]+)`|'([^']+)'|"([^"]+)")\s*,/g

	for (const match of themesSource.matchAll(entryPattern)) {
		const themeName = match[1] ?? match[2] ?? match[3]
		const href = match[4] ?? match[5] ?? match[6]
		if (!themeName || !href) continue
		map.set(slugifyThemeName(themeName), href)
	}

	return map
}

async function getThemeSourceUrl(themeSlug) {
	if (THEME_SOURCE_URL_CACHE.has(themeSlug)) {
		return THEME_SOURCE_URL_CACHE.get(themeSlug)
	}

	let href = null
	try {
		const themesSource = await readFile(THEMES_SOURCE_PATH, 'utf8')
		const hrefMap = parseThemeHrefMap(themesSource)
		href = hrefMap.get(themeSlug) ?? null
	} catch {
		href = null
	}

	THEME_SOURCE_URL_CACHE.set(themeSlug, href)
	return href
}

function parseTopLevelStyleRules(cssText) {
	const styleRulesBySelector = new Map()

	let ast
	try {
		ast = parseCss(cssText, { silent: true })
	} catch {
		return styleRulesBySelector
	}

	for (const rule of ast.stylesheet.rules) {
		if (rule.type !== 'rule') continue
		if (!rule.selectors || rule.selectors.length === 0) continue

		const declarations = (rule.declarations ?? [])
			.filter((d) => d.type === 'declaration')
			.map((d) => `${d.property}: ${d.value};`)
			.join(' ')
		if (!declarations) continue

		const selectorText = rule.selectors.join(', ')
		const ruleText = `${selectorText} { ${declarations} }`
		const normalizedSelector = normalizeSelectorForLookup(selectorText)
		const existing = styleRulesBySelector.get(normalizedSelector) ?? []
		existing.push(ruleText)
		styleRulesBySelector.set(normalizedSelector, existing)
	}

	return styleRulesBySelector
}

function extractDeclarationNames(ruleText) {
	const openBraceIndex = ruleText.indexOf('{')
	const closeBraceIndex = ruleText.lastIndexOf('}')
	if (openBraceIndex === -1 || closeBraceIndex <= openBraceIndex) return []

	const body = ruleText.slice(openBraceIndex + 1, closeBraceIndex)
	const names = []
	for (const declaration of body.split(';')) {
		const trimmed = declaration.trim()
		if (!trimmed) continue
		const separator = trimmed.indexOf(':')
		if (separator === -1) continue
		const name = trimmed.slice(0, separator).trim().toLowerCase()
		if (name) names.push(name)
	}
	return names
}

function findBestSourceRule(ruleText, sourceCandidates) {
	if (!Array.isArray(sourceCandidates) || sourceCandidates.length === 0) return null

	if (sourceCandidates.length === 1) return sourceCandidates[0]

	const extractedNames = extractDeclarationNames(ruleText)
	if (extractedNames.length === 0) return sourceCandidates[0]

	const extractedSet = new Set(extractedNames)
	let bestCandidate = null
	let bestScore = -1
	let bestDistance = Number.POSITIVE_INFINITY

	for (const candidate of sourceCandidates) {
		const candidateNames = extractDeclarationNames(candidate)
		let overlapScore = 0
		for (const name of candidateNames) {
			if (extractedSet.has(name)) overlapScore += 1
		}
		const distance = Math.abs(candidateNames.length - extractedNames.length)
		if (
			overlapScore > bestScore ||
			(overlapScore === bestScore && distance < bestDistance) ||
			(overlapScore === bestScore && distance === bestDistance)
		) {
			bestCandidate = candidate
			bestScore = overlapScore
			bestDistance = distance
		}
	}

	if (bestScore <= 0) return null
	return bestCandidate
}

async function getThemeSourceStyleRules(themeSlug) {
	if (SOURCE_STYLE_RULE_CACHE.has(themeSlug)) {
		return SOURCE_STYLE_RULE_CACHE.get(themeSlug)
	}

	const sourceUrl = await getThemeSourceUrl(themeSlug)
	if (!sourceUrl) {
		SOURCE_STYLE_RULE_CACHE.set(themeSlug, null)
		return null
	}

	try {
		const response = await fetch(sourceUrl)
		if (!response.ok) {
			SOURCE_STYLE_RULE_CACHE.set(themeSlug, null)
			return null
		}
		const cssText = await response.text()
		const parsed = parseTopLevelStyleRules(cssText)
		SOURCE_STYLE_RULE_CACHE.set(themeSlug, parsed)
		return parsed
	} catch {
		SOURCE_STYLE_RULE_CACHE.set(themeSlug, null)
		return null
	}
}

function restoreRulesFromSource(ruleList, sourceStyleRules) {
	if (!sourceStyleRules) return ruleList
	return ruleList.map((ruleText) => {
		const openBraceIndex = ruleText.indexOf('{')
		if (openBraceIndex <= 0) return ruleText
		if (ruleText.trimStart().startsWith('@')) return ruleText

		const selectorText = ruleText.slice(0, openBraceIndex).trim()
		const normalizedSelector = normalizeSelectorForLookup(selectorText)
		const sourceCandidates = sourceStyleRules.get(normalizedSelector)
		const sourceRule = findBestSourceRule(ruleText, sourceCandidates)
		return sourceRule ?? ruleText
	})
}

export async function extractScenarioCssArtifacts(page) {
	return page.evaluate(
		({ globalSelectorExclusions, forcedScenarioSelectorInclusions }) => {
			const globalExclusions = new Set(globalSelectorExclusions)
			const forcedScenarioSelectors = [...forcedScenarioSelectorInclusions]
			const root = document.querySelector('#root')
			if (!root) {
				return {
					scenarioRules: [],
					globalRules: [],
					themeStylesheetHref: null,
				}
			}

			function splitSelectorList(selectorText) {
				const selectors = []
				let current = ''
				let inSquare = 0
				let inRound = 0
				let quote = ''

				for (let index = 0; index < selectorText.length; index += 1) {
					const char = selectorText[index]
					if (quote) {
						current += char
						if (char === quote && selectorText[index - 1] !== '\\') {
							quote = ''
						}
						continue
					}

					if (char === '"' || char === "'") {
						quote = char
						current += char
						continue
					}
					if (char === '[') inSquare += 1
					if (char === ']') inSquare = Math.max(0, inSquare - 1)
					if (char === '(') inRound += 1
					if (char === ')') inRound = Math.max(0, inRound - 1)

					if (char === ',' && inSquare === 0 && inRound === 0) {
						const trimmed = current.trim()
						if (trimmed) selectors.push(trimmed)
						current = ''
						continue
					}
					current += char
				}

				const trailing = current.trim()
				if (trailing) selectors.push(trailing)
				return selectors
			}

			function collectScenarioContainers() {
				const containers = [root]
				for (const forcedSelector of forcedScenarioSelectors) {
					try {
						for (const node of document.querySelectorAll(forcedSelector)) {
							containers.push(node)
						}
					} catch {
						// Ignore invalid selectors and continue extracting what we can.
					}
				}
				return containers
			}

			const scenarioContainers = collectScenarioContainers()

			function nodeIsInsideScenario(node) {
				for (const container of scenarioContainers) {
					if (node === container || container.contains(node)) return true
				}
				return false
			}

			function selectorMatchesScenario(selector) {
				try {
					const nodes = document.querySelectorAll(selector)
					for (const node of nodes) {
						if (nodeIsInsideScenario(node)) return true
					}
					return false
				} catch {
					return false
				}
			}

			function stripPseudoParts(selector) {
				return selector
					.replace(/::?[a-zA-Z-]+(?:\([^)]*\))?/g, '')
					.replace(/\s+/g, ' ')
					.trim()
			}

			function selectorHasPseudo(selector) {
				return /::?[a-zA-Z-]+(?:\([^)]*\))?/.test(selector)
			}

			function selectorMatchesRelatedPseudo(selector) {
				if (!selectorHasPseudo(selector)) return false
				const base = stripPseudoParts(selector)
				if (!base || base === ',') return false
				return selectorMatchesScenario(base)
			}

			function extractAnimationNames(styleDeclaration) {
				const names = new Set()
				const animationName = styleDeclaration.animationName
				if (animationName && animationName !== 'none') {
					for (const part of animationName.split(',')) {
						const name = part.trim()
						if (name && name !== 'none') names.add(name)
					}
				}

				const animation = styleDeclaration.animation
				if (animation && animation !== 'none') {
					const reserved = new Set([
						'normal',
						'reverse',
						'alternate',
						'alternate-reverse',
						'ease',
						'ease-in',
						'ease-out',
						'ease-in-out',
						'linear',
						'step-start',
						'step-end',
						'running',
						'paused',
						'infinite',
						'forwards',
						'backwards',
						'both',
					])
					for (const animationValue of animation.split(',')) {
						for (const token of animationValue.trim().split(/\s+/)) {
							if (!token) continue
							if (reserved.has(token)) continue
							if (/^[\d.]+m?s$/.test(token)) continue
							if (/^[\d.]+$/.test(token)) continue
							names.add(token)
							break
						}
					}
				}

				return names
			}

			function addUniqueRule(targetList, targetSet, cssText) {
				const normalized = cssText.trim().replace(/\{([^{}]*)\}/g, (_, body) => {
					const cleanedDeclarations = body
						.split(';')
						.map((declaration) => declaration.trim())
						.filter(Boolean)
						.filter((declaration) => {
							const separator = declaration.indexOf(':')
							if (separator === -1) return true
							const value = declaration.slice(separator + 1).trim()
							return value.length > 0
						})
						.map((declaration) => `${declaration};`)
						.join(' ')

					if (!cleanedDeclarations) return '{}'
					return `{ ${cleanedDeclarations} }`
				})
				if (!normalized) return
				if (/\{\s*\}/.test(normalized)) return
				if (targetSet.has(normalized)) return
				targetSet.add(normalized)
				targetList.push(normalized)
			}

			function serializeStyleRule(rule) {
				const styleText = rule.style.cssText?.trim()
				if (styleText) {
					return `${rule.selectorText} { ${styleText} }`
				}

				const declarations = []
				for (const propertyName of rule.style) {
					const value = rule.style.getPropertyValue(propertyName).trim()
					if (!value) continue
					const priority = rule.style.getPropertyPriority(propertyName)
					declarations.push(
						`${propertyName}: ${value}${priority ? ` !${priority}` : ''};`,
					)
				}

				if (declarations.length === 0) return null
				return `${rule.selectorText} { ${declarations.join(' ')} }`
			}

			const scenarioRuleSet = new Set()
			const globalRuleSet = new Set()
			const scenarioAnimationNames = new Set()
			const globalAnimationNames = new Set()
			const keyframes = new Map()

			function wrapRule(rule, childRules) {
				const body = childRules.join('\n')
				if (rule.type === CSSRule.MEDIA_RULE) {
					return `@media ${rule.conditionText} {\n${body}\n}`
				}
				if (rule.type === CSSRule.SUPPORTS_RULE) {
					return `@supports ${rule.conditionText} {\n${body}\n}`
				}
				if (rule.type === CSSRule.LAYER_BLOCK_RULE) {
					const name = rule.name ? ` ${rule.name}` : ''
					return `@layer${name} {\n${body}\n}`
				}
				return null
			}

			function evaluateRuleList(ruleList) {
				const scenarioChildren = []
				const globalChildren = []

				for (const rule of ruleList) {
					if (rule.type === CSSRule.STYLE_RULE) {
						const serializedRule = serializeStyleRule(rule)
						if (!serializedRule) continue
						const selectors = splitSelectorList(rule.selectorText)
						let includeScenario = false
						let includeGlobal = false

						for (const selector of selectors) {
							if (globalExclusions.has(selector)) {
								includeGlobal = true
								continue
							}
							if (
								selectorMatchesScenario(selector) ||
								selectorMatchesRelatedPseudo(selector)
							) {
								includeScenario = true
							}
						}

						if (includeGlobal) {
							addUniqueRule(globalChildren, globalRuleSet, serializedRule)
							const names = extractAnimationNames(rule.style)
							for (const name of names) globalAnimationNames.add(name)
						}
						if (includeScenario) {
							addUniqueRule(scenarioChildren, scenarioRuleSet, serializedRule)
							const names = extractAnimationNames(rule.style)
							for (const name of names) scenarioAnimationNames.add(name)
						}
						continue
					}

					if (rule.type === CSSRule.IMPORT_RULE) {
						addUniqueRule(globalChildren, globalRuleSet, rule.cssText)
						continue
					}

					if (rule.type === CSSRule.FONT_FACE_RULE) {
						addUniqueRule(globalChildren, globalRuleSet, rule.cssText)
						continue
					}

					if (rule.type === CSSRule.KEYFRAMES_RULE) {
						keyframes.set(rule.name, rule.cssText.trim())
						continue
					}

					if ('cssRules' in rule && rule.cssRules) {
						const nested = evaluateRuleList(rule.cssRules)
						if (nested.global.length > 0) {
							const wrappedGlobal = wrapRule(rule, nested.global)
							if (wrappedGlobal) {
								addUniqueRule(globalChildren, globalRuleSet, wrappedGlobal)
							} else {
								addUniqueRule(globalChildren, globalRuleSet, rule.cssText)
							}
						}
						if (nested.scenario.length > 0) {
							const wrappedScenario = wrapRule(rule, nested.scenario)
							if (wrappedScenario) {
								addUniqueRule(scenarioChildren, scenarioRuleSet, wrappedScenario)
							} else {
								addUniqueRule(scenarioChildren, scenarioRuleSet, rule.cssText)
							}
						}
					}
				}

				return { scenario: scenarioChildren, global: globalChildren }
			}

			const stylesheet = [...document.styleSheets].find((sheet) => {
				const href = sheet.href ?? ''
				return href.includes('cdn.jsdelivr.net/npm/') && href.endsWith('/bootstrap.css')
			})

			if (!stylesheet) {
				throw new Error(
					'Unable to find active CDN theme stylesheet in document.styleSheets',
				)
			}

			let collected
			try {
				collected = evaluateRuleList(stylesheet.cssRules)
			} catch (error) {
				throw new Error(
					`Unable to read theme stylesheet CSS rules (${String(error?.message ?? error)})`,
				)
			}

			for (const name of scenarioAnimationNames) {
				const keyframe = keyframes.get(name)
				if (!keyframe) continue
				addUniqueRule(collected.scenario, scenarioRuleSet, keyframe)
				addUniqueRule(collected.global, globalRuleSet, keyframe)
			}
			for (const name of globalAnimationNames) {
				const keyframe = keyframes.get(name)
				if (keyframe) addUniqueRule(collected.global, globalRuleSet, keyframe)
			}

			// Some components (like spinners) route animation names through CSS variables,
			// so include discovered keyframes globally even when the name cannot be
			// resolved from an animation shorthand token.
			for (const keyframe of keyframes.values()) {
				addUniqueRule(collected.global, globalRuleSet, keyframe)
			}

			return {
				scenarioRules: collected.scenario,
				globalRules: collected.global,
			}
		},
		{
			globalSelectorExclusions: [...GLOBAL_SELECTOR_EXCLUSIONS],
			forcedScenarioSelectorInclusions: [...FORCE_SCENARIO_SELECTOR_INCLUSIONS],
		},
	)
}

export async function writeScenarioCssArtifact({
	themeSlug,
	routePath,
	stateFolder,
	scenarioRules,
	accumulator,
	globalRules,
}) {
	const sourceStyleRules = await getThemeSourceStyleRules(themeSlug)
	const restoredScenarioRules = restoreRulesFromSource(scenarioRules, sourceStyleRules)
	const restoredGlobalRules = restoreRulesFromSource(globalRules, sourceStyleRules)

	const { scenarioDir, scenarioCssPath } = resolveThemeArtifactPaths(
		themeSlug,
		routePath,
		stateFolder,
	)
	await mkdir(scenarioDir, { recursive: true })
	await writeFile(scenarioCssPath, formatCss(restoredScenarioRules), 'utf8')
	accumulator.writes += 1
	mergeThemeGlobalRules(accumulator, themeSlug, restoredGlobalRules)
}

export async function writeThemeCssArtifact({ themeSlug, accumulator }) {
	const { themeCssPath } = resolveThemeArtifactPaths(themeSlug, '', 'static')
	const globalRules = accumulator.themeGlobalRules.get(themeSlug) ?? []
	await mkdir(path.dirname(themeCssPath), { recursive: true })
	await writeFile(themeCssPath, formatCss(globalRules), 'utf8')
	accumulator.writes += 1
	return themeCssPath
}
