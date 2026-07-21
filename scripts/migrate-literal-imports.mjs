#!/usr/bin/env node
/**
 * Migrates UI component class imports in styles.css.ts from literal/contract.css
 * to canonical per-family contracts (ui/alerts/contract.css, etc.).
 *
 * Strategy: scan all component TSX files to discover which classes they import
 * from canonical contracts. Only those classes are moved in styles.css.ts.
 * Classes that components still import from literal/contract.css are left there.
 *
 * Usage: node scripts/migrate-literal-imports.mjs [--dry-run]
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const stylesFile = resolve(repoRoot, 've-project2/src/themes/bootstrap/literal/styles.css.ts')
const componentsDir = resolve(repoRoot, 've-project2/src/components')
const DRY_RUN = process.argv.includes('--dry-run')

function findTsxFiles(dir) {
	const results = []
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const full = resolve(dir, entry.name)
		if (entry.isDirectory()) results.push(...findTsxFiles(full))
		else if (entry.name.endsWith('.tsx')) results.push(full)
	}
	return results
}

/**
 * Parses all imports from a TSX file. Returns Map<importPath, Set<className>>.
 * Only tracks imports from theme-contract/* paths.
 */
function parseImports(content) {
	const imports = new Map()
	// Match multi-line and single-line imports from theme-contract
	const importRe = /import\s*\{([^}]+)\}\s*from\s*'([^']*theme-contract[^']*)'/g
	let m
	// biome-ignore lint/suspicious/noAssignInExpressions: idioma de iteração com regex.exec()
	while ((m = importRe.exec(content)) !== null) {
		const path = m[2]
		const classes = m[1]
			.split(',')
			.map((s) => s.trim())
			.filter((s) => s.length > 0)
		if (!imports.has(path)) imports.set(path, new Set())
		for (const cls of classes) imports.get(path).add(cls)
	}
	return imports
}

// Collect which canonical contracts components import from, and which classes
// Map<canonicalPath, Set<className>>
const canonicalUsage = new Map()

for (const file of findTsxFiles(componentsDir)) {
	const content = readFileSync(file, 'utf8')
	const imports = parseImports(content)

	for (const [path, classes] of imports) {
		// Skip literal/contract.css — those are already using the literal hash
		if (path.includes('literal/contract')) continue
		// Only care about ui/* canonical contracts
		if (!path.match(/theme-contract\/ui\/\w/)) continue

		// Normalize to contract path suffix
		const suffix = path.replace(/.*theme-contract\//, '')
		if (!canonicalUsage.has(suffix)) canonicalUsage.set(suffix, new Set())
		for (const cls of classes) canonicalUsage.get(suffix).add(cls)
	}
}

console.log('Canonical contract usage found in components:')
for (const [path, classes] of [...canonicalUsage].sort(([a], [b]) => a.localeCompare(b))) {
	console.log(`  ${path}: ${classes.size} classes`)
}

// Now update styles.css.ts
let content = readFileSync(stylesFile, 'utf8')

const literalImportRe =
	/import \{([^}]+)\} from '\.\.\/\.\.\/\.\.\/theme-contract\/literal\/contract\.css'/s
const literalMatch = content.match(literalImportRe)
if (!literalMatch) {
	console.error('Could not find literal/contract.css import block')
	process.exit(1)
}

const literalClasses = new Set(
	literalMatch[1]
		.split(',')
		.map((s) => s.trim())
		.filter((s) => s.length > 0),
)
console.log(`\nLiteral import has ${literalClasses.size} classes`)

// For each canonical contract that components use, determine which classes to move
const toMigrate = [] // { importPath, classes }
const movedClasses = new Set()

for (const [suffix, componentClasses] of [...canonicalUsage].sort(([a], [b]) =>
	a.localeCompare(b),
)) {
	// Only move classes that are currently in the literal import
	const toMove = [...componentClasses].filter((c) => literalClasses.has(c)).sort()
	if (toMove.length === 0) continue

	const importPath = `../../../theme-contract/${suffix}`
	toMigrate.push({ importPath, classes: toMove })
	for (const c of toMove) movedClasses.add(c)

	console.log(`  Moving to ${suffix}: ${toMove.join(', ')}`)
}

const remainingLiteral = [...literalClasses].filter((c) => !movedClasses.has(c)).sort()
console.log(
	`\nLiteral import: ${literalClasses.size} → ${remainingLiteral.length} classes after migration`,
)
console.log(`Migrating ${movedClasses.size} classes to canonical contracts`)

// Build new literal import block
const newLiteralImport = `import {\n\t${remainingLiteral.join(',\n\t')},\n} from '../../../theme-contract/literal/contract.css'`

// Build new canonical import blocks
const newCanonicalBlocks = toMigrate
	.map(
		({ importPath, classes }) =>
			`import {\n\t${classes.join(',\n\t')},\n} from '${importPath}'`,
	)
	.join('\n')

// Replace: insert canonical blocks before the literal import
const insertionPoint = literalMatch.index
const literalEnd = insertionPoint + literalMatch[0].length

content =
	content.slice(0, insertionPoint) +
	newCanonicalBlocks +
	'\n' +
	newLiteralImport +
	content.slice(literalEnd)

if (!DRY_RUN) {
	writeFileSync(stylesFile, content)
	console.log('\nWrote updated styles.css.ts')
} else {
	console.log('\n[DRY RUN] Would update styles.css.ts')
}
