import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
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
import {
	btn,
	btnActiveHook,
	btnCheck,
	btnDanger,
	btnDark,
	btnInfo,
	btnLg,
	btnLight,
	btnLink,
	btnOutlineDanger,
	btnOutlineDark,
	btnOutlineInfo,
	btnOutlineLight,
	btnOutlinePrimary,
	btnOutlineSecondary,
	btnOutlineSuccess,
	btnOutlineWarning,
	btnPrimary,
	btnSecondary,
	btnSm,
	btnSuccess,
	btnWarning,
} from '../../../../theme-contract/ui/buttons/contract.css'
import { btnShowHook } from '../../../../theme-contract/ui/dropdowns/contract.css'
import { vaporScope } from '../../scope.css'

// ── Base .btn ─────────────────────────────────────────────────────────────────
//
// SOURCE CSS:
// .btn {
//   --bs-btn-padding-x: 0.75rem; --bs-btn-padding-y: 0.375rem;
//   --bs-btn-font-family: ; --bs-btn-font-size: 1rem; --bs-btn-font-weight: 400;
//   --bs-btn-line-height: 1.5; --bs-btn-color: var(--bs-body-color);
//   --bs-btn-bg: transparent; --bs-btn-border-width: var(--bs-border-width);
//   --bs-btn-border-color: transparent; --bs-btn-border-radius: var(--bs-border-radius);
//   --bs-btn-hover-border-color: transparent;
//   --bs-btn-box-shadow: inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 1px rgba(0,0,0,0.075);
//   --bs-btn-disabled-opacity: 0.65;
//   --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
//   display: inline-block; padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
//   font-family: var(--bs-btn-font-family); font-size: var(--bs-btn-font-size);
//   font-weight: var(--bs-btn-font-weight); line-height: var(--bs-btn-line-height);
//   color: var(--bs-btn-color); text-align: center; text-decoration: none;
//   vertical-align: middle; cursor: pointer; user-select: none;
//   border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
//   border-radius: var(--bs-btn-border-radius); background-color: var(--bs-btn-bg);
//   transition: color 0.15s ease-in-out, ...; }
// @media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

