import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBtnCloseFilter,
	varBsDangerBorderSubtle,
	varBsDangerTextEmphasis,
	varBsDarkBorderSubtle,
	varBsDarkTextEmphasis,
	varBsHeadingColor,
	varBsInfoBorderSubtle,
	varBsInfoTextEmphasis,
	varBsLightBorderSubtle,
	varBsLightTextEmphasis,
	varBsPrimaryBorderSubtle,
	varBsPrimaryTextEmphasis,
	varBsSecondaryBorderSubtle,
	varBsSecondaryTextEmphasis,
	varBsSuccessBorderSubtle,
	varBsSuccessTextEmphasis,
	varBsWarningBorderSubtle,
	varBsWarningTextEmphasis,
} from '../../../../theme-contract/_vars.css'
import {
	varBsAlertBg,
	varBsAlertBorder,
	varBsAlertBorderColor,
	varBsAlertBorderRadius,
	varBsAlertColor,
	varBsAlertLinkColor,
	varBsAlertMarginBottom,
	varBsAlertPaddingX,
	varBsAlertPaddingY,
	varBsBtnCloseBg,
	varBsBtnCloseColor,
	varBsBtnCloseDisabledOpacity,
	varBsBtnCloseFocusOpacity,
	varBsBtnCloseFocusShadow,
	varBsBtnCloseHoverOpacity,
	varBsBtnCloseOpacity,
} from '../../../../theme-contract/ui/alerts/_vars.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'
import {
	alert,
	alertBtnClose,
	alertBtnCloseDisabledHook,
	alertDanger,
	alertDark,
	alertDismissible,
	alertHeading,
	alertInfo,
	alertLight,
	alertLink,
	alertPrimary,
	alertSecondary,
	alertSuccess,
	alertWarning,
} from '../../../../theme-contract/ui/alerts/contract.css'
import {
	fade,
	modalShowHook,
} from '../../../../theme-contract/ui/modal/contract.css'
import { briteScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/alerts
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .alert { --bs-alert-bg: transparent; --bs-alert-padding-x: 1rem; --bs-alert-padding-y: 1rem; --bs-alert-margin-bottom: 1rem; --bs-alert-color: inherit; --bs-alert-border-color: transparent; --bs-alert-border: var(--bs-border-width) solid var(--bs-alert-border-color); --bs-alert-border-radius: var(--bs-border-radius); --bs-alert-link-color: inherit; position: relative; padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x); margin-bottom: var(--bs-alert-margin-bottom); color: var(--bs-alert-color); background-color: var(--bs-alert-bg); border: var(--bs-alert-border); border-radius: var(--bs-alert-border-radius); }
globalStyle(`${briteScope}${alert}`, {
	vars: {
		[varBsAlertBg]: varBsAlertBg,
		[varBsAlertPaddingX]: "1rem",
		[varBsAlertPaddingY]: "1rem",
		[varBsAlertMarginBottom]: "1rem",
		[varBsAlertColor]: "#000",
		[varBsAlertBorderColor]: "transparent",
		[varBsAlertBorder]: `${varBsBorderWidth} solid ${varBsAlertBorderColor}`,
		[varBsAlertBorderRadius]: varBsBorderRadius,
		[varBsAlertLinkColor]: "inherit",
	},
	position: "relative",
	padding: `${varBsAlertPaddingY} ${varBsAlertPaddingX}`,
	marginBottom: varBsAlertMarginBottom,
	color: "#000",
	backgroundColor: varBsAlertBg,
	border: "2px solid #000",
	borderRadius: varBsAlertBorderRadius,
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
})

// SOURCE CSS:
// .alert-link { font-weight: 700; color: var(--bs-alert-link-color); }
globalStyle(`${briteScope}${alertLink}`, {
	fontWeight: 700,
	color: "#000",
})

// SOURCE CSS:
// .alert-dismissible { padding-right: 3rem; }
globalStyle(`${briteScope}${alertDismissible}`, {
	paddingRight: "3rem",
})

// SOURCE CSS:
// .alert-dismissible .btn-close { position: absolute; top: 0; right: 0; z-index: 2; padding: 1.25rem 1rem; }
globalStyle(`${briteScope}${alertDismissible} ${briteScope}${alertBtnClose}`, {
	position: "absolute",
	top: 0,
	right: 0,
	zIndex: 2,
	padding: "1.25rem 1rem",
})

