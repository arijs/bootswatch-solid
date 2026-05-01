import { globalStyle, keyframes } from '@vanilla-extract/css'
import {
	progress,
	progressBar,
	progressBarAnimated,
	progressBarDanger,
	progressBarInfo,
	progressBarStriped,
	progressBarSuccess,
	progressBarWarning,
} from '../../../../theme-contract/ui/progress/contract.css'
import {
	varBsProgressBarBg,
	varBsProgressBarColor,
	varBsProgressBarTransition,
	varBsProgressBg,
	varBsProgressBorderRadius,
	varBsProgressFontSize,
	varBsProgressHeight,
} from '../../../../theme-contract/ui/progress/_vars.css'
import {
	varBsBorderRadius,
	varBsDanger,
	varBsDark,
	varBsInfo,
	varBsSecondaryBg,
	varBsSuccess,
	varBsWarning,
} from '../../../../theme-contract/_vars.css'
import { bootstrapScope } from '../../scope.css'

// ── @keyframes progress-bar-stripes ──────────────────────────────────────────
const progressBarStripes = keyframes({
	'0%': { backgroundPositionX: varBsProgressHeight },
})

// ── .progress ─────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .progress, .progress-stacked {
//   --bs-progress-height: 1rem; --bs-progress-font-size: 0.75rem;
//   --bs-progress-bg: var(--bs-secondary-bg);
//   --bs-progress-border-radius: var(--bs-border-radius);
//   --bs-progress-box-shadow: var(--bs-box-shadow-inset);
//   --bs-progress-bar-color: #fff; --bs-progress-bar-bg: #0d6efd;
//   --bs-progress-bar-transition: width 0.6s ease;
//   display: flex; height: var(--bs-progress-height); overflow: hidden;
//   font-size: var(--bs-progress-font-size);
//   background-color: var(--bs-progress-bg);
//   border-radius: var(--bs-progress-border-radius);
// }
globalStyle(`${bootstrapScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#0d6efd',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

// ── .progress-bar ─────────────────────────────────────────────────────────────

// SOURCE CSS:
// .progress-bar {
//   display: flex; flex-direction: column;
//   justify-content: center; overflow: hidden;
//   color: var(--bs-progress-bar-color);
//   text-align: center; white-space: nowrap;
//   background-color: var(--bs-progress-bar-bg);
//   transition: var(--bs-progress-bar-transition);
// }
globalStyle(`${bootstrapScope}${progressBar}`, {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	overflow: 'hidden',
	color: varBsProgressBarColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: varBsProgressBarBg,
	transition: varBsProgressBarTransition,
})

// ── Progress bar color variants (absorbing Bootstrap bg-* utility classes) ───

// bg-success: background-color: var(--bs-success)
globalStyle(`${bootstrapScope}${progressBarSuccess}`, {
	backgroundColor: varBsSuccess,
})

// bg-info text-dark: background-color: var(--bs-info); color: var(--bs-dark)
globalStyle(`${bootstrapScope}${progressBarInfo}`, {
	backgroundColor: varBsInfo,
	color: varBsDark,
})

// bg-warning text-dark: background-color: var(--bs-warning); color: var(--bs-dark)
globalStyle(`${bootstrapScope}${progressBarWarning}`, {
	backgroundColor: varBsWarning,
	color: varBsDark,
})

// bg-danger: background-color: var(--bs-danger)
globalStyle(`${bootstrapScope}${progressBarDanger}`, {
	backgroundColor: varBsDanger,
})

// ── .progress-bar-striped ─────────────────────────────────────────────────────

// SOURCE CSS:
// .progress-bar-striped {
//   background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%,
//     transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
//   background-size: var(--bs-progress-height) var(--bs-progress-height);
// }
globalStyle(`${bootstrapScope}${progressBarStriped}`, {
	backgroundImage:
		'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

// ── .progress-bar-animated ────────────────────────────────────────────────────

// SOURCE CSS: .progress-bar-animated { animation: 1s linear infinite progress-bar-stripes; }
globalStyle(`${bootstrapScope}${progressBarAnimated}`, {
	animation: `1s linear infinite ${progressBarStripes}`,
})
