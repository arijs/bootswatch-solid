import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBoxShadowInset,
	varBsDangerRgb,
	varBsDarkRgb,
	varBsInfoRgb,
	varBsSuccessRgb,
	varBsWarningRgb,
} from '../../../../theme-contract/_vars.css'
import {
	varBsProgressBarBg,
	varBsProgressBarColor,
	varBsProgressBarTransition,
	varBsProgressBg,
	varBsProgressBorderRadius,
	varBsProgressBoxShadow,
	varBsProgressFontSize,
	varBsProgressHeight,
} from '../../../../theme-contract/ui/progress/_vars.css'
import {
	progress,
	progressBar,
	progressBarAnimated,
	progressBarDanger,
	progressBarInfo,
	progressBarStriped,
	progressBarSuccess,
	progressBarTextDark,
	progressBarWarning,
} from '../../../../theme-contract/ui/progress/contract.css'
import { darklyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/progress
// Review [UNMAPPED] and [DELTA] comments before committing.

globalStyle(`${darklyScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: "1rem",
		[varBsProgressFontSize]: "0.75rem",
		[varBsProgressBg]: "#444",
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: "#fff",
		[varBsProgressBarBg]: "#375a7f",
		[varBsProgressBarTransition]: "width 0.6s ease",
	},
	display: "flex",
	height: varBsProgressHeight,
	overflow: "hidden",
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

globalStyle(`${darklyScope}${progressBar}`, {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	overflow: "hidden",
	color: varBsProgressBarColor,
	textAlign: "center",
	whiteSpace: "nowrap",
	backgroundColor: varBsProgressBarBg,
	transition: varBsProgressBarTransition,
})

globalStyle(`${darklyScope}${progressBarDanger}`, {
	backgroundColor: `rgba(${varBsDangerRgb}, 1) !important`,
})

globalStyle(`${darklyScope}${progressBarSuccess}`, {
	backgroundColor: `rgba(${varBsSuccessRgb}, 1) !important`,
})

globalStyle(`${darklyScope}${progressBar}${progressBarTextDark}`, {
	color: `rgba(${varBsDarkRgb}, 1) !important`,
})

globalStyle(`${darklyScope}${progressBarInfo}`, {
	backgroundColor: `rgba(${varBsInfoRgb}, 1) !important`,
})

globalStyle(`${darklyScope}${progressBarWarning}`, {
	backgroundColor: `rgba(${varBsWarningRgb}, 1) !important`,
})

globalStyle(`${darklyScope}${progressBarStriped}`, {
	backgroundImage: "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

globalStyle(`${darklyScope}${progressBarAnimated}`, {
	animation: "1s linear infinite progress-bar-stripes",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
globalStyle(`.progress-stacked > ${darklyScope}${progress}`, {
	overflow: "visible",
})

globalStyle(`.progress-stacked > ${darklyScope}${progress} > ${darklyScope}${progressBar}`, {
	width: "100%",
})
