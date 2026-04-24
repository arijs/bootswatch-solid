import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderStyle,
	varBsBorderRadius,
	varBsBorderWidth,
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

export const tooltipClass = style({
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
	fontWeight: 400,
	lineHeight: 1.5,
	textAlign: 'start',
	textDecoration: 'none',
	textShadow: 'none',
	textTransform: 'none',
	letterSpacing: 'normal',
	wordBreak: 'normal',
	whiteSpace: 'normal',
	wordSpacing: 'normal',
	fontSize: varBsTooltipFontSize,
	wordWrap: 'break-word',
	opacity: 0,
})

globalStyle(`${tooltipClass}.show`, {
	opacity: varBsTooltipOpacity,
})

export const tooltipArrow = style({
	display: 'block',
	width: varBsTooltipArrowWidth,
	height: varBsTooltipArrowHeight,
})

globalStyle(`${tooltipArrow}::before`, {
	position: 'absolute',
	content: '',
	borderColor: 'transparent',
	borderStyle: 'solid',
})

globalStyle(`${tooltipClass}[data-popper-placement^="top"] ${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})
globalStyle(`${tooltipClass}[data-popper-placement^="top"] ${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${tooltipClass}[data-popper-placement^="right"] ${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})
globalStyle(`${tooltipClass}[data-popper-placement^="right"] ${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${tooltipClass}[data-popper-placement^="bottom"] ${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})
globalStyle(`${tooltipClass}[data-popper-placement^="bottom"] ${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${tooltipClass}[data-popper-placement^="left"] ${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})
globalStyle(`${tooltipClass}[data-popper-placement^="left"] ${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

export const tooltipInner = style({
	maxWidth: varBsTooltipMaxWidth,
	padding: `${varBsTooltipPaddingY} ${varBsTooltipPaddingX}`,
	color: varBsTooltipColor,
	textAlign: 'center',
	backgroundColor: varBsTooltipBg,
	borderRadius: varBsTooltipBorderRadius,
})

export const frame = style({
	display: 'flex',
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor}`,
	height: '16em',
})

export const frameColumn = style({
	flexDirection: 'column',
	alignItems: 'center',
})

export const frameRow = style({
	flexDirection: 'row',
	alignItems: 'center',
})

export const justifyCenter = style({
	justifyContent: 'center',
})

export const justifyEnd = style({
	justifyContent: 'flex-end',
})

export const justifyStart = style({
	justifyContent: 'flex-start',
})
