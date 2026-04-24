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
import {
	varBsBadgeBorderRadius,
	varBsBadgeColor,
	varBsBadgeFontSize,
	varBsBadgeFontWeight,
	varBsBadgePaddingX,
	varBsBadgePaddingY,
} from '../../../../theme-contract/ui/badge/_vars.css'

export const badge = style({
	vars: {
		[varBsBadgePaddingX]: '0.65em',
		[varBsBadgePaddingY]: '0.35em',
		[varBsBadgeFontSize]: '0.75em',
		[varBsBadgeFontWeight]: '700',
		[varBsBadgeColor]: '#fff',
		[varBsBadgeBorderRadius]: varBsBorderRadius,
	},
	display: 'inline-block',
	padding: `${varBsBadgePaddingY} ${varBsBadgePaddingX}`,
	fontSize: varBsBadgeFontSize,
	fontWeight: varBsBadgeFontWeight,
	lineHeight: 1,
	color: varBsBadgeColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	verticalAlign: 'baseline',
	borderRadius: varBsBadgeBorderRadius,
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