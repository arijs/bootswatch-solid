import { style } from '@vanilla-extract/css'
import {
	varBsBodyColor,
	varBsBorderRadius,
	varBsBorderWidth,
} from '../../../../theme-contract/_vars.css'
import {
	varBsBtnActiveBg,
	varBsBtnActiveBorderColor,
	varBsBtnActiveColor,
	varBsBtnBg,
	varBsBtnBorderColor,
	varBsBtnBorderRadius,
	varBsBtnBorderWidth,
	varBsBtnBoxShadow,
	varBsBtnColor,
	varBsBtnDisabledBg,
	varBsBtnDisabledBorderColor,
	varBsBtnDisabledColor,
	varBsBtnDisabledOpacity,
	varBsBtnFocusBoxShadow,
	varBsBtnFocusBoxShadowRgb,
	varBsBtnFontFamily,
	varBsBtnFontSize,
	varBsBtnFontWeight,
	varBsBtnHoverBg,
	varBsBtnHoverBorderColor,
	varBsBtnHoverColor,
	varBsBtnLineHeight,
	varBsBtnPaddingX,
	varBsBtnPaddingY,
} from '../../../../theme-contract/ui/buttons/_vars.css'

export const btn = style({
	vars: {
		[varBsBtnPaddingX]: '0.75em',
		[varBsBtnPaddingY]: '0.375em',
		[varBsBtnFontFamily]: '',
		[varBsBtnFontSize]: '1em',
		[varBsBtnFontWeight]: '400',
		[varBsBtnLineHeight]: '1.5',
		[varBsBtnColor]: varBsBodyColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderWidth]: varBsBorderWidth,
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnBorderRadius]: varBsBorderRadius,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnBoxShadow]:
			'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
		[varBsBtnDisabledOpacity]: '0.65',
		[varBsBtnFocusBoxShadow]: `0 0 0 0.25em rgba(${varBsBtnFocusBoxShadowRgb}, .5)`,
	},
	appearance: 'button',
	display: 'inline-block',
	padding: `${varBsBtnPaddingY} ${varBsBtnPaddingX}`,
	fontFamily: varBsBtnFontFamily,
	fontSize: varBsBtnFontSize,
	fontWeight: varBsBtnFontWeight,
	lineHeight: varBsBtnLineHeight,
	color: varBsBtnColor,
	textAlign: 'center',
	textDecoration: 'none',
	verticalAlign: 'middle',
	cursor: 'pointer',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	border: `${varBsBtnBorderWidth} solid ${varBsBtnBorderColor}`,
	borderRadius: varBsBtnBorderRadius,
	backgroundColor: varBsBtnBg,
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
	':hover': {
		color: varBsBtnHoverColor,
		backgroundColor: varBsBtnHoverBg,
		borderColor: varBsBtnHoverBorderColor,
	},
	':focus-visible': {
		color: varBsBtnHoverColor,
		backgroundColor: varBsBtnHoverBg,
		borderColor: varBsBtnHoverBorderColor,
		outline: 0,
		boxShadow: varBsBtnFocusBoxShadow,
	},
	selectors: {
		'.btn-check:checked + &, :not(.btn-check) + &:active, &:first-child:active, &.active, &.show':
			{
				color: varBsBtnActiveColor,
				backgroundColor: varBsBtnActiveBg,
				borderColor: varBsBtnActiveBorderColor,
			},
		'.btn-check:checked + &:focus-visible, :not(.btn-check) + &:active:focus-visible, &:first-child:active:focus-visible, &.active:focus-visible, &.show:focus-visible':
			{
				boxShadow: varBsBtnFocusBoxShadow,
			},
		'&:disabled, &.disabled, fieldset:disabled &': {
			color: varBsBtnDisabledColor,
			pointerEvents: 'none',
			backgroundColor: varBsBtnDisabledBg,
			borderColor: varBsBtnDisabledBorderColor,
			opacity: varBsBtnDisabledOpacity,
		},
	},
})
/*
button {
 border-radius: 0;
 }

button:focus:not(:focus-visible) {
 outline: 0;
 }

input, button, select, optgroup, textarea {
 margin: 0;
 font-family: inherit;
 font-size: inherit;
 line-height: inherit;
 }

button, select {
 text-transform: none;
 }

button, [type="button"], [type="reset"], [type="submit"] {
 appearance: button;
 }

button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
 cursor: pointer;
 }

.btn {
 --bs-btn-padding-x: 0.75rem;
 --bs-btn-padding-y: 0.375rem;
 --bs-btn-font-family: ;
 --bs-btn-font-size: 1rem;
 --bs-btn-font-weight: 400;
 --bs-btn-line-height: 1.5;
 --bs-btn-color: var(--bs-body-color);
 --bs-btn-bg: transparent;
 --bs-btn-border-width: var(--bs-border-width);
 --bs-btn-border-color: transparent;
 --bs-btn-border-radius: var(--bs-border-radius);
 --bs-btn-hover-border-color: transparent;
 --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
 --bs-btn-disabled-opacity: 0.65;
 --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
 display: inline-block;
 padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
 font-family: var(--bs-btn-font-family);
 font-size: var(--bs-btn-font-size);
 font-weight: var(--bs-btn-font-weight);
 line-height: var(--bs-btn-line-height);
 color: var(--bs-btn-color);
 text-align: center;
 text-decoration: none;
 vertical-align: middle;
 cursor: pointer;
 -webkit-user-select: none;
 -moz-user-select: none;
 user-select: none;
 border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
 border-radius: var(--bs-btn-border-radius);
 background-color: var(--bs-btn-bg);
 transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
 }

@media (prefers-reduced-motion: reduce) {

.btn {
 transition: none;
 }
}

.btn:hover {
 color: var(--bs-btn-hover-color);
 background-color: var(--bs-btn-hover-bg);
 border-color: var(--bs-btn-hover-border-color);
 }

.btn:focus-visible {
 color: var(--bs-btn-hover-color);
 background-color: var(--bs-btn-hover-bg);
 border-color: var(--bs-btn-hover-border-color);
 outline: 0;
 box-shadow: var(--bs-btn-focus-box-shadow);
 }

.btn-check:checked + .btn, :not(.btn-check) + .btn:active, .btn:first-child:active, .btn.active, .btn.show {
 color: var(--bs-btn-active-color);
 background-color: var(--bs-btn-active-bg);
 border-color: var(--bs-btn-active-border-color);
 }

.btn-check:checked + .btn:focus-visible, :not(.btn-check) + .btn:active:focus-visible, .btn:first-child:active:focus-visible, .btn.active:focus-visible, .btn.show:focus-visible {
 box-shadow: var(--bs-btn-focus-box-shadow);
 }

.btn:disabled, .btn.disabled, fieldset:disabled .btn {
 color: var(--bs-btn-disabled-color);
 pointer-events: none;
 background-color: var(--bs-btn-disabled-bg);
 border-color: var(--bs-btn-disabled-border-color);
 opacity: var(--bs-btn-disabled-opacity);
 }

*/
