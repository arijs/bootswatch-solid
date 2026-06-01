import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBorderRadiusPill,
	varBsDangerRgb,
	varBsDarkRgb,
	varBsInfoRgb,
	varBsLightRgb,
	varBsPrimaryRgb,
	varBsSecondaryRgb,
	varBsSuccessRgb,
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
import {
	textDark,
} from '../../../../theme-contract/utilities/contract.css'
import { darklyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/badge
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .badge { --bs-badge-padding-x: 0.65em; --bs-badge-padding-y: 0.35em; --bs-badge-font-size: 0.75em; --bs-badge-font-weight: 700; --bs-badge-color: #fff; --bs-badge-border-radius: var(--bs-border-radius); display: inline-block; padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x); font-size: var(--bs-badge-font-size); font-weight: var(--bs-badge-font-weight); line-height: 1; color: var(--bs-badge-color); text-align: center; white-space: nowrap; vertical-align: baseline; border-radius: var(--bs-badge-border-radius); }
globalStyle(`${darklyScope}${badge}`, {
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
globalStyle(`${darklyScope}${badge}:empty`, {
	display: "none",
})

// SOURCE CSS:
// .text-dark { --bs-text-opacity: 1; color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important; }
globalStyle(`${darklyScope}${badge}${textDark}`, {
	color: `rgba(${varBsDarkRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-primary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${darklyScope}${badgePrimary}`, {
	backgroundColor: `rgba(${varBsPrimaryRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-secondary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${darklyScope}${badgeSecondary}`, {
	backgroundColor: `rgba(${varBsSecondaryRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-success { --bs-bg-opacity: 1; background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${darklyScope}${badgeSuccess}`, {
	backgroundColor: `rgba(${varBsSuccessRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-info { --bs-bg-opacity: 1; background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${darklyScope}${badgeInfo}`, {
	backgroundColor: `rgba(${varBsInfoRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-warning { --bs-bg-opacity: 1; background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${darklyScope}${badgeWarning}`, {
	backgroundColor: `rgba(${varBsWarningRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-danger { --bs-bg-opacity: 1; background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${darklyScope}${badgeDanger}`, {
	backgroundColor: `rgba(${varBsDangerRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-light { --bs-bg-opacity: 1; background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${darklyScope}${badgeLight}`, {
	backgroundColor: `rgba(${varBsLightRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-dark { --bs-bg-opacity: 1; background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important; }
globalStyle(`${darklyScope}${badgeDark}`, {
	backgroundColor: `rgba(${varBsDarkRgb}, 1) !important`,
})

// SOURCE CSS:
// .rounded-pill { border-radius: var(--bs-border-radius-pill) !important; }
globalStyle(`${darklyScope}${badgeRoundedPill}`, {
	borderRadius: `${varBsBorderRadiusPill} !important`,
})
