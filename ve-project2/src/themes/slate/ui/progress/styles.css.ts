import { globalStyle } from '@vanilla-extract/css'
import { slateScope } from '../../scope.css'

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

globalStyle(`${slateScope}${progress}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: '#1c1e22',
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#7a8288',
		[varBsProgressBarBg]: '#3a3f44',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

globalStyle(`${slateScope}${progressStacked}`, {
	vars: {
		[varBsProgressHeight]: '1rem',
		[varBsProgressFontSize]: '0.75rem',
		[varBsProgressBg]: '#1c1e22',
		[varBsProgressBorderRadius]: varBsBorderRadius,
		[varBsProgressBoxShadow]: varBsBoxShadowInset,
		[varBsProgressBarColor]: '#7a8288',
		[varBsProgressBarBg]: '#3a3f44',
		[varBsProgressBarTransition]: 'width 0.6s ease',
	},
	display: 'flex',
	height: varBsProgressHeight,
	overflow: 'hidden',
	fontSize: varBsProgressFontSize,
	backgroundColor: varBsProgressBg,
	borderRadius: varBsProgressBorderRadius,
})

globalStyle(`${slateScope}${progressBar}`, {
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

globalStyle(`${slateScope}${progressBar}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${progressBarStriped}`, {
	backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
	backgroundSize: `${varBsProgressHeight} ${varBsProgressHeight}`,
})

globalStyle(`${slateScope}${progressStacked} > ${slateScope}${progress}`, {
	overflow: 'visible',
})

globalStyle(`${slateScope}${progressStacked} > ${slateScope}${progress} > ${slateScope}${progressBar}`, {
	width: '100%',
})

globalStyle(`${slateScope}${progressBarAnimated}`, {
	animation: '1s linear infinite progress-bar-stripes',
})

globalStyle(`${slateScope}${progressBarAnimated}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			animation: 'none',
		},
	},
})
