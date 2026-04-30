import { globalStyle } from '@vanilla-extract/css'
import {
	badge,
	badgeDanger,
	badgeDark,
	badgeInfo,
	badgeLight,
	badgePrimary,
	badgeRoundedPill,
	badgeSecondary,
	badgeSuccess,
	badgeWarning,
} from '../../../../theme-contract/ui/badge/contract.css'
import {
	varBsBadgeBorderRadius,
	varBsBadgeColor,
	varBsBadgeFontSize,
	varBsBadgeFontWeight,
	varBsBadgePaddingX,
	varBsBadgePaddingY,
} from '../../../../theme-contract/ui/badge/_vars.css'
import {
	varBsDanger,
	varBsDark,
	varBsInfo,
	varBsLight,
	varBsPrimary,
	varBsSecondary,
	varBsSuccess,
	varBsWarning,
} from '../../../../theme-contract/_vars.css'
import { sketchyScope } from '../../scope.css'

// Sketchy hand-drawn shapes for badges
const sketchyBorderRadius = '255px 25px 225px 25px / 25px 225px 25px 255px'
const sketchyPillBorderRadius = '7rem 8rem 8rem 8rem / 4rem 5rem 6rem 6rem'

// ── Base badge ────────────────────────────────────────────────────────────────

// Sketchy overrides --bs-badge-padding-x/y and --bs-badge-border-radius.
globalStyle(`${sketchyScope}${badge}`, {
	vars: {
		[varBsBadgePaddingX]: '1.2em',
		[varBsBadgePaddingY]: '0.5em',
		[varBsBadgeFontSize]: '0.75em',
		[varBsBadgeFontWeight]: '700',
		[varBsBadgeColor]: '#fff',
		[varBsBadgeBorderRadius]: sketchyBorderRadius,
	},
	display: 'inline-block',
	padding: `${varBsBadgePaddingY} ${varBsBadgePaddingX}`,
	fontSize: varBsBadgeFontSize,
	fontWeight: varBsBadgeFontWeight,
	lineHeight: 1,
	color: varBsBadgeColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	verticalAlign: 'baseline',
	borderRadius: varBsBadgeBorderRadius,
})

globalStyle(`${sketchyScope}${badge}:empty`, {
	display: 'none',
})

// ── Colour variants ───────────────────────────────────────────────────────────
// Background colours reference root semantic vars which already carry
// Sketchy-specific values from the body scope (e.g. varBsPrimary = '#333').

globalStyle(`${sketchyScope}${badgePrimary}`, {
	backgroundColor: varBsPrimary,
})

globalStyle(`${sketchyScope}${badgeSecondary}`, {
	backgroundColor: varBsSecondary,
})

globalStyle(`${sketchyScope}${badgeSuccess}`, {
	backgroundColor: varBsSuccess,
})

globalStyle(`${sketchyScope}${badgeDanger}`, {
	backgroundColor: varBsDanger,
})

globalStyle(`${sketchyScope}${badgeWarning}`, {
	backgroundColor: varBsWarning,
	vars: { [varBsBadgeColor]: '#000' },
})

globalStyle(`${sketchyScope}${badgeInfo}`, {
	backgroundColor: varBsInfo,
	vars: { [varBsBadgeColor]: '#000' },
})

// Sketchy: light badge uses #555 text (varBsDark = '#555' in Sketchy scope)
globalStyle(`${sketchyScope}${badgeLight}`, {
	backgroundColor: varBsLight,
	vars: { [varBsBadgeColor]: varBsDark },
})

globalStyle(`${sketchyScope}${badgeDark}`, {
	backgroundColor: varBsDark,
})

// ── Shape modifier ────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${badgeRoundedPill}`, {
	vars: { [varBsBadgeBorderRadius]: sketchyPillBorderRadius },
})
