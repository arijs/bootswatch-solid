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
 * @property {string}     id      - Stable kebab-case identifier
 * @property {{ selector?: string }} match - Source selector to intercept
 * @property {'splitProps'|'skip'} action
 * @property {PropRoute[]} [routes] - For splitProps: where each prop group goes
 * @property {string}     reason
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

	// --------------------------------------------------------------------
	// Future entries go here, each with a reason.
	// Example shape:
	// {
	//   id: 'example-skip',
	//   match: { selector: '.some-selector' },
	//   action: 'skip',
	//   reason: 'Handled entirely by the JS adapter; no static CSS needed.',
	// },
	// --------------------------------------------------------------------
]

// ---------------------------------------------------------------------------
// Helpers used by the emitter
// ---------------------------------------------------------------------------

/**
 * Find a divergence entry for the given CSS selector.
 * Returns the matching Divergence or null.
 *
 * @param {string} cssSelector - normalized selector string
 */
export function findDivergence(cssSelector) {
	const trimmed = cssSelector.trim()
	return divergences.find((d) => d.match.selector === trimmed) ?? null
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
