import { globalStyle, keyframes } from '@vanilla-extract/css'
import {
	spinnerBorder,
	spinnerDanger,
	spinnerDark,
	spinnerGrow,
	spinnerInfo,
	spinnerLight,
	spinnerPrimary,
	spinnerSecondary,
	spinnerSuccess,
	spinnerWarning,
} from '../../../../theme-contract/ui/spinners/contract.css'
import {
	varBsSpinnerAnimationName,
	varBsSpinnerAnimationSpeed,
	varBsSpinnerBorderWidth,
	varBsSpinnerHeight,
	varBsSpinnerVerticalAlign,
	varBsSpinnerWidth,
} from '../../../../theme-contract/ui/spinners/_vars.css'
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

// ── @keyframes (scoped to sketchy) ────────────────────────────────────────────
const spinnerBorderKeyframes = keyframes({
	to: { transform: 'rotate(360deg)' },
})

const spinnerGrowKeyframes = keyframes({
	'0%': { transform: 'scale(0)' },
	'50%': { opacity: 1, transform: 'none' },
})

// ── Shared base ───────────────────────────────────────────────────────────────

globalStyle(
	`${sketchyScope}${spinnerGrow}, ${sketchyScope}${spinnerBorder}`,
	{
		display: 'inline-block',
		flexShrink: 0,
		width: varBsSpinnerWidth,
		height: varBsSpinnerHeight,
		verticalAlign: varBsSpinnerVerticalAlign,
		borderRadius: '50%',
		animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
	},
)

// ── .spinner-border ───────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${spinnerBorder}`, {
	vars: {
		[varBsSpinnerWidth]: '2rem',
		[varBsSpinnerHeight]: '2rem',
		[varBsSpinnerVerticalAlign]: '-0.125em',
		[varBsSpinnerBorderWidth]: '0.25em',
		[varBsSpinnerAnimationSpeed]: '0.75s',
		[varBsSpinnerAnimationName]: spinnerBorderKeyframes,
	},
	border: `${varBsSpinnerBorderWidth} solid currentcolor`,
	borderRightColor: 'transparent',
})

// ── .spinner-grow ─────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${spinnerGrow}`, {
	vars: {
		[varBsSpinnerWidth]: '2rem',
		[varBsSpinnerHeight]: '2rem',
		[varBsSpinnerVerticalAlign]: '-0.125em',
		[varBsSpinnerAnimationSpeed]: '0.75s',
		[varBsSpinnerAnimationName]: spinnerGrowKeyframes,
	},
	backgroundColor: 'currentcolor',
	opacity: 0,
})

// ── Color variants ────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${spinnerPrimary}`, { color: varBsPrimary })
globalStyle(`${sketchyScope}${spinnerSecondary}`, { color: varBsSecondary })
globalStyle(`${sketchyScope}${spinnerSuccess}`, { color: varBsSuccess })
globalStyle(`${sketchyScope}${spinnerDanger}`, { color: varBsDanger })
globalStyle(`${sketchyScope}${spinnerWarning}`, { color: varBsWarning })
globalStyle(`${sketchyScope}${spinnerInfo}`, { color: varBsInfo })
globalStyle(`${sketchyScope}${spinnerLight}`, { color: varBsLight })
globalStyle(`${sketchyScope}${spinnerDark}`, { color: varBsDark })
