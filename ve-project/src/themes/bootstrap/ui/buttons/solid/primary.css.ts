import { style } from '@vanilla-extract/css'
import {
	varBsBtnActiveBg,
	varBsBtnActiveBorderColor,
	varBsBtnActiveBoxShadow,
	varBsBtnActiveColor,
	varBsBtnBg,
	varBsBtnBorderColor,
	varBsBtnColor,
	varBsBtnDisabledBg,
	varBsBtnDisabledBorderColor,
	varBsBtnDisabledColor,
	varBsBtnFocusBoxShadowRgb,
	varBsBtnHoverBg,
	varBsBtnHoverBorderColor,
	varBsBtnHoverColor,
} from '../_vars.css'

export const btnPrimary = style({
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#0d6efd',
		[varBsBtnBorderColor]: '#0d6efd',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#0b5ed7',
		[varBsBtnHoverBorderColor]: '#0a58ca',
		[varBsBtnFocusBoxShadowRgb]: '49, 132, 253',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#0a58ca',
		[varBsBtnActiveBorderColor]: '#0a53be',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#0d6efd',
		[varBsBtnDisabledBorderColor]: '#0d6efd',
	},
})

/*
.btn-primary {
 --bs-btn-color: #fff;
 --bs-btn-bg: #0d6efd;
 --bs-btn-border-color: #0d6efd;
 --bs-btn-hover-color: #fff;
 --bs-btn-hover-bg: #0b5ed7;
 --bs-btn-hover-border-color: #0a58ca;
 --bs-btn-focus-shadow-rgb: 49, 132, 253;
 --bs-btn-active-color: #fff;
 --bs-btn-active-bg: #0a58ca;
 --bs-btn-active-border-color: #0a53be;
 --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
 --bs-btn-disabled-color: #fff;
 --bs-btn-disabled-bg: #0d6efd;
 --bs-btn-disabled-border-color: #0d6efd;
 }

*/
