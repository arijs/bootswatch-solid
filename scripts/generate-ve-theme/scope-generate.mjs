import { access, mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { SCREENSHOTS_ROOT, VE2_ROOT, VE2_THEMES_ROOT } from './constants.mjs'
import { buildContractRegistry } from './contract-registry.mjs'
import { emitFontsGeneratedCss, emitScopeCssTs } from './scope-emitter.mjs'

/**
 * Standalone scope.css.ts + fonts.generated.css generator.
 *
 * The heuristic family-emit generator was removed in T10 (see docs/ve2-literal-conversion-plan.md).
 * scope.css and fonts.generated.css remain shared infrastructure imported by every loader
 * (literal `literal/theme.ts` → `../scope.css`, and the still-live theme/granular runtime),
 * so this slim module keeps generating them without the deleted family-emit chain.
 */

async function fileExists(filePath) {
	try {
		await access(filePath)
		return true
	} catch {
		return false
	}
}

/** Load a theme's source CSS (theme.css if present, else bootstrap.css). */
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

/** Write a generated file, honoring @keep-manual guards and the --force flag. */
export async function writeThemeFile(filePath, content, { dryRun = false, force = false } = {}) {
	if (await fileExists(filePath)) {
		const existing = await readFile(filePath, 'utf8')
		if (existing.includes('@keep-manual') && !force) {
			return { written: false, reason: 'manual edits protected (@keep-manual)' }
		}
		if (!force) {
			return { written: false, reason: 'file exists (use --force to overwrite)' }
		}
	}
	if (dryRun) return { written: false, dryRun: true, wouldWrite: filePath }
	await mkdir(path.dirname(filePath), { recursive: true })
	await writeFile(filePath, content)
	return { written: true, path: filePath }
}

/** Add the theme's fonts.generated.css <link> to index.html if missing. */
export async function patchIndexHtml(themeSlug, hasFonts) {
	if (!hasFonts) return { patched: false }

	const indexPath = path.join(VE2_ROOT, 'index.html')
	let source = await readFile(indexPath, 'utf8')
	const linkLine = `\t\t<link rel="stylesheet" href="/src/themes/${themeSlug}/fonts.generated.css" />`

	if (source.includes(linkLine.trim())) return { patched: false, reason: 'already present' }

	const headClose = source.indexOf('\t</head>')
	if (headClose === -1) {
		const altClose = source.indexOf('</head>')
		source = `${source.slice(0, altClose)}\t\t${linkLine.trim()}\n${source.slice(altClose)}`
	} else {
		source = `${source.slice(0, headClose)}${linkLine}\n${source.slice(headClose)}`
	}
	await writeFile(indexPath, source)
	return { patched: true }
}

/** Generate scope.css.ts and fonts.generated.css for one theme. */
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

/** Full scope generation for a theme: build registry, emit scope + fonts, patch index.html. */
export async function generateThemeScope(themeSlug, { dryRun = false, force = false } = {}) {
	const registry = await buildContractRegistry()
	const report = { theme: themeSlug, steps: [] }

	const scope = await generateScope(themeSlug, registry, { dryRun, force })
	report.steps.push({ step: 'scope', ...scope })
	if (!dryRun && scope.fonts?.written) {
		const htmlPatch = await patchIndexHtml(themeSlug, true)
		report.steps.push({ step: 'patch-index-html', ...htmlPatch })
	}

	return report
}
