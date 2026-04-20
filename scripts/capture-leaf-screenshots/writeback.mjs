import {
	directiveKey,
	directiveValuesSignature,
	formatDirective,
	selectHeightFromDirective,
} from './directives.mjs'
import { loadComponentModel } from './persistence.mjs'

export function applyMeasurementToDirectiveValues(
	widthMappings,
	fallbacks,
	requestedWidth,
	measuredHeight,
) {
	const mappings = [...widthMappings].map((entry) => ({ ...entry }))
	const fallbackValues = [...fallbacks]
	const existingWidthIndex = mappings.findIndex((entry) => entry.width === requestedWidth)

	if (existingWidthIndex >= 0) {
		mappings[existingWidthIndex] = { width: requestedWidth, height: measuredHeight }
		return {
			widthMappings: mappings,
			fallbacks: fallbackValues,
			action: 'updated-width',
		}
	}

	mappings.push({ width: requestedWidth, height: measuredHeight })
	mappings.sort((a, b) => a.width - b.width)
	const insertedIsLargest =
		mappings.length === 1 || requestedWidth >= mappings[mappings.length - 1].width
	if (insertedIsLargest) {
		if (fallbackValues.length > 0) {
			fallbackValues[0] = measuredHeight
		} else {
			fallbackValues.push(measuredHeight)
		}
	}

	return {
		widthMappings: mappings,
		fallbacks: fallbackValues,
		action: 'inserted-width',
	}
}

function computeNextDirectiveValues(directive, requestedWidth, measuredHeight) {
	if (!directive) {
		return applyMeasurementToDirectiveValues([], [], requestedWidth, measuredHeight)
	}

	return applyMeasurementToDirectiveValues(
		directive.widthMappings,
		directive.fallbacks,
		requestedWidth,
		measuredHeight,
	)
}

function findDirective(model, theme, state) {
	return (
		model.directives.find(
			(directive) => directive.theme === theme && directive.state === state,
		) ?? null
	)
}

function resolveStaticDirectiveForTheme(model, theme) {
	const exact = findDirective(model, theme, null)
	if (exact) return exact
	if (theme !== '*') return findDirective(model, '*', null)
	return null
}

function removeDirective(model, targetDirective) {
	if (!targetDirective) return false
	const directiveIndex = model.directives.indexOf(targetDirective)
	if (directiveIndex === -1) return false

	const removedLineIndex = targetDirective.lineIndex
	model.directives.splice(directiveIndex, 1)
	model.lines.splice(removedLineIndex, 1)

	for (const directive of model.directives) {
		if (directive.lineIndex > removedLineIndex) {
			directive.lineIndex -= 1
		}
	}

	model.dirty = true
	return true
}

function canonicalizeWritebackTheme(model, update) {
	if (model.directives.length === 0) {
		return { theme: '*', promoted: false, reason: 'empty-component' }
	}

	const wildcardForState = findDirective(model, '*', update.state)
	if (wildcardForState) {
		const wildcardHeight = selectHeightFromDirective(wildcardForState, update.width)
		if (wildcardHeight === null || wildcardHeight === update.height) {
			return { theme: '*', promoted: false, reason: 'wildcard-covers-state' }
		}
		return { theme: update.theme, promoted: false, reason: 'wildcard-state-override' }
	}

	const targetDirective =
		model.directives.find(
			(directive) => directive.theme === update.theme && directive.state === update.state,
		) ?? null
	const nextValues = computeNextDirectiveValues(targetDirective, update.width, update.height)
	const nextSignature = directiveValuesSignature(nextValues.widthMappings, nextValues.fallbacks)

	const matchingDirective = model.directives.find((directive) => {
		if (directive.theme === '*') return false
		if (directive.state !== update.state) return false
		const signature = directiveValuesSignature(directive.widthMappings, directive.fallbacks)
		return signature === nextSignature
	})

	if (!matchingDirective) {
		return { theme: update.theme, promoted: false, reason: 'no-matching-values' }
	}

	if (matchingDirective.theme !== '*') {
		matchingDirective.theme = '*'
		model.lines[matchingDirective.lineIndex] = formatDirective(
			matchingDirective.theme,
			matchingDirective.state,
			matchingDirective.widthMappings,
			matchingDirective.fallbacks,
		)
		model.dirty = true
		return { theme: '*', promoted: true, reason: 'promoted-matching-directive' }
	}

	return { theme: '*', promoted: false, reason: 'already-wildcard' }
}

