import { globalStyle } from '@vanilla-extract/css'
import {
	navbar,
	navbarBgLight,
	navbarBrand,
	navbarCollapse,
	navbarDarkBgPrimary,
	navbarExpandLg,
	navbarNav,
	navbarToggler,
	navbarTogglerIcon,
} from '../../../../theme-contract/ui/navbar/contract.css'
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
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColorRgb,
} from '../../../../theme-contract/_vars.css'
import { containerFluid } from '../../../../theme-contract/layout/container.css'
import { navLink, navLinkActive } from '../../../../theme-contract/ui/navs/contract.css'
import { bootstrapScope } from '../../scope.css'

// ── .navbar ───────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .navbar {
//   --bs-navbar-padding-x: 0; --bs-navbar-padding-y: 0.5rem;
//   --bs-navbar-color: rgba(var(--bs-emphasis-color-rgb), 0.65);
//   --bs-navbar-hover-color: rgba(var(--bs-emphasis-color-rgb), 0.8);
//   --bs-navbar-disabled-color: rgba(var(--bs-emphasis-color-rgb), 0.3);
//   --bs-navbar-active-color: rgba(var(--bs-emphasis-color-rgb), 1);
//   --bs-navbar-brand-padding-y: 0.3125rem; --bs-navbar-brand-margin-end: 1rem;
//   --bs-navbar-brand-font-size: 1.25rem;
//   --bs-navbar-brand-color: rgba(var(--bs-emphasis-color-rgb), 1);
//   --bs-navbar-brand-hover-color: rgba(var(--bs-emphasis-color-rgb), 1);
//   --bs-navbar-nav-link-padding-x: 0.5rem;
//   --bs-navbar-toggler-padding-y: 0.25rem; --bs-navbar-toggler-padding-x: 0.75rem;
//   --bs-navbar-toggler-font-size: 1.25rem;
//   --bs-navbar-toggler-icon-bg: url("...");
//   --bs-navbar-toggler-border-color: rgba(var(--bs-emphasis-color-rgb), 0.15);
//   --bs-navbar-toggler-border-radius: var(--bs-border-radius);
//   --bs-navbar-toggler-focus-width: 0.25rem;
//   --bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
//   position: relative; display: flex; flex-wrap: wrap;
//   align-items: center; justify-content: space-between;
//   padding: var(--bs-navbar-padding-y) var(--bs-navbar-padding-x); }
globalStyle(`${bootstrapScope}${navbar}`, {
	vars: {
		[varBsNavbarPaddingX]: '0',
		[varBsNavbarPaddingY]: '0.5rem',
		[varBsNavbarColor]: `rgba(${varBsEmphasisColorRgb}, 0.65)`,
		[varBsNavbarHoverColor]: `rgba(${varBsEmphasisColorRgb}, 0.8)`,
		[varBsNavbarDisabledColor]: `rgba(${varBsEmphasisColorRgb}, 0.3)`,
		[varBsNavbarActiveColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarBrandPaddingY]: '0.3125rem',
		[varBsNavbarBrandMarginEnd]: '1rem',
		[varBsNavbarBrandFontSize]: '1.25rem',
		[varBsNavbarBrandColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarBrandHoverColor]: `rgba(${varBsEmphasisColorRgb}, 1)`,
		[varBsNavbarNavLinkPaddingX]: '0.5rem',
		[varBsNavbarTogglerPaddingY]: '0.25rem',
		[varBsNavbarTogglerPaddingX]: '0.75rem',
		[varBsNavbarTogglerFontSize]: '1.25rem',
		[varBsNavbarTogglerIconBg]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
		[varBsNavbarTogglerBorderColor]: `rgba(${varBsEmphasisColorRgb}, 0.15)`,
		[varBsNavbarTogglerBorderRadius]: varBsBorderRadius,
		[varBsNavbarTogglerFocusWidth]: '0.25rem',
		[varBsNavbarTogglerTransition]: 'box-shadow 0.15s ease-in-out',
	},
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: `${varBsNavbarPaddingY} ${varBsNavbarPaddingX}`,
})