globalStyle(`${vaporScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '0.75rem',
		[varBsBtnPaddingY]: '0.375rem',
		[varBsBtnFontFamily]: '',
		[varBsBtnFontSize]: '1rem',
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
		[varBsBtnFocusBoxShadow]: `0 0 0 0.25rem rgba(${varBsBtnFocusBoxShadowRgb}, .5)`,
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
	backgroundColor: varBsBtnBg,
	border: `${varBsBtnBorderWidth} solid ${varBsBtnBorderColor}`,
	borderRadius: varBsBtnBorderRadius,
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

// SOURCE CSS: .btn:hover { color: var(--bs-btn-hover-color); background-color: ...; ... }
globalStyle(`${vaporScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

// SOURCE CSS: .btn:focus-visible { color: ...; outline: 0; box-shadow: ...; }
globalStyle(`${vaporScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn-check:checked + .btn, :not(.btn-check) + .btn:active,
// .btn:first-child:active, .btn.active, .btn.show {
//   color: var(--bs-btn-active-color); background-color: var(--bs-btn-active-bg);
//   border-color: var(--bs-btn-active-border-color); }
globalStyle(
	[
		`${vaporScope}${btnCheck}:checked + ${vaporScope}${btn}`,
		`:not(${vaporScope}${btnCheck}) + ${vaporScope}${btn}:active`,
		`${vaporScope}${btn}:first-child:active`,
		`${vaporScope}${btn}${btnActiveHook}`,
		`${vaporScope}${btn}${btnShowHook}`,
	].join(', '),
	{
		color: varBsBtnActiveColor,
		backgroundColor: varBsBtnActiveBg,
		borderColor: varBsBtnActiveBorderColor,
	},
)

// SOURCE CSS:
// .btn-check:checked + .btn:focus-visible, ...:active:focus-visible, ... { box-shadow: ...; }
globalStyle(
	[
		`${vaporScope}${btnCheck}:checked + ${vaporScope}${btn}:focus-visible`,
		`:not(${vaporScope}${btnCheck}) + ${vaporScope}${btn}:active:focus-visible`,
		`${vaporScope}${btn}:first-child:active:focus-visible`,
		`${vaporScope}${btn}${btnActiveHook}:focus-visible`,
		`${vaporScope}${btn}${btnShowHook}:focus-visible`,
	].join(', '),
	{
		boxShadow: varBsBtnFocusBoxShadow,
	},
)

// SOURCE CSS:
// .btn:disabled, .btn.disabled, fieldset:disabled .btn {
//   color: var(--bs-btn-disabled-color); pointer-events: none;
//   background-color: var(--bs-btn-disabled-bg);
//   border-color: var(--bs-btn-disabled-border-color);
//   opacity: var(--bs-btn-disabled-opacity); }
globalStyle(
	[
		`${vaporScope}${btn}:disabled`,
		`fieldset:disabled ${vaporScope}${btn}`,
	].join(', '),
	{
		color: varBsBtnDisabledColor,
		pointerEvents: 'none',
		backgroundColor: varBsBtnDisabledBg,
		borderColor: varBsBtnDisabledBorderColor,
		opacity: varBsBtnDisabledOpacity,
	},
)

// SOURCE CSS:
// .btn-check {
//   position: absolute; clip: rect(0, 0, 0, 0); pointer-events: none; }
globalStyle(`${vaporScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

// SOURCE CSS:
// .btn-check[disabled] + .btn, .btn-check:disabled + .btn {
//   pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(
	[
		`${vaporScope}${btnCheck}[disabled] + ${vaporScope}${btn}`,
		`${vaporScope}${btnCheck}:disabled + ${vaporScope}${btn}`,
	].join(', '),
	{
		pointerEvents: 'none',
		filter: 'none',
		opacity: varBsBtnDisabledOpacity,
	},
)

// ── Size modifiers ────────────────────────────────────────────────────────────
//
// SOURCE CSS:
// .btn-sm, .btn-group-sm > .btn {
//   --bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem;
//   --bs-btn-font-size: 0.875rem; --bs-btn-border-radius: var(--bs-border-radius-sm); }
globalStyle(`${vaporScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

// SOURCE CSS:
// .btn-lg, .btn-group-lg > .btn {
//   --bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 1rem;
//   --bs-btn-font-size: 1.25rem; --bs-btn-border-radius: var(--bs-border-radius-lg); }
globalStyle(`${vaporScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

// ── .btn-link ─────────────────────────────────────────────────────────────────
//
// SOURCE CSS:
// .btn-link { --bs-btn-font-weight: 400; --bs-btn-color: var(--bs-link-color);
//   --bs-btn-bg: transparent; --bs-btn-border-color: transparent;
//   --bs-btn-hover-color: var(--bs-link-hover-color); --bs-btn-hover-border-color: transparent;
//   --bs-btn-active-color: var(--bs-link-hover-color); --bs-btn-active-border-color: transparent;
//   --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-border-color: transparent;
//   --bs-btn-box-shadow: 0 0 0 #000; --bs-btn-focus-shadow-rgb: 49, 132, 253;
//   text-decoration: underline; }
globalStyle(`${vaporScope}${btnLink}`, {
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
})

// ── Solid colour variants ─────────────────────────────────────────────────────
// Each variant only sets --bs-btn-* CSS vars; all layout/interaction is inherited
// from the base .btn rules above.
//
// SOURCE CSS: screenshots/bootstrap/bootstrap.css — .btn-primary { --bs-btn-* }

// SOURCE CSS:
// .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #0d6efd; --bs-btn-border-color: #0d6efd;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0b5ed7; --bs-btn-hover-border-color: #0a58ca;
//   --bs-btn-focus-shadow-rgb: 49, 132, 253; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #0d6efd;
//   --bs-btn-disabled-border-color: #0d6efd; }
globalStyle(`${vaporScope}${btnPrimary}`, {
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

// SOURCE CSS:
// .btn-secondary { --bs-btn-color: #fff; --bs-btn-bg: #6c757d; --bs-btn-border-color: #6c757d;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #5c636a; --bs-btn-hover-border-color: #565e64;
//   --bs-btn-focus-shadow-rgb: 130, 138, 145; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #565e64; --bs-btn-active-border-color: #51585e;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #6c757d;
//   --bs-btn-disabled-border-color: #6c757d; }
globalStyle(`${vaporScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#6c757d',
		[varBsBtnBorderColor]: '#6c757d',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5c636a',
		[varBsBtnHoverBorderColor]: '#565e64',
		[varBsBtnFocusBoxShadowRgb]: '130, 138, 145',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#565e64',
		[varBsBtnActiveBorderColor]: '#51585e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#6c757d',
		[varBsBtnDisabledBorderColor]: '#6c757d',
	},
})

// SOURCE CSS:
// .btn-success { --bs-btn-color: #fff; --bs-btn-bg: #198754; --bs-btn-border-color: #198754;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #157347; --bs-btn-hover-border-color: #146c43;
//   --bs-btn-focus-shadow-rgb: 60, 153, 110; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #146c43; --bs-btn-active-border-color: #13653f;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #198754;
//   --bs-btn-disabled-border-color: #198754; }
globalStyle(`${vaporScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#198754',
		[varBsBtnBorderColor]: '#198754',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#157347',
		[varBsBtnHoverBorderColor]: '#146c43',
		[varBsBtnFocusBoxShadowRgb]: '60, 153, 110',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#146c43',
		[varBsBtnActiveBorderColor]: '#13653f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#198754',
		[varBsBtnDisabledBorderColor]: '#198754',
	},
})

// SOURCE CSS:
// .btn-info { --bs-btn-color: #000; --bs-btn-bg: #0dcaf0; --bs-btn-border-color: #0dcaf0;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #31d2f2; --bs-btn-hover-border-color: #25cff2;
//   --bs-btn-focus-shadow-rgb: 11, 172, 204; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #3dd5f3; --bs-btn-active-border-color: #25cff2;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #0dcaf0;
//   --bs-btn-disabled-border-color: #0dcaf0; }
globalStyle(`${vaporScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#0dcaf0',
		[varBsBtnBorderColor]: '#0dcaf0',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#31d2f2',
		[varBsBtnHoverBorderColor]: '#25cff2',
		[varBsBtnFocusBoxShadowRgb]: '11, 172, 204',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#3dd5f3',
		[varBsBtnActiveBorderColor]: '#25cff2',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#0dcaf0',
		[varBsBtnDisabledBorderColor]: '#0dcaf0',
	},
})

// SOURCE CSS:
// .btn-warning { --bs-btn-color: #000; --bs-btn-bg: #ffc107; --bs-btn-border-color: #ffc107;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffca2c; --bs-btn-hover-border-color: #ffc720;
//   --bs-btn-focus-shadow-rgb: 217, 164, 6; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #ffcd39; --bs-btn-active-border-color: #ffc720;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #ffc107;
//   --bs-btn-disabled-border-color: #ffc107; }
globalStyle(`${vaporScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#ffc107',
		[varBsBtnBorderColor]: '#ffc107',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#ffca2c',
		[varBsBtnHoverBorderColor]: '#ffc720',
		[varBsBtnFocusBoxShadowRgb]: '217, 164, 6',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#ffcd39',
		[varBsBtnActiveBorderColor]: '#ffc720',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#ffc107',
		[varBsBtnDisabledBorderColor]: '#ffc107',
	},
})

// SOURCE CSS:
// .btn-danger { --bs-btn-color: #fff; --bs-btn-bg: #dc3545; --bs-btn-border-color: #dc3545;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #bb2d3b; --bs-btn-hover-border-color: #b02a37;
//   --bs-btn-focus-shadow-rgb: 225, 83, 97; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #b02a37; --bs-btn-active-border-color: #a52834;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #dc3545;
//   --bs-btn-disabled-border-color: #dc3545; }
globalStyle(`${vaporScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#dc3545',
		[varBsBtnBorderColor]: '#dc3545',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#bb2d3b',
		[varBsBtnHoverBorderColor]: '#b02a37',
		[varBsBtnFocusBoxShadowRgb]: '225, 83, 97',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b02a37',
		[varBsBtnActiveBorderColor]: '#a52834',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#dc3545',
		[varBsBtnDisabledBorderColor]: '#dc3545',
	},
})

// SOURCE CSS:
// .btn-light { --bs-btn-color: #000; --bs-btn-bg: #f8f9fa; --bs-btn-border-color: #f8f9fa;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #d3d4d5; --bs-btn-hover-border-color: #c6c7c8;
//   --bs-btn-focus-shadow-rgb: 211, 212, 213; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #c6c7c8; --bs-btn-active-border-color: #babbbc;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #f8f9fa;
//   --bs-btn-disabled-border-color: #f8f9fa; }
globalStyle(`${vaporScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f8f9fa',
		[varBsBtnBorderColor]: '#f8f9fa',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d3d4d5',
		[varBsBtnHoverBorderColor]: '#c6c7c8',
		[varBsBtnFocusBoxShadowRgb]: '211, 212, 213',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#c6c7c8',
		[varBsBtnActiveBorderColor]: '#babbbc',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f8f9fa',
		[varBsBtnDisabledBorderColor]: '#f8f9fa',
	},
})

// SOURCE CSS:
// .btn-dark { --bs-btn-color: #fff; --bs-btn-bg: #212529; --bs-btn-border-color: #212529;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #424649; --bs-btn-hover-border-color: #373b3e;
//   --bs-btn-focus-shadow-rgb: 66, 70, 73; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #4d5154; --bs-btn-active-border-color: #373b3e;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #212529;
//   --bs-btn-disabled-border-color: #212529; }
globalStyle(`${vaporScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#212529',
		[varBsBtnBorderColor]: '#212529',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#424649',
		[varBsBtnHoverBorderColor]: '#373b3e',
		[varBsBtnFocusBoxShadowRgb]: '66, 70, 73',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4d5154',
		[varBsBtnActiveBorderColor]: '#373b3e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#212529',
		[varBsBtnDisabledBorderColor]: '#212529',
	},
})

// ── Outline variants ──────────────────────────────────────────────────────────
// Each outline variant sets only --bs-btn-* CSS vars.
// Hover and active states are handled by the base .btn:hover / active rules
// using var(--bs-btn-hover-bg) etc. set here per variant.
//
// SOURCE CSS: screenshots/bootstrap/bootstrap.css — .btn-outline-* { --bs-btn-* }

// SOURCE CSS:
// .btn-outline-primary { --bs-btn-color: #0d6efd; --bs-btn-border-color: #0d6efd;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0d6efd; --bs-btn-hover-border-color: #0d6efd;
//   --bs-btn-focus-shadow-rgb: 13, 110, 253; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #0d6efd; --bs-btn-active-border-color: #0d6efd;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #0d6efd; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #0d6efd; }
globalStyle(`${vaporScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#0d6efd',
		[varBsBtnBorderColor]: '#0d6efd',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#0d6efd',
		[varBsBtnHoverBorderColor]: '#0d6efd',
		[varBsBtnFocusBoxShadowRgb]: '13, 110, 253',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#0d6efd',
		[varBsBtnActiveBorderColor]: '#0d6efd',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#0d6efd',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#0d6efd',
	},
})

// SOURCE CSS:
// .btn-outline-secondary { --bs-btn-color: #6c757d; --bs-btn-border-color: #6c757d;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #6c757d; --bs-btn-hover-border-color: #6c757d;
//   --bs-btn-focus-shadow-rgb: 108, 117, 125; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #6c757d; --bs-btn-active-border-color: #6c757d;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #6c757d; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #6c757d; }
globalStyle(`${vaporScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#6c757d',
		[varBsBtnBorderColor]: '#6c757d',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#6c757d',
		[varBsBtnHoverBorderColor]: '#6c757d',
		[varBsBtnFocusBoxShadowRgb]: '108, 117, 125',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#6c757d',
		[varBsBtnActiveBorderColor]: '#6c757d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#6c757d',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#6c757d',
	},
})

// SOURCE CSS:
// .btn-outline-success { --bs-btn-color: #198754; --bs-btn-border-color: #198754;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #198754; --bs-btn-hover-border-color: #198754;
//   --bs-btn-focus-shadow-rgb: 25, 135, 84; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #198754; --bs-btn-active-border-color: #198754;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #198754; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #198754; }
globalStyle(`${vaporScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#198754',
		[varBsBtnBorderColor]: '#198754',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#198754',
		[varBsBtnHoverBorderColor]: '#198754',
		[varBsBtnFocusBoxShadowRgb]: '25, 135, 84',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#198754',
		[varBsBtnActiveBorderColor]: '#198754',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#198754',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#198754',
	},
})

// SOURCE CSS:
// .btn-outline-info { --bs-btn-color: #0dcaf0; --bs-btn-border-color: #0dcaf0;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #0dcaf0; --bs-btn-hover-border-color: #0dcaf0;
//   --bs-btn-focus-shadow-rgb: 13, 202, 240; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #0dcaf0; --bs-btn-active-border-color: #0dcaf0;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #0dcaf0; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #0dcaf0; }
globalStyle(`${vaporScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#0dcaf0',
		[varBsBtnBorderColor]: '#0dcaf0',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#0dcaf0',
		[varBsBtnHoverBorderColor]: '#0dcaf0',
		[varBsBtnFocusBoxShadowRgb]: '13, 202, 240',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#0dcaf0',
		[varBsBtnActiveBorderColor]: '#0dcaf0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#0dcaf0',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#0dcaf0',
	},
})

// SOURCE CSS:
// .btn-outline-warning { --bs-btn-color: #ffc107; --bs-btn-border-color: #ffc107;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffc107; --bs-btn-hover-border-color: #ffc107;
//   --bs-btn-focus-shadow-rgb: 255, 193, 7; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #ffc107; --bs-btn-active-border-color: #ffc107;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #ffc107; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #ffc107; }
globalStyle(`${vaporScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ffc107',
		[varBsBtnBorderColor]: '#ffc107',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#ffc107',
		[varBsBtnHoverBorderColor]: '#ffc107',
		[varBsBtnFocusBoxShadowRgb]: '255, 193, 7',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#ffc107',
		[varBsBtnActiveBorderColor]: '#ffc107',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ffc107',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ffc107',
	},
})

// SOURCE CSS:
// .btn-outline-danger { --bs-btn-color: #dc3545; --bs-btn-border-color: #dc3545;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #dc3545; --bs-btn-hover-border-color: #dc3545;
//   --bs-btn-focus-shadow-rgb: 220, 53, 69; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #dc3545; --bs-btn-active-border-color: #dc3545;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #dc3545; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #dc3545; }
globalStyle(`${vaporScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#dc3545',
		[varBsBtnBorderColor]: '#dc3545',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#dc3545',
		[varBsBtnHoverBorderColor]: '#dc3545',
		[varBsBtnFocusBoxShadowRgb]: '220, 53, 69',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#dc3545',
		[varBsBtnActiveBorderColor]: '#dc3545',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#dc3545',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#dc3545',
	},
})

// SOURCE CSS:
// .btn-outline-light { --bs-btn-color: #f8f9fa; --bs-btn-border-color: #f8f9fa;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #f8f9fa; --bs-btn-hover-border-color: #f8f9fa;
//   --bs-btn-focus-shadow-rgb: 248, 249, 250; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #f8f9fa; --bs-btn-active-border-color: #f8f9fa;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #f8f9fa; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #f8f9fa; }
globalStyle(`${vaporScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#f8f9fa',
		[varBsBtnBorderColor]: '#f8f9fa',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f8f9fa',
		[varBsBtnHoverBorderColor]: '#f8f9fa',
		[varBsBtnFocusBoxShadowRgb]: '248, 249, 250',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f8f9fa',
		[varBsBtnActiveBorderColor]: '#f8f9fa',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f8f9fa',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f8f9fa',
	},
})

