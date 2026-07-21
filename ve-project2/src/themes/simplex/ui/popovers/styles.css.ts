import { globalStyle } from '@vanilla-extract/css'
import { simplexScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderRadiusLg,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsFontSansSerif,
	varBsSecondaryBg,
} from '../../../../theme-contract/_vars.css'
import {
	varBsPopoverArrowBorder,
	varBsPopoverArrowHeight,
	varBsPopoverArrowWidth,
	varBsPopoverBg,
	varBsPopoverBodyColor,
	varBsPopoverBodyPaddingX,
	varBsPopoverBodyPaddingY,
	varBsPopoverBorderColor,
	varBsPopoverBorderRadius,
	varBsPopoverBorderWidth,
	varBsPopoverBoxShadow,
	varBsPopoverFontSize,
	varBsPopoverHeaderBg,
	varBsPopoverHeaderColor,
	varBsPopoverHeaderFontSize,
	varBsPopoverHeaderPaddingX,
	varBsPopoverHeaderPaddingY,
	varBsPopoverInnerBorderRadius,
	varBsPopoverMaxWidth,
	varBsPopoverZindex,
} from '../../../../theme-contract/ui/popovers/_vars.css'

import { popover } from '../../../../theme-contract/literal/contract.css'
import {
	bsPopoverAuto,
	bsPopoverBottom,
	bsPopoverEnd,
	bsPopoverStart,
	bsPopoverTop,
	popoverArrow,
	popoverBody,
	popoverFade,
	popoverHeader,
	popoverShow,
} from '../../../../theme-contract/ui/popovers/contract.css'

globalStyle(`${simplexScope}${popoverFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${simplexScope}${popoverFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${simplexScope}${popoverFade}:not(${popoverShow})`, {
	opacity: '0',
})

globalStyle(`${simplexScope}${popover}`, {
	vars: {
		[varBsPopoverZindex]: '1070',
		[varBsPopoverMaxWidth]: '276px',
		[varBsPopoverFontSize]: '0.875rem',
		[varBsPopoverBg]: varBsBodyBg,
		[varBsPopoverBorderWidth]: varBsBorderWidth,
		[varBsPopoverBorderColor]: '#eeeeee',
		[varBsPopoverBorderRadius]: varBsBorderRadiusLg,
		[varBsPopoverInnerBorderRadius]: `calc(${varBsBorderRadiusLg} - ${varBsBorderWidth})`,
		[varBsPopoverBoxShadow]: varBsBoxShadow,
		[varBsPopoverHeaderPaddingX]: '1rem',
		[varBsPopoverHeaderPaddingY]: '0.5rem',
		[varBsPopoverHeaderFontSize]: '1rem',
		[varBsPopoverHeaderColor]: 'inherit',
		[varBsPopoverHeaderBg]: varBsSecondaryBg,
		[varBsPopoverBodyPaddingX]: '1rem',
		[varBsPopoverBodyPaddingY]: '1rem',
		[varBsPopoverBodyColor]: varBsBodyColor,
		[varBsPopoverArrowWidth]: '1rem',
		[varBsPopoverArrowHeight]: '0.5rem',
		[varBsPopoverArrowBorder]: varBsPopoverBorderColor,
	},
	zIndex: varBsPopoverZindex,
	display: 'block',
	maxWidth: varBsPopoverMaxWidth,
	fontFamily: varBsFontSansSerif,
	fontStyle: 'normal',
	fontWeight: '400',
	lineHeight: '1.5',
	textAlign: 'start',
	textDecoration: 'none',
	textShadow: 'none',
	textTransform: 'none',
	letterSpacing: 'normal',
	wordBreak: 'normal',
	whiteSpace: 'normal',
	wordSpacing: 'normal',
	lineBreak: 'auto',
	fontSize: varBsPopoverFontSize,
	wordWrap: 'break-word',
	backgroundColor: varBsPopoverBg,
	backgroundClip: 'padding-box',
	border: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderRadius: varBsPopoverBorderRadius,
})

globalStyle(`${simplexScope}${popover} ${simplexScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${simplexScope}${popover} ${simplexScope}${popoverArrow}::before`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${simplexScope}${popover} ${simplexScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${simplexScope}${bsPopoverTop} > ${simplexScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=top] > ${simplexScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${simplexScope}${bsPopoverTop} > ${simplexScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=top] > ${simplexScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${simplexScope}${bsPopoverTop} > ${simplexScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=top] > ${simplexScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${simplexScope}${bsPopoverTop} > ${simplexScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=top] > ${simplexScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${simplexScope}${bsPopoverTop} > ${simplexScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=top] > ${simplexScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${simplexScope}${bsPopoverEnd} > ${simplexScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=right] > ${simplexScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${simplexScope}${bsPopoverEnd} > ${simplexScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=right] > ${simplexScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${simplexScope}${bsPopoverEnd} > ${simplexScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=right] > ${simplexScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${simplexScope}${bsPopoverEnd} > ${simplexScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=right] > ${simplexScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${simplexScope}${bsPopoverEnd} > ${simplexScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=right] > ${simplexScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${simplexScope}${bsPopoverBottom} > ${simplexScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${simplexScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${simplexScope}${bsPopoverBottom} > ${simplexScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${simplexScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${simplexScope}${bsPopoverBottom} > ${simplexScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${simplexScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${simplexScope}${bsPopoverBottom} > ${simplexScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${simplexScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${simplexScope}${bsPopoverBottom} > ${simplexScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${simplexScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${simplexScope}${bsPopoverBottom} ${simplexScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=bottom] ${simplexScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${simplexScope}${bsPopoverStart} > ${simplexScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=left] > ${simplexScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${simplexScope}${bsPopoverStart} > ${simplexScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=left] > ${simplexScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${simplexScope}${bsPopoverStart} > ${simplexScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=left] > ${simplexScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${simplexScope}${bsPopoverStart} > ${simplexScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=left] > ${simplexScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${simplexScope}${bsPopoverStart} > ${simplexScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${simplexScope}${bsPopoverAuto}[data-popper-placement^=left] > ${simplexScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${simplexScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

globalStyle(`${simplexScope}${popoverHeader}:empty`, {
	display: 'none',
})

globalStyle(`${simplexScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})
