#!/usr/bin/env node
/**
 * G1 — Deterministic contract → family table for the granular family split.
 *
 * The literal converter (T1–T10) maps every Bootstrap class 1:1 to a contract
 * symbol. The granular split needs one more deterministic lookup: which *family*
 * owns each contract symbol, so the literal monolith can be partitioned into
 * per-family chunks WITHOUT the heuristic prefix-matching the rewrite removed.
 *
 * Source of truth (not a heuristic): the existing `theme-contract/{family}/`
 * directory structure. `buildContractRegistry()` already groups every contract
 * symbol by the family dir that declares it (`contractsByFamily`). We resolve
 * each symbol to a single family using the SAME priority order the emitter uses
 * to pick a symbol's import path (`buildElementImportPaths`):
 *
 *   specific family  >  utilities  >  (literal: NOT a family)  >  utilities/generated
 *
 * Symbols that resolve only to `literal/contract.css` have no family dir — those
 * are the gaps. They are filled by the curated FAMILY_OVERRIDES table below
 * (the granular analog of the §5.3 element table: one explicit, auditable map,
 * never per-family code branches).
 *
 * CLI (census mode):
 *   node scripts/generate-ve-literal/family-table.mjs --census [--all-themes | --theme=<slug>]
 *
 * Module API (used by the partition emitter in G2):
 *   const table = await buildFamilyTable()
 *   table.symbolToFamily.get('btnPrimary')  → 'ui/buttons'
 *   table.familyForSymbol('btnPrimary')     → 'ui/buttons'  (override-aware, throws-free)
 */

import process from 'node:process'
import { EMIT_FAMILIES } from '../generate-ve-theme/constants.mjs'
import { buildContractRegistry } from '../generate-ve-theme/contract-registry.mjs'
import { TAG_TO_CONTRACT } from '../generate-ve-theme-literal/element-registry.mjs'
import { ALL_THEMES, buildLiteralRegistry } from './registry.mjs'

// ─── valid family taxonomy ──────────────────────────────────────────────────
// Mirrors VE2_STYLE_FAMILIES (theme-runtime/style-families.ts): the EMIT_FAMILIES
// leaves plus the always-loaded `global` baseline. The contents/forms/utilities
// parents and the `contents` barrel are not emit targets.
export const GLOBAL_FAMILY = 'global'
export const VALID_FAMILIES = new Set([GLOBAL_FAMILY, ...EMIT_FAMILIES])

/**
 * Curated overrides for contract symbols that the contract-dir structure does
 * not place in a single emit family (i.e. symbols that only live in
 * `literal/contract.css`, plus any §4.2 tie-break decisions).
 *
 * Each entry is symbol → family and MUST target a VALID_FAMILIES member.
 * Keep this list explicit and reasoned — it replaces all heuristic guessing.
 *
 * (Seeded empty; the --census run populates the candidate list to triage.)
 */
