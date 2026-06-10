/**
 * T3 — Divergence manifest for the v2 literal converter.
 *
 * Lists every intentional deviation from a faithful CSS→VE translation.
 * The emitter consults this list before emitting any rule; matching entries
 * override the default 1:1 translation.
 *
 * Rule for adding entries (from plan §7.2):
 *   A divergence is justified only when faithful translation produces a
 *   WRONG RENDERING we intend to differ from (overlay bleed) or a RUNTIME
 *   CONSTRAINT (font isolation, JS wiring). Selector-shape quirks are handled
 *   mechanically by the emitter — they are NOT divergences.
 */

/**
 * @typedef {Object} PropRoute
 * @property {string[]} props   - CSS property names routed to this contract
 * @property {string}   contract - Target contract symbol name
 */

/**
 * @typedef {Object} Divergence
 * @property {string}   id     - Stable kebab-case identifier
 * @property {{ selector?: string, selectorContains?: string }} match
 * @property {'splitProps'|'skip'|'overrideSelector'|'addMirrorRule'} action
 * @property {PropRoute[]} [routes]           - splitProps: prop→contract routes
 * @property {string[]}    [contracts]        - overrideSelector: ordered contract symbols
 * @property {{ fromContract: string, toContract: string }} [substitute] - addMirrorRule
 * @property {string}   reason
 */

/** @type {Divergence[]} */
export const divergences = [
	{
		id: 'body-split',
		match: { selector: 'body' },
		action: 'splitProps',
		routes: [
			{
				// Typography props → bodyText (stamped on text containers and floating elements)
				props: [
					'font-family', 'font-size', 'font-weight', 'font-style',
					'line-height', 'color', 'letter-spacing', 'text-align',
					'-webkit-text-size-adjust', 'text-size-adjust',
				],
				contract: 'bodyText',
			},
			{
				// Canvas props → bodyFrame (stamped on the shell wrapper only)
				props: ['background-color', 'margin', 'background-image'],
				contract: 'bodyFrame',
			},
		],
		reason:
			'Ve2Shell stamps bodyFrame+bodyText on the wrapper div; full "body" (with background) ' +
			'would bleed through modal backdrops. Floating elements (tooltip/popover/backdrop) ' +
			'carry ${theme} ${vars} ${bodyText} explicitly so --bs-* vars resolve outside the scope tree.',
	},

	// ---- JS-adapter hook remaps ----

	{
		id: 'dropdown-menu-show',
		match: { selector: '.dropdown-menu.show' },
		action: 'overrideSelector',
		contracts: ['dropdownMenu', 'dropdownMenuShow'],
		reason:
			'VE Bootstrap JS (ve-dropdown.ts) stamps dropdownMenuShow on the visible menu, ' +
			'not the literal show contract. The source .dropdown-menu.show rule must target ' +
			'dropdownMenuShow so the menu becomes visible when the dropdown opens.',
	},

	{
		id: 'btn-show-hook',
		match: { selectorContains: '.btn.show' },
		action: 'addMirrorRule',
		substitute: { fromContract: 'show', toContract: 'btnShowHook' },
		reason:
			'VE Bootstrap JS (ve-dropdown.ts CLASS_NAME_SHOW_TRIGGER=btnShowHook) stamps ' +
			'btnShowHook on the trigger button when a dropdown opens, not the literal show ' +
			'contract. Mirror every .btn.show rule with btnShowHook so trigger-button active ' +
			'styling fires.',
	},
]

// ---------------------------------------------------------------------------
// Helpers used by the emitter
// ---------------------------------------------------------------------------

/** Actions that intercept (replace) normal rule processing. */
const INTERCEPTING_ACTIONS = new Set(['skip', 'splitProps', 'overrideSelector'])

/**
 * Find the primary divergence that intercepts normal processing for a selector.
 * Only matches entries whose action replaces the default translation.
 *
 * @param {string} cssSelector - normalized selector string
 */
export function findDivergence(cssSelector) {
	const trimmed = cssSelector.trim()
	return (
		divergences.find(
			(d) => INTERCEPTING_ACTIONS.has(d.action) && d.match.selector === trimmed,
		) ?? null
	)
}

/**
 * Find all additive divergences for a selector.
 * These run after normal processing and ADD extra rules without replacing it.
 *
 * @param {string} cssSelector - normalized selector string
 * @returns {Divergence[]}
 */
export function findAdditions(cssSelector) {
	const trimmed = cssSelector.trim()
	return divergences.filter((d) => {
		if (INTERCEPTING_ACTIONS.has(d.action)) return false
		if (d.match.selector) return d.match.selector === trimmed
		if (d.match.selectorContains) return trimmed.includes(d.match.selectorContains)
		return false
	})
}

/**
 * Apply a 'splitProps' divergence to a declarations object.
 * Returns an array of { contract, declarations } pairs — one per route,
 * containing only the props assigned to that route (plus any unrouted props
 * that fall through to the LAST route as a catch-all if desired).
 *
 * Unrouted props are DROPPED (not emitted). This is intentional: if a
 * source `body` rule has a prop not listed in any route, it is silently
 * omitted and a warning is printed.
 *
 * @param {Divergence} divergence
 * @param {Record<string,string>} declarations - raw CSS property→value map
 * @returns {{ contract: string, declarations: Record<string,string> }[]}
 */
export function applySplitProps(divergence, declarations) {
	const result = []
	const claimed = new Set()

	for (const route of divergence.routes) {
		const routed = {}
		for (const prop of route.props) {
			if (prop in declarations) {
				routed[prop] = declarations[prop]
				claimed.add(prop)
			}
		}
		if (Object.keys(routed).length > 0) {
			result.push({ contract: route.contract, declarations: routed })
		}
	}

	// Warn about unclaimed props
	const unclaimed = Object.keys(declarations).filter((p) => !claimed.has(p))
	if (unclaimed.length > 0) {
		console.warn(
			`  [divergence:${divergence.id}] unclaimed props (will be dropped): ${unclaimed.join(', ')}`,
		)
	}

	return result
}
