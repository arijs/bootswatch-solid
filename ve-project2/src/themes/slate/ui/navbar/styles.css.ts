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
import { slateScope } from '../../scope.css'

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
globalStyle(`${slateScope}${navbar}`, {
	vars: {
		[varBsNavbarPaddingX]: '0',
		[varBsNavbarPaddingY]: '0',
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
		[varBsNavbarTogglerIconBg]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28170, 170, 170, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
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
globalStyle(`${slateScope}${navbar} > ${slateScope}${containerFluid}`, {
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
globalStyle(`${slateScope}${navbarBrand}`, {
	paddingTop: varBsNavbarBrandPaddingY,
	paddingBottom: varBsNavbarBrandPaddingY,
	marginRight: varBsNavbarBrandMarginEnd,
	fontSize: varBsNavbarBrandFontSize,
	color: varBsNavbarBrandColor,
	textDecoration: 'none',
	whiteSpace: 'nowrap',
})

globalStyle(`${slateScope}${navbarBrand}:hover, ${slateScope}${navbarBrand}:focus`, {
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
globalStyle(`${slateScope}${navbarNav}`, {
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
globalStyle(`${slateScope}${navbarNav} ${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

// ── .navbar-collapse ──────────────────────────────────────────────────────────

// SOURCE CSS:
// .navbar-collapse { flex-grow: 1; flex-basis: 100%; align-items: center; }
globalStyle(`${slateScope}${navbarCollapse}`, {
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
globalStyle(`${slateScope}${navbarToggler}`, {
	padding: `${varBsNavbarTogglerPaddingY} ${varBsNavbarTogglerPaddingX}`,
	fontSize: varBsNavbarTogglerFontSize,
	lineHeight: 1,
	color: varBsNavbarColor,
	backgroundColor: 'transparent',
	border: `${varBsBorderWidth} solid ${varBsNavbarTogglerBorderColor}`,
	borderRadius: varBsNavbarTogglerBorderRadius,
	transition: varBsNavbarTogglerTransition,
})

globalStyle(`${slateScope}${navbarToggler}:hover`, {
	textDecoration: 'none',
})

globalStyle(`${slateScope}${navbarToggler}:focus`, {
	textDecoration: 'none',
	outline: 0,
	boxShadow: `0 0 0 ${varBsNavbarTogglerFocusWidth}`,
})

// ── .navbar-toggler-icon ──────────────────────────────────────────────────────

// SOURCE CSS:
// .navbar-toggler-icon { display: inline-block; width: 1.5em; height: 1.5em;
//   vertical-align: middle; background-image: var(--bs-navbar-toggler-icon-bg);
//   background-repeat: no-repeat; background-position: center; background-size: 100%; }
globalStyle(`${slateScope}${navbarTogglerIcon}`, {
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
globalStyle(`${slateScope}${navbarExpandLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
		},
	},
})

globalStyle(`${slateScope}${navbarExpandLg} ${navbarNav}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${slateScope}${navbarExpandLg} ${navbarNav} ${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${slateScope}${navbarExpandLg} ${navbarCollapse}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'flex',
			flexBasis: 'auto',
		},
	},
})

globalStyle(`${slateScope}${navbarExpandLg} ${navbarToggler}`, {
	'@media': {
		'(min-width: 992px)': {
			display: 'none',
		},
	},
})

// ── Color scheme variants ─────────────────────────────────────────────────────

// navbarBgLight absorbs `navbar-light bg-light`:
//   light-color scheme (default emphasis-based vars) + background-color: var(--bs-light)
globalStyle(`${slateScope}${navbar}${navbarBgLight}`, {
	backgroundColor: '#e9ecef',
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
globalStyle(`${slateScope}${navbar}${navbarDarkBgPrimary}`, {
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
	backgroundColor: '#3a3f44',
})

globalStyle(`${slateScope}${navbar}`, {
	textShadow: '1px 1px 1px rgba(0, 0, 0, 0.2)',
	border: '1px solid rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navbar} ${navbarToggler}`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navbar} ${navLink}`, {
	padding: '1rem',
	borderRight: '1px solid rgba(0, 0, 0, 0.2)',
	borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
})

globalStyle(`${slateScope}${navbarBrand}`, {
	padding: '0.75rem 1rem calc(24px - 0.75rem)',
	marginRight: 0,
	borderRight: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar} .nav-item.active ${navLink}`, {
	backgroundColor: 'rgba(0, 0, 0, 0.3)',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar} .nav-item + .nav-item`, {
	marginLeft: 0,
})

globalStyle(`${slateScope}${navbar}.bg-primary ${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-primary ${navLink}:active, ${slateScope}${navbar}.bg-primary ${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#25282c, #292c30 40%, #2b2f32)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-secondary ${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#666d72, #6e757a 40%, #737a80)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-secondary ${navLink}:active, ${slateScope}${navbar}.bg-secondary ${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#4e5357, #555b5f 40%, #5a6065)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-success ${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#52a552, #58b058 40%, #5cb85c)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-success ${navLink}:active, ${slateScope}${navbar}.bg-success ${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#3f7d3f, #458945 40%, #499149)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-info ${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#4ca1ba, #52adc8 40%, #56b4d1)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-info ${navLink}:active, ${slateScope}${navbar}.bg-info ${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#3a7b8e, #40869b 40%, #438ea4)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-warning ${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#d07c05, #df8505 40%, #e98b06)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-warning ${navLink}:active, ${slateScope}${navbar}.bg-warning ${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#9f5f04, #ae6804 40%, #b86e04)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-danger ${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#c8504c, #d65652 40%, #e05956)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-danger ${navLink}:active, ${slateScope}${navbar}.bg-danger ${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#983d3a, #a74340 40%, #b04643)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-light ${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#c4c6c9, #d2d4d7 40%, #dbdee1)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-light ${navLink}:active, ${slateScope}${navbar}.bg-light ${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#959799, #a3a5a7 40%, #acafb1)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

// SOURCE CSS:
// @media (max-width: 992px) {
//   .navbar-expand-lg .navbar-brand,
//   .navbar-expand-lg .nav-link {
//     border: none !important;
//   }
// }
globalStyle(
	`${slateScope}${navbarExpandLg} ${slateScope}${navbarBrand}, ${slateScope}${navbarExpandLg} ${slateScope}${navLink}`,
	{
		'@media': {
			'(max-width: 992px)': {
				borderWidth: 'medium !important',
				borderStyle: 'none !important',
				borderColor: 'currentcolor !important',
				borderImage: 'initial !important',
			},
		},
	},
)

globalStyle(`${slateScope}${navbar}.bg-dark ${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#212428, #23272b 40%, #25282d)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}.bg-dark ${navLink}:active, ${slateScope}${navbar}.bg-dark ${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#191c1f, #1b1e22 40%, #1d2024)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbarExpandLg} ${navbarBrand}, ${slateScope}${navbarExpandLg} ${navLink}`, {
	'@media': {
		'(max-width: 992px)': {
			border: 'none !important',
		},
	},
})
