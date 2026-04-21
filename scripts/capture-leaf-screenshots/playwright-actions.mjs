import { setTimeout as delay } from 'node:timers/promises'

function ensureSelector(locator, selector) {
	if (!locator) {
		throw new Error(`Selector not found: ${selector}`)
	}
}

export async function stabilizeForScreenshot(page) {
	// Keep hover-driven styles deterministic across scenarios.
	await page.mouse.move(0, 0)
	await page.evaluate(async () => {
		// Ensure local/global theme stylesheets are fully loaded before freezing state.
		const themeLinks = [...document.querySelectorAll('link[data-theme-css]')]
		await Promise.all(
			themeLinks.map(
				(link) =>
					new Promise((resolve) => {
						const alreadyLoaded = link.sheet != null
						if (alreadyLoaded) {
							resolve(null)
							return
						}
						const onDone = () => {
							link.removeEventListener('load', onDone)
							link.removeEventListener('error', onDone)
							resolve(null)
						}
						link.addEventListener('load', onDone, { once: true })
						link.addEventListener('error', onDone, { once: true })
					}),
			),
		)

		try {
			if (document.fonts?.ready) {
				await document.fonts.ready
				// After fonts.ready, some fonts may still be loading (e.g. font-display:swap).
				// Await any FontFace objects that are still in loading state so that
				// Google Fonts loaded via @import are fully swapped in before capture.
				const stillLoading = [...document.fonts].filter((f) => f.status === 'loading')
				await Promise.allSettled(stillLoading.map((f) => f.loaded))
			}
		} catch {
			// Continue even if the browser cannot resolve font loading state.
		}

		// Stop auto-cycling carousels so static captures keep the same active slide.
		try {
			const bootstrap = window.bootstrap
			if (bootstrap?.Carousel) {
				for (const element of document.querySelectorAll('.carousel')) {
					bootstrap.Carousel.getOrCreateInstance(element).pause()
				}
			}
		} catch {
			// Ignore if Bootstrap JS is unavailable for this route.
		}

		try {
			const bootstrap = window.bootstrap
			if (bootstrap?.ScrollSpy) {
				for (const element of document.querySelectorAll('[data-bs-spy="scroll"]')) {
					bootstrap.ScrollSpy.getOrCreateInstance(element).refresh()
				}
			}
		} catch {
			// Ignore if ScrollSpy is not active on this route.
		}

		window.scrollTo(0, 0)

		// Freeze CSS/Web Animations at a fixed timeline position for deterministic captures.
		for (const animation of document.getAnimations()) {
			try {
				animation.currentTime = 0
			} catch {
				// Some animations are not seekable; pausing is still useful.
			}
			animation.pause()
		}
	})
	await delay(80)
}

export async function performScenarioAction(page, scenario, themeSlug) {
	if (scenario.kind === 'static') return

	const scenarioLocator =
		scenario.selector instanceof Function
			? scenario.selector(page, themeSlug)
			: scenario.selector
	const locator =
		typeof scenarioLocator === 'string'
			? page.locator(scenarioLocator).first()
			: scenarioLocator.first()
	await locator.waitFor({ state: scenario.locatorState?.(themeSlug) ?? 'visible', timeout: 5000 })
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

	await delay(scenario.settleDelayMs ?? 180)
}
