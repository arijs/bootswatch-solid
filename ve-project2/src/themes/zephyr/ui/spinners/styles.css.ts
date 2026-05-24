import { globalStyle } from '@vanilla-extract/css'
import {
	varBsSpinnerAnimationName,
	varBsSpinnerAnimationSpeed,
	varBsSpinnerBorderWidth,
	varBsSpinnerHeight,
	varBsSpinnerVerticalAlign,
	varBsSpinnerWidth,
} from '../../../../theme-contract/ui/spinners/_vars.css'
import {
	spinnerBorder,
	spinnerGrow,
} from '../../../../theme-contract/ui/spinners/contract.css'
import {
	textDark,
} from '../../../../theme-contract/utilities/contract.css'
import { zephyrScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/spinners
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .spinner-grow { display: inline-block; flex-shrink: 0; width: var(--bs-spinner-width); height: var(--bs-spinner-height); vertical-align: var(--bs-spinner-vertical-align); border-radius: 50%; animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name); --bs-spinner-width: 2rem; --bs-spinner-height: 2rem; --bs-spinner-vertical-align: -0.125em; --bs-spinner-animation-speed: 0.75s; --bs-spinner-animation-name: spinner-grow; background-color: currentcolor; opacity: 0; }
globalStyle(`${zephyrScope}${spinnerGrow}`, {
	vars: {
		[varBsSpinnerWidth]: "2rem",
		[varBsSpinnerHeight]: "2rem",
		[varBsSpinnerVerticalAlign]: "-0.125em",
		[varBsSpinnerAnimationSpeed]: "0.75s",
		[varBsSpinnerAnimationName]: "spinner-grow",
	},
	display: "inline-block",
	flexShrink: 0,
	width: varBsSpinnerWidth,
	height: varBsSpinnerHeight,
	verticalAlign: varBsSpinnerVerticalAlign,
	borderRadius: "50%",
	animation: "var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)",
	backgroundColor: "currentcolor",
	opacity: 0,
})

// SOURCE CSS:
// .spinner-border { display: inline-block; flex-shrink: 0; width: var(--bs-spinner-width); height: var(--bs-spinner-height); vertical-align: var(--bs-spinner-vertical-align); border-radius: 50%; animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name); --bs-spinner-width: 2rem; --bs-spinner-height: 2rem; --bs-spinner-vertical-align: -0.125em; --bs-spinner-border-width: 0.25em; --bs-spinner-animation-speed: 0.75s; --bs-spinner-animation-name: spinner-border; border: var(--bs-spinner-border-width) solid currentcolor; border-right-color: transparent; }
globalStyle(`${zephyrScope}${spinnerBorder}`, {
	vars: {
		[varBsSpinnerWidth]: "2rem",
		[varBsSpinnerHeight]: "2rem",
		[varBsSpinnerVerticalAlign]: "-0.125em",
		[varBsSpinnerBorderWidth]: "0.25em",
		[varBsSpinnerAnimationSpeed]: "0.75s",
		[varBsSpinnerAnimationName]: "spinner-border",
	},
	display: "inline-block",
	flexShrink: 0,
	width: varBsSpinnerWidth,
	height: varBsSpinnerHeight,
	verticalAlign: varBsSpinnerVerticalAlign,
	borderRadius: "50%",
	animation: "var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)",
	border: "var(--bs-spinner-border-width) solid currentcolor",
	borderRightColor: "transparent",
})

// SOURCE CSS:
// .visually-hidden { width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0, 0, 0, 0) !important; white-space: nowrap !important; border: 0 !important; }
// [UNMAPPED_SELECTOR] class ".visually-hidden" — no contract mapping
globalStyle(`.visually-hidden`, {
	width: "1px !important",
	height: "1px !important",
	padding: "0 !important",
	margin: "-1px !important",
	overflow: "hidden !important",
	clip: "rect(0, 0, 0, 0) !important",
	whiteSpace: "nowrap !important",
	border: "0 !important",
})

// SOURCE CSS:
// .visually-hidden-focusable:not(:focus):not(:focus-within) { width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0, 0, 0, 0) !important; white-space: nowrap !important; border: 0 !important; }
// [UNMAPPED_SELECTOR] class ".visually-hidden-focusable" — no contract mapping
globalStyle(`.visually-hidden-focusable:not(:focus):not(:focus-within)`, {
	width: "1px !important",
	height: "1px !important",
	padding: "0 !important",
	margin: "-1px !important",
	overflow: "hidden !important",
	clip: "rect(0, 0, 0, 0) !important",
	whiteSpace: "nowrap !important",
	border: "0 !important",
})

// SOURCE CSS:
// .visually-hidden:not(caption) { position: absolute !important; }
// [UNMAPPED_SELECTOR] class ".visually-hidden" — no contract mapping
globalStyle(`.visually-hidden:not(caption)`, {
	position: "absolute !important",
})

// SOURCE CSS:
// .visually-hidden-focusable:not(:focus):not(:focus-within):not(caption) { position: absolute !important; }
// [UNMAPPED_SELECTOR] class ".visually-hidden-focusable" — no contract mapping
globalStyle(`.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption)`, {
	position: "absolute !important",
})

// SOURCE CSS:
// .text-danger { --bs-text-opacity: 1; color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".text-danger" — no contract mapping
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`.text-danger`, {
	color: "rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important",
})

// SOURCE CSS:
// .text-dark { --bs-text-opacity: 1; color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`${zephyrScope}${textDark}`, {
	color: "rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important",
})

// SOURCE CSS:
// .text-info { --bs-text-opacity: 1; color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".text-info" — no contract mapping
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`.text-info`, {
	color: "rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important",
})

// SOURCE CSS:
// .text-light { --bs-text-opacity: 1; color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".text-light" — no contract mapping
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`.text-light`, {
	color: "rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important",
})

// SOURCE CSS:
// .text-primary { --bs-text-opacity: 1; color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".text-primary" — no contract mapping
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`.text-primary`, {
	color: "rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important",
})

// SOURCE CSS:
// .text-secondary { --bs-text-opacity: 1; color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".text-secondary" — no contract mapping
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`.text-secondary`, {
	color: "rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important",
})

// SOURCE CSS:
// .text-success { --bs-text-opacity: 1; color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".text-success" — no contract mapping
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`.text-success`, {
	color: "rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important",
})

// SOURCE CSS:
// .text-warning { --bs-text-opacity: 1; color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".text-warning" — no contract mapping
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`.text-warning`, {
	color: "rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important",
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
// [DELTA] unmapped selector: .spinner-border-sm
// [DELTA] unmapped selector: .spinner-grow-sm
