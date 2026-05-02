import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBgRgb,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsDarkRgb,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import { alertBtnClose } from '../../../../theme-contract/ui/alerts/contract.css'
import {
	placeholderIcon,
	toast,
	toastBody,
	toastBrand,
	toastExample,
	toastHeader,
	toastShow,
	toastTimestamp,
} from '../../../../theme-contract/ui/toasts/contract.css'
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
import { sketchyScope } from '../../scope.css'

globalStyle(`${sketchyScope}${toastExample}`, {
	backgroundColor: `rgba(${varBsDarkRgb}, 1)`,
	padding: '3rem',
	alignItems: 'center',
})

globalStyle(`${sketchyScope}${toast}`, {
	vars: {
		[varBsToastZindex]: '1090',
		[varBsToastPaddingX]: '0.75rem',
		[varBsToastPaddingY]: '0.5rem',
		[varBsToastSpacing]: '1.5rem',
		[varBsToastMaxWidth]: '350px',
		[varBsToastFontSize]: '0.875rem',
		[varBsToastColor]: '',
		[varBsToastBg]: `rgba(${varBsBodyBgRgb}, 0.85)`,
		[varBsToastBorderWidth]: varBsBorderWidth,
		[varBsToastBorderColor]: '#333',
		[varBsToastBorderRadius]: '10px 10px 15px 5px / 5px 15px 5px 15px',
		[varBsToastBoxShadow]: varBsBoxShadow,
		[varBsToastHeaderColor]: '#333',
		[varBsToastHeaderBg]: `rgba(${varBsBodyBgRgb}, 0.85)`,
		[varBsToastHeaderBorderColor]: '#333',
	},
	width: varBsToastMaxWidth,
	maxWidth: '100%',
	fontSize: varBsToastFontSize,
	color: varBsToastColor,
	pointerEvents: 'auto',
	backgroundColor: varBsToastBg,
	backgroundClip: 'padding-box',
	border: `${varBsToastBorderWidth} solid ${varBsToastBorderColor}`,
	boxShadow: varBsToastBoxShadow,
	borderRadius: varBsToastBorderRadius,
})

globalStyle(`${sketchyScope}${toast}:not(${toastShow})`, {
	display: 'none',
})

globalStyle(`${sketchyScope}${toastHeader}`, {
	display: 'flex',
	alignItems: 'center',
	fontFamily: '"Cabin Sketch", cursive',
	padding: `${varBsToastPaddingY} ${varBsToastPaddingX}`,
	color: varBsToastHeaderColor,
	backgroundColor: varBsToastHeaderBg,
	backgroundClip: 'padding-box',
	borderBottom: `${varBsToastBorderWidth} solid ${varBsToastHeaderBorderColor}`,
	borderTopLeftRadius: `calc(${varBsToastBorderRadius} - ${varBsToastBorderWidth})`,
	borderTopRightRadius: `calc(${varBsToastBorderRadius} - ${varBsToastBorderWidth})`,
})

globalStyle(`${sketchyScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: 'break-word',
})

globalStyle(`${sketchyScope}${placeholderIcon}`, {
	verticalAlign: 'middle',
	width: '20px',
	height: '20px',
	borderRadius: `${varBsBorderRadius} !important`,
	marginRight: '0.5rem !important',
})

globalStyle(`${sketchyScope}${toastBrand}`, {
	fontWeight: 'bolder',
	marginRight: 'auto !important',
})

globalStyle(`${sketchyScope}${toastTimestamp}`, {
	fontSize: '0.875em',
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${sketchyScope}${toastHeader} ${alertBtnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${sketchyScope}${toastHeader} ${alertBtnClose}::before`, {
	position: 'static',
	top: 'auto',
	right: 'auto',
})
