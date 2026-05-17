import { getParser } from '@arijs/stream-xml-parser'

import { parseResolvedStyleDeclarations } from './css-extraction.mjs'

function attrsToMap(node) {
	const map = new Map()
	for (const attr of node?.attrs ?? []) {
		if (!attr || typeof attr.name !== 'string') continue
		map.set(attr.name, String(attr.value ?? ''))
	}
	return map
}

function isElementNode(node) {
	return Boolean(node && typeof node.name === 'string' && !node.name.startsWith('#'))
}

function pickStyleText(attrs, preferredStyleAttr) {
	const preferred = attrs.get(preferredStyleAttr)
	if (preferred?.trim()) return preferred
	return attrs.get('style-resolved') ?? ''
}

function toStyleMap(styleText) {
	const styleMap = new Map()
	for (const declaration of parseResolvedStyleDeclarations(styleText)) {
		if (!declaration.canonicalName) continue
		styleMap.set(declaration.canonicalName, declaration.value)
	}
	return styleMap
}

function parseMarkup(markupText) {
	const parser = getParser()
	parser.end(markupText)
	const result = parser.getResult()
	if (result.error) {
		throw new Error(`Unable to parse markup: ${result.error.message || result.error}`)
	}
	return result.tree ?? []
}

function buildNodeIndex(tree, options = {}) {
	const preferredStyleAttr = options.preferredStyleAttr ?? 'style-modified'
	const includeText = Boolean(options.includeText)
	const index = new Map()

	function visitElement(node, parentPath) {
		if (!isElementNode(node)) return

		const attrs = attrsToMap(node)
		const styleText = pickStyleText(attrs, preferredStyleAttr)
		const styleMap = toStyleMap(styleText)
		const key = parentPath
		index.set(key, {
			path: key,
			tag: node.name,
			attrs,
			style: styleMap,
			text: includeText ? String(node.text ?? '') : '',
		})

		const siblingCountByName = new Map()
		for (const child of node.children ?? []) {
			if (!isElementNode(child)) continue
			const nextCount = (siblingCountByName.get(child.name) ?? 0) + 1
			siblingCountByName.set(child.name, nextCount)
			visitElement(child, `${key}/${child.name}[${nextCount}]`)
		}
	}

	const rootSiblingCount = new Map()
	for (const rootNode of tree) {
		if (!isElementNode(rootNode)) continue
		const nextCount = (rootSiblingCount.get(rootNode.name) ?? 0) + 1
		rootSiblingCount.set(rootNode.name, nextCount)
		visitElement(rootNode, `/${rootNode.name}[${nextCount}]`)
	}

	return index
}

function compareStyleMaps(baselineStyle, veStyle) {
	const added = []
	const removed = []
	const changed = []

	for (const [property, baselineValue] of baselineStyle.entries()) {
		if (!veStyle.has(property)) {
			removed.push({ property, baseline: baselineValue })
			continue
		}
		const veValue = veStyle.get(property)
		if (veValue !== baselineValue) {
			changed.push({ property, baseline: baselineValue, ve: veValue })
		}
	}

	for (const [property, veValue] of veStyle.entries()) {
		if (!baselineStyle.has(property)) {
			added.push({ property, ve: veValue })
		}
	}

	return { added, removed, changed }
}

export function diffMarkupArtifacts(baselineMarkup, veMarkup, options = {}) {
	const baselineTree = parseMarkup(baselineMarkup)
	const veTree = parseMarkup(veMarkup)
	const baselineIndex = buildNodeIndex(baselineTree, options)
	const veIndex = buildNodeIndex(veTree, options)

	const addedNodes = []
	const removedNodes = []
	const changedNodes = []

	for (const [pathKey, baselineNode] of baselineIndex.entries()) {
		const veNode = veIndex.get(pathKey)
		if (!veNode) {
			removedNodes.push({ path: pathKey, tag: baselineNode.tag, baselineClass: baselineNode.attrs.get('class') ?? '' })
			continue
		}
		if (baselineNode.tag !== veNode.tag) {
			changedNodes.push({
				path: pathKey,
				tag: baselineNode.tag,
				veTag: veNode.tag,
				baselineClass: baselineNode.attrs.get('class') ?? '',
				veClass: veNode.attrs.get('class') ?? '',
				styleDiff: { added: [], removed: [], changed: [] },
				tagMismatch: true,
			})
			continue
		}

		const styleDiff = compareStyleMaps(baselineNode.style, veNode.style)
		if (styleDiff.added.length === 0 && styleDiff.removed.length === 0 && styleDiff.changed.length === 0) {
			continue
		}

		changedNodes.push({
			path: pathKey,
			tag: baselineNode.tag,
			veTag: veNode.tag,
			baselineClass: baselineNode.attrs.get('class') ?? '',
			veClass: veNode.attrs.get('class') ?? '',
			styleDiff,
			tagMismatch: false,
		})
	}

	for (const [pathKey, veNode] of veIndex.entries()) {
		if (!baselineIndex.has(pathKey)) {
			addedNodes.push({ path: pathKey, tag: veNode.tag, veClass: veNode.attrs.get('class') ?? '' })
		}
	}

	let addedProps = 0
	let removedProps = 0
	let changedProps = 0
	for (const changedNode of changedNodes) {
		addedProps += changedNode.styleDiff.added.length
		removedProps += changedNode.styleDiff.removed.length
		changedProps += changedNode.styleDiff.changed.length
	}

	return {
		summary: {
			baselineNodeCount: baselineIndex.size,
			veNodeCount: veIndex.size,
			addedNodeCount: addedNodes.length,
			removedNodeCount: removedNodes.length,
			changedNodeCount: changedNodes.length,
			addedPropertyCount: addedProps,
			removedPropertyCount: removedProps,
			changedPropertyCount: changedProps,
		},
		addedNodes,
		removedNodes,
		changedNodes,
	}
}
