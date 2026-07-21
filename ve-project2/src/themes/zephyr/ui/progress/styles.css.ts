import { globalStyle } from '@vanilla-extract/css'
import { zephyrScope } from '../../scope.css'

import { varBsBorderRadius, varBsBoxShadowInset, varBsSecondaryBg } from '../../../../theme-contract/_vars.css'
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

globalStyle(`${zephyrScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#3459e6',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
	boxShadow: varBsProgressBoxShadow,
})

globalStyle(`${zephyrScope}${progressStacked}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#3459e6',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
	boxShadow: varBsProgressBoxShadow,
})

globalStyle(`${zephyrScope}${progressBar}`, {
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

globalStyle(`${zephyrScope}${progressBar}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${progressBarStriped}`, {
	backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

globalStyle(`${zephyrScope}${progressStacked} > ${zephyrScope}${progress}`, {
	overflow: 'visible',
})

globalStyle(`${zephyrScope}${progressStacked} > ${zephyrScope}${progress} > ${zephyrScope}${progressBar}`, {
	width: '100%',
})

globalStyle(`${zephyrScope}${progressBarAnimated}`, {
	animation: '1s linear infinite progress-bar-stripes',
})

globalStyle(`${zephyrScope}${progressBarAnimated}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			animation: 'none',
		},
	},
})
