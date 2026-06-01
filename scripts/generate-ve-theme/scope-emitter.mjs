import {
	cssPropToVeKey,
	extractFontImports,
	extractRootVars,
	formatVeValue,
} from './css-utils.mjs'
import { themeScopeClassComment, themeScopeExportName } from './constants.mjs'

function groupVarsByImport(registry, rootVars) {
	const globalVars = []
	const formsVars = []

	for (const [cssVar, value] of Object.entries(rootVars)) {
		const symbol = registry.cssVarToSymbol.get(cssVar)
		if (!symbol) continue
		const family = registry.symbolToFamily.get(symbol)
		const entry = { symbol, cssVar, value }
		if (family === 'forms') formsVars.push(entry)
		else globalVars.push(entry)
	}
	return { globalVars, formsVars }
}

function emitVarAssignment(entry, registry) {
	const veValue = formatVeValue(entry.value, registry)
	// If value is var(--bs-x), keep as symbol reference not literal
	if (entry.value.trim().startsWith('var(')) {
		const parsed = formatVeValue(entry.value, registry)
		if (!parsed.startsWith("'")) return `\t\t[${entry.symbol}]: ${parsed},`
	}
	return `\t\t[${entry.symbol}]: ${veValue},`
}

function extractBodyDeclarations(cssText) {
	const bodyMatch = cssText.match(/body\s*\{([^}]+)\}/)
	if (!bodyMatch) return {}
	const decls = {}
	for (const part of bodyMatch[1].split(';')) {
		const trimmed = part.trim()
		if (!trimmed) continue
		const colon = trimmed.indexOf(':')
		if (colon === -1) continue
		decls[trimmed.slice(0, colon).trim()] = trimmed.slice(colon + 1).trim()
	}
	return decls
}

/**
 * Generate scope.css.ts source for a theme.
 */
