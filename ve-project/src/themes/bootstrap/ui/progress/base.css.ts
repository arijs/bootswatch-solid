import { keyframes, style } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBoxShadowInset,
	varBsDanger,
	varBsDark,
	varBsInfo,
	varBsPrimary,
	varBsSecondaryBg,
	varBsSuccess,
	varBsWarning,
	varBsWhite,
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

const progressRootVars = {
	[varBsProgressHeight]: '1rem',
	[varBsProgressFontSize]: '0.75rem',
	[varBsProgressBg]: varBsSecondaryBg,
	[varBsProgressBorderRadius]: varBsBorderRadius,
	[varBsProgressBoxShadow]: varBsBoxShadowInset,
	[varBsProgressBarColor]: varBsWhite,
	[varBsProgressBarBg]: varBsPrimary,
	[varBsProgressBarTransition]: 'width 0.6s ease',
}

const progressBarStripes = keyframes({
	'0%': {
		backgroundPositionX: varBsProgressHeight,
	},
})

export const progress = style({
	vars: progressRootVars,
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

export const progressStacked = style({
	vars: progressRootVars,
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

export const progressBar = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	overflow: 'hidden',
	color: varBsProgressBarColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: varBsProgressBarBg,
	transition: varBsProgressBarTransition,
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

export const progressBarSuccess = style({
	backgroundColor: varBsSuccess,
})

export const progressBarInfo = style({
	backgroundColor: varBsInfo,
})

export const progressBarWarning = style({
	backgroundColor: varBsWarning,
})

export const progressBarDanger = style({
	backgroundColor: varBsDanger,
})

export const progressBarTextDark = style({
	color: varBsDark,
})

export const progressBarStriped = style({
	backgroundImage:
		'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

export const progressBarAnimated = style({
	animation: `${progressBarStripes} 1s linear infinite`,
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			animation: 'none',
		},
	},
})
