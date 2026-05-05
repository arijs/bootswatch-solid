import { globalStyle } from '@vanilla-extract/css'
import {
	nav,
	navLink,
	navLinkActive,
	navLinkDisabled,
	navPills,
	navTabs,
} from '../../../../theme-contract/ui/navs/contract.css'
import {
	varBsNavLinkColor,
	varBsNavLinkDisabledColor,
	varBsNavLinkFontWeight,
	varBsNavLinkHoverColor,
	varBsNavLinkPaddingX,
	varBsNavLinkPaddingY,
	varBsNavPillsBorderRadius,
	varBsNavPillsLinkActiveBg,
	varBsNavPillsLinkActiveColor,
	varBsNavTabsBorderColor,
	varBsNavTabsBorderRadius,
	varBsNavTabsBorderWidth,
	varBsNavTabsLinkActiveBg,
	varBsNavTabsLinkActiveBorderColor,
	varBsNavTabsLinkActiveColor,
	varBsNavTabsLinkHoverBorderColor,
} from '../../../../theme-contract/ui/navs/_vars.css'
import {
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBodyBg,
	varBsEmphasisColor,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsSecondaryBg,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import { slateScope } from '../../scope.css'

// ── .nav base ─────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .nav {
//   --bs-nav-link-padding-x: 1rem; --bs-nav-link-padding-y: 0.5rem;
//   --bs-nav-link-font-weight: ;
//   --bs-nav-link-color: var(--bs-link-color);
//   --bs-nav-link-hover-color: var(--bs-link-hover-color);
//   --bs-nav-link-disabled-color: var(--bs-secondary-color);
//   display: flex; flex-wrap: wrap; padding-left: 0; margin-bottom: 0; list-style: none;
// }
globalStyle(`${slateScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: varBsSecondaryColor,
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: 0,
	marginBottom: 0,
	listStyle: 'none',
})

// ── .nav-link ─────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .nav-link { display: block;
//   padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);
//   font-weight: var(--bs-nav-link-font-weight);
//   color: var(--bs-nav-link-color);
//   text-decoration: none; background: none; border: 0;
//   transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
//               border-color 0.15s ease-in-out; }
globalStyle(`${slateScope}${navLink}`, {
	display: 'block',
	padding: `${varBsNavLinkPaddingY} ${varBsNavLinkPaddingX}`,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	fontWeight: varBsNavLinkFontWeight,
	lineHeight: 'inherit',
	color: varBsNavLinkColor,
	textDecoration: 'none',
	background: 'none',
	appearance: 'none',
	border: 0,
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
})

// SOURCE CSS: .nav-link:hover, .nav-link:focus { color: var(--bs-nav-link-hover-color); }
globalStyle(`${slateScope}${navLink}:hover, ${slateScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

// SOURCE CSS:
// .nav-link.disabled, .nav-link:disabled {
//   color: var(--bs-nav-link-disabled-color); pointer-events: none; cursor: default; }
globalStyle(
	`${slateScope}${navLink}${navLinkDisabled}, ${slateScope}${navLink}:disabled`,
	{
		color: varBsNavLinkDisabledColor,
		pointerEvents: 'none',
		cursor: 'default',
	},
)

// ── .nav-tabs ─────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .nav-tabs {
//   --bs-nav-tabs-border-width: var(--bs-border-width);
//   --bs-nav-tabs-border-color: var(--bs-border-color);
//   --bs-nav-tabs-border-radius: var(--bs-border-radius);
//   --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);
//   --bs-nav-tabs-link-active-color: var(--bs-emphasis-color);
//   --bs-nav-tabs-link-active-bg: var(--bs-body-bg);
//   --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);
//   border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color);
// }
globalStyle(`${slateScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: varBsEmphasisColor,
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

// SOURCE CSS:
// .nav-tabs .nav-link { margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width));
//   border: var(--bs-nav-tabs-border-width) solid transparent;
//   border-top-left-radius: var(--bs-nav-tabs-border-radius);
//   border-top-right-radius: var(--bs-nav-tabs-border-radius); }
globalStyle(`${slateScope}${navTabs} ${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

// SOURCE CSS:
// .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
//   isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(
	`${slateScope}${navTabs} ${navLink}:hover, ${slateScope}${navTabs} ${navLink}:focus`,
	{
		isolation: 'isolate',
		borderColor: varBsNavTabsLinkHoverBorderColor,
	},
)

// SOURCE CSS:
// .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
//   color: var(--bs-nav-tabs-link-active-color);
//   background-color: var(--bs-nav-tabs-link-active-bg);
//   border-color: var(--bs-nav-tabs-link-active-border-color); }
globalStyle(`${slateScope}${navTabs} ${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

// ── .nav-pills ────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .nav-pills {
//   --bs-nav-pills-border-radius: var(--bs-border-radius);
//   --bs-nav-pills-link-active-color: #fff;
//   --bs-nav-pills-link-active-bg: #0d6efd;
// }
globalStyle(`${slateScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#0d6efd',
	},
})

// SOURCE CSS: .nav-pills .nav-link { border-radius: var(--bs-nav-pills-border-radius); }
globalStyle(`${slateScope}${navPills} ${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

// SOURCE CSS:
// .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
//   color: var(--bs-nav-pills-link-active-color);
//   background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${slateScope}${navPills} ${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${slateScope}${navTabs} ${navLink}`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
	border: '1px solid rgba(0, 0, 0, 0.6)',
	color: '#fff',
})

globalStyle(
	`${slateScope}${navTabs} ${navLink}:not([disabled]):not(.disabled):hover, ` +
		`${slateScope}${navTabs} ${navLink}:not([disabled]):not(.disabled):focus, ` +
		`${slateScope}${navTabs} ${navLink}:not([disabled]):not(.disabled):active, ` +
		`${slateScope}${navTabs} ${navLink}${navLinkActive}`,
	{
		backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
		filter: 'none',
	},
)

globalStyle(`${slateScope}${navTabs} ${navLinkDisabled}`, {
	border: '1px solid rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navTabs} ${navLink}, ${slateScope}${navTabs} ${navLink}:hover`, {
	color: '#fff',
})

globalStyle(`${slateScope}${navPills} ${navLink}`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
	color: '#fff',
	textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
	border: '1px solid rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navPills} ${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
	border: '1px solid rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navPills} ${navLink}${navLinkActive}, ${slateScope}${navPills} ${navLink}:hover`, {
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
	border: '1px solid rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navPills} ${navLinkDisabled}, ${slateScope}${navPills} ${navLinkDisabled}:hover`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
	color: varBsSecondaryColor,
})
