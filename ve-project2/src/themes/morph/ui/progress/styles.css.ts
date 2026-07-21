import { globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../../scope.css'

import { varBsBoxShadowInset, varBsSecondaryBg } from '../../../../theme-contract/_vars.css'
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

globalStyle(`${morphScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: '1.5rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: '50rem',
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#378dfc',
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

globalStyle(`${morphScope}${progressStacked}`, {
	vars: {
		[varBsProgressHeight]: '1.5rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: varBsSecondaryBg,
		[varBsProgressBorderRadius]: '50rem',
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#fff',
		[varBsProgressBarBg]: '#378dfc',
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

globalStyle(`${morphScope}${progressBar}`, {
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

globalStyle(`${morphScope}${progressBar}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${progressBarStriped}`, {
	backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

globalStyle(`${morphScope}${progressStacked} > ${morphScope}${progress}`, {
	overflow: 'visible',
})

globalStyle(`${morphScope}${progressStacked} > ${morphScope}${progress} > ${morphScope}${progressBar}`, {
	width: '100%',
})

globalStyle(`${morphScope}${progressBarAnimated}`, {
	animation: '1s linear infinite progress-bar-stripes',
})

globalStyle(`${morphScope}${progressBarAnimated}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			animation: 'none',
		},
	},
})

globalStyle(`${morphScope}${progress}`, {
	boxShadow: 'inset 2px 4px 6px rgba(109, 114, 121, 0.2), inset -3px -2px 5px rgba(255, 255, 255, 0.8)',
})

globalStyle(`${morphScope}${progressBar}`, {
	boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${morphScope}${progressBar}:first-child`, {
	borderTopLeftRadius: '50rem',
	borderBottomLeftRadius: '50rem',
})

globalStyle(`${morphScope}${progressBar}:last-child`, {
	borderTopRightRadius: '50rem',
	borderBottomRightRadius: '50rem',
})