export const FAMILY_OVERRIDES = {
	// Bootswatch card colour/outline variants (live only in literal/contract.css).
	cardPrimary: 'ui/card',
	cardSecondary: 'ui/card',
	cardSuccess: 'ui/card',
	cardInfo: 'ui/card',
	cardWarning: 'ui/card',
	cardDanger: 'ui/card',
	cardLight: 'ui/card',
	cardDark: 'ui/card',
	cardOutlinePrimary: 'ui/card',
	cardOutlineSuccess: 'ui/card',
	cardOutlineInfo: 'ui/card',
	cardOutlineWarning: 'ui/card',
	cardOutlineDanger: 'ui/card',

	// Heading *sizing* classes (.h1–.h6) and inline-typography classes.
	clsH1: 'contents/heading',
	clsH2: 'contents/heading',
	clsH3: 'contents/heading',
	clsH4: 'contents/heading',
	clsH5: 'contents/heading',
	clsH6: 'contents/heading',
	clsBlockquote: 'contents/basic',
	clsSmall: 'contents/basic',

	// Badge / border-radius utility.
	badgePill: 'ui/badge', // BS4 .badge-pill
	roundedPill: 'utilities', // .rounded-pill is a border-radius utility

	// Shared close button — modal/alert/toast components all declare ui/buttons.
	btnClose: 'ui/buttons',

	// Popover/Tooltip + legacy Tether positioning classes.
	popover: 'ui/popovers',
	popoverTitle: 'ui/popovers', // BS3 .popover-title
	arrow: 'ui/popovers', // BS4 shared .arrow
	bsTetherElementAttachedTop: 'ui/popovers',
	bsTetherElementAttachedBottom: 'ui/popovers',
	bsTetherElementAttachedLeft: 'ui/popovers',
	bsTetherElementAttachedRight: 'ui/popovers',
	tooltip: 'ui/tooltips',

	// BS3-era form shim classes shipped by some Bootswatch themes.
	checkbox: 'forms',
	radio: 'forms',
	controlLabel: 'forms',
	formControlFeedback: 'forms',
	formGroupLg: 'forms',
	hasSuccess: 'forms',
	hasWarning: 'forms',
	hasDanger: 'forms',
	helpBlock: 'forms',
	inputGroupAddon: 'forms',
	inputLg: 'forms',
	inputSm: 'forms',

	// BS3-era navbar shim classes.
	navbarLight: 'ui/navbar',
	navbarForm: 'ui/navbar',
	navbarFixedTop: 'ui/navbar',
	navbarFixedBottom: 'ui/navbar',
	navbarBottomTop: 'ui/navbar',

	// BS3 dropdown open-state / pager.
	open: 'ui/dropdowns', // BS3 .open
	pager: 'ui/pagination', // BS3 .pager

	// Legacy dark-table head variants.
	theadDark: 'contents/tables',
	theadInverse: 'contents/tables',

	// Sandstone's theme-wide grouped typography class (`.sandstone, .tooltip, …`).
	sandstone: 'global',

	// ── Component classes the inherited `utilities/generated` catch-all swept up ──
	// These are component modifiers/sizes, NOT utilities. The override pulls them
	// back to their real family (the relevant routes already declare it), so
	// granular loading does not drag e.g. `.modal-lg` onto every route.
	// (NOTE: `.offcanvas*` needs no override — it now has a real family contract
	// at theme-contract/ui/offcanvas/contract.css, so the dir structure resolves
	// it to `ui/offcanvas` via the specific-family priority pass.)
	modalLg: 'ui/modal',
	modalSm: 'ui/modal',
	modalXl: 'ui/modal',
	modalStatic: 'ui/modal',
	modalFullscreenSmDown: 'ui/modal',
	modalFullscreenMdDown: 'ui/modal',
	modalFullscreenLgDown: 'ui/modal',
	modalFullscreenXlDown: 'ui/modal',
	modalFullscreenXxlDown: 'ui/modal',
	dropdownMenuSmStart: 'ui/dropdowns',
	dropdownMenuSmEnd: 'ui/dropdowns',
	dropdownMenuMdStart: 'ui/dropdowns',
	dropdownMenuMdEnd: 'ui/dropdowns',
	dropdownMenuLgStart: 'ui/dropdowns',
	dropdownMenuLgEnd: 'ui/dropdowns',
	dropdownMenuXlStart: 'ui/dropdowns',
	dropdownMenuXlEnd: 'ui/dropdowns',
	dropdownMenuXxlStart: 'ui/dropdowns',
	dropdownMenuXxlEnd: 'ui/dropdowns',
	listGroupHorizontal: 'ui/list-group',
	listGroupHorizontalSm: 'ui/list-group',
	listGroupHorizontalMd: 'ui/list-group',
	listGroupHorizontalLg: 'ui/list-group',
	listGroupHorizontalXl: 'ui/list-group',
	listGroupHorizontalXxl: 'ui/list-group',
	listGroupNumbered: 'ui/list-group',
	navbarDark: 'ui/navbar',
	navbarExpand: 'ui/navbar',
	navbarExpandSm: 'ui/navbar',
	navbarExpandMd: 'ui/navbar',
	navbarExpandXl: 'ui/navbar',
	navbarExpandXxl: 'ui/navbar',
	navFill: 'ui/navs',
	navJustified: 'ui/navs',
	navUnderline: 'ui/navs',
	btnGroupLg: 'ui/button-group',
	btnGroupSm: 'ui/button-group',
	btnGroupVertical: 'ui/button-group',
	btnCloseWhite: 'ui/buttons',
	cardGroup: 'ui/card',
	cardHeaderPills: 'ui/card',
	cardImgOverlay: 'ui/card',
	inputGroupLg: 'forms',
	inputGroupSm: 'forms',
	invalidTooltip: 'forms',
	validTooltip: 'forms',
	spinnerBorderSm: 'ui/spinners',
	spinnerGrowSm: 'ui/spinners',
	progressStacked: 'ui/progress',
	accordionFlush: 'ui/accordion',
	toastContainer: 'ui/toasts',
}

