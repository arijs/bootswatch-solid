/**
 * Toast header .btn-close: 1em sizing must inherit header font-size (not root rem).
 */
export function emitToastContractSupplement(scopeName) {
	return `// Toast header .btn-close inherits header font-size for correct 1em box
globalStyle(\`\${${scopeName}}\${toastHeader} \${${scopeName}}\${alertBtnClose}\`, {
	fontSize: 'inherit',
	lineHeight: 'inherit',
	fontFamily: 'inherit',
	appearance: 'button',
	WebkitAppearance: 'button',
})
`
}
