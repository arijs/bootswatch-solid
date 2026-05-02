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
import { sketchyScope } from '../../scope.css'

// ── @keyframes progress-bar-stripes ──────────────────────────────────────────
const progressBarStripes = keyframes({
	'0%': { backgroundPositionX: varBsProgressHeight },
})

// SOURCE CSS (screenshots/sketchy/bootstrap.css .progress):
// --bs-progress-bg: #fff;
// --bs-progress-bar-bg: #ccc;
// Also: .progress { border: 2px solid #333; border-radius: 255px 25px 225px 25px/25px 225px 25px 255px; }
globalStyle(`${sketchyScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: '#fff',
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#ccc',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	border: '2px solid #333',
	borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
})

// ── .progress-bar ─────────────────────────────────────────────────────────────
globalStyle(`${sketchyScope}${progressBar}`, {
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

// ── Progress bar color variants ───────────────────────────────────────────────
globalStyle(`${sketchyScope}${progressBarSuccess}`, {
	backgroundColor: varBsSuccess,
})

globalStyle(`${sketchyScope}${progressBarInfo}`, {
	backgroundColor: varBsInfo,
	color: varBsDark,
})

globalStyle(`${sketchyScope}${progressBarWarning}`, {
	backgroundColor: varBsWarning,
	color: varBsDark,
})

globalStyle(`${sketchyScope}${progressBarDanger}`, {
	backgroundColor: varBsDanger,
})

// ── .progress-bar-striped ─────────────────────────────────────────────────────
globalStyle(`${sketchyScope}${progressBarStriped}`, {
	backgroundImage:
		'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

// ── .progress-bar-animated ────────────────────────────────────────────────────
globalStyle(`${sketchyScope}${progressBarAnimated}`, {
	animation: `1s linear infinite ${progressBarStripes}`,
})
