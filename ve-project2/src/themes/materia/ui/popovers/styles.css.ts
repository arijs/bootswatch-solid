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
import { h3 } from '../../../../theme-contract/contents/contract.css'
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
import { materiaScope } from '../../scope.css'

globalStyle(`${materiaScope}${popoverVe}`, {
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

globalStyle(`${materiaScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${materiaScope}${popoverArrow}::before, ${materiaScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(
	`${materiaScope}${bsPopoverTop} > ${popoverArrow}, ${materiaScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}`,
	{ bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${materiaScope}${bsPopoverTop} > ${popoverArrow}::before, ${materiaScope}${bsPopoverTop} > ${popoverArrow}::after, ${materiaScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before, ${materiaScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0` },
)
globalStyle(
	`${materiaScope}${bsPopoverTop} > ${popoverArrow}::before, ${materiaScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before`,
	{ bottom: 0, borderTopColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${materiaScope}${bsPopoverTop} > ${popoverArrow}::after, ${materiaScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ bottom: varBsPopoverBorderWidth, borderTopColor: varBsPopoverBg },
)

globalStyle(
	`${materiaScope}${bsPopoverEnd} > ${popoverArrow}, ${materiaScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}`,
	{
		left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${materiaScope}${bsPopoverEnd} > ${popoverArrow}::before, ${materiaScope}${bsPopoverEnd} > ${popoverArrow}::after, ${materiaScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before, ${materiaScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	},
)
globalStyle(
	`${materiaScope}${bsPopoverEnd} > ${popoverArrow}::before, ${materiaScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before`,
	{ left: 0, borderRightColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${materiaScope}${bsPopoverEnd} > ${popoverArrow}::after, ${materiaScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{ left: varBsPopoverBorderWidth, borderRightColor: varBsPopoverBg },
)

globalStyle(
	`${materiaScope}${bsPopoverBottom} > ${popoverArrow}, ${materiaScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}`,
	{ top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${materiaScope}${bsPopoverBottom} > ${popoverArrow}::before, ${materiaScope}${bsPopoverBottom} > ${popoverArrow}::after, ${materiaScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before, ${materiaScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}` },
)
globalStyle(
	`${materiaScope}${bsPopoverBottom} > ${popoverArrow}::before, ${materiaScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before`,
	{ top: 0, borderBottomColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${materiaScope}${bsPopoverBottom} > ${popoverArrow}::after, ${materiaScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ top: varBsPopoverBorderWidth, borderBottomColor: varBsPopoverBg },
)

globalStyle(
	`${materiaScope}${bsPopoverStart} > ${popoverArrow}, ${materiaScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}`,
	{
		right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${materiaScope}${bsPopoverStart} > ${popoverArrow}::before, ${materiaScope}${bsPopoverStart} > ${popoverArrow}::after, ${materiaScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before, ${materiaScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
	},
)
globalStyle(
	`${materiaScope}${bsPopoverStart} > ${popoverArrow}::before, ${materiaScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before`,
	{ right: 0, borderLeftColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${materiaScope}${bsPopoverStart} > ${popoverArrow}::after, ${materiaScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{ right: varBsPopoverBorderWidth, borderLeftColor: varBsPopoverBg },
)

globalStyle(`${materiaScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderRadius: `${varBsPopoverInnerBorderRadius} ${varBsPopoverInnerBorderRadius} 0 0`,
})

globalStyle(`${materiaScope}${popoverHeader} + ${popoverBody}`, {
	paddingTop: 0,
})

globalStyle(`${materiaScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})

globalStyle(`${materiaScope}${h3}`, {
	fontSize: 'inherit',
})

globalStyle(`${materiaScope}${frame}`, {
	display: 'flex',
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor}`,
	height: '16em',
})

globalStyle(`${materiaScope}${frameColumn}`, {
	flexDirection: 'column',
	alignItems: 'center',
})

globalStyle(`${materiaScope}${frameRow}`, {
	flexDirection: 'row',
	alignItems: 'center',
})

globalStyle(`${materiaScope}${justifyEnd}`, {
	justifyContent: 'flex-end',
})

globalStyle(`${materiaScope}${justifyStart}`, {
	justifyContent: 'flex-start',
})

