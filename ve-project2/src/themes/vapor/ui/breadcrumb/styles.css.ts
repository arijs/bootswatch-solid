import { globalStyle } from '@vanilla-extract/css'
import {
	breadcrumb,
	breadcrumbItem,
	breadcrumbItemActive,
} from '../../../../theme-contract/ui/breadcrumb/contract.css'
import {
	varBsBreadcrumbBg,
	varBsBreadcrumbBorderRadius,
	varBsBreadcrumbDivider,
	varBsBreadcrumbDividerColor,
	varBsBreadcrumbItemActiveColor,
	varBsBreadcrumbItemPaddingX,
	varBsBreadcrumbMarginBottom,
	varBsBreadcrumbPaddingX,
	varBsBreadcrumbPaddingY,
} from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import { varBsSecondaryColor } from '../../../../theme-contract/_vars.css'
import { vaporScope } from '../../scope.css'

// ── Base breadcrumb ───────────────────────────────────────────────────────────

// SOURCE CSS:
// .breadcrumb {
//   --bs-breadcrumb-padding-x: 0; --bs-breadcrumb-padding-y: 0;
//   --bs-breadcrumb-margin-bottom: 1rem; --bs-breadcrumb-bg: ;
//   --bs-breadcrumb-border-radius: ;
//   --bs-breadcrumb-divider-color: var(--bs-secondary-color);
//   --bs-breadcrumb-item-padding-x: 0.5rem;
//   --bs-breadcrumb-item-active-color: var(--bs-secondary-color);
//   --bs-breadcrumb-divider: "/";
//   display: flex; flex-wrap: wrap;
//   padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);
//   margin-bottom: var(--bs-breadcrumb-margin-bottom);
//   list-style: none;
//   background-color: var(--bs-breadcrumb-bg);
//   border-radius: var(--bs-breadcrumb-border-radius);
// }
globalStyle(`${vaporScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '0',
		[varBsBreadcrumbPaddingY]: '0',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: '',
		[varBsBreadcrumbBorderRadius]: '',
		[varBsBreadcrumbDividerColor]: varBsSecondaryColor,
		[varBsBreadcrumbItemPaddingX]: '0.5rem',
		[varBsBreadcrumbItemActiveColor]: varBsSecondaryColor,
		[varBsBreadcrumbDivider]: '"/"',
	},
	display: 'flex',
	flexWrap: 'wrap',
	padding: `${varBsBreadcrumbPaddingY} ${varBsBreadcrumbPaddingX}`,
	marginBottom: varBsBreadcrumbMarginBottom,
	listStyle: 'none',
	backgroundColor: varBsBreadcrumbBg,
	borderRadius: varBsBreadcrumbBorderRadius,
})

// ── Item sibling spacing and divider ──────────────────────────────────────────

globalStyle(`${vaporScope}${breadcrumb} ${breadcrumbItem} + ${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${vaporScope}${breadcrumb} ${breadcrumbItem} + ${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: varBsBreadcrumbDivider,
})

// ── Active item ───────────────────────────────────────────────────────────────

globalStyle(`${vaporScope}${breadcrumb} ${breadcrumbItemActive}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${vaporScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbDividerColor]: 'rgba(50, 251, 226, 0.3)',
		[varBsBreadcrumbItemActiveColor]: '#ea39b8',
	},
})

globalStyle(`${vaporScope}${breadcrumb} ${breadcrumbItemActive}`, {
	color: '#ea39b8',
	textShadow:
		'0 0 1px rgba(234, 57, 184, 0.3), 0 0 2px rgba(234, 57, 184, 0.3), 0 0 5px rgba(234, 57, 184, 0.2)',
})

globalStyle(`${vaporScope}${breadcrumb} ${breadcrumbItem} + ${breadcrumbItem}::before`, {
	textShadow:
		'0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2)',
})
