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
import { vaporScope } from '../../scope.css'

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
globalStyle(`${vaporScope}${progress}`, {
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
globalStyle(`${vaporScope}${progressBar}`, {
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
globalStyle(`${vaporScope}${progressBarSuccess}`, {
	backgroundColor: varBsSuccess,
})

// bg-info text-dark: background-color: var(--bs-info); color: var(--bs-dark)
globalStyle(`${vaporScope}${progressBarInfo}`, {
	backgroundColor: varBsInfo,
	color: varBsDark,
	textShadow: '0 0 1px rgba(23, 2, 41, 0.3), 0 0 2px rgba(23, 2, 41, 0.3), 0 0 5px rgba(23, 2, 41, 0.2)',
})

// bg-warning text-dark: background-color: var(--bs-warning); color: var(--bs-dark)
globalStyle(`${vaporScope}${progressBarWarning}`, {
	backgroundColor: varBsWarning,
	color: varBsDark,
	textShadow: '0 0 1px rgba(23, 2, 41, 0.3), 0 0 2px rgba(23, 2, 41, 0.3), 0 0 5px rgba(23, 2, 41, 0.2)',
})

// bg-danger: background-color: var(--bs-danger)
globalStyle(`${vaporScope}${progressBarDanger}`, {
	backgroundColor: varBsDanger,
})

// ── .progress-bar-striped ─────────────────────────────────────────────────────

// SOURCE CSS:
// .progress-bar-striped {
//   background-image: linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%,
//     transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);
//   background-size: var(--bs-progress-height) var(--bs-progress-height);
// }
globalStyle(`${vaporScope}${progressBarStriped}`, {
	backgroundImage:
		'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

// ── .progress-bar-animated ────────────────────────────────────────────────────

// SOURCE CSS: .progress-bar-animated { animation: 1s linear infinite progress-bar-stripes; }
globalStyle(`${vaporScope}${progressBarAnimated}`, {
	animation: `1s linear infinite ${progressBarStripes}`,
})

globalStyle(`${vaporScope}${progress}`, {
	vars: {
		[varBsProgressBg]: '#250d49',
		[varBsProgressBarBg]: '#6f42c1',
	},
	overflow: 'visible',
})

globalStyle(`${vaporScope}${progressBar}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${progressBarSuccess}`, {
	boxShadow: '0 0 2px rgba(60, 242, 129, 0.9), 0 0 4px rgba(60, 242, 129, 0.4), 0 0 1rem rgba(60, 242, 129, 0.3), 0 0 4rem rgba(60, 242, 129, 0.1)',
})

globalStyle(`${vaporScope}${progressBarInfo}`, {
	boxShadow: '0 0 2px rgba(27, 162, 246, 0.9), 0 0 4px rgba(27, 162, 246, 0.4), 0 0 1rem rgba(27, 162, 246, 0.3), 0 0 4rem rgba(27, 162, 246, 0.1)',
})

globalStyle(`${vaporScope}${progressBarWarning}`, {
	boxShadow: '0 0 2px rgba(255, 193, 7, 0.9), 0 0 4px rgba(255, 193, 7, 0.4), 0 0 1rem rgba(255, 193, 7, 0.3), 0 0 4rem rgba(255, 193, 7, 0.1)',
})

globalStyle(`${vaporScope}${progressBarDanger}`, {
	boxShadow: '0 0 2px rgba(228, 76, 85, 0.9), 0 0 4px rgba(228, 76, 85, 0.4), 0 0 1rem rgba(228, 76, 85, 0.3), 0 0 4rem rgba(228, 76, 85, 0.1)',
})
