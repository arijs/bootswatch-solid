import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsDarkRgb,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import {
	varBsToastBg,
	varBsToastBorderColor,
	varBsToastBorderRadius,
	varBsToastBorderWidth,
	varBsToastBoxShadow,
	varBsToastColor,
	varBsToastFontSize,
	varBsToastHeaderBg,
	varBsToastHeaderBorderColor,
	varBsToastHeaderColor,
	varBsToastMaxWidth,
	varBsToastPaddingX,
	varBsToastPaddingY,
	varBsToastSpacing,
	varBsToastZindex,
} from '../../../../theme-contract/ui/toasts/_vars.css'
import { alertBtnClose } from '../../../../theme-contract/ui/alerts/contract.css'
import {
	placeholderIcon,
	toast,
	toastBody,
	toastBrand,
	toastExample,
	toastFade,
	toastHeader,
	toastShow,
	toastShowing,
	toastTimestamp,
} from '../../../../theme-contract/ui/toasts/contract.css'
import { darklyScope } from '../../scope.css'

globalStyle(`${darklyScope}${toastFade}`, {
	transition: "opacity 0.15s linear",
})

globalStyle(`${darklyScope}${toastFade}:not(${toastShow})`, {
	opacity: 0,
})

globalStyle(`${darklyScope}${toast}`, {
	vars: {
		[varBsToastZindex]: 1090,
		[varBsToastPaddingX]: "0.75rem",
		[varBsToastPaddingY]: "0.5rem",
		[varBsToastSpacing]: "1.5rem",
		[varBsToastMaxWidth]: "350px",
		[varBsToastFontSize]: "0.875rem",
		[varBsToastColor]: "",
		[varBsToastBg]: "#444",
		[varBsToastBorderWidth]: varBsBorderWidth,
		[varBsToastBorderColor]: varBsBorderColorTranslucent,
		[varBsToastBorderRadius]: varBsBorderRadius,
		[varBsToastBoxShadow]: varBsBoxShadow,
		[varBsToastHeaderColor]: varBsSecondaryColor,
		[varBsToastHeaderBg]: "#303030",
		[varBsToastHeaderBorderColor]: varBsBorderColorTranslucent,
	},
	width: varBsToastMaxWidth,
	maxWidth: "100%",
	fontSize: varBsToastFontSize,
	color: varBsToastColor,
	pointerEvents: "auto",
	backgroundColor: varBsToastBg,
	backgroundClip: "padding-box",
	border: `${varBsToastBorderWidth} solid ${varBsToastBorderColor}`,
	boxShadow: varBsToastBoxShadow,
	borderRadius: varBsToastBorderRadius,
})

globalStyle(`${darklyScope}${toast}:not(${toastShow})`, {
	display: "none",
})

globalStyle(`${darklyScope}${toastHeader}`, {
	display: "flex",
	alignItems: "center",
	padding: `${varBsToastPaddingY} ${varBsToastPaddingX}`,
	color: varBsToastHeaderColor,
	backgroundColor: varBsToastHeaderBg,
	backgroundClip: "padding-box",
	borderBottom: `${varBsToastBorderWidth} solid ${varBsToastHeaderBorderColor}`,
	borderTopLeftRadius: `calc(${varBsToastBorderRadius} - ${varBsToastBorderWidth})`,
	borderTopRightRadius: `calc(${varBsToastBorderRadius} - ${varBsToastBorderWidth})`,
})

globalStyle(`${darklyScope}${toastHeader} ${darklyScope}${alertBtnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${darklyScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: "break-word",
})

globalStyle(`${darklyScope}${toastExample}`, {
	display: "flex",
	backgroundColor: `rgba(${varBsDarkRgb}, 1)`,
	padding: "3rem",
	alignItems: "center",
})

globalStyle(`${darklyScope}${placeholderIcon}`, {
	verticalAlign: "middle",
	width: "20px",
	height: "20px",
	borderRadius: `${varBsBorderRadius} !important`,
	marginRight: "0.5rem !important",
})

globalStyle(`${darklyScope}${toastBrand}`, {
	fontWeight: "bolder",
	marginRight: "auto !important",
})

globalStyle(`${darklyScope}${toastTimestamp}`, {
	fontSize: "0.875em",
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${darklyScope}${toast}${toastShowing}`, {
	opacity: 0,
})
