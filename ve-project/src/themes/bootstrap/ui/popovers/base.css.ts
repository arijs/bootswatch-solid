import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderColorTranslucent,
	varBsBorderRadiusLg,
	varBsBorderStyle,
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

export const popoverClass = style({
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
})

// Placement marker classes -- for manual placement.
// Popper.js auto-placement is scoped via data-popper-placement attribute below.
export const bsPopoverTop = style({})
export const bsPopoverEnd = style({})
export const bsPopoverBottom = style({})
export const bsPopoverStart = style({})
export const bsPopoverAuto = style({})

export const popoverArrow = style({
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${popoverArrow}::before, ${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: 0,
})

// top
globalStyle(
	`${bsPopoverTop} > ${popoverArrow}, ${popoverClass}[data-popper-placement^="top"] > ${popoverArrow}`,
	{ bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${bsPopoverTop} > ${popoverArrow}::before, ${bsPopoverTop} > ${popoverArrow}::after, ${popoverClass}[data-popper-placement^="top"] > ${popoverArrow}::before, ${popoverClass}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0` },
)
globalStyle(
	`${bsPopoverTop} > ${popoverArrow}::before, ${popoverClass}[data-popper-placement^="top"] > ${popoverArrow}::before`,
	{ bottom: 0, borderTopColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${bsPopoverTop} > ${popoverArrow}::after, ${popoverClass}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ bottom: varBsPopoverBorderWidth, borderTopColor: varBsPopoverBg },
)

// end (right)
globalStyle(
	`${bsPopoverEnd} > ${popoverArrow}, ${popoverClass}[data-popper-placement^="right"] > ${popoverArrow}`,
	{
		left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${bsPopoverEnd} > ${popoverArrow}::before, ${bsPopoverEnd} > ${popoverArrow}::after, ${popoverClass}[data-popper-placement^="right"] > ${popoverArrow}::before, ${popoverClass}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	},
)
globalStyle(
	`${bsPopoverEnd} > ${popoverArrow}::before, ${popoverClass}[data-popper-placement^="right"] > ${popoverArrow}::before`,
	{ left: 0, borderRightColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${bsPopoverEnd} > ${popoverArrow}::after, ${popoverClass}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{ left: varBsPopoverBorderWidth, borderRightColor: varBsPopoverBg },
)

// bottom
globalStyle(
	`${bsPopoverBottom} > ${popoverArrow}, ${popoverClass}[data-popper-placement^="bottom"] > ${popoverArrow}`,
	{ top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${bsPopoverBottom} > ${popoverArrow}::before, ${bsPopoverBottom} > ${popoverArrow}::after, ${popoverClass}[data-popper-placement^="bottom"] > ${popoverArrow}::before, ${popoverClass}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}` },
)
globalStyle(
	`${bsPopoverBottom} > ${popoverArrow}::before, ${popoverClass}[data-popper-placement^="bottom"] > ${popoverArrow}::before`,
	{ top: 0, borderBottomColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${bsPopoverBottom} > ${popoverArrow}::after, ${popoverClass}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ top: varBsPopoverBorderWidth, borderBottomColor: varBsPopoverBg },
)

// start (left)
globalStyle(
	`${bsPopoverStart} > ${popoverArrow}, ${popoverClass}[data-popper-placement^="left"] > ${popoverArrow}`,
	{
		right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${bsPopoverStart} > ${popoverArrow}::before, ${bsPopoverStart} > ${popoverArrow}::after, ${popoverClass}[data-popper-placement^="left"] > ${popoverArrow}::before, ${popoverClass}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
	},
)
globalStyle(
	`${bsPopoverStart} > ${popoverArrow}::before, ${popoverClass}[data-popper-placement^="left"] > ${popoverArrow}::before`,
	{ right: 0, borderLeftColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${bsPopoverStart} > ${popoverArrow}::after, ${popoverClass}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{ right: varBsPopoverBorderWidth, borderLeftColor: varBsPopoverBg },
)

export const popoverHeader = style({
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

globalStyle(`${popoverHeader}:empty`, {
	display: 'none',
})

export const popoverBody = style({
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
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

export const justifyEnd = style({
	justifyContent: 'flex-end',
})

export const justifyStart = style({
	justifyContent: 'flex-start',
})
