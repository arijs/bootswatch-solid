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
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsBodyBg,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsPrimary,
	varBsPrimaryRgb,
	varBsSecondaryBg,
	varBsSecondaryColor,
	varBsTertiaryBg,
} from '../../../../theme-contract/_vars.css'
import { materiaScope } from '../../scope.css'

globalStyle(`${materiaScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.75rem',
		[varBsPaginationPaddingY]: '0.375rem',
		[varBsPaginationFontSize]: '1rem',
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
		[varBsPaginationFocusBoxShadow]: `0 0 0 0.25rem rgba(${varBsPrimaryRgb}, 0.25)`,
		[varBsPaginationActiveColor]: '#fff',
		[varBsPaginationActiveBg]: varBsPrimary,
		[varBsPaginationActiveBorderColor]: varBsPrimary,
		[varBsPaginationDisabledColor]: varBsSecondaryColor,
		[varBsPaginationDisabledBg]: varBsSecondaryBg,
		[varBsPaginationDisabledBorderColor]: varBsBorderColor,
	},
	display: 'flex',
	paddingLeft: 0,
	listStyle: 'none',
})

globalStyle(`${materiaScope}${pageLink}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsPaginationPaddingY} ${varBsPaginationPaddingX}`,
	fontSize: varBsPaginationFontSize,
	color: varBsPaginationColor,
	textDecoration: 'none',
	backgroundColor: varBsPaginationBg,
	border: `${varBsPaginationBorderWidth} solid ${varBsPaginationBorderColor}`,
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${pageLink}:hover`, {
	zIndex: 2,
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

globalStyle(`${materiaScope}${pageLink}:focus`, {
	zIndex: 3,
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: 0,
	boxShadow: varBsPaginationFocusBoxShadow,
})

globalStyle(
	`${materiaScope}${pageLink}${pageItemActive}, ${materiaScope}${pageItemActive} > ${pageLink}`,
	{
		zIndex: 3,
		color: varBsPaginationActiveColor,
		backgroundColor: varBsPaginationActiveBg,
		borderColor: varBsPaginationActiveBorderColor,
	},
)

globalStyle(
	`${materiaScope}${pageLink}${pageItemDisabled}, ${materiaScope}${pageItemDisabled} > ${pageLink}`,
	{
		color: varBsPaginationDisabledColor,
		pointerEvents: 'none',
		backgroundColor: varBsPaginationDisabledBg,
		borderColor: varBsPaginationDisabledBorderColor,
	},
)

globalStyle(`${materiaScope}${pageItem}:not(:first-child) ${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsPaginationBorderWidth})`,
})

globalStyle(`${materiaScope}${pageItem}:first-child ${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

globalStyle(`${materiaScope}${pageItem}:last-child ${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

globalStyle(`${materiaScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: '1.5rem',
		[varBsPaginationPaddingY]: '0.75rem',
		[varBsPaginationFontSize]: '1.25rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${materiaScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: '0.5rem',
		[varBsPaginationPaddingY]: '0.25rem',
		[varBsPaginationFontSize]: '0.875rem',
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})

