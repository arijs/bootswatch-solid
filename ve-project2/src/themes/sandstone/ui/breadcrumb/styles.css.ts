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
import { sandstoneScope } from '../../scope.css'

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
globalStyle(`${sandstoneScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '0.75rem',
		[varBsBreadcrumbPaddingY]: '0.375rem',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: '#f8f5f0',
		[varBsBreadcrumbBorderRadius]: '0.25rem',
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

globalStyle(`${sandstoneScope}${breadcrumb} ${breadcrumbItem} + ${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${sandstoneScope}${breadcrumb} ${breadcrumbItem} + ${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: varBsBreadcrumbDivider,
})

// ── Active item ───────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${breadcrumb} ${breadcrumbItemActive}`, {
	color: varBsBreadcrumbItemActiveColor,
})

// Sandstone breadcrumb border
globalStyle(`${sandstoneScope}${breadcrumb}`, {
        border: '1px solid #dfd7ca',
})
