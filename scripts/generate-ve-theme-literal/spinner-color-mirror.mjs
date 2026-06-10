/**
 * VE spinner components stamp spinnerPrimary/spinnerDanger/etc. (not text-* utilities).
 * Bootstrap source CSS defines .text-primary, .text-danger, … — mirror those rules onto spinner* contracts.
 */
export const TEXT_SELECTOR_TO_SPINNER_CONTRACT = {
	'.text-primary': 'spinnerPrimary',
	'.text-secondary': 'spinnerSecondary',
	'.text-success': 'spinnerSuccess',
	'.text-danger': 'spinnerDanger',
	'.text-warning': 'spinnerWarning',
	'.text-info': 'spinnerInfo',
	'.text-light': 'spinnerLight',
	'.text-dark': 'spinnerDark',
}

export function spinnerContractForTextSelector(selector) {
	const normalized = selector.trim().split(',')[0].trim()
	return TEXT_SELECTOR_TO_SPINNER_CONTRACT[normalized] ?? null
}
