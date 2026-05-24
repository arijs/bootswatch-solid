import { readdir, readFile, writeFile, mkdir, access } from 'node:fs/promises'
import path from 'node:path'

import {
	EMIT_FAMILIES,
	VE2_ROOT,
	VE2_THEMES_ROOT,
	themeScopeExportName,
} from './constants.mjs'

const CONTENTS_BARREL = `import './basic/styles.css'
import './heading/styles.css'
import './display/styles.css'
import './lists/styles.css'
import './tables/styles.css'
import './images/styles.css'
`

const THEME_TS_TEMPLATE = (themeSlug) => `import './contents/styles.css'
import './forms/styles.css'
import './utilities/styles.css'
import './ui/accordion/styles.css'
import './ui/alerts/styles.css'
import './ui/badge/styles.css'
import './ui/breadcrumb/styles.css'
import './ui/button-group/styles.css'
import './ui/buttons/styles.css'
import './ui/card/styles.css'
import './ui/card-tabs/styles.css'
import './ui/carousel/styles.css'
import './ui/dropdowns/styles.css'
import './ui/list-group/styles.css'
import './ui/modal/styles.css'
import './ui/navbar/styles.css'
import './ui/navs/styles.css'
import './ui/pagination/styles.css'
import './ui/popovers/styles.css'
import './ui/progress/styles.css'
import './ui/scrollspy/styles.css'
import './ui/spinners/styles.css'
import './ui/toasts/styles.css'
import './ui/tooltips/styles.css'
`

const EMPTY_FAMILY = `// Intentionally empty on first creation.
// Add globalStyle rules only from screenshots/{theme} approved sources.
export {}
`

async function exists(filePath) {
	try {
		await access(filePath)
		return true
	} catch {
		return false
	}
}

function familyOutputPath(themeSlug, family) {
	return path.join(VE2_THEMES_ROOT, themeSlug, family, 'styles.css.ts')
}

/**
 * Create theme folder scaffold.
 */
export async function emitThemeScaffold(themeSlug, { force = false } = {}) {
	const themeDir = path.join(VE2_THEMES_ROOT, themeSlug)
	const created = []
	const skipped = []

	await mkdir(themeDir, { recursive: true })

	// theme.ts
	const themeTsPath = path.join(themeDir, 'theme.ts')
	if (!force && (await exists(themeTsPath))) {
		skipped.push('theme.ts')
	} else {
		await writeFile(themeTsPath, THEME_TS_TEMPLATE(themeSlug))
		created.push('theme.ts')
	}

	// contents barrel
	const contentsBarrelPath = path.join(themeDir, 'contents', 'styles.css.ts')
	await mkdir(path.dirname(contentsBarrelPath), { recursive: true })
	if (!force && (await exists(contentsBarrelPath))) {
		skipped.push('contents/styles.css.ts')
	} else {
		await writeFile(contentsBarrelPath, CONTENTS_BARREL)
		created.push('contents/styles.css.ts')
	}

	for (const family of EMIT_FAMILIES) {
		const outPath = familyOutputPath(themeSlug, family)
		await mkdir(path.dirname(outPath), { recursive: true })
		if (!force && (await exists(outPath))) {
			skipped.push(`${family}/styles.css.ts`)
			continue
		}
		const emptyContent = EMPTY_FAMILY.replace('{theme}', themeSlug)
		await writeFile(outPath, emptyContent)
		created.push(`${family}/styles.css.ts`)
	}

	return { created, skipped, themeDir }
}

/**
 * Discover theme slugs that have scope.css.ts under ve-project2/src/themes.
 */
export async function listGeneratedThemeSlugs() {
	const themesDir = path.join(VE2_THEMES_ROOT)
	const entries = await readdir(themesDir, { withFileTypes: true })
	const slugs = []
	for (const entry of entries) {
		if (!entry.isDirectory()) continue
		const scopePath = path.join(themesDir, entry.name, 'scope.css.ts')
		if (await exists(scopePath)) slugs.push(entry.name)
	}
	return slugs.sort()
}

/**
 * Rewrite Ve2Shell.tsx registrations for all themes with scope.css.ts.
 */
