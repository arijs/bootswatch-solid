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
	varBsBodyBg,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsSecondaryBg,
} from '../../../../theme-contract/_vars.css'
import { sketchyScope } from '../../scope.css'

// SOURCE CSS (screenshots/sketchy/bootstrap.css .pagination):
// --bs-pagination-border-color: #333;
// --bs-pagination-hover-color: #fff;
// --bs-pagination-hover-bg: #333;
// --bs-pagination-hover-border-color: #333;
// --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(51, 51, 51, 0.25);
// --bs-pagination-active-bg: #333;
// --bs-pagination-active-border-color: #333;
// --bs-pagination-disabled-color: #ccc;
// --bs-pagination-disabled-border-color: #333;
globalStyle(`${sketchyScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.75rem',
		[varBsPaginationPaddingY]: '0.375rem',
		[varBsPaginationFontSize]: '1rem',
		[varBsPaginationColor]: varBsLinkColor,
		[varBsPaginationBg]: varBsBodyBg,
		[varBsPaginationBorderWidth]: varBsBorderWidth,
		[varBsPaginationBorderColor]: '#333',
		[varBsPaginationBorderRadius]: varBsBorderRadius,
		[varBsPaginationHoverColor]: '#fff',
		[varBsPaginationHoverBg]: '#333',
		[varBsPaginationHoverBorderColor]: '#333',
		[varBsPaginationFocusColor]: varBsLinkHoverColor,
		[varBsPaginationFocusBg]: varBsSecondaryBg,
		[varBsPaginationFocusBoxShadow]: '0 0 0 0.25rem rgba(51, 51, 51, 0.25)',
		[varBsPaginationActiveColor]: '#fff',
		[varBsPaginationActiveBg]: '#333',
		[varBsPaginationActiveBorderColor]: '#333',
		[varBsPaginationDisabledColor]: '#ccc',
		[varBsPaginationDisabledBg]: varBsSecondaryBg,
		[varBsPaginationDisabledBorderColor]: '#333',
	},
	display: 'flex',
	paddingLeft: 0,
	listStyle: 'none',
})

// ── .page-link ────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${pageLink}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsPaginationPaddingY} ${varBsPaginationPaddingX}`,
	fontSize: varBsPaginationFontSize,
	color: varBsPaginationColor,
	textDecoration: 'none',
	backgroundColor: varBsPaginationBg,
	border: `${varBsPaginationBorderWidth} solid ${varBsPaginationBorderColor}`,
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	// Sketchy hand-drawn border-radius on every page-link
	borderRadius: '425px 255px 25px 25px / 25px 25px 5px 25px',
})

globalStyle(`${sketchyScope}${pageLink}:hover`, {
	zIndex: 2,
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

globalStyle(`${sketchyScope}${pageLink}:focus`, {
	zIndex: 3,
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: 0,
	boxShadow: varBsPaginationFocusBoxShadow,
})

globalStyle(
	`${sketchyScope}${pageLink}${pageItemActive}, ${sketchyScope}${pageItemActive} > ${pageLink}`,
	{
		zIndex: 3,
		color: varBsPaginationActiveColor,
		backgroundColor: varBsPaginationActiveBg,
		borderColor: varBsPaginationActiveBorderColor,
	},
)

globalStyle(
	`${sketchyScope}${pageLink}${pageItemDisabled}, ${sketchyScope}${pageItemDisabled} > ${pageLink}`,
	{
		color: varBsPaginationDisabledColor,
		pointerEvents: 'none',
		backgroundColor: varBsPaginationDisabledBg,
		borderColor: varBsPaginationDisabledBorderColor,
	},
)

// ── .page-item positioning ────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${pageItem}:not(:first-child) ${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsPaginationBorderWidth})`,
})

// SOURCE CSS: .page-item:first-child .page-link { border-top-left-radius: var(--bs-pagination-border-radius); border-bottom-left-radius: var(--bs-pagination-border-radius); }
// Specificity 0,3,0 wins over the .pagination .page-link hand-drawn shorthand (0,2,0) for these two corners.
globalStyle(`${sketchyScope}${pageItem}:first-child ${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

// SOURCE CSS: .page-item:last-child .page-link { border-top-right-radius: var(--bs-pagination-border-radius); border-bottom-right-radius: var(--bs-pagination-border-radius); }
globalStyle(`${sketchyScope}${pageItem}:last-child ${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

// ── .pagination-lg / .pagination-sm ──────────────────────────────────────────

globalStyle(`${sketchyScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: '1.5rem',
		[varBsPaginationPaddingY]: '0.75rem',
		[varBsPaginationFontSize]: '1.25rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${sketchyScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.5rem',
		[varBsPaginationPaddingY]: '0.25rem',
		[varBsPaginationFontSize]: '0.875rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})