/**
 * Map a contract-registry family namespace (from inferFamilyFromPath) onto the
 * granular style-family taxonomy (VE2_STYLE_FAMILIES). Returns null for the
 * `literal` namespace (no family dir → must be resolved via FAMILY_OVERRIDES).
 */
export function contractFamilyToStyleFamily(family) {
	if (!family) return null
	if (family.startsWith('ui/')) return family
	if (family.startsWith('contents/')) return family
	if (family === 'forms') return 'forms'
	if (family === 'utilities' || family === 'utilities/generated') return 'utilities'
	// Reboot/element contracts, root contracts (bodyText/bodyFrame/vars), and
	// global vars all belong to the always-loaded baseline (§4 step 2).
	if (family === 'global-elements' || family === 'global' || family === 'root-contract') {
		return GLOBAL_FAMILY
	}
	// Containers (`.container*`) load broadly; the always-on baseline is the
	// safe, deterministic home rather than guessing a leaf family (§4.2).
	if (family === 'layout') return GLOBAL_FAMILY
	// 'literal' and anything unrecognized → no family from the dir structure.
	return null
}

/**
 * Build the deterministic symbol → family table.
 *
 * @returns {Promise<{
 *   symbolToFamily: Map<string,string>,   // contract symbol → emit family
 *   familyForSymbol: (sym: string) => string | null,
 *   validFamilies: Set<string>,
 * }>}
 */
export async function buildFamilyTable() {
	const reg = await buildContractRegistry()
	const symbolToFamily = new Map()

	// Priority passes mirror buildElementImportPaths (lowest → highest; later
	// passes override earlier). `literal` is deliberately excluded so symbols
	// that ONLY live there surface as gaps for FAMILY_OVERRIDES.
	const passes = [
		(f) => f === 'utilities/generated',
		(f) => f === 'utilities',
		(f) => f !== 'utilities' && f !== 'utilities/generated' && f !== 'literal',
	]
	for (const accept of passes) {
		for (const [family, symbols] of reg.contractsByFamily) {
			if (!accept(family)) continue
			const styleFamily = contractFamilyToStyleFamily(family)
			if (!styleFamily) continue
			for (const sym of symbols) symbolToFamily.set(sym, styleFamily)
		}
	}

	// Element contracts (reboot) → global, explicitly (also covered via
	// global-elements above, but assert it here so it can never drift).
	for (const sym of Object.values(TAG_TO_CONTRACT)) {
		if (!symbolToFamily.has(sym)) symbolToFamily.set(sym, GLOBAL_FAMILY)
	}

	// Curated overrides win.
	for (const [sym, family] of Object.entries(FAMILY_OVERRIDES)) {
		symbolToFamily.set(sym, family)
	}

	return {
		symbolToFamily,
		familyForSymbol: (sym) => symbolToFamily.get(sym) ?? null,
		validFamilies: VALID_FAMILIES,
	}
}

