import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

import { varBsBorderRadius, varBsBoxShadowInset } from '../../../../theme-contract/_vars.css'
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

import { progressStacked } from '../../../../theme-contract/literal/contract.css'
import {
	progress,
	progressBar,
	progressBarAnimated,
	progressBarStriped,
} from '../../../../theme-contract/ui/progress/contract.css'

globalStyle(`${quartzScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: 'rgba(0, 0, 0, 0.2)',
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#e83283',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

globalStyle(`${quartzScope}${progressStacked}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: 'rgba(0, 0, 0, 0.2)',
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#e83283',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

globalStyle(`${quartzScope}${progressBar}`, {
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

globalStyle(`${quartzScope}${progressBar}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${progressBarStriped}`, {
	backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

globalStyle(`${quartzScope}${progressStacked} > ${quartzScope}${progress}`, {
	overflow: 'visible',
})

globalStyle(`${quartzScope}${progressStacked} > ${quartzScope}${progress} > ${quartzScope}${progressBar}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${progressBarAnimated}`, {
	animation: '1s linear infinite progress-bar-stripes',
})

globalStyle(`${quartzScope}${progressBarAnimated}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			animation: 'none',
		},
	},
})
