import { globalStyle } from '@vanilla-extract/css'
import { ceruleanScope } from '../../scope.css'

import {
	varBsSpinnerAnimationName,
	varBsSpinnerAnimationSpeed,
	varBsSpinnerBorderWidth,
	varBsSpinnerHeight,
	varBsSpinnerVerticalAlign,
	varBsSpinnerWidth,
} from '../../../../theme-contract/ui/spinners/_vars.css'

import { spinnerBorderSm, spinnerGrowSm } from '../../../../theme-contract/literal/contract.css'
import { spinnerBorder, spinnerGrow } from '../../../../theme-contract/ui/spinners/contract.css'

globalStyle(`${ceruleanScope}${spinnerGrow}`, {
	display: 'inline-block',
	flexShrink: '0',
	width: varBsSpinnerWidth,
	height: varBsSpinnerHeight,
	verticalAlign: varBsSpinnerVerticalAlign,
	borderRadius: '50%',
	animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
})

globalStyle(`${ceruleanScope}${spinnerBorder}`, {
	display: 'inline-block',
	flexShrink: '0',
	width: varBsSpinnerWidth,
	height: varBsSpinnerHeight,
	verticalAlign: varBsSpinnerVerticalAlign,
	borderRadius: '50%',
	animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
})

globalStyle(`${ceruleanScope}${spinnerBorder}`, {
	vars: {
		[varBsSpinnerWidth]: '2rem',
		[varBsSpinnerHeight]: '2rem',
		[varBsSpinnerVerticalAlign]: '-0.125em',
		[varBsSpinnerBorderWidth]: '0.25em',
		[varBsSpinnerAnimationSpeed]: '0.75s',
		[varBsSpinnerAnimationName]: 'spinner-border',
	},
	border: `${varBsSpinnerBorderWidth} solid currentcolor`,
	borderRightColor: 'transparent',
})

globalStyle(`${ceruleanScope}${spinnerBorderSm}`, {
	vars: {
		[varBsSpinnerWidth]: '1rem',
		[varBsSpinnerHeight]: '1rem',
		[varBsSpinnerBorderWidth]: '0.2em',
	},
})

globalStyle(`${ceruleanScope}${spinnerGrow}`, {
	vars: {
		[varBsSpinnerWidth]: '2rem',
		[varBsSpinnerHeight]: '2rem',
		[varBsSpinnerVerticalAlign]: '-0.125em',
		[varBsSpinnerAnimationSpeed]: '0.75s',
		[varBsSpinnerAnimationName]: 'spinner-grow',
	},
	backgroundColor: 'currentcolor',
	opacity: '0',
})

globalStyle(`${ceruleanScope}${spinnerGrowSm}`, {
	vars: {
		[varBsSpinnerWidth]: '1rem',
		[varBsSpinnerHeight]: '1rem',
	},
})

globalStyle(`${ceruleanScope}${spinnerBorder}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})

globalStyle(`${ceruleanScope}${spinnerGrow}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})