// SOURCE CSS:
// .btn-outline-dark { --bs-btn-color: #212529; --bs-btn-border-color: #212529;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #212529; --bs-btn-hover-border-color: #212529;
//   --bs-btn-focus-shadow-rgb: 33, 37, 41; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #212529; --bs-btn-active-border-color: #212529;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #212529; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #212529; }
globalStyle(`${vaporScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#212529',
		[varBsBtnBorderColor]: '#212529',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#212529',
		[varBsBtnHoverBorderColor]: '#212529',
		[varBsBtnFocusBoxShadowRgb]: '33, 37, 41',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#212529',
		[varBsBtnActiveBorderColor]: '#212529',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#212529',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#212529',
	},
})

const vaporLightTextShadow =
	'0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)'

const addVaporButtonGlow = (solidClass: string, outlineClass: string, rgb: string) => {
	globalStyle(`${vaporScope}${solidClass}, ${vaporScope}${outlineClass}`, {
		boxShadow: `0 0 2px rgba(${rgb}, 0.9), 0 0 4px rgba(${rgb}, 0.4), 0 0 1rem rgba(${rgb}, 0.3), 0 0 4rem rgba(${rgb}, 0.1)`,
	})
}

globalStyle(`${vaporScope}${btn}`, {
	vars: {
		[varBsBtnBoxShadow]:
			'inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 1px rgba(0,0,0,0.075)',
		[varBsBtnBorderWidth]: '0',
	},
})

globalStyle(`${vaporScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#6f42c1',
		[varBsBtnBorderColor]: '#6f42c1',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5e38a4',
		[varBsBtnHoverBorderColor]: '#5e38a4',
		[varBsBtnFocusBoxShadowRgb]: '133,94,202',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#59359a',
		[varBsBtnActiveBorderColor]: '#59359a',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#6f42c1',
		[varBsBtnDisabledBorderColor]: '#6f42c1',
	},
	textShadow: vaporLightTextShadow,
})

