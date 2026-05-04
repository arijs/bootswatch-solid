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
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsSecondaryBg,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import { vaporScope } from '../../scope.css'

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
globalStyle(`${vaporScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: 'rgba(50, 251, 226, 0.3)',
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
globalStyle(`${vaporScope}${navLink}`, {
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
globalStyle(`${vaporScope}${navLink}:hover, ${vaporScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

// SOURCE CSS:
// .nav-link.disabled, .nav-link:disabled {
//   color: var(--bs-nav-link-disabled-color); pointer-events: none; cursor: default; }
globalStyle(
	`${vaporScope}${navLink}${navLinkDisabled}, ${vaporScope}${navLink}:disabled`,
	{
		color: varBsNavLinkDisabledColor,
		pointerEvents: 'none',
		cursor: 'default',
		textShadow: '0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2)',
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
globalStyle(`${vaporScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: '#ea39b8',
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
globalStyle(`${vaporScope}${navTabs} ${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

// SOURCE CSS:
// .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
//   isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(
	`${vaporScope}${navTabs} ${navLink}:hover, ${vaporScope}${navTabs} ${navLink}:focus`,
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
globalStyle(`${vaporScope}${navTabs} ${navLink}${navLinkActive}`, {
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
globalStyle(`${vaporScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#ea39b8',
	},
})

// SOURCE CSS: .nav-pills .nav-link { border-radius: var(--bs-nav-pills-border-radius); }
globalStyle(`${vaporScope}${navPills} ${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

// SOURCE CSS:
// .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
//   color: var(--bs-nav-pills-link-active-color);
//   background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${vaporScope}${navPills} ${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
	boxShadow:
		'0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})
