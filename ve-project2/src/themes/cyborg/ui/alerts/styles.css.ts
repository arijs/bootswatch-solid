import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBtnCloseFilter,
	varBsDangerBgSubtle,
	varBsDangerBorderSubtle,
	varBsDangerTextEmphasis,
	varBsDarkBgSubtle,
	varBsDarkBorderSubtle,
	varBsDarkTextEmphasis,
	varBsInfoBgSubtle,
	varBsInfoBorderSubtle,
	varBsInfoTextEmphasis,
	varBsLightBgSubtle,
	varBsLightBorderSubtle,
	varBsLightTextEmphasis,
	varBsPrimaryBgSubtle,
	varBsPrimaryBorderSubtle,
	varBsPrimaryTextEmphasis,
	varBsSecondaryBgSubtle,
	varBsSecondaryBorderSubtle,
	varBsSecondaryTextEmphasis,
	varBsSuccessBgSubtle,
	varBsSuccessBorderSubtle,
	varBsSuccessTextEmphasis,
	varBsWarningBgSubtle,
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
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/alerts
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .alert { --bs-alert-bg: transparent; --bs-alert-padding-x: 1rem; --bs-alert-padding-y: 1rem; --bs-alert-margin-bottom: 1rem; --bs-alert-color: inherit; --bs-alert-border-color: transparent; --bs-alert-border: var(--bs-border-width) solid var(--bs-alert-border-color); --bs-alert-border-radius: var(--bs-border-radius); --bs-alert-link-color: inherit; position: relative; padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x); margin-bottom: var(--bs-alert-margin-bottom); color: var(--bs-alert-color); background-color: var(--bs-alert-bg); border: var(--bs-alert-border); border-radius: var(--bs-alert-border-radius); }
globalStyle(`${cyborgScope}${alert}`, {
	vars: {
		[varBsAlertBg]: "transparent",
		[varBsAlertPaddingX]: "1rem",
		[varBsAlertPaddingY]: "1rem",
		[varBsAlertMarginBottom]: "1rem",
		[varBsAlertColor]: "inherit",
		[varBsAlertBorderColor]: "transparent",
		[varBsAlertBorder]: `${varBsBorderWidth} solid ${varBsAlertBorderColor}`,
		[varBsAlertBorderRadius]: varBsBorderRadius,
		[varBsAlertLinkColor]: "inherit",
	},
	position: "relative",
	padding: `${varBsAlertPaddingY} ${varBsAlertPaddingX}`,
	marginBottom: varBsAlertMarginBottom,
	color: "#fff",
	backgroundColor: varBsAlertBg,
	border: "none",
	borderRadius: varBsAlertBorderRadius,
})

// SOURCE CSS:
// .alert-link { font-weight: 700; color: var(--bs-alert-link-color); }
globalStyle(`${cyborgScope}${alertLink}`, {
	fontWeight: 700,
	color: varBsAlertLinkColor,
})

// SOURCE CSS:
// .alert-dismissible { padding-right: 3rem; }
globalStyle(`${cyborgScope}${alertDismissible}`, {
	paddingRight: "3rem",
})

// SOURCE CSS:
// .alert-dismissible .btn-close { position: absolute; top: 0; right: 0; z-index: 2; padding: 1.25rem 1rem; }
globalStyle(`${cyborgScope}${alertDismissible} ${cyborgScope}${alertBtnClose}`, {
	position: "absolute",
	top: 0,
	right: 0,
	zIndex: 2,
	padding: "1.25rem 1rem",
})

// SOURCE CSS:
// .alert-danger { --bs-alert-color: var(--bs-danger-text-emphasis); --bs-alert-bg: var(--bs-danger-bg-subtle); --bs-alert-border-color: var(--bs-danger-border-subtle); --bs-alert-link-color: var(--bs-danger-text-emphasis); }
globalStyle(`${cyborgScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
	backgroundColor: "#c00",
})

// SOURCE CSS:
// .btn-close { --bs-btn-close-color: #000; --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e"); --bs-btn-close-opacity: 0.5; --bs-btn-close-hover-opacity: 0.75; --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); --bs-btn-close-focus-opacity: 1; --bs-btn-close-disabled-opacity: 0.25; box-sizing: content-box; width: 1em; height: 1em; padding: 0.25em 0.25em; color: var(--bs-btn-close-color); background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat; filter: var(--bs-btn-close-filter); border: 0; border-radius: 0.375rem; opacity: var(--bs-btn-close-opacity); }
globalStyle(`${cyborgScope}${alertBtnClose}`, {
	vars: {
		[varBsBtnCloseColor]: "#fff",
		[varBsBtnCloseBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e\")",
		[varBsBtnCloseOpacity]: 0.5,
		[varBsBtnCloseHoverOpacity]: 0.75,
		[varBsBtnCloseFocusShadow]: "0 0 0 0.25rem rgba(42, 159, 214, 0.25)",
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
globalStyle(`${cyborgScope}${alertBtnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: "none",
	opacity: varBsBtnCloseHoverOpacity,
})