// SOURCE CSS:
// .alert-danger { --bs-alert-color: var(--bs-danger-text-emphasis); --bs-alert-bg: var(--bs-danger-bg-subtle); --bs-alert-border-color: var(--bs-danger-border-subtle); --bs-alert-link-color: var(--bs-danger-text-emphasis); }
globalStyle(`${briteScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: "#f56565",
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
	backgroundColor: "#f56565",
})

// SOURCE CSS:
// .btn-close { --bs-btn-close-color: #000; --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e"); --bs-btn-close-opacity: 0.5; --bs-btn-close-hover-opacity: 0.75; --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); --bs-btn-close-focus-opacity: 1; --bs-btn-close-disabled-opacity: 0.25; box-sizing: content-box; width: 1em; height: 1em; padding: 0.25em 0.25em; color: var(--bs-btn-close-color); background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat; filter: var(--bs-btn-close-filter); border: 0; border-radius: 0.375rem; opacity: var(--bs-btn-close-opacity); }
globalStyle(`${briteScope}${alertBtnClose}`, {
	vars: {
		[varBsBtnCloseColor]: "#000",
		[varBsBtnCloseBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e\")",
		[varBsBtnCloseOpacity]: 0.5,
		[varBsBtnCloseHoverOpacity]: 0.75,
		[varBsBtnCloseFocusShadow]: "0 0 0 1px #000",
		[varBsBtnCloseFocusOpacity]: 1,
		[varBsBtnCloseDisabledOpacity]: 0.25,
	},
	boxSizing: "content-box",
	width: "1em",
	height: "1em",
	padding: "0.25em 0.25em",
	color: varBsBtnCloseColor,
	background: `transparent ${varBsBtnCloseBg} center/1em auto no-repeat`,
	filter: varBsBtnCloseFilter,
	border: 0,
	borderRadius: "0.375rem",
	opacity: varBsBtnCloseOpacity,
})

// SOURCE CSS:
// .btn-close:hover { color: var(--bs-btn-close-color); text-decoration: none; opacity: var(--bs-btn-close-hover-opacity); }
globalStyle(`${briteScope}${alertBtnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: "none",
	opacity: varBsBtnCloseHoverOpacity,
})

// SOURCE CSS:
// .btn-close:focus { outline: 0; box-shadow: var(--bs-btn-close-focus-shadow); opacity: var(--bs-btn-close-focus-opacity); }
globalStyle(`${briteScope}${alertBtnClose}:focus`, {
	outline: 0,
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

// SOURCE CSS:
// .btn-close:disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
globalStyle(`${briteScope}${alertBtnClose}:disabled`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// SOURCE CSS:
// .btn-close.disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
globalStyle(`${briteScope}${alertBtnClose}${alertBtnCloseDisabledHook}`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// SOURCE CSS:
// .alert-dark { --bs-alert-color: var(--bs-dark-text-emphasis); --bs-alert-bg: var(--bs-dark-bg-subtle); --bs-alert-border-color: var(--bs-dark-border-subtle); --bs-alert-link-color: var(--bs-dark-text-emphasis); }
globalStyle(`${briteScope}${alertDark}`, {
	vars: {
		[varBsAlertColor]: "#fff",
		[varBsAlertBg]: "#000",
		[varBsAlertBorderColor]: varBsDarkBorderSubtle,
		[varBsAlertLinkColor]: varBsDarkTextEmphasis,
	},
	color: "#fff",
	backgroundColor: "#000",
})

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${briteScope}${h6}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${briteScope}${h5}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
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
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${briteScope}${h3}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${briteScope}${h2}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${briteScope}${h1}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .alert-heading { color: inherit; }
globalStyle(`${briteScope}${alertHeading}`, {
	color: "inherit",
})

// SOURCE CSS:
// .alert-success { --bs-alert-color: var(--bs-success-text-emphasis); --bs-alert-bg: var(--bs-success-bg-subtle); --bs-alert-border-color: var(--bs-success-border-subtle); --bs-alert-link-color: var(--bs-success-text-emphasis); }
globalStyle(`${briteScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: "#68d391",
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
	backgroundColor: "#68d391",
})

// SOURCE CSS:
// .alert-info { --bs-alert-color: var(--bs-info-text-emphasis); --bs-alert-bg: var(--bs-info-bg-subtle); --bs-alert-border-color: var(--bs-info-border-subtle); --bs-alert-link-color: var(--bs-info-text-emphasis); }
globalStyle(`${briteScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: "#22d2ed",
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
	backgroundColor: "#22d2ed",
})

// SOURCE CSS:
// .alert-light { --bs-alert-color: var(--bs-light-text-emphasis); --bs-alert-bg: var(--bs-light-bg-subtle); --bs-alert-border-color: var(--bs-light-border-subtle); --bs-alert-link-color: var(--bs-light-text-emphasis); }
globalStyle(`${briteScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: "#e9ecef",
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
	backgroundColor: "#e9ecef",
})

// SOURCE CSS:
// .alert-primary { --bs-alert-color: var(--bs-primary-text-emphasis); --bs-alert-bg: var(--bs-primary-bg-subtle); --bs-alert-border-color: var(--bs-primary-border-subtle); --bs-alert-link-color: var(--bs-primary-text-emphasis); }
globalStyle(`${briteScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: "#a2e436",
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
	backgroundColor: "#a2e436",
})

// SOURCE CSS:
// .alert-secondary { --bs-alert-color: var(--bs-secondary-text-emphasis); --bs-alert-bg: var(--bs-secondary-bg-subtle); --bs-alert-border-color: var(--bs-secondary-border-subtle); --bs-alert-link-color: var(--bs-secondary-text-emphasis); }
globalStyle(`${briteScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: "#fff",
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
	backgroundColor: "#fff",
})

// SOURCE CSS:
// .alert-warning { --bs-alert-color: var(--bs-warning-text-emphasis); --bs-alert-bg: var(--bs-warning-bg-subtle); --bs-alert-border-color: var(--bs-warning-border-subtle); --bs-alert-link-color: var(--bs-warning-text-emphasis); }
globalStyle(`${briteScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: "#ffc700",
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
	backgroundColor: "#ffc700",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${fade}`, {
	transition: "opacity 0.15s linear",
})
// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${fade}:not(${modalShowHook})`, {
	opacity: 0,
})
