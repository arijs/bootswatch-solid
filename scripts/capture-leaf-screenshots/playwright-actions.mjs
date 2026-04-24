import { setTimeout as delay } from 'node:timers/promises'

function ensureSelector(locator, selector) {
	if (!locator) {
		throw new Error(`Selector not found: ${selector}`)
	}
}

async function forceOpenDropdownMenu(locator) {
	return locator.evaluate((toggle) => {
		const toggleElement = toggle
		const labelledBy = toggleElement.getAttribute('id')
		const scope =
			toggleElement.closest('.dropdown, .dropup, .dropstart, .dropend, .btn-group') ??
			toggleElement.parentElement

		let menu = null
		if (labelledBy) {
			menu = document.querySelector(`.pwhook-dropdown-menu[aria-labelledby="${labelledBy}"]`)
		}
		if (!menu && scope) {
			menu = scope.querySelector('.pwhook-dropdown-menu')
		}
		if (!menu) {
			return false
		}

		menu.classList.add('show')
		toggleElement.classList.add('show')
		toggleElement.setAttribute('aria-expanded', 'true')

		const container = menu.closest('.dropdown, .dropup, .dropstart, .dropend, .btn-group')
		if (container) {
			container.classList.add('show')
		}

		return true
	})
}

export async function stabilizeForScreenshot(page) {
	// Important: Do not move the mouse before stabilization, as some pages
	// have hover-triggered styles that should be captured in the screenshot.
	// await page.mouse.move(0, 0) don't do this
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

		// Carousels can transiently mark multiple indicators as active during hydration/ride init.
		// Force a single stable active item/indicator pair before capture.
		for (const carousel of document.querySelectorAll('.carousel')) {
			try {
				const items = [...carousel.querySelectorAll('.carousel-item')]
				if (items.length === 0) continue

				const activeIndex = 0

				for (let index = 0; index < items.length; index += 1) {
					const item = items[index]
					item.classList.remove(
						'carousel-item-next',
						'carousel-item-prev',
						'carousel-item-start',
						'carousel-item-end',
					)
					if (index === activeIndex) {
						item.classList.add('active')
					} else {
						item.classList.remove('active')
					}
				}

				const indicators = [...carousel.querySelectorAll('.carousel-indicators > *')]
				for (let index = 0; index < indicators.length; index += 1) {
					const indicator = indicators[index]
					indicator.style.setProperty('transition', 'none', 'important')
					if (index === activeIndex) {
						indicator.classList.add('active')
						indicator.setAttribute('aria-current', 'true')
						indicator.style.setProperty('opacity', '1', 'important')
					} else {
						indicator.classList.remove('active')
						indicator.removeAttribute('aria-current')
						indicator.style.setProperty('opacity', '0.5', 'important')
					}
				}
			} catch {
				// Continue stabilization even if one carousel cannot be normalized.
			}
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

		// Freeze animations deterministically without trapping transition-driven styles
		// in their initial (pre-transition) state.
		for (const animation of document.getAnimations()) {
			const isTransition =
				typeof CSSTransition !== 'undefined' && animation instanceof CSSTransition
			if (isTransition) {
				try {
					animation.finish()
				} catch {
					// Ignore unfinishable transitions.
				}
				continue
			}

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
	if (scenario.kind === 'static') {
		// Keep hover interactions untouched, but normalize pointer position for static captures.
		await page.mouse.move(0, 0)
		return
	}

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
			try {
				await page.waitForSelector(scenario.visibleSelector, {
					state: 'visible',
					timeout: 5000,
				})
			} catch (error) {
				const isDropdownVisibleSelector =
					typeof scenario.visibleSelector === 'string' &&
					scenario.visibleSelector.includes('.pwhook-dropdown-menu.show')
				if (!isDropdownVisibleSelector) {
					throw error
				}

				const forcedOpen = await forceOpenDropdownMenu(locator)
				if (!forcedOpen) {
					throw error
				}

				await page.waitForSelector(scenario.visibleSelector, {
					state: 'visible',
					timeout: 1500,
				})
			}
			break
		}
		default:
			throw new Error(`Unknown scenario kind: ${scenario.kind}`)
	}

	if (scenario.resetMouseToCornerAfterAction) {
		await page.mouse.move(0, 0)
	}

	await delay(scenario.settleDelayMs ?? 180)
}
