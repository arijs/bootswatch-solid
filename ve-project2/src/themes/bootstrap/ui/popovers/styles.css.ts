import { globalStyle } from '@vanilla-extract/css'
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
import { bootstrapScope } from '../../scope.css'

globalStyle(`${bootstrapScope}${popoverVe}`, {
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

globalStyle(`${bootstrapScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${bootstrapScope}${popoverArrow}::before, ${bootstrapScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(
	`${bootstrapScope}${bsPopoverTop} > ${popoverArrow}, ${bootstrapScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}`,
	{ bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${bootstrapScope}${bsPopoverTop} > ${popoverArrow}::before, ${bootstrapScope}${bsPopoverTop} > ${popoverArrow}::after, ${bootstrapScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before, ${bootstrapScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0` },
)
globalStyle(
	`${bootstrapScope}${bsPopoverTop} > ${popoverArrow}::before, ${bootstrapScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before`,
	{ bottom: 0, borderTopColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${bootstrapScope}${bsPopoverTop} > ${popoverArrow}::after, ${bootstrapScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ bottom: varBsPopoverBorderWidth, borderTopColor: varBsPopoverBg },
)

globalStyle(
	`${bootstrapScope}${bsPopoverEnd} > ${popoverArrow}, ${bootstrapScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}`,
	{
		left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${bootstrapScope}${bsPopoverEnd} > ${popoverArrow}::before, ${bootstrapScope}${bsPopoverEnd} > ${popoverArrow}::after, ${bootstrapScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before, ${bootstrapScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	},
)
globalStyle(
	`${bootstrapScope}${bsPopoverEnd} > ${popoverArrow}::before, ${bootstrapScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before`,
	{ left: 0, borderRightColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${bootstrapScope}${bsPopoverEnd} > ${popoverArrow}::after, ${bootstrapScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{ left: varBsPopoverBorderWidth, borderRightColor: varBsPopoverBg },
)

globalStyle(
	`${bootstrapScope}${bsPopoverBottom} > ${popoverArrow}, ${bootstrapScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}`,
	{ top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${bootstrapScope}${bsPopoverBottom} > ${popoverArrow}::before, ${bootstrapScope}${bsPopoverBottom} > ${popoverArrow}::after, ${bootstrapScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before, ${bootstrapScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}` },
)
globalStyle(
	`${bootstrapScope}${bsPopoverBottom} > ${popoverArrow}::before, ${bootstrapScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before`,
	{ top: 0, borderBottomColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${bootstrapScope}${bsPopoverBottom} > ${popoverArrow}::after, ${bootstrapScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ top: varBsPopoverBorderWidth, borderBottomColor: varBsPopoverBg },
)

globalStyle(
	`${bootstrapScope}${bsPopoverStart} > ${popoverArrow}, ${bootstrapScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}`,
	{
		right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${bootstrapScope}${bsPopoverStart} > ${popoverArrow}::before, ${bootstrapScope}${bsPopoverStart} > ${popoverArrow}::after, ${bootstrapScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before, ${bootstrapScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
	},
)
globalStyle(
	`${bootstrapScope}${bsPopoverStart} > ${popoverArrow}::before, ${bootstrapScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before`,
	{ right: 0, borderLeftColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${bootstrapScope}${bsPopoverStart} > ${popoverArrow}::after, ${bootstrapScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{ right: varBsPopoverBorderWidth, borderLeftColor: varBsPopoverBg },
)

globalStyle(`${bootstrapScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: 0,
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

globalStyle(`${bootstrapScope}${justifyEnd}`, {
	justifyContent: 'flex-end',
})

globalStyle(`${bootstrapScope}${justifyStart}`, {
	justifyContent: 'flex-start',
})

globalStyle(`${bootstrapScope}${bsPopoverAuto}[data-popper-reference-hidden='true']`, {
	display: 'none',
})
