import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderStyle,
	varBsBorderWidth,
	varBsEmphasisColor,
	varBsFontSansSerif,
} from '../../../../theme-contract/_vars.css'
import {
	frame,
	frameColumn,
	frameRow,
	justifyCenter,
	justifyEnd,
	justifyStart,
	tooltipArrow,
	tooltipInner,
	tooltipVe,
} from '../../../../theme-contract/ui/tooltips/contract.css'
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
import { bootstrapScope } from '../../scope.css'

globalStyle(`${bootstrapScope}${tooltipVe}`, {
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

globalStyle(`${bootstrapScope}${tooltipVe}.show`, {
	opacity: varBsTooltipOpacity,
})

globalStyle(`${bootstrapScope}${tooltipArrow}`, {
	display: 'block',
	width: varBsTooltipArrowWidth,
	height: varBsTooltipArrowHeight,
})

globalStyle(`${bootstrapScope}${tooltipArrow}::before`, {
	position: 'absolute',
	content: '',
	borderColor: 'transparent',
	borderStyle: 'solid',
})

globalStyle(`${bootstrapScope}${tooltipVe}[data-popper-placement^="top"] ${tooltipArrow}`, {
	bottom: `calc(-1 * ${varBsTooltipArrowHeight})`,
})
globalStyle(`${bootstrapScope}${tooltipVe}[data-popper-placement^="top"] ${tooltipArrow}::before`, {
	top: '-1px',
	borderWidth: `${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderTopColor: varBsTooltipBg,
})

globalStyle(`${bootstrapScope}${tooltipVe}[data-popper-placement^="right"] ${tooltipArrow}`, {
	left: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})
globalStyle(`${bootstrapScope}${tooltipVe}[data-popper-placement^="right"] ${tooltipArrow}::before`, {
	right: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight} calc(${varBsTooltipArrowWidth} * 0.5) 0`,
	borderRightColor: varBsTooltipBg,
})

globalStyle(`${bootstrapScope}${tooltipVe}[data-popper-placement^="bottom"] ${tooltipArrow}`, {
	top: `calc(-1 * ${varBsTooltipArrowHeight})`,
})
globalStyle(`${bootstrapScope}${tooltipVe}[data-popper-placement^="bottom"] ${tooltipArrow}::before`, {
	bottom: '-1px',
	borderWidth: `0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderBottomColor: varBsTooltipBg,
})

globalStyle(`${bootstrapScope}${tooltipVe}[data-popper-placement^="left"] ${tooltipArrow}`, {
	right: `calc(-1 * ${varBsTooltipArrowHeight})`,
	width: varBsTooltipArrowHeight,
	height: varBsTooltipArrowWidth,
})
globalStyle(`${bootstrapScope}${tooltipVe}[data-popper-placement^="left"] ${tooltipArrow}::before`, {
	left: '-1px',
	borderWidth: `calc(${varBsTooltipArrowWidth} * 0.5) 0 calc(${varBsTooltipArrowWidth} * 0.5) ${varBsTooltipArrowHeight}`,
	borderLeftColor: varBsTooltipBg,
})

globalStyle(`${bootstrapScope}${tooltipInner}`, {
	maxWidth: varBsTooltipMaxWidth,
	padding: `${varBsTooltipPaddingY} ${varBsTooltipPaddingX}`,
	color: varBsTooltipColor,
	textAlign: 'center',
	backgroundColor: varBsTooltipBg,
	borderRadius: varBsTooltipBorderRadius,
})

globalStyle(`${bootstrapScope}${frame}`, {
	display: 'flex',
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor}`,
	height: '16em',
})

globalStyle(`${bootstrapScope}${frameColumn}`, {
	flexDirection: 'column',
	alignItems: 'center',
})

globalStyle(`${bootstrapScope}${frameRow}`, {
	flexDirection: 'row',
	alignItems: 'center',
})

globalStyle(`${bootstrapScope}${justifyCenter}`, {
	justifyContent: 'center',
})

globalStyle(`${bootstrapScope}${justifyEnd}`, {
	justifyContent: 'flex-end',
})

globalStyle(`${bootstrapScope}${justifyStart}`, {
	justifyContent: 'flex-start',
})
