import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColorRgb,
	varBsLinkColorRgb,
	varBsLinkHoverColorRgb,
	varBsSecondaryBg,
	varBsSecondaryColor,
	varBsTertiaryBg,
} from '../../../../theme-contract/_vars.css'
import {
	varBsNavbarActiveColor,
	varBsNavbarBrandColor,
	varBsNavbarBrandFontSize,
	varBsNavbarBrandHoverColor,
	varBsNavbarBrandMarginEnd,
	varBsNavbarBrandPaddingY,
	varBsNavbarColor,
	varBsNavbarDisabledColor,
	varBsNavbarHoverColor,
	varBsNavbarNavLinkPaddingX,
	varBsNavbarPaddingX,
	varBsNavbarPaddingY,
	varBsNavbarTogglerBorderColor,
	varBsNavbarTogglerBorderRadius,
	varBsNavbarTogglerFocusWidth,
	varBsNavbarTogglerFontSize,
	varBsNavbarTogglerIconBg,
	varBsNavbarTogglerPaddingX,
	varBsNavbarTogglerPaddingY,
	varBsNavbarTogglerTransition,
} from '../../../../theme-contract/ui/navbar/_vars.css'
import {
	varBsNavLinkColor,
	varBsNavLinkDisabledColor,
	varBsNavLinkFontWeight,
	varBsNavLinkHoverColor,
	varBsNavLinkPaddingX,
	varBsNavLinkPaddingY,
} from '../../../../theme-contract/ui/navs/_vars.css'
import {
	horizontalRule,
	link,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	form,
	formControl,
} from '../../../../theme-contract/forms/contract.css'
import {
	dropdown,
	dropdownMenu,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	navbar,
	navbarBrand,
	navbarCollapse,
	navbarNav,
	navbarToggler,
	navbarTogglerIcon,
} from '../../../../theme-contract/ui/navbar/contract.css'
import {
	nav,
	navLink,
} from '../../../../theme-contract/ui/navs/contract.css'
import {
	dFlex,
	meAuto,
} from '../../../../theme-contract/utilities/contract.css'
import { flatlyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/navbar
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// hr { margin: 1rem 0; color: inherit; border: 0; border-top: var(--bs-border-width) solid; opacity: 0.25; }
globalStyle(`${flatlyScope}${horizontalRule}`, {
	margin: "1rem 0",
	color: "inherit",
	border: 0,
	borderTop: "var(--bs-border-width) solid",
	opacity: 0.25,
})

// SOURCE CSS:
// ol { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ol`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// ul { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ul`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// dl { margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "dl" — map to a contract class
globalStyle(`dl`, {
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// ol ol { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ol ol`, {
	marginBottom: 0,
})

// SOURCE CSS:
// ul ul { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ul ul`, {
	marginBottom: 0,
})

// SOURCE CSS:
// ol ul { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ol ul`, {
	marginBottom: 0,
})

// SOURCE CSS:
// ul ol { margin-bottom: 0; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ul ol`, {
	marginBottom: 0,
})

// SOURCE CSS:
// a { color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1)); text-decoration: underline; }
// [UNMAPPED_SELECTOR] element selector "a" — map to a contract class
globalStyle(`a`, {
	color: "rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))",
	textDecoration: "underline",
})

