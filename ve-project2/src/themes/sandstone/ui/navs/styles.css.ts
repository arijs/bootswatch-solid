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
} from '../../../../theme-contract/_vars.css'
import { sandstoneScope } from '../../scope.css'

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
globalStyle(`${sandstoneScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '0.9rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: '#dfd7ca',
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
globalStyle(`${sandstoneScope}${navLink}`, {
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
globalStyle(`${sandstoneScope}${navLink}:hover, ${sandstoneScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

// SOURCE CSS:
// .nav-link.disabled, .nav-link:disabled {
//   color: var(--bs-nav-link-disabled-color); pointer-events: none; cursor: default; }
globalStyle(
	`${sandstoneScope}${navLink}${navLinkDisabled}, ${sandstoneScope}${navLink}:disabled`,
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
globalStyle(`${sandstoneScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: '#dfd7ca',
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: '#dfd7ca',
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
globalStyle(`${sandstoneScope}${navTabs} ${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

// SOURCE CSS:
// .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
//   isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(
	`${sandstoneScope}${navTabs} ${navLink}:hover, ${sandstoneScope}${navTabs} ${navLink}:focus`,
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
globalStyle(`${sandstoneScope}${navTabs} ${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-link.disabled, .nav-tabs .nav-link.disabled:hover, .nav-tabs .nav-link.disabled:focus {
//   color: #dfd7ca; background-color: #f8f5f0; border-color: #dfd7ca; }
globalStyle(
	`${sandstoneScope}${navTabs} ${navLink}${navLinkDisabled}, ${sandstoneScope}${navTabs} ${navLink}${navLinkDisabled}:hover, ${sandstoneScope}${navTabs} ${navLink}${navLinkDisabled}:focus`,
	{
		color: '#dfd7ca',
		backgroundColor: varBsBodyBg,
		borderColor: '#dfd7ca',
	},
)

// ── .nav-pills ────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .nav-pills {
//   --bs-nav-pills-border-radius: var(--bs-border-radius);
//   --bs-nav-pills-link-active-color: #8e8c84;  (Sandstone override)
//   --bs-nav-pills-link-active-bg: #f8f5f0;     (Sandstone override)
// }
globalStyle(`${sandstoneScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#8e8c84',
		[varBsNavPillsLinkActiveBg]: '#f8f5f0',
	},
})

// SOURCE CSS (Sandstone):
// .nav-pills .nav-link { color: #8e8c84; border: 1px solid transparent;
//   border-radius: var(--bs-nav-pills-border-radius); }
globalStyle(`${sandstoneScope}${navPills} ${navLink}`, {
	color: '#8e8c84',
	border: '1px solid transparent',
	borderRadius: varBsNavPillsBorderRadius,
})

// SOURCE CSS:
// .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
//   color: var(--bs-nav-pills-link-active-color);
//   background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${sandstoneScope}${navPills} ${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

// SOURCE CSS (Sandstone):
// .nav-pills .nav-link.active, .nav-pills .nav-link:hover, .nav-pills .nav-link:focus {
//   background-color: #f8f5f0; border-color: #dfd7ca; }
globalStyle(
	[
		`${sandstoneScope}${navPills} ${navLink}${navLinkActive}`,
		`${sandstoneScope}${navPills} ${navLink}:hover`,
		`${sandstoneScope}${navPills} ${navLink}:focus`,
	].join(', '),
	{
		backgroundColor: '#f8f5f0',
		borderColor: '#dfd7ca',
	},
)

// SOURCE CSS (Sandstone):
// .nav-pills .nav-link.disabled, .nav-pills .nav-link.disabled:hover {
//   color: #dfd7ca; background-color: transparent; border-color: transparent; }
globalStyle(
	[
		`${sandstoneScope}${navPills} ${navLink}${navLinkDisabled}`,
		`${sandstoneScope}${navPills} ${navLink}${navLinkDisabled}:hover`,
	].join(', '),
	{
		color: '#dfd7ca',
		backgroundColor: 'transparent',
		borderColor: 'transparent',
	},
)

// ── Sandstone tab overrides ───────────────────────────────────────────────────

// Inactive tabs get a light background and sandstone border colour
globalStyle(`${sandstoneScope}${navTabs} ${navLink}`, {
	backgroundColor: '#f8f5f0',
	borderColor: '#dfd7ca',
})

// Inactive tab links (and hover/focus) use secondary colour
globalStyle(
	`${sandstoneScope}${navTabs} ${navLink}, ${sandstoneScope}${navTabs} ${navLink}:hover, ${sandstoneScope}${navTabs} ${navLink}:focus`,
	{ color: '#8e8c84' },
)

