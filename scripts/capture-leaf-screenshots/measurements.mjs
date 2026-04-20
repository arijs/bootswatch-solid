import { setTimeout as delay } from 'node:timers/promises'

import { DEFAULT_VIEWPORT, MAX_HEIGHT, MIN_HEIGHT, ZERO_HEIGHT_RETRY_DELAY } from './constants.mjs'

export function clampHeight(height) {
	if (!Number.isFinite(height)) return DEFAULT_VIEWPORT.height
	return Math.max(MIN_HEIGHT, Math.min(MAX_HEIGHT, Math.ceil(height)))
}

async function measureRawContentHeight(page) {
	return page.evaluate(() => {
		const root = document.querySelector('#root')
		if (!root) return 0

		const children = root.querySelectorAll('*')
		if (children.length === 0) return 0

		let minTop = Infinity
		let maxBottom = 0

		for (const el of children) {
			const rect = el.getBoundingClientRect()
			if (rect.height > 0) {
				minTop = Math.min(minTop, rect.top)
				maxBottom = Math.max(maxBottom, rect.bottom)
			}
		}

		const rootRect = root.getBoundingClientRect()
		if (rootRect.height > 0) {
			minTop = Math.min(minTop, rootRect.top)
			maxBottom = Math.max(maxBottom, rootRect.bottom)
		}

		const contentHeight = Math.ceil(maxBottom - minTop)
		return Math.max(0, contentHeight)
	})
}

export async function measureContentHeight(page) {
	let rawHeight = await measureRawContentHeight(page)

	if (rawHeight <= 0) {
		console.warn(`Content height is zero - waiting ${ZERO_HEIGHT_RETRY_DELAY}ms and retrying...`)
		await delay(ZERO_HEIGHT_RETRY_DELAY)
		rawHeight = await measureRawContentHeight(page)
	}

	if (rawHeight <= 0) {
		throw new Error('Content height is zero after retry: no visible content was rendered')
	}

	return clampHeight(rawHeight)
}