globalStyle(`${vaporScope}${btnDark}:hover`, {
	boxShadow:
		'0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ea39b8',
		[varBsBtnBorderColor]: '#ea39b8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c7309c',
		[varBsBtnHoverBorderColor]: '#bb2e93',
		[varBsBtnFocusBoxShadowRgb]: '237,87,195',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#bb2e93',
		[varBsBtnActiveBorderColor]: '#b02b8a',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ea39b8',
		[varBsBtnDisabledBorderColor]: '#ea39b8',
	},
	textShadow: vaporLightTextShadow,
})

globalStyle(`${vaporScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3cf281',
		[varBsBtnBorderColor]: '#3cf281',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#33ce6e',
		[varBsBtnHoverBorderColor]: '#30c267',
		[varBsBtnFocusBoxShadowRgb]: '99,244,165',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#30c267',
		[varBsBtnActiveBorderColor]: '#2db661',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3cf281',
		[varBsBtnDisabledBorderColor]: '#3cf281',
	},
	textShadow: vaporLightTextShadow,
})

globalStyle(`${vaporScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#1ba2f6',
		[varBsBtnBorderColor]: '#1ba2f6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1789d0',
		[varBsBtnHoverBorderColor]: '#1789d0',
		[varBsBtnFocusBoxShadowRgb]: '67,177,247',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1580c5',
		[varBsBtnActiveBorderColor]: '#1580c5',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#1ba2f6',
		[varBsBtnDisabledBorderColor]: '#1ba2f6',
	},
	textShadow: vaporLightTextShadow,
})

