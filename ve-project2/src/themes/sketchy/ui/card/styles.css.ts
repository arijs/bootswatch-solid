import { globalStyle } from '@vanilla-extract/css'
import { sketchyScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
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
	cardGroup,
	cardHeaderPills,
	cardImgOverlay,
	cardOutlineDanger,
	cardOutlineInfo,
	cardOutlinePrimary,
	cardOutlineSuccess,
	cardOutlineWarning,
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

globalStyle(`${sketchyScope}${card}`, {
	vars: {
		[varBsCardSpacerY]: '1rem',
		[varBsCardSpacerX]: '1rem',
		[varBsCardTitleSpacerY]: '0.5rem',
		[varBsCardTitleColor]: '',
		[varBsCardSubtitleColor]: '',
		[varBsCardBorderWidth]: '2px',
		[varBsCardBorderColor]: '#333',
		[varBsCardBorderRadius]: varBsBorderRadius,
		[varBsCardBoxShadow]: '',
		[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - 2px)`,
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

globalStyle(`${sketchyScope}${card} > ${sketchyScope}${horizontalRule}`, {
	marginRight: '0',
	marginLeft: '0',
})

globalStyle(`${sketchyScope}${card} > ${sketchyScope}${listGroup} + ${sketchyScope}${cardFooter}`, {
	borderTop: '0',
})

globalStyle(`${sketchyScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

globalStyle(`${sketchyScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${sketchyScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: '0',
	color: varBsCardSubtitleColor,
})

globalStyle(`${sketchyScope}${cardText}:last-child`, {
	marginBottom: '0',
})

globalStyle(`${sketchyScope}${cardLink} + ${sketchyScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

globalStyle(`${sketchyScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: '0',
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${sketchyScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

globalStyle(`${sketchyScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${sketchyScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

globalStyle(`${sketchyScope}${cardHeaderPills}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
})

globalStyle(`${sketchyScope}${cardImgOverlay}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	bottom: '0',
	left: '0',
	padding: varBsCardImgOverlayPadding,
	borderRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${sketchyScope}${cardImg}`, {
	width: '100%',
})

globalStyle(`${sketchyScope}${cardImgTop}`, {
	width: '100%',
})

globalStyle(`${sketchyScope}${cardImgBottom}`, {
	width: '100%',
})

globalStyle(`${sketchyScope}${cardImg}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${sketchyScope}${cardImgTop}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${sketchyScope}${cardImg}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${sketchyScope}${cardImgBottom}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})

globalStyle(`${sketchyScope}${cardGroup}`, {
	'@media': {
		'(min-width: 576px)': {
			display: 'flex',
			flexFlow: 'row wrap',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			flex: '1 0 0',
			marginBottom: '0',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card} + ${sketchyScope}${card}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: '0',
			borderLeft: '0',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}:not(:last-child) > ${sketchyScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}:not(:last-child) > ${sketchyScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}:not(:last-child) > ${sketchyScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}:not(:last-child) > ${sketchyScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomRightRadius: '0',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}:not(:first-child) > ${sketchyScope}${cardImgTop}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}:not(:first-child) > ${sketchyScope}${cardHeader}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopLeftRadius: '0',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}:not(:first-child) > ${sketchyScope}${cardImgBottom}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${sketchyScope}${cardGroup} > ${sketchyScope}${card}:not(:first-child) > ${sketchyScope}${cardFooter}`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${sketchyScope}${card}`, {
	borderRadius: '5px 5px 5px 5px/25px 25px 25px 5px',
})

globalStyle(`${sketchyScope}${cardOutlinePrimary}`, {
	borderWidth: '2px',
})

globalStyle(`${sketchyScope}${cardOutlineSuccess}`, {
	borderWidth: '2px',
})

globalStyle(`${sketchyScope}${cardOutlineInfo}`, {
	borderWidth: '2px',
})

globalStyle(`${sketchyScope}${cardOutlineWarning}`, {
	borderWidth: '2px',
})

globalStyle(`${sketchyScope}${cardOutlineDanger}`, {
	borderWidth: '2px',
})

globalStyle(`${sketchyScope}${cardHeader}`, {
	borderColor: 'inherit',
	borderBottomWidth: '2px',
})

globalStyle(`${sketchyScope}${cardHeader}:first-child`, {
	borderRadius: '3px 3px 0 0/23px 23px 0 0',
})

globalStyle(`${sketchyScope}${cardFooter}`, {
	borderTopWidth: '2px',
})
