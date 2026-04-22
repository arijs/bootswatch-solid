const DEFAULT_CAPTURE_SETTLE_DELAY_MS = 120
const DEFAULT_INITIAL_NAVIGATION_WARMUP_DELAY_MS = 0

const SETTLE_DELAY_OVERRIDES = [
	{
		theme: 'vapor',
		route: '/ui/accordion/accordion-example',
		state: 'static',
		delayMs: 450,
	},
	{
		theme: 'vapor',
		route: '/ui/buttons/outline/danger-button',
		state: 'static',
		delayMs: 450,
	},
	{
		route: '/ui/carousel/carousel-example',
		state: 'static',
		delayMs: 450,
	},
]

const INITIAL_NAVIGATION_WARMUP_OVERRIDES = [
	{
		route: '/ui/carousel/carousel-example',
		state: 'static',
		delayMs: 450,
	},
]

export function resolveScreenshotSettleDelayMs({ themeSlug, route, stateFolder, scenario }) {
	const scenarioDelay = Number.isFinite(scenario?.settleDelayMs)
		? Math.max(0, scenario.settleDelayMs)
		: 0

	let overrideDelay = 0
	for (const rule of SETTLE_DELAY_OVERRIDES) {
		if (rule.theme && rule.theme !== themeSlug) continue
		if (rule.route && rule.route !== route) continue
		if (rule.state && rule.state !== stateFolder) continue
		overrideDelay = Math.max(overrideDelay, rule.delayMs)
	}

	return Math.max(DEFAULT_CAPTURE_SETTLE_DELAY_MS, scenarioDelay, overrideDelay)
}

export function resolveInitialNavigationWarmupDelayMs({ themeSlug, route, stateFolder }) {
	let overrideDelay = DEFAULT_INITIAL_NAVIGATION_WARMUP_DELAY_MS
	for (const rule of INITIAL_NAVIGATION_WARMUP_OVERRIDES) {
		if (rule.theme && rule.theme !== themeSlug) continue
		if (rule.route && rule.route !== route) continue
		if (rule.state && rule.state !== stateFolder) continue
		overrideDelay = Math.max(overrideDelay, rule.delayMs)
	}

	return overrideDelay
}