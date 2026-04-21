import { lstat, rm, symlink } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

async function pathStatus(targetPath) {
	try {
		const stat = await lstat(targetPath)
		return stat
	} catch {
		return null
	}
}

async function createThemeLink() {
	const root = process.cwd()
	const publicThemePath = path.join(root, 'public', 'theme')
	const screenshotsPath = path.join(root, 'screenshots')
	const relativeTarget = path.relative(path.dirname(publicThemePath), screenshotsPath)

	const existing = await pathStatus(publicThemePath)
	if (existing && !existing.isSymbolicLink()) {
		console.warn(
			`Skipped link creation: public/theme already exists and is not a symlink/junction (${publicThemePath}).`,
		)
		return
	}

	if (existing) {
		await rm(publicThemePath, { recursive: true, force: true })
	}

	try {
		await symlink(relativeTarget, publicThemePath, 'dir')
		console.log(`Linked public/theme -> ${relativeTarget} (symlink)`)
		return
	} catch (symlinkError) {
		if (process.platform !== 'win32') {
			console.warn(`Unable to create public/theme symlink: ${String(symlinkError)}`)
			return
		}
	}

	try {
		await symlink(screenshotsPath, publicThemePath, 'junction')
		console.log(`Linked public/theme -> ${screenshotsPath} (junction)`)
	} catch (junctionError) {
		console.warn(
			`Unable to create public/theme link (symlink+junction failed): ${String(junctionError)}`,
		)
	}
}

await createThemeLink()
