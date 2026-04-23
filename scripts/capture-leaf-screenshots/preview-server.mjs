import { execSync, spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { setTimeout as delay } from 'node:timers/promises'

import { ROOT, VE_ROOT } from './constants.mjs'

export async function waitForServer(url, timeoutMs = 45000) {
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
		// ignore - port may not be in use
	}
}

function getPnpmCommand() {
	return process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
}

export function buildProject() {
	execSync(`${getPnpmCommand()} build`, {
		cwd: ROOT,
		env: process.env,
		stdio: 'inherit',
	})
}

export function buildVeProject() {
	execSync(`${process.execPath} scripts/run-ve-vite.mjs build`, {
		cwd: ROOT,
		env: process.env,
		stdio: 'inherit',
	})
}

export function assertBuildOutputExists() {
	const distIndex = path.join(ROOT, 'dist', 'index.html')
	if (existsSync(distIndex)) return
	throw new Error(
		'Missing build output at dist/index.html. Run with --build (or run "pnpm build") before screenshot capture.',
	)
}

export function startPreviewServer() {
	killPortWindows(4173)
	const command = `${getPnpmCommand()} preview --host 127.0.0.1 --port 4173 --strictPort`
	return spawn(command, {
		cwd: ROOT,
		env: process.env,
		stdio: 'inherit',
		shell: true,
	})
}

export function startVePreviewServer() {
	killPortWindows(4174)
	return spawn(process.execPath, ['scripts/run-ve-vite.mjs', 'preview'], {
		cwd: ROOT,
		env: process.env,
		stdio: 'inherit',
	})
}

export function assertVeBuildOutputExists() {
	const distIndex = path.join(VE_ROOT, 'dist', 'index.html')
	if (existsSync(distIndex)) return
	throw new Error(
		'Missing VE build output at ve-project/dist/index.html. Run VE verification mode (auto-build) or run "node scripts/run-ve-vite.mjs build".',
	)
}

export function startDevServer() {
	ensureScreenshotsJunction()
	killPortWindows(4173)
	const command = `${getPnpmCommand()} dev --host 127.0.0.1 --port 4173 --strictPort`
	return spawn(command, {
		cwd: ROOT,
		env: process.env,
		stdio: 'inherit',
		shell: true,
	})
}

function ensureScreenshotsJunction() {
	const junctionTarget = path.join(ROOT, 'screenshots')
	const junctionLink = path.join(ROOT, 'public', 'theme')
	if (!existsSync(junctionLink)) {
		try {
			execSync(`mklink /J "${junctionLink}" "${junctionTarget}"`, {
				stdio: 'ignore',
				shell: true,
			})
		} catch {
			// ignore if already exists
		}
	}
}

export async function stopServer(serverProcess) {
	if (!serverProcess || serverProcess.killed) return

	if (process.platform === 'win32') {
		const pid = serverProcess.pid
		if (pid && Number.isInteger(pid)) {
			try {
				execSync(`taskkill /PID ${pid} /T /F 2>nul`, { stdio: 'ignore' })
			} catch {
				// ignore cleanup failures
			}
		}
	} else {
		serverProcess.kill('SIGTERM')
	}

	await new Promise((resolve) => {
		if (serverProcess.exitCode !== null) {
			resolve()
			return
		}
		serverProcess.once('exit', () => resolve())
		serverProcess.once('error', () => resolve())
	})
}
