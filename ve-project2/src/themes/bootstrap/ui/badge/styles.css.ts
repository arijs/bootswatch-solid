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
	rounded,
} from '../../../../theme-contract/contents/images/contract.css'
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
import { bootstrapScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/badge
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1rem; }
globalStyle(`${bootstrapScope}${h6}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1rem",
})

// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1.25rem; }
globalStyle(`${bootstrapScope}${h5}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1.25rem",
})

// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
globalStyle(`${bootstrapScope}${h4}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.275rem + 0.3vw)`,
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.3rem + 0.6vw); }
globalStyle(`${bootstrapScope}${h3}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.3rem + 0.6vw)`,
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.325rem + 0.9vw); }
globalStyle(`${bootstrapScope}${h2}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.325rem + 0.9vw)`,
})

// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.375rem + 1.5vw); }
globalStyle(`${bootstrapScope}${h1}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: `calc(1.375rem + 1.5vw)`,
})

// SOURCE CSS:
// .badge { --bs-badge-padding-x: 0.65em; --bs-badge-padding-y: 0.35em; --bs-badge-font-size: 0.75em; --bs-badge-font-weight: 700; --bs-badge-color: #fff; --bs-badge-border-radius: var(--bs-border-radius); display: inline-block; padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x); font-size: var(--bs-badge-font-size); font-weight: var(--bs-badge-font-weight); line-height: 1; color: var(--bs-badge-color); text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: var(--bs-badge-border-radius); }
globalStyle(`${bootstrapScope}${badge}`, {
	vars: {
		[varBsBadgePaddingX]: "0.65em",
		[varBsBadgePaddingY]: "0.35em",
		[varBsBadgeFontSize]: "0.75em",
		[varBsBadgeFontWeight]: 700,
		[varBsBadgeColor]: "#fff",
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
globalStyle(`${bootstrapScope}${badge}:empty`, {
	display: "none",
})

// SOURCE CSS:
// .text-dark { --bs-text-opacity: 1; color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`${bootstrapScope}${badgeLight}`, {
	color: `rgba(var(--bs-dark-rgb), ${varBsTextOpacity} ) !important`,
})

// SOURCE CSS:
// .bg-primary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${badgePrimary}`, {
	backgroundColor: `rgba(${varBsPrimaryRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-secondary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${badgeSecondary}`, {
	backgroundColor: `rgba(${varBsSecondaryRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-success { --bs-bg-opacity: 1; background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${badgeSuccess}`, {
	backgroundColor: `rgba(${varBsSuccessRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-info { --bs-bg-opacity: 1; background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${badgeInfo}`, {
	backgroundColor: `rgba(${varBsInfoRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-warning { --bs-bg-opacity: 1; background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${badgeWarning}`, {
	backgroundColor: `rgba(${varBsWarningRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-danger { --bs-bg-opacity: 1; background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${badgeDanger}`, {
	backgroundColor: `rgba(${varBsDangerRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-light { --bs-bg-opacity: 1; background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${badgeLight}`, {
	backgroundColor: `rgba(${varBsLightRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-dark { --bs-bg-opacity: 1; background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${badgeDark}`, {
	backgroundColor: `rgba(${varBsDarkRgb}, 1) !important`,
})

// SOURCE CSS:
// .rounded-pill { border-radius: var(--bs-border-radius-pill) !important; }
globalStyle(`${bootstrapScope}${badgeRoundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})
