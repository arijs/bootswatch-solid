import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsDangerRgb,
	varBsDarkRgb,
	varBsInfoRgb,
	varBsLightRgb,
	varBsPrimaryRgb,
	varBsSecondaryRgb,
	varBsSuccessRgb,
	varBsWarningRgb,
} from '../../../../theme-contract/_vars.css'
import {
	varBsSpinnerAnimationName,
	varBsSpinnerAnimationSpeed,
	varBsSpinnerBorderWidth,
	varBsSpinnerHeight,
	varBsSpinnerTextOpacity,
	varBsSpinnerVerticalAlign,
	varBsSpinnerWidth,
} from '../../../../theme-contract/ui/spinners/_vars.css'
import { spinnerBorder as spinnerBorderAnimation, spinnerGrow as spinnerGrowAnimation } from '../../_keyframes.css'

const spinnerBaseVars = {
	[varBsSpinnerWidth]: '2rem',
	[varBsSpinnerHeight]: '2rem',
	[varBsSpinnerVerticalAlign]: '-0.125em',
	[varBsSpinnerAnimationSpeed]: '0.75s',
}

export const spinnerBorder = style({
	vars: {
		...spinnerBaseVars,
		[varBsSpinnerBorderWidth]: '0.25em',
		[varBsSpinnerAnimationName]: spinnerBorderAnimation,
	},
	display: 'inline-block',
	flexShrink: 0,
	width: varBsSpinnerWidth,
	height: varBsSpinnerHeight,
	verticalAlign: varBsSpinnerVerticalAlign,
	borderRadius: '50%',
	animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
	border: `${varBsSpinnerBorderWidth} solid currentcolor`,
	borderRightColor: 'transparent',
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})

export const spinnerGrow = style({
	vars: {
		...spinnerBaseVars,
		[varBsSpinnerAnimationName]: spinnerGrowAnimation,
	},
	display: 'inline-block',
	flexShrink: 0,
	width: varBsSpinnerWidth,
	height: varBsSpinnerHeight,
	verticalAlign: varBsSpinnerVerticalAlign,
	borderRadius: '50%',
	animation: `${varBsSpinnerAnimationSpeed} linear infinite ${varBsSpinnerAnimationName}`,
	backgroundColor: 'currentcolor',
	opacity: 0,
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			vars: {
				[varBsSpinnerAnimationSpeed]: '1.5s',
			},
		},
	},
})

export const visuallyHidden = style({
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

globalStyle(`${visuallyHidden}:not(caption)`, {
	position: 'absolute !important' as 'absolute',
})

export const textPrimary = style({
	vars: {
		[varBsSpinnerTextOpacity]: '1',
	},
	color: `rgba(${varBsPrimaryRgb}, ${varBsSpinnerTextOpacity}) !important`,
})

export const textSecondary = style({
	vars: {
		[varBsSpinnerTextOpacity]: '1',
	},
	color: `rgba(${varBsSecondaryRgb}, ${varBsSpinnerTextOpacity}) !important`,
})

export const textSuccess = style({
	vars: {
		[varBsSpinnerTextOpacity]: '1',
	},
	color: `rgba(${varBsSuccessRgb}, ${varBsSpinnerTextOpacity}) !important`,
})

export const textDanger = style({
	vars: {
		[varBsSpinnerTextOpacity]: '1',
	},
	color: `rgba(${varBsDangerRgb}, ${varBsSpinnerTextOpacity}) !important`,
})

export const textWarning = style({
	vars: {
		[varBsSpinnerTextOpacity]: '1',
	},
	color: `rgba(${varBsWarningRgb}, ${varBsSpinnerTextOpacity}) !important`,
})

export const textInfo = style({
	vars: {
		[varBsSpinnerTextOpacity]: '1',
	},
	color: `rgba(${varBsInfoRgb}, ${varBsSpinnerTextOpacity}) !important`,
})

export const textLight = style({
	vars: {
		[varBsSpinnerTextOpacity]: '1',
	},
	color: `rgba(${varBsLightRgb}, ${varBsSpinnerTextOpacity}) !important`,
})

export const textDark = style({
	vars: {
		[varBsSpinnerTextOpacity]: '1',
	},
	color: `rgba(${varBsDarkRgb}, ${varBsSpinnerTextOpacity}) !important`,
})
