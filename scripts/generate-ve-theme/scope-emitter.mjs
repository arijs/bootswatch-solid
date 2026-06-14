import { extractFontImports, formatVeValue } from './css-utils.mjs'
import { themeScopeClassComment, themeScopeExportName } from './constants.mjs'
import { getVarsImportPath } from './contract-registry.mjs'

const GLOBAL_VARS_PATH = '_vars.css'

// Root `--bs-*` var blocks are NOT emitted here. The literal emitter owns the
// `${scope}${vars}` assignment (plan §6.3): a single registry resolves each var symbol
// to its owning `_vars.css` module, eliminating the cross-generator module-mismatch
// class of bug (e.g. carousel vars previously imported from the global `_vars.css`,
// which does not declare them → `undefined` key → rule silently inert). scope.css.ts
// emits only the body/frame/modal rules, which reference a few `--bs-body-*` vars.

/** Emit import blocks for the var symbols referenced by the body rules, grouped by
 * owning `_vars.css` module (global first, then forms, then component modules). */
function emitVarImports(lines, usedVarSymbols, registry) {
	const byPath = new Map()
	for (const sym of usedVarSymbols) {
		const family = registry.symbolToFamily.get(sym)
		const importPath = (family ? getVarsImportPath(family) : null) ?? GLOBAL_VARS_PATH
		if (!byPath.has(importPath)) byPath.set(importPath, new Set())
		byPath.get(importPath).add(sym)
	}
	const remainingPaths = [...byPath.keys()]
		.filter((p) => p !== GLOBAL_VARS_PATH && p !== 'forms/_vars.css')
		.sort()
	const importOrder = [GLOBAL_VARS_PATH, 'forms/_vars.css', ...remainingPaths]
	for (const importPath of importOrder) {
		const syms = byPath.get(importPath)
		if (!syms || syms.size === 0) continue
		lines.push('import {')
		for (const sym of [...syms].sort()) lines.push(`\t${sym},`)
		lines.push(`} from '../../theme-contract/${importPath}'`)
	}
}

function extractBodyDeclarations(cssText) {
	const decls = {}
	// Merge ALL standalone `body { … }` rules in source order (later wins). Themes like
	// quartz/morph/vapor add a second `body { background-image: linear-gradient(…) }` rule
	// separate from the base reboot `body {}`. Anchor on `}` or start so we never pick up
	// compound selectors like `[data-bs-theme=dark] body { … }`.
	const re = /(?:^|})\s*body\s*\{([^}]*)\}/g
	let bodyMatch = re.exec(cssText)
	while (bodyMatch !== null) {
		for (const part of bodyMatch[1].split(';')) {
			const trimmed = part.trim()
			if (!trimmed) continue
			const colon = trimmed.indexOf(':')
			if (colon === -1) continue
			decls[trimmed.slice(0, colon).trim()] = trimmed.slice(colon + 1).trim()
		}
		bodyMatch = re.exec(cssText)
	}
	return decls
}

/**
 * Generate scope.css.ts source for a theme.
 *
 * Emits only the body/frame/modal rules. Root `--bs-*` vars are emitted by the
 * literal emitter onto `${scope}${vars}` (plan §6.3), not here.
 */
