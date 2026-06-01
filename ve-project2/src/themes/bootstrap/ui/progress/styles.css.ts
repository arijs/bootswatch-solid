import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBoxShadowInset,
	varBsDangerRgb,
	varBsInfoRgb,
	varBsSecondaryBg,
	varBsSuccessRgb,
	varBsTextOpacity,
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
import { bootstrapScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/progress
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .progress { --bs-progress-height: 1rem; --bs-progress-font-size: 0.75rem; --bs-progress-bg: var(--bs-secondary-bg); --bs-progress-border-radius: var(--bs-border-radius); --bs-progress-box-shadow: var(--bs-box-shadow-inset); --bs-progress-bar-color: #fff; --bs-progress-bar-bg: #0d6efd; --bs-progress-bar-transition: width 0.6s ease; display: flex; height: var(--bs-progress-height); overflow: hidden; font-size: var(--bs-progress-font-size); background-color: var(--bs-progress-bg); border-radius: var(--bs-progress-border-radius); }
globalStyle(`${bootstrapScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: "1rem",
		[varBsProgressFontSize]: "0.75rem",
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: "#fff",
		[varBsProgressBarBg]: "#0d6efd",
		[varBsProgressBarTransition]: "width 0.6s ease",
	},
	display: "flex",
	height: varBsProgressHeight,
	overflow: "hidden",
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

// SOURCE CSS:
// .progress-bar { display: flex; flex-direction: column; justify-content: center; overflow: hidden; color: var(--bs-progress-bar-color); text-align: center; white-space: nowrap; background-color: var(--bs-progress-bar-bg); transition: var(--bs-progress-bar-transition); }
globalStyle(`${bootstrapScope}${progressBar}`, {
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

// SOURCE CSS:
// .bg-danger { --bs-bg-opacity: 1; background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${progressBarDanger}`, {
	backgroundColor: `rgba(${varBsDangerRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-success { --bs-bg-opacity: 1; background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${progressBarSuccess}`, {
	backgroundColor: `rgba(${varBsSuccessRgb}, 1) !important`,
})

// SOURCE CSS:
// .text-dark { --bs-text-opacity: 1; color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important; }
// [UNMAPPED_VAR] --bs-text-opacity
globalStyle(`${bootstrapScope}${progressBarTextDark}`, {
	color: `rgba(var(--bs-dark-rgb), ${varBsTextOpacity} ) !important`,
})

// SOURCE CSS:
// .bg-info { --bs-bg-opacity: 1; background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${progressBarInfo}`, {
	backgroundColor: `rgba(${varBsInfoRgb}, 1) !important`,
})

// SOURCE CSS:
// .bg-warning { --bs-bg-opacity: 1; background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important; }
// [UNMAPPED_VAR] --bs-bg-opacity
globalStyle(`${bootstrapScope}${progressBarWarning}`, {
	backgroundColor: `rgba(${varBsWarningRgb}, 1) !important`,
})

// SOURCE CSS:
// .progress-bar-striped { background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); background-size: var(--bs-progress-height) var(--bs-progress-height); }
globalStyle(`${bootstrapScope}${progressBarStriped}`, {
	backgroundImage: "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

// SOURCE CSS:
// .progress-bar-animated { animation: 1s linear infinite progress-bar-stripes; }
globalStyle(`${bootstrapScope}${progressBarAnimated}`, {
	animation: "1s linear infinite progress-bar-stripes",
})
