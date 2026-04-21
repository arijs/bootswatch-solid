import { readdir, rm, stat, unlink } from 'node:fs/promises'
import path from 'node:path'

export async function pathExists(filePath) {
	try {
		await stat(filePath)
		return true
	} catch {
		return false
	}
}

export async function removeScreenshotsForWidthWithDifferentHeight(folderPath, width, keepHeight) {
	if (!(await pathExists(folderPath))) {
		return 0
	}

	let deletedCount = 0
	const entries = await readdir(folderPath, { withFileTypes: true })
	for (const entry of entries) {
		if (!entry.isFile()) continue
		const match = entry.name.match(/^(\d+)x(\d+)(?:\.verify(?:\.diff)?)?\.png$/)
		if (!match) continue

		const entryWidth = Number.parseInt(match[1], 10)
		const entryHeight = Number.parseInt(match[2], 10)
		if (entryWidth !== width || entryHeight === keepHeight) continue

		await unlink(path.join(folderPath, entry.name))
		deletedCount += 1
	}

	return deletedCount
}

export function normalizeRelativePath(relPath) {
	if (!relPath) return ''
	return relPath.split(path.sep).join('/')
}

function shouldPreserveThemeRootFile(relativePath) {
	const normalized = normalizeRelativePath(relativePath)
	return normalized === 'theme.css'
}

function isWithinMappedFolder(relativePath, mappedFolders) {
	if (mappedFolders.size === 0) return false
	const normalized = normalizeRelativePath(relativePath)
	return [...mappedFolders].some(
		(folder) => normalized === folder || normalized.startsWith(`${folder}/`),
	)
}

function shouldKeepDirectory(relativeDirPath, mappedFolders) {
	if (mappedFolders.size === 0) return false
	const normalized = normalizeRelativePath(relativeDirPath)
	return [...mappedFolders].some(
		(folder) =>
			normalized === folder ||
			folder.startsWith(`${normalized}/`) ||
			normalized.startsWith(`${folder}/`),
	)
}

export async function pruneThemeFolder(themeRootPath, mappedFolders) {
	if (!(await pathExists(themeRootPath))) {
		return { deletedFiles: 0, deletedDirs: 0 }
	}

	let deletedFiles = 0
	let deletedDirs = 0

	async function walk(currentAbsolutePath, currentRelativePath = '') {
		const entries = await readdir(currentAbsolutePath, { withFileTypes: true })

		for (const entry of entries) {
			const absolutePath = path.join(currentAbsolutePath, entry.name)
			const relativePath = currentRelativePath
				? path.join(currentRelativePath, entry.name)
				: entry.name

			if (entry.isDirectory()) {
				if (!shouldKeepDirectory(relativePath, mappedFolders)) {
					await rm(absolutePath, { recursive: true, force: true })
					deletedDirs += 1
					continue
				}
				await walk(absolutePath, relativePath)
				continue
			}

			if (!isWithinMappedFolder(relativePath, mappedFolders)) {
				if (shouldPreserveThemeRootFile(relativePath)) {
					continue
				}
				await unlink(absolutePath)
				deletedFiles += 1
			}
		}
	}

	await walk(themeRootPath)
	return { deletedFiles, deletedDirs }
}
