import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColorRgb,
	varBsLinkColorRgb,
	varBsLinkHoverColorRgb,
	varBsScrollHeight,
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
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	containerFluid,
} from '../../../../theme-contract/layout/container.css'
import {
	dropdown,
	dropdownMenu,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	collapse,
	collapseShow,
	navbar,
	navbarBgLight,
	navbarBrand,
	navbarCollapse,
	navbarDarkBgPrimary,
	navbarExpandLg,
	navbarNav,
	navbarNavScroll,
	navbarText,
	navbarToggler,
	navbarTogglerIcon,
} from '../../../../theme-contract/ui/navbar/contract.css'
import {
	navLink,
	navLinkActive,
	show,
} from '../../../../theme-contract/ui/navs/contract.css'
import {
	dFlex,
	mb2,
	meAuto,
	me2,
	mt5,
} from '../../../../theme-contract/utilities/contract.css'
import { darklyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/navbar
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// hr { margin: 1rem 0; color: inherit; border: 0; border-top: var(--bs-border-width) solid; opacity: 0.25; }
globalStyle(`${darklyScope}${horizontalRule}`, {
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
// .collapse:not(.show) { display: none; }
// [UNMAPPED_SELECTOR] class ".collapse" — no contract mapping
globalStyle(`${darklyScope}${collapse}:not(${collapseShow})`, {
	display: "none",
})

// SOURCE CSS:
// .navbar { --bs-navbar-padding-x: 0; --bs-navbar-padding-y: 0.5rem; --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65); --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8); --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3); --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-brand-padding-y: 0.3125rem; --bs-navbar-brand-margin-end: 1rem; --bs-navbar-brand-font-size: 1.25rem; --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-nav-link-padding-x: 0.5rem; --bs-navbar-toggler-padding-y: 0.25rem; --bs-navbar-toggler-padding-x: 0.75rem; --bs-navbar-toggler-font-size: 1.25rem; --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15); --bs-navbar-toggler-border-radius: var(--bs-border-radius); --bs-navbar-toggler-focus-width: 0.25rem; --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out; position: relative; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x); }
globalStyle(`${darklyScope}${navbar}`, {
	vars: {
		[varBsNavbarPaddingX]: 0,
		[varBsNavbarPaddingY]: "1rem",
		[varBsNavbarColor]: "rgba(34, 34, 34, 0.7)",
		[varBsNavbarHoverColor]: "#222",
		[varBsNavbarDisabledColor]: `rgba(${varBsEmphasisColorRgb}, 0.3)`,
		[varBsNavbarActiveColor]: "#222",
		[varBsNavbarBrandPaddingY]: "0.3125rem",
		[varBsNavbarBrandMarginEnd]: "1rem",
		[varBsNavbarBrandFontSize]: "1.25rem",
		[varBsNavbarBrandColor]: "#222",
		[varBsNavbarBrandHoverColor]: "#222",
		[varBsNavbarNavLinkPaddingX]: "0.5rem",
		[varBsNavbarTogglerPaddingY]: "0.25rem",
		[varBsNavbarTogglerPaddingX]: "0.75rem",
		[varBsNavbarTogglerFontSize]: "1.25rem",
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
		[varBsNavbarTogglerBorderColor]: "rgba(34, 34, 34, 0.1)",
		[varBsNavbarTogglerBorderRadius]: varBsBorderRadius,
		[varBsNavbarTogglerFocusWidth]: "0.25rem",
		[varBsNavbarTogglerTransition]: "box-shadow 0.15s ease-in-out",
	},
	position: "relative",
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `${varBsNavbarPaddingY} ${varBsNavbarPaddingX}`,
})

// SOURCE CSS:
// .navbar > .container { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container" — no contract mapping
globalStyle(`${darklyScope}${navbar} > .container`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-fluid { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-fluid" — no contract mapping
globalStyle(`${darklyScope}${navbar} > ${darklyScope}${containerFluid}`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-sm { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-sm" — no contract mapping
globalStyle(`${darklyScope}${navbar} > .container-sm`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-md { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-md" — no contract mapping
globalStyle(`${darklyScope}${navbar} > .container-md`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-lg { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-lg" — no contract mapping
globalStyle(`${darklyScope}${navbar} > .container-lg`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-xl { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-xl" — no contract mapping
globalStyle(`${darklyScope}${navbar} > .container-xl`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-xxl { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-xxl" — no contract mapping
globalStyle(`${darklyScope}${navbar} > .container-xxl`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar-brand { padding-top: var(--bs-navbar-brand-padding-y); padding-bottom: var(--bs-navbar-brand-padding-y); margin-right: var(--bs-navbar-brand-margin-end); font-size: var(--bs-navbar-brand-font-size); color: var(--bs-navbar-brand-color); text-decoration: none; white-space: nowrap; }
globalStyle(`${darklyScope}${navbarBrand}`, {
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
globalStyle(`${darklyScope}${navbarBrand}:hover`, {
	color: varBsNavbarBrandHoverColor,
})

// SOURCE CSS:
// .navbar-brand:focus { color: var(--bs-navbar-brand-hover-color); }
globalStyle(`${darklyScope}${navbarBrand}:focus`, {
	color: varBsNavbarBrandHoverColor,
})

// SOURCE CSS:
// .navbar-nav { --bs-nav-link-padding-x: 0; --bs-nav-link-padding-y: 0.5rem; --bs-nav-link-font-weight: ; --bs-nav-link-color: var(--bs-navbar-color); --bs-nav-link-hover-color: var(--bs-navbar-hover-color); --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color); display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0; list-style: none; }
globalStyle(`${darklyScope}${navbarNav}`, {
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
globalStyle(`${darklyScope}${navbarNav} ${darklyScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

// SOURCE CSS:
// .navbar-nav .nav-link.show { color: var(--bs-navbar-active-color); }
globalStyle(`${darklyScope}${navbarNav} ${darklyScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

// SOURCE CSS:
// .navbar-nav .dropdown-menu { position: static; }
globalStyle(`${darklyScope}${navbarNav} ${darklyScope}${dropdownMenu}`, {
	position: "static",
})

// SOURCE CSS:
// .navbar-collapse { flex-grow: 1; flex-basis: 100%; align-items: center; }
globalStyle(`${darklyScope}${navbarCollapse}`, {
	flexGrow: 1,
	flexBasis: "100%",
	alignItems: "center",
})

// SOURCE CSS:
// .navbar-toggler { padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x); font-size: var(--bs-navbar-toggler-font-size); line-height: 1; color: var(--bs-navbar-color); background-color: transparent; border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color); border-radius: var(--bs-navbar-toggler-border-radius); transition: var(--bs-navbar-toggler-transition); }
globalStyle(`${darklyScope}${navbarToggler}`, {
	padding: `${varBsNavbarTogglerPaddingY} ${varBsNavbarTogglerPaddingX}`,
	fontSize: varBsNavbarTogglerFontSize,
	lineHeight: 1,
	color: varBsNavbarColor,
	backgroundColor: "transparent",
	border: `${varBsBorderWidth} solid ${varBsNavbarTogglerBorderColor}`,
	borderRadius: varBsNavbarTogglerBorderRadius,
	transition: varBsNavbarTogglerTransition,
})

// SOURCE CSS:
// .navbar-toggler:hover { text-decoration: none; }
globalStyle(`${darklyScope}${navbarToggler}:hover`, {
	textDecoration: "none",
})

// SOURCE CSS:
// .navbar-toggler:focus { text-decoration: none; outline: 0; box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width); }
globalStyle(`${darklyScope}${navbarToggler}:focus`, {
	textDecoration: "none",
	outline: 0,
	boxShadow: `0 0 0 ${varBsNavbarTogglerFocusWidth}`,
})

// SOURCE CSS:
// .navbar-toggler-icon { display: inline-block; width: 1.5em; height: 1.5em; vertical-align: middle; background-image: var(--bs-navbar-toggler-icon-bg); background-repeat: no-repeat; background-position: center; background-size: 100%; }
globalStyle(`${darklyScope}${navbarTogglerIcon}`, {
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
globalStyle(`${darklyScope}${navbarDarkBgPrimary}`, {
	vars: {
		[varBsNavbarColor]: "rgba(255, 255, 255, 0.6)",
		[varBsNavbarHoverColor]: "#fff",
		[varBsNavbarDisabledColor]: "rgba(255, 255, 255, 0.25)",
		[varBsNavbarActiveColor]: "#fff",
		[varBsNavbarBrandColor]: "#fff",
		[varBsNavbarBrandHoverColor]: "#fff",
		[varBsNavbarTogglerBorderColor]: "rgba(255, 255, 255, 0.1)",
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.6%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
	},
	backgroundColor: "#375a7f !important",
})

// SOURCE CSS:
// .navbar[data-bs-theme="dark"] { --bs-navbar-color: rgba(255, 255, 255, 0.55); --bs-navbar-hover-color: rgba(255, 255, 255, 0.75); --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25); --bs-navbar-active-color: #fff; --bs-navbar-brand-color: #fff; --bs-navbar-brand-hover-color: #fff; --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1); --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); }
globalStyle(`${darklyScope}${navbar}[data-bs-theme="dark"]`, {
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
globalStyle(`${darklyScope}${dFlex}`, {
	display: "flex !important",
})

globalStyle(`${darklyScope}${mt5}`, {
	marginTop: "3rem !important",
})

globalStyle(`${darklyScope}${me2}`, {
	marginRight: "0.5rem !important",
})

globalStyle(`${darklyScope}${mb2}`, {
	marginBottom: "0.5rem !important",
})

globalStyle(`${darklyScope}${navbarBgLight}`, {
	backgroundColor: "#adb5bd !important",
})

// SOURCE CSS:
// .me-auto { margin-right: auto !important; }
globalStyle(`${darklyScope}${meAuto}`, {
	marginRight: "auto !important",
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
globalStyle(`${darklyScope}${navbarText}`, {
	paddingTop: "0.5rem",
	paddingBottom: "0.5rem",
	color: varBsNavbarColor,
})

globalStyle(`${darklyScope}${navbarText} a`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${darklyScope}${navbarText} a:hover`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${darklyScope}${navbarText} a:focus`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${darklyScope}${navbarNavScroll}`, {
	maxHeight: varBsScrollHeight,
	overflowY: "auto",
})

globalStyle(`${darklyScope}${navbarExpandLg} ${darklyScope}${navbarNav}`, {
	'@media': {
		'screen and (min-width: 992px)': {
			flexDirection: "row",
		},
	},
})

globalStyle(`${darklyScope}${navbarExpandLg} ${darklyScope}${navbarNav} ${darklyScope}${dropdownMenu}`, {
	'@media': {
		'screen and (min-width: 992px)': {
			position: "absolute",
		},
	},
})

globalStyle(`${darklyScope}${navbarExpandLg} ${darklyScope}${navbarNav} ${darklyScope}${navLink}`, {
	'@media': {
		'screen and (min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${darklyScope}${navbarExpandLg} ${darklyScope}${navbarNavScroll}`, {
	'@media': {
		'screen and (min-width: 992px)': {
			overflow: "visible",
		},
	},
})

globalStyle(`${darklyScope}${navbarExpandLg} ${darklyScope}${navbarCollapse}`, {
	'@media': {
		'screen and (min-width: 992px)': {
			display: "flex !important",
			flexBasis: "auto",
		},
	},
})

globalStyle(`${darklyScope}${navbarExpandLg} ${darklyScope}${navbarToggler}`, {
	'@media': {
		'screen and (min-width: 992px)': {
			display: "none",
		},
	},
})

globalStyle(`${darklyScope}${navbar}[data-bs-theme=dark]`, {
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