// SOURCE CSS:
// .navbar > .container, .navbar > .container-fluid, … { display: flex;
//   flex-wrap: inherit; align-items: center; justify-content: space-between; }
// VE2 migration: map source .container/.container-fluid to contract classes.
globalStyle(`${bootstrapScope}${navbar} > ${bootstrapScope}${containerFluid}`, {
	display: 'flex',
	flexWrap: 'inherit',
	alignItems: 'center',
	justifyContent: 'space-between',
})

// ── .navbar-brand ─────────────────────────────────────────────────────────────

// SOURCE CSS:
// .navbar-brand { padding-top: var(--bs-navbar-brand-padding-y);
//   padding-bottom: var(--bs-navbar-brand-padding-y);
//   margin-right: var(--bs-navbar-brand-margin-end);
//   font-size: var(--bs-navbar-brand-font-size);
//   color: var(--bs-navbar-brand-color);
//   text-decoration: none; white-space: nowrap; }
globalStyle(`${bootstrapScope}${navbarBrand}`, {
	paddingTop: varBsNavbarBrandPaddingY,
	paddingBottom: varBsNavbarBrandPaddingY,
	marginRight: varBsNavbarBrandMarginEnd,
	fontSize: varBsNavbarBrandFontSize,
	color: varBsNavbarBrandColor,
	textDecoration: 'none',
	whiteSpace: 'nowrap',
})

globalStyle(`${bootstrapScope}${navbarBrand}:hover, ${bootstrapScope}${navbarBrand}:focus`, {
	color: varBsNavbarBrandHoverColor,
})

// ── .navbar-nav ───────────────────────────────────────────────────────────────

