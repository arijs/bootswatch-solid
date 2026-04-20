import { readFile, writeFile } from 'node:fs/promises'

import { directiveKey, parseDirectivesFromLines, stripTrailingBlankLines } from './directives.mjs'

export async function loadComponentModel(filePath, cache) {
	if (cache.has(filePath)) return cache.get(filePath)
	const source = await readFile(filePath, 'utf8')
	const newline = source.includes('\r\n') ? '\r\n' : '\n'
	const lines = stripTrailingBlankLines(source.split(/\r?\n/))
	const directives = parseDirectivesFromLines(lines)
	const model = {
		filePath,
		newline,
		lines,
		directives,
		dirty: false,
	}
	cache.set(filePath, model)
	return model
}

export async function persistComponentModels(cache) {
	const modified = []
	for (const model of cache.values()) {
		if (!model.dirty) continue
		const normalizedLines = stripTrailingBlankLines(model.lines)
		const output = `${normalizedLines.join(model.newline)}${model.newline}`
		await writeFile(model.filePath, output, 'utf8')
		modified.push(model.filePath)
	}
	return modified
}

export function recordWritebackMeasure(writebackQueue, filePath, theme, state, width, height) {
	if (!writebackQueue.has(filePath)) {
		writebackQueue.set(filePath, new Map())
	}
	const fileMap = writebackQueue.get(filePath)
	const key = directiveKey(theme, state)
	const existing = fileMap.get(key)
	if (!existing) {
		fileMap.set(key, { theme, state, width, height })
		return
	}
	fileMap.set(key, { theme, state, width, height: Math.max(existing.height, height) })
}
