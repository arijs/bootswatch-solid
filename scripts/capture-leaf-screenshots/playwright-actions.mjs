import { setTimeout as delay } from 'node:timers/promises'

function ensureSelector(locator, selector) {
	if (!locator) {
		throw new Error(`Selector not found: ${selector}`)
	}
}

export async function performScenarioAction(page, scenario, themeSlug) {
	if (scenario.kind === 'static') return

	const scenarioLocator = scenario.selector instanceof Function
		? scenario.selector(page, themeSlug)
		: scenario.selector
	const locator = typeof scenarioLocator === 'string'
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

	await delay(180)
}
