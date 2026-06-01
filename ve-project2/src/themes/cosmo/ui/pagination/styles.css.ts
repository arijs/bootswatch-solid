import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsSecondaryBg,
	varBsSecondaryColor,
	varBsTertiaryBg,
} from '../../../../theme-contract/_vars.css'
import {
	varBsPaginationActiveBg,
	varBsPaginationActiveBorderColor,
	varBsPaginationActiveColor,
	varBsPaginationBg,
	varBsPaginationBorderColor,
	varBsPaginationBorderRadius,
	varBsPaginationBorderWidth,
	varBsPaginationColor,
	varBsPaginationDisabledBg,
	varBsPaginationDisabledBorderColor,
	varBsPaginationDisabledColor,
	varBsPaginationFocusBg,
	varBsPaginationFocusBoxShadow,
	varBsPaginationFocusColor,
	varBsPaginationFontSize,
	varBsPaginationHoverBg,
	varBsPaginationHoverBorderColor,
	varBsPaginationHoverColor,
	varBsPaginationPaddingX,
	varBsPaginationPaddingY,
} from '../../../../theme-contract/ui/pagination/_vars.css'
import {
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	pageItem,
	pageItemActive,
	pageItemDisabled,
	pageLink,
	pagination,
	paginationLg,
	paginationSm,
} from '../../../../theme-contract/ui/pagination/contract.css'
import { cosmoScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/pagination
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .pagination { --bs-pagination-padding-x: 0.75rem; --bs-pagination-padding-y: 0.375rem; --bs-pagination-font-size: 1rem; --bs-pagination-color: var(--bs-link-color); --bs-pagination-bg: var(--bs-body-bg); --bs-pagination-border-width: var(--bs-border-width); --bs-pagination-border-color: var(--bs-border-color); --bs-pagination-border-radius: var(--bs-border-radius); --bs-pagination-hover-color: var(--bs-link-hover-color); --bs-pagination-hover-bg: var(--bs-tertiary-bg); --bs-pagination-hover-border-color: var(--bs-border-color); --bs-pagination-focus-color: var(--bs-link-hover-color); --bs-pagination-focus-bg: var(--bs-secondary-bg); --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); --bs-pagination-active-color: #fff; --bs-pagination-active-bg: #0d6efd; --bs-pagination-active-border-color: #0d6efd; --bs-pagination-disabled-color: var(--bs-secondary-color); --bs-pagination-disabled-bg: var(--bs-secondary-bg); --bs-pagination-disabled-border-color: var(--bs-border-color); display: flex; padding-left: 0; list-style: none; }
globalStyle(`${cosmoScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: "0.75rem",
		[varBsPaginationPaddingY]: "0.375rem",
		[varBsPaginationFontSize]: "1rem",
		[varBsPaginationColor]: varBsLinkColor,
		[varBsPaginationBg]: varBsBodyBg,
		[varBsPaginationBorderWidth]: varBsBorderWidth,
		[varBsPaginationBorderColor]: varBsBorderColor,
		[varBsPaginationBorderRadius]: varBsBorderRadius,
		[varBsPaginationHoverColor]: varBsLinkHoverColor,
		[varBsPaginationHoverBg]: varBsTertiaryBg,
		[varBsPaginationHoverBorderColor]: varBsBorderColor,
		[varBsPaginationFocusColor]: varBsLinkHoverColor,
		[varBsPaginationFocusBg]: varBsSecondaryBg,
		[varBsPaginationFocusBoxShadow]: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
		[varBsPaginationActiveColor]: "#fff",
		[varBsPaginationActiveBg]: "#0d6efd",
		[varBsPaginationActiveBorderColor]: "#0d6efd",
		[varBsPaginationDisabledColor]: varBsSecondaryColor,
		[varBsPaginationDisabledBg]: varBsSecondaryBg,
		[varBsPaginationDisabledBorderColor]: varBsBorderColor,
	},
	display: "flex",
	paddingLeft: 0,
	listStyle: "none",
})

// SOURCE CSS:
// .page-link { position: relative; display: block; padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x); font-size: var(--bs-pagination-font-size); color: var(--bs-pagination-color); text-decoration: none; background-color: var(--bs-pagination-bg); border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color); transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${cosmoScope}${pageLink}`, {
	position: "relative",
	display: "block",
	padding: `${varBsPaginationPaddingY} ${varBsPaginationPaddingX}`,
	fontSize: varBsPaginationFontSize,
	color: varBsPaginationColor,
	textDecoration: "none",
	backgroundColor: varBsPaginationBg,
	border: `${varBsPaginationBorderWidth} solid ${varBsPaginationBorderColor}`,
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .page-link:hover { z-index: 2; color: var(--bs-pagination-hover-color); background-color: var(--bs-pagination-hover-bg); border-color: var(--bs-pagination-hover-border-color); }
globalStyle(`${cosmoScope}${pageLink}:hover`, {
	zIndex: 2,
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

// SOURCE CSS:
// .page-link:focus { z-index: 3; color: var(--bs-pagination-focus-color); background-color: var(--bs-pagination-focus-bg); outline: 0; box-shadow: var(--bs-pagination-focus-box-shadow); }
globalStyle(`${cosmoScope}${pageLink}:focus`, {
	zIndex: 3,
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: 0,
	boxShadow: varBsPaginationFocusBoxShadow,
})

// SOURCE CSS:
// .page-link.active { z-index: 3; color: var(--bs-pagination-active-color); background-color: var(--bs-pagination-active-bg); border-color: var(--bs-pagination-active-border-color); }
globalStyle(`${cosmoScope}${pageLink}${pageItemActive}`, {
	zIndex: 3,
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

// SOURCE CSS:
// .active > .page-link { z-index: 3; color: var(--bs-pagination-active-color); background-color: var(--bs-pagination-active-bg); border-color: var(--bs-pagination-active-border-color); }
globalStyle(`${cosmoScope}${pageItem}${pageItemActive} > ${cosmoScope}${pageLink}`, {
	zIndex: 3,
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

// SOURCE CSS:
// .page-link.disabled { color: var(--bs-pagination-disabled-color); pointer-events: none; background-color: var(--bs-pagination-disabled-bg); border-color: var(--bs-pagination-disabled-border-color); }
globalStyle(`${cosmoScope}${pageLink}${pageItemDisabled}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

// SOURCE CSS:
// .disabled > .page-link { color: var(--bs-pagination-disabled-color); pointer-events: none; background-color: var(--bs-pagination-disabled-bg); border-color: var(--bs-pagination-disabled-border-color); }
globalStyle(`${cosmoScope}${pageItem}${pageItemDisabled} > ${cosmoScope}${pageLink}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

// SOURCE CSS:
// .page-item:not(:first-child) .page-link { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${cosmoScope}${pageItem}:not(:first-child) ${cosmoScope}${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

// SOURCE CSS:
// .page-item:first-child .page-link { border-top-left-radius: var(--bs-pagination-border-radius); border-bottom-left-radius: var(--bs-pagination-border-radius); }
globalStyle(`${cosmoScope}${pageItem}:first-child ${cosmoScope}${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

// SOURCE CSS:
// .page-item:last-child .page-link { border-top-right-radius: var(--bs-pagination-border-radius); border-bottom-right-radius: var(--bs-pagination-border-radius); }
globalStyle(`${cosmoScope}${pageItem}:last-child ${cosmoScope}${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

// SOURCE CSS:
// .pagination-lg { --bs-pagination-padding-x: 1.5rem; --bs-pagination-padding-y: 0.75rem; --bs-pagination-font-size: 1.25rem; --bs-pagination-border-radius: var(--bs-border-radius-lg); }
globalStyle(`${cosmoScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: "1.5rem",
		[varBsPaginationPaddingY]: "0.75rem",
		[varBsPaginationFontSize]: "1.25rem",
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

// SOURCE CSS:
// .flex-wrap { flex-wrap: wrap !important; }
globalStyle(`${cosmoScope}${flexWrap}`, {
	flexWrap: "wrap !important",
})

// SOURCE CSS:
// .pagination-sm { --bs-pagination-padding-x: 0.5rem; --bs-pagination-padding-y: 0.25rem; --bs-pagination-font-size: 0.875rem; --bs-pagination-border-radius: var(--bs-border-radius-sm); }
globalStyle(`${cosmoScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: "0.5rem",
		[varBsPaginationPaddingY]: "0.25rem",
		[varBsPaginationFontSize]: "0.875rem",
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})
