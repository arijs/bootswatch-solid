import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBreadcrumbFontSize,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
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
	breadcrumb,
	breadcrumbItem,
	breadcrumbItemActive,
} from '../../../../theme-contract/ui/breadcrumb/contract.css'
import {
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import { bootstrapScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/breadcrumb
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .breadcrumb { --bs-breadcrumb-padding-x: 0; --bs-breadcrumb-padding-y: 0; --bs-breadcrumb-margin-bottom: 1rem; --bs-breadcrumb-bg: ; --bs-breadcrumb-border-radius: ; --bs-breadcrumb-divider-color: var(--bs-secondary-color); --bs-breadcrumb-item-padding-x: 0.5rem; --bs-breadcrumb-item-active-color: var(--bs-secondary-color); display: flex; flex-wrap: wrap; padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x); margin-bottom: var(--bs-breadcrumb-margin-bottom); font-size: var(--bs-breadcrumb-font-size); list-style: none; background-color: var(--bs-breadcrumb-bg); border-radius: var(--bs-breadcrumb-border-radius); }
globalStyle(`${bootstrapScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: 0,
		[varBsBreadcrumbPaddingY]: 0,
		[varBsBreadcrumbMarginBottom]: "1rem",
		[varBsBreadcrumbBg]: "",
		[varBsBreadcrumbBorderRadius]: "",
		[varBsBreadcrumbDividerColor]: varBsSecondaryColor,
		[varBsBreadcrumbItemPaddingX]: "0.5rem",
		[varBsBreadcrumbItemActiveColor]: varBsSecondaryColor,
		[varBsBreadcrumbDivider]: '"/"',
	},
	display: "flex",
	flexWrap: "wrap",
	padding: `${varBsBreadcrumbPaddingY} ${varBsBreadcrumbPaddingX}`,
	marginBottom: varBsBreadcrumbMarginBottom,
	fontSize: varBsBreadcrumbFontSize,
	listStyle: "none",
	backgroundColor: varBsBreadcrumbBg,
	borderRadius: varBsBreadcrumbBorderRadius,
})

// SOURCE CSS:
// .breadcrumb-item + .breadcrumb-item { padding-left: var(--bs-breadcrumb-item-padding-x); }
globalStyle(`${bootstrapScope}${breadcrumbItem} + ${bootstrapScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

// SOURCE CSS:
// .breadcrumb-item + .breadcrumb-item::before { float: left; padding-right: var(--bs-breadcrumb-item-padding-x); color: var(--bs-breadcrumb-divider-color); content: var(--bs-breadcrumb-divider, "/"); }
globalStyle(`${bootstrapScope}${breadcrumbItem} + ${bootstrapScope}${breadcrumbItem}::before`, {
	float: "left",
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: varBsBreadcrumbDivider,
})

// SOURCE CSS:
// .breadcrumb-item.active { color: var(--bs-breadcrumb-item-active-color); }
globalStyle(`${bootstrapScope}${breadcrumbItem}${breadcrumbItemActive}`, {
	color: varBsBreadcrumbItemActiveColor,
})
