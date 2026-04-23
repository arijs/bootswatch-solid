import { style } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBorderRadiusPill,
	varBsDark,
	varBsPrimary,
	varBsSecondary,
	varBsSuccess,
	varBsDanger,
	varBsWarning,
	varBsInfo,
	varBsLight,
} from '../../../../theme-contract/_vars.css'

export const badge = style({
	vars: {
		'--bs-badge-padding-x': '0.65em',
		'--bs-badge-padding-y': '0.35em',
		'--bs-badge-font-size': '0.75em',
		'--bs-badge-font-weight': '700',
		'--bs-badge-color': '#fff',
		'--bs-badge-border-radius': varBsBorderRadius,
	},
	display: 'inline-block',
	padding: 'var(--bs-badge-padding-y) var(--bs-badge-padding-x)',
	fontSize: 'var(--bs-badge-font-size)',
	fontWeight: 'var(--bs-badge-font-weight)',
	lineHeight: 1,
	color: 'var(--bs-badge-color)',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	verticalAlign: 'baseline',
	borderRadius: 'var(--bs-badge-border-radius)',
	selectors: {
		'&:empty': {
			display: 'none',
		},
	},
})

export const roundedPill = style({
	borderRadius: `${varBsBorderRadiusPill} !important`,
})

export const bgPrimary = style({
	backgroundColor: `${varBsPrimary} !important`,
})

export const bgSecondary = style({
	backgroundColor: `${varBsSecondary} !important`,
})

export const bgSuccess = style({
	backgroundColor: `${varBsSuccess} !important`,
})

export const bgDanger = style({
	backgroundColor: `${varBsDanger} !important`,
})

export const bgWarning = style({
	backgroundColor: `${varBsWarning} !important`,
})

export const bgInfo = style({
	backgroundColor: `${varBsInfo} !important`,
})

export const bgLight = style({
	backgroundColor: `${varBsLight} !important`,
})

export const bgDark = style({
	backgroundColor: `${varBsDark} !important`,
})

export const textDark = style({
	color: `${varBsDark} !important`,
})