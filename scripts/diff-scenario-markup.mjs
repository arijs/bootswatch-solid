import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import { ROOT } from './capture-leaf-screenshots/constants.mjs'
import {
	getLeafRoutes,
	parseRoutesAndComponents,
} from './capture-leaf-screenshots/discovery.mjs'
import { pathExists } from './capture-leaf-screenshots/folder-pruning.mjs'
import { diffMarkupArtifacts } from './capture-leaf-screenshots/markup-diff-core.mjs'
import { formatMarkupDiffAsMarkdown } from './capture-leaf-screenshots/markup-diff-report.mjs'
import {
	createScenarioCatalog,
	filterScenarios,
	getScenarioStateFolder,
} from './capture-leaf-screenshots/scenarios.mjs'
import { parseCsvArg, slugifyTheme } from './capture-leaf-screenshots/utils.mjs'

function parseArg(argv, name) {
	const prefix = `${name}=`
	const arg = argv.find((entry) => entry.startsWith(prefix))
	return arg ? arg.slice(prefix.length) : null
}

function parseCli(argv = process.argv.slice(2)) {
	const theme = parseArg(argv, '--theme')
	const strict = argv.includes('--strict')
	const includeText = argv.includes('--include-text')
	const maxNodesRaw = parseArg(argv, '--max-nodes')
	const maxNodes = maxNodesRaw ? Number.parseInt(maxNodesRaw, 10) : 25
	const routeFilter = parseCsvArg(argv, '--route')
	const stateFilter = parseCsvArg(argv, '--state')

	if (!theme) {
		throw new Error(
			'Usage: node scripts/diff-scenario-markup.mjs --theme=<theme> [--route=<routeA,globB,...>] [--state=<stateA,stateB,...>] [--max-nodes=25] [--strict] [--include-text]',
		)
	}
	if (!Number.isFinite(maxNodes) || maxNodes <= 0) {
		throw new Error('--max-nodes must be a positive integer')
	}

	return {
		themeSlug: slugifyTheme(theme),
		routeFilter,
		stateFilter,
		strict,
		includeText,
		maxNodes,
	}
}

async function resolveSelectedScenarios(routeFilter, stateFilter) {
	const indexPath = path.join(ROOT, 'src', 'index.tsx')
	const indexSource = await readFile(indexPath, 'utf8')
	const { routes } = parseRoutesAndComponents(indexSource, indexPath)
	const leafRoutes = getLeafRoutes(routes)

	if (leafRoutes.length === 0) {
		throw new Error('No leaf routes found in src/index.tsx for /contents, /forms, /ui')
	}

	const selectedScenarios = filterScenarios(
		createScenarioCatalog(leafRoutes),
		routeFilter,
		stateFilter,
	)

	if (selectedScenarios.length === 0) {
		throw new Error('No scenarios selected after applying --route/--state filters.')
	}

	return selectedScenarios
}

function countChanges(diff) {
	return (
		diff.summary.addedNodeCount +
		diff.summary.removedNodeCount +
		diff.summary.changedNodeCount +
		diff.summary.addedPropertyCount +
		diff.summary.removedPropertyCount +
		diff.summary.changedPropertyCount
	)
}

async function main() {
	const { themeSlug, routeFilter, stateFilter, strict, includeText, maxNodes } = parseCli()
	const selectedScenarios = await resolveSelectedScenarios(routeFilter, stateFilter)
	let strictChangedCount = 0
	const missingArtifacts = []

	for (const scenario of selectedScenarios) {
		const { route } = scenario
		const stateFolder = getScenarioStateFolder(scenario.state)
		const routePath = route.replace(/^\//, '')
		const scenarioDir = path.join(ROOT, 'screenshots', themeSlug, routePath, stateFolder)
		const baselineMarkupPath = path.join(scenarioDir, 'markup.html')
		const veMarkupPath = path.join(scenarioDir, 'markup-ve.html')
		const jsonOutPath = path.join(scenarioDir, 'markup.diff.json')
		const markdownOutPath = path.join(scenarioDir, 'markup.diff.md')

		const [hasBaseline, hasVe] = await Promise.all([
			pathExists(baselineMarkupPath),
			pathExists(veMarkupPath),
		])

		if (!hasBaseline || !hasVe) {
			missingArtifacts.push({
				route,
				stateFolder,
				hasBaseline,
				hasVe,
			})
			continue
		}

		const [baselineMarkup, veMarkup] = await Promise.all([
			readFile(baselineMarkupPath, 'utf8'),
			readFile(veMarkupPath, 'utf8'),
		])

		const diff = diffMarkupArtifacts(baselineMarkup, veMarkup, {
			preferredStyleAttr: 'style-modified',
			includeText,
		})
		const markdown = formatMarkupDiffAsMarkdown(diff, { maxNodes })

		await Promise.all([
			writeFile(jsonOutPath, `${JSON.stringify(diff, null, 2)}\n`, 'utf8'),
			writeFile(markdownOutPath, markdown, 'utf8'),
		])

		console.log(`[${route} @ ${stateFolder}] Wrote ${path.relative(ROOT, jsonOutPath)}`)
		console.log(`[${route} @ ${stateFolder}] Wrote ${path.relative(ROOT, markdownOutPath)}`)

		if (strict) {
			strictChangedCount += countChanges(diff)
		}
	}

	console.log(
		`Processed ${selectedScenarios.length - missingArtifacts.length}/${selectedScenarios.length} scenario(s) for theme=${themeSlug}.`,
	)

	if (missingArtifacts.length > 0) {
		const details = missingArtifacts
			.map(({ route, stateFolder, hasBaseline, hasVe }) => {
				const missing = [
					hasBaseline ? null : 'markup.html',
					hasVe ? null : 'markup-ve.html',
				]
					.filter(Boolean)
					.join(', ')
				return `${route} @ ${stateFolder} (missing: ${missing})`
			})
			.join('\n')
		throw new Error(
			`Missing markup artifacts for ${missingArtifacts.length} route(s):\n${details}`,
		)
	}

	if (strict && strictChangedCount > 0) {
		throw new Error(
			`Strict mode failed: markup diff has ${strictChangedCount} change(s) across selected routes.`,
		)
	}
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
