import { globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../../scope.css'

import { varBsBodyBgRgb, varBsBorderRadius, varBsBorderWidth } from '../../../../theme-contract/_vars.css'
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

import { toastContainer } from '../../../../theme-contract/literal/contract.css'
import {
	toast,
	toastBody,
	toastHeader,
	toastShow,
	toastShowing,
} from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${briteScope}${toast}`, {
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
		[varBsToastBorderColor]: '#000',
		[varBsToastBorderRadius]: varBsBorderRadius,
		[varBsToastBoxShadow]: '3px 3px 0 0 #000',
		[varBsToastHeaderColor]: '#000',
		[varBsToastHeaderBg]: `rgba(${varBsBodyBgRgb}, 0.85)`,
		[varBsToastHeaderBorderColor]: '#000',
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

globalStyle(`${briteScope}${toast}${toastShowing}`, {
	opacity: '0',
})

globalStyle(`${briteScope}${toast}:not(${toastShow})`, {
	display: 'none',
})

globalStyle(`${briteScope}${toastContainer}`, {
	vars: {
		[varBsToastZindex]: '1090',
	},
	position: 'absolute',
	zIndex: varBsToastZindex,
	width: 'max-content',
	maxWidth: '100%',
	pointerEvents: 'none',
})

globalStyle(`${briteScope}${toastContainer} > :not(:last-child)`, {
	marginBottom: varBsToastSpacing,
})

globalStyle(`${briteScope}${toastHeader}`, {
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

globalStyle(`${briteScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: 'break-word',
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${toastHeader}`, {
	vars: {
		[varBsToastHeaderColor]: '#fff',
	},
})
