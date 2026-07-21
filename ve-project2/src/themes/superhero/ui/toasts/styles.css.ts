import { globalStyle } from '@vanilla-extract/css'
import { superheroScope } from '../../scope.css'

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

globalStyle(`${superheroScope}${toast}`, {
	vars: {
		[varBsToastZindex]: '1090',
		[varBsToastPaddingX]: '0.75rem',
		[varBsToastPaddingY]: '0.5rem',
		[varBsToastSpacing]: '1.5rem',
		[varBsToastMaxWidth]: '350px',
		[varBsToastFontSize]: '0.875rem',
		[varBsToastColor]: '',
		[varBsToastBg]: '#4e5d6c',
		[varBsToastBorderWidth]: varBsBorderWidth,
		[varBsToastBorderColor]: 'rgba(0, 0, 0, 0.2)',
		[varBsToastBorderRadius]: varBsBorderRadius,
		[varBsToastBoxShadow]: varBsBoxShadow,
		[varBsToastHeaderColor]: '#ebebeb',
		[varBsToastHeaderBg]: '#4e5d6c',
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

globalStyle(`${superheroScope}${toast}${toastShowing}`, {
	opacity: '0',
})

globalStyle(`${superheroScope}${toast}:not(${toastShow})`, {
	display: 'none',
})

globalStyle(`${superheroScope}${toastContainer}`, {
	vars: {
		[varBsToastZindex]: '1090',
	},
	position: 'absolute',
	zIndex: varBsToastZindex,
	width: 'max-content',
	maxWidth: '100%',
	pointerEvents: 'none',
})

globalStyle(`${superheroScope}${toastContainer} > :not(:last-child)`, {
	marginBottom: varBsToastSpacing,
})

globalStyle(`${superheroScope}${toastHeader}`, {
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

globalStyle(`${superheroScope}${toastBody}`, {
	padding: varBsToastPaddingX,
	wordWrap: 'break-word',
})
