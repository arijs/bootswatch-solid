import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsLinkColor,
	varBsLinkDecoration,
	varBsLinkHoverColor,
} from '../../../../theme-contract/_vars.css'
import {
	varBsBtnActiveBg,
	varBsBtnActiveBorderColor,
	varBsBtnActiveBoxShadow,
	varBsBtnActiveColor,
	varBsBtnBg,
	varBsBtnBorderColor,
	varBsBtnBorderRadius,
	varBsBtnBoxShadow,
	varBsBtnColor,
	varBsBtnDisabledBg,
	varBsBtnDisabledBorderColor,
	varBsBtnDisabledColor,
	varBsBtnFocusBoxShadowRgb,
	varBsBtnFontSize,
	varBsBtnFontWeight,
	varBsBtnHoverBg,
	varBsBtnHoverBorderColor,
	varBsBtnHoverColor,
	varBsBtnPaddingX,
	varBsBtnPaddingY,
} from '../../../../theme-contract/ui/buttons/_vars.css'
import { btn, btnCheckHook, btnDisabledHook } from './base.css'

const activeInsetShadow = 'inset 0 3px 5px rgba(0, 0, 0, 0.125)'

export const btnCheck = style([
	btnCheckHook,
	{
		position: 'absolute',
		clip: 'rect(0, 0, 0, 0)',
		pointerEvents: 'none',
	},
])

