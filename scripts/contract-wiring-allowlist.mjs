/**
 * Contracts that are deliberately unwired — no theme writes CSS for them.
 * Consumed by scripts/check-contract-wiring.mjs. Every entry needs a reason.
 *
 * A state hook does NOT belong here. Shared Bootstrap state classes map 1:1 to the
 * literal contracts (`active`, `disabled`, `show`, `fade`, `collapsed`, …) and compose
 * at the call site — see docs/ve2-literal-conversion-plan.md §8.6. Adding
 * `dropdownItemActive` here instead of deleting it would re-create the bug the gate
 * exists to prevent: a name that type-checks, ships a hash, and styles nothing.
 *
 * Entries tagged TRIAGE are inherited debt: unwired, plausibly intentional, not yet
 * confirmed by anyone who knows the original intent. Resolve them by either deleting
 * the contract or wiring it — not by upgrading the tag.
 */

const ELEMENT_MARKER =
	'Element marker: stamped so descendant/combinator rules can target the element. ' +
	'Carries no base style of its own.'
const BOOTSTRAP_LEGACY =
	'Bootstrap 3/4 class name that Bootstrap 5 dropped (BS5 uses .text-bg-* / .text-*). ' +
	'Kept so the published API does not break for consumers still passing it.'
const RUNTIME_MARKER =
	'Runtime-only marker: Bootstrap JS toggles it, no theme stylesheet has a rule for it.'
const APP_SCAFFOLDING =
	'Demo-page scaffolding, not a Bootstrap class. Styled by the docs app, not by a theme.'
const TRIAGE = 'TRIAGE — unwired, intent unconfirmed.'

/** @type {Record<string, string>} */
export const UNWIRED_ALLOWLIST = {
	// ── Element markers ──────────────────────────────────────────────────────────
	elBlockquote: ELEMENT_MARKER,
	elCite: ELEMENT_MARKER,
	elDataBsTarget: ELEMENT_MARKER,
	elDiv: ELEMENT_MARKER,
	elEm: ELEMENT_MARKER,
	elFieldset: ELEMENT_MARKER,
	elFigcaption: ELEMENT_MARKER,
	elForm: ELEMENT_MARKER,
	elHgroup: ELEMENT_MARKER,
	elHidden: ELEMENT_MARKER,
	elI: ELEMENT_MARKER,
	elMain: ELEMENT_MARKER,
	elMark: ELEMENT_MARKER,
	elNav: ELEMENT_MARKER,
	elReadonly: ELEMENT_MARKER,
	elS: ELEMENT_MARKER,
	elSection: ELEMENT_MARKER,
	elTable: ELEMENT_MARKER,
	elTbody: ELEMENT_MARKER,
	elTd: ELEMENT_MARKER,
	elTfoot: ELEMENT_MARKER,
	elTh: ELEMENT_MARKER,
	elThead: ELEMENT_MARKER,
	elTr: ELEMENT_MARKER,

	// ── Bootstrap 3/4 names Bootstrap 5 dropped ──────────────────────────────────
	badgeDanger: BOOTSTRAP_LEGACY,
	badgeDark: BOOTSTRAP_LEGACY,
	badgeLight: BOOTSTRAP_LEGACY,
	badgePrimary: BOOTSTRAP_LEGACY,
	badgeRoundedPill: BOOTSTRAP_LEGACY,
	badgeSecondary: BOOTSTRAP_LEGACY,
	badgeSuccess: BOOTSTRAP_LEGACY,
	badgeTextDark: BOOTSTRAP_LEGACY,
	progressBarDanger: BOOTSTRAP_LEGACY,
	progressBarInfo: BOOTSTRAP_LEGACY,
	progressBarSuccess: BOOTSTRAP_LEGACY,
	progressBarTextDark: BOOTSTRAP_LEGACY,
	progressBarWarning: BOOTSTRAP_LEGACY,
	spinnerDanger: BOOTSTRAP_LEGACY,
	spinnerDark: BOOTSTRAP_LEGACY,
	spinnerInfo: BOOTSTRAP_LEGACY,
	spinnerLight: BOOTSTRAP_LEGACY,
	spinnerPrimary: BOOTSTRAP_LEGACY,
	spinnerSecondary: BOOTSTRAP_LEGACY,
	spinnerSuccess: BOOTSTRAP_LEGACY,
	spinnerWarning: BOOTSTRAP_LEGACY,

	// ── Runtime-only markers ─────────────────────────────────────────────────────
	carouselSlide:
		`${RUNTIME_MARKER} Bootstrap's CLASS_NAME_SLIDE; \`.slide\` has no rule in any theme's bootstrap.css.`,

	// ── Split by the divergence manifest ─────────────────────────────────────────
	body:
		'Split into bodyFrame (canvas) + bodyText (typography) by the body-split divergence, ' +
		'so the full `body` contract is intentionally never emitted.',

	// ── Demo-page scaffolding ────────────────────────────────────────────────────
	actionsRow: APP_SCAFFOLDING,
	bdPlaceholderImg: APP_SCAFFOLDING,
	bdPlaceholderImgLg: APP_SCAFFOLDING,
	cardHorizontalColBody: APP_SCAFFOLDING,
	cardHorizontalColImg: APP_SCAFFOLDING,
	cardHorizontalRow: APP_SCAFFOLDING,
	placeholderIcon: APP_SCAFFOLDING,
	toastBrand: APP_SCAFFOLDING,
	toastExample: APP_SCAFFOLDING,
	toastRuntime: APP_SCAFFOLDING,
	toastTimestamp: APP_SCAFFOLDING,

	// ── Inherited debt ───────────────────────────────────────────────────────────
	alertBtnClose: `${TRIAGE} Maps .btn-close; literal owns btnClose.`,
	btnGroupButton: TRIAGE,
	btnGroupInteractive: TRIAGE,
	floatingLabel: TRIAGE,
	form: TRIAGE,
	formControlFloating: TRIAGE,
	horizontalRuleCard: TRIAGE,
	inputFontFamily: `${TRIAGE} Element-group contract superseded by el* reboot rules.`,
	marginEnd2: `${TRIAGE} Maps .me-2; literal owns me2.`,
	mediaMiddle: TRIAGE,
	navButtonReset: TRIAGE,
	navbarBgLight: `${TRIAGE} Absorbs \`navbar-light bg-light\`.`,
	navbarDarkBgPrimary: `${TRIAGE} Absorbs \`navbar-dark bg-primary\`.`,
	rowCol: TRIAGE,
}
