import { globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderWidth,
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
	varBsCardImgOverlayPadding,
	varBsCardInnerBorderRadius,
	varBsCardSpacerX,
	varBsCardSpacerY,
	varBsCardSubtitleColor,
	varBsCardTitleColor,
	varBsCardTitleSpacerY,
} from '../../../../theme-contract/ui/card/_vars.css'
import { varBsCardHeight } from '../../../../theme-contract/utilities/generated/_vars.css'

import { horizontalRule } from '../../../../theme-contract/contents/basic/contract.css'

import { cardGroup, cardHeaderPills, cardImgOverlay } from '../../../../theme-contract/literal/contract.css'
import {
	card,
	cardBody,
	cardFooter,
	cardHeader,
	cardImg,
	cardImgBottom,
	cardImgTop,
	cardLink,
	cardSubtitle,
	cardText,
	cardTitle,
} from '../../../../theme-contract/ui/card/contract.css'
import { listGroup } from '../../../../theme-contract/ui/list-group/contract.css'

globalStyle(`${literaScope}${card}`, {
	vars: {
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
	},
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

globalStyle(`${literaScope}${card} > ${literaScope}${horizontalRule}`, {
	marginRight: '0',
	marginLeft: '0',
})

globalStyle(`${literaScope}${card} > ${literaScope}${listGroup} + ${literaScope}${cardFooter}`, {
	borderTop: '0',
})

globalStyle(`${literaScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

globalStyle(`${literaScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${literaScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: '0',
	color: varBsCardSubtitleColor,
})

globalStyle(`${literaScope}${cardText}:last-child`, {
	marginBottom: '0',
})

globalStyle(`${literaScope}${cardLink} + ${literaScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

globalStyle(`${literaScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: '0',
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${literaScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

globalStyle(`${literaScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${literaScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

globalStyle(`${literaScope}${cardHeaderPills}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
})

globalStyle(`${literaScope}${cardImgOverlay}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	padding: varBsCardImgOverlayPadding,
	borderRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${literaScope}${cardImg}`, {
	width: '100%',
})

globalStyle(`${literaScope}${cardImgTop}`, {
	width: '100%',
})

globalStyle(`${literaScope}${cardImgBottom}`, {
	width: '100%',
})

globalStyle(`${literaScope}${cardImg}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${literaScope}${cardImgTop}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${literaScope}${cardImg}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${literaScope}${cardImgBottom}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})

globalStyle(`${literaScope}${cardGroup}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexFlow: 'row wrap',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
			marginBottom: '0',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card} + ${literaScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
			borderLeft: '0',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}:not(:last-child) > ${literaScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}:not(:last-child) > ${literaScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}:not(:last-child) > ${literaScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}:not(:last-child) > ${literaScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}:not(:first-child) > ${literaScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}:not(:first-child) > ${literaScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}:not(:first-child) > ${literaScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${literaScope}${cardGroup} > ${literaScope}${card}:not(:first-child) > ${literaScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})
