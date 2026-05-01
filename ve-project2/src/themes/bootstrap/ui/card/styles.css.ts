import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderColor,
	varBsBorderColorTranslucent,
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
	listGroup,
	listGroupFlush,
	listGroupItem,
} from '../../../../theme-contract/ui/card/contract.css'
import { bootstrapScope } from '../../scope.css'

// ── Card base ─────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .card {
//   --bs-card-spacer-y: 1rem; --bs-card-spacer-x: 1rem;
//   --bs-card-title-spacer-y: 0.5rem; --bs-card-title-color: ;
//   --bs-card-subtitle-color: ;
//   --bs-card-border-width: var(--bs-border-width);
//   --bs-card-border-color: var(--bs-border-color-translucent);
//   --bs-card-border-radius: var(--bs-border-radius); --bs-card-box-shadow: ;
//   --bs-card-inner-border-radius: calc(var(--bs-border-radius) - (var(--bs-border-width)));
//   --bs-card-cap-padding-y: 0.5rem; --bs-card-cap-padding-x: 1rem;
//   --bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03); --bs-card-cap-color: ;
//   --bs-card-height: ; --bs-card-color: ; --bs-card-bg: var(--bs-body-bg);
//   --bs-card-img-overlay-padding: 1rem; --bs-card-group-margin: 0.75rem;
//   position: relative; display: flex; flex-direction: column; min-width: 0;
//   height: var(--bs-card-height); color: var(--bs-body-color);
//   word-wrap: break-word; background-color: var(--bs-card-bg);
//   background-clip: border-box;
//   border: var(--bs-card-border-width) solid var(--bs-card-border-color);
//   border-radius: var(--bs-card-border-radius);
// }
globalStyle(`${bootstrapScope}${card}`, {
	vars: {
		[varBsCardSpacerY]: '1rem',
		[varBsCardSpacerX]: '1rem',
		[varBsCardTitleSpacerY]: '0.5rem',
		[varBsCardTitleColor]: '',
		[varBsCardSubtitleColor]: '',
		[varBsCardBorderWidth]: varBsBorderWidth,
		[varBsCardBorderColor]: varBsBorderColorTranslucent,
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
	borderRadius: varBsCardBorderRadius,
})

// SOURCE CSS: .card > .list-group { border-top: inherit; border-bottom: inherit; }
globalStyle(`${bootstrapScope}${card} > ${listGroup}`, {
	borderTop: 'inherit',
	borderBottom: 'inherit',
})

// SOURCE CSS: .card > .list-group:first-child { border-top-width: 0;
//   border-top-left-radius: var(--bs-card-inner-border-radius);
//   border-top-right-radius: var(--bs-card-inner-border-radius); }
globalStyle(`${bootstrapScope}${card} > ${listGroup}:first-child`, {
	borderTopWidth: 0,
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

// SOURCE CSS: .card > .list-group:last-child { border-bottom-width: 0;
//   border-bottom-right-radius: var(--bs-card-inner-border-radius);
//   border-bottom-left-radius: var(--bs-card-inner-border-radius); }
globalStyle(`${bootstrapScope}${card} > ${listGroup}:last-child`, {
	borderBottomWidth: 0,
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

// SOURCE CSS: .card > .card-header + .list-group,
//             .card > .list-group + .card-footer { border-top: 0; }
globalStyle(
	`${bootstrapScope}${card} > ${cardHeader} + ${listGroup}, ${bootstrapScope}${card} > ${listGroup} + ${cardFooter}`,
	{ borderTop: 0 },
)

// ── Card body ─────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .card-body { flex: 1 1 auto;
//   padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
//   color: var(--bs-card-color); }
globalStyle(`${bootstrapScope}${cardBody}`, {
	flex: '1 1 auto',
	padding: `${varBsCardSpacerY} ${varBsCardSpacerX}`,
	color: varBsCardColor,
})

// ── Card title ────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .card-title { margin-bottom: var(--bs-card-title-spacer-y);
//               color: var(--bs-card-title-color); }
globalStyle(`${bootstrapScope}${cardTitle}`, {
	marginBottom: varBsCardTitleSpacerY,
	color: varBsCardTitleColor,
})

// SOURCE CSS:
// .card-subtitle { margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));
//                  margin-bottom: 0; color: var(--bs-card-subtitle-color); }
globalStyle(`${bootstrapScope}${cardSubtitle}`, {
	marginTop: `calc(-0.5 * ${varBsCardTitleSpacerY})`,
	marginBottom: 0,
	color: varBsCardSubtitleColor,
})

// SOURCE CSS: .card-text:last-child { margin-bottom: 0; }
globalStyle(`${bootstrapScope}${cardText}:last-child`, {
	marginBottom: 0,
})

// SOURCE CSS: .card-link + .card-link { margin-left: var(--bs-card-spacer-x); }
globalStyle(`${bootstrapScope}${cardLink} + ${bootstrapScope}${cardLink}`, {
	marginLeft: varBsCardSpacerX,
})

// ── Card header ───────────────────────────────────────────────────────────────

// SOURCE CSS:
// .card-header { padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
//   margin-bottom: 0; color: var(--bs-card-cap-color);
//   background-color: var(--bs-card-cap-bg);
//   border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color); }
globalStyle(`${bootstrapScope}${cardHeader}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	marginBottom: 0,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderBottom: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

// SOURCE CSS:
// .card-header:first-child {
//   border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0; }
globalStyle(`${bootstrapScope}${cardHeader}:first-child`, {
	borderRadius: `${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius} 0 0`,
})

// ── Card footer ───────────────────────────────────────────────────────────────

// SOURCE CSS:
// .card-footer { padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
//   color: var(--bs-card-cap-color); background-color: var(--bs-card-cap-bg);
//   border-top: var(--bs-card-border-width) solid var(--bs-card-border-color); }
globalStyle(`${bootstrapScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

// SOURCE CSS:
// .card-footer:last-child {
//   border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius); }
globalStyle(`${bootstrapScope}${cardFooter}:last-child`, {
	borderRadius: `0 0 ${varBsCardInnerBorderRadius} ${varBsCardInnerBorderRadius}`,
})

// ── Card images ───────────────────────────────────────────────────────────────

// SOURCE CSS:
// .card-img, .card-img-top, .card-img-bottom { width: 100%; }
globalStyle(
	`${bootstrapScope}${cardImg}, ${bootstrapScope}${cardImgTop}, ${bootstrapScope}${cardImgBottom}`,
	{ width: '100%' },
)

// SOURCE CSS:
// .card-img, .card-img-top {
//   border-top-left-radius: var(--bs-card-inner-border-radius);
//   border-top-right-radius: var(--bs-card-inner-border-radius); }
globalStyle(`${bootstrapScope}${cardImg}, ${bootstrapScope}${cardImgTop}`, {
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

// SOURCE CSS:
// .card-img, .card-img-bottom {
//   border-bottom-right-radius: var(--bs-card-inner-border-radius);
//   border-bottom-left-radius: var(--bs-card-inner-border-radius); }
globalStyle(`${bootstrapScope}${cardImg}, ${bootstrapScope}${cardImgBottom}`, {
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

// ── Horizontal card layout ────────────────────────────────────────────────────
// Replaces Bootstrap's row/col grid utilities with a direct flex layout.
// col-md-* only activates at ≥768px (Bootstrap md breakpoint), so columns
// stack on mobile and go side-by-side at ≥768px.

globalStyle(`${bootstrapScope}${cardHorizontalRow}`, {
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'nowrap',
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${bootstrapScope}${cardHorizontalColImg}`, {
	overflow: 'hidden',
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 33.3333%',
			maxWidth: '33.3333%',
		},
	},
})

globalStyle(`${bootstrapScope}${cardHorizontalColBody}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '1 1 0',
			minWidth: 0,
		},
	},
})

// ── List group ────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .list-group {
//   --bs-list-group-color: var(--bs-body-color);
//   --bs-list-group-bg: var(--bs-body-bg);
//   --bs-list-group-border-color: var(--bs-border-color);
//   --bs-list-group-border-width: var(--bs-border-width);
//   --bs-list-group-border-radius: var(--bs-border-radius);
//   --bs-list-group-item-padding-x: 1rem;
//   --bs-list-group-item-padding-y: 0.5rem;
//   display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0;
//   border-radius: var(--bs-list-group-border-radius); }
globalStyle(`${bootstrapScope}${listGroup}`, {
	vars: {
		[varBsListGroupColor]: varBsBodyColor,
		[varBsListGroupBg]: varBsBodyBg,
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
	borderRadius: varBsListGroupBorderRadius,
})

// SOURCE CSS:
// .list-group-flush { border-radius: 0; }
// .list-group-flush > .list-group-item {
//   border-width: 0 0 var(--bs-list-group-border-width); }
// .list-group-flush > .list-group-item:last-child { border-bottom-width: 0; }
globalStyle(`${bootstrapScope}${listGroupFlush}`, {
	borderRadius: 0,
})

globalStyle(`${bootstrapScope}${listGroupFlush} > ${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${bootstrapScope}${listGroupFlush} > ${listGroupItem}:last-child`, {
	borderBottomWidth: 0,
})

// SOURCE CSS:
// .list-group-item { position: relative; display: block;
//   padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
//   color: var(--bs-list-group-color); text-decoration: none;
//   background-color: var(--bs-list-group-bg);
//   border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color); }
// .list-group-item:first-child { border-top-left-radius: inherit; border-top-right-radius: inherit; }
// .list-group-item:last-child { border-bottom-right-radius: inherit; border-bottom-left-radius: inherit; }
globalStyle(`${bootstrapScope}${listGroupItem}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

globalStyle(`${bootstrapScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
})

globalStyle(`${bootstrapScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: 'inherit',
	borderBottomLeftRadius: 'inherit',
})
