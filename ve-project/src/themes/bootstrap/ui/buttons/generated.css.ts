import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsGradient,
	varBsLinkColor,
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
import { btn, btnCheckHook } from './base.css'

const activeInsetShadow = 'inset 0 3px 5px rgba(0, 0, 0, 0.125)'

// .btn-check { position: absolute; clip: rect(0, 0, 0, 0); pointer-events: none; }
export const btnCheck = style([
	btnCheckHook,
	{
		position: 'absolute',
		clip: 'rect(0, 0, 0, 0)',
		pointerEvents: 'none',
	},
])

// .btn-check[disabled] + .btn, .btn-check:disabled + .btn { pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(`${btnCheck}[disabled] + ${btn}, ${btnCheck}:disabled + ${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

// .btn-lg { --bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 1rem; --bs-btn-font-size: 1.25rem; --bs-btn-border-radius: var(--bs-border-radius-lg); }
export const btnLg = style({
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

// .btn-sm { --bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem; --bs-btn-font-size: 0.875rem; --bs-btn-border-radius: var(--bs-border-radius-sm); }
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
	activeColor: string
	activeBackground: string
	activeBorder: string
	disabledColor: string
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
			[varBsBtnActiveColor]: palette.activeColor,
			[varBsBtnActiveBg]: palette.activeBackground,
			[varBsBtnActiveBorderColor]: palette.activeBorder,
			[varBsBtnActiveBoxShadow]: activeInsetShadow,
			[varBsBtnDisabledColor]: palette.disabledColor,
			[varBsBtnDisabledBg]: 'transparent',
			[varBsBtnDisabledBorderColor]: palette.disabledColor,
			[varBsGradient]: 'none',
		},
	})

// .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #0d6efd; --bs-btn-border-color: #0d6efd; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0b5ed7; --bs-btn-hover-border-color: #0a58ca; --bs-btn-focus-shadow-rgb: 49, 132, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #0d6efd; --bs-btn-disabled-border-color: #0d6efd; }
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

// .btn-secondary { --bs-btn-color: #fff; --bs-btn-bg: #6c757d; --bs-btn-border-color: #6c757d; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #5c636a; --bs-btn-hover-border-color: #565e64; --bs-btn-focus-shadow-rgb: 130, 138, 145; --bs-btn-active-color: #fff; --bs-btn-active-bg: #565e64; --bs-btn-active-border-color: #51585e; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #6c757d; --bs-btn-disabled-border-color: #6c757d; }
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

// .btn-success { --bs-btn-color: #fff; --bs-btn-bg: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #157347; --bs-btn-hover-border-color: #146c43; --bs-btn-focus-shadow-rgb: 60, 153, 110; --bs-btn-active-color: #fff; --bs-btn-active-bg: #146c43; --bs-btn-active-border-color: #13653f; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #198754; --bs-btn-disabled-border-color: #198754; }
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

// .btn-info { --bs-btn-color: #000; --bs-btn-bg: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #31d2f2; --bs-btn-hover-border-color: #25cff2; --bs-btn-focus-shadow-rgb: 11, 172, 204; --bs-btn-active-color: #000; --bs-btn-active-bg: #3dd5f3; --bs-btn-active-border-color: #25cff2; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #0dcaf0; --bs-btn-disabled-border-color: #0dcaf0; }
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

// .btn-warning { --bs-btn-color: #000; --bs-btn-bg: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffca2c; --bs-btn-hover-border-color: #ffc720; --bs-btn-focus-shadow-rgb: 217, 164, 6; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffcd39; --bs-btn-active-border-color: #ffc720; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #ffc107; --bs-btn-disabled-border-color: #ffc107; }
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

// .btn-danger { --bs-btn-color: #fff; --bs-btn-bg: #dc3545; --bs-btn-border-color: #dc3545; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #bb2d3b; --bs-btn-hover-border-color: #b02a37; --bs-btn-focus-shadow-rgb: 225, 83, 97; --bs-btn-active-color: #fff; --bs-btn-active-bg: #b02a37; --bs-btn-active-border-color: #a52834; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #dc3545; --bs-btn-disabled-border-color: #dc3545; }
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

