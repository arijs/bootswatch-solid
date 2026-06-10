/**
 * VE progress bar components stamp progressBarInfo/progressBarSuccess/etc. (not raw .bg-*).
 * Mirror Bootstrap .bg-* utility rules onto progressBar* contracts for the literal monolith.
 */
export const BG_SELECTOR_TO_PROGRESS_BAR_CONTRACT = {
	'.bg-success': 'progressBarSuccess',
	'.bg-info': 'progressBarInfo',
	'.bg-warning': 'progressBarWarning',
	'.bg-danger': 'progressBarDanger',
}

/** Progress labels use progressBarTextDark instead of .text-dark on the bar. */
export const TEXT_SELECTOR_TO_PROGRESS_BAR_TEXT = {
	'.text-dark': 'progressBarTextDark',
}

export function progressBarContractForBgSelector(selector) {
	const normalized = selector.trim().split(',')[0].trim()
	return BG_SELECTOR_TO_PROGRESS_BAR_CONTRACT[normalized] ?? null
}

export function progressBarContractForTextSelector(selector) {
	const normalized = selector.trim().split(',')[0].trim()
	return TEXT_SELECTOR_TO_PROGRESS_BAR_TEXT[normalized] ?? null
}
