import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsBtnCloseFilter,
	varBsDarkRgb,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import {
	varBsBtnCloseBg,
	varBsBtnCloseColor,
	varBsBtnCloseDisabledOpacity,
	varBsBtnCloseFocusOpacity,
	varBsBtnCloseFocusShadow,
	varBsBtnCloseHoverOpacity,
	varBsBtnCloseOpacity,
} from '../../../../theme-contract/ui/alerts/_vars.css'
import {
	varBsToastBg,
	varBsToastBorderColor,
	varBsToastBorderRadius,
	varBsToastBorderWidth,
	varBsToastBoxShadow,
	varBsToastColor,
	varBsToastFontSize,
	varBsToastHeaderBg,
	varBsToastHeaderBorderColor,
	varBsToastHeaderColor,
	varBsToastMaxWidth,
	varBsToastPaddingX,
	varBsToastPaddingY,
	varBsToastSpacing,
	varBsToastZindex,
} from '../../../../theme-contract/ui/toasts/_vars.css'
import {
	alertBtnClose,
	alertBtnCloseDisabledHook,
} from '../../../../theme-contract/ui/alerts/contract.css'
import {
	placeholderIcon,
	toast,
	toastBody,
	toastBrand,
	toastExample,
	toastFade,
	toastHeader,
	toastShow,
	toastShowing,
	toastTimestamp,
} from '../../../../theme-contract/ui/toasts/contract.css'
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/toasts
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${cyborgScope}${toastFade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${cyborgScope}${toastFade}:not(${toastShow})`, {
	opacity: 0,
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
// .toast { --bs-toast-zindex: 1090; --bs-toast-padding-x: 0.75rem; --bs-toast-padding-y: 0.5rem; --bs-toast-spacing: 1.5rem; --bs-toast-max-width: 350px; --bs-toast-font-size: 0.875rem; --bs-toast-color: ; --bs-toast-bg: rgba(var(--bs-body-bg-rgb), 0.85); --bs-toast-border-width: var(--bs-border-width); --bs-toast-border-color: var(--bs-border-color-translucent); --bs-toast-border-radius: var(--bs-border-radius); --bs-toast-box-shadow: var(--bs-box-shadow); --bs-toast-header-color: var(--bs-secondary-color); --bs-toast-header-bg: rgba(var(--bs-body-bg-rgb), 0.85); --bs-toast-header-border-color: var(--bs-border-color-translucent); width: var(--bs-toast-max-width); max-width: 100%; font-size: var(--bs-toast-font-size); color: var(--bs-toast-color); pointer-events: auto; background-color: var(--bs-toast-bg); background-clip: padding-box; border: var(--bs-toast-border-width) solid var(--bs-toast-border-color); box-shadow: var(--bs-toast-box-shadow); border-radius: var(--bs-toast-border-radius); }
globalStyle(`${cyborgScope}${toast}`, {
	vars: {
		[varBsToastZindex]: 1090,
		[varBsToastPaddingX]: "0.75rem",
		[varBsToastPaddingY]: "0.5rem",
		[varBsToastSpacing]: "1.5rem",
		[varBsToastMaxWidth]: "350px",
		[varBsToastFontSize]: "0.875rem",
		[varBsToastColor]: "#fff",
		[varBsToastBg]: "#222",
		[varBsToastBorderWidth]: varBsBorderWidth,
		[varBsToastBorderColor]: "#282828",
		[varBsToastBorderRadius]: varBsBorderRadius,
		[varBsToastBoxShadow]: varBsBoxShadow,
		[varBsToastHeaderColor]: "#adafae",
		[varBsToastHeaderBg]: "#222",
		[varBsToastHeaderBorderColor]: "#282828",
	},
	width: varBsToastMaxWidth,
	maxWidth: "100%",
	fontSize: varBsToastFontSize,
	color: varBsToastColor,
	pointerEvents: "auto",
	backgroundColor: varBsToastBg,
	backgroundClip: "padding-box",
	border: `${varBsToastBorderWidth} solid ${varBsToastBorderColor}`,
	boxShadow: varBsToastBoxShadow,
	borderRadius: varBsToastBorderRadius,
})

// SOURCE CSS:
// .toast:not(.show) { display: none; }
globalStyle(`${cyborgScope}${toast}:not(${toastShow})`, {
	display: "none",
})

// SOURCE CSS:
// .toast-header { display: flex; align-items: center; padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x); color: var(--bs-toast-header-color); background-color: var(--bs-toast-header-bg); background-clip: padding-box; border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color); border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width)); border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width)); }
globalStyle(`${cyborgScope}${toastHeader}`, {
	display: "flex",
	alignItems: "center",
	padding: `${varBsToastPaddingY} ${varBsToastPaddingX}`,
	color: varBsToastHeaderColor,
	backgroundColor: varBsToastHeaderBg,
	backgroundClip: "padding-box",
	borderBottom: `${varBsToastBorderWidth} solid ${varBsToastHeaderBorderColor}`,
	borderTopLeftRadius: `calc(${varBsToastBorderRadius} - ${varBsToastBorderWidth})`,
	borderTopRightRadius: `calc(${varBsToastBorderRadius} - ${varBsToastBorderWidth})`,
})

// SOURCE CSS:
// .toast-header .btn-close { margin-right: calc(-0.5 * var(--bs-toast-padding-x)); margin-left: var(--bs-toast-padding-x); }
globalStyle(`${cyborgScope}${toastHeader} ${cyborgScope}${alertBtnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

// SOURCE CSS:
// .toast-body { padding: var(--bs-toast-padding-x); word-wrap: break-word; }
globalStyle(`${cyborgScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: "break-word",
})

// Demo helper contracts (route-local; not Bootstrap utilities)
globalStyle(`${cyborgScope}${toastExample}`, {
	backgroundColor: `rgba(${varBsDarkRgb}, 1)`,
	padding: "3rem",
	alignItems: "center",
})

globalStyle(`${cyborgScope}${placeholderIcon}`, {
	verticalAlign: "middle",
	width: "20px",
	height: "20px",
	borderRadius: `${varBsBorderRadius} !important`,
	marginRight: "0.5rem !important",
})

globalStyle(`${cyborgScope}${toastBrand}`, {
	fontWeight: "bolder",
	marginRight: "auto !important",
})

globalStyle(`${cyborgScope}${toastTimestamp}`, {
	fontSize: "0.875em",
	color: `${varBsSecondaryColor} !important`,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .toast.showing { opacity: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${toast}${toastShowing}`, {
	opacity: 0,
})
