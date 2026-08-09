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
 * @property {'splitProps'|'skip'|'overrideSelector'|'addMirrorRule'|'remapSymbols'} action
 * @property {PropRoute[]} [routes]           - splitProps: prop→contract routes
 * @property {string[]}    [contracts]        - overrideSelector: ordered contract symbols
 * @property {{ fromContract: string, toContract: string }} [substitute] - addMirrorRule: single substitution
 * @property {Array<{ fromContract: string, toContract: string }>} [substitutes] - addMirrorRule: multiple simultaneous substitutions
 * @property {Record<string, string>} [symbolMap] - remapSymbols: old→new contract name pairs
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
					'font-family',
					'font-size',
					'font-weight',
					'font-style',
					'line-height',
					'color',
					'letter-spacing',
					'text-align',
					'-webkit-text-size-adjust',
					'text-size-adjust',
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

	// ---- <legend> element rules → legend class contract ----
	// RadioButtons/DisabledRadioButtons stamp the `legend` class contract on <legend>,
	// not the `elLegend` element contract, so the bare `legend {…}` element rules (which
	// translate to elLegend) never apply. Mirror every legend element rule onto the
	// legend class contract so the reboot props AND theme overrides (e.g. slate's
	// `legend { color:#fff }`) reach the stamped element. Fans out to all themes.
	{
		id: 'legend-element-mirror',
		match: { selector: 'legend' },
		action: 'addMirrorRule',
		substitute: { fromContract: 'elLegend', toContract: 'legend' },
		reason:
			'Components stamp the legend class contract (not elLegend) on <legend>; mirror ' +
			'legend element rules (reboot + theme color override) onto the legend class contract.',
	},
]

// ---------------------------------------------------------------------------
// Specificity normalization (plan §10.2)
// ---------------------------------------------------------------------------
//
// The element-owned model maps element TAGS to contract CLASSES and prefixes every
// named segment with the scope class. A selector therefore gains roughly one class of
// specificity PER SEGMENT versus its source. For most rules this is harmless (it shifts
// all competing VE rules equally), but it breaks when two source rules of DIFFERENT
// segment counts compete: the longer selector wins in VE even though the shorter, higher-
// class-count selector won in the source.
//
// Concrete case (lumen only): the legacy `.pagination > li > a { color:#555 }` (source
// specificity 0,1,2) becomes `${scope}${pagination} > ${scope}${elLi} > ${scope}${link}`
// = 0,6,0 in VE, which OUTRANKS `.disabled > .page-link { color:#999 }`
// (`${scope}${disabled} > ${scope}${pageLink}` = 0,4,0) — so the disabled Previous
// link rendered #555 instead of #999. In the source the disabled rule (0,3,0) beat the
// legacy rule (0,1,2), so #999 won.
//
// Fix: for selectors listed here, wrap each PURE-element segment (a bare tag → element
// contract, no class) in `:where()` so it contributes 0 specificity — restoring the source
// ordering (only true class segments count). Scoped to the listed selector substrings so it
// can't disturb cases that legitimately rely on the inflated specificity (e.g. sketchy's
// `.table-dark th`, which must out-specify the `.table > … > *` cell rule by source order).
export const LOWER_ELEMENT_SPECIFICITY_SELECTORS = ['.pagination > li']

/** True if the element segments of this selector should be `:where()`-wrapped (see above). */
export function shouldLowerElementSpecificity(cssSelector) {
	return LOWER_ELEMENT_SPECIFICITY_SELECTORS.some((p) => cssSelector.includes(p))
}

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
		if (d.action === 'remapSymbols') return false
		if (d.match.selector) return d.match.selector === trimmed
		if (d.match.selectorContains) return trimmed.includes(d.match.selectorContains)
		return false
	})
}

/**
 * Find all remapSymbols divergences that match a selector.
 * Each matching entry's symbolMap is applied (in order) to substitute contract
 * names in the already-translated VE selector string.
 *
 * @param {string} cssSelector - original (untranslated) CSS selector
 * @returns {Divergence[]}
 */
export function findRemaps(cssSelector) {
	const trimmed = cssSelector.trim()
	return divergences.filter((d) => {
		if (d.action !== 'remapSymbols') return false
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

// ---------------------------------------------------------------------------
// Extra rules — appended at end of every generated styles.css.ts
// ---------------------------------------------------------------------------

/**
 * Extra globalStyle rules that have no corresponding Bootstrap CSS class selector
 * but are needed because VE2 components stamp these class contracts directly on
 * their HTML elements. Values are copied verbatim from the Bootstrap CSS element
 * rules they mirror.
 *
 * Single-contract entries use `contract: string`.
 * Disambiguation entries use `contracts: string[]` — emitted as a combined
 * selector `${scope}${a}${b}...` with higher specificity than any single-contract
 * rule. Use this when a Bootstrap element rule (0-0-1) and a class rule (0-1-0)
 * both become 0-1-0 class selectors in VE and document order breaks the override.
 * Only add combinations that components in ve-project2 actually stamp together.
 *
 * @type {Array<{ id: string, contract?: string, contracts?: string[], props: Record<string,string>, reason: string }>}
 */
export const EXTRA_RULES = [
	{
		id: 'list-base',
		contract: 'listBase',
		props: { marginTop: '0', marginBottom: '1rem' },
		reason: 'UnstyledList stamps listBase on <ol>/<ul>/<dl>; mirrors ol,ul,dl { margin } reboot rule',
	},
	{
		id: 'list-nested',
		contract: 'listNested',
		props: { marginBottom: '0' },
		reason: 'UnstyledList stamps listNested on nested lists; mirrors ol ol, ul ul, ... { margin-bottom:0 }',
	},
	{
		id: 'list-indented',
		contract: 'listIndented',
		props: { paddingLeft: '2rem' },
		reason: 'UnstyledList stamps listIndented on nested lists; mirrors ol,ul { padding-left:2rem }',
	},
	{
		id: 'legend-clear',
		contract: 'legendClear',
		props: { clear: 'left' },
		reason: 'RadioButtons stamps legendClear on the div after <legend>; mirrors legend + * { clear:left }',
	},
	{
		id: 'small-text',
		contract: 'smallText',
		props: { fontSize: '0.875em' },
		reason: 'TextElements stamps smallText on <small>; mirrors small element rule',
	},
	{
		id: 'scrollspy-example',
		contract: 'scrollspyExample',
		props: { height: '200px', overflowY: 'auto', marginTop: '0.5rem' },
		reason: 'ScrollspyExample stamps scrollspyExample; fixed dimensions needed for scrollable demo container',
	},
	{
		id: 'form-switch-isolation',
		contract: 'formSwitch',
		props: { isolation: 'isolate' },
		reason:
			"Materia's `.form-switch .form-check-input::after` focus-glow uses `z-index:-1` to sit " +
			'behind the switch knob but over the page background. In the element-owned model the page ' +
			'background lives on the bodyFrame DIV (body-split divergence §7.1), not the <body> canvas, ' +
			'so a negative-z descendant paints BEHIND that opaque div and vanishes. Making form-switch ' +
			'(a transparent ancestor of the ::after, but NOT an ancestor of body-portaled modals) a ' +
			'stacking context lets the glow composite over the bodyFrame background, matching baseline. ' +
			'Isolating bodyFrame itself would instead trap the modal dialog below its body-level backdrop. ' +
			'Benign for themes without the Material ::after glow (no negative-z children).',
	},
]
