import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsDarkRgb,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
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
import { alertBtnClose } from '../../../../theme-contract/ui/alerts/contract.css'
import { slateScope } from '../../scope.css'

globalStyle(`${slateScope}${toastExample}`, {
	backgroundColor: `rgba(${varBsDarkRgb}, 1)`,
	padding: '3rem',
	alignItems: 'center',
})

globalStyle(`${slateScope}${toast}`, {
	vars: {
		[varBsToastZindex]: '1090',
		[varBsToastPaddingX]: '0.75rem',
		[varBsToastPaddingY]: '0.5rem',
		[varBsToastSpacing]: '1.5rem',
		[varBsToastMaxWidth]: '350px',
		[varBsToastFontSize]: '0.875rem',
		[varBsToastColor]: '',
		[varBsToastBg]: '#32383e',
		[varBsToastBorderWidth]: varBsBorderWidth,
		[varBsToastBorderColor]: 'rgba(0, 0, 0, 0.2)',
		[varBsToastBorderRadius]: varBsBorderRadius,
		[varBsToastBoxShadow]: varBsBoxShadow,
		[varBsToastHeaderColor]: '#aaa',
		[varBsToastHeaderBg]: '#32383e',
		[varBsToastHeaderBorderColor]: 'rgba(0, 0, 0, 0.2)',
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

globalStyle(`${slateScope}${toast}:not(${toastShow})`, {
	display: 'none',
})

globalStyle(`${slateScope}${toastHeader}`, {
	display: 'flex',
	alignItems: 'center',
	padding: `${varBsToastPaddingY} ${varBsToastPaddingX}`,
	color: varBsToastHeaderColor,
	backgroundColor: varBsToastHeaderBg,
	backgroundClip: 'padding-box',
	borderBottom: `${varBsToastBorderWidth} solid ${varBsToastHeaderBorderColor}`,
	borderTopLeftRadius: `calc(${varBsToastBorderRadius} - ${varBsToastBorderWidth})`,
	borderTopRightRadius: `calc(${varBsToastBorderRadius} - ${varBsToastBorderWidth})`,
})

globalStyle(`${slateScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: 'break-word',
})

globalStyle(`${slateScope}${placeholderIcon}`, {
	verticalAlign: 'middle',
	width: '20px',
	height: '20px',
	borderRadius: `${varBsBorderRadius} !important`,
	marginRight: '0.5rem !important',
})

globalStyle(`${slateScope}${toastBrand}`, {
	fontWeight: 'bolder',
	marginRight: 'auto !important',
})

globalStyle(`${slateScope}${toastTimestamp}`, {
	fontSize: '0.875em',
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${slateScope}${toastHeader} ${alertBtnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})
