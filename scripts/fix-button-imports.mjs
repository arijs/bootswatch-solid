import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const BUTTONS_DIR = path.join(ROOT, 've-project', 'src', 'components', 'ui', 'buttons')

async function* walkDir(dir) {
	const entries = await readdir(dir, { withFileTypes: true })
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name)
		if (entry.isDirectory()) {
			yield* walkDir(fullPath)
		} else if (entry.isFile() && entry.name.endsWith('.tsx')) {
			yield fullPath
		}
	}
}

function updateImports(content, filePath) {
	const relativePath = path.relative(
		path.dirname(filePath),
		path.join(ROOT, 've-project', 'src', 'themes', 'bootstrap', 'ui', 'buttons'),
	)
	const relPath = relativePath.split(path.sep).join('/')

	// Match imports from generated.css that include btn
	const generatedImportRegex =
		/import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]([^'"]*generated\.css)['"]/g

	let updated = content
	let hasChanges = false

	for (const match of content.matchAll(generatedImportRegex)) {
		const imports = match[1]
		const importPath = match[2]

		// Split imports by comma
		const importList = imports
			.split(',')
			.map((i) => i.trim())
			.filter(Boolean)

		// Check if btn is in the imports
		if (!importList.includes('btn')) {
			continue
		}

		hasChanges = true

		// Separate btn from other imports
		const btnIndex = importList.indexOf('btn')
		const otherImports = [...importList.slice(0, btnIndex), ...importList.slice(btnIndex + 1)]

		// Create new imports
		let newImports = `import { btn } from '${relPath}/base.css'`

		if (otherImports.length > 0) {
			newImports +=
				`\n` + `import { ${otherImports.join(', ')} } from '${relPath}/generated.css'`
		}

		// Replace the old import with new imports
		updated = updated.replace(match[0], newImports)
	}

	return { updated, hasChanges }
}

async function main() {
	let filesProcessed = 0
	let filesUpdated = 0

	for await (const file of walkDir(BUTTONS_DIR)) {
		const content = await readFile(file, 'utf8')
		const { updated, hasChanges } = updateImports(content, file)

		if (hasChanges) {
			await writeFile(file, updated, 'utf8')
			filesUpdated++
		}

		filesProcessed++
	}

	console.log(`Processed ${filesProcessed} files, updated ${filesUpdated} files.`)
}

await main()
