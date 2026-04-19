import { mkdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { setTimeout as delay } from 'node:timers/promises'
import { spawn, execSync } from 'node:child_process'
import { chromium } from 'playwright'

const ROOT = process.cwd()
const BASE_URL = 'http://127.0.0.1:4173'
const VIEWPORT = { width: 360, height: 576 }
const IMAGE_RESOLUTION = `${VIEWPORT.width}x${VIEWPORT.height}`
const TARGET_PREFIXES = ['/contents', '/forms', '/ui']
const SKIP_EXISTING = process.argv.includes('--skip-existing')
const MAX_ATTEMPTS_PER_SCREENSHOT = 3
const RESTART_BROWSER_EVERY = 120

function slugifyTheme(name) {
	return name
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

function parseRoutePaths(indexSource) {
	const paths = []
	const routeRegex = /<Route\s+path="([^"]+)"\s+component=\{[^}]+\}\s*\/>/g

	for (const match of indexSource.matchAll(routeRegex)) {
		const routePath = match[1]
		if (TARGET_PREFIXES.some((prefix) => routePath.startsWith(prefix))) {
			paths.push(routePath)
		}
	}

	return [...new Set(paths)].sort()
}

function getLeafRoutes(paths) {
	return paths.filter((candidate) => {
		if (TARGET_PREFIXES.includes(candidate)) return false
		return !paths.some((other) => other !== candidate && other.startsWith(`${candidate}/`))
	})
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
		const line = out.split('\n').find((l) => l.includes(`:${port} `) && l.includes('LISTENING'))
		if (line) {
			const pid = line.trim().split(/\s+/).at(-1)
			if (pid && /^\d+$/.test(pid) && pid !== '0') {
				execSync(`taskkill /PID ${pid} /F 2>nul`, { stdio: 'ignore' })
				console.log(`Killed existing process on port ${port} (PID ${pid})`)
			}
		}
	} catch {
		// ignore — port may not be in use
	}
}

function startViteServer() {
	killPortWindows(4173)
	const child = spawn('pnpm', ['dev', '--host', '127.0.0.1', '--port', '4173', '--strictPort'], {
		cwd: ROOT,
		env: process.env,
		stdio: 'inherit',
		shell: true,
	})

	return child
}

async function pathExists(filePath) {
	try {
		await stat(filePath)
		return true
	} catch {
		return false
	}
}

async function main() {
	const indexSource = await readFile(path.join(ROOT, 'src', 'index.tsx'), 'utf8')
	const themeSource = await readFile(path.join(ROOT, 'src', 'logic', 'themes.ts'), 'utf8')

	const allRoutes = parseRoutePaths(indexSource)
	const leafRoutes = getLeafRoutes(allRoutes)
	const themes = parseThemeNames(themeSource)

	if (leafRoutes.length === 0) {
		throw new Error('No leaf routes found in src/index.tsx for /contents, /forms, /ui')
	}

	console.log(`Found ${leafRoutes.length} leaf routes across target sections.`)
	console.log(`Found ${themes.length} themes.`)
	console.log(`Total screenshots planned: ${leafRoutes.length * themes.length}`)
	if (SKIP_EXISTING) {
		console.log('Mode: skipping screenshots that already exist (--skip-existing).')
	}

	const vite = startViteServer()

	async function freshBrowser() {
		const browser = await chromium.launch({ headless: true })
		const context = await browser.newContext({ viewport: VIEWPORT })
		const page = await context.newPage()
		return { browser, context, page }
	}

	try {
		await waitForServer(BASE_URL)

		let { browser, context, page } = await freshBrowser()
		const failed = []
		let savedCount = 0
		let skippedCount = 0
		let shotsSinceRestart = 0

		for (const theme of themes) {
			const themeSlug = slugifyTheme(theme)

			for (const route of leafRoutes) {
				const routePath = route.replace(/^\//, '')
				const outputPath = path.join(
					ROOT,
					'screenshots',
					themeSlug,
					routePath,
					`${IMAGE_RESOLUTION}.png`,
				)

				if (SKIP_EXISTING && (await pathExists(outputPath))) {
					skippedCount += 1
					continue
				}

				await mkdir(path.dirname(outputPath), { recursive: true })

				const url = `${BASE_URL}${route}?theme=${encodeURIComponent(theme)}`
				let captured = false
				for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_SCREENSHOT; attempt += 1) {
					try {
						await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 })
						await delay(120)
						await page.screenshot({ path: outputPath, fullPage: false, timeout: 20000 })
						savedCount += 1
						shotsSinceRestart += 1
						captured = true
						console.log(`Saved ${path.relative(ROOT, outputPath)}`)
						break
					} catch (err) {
						const reason = err?.message ? String(err.message).split('\n')[0] : String(err)
						if (attempt === MAX_ATTEMPTS_PER_SCREENSHOT) {
							console.error(`FAILED ${path.relative(ROOT, outputPath)}: ${reason}`)
							failed.push(outputPath)
						}
						// Recover aggressively: recreate the entire browser before retry/continuing
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

		console.log(`\nSummary: saved=${savedCount}, skipped=${skippedCount}, failed=${failed.length}`)

		if (failed.length > 0) {
			console.error(`\n${failed.length} screenshot(s) failed:`)
			for (const f of failed) console.error(`  ${path.relative(ROOT, f)}`)
			process.exitCode = 1
		} else {
			console.log('\nAll screenshots captured successfully.')
		}
	} finally {
		vite.kill('SIGTERM')
	}
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
