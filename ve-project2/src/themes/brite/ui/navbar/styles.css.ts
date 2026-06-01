import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsLightRgb,
	varBsPrimaryRgb,
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
	dropdownToggle,
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
	me2,
	meAuto,
	mt5,
} from '../../../../theme-contract/utilities/contract.css'
import { briteScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/navbar
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .form-control { display: block; width: 100%; padding: 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-body-bg); background-clip: padding-box; border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${briteScope}${formControl}`, {
	display: "block",
	width: "100%",
	padding: "0.5rem 1rem",
	fontSize: "0.875rem",
	fontWeight: 400,
	lineHeight: 1.5,
	color: varBsBodyColor,
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: varBsBodyBg,
	backgroundClip: "padding-box",
	border: `2px solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control:focus { color: var(--bs-body-color); background-color: var(--bs-body-bg); border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${briteScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: "#000",
	outline: 0,
	boxShadow: "0 0 0 1px #000",
})

// SOURCE CSS:
// .form-control::-webkit-date-and-time-value { min-width: 85px; height: 1.5em; margin: 0; }
globalStyle(`${briteScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: "85px",
	height: "1.5em",
	margin: 0,
})

// SOURCE CSS:
// .form-control::-webkit-datetime-edit { display: block; padding: 0; }
globalStyle(`${briteScope}${formControl}::-webkit-datetime-edit`, {
	display: "block",
	padding: 0,
})

// SOURCE CSS:
// .form-control::placeholder { color: var(--bs-secondary-color); opacity: 1; }
globalStyle(`${briteScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: 1,
})

// SOURCE CSS:
// .form-control:disabled { background-color: var(--bs-secondary-bg); opacity: 1; }
globalStyle(`${briteScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: 1,
})

// SOURCE CSS:
// .form-control::-webkit-file-upload-button { padding: 0.375rem 0.75rem; margin: -0.375rem -0.75rem; -webkit-margin-end: 0.75rem; margin-inline-end: 0.75rem; color: var(--bs-body-color); background-color: var(--bs-tertiary-bg); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0; border-inline-end-width: var(--bs-border-width); border-radius: 0; -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${briteScope}${formControl}::-webkit-file-upload-button`, {
	padding: "0.5rem 1rem",
	margin: "-0.5rem -1rem",
	WebkitMarginEnd: "1rem",
	marginInlineEnd: "1rem",
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: "none",
	borderColor: "inherit",
	borderStyle: "solid",
	borderWidth: 0,
	borderInlineEndWidth: "2px",
	borderRadius: 0,
	WebkitTransition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control::file-selector-button { padding: 0.375rem 0.75rem; margin: -0.375rem -0.75rem; -webkit-margin-end: 0.75rem; margin-inline-end: 0.75rem; color: var(--bs-body-color); background-color: var(--bs-tertiary-bg); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0; border-inline-end-width: var(--bs-border-width); border-radius: 0; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${briteScope}${formControl}::file-selector-button`, {
	padding: "0.5rem 1rem",
	margin: "-0.5rem -1rem",
	WebkitMarginEnd: "1rem",
	marginInlineEnd: "1rem",
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: "none",
	borderColor: "inherit",
	borderStyle: "solid",
	borderWidth: 0,
	borderInlineEndWidth: "2px",
	borderRadius: 0,
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button { background-color: var(--bs-secondary-bg); }
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${briteScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::file-selector-button { background-color: var(--bs-secondary-bg); }
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${briteScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// .collapse:not(.show) { display: none; }
globalStyle(`${briteScope}${collapse}:not(${collapseShow})`, {
	display: "none",
})

// SOURCE CSS:
// .navbar { --bs-navbar-padding-x: 0; --bs-navbar-padding-y: 0.5rem; --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65); --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8); --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3); --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-brand-padding-y: 0.3125rem; --bs-navbar-brand-margin-end: 1rem; --bs-navbar-brand-font-size: 1.25rem; --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1); --bs-navbar-nav-link-padding-x: 0.5rem; --bs-navbar-toggler-padding-y: 0.25rem; --bs-navbar-toggler-padding-x: 0.75rem; --bs-navbar-toggler-font-size: 1.25rem; --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15); --bs-navbar-toggler-border-radius: var(--bs-border-radius); --bs-navbar-toggler-focus-width: 0.25rem; --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out; position: relative; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x); }
globalStyle(`${briteScope}${navbar}`, {
	vars: {
		[varBsNavbarPaddingX]: 0,
		[varBsNavbarPaddingY]: "0.75rem",
		[varBsNavbarColor]: "#000",
		[varBsNavbarHoverColor]: "#000",
		[varBsNavbarDisabledColor]: "rgba(0, 0, 0, 0.3)",
		[varBsNavbarActiveColor]: "#000",
		[varBsNavbarBrandPaddingY]: "0.3359375rem",
		[varBsNavbarBrandMarginEnd]: "1rem",
		[varBsNavbarBrandFontSize]: "1.09375rem",
		[varBsNavbarBrandColor]: "#000",
		[varBsNavbarBrandHoverColor]: "#000",
		[varBsNavbarNavLinkPaddingX]: "1rem",
		[varBsNavbarTogglerPaddingY]: "0.25rem",
		[varBsNavbarTogglerPaddingX]: "0.75rem",
		[varBsNavbarTogglerFontSize]: "1.09375rem",
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23000' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
		[varBsNavbarTogglerBorderColor]: "#000",
		[varBsNavbarTogglerBorderRadius]: varBsBorderRadius,
		[varBsNavbarTogglerFocusWidth]: "1px",
		[varBsNavbarTogglerTransition]: "box-shadow 0.15s ease-in-out",
	},
	position: "relative",
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `${varBsNavbarPaddingY} ${varBsNavbarPaddingX}`,
	fontSize: "1.09375rem",
	fontWeight: 500,
	border: "2px solid #000",
})

// SOURCE CSS:
// .navbar > .container { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-fluid { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
globalStyle(`${briteScope}${navbar} > ${briteScope}${containerFluid}`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-sm { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-sm" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container-sm`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-md { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-md" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container-md`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-lg { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-lg" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container-lg`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-xl { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-xl" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container-xl`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar > .container-xxl { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [UNMAPPED_SELECTOR] class ".container-xxl" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container-xxl`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})

// SOURCE CSS:
// .navbar-brand { padding-top: var(--bs-navbar-brand-padding-y); padding-bottom: var(--bs-navbar-brand-padding-y); margin-right: var(--bs-navbar-brand-margin-end); font-size: var(--bs-navbar-brand-font-size); color: var(--bs-navbar-brand-color); text-decoration: none; white-space: nowrap; }
globalStyle(`${briteScope}${navbarBrand}`, {
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
globalStyle(`${briteScope}${navbarBrand}:hover`, {
	color: varBsNavbarBrandHoverColor,
})

// SOURCE CSS:
// .navbar-brand:focus { color: var(--bs-navbar-brand-hover-color); }
globalStyle(`${briteScope}${navbarBrand}:focus`, {
	color: varBsNavbarBrandHoverColor,
})

// SOURCE CSS:
// .navbar-nav { --bs-nav-link-padding-x: 0; --bs-nav-link-padding-y: 0.5rem; --bs-nav-link-font-weight: ; --bs-nav-link-color: var(--bs-navbar-color); --bs-nav-link-hover-color: var(--bs-navbar-hover-color); --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color); display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0; list-style: none; }
globalStyle(`${briteScope}${navbarNav}`, {
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
globalStyle(`${briteScope}${navbarNav} ${briteScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

// SOURCE CSS:
// .navbar-nav .nav-link.show { color: var(--bs-navbar-active-color); }
globalStyle(`${briteScope}${navbarNav} ${briteScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

// SOURCE CSS:
// .navbar-nav .dropdown-menu { position: static; }
globalStyle(`${briteScope}${navbarNav} ${briteScope}${dropdownMenu}`, {
	position: "static",
})

// SOURCE CSS:
// .navbar-collapse { flex-grow: 1; flex-basis: 100%; align-items: center; }
globalStyle(`${briteScope}${navbarCollapse}`, {
	flexGrow: 1,
	flexBasis: "100%",
	alignItems: "center",
})

// SOURCE CSS:
// .navbar-toggler { padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x); font-size: var(--bs-navbar-toggler-font-size); line-height: 1; color: var(--bs-navbar-color); background-color: transparent; border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color); border-radius: var(--bs-navbar-toggler-border-radius); transition: var(--bs-navbar-toggler-transition); }
globalStyle(`${briteScope}${navbarToggler}`, {
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
globalStyle(`${briteScope}${navbarToggler}:hover`, {
	textDecoration: "none",
})

// SOURCE CSS:
// .navbar-toggler:focus { text-decoration: none; outline: 0; box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width); }
globalStyle(`${briteScope}${navbarToggler}:focus`, {
	textDecoration: "none",
	outline: 0,
	boxShadow: `0 0 0 ${varBsNavbarTogglerFocusWidth}`,
})

// SOURCE CSS:
// .navbar-toggler-icon { display: inline-block; width: 1.5em; height: 1.5em; vertical-align: middle; background-image: var(--bs-navbar-toggler-icon-bg); background-repeat: no-repeat; background-position: center; background-size: 100%; }
globalStyle(`${briteScope}${navbarTogglerIcon}`, {
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
globalStyle(`${briteScope}${navbarDarkBgPrimary}`, {
	vars: {
		[varBsNavbarColor]: "#fff",
		[varBsNavbarHoverColor]: "#fff",
		[varBsNavbarDisabledColor]: "rgba(255, 255, 255, 0.3)",
		[varBsNavbarActiveColor]: "#fff",
		[varBsNavbarBrandColor]: "#fff",
		[varBsNavbarBrandHoverColor]: "#fff",
		[varBsNavbarTogglerBorderColor]: "#fff",
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23fff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .navbar[data-bs-theme="dark"] { --bs-navbar-color: rgba(255, 255, 255, 0.55); --bs-navbar-hover-color: rgba(255, 255, 255, 0.75); --bs-navbar-disabled-color: rgba(255, 255, 255, 0.25); --bs-navbar-active-color: #fff; --bs-navbar-brand-color: #fff; --bs-navbar-brand-hover-color: #fff; --bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1); --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"); }
globalStyle(`${briteScope}${navbar}[data-bs-theme="dark"]`, {
	vars: {
		[varBsNavbarColor]: "#fff",
		[varBsNavbarHoverColor]: "#fff",
		[varBsNavbarDisabledColor]: "rgba(255, 255, 255, 0.3)",
		[varBsNavbarActiveColor]: "#fff",
		[varBsNavbarBrandColor]: "#fff",
		[varBsNavbarBrandHoverColor]: "#fff",
		[varBsNavbarTogglerBorderColor]: "#fff",
		[varBsNavbarTogglerIconBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23fff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .d-flex { display: flex !important; }
globalStyle(`${briteScope}${dFlex}`, {
	display: "flex !important",
})

// SOURCE CSS:
// .mt-5 { margin-top: 3rem !important; }
globalStyle(`${briteScope}${mt5}`, {
	marginTop: "3rem !important",
})

// SOURCE CSS:
// .me-2 { margin-right: 0.5rem !important; }
globalStyle(`${briteScope}${me2}`, {
	marginRight: "0.5rem !important",
})

// SOURCE CSS:
// .me-auto { margin-right: auto !important; }
globalStyle(`${briteScope}${meAuto}`, {
	marginRight: "auto !important",
})

// SOURCE CSS:
// .mb-2 { margin-bottom: 0.5rem !important; }
globalStyle(`${briteScope}${mb2}`, {
	marginBottom: "0.5rem !important",
})

// SOURCE CSS:
// .bg-primary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${navbarDarkBgPrimary}`, {
	backgroundColor: `rgba(${varBsPrimaryRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-light { --bs-bg-opacity: 1; background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${navbarBgLight}`, {
	backgroundColor: `rgba(${varBsLightRgb}, 1) !important`,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button { background-color: var(--bs-secondary-bg); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${briteScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})
// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::file-selector-button { background-color: var(--bs-secondary-bg); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${briteScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})
// SOURCE CSS:
// .navbar > .container { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".container" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})
// SOURCE CSS:
// .navbar > .container-sm { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".container-sm" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container-sm`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})
// SOURCE CSS:
// .navbar > .container-md { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".container-md" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container-md`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})
// SOURCE CSS:
// .navbar > .container-lg { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".container-lg" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container-lg`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})
// SOURCE CSS:
// .navbar > .container-xl { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".container-xl" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container-xl`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})
// SOURCE CSS:
// .navbar > .container-xxl { display: flex; flex-wrap: inherit; align-items: center; justify-content: space-between; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".container-xxl" — no contract mapping
globalStyle(`${briteScope}${navbar} > .container-xxl`, {
	display: "flex",
	flexWrap: "inherit",
	alignItems: "center",
	justifyContent: "space-between",
})
// SOURCE CSS:
// .bg-primary { --bs-bg-opacity: 1; background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${navbarDarkBgPrimary}`, {
	backgroundColor: `rgba(${varBsPrimaryRgb}, 1) !important`,
})
// SOURCE CSS:
// .bg-light { --bs-bg-opacity: 1; background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${briteScope}${navbarBgLight}`, {
	backgroundColor: `rgba(${varBsLightRgb}, 1) !important`,
})
// SOURCE CSS:
// .navbar .dropdown-toggle::after { margin-left: 0.15em; vertical-align: 0.15em; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${navbar} ${briteScope}${dropdownToggle}::after`, {
	marginLeft: "0.15em",
	verticalAlign: "0.15em",
})
