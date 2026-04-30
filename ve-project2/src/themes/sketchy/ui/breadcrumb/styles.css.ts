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
import {
	varBsBorderWidth,
	varBsPrimary,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import { sketchyScope } from '../../scope.css'

// ── Base breadcrumb ───────────────────────────────────────────────────────────

// Sketchy overrides:
//   --bs-breadcrumb-padding-x/y: adds visible padding (Bootstrap default is 0)
//   --bs-breadcrumb-divider-color: #333 (Sketchy primary, vs Bootstrap secondary-color)
//   --bs-breadcrumb-border-radius: hand-drawn shape
//   border: added by Sketchy (not present in Bootstrap base)
globalStyle(`${sketchyScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '0.75rem',
		[varBsBreadcrumbPaddingY]: '0.375rem',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: '',
		[varBsBreadcrumbBorderRadius]: '255px 25px 225px 25px / 25px 225px 25px 255px',
		[varBsBreadcrumbDividerColor]: varBsPrimary,
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
	border: `${varBsBorderWidth} solid ${varBsPrimary}`,
	borderRadius: varBsBreadcrumbBorderRadius,
})

// ── Item sibling spacing and divider ──────────────────────────────────────────

globalStyle(`${sketchyScope}${breadcrumb} ${breadcrumbItem} + ${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${sketchyScope}${breadcrumb} ${breadcrumbItem} + ${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: varBsBreadcrumbDivider,
})

// ── Active item ───────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${breadcrumb} ${breadcrumbItemActive}`, {
	color: varBsBreadcrumbItemActiveColor,
})
