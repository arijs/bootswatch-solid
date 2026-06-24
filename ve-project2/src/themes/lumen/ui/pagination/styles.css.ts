import { globalStyle } from '@vanilla-extract/css'
import { lumenScope } from '../../scope.css'

import {
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

import { link } from '../../../../theme-contract/contents/basic/contract.css'
import { elLi, elSpan } from '../../../../theme-contract/global-elements/contract.css'

import { disabled, pager } from '../../../../theme-contract/literal/contract.css'
import {
	pageItem,
	pageItemActive,
	pageItemDisabled,
	pageLink,
	pagination,
	paginationLg,
	paginationSm,
} from '../../../../theme-contract/ui/pagination/contract.css'

globalStyle(`${lumenScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.75rem',
		[varBsPaginationPaddingY]: '0.375rem',
		[varBsPaginationFontSize]: '1rem',
		[varBsPaginationColor]: '#555',
		[varBsPaginationBg]: varBsTertiaryBg,
		[varBsPaginationBorderWidth]: varBsBorderWidth,
		[varBsPaginationBorderColor]: varBsBorderColor,
		[varBsPaginationBorderRadius]: varBsBorderRadius,
		[varBsPaginationHoverColor]: '#555',
		[varBsPaginationHoverBg]: varBsTertiaryBg,
		[varBsPaginationHoverBorderColor]: varBsBorderColor,
		[varBsPaginationFocusColor]: varBsLinkHoverColor,
		[varBsPaginationFocusBg]: varBsSecondaryBg,
		[varBsPaginationFocusBoxShadow]: '0 0 0 0.25rem rgba(21, 140, 186, 0.25)',
		[varBsPaginationActiveColor]: '#fff',
		[varBsPaginationActiveBg]: '#158cba',
		[varBsPaginationActiveBorderColor]: '#127ba3',
		[varBsPaginationDisabledColor]: '#999',
		[varBsPaginationDisabledBg]: varBsTertiaryBg,
		[varBsPaginationDisabledBorderColor]: varBsBorderColor,
	},
	display: 'flex',
	paddingLeft: '0',
	listStyle: 'none',
})

globalStyle(`${lumenScope}${pageLink}`, {
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

globalStyle(`${lumenScope}${pageLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${lumenScope}${pageLink}:hover`, {
	zIndex: '2',
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

globalStyle(`${lumenScope}${pageLink}:focus`, {
	zIndex: '3',
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: '0',
	boxShadow: varBsPaginationFocusBoxShadow,
})

globalStyle(`${lumenScope}${pageLink}${pageItemActive}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${lumenScope}${pageItemActive} > ${lumenScope}${pageLink}`, {
	zIndex: '3',
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${lumenScope}${pageLink}${pageItemDisabled}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${lumenScope}${pageItemDisabled} > ${lumenScope}${pageLink}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${lumenScope}${pageItem}:not(:first-child) ${lumenScope}${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${lumenScope}${pageItem}:first-child ${lumenScope}${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

globalStyle(`${lumenScope}${pageItem}:last-child ${lumenScope}${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

globalStyle(`${lumenScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: '1.5rem',
		[varBsPaginationPaddingY]: '0.75rem',
		[varBsPaginationFontSize]: '1.25rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${lumenScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.5rem',
		[varBsPaginationPaddingY]: '0.25rem',
		[varBsPaginationFontSize]: '0.875rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${lumenScope}${pagination} > :where(${lumenScope}${elLi}) > :where(${lumenScope}${link})`, {
	position: 'relative',
	top: '0',
	fontWeight: '700',
	color: '#555',
	textTransform: 'uppercase',
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
})

globalStyle(`${lumenScope}${pagination} > :where(${lumenScope}${elLi}) > :where(${lumenScope}${elSpan})`, {
	position: 'relative',
	top: '0',
	fontWeight: '700',
	color: '#555',
	textTransform: 'uppercase',
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
})

globalStyle(`${lumenScope}${pagination} > :where(${lumenScope}${elLi}) > ${lumenScope}${link}:hover`, {
	top: '1px',
	textDecoration: 'none',
	borderBottomWidth: '3px',
})

globalStyle(`${lumenScope}${pagination} > :where(${lumenScope}${elLi}) > ${lumenScope}${link}:focus`, {
	top: '1px',
	textDecoration: 'none',
	borderBottomWidth: '3px',
})

globalStyle(`${lumenScope}${pagination} > :where(${lumenScope}${elLi}) > ${lumenScope}${elSpan}:hover`, {
	top: '1px',
	textDecoration: 'none',
	borderBottomWidth: '3px',
})

globalStyle(`${lumenScope}${pagination} > :where(${lumenScope}${elLi}) > ${lumenScope}${elSpan}:focus`, {
	top: '1px',
	textDecoration: 'none',
	borderBottomWidth: '3px',
})

globalStyle(`${lumenScope}${pagination} > :where(${lumenScope}${elLi}) > ${lumenScope}${link}:active`, {
	top: '2px',
	borderBottomWidth: '2px',
})

globalStyle(`${lumenScope}${pagination} > :where(${lumenScope}${elLi}) > ${lumenScope}${elSpan}:active`, {
	top: '2px',
	borderBottomWidth: '2px',
})

globalStyle(`${lumenScope}${pagination} > ${lumenScope}${disabled} > ${lumenScope}${link}:hover`, {
	top: '0',
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
})

globalStyle(`${lumenScope}${pagination} > ${lumenScope}${disabled} > ${lumenScope}${elSpan}:hover`, {
	top: '0',
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
})

globalStyle(`${lumenScope}${pagination} > ${lumenScope}${disabled} > ${lumenScope}${link}:active`, {
	top: '0',
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
})

globalStyle(`${lumenScope}${pagination} > ${lumenScope}${disabled} > ${lumenScope}${elSpan}:active`, {
	top: '0',
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${elLi} > ${lumenScope}${link}`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${elLi} > ${lumenScope}${link}:hover`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${elLi} > ${lumenScope}${link}:active`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${elLi} > ${lumenScope}${elSpan}`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${elLi} > ${lumenScope}${elSpan}:hover`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${elLi} > ${lumenScope}${elSpan}:active`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${link}`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${link}:hover`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${link}:active`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${elSpan}`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${elSpan}:hover`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})

globalStyle(`${lumenScope}${pager} > ${lumenScope}${disabled} > ${lumenScope}${elSpan}:active`, {
	borderRightWidth: '2px',
	borderLeftWidth: '2px',
})
