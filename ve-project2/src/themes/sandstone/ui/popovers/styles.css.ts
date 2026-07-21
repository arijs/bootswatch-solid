import { globalStyle } from '@vanilla-extract/css'
import { sandstoneScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColorTranslucent,
	varBsBorderRadiusLg,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsFontSansSerif,
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

globalStyle(`${sandstoneScope}${popoverFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${sandstoneScope}${popoverFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${sandstoneScope}${popoverFade}:not(${popoverShow})`, {
	opacity: '0',
})

globalStyle(`${sandstoneScope}${popover}`, {
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
		[varBsPopoverHeaderBg]: '#f8f5f0',
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

globalStyle(`${sandstoneScope}${popover} ${sandstoneScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${sandstoneScope}${popover} ${sandstoneScope}${popoverArrow}::before`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${sandstoneScope}${popover} ${sandstoneScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: '0',
})

globalStyle(`${sandstoneScope}${bsPopoverTop} > ${sandstoneScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=top] > ${sandstoneScope}${popoverArrow}`, {
	bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${sandstoneScope}${bsPopoverTop} > ${sandstoneScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=top] > ${sandstoneScope}${popoverArrow}::before`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${sandstoneScope}${bsPopoverTop} > ${sandstoneScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=top] > ${sandstoneScope}${popoverArrow}::after`, {
	borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${sandstoneScope}${bsPopoverTop} > ${sandstoneScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=top] > ${sandstoneScope}${popoverArrow}::before`, {
	bottom: '0',
	borderTopColor: varBsPopoverArrowBorder,
})

globalStyle(`${sandstoneScope}${bsPopoverTop} > ${sandstoneScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=top] > ${sandstoneScope}${popoverArrow}::after`, {
	bottom: varBsPopoverBorderWidth,
	borderTopColor: varBsPopoverBg,
})

globalStyle(`${sandstoneScope}${bsPopoverEnd} > ${sandstoneScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=right] > ${sandstoneScope}${popoverArrow}`, {
	left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${sandstoneScope}${bsPopoverEnd} > ${sandstoneScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=right] > ${sandstoneScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${sandstoneScope}${bsPopoverEnd} > ${sandstoneScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=right] > ${sandstoneScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
})

globalStyle(`${sandstoneScope}${bsPopoverEnd} > ${sandstoneScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=right] > ${sandstoneScope}${popoverArrow}::before`, {
	left: '0',
	borderRightColor: varBsPopoverArrowBorder,
})

globalStyle(`${sandstoneScope}${bsPopoverEnd} > ${sandstoneScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=right] > ${sandstoneScope}${popoverArrow}::after`, {
	left: varBsPopoverBorderWidth,
	borderRightColor: varBsPopoverBg,
})

globalStyle(`${sandstoneScope}${bsPopoverBottom} > ${sandstoneScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${sandstoneScope}${popoverArrow}`, {
	top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
})

globalStyle(`${sandstoneScope}${bsPopoverBottom} > ${sandstoneScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${sandstoneScope}${popoverArrow}::before`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${sandstoneScope}${bsPopoverBottom} > ${sandstoneScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${sandstoneScope}${popoverArrow}::after`, {
	borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${sandstoneScope}${bsPopoverBottom} > ${sandstoneScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${sandstoneScope}${popoverArrow}::before`, {
	top: '0',
	borderBottomColor: varBsPopoverArrowBorder,
})

globalStyle(`${sandstoneScope}${bsPopoverBottom} > ${sandstoneScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=bottom] > ${sandstoneScope}${popoverArrow}::after`, {
	top: varBsPopoverBorderWidth,
	borderBottomColor: varBsPopoverBg,
})

globalStyle(`${sandstoneScope}${bsPopoverBottom} ${sandstoneScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=bottom] ${sandstoneScope}${popoverHeader}::before`, {
	position: 'absolute',
	top: '0',
	left: '50%',
	display: 'block',
	width: varBsPopoverArrowWidth,
	marginLeft: `calc(-0.5 * ${varBsPopoverArrowWidth})`,
	content: '""',
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverHeaderBg}`,
})

globalStyle(`${sandstoneScope}${bsPopoverStart} > ${sandstoneScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=left] > ${sandstoneScope}${popoverArrow}`, {
	right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
	width: varBsPopoverArrowHeight,
	height: varBsPopoverArrowWidth,
})

globalStyle(`${sandstoneScope}${bsPopoverStart} > ${sandstoneScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=left] > ${sandstoneScope}${popoverArrow}::before`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${sandstoneScope}${bsPopoverStart} > ${sandstoneScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=left] > ${sandstoneScope}${popoverArrow}::after`, {
	borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
})

globalStyle(`${sandstoneScope}${bsPopoverStart} > ${sandstoneScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=left] > ${sandstoneScope}${popoverArrow}::before`, {
	right: '0',
	borderLeftColor: varBsPopoverArrowBorder,
})

globalStyle(`${sandstoneScope}${bsPopoverStart} > ${sandstoneScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-placement^=left] > ${sandstoneScope}${popoverArrow}::after`, {
	right: varBsPopoverBorderWidth,
	borderLeftColor: varBsPopoverBg,
})

globalStyle(`${sandstoneScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

globalStyle(`${sandstoneScope}${popoverHeader}:empty`, {
	display: 'none',
})

globalStyle(`${sandstoneScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})
