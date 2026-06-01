import { globalStyle } from '@vanilla-extract/css'
import {
	varBsTextOpacity,
} from '../../../../theme-contract/_vars.css'
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
	visuallyHidden,
} from '../../../../theme-contract/utilities/contract.css'
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/spinners
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .spinner-grow { display: inline-block; flex-shrink: 0; width: var(--bs-spinner-width); height: var(--bs-spinner-height); vertical-align: var(--bs-spinner-vertical-align); border-radius: 50%; animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name); --bs-spinner-width: 2rem; --bs-spinner-height: 2rem; --bs-spinner-vertical-align: -0.125em; --bs-spinner-animation-speed: 0.75s; --bs-spinner-animation-name: spinner-grow; background-color: currentcolor; opacity: 0; }
globalStyle(`${cyborgScope}${spinnerGrow}`, {
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
	animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
	backgroundColor: "currentcolor",
	opacity: 0,
})

// SOURCE CSS:
// .spinner-border { display: inline-block; flex-shrink: 0; width: var(--bs-spinner-width); height: var(--bs-spinner-height); vertical-align: var(--bs-spinner-vertical-align); border-radius: 50%; animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name); --bs-spinner-width: 2rem; --bs-spinner-height: 2rem; --bs-spinner-vertical-align: -0.125em; --bs-spinner-border-width: 0.25em; --bs-spinner-animation-speed: 0.75s; --bs-spinner-animation-name: spinner-border; border: var(--bs-spinner-border-width) solid currentcolor; border-right-color: transparent; }
globalStyle(`${cyborgScope}${spinnerBorder}`, {
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
	animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
	border: `${varBsSpinnerBorderWidth} solid currentcolor`,
	borderRightColor: "transparent",
})

// SOURCE CSS:
// .visually-hidden { width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0, 0, 0, 0) !important; white-space: nowrap !important; border: 0 !important; }
globalStyle(`${cyborgScope}${visuallyHidden}`, {
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
// [UNMAPPED_SELECTOR] element selector "caption" — map to a contract class
globalStyle(`${cyborgScope}${visuallyHidden}:not(caption)`, {
	position: "absolute !important",
})

// SOURCE CSS:
// .text-dark { --bs-text-opacity: 1; color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`${cyborgScope}${textDark}`, {
	color: `rgba(var(--bs-dark-rgb), ${varBsTextOpacity} ) !important`,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