globalStyle(`${btnCheck}[disabled] + ${btn}, ${btnCheck}:disabled + ${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

export const btnLg = style({
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

export const btnSm = style({
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

type SolidPalette = {
	color: string
	background: string
	border: string
	hoverColor: string
	hoverBackground: string
	hoverBorder: string
	focusRgb: string
	activeColor: string
	activeBackground: string
	activeBorder: string
	disabledColor: string
	disabledBackground: string
	disabledBorder: string
}

type OutlinePalette = {
	color: string
	hoverColor: string
	hoverBackground: string
	hoverBorder: string
	focusRgb: string
}

const createSolidVariant = (palette: SolidPalette) =>
	style({
		vars: {
			[varBsBtnColor]: palette.color,
			[varBsBtnBg]: palette.background,
			[varBsBtnBorderColor]: palette.border,
			[varBsBtnHoverColor]: palette.hoverColor,
			[varBsBtnHoverBg]: palette.hoverBackground,
			[varBsBtnHoverBorderColor]: palette.hoverBorder,
			[varBsBtnFocusBoxShadowRgb]: palette.focusRgb,
			[varBsBtnActiveColor]: palette.activeColor,
			[varBsBtnActiveBg]: palette.activeBackground,
			[varBsBtnActiveBorderColor]: palette.activeBorder,
			[varBsBtnActiveBoxShadow]: activeInsetShadow,
			[varBsBtnDisabledColor]: palette.disabledColor,
			[varBsBtnDisabledBg]: palette.disabledBackground,
			[varBsBtnDisabledBorderColor]: palette.disabledBorder,
		},
	})

const createOutlineVariant = (palette: OutlinePalette) =>
	style({
		vars: {
			[varBsBtnColor]: palette.color,
			[varBsBtnBorderColor]: palette.color,
			[varBsBtnHoverColor]: palette.hoverColor,
			[varBsBtnHoverBg]: palette.hoverBackground,
			[varBsBtnHoverBorderColor]: palette.hoverBorder,
			[varBsBtnFocusBoxShadowRgb]: palette.focusRgb,
			[varBsBtnActiveColor]: palette.hoverColor,
			[varBsBtnActiveBg]: palette.hoverBackground,
			[varBsBtnActiveBorderColor]: palette.hoverBorder,
			[varBsBtnActiveBoxShadow]: activeInsetShadow,
			[varBsBtnDisabledColor]: palette.color,
			[varBsBtnDisabledBg]: 'transparent',
			[varBsBtnDisabledBorderColor]: palette.color,
		},
	})

export const btnPrimary = createSolidVariant({
	color: '#fff',
	background: '#0d6efd',
	border: '#0d6efd',
	hoverColor: '#fff',
	hoverBackground: '#0b5ed7',
	hoverBorder: '#0a58ca',
	focusRgb: '49, 132, 253',
	activeColor: '#fff',
	activeBackground: '#0a58ca',
	activeBorder: '#0a53be',
	disabledColor: '#fff',
	disabledBackground: '#0d6efd',
	disabledBorder: '#0d6efd',
})

export const btnSecondary = createSolidVariant({
	color: '#fff',
	background: '#6c757d',
	border: '#6c757d',
	hoverColor: '#fff',
	hoverBackground: '#5c636a',
	hoverBorder: '#565e64',
	focusRgb: '130, 138, 145',
	activeColor: '#fff',
	activeBackground: '#565e64',
	activeBorder: '#51585e',
	disabledColor: '#fff',
	disabledBackground: '#6c757d',
	disabledBorder: '#6c757d',
})

export const btnSuccess = createSolidVariant({
	color: '#fff',
	background: '#198754',
	border: '#198754',
	hoverColor: '#fff',
	hoverBackground: '#157347',
	hoverBorder: '#146c43',
	focusRgb: '60, 153, 110',
	activeColor: '#fff',
	activeBackground: '#146c43',
	activeBorder: '#13653f',
	disabledColor: '#fff',
	disabledBackground: '#198754',
	disabledBorder: '#198754',
})

export const btnInfo = createSolidVariant({
	color: '#000',
	background: '#0dcaf0',
	border: '#0dcaf0',
	hoverColor: '#000',
	hoverBackground: '#31d2f2',
	hoverBorder: '#25cff2',
	focusRgb: '11, 172, 204',
	activeColor: '#000',
	activeBackground: '#3dd5f3',
	activeBorder: '#25cff2',
	disabledColor: '#000',
	disabledBackground: '#0dcaf0',
	disabledBorder: '#0dcaf0',
})

export const btnWarning = createSolidVariant({
	color: '#000',
	background: '#ffc107',
	border: '#ffc107',
	hoverColor: '#000',
	hoverBackground: '#ffca2c',
	hoverBorder: '#ffc720',
	focusRgb: '217, 164, 6',
	activeColor: '#000',
	activeBackground: '#ffcd39',
	activeBorder: '#ffc720',
	disabledColor: '#000',
	disabledBackground: '#ffc107',
	disabledBorder: '#ffc107',
})

export const btnDanger = createSolidVariant({
	color: '#fff',
	background: '#dc3545',
	border: '#dc3545',
	hoverColor: '#fff',
	hoverBackground: '#bb2d3b',
	hoverBorder: '#b02a37',
	focusRgb: '225, 83, 97',
	activeColor: '#fff',
	activeBackground: '#b02a37',
	activeBorder: '#a52834',
	disabledColor: '#fff',
	disabledBackground: '#dc3545',
	disabledBorder: '#dc3545',
})

export const btnLight = createSolidVariant({
	color: '#000',
	background: '#f8f9fa',
	border: '#f8f9fa',
	hoverColor: '#000',
	hoverBackground: '#d3d4d5',
	hoverBorder: '#c6c7c8',
	focusRgb: '211, 212, 213',
	activeColor: '#000',
	activeBackground: '#c6c7c8',
	activeBorder: '#babbbc',
	disabledColor: '#000',
	disabledBackground: '#f8f9fa',
	disabledBorder: '#f8f9fa',
})

export const btnDark = createSolidVariant({
	color: '#fff',
	background: '#212529',
	border: '#212529',
	hoverColor: '#fff',
	hoverBackground: '#424649',
	hoverBorder: '#373b3e',
	focusRgb: '66, 70, 73',
	activeColor: '#fff',
	activeBackground: '#4d5154',
	activeBorder: '#373b3e',
	disabledColor: '#fff',
	disabledBackground: '#212529',
	disabledBorder: '#212529',
})

export const btnLink = style({
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBg]: 'transparent',
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBg]: 'transparent',
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnActiveBoxShadow]: 'none',
		[varBsBtnDisabledColor]: '#6c757d',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '49, 132, 253',
	},
	textDecoration: varBsLinkDecoration,
	':hover': {
		color: varBsBtnHoverColor,
		textDecoration: varBsLinkDecoration,
	},
	':focus-visible': {
		color: varBsBtnColor,
		textDecoration: varBsLinkDecoration,
	},
	selectors: {
		[`&:disabled, &${btnDisabledHook}, fieldset:disabled &`]: {
			textDecoration: 'none',
		},
	},
})

export const btnOutlinePrimary = createOutlineVariant({
	color: '#0d6efd',
	hoverColor: '#fff',
	hoverBackground: '#0d6efd',
	hoverBorder: '#0d6efd',
	focusRgb: '13, 110, 253',
})

export const btnOutlineSecondary = createOutlineVariant({
	color: '#6c757d',
	hoverColor: '#fff',
	hoverBackground: '#6c757d',
	hoverBorder: '#6c757d',
	focusRgb: '108, 117, 125',
})

export const btnOutlineSuccess = createOutlineVariant({
	color: '#198754',
	hoverColor: '#fff',
	hoverBackground: '#198754',
	hoverBorder: '#198754',
	focusRgb: '25, 135, 84',
})

export const btnOutlineInfo = createOutlineVariant({
	color: '#0dcaf0',
	hoverColor: '#000',
	hoverBackground: '#0dcaf0',
	hoverBorder: '#0dcaf0',
	focusRgb: '13, 202, 240',
})

export const btnOutlineWarning = createOutlineVariant({
	color: '#ffc107',
	hoverColor: '#000',
	hoverBackground: '#ffc107',
	hoverBorder: '#ffc107',
	focusRgb: '255, 193, 7',
})

export const btnOutlineDanger = createOutlineVariant({
	color: '#dc3545',
	hoverColor: '#fff',
	hoverBackground: '#dc3545',
	hoverBorder: '#dc3545',
	focusRgb: '220, 53, 69',
})

export const btnOutlineLight = createOutlineVariant({
	color: '#f8f9fa',
	hoverColor: '#000',
	hoverBackground: '#f8f9fa',
	hoverBorder: '#f8f9fa',
	focusRgb: '248, 249, 250',
})

export const btnOutlineDark = createOutlineVariant({
	color: '#212529',
	hoverColor: '#fff',
	hoverBackground: '#212529',
	hoverBorder: '#212529',
	focusRgb: '33, 37, 41',
})
