/** Badge pills stamp badgeTextDark instead of `.text-dark` on warning/info/light fills. */
export const TEXT_SELECTOR_TO_BADGE_TEXT_DARK = {
	'.text-dark': 'badgeTextDark',
}

export function badgeTextDarkContractForTextSelector(selector) {
	const normalized = selector.trim().split(',')[0].trim()
	return TEXT_SELECTOR_TO_BADGE_TEXT_DARK[normalized] ?? null
}
