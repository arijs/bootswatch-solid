import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBgRgb,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsBtnCloseFilter,
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
	small,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	rounded,
} from '../../../../theme-contract/contents/images/contract.css'
import {
	btn,
} from '../../../../theme-contract/ui/buttons/contract.css'
import {
	fade,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	toast,
	toastBody,
	toastHeader,
} from '../../../../theme-contract/ui/toasts/contract.css'
import {
	meAuto,
	textMuted,
} from '../../../../theme-contract/utilities/contract.css'
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/toasts
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// b { font-weight: bolder; }
// [UNMAPPED_SELECTOR] element selector "b" — map to a contract class
globalStyle(`b`, {
	fontWeight: "bolder",
})

// SOURCE CSS:
// strong { font-weight: bolder; }
// [UNMAPPED_SELECTOR] element selector "strong" — map to a contract class
globalStyle(`strong`, {
	fontWeight: "bolder",
})

// SOURCE CSS:
// small { font-size: 0.875em; }
globalStyle(`${cyborgScope}${small}`, {
	fontSize: "0.875em",
})

// SOURCE CSS:
// .small { font-size: 0.875em; }
globalStyle(`${cyborgScope}${small}`, {
	fontSize: "0.875em",
})

// SOURCE CSS:
// img { vertical-align: middle; }
// [UNMAPPED_SELECTOR] element selector "img" — map to a contract class
globalStyle(`img`, {
	verticalAlign: "middle",
})

// SOURCE CSS:
// svg { vertical-align: middle; }
// [UNMAPPED_SELECTOR] element selector "svg" — map to a contract class
globalStyle(`svg`, {
	verticalAlign: "middle",
})

// SOURCE CSS:
// button { border-radius: 0; margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; appearance: button; }
// [UNMAPPED_SELECTOR] element selector "button" — map to a contract class
globalStyle(`button`, {
	borderRadius: 0,
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
	appearance: "button",
})

// SOURCE CSS:
// button:focus:not(:focus-visible) { outline: 0; }
// [UNMAPPED_SELECTOR] element selector "button:focus:not(:focus-visible)" — map to a contract class
globalStyle(`button:focus:not(:focus-visible)`, {
	outline: 0,
})

// SOURCE CSS:
// input { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "input" — map to a contract class
globalStyle(`input`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// select { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; }
// [UNMAPPED_SELECTOR] element selector "select" — map to a contract class
globalStyle(`select`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
})

// SOURCE CSS:
// optgroup { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "optgroup" — map to a contract class
globalStyle(`optgroup`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "textarea" — map to a contract class
globalStyle(`textarea`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// [type="button"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="button"]" — map to a contract class
globalStyle(`[type="button"]`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="reset"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]" — map to a contract class
globalStyle(`[type="reset"]`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="submit"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]" — map to a contract class
globalStyle(`[type="submit"]`, {
	appearance: "button",
})

// SOURCE CSS:
// button:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "button:not(:disabled)" — map to a contract class
globalStyle(`button:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="button"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="button"]:not(:disabled)" — map to a contract class
globalStyle(`[type="button"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="reset"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]:not(:disabled)" — map to a contract class
globalStyle(`[type="reset"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="submit"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]:not(:disabled)" — map to a contract class
globalStyle(`[type="submit"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${cyborgScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${cyborgScope}${fade}:not(.show)`, {
	opacity: 0,
})

// SOURCE CSS:
// .btn-close { --bs-btn-close-color: #000; --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e"); --bs-btn-close-opacity: 0.5; --bs-btn-close-hover-opacity: 0.75; --bs-btn-close-focus-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); --bs-btn-close-focus-opacity: 1; --bs-btn-close-disabled-opacity: 0.25; box-sizing: content-box; width: 1em; height: 1em; padding: 0.25em 0.25em; color: var(--bs-btn-close-color); background: transparent var(--bs-btn-close-bg) center/1em auto no-repeat; filter: var(--bs-btn-close-filter); border: 0; border-radius: 0.375rem; opacity: var(--bs-btn-close-opacity); }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`.btn-close`, {
	vars: {
		[varBsBtnCloseColor]: "#000",
		[varBsBtnCloseBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e\")",
		[varBsBtnCloseOpacity]: 0.5,
		[varBsBtnCloseHoverOpacity]: 0.75,
		[varBsBtnCloseFocusShadow]: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
		[varBsBtnCloseFocusOpacity]: 1,
		[varBsBtnCloseDisabledOpacity]: 0.25,
	},
	boxSizing: "content-box",
	width: "1em",
	height: "1em",
	padding: "0.25em 0.25em",
	color: varBsBtnCloseColor,
	background: "transparent var(--bs-btn-close-bg) center/1em auto no-repeat",
	filter: varBsBtnCloseFilter,
	border: 0,
	borderRadius: "0.375rem",
	opacity: varBsBtnCloseOpacity,
})

// SOURCE CSS:
// .btn-close:hover { color: var(--bs-btn-close-color); text-decoration: none; opacity: var(--bs-btn-close-hover-opacity); }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`.btn-close:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: "none",
	opacity: varBsBtnCloseHoverOpacity,
})

// SOURCE CSS:
// .btn-close:focus { outline: 0; box-shadow: var(--bs-btn-close-focus-shadow); opacity: var(--bs-btn-close-focus-opacity); }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`.btn-close:focus`, {
	outline: 0,
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

// SOURCE CSS:
// .btn-close:disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`.btn-close:disabled`, {
	pointerEvents: "none",
	WebkitUserSelect: "none",
	MozUserSelect: "none",
	userSelect: "none",
	opacity: varBsBtnCloseDisabledOpacity,
})

// SOURCE CSS:
// .btn-close.disabled { pointer-events: none; -webkit-user-select: none; -moz-user-select: none; user-select: none; opacity: var(--bs-btn-close-disabled-opacity); }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`.btn-close.disabled`, {
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
		[varBsToastColor]: "",
		[varBsToastBg]: `rgba(${varBsBodyBgRgb}, 0.85)`,
		[varBsToastBorderWidth]: varBsBorderWidth,
		[varBsToastBorderColor]: varBsBorderColorTranslucent,
		[varBsToastBorderRadius]: varBsBorderRadius,
		[varBsToastBoxShadow]: varBsBoxShadow,
		[varBsToastHeaderColor]: varBsSecondaryColor,
		[varBsToastHeaderBg]: `rgba(${varBsBodyBgRgb}, 0.85)`,
		[varBsToastHeaderBorderColor]: varBsBorderColorTranslucent,
	},
	width: varBsToastMaxWidth,
	maxWidth: "100%",
	fontSize: varBsToastFontSize,
	color: varBsToastColor,
	pointerEvents: "auto",
	backgroundColor: varBsToastBg,
	backgroundClip: "padding-box",
	border: "var(--bs-toast-border-width) solid var(--bs-toast-border-color)",
	boxShadow: varBsToastBoxShadow,
	borderRadius: varBsToastBorderRadius,
})

