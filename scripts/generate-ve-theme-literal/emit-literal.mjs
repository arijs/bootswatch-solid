import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

import { buildContractRegistry } from '../generate-ve-theme/contract-registry.mjs'
import { themeScopeExportName } from '../generate-ve-theme/constants.mjs'
import { injectFamilyImports } from '../generate-ve-theme/import-emitter.mjs'
import {
	emitGlobalStyleBlock,
	formatSourceCssComment,
} from '../generate-ve-theme/rule-transpiler.mjs'
import { VE2_THEMES_ROOT, LITERAL_FAMILY } from './constants.mjs'
import { collectUnmappedClasses, ensureAutoContracts } from './auto-contract.mjs'
import { collectUnmappedCssVars, ensureAutoVars } from './auto-vars.mjs'
import { emitKeyframesBlock } from './emit-keyframes.mjs'
import { emitNavButtonResetSupplement } from './emit-nav-button-reset-supplement.mjs'
import { emitToastContractSupplement } from './emit-toast-contract-supplement.mjs'
import { badgeTextDarkContractForTextSelector } from './badge-color-mirror.mjs'
import {
	progressBarContractForBgSelector,
	progressBarContractForTextSelector,
} from './progress-color-mirror.mjs'
import { spinnerContractForTextSelector } from './spinner-color-mirror.mjs'
import { filterUnitsBySelector, loadBootstrapCss, parseBootstrapCss, walkCssEmitUnits } from './parse-css-tree.mjs'

const LITERAL_FAMILY_ID = 'literal'

function emitRuleUnit({ selector, declarations, media, scopeName, registry }) {
	const blocks = []
	const warnings = []

	const primary = emitGlobalStyleBlock({
		cssSelector: selector,
		declarations,
		scopeName,
		registry,
		comment: formatSourceCssComment(selector, declarations),
		family: LITERAL_FAMILY_ID,
		mediaStack: media ?? [],
	})
	if (primary.code) blocks.push(primary.code)
	warnings.push(...primary.warnings)

	const firstSelector = selector.split(',')[0].trim()
	const sourceContract = registry.resolveContractForSelector(firstSelector)

	const spinnerContract = spinnerContractForTextSelector(selector)
	if (spinnerContract && primary.code && sourceContract) {
		let mirrorCode = primary.code.replace(
			`\${${scopeName}}\${${sourceContract}}`,
			`\${${scopeName}}\${${spinnerContract}}`,
		)
		mirrorCode = mirrorCode.replace(
			'// SOURCE CSS:',
			`// SOURCE CSS (mirrored ${sourceContract} → ${spinnerContract}):`,
		)
		blocks.push(mirrorCode)
	}

	const progressBgContract = progressBarContractForBgSelector(selector)
	if (progressBgContract && primary.code && sourceContract) {
		let mirrorCode = primary.code.replace(
			`\${${scopeName}}\${${sourceContract}}`,
			`\${${scopeName}}\${${progressBgContract}}`,
		)
		mirrorCode = mirrorCode.replace(
			'// SOURCE CSS:',
			`// SOURCE CSS (mirrored ${sourceContract} → ${progressBgContract}):`,
		)
		blocks.push(mirrorCode)
	}

	const progressTextContract = progressBarContractForTextSelector(selector)
	if (progressTextContract && primary.code && sourceContract) {
		let mirrorCode = primary.code.replace(
			`\${${scopeName}}\${${sourceContract}}`,
			`\${${scopeName}}\${${progressTextContract}}`,
		)
		mirrorCode = mirrorCode.replace(
			'// SOURCE CSS:',
			`// SOURCE CSS (mirrored ${sourceContract} → ${progressTextContract}):`,
		)
		blocks.push(mirrorCode)
	}

	const badgeTextContract = badgeTextDarkContractForTextSelector(selector)
	if (badgeTextContract && primary.code && sourceContract) {
		let mirrorCode = primary.code.replace(
			`\${${scopeName}}\${${sourceContract}}`,
			`\${${scopeName}}\${${badgeTextContract}}`,
		)
		mirrorCode = mirrorCode.replace(
			'// SOURCE CSS:',
			`// SOURCE CSS (mirrored ${sourceContract} → ${badgeTextContract}):`,
		)
		blocks.push(mirrorCode)
	}

	return { code: blocks.join(''), warnings }
}

