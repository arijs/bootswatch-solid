import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
} from '../../../../theme-contract/_vars.css'
import {
	varBsCardBg,
	varBsCardBorderColor,
	varBsCardBorderRadius,
	varBsCardBorderWidth,
	varBsCardCapBg,
	varBsCardCapColor,
	varBsCardCapPaddingX,
	varBsCardCapPaddingY,
	varBsCardColor,
	varBsCardGroupMargin,
	varBsCardImgOverlayPadding,
	varBsCardInnerBorderRadius,
	varBsCardSpacerX,
	varBsCardSpacerY,
	varBsCardSubtitleColor,
	varBsCardTitleColor,
	varBsCardTitleSpacerY,
	varBsListGroupBg,
	varBsListGroupBorderColor,
	varBsListGroupBorderRadius,
	varBsListGroupBorderWidth,
	varBsListGroupColor,
	varBsListGroupItemPaddingX,
	varBsListGroupItemPaddingY,
} from '../../../../theme-contract/ui/card/_vars.css'
import {
	card,
	cardBody,
	cardFooter,
	cardHeader,
	cardHorizontalColBody,
	cardHorizontalColImg,
	cardHorizontalRow,
	cardImg,
	cardImgBottom,
	cardImgTop,
	cardLink,
	cardSubtitle,
	cardText,
	cardTitle,
} from '../../../../theme-contract/ui/card/contract.css'
import {
	listGroup,
	listGroupFlush,
	listGroupItem,
} from '../../../../theme-contract/ui/list-group/contract.css'
import { textMuted } from '../../../../theme-contract/utilities/contract.css'
import { quartzScope } from '../../scope.css'

// Glass mixin
const glassMixin = {
	border: 'none',
	boxShadow:
		'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage:
		'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	backdropFilter: 'blur(5px)',
} as const

// ── Card base ─────────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${card}`, {
	vars: {
		[varBsCardSpacerY]: '1.75rem',
		[varBsCardSpacerX]: '2rem',
		[varBsCardTitleSpacerY]: '1rem',
		[varBsCardTitleColor]: '',
		[varBsCardSubtitleColor]: '',
		[varBsCardBorderWidth]: varBsBorderWidth,
		[varBsCardBorderColor]: 'rgba(255, 255, 255, 0.2)',
		[varBsCardBorderRadius]: varBsBorderRadius,
		[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
		[varBsCardCapPaddingY]: '0.875rem',
		[varBsCardCapPaddingX]: '2rem',
		[varBsCardCapBg]: 'transparent',
		[varBsCardCapColor]: '#fff',
		[varBsCardColor]: '#fff',
		[varBsCardBg]: 'transparent',
		[varBsCardImgOverlayPadding]: '2rem',
		[varBsCardGroupMargin]: '0.75rem',
	},
	...glassMixin,
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	minWidth: 0,
	color: '#fff',
	wordWrap: 'break-word',
	backgroundClip: 'border-box',
	borderRadius: varBsCardBorderRadius,
})

globalStyle(`${quartzScope}${card} a`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card} ${textMuted}`, {
	color: 'rgba(255, 255, 255, 0.7) !important',
})

// ── Card > list-group integration ─────────────────────────────────────────────

globalStyle(`${quartzScope}${card} > ${listGroup}`, {
	borderTop: 'inherit',
	borderBottom: 'inherit',
})

globalStyle(`${quartzScope}${card} > ${listGroup}:first-child`, {
	borderTopWidth: 0,
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${card} > ${listGroup}:last-child`, {
	borderBottomWidth: 0,
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(
	`${quartzScope}${card} > ${cardHeader} + ${listGroup}, ${quartzScope}${card} > ${listGroup} + ${cardFooter}`,
	{ borderTop: 0 },
)

// ── Card body ─────────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

// ── Card title ────────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${quartzScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: 0,
	color: varBsCardSubtitleColor,
})

globalStyle(`${quartzScope}${cardText}:last-child`, {
	marginBottom: 0,
})

globalStyle(`${quartzScope}${cardLink} + ${quartzScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

// ── Card header ───────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: 0,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
	fontWeight: 700,
})

globalStyle(`${quartzScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

// ── Card footer ───────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${quartzScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

// ── Card images ───────────────────────────────────────────────────────────────

globalStyle(
	`${quartzScope}${cardImg}, ${quartzScope}${cardImgTop}, ${quartzScope}${cardImgBottom}`,
	{ width: '100%' },
)

globalStyle(`${quartzScope}${cardImg}, ${quartzScope}${cardImgTop}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${cardImg}, ${quartzScope}${cardImgBottom}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

// ── Horizontal card layout ────────────────────────────────────────────────────

globalStyle(`${quartzScope}${cardHorizontalRow}`, {
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${quartzScope}${cardHorizontalColImg}`, {
	overflow: 'hidden',
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 33.3333%',
			maxWidth: '33.3333%',
		},
	},
})

globalStyle(`${quartzScope}${cardHorizontalColBody}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 1 0',
			minWidth: 0,
		},
	},
})

// ── List group within card ────────────────────────────────────────────────────

globalStyle(`${quartzScope}${listGroup}`, {
	vars: {
		[varBsListGroupColor]: '#fff',
		[varBsListGroupBg]: varBsBodyBg,
		[varBsListGroupBorderColor]: varBsBorderColor,
		[varBsListGroupBorderWidth]: varBsBorderWidth,
		[varBsListGroupBorderRadius]: varBsBorderRadius,
		[varBsListGroupItemPaddingX]: '2rem',
		[varBsListGroupItemPaddingY]: '1rem',
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: 0,
	marginBottom: 0,
	borderRadius: varBsListGroupBorderRadius,
})

globalStyle(`${quartzScope}${listGroupFlush}`, {
	borderRadius: 0,
})

globalStyle(`${quartzScope}${listGroupFlush} > ${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${quartzScope}${listGroupFlush} > ${listGroupItem}:last-child`, {
	borderBottomWidth: 0,
})

globalStyle(`${quartzScope}${listGroupItem}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

globalStyle(`${quartzScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
})

globalStyle(`${quartzScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: 'inherit',
	borderBottomLeftRadius: 'inherit',
})
