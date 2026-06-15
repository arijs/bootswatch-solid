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
	// Merge declarations from every rule whose selector LIST contains a standalone `body`,
	// in source order (later wins). This covers the base reboot `body { … }`, theme
	// additions like quartz/morph/vapor's gradient `body { background-image: … }`, AND
	// grouped rules like Materia's `body, input, button { letter-spacing: 0.1px }` — a
	// grouped selector applies every declaration to each member, so `body` legitimately
	// gets the letter-spacing. Only an exact `body` comma-part qualifies, so compound /
	// descendant selectors (`[data-bs-theme=dark] body`, `body.modal-open`) are excluded.
	const re = /(?:^|[};])\s*([^{}]+?)\s*\{([^}]*)\}/g
	let ruleMatch = re.exec(cssText)
	while (ruleMatch !== null) {
		const selectorList = ruleMatch[1]
		const hasStandaloneBody = selectorList.split(',').some((part) => part.trim() === 'body')
		if (hasStandaloneBody) {
			for (const part of ruleMatch[2].split(';')) {
				const trimmed = part.trim()
				if (!trimmed) continue
				const colon = trimmed.indexOf(':')
				if (colon === -1) continue
				decls[trimmed.slice(0, colon).trim()] = trimmed.slice(colon + 1).trim()
			}
		}
		ruleMatch = re.exec(cssText)
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
		// Vapor's body sets a neon `text-shadow` glow inherited by all text; without it
		// VE text renders crisp and every glyph diffs against the glowing baseline.
		['text-shadow', 'textShadow'],
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
	// Bootstrap Modal JS stamps `${scope} ${modalOpenHook}` on <body> (the ve-modal adapter
	// passes both classes via CLASS_NAME_OPEN, and the fork splits them). Scoping this rule to
	// the active theme prevents cross-theme contamination: every theme's scope.css.ts is loaded
	// (Ve2Shell imports all scope classes), so a GLOBAL `${modalOpenHook}` rule would let the
	// last-loaded theme's body typography win on <body> and leak (e.g. letter-spacing) into the
	// modal content via inheritance.
	body.push('// Bootstrap Modal JS stamps `${scope} ${modalOpenHook}` on <body> when a modal opens.')
	body.push(`globalStyle(\`\${${scopeName}}\${modalOpenHook}\`, {`)
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