// .btn-light { --bs-btn-color: #000; --bs-btn-bg: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #d3d4d5; --bs-btn-hover-border-color: #c6c7c8; --bs-btn-focus-shadow-rgb: 211, 212, 213; --bs-btn-active-color: #000; --bs-btn-active-bg: #c6c7c8; --bs-btn-active-border-color: #babbbc; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #f8f9fa; --bs-btn-disabled-border-color: #f8f9fa; }
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

// .btn-dark { --bs-btn-color: #fff; --bs-btn-bg: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #424649; --bs-btn-hover-border-color: #373b3e; --bs-btn-focus-shadow-rgb: 66, 70, 73; --bs-btn-active-color: #fff; --bs-btn-active-bg: #4d5154; --bs-btn-active-border-color: #373b3e; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #212529; --bs-btn-disabled-border-color: #212529; }
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

// .btn-link { --bs-btn-font-weight: 400; --bs-btn-color: var(--bs-link-color); --bs-btn-bg: transparent; --bs-btn-border-color: transparent; --bs-btn-hover-color: var(--bs-link-hover-color); --bs-btn-hover-border-color: transparent; --bs-btn-active-color: var(--bs-link-hover-color); --bs-btn-active-border-color: transparent; --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-border-color: transparent; --bs-btn-box-shadow: 0 0 0 #000; --bs-btn-focus-shadow-rgb: 49, 132, 253; text-decoration: underline; }
// .btn-link:focus-visible { color: var(--bs-btn-color); }
// .btn-link:hover { color: var(--bs-btn-hover-color); }
export const btnLink = style({
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#6c757d',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '49, 132, 253',
	},
	textDecoration: 'underline',
	':hover': {
		color: varBsBtnHoverColor,
	},
	':focus-visible': {
		color: varBsBtnColor,
	},
})

// .btn-outline-primary { --bs-btn-color: #0d6efd; --bs-btn-border-color: #0d6efd; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0d6efd; --bs-btn-hover-border-color: #0d6efd; --bs-btn-focus-shadow-rgb: 13, 110, 253; --bs-btn-active-color: #fff; --bs-btn-active-bg: #0d6efd; --bs-btn-active-border-color: #0d6efd; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #0d6efd; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #0d6efd; --bs-gradient: none; }
export const btnOutlinePrimary = createOutlineVariant({
	color: '#0d6efd',
	hoverColor: '#fff',
	hoverBackground: '#0d6efd',
	hoverBorder: '#0d6efd',
	focusRgb: '13, 110, 253',
	activeColor: '#fff',
	activeBackground: '#0d6efd',
	activeBorder: '#0d6efd',
	disabledColor: '#0d6efd',
})

// .btn-outline-secondary { --bs-btn-color: #6c757d; --bs-btn-border-color: #6c757d; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #6c757d; --bs-btn-hover-border-color: #6c757d; --bs-btn-focus-shadow-rgb: 108, 117, 125; --bs-btn-active-color: #fff; --bs-btn-active-bg: #6c757d; --bs-btn-active-border-color: #6c757d; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #6c757d; --bs-gradient: none; }
export const btnOutlineSecondary = createOutlineVariant({
	color: '#6c757d',
	hoverColor: '#fff',
	hoverBackground: '#6c757d',
	hoverBorder: '#6c757d',
	focusRgb: '108, 117, 125',
	activeColor: '#fff',
	activeBackground: '#6c757d',
	activeBorder: '#6c757d',
	disabledColor: '#6c757d',
})

// .btn-outline-success { --bs-btn-color: #198754; --bs-btn-border-color: #198754; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #198754; --bs-btn-hover-border-color: #198754; --bs-btn-focus-shadow-rgb: 25, 135, 84; --bs-btn-active-color: #fff; --bs-btn-active-bg: #198754; --bs-btn-active-border-color: #198754; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #198754; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #198754; --bs-gradient: none; }
export const btnOutlineSuccess = createOutlineVariant({
	color: '#198754',
	hoverColor: '#fff',
	hoverBackground: '#198754',
	hoverBorder: '#198754',
	focusRgb: '25, 135, 84',
	activeColor: '#fff',
	activeBackground: '#198754',
	activeBorder: '#198754',
	disabledColor: '#198754',
})

