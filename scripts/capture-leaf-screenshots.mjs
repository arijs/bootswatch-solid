import { readFile } from 'node:fs/promises'

import {
	BASE_URL,
	INDEX_FILE,
	THEMES_FILE,
} from './capture-leaf-screenshots/constants.mjs'
import {
	assertBuildOutputExists,
	buildProject,
	startDevServer,
	startPreviewServer,
	stopServer,
	waitForServer,
} from './capture-leaf-screenshots/preview-server.mjs'
import {
	parseThemeNames,
	getLeafRoutes,
	parseRoutesAndComponents,
} from './capture-leaf-screenshots/discovery.mjs'
import {
	assertCuratedScenarioRoutes,
	createScenarioCatalog,
	filterScenarios,
	filterThemes,
} from './capture-leaf-screenshots/scenarios.mjs'
import { parseCaptureCli } from './capture-leaf-screenshots/cli.mjs'
import { executeCaptureWorkflow } from './capture-leaf-screenshots/workflow.mjs'

const {
	skipExisting,
	buildBeforeCapture,
	writebackEnabled,
	dryRunWriteback,
	cssExtractionEnabled,
	verificationEnabled,
	verificationMaxDiffRatio,
	strictScenarioAssert,
	routeFilter,
	themeFilter,
	stateFilter,
	requestedWidth,
} = parseCaptureCli()

async function main() {
	const indexSource = await readFile(INDEX_FILE, 'utf8')
	const themeSource = await readFile(THEMES_FILE, 'utf8')

	const { routes, routeToComponentFile } = parseRoutesAndComponents(indexSource, INDEX_FILE)
	const leafRoutes = getLeafRoutes(routes)
	assertCuratedScenarioRoutes(leafRoutes, strictScenarioAssert)
	const themes = filterThemes(parseThemeNames(themeSource), themeFilter)
	const scenarios = filterScenarios(createScenarioCatalog(leafRoutes), routeFilter, stateFilter)
	const totalCapturesPlanned = themes.length * scenarios.length

	if (leafRoutes.length === 0) {
		throw new Error('No leaf routes found in src/index.tsx for /contents, /forms, /ui')
	}
	if (themes.length === 0) {
		throw new Error('No themes selected after filter')
	}
	if (scenarios.length === 0) {
		throw new Error('No scenarios selected after filter')
	}

	const unresolvedRoutes = leafRoutes.filter((route) => !routeToComponentFile.has(route))
	if (unresolvedRoutes.length > 0) {
		console.warn(`Warning: ${unresolvedRoutes.length} leaf route(s) missing component mapping.`)
	}

	console.log(`Found ${leafRoutes.length} leaf routes across target sections.`)
	console.log(`Found ${themes.length} themes.`)
	console.log(`Planned scenarios per theme: ${scenarios.length}`)
	console.log(`Total captures planned: ${totalCapturesPlanned}`)
	if (skipExisting) {
		console.log('Mode: skipping screenshots that already exist (--skip-existing).')
	}
	if (!writebackEnabled) {
		console.log('Mode: writeback disabled (--no-writeback).')
	}
	if (dryRunWriteback) {
		console.log('Mode: dry-run writeback enabled (--dry-run-writeback).')
	}
	if (!cssExtractionEnabled) {
		console.log('Mode: CSS extraction disabled (--no-css-extraction).')
	}
	if (verificationEnabled) {
		console.log(
			`Mode: CSS verification enabled (--verify-css-rendering, maxDiffRatio=${verificationMaxDiffRatio}).`,
		)
	}
	if (strictScenarioAssert) {
		console.log('Mode: strict scenario assertions enabled (--strict-scenarios).')
	}
	if (buildBeforeCapture) {
		console.log('Mode: build enabled (--build).')
	} else {
		console.log('Mode: reusing existing build output (default).')
	}
	if (verificationEnabled) {
		console.log('Mode: using dev server for verification to serve live local CSS artifacts.')
	}

	if (!verificationEnabled) {
		if (buildBeforeCapture) {
			console.log('Building project for screenshot capture...')
			buildProject()
		} else {
			assertBuildOutputExists()
		}
	}
	const previewServer = verificationEnabled ? startDevServer() : startPreviewServer()

	try {
		await waitForServer(BASE_URL)
		await executeCaptureWorkflow({
			themes,
			scenarios,
			routeToComponentFile,
			requestedWidth,
			routeFilter,
			stateFilter,
			skipExisting,
			writebackEnabled,
			dryRunWriteback,
			cssExtractionEnabled,
			verificationEnabled,
			verificationMaxDiffRatio,
		})
	} finally {
		await stopServer(previewServer)
	}
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