function upsertDirectiveWithMeasurement(model, theme, state, requestedWidth, measuredHeight) {
	const key = directiveKey(theme, state)
	const directives = model.directives
	const existingIndex = directives.findIndex(
		(directive) => directiveKey(directive.theme, directive.state) === key,
	)

	if (existingIndex === -1) {
		const newDirective = {
			lineIndex: model.lines.length,
			theme,
			state,
			widthMappings: [{ width: requestedWidth, height: measuredHeight }],
			fallbacks: [measuredHeight],
		}
		model.lines.push(
			formatDirective(
				newDirective.theme,
				newDirective.state,
				newDirective.widthMappings,
				newDirective.fallbacks,
			),
		)
		directives.push(newDirective)
		model.dirty = true
		return { action: 'created' }
	}

	const directive = directives[existingIndex]
	const nextValues = applyMeasurementToDirectiveValues(
		directive.widthMappings,
		directive.fallbacks,
		requestedWidth,
		measuredHeight,
	)

	directive.widthMappings = nextValues.widthMappings
	directive.fallbacks = nextValues.fallbacks
	const formatted = formatDirective(
		directive.theme,
		directive.state,
		nextValues.widthMappings,
		nextValues.fallbacks,
	)
	model.lines[directive.lineIndex] = formatted
	model.dirty = true
	return { action: nextValues.action }
}

export async function applyWritebackQueue(writebackQueue, componentCache) {
	const results = []
	for (const [filePath, updates] of writebackQueue.entries()) {
		const model = await loadComponentModel(filePath, componentCache)
		for (const update of updates.values()) {
			const canonical = canonicalizeWritebackTheme(model, update)

			if (update.state !== null) {
				const stateDirective = findDirective(model, canonical.theme, update.state)
				const nextStateValues = computeNextDirectiveValues(
					stateDirective,
					update.width,
					update.height,
				)
				const staticDirective = resolveStaticDirectiveForTheme(model, canonical.theme)
				const isRedundantToStatic =
					staticDirective !== null &&
					directiveValuesSignature(
						nextStateValues.widthMappings,
						nextStateValues.fallbacks,
					) ===
						directiveValuesSignature(
							staticDirective.widthMappings,
							staticDirective.fallbacks,
						)

				if (isRedundantToStatic) {
					const removed = removeDirective(model, stateDirective)
					results.push({
						filePath,
						theme: canonical.theme,
						originalTheme: update.theme,
						state: update.state,
						canonicalReason: canonical.reason,
						promoted: canonical.promoted,
						action: removed ? 'removed-redundant-state' : 'skipped-redundant-state',
					})
					continue
				}
			}

			const result = upsertDirectiveWithMeasurement(
				model,
				canonical.theme,
				update.state,
				update.width,
				update.height,
			)

			if (canonical.theme === '*' && update.theme !== '*') {
				const wildcardDirective = findDirective(model, '*', update.state)
				const themeDirective = findDirective(model, update.theme, update.state)
				if (wildcardDirective && themeDirective) {
					const wildcardSignature = directiveValuesSignature(
						wildcardDirective.widthMappings,
						wildcardDirective.fallbacks,
					)
					const themeSignature = directiveValuesSignature(
						themeDirective.widthMappings,
						themeDirective.fallbacks,
					)
					if (wildcardSignature === themeSignature) {
						removeDirective(model, themeDirective)
					}
				}
			}

			results.push({
				filePath,
				theme: canonical.theme,
				originalTheme: update.theme,
				state: update.state,
				canonicalReason: canonical.reason,
				promoted: canonical.promoted,
				action: result.action,
			})
		}
	}
	return results
}