// .btn-outline-info { --bs-btn-color: #0dcaf0; --bs-btn-border-color: #0dcaf0; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #0dcaf0; --bs-btn-hover-border-color: #0dcaf0; --bs-btn-focus-shadow-rgb: 13, 202, 240; --bs-btn-active-color: #000; --bs-btn-active-bg: #0dcaf0; --bs-btn-active-border-color: #0dcaf0; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #0dcaf0; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #0dcaf0; --bs-gradient: none; }
export const btnOutlineInfo = createOutlineVariant({
	color: '#0dcaf0',
	hoverColor: '#000',
	hoverBackground: '#0dcaf0',
	hoverBorder: '#0dcaf0',
	focusRgb: '13, 202, 240',
	activeColor: '#000',
	activeBackground: '#0dcaf0',
	activeBorder: '#0dcaf0',
	disabledColor: '#0dcaf0',
})

// .btn-outline-warning { --bs-btn-color: #ffc107; --bs-btn-border-color: #ffc107; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffc107; --bs-btn-hover-border-color: #ffc107; --bs-btn-focus-shadow-rgb: 255, 193, 7; --bs-btn-active-color: #000; --bs-btn-active-bg: #ffc107; --bs-btn-active-border-color: #ffc107; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #ffc107; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #ffc107; --bs-gradient: none; }
export const btnOutlineWarning = createOutlineVariant({
	color: '#ffc107',
	hoverColor: '#000',
	hoverBackground: '#ffc107',
	hoverBorder: '#ffc107',
	focusRgb: '255, 193, 7',
	activeColor: '#000',
	activeBackground: '#ffc107',
	activeBorder: '#ffc107',
	disabledColor: '#ffc107',
})

// .btn-outline-danger { --bs-btn-color: #dc3545; --bs-btn-border-color: #dc3545; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #dc3545; --bs-btn-hover-border-color: #dc3545; --bs-btn-focus-shadow-rgb: 220, 53, 69; --bs-btn-active-color: #fff; --bs-btn-active-bg: #dc3545; --bs-btn-active-border-color: #dc3545; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #dc3545; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #dc3545; --bs-gradient: none; }
export const btnOutlineDanger = createOutlineVariant({
	color: '#dc3545',
	hoverColor: '#fff',
	hoverBackground: '#dc3545',
	hoverBorder: '#dc3545',
	focusRgb: '220, 53, 69',
	activeColor: '#fff',
	activeBackground: '#dc3545',
	activeBorder: '#dc3545',
	disabledColor: '#dc3545',
})

// .btn-outline-light { --bs-btn-color: #f8f9fa; --bs-btn-border-color: #f8f9fa; --bs-btn-hover-color: #000; --bs-btn-hover-bg: #f8f9fa; --bs-btn-hover-border-color: #f8f9fa; --bs-btn-focus-shadow-rgb: 248, 249, 250; --bs-btn-active-color: #000; --bs-btn-active-bg: #f8f9fa; --bs-btn-active-border-color: #f8f9fa; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #f8f9fa; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #f8f9fa; --bs-gradient: none; }
export const btnOutlineLight = createOutlineVariant({
	color: '#f8f9fa',
	hoverColor: '#000',
	hoverBackground: '#f8f9fa',
	hoverBorder: '#f8f9fa',
	focusRgb: '248, 249, 250',
	activeColor: '#000',
	activeBackground: '#f8f9fa',
	activeBorder: '#f8f9fa',
	disabledColor: '#f8f9fa',
})

// .btn-outline-dark { --bs-btn-color: #212529; --bs-btn-border-color: #212529; --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #212529; --bs-btn-hover-border-color: #212529; --bs-btn-focus-shadow-rgb: 33, 37, 41; --bs-btn-active-color: #fff; --bs-btn-active-bg: #212529; --bs-btn-active-border-color: #212529; --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); --bs-btn-disabled-color: #212529; --bs-btn-disabled-bg: transparent; --bs-btn-disabled-border-color: #212529; --bs-gradient: none; }
export const btnOutlineDark = createOutlineVariant({
	color: '#212529',
	hoverColor: '#fff',
	hoverBackground: '#212529',
	hoverBorder: '#212529',
	focusRgb: '33, 37, 41',
	activeColor: '#fff',
	activeBackground: '#212529',
	activeBorder: '#212529',
	disabledColor: '#212529',
})
