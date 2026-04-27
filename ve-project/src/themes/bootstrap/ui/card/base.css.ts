import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsGutterX,
	varBsGutterY,
	varBsLinkColorRgb,
	varBsLinkHoverColorRgb,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import {
	varBsCardBg,
	varBsCardBorderColor,
	varBsCardBorderRadius,
	varBsCardBorderWidth,
	varBsCardBoxShadow,
	varBsCardCapBg,
	varBsCardCapColor,
	varBsCardCapPaddingX,
	varBsCardCapPaddingY,
	varBsCardColor,
	varBsCardGroupMargin,
	varBsCardHeight,
	varBsCardImgOverlayPadding,
	varBsCardInnerBorderRadius,
	varBsCardSpacerX,
	varBsCardSpacerY,
	varBsCardSubtitleColor,
	varBsCardTitleColor,
	varBsCardTitleSpacerY,
} from '../../../../theme-contract/ui/card/_vars.css'
import { listGroup } from '../list-group/base.css'

const cardRootVars = {
	[varBsCardSpacerY]: '1rem',
	[varBsCardSpacerX]: '1rem',
	[varBsCardTitleSpacerY]: '0.5rem',
	[varBsCardTitleColor]: '',
	[varBsCardSubtitleColor]: '',
	[varBsCardBorderWidth]: varBsBorderWidth,
	[varBsCardBorderColor]: varBsBorderColorTranslucent,
	[varBsCardBorderRadius]: varBsBorderRadius,
	[varBsCardBoxShadow]: '',
	[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - (${varBsBorderWidth}))`,
	[varBsCardCapPaddingY]: '0.5rem',
	[varBsCardCapPaddingX]: '1rem',
	[varBsCardCapBg]: `rgba(${varBsBodyColorRgb}, 0.03)`,
	[varBsCardCapColor]: '',
	[varBsCardHeight]: '',
	[varBsCardColor]: '',
	[varBsCardBg]: varBsBodyBg,
	[varBsCardImgOverlayPadding]: '1rem',
	[varBsCardGroupMargin]: '0.75rem',
}

export const cardExample = style({
	position: 'relative',
	overflowX: 'hidden',
})

export const cardGridRow = style({
	display: 'grid',
	gridTemplateColumns: 'minmax(0, 1fr)',
	gap: '1.5rem',
	'@media': {
		'(min-width: 768px)': {
			gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		},
	},
})

export const card = style({
	vars: cardRootVars,
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	minWidth: '0',
	height: varBsCardHeight,
	color: varBsBodyColor,
	wordWrap: 'break-word',
	backgroundColor: varBsCardBg,
	backgroundClip: 'border-box',
	border: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
	borderRadius: varBsCardBorderRadius,
})

globalStyle(`${card} > hr`, {
	marginRight: '0',
	marginLeft: '0',
})

globalStyle(`${card} > ${listGroup}`, {
	borderTop: 'inherit',
	borderBottom: 'inherit',
})

globalStyle(`${card} > ${listGroup}:first-child`, {
	borderTopWidth: '0',
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${card} > ${listGroup}:last-child`, {
	borderBottomWidth: '0',
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

export const cardBody = style({
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

export const cardTitle = style({
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

export const cardText = style({})

globalStyle(`${cardText}:last-child`, {
	marginBottom: '0',
})

export const cardLink = style({
	color: `rgba(${varBsLinkColorRgb}, var(--bs-link-opacity, 1))`,
	textDecoration: 'underline',
	selectors: {
		'&:hover': {
			color: `rgba(${varBsLinkHoverColorRgb}, var(--bs-link-opacity, 1))`,
		},
	},
})

globalStyle(`${cardLink} + ${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

export const cardHeader = style({
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: '0',
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

export const cardFooter = style({
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

export const cardImgTop = style({
	width: '100%',
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

export const cardRow = style({
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '0',
	},
	display: 'flex',
	flexWrap: 'wrap',
	marginTop: `calc(-1 * ${varBsGutterY})`,
	marginRight: `calc(-0.5 * ${varBsGutterX})`,
	marginLeft: `calc(-0.5 * ${varBsGutterX})`,
})

globalStyle(`${cardRow} > *`, {
	flexShrink: '0',
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

export const cardG0 = style({
	vars: {
		[varBsGutterX]: '0',
		[varBsGutterY]: '0',
	},
})

export const cardColMd4 = style({
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '33.33333333%',
		},
	},
})

export const cardColMd8 = style({
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '66.66666667%',
		},
	},
})

export const textMuted = style({
	color: `${varBsSecondaryColor} !important`,
})
