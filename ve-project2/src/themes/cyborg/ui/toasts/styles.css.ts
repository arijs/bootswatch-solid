import { globalStyle } from '@vanilla-extract/css'
import { cyborgScope } from '../../scope.css'

import { varBsBorderRadius, varBsBorderWidth, varBsBoxShadow } from '../../../../theme-contract/_vars.css'
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

globalStyle(`${cyborgScope}${toast}`, {
	vars: {
		[varBsToastZindex]: '1090',
		[varBsToastPaddingX]: '0.75rem',
		[varBsToastPaddingY]: '0.5rem',
		[varBsToastSpacing]: '1.5rem',
		[varBsToastMaxWidth]: '350px',
		[varBsToastFontSize]: '0.875rem',
		[varBsToastColor]: '#fff',
		[varBsToastBg]: '#222',
		[varBsToastBorderWidth]: varBsBorderWidth,
		[varBsToastBorderColor]: '#282828',
		[varBsToastBorderRadius]: varBsBorderRadius,
		[varBsToastBoxShadow]: varBsBoxShadow,
		[varBsToastHeaderColor]: '#adafae',
		[varBsToastHeaderBg]: '#222',
		[varBsToastHeaderBorderColor]: '#282828',
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

globalStyle(`${cyborgScope}${toast}${toastShowing}`, {
	opacity: '0',
})

globalStyle(`${cyborgScope}${toast}:not(${toastShow})`, {
	display: 'none',
})

globalStyle(`${cyborgScope}${toastContainer}`, {
	vars: {
		[varBsToastZindex]: '1090',
	},
	position: 'absolute',
	zIndex: varBsToastZindex,
	width: 'max-content',
	maxWidth: '100%',
	pointerEvents: 'none',
})

globalStyle(`${cyborgScope}${toastContainer} > :not(:last-child)`, {
	marginBottom: varBsToastSpacing,
})

globalStyle(`${cyborgScope}${toastHeader}`, {
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

globalStyle(`${cyborgScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: 'break-word',
})
