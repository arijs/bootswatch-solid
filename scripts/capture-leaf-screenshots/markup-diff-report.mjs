export function formatMarkupDiffAsMarkdown(diff, options = {}) {
	const maxNodes = Number.isFinite(options.maxNodes) ? Math.max(1, options.maxNodes) : 25
	const lines = []
	const summary = diff.summary

	lines.push('# Markup Diff Summary')
	lines.push('')
	lines.push(`- Baseline nodes: ${summary.baselineNodeCount}`)
	lines.push(`- VE nodes: ${summary.veNodeCount}`)
	lines.push(`- Added nodes: ${summary.addedNodeCount}`)
	lines.push(`- Removed nodes: ${summary.removedNodeCount}`)
	lines.push(`- Changed nodes: ${summary.changedNodeCount}`)
	lines.push(`- Added style properties: ${summary.addedPropertyCount}`)
	lines.push(`- Removed style properties: ${summary.removedPropertyCount}`)
	lines.push(`- Changed style properties: ${summary.changedPropertyCount}`)

	const addedNodes = diff.addedNodes.slice(0, maxNodes)
	if (addedNodes.length > 0) {
		lines.push('')
		lines.push('## Added Nodes')
		lines.push('')
		for (const node of addedNodes) {
			lines.push(
				`- ${node.path} (${node.tag})${node.veClass ? ` \`class="${node.veClass}"\`` : ''}`,
			)
		}
	}

	const removedNodes = diff.removedNodes.slice(0, maxNodes)
	if (removedNodes.length > 0) {
		lines.push('')
		lines.push('## Removed Nodes')
		lines.push('')
		for (const node of removedNodes) {
			lines.push(
				`- ${node.path} (${node.tag})${node.baselineClass ? ` \`class="${node.baselineClass}"\`` : ''}`,
			)
		}
	}

	const changedNodes = diff.changedNodes.slice(0, maxNodes)
	if (changedNodes.length > 0) {
		lines.push('')
		lines.push('## Changed Nodes')
		lines.push('')
		for (const node of changedNodes) {
			lines.push(`### ${node.path}`)
			if (node.tagMismatch) {
				lines.push(`- Tag mismatch: baseline=${node.tag}, ve=${node.veTag}`)
				if (node.baselineClass || node.veClass) {
					if (node.baselineClass === node.veClass) {
						lines.push(`- class: \`${node.baselineClass}\``)
					} else {
						if (node.baselineClass)
							lines.push(`- baseline class: \`${node.baselineClass}\``)
						if (node.veClass) lines.push(`- ve class: \`${node.veClass}\``)
					}
				}
				lines.push('')
				continue
			}
			if (node.baselineClass || node.veClass) {
				if (node.baselineClass === node.veClass) {
					lines.push(`- class: \`${node.baselineClass}\``)
				} else {
					if (node.baselineClass)
						lines.push(`- baseline class: \`${node.baselineClass}\``)
					if (node.veClass) lines.push(`- ve class: \`${node.veClass}\``)
				}
			}
			if (node.styleDiff.added.length > 0) {
				lines.push(
					`- Added properties (${node.styleDiff.added.length}): ${node.styleDiff.added.map((item) => item.property).join(', ')}`,
				)
			}
			if (node.styleDiff.removed.length > 0) {
				lines.push(
					`- Removed properties (${node.styleDiff.removed.length}): ${node.styleDiff.removed.map((item) => item.property).join(', ')}`,
				)
			}
			if (node.styleDiff.changed.length > 0) {
				const preview = node.styleDiff.changed
					.slice(0, 8)
					.map((item) => `${item.property}: "${item.baseline}" -> "${item.ve}"`)
					.join('; ')
				lines.push(`- Changed properties (${node.styleDiff.changed.length}): ${preview}`)
			}
			lines.push('')
		}
	}

	return `${lines.join('\n').trim()}\n`
}
