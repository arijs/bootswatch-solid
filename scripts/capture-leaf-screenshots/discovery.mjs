import { existsSync } from 'node:fs'
import path from 'node:path'

import { TARGET_PREFIXES } from './constants.mjs'

export function parseThemeNames(themeSource) {
	const names = []
	const themeRegex = /name:\s*`([^`]+)`/g

	for (const match of themeSource.matchAll(themeRegex)) {
		names.push(match[1])
	}

	if (names.length === 0) {
		throw new Error('No theme names found in src/logic/themes.ts')
	}

	return names
}

export function getLeafRoutes(paths) {
	return paths.filter((candidate) => {
		if (TARGET_PREFIXES.includes(candidate)) return false
		return !paths.some((other) => other !== candidate && other.startsWith(`${candidate}/`))
	})
}

function resolveImportToFile(indexFilePath, importPath) {
	if (!importPath.startsWith('.')) return null
	const absoluteImport = path.resolve(path.dirname(indexFilePath), importPath)
	const candidates = [
		absoluteImport,
		`${absoluteImport}.tsx`,
		`${absoluteImport}.ts`,
		path.join(absoluteImport, 'index.tsx'),
	]

	for (const candidate of candidates) {
		if (existsSync(candidate)) {
			return candidate
		}
	}

	return null
}

export function parseRoutesAndComponents(indexSource, indexFilePath) {
	const importMap = new Map()
	const routes = []
	const routeToComponentFile = new Map()
	const importRegex = /^import\s+([A-Za-z_$][A-Za-z0-9_$]*)\s+from\s+['"]([^'"]+)['"]/gm
	const routeRegex = /<Route\s+path="([^"]+)"\s+component=\{([^}]+)\}\s*\/>/g

	for (const match of indexSource.matchAll(importRegex)) {
		const symbol = match[1]
		const importPath = match[2]
		const resolved = resolveImportToFile(indexFilePath, importPath)
		if (resolved) {
			importMap.set(symbol, resolved)
		}
	}

	for (const match of indexSource.matchAll(routeRegex)) {
		const routePath = match[1]
		const componentSymbol = match[2].trim()

		if (!TARGET_PREFIXES.some((prefix) => routePath.startsWith(prefix))) {
			continue
		}

		routes.push(routePath)
		const componentFile = importMap.get(componentSymbol)
		if (componentFile) {
			routeToComponentFile.set(routePath, componentFile)
		}
	}

	return {
		routes: [...new Set(routes)].sort(),
		routeToComponentFile,
	}
}
