import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsCardHeight,
	varBsGutterX,
	varBsGutterY,
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
	varBsCardImgOverlayPadding,
	varBsCardInnerBorderRadius,
	varBsCardSpacerX,
	varBsCardSpacerY,
	varBsCardSubtitleColor,
	varBsCardTitleColor,
	varBsCardTitleSpacerY,
} from '../../../../theme-contract/ui/card/_vars.css'
import {
	varBsListGroupActionActiveBg,
	varBsListGroupActionActiveColor,
	varBsListGroupActionColor,
	varBsListGroupActionHoverBg,
	varBsListGroupActionHoverColor,
	varBsListGroupActiveBg,
	varBsListGroupActiveBorderColor,
	varBsListGroupActiveColor,
	varBsListGroupBg,
	varBsListGroupBorderColor,
	varBsListGroupBorderRadius,
	varBsListGroupBorderWidth,
	varBsListGroupColor,
	varBsListGroupDisabledBg,
	varBsListGroupDisabledColor,
	varBsListGroupItemPaddingX,
	varBsListGroupItemPaddingY,
} from '../../../../theme-contract/ui/list-group/_vars.css'
import {
	horizontalRule,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	cardHeaderTabs,
} from '../../../../theme-contract/ui/card-tabs/contract.css'
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
import {
	listGroup,
	listGroupFlush,
	listGroupItem,
	listGroupItemDisabled,
} from '../../../../theme-contract/ui/list-group/contract.css'
import {
	nav,
} from '../../../../theme-contract/ui/navs/contract.css'
import {
	col,
	g0,
	g4,
	overflowXHidden,
	positionRelative,
	row,
	rowCols1,
	textMuted,
} from '../../../../theme-contract/utilities/contract.css'
import { darklyScope } from '../../scope.css'

globalStyle(`${darklyScope}${row}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: 0,
	},
	display: 'flex',
	flexWrap: 'wrap',
	marginTop: `calc(-1 * ${varBsGutterY})`,
	marginRight: `calc(-0.5 * ${varBsGutterX})`,
	marginLeft: `calc(-0.5 * ${varBsGutterX})`,
})

globalStyle(`${darklyScope}${row} > *`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${darklyScope}${col}`, {
	flex: '1 0 0',
})

globalStyle(`${darklyScope}${rowCols1} > ${darklyScope}${col}`, {
	flex: '0 0 auto',
	width: '100%',
})

globalStyle(`${darklyScope}${g0}`, {
	vars: {
		[varBsGutterX]: 0,
		[varBsGutterY]: 0,
	},
})

globalStyle(`${darklyScope}${g4}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '1.5rem',
	},
})

globalStyle(`${darklyScope}${card}`, {
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
		[varBsCardCapBg]: '#444',
		[varBsCardCapColor]: '',
		[varBsCardColor]: '',
		[varBsCardBg]: '#303030',
		[varBsCardImgOverlayPadding]: '1rem',
		[varBsCardGroupMargin]: '0.75rem',
	},
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	minWidth: 0,
	height: varBsCardHeight,
	color: varBsBodyColor,
	wordWrap: 'break-word',
	backgroundColor: varBsCardBg,
	backgroundClip: 'border-box',
	border: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
	borderRadius: varBsCardBorderRadius,
})

globalStyle(`${darklyScope}${card} > ${darklyScope}${listGroup}`, {
	borderTop: 'inherit',
	borderBottom: 'inherit',
})

globalStyle(`${darklyScope}${card} > ${darklyScope}${listGroup}:first-child`, {
	borderTopWidth: 0,
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${darklyScope}${card} > ${darklyScope}${listGroup}:last-child`, {
	borderBottomWidth: 0,
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${darklyScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

globalStyle(`${darklyScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

globalStyle(`${darklyScope}${cardText}:last-child`, {
	marginBottom: 0,
})

globalStyle(`${darklyScope}${cardLink} + ${darklyScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

globalStyle(`${darklyScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: 0,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${darklyScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

globalStyle(`${darklyScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${darklyScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

globalStyle(`${darklyScope}${cardImg}`, {
	width: '100%',
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${darklyScope}${cardImgTop}`, {
	width: '100%',
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${darklyScope}${cardImgBottom}`, {
	width: '100%',
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${darklyScope}${listGroup}`, {
	vars: {
		[varBsListGroupColor]: '#fff',
		[varBsListGroupBg]: '#303030',
		[varBsListGroupBorderColor]: '#444',
		[varBsListGroupBorderWidth]: varBsBorderWidth,
		[varBsListGroupBorderRadius]: varBsBorderRadius,
		[varBsListGroupItemPaddingX]: '1rem',
		[varBsListGroupItemPaddingY]: '0.5rem',
		[varBsListGroupActionColor]: varBsSecondaryColor,
		[varBsListGroupActionHoverColor]: '#fff',
		[varBsListGroupActionHoverBg]: '#444',
		[varBsListGroupActionActiveColor]: varBsBodyColor,
		[varBsListGroupActionActiveBg]: '#222',
		[varBsListGroupDisabledColor]: varBsSecondaryColor,
		[varBsListGroupDisabledBg]: '#303030',
		[varBsListGroupActiveColor]: '#fff',
		[varBsListGroupActiveBg]: '#375a7f',
		[varBsListGroupActiveBorderColor]: '#375a7f',
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: 0,
	marginBottom: 0,
	borderRadius: varBsListGroupBorderRadius,
})

globalStyle(`${darklyScope}${listGroupItem}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

globalStyle(`${darklyScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
})

globalStyle(`${darklyScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: 'inherit',
	borderBottomLeftRadius: 'inherit',
})

globalStyle(`${darklyScope}${listGroupItem}${listGroupItemDisabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${darklyScope}${listGroupItem}:disabled`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${darklyScope}${listGroupItem} + ${darklyScope}${listGroupItem}`, {
	borderTopWidth: 0,
})

globalStyle(`${darklyScope}${listGroupFlush}`, {
	borderRadius: 0,
})

globalStyle(`${darklyScope}${listGroupFlush} > ${darklyScope}${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${darklyScope}${listGroupFlush} > ${darklyScope}${listGroupItem}:last-child`, {
	borderBottomWidth: 0,
})

globalStyle(`${darklyScope}${overflowXHidden}`, {
	overflowX: 'hidden !important',
})

globalStyle(`${darklyScope}${positionRelative}`, {
	position: 'relative !important',
})

globalStyle(`${darklyScope}${textMuted}`, {
	color: `${varBsSecondaryColor} !important`,
})

globalStyle(`${darklyScope}${nav}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: 0,
})

// Card-header-tabs active tab styling lives in ui/navs (higher cascade).

globalStyle(`${darklyScope}${card} > ${darklyScope}${horizontalRule}`, {
	marginRight: 0,
	marginLeft: 0,
})

globalStyle(`${darklyScope}${card} > ${darklyScope}${cardHeader} + ${darklyScope}${listGroup}`, {
	borderTop: 0,
})

globalStyle(`${darklyScope}${card} > ${darklyScope}${listGroup} + ${darklyScope}${cardFooter}`, {
	borderTop: 0,
})

globalStyle(`${darklyScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: 0,
	color: varBsCardSubtitleColor,
})

globalStyle(`.card-group > ${darklyScope}${card}`, {
	marginBottom: varBsCardGroupMargin,
})
