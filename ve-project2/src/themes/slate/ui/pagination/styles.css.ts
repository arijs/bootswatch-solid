import { globalStyle } from '@vanilla-extract/css'
import { slateScope } from '../../scope.css'

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
	pageItem,
	pageItemActive,
	pageItemDisabled,
	pageLink,
	pagination,
	paginationLg,
	paginationSm,
} from '../../../../theme-contract/ui/pagination/contract.css'

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
	paddingLeft: '0',
	listStyle: 'none',
})

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

globalStyle(`${slateScope}${pageLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${pageLink}:hover`, {
	zIndex: '2',
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

globalStyle(`${slateScope}${pageLink}:focus`, {
	zIndex: '3',
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: '0',
	boxShadow: varBsPaginationFocusBoxShadow,
})

globalStyle(`${slateScope}${pageLink}${pageItemActive}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${slateScope}${pageItemActive} > ${slateScope}${pageLink}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${slateScope}${pageLink}${pageItemDisabled}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${slateScope}${pageItemDisabled} > ${slateScope}${pageLink}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${slateScope}${pageItem}:not(:first-child) ${slateScope}${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${slateScope}${pageItem}:first-child ${slateScope}${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

globalStyle(`${slateScope}${pageItem}:last-child ${slateScope}${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

globalStyle(`${slateScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: '1.5rem',
		[varBsPaginationPaddingY]: '0.75rem',
		[varBsPaginationFontSize]: '1.25rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${slateScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.5rem',
		[varBsPaginationPaddingY]: '0.25rem',
		[varBsPaginationFontSize]: '0.875rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${slateScope}${pagination} ${slateScope}${pageLink}`, {
	textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
})

globalStyle(`${slateScope}${pagination} ${slateScope}${pageLink}:hover`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
	textDecoration: 'none',
})

globalStyle(`${slateScope}${pagination} ${slateScope}${pageItem}${pageItemActive} ${slateScope}${pageLink}`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
})

globalStyle(`${slateScope}${pagination} ${slateScope}${pageItem}${pageItemDisabled} ${slateScope}${pageLink}`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
})
