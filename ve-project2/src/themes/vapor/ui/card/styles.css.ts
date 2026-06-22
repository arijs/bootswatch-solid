import { globalStyle } from '@vanilla-extract/css'
import { vaporScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
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

globalStyle(`${vaporScope}${card}`, {
	vars: {
		[varBsCardSpacerY]: '1rem',
		[varBsCardSpacerX]: '1rem',
		[varBsCardTitleSpacerY]: '0.5rem',
		[varBsCardTitleColor]: '',
		[varBsCardSubtitleColor]: '',
		[varBsCardBorderWidth]: '2px',
		[varBsCardBorderColor]: varBsBorderColorTranslucent,
		[varBsCardBorderRadius]: varBsBorderRadius,
		[varBsCardBoxShadow]: '',
		[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - 2px)`,
		[varBsCardCapPaddingY]: '0.5rem',
		[varBsCardCapPaddingX]: '1rem',
		[varBsCardCapBg]: `rgba(${varBsBodyColorRgb}, 0.03)`,
		[varBsCardCapColor]: '#fff',
		[varBsCardHeight]: '',
		[varBsCardColor]: '#fff',
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

globalStyle(`${vaporScope}${card} > ${vaporScope}${horizontalRule}`, {
	marginRight: '0',
	marginLeft: '0',
})

globalStyle(`${vaporScope}${card} > ${vaporScope}${listGroup} + ${vaporScope}${cardFooter}`, {
	borderTop: '0',
})

globalStyle(`${vaporScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

globalStyle(`${vaporScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${vaporScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: '0',
	color: varBsCardSubtitleColor,
})

globalStyle(`${vaporScope}${cardText}:last-child`, {
	marginBottom: '0',
})

globalStyle(`${vaporScope}${cardLink} + ${vaporScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

globalStyle(`${vaporScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: '0',
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${vaporScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

globalStyle(`${vaporScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${vaporScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

globalStyle(`${vaporScope}${cardHeaderPills}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
})

globalStyle(`${vaporScope}${cardImgOverlay}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	padding: varBsCardImgOverlayPadding,
	borderRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${cardImg}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${cardImgTop}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${cardImgBottom}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${cardImg}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${cardImgTop}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${cardImg}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${cardImgBottom}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})

globalStyle(`${vaporScope}${cardGroup}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexFlow: 'row wrap',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
			marginBottom: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card} + ${vaporScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
			borderLeft: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:last-child) > ${vaporScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:last-child) > ${vaporScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:last-child) > ${vaporScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:last-child) > ${vaporScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:first-child) > ${vaporScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:first-child) > ${vaporScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:first-child) > ${vaporScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${cardGroup} > ${vaporScope}${card}:not(:first-child) > ${vaporScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${vaporScope}${card}`, {
	backgroundColor: 'transparent',
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h1}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h2}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h3}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h4}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h5}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${card} ${vaporScope}${h6}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
})
