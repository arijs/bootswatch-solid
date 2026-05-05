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
	varBsBorderRadius,
	varBsBorderRadiusPill,
	varBsDanger,
	varBsDark,
	varBsInfo,
	varBsLight,
	varBsPrimary,
	varBsSecondary,
	varBsSuccess,
	varBsWarning,
} from '../../../../theme-contract/_vars.css'
import { slateScope } from '../../scope.css'

// ── Base badge ────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .badge {
//   --bs-badge-padding-x: 0.65em; --bs-badge-padding-y: 0.35em;
//   --bs-badge-font-size: 0.75em; --bs-badge-font-weight: 700;
//   --bs-badge-color: #fff; --bs-badge-border-radius: var(--bs-border-radius);
//   display: inline-block;
//   padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
//   font-size: var(--bs-badge-font-size); font-weight: var(--bs-badge-font-weight);
//   line-height: 1; color: var(--bs-badge-color);
//   text-align: center; white-space: nowrap; vertical-align: baseline;
//   border-radius: var(--bs-badge-border-radius);
// }
globalStyle(`${slateScope}${badge}`, {
	vars: {
		[varBsBadgePaddingX]: '0.65em',
		[varBsBadgePaddingY]: '0.35em',
		[varBsBadgeFontSize]: '0.75em',
		[varBsBadgeFontWeight]: '700',
		[varBsBadgeColor]: '#fff',
		[varBsBadgeBorderRadius]: varBsBorderRadius,
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

globalStyle(`${slateScope}${badge}:empty`, {
	display: 'none',
})

// ── Colour variants ───────────────────────────────────────────────────────────
// Background colour references root semantic vars so themes override automatically.

globalStyle(`${slateScope}${badgePrimary}`, {
	backgroundColor: varBsPrimary,
})

globalStyle(`${slateScope}${badgeSecondary}`, {
	backgroundColor: varBsSecondary,
})

globalStyle(`${slateScope}${badgeSuccess}`, {
	backgroundColor: varBsSuccess,
})

globalStyle(`${slateScope}${badgeDanger}`, {
	backgroundColor: varBsDanger,
})

// Warning and Info use text-dark semantics (theme dark token)
globalStyle(`${slateScope}${badgeWarning}`, {
	backgroundColor: varBsWarning,
	vars: { [varBsBadgeColor]: varBsDark },
})

globalStyle(`${slateScope}${badgeInfo}`, {
	backgroundColor: varBsInfo,
	vars: { [varBsBadgeColor]: varBsDark },
})

// Light uses dark text for contrast
globalStyle(`${slateScope}${badgeLight}`, {
	backgroundColor: varBsLight,
	vars: { [varBsBadgeColor]: varBsDark },
})

globalStyle(`${slateScope}${badgeDark}`, {
	backgroundColor: varBsDark,
})

// ── Shape modifier ────────────────────────────────────────────────────────────

globalStyle(`${slateScope}${badgeRoundedPill}`, {
	vars: { [varBsBadgeBorderRadius]: varBsBorderRadiusPill },
})

globalStyle(`${slateScope}${badgeLight}`, {
	vars: { [varBsBadgeColor]: '#272b30' },
})
