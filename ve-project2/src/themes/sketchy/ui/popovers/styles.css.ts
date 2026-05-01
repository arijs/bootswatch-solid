import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderStyle,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsSecondaryBg,
} from '../../../../theme-contract/_vars.css'
import {
	bsPopoverAuto,
	bsPopoverBottom,
	bsPopoverEnd,
	bsPopoverStart,
	bsPopoverTop,
	frame,
	frameColumn,
	frameRow,
	justifyEnd,
	justifyStart,
	popoverArrow,
	popoverBody,
	popoverHeader,
	popoverVe,
} from '../../../../theme-contract/ui/popovers/contract.css'
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
import { sketchyScope } from '../../scope.css'
import { h3 } from '../../../../theme-contract/contents/contract.css'

// Sketchy-specific overrides
const sketchyPopoverBorderColor = '#333'
const sketchyPopoverBorderRadius = '45px 85px 15px 25px / 15px 10px 35px 555px'

globalStyle(`${sketchyScope}${popoverVe}`, {
	vars: {
		[varBsPopoverZindex]: '1070',
		[varBsPopoverMaxWidth]: '276px',
		[varBsPopoverFontSize]: '0.875rem',
		[varBsPopoverBg]: varBsBodyBg,
		[varBsPopoverBorderWidth]: varBsBorderWidth,
		[varBsPopoverBorderColor]: sketchyPopoverBorderColor,
		[varBsPopoverBorderRadius]: sketchyPopoverBorderRadius,
		[varBsPopoverInnerBorderRadius]: `calc(${sketchyPopoverBorderRadius} - ${varBsBorderWidth})`,
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
	fontFamily: "'Neucha', cursive",
	fontStyle: 'normal',
	fontWeight: 400,
	lineHeight: 1.5,
	textAlign: 'left',
	textDecoration: 'none',
	textShadow: 'none',
	textTransform: 'none',
	letterSpacing: 'normal',
	wordBreak: 'normal',
	whiteSpace: 'normal',
	wordSpacing: 'normal',
	fontSize: varBsPopoverFontSize,
	wordWrap: 'break-word',
	backgroundColor: varBsPopoverBg,
	backgroundClip: 'padding-box',
	border: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderRadius: varBsPopoverBorderRadius,
	padding: 0,
})

globalStyle(`${sketchyScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${sketchyScope}${popoverArrow}::before, ${sketchyScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(
	`${sketchyScope}${bsPopoverTop} > ${popoverArrow}, ${sketchyScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}`,
	{ bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${sketchyScope}${bsPopoverTop} > ${popoverArrow}::before, ${sketchyScope}${bsPopoverTop} > ${popoverArrow}::after, ${sketchyScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before, ${sketchyScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0` },
)
globalStyle(
	`${sketchyScope}${bsPopoverTop} > ${popoverArrow}::before, ${sketchyScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before`,
	{ bottom: 0, borderTopColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${sketchyScope}${bsPopoverTop} > ${popoverArrow}::after, ${sketchyScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ bottom: varBsPopoverBorderWidth, borderTopColor: varBsPopoverBg },
)

globalStyle(
	`${sketchyScope}${bsPopoverEnd} > ${popoverArrow}, ${sketchyScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}`,
	{
		left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${sketchyScope}${bsPopoverEnd} > ${popoverArrow}::before, ${sketchyScope}${bsPopoverEnd} > ${popoverArrow}::after, ${sketchyScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before, ${sketchyScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{ borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0` },
)
globalStyle(
	`${sketchyScope}${bsPopoverEnd} > ${popoverArrow}::before, ${sketchyScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before`,
	{ left: 0, borderRightColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${sketchyScope}${bsPopoverEnd} > ${popoverArrow}::after, ${sketchyScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{ left: varBsPopoverBorderWidth, borderRightColor: varBsPopoverBg },
)

globalStyle(
	`${sketchyScope}${bsPopoverBottom} > ${popoverArrow}, ${sketchyScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}`,
	{ top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${sketchyScope}${bsPopoverBottom} > ${popoverArrow}::before, ${sketchyScope}${bsPopoverBottom} > ${popoverArrow}::after, ${sketchyScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before, ${sketchyScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}` },
)
globalStyle(
	`${sketchyScope}${bsPopoverBottom} > ${popoverArrow}::before, ${sketchyScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before`,
	{ top: 0, borderBottomColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${sketchyScope}${bsPopoverBottom} > ${popoverArrow}::after, ${sketchyScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ top: varBsPopoverBorderWidth, borderBottomColor: varBsPopoverBg },
)

globalStyle(
	`${sketchyScope}${bsPopoverStart} > ${popoverArrow}, ${sketchyScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}`,
	{
		right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${sketchyScope}${bsPopoverStart} > ${popoverArrow}::before, ${sketchyScope}${bsPopoverStart} > ${popoverArrow}::after, ${sketchyScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before, ${sketchyScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{ borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}` },
)
globalStyle(
	`${sketchyScope}${bsPopoverStart} > ${popoverArrow}::before, ${sketchyScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before`,
	{ right: 0, borderLeftColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${sketchyScope}${bsPopoverStart} > ${popoverArrow}::after, ${sketchyScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{ right: varBsPopoverBorderWidth, borderLeftColor: varBsPopoverBg },
)

globalStyle(`${sketchyScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: 500,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

globalStyle(`${sketchyScope}${popoverHeader}${h3}`, {
	marginBottom: '0',
	lineHeight: '1.2',
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
})

globalStyle(`${sketchyScope}${popoverHeader}:empty`, {
	display: 'none',
})

globalStyle(`${sketchyScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})

globalStyle(`${sketchyScope}${frame}`, {
	display: 'flex',
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor}`,
	height: '16em',
})

globalStyle(`${sketchyScope}${frameColumn}`, {
	flexDirection: 'column',
	alignItems: 'center',
})

globalStyle(`${sketchyScope}${frameRow}`, {
	flexDirection: 'row',
	alignItems: 'center',
})

globalStyle(`${sketchyScope}${justifyEnd}`, {
	justifyContent: 'flex-end',
})

globalStyle(`${sketchyScope}${justifyStart}`, {
	justifyContent: 'flex-start',
})

globalStyle(`${sketchyScope}${bsPopoverAuto}[data-popper-reference-hidden='true']`, {
	display: 'none',
})
