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
	varBsSecondaryRgb,
	varBsSuccess,
	varBsWarning,
} from '../../../../theme-contract/_vars.css'
import { quartzScope } from '../../scope.css'

// ── @keyframes spinner-border ─────────────────────────────────────────────────
const spinnerBorderKeyframes = keyframes({
	to: { transform: 'rotate(360deg)' },
})

// ── @keyframes spinner-grow ───────────────────────────────────────────────────
const spinnerGrowKeyframes = keyframes({
	'0%': { transform: 'scale(0)' },
	'50%': { opacity: 1, transform: 'none' },
})

// ── Shared base (applies to both .spinner-border and .spinner-grow) ───────────

// SOURCE CSS:
// .spinner-grow, .spinner-border {
//   display: inline-block; flex-shrink: 0;
//   width: var(--bs-spinner-width); height: var(--bs-spinner-height);
//   vertical-align: var(--bs-spinner-vertical-align);
//   border-radius: 50%;
//   animation: var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);
// }
globalStyle(
	`${quartzScope}${spinnerGrow}, ${quartzScope}${spinnerBorder}`,
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

// SOURCE CSS:
// .spinner-border {
//   --bs-spinner-width: 2rem; --bs-spinner-height: 2rem;
//   --bs-spinner-vertical-align: -0.125em;
//   --bs-spinner-border-width: 0.25em;
//   --bs-spinner-animation-speed: 0.75s;
//   --bs-spinner-animation-name: spinner-border;
//   border: var(--bs-spinner-border-width) solid currentcolor;
//   border-right-color: transparent;
// }
globalStyle(`${quartzScope}${spinnerBorder}`, {
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

// SOURCE CSS:
// .spinner-grow {
//   --bs-spinner-width: 2rem; --bs-spinner-height: 2rem;
//   --bs-spinner-vertical-align: -0.125em;
//   --bs-spinner-animation-speed: 0.75s;
//   --bs-spinner-animation-name: spinner-grow;
//   background-color: currentcolor; opacity: 0;
// }
globalStyle(`${quartzScope}${spinnerGrow}`, {
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

// ── Color variants (absorbing Bootstrap text-* utility classes) ───────────────

globalStyle(`${quartzScope}${spinnerPrimary}`, { color: varBsPrimary })
globalStyle(`${quartzScope}${spinnerSecondary}`, {
	// Quartz text-secondary resolves from --bs-secondary-rgb with opacity 1,
	// not from --bs-secondary (which is semi-transparent in this theme).
	color: `rgba(${varBsSecondaryRgb}, 1)`,
})
globalStyle(`${quartzScope}${spinnerSuccess}`, { color: varBsSuccess })
globalStyle(`${quartzScope}${spinnerDanger}`, { color: varBsDanger })
globalStyle(`${quartzScope}${spinnerWarning}`, { color: varBsWarning })
globalStyle(`${quartzScope}${spinnerInfo}`, { color: varBsInfo })
globalStyle(`${quartzScope}${spinnerLight}`, { color: varBsLight })
globalStyle(`${quartzScope}${spinnerDark}`, { color: varBsDark })
