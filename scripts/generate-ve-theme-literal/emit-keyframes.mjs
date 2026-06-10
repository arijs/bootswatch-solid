import { cssPropToVeKey, formatVeValue } from '../generate-ve-theme/css-utils.mjs'

function formatKeyframeStepKey(values) {
	const key = (values ?? []).join(', ').trim()
	if (key === 'from') return 'from'
	if (key === 'to') return 'to'
	return key
}

function emitKeyframeStepDeclarations(declarations, registry) {
	const lines = []
	for (const decl of declarations ?? []) {
		if (decl.type !== 'declaration') continue
		const key = cssPropToVeKey(decl.property)
		const value = formatVeValue(decl.value, registry)
		lines.push(`\t\t${key}: ${value},`)
	}
	return lines
}

/**
 * Emit globalKeyframes() for a parsed @keyframes rule.
 * Uses Bootstrap's original animation name so animation-name: spinner-border still resolves.
 */
export function emitKeyframesBlock({ name, steps }, registry) {
	if (!name || !steps?.length) return ''

	const lines = []
	lines.push('// SOURCE CSS:')
	lines.push(`// @keyframes ${name} { … }`)
	lines.push(`globalKeyframes('${name}', {`)

	for (const step of steps) {
		if (step.type !== 'keyframe') continue
		const stepKey = formatKeyframeStepKey(step.values)
		const declLines = emitKeyframeStepDeclarations(step.declarations, registry)
		if (declLines.length === 0) continue
		lines.push(`\t'${stepKey}': {`)
		lines.push(...declLines)
		lines.push('\t},')
	}

	lines.push('})')
	lines.push('')
	return lines.join('\n')
}