globalStyle(`${vaporScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ffc107',
		[varBsBtnBorderColor]: '#ffc107',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d9a406',
		[varBsBtnHoverBorderColor]: '#cc9a06',
		[varBsBtnFocusBoxShadowRgb]: '255,202,44',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc9a06',
		[varBsBtnActiveBorderColor]: '#bf9105',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ffc107',
		[varBsBtnDisabledBorderColor]: '#ffc107',
	},
	textShadow: vaporLightTextShadow,
})

globalStyle(`${vaporScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e44c55',
		[varBsBtnBorderColor]: '#e44c55',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c24148',
		[varBsBtnHoverBorderColor]: '#c24148',
		[varBsBtnFocusBoxShadowRgb]: '232,103,111',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b63d44',
		[varBsBtnActiveBorderColor]: '#b63d44',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e44c55',
		[varBsBtnDisabledBorderColor]: '#e44c55',
	},
	textShadow: vaporLightTextShadow,
})

globalStyle(`${vaporScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#44d9e8',
		[varBsBtnBorderColor]: '#44d9e8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3ab8c5',
		[varBsBtnHoverBorderColor]: '#36aeba',
		[varBsBtnFocusBoxShadowRgb]: '96,224,236',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#36aeba',
		[varBsBtnActiveBorderColor]: '#33a3ae',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#44d9e8',
		[varBsBtnDisabledBorderColor]: '#44d9e8',
	},
	textShadow: vaporLightTextShadow,
})

globalStyle(`${vaporScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#170229',
		[varBsBtnBorderColor]: '#170229',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3a2849',
		[varBsBtnHoverBorderColor]: '#2e1b3e',
		[varBsBtnFocusBoxShadowRgb]: '58, 40, 73',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#453554',
		[varBsBtnActiveBorderColor]: '#2e1b3e',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#170229',
		[varBsBtnDisabledBorderColor]: '#170229',
	},
	textShadow: vaporLightTextShadow,
})

