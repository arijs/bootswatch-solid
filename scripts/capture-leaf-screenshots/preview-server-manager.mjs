import { setTimeout as delay } from 'node:timers/promises'

import { stopServer, waitForServer } from './preview-server.mjs'

const RECONNECT_DELAY_MS = 3000
const UNRESPONSIVE_BEFORE_RESTART_MS = 60_000
const RESTART_READY_TIMEOUT_MS = 60_000
const MAX_SEQUENTIAL_RESTART_FAILURES = 3
const DEFAULT_GOTO_TIMEOUT_MS = 60_000

export function isPreviewConnectionError(error) {
	const message = String(error?.message || error)
	return /ERR_CONNECTION_REFUSED|ERR_SOCKET_NOT_CONNECTED|ERR_CONNECTION_RESET|ECONNREFUSED|net::ERR_/i.test(
		message,
	)
}

function shortError(error) {
	return String(error?.message || error).split('\n')[0]
}

/**
 * Manages a Vite preview server process with kill/restart recovery.
 */
export function createPreviewServerManager({
	label,
	baseUrl,
	startFn,
	initialReadyTimeoutMs = 45_000,
}) {
	let process = null
	let consecutiveRestartFailures = 0

	return {
		getProcess() {
			return process
		},

		async start() {
			process = startFn()
			await waitForServer(baseUrl, initialReadyTimeoutMs)
		},

		async stop() {
			await stopServer(process)
			process = null
		},

		noteSuccessfulNavigation() {
			consecutiveRestartFailures = 0
		},

		async restart() {
			consecutiveRestartFailures += 1
			if (consecutiveRestartFailures > MAX_SEQUENTIAL_RESTART_FAILURES) {
				throw new Error(
					`${label} preview server failed to recover after ${MAX_SEQUENTIAL_RESTART_FAILURES} sequential restarts.`,
				)
			}

			console.warn(
				`${label} preview server restart attempt ${consecutiveRestartFailures}/${MAX_SEQUENTIAL_RESTART_FAILURES}...`,
			)

			await stopServer(process)
			process = null

			try {
				process = startFn()
				await waitForServer(baseUrl, RESTART_READY_TIMEOUT_MS)
				console.log(`${label} preview server restarted and ready at ${baseUrl}`)
				return true
			} catch (error) {
				await stopServer(process)
				process = null
				console.warn(
					`${label} preview server restart attempt ${consecutiveRestartFailures} failed: ${shortError(error)}`,
				)
				if (consecutiveRestartFailures >= MAX_SEQUENTIAL_RESTART_FAILURES) {
					throw new Error(
						`${label} preview server failed to recover after ${MAX_SEQUENTIAL_RESTART_FAILURES} sequential restarts: ${shortError(error)}`,
					)
				}
				return false
			}
		},
	}
}

/**
 * Navigate with reconnect retries, then restart the preview server if still unresponsive.
 */
export async function gotoWithPreviewRecovery(page, url, previewServerManager, options = {}) {
	const reconnectDelayMs = options.reconnectDelayMs ?? RECONNECT_DELAY_MS
	const unresponsiveMs = options.unresponsiveMs ?? UNRESPONSIVE_BEFORE_RESTART_MS
	const gotoTimeoutMs = options.gotoTimeoutMs ?? DEFAULT_GOTO_TIMEOUT_MS

	let unresponsiveDeadline = Date.now() + unresponsiveMs

	while (true) {
		try {
			await page.goto(url, { waitUntil: 'load', timeout: gotoTimeoutMs })
			previewServerManager.noteSuccessfulNavigation()
			return
		} catch (error) {
			if (!isPreviewConnectionError(error)) throw error

			const now = Date.now()
			if (now < unresponsiveDeadline) {
				console.warn(
					`Preview server connection failed, retrying in ${reconnectDelayMs}ms: ${shortError(error)}`,
				)
				await delay(reconnectDelayMs)
				continue
			}

			console.warn(
				`Preview server unresponsive for ${unresponsiveMs}ms while loading ${url}; restarting preview server...`,
			)
			let restarted = false
			while (!restarted) {
				restarted = await previewServerManager.restart()
				if (!restarted) {
					await delay(reconnectDelayMs)
				}
			}
			unresponsiveDeadline = Date.now() + unresponsiveMs
			await delay(reconnectDelayMs)
		}
	}
}
