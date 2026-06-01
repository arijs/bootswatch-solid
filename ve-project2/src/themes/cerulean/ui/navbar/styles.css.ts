import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColorRgb,
	varBsLightRgb,
	varBsPrimaryRgb,
	varBsScrollHeight,
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
	formControl,
} from '../../../../theme-contract/forms/contract.css'
import {
	containerFluid,
} from '../../../../theme-contract/layout/container.css'
import {
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
	bgDark,
	dFlex,
	mb2,
	me2,
	meAuto,
	mt5,
	row,
} from '../../../../theme-contract/utilities/contract.css'
import { ceruleanScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/navbar
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .form-control { display: block; width: 100%; padding: 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-body-bg); background-clip: padding-box; border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${ceruleanScope}${formControl}`, {
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
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control:focus { color: var(--bs-body-color); background-color: var(--bs-body-bg); border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${ceruleanScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: "#86b7fe",
	outline: 0,
	boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
})

// SOURCE CSS:
// .form-control::-webkit-date-and-time-value { min-width: 85px; height: 1.5em; margin: 0; }
globalStyle(`${ceruleanScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: "85px",
	height: "1.5em",
	margin: 0,
})

// SOURCE CSS:
// .form-control::-webkit-datetime-edit { display: block; padding: 0; }
globalStyle(`${ceruleanScope}${formControl}::-webkit-datetime-edit`, {
	display: "block",
	padding: 0,
})

// SOURCE CSS:
// .form-control::placeholder { color: var(--bs-secondary-color); opacity: 1; }
globalStyle(`${ceruleanScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: 1,
})

// SOURCE CSS:
// .form-control:disabled { background-color: var(--bs-secondary-bg); opacity: 1; }
globalStyle(`${ceruleanScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: 1,
})

