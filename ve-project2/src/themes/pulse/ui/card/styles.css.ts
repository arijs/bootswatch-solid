import { globalStyle } from '@vanilla-extract/css'
import { pulseScope } from '../../scope.css'

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

globalStyle(`${pulseScope}${card}`, {
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
})

globalStyle(`${pulseScope}${card} > ${pulseScope}${horizontalRule}`, {
	marginRight: '0',
	marginLeft: '0',
})

globalStyle(`${pulseScope}${card} > ${pulseScope}${listGroup} + ${pulseScope}${cardFooter}`, {
	borderTop: '0',
})

globalStyle(`${pulseScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

globalStyle(`${pulseScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${pulseScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: '0',
	color: varBsCardSubtitleColor,
})

globalStyle(`${pulseScope}${cardText}:last-child`, {
	marginBottom: '0',
})

globalStyle(`${pulseScope}${cardLink} + ${pulseScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

globalStyle(`${pulseScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: '0',
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${pulseScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${pulseScope}${cardHeaderPills}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
})

globalStyle(`${pulseScope}${cardImgOverlay}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	padding: varBsCardImgOverlayPadding,
})

globalStyle(`${pulseScope}${cardImg}`, {
	width: '100%',
})

globalStyle(`${pulseScope}${cardImgTop}`, {
	width: '100%',
})

globalStyle(`${pulseScope}${cardImgBottom}`, {
	width: '100%',
})

globalStyle(`${pulseScope}${cardGroup} > ${pulseScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})

globalStyle(`${pulseScope}${cardGroup}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexFlow: 'row wrap',
		},
	},
})

globalStyle(`${pulseScope}${cardGroup} > ${pulseScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
			marginBottom: '0',
		},
	},
})

globalStyle(`${pulseScope}${cardGroup} > ${pulseScope}${card} + ${pulseScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
			borderLeft: '0',
		},
	},
})