// ─── census ───────────────────────────────────────────────────────────────

/**
 * Census: across the given themes, resolve every class token's contract symbol
 * to a family and report any symbol with no family (the gaps to fill).
 */
async function runCensus(themes) {
	const [table, literal] = await Promise.all([buildFamilyTable(), buildLiteralRegistry(themes)])

	// classMap is the union of class tokens across all scanned themes; gaps are
	// reported at the class level below.
	const familyCounts = new Map()
	const unmapped = new Map() // symbol → example class
	const invalid = new Map() // symbol → family (resolved to a non-VALID family)

	for (const [cssClass, symbol] of literal.classMap) {
		const family = table.familyForSymbol(symbol)
		if (!family) {
			if (!unmapped.has(symbol)) unmapped.set(symbol, cssClass)
			continue
		}
		if (!VALID_FAMILIES.has(family)) {
			invalid.set(symbol, family)
			continue
		}
		familyCounts.set(family, (familyCounts.get(family) ?? 0) + 1)
	}

	return { table, literal, familyCounts, unmapped, invalid }
}

function printCensus(census, themes) {
	const { literal, familyCounts, unmapped, invalid } = census
	const totalClasses = literal.classMap.size

	console.log(`\n=== Contract → Family Census (${themes.length} themes) ===\n`)
	console.log(`Class symbols total:   ${totalClasses}`)
	console.log(`Mapped to a family:    ${totalClasses - unmapped.size - invalid.size}`)
	console.log(`Unmapped (gaps):       ${unmapped.size}`)
	console.log(`Invalid family:        ${invalid.size}`)
	console.log(`Override entries:      ${Object.keys(FAMILY_OVERRIDES).length}`)

	console.log('\n--- Per-family symbol counts ---')
	for (const [family, count] of [...familyCounts].sort((a, b) => a[0].localeCompare(b[0]))) {
		console.log(`  ${family.padEnd(20)} ${count}`)
	}

	if (invalid.size > 0) {
		console.log(
			'\n--- Symbols resolved to an INVALID family (fix contractFamilyToStyleFamily) ---',
		)
		for (const [sym, family] of [...invalid].sort()) {
			console.log(`  ${sym.padEnd(40)} → ${family}`)
		}
	}

	if (unmapped.size > 0) {
		console.log(`\n--- Unmapped class symbols (${unmapped.size}) — add to FAMILY_OVERRIDES ---`)
		for (const [sym, cssClass] of [...unmapped].sort()) {
			console.log(`  ${sym.padEnd(40)} (.${cssClass})`)
		}
	}

	const clean = unmapped.size === 0 && invalid.size === 0
	if (clean) {
		console.log(
			'\n[OK] Census clean — every class symbol maps to exactly one valid family. Ready for G2.',
		)
	} else {
		console.log('\n[ATTENTION] Resolve unmapped/invalid symbols before G2 (partition emitter).')
	}
	return clean
}

// ─── CLI ────────────────────────────────────────────────────────────────────

async function main() {
	const args = process.argv.slice(2)
	const doCensus = args.includes('--census')
	const doAll = args.includes('--all-themes')
	const themeArg = args.find((a) => a.startsWith('--theme='))

	if (!doCensus) {
		console.error(
			'Usage: node scripts/generate-ve-literal/family-table.mjs --census [--all-themes | --theme=<slug>]',
		)
		process.exit(1)
	}

	let themes
	if (themeArg) themes = [themeArg.slice('--theme='.length)]
	else if (doAll) themes = ALL_THEMES
	else themes = ALL_THEMES

	console.log(`Running family census across: ${themes.join(', ')}`)
	const census = await runCensus(themes)
	const clean = printCensus(census, themes)
	process.exit(clean ? 0 : 1)
}

if (process.argv[1]?.endsWith('family-table.mjs')) {
	main().catch((err) => {
		console.error(err)
		process.exit(1)
	})
}
