#!/usr/bin/env node
/**
 * Adds el* contract classes to all VE component elements.
 * Every <button> gets elButton, <input> gets elInput, <select> gets elSelect, <label> gets elLabel.
 * Imports are updated automatically.
 *
 * Usage: node scripts/add-el-classes.mjs [--dry-run]
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const globalElementsContractAbs = resolve(
	repoRoot,
	've-project2/src/theme-contract/global-elements/contract.css',
)

const ELEMENTS = [
	{ tag: 'button', elClass: 'elButton' },
	{ tag: 'input', elClass: 'elInput' },
	{ tag: 'select', elClass: 'elSelect' },
	{ tag: 'label', elClass: 'elLabel' },
]

const DRY_RUN = process.argv.includes('--dry-run')

function findTsxFiles(dir) {
	const results = []
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = resolve(dir, entry.name)
		if (entry.isDirectory()) {
			results.push(...findTsxFiles(full))
		} else if (entry.name.endsWith('.tsx')) {
			results.push(full)
		}
	}
	return results
}

/**
 * Finds the position of the closing `>` of a JSX opening tag.
 * Handles quoted attributes and template literals correctly.
 */
function findTagEnd(content, startPos) {
	let i = startPos + 1
	let inQuote = null
	let inBacktick = false
	let braceDepth = 0

	while (i < content.length) {
		const ch = content[i]

		if (inQuote) {
			if (ch === '\\') {
				i += 2
				continue
			}
			if (ch === inQuote) inQuote = null
		} else if (inBacktick) {
			if (ch === '\\') {
				i += 2
				continue
			}
			if (ch === '`') {
				inBacktick = false
			} else if (ch === '$' && content[i + 1] === '{') {
				// Skip template expression ${...}, tracking brace depth
				i += 2
				let depth = 1
				while (i < content.length && depth > 0) {
					if (content[i] === '{') depth++
					else if (content[i] === '}') depth--
					i++
				}
				continue
			}
		} else {
			if (ch === '"' || ch === "'") {
				inQuote = ch
			} else if (ch === '`') {
				inBacktick = true
			} else if (ch === '{') {
				braceDepth++
			} else if (ch === '}') {
				braceDepth--
			} else if (ch === '>' && braceDepth === 0) {
				return i
			} else if (ch === '/' && content[i + 1] === '>' && braceDepth === 0) {
				return i + 1
			}
		}
		i++
	}
	return -1
}

function getImportRelPath(filePath) {
	const fileDir = dirname(filePath)
	const rel = relative(fileDir, globalElementsContractAbs).replace(/\\/g, '/')
	return rel.startsWith('.') ? rel : `./${rel}`
}

function processFile(filePath) {
	const content = readFileSync(filePath, 'utf8')
	const neededEls = new Set()
	const replacements = [] // { pos, text } insertions

	for (const { tag, elClass } of ELEMENTS) {
		const tagRe = new RegExp(`<${tag}\\b`, 'g')
		const elPlaceholder = `\${${elClass}}`
		let m = tagRe.exec(content)
		while (m !== null) {
			const tagStart = m.index
			const tagEnd = findTagEnd(content, tagStart)
			if (tagEnd >= 0) {
				const tagContent = content.slice(tagStart, tagEnd + 1)
				const classPattern = 'class={`${theme} '
				const classIdx = tagContent.indexOf(classPattern)
				if (classIdx >= 0) {
					const afterPos = classIdx + classPattern.length
					if (!tagContent.slice(afterPos).startsWith(elPlaceholder)) {
						replacements.push({ pos: tagStart + afterPos, text: `${elPlaceholder} ` })
						neededEls.add(elClass)
					}
				}
			}
			m = tagRe.exec(content)
		}
	}

	if (replacements.length === 0) return false

	// Apply replacements from end to start to preserve positions
	replacements.sort((a, b) => b.pos - a.pos)
	let result = content
	for (const { pos, text } of replacements) {
		result = result.slice(0, pos) + text + result.slice(pos)
	}

	// Update imports
	const importRelPath = getImportRelPath(filePath)

	// Check for existing import from global-elements
	const existingImportRe = /import\s*\{([^}]+)\}\s*from\s*'([^']*global-elements\/contract\.css)'/
	const existingMatch = result.match(existingImportRe)

	if (existingMatch) {
		const existingPath = existingMatch[2]
		const existingClasses = existingMatch[1]
			.split(',')
			.map((s) => s.trim())
			.filter((s) => s.length > 0)

		const toAdd = [...neededEls].filter((el) => !existingClasses.includes(el))
		if (toAdd.length > 0) {
			const allClasses = [...existingClasses, ...toAdd].sort()
			const newImport = `import {\n\t${allClasses.join(',\n\t')},\n} from '${existingPath}'`
			result = result.replace(existingMatch[0], newImport)
		}
	} else {
		// Add new import — insert after the last import block
		const fromLineRe = /^(?:} from '[^']+'\n|import [^\n]+'[^']+'\n)/gm
		const allFromMatches = [...result.matchAll(fromLineRe)]
		let insertPos = 0
		if (allFromMatches.length > 0) {
			const lastMatch = allFromMatches[allFromMatches.length - 1]
			insertPos = lastMatch.index + lastMatch[0].length
		}

		const elsList = [...neededEls]
			.sort()
			.map((el) => `\t${el},`)
			.join('\n')
		const newImport = `import {\n${elsList}\n} from '${importRelPath}'\n`
		result = result.slice(0, insertPos) + newImport + result.slice(insertPos)
	}

	if (!DRY_RUN) {
		writeFileSync(filePath, result)
	}
	return true
}

const componentsDir = resolve(repoRoot, 've-project2/src/components')
const files = findTsxFiles(componentsDir)
let modifiedCount = 0
const errors = []

for (const filePath of files) {
	try {
		if (processFile(filePath)) {
			const rel = relative(repoRoot, filePath).replace(/\\/g, '/')
			console.log(`${DRY_RUN ? '[DRY] ' : ''}Modified: ${rel}`)
			modifiedCount++
		}
	} catch (e) {
		const rel = relative(repoRoot, filePath).replace(/\\/g, '/')
		errors.push(`${rel}: ${e.message}`)
	}
}

console.log(
	`\n${DRY_RUN ? '[DRY RUN] ' : ''}Done. Modified ${modifiedCount}/${files.length} files.`,
)
if (errors.length > 0) {
	console.error('Errors:')
	for (const e of errors) console.error(`  ${e}`)
}
