import { setTimeout as delay } from 'node:timers/promises'

function ensureSelector(locator, selector) {
	if (!locator) {
		throw new Error(`Selector not found: ${selector}`)
	}
}

function resolveCarouselTimeoutMs(rawTimeoutMs) {
	if (rawTimeoutMs === undefined) {
		return 2000
	}

	if (!Number.isFinite(rawTimeoutMs) || rawTimeoutMs <= 0) {
		throw new Error(`Invalid carousel timeout: ${rawTimeoutMs}`)
	}

	return Math.floor(rawTimeoutMs)
}

function assertCarouselIndex(rawIndex, label) {
	if (!Number.isInteger(rawIndex) || rawIndex < 0) {
		throw new Error(`Invalid ${label}: ${rawIndex}`)
	}
}

function assertCarouselDirection(rawDirection) {
	if (rawDirection !== 'next' && rawDirection !== 'prev') {
		throw new Error(`Invalid carousel direction: ${rawDirection}`)
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

async function slideCarouselToIndex(locator, {
	targetIndex,
	timeoutMs,
	scenarioKind,
	state,
	route,
}) {
	await locator.evaluate(
		async (carouselElement, config) => {
			const getActiveClassTokens = (CarouselClass) => {
				const configured = CarouselClass.getConfigConstants?.().CLASS_NAME_ACTIVE ?? 'active'
				const tokens = configured.split(/\s+/).filter(Boolean)
				return tokens.length > 0 ? tokens : ['active']
			}

			const hasAnyToken = (element, tokens) =>
				tokens.some((token) => element.classList.contains(token))

			const getActiveIndex = (items, indicators) => {
				const indicatorIndex = indicators.findIndex(
					(indicator) => indicator.getAttribute('aria-current') === 'true',
				)
				if (indicatorIndex >= 0) {
					return indicatorIndex
				}

				return items.findIndex(
					(item) => hasAnyToken(item, activeClassTokens),
				)
			}

			const CarouselClass = window.VeCarousel ?? window.bootstrap?.Carousel
			if (!CarouselClass) {
				throw new Error('Carousel API is unavailable on this route')
			}
			const activeClassTokens = getActiveClassTokens(CarouselClass)

			const items = [...carouselElement.querySelectorAll('.pwhook-carousel-item')]
			if (items.length === 0) {
				throw new Error('No .pwhook-carousel-item elements found')
			}
			const indicators = [...carouselElement.querySelectorAll('.pwhook-carousel-indicator')]

			const activeIndex = getActiveIndex(items, indicators)
			if (activeIndex === config.targetIndex) {
				return
			}

			const instance = CarouselClass.getOrCreateInstance(carouselElement)
			instance.pause()

			await new Promise((resolve, reject) => {
				const timeoutId = window.setTimeout(() => {
					carouselElement.removeEventListener('slid.bs.carousel', onSlid)
					reject(
						new Error(
							`${config.scenarioKind} timed out after ${config.timeoutMs}ms (route=${config.route}, state=${config.state}, targetIndex=${config.targetIndex})`,
						),
					)
				}, config.timeoutMs)

				const onSlid = (event) => {
					const eventTargetIndex = event?.to ?? event?.detail?.to
					if (eventTargetIndex !== undefined && eventTargetIndex !== config.targetIndex) {
						return
					}

					const settledIndex = getActiveIndex(items, indicators)
					if (settledIndex !== config.targetIndex) {
						return
					}

					window.clearTimeout(timeoutId)
					carouselElement.removeEventListener('slid.bs.carousel', onSlid)
					resolve()
				}

				carouselElement.addEventListener('slid.bs.carousel', onSlid)
				instance.to(config.targetIndex)
			})

			const settledIndex = getActiveIndex(items, indicators)
			if (settledIndex !== config.targetIndex) {
				throw new Error(
					`Carousel settled at index ${settledIndex}, expected ${config.targetIndex}`,
				)
			}
		},
		{
			targetIndex,
			timeoutMs,
			scenarioKind,
			state,
			route,
		},
	)
}

async function clickCarouselControl(locator, {
	startIndex,
	direction,
	expectedIndex,
	timeoutMs,
	controlSelector,
	scenarioKind,
	state,
	route,
}) {
	await locator.evaluate(
		async (carouselElement, config) => {
			const getActiveClassTokens = (CarouselClass) => {
				const configured = CarouselClass.getConfigConstants?.().CLASS_NAME_ACTIVE ?? 'active'
				const tokens = configured.split(/\s+/).filter(Boolean)
				return tokens.length > 0 ? tokens : ['active']
			}

			const hasAnyToken = (element, tokens) =>
				tokens.some((token) => element.classList.contains(token))

			const getActiveIndex = (items, indicators) => {
				const indicatorIndex = indicators.findIndex(
					(indicator) => indicator.getAttribute('aria-current') === 'true',
				)
				if (indicatorIndex >= 0) {
					return indicatorIndex
				}

				return items.findIndex(
					(item) => hasAnyToken(item, activeClassTokens),
				)
			}

			const CarouselClass = window.VeCarousel ?? window.bootstrap?.Carousel
			if (!CarouselClass) {
				throw new Error('Carousel API is unavailable on this route')
			}
			const activeClassTokens = getActiveClassTokens(CarouselClass)

			const items = [...carouselElement.querySelectorAll('.pwhook-carousel-item')]
			if (items.length === 0) {
				throw new Error('No .pwhook-carousel-item elements found')
			}
			const indicators = [...carouselElement.querySelectorAll('.pwhook-carousel-indicator')]

			const waitForSlidToIndex = (targetIndex) =>
				new Promise((resolve, reject) => {
					const timeoutId = window.setTimeout(() => {
						carouselElement.removeEventListener('slid.bs.carousel', onSlid)
						reject(
							new Error(
								`${config.scenarioKind} timed out after ${config.timeoutMs}ms (route=${config.route}, state=${config.state}, targetIndex=${targetIndex}, direction=${config.direction})`,
							),
						)
					}, config.timeoutMs)

					const onSlid = (event) => {
						const eventTargetIndex = event?.to ?? event?.detail?.to
						if (eventTargetIndex !== undefined && eventTargetIndex !== targetIndex) {
							return
						}

						const settledIndex = getActiveIndex(items, indicators)
						if (settledIndex !== targetIndex) {
							return
						}

						window.clearTimeout(timeoutId)
						carouselElement.removeEventListener('slid.bs.carousel', onSlid)
						resolve()
					}

					carouselElement.addEventListener('slid.bs.carousel', onSlid)
				})

			const instance = CarouselClass.getOrCreateInstance(carouselElement)
			instance.pause()

			if (config.startIndex !== null) {
				if (config.startIndex >= items.length) {
					throw new Error(
						`Start index ${config.startIndex} is out of bounds for ${items.length} slide(s)`,
					)
				}

				const activeIndex = getActiveIndex(items, indicators)
				if (activeIndex !== config.startIndex) {
					const waitPromise = waitForSlidToIndex(config.startIndex)
					instance.to(config.startIndex)
					await waitPromise
				}
			}

			const currentIndex = getActiveIndex(items, indicators)
			if (currentIndex < 0) {
				throw new Error('Carousel has no active item before control click')
			}

			const derivedExpectedIndex =
				config.direction === 'next'
					? (currentIndex + 1) % items.length
					: (currentIndex - 1 + items.length) % items.length
			const targetIndex = config.expectedIndex ?? derivedExpectedIndex

			if (targetIndex >= items.length) {
				throw new Error(
					`Expected index ${targetIndex} is out of bounds for ${items.length} slide(s)`,
				)
			}

			const control =
				carouselElement.querySelector(config.controlSelector) ??
				document.querySelector(config.controlSelector)
			if (!control) {
				throw new Error(`Carousel control not found: ${config.controlSelector}`)
			}

			const waitPromise = waitForSlidToIndex(targetIndex)
			control.click()
			await waitPromise

			const settledIndex = getActiveIndex(items, indicators)
			if (settledIndex !== targetIndex) {
				throw new Error(`Carousel settled at index ${settledIndex}, expected ${targetIndex}`)
			}
		},
		{
			startIndex,
			direction,
			expectedIndex,
			timeoutMs,
			controlSelector,
			scenarioKind,
			state,
			route,
		},
	)
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
			const CarouselClass = window.VeCarousel ?? window.bootstrap?.Carousel
			if (CarouselClass) {
				for (const element of document.querySelectorAll('.pwhook-carousel')) {
					CarouselClass.getOrCreateInstance(element).pause()
				}
			}
		} catch {
			// Ignore if Bootstrap JS is unavailable for this route.
		}

		// Carousels can transiently mark multiple indicators as active during hydration/ride init.
		// Force a single stable active item/indicator pair before capture while
		// preserving the currently active slide selected by an interactive scenario.
		const CarouselClass = window.VeCarousel ?? window.bootstrap?.Carousel
		const activeClassTokens = (
			CarouselClass?.getConfigConstants?.().CLASS_NAME_ACTIVE ?? 'active'
		)
			.split(/\s+/)
			.filter(Boolean)
		const effectiveActiveClassTokens =
			activeClassTokens.length > 0 ? activeClassTokens : ['active']
		const hasAnyToken = (element, tokens) =>
			tokens.some((token) => element.classList.contains(token))
		const addTokens = (element, tokens) => {
			tokens.forEach((token) => element.classList.add(token))
		}
		const removeTokens = (element, tokens) => {
			tokens.forEach((token) => element.classList.remove(token))
		}

		for (const carousel of document.querySelectorAll('.pwhook-carousel')) {
			try {
				const items = [...carousel.querySelectorAll('.pwhook-carousel-item')]
				if (items.length === 0) continue

				const indicators = [...carousel.querySelectorAll('.pwhook-carousel-indicator')]
				const activeItemIndex = items.findIndex(
					(item) => hasAnyToken(item, effectiveActiveClassTokens),
				)
				const activeIndicatorIndex = indicators.findIndex(
					(indicator) =>
						indicator.getAttribute('aria-current') === 'true' ||
						hasAnyToken(indicator, effectiveActiveClassTokens),
				)
				const activeIndex =
					activeItemIndex >= 0
						? activeItemIndex
						: activeIndicatorIndex >= 0
							? activeIndicatorIndex
							: 0

				for (let index = 0; index < items.length; index += 1) {
					const item = items[index]
					item.classList.remove(
						'carousel-item-next',
						'carousel-item-prev',
						'carousel-item-start',
						'carousel-item-end',
					)
					if (index === activeIndex) {
						addTokens(item, effectiveActiveClassTokens)
					} else {
						removeTokens(item, effectiveActiveClassTokens)
					}
				}
				for (let index = 0; index < indicators.length; index += 1) {
					const indicator = indicators[index]
					indicator.style.setProperty('transition', 'none', 'important')
					if (index === activeIndex) {
						addTokens(indicator, effectiveActiveClassTokens)
						indicator.setAttribute('aria-current', 'true')
						indicator.style.setProperty('opacity', '1', 'important')
					} else {
						removeTokens(indicator, effectiveActiveClassTokens)
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
		case 'carousel-to-index': {
			assertCarouselIndex(scenario.targetIndex, 'targetIndex')
			const timeoutMs = resolveCarouselTimeoutMs(scenario.transitionTimeoutMs)
			const carouselSelector = scenario.carouselSelector ?? scenario.selector
			const carouselLocator = page.locator(carouselSelector).first()
			await carouselLocator.waitFor({
				state: scenario.locatorState?.(themeSlug) ?? 'visible',
				timeout: 5000,
			})

			await slideCarouselToIndex(carouselLocator, {
				targetIndex: scenario.targetIndex,
				timeoutMs,
				scenarioKind: scenario.kind,
				state: scenario.state ?? 'unknown',
				route: scenario.route ?? 'unknown',
			})
			break
		}
		case 'carousel-click-control': {
			assertCarouselDirection(scenario.direction)
			const timeoutMs = resolveCarouselTimeoutMs(scenario.transitionTimeoutMs)
			const carouselSelector = scenario.carouselSelector ?? scenario.selector
			const controlSelector =
				scenario.controlSelector ?? `[data-bs-slide="${scenario.direction}"]`

			if (scenario.startIndex !== undefined) {
				assertCarouselIndex(scenario.startIndex, 'startIndex')
			}
			if (scenario.expectedIndex !== undefined) {
				assertCarouselIndex(scenario.expectedIndex, 'expectedIndex')
			}

			const carouselLocator = page.locator(carouselSelector).first()
			await carouselLocator.waitFor({
				state: scenario.locatorState?.(themeSlug) ?? 'visible',
				timeout: 5000,
			})

			await clickCarouselControl(carouselLocator, {
				startIndex: scenario.startIndex ?? null,
				direction: scenario.direction,
				expectedIndex: scenario.expectedIndex,
				timeoutMs,
				controlSelector,
				scenarioKind: scenario.kind,
				state: scenario.state ?? 'unknown',
				route: scenario.route ?? 'unknown',
			})
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
