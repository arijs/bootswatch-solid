import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsLinkHoverColor,
	varBsSecondaryBg,
	varBsSecondaryColor,
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
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/pagination
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .pagination { --bs-pagination-padding-x: 0.75rem; --bs-pagination-padding-y: 0.375rem; --bs-pagination-font-size: 1rem; --bs-pagination-color: var(--bs-link-color); --bs-pagination-bg: var(--bs-body-bg); --bs-pagination-border-width: var(--bs-border-width); --bs-pagination-border-color: var(--bs-border-color); --bs-pagination-border-radius: var(--bs-border-radius); --bs-pagination-hover-color: var(--bs-link-hover-color); --bs-pagination-hover-bg: var(--bs-tertiary-bg); --bs-pagination-hover-border-color: var(--bs-border-color); --bs-pagination-focus-color: var(--bs-link-hover-color); --bs-pagination-focus-bg: var(--bs-secondary-bg); --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); --bs-pagination-active-color: #fff; --bs-pagination-active-bg: #0d6efd; --bs-pagination-active-border-color: #0d6efd; --bs-pagination-disabled-color: var(--bs-secondary-color); --bs-pagination-disabled-bg: var(--bs-secondary-bg); --bs-pagination-disabled-border-color: var(--bs-border-color); display: flex; padding-left: 0; list-style: none; }
globalStyle(`${cyborgScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: "0.75rem",
		[varBsPaginationPaddingY]: "0.375rem",
		[varBsPaginationFontSize]: "1rem",
		[varBsPaginationColor]: "#fff",
		[varBsPaginationBg]: "#282828",
		[varBsPaginationBorderWidth]: varBsBorderWidth,
		[varBsPaginationBorderColor]: "transparent",
		[varBsPaginationBorderRadius]: varBsBorderRadius,
		[varBsPaginationHoverColor]: "#fff",
		[varBsPaginationHoverBg]: "#2a9fd6",
		[varBsPaginationHoverBorderColor]: "transparent",
		[varBsPaginationFocusColor]: varBsLinkHoverColor,
		[varBsPaginationFocusBg]: varBsSecondaryBg,
		[varBsPaginationFocusBoxShadow]: "0 0 0 0.25rem rgba(42, 159, 214, 0.25)",
		[varBsPaginationActiveColor]: "#fff",
		[varBsPaginationActiveBg]: "#2a9fd6",
		[varBsPaginationActiveBorderColor]: "#2a9fd6",
		[varBsPaginationDisabledColor]: varBsSecondaryColor,
		[varBsPaginationDisabledBg]: "#282828",
		[varBsPaginationDisabledBorderColor]: "transparent",
	},
	display: "flex",
	paddingLeft: 0,
	listStyle: "none",
})

// SOURCE CSS:
// .page-link { position: relative; display: block; padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x); font-size: var(--bs-pagination-font-size); color: var(--bs-pagination-color); text-decoration: none; background-color: var(--bs-pagination-bg); border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color); transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${cyborgScope}${pageLink}`, {
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
globalStyle(`${cyborgScope}${pageLink}:hover`, {
	zIndex: 2,
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

// SOURCE CSS:
// .page-link:focus { z-index: 3; color: var(--bs-pagination-focus-color); background-color: var(--bs-pagination-focus-bg); outline: 0; box-shadow: var(--bs-pagination-focus-box-shadow); }
globalStyle(`${cyborgScope}${pageLink}:focus`, {
	zIndex: 3,
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: 0,
	boxShadow: varBsPaginationFocusBoxShadow,
})

// SOURCE CSS:
// .page-link.active { z-index: 3; color: var(--bs-pagination-active-color); background-color: var(--bs-pagination-active-bg); border-color: var(--bs-pagination-active-border-color); }
globalStyle(`${cyborgScope}${pageLink}${pageItemActive}`, {
	zIndex: 3,
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

// SOURCE CSS:
// .active > .page-link { z-index: 3; color: var(--bs-pagination-active-color); background-color: var(--bs-pagination-active-bg); border-color: var(--bs-pagination-active-border-color); }
globalStyle(`${cyborgScope}${pageItem}${pageItemActive} > ${cyborgScope}${pageLink}`, {
	zIndex: 3,
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

// SOURCE CSS:
// .page-link.disabled { color: var(--bs-pagination-disabled-color); pointer-events: none; background-color: var(--bs-pagination-disabled-bg); border-color: var(--bs-pagination-disabled-border-color); }
globalStyle(`${cyborgScope}${pageLink}${pageItemDisabled}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

// SOURCE CSS:
// .disabled > .page-link { color: var(--bs-pagination-disabled-color); pointer-events: none; background-color: var(--bs-pagination-disabled-bg); border-color: var(--bs-pagination-disabled-border-color); }
globalStyle(`${cyborgScope}${pageItem}${pageItemDisabled} > ${cyborgScope}${pageLink}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

// SOURCE CSS:
// .page-item:not(:first-child) .page-link { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${cyborgScope}${pageItem}:not(:first-child) ${cyborgScope}${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

// SOURCE CSS:
// .page-item:first-child .page-link { border-top-left-radius: var(--bs-pagination-border-radius); border-bottom-left-radius: var(--bs-pagination-border-radius); }
globalStyle(`${cyborgScope}${pageItem}:first-child ${cyborgScope}${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

// SOURCE CSS:
// .page-item:last-child .page-link { border-top-right-radius: var(--bs-pagination-border-radius); border-bottom-right-radius: var(--bs-pagination-border-radius); }
globalStyle(`${cyborgScope}${pageItem}:last-child ${cyborgScope}${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

// SOURCE CSS:
// .pagination-lg { --bs-pagination-padding-x: 1.5rem; --bs-pagination-padding-y: 0.75rem; --bs-pagination-font-size: 1.25rem; --bs-pagination-border-radius: var(--bs-border-radius-lg); }
globalStyle(`${cyborgScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: "1.5rem",
		[varBsPaginationPaddingY]: "0.75rem",
		[varBsPaginationFontSize]: "1.25rem",
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

// SOURCE CSS:
// .flex-wrap { flex-wrap: wrap !important; }
globalStyle(`${cyborgScope}${flexWrap}`, {
	flexWrap: "wrap !important",
})

// SOURCE CSS:
// .pagination-sm { --bs-pagination-padding-x: 0.5rem; --bs-pagination-padding-y: 0.25rem; --bs-pagination-font-size: 0.875rem; --bs-pagination-border-radius: var(--bs-border-radius-sm); }
globalStyle(`${cyborgScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: "0.5rem",
		[varBsPaginationPaddingY]: "0.25rem",
		[varBsPaginationFontSize]: "0.875rem",
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .pagination a:hover { text-decoration: none; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "a:hover" — map to a contract class
globalStyle(`${cyborgScope}${pagination} a:hover`, {
	textDecoration: "none",
})