// SOURCE CSS:
// .btn-close:focus { outline: 0; box-shadow: var(--bs-btn-close-focus-shadow); opacity: var(--bs-btn-close-focus-opacity); }
globalStyle(`${cyborgScope}${alertBtnClose}:focus`, {
	outline: 0,
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

// SOURCE CSS:
// .btn-close:disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
globalStyle(`${cyborgScope}${alertBtnClose}:disabled`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// SOURCE CSS:
// .btn-close.disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
globalStyle(`${cyborgScope}${alertBtnClose}${alertBtnCloseDisabledHook}`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// SOURCE CSS:
// .alert-dark { --bs-alert-color: var(--bs-dark-text-emphasis); --bs-alert-bg: var(--bs-dark-bg-subtle); --bs-alert-border-color: var(--bs-dark-border-subtle); --bs-alert-link-color: var(--bs-dark-text-emphasis); }
globalStyle(`${cyborgScope}${alertDark}`, {
	vars: {
		[varBsAlertColor]: varBsDarkTextEmphasis,
		[varBsAlertBg]: varBsDarkBgSubtle,
		[varBsAlertBorderColor]: varBsDarkBorderSubtle,
		[varBsAlertLinkColor]: varBsDarkTextEmphasis,
	},
	backgroundColor: "#adafae",
})

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: calc(1.275rem + 0.3vw); }
// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// .alert-heading { color: inherit; }
globalStyle(`${cyborgScope}${alertHeading}`, {
	color: "inherit",
})

// SOURCE CSS:
// .alert-success { --bs-alert-color: var(--bs-success-text-emphasis); --bs-alert-bg: var(--bs-success-bg-subtle); --bs-alert-border-color: var(--bs-success-border-subtle); --bs-alert-link-color: var(--bs-success-text-emphasis); }
globalStyle(`${cyborgScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: varBsSuccessBgSubtle,
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
	backgroundColor: "#77b300",
})

// SOURCE CSS:
// .alert-info { --bs-alert-color: var(--bs-info-text-emphasis); --bs-alert-bg: var(--bs-info-bg-subtle); --bs-alert-border-color: var(--bs-info-border-subtle); --bs-alert-link-color: var(--bs-info-text-emphasis); }
globalStyle(`${cyborgScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
	backgroundColor: "#93c",
})

// SOURCE CSS:
// .alert-light { --bs-alert-color: var(--bs-light-text-emphasis); --bs-alert-bg: var(--bs-light-bg-subtle); --bs-alert-border-color: var(--bs-light-border-subtle); --bs-alert-link-color: var(--bs-light-text-emphasis); }
globalStyle(`${cyborgScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: varBsLightBgSubtle,
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
	backgroundColor: "#222",
})

// SOURCE CSS:
// .alert-primary { --bs-alert-color: var(--bs-primary-text-emphasis); --bs-alert-bg: var(--bs-primary-bg-subtle); --bs-alert-border-color: var(--bs-primary-border-subtle); --bs-alert-link-color: var(--bs-primary-text-emphasis); }
globalStyle(`${cyborgScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: varBsPrimaryBgSubtle,
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
	backgroundColor: "#2a9fd6",
})

// SOURCE CSS:
// .alert-secondary { --bs-alert-color: var(--bs-secondary-text-emphasis); --bs-alert-bg: var(--bs-secondary-bg-subtle); --bs-alert-border-color: var(--bs-secondary-border-subtle); --bs-alert-link-color: var(--bs-secondary-text-emphasis); }
globalStyle(`${cyborgScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: varBsSecondaryBgSubtle,
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
	backgroundColor: "#555",
})

// SOURCE CSS:
// .alert-warning { --bs-alert-color: var(--bs-warning-text-emphasis); --bs-alert-bg: var(--bs-warning-bg-subtle); --bs-alert-border-color: var(--bs-warning-border-subtle); --bs-alert-link-color: var(--bs-warning-text-emphasis); }
globalStyle(`${cyborgScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: varBsWarningBgSubtle,
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
	backgroundColor: "#f80",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .alert a { color: #fff; text-decoration: underline; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "a" — map to a contract class
globalStyle(`${cyborgScope}${alert} a`, {
	color: "#fff",
	textDecoration: "underline",
})
// SOURCE CSS:
// .alert .alert-link { color: #fff; text-decoration: underline; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${alert} ${cyborgScope}${alertLink}`, {
	color: "#fff",
	textDecoration: "underline",
})
