import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

import {
	varBsBodyColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsSecondaryRgb,
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

import { horizontalRule, link } from '../../../../theme-contract/contents/basic/contract.css'

import {
	bgLight,
	borderDanger,
	borderDark,
	borderInfo,
	borderLight,
	borderPrimary,
	borderSecondary,
	borderSuccess,
	borderWarning,
	cardGroup,
	cardHeaderPills,
	cardImgOverlay,
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
		[varBsCardBoxShadow]: '',
		[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - (${varBsBorderWidth}))`,
		[varBsCardCapPaddingY]: '0.875rem',
		[varBsCardCapPaddingX]: '2rem',
		[varBsCardCapBg]: 'transparent',
		[varBsCardCapColor]: '#fff',
		[varBsCardHeight]: '',
		[varBsCardColor]: '#fff',
		[varBsCardBg]: 'transparent',
		[varBsCardImgOverlayPadding]: '2rem',
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

globalStyle(`${quartzScope}${card} > ${quartzScope}${horizontalRule}`, {
	marginRight: '0',
	marginLeft: '0',
})

globalStyle(`${quartzScope}${card} > ${quartzScope}${listGroup} + ${quartzScope}${cardFooter}`, {
	borderTop: '0',
})

globalStyle(`${quartzScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

globalStyle(`${quartzScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${quartzScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: '0',
	color: varBsCardSubtitleColor,
})

globalStyle(`${quartzScope}${cardText}:last-child`, {
	marginBottom: '0',
})

globalStyle(`${quartzScope}${cardLink} + ${quartzScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

globalStyle(`${quartzScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: '0',
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${quartzScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

globalStyle(`${quartzScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${quartzScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

globalStyle(`${quartzScope}${cardHeaderPills}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
})

globalStyle(`${quartzScope}${cardImgOverlay}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	padding: varBsCardImgOverlayPadding,
	borderRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${cardImg}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${cardImgTop}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${cardImgBottom}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${cardImg}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${cardImgTop}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${cardImg}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${cardImgBottom}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})

globalStyle(`${quartzScope}${cardGroup}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexFlow: 'row wrap',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
			marginBottom: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card} + ${quartzScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
			borderLeft: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:last-child) > ${quartzScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:last-child) > ${quartzScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:last-child) > ${quartzScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:last-child) > ${quartzScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:first-child) > ${quartzScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:first-child) > ${quartzScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:first-child) > ${quartzScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${cardGroup} > ${quartzScope}${card}:not(:first-child) > ${quartzScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${quartzScope}${card}`, {
	vars: {
		[varBsSecondaryRgb]: 'transparent',
	},
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
})

globalStyle(`${quartzScope}${card} :where(${quartzScope}${link})`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${card}${bgLight} ${quartzScope}${cardHeader}`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${card}${bgLight} ${quartzScope}${cardBody}`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${card}${borderPrimary} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#e83283 !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderSecondary} ${quartzScope}${cardHeader}`, {
	backgroundColor: 'rgba(255, 255, 255, 0.4) !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderSuccess} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#41d7a7 !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderInfo} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#39cbfb !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderWarning} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#ffc107 !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderDanger} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#fd7e14 !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${card}${borderLight} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#e9e9e8 !important',
	borderBottom: 'none',
	color: '#343a40',
})

globalStyle(`${quartzScope}${card}${borderDark} ${quartzScope}${cardHeader}`, {
	backgroundColor: '#212529 !important',
	borderBottom: 'none',
})

globalStyle(`${quartzScope}${cardHeader}`, {
	fontWeight: '700',
})
