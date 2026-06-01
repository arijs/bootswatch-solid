import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBreadcrumbFontSize,
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
import { briteScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/breadcrumb
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .breadcrumb { --bs-breadcrumb-padding-x: 0; --bs-breadcrumb-padding-y: 0; --bs-breadcrumb-margin-bottom: 1rem; --bs-breadcrumb-bg: ; --bs-breadcrumb-border-radius: ; --bs-breadcrumb-divider-color: var(--bs-secondary-color); --bs-breadcrumb-item-padding-x: 0.5rem; --bs-breadcrumb-item-active-color: var(--bs-secondary-color); display: flex; flex-wrap: wrap; padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x); margin-bottom: var(--bs-breadcrumb-margin-bottom); font-size: var(--bs-breadcrumb-font-size); list-style: none; background-color: var(--bs-breadcrumb-bg); border-radius: var(--bs-breadcrumb-border-radius); }
globalStyle(`${briteScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: 0,
		[varBsBreadcrumbPaddingY]: 0,
		[varBsBreadcrumbMarginBottom]: "1rem",
		[varBsBreadcrumbBg]: "",
		[varBsBreadcrumbBorderRadius]: "0.5rem",
		[varBsBreadcrumbDividerColor]: "#000",
		[varBsBreadcrumbItemPaddingX]: "0.5rem",
		[varBsBreadcrumbItemActiveColor]: "#000",
	},
	display: "flex",
	flexWrap: "wrap",
	padding: `${varBsBreadcrumbPaddingY} ${varBsBreadcrumbPaddingX}`,
	marginBottom: varBsBreadcrumbMarginBottom,
	fontSize: varBsBreadcrumbFontSize,
	listStyle: "none",
	backgroundColor: varBsBreadcrumbBg,
	borderRadius: varBsBreadcrumbBorderRadius,
	fontWeight: 500,
	border: "2px solid #000",
})

// SOURCE CSS:
// .breadcrumb-item + .breadcrumb-item { padding-left: var(--bs-breadcrumb-item-padding-x); }
globalStyle(`${briteScope}${breadcrumbItem} + ${briteScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

// SOURCE CSS:
// .breadcrumb-item + .breadcrumb-item::before { float: left; padding-right: var(--bs-breadcrumb-item-padding-x); color: var(--bs-breadcrumb-divider-color); content: var(--bs-breadcrumb-divider, "/"); }
globalStyle(`${briteScope}${breadcrumbItem} + ${briteScope}${breadcrumbItem}::before`, {
	float: "left",
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: varBsBreadcrumbDivider,
})

// SOURCE CSS:
// .breadcrumb-item.active { color: var(--bs-breadcrumb-item-active-color); }
globalStyle(`${briteScope}${breadcrumbItem}${breadcrumbItemActive}`, {
	color: varBsBreadcrumbItemActiveColor,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .breadcrumb a { color: #000; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "a" — map to a contract class
globalStyle(`${briteScope}${breadcrumb} a`, {
	color: "#000",
})