export function emitScopeCssTs(themeSlug, themeCssText, registry) {
	const scopeName = themeScopeExportName(themeSlug)
	const rootVars = extractRootVars(themeCssText)
	const { globalVars, formsVars } = groupVarsByImport(registry, rootVars)
	const bodyDecls = extractBodyDeclarations(themeCssText)

	const globalImports = [...new Set(globalVars.map((v) => v.symbol))].sort()
	const formsImports = [...new Set(formsVars.map((v) => v.symbol))].sort()

	const lines = []
	lines.push("import { globalStyle, style } from '@vanilla-extract/css'")
	if (globalImports.length > 0) {
		lines.push('import {')
		for (const sym of globalImports) lines.push(`\t${sym},`)
		lines.push("} from '../../theme-contract/_vars.css'")
	}
	if (formsImports.length > 0) {
		lines.push('import {')
		for (const sym of formsImports) lines.push(`\t${sym},`)
		lines.push("} from '../../theme-contract/forms/_vars.css'")
	}
	lines.push("import { bodyFrame, bodyText, vars } from '../../theme-contract/theme-contract.css'")
	lines.push("import { modalOpenHook } from '../../theme-contract/ui/modal/contract.css'")
	lines.push('')
	lines.push(`// ${themeScopeClassComment(themeSlug)}`)
	lines.push(`// Zero-style identifier used as a stable selector prefix.`)
	lines.push(`export const ${scopeName} = style({})`)
	lines.push('')
	lines.push('// Global Bootstrap CSS custom properties (`--bs-*`) are assigned on the')
	lines.push('// dedicated vars contract class to keep root var hosting separate from body')
	lines.push('// layout/background styles.')
	lines.push(`globalStyle(\`\${${scopeName}}\${vars}\`, {`)
	lines.push('\tvars: {')

	// Emit grouped with comments like hand-written files
	const semanticColors = globalVars.filter((v) =>
		/^varBs(Primary|Secondary|Success|Info|Warning|Danger|Light|Dark)$/.test(v.symbol),
	)
	const emitted = new Set()
	for (const entry of [...globalVars, ...formsVars]) {
		if (emitted.has(entry.symbol)) continue
		emitted.add(entry.symbol)
		lines.push(emitVarAssignment(entry, registry))
	}
	lines.push('\t},')
	lines.push('})')
	lines.push('')
	lines.push('// ── Root / body styles ────────────────────────────────────────────────────────')
	lines.push('// bodyText = typography; bodyFrame = page canvas (Ve2Shell). Do not add padding')
	lines.push('// here — baseline screenshots have no padded wrapper around bd-example.')
	lines.push('')
	lines.push(`globalStyle(\`\${${scopeName}}\${bodyText}\`, {`)

	const typographyProps = [
		['font-family', 'fontFamily'],
		['font-size', 'fontSize'],
		['font-weight', 'fontWeight'],
		['line-height', 'lineHeight'],
		['color', 'color'],
		['letter-spacing', 'letterSpacing'],
	]
	for (const [cssProp, veKey] of typographyProps) {
		if (bodyDecls[cssProp]) {
			lines.push(`\t${veKey}: ${formatVeValue(bodyDecls[cssProp], registry)},`)
		}
	}
	if (!bodyDecls['font-family']) {
		lines.push("\tfontFamily: 'system-ui, sans-serif',")
		lines.push("\tfontSize: '1rem',")
		lines.push('\tfontWeight: 400,')
		lines.push('\tlineHeight: 1.5,')
	}
	lines.push('})')
	lines.push('')
	lines.push(`globalStyle(\`\${${scopeName}}\${bodyFrame}\`, {`)

	const frameProps = [
		['background-color', 'backgroundColor'],
		['margin', 'margin'],
	]
	let hasFrameProp = false
	for (const [cssProp, veKey] of frameProps) {
		if (bodyDecls[cssProp]) {
			lines.push(`\t${veKey}: ${formatVeValue(bodyDecls[cssProp], registry)},`)
			hasFrameProp = true
		}
	}
	if (!hasFrameProp && !bodyDecls['background-color']) {
		lines.push("\tbackgroundColor: '#fff',")
	}
	lines.push("\tminHeight: '100vh',")
	lines.push('})')
	lines.push('')
	lines.push('// Bootstrap Modal JS adds modalOpenHook to <body> without theme scope.')
	lines.push(`globalStyle(\`\${modalOpenHook}\`, {`)
	for (const [cssProp, veKey] of typographyProps) {
		if (bodyDecls[cssProp]) {
			lines.push(`\t${veKey}: ${formatVeValue(bodyDecls[cssProp], registry)},`)
		}
	}
	if (!bodyDecls['font-family']) {
		lines.push("\tfontFamily: 'system-ui, sans-serif',")
		lines.push("\tfontSize: '1rem',")
		lines.push('\tfontWeight: 400,')
		lines.push('\tlineHeight: 1.5,')
	}
	for (const [cssProp, veKey] of frameProps) {
		if (bodyDecls[cssProp]) {
			lines.push(`\t${veKey}: ${formatVeValue(bodyDecls[cssProp], registry)},`)
		}
	}
	if (!hasFrameProp && !bodyDecls['background-color']) {
		lines.push("\tbackgroundColor: '#fff',")
	}
	lines.push('})')
	lines.push('')

	return lines.join('\n')
}

/**
 * Generate fonts.generated.css for a theme.
 * @returns {string|null} CSS content or null if no imports
 */
export function emitFontsGeneratedCss(themeSlug, themeCssText) {
	const imports = extractFontImports(themeCssText)
	if (imports.length === 0) return null

	const lines = [
		'/* AUTO-GENERATED — do not edit by hand.',
		`   Source: screenshots/${themeSlug}/theme.css`,
		"   Re-generate if the theme's font imports change. */",
		...imports,
		'',
	]
	return lines.join('\n')
}
