import { globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
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
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'

import {
	cardDanger,
	cardDark,
	cardGroup,
	cardHeaderPills,
	cardImgOverlay,
	cardInfo,
	cardLight,
	cardPrimary,
	cardSecondary,
	cardSuccess,
	cardWarning,
} from '../../../../theme-contract/literal/contract.css'
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

globalStyle(`${morphScope}${card}`, {
	vars: {
		[varBsCardSpacerY]: '1.5rem',
		[varBsCardSpacerX]: '1.5rem',
		[varBsCardTitleSpacerY]: '0.5rem',
		[varBsCardTitleColor]: '',
		[varBsCardSubtitleColor]: '',
		[varBsCardBorderWidth]: varBsBorderWidth,
		[varBsCardBorderColor]: varBsBorderColorTranslucent,
		[varBsCardBorderRadius]: varBsBorderRadius,
		[varBsCardBoxShadow]: '',
		[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - (${varBsBorderWidth}))`,
		[varBsCardCapPaddingY]: '0.75rem',
		[varBsCardCapPaddingX]: '1.5rem',
		[varBsCardCapBg]: 'transparent',
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
	boxShadow: varBsCardBoxShadow,
})

globalStyle(`${morphScope}${card} > ${morphScope}${horizontalRule}`, {
	marginRight: '0',
	marginLeft: '0',
})

globalStyle(`${morphScope}${card} > ${morphScope}${listGroup} + ${morphScope}${cardFooter}`, {
	borderTop: '0',
})

globalStyle(`${morphScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

globalStyle(`${morphScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${morphScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: '0',
	color: varBsCardSubtitleColor,
})

globalStyle(`${morphScope}${cardText}:last-child`, {
	marginBottom: '0',
})

globalStyle(`${morphScope}${cardLink} + ${morphScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

globalStyle(`${morphScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: '0',
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${morphScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

globalStyle(`${morphScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${morphScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

globalStyle(`${morphScope}${cardHeaderPills}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
})

globalStyle(`${morphScope}${cardImgOverlay}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	padding: varBsCardImgOverlayPadding,
	borderRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${morphScope}${cardImg}`, {
	width: '100%',
})

globalStyle(`${morphScope}${cardImgTop}`, {
	width: '100%',
})

globalStyle(`${morphScope}${cardImgBottom}`, {
	width: '100%',
})

globalStyle(`${morphScope}${cardImg}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${morphScope}${cardImgTop}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${morphScope}${cardImg}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${morphScope}${cardImgBottom}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})

globalStyle(`${morphScope}${cardGroup}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexFlow: 'row wrap',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
			marginBottom: '0',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card} + ${morphScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
			borderLeft: '0',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}:not(:last-child) > ${morphScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}:not(:last-child) > ${morphScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}:not(:last-child) > ${morphScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}:not(:last-child) > ${morphScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}:not(:first-child) > ${morphScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}:not(:first-child) > ${morphScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}:not(:first-child) > ${morphScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${morphScope}${cardGroup} > ${morphScope}${card}:not(:first-child) > ${morphScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${morphScope}${card}`, {
	boxShadow: 'inset 2px 2px 6px rgba(109, 114, 121, 0.2), inset -3px -2px 4px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${morphScope}${cardPrimary}`, {
	boxShadow: 'inset 2px 2px 6px rgba(11, 28, 50, 0.05), inset -3px -2px 4px rgba(215, 232, 254, 0.2)',
})

globalStyle(`${morphScope}${cardSecondary}`, {
	boxShadow: 'inset 2px 2px 6px rgba(43, 45, 48, 0.05), inset -3px -2px 4px rgba(247, 249, 252, 0.2)',
})

globalStyle(`${morphScope}${cardSuccess}`, {
	boxShadow: 'inset 2px 2px 6px rgba(13, 41, 8, 0.05), inset -3px -2px 4px rgba(217, 245, 212, 0.2)',
})

globalStyle(`${morphScope}${cardInfo}`, {
	boxShadow: 'inset 2px 2px 6px rgba(18, 20, 49, 0.05), inset -3px -2px 4px rgba(222, 224, 253, 0.2)',
})

globalStyle(`${morphScope}${cardWarning}`, {
	boxShadow: 'inset 2px 2px 6px rgba(51, 39, 1, 0.05), inset -3px -2px 4px rgba(255, 243, 205, 0.2)',
})

globalStyle(`${morphScope}${cardDanger}`, {
	boxShadow: 'inset 2px 2px 6px rgba(46, 7, 8, 0.05), inset -3px -2px 4px rgba(250, 211, 212, 0.2)',
})

globalStyle(`${morphScope}${cardLight}`, {
	boxShadow: 'inset 2px 2px 6px rgba(48, 49, 50, 0.05), inset -3px -2px 4px rgba(252, 253, 254, 0.2)',
})

globalStyle(`${morphScope}${cardDark}`, {
	boxShadow: 'inset 2px 2px 6px rgba(7, 7, 8, 0.05), inset -3px -2px 4px rgba(211, 211, 212, 0.2)',
})

globalStyle(`${morphScope}${cardHeader}`, {
	borderBottom: '1px solid rgba(55, 94, 148, 0.1)',
})

globalStyle(`${morphScope}${card} ${morphScope}${h1}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}${card} ${morphScope}${h2}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}${card} ${morphScope}${h3}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}${card} ${morphScope}${h4}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}${card} ${morphScope}${h5}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}${card} ${morphScope}${h6}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${card}`, {
	backgroundColor: '#202428',
	boxShadow: 'inset 2px 2px 6px rgba(17, 19, 21, 0.2), inset -3px -2px 4px rgba(255, 255, 255, 0.05)',
})
