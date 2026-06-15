import { setTimeout as delay } from 'node:timers/promises'

function ensureSelector(locator, selector) {
	if (!locator) {
		throw new Error(`Selector not found: ${selector}`)
	}
}

/**
 * Wait until an element's visual signature (bounding box + opacity + transform) stops
 * changing for a few consecutive samples, so a CSS transition has finished before capture.
 *
 * Needed because themes like brite animate components (`.btn { transition: all 0.3s }`):
 * after a click + mouse-out the button reverts its `transform: translate(-3px,-3px)` hover
 * state over 300ms, which moves the Popper-anchored dropdown menu. A fixed sub-300ms settle
 * delay captures mid-animation → non-deterministic screenshots (heights of 197/200/201 for
 * the same scenario). Polling the signature converges as soon as the animation lands and
 * never hangs on infinite animations (it caps at `timeout`).
 *
 * @param {import('playwright').Page} page
 * @param {string|import('playwright').Locator} selectorOrLocator
 */
async function waitForVisualStable(
	page,
	selectorOrLocator,
	{ timeout = 2000, interval = 50, stableFrames = 3 } = {},
) {
	const locator =
		typeof selectorOrLocator === 'string'
			? page.locator(selectorOrLocator).first()
			: selectorOrLocator
	const start = Date.now()
	let last = null
	let stable = 0
	while (Date.now() - start < timeout) {
		const sig = await locator
			.evaluate((el) => {
				const r = el.getBoundingClientRect()
				const cs = getComputedStyle(el)
				return `${r.x},${r.y},${r.width},${r.height}|${cs.opacity}|${cs.transform}`
			})
			.catch(() => null)
		if (sig !== null && sig === last) {
			if (++stable >= stableFrames) return
		} else {
			stable = 0
		}
		last = sig
		await delay(interval)
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

async function slideCarouselToIndex(
	locator,
	{ targetIndex, timeoutMs, scenarioKind, state, route },
) {
	await locator.evaluate(
		async (carouselElement, config) => {
			const getActiveClassTokens = (CarouselClass) => {
				const configured =
					CarouselClass.getConfigConstants?.().CLASS_NAME_ACTIVE ?? 'active'
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

				return items.findIndex((item) => hasAnyToken(item, activeClassTokens))
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

async function clickCarouselControl(
	locator,
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
) {
	await locator.evaluate(
		async (carouselElement, config) => {
			const getActiveClassTokens = (CarouselClass) => {
				const configured =
					CarouselClass.getConfigConstants?.().CLASS_NAME_ACTIVE ?? 'active'
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

				return items.findIndex((item) => hasAnyToken(item, activeClassTokens))
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
				throw new Error(
					`Carousel settled at index ${settledIndex}, expected ${targetIndex}`,
				)
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
				const activeItemIndex = items.findIndex((item) =>
					hasAnyToken(item, effectiveActiveClassTokens),
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

		// Border spinners are fully visible at animation t=0; subpixel differences between
		// WAAPI-seek and static CSS exceed the default 0.001 verify threshold. Pin both
		// baseline and VE captures to the same static frame (works with .spinner-border
		// and VE contract classes that keep animation-name: spinner-border).
		const spinnerBorderNames = new Set(['spinner-border'])
		const spinnerGrowNames = new Set(['spinner-grow'])
		for (const element of document.querySelectorAll('*')) {
			const animationName = getComputedStyle(element).animationName
			if (!animationName || animationName === 'none') continue
			const names = animationName.split(',').map((part) => part.trim())
			if (names.some((name) => spinnerBorderNames.has(name))) {
				element.style.setProperty('animation', 'none', 'important')
				element.style.setProperty('transform', 'rotate(0deg)', 'important')
				continue
			}
			if (names.some((name) => spinnerGrowNames.has(name))) {
				element.style.setProperty('animation', 'none', 'important')
				element.style.setProperty('opacity', '0', 'important')
				element.style.setProperty('transform', 'scale(0)', 'important')
			}
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

	const selectorContext = { theme: themeSlug }
	const scenarioLocator =
		scenario.selector instanceof Function
			? scenario.selector(page, selectorContext)
			: scenario.selector
	const locator =
		typeof scenarioLocator === 'string'
			? page.locator(scenarioLocator).first()
			: scenarioLocator.first()
	await locator.waitFor({
		state: scenario.locatorState?.(selectorContext) ?? 'visible',
		timeout: 5000,
	})
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
		case 'carousel-to-index': {
			assertCarouselIndex(scenario.targetIndex, 'targetIndex')
			const timeoutMs = resolveCarouselTimeoutMs(scenario.transitionTimeoutMs)
			const carouselSelector = scenario.carouselSelector ?? scenario.selector
			const carouselLocator = page.locator(carouselSelector).first()
			await carouselLocator.waitFor({
				state: scenario.locatorState?.(selectorContext) ?? 'visible',
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
				state: scenario.locatorState?.(selectorContext) ?? 'visible',
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

	// Settle CSS transitions before the fixed delay so animated components (e.g. brite's
	// hover-out button transform that drags Popper-anchored menus) capture deterministically.
	// Carousel kinds run their own transition synchronization, so skip them here.
	const settleTarget = scenario.visibleSelector ?? (scenario.kind === 'hover' ? locator : null)
	if (settleTarget) {
		await waitForVisualStable(page, settleTarget)
		// Floating components (dropdown/tooltip/popover/modal) are Popper-positioned and
		// anchored ONCE — during the anchor's open animation. With brite's
		// `.btn { transition: all 0.3s; transform: translate(-3px,-3px) }` the toggle is still
		// mid-animation when Popper resolves, so the menu keeps a transient ~3px offset and
		// Popper never recomputes on its own. This makes the original app itself flaky (the
		// menu lands at either the offset or the settled position). Nudge a resize so Popper
		// re-resolves against the now-settled anchor — deterministic across baseline and VE.
		if (scenario.kind === 'click-visible' || scenario.kind === 'hover-visible') {
			// Await web fonts BEFORE the nudge: the floating element's width is a snapshot taken
			// when it opens, and a lazily-loaded web font can change that width afterward (e.g.
			// sketchy's HTML tooltip swaps 'Cabin Sketch' into <b>, shrinking the box ~6px). Popper
			// does not re-anchor on the swap, so its left stays width-stale. Whichever of
			// {baseline, VE} happens to re-anchor before vs after the swap lands a few px off from
			// the other. Gating the nudge on fonts.ready makes the final re-anchor use settled
			// metrics in both apps → deterministic, matching positions.
			await page.evaluate(async () => {
				if (document.fonts?.ready) {
					await document.fonts.ready
					const stillLoading = [...document.fonts].filter((f) => f.status === 'loading')
					await Promise.allSettled(stillLoading.map((f) => f.loaded))
				}
				window.dispatchEvent(new Event('resize'))
			})
			await waitForVisualStable(page, settleTarget)
		}
	}

	await delay(scenario.settleDelayMs ?? 180)
}