// SOURCE CSS:
// a:hover { --bs-link-color-rgb: var(--bs-link-hover-color-rgb); }
// [UNMAPPED_SELECTOR] element selector "a:hover" — map to a contract class
globalStyle(`a:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

// SOURCE CSS:
// a:not([href]):not([class]) { color: inherit; text-decoration: none; }
// [UNMAPPED_SELECTOR] element selector "a:not([href]):not([class])" — map to a contract class
globalStyle(`a:not([href]):not([class])`, {
	color: "inherit",
	textDecoration: "none",
})

// SOURCE CSS:
// a:not([href]):not([class]):hover { color: inherit; text-decoration: none; }
// [UNMAPPED_SELECTOR] element selector "a:not([href]):not([class]):hover" — map to a contract class
globalStyle(`a:not([href]):not([class]):hover`, {
	color: "inherit",
	textDecoration: "none",
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
// [type="search"] { appearance: textfield; outline-offset: -2px; }
// [UNMAPPED_SELECTOR] element selector "[type="search"]" — map to a contract class
globalStyle(`[type="search"]`, {
	appearance: "textfield",
	outlineOffset: "-2px",
})

// SOURCE CSS:
// [type="search"]::-webkit-search-cancel-button { cursor: pointer; filter: grayscale(1); }
// [UNMAPPED_SELECTOR] element selector "[type="search"]::-webkit-search-cancel-button" — map to a contract class
globalStyle(`[type="search"]::-webkit-search-cancel-button`, {
	cursor: "pointer",
	filter: "grayscale(1)",
})

// SOURCE CSS:
// .form-control { display: block; width: 100%; padding: 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-body-bg); background-clip: padding-box; border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${flatlyScope}${formControl}`, {
	display: "block",
	width: "100%",
	padding: "0.375rem 0.75rem",
	fontSize: "1rem",
	fontWeight: 400,
	lineHeight: 1.5,
	color: varBsBodyColor,
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: varBsBodyBg,
	backgroundClip: "padding-box",
	border: "var(--bs-border-width) solid var(--bs-border-color)",
	borderRadius: varBsBorderRadius,
	transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control:focus { color: var(--bs-body-color); background-color: var(--bs-body-bg); border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${flatlyScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: "#86b7fe",
	outline: 0,
	boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
})

// SOURCE CSS:
// .form-control::-webkit-date-and-time-value { min-width: 85px; height: 1.5em; margin: 0; }
globalStyle(`${flatlyScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: "85px",
	height: "1.5em",
	margin: 0,
})

// SOURCE CSS:
// .form-control::-webkit-datetime-edit { display: block; padding: 0; }
globalStyle(`${flatlyScope}${formControl}::-webkit-datetime-edit`, {
	display: "block",
	padding: 0,
})

// SOURCE CSS:
// .form-control::placeholder { color: var(--bs-secondary-color); opacity: 1; }
globalStyle(`${flatlyScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: 1,
})

// SOURCE CSS:
// .form-control:disabled { background-color: var(--bs-secondary-bg); opacity: 1; }
globalStyle(`${flatlyScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: 1,
})

// SOURCE CSS:
// .form-control::-webkit-file-upload-button { padding: 0.375rem 0.75rem; margin: -0.375rem -0.75rem; -webkit-margin-end: 0.75rem; margin-inline-end: 0.75rem; color: var(--bs-body-color); background-color: var(--bs-tertiary-bg); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0; border-inline-end-width: var(--bs-border-width); border-radius: 0; -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${flatlyScope}${formControl}::-webkit-file-upload-button`, {
	padding: "0.375rem 0.75rem",
	margin: "-0.375rem -0.75rem",
	WebkitMarginEnd: "0.75rem",
	marginInlineEnd: "0.75rem",
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: "none",
	borderColor: "inherit",
	borderStyle: "solid",
	borderWidth: 0,
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: 0,
	WebkitTransition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control::file-selector-button { padding: 0.375rem 0.75rem; margin: -0.375rem -0.75rem; -webkit-margin-end: 0.75rem; margin-inline-end: 0.75rem; color: var(--bs-body-color); background-color: var(--bs-tertiary-bg); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0; border-inline-end-width: var(--bs-border-width); border-radius: 0; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${flatlyScope}${formControl}::file-selector-button`, {
	padding: "0.375rem 0.75rem",
	margin: "-0.375rem -0.75rem",
	WebkitMarginEnd: "0.75rem",
	marginInlineEnd: "0.75rem",
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: "none",
	borderColor: "inherit",
	borderStyle: "solid",
	borderWidth: 0,
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: 0,
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button { background-color: var(--bs-secondary-bg); }
globalStyle(`${flatlyScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::file-selector-button { background-color: var(--bs-secondary-bg); }
globalStyle(`${flatlyScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// .collapse:not(.show) { display: none; }
// [UNMAPPED_SELECTOR] class ".collapse" — no contract mapping
globalStyle(`.collapse:not(.show)`, {
	display: "none",
})

// SOURCE CSS:
// .navbar { --bs-navbar-padding-x: 0; --bs-navbar-padding-y: 0.5rem; --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65); --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8); --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3); --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-brand-padding-y: 0.3125rem; --bs-navbar-brand-margin-end: 1rem; --bs-navbar-brand-font-size: 1.25rem; --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-nav-link-padding-x: 0.5rem; --bs-navbar-toggler-padding-y: 0.25rem; --bs-navbar-toggler-padding-x: 0.75rem; --bs-navbar-toggler-font-size: 1.25rem; --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15); --bs-navbar-toggler-border-radius: var(--bs-border-radius); --bs-navbar-toggler-focus-width: 0.25rem; --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out; position: relative; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x); }
globalStyle(`${flatlyScope}${navbar}`, {
	vars: {
		[varBsNavbarPaddingX]: 0,
		[varBsNavbarPaddingY]: "0.5rem",
		[varBsNavbarColor]: `rgba(${varBsEmphasisColorRgb}, 0.65)`,
		[varBsNavbarHoverColor]: `rgba(${varBsEmphasisColorRgb}, 0.8)`,
		[varBsNavbarDisabledColor]: `rgba(${varBsEmphasisColorRgb}, 0.3)`,
		[varBsNavbarActiveColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarBrandPaddingY]: "0.3125rem",
		[varBsNavbarBrandMarginEnd]: "1rem",
		[varBsNavbarBrandFontSize]: "1.25rem",
		[varBsNavbarBrandColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarBrandHoverColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarNavLinkPaddingX]: "0.5rem",
		[varBsNavbarTogglerPaddingY]: "0.25rem",
		[varBsNavbarTogglerPaddingX]: "0.75rem",
		[varBsNavbarTogglerFontSize]: "1.25rem",
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
		[varBsNavbarTogglerBorderColor]: `rgba(${varBsEmphasisColorRgb}, 0.15)`,
		[varBsNavbarTogglerBorderRadius]: varBsBorderRadius,
		[varBsNavbarTogglerFocusWidth]: "0.25rem",
		[varBsNavbarTogglerTransition]: "box-shadow 0.15s ease-in-out",
	},
	position: "relative",
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)",
})

// SOURCE CSS:
// .navbar > .container { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container" — no contract mapping
globalStyle(`${flatlyScope}${navbar} > .container`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-fluid { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-fluid" — no contract mapping
globalStyle(`${flatlyScope}${navbar} > .container-fluid`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-sm { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-sm" — no contract mapping
globalStyle(`${flatlyScope}${navbar} > .container-sm`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-md { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-md" — no contract mapping
globalStyle(`${flatlyScope}${navbar} > .container-md`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-lg { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-lg" — no contract mapping
globalStyle(`${flatlyScope}${navbar} > .container-lg`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-xl { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-xl" — no contract mapping
globalStyle(`${flatlyScope}${navbar} > .container-xl`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-xxl { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-xxl" — no contract mapping
globalStyle(`${flatlyScope}${navbar} > .container-xxl`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar-brand { padding-top: var(--bs-navbar-brand-padding-y); padding-bottom: var(--bs-navbar-brand-padding-y); margin-right: var(--bs-navbar-brand-margin-end); font-size: var(--bs-navbar-brand-font-size); color: var(--bs-navbar-brand-color); text-decoration: none; white-space: nowrap; }
globalStyle(`${flatlyScope}${navbarBrand}`, {
	paddingTop: varBsNavbarBrandPaddingY,
	paddingBottom: varBsNavbarBrandPaddingY,
	marginRight: varBsNavbarBrandMarginEnd,
	fontSize: varBsNavbarBrandFontSize,
	color: varBsNavbarBrandColor,
	textDecoration: "none",
	whiteSpace: "nowrap",
})

// SOURCE CSS:
// .navbar-brand:hover { color: var(--bs-navbar-brand-hover-color); }
globalStyle(`${flatlyScope}${navbarBrand}:hover`, {
	color: varBsNavbarBrandHoverColor,
})

// SOURCE CSS:
// .navbar-brand:focus { color: var(--bs-navbar-brand-hover-color); }
globalStyle(`${flatlyScope}${navbarBrand}:focus`, {
	color: varBsNavbarBrandHoverColor,
})

// SOURCE CSS:
// .navbar-nav { --bs-nav-link-padding-x: 0; --bs-nav-link-padding-y: 0.5rem; --bs-nav-link-font-weight: ; --bs-nav-link-color: var(--bs-navbar-color); --bs-nav-link-hover-color: var(--bs-navbar-hover-color); --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color); display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0; list-style: none; }
globalStyle(`${flatlyScope}${navbarNav}`, {
	vars: {
		[varBsNavLinkPaddingX]: 0,
		[varBsNavLinkPaddingY]: "0.5rem",
		[varBsNavLinkFontWeight]: "",
		[varBsNavLinkColor]: varBsNavbarColor,
		[varBsNavLinkHoverColor]: varBsNavbarHoverColor,
		[varBsNavLinkDisabledColor]: varBsNavbarDisabledColor,
	},
	display: "flex",
	flexDirection: "column",
	paddingLeft: 0,
	marginBottom: 0,
	listStyle: "none",
})

// SOURCE CSS:
// .navbar-nav .nav-link.active { color: var(--bs-navbar-active-color); }
globalStyle(`${flatlyScope}${navbarNav} ${flatlyScope}${navLink}.active`, {
	color: varBsNavbarActiveColor,
})

// SOURCE CSS:
// .navbar-nav .nav-link.show { color: var(--bs-navbar-active-color); }
globalStyle(`${flatlyScope}${navbarNav} ${flatlyScope}${navLink}.show`, {
	color: varBsNavbarActiveColor,
})

// SOURCE CSS:
// .navbar-nav .dropdown-menu { position: static; }
globalStyle(`${flatlyScope}${navbarNav} ${flatlyScope}${dropdownMenu}`, {
	position: "static",
})

// SOURCE CSS:
// .navbar-collapse { flex-grow: 1; flex-basis: 100%; align-items: center; }
globalStyle(`${flatlyScope}${navbarCollapse}`, {
	flexGrow: 1,
	flexBasis: "100%",
	alignItems: "center",
})

// SOURCE CSS:
// .navbar-toggler { padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x); font-size: var(--bs-navbar-toggler-font-size); line-height: 1; color: var(--bs-navbar-color); background-color: transparent; border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color); border-radius: var(--bs-navbar-toggler-border-radius); transition: var(--bs-navbar-toggler-transition); }
globalStyle(`${flatlyScope}${navbarToggler}`, {
	padding: "var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x)",
	fontSize: varBsNavbarTogglerFontSize,
	lineHeight: 1,
	color: varBsNavbarColor,
	backgroundColor: "transparent",
	border: "var(--bs-border-width) solid var(--bs-navbar-toggler-border-color)",
	borderRadius: varBsNavbarTogglerBorderRadius,
	transition: varBsNavbarTogglerTransition,
})

// SOURCE CSS:
// .navbar-toggler:hover { text-decoration: none; }
globalStyle(`${flatlyScope}${navbarToggler}:hover`, {
	textDecoration: "none",
})

// SOURCE CSS:
// .navbar-toggler:focus { text-decoration: none; outline: 0; box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width); }
globalStyle(`${flatlyScope}${navbarToggler}:focus`, {
	textDecoration: "none",
	outline: 0,
	boxShadow: "0 0 0 var(--bs-navbar-toggler-focus-width)",
})

// SOURCE CSS:
// .navbar-toggler-icon { display: inline-block; width: 1.5em; height: 1.5em; vertical-align: middle; background-image: var(--bs-navbar-toggler-icon-bg); background-repeat: no-repeat; background-position: center; background-size: 100%; }
globalStyle(`${flatlyScope}${navbarTogglerIcon}`, {
	display: "inline-block",
	width: "1.5em",
	height: "1.5em",
	verticalAlign: "middle",
	backgroundImage: varBsNavbarTogglerIconBg,
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	backgroundSize: "100%",
})

// SOURCE CSS:
// .navbar-dark { --bs-navbar-color: rgba(255, 255, 255, 0.55); --bs-navbar-hover-color: rgba(255, 255, 255, 0.75); --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25); --bs-navbar-active-color: #fff; --bs-navbar-brand-color: #fff; --bs-navbar-brand-hover-color: #fff; --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1); --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); }
// [UNMAPPED_SELECTOR] class ".navbar-dark" — no contract mapping
globalStyle(`.navbar-dark`, {
	vars: {
		[varBsNavbarColor]: "#fff",
		[varBsNavbarHoverColor]: "#18bc9c",
		[varBsNavbarDisabledColor]: "rgba(255, 255, 255, 0.25)",
		[varBsNavbarActiveColor]: "#18bc9c",
		[varBsNavbarBrandColor]: "#fff",
		[varBsNavbarBrandHoverColor]: "#18bc9c",
		[varBsNavbarTogglerBorderColor]: "rgba(255, 255, 255, 0.1)",
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23fff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .navbar[data-bs-theme="dark"] { --bs-navbar-color: rgba(255, 255, 255, 0.55); --bs-navbar-hover-color: rgba(255, 255, 255, 0.75); --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25); --bs-navbar-active-color: #fff; --bs-navbar-brand-color: #fff; --bs-navbar-brand-hover-color: #fff; --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1); --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); }
globalStyle(`${flatlyScope}${navbar}[data-bs-theme="dark"]`, {
	vars: {
		[varBsNavbarColor]: "rgba(255, 255, 255, 0.55)",
		[varBsNavbarHoverColor]: "rgba(255, 255, 255, 0.75)",
		[varBsNavbarDisabledColor]: "rgba(255, 255, 255, 0.25)",
		[varBsNavbarActiveColor]: "#fff",
		[varBsNavbarBrandColor]: "#fff",
		[varBsNavbarBrandHoverColor]: "#fff",
		[varBsNavbarTogglerBorderColor]: "rgba(255, 255, 255, 0.1)",
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .align-top { vertical-align: top !important; }
// [UNMAPPED_SELECTOR] class ".align-top" — no contract mapping
globalStyle(`.align-top`, {
	verticalAlign: "top !important",
})

// SOURCE CSS:
// .d-inline-block { display: inline-block !important; }
// [UNMAPPED_SELECTOR] class ".d-inline-block" — no contract mapping
globalStyle(`.d-inline-block`, {
	display: "inline-block !important",
})

// SOURCE CSS:
// .d-flex { display: flex !important; }
globalStyle(`${flatlyScope}${dFlex}`, {
	display: "flex !important",
})

// SOURCE CSS:
// .mt-5 { margin-top: 3rem !important; }
// [UNMAPPED_SELECTOR] class ".mt-5" — no contract mapping
globalStyle(`.mt-5`, {
	marginTop: "3rem !important",
})

// SOURCE CSS:
// .me-2 { margin-right: 0.5rem !important; }
// [UNMAPPED_SELECTOR] class ".me-2" — no contract mapping
globalStyle(`.me-2`, {
	marginRight: "0.5rem !important",
})

// SOURCE CSS:
// .me-auto { margin-right: auto !important; }
globalStyle(`${flatlyScope}${meAuto}`, {
	marginRight: "auto !important",
})

// SOURCE CSS:
// .mb-2 { margin-bottom: 0.5rem !important; }
// [UNMAPPED_SELECTOR] class ".mb-2" — no contract mapping
globalStyle(`.mb-2`, {
	marginBottom: "0.5rem !important",
})

// SOURCE CSS:
// .bg-primary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".bg-primary" — no contract mapping
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`.bg-primary`, {
	backgroundColor: "rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important",
})

// SOURCE CSS:
// .bg-light { --bs-bg-opacity: 1; background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_SELECTOR] class ".bg-light" — no contract mapping
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`.bg-light`, {
	backgroundColor: "rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important",
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
// [DELTA] unmapped selector: .navbar-text
// [DELTA] unmapped selector: .navbar-text a
// [DELTA] unmapped selector: .navbar-text a:hover
// [DELTA] unmapped selector: .navbar-text a:focus
// [DELTA] unmapped selector: .navbar-nav-scroll
// [DELTA] unmapped selector: .navbar-expand
// [DELTA] unmapped selector: .navbar-expand .navbar-nav
// [DELTA] unmapped selector: .navbar-expand .navbar-nav .dropdown-menu
// [DELTA] unmapped selector: .navbar-expand .navbar-nav .nav-link
// [DELTA] unmapped selector: .navbar-expand .navbar-nav-scroll
// [DELTA] unmapped selector: .navbar-expand .navbar-collapse
// [DELTA] unmapped selector: .navbar-expand .navbar-toggler
// [DELTA] unmapped selector: .navbar-expand .offcanvas
// [DELTA] unmapped selector: .navbar-expand .offcanvas .offcanvas-header
// [DELTA] unmapped selector: .navbar-expand .offcanvas .offcanvas-body
// [DELTA] unmapped selector: .navbar[data-bs-theme=dark]