/**
 * Generate literal/styles.css.ts for a theme.
 */
async function emitLiteralPass(themeSlug, { filter, registry, scopeName }) {
	const cssText = await loadBootstrapCss(themeSlug)
	const ast = parseBootstrapCss(cssText)
	let units = walkCssEmitUnits(ast)
	units = filterUnitsBySelector(units, filter)

	const report = {
		theme: themeSlug,
		filter,
		emitted: 0,
		skipped: [],
		keyframes: [],
		keyframesEmitted: 0,
		warnings: [],
	}

	const blocks = []
	for (const unit of units) {
		if (unit.kind === 'keyframes') {
			const code = emitKeyframesBlock(unit, registry)
			if (code) {
				blocks.push(code)
				report.emitted++
			}
			report.keyframes.push(unit.name)
			if (code) report.keyframesEmitted++
			continue
		}

		const { code, warnings } = emitRuleUnit({
			selector: unit.selector,
			declarations: unit.declarations,
			media: unit.media,
			scopeName,
			registry,
		})

		for (const w of warnings) {
			if (w.startsWith('[SKIPPED]') || w.startsWith('[UNMAPPED')) {
				report.skipped.push({ selector: unit.selector, warning: w })
			} else {
				report.warnings.push({ selector: unit.selector, warning: w })
			}
		}

		if (code) {
			blocks.push(code)
			report.emitted++
		}
	}

	return { report, blocks }
}

export async function generateLiteralStyles(themeSlug, options = {}) {
	const { filter = null, dryRun = false, strict = false, autoContracts = false } = options

	let registry = await buildContractRegistry()
	const scopeName = themeScopeExportName(themeSlug)

	let { report, blocks } = await emitLiteralPass(themeSlug, { filter, registry, scopeName })

	if (!filter && themeSlug === 'bootstrap') {
		blocks.push(emitToastContractSupplement(scopeName))
		blocks.push(emitNavButtonResetSupplement(scopeName))
	}

	if (autoContracts && !dryRun) {
		for (let round = 0; round < 8; round++) {
			const classes = collectUnmappedClasses(report.skipped, registry)
			const vars = collectUnmappedCssVars(report.skipped)
			const { added: addedClasses } = await ensureAutoContracts(classes)
			const { added: addedVars } = await ensureAutoVars(vars)
			if (addedClasses === 0 && addedVars === 0) break
			console.log(
				`  Auto-contracts round ${round + 1}: +${addedClasses} classes, +${addedVars} vars`,
			)
			registry = await buildContractRegistry()
			;({ report, blocks } = await emitLiteralPass(themeSlug, { filter, registry, scopeName }))
		}
	}

	const header = [
		`// AUTO-GENERATED literal theme styles for ${themeSlug}`,
		'// Source: screenshots/{theme}/bootstrap.css — full literal translation.',
		'// Re-generate: pnpm generate:ve-theme-literal -- --theme=' + themeSlug,
		filter ? `// Filter: ${filter}` : '',
		'',
	].filter(Boolean)

	let body = [...header, ...blocks].join('\n')
	if (blocks.length === 0) {
		body += '\nexport {}\n'
	}

	body = injectFamilyImports(body, {
		family: LITERAL_FAMILY,
		scopeName,
		registry,
	})

	if (body.includes('globalKeyframes(')) {
		body = body.replace(
			"import { globalStyle } from '@vanilla-extract/css'",
			"import { globalStyle, globalKeyframes } from '@vanilla-extract/css'",
		)
	}

	const outDir = path.join(VE2_THEMES_ROOT, themeSlug, 'literal')
	const outPath = path.join(outDir, 'styles.css.ts')
	const reportPath = path.join(outDir, 'literal-report.json')

	if (!dryRun) {
		await mkdir(outDir, { recursive: true })
		await writeFile(outPath, body, 'utf8')
		await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8')
		await writeLiteralThemeBarrel(themeSlug, dryRun)
	}

	const exitCode = strict && report.skipped.length > 0 ? 1 : 0
	return { outPath, report, body, exitCode }
}

async function writeLiteralThemeBarrel(themeSlug, dryRun) {
	const themePath = path.join(VE2_THEMES_ROOT, themeSlug, 'literal', 'theme.ts')
	const content = "import '../scope.css'\nimport './styles.css'\n"
	if (!dryRun) {
		await writeFile(themePath, content, 'utf8')
	}
}
