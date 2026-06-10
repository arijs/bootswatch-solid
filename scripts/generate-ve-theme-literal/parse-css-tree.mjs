import { readFile } from 'node:fs/promises'
import path from 'node:path'

import { parse as parseCss } from '@adobe/css-tools'

import { normalizeSelector } from '../generate-ve-theme/css-utils.mjs'
import { SCREENSHOTS_ROOT } from './constants.mjs'
import { SCOPE_OWNED_TAGS } from './element-registry.mjs'

function isRootVarSelector(selector) {
	const parts = normalizeSelector(selector)
		.split(',')
		.map((part) => part.trim())
		.filter(Boolean)
	if (parts.length === 0) return false
	return parts.every((part) => /^(:root|\[data-bs-theme=[^\]]+\])$/.test(part))
}

function isScopeOwnedSelector(selector) {
	const parts = normalizeSelector(selector)
		.split(',')
		.map((part) => part.trim())
	for (const part of parts) {
		if (part === 'body' || part.startsWith('body:') || part.startsWith('body[')) return true
		if (SCOPE_OWNED_TAGS.has(part.split(/[:[\s>+~]/)[0].toLowerCase())) return true
	}
	return false
}

function shouldSkipAtRule(name) {
	return ['import', 'charset', 'font-face', 'namespace'].includes(name)
}

function collectDeclarations(declarations) {
	const result = {}
	for (const decl of declarations ?? []) {
		if (decl.type !== 'declaration') continue
		result[decl.property] = decl.value
	}
	return result
}

/**
 * Walk parsed CSS AST and yield emit units in source order.
 * @returns {Array<{ kind: 'rule', selector: string, declarations: Record<string,string>, media: string[] } | { kind: 'keyframes', name: string }>}
 */
export function walkCssEmitUnits(ast) {
	const units = []

	function walk(nodes, mediaStack = []) {
		if (!nodes) return
		const list = Array.isArray(nodes) ? nodes : [nodes]
		for (const node of list) {
			if (!node || typeof node !== 'object') continue

			if (node.type === 'media') {
				const mq = (node.media ?? '').trim()
				walk(node.rules, mq ? [...mediaStack, mq] : mediaStack)
				continue
			}

			if (node.type === 'rule') {
				const declarations = collectDeclarations(node.declarations)
				if (Object.keys(declarations).length === 0) continue

				for (const rawSelector of node.selectors ?? []) {
					const selector = normalizeSelector(rawSelector)
					if (isRootVarSelector(selector)) continue
					if (isScopeOwnedSelector(selector)) continue
					units.push({
						kind: 'rule',
						selector,
						declarations,
						media: [...mediaStack],
					})
				}
				continue
			}

			if (node.type === 'keyframes') {
				units.push({
					kind: 'keyframes',
					name: node.name,
					steps: node.keyframes ?? [],
				})
				continue
			}

			if (node.type === 'supports' || node.type === 'container') {
				// Flatten as pseudo-media for now — rare in bootstrap.css
				const label = node.type === 'supports' ? `supports ${node.supports}` : `container ${node.container}`
				walk(node.rules, [...mediaStack, label])
				continue
			}
		}
	}

	const rules = ast.stylesheet?.rules ?? ast
	walk(rules)
	return units
}

export async function loadBootstrapCss(themeSlug) {
	const bootstrapPath = path.join(SCREENSHOTS_ROOT, themeSlug, 'bootstrap.css')
	return readFile(bootstrapPath, 'utf8')
}

export function parseBootstrapCss(cssText) {
	return parseCss(cssText, { silent: true })
}

export function filterUnitsBySelector(units, filterPattern) {
	if (!filterPattern) return units
	const needle = filterPattern.trim().toLowerCase()
	return units.filter((unit) => {
		if (unit.kind !== 'rule') return false
		return unit.selector.toLowerCase().includes(needle)
	})
}
