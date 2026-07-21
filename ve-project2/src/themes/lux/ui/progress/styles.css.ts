import { globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../../scope.css'

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

globalStyle(`${luxScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#1a1a1a',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
})

globalStyle(`${luxScope}${progressStacked}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#1a1a1a',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
})

globalStyle(`${luxScope}${progressBar}`, {
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

globalStyle(`${luxScope}${progressBar}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${progressBarStriped}`, {
	backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

globalStyle(`${luxScope}${progressStacked} > ${luxScope}${progress}`, {
	overflow: 'visible',
})

globalStyle(`${luxScope}${progressStacked} > ${luxScope}${progress} > ${luxScope}${progressBar}`, {
	width: '100%',
})

globalStyle(`${luxScope}${progressBarAnimated}`, {
	animation: '1s linear infinite progress-bar-stripes',
})

globalStyle(`${luxScope}${progressBarAnimated}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			animation: 'none',
		},
	},
})