export async function patchAllVe2ShellThemes(themeSlugs) {
	const shellPath = path.join(VE2_ROOT, 'src', 'components', 'shell', 'Ve2Shell.tsx')
	let source = await readFile(shellPath, 'utf8')

	const imports = themeSlugs
		.map((slug) => {
			const scope = themeScopeExportName(slug)
			return `import { ${scope} } from '../../themes/${slug}/scope.css'`
		})
		.join('\n')

	const loaders = themeSlugs
		.map((slug) => `\t${slug}: () => import('../../themes/${slug}/theme.js'),`)
		.join('\n')

	const keyCases = themeSlugs
		.filter((slug) => slug !== 'bootstrap')
		.map((slug) => `\t\tcase '${slug}':\n\t\t\treturn rawTheme`)
		.join('\n')

	const classCases = themeSlugs
		.filter((slug) => slug !== 'bootstrap')
		.map((slug) => {
			const scope = themeScopeExportName(slug)
			return `\t\tcase '${slug}':\n\t\t\treturn ${scope}`
		})
		.join('\n')

	const generatedBlock = `${imports}
// Layout class for screenshot demo containers
import '../../styles/bd-example.css'
import { ThemeContext } from '../../context/ThemeContext'
// Root-level contract classes: body wrapper + text-bearing root.
import { bodyText, bodyFrame, vars } from '../../theme-contract/theme-contract.css'

// Each loader returns a dynamic import for that theme's side-effect barrel.
// Explicit paths are required so Vite can build separate chunks per theme.
const themeLoaders: Record<string, () => Promise<unknown>> = {
${loaders}
}

// Tracks which themes have already been loaded (module-level, survives re-mounts).
const loadedThemes = new Set<string>()

function resolveThemeKey(rawTheme: string | null | undefined): string {
	switch (rawTheme) {
${keyCases}
\t\tdefault:
\t\t\treturn 'bootstrap'
\t}
}

function resolveThemeClass(rawTheme: string | null | undefined): string {
	switch (rawTheme) {
${classCases}
\t\tdefault:
\t\t\treturn bootstrapScope
\t}
}
`

	source = source.replace(
		/^import \{ bootstrapScope \}[\s\S]*?function resolveThemeClass[\s\S]*?\n\}/m,
		generatedBlock.trimEnd(),
	)

	await writeFile(shellPath, source)
	return { patched: true, themeCount: themeSlugs.length }
}

/**
 * Ensure index.html links all themes' fonts.generated.css files.
 */
export async function patchAllIndexHtmlFonts(themeSlugs) {
	const indexPath = path.join(VE2_ROOT, 'index.html')
	let source = await readFile(indexPath, 'utf8')

	const linkLines = []
	for (const slug of themeSlugs.sort()) {
		const fontsPath = path.join(VE2_THEMES_ROOT, slug, 'fonts.generated.css')
		if (!(await exists(fontsPath))) continue
		linkLines.push(`\t\t<link rel="stylesheet" href="/src/themes/${slug}/fonts.generated.css" />`)
	}

	const marker = '\t\t<style>'
	const headClose = source.indexOf('\t</head>')
	const insertBlock = `${linkLines.join('\n')}\n`

	// Remove existing theme font links
	source = source.replace(/\t\t<link rel="stylesheet" href="\/src\/themes\/[^"]+\/fonts\.generated\.css" \/>\n?/g, '')

	if (headClose !== -1) {
		source = `${source.slice(0, headClose)}${insertBlock}${source.slice(headClose)}`
	}

	await writeFile(indexPath, source)
	return { patched: true, fontLinks: linkLines.length }
}

/**
 * Patch Ve2Shell.tsx to register a new theme.
 */
export async function patchVe2Shell(themeSlug) {
	const shellPath = path.join(VE2_ROOT, 'src', 'components', 'shell', 'Ve2Shell.tsx')
	let source = await readFile(shellPath, 'utf8')
	const scopeName = themeScopeExportName(themeSlug)
	const importLine = `import { ${scopeName} } from '../../themes/${themeSlug}/scope.css'`

	if (source.includes(importLine)) {
		return { patched: false, reason: 'already registered' }
	}

	// Add import before the bd-example comment line
	source = source.replace(
		'// Layout class for screenshot demo containers',
		`${importLine}\n// Layout class for screenshot demo containers`,
	)

	// Add to themeLoaders (before closing brace of object)
	const loaderEntry = `\t${themeSlug}:   () => import('../../themes/${themeSlug}/theme.js'),`
	if (!source.includes(`themes/${themeSlug}/theme.js`)) {
		source = source.replace(
			/\tmateria:   \(\) => import\('\.\.\/\.\.\/themes\/materia\/theme\.js'\),\n\}/,
			`\tmateria:   () => import('../../themes/materia/theme.js'),\n${loaderEntry}\n}`,
		)
	}

	// resolveThemeKey: add case before default
	if (!source.includes(`case '${themeSlug}':`)) {
		source = source.replace(
			/\t\tdefault:\n\t\t\treturn 'bootstrap'\n\t\}\n\}\n\nfunction resolveThemeClass/,
			`\t\tcase '${themeSlug}':\n\t\t\treturn rawTheme\n\t\tdefault:\n\t\t\treturn 'bootstrap'\n\t}\n}\n\nfunction resolveThemeClass`,
		)
	}

	// resolveThemeClass: add case before default
	if (!source.includes(`return ${scopeName}`)) {
		source = source.replace(
			/\t\tcase 'materia':\n\t\t\treturn materiaScope\n\t\tdefault:\n\t\t\treturn bootstrapScope/,
			`\t\tcase 'materia':\n\t\t\treturn materiaScope\n\t\tcase '${themeSlug}':\n\t\t\treturn ${scopeName}\n\t\tdefault:\n\t\t\treturn bootstrapScope`,
		)
	}

	await writeFile(shellPath, source)
	return { patched: true }
}

/**
 * Patch index.html to add font link if fonts.generated.css exists.
 */
export async function patchIndexHtml(themeSlug, hasFonts) {
	if (!hasFonts) return { patched: false }

	const indexPath = path.join(VE2_ROOT, 'index.html')
	let source = await readFile(indexPath, 'utf8')
	// Patch index.html with correct indentation
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

export async function writeThemeFile(filePath, content, { dryRun = false, force = false } = {}) {
	if (await exists(filePath)) {
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
