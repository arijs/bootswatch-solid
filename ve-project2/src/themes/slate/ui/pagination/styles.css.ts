import { globalStyle } from '@vanilla-extract/css'
import {
	pageItem,
	pageItemActive,
	pageItemDisabled,
	pageLink,
	pagination,
	paginationLg,
	paginationSm,
} from '../../../../theme-contract/ui/pagination/contract.css'
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
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsLinkHoverColor,
	varBsSecondaryBg,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import { slateScope } from '../../scope.css'

// ── .pagination ───────────────────────────────────────────────────────────────

// SOURCE CSS:
// .pagination {
//   --bs-pagination-padding-x: 1rem; --bs-pagination-padding-y: 0.75rem;
//   --bs-pagination-font-size: 1rem;
//   --bs-pagination-color: #fff;
//   --bs-pagination-bg: transparent;
//   --bs-pagination-border-width: var(--bs-border-width);
//   --bs-pagination-border-color: rgba(0, 0, 0, 0.6);
//   --bs-pagination-border-radius: var(--bs-border-radius);
//   --bs-pagination-hover-color: #fff;
//   --bs-pagination-hover-bg: transparent;
//   --bs-pagination-hover-border-color: rgba(0, 0, 0, 0.6);
//   --bs-pagination-focus-color: var(--bs-link-hover-color);
//   --bs-pagination-focus-bg: var(--bs-secondary-bg);
//   --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(58, 63, 68, 0.25);
//   --bs-pagination-active-color: #fff;
//   --bs-pagination-active-bg: transparent;
//   --bs-pagination-active-border-color: rgba(0, 0, 0, 0.6);
//   --bs-pagination-disabled-color: var(--bs-secondary-color);
//   --bs-pagination-disabled-bg: transparent;
//   --bs-pagination-disabled-border-color: rgba(0, 0, 0, 0.6);
//   display: flex; padding-left: 0; list-style: none;
// }
globalStyle(`${slateScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: '1rem',
		[varBsPaginationPaddingY]: '0.75rem',
		[varBsPaginationFontSize]: '1rem',
		[varBsPaginationColor]: '#fff',
		[varBsPaginationBg]: 'transparent',
		[varBsPaginationBorderWidth]: varBsBorderWidth,
		[varBsPaginationBorderColor]: 'rgba(0, 0, 0, 0.6)',
		[varBsPaginationBorderRadius]: varBsBorderRadius,
		[varBsPaginationHoverColor]: '#fff',
		[varBsPaginationHoverBg]: 'transparent',
		[varBsPaginationHoverBorderColor]: 'rgba(0, 0, 0, 0.6)',
		[varBsPaginationFocusColor]: varBsLinkHoverColor,
		[varBsPaginationFocusBg]: varBsSecondaryBg,
		[varBsPaginationFocusBoxShadow]: '0 0 0 0.25rem rgba(58, 63, 68, 0.25)',
		[varBsPaginationActiveColor]: '#fff',
		[varBsPaginationActiveBg]: 'transparent',
		[varBsPaginationActiveBorderColor]: 'rgba(0, 0, 0, 0.6)',
		[varBsPaginationDisabledColor]: varBsSecondaryColor,
		[varBsPaginationDisabledBg]: 'transparent',
		[varBsPaginationDisabledBorderColor]: 'rgba(0, 0, 0, 0.6)',
	},
	display: 'flex',
	paddingLeft: 0,
	listStyle: 'none',
	textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
})

// ── .page-link ────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .page-link {
//   position: relative; display: block;
//   padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
//   font-size: var(--bs-pagination-font-size);
//   color: var(--bs-pagination-color);
//   text-decoration: none;
//   background-color: var(--bs-pagination-bg);
//   border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
//   transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
//               border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
// }
globalStyle(`${slateScope}${pageLink}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsPaginationPaddingY} ${varBsPaginationPaddingX}`,
	fontSize: varBsPaginationFontSize,
	color: varBsPaginationColor,
	textDecoration: 'none',
	backgroundColor: varBsPaginationBg,
	border: `${varBsPaginationBorderWidth} solid ${varBsPaginationBorderColor}`,
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

// SOURCE CSS: .page-link:hover { z-index: 2; color: ...; background-color: ...; border-color: ...; }
globalStyle(`${slateScope}${pageLink}:hover`, {
	zIndex: 2,
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

// SOURCE CSS: .page-link:focus { z-index: 3; color: ...; background-color: ...; outline: 0; box-shadow: ...; }
globalStyle(`${slateScope}${pageLink}:focus`, {
	zIndex: 3,
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: 0,
	boxShadow: varBsPaginationFocusBoxShadow,
})

// SOURCE CSS: .page-link.active, .active > .page-link { z-index: 3; color: ...; background-color: ...; border-color: ...; }
globalStyle(
	`${slateScope}${pageLink}${pageItemActive}, ${slateScope}${pageItemActive} > ${pageLink}`,
	{
		zIndex: 3,
		color: varBsPaginationActiveColor,
		backgroundColor: varBsPaginationActiveBg,
		borderColor: varBsPaginationActiveBorderColor,
	},
)

// SOURCE CSS: .page-link.disabled, .disabled > .page-link { color: ...; pointer-events: none; background-color: ...; border-color: ...; }
globalStyle(
	`${slateScope}${pageLink}${pageItemDisabled}, ${slateScope}${pageItemDisabled} > ${pageLink}`,
	{
		color: varBsPaginationDisabledColor,
		pointerEvents: 'none',
		backgroundColor: varBsPaginationDisabledBg,
		borderColor: varBsPaginationDisabledBorderColor,
	},
)

// ── .page-item positioning ────────────────────────────────────────────────────

// SOURCE CSS: .page-item:not(:first-child) .page-link { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(`${slateScope}${pageItem}:not(:first-child) ${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsPaginationBorderWidth})`,
})

// SOURCE CSS: .page-item:first-child .page-link { border-top-left-radius: ...; border-bottom-left-radius: ...; }
globalStyle(`${slateScope}${pageItem}:first-child ${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

// SOURCE CSS: .page-item:last-child .page-link { border-top-right-radius: ...; border-bottom-right-radius: ...; }
globalStyle(`${slateScope}${pageItem}:last-child ${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

// ── .pagination-lg ────────────────────────────────────────────────────────────

// SOURCE CSS:
// .pagination-lg {
//   --bs-pagination-padding-x: 1.5rem; --bs-pagination-padding-y: 0.75rem;
//   --bs-pagination-font-size: 1.25rem;
//   --bs-pagination-border-radius: var(--bs-border-radius-lg);
// }
globalStyle(`${slateScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: '1.5rem',
		[varBsPaginationPaddingY]: '0.75rem',
		[varBsPaginationFontSize]: '1.25rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

// ── .pagination-sm ────────────────────────────────────────────────────────────

// SOURCE CSS:
// .pagination-sm {
//   --bs-pagination-padding-x: 0.5rem; --bs-pagination-padding-y: 0.25rem;
//   --bs-pagination-font-size: 0.875rem;
//   --bs-pagination-border-radius: var(--bs-border-radius-sm);
// }
globalStyle(`${slateScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.5rem',
		[varBsPaginationPaddingY]: '0.25rem',
		[varBsPaginationFontSize]: '0.875rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${slateScope}${pagination} ${pageLink}`, {
	textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
})

globalStyle(`${slateScope}${pagination} ${pageLink}:hover`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
	textDecoration: 'none',
})

globalStyle(`${slateScope}${pagination} ${pageLink}:focus`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
})

globalStyle(`${slateScope}${pagination} ${pageItemActive} > ${pageLink}`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
})

globalStyle(`${slateScope}${pagination} ${pageItemDisabled} > ${pageLink}`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
})
