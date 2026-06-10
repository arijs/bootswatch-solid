/**
 * navButtonReset is VE-only (not in bootstrap.css); literal monolith needs the same rules
 * as theme ui/navs families so tab buttons styled as .nav-link match baseline capture.
 */
export function emitNavButtonResetSupplement(scopeName) {
	return `// navButtonReset (VE tab trigger reset — not in bootstrap.css)
globalStyle(\`\${${scopeName}}\${navButtonReset}\`, {
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	textTransform: 'none',
	appearance: 'button',
	borderRadius: 0,
})

globalStyle(\`\${${scopeName}}\${navButtonReset}:not(:disabled)\`, {
	cursor: 'pointer',
})
`
}
