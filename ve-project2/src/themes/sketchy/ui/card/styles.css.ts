import { globalStyle } from '@vanilla-extract/css'
import {
varBsBodyBg,
varBsBodyColor,
varBsBodyColorRgb,
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
import { listGroup } from '../../../../theme-contract/ui/list-group/contract.css'
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

// At 360px (below md breakpoint), Bootstrap stacks col-md-4/col-md-8 vertically
globalStyle(`${sketchyScope}${cardHorizontalRow}`, {
display: 'flex',
flexDirection: 'column',
})

globalStyle(`${sketchyScope}${cardHorizontalColImg}`, {
width: '100%',
overflow: 'hidden',
})

globalStyle(`${sketchyScope}${cardHorizontalColBody}`, {
width: '100%',
})

