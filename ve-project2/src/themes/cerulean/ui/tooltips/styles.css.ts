import { globalStyle } from '@vanilla-extract/css'
import { ceruleanScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderRadius,
	varBsEmphasisColor,
	varBsFontSansSerif,
} from '../../../../theme-contract/_vars.css'
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

globalStyle(`${ceruleanScope}${tooltipFade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${ceruleanScope}${tooltipFade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${ceruleanScope}${tooltipFade}:not(${tooltipShow})`, {
	opacity: '0',
})

globalStyle(`${ceruleanScope}${tooltip}`, {
	vars: {
		[varBsTooltipZindex]: '1080',
		[varBsTooltipMaxWidth]: '200px',
		[varBsTooltipPaddingX]: '0.5rem',
		[varBsTooltipPaddingY]: '0.25rem',
		[varBsTooltipMargin]: '',
		[varBsTooltipFontSize]: '0.875rem',
		[varBsTooltipColor]: varBsBodyBg,
		[varBsTooltipBg]: varBsEmphasisColor,
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

globalStyle(`${ceruleanScope}${tooltip}${tooltipShow}`, {
	opacity: varBsTooltipOpacity,
})

globalStyle(`${ceruleanScope}${tooltip} ${ceruleanScope}${tooltipArrow}`, {
	display: 'block',
	width: varBsTooltipArrowWidth,
	height: varBsTooltipArrowHeight,
})

globalStyle(`${ceruleanScope}${tooltip} ${ceruleanScope}${tooltipArrow}::before`, {
	position: 'absolute',
	content: '""',
	borderColor: 'transparent',
	borderStyle: 'solid',
})

globalStyle(`${ceruleanScope}${bsTooltipTop} ${ceruleanScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${ceruleanScope}${bsTooltipAuto}[data-popper-placement^=top] ${ceruleanScope}${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${ceruleanScope}${bsTooltipTop} ${ceruleanScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${ceruleanScope}${bsTooltipAuto}[data-popper-placement^=top] ${ceruleanScope}${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${ceruleanScope}${bsTooltipEnd} ${ceruleanScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${ceruleanScope}${bsTooltipAuto}[data-popper-placement^=right] ${ceruleanScope}${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${ceruleanScope}${bsTooltipEnd} ${ceruleanScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${ceruleanScope}${bsTooltipAuto}[data-popper-placement^=right] ${ceruleanScope}${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${ceruleanScope}${bsTooltipBottom} ${ceruleanScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${ceruleanScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${ceruleanScope}${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})

globalStyle(`${ceruleanScope}${bsTooltipBottom} ${ceruleanScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${ceruleanScope}${bsTooltipAuto}[data-popper-placement^=bottom] ${ceruleanScope}${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${ceruleanScope}${bsTooltipStart} ${ceruleanScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${ceruleanScope}${bsTooltipAuto}[data-popper-placement^=left] ${ceruleanScope}${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})

globalStyle(`${ceruleanScope}${bsTooltipStart} ${ceruleanScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${ceruleanScope}${bsTooltipAuto}[data-popper-placement^=left] ${ceruleanScope}${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${ceruleanScope}${tooltipInner}`, {
	maxWidth: varBsTooltipMaxWidth,
	padding: `${varBsTooltipPaddingY} ${varBsTooltipPaddingX}`,
	color: varBsTooltipColor,
	textAlign: 'center',
	backgroundColor: varBsTooltipBg,
	borderRadius: varBsTooltipBorderRadius,
})
