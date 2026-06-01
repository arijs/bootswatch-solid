import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBorderRadiusPill,
	varBsDangerRgb,
	varBsDarkRgb,
	varBsHeadingColor,
	varBsInfoRgb,
	varBsLightRgb,
	varBsPrimaryRgb,
	varBsSecondaryRgb,
	varBsSuccessRgb,
	varBsTextOpacity,
	varBsWarningRgb,
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
	badge,
	badgeDanger,
	badgeDark,
	badgeInfo,
	badgeLight,
	badgePrimary,
	badgeRoundedPill,
	badgeSecondary,
	badgeSuccess,
	badgeWarning,
} from '../../../../theme-contract/ui/badge/contract.css'
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
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
globalStyle(`${briteScope}${h5}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1.09375rem",
})

// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
globalStyle(`${briteScope}${h4}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.25625rem + 0.075vw)`,
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.3rem + 0.6vw); }
globalStyle(`${briteScope}${h3}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.278125rem + 0.3375vw)`,
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.325rem + 0.9vw); }
globalStyle(`${briteScope}${h2}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.3rem + 0.6vw)`,
})

// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.375rem + 1.5vw); }
globalStyle(`${briteScope}${h1}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.34375rem + 1.125vw)`,
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
	border: "2px solid #000",
})

// SOURCE CSS:
// .badge:empty { display: none; }
globalStyle(`${briteScope}${badge}:empty`, {
	display: "none",
})

// SOURCE CSS:
// .text-dark { --bs-text-opacity: 1; color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`${briteScope}${badgeLight}`, {
	color: `rgba(var(--bs-dark-rgb), ${varBsTextOpacity} ) !important`,
})

// SOURCE CSS:
// .bg-primary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgePrimary}`, {
	backgroundColor: `rgba(${varBsPrimaryRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-secondary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeSecondary}`, {
	backgroundColor: `rgba(${varBsSecondaryRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-success { --bs-bg-opacity: 1; background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeSuccess}`, {
	backgroundColor: `rgba(${varBsSuccessRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-info { --bs-bg-opacity: 1; background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeInfo}`, {
	backgroundColor: `rgba(${varBsInfoRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-warning { --bs-bg-opacity: 1; background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeWarning}`, {
	backgroundColor: `rgba(${varBsWarningRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-danger { --bs-bg-opacity: 1; background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeDanger}`, {
	backgroundColor: `rgba(${varBsDangerRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-light { --bs-bg-opacity: 1; background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeLight}`, {
	backgroundColor: `rgba(${varBsLightRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-dark { --bs-bg-opacity: 1; background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeDark}`, {
	backgroundColor: `rgba(${varBsDarkRgb}, 1) !important`,
})

// SOURCE CSS:
// .rounded-pill { border-radius: var(--bs-border-radius-pill) !important; }
globalStyle(`${briteScope}${badgeRoundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .text-dark { --bs-text-opacity: 1; color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`${briteScope}${badgeLight}`, {
	color: `rgba(var(--bs-dark-rgb), ${varBsTextOpacity} ) !important`,
})
// SOURCE CSS:
// .bg-primary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgePrimary}`, {
	backgroundColor: `rgba(${varBsPrimaryRgb}, 1) !important`,
})
// SOURCE CSS:
// .bg-secondary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeSecondary}`, {
	backgroundColor: `rgba(${varBsSecondaryRgb}, 1) !important`,
})
// SOURCE CSS:
// .bg-success { --bs-bg-opacity: 1; background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeSuccess}`, {
	backgroundColor: `rgba(${varBsSuccessRgb}, 1) !important`,
})
// SOURCE CSS:
// .bg-info { --bs-bg-opacity: 1; background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeInfo}`, {
	backgroundColor: `rgba(${varBsInfoRgb}, 1) !important`,
})
// SOURCE CSS:
// .bg-warning { --bs-bg-opacity: 1; background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeWarning}`, {
	backgroundColor: `rgba(${varBsWarningRgb}, 1) !important`,
})
// SOURCE CSS:
// .bg-danger { --bs-bg-opacity: 1; background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeDanger}`, {
	backgroundColor: `rgba(${varBsDangerRgb}, 1) !important`,
})
// SOURCE CSS:
// .bg-light { --bs-bg-opacity: 1; background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeLight}`, {
	backgroundColor: `rgba(${varBsLightRgb}, 1) !important`,
})
// SOURCE CSS:
// .bg-dark { --bs-bg-opacity: 1; background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${badgeDark}`, {
	backgroundColor: `rgba(${varBsDarkRgb}, 1) !important`,
})
// SOURCE CSS:
// .badge.bg-dark { color: #fff; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${badge}${badgeDark}`, {
	color: "#fff",
})
