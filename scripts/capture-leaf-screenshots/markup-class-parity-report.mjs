export function formatClassParityAsMarkdown(report, options = {}) {
	const maxGaps = Number.isFinite(options.maxGaps) ? Math.max(1, options.maxGaps) : 50
	const s = report.summary
	const lines = []

	lines.push('# Class Parity Report')
	lines.push('')
	lines.push(`- Elements checked: ${s.elementsChecked}`)
	lines.push(`- Elements with gaps: ${s.elementsWithGaps}`)
	lines.push(`- Required contract stamps: ${s.totalExpected}`)
	lines.push(`- Missing contract stamps: ${s.totalMissing}`)

	if (report.gaps.length === 0) {
		lines.push('')
		lines.push('**All required contracts are stamped. No gaps.**')
		return `${lines.join('\n').trim()}\n`
	}

	lines.push('')
	lines.push('## Gaps')
	lines.push('')

	for (const gap of report.gaps.slice(0, maxGaps)) {
		lines.push(`### ${gap.path}`)
		lines.push(`- Tag: \`${gap.tag}\``)
		if (gap.baselineClasses.length > 0) {
			lines.push(`- Baseline classes: \`${gap.baselineClasses.join(' ')}\``)
		}
		if (gap.missingSymbols.length > 0) {
			lines.push(`- **Missing symbols (${gap.missingSymbols.length}):** \`${gap.missingSymbols.join('`, `')}\``)
		}
		if (gap.unmappedClasses.length > 0) {
			lines.push(`- Unmapped baseline classes: \`${gap.unmappedClasses.join('`, `')}\``)
		}
		if (gap.stampedSymbols.length > 0) {
			lines.push(`- Stamped symbols: \`${gap.stampedSymbols.join('`, `')}\``)
		}
		lines.push('')
	}

	if (report.gaps.length > maxGaps) {
		lines.push(`*(${report.gaps.length - maxGaps} more gaps not shown — use --max-gaps to increase limit)*`)
		lines.push('')
	}

	return `${lines.join('\n').trim()}\n`
}
