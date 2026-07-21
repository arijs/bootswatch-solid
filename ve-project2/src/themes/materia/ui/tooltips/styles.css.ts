import { globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

import { varBsBodyBg, varBsBorderRadius, varBsFontSansSerif } from '../../../../theme-contract/_vars.css'
import {
	varBsTooltipArrowHeight,
	varBsTooltipArrowWidth,
	varBsTooltipBg,
	varBsTooltipBorderRadius,
	varBsTooltipColor,
	varBsTooltipFontSize,
	varBsTooltipMargin,
	varBsTooltipMaxWidth,
	varBsTooltipOpacity,
	varBsTooltipPaddingX,
	varBsTooltipPaddingY,
	varBsTooltipZindex,
} from '../../../../theme-contract/ui/tooltips/_vars.css'

import {
	bsTooltipAuto,
	bsTooltipBottom,
	bsTooltipEnd,
	bsTooltipStart,
	bsTooltipTop,
	tooltip,
} from '../../../../theme-contract/literal/contract.css'
import {
	tooltipArrow,
	tooltipFade,
	tooltipInner,
	tooltipShow,
} from '../../../../theme-contract/ui/tooltips/contract.css'

globalStyle(`${materiaScope}${tooltipFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${materiaScope}${tooltipFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${tooltipFade}:not(${tooltipShow})`, {
	opacity: '0',
})

globalStyle(`${materiaScope}${tooltip}`, {
	vars: {
		[varBsTooltipZindex]: '1080',
		[varBsTooltipMaxWidth]: '200px',
		[varBsTooltipPaddingX]: '0.5rem',
		[varBsTooltipPaddingY]: '0.25rem',
		[varBsTooltipMargin]: '',
		[varBsTooltipFontSize]: '0.875rem',
		[varBsTooltipColor]: varBsBodyBg,
		[varBsTooltipBg]: '#444',
		[varBsTooltipBorderRadius]: varBsBorderRadius,
		[varBsTooltipOpacity]: '0.9',
		[varBsTooltipArrowWidth]: '0.8rem',
		[varBsTooltipArrowHeight]: '0.4rem',
	},
	zIndex: varBsTooltipZindex,
	display: 'block',
	margin: varBsTooltipMargin,
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
	fontSize: varBsTooltipFontSize,
	wordWrap: 'break-word',
	opacity: '0',
})

globalStyle(`${materiaScope}${tooltip}${tooltipShow}`, {
	opacity: varBsTooltipOpacity,
})

globalStyle(`${materiaScope}${tooltip} ${materiaScope}${tooltipArrow}`, {
	display: 'block',
	width: varBsTooltipArrowWidth,
	height: varBsTooltipArrowHeight,
})

globalStyle(`${materiaScope}${tooltip} ${materiaScope}${tooltipArrow}::before`, {
	position: 'absolute',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
})

globalStyle(`${materiaScope}${bsTooltipTop} ${materiaScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=top] ${materiaScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${materiaScope}${bsTooltipTop} ${materiaScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=top] ${materiaScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipEnd} ${materiaScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=right] ${materiaScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${materiaScope}${bsTooltipEnd} ${materiaScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=right] ${materiaScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipBottom} ${materiaScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${materiaScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${materiaScope}${bsTooltipBottom} ${materiaScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${materiaScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipStart} ${materiaScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=left] ${materiaScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${materiaScope}${bsTooltipStart} ${materiaScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${bsTooltipAuto}[data-popper-placement^=left] ${materiaScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${materiaScope}${tooltipInner}`, {
	maxWidth: varBsTooltipMaxWidth,
	padding: `${varBsTooltipPaddingY} ${varBsTooltipPaddingX}`,
	color: varBsTooltipColor,
	textAlign: 'center',
	backgroundColor: varBsTooltipBg,
	borderRadius: varBsTooltipBorderRadius,
})
