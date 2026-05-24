import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBreadcrumbFontSize,
	varBsLinkColorRgb,
	varBsLinkHoverColorRgb,
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
	link,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	breadcrumb,
	breadcrumbItem,
} from '../../../../theme-contract/ui/breadcrumb/contract.css'
import {
	btn,
} from '../../../../theme-contract/ui/buttons/contract.css'
import {
	dropdown,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	navbar,
} from '../../../../theme-contract/ui/navbar/contract.css'
import {
	nav,
} from '../../../../theme-contract/ui/navs/contract.css'
import {
	pagination,
} from '../../../../theme-contract/ui/pagination/contract.css'
import { sandstoneScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/breadcrumb
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// ol { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ol`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// ul { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ul`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// dl { margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "dl" — map to a contract class
globalStyle(`dl`, {
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// a { color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1)); text-decoration: underline; }
// [UNMAPPED_SELECTOR] element selector "a" — map to a contract class
globalStyle(`a`, {
	color: "rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))",
	textDecoration: "underline",
})

// SOURCE CSS:
// a:hover { --bs-link-color-rgb: var(--bs-link-hover-color-rgb); }
// [UNMAPPED_SELECTOR] element selector "a:hover" — map to a contract class
globalStyle(`a:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

// SOURCE CSS:
// a:not([href]):not([class]) { color: inherit; text-decoration: none; }
// [UNMAPPED_SELECTOR] element selector "a:not([href]):not([class])" — map to a contract class
globalStyle(`a:not([href]):not([class])`, {
	color: "inherit",
	textDecoration: "none",
})

// SOURCE CSS:
// a:not([href]):not([class]):hover { color: inherit; text-decoration: none; }
// [UNMAPPED_SELECTOR] element selector "a:not([href]):not([class]):hover" — map to a contract class
globalStyle(`a:not([href]):not([class]):hover`, {
	color: "inherit",
	textDecoration: "none",
})

// SOURCE CSS:
// .breadcrumb { --bs-breadcrumb-padding-x: 0; --bs-breadcrumb-padding-y: 0; --bs-breadcrumb-margin-bottom: 1rem; --bs-breadcrumb-bg: ; --bs-breadcrumb-border-radius: ; --bs-breadcrumb-divider-color: var(--bs-secondary-color); --bs-breadcrumb-item-padding-x: 0.5rem; --bs-breadcrumb-item-active-color: var(--bs-secondary-color); display: flex; flex-wrap: wrap; padding: var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x); margin-bottom: var(--bs-breadcrumb-margin-bottom); font-size: var(--bs-breadcrumb-font-size); list-style: none; background-color: var(--bs-breadcrumb-bg); border-radius: var(--bs-breadcrumb-border-radius); }
globalStyle(`${sandstoneScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: 0,
		[varBsBreadcrumbPaddingY]: 0,
		[varBsBreadcrumbMarginBottom]: "1rem",
		[varBsBreadcrumbBg]: "",
		[varBsBreadcrumbBorderRadius]: "",
		[varBsBreadcrumbDividerColor]: varBsSecondaryColor,
		[varBsBreadcrumbItemPaddingX]: "0.5rem",
		[varBsBreadcrumbItemActiveColor]: varBsSecondaryColor,
	},
	display: "flex",
	flexWrap: "wrap",
	padding: "var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x)",
	marginBottom: varBsBreadcrumbMarginBottom,
	fontSize: varBsBreadcrumbFontSize,
	listStyle: "none",
	backgroundColor: varBsBreadcrumbBg,
	borderRadius: varBsBreadcrumbBorderRadius,
})

// SOURCE CSS:
// .breadcrumb-item + .breadcrumb-item { padding-left: var(--bs-breadcrumb-item-padding-x); }
globalStyle(`${sandstoneScope}${breadcrumbItem} + ${sandstoneScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

// SOURCE CSS:
// .breadcrumb-item + .breadcrumb-item::before { float: left; padding-right: var(--bs-breadcrumb-item-padding-x); color: var(--bs-breadcrumb-divider-color); content: var(--bs-breadcrumb-divider, "/"); }
globalStyle(`${sandstoneScope}${breadcrumbItem} + ${sandstoneScope}${breadcrumbItem}::before`, {
	float: "left",
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: varBsBreadcrumbDivider,
})

// SOURCE CSS:
// .breadcrumb-item.active { color: var(--bs-breadcrumb-item-active-color); }
globalStyle(`${sandstoneScope}${breadcrumbItem}.active`, {
	color: varBsBreadcrumbItemActiveColor,
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
// [DELTA] unmapped selector: .sandstone
// [DELTA] unmapped selector: .tooltip
// [DELTA] unmapped selector: .dropdown-menu .dropdown-item
// [DELTA] unmapped selector: .pagination
// [DELTA] unmapped selector: .nav-pills .nav-link
// [DELTA] unmapped selector: .nav-tabs .nav-link
// [DELTA] unmapped selector: .btn
// [DELTA] unmapped selector: .navbar .nav-link
