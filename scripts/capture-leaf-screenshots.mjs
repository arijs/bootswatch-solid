import { readFile } from 'node:fs/promises'
import { parseCaptureCli } from './capture-leaf-screenshots/cli.mjs'
import {
	BASE_URL,
	INDEX_FILE,
	THEMES_FILE,
	VE_BASE_URL,
	VE_INDEX_FILE,
} from './capture-leaf-screenshots/constants.mjs'
import {
	getLeafRoutes,
	parseRoutesAndComponents,
	parseThemeNames,
} from './capture-leaf-screenshots/discovery.mjs'
import {
	assertBuildOutputExists,
	assertVeBuildOutputExists,
	buildProject,
	buildVeProject,
	startPreviewServer,
	startVePreviewServer,
	stopServer,
	waitForServer,
} from './capture-leaf-screenshots/preview-server.mjs'
import {
	assertCuratedScenarioRoutes,
	createScenarioCatalog,
	filterScenarios,
	filterThemes,
} from './capture-leaf-screenshots/scenarios.mjs'
import { executeCaptureWorkflow } from './capture-leaf-screenshots/workflow.mjs'

const {
	skipExisting,
	buildBeforeCapture,
	writebackEnabled,
	dryRunWriteback,
	cssExtractionEnabled,
	verificationEnabled,
	veVerificationEnabled,
	verificationMaxDiffRatio,
	strictScenarioAssert,
	routeFilter,
	themeFilter,
	stateFilter,
	maxThemes,
	requestedWidth,
} = parseCaptureCli()

async function main() {
	const indexSource = await readFile(INDEX_FILE, 'utf8')
	const themeSource = await readFile(THEMES_FILE, 'utf8')
	const veIndexSource = veVerificationEnabled ? await readFile(VE_INDEX_FILE, 'utf8') : null

	const { routes, routeToComponentFile } = parseRoutesAndComponents(indexSource, INDEX_FILE)
	const leafRoutes = getLeafRoutes(routes)
	const veLeafRoutes = veIndexSource
		? getLeafRoutes(parseRoutesAndComponents(veIndexSource, VE_INDEX_FILE).routes)
		: []
	const veRouteSet = new Set(veLeafRoutes)
	assertCuratedScenarioRoutes(leafRoutes, strictScenarioAssert)
	let themes = filterThemes(parseThemeNames(themeSource), themeFilter)
	const scenarios = filterScenarios(createScenarioCatalog(leafRoutes), routeFilter, stateFilter)

	// Apply max-themes limit for safety
	const themesBeforeLimit = themes.length
	themes = themes.slice(0, maxThemes)

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
	console.log(
		`Found ${themes.length} themes${themesBeforeLimit > themes.length ? ` (limited to ${maxThemes} of ${themesBeforeLimit})` : ''}.`,
	)
	console.log(`Planned scenarios per theme: ${scenarios.length}`)
	console.log(`Total captures planned: ${totalCapturesPlanned}`)
	console.log(`Mode: max-themes=${maxThemes}.`)
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
	if (veVerificationEnabled) {
		console.log(
			`Mode: VE verification enabled (--verify-ve-rendering, maxDiffRatio=${verificationMaxDiffRatio}).`,
		)
		console.log(`Mode: VE route coverage available for ${veLeafRoutes.length} leaf route(s).`)
	}
	if (strictScenarioAssert) {
		console.log('Mode: strict scenario assertions enabled (--strict-scenarios).')
	}
	// Verification always requires a fresh build to ensure CSS files are up-to-date
	if (verificationEnabled) {
		console.log(
			`Mode: CSS verification enabled (--verify-css-rendering, maxDiffRatio=${verificationMaxDiffRatio}).`,
		)
		console.log('Mode: Forcing rebuild to ensure CSS artifacts are current.')
		buildProject()
	} else if (veVerificationEnabled) {
		console.log('Mode: Forcing VE rebuild to ensure Vanilla Extract artifacts are current.')
		buildVeProject()
		assertVeBuildOutputExists()
	} else if (buildBeforeCapture) {
		console.log('Mode: build enabled (--build).')
		console.log('Building project for screenshot capture...')
		buildProject()
	} else {
		console.log('Mode: reusing existing build output (default).')
		assertBuildOutputExists()
	}

	let previewServer = null
	let vePreviewServer = null

	if (veVerificationEnabled) {
		console.log('Mode: using VE Vite preview server for screenshot verification.')
		vePreviewServer = startVePreviewServer()
	} else {
		console.log('Mode: using Vite preview server for screenshot capture.')
		previewServer = startPreviewServer()
	}

	try {
		if (veVerificationEnabled) {
			await waitForServer(VE_BASE_URL)
		} else {
			await waitForServer(BASE_URL)
		}
		await executeCaptureWorkflow({
			themes,
			scenarios,
			veRouteSet,
			routeToComponentFile,
			requestedWidth,
			routeFilter,
			stateFilter,
			skipExisting,
			writebackEnabled,
			dryRunWriteback,
			cssExtractionEnabled,
			verificationEnabled,
			veVerificationEnabled,
			verificationMaxDiffRatio,
		})
	} finally {
		await Promise.all([stopServer(previewServer), stopServer(vePreviewServer)])
	}
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