// SOURCE CSS:
// .navbar-nav {
//   --bs-nav-link-padding-x: 0; --bs-nav-link-padding-y: 0.5rem;
//   --bs-nav-link-font-weight: ;
//   --bs-nav-link-color: var(--bs-navbar-color);
//   --bs-nav-link-hover-color: var(--bs-navbar-hover-color);
//   --bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);
//   display: flex; flex-direction: column; padding-left: 0;
//   margin-bottom: 0; list-style: none; }
globalStyle(`${bootstrapScope}${navbarNav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '0',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsNavbarColor,
		[varBsNavLinkHoverColor]: varBsNavbarHoverColor,
		[varBsNavLinkDisabledColor]: varBsNavbarDisabledColor,
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: 0,
	marginBottom: 0,
	listStyle: 'none',
})

// SOURCE CSS:
// .navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
//   color: var(--bs-navbar-active-color); }
globalStyle(`${bootstrapScope}${navbarNav} ${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

// ── .navbar-collapse ──────────────────────────────────────────────────────────

// SOURCE CSS:
// .navbar-collapse { flex-grow: 1; flex-basis: 100%; align-items: center; }
globalStyle(`${bootstrapScope}${navbarCollapse}`, {
	display: 'none',
	flexGrow: 1,
	flexBasis: '100%',
	alignItems: 'center',
})

// ── .navbar-toggler ───────────────────────────────────────────────────────────

// SOURCE CSS:
// .navbar-toggler { padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
//   font-size: var(--bs-navbar-toggler-font-size); line-height: 1;
//   color: var(--bs-navbar-color); background-color: transparent;
//   border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
//   border-radius: var(--bs-navbar-toggler-border-radius);
//   transition: var(--bs-navbar-toggler-transition); }
globalStyle(`${bootstrapScope}${navbarToggler}`, {
	padding: `${varBsNavbarTogglerPaddingY} ${varBsNavbarTogglerPaddingX}`,
	fontSize: varBsNavbarTogglerFontSize,
	lineHeight: 1,
	color: varBsNavbarColor,
	backgroundColor: 'transparent',
	border: `${varBsBorderWidth} solid ${varBsNavbarTogglerBorderColor}`,
	borderRadius: varBsNavbarTogglerBorderRadius,
	transition: varBsNavbarTogglerTransition,
})

globalStyle(`${bootstrapScope}${navbarToggler}:hover`, {
	textDecoration: 'none',
})

globalStyle(`${bootstrapScope}${navbarToggler}:focus`, {
	textDecoration: 'none',
	outline: 0,
	boxShadow: `0 0 0 ${varBsNavbarTogglerFocusWidth}`,
})

// ── .navbar-toggler-icon ──────────────────────────────────────────────────────

// SOURCE CSS:
// .navbar-toggler-icon { display: inline-block; width: 1.5em; height: 1.5em;
//   vertical-align: middle; background-image: var(--bs-navbar-toggler-icon-bg);
//   background-repeat: no-repeat; background-position: center; background-size: 100%; }
globalStyle(`${bootstrapScope}${navbarTogglerIcon}`, {
	display: 'inline-block',
	width: '1.5em',
	height: '1.5em',
	verticalAlign: 'middle',
	backgroundImage: varBsNavbarTogglerIconBg,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: '100%',
})

// ── .navbar-expand-lg (responsive) ───────────────────────────────────────────

// SOURCE CSS (inside @media (min-width: 992px)):
// .navbar-expand-lg { flex-wrap: nowrap; justify-content: flex-start; }
// .navbar-expand-lg .navbar-nav { flex-direction: row; }
// .navbar-expand-lg .navbar-nav .nav-link { padding-right/left: var(--bs-navbar-nav-link-padding-x); }
// .navbar-expand-lg .navbar-collapse { display: flex !important; flex-basis: auto; }
// .navbar-expand-lg .navbar-toggler { display: none; }
globalStyle(`${bootstrapScope}${navbarExpandLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${bootstrapScope}${navbarExpandLg} ${navbarNav}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${bootstrapScope}${navbarExpandLg} ${navbarNav} ${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${bootstrapScope}${navbarExpandLg} ${navbarCollapse}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${bootstrapScope}${navbarExpandLg} ${navbarToggler}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

// ── Color scheme variants ─────────────────────────────────────────────────────

// navbarBgLight absorbs `navbar-light bg-light`:
//   light-color scheme (default emphasis-based vars) + background-color: var(--bs-light)
globalStyle(`${bootstrapScope}${navbar}${navbarBgLight}`, {
	backgroundColor: '#f8f9fa',
})

// navbarDarkBgPrimary absorbs `navbar-dark bg-primary`:
//   dark color scheme (inverted vars) + background-color: var(--bs-primary)
// SOURCE CSS:
// .navbar-dark { --bs-navbar-color: rgba(255,255,255,.55);
//   --bs-navbar-hover-color: rgba(255,255,255,.75);
//   --bs-navbar-disabled-color: rgba(255,255,255,.25);
//   --bs-navbar-active-color: #fff;
//   --bs-navbar-brand-color: #fff; --bs-navbar-brand-hover-color: #fff;
//   --bs-navbar-toggler-border-color: rgba(255,255,255,.1);
//   --bs-navbar-toggler-icon-bg: url("...white stroke..."); }
globalStyle(`${bootstrapScope}${navbar}${navbarDarkBgPrimary}`, {
	vars: {
		[varBsNavbarColor]: 'rgba(255, 255, 255, 0.55)',
		[varBsNavbarHoverColor]: 'rgba(255, 255, 255, 0.75)',
		[varBsNavbarDisabledColor]: 'rgba(255, 255, 255, 0.25)',
		[varBsNavbarActiveColor]: '#fff',
		[varBsNavbarBrandColor]: '#fff',
		[varBsNavbarBrandHoverColor]: '#fff',
		[varBsNavbarTogglerBorderColor]: 'rgba(255, 255, 255, 0.1)',
		[varBsNavbarTogglerIconBg]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
	},
	backgroundColor: '#0d6efd',
})
