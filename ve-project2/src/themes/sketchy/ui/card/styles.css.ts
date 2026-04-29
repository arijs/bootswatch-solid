import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColorRgb,
	varBsBorderRadius,
	varBsBorderWidth,
} from '../../../../theme-contract/_vars.css'
import {
	varBsCardBorderColor,
	varBsCardBorderRadius,
	varBsCardBorderWidth,
	varBsCardCapBg,
	varBsCardCapColor,
	varBsCardCapPaddingX,
	varBsCardCapPaddingY,
	varBsCardInnerBorderRadius,
	varBsListGroupBorderColor,
	varBsListGroupBorderWidth,
	varBsListGroupItemPaddingX,
	varBsListGroupItemPaddingY,
} from '../../../../theme-contract/ui/card/_vars.css'
import {
	card,
	cardFooter,
	cardHeader,
	listGroup,
	listGroupItem,
} from '../../../../theme-contract/ui/card/contract.css'
import { sketchyScope } from '../../scope.css'

// ── Card base — Sketchy overrides ─────────────────────────────────────────────

// SOURCE CSS (screenshots/sketchy/bootstrap.css):
// .card {
//   --bs-card-border-width: 2px;
//   --bs-card-border-color: #333;
//   --bs-card-border-radius: var(--bs-border-radius);  ← 25px in Sketchy
//   --bs-card-inner-border-radius: calc(var(--bs-border-radius) - 2px); ← calc(25px - 2px) = 23px
//   --bs-card-cap-bg: rgba(var(--bs-body-color-rgb), 0.03);
//   ... (layout properties unchanged from bootstrap)
// }
// .card { border-radius: 5px 5px 5px 5px/25px 25px 25px 5px; }  ← bootswatch override
globalStyle(`${sketchyScope}${card}`, {
	vars: {
		[varBsCardBorderWidth]: varBsBorderWidth,
		[varBsCardBorderColor]: '#333',
		[varBsCardBorderRadius]: varBsBorderRadius,
		[varBsCardInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
		[varBsCardCapBg]: `rgba(${varBsBodyColorRgb}, 0.03)`,
		[varBsCardCapColor]: '',
	},
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	minWidth: 0,
	wordWrap: 'break-word',
	backgroundClip: 'border-box',
	// Sketchy hand-drawn border-radius shape (from _bootswatch.scss)
	borderRadius: '5px 5px 5px 5px/25px 25px 25px 5px',
	border: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

// ── Card header — Sketchy overrides ───────────────────────────────────────────

// SOURCE CSS (screenshots/sketchy/bootstrap.css — bootswatch block):
// .card-header { border-color: inherit; border-bottom-width: 2px; }
// .card-header:first-child { border-radius: 3px 3px 0 0/23px 23px 0 0; }
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

// SOURCE CSS (screenshots/sketchy/bootstrap.css — bootswatch block):
// .card-footer { border-top-width: 2px; }
globalStyle(`${sketchyScope}${cardFooter}`, {
	padding: `${varBsCardCapPaddingY} ${varBsCardCapPaddingX}`,
	color: varBsCardCapColor,
	backgroundColor: varBsCardCapBg,
	borderTop: `${varBsCardBorderWidth} solid ${varBsCardBorderColor}`,
})

// ── List group — Sketchy inherits global vars ─────────────────────────────────

// The Sketchy body element sets --bs-border-width: 2px and --bs-border-radius: 25px.
// varBsListGroupBorderWidth and varBsListGroupBorderRadius reference those global vars,
// so no additional overrides are needed for list-group itself.
// Only flush item styling is repeated here to maintain selector specificity.

globalStyle(`${sketchyScope}${listGroup} > ${listGroupItem}`, {
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	borderColor: varBsListGroupBorderColor,
	borderWidth: `${varBsListGroupBorderWidth}`,
})
