import { execSync, spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { setTimeout as delay } from 'node:timers/promises'
import { chromium } from 'playwright'

const ROOT = process.cwd()
const INDEX_FILE = path.join(ROOT, 'src', 'index.tsx')
const THEMES_FILE = path.join(ROOT, 'src', 'logic', 'themes.ts')
const BASE_URL = 'http://127.0.0.1:4173'
const DEFAULT_VIEWPORT = { width: 360, height: 576 }
const MIN_HEIGHT = 120
const MAX_HEIGHT = 1800
const TARGET_PREFIXES = ['/contents', '/forms', '/ui']
const MAX_ATTEMPTS_PER_SCREENSHOT = 3
const RESTART_BROWSER_EVERY = 120

const args = process.argv.slice(2)
const SKIP_EXISTING = args.includes('--skip-existing')
const WRITEBACK_ENABLED = !args.includes('--no-writeback')
const DRY_RUN_WRITEBACK = args.includes('--dry-run-writeback')
const STRICT_SCENARIO_ASSERT = args.includes('--strict-scenarios')
const ROUTE_FILTER = parseCsvArg(args, '--route')
const THEME_FILTER = parseCsvArg(args, '--theme')
const STATE_FILTER = parseCsvArg(args, '--state')
const REQUESTED_WIDTH = parseIntArg(args, '--width', DEFAULT_VIEWPORT.width)

const BUTTON_HOVER_ROUTES = [
	'/ui/buttons/solid-primary-button',
	'/ui/buttons/solid-secondary-button',
	'/ui/buttons/solid-success-button',
	'/ui/buttons/solid-danger-button',
	'/ui/buttons/solid-warning-button',
	'/ui/buttons/solid-info-button',
	'/ui/buttons/solid-light-button',
	'/ui/buttons/solid-dark-button',
	'/ui/buttons/solid-link-button',
	'/ui/buttons/outline-primary-button',
	'/ui/buttons/outline-secondary-button',
	'/ui/buttons/outline-success-button',
	'/ui/buttons/outline-danger-button',
	'/ui/buttons/outline-warning-button',
	'/ui/buttons/outline-info-button',
	'/ui/buttons/outline-light-button',
	'/ui/buttons/outline-dark-button',
	'/ui/buttons/small-button',
	'/ui/buttons/large-button',
]

const TABLE_HOVER_COLOR_ROUTES = [
	'/contents/tables/hover-default-variant',
	'/contents/tables/hover-primary-variant',
	'/contents/tables/hover-secondary-variant',
	'/contents/tables/hover-success-variant',
	'/contents/tables/hover-danger-variant',
	'/contents/tables/hover-warning-variant',
	'/contents/tables/hover-info-variant',
	'/contents/tables/hover-light-variant',
	'/contents/tables/hover-dark-variant',
]

const CONTEXTUAL_LIST_GROUP_COLOR_ROUTES = [
	'/ui/list-group/contextual-default-list-group',
	'/ui/list-group/contextual-primary-list-group',
	'/ui/list-group/contextual-secondary-list-group',
	'/ui/list-group/contextual-success-list-group',
	'/ui/list-group/contextual-danger-list-group',
	'/ui/list-group/contextual-warning-list-group',
	'/ui/list-group/contextual-info-list-group',
	'/ui/list-group/contextual-light-list-group',
	'/ui/list-group/contextual-dark-list-group',
]

const TOOLTIP_ROUTES = [
	'/ui/tooltips/top-tooltip',
	'/ui/tooltips/end-tooltip',
	'/ui/tooltips/bottom-tooltip',
	'/ui/tooltips/start-tooltip',
	'/ui/tooltips/html-tooltip',
]

const POPOVER_ROUTES = [
	'/ui/popovers/basic-popover',
	'/ui/popovers/top-popover',
	'/ui/popovers/end-popover',
	'/ui/popovers/bottom-popover',
	'/ui/popovers/start-popover',
]

const MODAL_ROUTES = [
	'/ui/modal/default-modal',
	'/ui/modal/static-backdrop-modal',
	'/ui/modal/centered-scrollable-modal',
	'/ui/modal/fullscreen-modal',
]

const INTERACTIVE_SCENARIOS = [
	...BUTTON_HOVER_ROUTES.map((route) => ({
		route,
		state: 'hover-buttons',
		kind: 'hover',
		selector: '.btn',
	})),
	{
		route: '/ui/dropdowns/normal-dropdown',
		state: 'hover-dropdown',
		kind: 'hover',
		selector: '[data-bs-toggle="dropdown"]',
	},
	...TABLE_HOVER_COLOR_ROUTES.map((route) => ({
		route,
		state: 'hover-table-row',
		kind: 'hover',
		selector: '.table-hover tbody tr',
	})),
	...CONTEXTUAL_LIST_GROUP_COLOR_ROUTES.map((route) => ({
		route,
		state: 'hover-list-group',
		kind: 'hover',
		selector: '.list-group-item',
	})),
	{
		route: '/forms/overview/basic-form',
		state: 'focus-text-input',
		kind: 'focus',
		selector: 'input.form-control',
	},
	{
		route: '/forms/overview/checkbox',
		state: 'focus-checkbox',
		kind: 'focus-check',
		selector: 'input[type="checkbox"]',
	},
	{
		route: '/forms/overview/radio-buttons',
		state: 'focus-radio',
		kind: 'focus-check',
		selector: 'input[type="radio"]',
	},
	{
		route: '/forms/overview/switch-checkbox',
		state: 'focus-switch',
		kind: 'focus-check',
		selector: 'input[type="checkbox"]',
	},
	{
		route: '/forms/overview/file-input',
		state: 'focus-file-input',
		kind: 'focus',
		selector: 'input[type="file"]',
	},
	{
		route: '/forms/overview/basic-form',
		state: 'typed-text-input',
		kind: 'type',
		selector: 'input.form-control',
		value: 'Sample text',
	},
	...TOOLTIP_ROUTES.map((route) => ({
		route,
		state: 'opened-tooltip',
		kind: 'hover-visible',
		selector: 'button[data-bs-toggle="tooltip"]',
		visibleSelector: '.tooltip.show',
	})),
	...POPOVER_ROUTES.map((route) => ({
		route,
		state: 'opened-popover',
		kind: 'click-visible',
		selector: 'button[data-bs-toggle="popover"]',
		visibleSelector: '.popover.show',
	})),
	...MODAL_ROUTES.map((route) => ({
		route,
		state: 'opened-modal',
		kind: 'click-visible',
		selector: '[data-bs-toggle="modal"]',
		visibleSelector: '.modal.show',
	})),
]

function parseCsvArg(argv, name) {
	const prefix = `${name}=`
	const raw = argv.find((arg) => arg.startsWith(prefix))
	if (!raw) return null
	const values = raw
		.slice(prefix.length)
		.split(',')
		.map((value) => value.trim())
		.filter(Boolean)
	return values.length > 0 ? new Set(values) : null
}

function parseIntArg(argv, name, fallback) {
	const prefix = `${name}=`
	const raw = argv.find((arg) => arg.startsWith(prefix))
	if (!raw) return fallback
	const value = Number.parseInt(raw.slice(prefix.length), 10)
	return Number.isFinite(value) && value > 0 ? value : fallback
}

function slugifyTheme(name) {
	return name
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

function normalizeThemeToken(token) {
	if (!token) return '*'
	if (token === '*') return '*'
	return slugifyTheme(token)
}

function parseThemeNames(themeSource) {
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

function getLeafRoutes(paths) {
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

function parseRoutesAndComponents(indexSource, indexFilePath) {
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

function parseDirectiveLine(line, lineIndex) {
	const match = line.match(/^\s*\/\/\s*@screenshot\s+([^:]+):\s*(.*)$/)
	if (!match) return null

	const key = match[1].trim()
	const value = match[2].trim()
	const keyParts = key
		.split('/')
		.map((part) => part.trim())
		.filter(Boolean)
	if (keyParts.length === 0) return null

	const theme = normalizeThemeToken(keyParts[0])
	const state = keyParts.length > 1 ? keyParts.slice(1).join('/') : null
	const widthMappings = []
	const fallbacks = []
	const tokens = value.length > 0 ? value.split(/\s+/).filter(Boolean) : []

	for (const token of tokens) {
		const widthMatch = token.match(/^(\d+)x(\d+)$/)
		if (widthMatch) {
			widthMappings.push({
				width: Number.parseInt(widthMatch[1], 10),
				height: Number.parseInt(widthMatch[2], 10),
			})
			continue
		}
		if (/^\d+$/.test(token)) {
			fallbacks.push(Number.parseInt(token, 10))
		}
	}

	return {
		lineIndex,
		theme,
		state,
		widthMappings,
		fallbacks,
	}
}

function directiveKey(theme, state) {
	return `${theme}::${state ?? ''}`
}

function parseDirectivesFromLines(lines) {
	const directives = []
	for (let i = 0; i < lines.length; i += 1) {
		const parsed = parseDirectiveLine(lines[i], i)
		if (parsed) {
			directives.push(parsed)
		}
	}
	return directives
}

function selectHeightFromDirective(directive, requestedWidth) {
	const sortedMappings = [...directive.widthMappings].sort((a, b) => a.width - b.width)
	const selected = sortedMappings.find((mapping) => mapping.width >= requestedWidth)
	if (selected) return selected.height
	if (directive.fallbacks.length > 0) return directive.fallbacks[0]
	return null
}

function resolveConfiguredHeight(directives, theme, state, requestedWidth) {
	const precedence = [
		{ theme, state },
		{ theme: '*', state },
		{ theme, state: null },
		{ theme: '*', state: null },
	]

	for (const target of precedence) {
		const directive = directives.find(
			(candidate) => candidate.theme === target.theme && candidate.state === target.state,
		)
		if (!directive) continue
		const height = selectHeightFromDirective(directive, requestedWidth)
		if (height) {
			return {
				height,
				source: 'directive',
				directive,
			}
		}
	}

	return {
		height: null,
		source: 'missing',
		directive: null,
	}
}

async function waitForServer(url, timeoutMs = 45000) {
	const started = Date.now()
	let lastError

	while (Date.now() - started < timeoutMs) {
		try {
			const response = await fetch(url)
			if (response.ok) return
		} catch (error) {
			lastError = error
		}
		await delay(500)
	}

	throw new Error(`Vite server did not become ready at ${url}: ${lastError}`)
}

function killPortWindows(port) {
	try {
		const out = execSync(`netstat -ano -p TCP 2>nul`, { encoding: 'utf8' })
		const line = out
			.split('\n')
			.find((entry) => entry.includes(`:${port} `) && entry.includes('LISTENING'))
		if (!line) return
		const pid = line.trim().split(/\s+/).at(-1)
		if (pid && /^\d+$/.test(pid) && pid !== '0') {
			execSync(`taskkill /PID ${pid} /F 2>nul`, { stdio: 'ignore' })
			console.log(`Killed existing process on port ${port} (PID ${pid})`)
		}
	} catch {
		// ignore — port may not be in use
	}
}

function startViteServer() {
	killPortWindows(4173)
	return spawn('pnpm', ['dev', '--host', '127.0.0.1', '--port', '4173', '--strictPort'], {
		cwd: ROOT,
		env: process.env,
		stdio: 'inherit',
		shell: true,
	})
}

async function pathExists(filePath) {
	try {
		await stat(filePath)
		return true
	} catch {
		return false
	}
}

function clampHeight(height) {
	if (!Number.isFinite(height)) return DEFAULT_VIEWPORT.height
	return Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, Math.ceil(height)))
}

async function measureContentHeight(page) {
	const measured = await page.evaluate(() => {
		const root = document.querySelector('#root')
		if (!root) return 0

		// Find the visual bounds of all rendered content within root
		const children = root.querySelectorAll('*')
		if (children.length === 0) return 0

		let minTop = Infinity
		let maxBottom = 0

		for (const el of children) {
			const rect = el.getBoundingClientRect()
			// Only consider elements with visible content (height > 0)
			if (rect.height > 0) {
				minTop = Math.min(minTop, rect.top)
				maxBottom = Math.max(maxBottom, rect.bottom)
			}
		}

		// Also check root itself
		const rootRect = root.getBoundingClientRect()
		if (rootRect.height > 0) {
			minTop = Math.min(minTop, rootRect.top)
			maxBottom = Math.max(maxBottom, rootRect.bottom)
		}

		const contentHeight = Math.ceil(maxBottom - minTop)
		return Math.max(0, contentHeight)
	})
	return clampHeight(measured)
}

function buildStaticScenarios(leafRoutes) {
	return leafRoutes.map((route) => ({
		route,
		state: null,
		kind: 'static',
	}))
}

function getScenarioStateFolder(state) {
	return state ?? 'static'
}

function ensureSelector(locator, selector) {
	if (!locator) {
		throw new Error(`Selector not found: ${selector}`)
	}
}

async function performScenarioAction(page, scenario) {
	if (scenario.kind === 'static') return

	const locator = page.locator(scenario.selector).first()
	await locator.waitFor({ state: 'visible', timeout: 5000 })
	ensureSelector(locator, scenario.selector)

	switch (scenario.kind) {
		case 'hover': {
			await locator.hover()
			break
		}
		case 'focus': {
			await locator.focus()
			break
		}
		case 'focus-check': {
			try {
				await locator.check({ force: true })
			} catch {
				await locator.click({ force: true })
			}
			await locator.focus()
			break
		}
		case 'type': {
			await locator.fill('')
			await locator.type(scenario.value ?? 'Sample text', { delay: 10 })
			break
		}
		case 'hover-visible': {
			await locator.hover()
			await page.waitForSelector(scenario.visibleSelector, {
				state: 'visible',
				timeout: 5000,
			})
			break
		}
		case 'click-visible': {
			await locator.click({ force: true })
			await page.waitForSelector(scenario.visibleSelector, {
				state: 'visible',
				timeout: 5000,
			})
			break
		}
		default:
			throw new Error(`Unknown scenario kind: ${scenario.kind}`)
	}

	await delay(180)
}

function filterThemes(themes) {
	if (!THEME_FILTER) return themes
	return themes.filter(
		(theme) => THEME_FILTER.has(slugifyTheme(theme)) || THEME_FILTER.has(theme),
	)
}

function filterScenarios(scenarios) {
	return scenarios.filter((scenario) => {
		if (ROUTE_FILTER && !ROUTE_FILTER.has(scenario.route)) return false
		const stateName = scenario.state ?? 'static'
		if (STATE_FILTER && !STATE_FILTER.has(stateName)) return false
		return true
	})
}

function createScenarioCatalog(leafRoutes) {
	const staticScenarios = buildStaticScenarios(leafRoutes)
	const routeSet = new Set(leafRoutes)
	const curatedScenarios = INTERACTIVE_SCENARIOS.filter((scenario) =>
		routeSet.has(scenario.route),
	)
	return [...staticScenarios, ...curatedScenarios]
}

function assertCuratedScenarioRoutes(leafRoutes) {
	const leafRouteSet = new Set(leafRoutes)
	const curatedRoutes = [...new Set(INTERACTIVE_SCENARIOS.map((scenario) => scenario.route))]
	const missingRoutes = curatedRoutes.filter((route) => !leafRouteSet.has(route))

	if (missingRoutes.length === 0) {
		return
	}

	const message = [
		`Curated interactive scenario route assertion failed (${missingRoutes.length} missing route(s)).`,
		...missingRoutes.map((route) => `  - ${route}`),
		'Update INTERACTIVE_SCENARIOS to match src/index.tsx leaf routes.',
	].join('\n')

	if (STRICT_SCENARIO_ASSERT) {
		throw new Error(message)
	}

	console.warn(`${message}\nProceeding because --strict-scenarios was not provided.`)
}

async function loadComponentModel(filePath, cache) {
	if (cache.has(filePath)) return cache.get(filePath)
	const source = await readFile(filePath, 'utf8')
	const newline = source.includes('\r\n') ? '\r\n' : '\n'
	const lines = source.split(/\r?\n/)
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

function formatDirective(theme, state, widthMappings, fallbacks) {
	const key = state ? `${theme}/${state}` : theme
	const widthTokens = [...widthMappings]
		.sort((a, b) => a.width - b.width)
		.map((entry) => `${entry.width}x${entry.height}`)
	const fallbackTokens = fallbacks.map((value) => String(value))
	const values = [...widthTokens, ...fallbackTokens].join(' ').trim()
	return `// @screenshot ${key}: ${values}`
}

function applyMeasurementToDirectiveValues(widthMappings, fallbacks, requestedWidth, measuredHeight) {
	const mappings = [...widthMappings].map((entry) => ({ ...entry }))
	const fallbackValues = [...fallbacks]
	const existingWidthIndex = mappings.findIndex((entry) => entry.width === requestedWidth)

	if (existingWidthIndex >= 0) {
		mappings[existingWidthIndex] = { width: requestedWidth, height: measuredHeight }
		return {
			widthMappings: mappings,
			fallbacks: fallbackValues,
			action: 'updated-width',
		}
	}

	mappings.push({ width: requestedWidth, height: measuredHeight })
	mappings.sort((a, b) => a.width - b.width)
	const insertedIsLargest =
		mappings.length === 1 || requestedWidth >= mappings[mappings.length - 1].width
	if (insertedIsLargest) {
		if (fallbackValues.length > 0) {
			fallbackValues[0] = measuredHeight
		} else {
			fallbackValues.push(measuredHeight)
		}
	}

	return {
		widthMappings: mappings,
		fallbacks: fallbackValues,
		action: 'inserted-width',
	}
}

function directiveValuesSignature(widthMappings, fallbacks) {
	const sortedMappings = [...widthMappings]
		.sort((a, b) => a.width - b.width)
		.map((entry) => `${entry.width}x${entry.height}`)
		.join('|')
	const fallbackSignature = [...fallbacks].map((value) => String(value)).join('|')
	return `${sortedMappings}::${fallbackSignature}`
}

function computeNextDirectiveValues(directive, requestedWidth, measuredHeight) {
	if (!directive) {
		return applyMeasurementToDirectiveValues([], [], requestedWidth, measuredHeight)
	}

	return applyMeasurementToDirectiveValues(
		directive.widthMappings,
		directive.fallbacks,
		requestedWidth,
		measuredHeight,
	)
}

function findDirective(model, theme, state) {
	return (
		model.directives.find(
			(directive) => directive.theme === theme && directive.state === state,
		) ?? null
	)
}

function resolveStaticDirectiveForTheme(model, theme) {
	const exact = findDirective(model, theme, null)
	if (exact) return exact
	if (theme !== '*') return findDirective(model, '*', null)
	return null
}

function removeDirective(model, targetDirective) {
	if (!targetDirective) return false
	const directiveIndex = model.directives.findIndex(
		(directive) => directive === targetDirective,
	)
	if (directiveIndex === -1) return false

	const removedLineIndex = targetDirective.lineIndex
	model.directives.splice(directiveIndex, 1)
	model.lines.splice(removedLineIndex, 1)

	for (const directive of model.directives) {
		if (directive.lineIndex > removedLineIndex) {
			directive.lineIndex -= 1
		}
	}

	model.dirty = true
	return true
}

function canonicalizeWritebackTheme(model, update) {
	if (model.directives.length === 0) {
		return { theme: '*', promoted: false, reason: 'empty-component' }
	}

	const hasWildcardDirective = model.directives.some((directive) => directive.theme === '*')
	if (hasWildcardDirective) {
		return { theme: update.theme, promoted: false, reason: 'wildcard-exists' }
	}

	const targetDirective =
		model.directives.find(
			(directive) => directive.theme === update.theme && directive.state === update.state,
		) ?? null
	const nextValues = computeNextDirectiveValues(targetDirective, update.width, update.height)
	const nextSignature = directiveValuesSignature(nextValues.widthMappings, nextValues.fallbacks)

	const matchingDirective = model.directives.find((directive) => {
		if (directive.theme === '*') return false
		if (directive.state !== update.state) return false
		const signature = directiveValuesSignature(directive.widthMappings, directive.fallbacks)
		return signature === nextSignature
	})

	if (!matchingDirective) {
		return { theme: update.theme, promoted: false, reason: 'no-matching-values' }
	}

	if (matchingDirective.theme !== '*') {
		matchingDirective.theme = '*'
		model.lines[matchingDirective.lineIndex] = formatDirective(
			matchingDirective.theme,
			matchingDirective.state,
			matchingDirective.widthMappings,
			matchingDirective.fallbacks,
		)
		model.dirty = true
		return { theme: '*', promoted: true, reason: 'promoted-matching-directive' }
	}

	return { theme: '*', promoted: false, reason: 'already-wildcard' }
}

function upsertDirectiveWithMeasurement(model, theme, state, requestedWidth, measuredHeight) {
	const key = directiveKey(theme, state)
	const directives = model.directives
	const existingIndex = directives.findIndex(
		(directive) => directiveKey(directive.theme, directive.state) === key,
	)

	if (existingIndex === -1) {
		const newDirective = {
			lineIndex: model.lines.length,
			theme,
			state,
			widthMappings: [{ width: requestedWidth, height: measuredHeight }],
			fallbacks: [measuredHeight],
		}
		model.lines.push(
			formatDirective(
				newDirective.theme,
				newDirective.state,
				newDirective.widthMappings,
				newDirective.fallbacks,
			),
		)
		directives.push(newDirective)
		model.dirty = true
		return { action: 'created' }
	}

	const directive = directives[existingIndex]
	const nextValues = applyMeasurementToDirectiveValues(
		directive.widthMappings,
		directive.fallbacks,
		requestedWidth,
		measuredHeight,
	)

	directive.widthMappings = nextValues.widthMappings
	directive.fallbacks = nextValues.fallbacks
	const formatted = formatDirective(
		directive.theme,
		directive.state,
		nextValues.widthMappings,
		nextValues.fallbacks,
	)
	model.lines[directive.lineIndex] = formatted
	model.dirty = true
	return { action: nextValues.action }
}

async function persistComponentModels(cache) {
	const modified = []
	for (const model of cache.values()) {
		if (!model.dirty) continue
		const output = `${model.lines.join(model.newline)}${model.newline}`
		await writeFile(model.filePath, output, 'utf8')
		modified.push(model.filePath)
	}
	return modified
}

function recordWritebackMeasure(writebackQueue, filePath, theme, state, width, height) {
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

async function applyWritebackQueue(writebackQueue, componentCache) {
	const results = []
	for (const [filePath, updates] of writebackQueue.entries()) {
		const model = await loadComponentModel(filePath, componentCache)
		for (const update of updates.values()) {
			const canonical = canonicalizeWritebackTheme(model, update)

			if (update.state !== null) {
				const stateDirective = findDirective(model, canonical.theme, update.state)
				const nextStateValues = computeNextDirectiveValues(
					stateDirective,
					update.width,
					update.height,
				)
				const staticDirective = resolveStaticDirectiveForTheme(model, canonical.theme)
				const isRedundantToStatic =
					staticDirective !== null &&
					directiveValuesSignature(
						nextStateValues.widthMappings,
						nextStateValues.fallbacks,
					) ===
						directiveValuesSignature(
							staticDirective.widthMappings,
							staticDirective.fallbacks,
						)

				if (isRedundantToStatic) {
					const removed = removeDirective(model, stateDirective)
					results.push({
						filePath,
						theme: canonical.theme,
						originalTheme: update.theme,
						state: update.state,
						canonicalReason: canonical.reason,
						promoted: canonical.promoted,
						action: removed ? 'removed-redundant-state' : 'skipped-redundant-state',
					})
					continue
				}
			}

			const result = upsertDirectiveWithMeasurement(
				model,
				canonical.theme,
				update.state,
				update.width,
				update.height,
			)
			results.push({
				filePath,
				theme: canonical.theme,
				originalTheme: update.theme,
				state: update.state,
				canonicalReason: canonical.reason,
				promoted: canonical.promoted,
				action: result.action,
			})
		}
	}
	return results
}

async function main() {
	const indexSource = await readFile(INDEX_FILE, 'utf8')
	const themeSource = await readFile(THEMES_FILE, 'utf8')

	const { routes, routeToComponentFile } = parseRoutesAndComponents(indexSource, INDEX_FILE)
	const leafRoutes = getLeafRoutes(routes)
	assertCuratedScenarioRoutes(leafRoutes)
	const themes = filterThemes(parseThemeNames(themeSource))
	const scenarios = filterScenarios(createScenarioCatalog(leafRoutes))

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
	console.log(`Total captures planned: ${themes.length * scenarios.length}`)
	if (SKIP_EXISTING) {
		console.log('Mode: skipping screenshots that already exist (--skip-existing).')
	}
	if (!WRITEBACK_ENABLED) {
		console.log('Mode: writeback disabled (--no-writeback).')
	}
	if (DRY_RUN_WRITEBACK) {
		console.log('Mode: dry-run writeback enabled (--dry-run-writeback).')
	}
	if (STRICT_SCENARIO_ASSERT) {
		console.log('Mode: strict scenario assertions enabled (--strict-scenarios).')
	}

	const vite = startViteServer()

	async function freshBrowser(initialHeight = DEFAULT_VIEWPORT.height) {
		const browser = await chromium.launch({ headless: true })
		const context = await browser.newContext({
			viewport: { width: REQUESTED_WIDTH, height: initialHeight },
		})
		const page = await context.newPage()
		return { browser, context, page }
	}

	const componentCache = new Map()
	const writebackQueue = new Map()

	try {
		await waitForServer(BASE_URL)

		let { browser, context, page } = await freshBrowser()
		const failed = []
		let savedCount = 0
		let skippedCount = 0
		let shotsSinceRestart = 0
		const scenarioSummary = new Map()

		for (const themeName of themes) {
			const themeSlug = slugifyTheme(themeName)

			for (const scenario of scenarios) {
				const route = scenario.route
				const componentFile = routeToComponentFile.get(route)
				if (!componentFile) {
					failed.push({
						theme: themeSlug,
						route,
						state: scenario.state,
						reason: 'Route component file not found from src/index.tsx imports',
					})
					continue
				}

				const routePath = route.replace(/^\//, '')
				const stateFolder = getScenarioStateFolder(scenario.state)

				const summaryKey = stateFolder
				if (!scenarioSummary.has(summaryKey)) {
					scenarioSummary.set(summaryKey, { saved: 0, skipped: 0, failed: 0 })
				}

				let captured = false
				for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_SCREENSHOT; attempt += 1) {
					try {
						const model = await loadComponentModel(componentFile, componentCache)
						const configured = resolveConfiguredHeight(
							model.directives,
							themeSlug,
							scenario.state,
							REQUESTED_WIDTH,
						)

						const initialHeight = clampHeight(
							configured.height ?? DEFAULT_VIEWPORT.height,
						)
						await page.setViewportSize({
							width: REQUESTED_WIDTH,
							height: initialHeight,
						})

						const url = `${BASE_URL}${route}?theme=${encodeURIComponent(themeName)}`
						await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 })
						await delay(150)
						await performScenarioAction(page, scenario)
						const measuredHeight = await measureContentHeight(page)
						await page.setViewportSize({
							width: REQUESTED_WIDTH,
							height: measuredHeight,
						})
						await delay(80)

						recordWritebackMeasure(
							writebackQueue,
							componentFile,
							themeSlug,
							scenario.state,
							REQUESTED_WIDTH,
							measuredHeight,
						)

						const outputPath = path.join(
							ROOT,
							'screenshots',
							themeSlug,
							routePath,
							stateFolder,
							`${REQUESTED_WIDTH}x${measuredHeight}.png`,
						)

						if (SKIP_EXISTING && (await pathExists(outputPath))) {
							skippedCount += 1
							scenarioSummary.get(summaryKey).skipped += 1
							captured = true
							break
						}

						await mkdir(path.dirname(outputPath), { recursive: true })
						await page.screenshot({ path: outputPath, fullPage: false, timeout: 20000 })
						savedCount += 1
						scenarioSummary.get(summaryKey).saved += 1
						shotsSinceRestart += 1
						captured = true
						console.log(
							`Saved ${path.relative(ROOT, outputPath)} (${configured.source} -> measured ${measuredHeight})`,
						)
						break
					} catch (err) {
						const reason = err?.message
							? String(err.message).split('\n')[0]
							: String(err)
						if (attempt === MAX_ATTEMPTS_PER_SCREENSHOT) {
							console.error(
								`FAILED ${themeSlug} ${route} [${stateFolder}]: ${reason}`,
							)
							failed.push({ theme: themeSlug, route, state: scenario.state, reason })
							scenarioSummary.get(summaryKey).failed += 1
						}
						try {
							await context.close()
						} catch {
							// ignore
						}
						try {
							await browser.close()
						} catch {
							// ignore
						}
						;({ browser, context, page } = await freshBrowser())
						await delay(200)
					}
				}

				if (!captured) {
					continue
				}

				if (shotsSinceRestart >= RESTART_BROWSER_EVERY) {
					try {
						await context.close()
					} catch {
						// ignore
					}
					try {
						await browser.close()
					} catch {
						// ignore
					}
					;({ browser, context, page } = await freshBrowser())
					shotsSinceRestart = 0
				}
			}
		}

		await context.close()
		await browser.close()

		let writebackResults = []
		let modifiedFiles = []
		if (WRITEBACK_ENABLED) {
			writebackResults = await applyWritebackQueue(writebackQueue, componentCache)
			if (!DRY_RUN_WRITEBACK) {
				modifiedFiles = await persistComponentModels(componentCache)
			}
		}

		console.log(
			`\nSummary: saved=${savedCount}, skipped=${skippedCount}, failed=${failed.length}`,
		)
		for (const [stateName, values] of scenarioSummary.entries()) {
			console.log(
				`  state=${stateName} saved=${values.saved} skipped=${values.skipped} failed=${values.failed}`,
			)
		}

		if (WRITEBACK_ENABLED) {
			console.log(
				`Writeback: updates=${writebackResults.length}, files=${
					DRY_RUN_WRITEBACK ? 'dry-run' : modifiedFiles.length
				}`,
			)
			if (!DRY_RUN_WRITEBACK && modifiedFiles.length > 0) {
				for (const filePath of modifiedFiles) {
					console.log(`  updated ${path.relative(ROOT, filePath)}`)
				}
			}
		}

		if (failed.length > 0) {
			console.error(`\n${failed.length} capture(s) failed:`)
			for (const failure of failed) {
				const stateName = failure.state ?? 'static'
				console.error(
					`  [${failure.theme}] ${failure.route} (${stateName}): ${failure.reason}`,
				)
			}
			process.exitCode = 1
		} else {
			console.log('\nAll captures completed successfully.')
		}
	} finally {
		vite.kill('SIGTERM')
	}
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