// Vapor outline variants: use Vapor theme colors, color=#fff, border-width=2px
globalStyle(`${vaporScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#6f42c1',
		[varBsBtnBorderColor]: '#6f42c1',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#6f42c1',
		[varBsBtnHoverBorderColor]: '#6f42c1',
		[varBsBtnFocusBoxShadowRgb]: '111, 66, 193',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#6f42c1',
		[varBsBtnActiveBorderColor]: '#6f42c1',
		[varBsBtnDisabledColor]: '#6f42c1',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#6f42c1',
		[varBsBtnBorderWidth]: '2px',
	},
	color: '#fff',
})

globalStyle(`${vaporScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#ea39b8',
		[varBsBtnBorderColor]: '#ea39b8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ea39b8',
		[varBsBtnHoverBorderColor]: '#ea39b8',
		[varBsBtnFocusBoxShadowRgb]: '234, 57, 184',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ea39b8',
		[varBsBtnActiveBorderColor]: '#ea39b8',
		[varBsBtnDisabledColor]: '#ea39b8',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ea39b8',
		[varBsBtnBorderWidth]: '2px',
	},
	color: '#fff',
})

globalStyle(`${vaporScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#3cf281',
		[varBsBtnBorderColor]: '#3cf281',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3cf281',
		[varBsBtnHoverBorderColor]: '#3cf281',
		[varBsBtnFocusBoxShadowRgb]: '60, 242, 129',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3cf281',
		[varBsBtnActiveBorderColor]: '#3cf281',
		[varBsBtnDisabledColor]: '#3cf281',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3cf281',
		[varBsBtnBorderWidth]: '2px',
	},
	color: '#fff',
})

globalStyle(`${vaporScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#1ba2f6',
		[varBsBtnBorderColor]: '#1ba2f6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1ba2f6',
		[varBsBtnHoverBorderColor]: '#1ba2f6',
		[varBsBtnFocusBoxShadowRgb]: '27, 162, 246',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1ba2f6',
		[varBsBtnActiveBorderColor]: '#1ba2f6',
		[varBsBtnDisabledColor]: '#1ba2f6',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#1ba2f6',
		[varBsBtnBorderWidth]: '2px',
	},
	color: '#fff',
})

