import path from 'node:path'

import { EMIT_FAMILIES, VE2_THEMES_ROOT, STRUCTURE_REFERENCE_THEME, themeScopeExportName } from './constants.mjs'
import { aggregateFamilyCss } from './css-source.mjs'
import { buildContractRegistry } from './contract-registry.mjs'
import { loadThemeCss } from './css-source.mjs'
import { emitFontsGeneratedCss, emitScopeCssTs } from './scope-emitter.mjs'
import {
	emitThemeScaffold,
	patchIndexHtml,
	patchVe2Shell,
	writeThemeFile,
} from './scaffold-emitter.mjs'
import { hydrateFamilyStyles, generateFamilyFromCss } from './two-pass-hydrate.mjs'
import { injectFamilyImports } from './import-emitter.mjs'

function familyOutputPath(themeSlug, family) {
	return path.join(VE2_THEMES_ROOT, themeSlug, family, 'styles.css.ts')
}

/**
 * Generate scope.css.ts and fonts.generated.css for a theme.
 */
export async function generateScope(themeSlug, registry, { dryRun = false, force = false } = {}) {
	const themeCss = await loadThemeCss(themeSlug)
	const scopeCode = emitScopeCssTs(themeSlug, themeCss, registry)
	const fontsCode = emitFontsGeneratedCss(themeSlug, themeCss)

	const scopePath = path.join(VE2_THEMES_ROOT, themeSlug, 'scope.css.ts')
	const scopeResult = await writeThemeFile(scopePath, scopeCode, { dryRun, force })

	const results = { scope: scopeResult, fonts: null }
	if (fontsCode) {
		const fontsPath = path.join(VE2_THEMES_ROOT, themeSlug, 'fonts.generated.css')
		results.fonts = await writeThemeFile(fontsPath, fontsCode, { dryRun, force })
	}
	return results
}

/**
 * Generate one or more family styles.css.ts files.
 */
export async function generateFamilies(
	themeSlug,
	families,
	registry,
	familyMaps,
	{
		dryRun = false,
		force = false,
		referenceTheme = STRUCTURE_REFERENCE_THEME,
		useReference = true,
	} = {},
) {
	const results = []
	for (const family of families) {
		const familyMap = familyMaps?.get(family)
		let code
		let warnings = []

		if (useReference && themeSlug !== referenceTheme) {
			try {
				const hydrated = await hydrateFamilyStyles({
					themeSlug,
					family,
					familyMap,
					registry,
					referenceTheme,
				})
				code = hydrated.code
				warnings = hydrated.unmappedSelectors.map((s) => `[DELTA] ${s}`)
			} catch (err) {
				// Fall back to CSS-only generation if reference file missing
				const generated = await generateFamilyFromCss({
					themeSlug,
					family,
					familyMap,
					registry,
				})
				code = generated.code
				warnings = generated.warnings
			}
		} else {
			const generated = await generateFamilyFromCss({
				themeSlug,
				family,
				familyMap,
				registry,
			})
			code = generated.code
			warnings = generated.warnings
		}

		code = injectFamilyImports(code, {
			family,
			scopeName: themeScopeExportName(themeSlug),
			registry,
		})

		const outPath = familyOutputPath(themeSlug, family)
		const writeResult = await writeThemeFile(outPath, code, { dryRun, force })
		results.push({ family, path: outPath, warnings, ...writeResult })
	}
	return results
}

/**
 * Full theme generation pipeline.
 */
export async function generateTheme(themeSlug, options = {}) {
	const {
		mode = 'all',
		families = EMIT_FAMILIES,
		dryRun = false,
		force = false,
		referenceTheme = STRUCTURE_REFERENCE_THEME,
		patchShell = true,
	} = options

	const registry = await buildContractRegistry()
	const report = { theme: themeSlug, mode, steps: [] }

	if (mode === 'scaffold' || mode === 'all') {
		const scaffold = await emitThemeScaffold(themeSlug, { force })
		report.steps.push({ step: 'scaffold', ...scaffold })
		if (!dryRun && patchShell) {
			const shellPatch = await patchVe2Shell(themeSlug)
			report.steps.push({ step: 'patch-shell', ...shellPatch })
		}
	}

	if (mode === 'scope' || mode === 'all') {
		const scope = await generateScope(themeSlug, registry, { dryRun, force })
		report.steps.push({ step: 'scope', ...scope })
		if (!dryRun && scope.fonts?.written) {
			const htmlPatch = await patchIndexHtml(themeSlug, true)
			report.steps.push({ step: 'patch-index-html', ...htmlPatch })
		}
	}

	if (mode === 'families' || mode === 'all') {
		const familyMaps = await aggregateFamilyCss(themeSlug)
		const familyResults = await generateFamilies(themeSlug, families, registry, familyMaps, {
			dryRun,
			force,
			referenceTheme,
		})
		report.steps.push({ step: 'families', results: familyResults })
	}

	return report
}

/**
 * Report unmapped selectors and vars without writing files.
 */
export async function generateReport(themeSlug, families = EMIT_FAMILIES) {
	const registry = await buildContractRegistry()
	const familyMaps = await aggregateFamilyCss(themeSlug)
	const report = { theme: themeSlug, families: [] }

	for (const family of families) {
		const familyMap = familyMaps.get(family)
		const unmapped = []
		if (familyMap) {
			for (const selector of familyMap.keys()) {
				if (selector.includes('|||')) continue
				if (selector.startsWith('.')) {
					const contract = registry.resolveContractForSelector(selector.split(/[:\s+>~[]/)[0])
					if (!contract) unmapped.push({ selector, reason: 'no contract mapping' })
				} else if (!/^h[1-6]$/.test(selector) && selector !== 'p' && selector !== 'hr') {
					unmapped.push({ selector, reason: 'element selector needs contract routing' })
				}
			}
		}
		report.families.push({
			family,
			ruleCount: familyMap?.size ?? 0,
			unmapped,
		})
	}

	return report
}
