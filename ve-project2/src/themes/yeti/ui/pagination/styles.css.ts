import { globalStyle } from '@vanilla-extract/css'
import { yetiScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsLinkHoverColor,
	varBsSecondaryBg,
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
	pageItem,
	pageItemActive,
	pageItemDisabled,
	pageLink,
	pagination,
	paginationLg,
	paginationSm,
} from '../../../../theme-contract/ui/pagination/contract.css'

globalStyle(`${yetiScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.75rem',
		[varBsPaginationPaddingY]: '0.375rem',
		[varBsPaginationFontSize]: '1rem',
		[varBsPaginationColor]: '#888',
		[varBsPaginationBg]: varBsBodyBg,
		[varBsPaginationBorderWidth]: varBsBorderWidth,
		[varBsPaginationBorderColor]: varBsBorderColor,
		[varBsPaginationBorderRadius]: varBsBorderRadius,
		[varBsPaginationHoverColor]: varBsLinkHoverColor,
		[varBsPaginationHoverBg]: varBsTertiaryBg,
		[varBsPaginationHoverBorderColor]: varBsBorderColor,
		[varBsPaginationFocusColor]: varBsLinkHoverColor,
		[varBsPaginationFocusBg]: varBsSecondaryBg,
		[varBsPaginationFocusBoxShadow]: '0 0 0 0.25rem rgba(0, 140, 186, 0.25)',
		[varBsPaginationActiveColor]: '#fff',
		[varBsPaginationActiveBg]: '#008cba',
		[varBsPaginationActiveBorderColor]: '#0079a1',
		[varBsPaginationDisabledColor]: '#ccc',
		[varBsPaginationDisabledBg]: 'transparent',
		[varBsPaginationDisabledBorderColor]: varBsBorderColor,
	},
	display: 'flex',
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${yetiScope}${pageLink}`, {
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

globalStyle(`${yetiScope}${pageLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${yetiScope}${pageLink}:hover`, {
	zIndex: '2',
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

globalStyle(`${yetiScope}${pageLink}:focus`, {
	zIndex: '3',
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: '0',
	boxShadow: varBsPaginationFocusBoxShadow,
})

globalStyle(`${yetiScope}${pageLink}${pageItemActive}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${yetiScope}${pageItemActive} > ${yetiScope}${pageLink}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${yetiScope}${pageLink}${pageItemDisabled}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${yetiScope}${pageItemDisabled} > ${yetiScope}${pageLink}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${yetiScope}${pageItem}:not(:first-child) ${yetiScope}${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${yetiScope}${pageItem}:first-child ${yetiScope}${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

globalStyle(`${yetiScope}${pageItem}:last-child ${yetiScope}${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

globalStyle(`${yetiScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: '1.5rem',
		[varBsPaginationPaddingY]: '0.75rem',
		[varBsPaginationFontSize]: '1.25rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${yetiScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.5rem',
		[varBsPaginationPaddingY]: '0.25rem',
		[varBsPaginationFontSize]: '0.875rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${yetiScope}${pagination}`, {
	fontWeight: '300',
})

globalStyle(`${yetiScope}${pagination} ${yetiScope}${pageLink}`, {
	marginRight: '0.1em',
	marginLeft: '0.1em',
	borderColor: 'transparent',
	borderRadius: '3px',
})

globalStyle(`${yetiScope}${pagination} ${yetiScope}${pageLink}:hover`, {
	textDecoration: 'none',
})

globalStyle(`${yetiScope}${pagination} ${yetiScope}${pageLink}:focus`, {
	textDecoration: 'none',
})

globalStyle(`${yetiScope}${pagination} ${yetiScope}${pageItem}${pageItemDisabled} ${yetiScope}${pageLink}`, {
	borderColor: 'transparent',
})

globalStyle(`${yetiScope}${pagination} ${yetiScope}${pageItem}:first-child ${yetiScope}${pageLink}`, {
	borderRadius: '3px',
})

globalStyle(`${yetiScope}${pagination} ${yetiScope}${pageItem}:last-child ${yetiScope}${pageLink}`, {
	borderRadius: '3px',
})

globalStyle(`${yetiScope}${paginationLg} ${yetiScope}${pageItem}:first-child ${yetiScope}${pageLink}`, {
	borderRadius: '3px',
})

globalStyle(`${yetiScope}${paginationLg} ${yetiScope}${pageItem}:last-child ${yetiScope}${pageLink}`, {
	borderRadius: '3px',
})

globalStyle(`${yetiScope}${paginationSm} ${yetiScope}${pageItem}:first-child ${yetiScope}${pageLink}`, {
	borderRadius: '3px',
})

globalStyle(`${yetiScope}${paginationSm} ${yetiScope}${pageItem}:last-child ${yetiScope}${pageLink}`, {
	borderRadius: '3px',
})

globalStyle(`${yetiScope}[data-bs-theme=dark] ${yetiScope}${pagination}`, {
	vars: {
		[varBsPaginationDisabledColor]: '#495057',
	},
})
