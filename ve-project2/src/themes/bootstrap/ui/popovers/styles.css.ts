import { globalStyle } from '@vanilla-extract/css'
import { bootstrapScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColorTranslucent,
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

globalStyle(`${bootstrapScope}${popoverFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${bootstrapScope}${popoverFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${bootstrapScope}${popoverFade}:not(${popoverShow})`, {
	opacity: '0',
})

globalStyle(`${bootstrapScope}${popover}`, {
	vars: {
		[varBsPopoverZindex]: '1070',
		[varBsPopoverMaxWidth]: '276px',
		[varBsPopoverFontSize]: '0.875rem',
		[varBsPopoverBg]: varBsBodyBg,
		[varBsPopoverBorderWidth]: varBsBorderWidth,
		[varBsPopoverBorderColor]: varBsBorderColorTranslucent,
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

globalStyle(`${bootstrapScope}${popover} ${bootstrapScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${bootstrapScope}${popover} ${bootstrapScope}${popoverArrow}::before`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${bootstrapScope}${popover} ${bootstrapScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${bootstrapScope}${bsPopoverTop} > ${bootstrapScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=top] > ${bootstrapScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${bootstrapScope}${bsPopoverTop} > ${bootstrapScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=top] > ${bootstrapScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${bootstrapScope}${bsPopoverTop} > ${bootstrapScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=top] > ${bootstrapScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${bootstrapScope}${bsPopoverTop} > ${bootstrapScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=top] > ${bootstrapScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${bootstrapScope}${bsPopoverTop} > ${bootstrapScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=top] > ${bootstrapScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${bootstrapScope}${bsPopoverEnd} > ${bootstrapScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=right] > ${bootstrapScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${bootstrapScope}${bsPopoverEnd} > ${bootstrapScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=right] > ${bootstrapScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${bootstrapScope}${bsPopoverEnd} > ${bootstrapScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=right] > ${bootstrapScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${bootstrapScope}${bsPopoverEnd} > ${bootstrapScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=right] > ${bootstrapScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${bootstrapScope}${bsPopoverEnd} > ${bootstrapScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=right] > ${bootstrapScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${bootstrapScope}${bsPopoverBottom} > ${bootstrapScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${bootstrapScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${bootstrapScope}${bsPopoverBottom} > ${bootstrapScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${bootstrapScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${bootstrapScope}${bsPopoverBottom} > ${bootstrapScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${bootstrapScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${bootstrapScope}${bsPopoverBottom} > ${bootstrapScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${bootstrapScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${bootstrapScope}${bsPopoverBottom} > ${bootstrapScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${bootstrapScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${bootstrapScope}${bsPopoverBottom} ${bootstrapScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=bottom] ${bootstrapScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${bootstrapScope}${bsPopoverStart} > ${bootstrapScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=left] > ${bootstrapScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${bootstrapScope}${bsPopoverStart} > ${bootstrapScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=left] > ${bootstrapScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${bootstrapScope}${bsPopoverStart} > ${bootstrapScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=left] > ${bootstrapScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${bootstrapScope}${bsPopoverStart} > ${bootstrapScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=left] > ${bootstrapScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${bootstrapScope}${bsPopoverStart} > ${bootstrapScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-placement^=left] > ${bootstrapScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${bootstrapScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

globalStyle(`${bootstrapScope}${popoverHeader}:empty`, {
	display: 'none',
})

globalStyle(`${bootstrapScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})
