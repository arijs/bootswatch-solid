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
import { sandstoneScope } from '../../scope.css'

globalStyle(`${sandstoneScope}${popoverVe}`, {
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

globalStyle(`${sandstoneScope}${popoverArrow}`, {
	display: 'block',
	width: varBsPopoverArrowWidth,
	height: varBsPopoverArrowHeight,
})

globalStyle(`${sandstoneScope}${popoverArrow}::before, ${sandstoneScope}${popoverArrow}::after`, {
	position: 'absolute',
	display: 'block',
	content: '',
	borderColor: 'transparent',
	borderStyle: 'solid',
	borderWidth: 0,
})

globalStyle(
	`${sandstoneScope}${bsPopoverTop} > ${popoverArrow}, ${sandstoneScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}`,
	{ bottom: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${sandstoneScope}${bsPopoverTop} > ${popoverArrow}::before, ${sandstoneScope}${bsPopoverTop} > ${popoverArrow}::after, ${sandstoneScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before, ${sandstoneScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ borderWidth: `${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0` },
)
globalStyle(
	`${sandstoneScope}${bsPopoverTop} > ${popoverArrow}::before, ${sandstoneScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::before`,
	{ bottom: 0, borderTopColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${sandstoneScope}${bsPopoverTop} > ${popoverArrow}::after, ${sandstoneScope}${popoverVe}[data-popper-placement^="top"] > ${popoverArrow}::after`,
	{ bottom: varBsPopoverBorderWidth, borderTopColor: varBsPopoverBg },
)

globalStyle(
	`${sandstoneScope}${bsPopoverEnd} > ${popoverArrow}, ${sandstoneScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}`,
	{
		left: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${sandstoneScope}${bsPopoverEnd} > ${popoverArrow}::before, ${sandstoneScope}${bsPopoverEnd} > ${popoverArrow}::after, ${sandstoneScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before, ${sandstoneScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight} calc(${varBsPopoverArrowWidth} * 0.5) 0`,
	},
)
globalStyle(
	`${sandstoneScope}${bsPopoverEnd} > ${popoverArrow}::before, ${sandstoneScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::before`,
	{ left: 0, borderRightColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${sandstoneScope}${bsPopoverEnd} > ${popoverArrow}::after, ${sandstoneScope}${popoverVe}[data-popper-placement^="right"] > ${popoverArrow}::after`,
	{ left: varBsPopoverBorderWidth, borderRightColor: varBsPopoverBg },
)

globalStyle(
	`${sandstoneScope}${bsPopoverBottom} > ${popoverArrow}, ${sandstoneScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}`,
	{ top: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})` },
)
globalStyle(
	`${sandstoneScope}${bsPopoverBottom} > ${popoverArrow}::before, ${sandstoneScope}${bsPopoverBottom} > ${popoverArrow}::after, ${sandstoneScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before, ${sandstoneScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ borderWidth: `0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}` },
)
globalStyle(
	`${sandstoneScope}${bsPopoverBottom} > ${popoverArrow}::before, ${sandstoneScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::before`,
	{ top: 0, borderBottomColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${sandstoneScope}${bsPopoverBottom} > ${popoverArrow}::after, ${sandstoneScope}${popoverVe}[data-popper-placement^="bottom"] > ${popoverArrow}::after`,
	{ top: varBsPopoverBorderWidth, borderBottomColor: varBsPopoverBg },
)

globalStyle(
	`${sandstoneScope}${bsPopoverStart} > ${popoverArrow}, ${sandstoneScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}`,
	{
		right: `calc(-1 * (${varBsPopoverArrowHeight}) - ${varBsPopoverBorderWidth})`,
		width: varBsPopoverArrowHeight,
		height: varBsPopoverArrowWidth,
	},
)
globalStyle(
	`${sandstoneScope}${bsPopoverStart} > ${popoverArrow}::before, ${sandstoneScope}${bsPopoverStart} > ${popoverArrow}::after, ${sandstoneScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before, ${sandstoneScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{
		borderWidth: `calc(${varBsPopoverArrowWidth} * 0.5) 0 calc(${varBsPopoverArrowWidth} * 0.5) ${varBsPopoverArrowHeight}`,
	},
)
globalStyle(
	`${sandstoneScope}${bsPopoverStart} > ${popoverArrow}::before, ${sandstoneScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::before`,
	{ right: 0, borderLeftColor: varBsPopoverArrowBorder },
)
globalStyle(
	`${sandstoneScope}${bsPopoverStart} > ${popoverArrow}::after, ${sandstoneScope}${popoverVe}[data-popper-placement^="left"] > ${popoverArrow}::after`,
	{ right: varBsPopoverBorderWidth, borderLeftColor: varBsPopoverBg },
)

globalStyle(`${sandstoneScope}${popoverHeader}`, {
	padding: `${varBsPopoverHeaderPaddingY} ${varBsPopoverHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: varBsPopoverHeaderFontSize,
	color: varBsPopoverHeaderColor,
	backgroundColor: varBsPopoverHeaderBg,
	borderBottom: `${varBsPopoverBorderWidth} solid ${varBsPopoverBorderColor}`,
	borderTopLeftRadius: varBsPopoverInnerBorderRadius,
	borderTopRightRadius: varBsPopoverInnerBorderRadius,
})

globalStyle(`${sandstoneScope}${popoverHeader}:empty`, {
	display: 'none',
})

// When popoverHeader and h3 are both on the same element the h3 heading rule
// (fontSize: 1.75rem, marginBottom: 0.5rem, fontWeight: 500, lineHeight: 1.2)
// can win over popoverHeader at equal specificity depending on load order.
// This combined selector has higher specificity and restores popover-header values.
globalStyle(`${sandstoneScope}${popoverHeader}${h3}`, {
	fontSize: varBsPopoverHeaderFontSize,
	marginBottom: 0,
})

globalStyle(`${sandstoneScope}${popoverBody}`, {
	padding: `${varBsPopoverBodyPaddingY} ${varBsPopoverBodyPaddingX}`,
	color: varBsPopoverBodyColor,
})

globalStyle(`${sandstoneScope}${frame}`, {
	display: 'flex',
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor}`,
	height: '16em',
})

globalStyle(`${sandstoneScope}${frameColumn}`, {
	flexDirection: 'column',
	alignItems: 'center',
})

globalStyle(`${sandstoneScope}${frameRow}`, {
	flexDirection: 'row',
	alignItems: 'center',
})

globalStyle(`${sandstoneScope}${justifyEnd}`, {
	justifyContent: 'flex-end',
})

globalStyle(`${sandstoneScope}${justifyStart}`, {
	justifyContent: 'flex-start',
})

globalStyle(`${sandstoneScope}${bsPopoverAuto}[data-popper-reference-hidden='true']`, {
	display: 'none',
})

