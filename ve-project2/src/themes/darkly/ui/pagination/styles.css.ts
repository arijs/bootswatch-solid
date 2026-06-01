import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsLinkHoverColor,
	varBsSecondaryBg,
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
import { darklyScope } from '../../scope.css'

globalStyle(`${darklyScope}${pagination}`, {
	vars: {
		[varBsPaginationPaddingX]: "0.75rem",
		[varBsPaginationPaddingY]: "0.375rem",
		[varBsPaginationFontSize]: "1rem",
		[varBsPaginationColor]: "#fff",
		[varBsPaginationBg]: "#00bc8c",
		[varBsPaginationBorderWidth]: "0",
		[varBsPaginationBorderColor]: "transparent",
		[varBsPaginationBorderRadius]: varBsBorderRadius,
		[varBsPaginationHoverColor]: "#fff",
		[varBsPaginationHoverBg]: "#00efb2",
		[varBsPaginationHoverBorderColor]: "transparent",
		[varBsPaginationFocusColor]: varBsLinkHoverColor,
		[varBsPaginationFocusBg]: varBsSecondaryBg,
		[varBsPaginationFocusBoxShadow]: "0 0 0 0.25rem rgba(55, 90, 127, 0.25)",
		[varBsPaginationActiveColor]: "#fff",
		[varBsPaginationActiveBg]: "#00efb2",
		[varBsPaginationActiveBorderColor]: "transparent",
		[varBsPaginationDisabledColor]: "#fff",
		[varBsPaginationDisabledBg]: "#007053",
		[varBsPaginationDisabledBorderColor]: "transparent",
	},
	display: "flex",
	paddingLeft: 0,
	listStyle: "none",
})

globalStyle(`${darklyScope}${pageLink}`, {
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

globalStyle(`${darklyScope}${pageLink}:hover`, {
	zIndex: 2,
	color: varBsPaginationHoverColor,
	backgroundColor: varBsPaginationHoverBg,
	borderColor: varBsPaginationHoverBorderColor,
})

globalStyle(`${darklyScope}${pageLink}:focus`, {
	zIndex: 3,
	color: varBsPaginationFocusColor,
	backgroundColor: varBsPaginationFocusBg,
	outline: 0,
	boxShadow: varBsPaginationFocusBoxShadow,
})

globalStyle(`${darklyScope}${pageLink}${pageItemActive}`, {
	zIndex: 3,
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${darklyScope}${pageItem}${pageItemActive} > ${darklyScope}${pageLink}`, {
	zIndex: 3,
	color: varBsPaginationActiveColor,
	backgroundColor: varBsPaginationActiveBg,
	borderColor: varBsPaginationActiveBorderColor,
})

globalStyle(`${darklyScope}${pageLink}${pageItemDisabled}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${darklyScope}${pageItem}${pageItemDisabled} > ${darklyScope}${pageLink}`, {
	color: varBsPaginationDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsPaginationDisabledBg,
	borderColor: varBsPaginationDisabledBorderColor,
})

globalStyle(`${darklyScope}${pageItem}:not(:first-child) ${darklyScope}${pageLink}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${darklyScope}${pageItem}:first-child ${darklyScope}${pageLink}`, {
	borderTopLeftRadius: varBsPaginationBorderRadius,
	borderBottomLeftRadius: varBsPaginationBorderRadius,
})

globalStyle(`${darklyScope}${pageItem}:last-child ${darklyScope}${pageLink}`, {
	borderTopRightRadius: varBsPaginationBorderRadius,
	borderBottomRightRadius: varBsPaginationBorderRadius,
})

globalStyle(`${darklyScope}${paginationLg}`, {
	vars: {
		[varBsPaginationPaddingX]: "1.5rem",
		[varBsPaginationPaddingY]: "0.75rem",
		[varBsPaginationFontSize]: "1.25rem",
		[varBsPaginationBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${darklyScope}${paginationSm}`, {
	vars: {
		[varBsPaginationPaddingX]: "0.5rem",
		[varBsPaginationPaddingY]: "0.25rem",
		[varBsPaginationFontSize]: "0.875rem",
		[varBsPaginationBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${darklyScope}${flexWrap}`, {
	flexWrap: "wrap !important",
})
