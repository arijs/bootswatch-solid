#!/usr/bin/env node
/**
 * T1 — Registry census for the v2 literal converter.
 *
 * Scans all 27 screenshots/{theme}/bootstrap.css files, extracts every
 * CSS class token and element tag from every selector, and builds the
 * complete 1:1 token→contract mapping.
 *
 * CLI (census mode):
 *   node scripts/generate-ve-literal/registry.mjs --census [--theme=bootstrap] [--all-themes]
 *
 * Module API (used by emitter in T4):
 *   const registry = await buildLiteralRegistry()
 *   registry.classToContract('.btn-primary')  → 'btnPrimary'
 *   registry.tagToContract('h1')              → 'h1'
 */

import process from 'node:process'

import { TAG_TO_CONTRACT } from '../generate-ve-theme-literal/element-registry.mjs'
import {
	loadBootstrapCss,
	parseBootstrapCss,
	walkCssEmitUnits,
} from '../generate-ve-theme-literal/parse-css-tree.mjs'
import { classToSymbol, extractSelectorTokens } from './selector-parser.mjs'

export const ALL_THEMES = [
	'bootstrap', 'brite', 'cerulean', 'cosmo', 'cyborg', 'darkly', 'flatly',
	'journal', 'litera', 'lumen', 'lux', 'materia', 'minty', 'morph', 'pulse',
	'quartz', 'sandstone', 'simplex', 'sketchy', 'slate', 'solar', 'spacelab',
	'superhero', 'united', 'vapor', 'yeti', 'zephyr',
]

// Element contract names from the §5.3 table (used for collision detection).
const ELEMENT_CONTRACT_NAMES = new Set(Object.values(TAG_TO_CONTRACT))

// Tags explicitly handled by the divergence manifest — excluded from missingTags.
// 'body' appears in descendant selectors like `[data-bs-theme=dark] body` in Quartz;
// the emitter routes body-tagged segments through the divergence manifest (body-split).
const DIVERGENCE_HANDLED_TAGS = new Set(['body'])

/**
 * Scan bootstrap.css files for all themes and collect every class token and
 * element tag token used in selectors.
 *
 * @param {string[]} themes - theme slugs to scan
 * @returns {{ classMap, tagMap, collisions, missingTags, classThemes, tagThemes, divergenceTags }}
 *
 * classMap:       cssClass → symbol  (e.g. 'btn-primary' → 'btnPrimary')
 * tagMap:         tag → contract     (e.g. 'h1' → 'h1')
 * collisions:     symbol → cssClass  (class symbol that collides with an element contract name)
 * missingTags:    tags not in §5.3 TAG_TO_CONTRACT and not divergence-handled
 * divergenceTags: tags found but skipped because they are in DIVERGENCE_HANDLED_TAGS
 */
export async function buildCensus(themes = ALL_THEMES) {
	const allClasses = new Set()
	const allTags = new Set()
	const classThemes = new Map() // cssClass → Set<theme>
	const tagThemes = new Map()   // tag → Set<theme>

	for (const theme of themes) {
		let cssText
		try {
			cssText = await loadBootstrapCss(theme)
		} catch {
			console.warn(`  [skip] ${theme}: bootstrap.css not found`)
			continue
		}

		const ast = parseBootstrapCss(cssText)
		const units = walkCssEmitUnits(ast)

		for (const unit of units) {
			if (unit.kind !== 'rule') continue
			const { classTokens, tagTokens } = extractSelectorTokens(unit.selector)

			for (const cls of classTokens) {
				allClasses.add(cls)
				if (!classThemes.has(cls)) classThemes.set(cls, new Set())
				classThemes.get(cls).add(theme)
			}
			for (const tag of tagTokens) {
				allTags.add(tag)
				if (!tagThemes.has(tag)) tagThemes.set(tag, new Set())
				tagThemes.get(tag).add(theme)
			}
		}
	}

	// Build classMap: cssClass → camelCase symbol, detecting collisions
	const classMap = new Map()
	const collisions = new Map() // symbol → cssClass

	for (const cssClass of [...allClasses].sort()) {
		let symbol = classToSymbol(cssClass)

		if (ELEMENT_CONTRACT_NAMES.has(symbol)) {
			collisions.set(symbol, cssClass)
			symbol = `cls${symbol.charAt(0).toUpperCase()}${symbol.slice(1)}`
		}

		classMap.set(cssClass, symbol)
	}

	// Build tagMap, separating missing from divergence-handled
	const tagMap = new Map()
	const missingTags = new Set()
	const divergenceTags = new Set()

	for (const tag of [...allTags].sort()) {
		if (DIVERGENCE_HANDLED_TAGS.has(tag)) {
			divergenceTags.add(tag)
			continue
		}
		const contract = TAG_TO_CONTRACT[tag]
		if (contract) {
			tagMap.set(tag, contract)
		} else {
			missingTags.add(tag)
		}
	}

	return { classMap, tagMap, collisions, missingTags, divergenceTags, classThemes, tagThemes }
}

// ---------------------------------------------------------------------------
// Census reporter
// ---------------------------------------------------------------------------

