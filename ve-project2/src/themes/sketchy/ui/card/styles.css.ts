import { globalStyle } from '@vanilla-extract/css'
import {
varBsBodyBg,
varBsBodyColor,
varBsBodyColorRgb,
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
varBsListGroupBorderColor,
varBsListGroupBorderRadius,
varBsListGroupBorderWidth,
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
listGroup,
listGroupFlush,
listGroupItem,
} from '../../../../theme-contract/ui/card/contract.css'
import { sketchyScope } from '../../scope.css'

// ── Card base — Sketchy overrides ─────────────────────────────────────────────

globalStyle(`${sketchyScope}${card}`, {
vars: {
[varBsCardSpacerY]: '1rem',
[varBsCardSpacerX]: '1rem',
[varBsCardTitleSpacerY]: '0.5rem',
[varBsCardTitleColor]: '',
[varBsCardSubtitleColor]: '',
[varBsCardBorderWidth]: varBsBorderWidth,
[varBsCardBorderColor]: '#333',
[varBsCardBorderRadius]: varBsBorderRadius,
[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
[varBsCardCapPaddingY]: '0.5rem',
[varBsCardCapPaddingX]: '1rem',
[varBsCardCapBg]: `rgba(${varBsBodyColorRgb}, 0.03)`,
[varBsCardCapColor]: '',
[varBsCardColor]: '',
[varBsCardBg]: varBsBodyBg,
[varBsCardImgOverlayPadding]: '1rem',
[varBsCardGroupMargin]: '0.75rem',
},
position: 'relative',
display: 'flex',
flexDirection: 'column',
minWidth: 0,
color: varBsBodyColor,
wordWrap: 'break-word',
backgroundColor: varBsCardBg,
backgroundClip: 'border-box',
border: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
// Sketchy hand-drawn border-radius shape
borderRadius: '5px 5px 5px 5px/25px 25px 25px 5px',
})

globalStyle(`${sketchyScope}${card} > hr`, {
marginRight: 0,
marginLeft: 0,
})

globalStyle(`${sketchyScope}${card} > ${listGroup}`, {
borderTop: 'inherit',
borderBottom: 'inherit',
})

globalStyle(`${sketchyScope}${card} > ${listGroup}:first-child`, {
borderTopWidth: 0,
borderTopLeftRadius: varBsCardInnerBorderRadius,
borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${sketchyScope}${card} > ${listGroup}:last-child`, {
borderBottomWidth: 0,
borderBottomRightRadius: varBsCardInnerBorderRadius,
borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(
`${sketchyScope}${card} > ${cardHeader} + ${listGroup}, ${sketchyScope}${card} > ${listGroup} + ${cardFooter}`,
{ borderTop: 0 },
)

// ── Card body ─────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${cardBody}`, {
flex: '1 1 auto',
padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
color: varBsCardColor,
})

// ── Card title / subtitle / text / link ───────────────────────────────────────

globalStyle(`${sketchyScope}${cardTitle}`, {
marginBottom: varBsCardTitleSpacerY,
color: varBsCardTitleColor,
})

globalStyle(`${sketchyScope}${cardSubtitle}`, {
marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
marginBottom: 0,
color: varBsCardSubtitleColor,
})

globalStyle(`${sketchyScope}${cardText}:last-child`, {
marginBottom: 0,
})

globalStyle(`${sketchyScope}${cardLink} + ${sketchyScope}${cardLink}`, {
marginLeft: varBsCardSpacerX,
})

// ── Card header — Sketchy overrides ───────────────────────────────────────────

globalStyle(`${sketchyScope}${cardHeader}`, {
padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
marginBottom: 0,
color: varBsCardCapColor,
backgroundColor: varBsCardCapBg,
borderColor: 'inherit',
borderBottom: `${varBsCardBorderWidth} solid`,
})

globalStyle(`${sketchyScope}${cardHeader}:first-child`, {
borderRadius: '3px 3px 0 0/23px 23px 0 0',
})

// ── Card footer — Sketchy overrides ───────────────────────────────────────────

globalStyle(`${sketchyScope}${cardFooter}`, {
padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
color: varBsCardCapColor,
backgroundColor: varBsCardCapBg,
borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

globalStyle(`${sketchyScope}${cardFooter}:last-child`, {
borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

// ── Card images ───────────────────────────────────────────────────────────────

globalStyle(
`${sketchyScope}${cardImg}, ${sketchyScope}${cardImgTop}, ${sketchyScope}${cardImgBottom}`,
{ width: '100%' },
)

globalStyle(`${sketchyScope}${cardImg}, ${sketchyScope}${cardImgTop}`, {
borderTopLeftRadius: varBsCardInnerBorderRadius,
borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${sketchyScope}${cardImg}, ${sketchyScope}${cardImgBottom}`, {
borderBottomRightRadius: varBsCardInnerBorderRadius,
borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

// ── Horizontal card layout ────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${cardHorizontalRow}`, {
display: 'flex',
flexDirection: 'row',
flexWrap: 'nowrap',
})

globalStyle(`${sketchyScope}${cardHorizontalColImg}`, {
flex: '0 0 33.3333%',
maxWidth: '33.3333%',
overflow: 'hidden',
})

globalStyle(`${sketchyScope}${cardHorizontalColBody}`, {
flex: '1 1 0',
minWidth: 0,
})

// ── List group — Sketchy overrides ────────────────────────────────────────────

globalStyle(`${sketchyScope}${listGroup}`, {
vars: {
[varBsListGroupBorderColor]: varBsBorderColor,
[varBsListGroupBorderWidth]: varBsBorderWidth,
[varBsListGroupBorderRadius]: varBsBorderRadius,
[varBsListGroupItemPaddingX]: '1rem',
[varBsListGroupItemPaddingY]: '0.5rem',
},
display: 'flex',
flexDirection: 'column',
paddingLeft: 0,
marginBottom: 0,
overflow: 'hidden',
backgroundColor: '#333',
border: '2px solid #333',
borderRadius: '45px 15px 35px 5px/15px 5px 15px 65px',
})

globalStyle(`${sketchyScope}${listGroupFlush}`, {
borderRadius: 0,
})

globalStyle(`${sketchyScope}${listGroupFlush} > ${listGroupItem}`, {
borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${sketchyScope}${listGroupFlush} > ${listGroupItem}:last-child`, {
borderBottomWidth: 0,
})

// ── List group items — Sketchy overrides ──────────────────────────────────────

globalStyle(`${sketchyScope}${listGroupItem}`, {
position: 'relative',
display: 'block',
padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
textDecoration: 'none',
borderTop: '2px solid #333',
borderRight: 'none',
borderLeft: 'none',
borderRadius: '255px 5px 225px 5px/25px 225px 25px 255px',
})

globalStyle(`${sketchyScope}${listGroupItem}:first-child`, {
borderTop: 'none',
})

globalStyle(`${sketchyScope}${listGroupItem}:last-child`, {
borderBottom: 'none',
})