// SOURCE CSS:
// .toast:not(.show) { display: none; }
globalStyle(`${cyborgScope}${toast}:not(.show)`, {
	display: "none",
})

// SOURCE CSS:
// .toast-header { display: flex; align-items: center; padding: var(--bs-toast-padding-y) var(--bs-toast-padding-x); color: var(--bs-toast-header-color); background-color: var(--bs-toast-header-bg); background-clip: padding-box; border-bottom: var(--bs-toast-border-width) solid var(--bs-toast-header-border-color); border-top-left-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width)); border-top-right-radius: calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width)); }
globalStyle(`${cyborgScope}${toastHeader}`, {
	display: "flex",
	alignItems: "center",
	padding: "var(--bs-toast-padding-y) var(--bs-toast-padding-x)",
	color: varBsToastHeaderColor,
	backgroundColor: varBsToastHeaderBg,
	backgroundClip: "padding-box",
	borderBottom: "var(--bs-toast-border-width) solid var(--bs-toast-header-border-color)",
	borderTopLeftRadius: "calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))",
	borderTopRightRadius: "calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))",
})

// SOURCE CSS:
// .toast-header .btn-close { margin-right: calc(-0.5 * var(--bs-toast-padding-x)); margin-left: var(--bs-toast-padding-x); }
// [UNMAPPED_SELECTOR] class ".btn-close" — no contract mapping
globalStyle(`${cyborgScope}${toastHeader} .btn-close`, {
	marginRight: "calc(-0.5 * var(--bs-toast-padding-x))",
	marginLeft: varBsToastPaddingX,
})

// SOURCE CSS:
// .toast-body { padding: var(--bs-toast-padding-x); word-wrap: break-word; }
globalStyle(`${cyborgScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: "break-word",
})

// SOURCE CSS:
// .align-items-center { align-items: center !important; }
// [UNMAPPED_SELECTOR] class ".align-items-center" — no contract mapping
globalStyle(`.align-items-center`, {
	alignItems: "center !important",
})

// SOURCE CSS:
// .me-2 { margin-right: 0.5rem !important; }
// [UNMAPPED_SELECTOR] class ".me-2" — no contract mapping
globalStyle(`.me-2`, {
	marginRight: "0.5rem !important",
})

// SOURCE CSS:
// .me-auto { margin-right: auto !important; }
globalStyle(`${cyborgScope}${meAuto}`, {
	marginRight: "auto !important",
})

// SOURCE CSS:
// .p-5 { padding: 3rem !important; }
// [UNMAPPED_SELECTOR] class ".p-5" — no contract mapping
globalStyle(`.p-5`, {
	padding: "3rem !important",
})

// SOURCE CSS:
// .text-muted { --bs-text-opacity: 1; color: var(--bs-secondary-color) !important; }
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`${cyborgScope}${textMuted}`, {
	color: "var(--bs-secondary-color) !important",
})

// SOURCE CSS:
// .bg-dark { --bs-bg-opacity: 1; background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".bg-dark" — no contract mapping
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`.bg-dark`, {
	backgroundColor: "rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important",
})

// SOURCE CSS:
// .rounded { border-radius: var(--bs-border-radius) !important; }
globalStyle(`${cyborgScope}${rounded}`, {
	borderRadius: "var(--bs-border-radius) !important",
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
// [DELTA] unmapped selector: .toast.showing
// [DELTA] unmapped selector: .toast-container
// [DELTA] unmapped selector: .toast-container > :not(:last-child)