function printCensus(census, themes) {
	const { classMap, tagMap, collisions, missingTags, divergenceTags, classThemes, tagThemes } = census

	console.log(`\n=== VE Literal Registry Census (${themes.length} themes) ===\n`)
	console.log(`Class tokens:      ${classMap.size}`)
	console.log(`Element tags:      ${tagMap.size}`)
	console.log(`Divergence tags:   ${divergenceTags.size}  (${[...divergenceTags].join(', ')})`)
	console.log(`Collisions:        ${collisions.size}`)
	console.log(`Missing tags:      ${missingTags.size}`)

	if (collisions.size > 0) {
		console.log('\n--- Collisions (class symbol = element contract name) ---')
		for (const [symbol, cssClass] of [...collisions].sort()) {
			const renamed = `cls${symbol.charAt(0).toUpperCase()}${symbol.slice(1)}`
			console.log(`  .${cssClass} → symbol "${symbol}" conflicts with element contract → renamed "${renamed}"`)
		}
	}

	if (missingTags.size > 0) {
		console.log('\n--- Tags missing from §5.3 TAG_TO_CONTRACT ---')
		for (const tag of [...missingTags].sort()) {
			const inThemes = [...(tagThemes.get(tag) ?? [])].join(', ')
			console.log(`  <${tag}>  (in: ${inThemes})`)
		}
	}

	// Bootswatch-only classes (not in bootstrap itself)
	const bootswatch = new Map()
	for (const [cls, themeSet] of classThemes) {
		if (!themeSet.has('bootstrap')) bootswatch.set(cls, themeSet)
	}

	if (bootswatch.size > 0) {
		console.log(`\n--- Bootswatch-only class tokens (${bootswatch.size}) ---`)
		for (const [cls, themeSet] of [...bootswatch].sort()) {
			const symbol = classMap.get(cls)
			console.log(`  .${cls} → ${symbol}  [${[...themeSet].sort().join(', ')}]`)
		}
	}

	// Full class token listing
	console.log(`\n--- All class tokens (${classMap.size}) ---`)
	let bsOnly = 0
	let bsWatch = 0
	for (const [cls, symbol] of [...classMap].sort()) {
		const themeSet = classThemes.get(cls) ?? new Set()
		const onlyBootstrap = themeSet.has('bootstrap') && themeSet.size === 1
		const isBootswatch = !themeSet.has('bootstrap')
		if (onlyBootstrap) bsOnly++
		if (isBootswatch) bsWatch++
		const origin = isBootswatch
			? `[bootswatch: ${[...themeSet].sort().join(',')}]`
			: onlyBootstrap ? '[bootstrap-only]' : '[shared]'
		console.log(`  .${cls.padEnd(45)} → ${symbol.padEnd(45)} ${origin}`)
	}

	console.log(`\nSummary: ${classMap.size} classes total, ${bsOnly} bootstrap-only, ${bsWatch} bootswatch-only`)
	console.log(`         ${tagMap.size} tags mapped, ${missingTags.size} missing, ${divergenceTags.size} divergence-handled`)

	if (missingTags.size > 0) {
		console.log('\n[ATTENTION] Fix missing tags before T2 (contract generation).')
	} else if (collisions.size > 0) {
		console.log(`\n[OK] ${collisions.size} collisions auto-resolved with cls prefix — ready for T2.`)
	} else {
		console.log('\n[OK] Census clean — ready for T2 contract generation.')
	}
}

// ---------------------------------------------------------------------------
// Module API for emitter (T4)
// ---------------------------------------------------------------------------

let _cached = null

/**
 * Build and cache the literal registry for use by the emitter.
 */
export async function buildLiteralRegistry(themes = ALL_THEMES) {
	if (_cached) return _cached

	const census = await buildCensus(themes)

	_cached = {
		/**
		 * Resolve a CSS class name (with or without leading dot) to its contract symbol.
		 * Returns null if not found (emitter should error in --strict mode).
		 */
		classToContract(cssClass) {
			const key = cssClass.startsWith('.') ? cssClass.slice(1) : cssClass
			return census.classMap.get(key) ?? null
		},

		/**
		 * Resolve an element tag to its contract symbol.
		 * Returns null if not in §5.3 table (or is divergence-handled like 'body').
		 */
		tagToContract(tag) {
			return census.tagMap.get(tag.toLowerCase()) ?? null
		},

		/** True if this tag is handled by the divergence manifest (not the tag table). */
		isDivergenceTag(tag) {
			return DIVERGENCE_HANDLED_TAGS.has(tag.toLowerCase())
		},

		classMap: census.classMap,
		tagMap: census.tagMap,
		collisions: census.collisions,
		missingTags: census.missingTags,
		divergenceTags: census.divergenceTags,
	}

	return _cached
}

export function resetLiteralRegistryCache() {
	_cached = null
}

// ---------------------------------------------------------------------------
// CLI entry point
// ---------------------------------------------------------------------------

async function main() {
	const args = process.argv.slice(2)
	const doAll = args.includes('--all-themes')
	const doCensus = args.includes('--census')
	const themeArg = args.find((a) => a.startsWith('--theme='))

	if (!doCensus) {
		console.error('Usage: node scripts/generate-ve-literal/registry.mjs --census [--all-themes | --theme=<slug>]')
		process.exit(1)
	}

	let themes
	if (doAll) {
		themes = ALL_THEMES
	} else if (themeArg) {
		themes = [themeArg.slice('--theme='.length)]
	} else {
		themes = ALL_THEMES
	}

	console.log(`Running census across: ${themes.join(', ')}`)
	const census = await buildCensus(themes)
	printCensus(census, themes)

	process.exit(census.missingTags.size > 0 ? 1 : 0)
}

if (process.argv[1].endsWith('registry.mjs')) {
	main().catch((err) => {
		console.error(err)
		process.exit(1)
	})
}
