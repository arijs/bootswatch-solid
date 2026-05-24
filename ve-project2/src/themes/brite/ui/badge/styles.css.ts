import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBgOpacity,
	varBsBorderRadius,
	varBsBorderRadiusPill,
	varBsHeadingColor,
	varBsTextOpacity,
} from '../../../../theme-contract/_vars.css'
import {
	varBsBadgeBorderRadius,
	varBsBadgeColor,
	varBsBadgeFontSize,
	varBsBadgeFontWeight,
	varBsBadgePaddingX,
	varBsBadgePaddingY,
} from '../../../../theme-contract/ui/badge/_vars.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'
import {
	rounded,
} from '../../../../theme-contract/contents/images/contract.css'
import {
	badge,
} from '../../../../theme-contract/ui/badge/contract.css'
import {
	bgDark,
	textDark,
} from '../../../../theme-contract/utilities/contract.css'
import { briteScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/badge
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1rem; }
globalStyle(`${briteScope}${h6}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "0.875rem",
})

// SOURCE CSS:
// .h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1rem; }
// [UNMAPPED_SELECTOR] class ".h6" — no contract mapping
globalStyle(`.h6`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1rem",
})

// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
globalStyle(`.h6`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "0.875rem",
})

// SOURCE CSS:
// .h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
// [UNMAPPED_SELECTOR] class ".h5" — no contract mapping
globalStyle(`.h5`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1.09375rem",
})

// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
globalStyle(`.h5`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1.09375rem",
})

// SOURCE CSS:
// .h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
// [UNMAPPED_SELECTOR] class ".h4" — no contract mapping
globalStyle(`.h4`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.25625rem + 0.075vw)",
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.3rem + 0.6vw); }
globalStyle(`.h4`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.25625rem + 0.075vw)",
})

// SOURCE CSS:
// .h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.3rem + 0.6vw); }
// [UNMAPPED_SELECTOR] class ".h3" — no contract mapping
globalStyle(`.h3`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.278125rem + 0.3375vw)",
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.325rem + 0.9vw); }
globalStyle(`.h3`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.278125rem + 0.3375vw)",
})

// SOURCE CSS:
// .h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.325rem + 0.9vw); }
// [UNMAPPED_SELECTOR] class ".h2" — no contract mapping
globalStyle(`.h2`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.3rem + 0.6vw)",
})

// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.375rem + 1.5vw); }
globalStyle(`.h2`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.3rem + 0.6vw)",
})

// SOURCE CSS:
// .h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.375rem + 1.5vw); }
// [UNMAPPED_SELECTOR] class ".h1" — no contract mapping
globalStyle(`.h1`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.34375rem + 1.125vw)",
})

// SOURCE CSS:
// p { margin-top: 0; margin-bottom: 1rem; }
globalStyle(`.h1`, {
	marginTop: 0,
	marginBottom: "0.5rem",
})

// SOURCE CSS:
// .badge { --bs-badge-padding-x: 0.65em; --bs-badge-padding-y: 0.35em; --bs-badge-font-size: 0.75em; --bs-badge-font-weight: 700; --bs-badge-color: #fff; --bs-badge-border-radius: var(--bs-border-radius); display: inline-block; padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x); font-size: var(--bs-badge-font-size); font-weight: var(--bs-badge-font-weight); line-height: 1; color: var(--bs-badge-color); text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: var(--bs-badge-border-radius); }
globalStyle(`${briteScope}${badge}`, {
	vars: {
		[varBsBadgePaddingX]: "0.65em",
		[varBsBadgePaddingY]: "0.35em",
		[varBsBadgeFontSize]: "0.75em",
		[varBsBadgeFontWeight]: 700,
		[varBsBadgeColor]: "#000",
		[varBsBadgeBorderRadius]: varBsBorderRadius,
	},
	display: "inline-block",
	padding: `${varBsBadgePaddingY} ${varBsBadgePaddingX}`,
	fontSize: varBsBadgeFontSize,
	fontWeight: varBsBadgeFontWeight,
	lineHeight: 1,
	color: varBsBadgeColor,
	textAlign: "center",
	whiteSpace: "nowrap",
	verticalAlign: "baseline",
	borderRadius: varBsBadgeBorderRadius,
})

// SOURCE CSS:
// .badge:empty { display: none; }
globalStyle(`${briteScope}${badge}:empty`, {
	display: "none",
})

// SOURCE CSS:
// .text-dark { --bs-text-opacity: 1; color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`${briteScope}${textDark}`, {
	color: `rgba(var(--bs-dark-rgb), ${varBsTextOpacity} ) !important`,
})

// SOURCE CSS:
// .bg-primary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".bg-primary" — no contract mapping
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`.bg-primary`, {
	backgroundColor: `rgba(var(--bs-primary-rgb), ${varBsBgOpacity} ) !important`,
})

// SOURCE CSS:
// .bg-secondary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".bg-secondary" — no contract mapping
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`.bg-secondary`, {
	backgroundColor: `rgba(var(--bs-secondary-rgb), ${varBsBgOpacity} ) !important`,
})

// SOURCE CSS:
// .bg-success { --bs-bg-opacity: 1; background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".bg-success" — no contract mapping
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`.bg-success`, {
	backgroundColor: `rgba(var(--bs-success-rgb), ${varBsBgOpacity} ) !important`,
})

// SOURCE CSS:
// .bg-info { --bs-bg-opacity: 1; background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".bg-info" — no contract mapping
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`.bg-info`, {
	backgroundColor: `rgba(var(--bs-info-rgb), ${varBsBgOpacity} ) !important`,
})

// SOURCE CSS:
// .bg-warning { --bs-bg-opacity: 1; background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".bg-warning" — no contract mapping
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`.bg-warning`, {
	backgroundColor: `rgba(var(--bs-warning-rgb), ${varBsBgOpacity} ) !important`,
})

// SOURCE CSS:
// .bg-danger { --bs-bg-opacity: 1; background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".bg-danger" — no contract mapping
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`.bg-danger`, {
	backgroundColor: `rgba(var(--bs-danger-rgb), ${varBsBgOpacity} ) !important`,
})

// SOURCE CSS:
// .bg-light { --bs-bg-opacity: 1; background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".bg-light" — no contract mapping
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`.bg-light`, {
	backgroundColor: `rgba(var(--bs-light-rgb), ${varBsBgOpacity} ) !important`,
})

// SOURCE CSS:
// .bg-dark { --bs-bg-opacity: 1; background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${bgDark}`, {
	backgroundColor: `rgba(var(--bs-dark-rgb), ${varBsBgOpacity} ) !important`,
})

// SOURCE CSS:
// .rounded-pill { border-radius: var(--bs-border-radius-pill) !important; }
// [UNMAPPED_SELECTOR] class ".rounded-pill" — no contract mapping
globalStyle(`.rounded-pill`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .h1 { font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.34375rem + 1.125vw); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".h1" — no contract mapping
globalStyle(`.h1`, {
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "calc(1.34375rem + 1.125vw)",
})
// SOURCE CSS:
// .badge { border: 2px solid #000; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${badge}`, {
	border: "2px solid #000",
})
// SOURCE CSS:
// .badge.bg-dark { color: #fff; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${badge}${briteScope}${bgDark}`, {
	color: "#fff",
})
