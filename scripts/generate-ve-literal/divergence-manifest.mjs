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

	// ---- Component-specific state contract remaps ----
	// These rules use shared Bootstrap state classes (.active, .disabled, .show, etc.)
	// but the VE components stamp component-specific contracts. The CSS must use those
	// same contracts so the rules fire when the JS/TSX stamps the correct class hash.

	{
		id: 'nav-link-active',
		match: { selectorContains: '.nav-link.active' },
		action: 'remapSymbols',
		symbolMap: { active: 'navLinkActive' },
		reason:
			'BasicNav/PillNav/NavbarNav stamp navLinkActive on the active link, not the ' +
			'shared active contract. Without this remap the active-tab/pill CSS never fires.',
	},
	{
		id: 'nav-link-disabled',
		match: { selectorContains: '.nav-link.disabled' },
		action: 'remapSymbols',
		symbolMap: { disabled: 'navLinkDisabled' },
		reason:
			'Nav components stamp navLinkDisabled for disabled links; the shared disabled ' +
			'contract is not stamped by the nav adapter.',
	},
	{
		id: 'accordion-button-not-collapsed',
		match: { selectorContains: '.accordion-button:not' },
		action: 'remapSymbols',
		symbolMap: { collapsed: 'accordionButtonCollapsed' },
		reason:
			've-accordion stamps accordionButtonCollapsed; .accordion-button:not(.collapsed) ' +
			'must target that contract so the active-accordion styles fire.',
	},
	{
		id: 'accordion-last-item-collapsed',
		match: { selectorContains: '.accordion-item:last-of-type' },
		action: 'remapSymbols',
		symbolMap: { collapsed: 'accordionButtonCollapsed' },
		reason:
			'The last accordion-item border-radius rule uses .accordion-button.collapsed; ' +
			'must target accordionButtonCollapsed to match what ve-accordion stamps.',
	},
	{
		id: 'toast-show-hidden',
		match: { selectorContains: '.toast:not(.show)' },
		action: 'remapSymbols',
		symbolMap: { show: 'toastShow' },
		reason:
			've-toast stamps toastShow when visible; the CSS :not() guard must use toastShow ' +
			'so hidden toasts get display:none correctly.',
	},
	{
		id: 'toast-showing',
		match: { selectorContains: '.toast.showing' },
		action: 'remapSymbols',
		symbolMap: { showing: 'toastShowing' },
		reason: 've-toast stamps toastShowing during the show transition, not the shared showing contract.',
	},
	{
		id: 'modal-show',
		match: { selectorContains: '.modal.show' },
		action: 'remapSymbols',
		symbolMap: { show: 'modalShowHook' },
		reason:
			've-modal CLASS_NAME_SHOW stamps modalShowHook, not the shared show contract. ' +
			'The .modal.show .modal-dialog rule must use modalShowHook for the open modal to ' +
			'have transform:none applied.',
	},
	{
		id: 'modal-backdrop-show',
		match: { selectorContains: '.modal-backdrop.show' },
		action: 'remapSymbols',
		symbolMap: { show: 'modalShowHook' },
		reason:
			'The modal backdrop uses the same CLASS_NAME_SHOW=modalShowHook as the modal itself. ' +
			'Without the remap the backdrop stays at opacity:0 when the modal opens.',
	},
	{
		id: 'pagination-active',
		match: { selectorContains: '.page-' },
		action: 'remapSymbols',
		symbolMap: { active: 'pageItemActive', disabled: 'pageItemDisabled' },
		reason:
			've-pagination stamps pageItemActive/pageItemDisabled; the shared active/disabled ' +
			'contracts are not stamped by the pagination adapter.',
	},

	// ---- Tooltip family-specific show ----
	{
		id: 'tooltip-show',
		match: { selectorContains: '.tooltip.show' },
		action: 'remapSymbols',
		symbolMap: { show: 'tooltipShow' },
		reason:
			've-tooltip stamps tooltipShow (CLASS_NAME_SHOW=tooltipShow), not the shared show ' +
			'contract. .tooltip.show opacity rule must target tooltipShow.',
	},

	// ---- Modal family-specific fade ----
	{
		id: 'modal-fade-selector',
		match: { selectorContains: '.modal.fade' },
		action: 'remapSymbols',
		symbolMap: { fade: 'modalFade' },
		reason:
			've-modal uses CLASS_NAME_FADE=modalFade (not navs fade). ' +
			'.modal.fade .modal-dialog transform rule must target modalFade.',
	},
	{
		id: 'modal-backdrop-fade',
		match: { selectorContains: '.modal-backdrop.fade' },
		action: 'remapSymbols',
		symbolMap: { fade: 'modalFade' },
		reason: 'Modal backdrop Backdrop class also receives CLASS_NAME_FADE=modalFade.',
	},

	// ---- Per-family .fade transition mirrors ----
	{
		id: 'tooltip-fade-transition',
		match: { selector: '.fade' },
		action: 'addMirrorRule',
		substitute: { fromContract: 'fade', toContract: 'tooltipFade' },
		reason: 'Tooltip template uses tooltipFade; mirror .fade transition rule so tooltipFade elements animate.',
	},
	{
		id: 'popover-fade-transition',
		match: { selector: '.fade' },
		action: 'addMirrorRule',
		substitute: { fromContract: 'fade', toContract: 'popoverFade' },
		reason: 'Popover template uses popoverFade; mirror .fade transition rule so popoverFade elements animate.',
	},
	{
		id: 'modal-fade-transition',
		match: { selector: '.fade' },
		action: 'addMirrorRule',
		substitute: { fromContract: 'fade', toContract: 'modalFade' },
		reason: 've-modal template uses modalFade; mirror .fade transition rule so modalFade elements animate.',
	},

	// ---- Per-family .fade:not(.show) opacity mirrors ----
	// Each JS-driven family uses a family-specific fade+show pair instead of the shared
	// navs fade/show. The generic .fade:not(.show) opacity rule uses navs symbols, so
	// it never fires for these families. Mirror the rule for each family's symbols.
	{
		id: 'tooltip-fade-not-show',
		match: { selector: '.fade:not(.show)' },
		action: 'addMirrorRule',
		substitutes: [
			{ fromContract: 'fade', toContract: 'tooltipFade' },
			{ fromContract: 'show', toContract: 'tooltipShow' },
		],
		reason:
			'Tooltip uses tooltipFade+tooltipShow; mirror .fade:not(.show) opacity:0 rule ' +
			'so hidden tooltips are invisible before show is stamped.',
	},
	{
		id: 'popover-fade-not-show',
		match: { selector: '.fade:not(.show)' },
		action: 'addMirrorRule',
		substitutes: [
			{ fromContract: 'fade', toContract: 'popoverFade' },
			{ fromContract: 'show', toContract: 'popoverShow' },
		],
		reason:
			'Popover uses popoverFade+popoverShow; mirror .fade:not(.show) opacity:0 rule ' +
			'so hidden popovers are invisible before show is stamped.',
	},
	{
		id: 'modal-fade-not-show',
		match: { selector: '.fade:not(.show)' },
		action: 'addMirrorRule',
		substitutes: [
			{ fromContract: 'fade', toContract: 'modalFade' },
			{ fromContract: 'show', toContract: 'modalShowHook' },
		],
		reason:
			've-modal uses modalFade+modalShowHook; mirror .fade:not(.show) opacity:0 rule ' +
			'so the modal is invisible until modalShowHook is stamped.',
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
		id: 'legend-class',
		contract: 'legend',
		props: {
			float: 'left',
			width: '100%',
			padding: '0',
			marginBottom: '0.5rem',
			lineHeight: 'inherit',
			fontSize: 'calc(1.275rem + 0.3vw)',
		},
		reason: 'RadioButtons/DisabledRadioButtons stamp legend class contract on <legend>; mirrors legend element rule',
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