export function emitScopeCssTs(themeSlug, themeCssText, registry) {
	const scopeName = themeScopeExportName(themeSlug)
	const bodyDecls = extractBodyDeclarations(themeCssText)

	// Record every `varBs*` symbol referenced by a body rule so we import exactly those.
	const usedVarSymbols = new Set()
	const fmt = (raw) => {
		const out = formatVeValue(raw, registry)
		for (const m of out.matchAll(/\bvarBs[A-Za-z0-9]+\b/g)) usedVarSymbols.add(m[0])
		return out
	}

	const typographyProps = [
		['font-family', 'fontFamily'],
		['font-size', 'fontSize'],
		['font-weight', 'fontWeight'],
		['line-height', 'lineHeight'],
		['color', 'color'],
		['letter-spacing', 'letterSpacing'],
	]
	const frameProps = [
		['background-color', 'backgroundColor'],
		['background-image', 'backgroundImage'],
		['background', 'background'],
		['margin', 'margin'],
	]

	// Body section is built first so `usedVarSymbols` is populated before imports are emitted.
	const body = []
	body.push(`// ${themeScopeClassComment(themeSlug)}`)
	body.push(`// Zero-style identifier used as a stable selector prefix.`)
	body.push(`export const ${scopeName} = style({})`)
	body.push('')
	body.push('// ── Root / body styles ────────────────────────────────────────────────────────')
	body.push('// bodyText = typography; bodyFrame = page canvas (Ve2Shell). Do not add padding')
	body.push('// here — baseline screenshots have no padded wrapper around bd-example.')
	body.push('// Root `--bs-*` vars are emitted on `${scope}${vars}` by literal/styles.css.ts.')
	body.push('')
	body.push(`globalStyle(\`\${${scopeName}}\${bodyText}\`, {`)
	for (const [cssProp, veKey] of typographyProps) {
		if (bodyDecls[cssProp]) body.push(`\t${veKey}: ${fmt(bodyDecls[cssProp])},`)
	}
	if (!bodyDecls['font-family']) {
		body.push("\tfontFamily: 'system-ui, sans-serif',")
		body.push("\tfontSize: '1rem',")
		body.push('\tfontWeight: 400,')
		body.push('\tlineHeight: 1.5,')
	}
	body.push('})')
	body.push('')
	body.push(`globalStyle(\`\${${scopeName}}\${bodyFrame}\`, {`)
	let hasFrameProp = false
	for (const [cssProp, veKey] of frameProps) {
		if (bodyDecls[cssProp]) {
			body.push(`\t${veKey}: ${fmt(bodyDecls[cssProp])},`)
			hasFrameProp = true
		}
	}
	if (!hasFrameProp && !bodyDecls['background-color']) {
		body.push("\tbackgroundColor: '#fff',")
	}
	// `display: flow-root` makes bodyFrame a block formatting context so descendant
	// negative margins (e.g. Bootstrap's `.row { margin-top: -gutter }`) cannot collapse
	// up through it. Without this the wrapper is dragged upward and its `min-height: 100vh`
	// ends short of the captured content — leaving the page background (gradient/dark body
	// bg, which the real `<body>` propagates to the viewport canvas) uncovered at the bottom.
	body.push("\tdisplay: 'flow-root',")
	body.push("\tminHeight: '100vh',")
	body.push('})')
	body.push('')
	body.push('// Bootstrap Modal JS adds modalOpenHook to <body> without theme scope.')
	body.push(`globalStyle(\`\${modalOpenHook}\`, {`)
	for (const [cssProp, veKey] of typographyProps) {
		if (bodyDecls[cssProp]) body.push(`\t${veKey}: ${fmt(bodyDecls[cssProp])},`)
	}
	if (!bodyDecls['font-family']) {
		body.push("\tfontFamily: 'system-ui, sans-serif',")
		body.push("\tfontSize: '1rem',")
		body.push('\tfontWeight: 400,')
		body.push('\tlineHeight: 1.5,')
	}
	for (const [cssProp, veKey] of frameProps) {
		if (bodyDecls[cssProp]) body.push(`\t${veKey}: ${fmt(bodyDecls[cssProp])},`)
	}
	if (!hasFrameProp && !bodyDecls['background-color']) {
		body.push("\tbackgroundColor: '#fff',")
	}
	body.push('})')
	body.push('')

	const lines = []
	lines.push("import { globalStyle, style } from '@vanilla-extract/css'")
	emitVarImports(lines, usedVarSymbols, registry)
	lines.push("import { bodyFrame, bodyText } from '../../theme-contract/theme-contract.css'")
	lines.push("import { modalOpenHook } from '../../theme-contract/ui/modal/contract.css'")
	lines.push('')

	return [...lines, ...body].join('\n')
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