// SOURCE CSS:
// .form-control::-webkit-file-upload-button { padding: 0.375rem 0.75rem; margin: -0.375rem -0.75rem; -webkit-margin-end: 0.75rem; margin-inline-end: 0.75rem; color: var(--bs-body-color); background-color: var(--bs-tertiary-bg); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0; border-inline-end-width: var(--bs-border-width); border-radius: 0; -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${ceruleanScope}${formControl}::-webkit-file-upload-button`, {
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
globalStyle(`${ceruleanScope}${formControl}::file-selector-button`, {
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
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${ceruleanScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::file-selector-button { background-color: var(--bs-secondary-bg); }
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${ceruleanScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// .collapse:not(.show) { display: none; }
globalStyle(`${ceruleanScope}${collapse}:not(${collapseShow})`, {
	display: "none",
})

// SOURCE CSS:
// .navbar { --bs-navbar-padding-x: 0; --bs-navbar-padding-y: 0.5rem; --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65); --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8); --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3); --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-brand-padding-y: 0.3125rem; --bs-navbar-brand-margin-end: 1rem; --bs-navbar-brand-font-size: 1.25rem; --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-nav-link-padding-x: 0.5rem; --bs-navbar-toggler-padding-y: 0.25rem; --bs-navbar-toggler-padding-x: 0.75rem; --bs-navbar-toggler-font-size: 1.25rem; --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15); --bs-navbar-toggler-border-radius: var(--bs-border-radius); --bs-navbar-toggler-focus-width: 0.25rem; --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out; position: relative; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x); }
globalStyle(`${ceruleanScope}${navbar}`, {
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
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2873, 80, 87, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
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
	padding: `${varBsNavbarPaddingY} ${varBsNavbarPaddingX}`,
})

// SOURCE CSS:
// .navbar > .container { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container" — no contract mapping
globalStyle(`${ceruleanScope}${navbar} > .container`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-fluid { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
globalStyle(`${ceruleanScope}${navbar} > ${ceruleanScope}${containerFluid}`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-sm { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-sm" — no contract mapping
globalStyle(`${ceruleanScope}${navbar} > .container-sm`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-md { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-md" — no contract mapping
globalStyle(`${ceruleanScope}${navbar} > .container-md`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-lg { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-lg" — no contract mapping
globalStyle(`${ceruleanScope}${navbar} > .container-lg`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-xl { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-xl" — no contract mapping
globalStyle(`${ceruleanScope}${navbar} > .container-xl`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-xxl { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-xxl" — no contract mapping
globalStyle(`${ceruleanScope}${navbar} > .container-xxl`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar-brand { padding-top: var(--bs-navbar-brand-padding-y); padding-bottom: var(--bs-navbar-brand-padding-y); margin-right: var(--bs-navbar-brand-margin-end); font-size: var(--bs-navbar-brand-font-size); color: var(--bs-navbar-brand-color); text-decoration: none; white-space: nowrap; }
globalStyle(`${ceruleanScope}${navbarBrand}`, {
	paddingTop: varBsNavbarBrandPaddingY,
	paddingBottom: varBsNavbarBrandPaddingY,
	marginRight: varBsNavbarBrandMarginEnd,
	fontSize: varBsNavbarBrandFontSize,
	color: varBsNavbarBrandColor,
	textDecoration: "none",
	whiteSpace: "nowrap",
	textShadow: "0 1px 0 rgba(0, 0, 0, 0.05)",
})

// SOURCE CSS:
// .navbar-brand:hover { color: var(--bs-navbar-brand-hover-color); }
globalStyle(`${ceruleanScope}${navbarBrand}:hover`, {
	color: varBsNavbarBrandHoverColor,
})

// SOURCE CSS:
// .navbar-brand:focus { color: var(--bs-navbar-brand-hover-color); }
globalStyle(`${ceruleanScope}${navbarBrand}:focus`, {
	color: varBsNavbarBrandHoverColor,
})

// SOURCE CSS:
// .navbar-nav { --bs-nav-link-padding-x: 0; --bs-nav-link-padding-y: 0.5rem; --bs-nav-link-font-weight: ; --bs-nav-link-color: var(--bs-navbar-color); --bs-nav-link-hover-color: var(--bs-navbar-hover-color); --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color); display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0; list-style: none; }
globalStyle(`${ceruleanScope}${navbarNav}`, {
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
globalStyle(`${ceruleanScope}${navbarNav} ${ceruleanScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

// SOURCE CSS:
// .navbar-nav .nav-link.show { color: var(--bs-navbar-active-color); }
globalStyle(`${ceruleanScope}${navbarNav} ${ceruleanScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

// SOURCE CSS:
// .navbar-nav .dropdown-menu { position: static; }
globalStyle(`${ceruleanScope}${navbarNav} ${ceruleanScope}${dropdownMenu}`, {
	position: "static",
})

// SOURCE CSS:
// .navbar-collapse { flex-grow: 1; flex-basis: 100%; align-items: center; }
globalStyle(`${ceruleanScope}${navbarCollapse}`, {
	flexGrow: 1,
	flexBasis: "100%",
	alignItems: "center",
})

// SOURCE CSS:
// .navbar-toggler { padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x); font-size: var(--bs-navbar-toggler-font-size); line-height: 1; color: var(--bs-navbar-color); background-color: transparent; border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color); border-radius: var(--bs-navbar-toggler-border-radius); transition: var(--bs-navbar-toggler-transition); }
globalStyle(`${ceruleanScope}${navbarToggler}`, {
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
globalStyle(`${ceruleanScope}${navbarToggler}:hover`, {
	textDecoration: "none",
})

// SOURCE CSS:
// .navbar-toggler:focus { text-decoration: none; outline: 0; box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width); }
globalStyle(`${ceruleanScope}${navbarToggler}:focus`, {
	textDecoration: "none",
	outline: 0,
	boxShadow: `0 0 0 ${varBsNavbarTogglerFocusWidth}`,
})

// SOURCE CSS:
// .navbar-toggler-icon { display: inline-block; width: 1.5em; height: 1.5em; vertical-align: middle; background-image: var(--bs-navbar-toggler-icon-bg); background-repeat: no-repeat; background-position: center; background-size: 100%; }
globalStyle(`${ceruleanScope}${navbarTogglerIcon}`, {
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
globalStyle(`${ceruleanScope}${navbarDarkBgPrimary}`, {
	vars: {
		[varBsNavbarColor]: "rgba(255, 255, 255, 0.8)",
		[varBsNavbarHoverColor]: "#fff",
		[varBsNavbarDisabledColor]: "rgba(255, 255, 255, 0.25)",
		[varBsNavbarActiveColor]: "#fff",
		[varBsNavbarBrandColor]: "#fff",
		[varBsNavbarBrandHoverColor]: "#fff",
		[varBsNavbarTogglerBorderColor]: "rgba(255, 255, 255, 0.1)",
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .navbar[data-bs-theme="dark"] { --bs-navbar-color: rgba(255, 255, 255, 0.55); --bs-navbar-hover-color: rgba(255, 255, 255, 0.75); --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25); --bs-navbar-active-color: #fff; --bs-navbar-brand-color: #fff; --bs-navbar-brand-hover-color: #fff; --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1); --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); }
globalStyle(`${ceruleanScope}${navbar}[data-bs-theme="dark"]`, {
	vars: {
		[varBsNavbarColor]: `rgba(${varBsEmphasisColorRgb}, 0.65)`,
		[varBsNavbarHoverColor]: `rgba(${varBsEmphasisColorRgb}, 0.8)`,
		[varBsNavbarDisabledColor]: `rgba(${varBsEmphasisColorRgb}, 0.3)`,
		[varBsNavbarActiveColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarBrandColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarBrandHoverColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarTogglerBorderColor]: `rgba(${varBsEmphasisColorRgb}, 0.15)`,
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2873, 80, 87, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
	},
	position: "relative",
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `${varBsNavbarPaddingY} ${varBsNavbarPaddingX}`,
})

// SOURCE CSS:
// .d-flex { display: flex !important; }
globalStyle(`${ceruleanScope}${dFlex}`, {
	display: "flex !important",
})

// SOURCE CSS:
// .mt-5 { margin-top: 3rem !important; }
globalStyle(`${ceruleanScope}${mt5}`, {
	marginTop: "3rem !important",
})

// SOURCE CSS:
// .me-2 { margin-right: 0.5rem !important; }
globalStyle(`${ceruleanScope}${me2}`, {
	marginRight: "0.5rem !important",
})

// SOURCE CSS:
// .me-auto { margin-right: auto !important; }
globalStyle(`${ceruleanScope}${meAuto}`, {
	marginRight: "auto !important",
})

// SOURCE CSS:
// .mb-2 { margin-bottom: 0.5rem !important; }
globalStyle(`${ceruleanScope}${mb2}`, {
	marginBottom: "0.5rem !important",
})

// SOURCE CSS:
// .bg-primary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${ceruleanScope}${navbarDarkBgPrimary}`, {
	backgroundColor: `rgba(${varBsPrimaryRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-light { --bs-bg-opacity: 1; background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${ceruleanScope}${navbarBgLight}`, {
	backgroundColor: `rgba(${varBsLightRgb}, 1) !important`,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .navbar-text { padding-top: 0.5rem; padding-bottom: 0.5rem; color: var(--bs-navbar-color); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${navbarText}`, {
	paddingTop: "0.5rem",
	paddingBottom: "0.5rem",
	color: varBsNavbarColor,
})
// SOURCE CSS:
// .navbar-text a { color: var(--bs-navbar-active-color); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "a" — map to a contract class
globalStyle(`${ceruleanScope}${navbarText} a`, {
	color: varBsNavbarActiveColor,
})
// SOURCE CSS:
// .navbar-text a:hover { color: var(--bs-navbar-active-color); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "a:hover" — map to a contract class
globalStyle(`${ceruleanScope}${navbarText} a:hover`, {
	color: varBsNavbarActiveColor,
})
// SOURCE CSS:
// .navbar-text a:focus { color: var(--bs-navbar-active-color); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "a:focus" — map to a contract class
globalStyle(`${ceruleanScope}${navbarText} a:focus`, {
	color: varBsNavbarActiveColor,
})
// SOURCE CSS:
// .navbar-nav-scroll { max-height: var(--bs-scroll-height, 75vh); overflow-y: auto; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${navbarNavScroll}`, {
	maxHeight: varBsScrollHeight,
	overflowY: "auto",
})
// SOURCE CSS:
// .navbar-expand .navbar-nav { flex-direction: row; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".navbar-expand" — no contract mapping
globalStyle(`.navbar-expand ${ceruleanScope}${navbarNav}`, {
	flexDirection: "row",
})
// SOURCE CSS:
// .navbar-expand .navbar-nav .dropdown-menu { position: absolute; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".navbar-expand" — no contract mapping
globalStyle(`.navbar-expand ${ceruleanScope}${navbarNav} ${ceruleanScope}${dropdownMenu}`, {
	position: "absolute",
})
// SOURCE CSS:
// .navbar-expand .navbar-nav .nav-link { padding-right: var(--bs-navbar-nav-link-padding-x); padding-left: var(--bs-navbar-nav-link-padding-x); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".navbar-expand" — no contract mapping
globalStyle(`.navbar-expand ${ceruleanScope}${navbarNav} ${ceruleanScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})
// SOURCE CSS:
// .navbar-expand .navbar-nav-scroll { overflow: visible; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".navbar-expand" — no contract mapping
globalStyle(`.navbar-expand ${ceruleanScope}${navbarNavScroll}`, {
	overflow: "visible",
})
// SOURCE CSS:
// .navbar-expand .navbar-collapse { display: flex !important; flex-basis: auto; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".navbar-expand" — no contract mapping
globalStyle(`.navbar-expand ${ceruleanScope}${navbarCollapse}`, {
	display: "flex !important",
	flexBasis: "auto",
})
// SOURCE CSS:
// .navbar-expand .navbar-toggler { display: none; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".navbar-expand" — no contract mapping
globalStyle(`.navbar-expand ${ceruleanScope}${navbarToggler}`, {
	display: "none",
})
// SOURCE CSS:
// .navbar[data-bs-theme=dark] { --bs-navbar-color: rgba(255, 255, 255, 0.8); --bs-navbar-hover-color: #fff; --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25); --bs-navbar-active-color: #fff; --bs-navbar-brand-color: #fff; --bs-navbar-brand-hover-color: #fff; --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1); --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${navbar}[data-bs-theme=dark]`, {
	vars: {
		[varBsNavbarColor]: "rgba(255, 255, 255, 0.8)",
		[varBsNavbarHoverColor]: "#fff",
		[varBsNavbarDisabledColor]: "rgba(255, 255, 255, 0.25)",
		[varBsNavbarActiveColor]: "#fff",
		[varBsNavbarBrandColor]: "#fff",
		[varBsNavbarBrandHoverColor]: "#fff",
		[varBsNavbarTogglerBorderColor]: "rgba(255, 255, 255, 0.1)",
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.8%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
	},
})
// SOURCE CSS:
// .navbar.bg-primary { background-image: linear-gradient(#50b3eb, #2fa4e7 60%, #2c9ad9); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${navbar}${navbarDarkBgPrimary}`, {
	backgroundImage: "linear-gradient(#50b3eb, #2fa4e7 60%, #2c9ad9)",
})
// SOURCE CSS:
// .navbar.bg-secondary { background-image: linear-gradient(#edeff2, #e9ecef 60%, #dbdee1); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".bg-secondary" — no contract mapping
globalStyle(`${ceruleanScope}${navbar}.bg-secondary`, {
	backgroundImage: "linear-gradient(#edeff2, #e9ecef 60%, #dbdee1)",
})
// SOURCE CSS:
// .navbar.bg-success { background-image: linear-gradient(#89b659, #73a839 60%, #6c9e36); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".bg-success" — no contract mapping
globalStyle(`${ceruleanScope}${navbar}.bg-success`, {
	backgroundImage: "linear-gradient(#89b659, #73a839 60%, #6c9e36)",
})
// SOURCE CSS:
// .navbar.bg-info { background-image: linear-gradient(#2b5b89, #033c73 60%, #03386c); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".bg-info" — no contract mapping
globalStyle(`${ceruleanScope}${navbar}.bg-info`, {
	backgroundImage: "linear-gradient(#2b5b89, #033c73 60%, #03386c)",
})
// SOURCE CSS:
// .navbar.bg-warning { background-image: linear-gradient(#e27129, #dd5600 60%, #d05100); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".bg-warning" — no contract mapping
globalStyle(`${ceruleanScope}${navbar}.bg-warning`, {
	backgroundImage: "linear-gradient(#e27129, #dd5600 60%, #d05100)",
})
// SOURCE CSS:
// .navbar.bg-danger { background-image: linear-gradient(#d04045, #c71c22 60%, #bb1a20); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".bg-danger" — no contract mapping
globalStyle(`${ceruleanScope}${navbar}.bg-danger`, {
	backgroundImage: "linear-gradient(#d04045, #c71c22 60%, #bb1a20)",
})
// SOURCE CSS:
// .navbar.bg-light { background-image: linear-gradient(#f9fafb, #f8f9fa 60%, #e9eaeb); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${navbar}${navbarBgLight}`, {
	backgroundImage: "linear-gradient(#f9fafb, #f8f9fa 60%, #e9eaeb)",
})
// SOURCE CSS:
// .navbar.bg-dark { background-image: linear-gradient(#545a5f, #343a40 60%, #31373c); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${navbar}${bgDark}`, {
	backgroundImage: "linear-gradient(#545a5f, #343a40 60%, #31373c)",
})
// SOURCE CSS:
// .nav-link { text-shadow: 0 1px 0 rgba(0, 0, 0, 0.05); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${navLink}`, {
	textShadow: "0 1px 0 rgba(0, 0, 0, 0.05)",
})