globalStyle(`${vaporScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ffc107',
		[varBsBtnBorderColor]: '#ffc107',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ffc107',
		[varBsBtnHoverBorderColor]: '#ffc107',
		[varBsBtnFocusBoxShadowRgb]: '255, 193, 7',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ffc107',
		[varBsBtnActiveBorderColor]: '#ffc107',
		[varBsBtnDisabledColor]: '#ffc107',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ffc107',
		[varBsBtnBorderWidth]: '2px',
	},
	color: '#fff',
})

globalStyle(`${vaporScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#e44c55',
		[varBsBtnBorderColor]: '#e44c55',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e44c55',
		[varBsBtnHoverBorderColor]: '#e44c55',
		[varBsBtnFocusBoxShadowRgb]: '228, 76, 85',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e44c55',
		[varBsBtnActiveBorderColor]: '#e44c55',
		[varBsBtnDisabledColor]: '#e44c55',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e44c55',
		[varBsBtnBorderWidth]: '2px',
	},
	color: '#fff',
})

globalStyle(`${vaporScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#44d9e8',
		[varBsBtnBorderColor]: '#44d9e8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#44d9e8',
		[varBsBtnHoverBorderColor]: '#44d9e8',
		[varBsBtnFocusBoxShadowRgb]: '68, 217, 232',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#44d9e8',
		[varBsBtnActiveBorderColor]: '#44d9e8',
		[varBsBtnDisabledColor]: '#44d9e8',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#44d9e8',
		[varBsBtnBorderWidth]: '2px',
	},
	color: '#fff',
})

globalStyle(`${vaporScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#170229',
		[varBsBtnBorderColor]: '#170229',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#170229',
		[varBsBtnHoverBorderColor]: '#170229',
		[varBsBtnFocusBoxShadowRgb]: '23, 2, 41',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#170229',
		[varBsBtnActiveBorderColor]: '#170229',
		[varBsBtnDisabledColor]: '#170229',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#170229',
		[varBsBtnBorderWidth]: '2px',
	},
	color: '#fff',
})

addVaporButtonGlow(btnPrimary, btnOutlinePrimary, '111, 66, 193')
addVaporButtonGlow(btnSecondary, btnOutlineSecondary, '234, 57, 184')
addVaporButtonGlow(btnSuccess, btnOutlineSuccess, '60, 242, 129')
addVaporButtonGlow(btnInfo, btnOutlineInfo, '27, 162, 246')
addVaporButtonGlow(btnWarning, btnOutlineWarning, '255, 193, 7')
addVaporButtonGlow(btnDanger, btnOutlineDanger, '228, 76, 85')
addVaporButtonGlow(btnLight, btnOutlineLight, '68, 217, 232')
addVaporButtonGlow(btnDark, btnOutlineDark, '23, 2, 41')

const vaporLinkTextShadow =
	'0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)'

globalStyle(`${vaporScope}${btnLink}`, {
	vars: {
		[varBsBtnFocusBoxShadowRgb]: '81, 252, 230',
	},
	boxShadow: 'none',
	textShadow: vaporLinkTextShadow,
})
