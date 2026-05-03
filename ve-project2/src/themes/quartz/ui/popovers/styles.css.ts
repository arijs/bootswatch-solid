import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderColorTranslucent,
	varBsBorderRadiusLg,
	varBsBorderStyle,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsFontSansSerif,
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
import { quartzScope } from '../../scope.css'

// Quartz: glass on popover
globalStyle(`${quartzScope}${popoverVe}`, {
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
		[varBsPopoverHeaderPaddingX]: '2rem',
		[varBsPopoverHeaderPaddingY]: '0.5rem',
		[varBsPopoverHeaderFontSize]: '1rem',
		[varBsPopoverHeaderColor]: 'inherit',
		[varBsPopoverHeaderBg]: 'transparent',
		[varBsPopoverBodyPaddingX]: '2rem',
		[varBsPopoverBodyPaddingY]: '1rem',
		[varBsPopoverBodyColor]: '#fff',
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
	border: 'none',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	backdropFilter: 'blur(5px)',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundClip: 'padding-box',
	borderRadius: varBsPopoverBorderRadius,
})

globalStyle(`${quartzScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${quartzScope}${popoverArrow}::before, ${quartzScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(
	`${quartzScope}${bsPopoverTop} > ${popoverArrow}, ${quartzScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}`,
	{ bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${quartzScope}${bsPopoverTop} > ${popoverArrow}::before, ${quartzScope}${bsPopoverTop} > ${popoverArrow}::after, ${quartzScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before, ${quartzScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0` },
)
globalStyle(
	`${quartzScope}${bsPopoverTop} > ${popoverArrow}::before, ${quartzScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before`,
	{ bottom: 0, borderTopColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${quartzScope}${bsPopoverTop} > ${popoverArrow}::after, ${quartzScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ bottom: varBsPopoverBorderWidth, borderTopColor: varBsPopoverBg },
)

globalStyle(
	`${quartzScope}${bsPopoverEnd} > ${popoverArrow}, ${quartzScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}`,
	{
		left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${quartzScope}${bsPopoverEnd} > ${popoverArrow}::before, ${quartzScope}${bsPopoverEnd} > ${popoverArrow}::after, ${quartzScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before, ${quartzScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	},
)
globalStyle(
	`${quartzScope}${bsPopoverEnd} > ${popoverArrow}::before, ${quartzScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before`,
	{ left: 0, borderRightColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${quartzScope}${bsPopoverEnd} > ${popoverArrow}::after, ${quartzScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{ left: varBsPopoverBorderWidth, borderRightColor: varBsPopoverBg },
)

globalStyle(
	`${quartzScope}${bsPopoverBottom} > ${popoverArrow}, ${quartzScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}`,
	{ top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${quartzScope}${bsPopoverBottom} > ${popoverArrow}::before, ${quartzScope}${bsPopoverBottom} > ${popoverArrow}::after, ${quartzScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before, ${quartzScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}` },
)
globalStyle(
	`${quartzScope}${bsPopoverBottom} > ${popoverArrow}::before, ${quartzScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before`,
	{ top: 0, borderBottomColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${quartzScope}${bsPopoverBottom} > ${popoverArrow}::after, ${quartzScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ top: varBsPopoverBorderWidth, borderBottomColor: varBsPopoverBg },
)

globalStyle(
	`${quartzScope}${bsPopoverStart} > ${popoverArrow}, ${quartzScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}`,
	{
		right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${quartzScope}${bsPopoverStart} > ${popoverArrow}::before, ${quartzScope}${bsPopoverStart} > ${popoverArrow}::after, ${quartzScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before, ${quartzScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
	},
)
globalStyle(
	`${quartzScope}${bsPopoverStart} > ${popoverArrow}::before, ${quartzScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before`,
	{ right: 0, borderLeftColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${quartzScope}${bsPopoverStart} > ${popoverArrow}::after, ${quartzScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{ right: varBsPopoverBorderWidth, borderLeftColor: varBsPopoverBg },
)

globalStyle(`${quartzScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid rgba(255, 255, 255, 0.2)`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

globalStyle(`${quartzScope}${popoverHeader}:empty`, {
	display: 'none',
})

globalStyle(`${quartzScope}${popoverHeader}${h3}`, {
	fontSize: varBsPopoverHeaderFontSize,
	fontWeight: 700,
	marginBottom: 0,
})

globalStyle(`${quartzScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})

globalStyle(`${quartzScope}${frame}`, {
	display: 'flex',
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor}`,
	height: '16em',
})

globalStyle(`${quartzScope}${frameColumn}`, {
	flexDirection: 'column',
	alignItems: 'center',
})

globalStyle(`${quartzScope}${frameRow}`, {
	flexDirection: 'row',
	alignItems: 'center',
})

globalStyle(`${quartzScope}${justifyEnd}`, {
	justifyContent: 'flex-end',
})

globalStyle(`${quartzScope}${justifyStart}`, {
	justifyContent: 'flex-start',
})

globalStyle(`${quartzScope}${bsPopoverAuto}[data-popper-reference-hidden='true']`, {
	display: 'none',
})
