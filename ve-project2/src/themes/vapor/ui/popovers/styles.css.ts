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
import { vaporScope } from '../../scope.css'

globalStyle(`${vaporScope}${popoverVe}`, {
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

globalStyle(`${vaporScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${vaporScope}${popoverArrow}::before, ${vaporScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(
	`${vaporScope}${bsPopoverTop} > ${popoverArrow}, ${vaporScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}`,
	{ bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${vaporScope}${bsPopoverTop} > ${popoverArrow}::before, ${vaporScope}${bsPopoverTop} > ${popoverArrow}::after, ${vaporScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before, ${vaporScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0` },
)
globalStyle(
	`${vaporScope}${bsPopoverTop} > ${popoverArrow}::before, ${vaporScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before`,
	{ bottom: 0, borderTopColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${vaporScope}${bsPopoverTop} > ${popoverArrow}::after, ${vaporScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ bottom: varBsPopoverBorderWidth, borderTopColor: varBsPopoverBg },
)

globalStyle(
	`${vaporScope}${bsPopoverEnd} > ${popoverArrow}, ${vaporScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}`,
	{
		left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${vaporScope}${bsPopoverEnd} > ${popoverArrow}::before, ${vaporScope}${bsPopoverEnd} > ${popoverArrow}::after, ${vaporScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before, ${vaporScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	},
)
globalStyle(
	`${vaporScope}${bsPopoverEnd} > ${popoverArrow}::before, ${vaporScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before`,
	{ left: 0, borderRightColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${vaporScope}${bsPopoverEnd} > ${popoverArrow}::after, ${vaporScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{ left: varBsPopoverBorderWidth, borderRightColor: varBsPopoverBg },
)

globalStyle(
	`${vaporScope}${bsPopoverBottom} > ${popoverArrow}, ${vaporScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}`,
	{ top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${vaporScope}${bsPopoverBottom} > ${popoverArrow}::before, ${vaporScope}${bsPopoverBottom} > ${popoverArrow}::after, ${vaporScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before, ${vaporScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}` },
)
globalStyle(
	`${vaporScope}${bsPopoverBottom} > ${popoverArrow}::before, ${vaporScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before`,
	{ top: 0, borderBottomColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${vaporScope}${bsPopoverBottom} > ${popoverArrow}::after, ${vaporScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ top: varBsPopoverBorderWidth, borderBottomColor: varBsPopoverBg },
)

globalStyle(
	`${vaporScope}${bsPopoverStart} > ${popoverArrow}, ${vaporScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}`,
	{
		right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${vaporScope}${bsPopoverStart} > ${popoverArrow}::before, ${vaporScope}${bsPopoverStart} > ${popoverArrow}::after, ${vaporScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before, ${vaporScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
	},
)
globalStyle(
	`${vaporScope}${bsPopoverStart} > ${popoverArrow}::before, ${vaporScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before`,
	{ right: 0, borderLeftColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${vaporScope}${bsPopoverStart} > ${popoverArrow}::after, ${vaporScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{ right: varBsPopoverBorderWidth, borderLeftColor: varBsPopoverBg },
)

globalStyle(`${vaporScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

globalStyle(`${vaporScope}${popoverHeader}:empty`, {
	display: 'none',
})

// When popoverHeader and h3 are both on the same element the h3 heading rule
// (fontSize: 1.75rem, marginBottom: 0.5rem, fontWeight: 500, lineHeight: 1.2)
// can win over popoverHeader at equal specificity depending on load order.
// This combined selector has higher specificity and restores popover-header values.
globalStyle(`${vaporScope}${popoverHeader}${h3}`, {
	fontSize: varBsPopoverHeaderFontSize,
	marginBottom: 0,
	color: varBsPopoverHeaderColor,
})

globalStyle(`${vaporScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})

globalStyle(`${vaporScope}${frame}`, {
	display: 'flex',
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor}`,
	height: '16em',
})

globalStyle(`${vaporScope}${frameColumn}`, {
	flexDirection: 'column',
	alignItems: 'center',
})

globalStyle(`${vaporScope}${frameRow}`, {
	flexDirection: 'row',
	alignItems: 'center',
})

globalStyle(`${vaporScope}${justifyEnd}`, {
	justifyContent: 'flex-end',
})

globalStyle(`${vaporScope}${justifyStart}`, {
	justifyContent: 'flex-start',
})

globalStyle(`${vaporScope}${bsPopoverAuto}[data-popper-reference-hidden='true']`, {
	display: 'none',
})

globalStyle(`${vaporScope}${popoverVe}`, {
	vars: {
		[varBsPopoverBg]: '#6f42c1',
		[varBsPopoverHeaderColor]: '#fff',
		[varBsPopoverBodyColor]: '#fff',
	},
	boxShadow: '0 0 2rem rgba(111,66,193,0.4), 0 0 8rem rgba(111,66,193,0.3)',
	textShadow:
		'0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(
	`${vaporScope}${popoverVe} h1, ${vaporScope}${popoverVe} h2, ${vaporScope}${popoverVe} h3, ${vaporScope}${popoverVe} h4, ${vaporScope}${popoverVe} h5, ${vaporScope}${popoverVe} h6, ${vaporScope}${popoverVe} .h1, ${vaporScope}${popoverVe} .h2, ${vaporScope}${popoverVe} .h3, ${vaporScope}${popoverVe} .h4, ${vaporScope}${popoverVe} .h5, ${vaporScope}${popoverVe} .h6`,
	{
		textShadow:
			'0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
	},
)
