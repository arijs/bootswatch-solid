import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBgRgb,
	varBsBorderColorTranslucent,
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
import { vaporScope } from '../../scope.css'

globalStyle(`${vaporScope}${toastExample}`, {
	backgroundColor: `rgba(${varBsDarkRgb}, 1)`,
	padding: '3rem',
	alignItems: 'center',
})

globalStyle(`${vaporScope}${toast}`, {
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
		[varBsToastBorderColor]: varBsBorderColorTranslucent,
		[varBsToastBorderRadius]: varBsBorderRadius,
		[varBsToastBoxShadow]: varBsBoxShadow,
		[varBsToastHeaderColor]: varBsSecondaryColor,
		[varBsToastHeaderBg]: `rgba(${varBsBodyBgRgb}, 0.85)`,
		[varBsToastHeaderBorderColor]: varBsBorderColorTranslucent,
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

globalStyle(`${vaporScope}${toast}:not(${toastShow})`, {
	display: 'none',
})

globalStyle(`${vaporScope}${toastHeader}`, {
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

globalStyle(`${vaporScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: 'break-word',
})

globalStyle(`${vaporScope}${placeholderIcon}`, {
	verticalAlign: 'middle',
	width: '20px',
	height: '20px',
	borderRadius: `${varBsBorderRadius} !important`,
	marginRight: '0.5rem !important',
})

globalStyle(`${vaporScope}${toastBrand}`, {
	fontWeight: 'bolder',
	marginRight: 'auto !important',
})

globalStyle(`${vaporScope}${toastTimestamp}`, {
	fontSize: '0.875em',
	color: `${varBsSecondaryColor} !important`,
	// .text-muted glow overrides the inherited white glow from the toast container
	textShadow: '0 0 1px rgba(21, 104, 94, 0.3), 0 0 2px rgba(21, 104, 94, 0.3), 0 0 5px rgba(21, 104, 94, 0.2)',
})

globalStyle(`${vaporScope}${toastHeader} ${alertBtnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${vaporScope}${toast}`, {
	vars: {
		[varBsToastColor]: '#fff',
		[varBsToastBg]: '#6f42c1',
		[varBsToastHeaderBg]: '#6f42c1',
		[varBsToastHeaderColor]: '#fff',
	},
	textShadow:
		'0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
	boxShadow: '0 0 2rem rgba(111,66,193,0.4), 0 0 8rem rgba(111,66,193,0.3)',
})
