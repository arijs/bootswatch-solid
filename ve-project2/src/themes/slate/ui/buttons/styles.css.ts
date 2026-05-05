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
import { btnGroup } from '../../../../theme-contract/ui/button-group/contract.css'
import { btnShowHook } from '../../../../theme-contract/ui/dropdowns/contract.css'
import { slateScope } from '../../scope.css'

// ── Base .btn ─────────────────────────────────────────────────────────────────
//
// SOURCE CSS:
// .btn {
//   --bs-btn-padding-x: 1rem; --bs-btn-padding-y: 0.75rem;
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

globalStyle(`${slateScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnPaddingY]: '0.75rem',
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
		[varBsBtnDisabledColor]: '#aaa',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#aaa',
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
globalStyle(`${slateScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

// SOURCE CSS: .btn:focus-visible { color: ...; outline: 0; box-shadow: ...; }
globalStyle(`${slateScope}${btn}:focus-visible`, {
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
		`${slateScope}${btnCheck}:checked + ${slateScope}${btn}`,
		`:not(${slateScope}${btnCheck}) + ${slateScope}${btn}:active`,
		`${slateScope}${btn}:first-child:active`,
		`${slateScope}${btn}${btnActiveHook}`,
		`${slateScope}${btn}${btnShowHook}`,
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
		`${slateScope}${btnCheck}:checked + ${slateScope}${btn}:focus-visible`,
		`:not(${slateScope}${btnCheck}) + ${slateScope}${btn}:active:focus-visible`,
		`${slateScope}${btn}:first-child:active:focus-visible`,
		`${slateScope}${btn}${btnActiveHook}:focus-visible`,
		`${slateScope}${btn}${btnShowHook}:focus-visible`,
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
		`${slateScope}${btn}:disabled`,
		`fieldset:disabled ${slateScope}${btn}`,
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
globalStyle(`${slateScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

// SOURCE CSS:
// .btn-check[disabled] + .btn, .btn-check:disabled + .btn {
//   pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(
	[
		`${slateScope}${btnCheck}[disabled] + ${slateScope}${btn}`,
		`${slateScope}${btnCheck}:disabled + ${slateScope}${btn}`,
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
globalStyle(`${slateScope}${btnSm}`, {
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
globalStyle(`${slateScope}${btnLg}`, {
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
globalStyle(`${slateScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#7a8288',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '217, 217, 217',
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
globalStyle(`${slateScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3a3f44',
		[varBsBtnBorderColor]: '#3a3f44',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#31363a',
		[varBsBtnHoverBorderColor]: '#2e3236',
		[varBsBtnFocusBoxShadowRgb]: '88, 92, 96',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2e3236',
		[varBsBtnActiveBorderColor]: '#2c2f33',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3a3f44',
		[varBsBtnDisabledBorderColor]: '#3a3f44',
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
globalStyle(`${slateScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#7a8288',
		[varBsBtnBorderColor]: '#7a8288',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#686f74',
		[varBsBtnHoverBorderColor]: '#62686d',
		[varBsBtnFocusBoxShadowRgb]: '142, 149, 154',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#62686d',
		[varBsBtnActiveBorderColor]: '#5c6266',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#7a8288',
		[varBsBtnDisabledBorderColor]: '#7a8288',
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
globalStyle(`${slateScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#62c462',
		[varBsBtnBorderColor]: '#62c462',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#53a753',
		[varBsBtnHoverBorderColor]: '#4e9d4e',
		[varBsBtnFocusBoxShadowRgb]: '122, 205, 122',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4e9d4e',
		[varBsBtnActiveBorderColor]: '#4a934a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#62c462',
		[varBsBtnDisabledBorderColor]: '#62c462',
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
globalStyle(`${slateScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#5bc0de',
		[varBsBtnBorderColor]: '#5bc0de',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4da3bd',
		[varBsBtnHoverBorderColor]: '#499ab2',
		[varBsBtnFocusBoxShadowRgb]: '116, 201, 227',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#499ab2',
		[varBsBtnActiveBorderColor]: '#4490a7',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#5bc0de',
		[varBsBtnDisabledBorderColor]: '#5bc0de',
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
globalStyle(`${slateScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f89406',
		[varBsBtnBorderColor]: '#f89406',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d37e05',
		[varBsBtnHoverBorderColor]: '#c67605',
		[varBsBtnFocusBoxShadowRgb]: '249, 164, 43',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c67605',
		[varBsBtnActiveBorderColor]: '#ba6f05',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f89406',
		[varBsBtnDisabledBorderColor]: '#f89406',
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
globalStyle(`${slateScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ee5f5b',
		[varBsBtnBorderColor]: '#ee5f5b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ca514d',
		[varBsBtnHoverBorderColor]: '#be4c49',
		[varBsBtnFocusBoxShadowRgb]: '241, 119, 116',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#be4c49',
		[varBsBtnActiveBorderColor]: '#b34744',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ee5f5b',
		[varBsBtnDisabledBorderColor]: '#ee5f5b',
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
globalStyle(`${slateScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#e9ecef',
		[varBsBtnBorderColor]: '#e9ecef',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#c6c9cb',
		[varBsBtnHoverBorderColor]: '#babdbf',
		[varBsBtnFocusBoxShadowRgb]: '198, 201, 203',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#babdbf',
		[varBsBtnActiveBorderColor]: '#afb1b3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#e9ecef',
		[varBsBtnDisabledBorderColor]: '#e9ecef',
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
globalStyle(`${slateScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#272b30',
		[varBsBtnBorderColor]: '#272b30',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#474b4f',
		[varBsBtnHoverBorderColor]: '#3d4045',
		[varBsBtnFocusBoxShadowRgb]: '71, 75, 79',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#525559',
		[varBsBtnActiveBorderColor]: '#3d4045',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#272b30',
		[varBsBtnDisabledBorderColor]: '#272b30',
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
globalStyle(`${slateScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#3a3f44',
		[varBsBtnBorderColor]: '#3a3f44',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3a3f44',
		[varBsBtnHoverBorderColor]: '#3a3f44',
		[varBsBtnFocusBoxShadowRgb]: '58, 63, 68',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3a3f44',
		[varBsBtnActiveBorderColor]: '#3a3f44',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#3a3f44',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3a3f44',
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
globalStyle(`${slateScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#7a8288',
		[varBsBtnBorderColor]: '#7a8288',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#7a8288',
		[varBsBtnHoverBorderColor]: '#7a8288',
		[varBsBtnFocusBoxShadowRgb]: '122, 130, 136',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#7a8288',
		[varBsBtnActiveBorderColor]: '#7a8288',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#7a8288',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#7a8288',
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
globalStyle(`${slateScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#62c462',
		[varBsBtnBorderColor]: '#62c462',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#62c462',
		[varBsBtnHoverBorderColor]: '#62c462',
		[varBsBtnFocusBoxShadowRgb]: '98, 196, 98',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#62c462',
		[varBsBtnActiveBorderColor]: '#62c462',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#62c462',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#62c462',
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
globalStyle(`${slateScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#5bc0de',
		[varBsBtnBorderColor]: '#5bc0de',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5bc0de',
		[varBsBtnHoverBorderColor]: '#5bc0de',
		[varBsBtnFocusBoxShadowRgb]: '91, 192, 222',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5bc0de',
		[varBsBtnActiveBorderColor]: '#5bc0de',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#5bc0de',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#5bc0de',
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
globalStyle(`${slateScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f89406',
		[varBsBtnBorderColor]: '#f89406',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f89406',
		[varBsBtnHoverBorderColor]: '#f89406',
		[varBsBtnFocusBoxShadowRgb]: '248, 148, 6',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f89406',
		[varBsBtnActiveBorderColor]: '#f89406',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f89406',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f89406',
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
globalStyle(`${slateScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#ee5f5b',
		[varBsBtnBorderColor]: '#ee5f5b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ee5f5b',
		[varBsBtnHoverBorderColor]: '#ee5f5b',
		[varBsBtnFocusBoxShadowRgb]: '238, 95, 91',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ee5f5b',
		[varBsBtnActiveBorderColor]: '#ee5f5b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ee5f5b',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ee5f5b',
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
globalStyle(`${slateScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#e9ecef',
		[varBsBtnBorderColor]: '#e9ecef',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#e9ecef',
		[varBsBtnHoverBorderColor]: '#e9ecef',
		[varBsBtnFocusBoxShadowRgb]: '233, 236, 239',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#e9ecef',
		[varBsBtnActiveBorderColor]: '#e9ecef',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e9ecef',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e9ecef',
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
globalStyle(`${slateScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#272b30',
		[varBsBtnBorderColor]: '#272b30',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#272b30',
		[varBsBtnHoverBorderColor]: '#272b30',
		[varBsBtnFocusBoxShadowRgb]: '39, 43, 48',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#272b30',
		[varBsBtnActiveBorderColor]: '#272b30',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#272b30',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#272b30',
	},
})

globalStyle(`${slateScope}${btn}`, {
	textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(
	[
		`${slateScope}${btn}${btnActiveHook}`,
		`${slateScope}${btn}.disabled`,
	].join(', '),
	{
		borderColor: 'rgba(0, 0, 0, 0.6)',
		boxShadow: 'none',
	},
)

globalStyle(
	[
		`${slateScope}${btn}:hover`,
		`${slateScope}${btn}:focus`,
		`:not(${slateScope}${btnCheck}) + ${slateScope}${btn}:active`,
		`:not(${slateScope}${btnCheck}) + ${slateScope}${btn}:active:hover`,
		`${slateScope}${btn}${btnActiveHook}:hover`,
	].join(', '),
	{
		borderColor: 'rgba(0, 0, 0, 0.6)',
	},
)

globalStyle(`${slateScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3a3f44',
		[varBsBtnBorderColor]: '#3a3f44',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#31363a',
		[varBsBtnHoverBorderColor]: '#31363a',
		[varBsBtnFocusBoxShadowRgb]: '88, 92, 96',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2e3236',
		[varBsBtnActiveBorderColor]: '#2e3236',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3a3f44',
		[varBsBtnDisabledBorderColor]: '#3a3f44',
	},
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnPrimary}:not([disabled]):not(.disabled):hover`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnPrimary}:not([disabled]):not(.disabled):active:hover, ${slateScope}${btnPrimary}${btnActiveHook}:hover`, {
	backgroundImage: 'linear-gradient(#25282c, #292c30 40%, #2b2f32)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#7a8288',
		[varBsBtnBorderColor]: '#7a8288',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#686f74',
		[varBsBtnHoverBorderColor]: '#686f74',
		[varBsBtnFocusBoxShadowRgb]: '142, 149, 154',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#62686d',
		[varBsBtnActiveBorderColor]: '#62686d',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#7a8288',
		[varBsBtnDisabledBorderColor]: '#7a8288',
	},
	backgroundImage: 'linear-gradient(#81888e, #7a8288 20%, #62686d)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSecondary}:not([disabled]):not(.disabled):hover`, {
	backgroundImage: 'linear-gradient(#666d72, #6e757a 40%, #737a80)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSecondary}:not([disabled]):not(.disabled):active:hover, ${slateScope}${btnSecondary}${btnActiveHook}:hover`, {
	backgroundImage: 'linear-gradient(#4e5357, #555b5f 40%, #5a6065)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#62c462',
		[varBsBtnBorderColor]: '#62c462',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#53a753',
		[varBsBtnHoverBorderColor]: '#53a753',
		[varBsBtnFocusBoxShadowRgb]: '122, 205, 122',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4e9d4e',
		[varBsBtnActiveBorderColor]: '#4e9d4e',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#62c462',
		[varBsBtnDisabledBorderColor]: '#62c462',
	},
	backgroundImage: 'linear-gradient(#6ac76a, #62c462 20%, #4e9d4e)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSuccess}:not([disabled]):not(.disabled):hover`, {
	backgroundImage: 'linear-gradient(#52a552, #58b058 40%, #5cb85c)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSuccess}:not([disabled]):not(.disabled):active:hover, ${slateScope}${btnSuccess}${btnActiveHook}:hover`, {
	backgroundImage: 'linear-gradient(#3f7d3f, #458945 40%, #499149)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#5bc0de',
		[varBsBtnBorderColor]: '#5bc0de',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4da3bd',
		[varBsBtnHoverBorderColor]: '#4da3bd',
		[varBsBtnFocusBoxShadowRgb]: '116, 201, 227',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#499ab2',
		[varBsBtnActiveBorderColor]: '#499ab2',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#5bc0de',
		[varBsBtnDisabledBorderColor]: '#5bc0de',
	},
	backgroundImage: 'linear-gradient(#63c3e0, #5bc0de 20%, #499ab2)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnInfo}:not([disabled]):not(.disabled):hover`, {
	backgroundImage: 'linear-gradient(#4ca1ba, #52adc8 40%, #56b4d1)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnInfo}:not([disabled]):not(.disabled):active:hover, ${slateScope}${btnInfo}${btnActiveHook}:hover`, {
	backgroundImage: 'linear-gradient(#3a7b8e, #40869b 40%, #438ea4)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f89406',
		[varBsBtnBorderColor]: '#f89406',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d37e05',
		[varBsBtnHoverBorderColor]: '#d37e05',
		[varBsBtnFocusBoxShadowRgb]: '249, 164, 43',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c67605',
		[varBsBtnActiveBorderColor]: '#c67605',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f89406',
		[varBsBtnDisabledBorderColor]: '#f89406',
	},
	backgroundImage: 'linear-gradient(#f89912, #f89406 20%, #c67605)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnWarning}:not([disabled]):not(.disabled):hover`, {
	backgroundImage: 'linear-gradient(#d07c05, #df8505 40%, #e98b06)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnWarning}:not([disabled]):not(.disabled):active:hover, ${slateScope}${btnWarning}${btnActiveHook}:hover`, {
	backgroundImage: 'linear-gradient(#9f5f04, #ae6804 40%, #b86e04)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ee5f5b',
		[varBsBtnBorderColor]: '#ee5f5b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ca514d',
		[varBsBtnHoverBorderColor]: '#ca514d',
		[varBsBtnFocusBoxShadowRgb]: '241, 119, 116',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#be4c49',
		[varBsBtnActiveBorderColor]: '#be4c49',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ee5f5b',
		[varBsBtnDisabledBorderColor]: '#ee5f5b',
	},
	backgroundImage: 'linear-gradient(#ef6763, #ee5f5b 20%, #be4c49)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDanger}:not([disabled]):not(.disabled):hover`, {
	backgroundImage: 'linear-gradient(#c8504c, #d65652 40%, #e05956)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDanger}:not([disabled]):not(.disabled):active:hover, ${slateScope}${btnDanger}${btnActiveHook}:hover`, {
	backgroundImage: 'linear-gradient(#983d3a, #a74340 40%, #b04643)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#e9ecef',
		[varBsBtnBorderColor]: '#e9ecef',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#c6c9cb',
		[varBsBtnHoverBorderColor]: '#c6c9cb',
		[varBsBtnFocusBoxShadowRgb]: '198, 201, 203',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#babdbf',
		[varBsBtnActiveBorderColor]: '#babdbf',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#e9ecef',
		[varBsBtnDisabledBorderColor]: '#e9ecef',
	},
	backgroundImage: 'linear-gradient(#eaedf0, #e9ecef 20%, #babdbf)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnLight}:not([disabled]):not(.disabled):hover`, {
	backgroundImage: 'linear-gradient(#c4c6c9, #d2d4d7 40%, #dbdee1)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnLight}:not([disabled]):not(.disabled):active:hover, ${slateScope}${btnLight}${btnActiveHook}:hover`, {
	backgroundImage: 'linear-gradient(#959799, #a3a5a7 40%, #acafb1)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#272b30',
		[varBsBtnBorderColor]: '#272b30',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#474b4f',
		[varBsBtnHoverBorderColor]: '#474b4f',
		[varBsBtnFocusBoxShadowRgb]: '71, 75, 79',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#525559',
		[varBsBtnActiveBorderColor]: '#525559',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#272b30',
		[varBsBtnDisabledBorderColor]: '#272b30',
	},
	backgroundImage: 'linear-gradient(#32363a, #272b30 20%, #1f2226)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDark}:not([disabled]):not(.disabled):hover`, {
	backgroundImage: 'linear-gradient(#212428, #23272b 40%, #25282d)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDark}:not([disabled]):not(.disabled):active:hover, ${slateScope}${btnDark}${btnActiveHook}:hover`, {
	backgroundImage: 'linear-gradient(#191c1f, #1b1e22 40%, #1d2024)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#3a3f44',
		[varBsBtnBorderColor]: '#3a3f44',
		[varBsBtnHoverBg]: '#3a3f44',
		[varBsBtnHoverBorderColor]: '#3a3f44',
		[varBsBtnFocusBoxShadowRgb]: '88, 92, 96',
		[varBsBtnActiveBg]: '#3a3f44',
		[varBsBtnActiveBorderColor]: '#3a3f44',
		[varBsBtnDisabledColor]: '#3a3f44',
		[varBsBtnDisabledBorderColor]: '#3a3f44',
	},
	color: '#fff',
})

globalStyle(`${slateScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#7a8288',
		[varBsBtnBorderColor]: '#7a8288',
		[varBsBtnHoverBg]: '#7a8288',
		[varBsBtnHoverBorderColor]: '#7a8288',
		[varBsBtnFocusBoxShadowRgb]: '142, 149, 154',
		[varBsBtnActiveBg]: '#7a8288',
		[varBsBtnActiveBorderColor]: '#7a8288',
		[varBsBtnDisabledColor]: '#7a8288',
		[varBsBtnDisabledBorderColor]: '#7a8288',
	},
})

globalStyle(`${slateScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#62c462',
		[varBsBtnBorderColor]: '#62c462',
		[varBsBtnHoverBg]: '#62c462',
		[varBsBtnHoverBorderColor]: '#62c462',
		[varBsBtnFocusBoxShadowRgb]: '122, 205, 122',
		[varBsBtnActiveBg]: '#62c462',
		[varBsBtnActiveBorderColor]: '#62c462',
		[varBsBtnDisabledColor]: '#62c462',
		[varBsBtnDisabledBorderColor]: '#62c462',
	},
})

globalStyle(`${slateScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#5bc0de',
		[varBsBtnBorderColor]: '#5bc0de',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5bc0de',
		[varBsBtnHoverBorderColor]: '#5bc0de',
		[varBsBtnFocusBoxShadowRgb]: '116, 201, 227',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5bc0de',
		[varBsBtnActiveBorderColor]: '#5bc0de',
		[varBsBtnDisabledColor]: '#5bc0de',
		[varBsBtnDisabledBorderColor]: '#5bc0de',
	},
})

globalStyle(`${slateScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f89406',
		[varBsBtnBorderColor]: '#f89406',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f89406',
		[varBsBtnHoverBorderColor]: '#f89406',
		[varBsBtnFocusBoxShadowRgb]: '249, 164, 43',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f89406',
		[varBsBtnActiveBorderColor]: '#f89406',
		[varBsBtnDisabledColor]: '#f89406',
		[varBsBtnDisabledBorderColor]: '#f89406',
	},
})

globalStyle(`${slateScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#ee5f5b',
		[varBsBtnBorderColor]: '#ee5f5b',
		[varBsBtnHoverBg]: '#ee5f5b',
		[varBsBtnHoverBorderColor]: '#ee5f5b',
		[varBsBtnFocusBoxShadowRgb]: '241, 119, 116',
		[varBsBtnActiveBg]: '#ee5f5b',
		[varBsBtnActiveBorderColor]: '#ee5f5b',
		[varBsBtnDisabledColor]: '#ee5f5b',
		[varBsBtnDisabledBorderColor]: '#ee5f5b',
	},
})

globalStyle(`${slateScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#e9ecef',
		[varBsBtnBorderColor]: '#e9ecef',
		[varBsBtnHoverBg]: '#e9ecef',
		[varBsBtnHoverBorderColor]: '#e9ecef',
		[varBsBtnFocusBoxShadowRgb]: '198, 201, 203',
		[varBsBtnActiveBg]: '#e9ecef',
		[varBsBtnActiveBorderColor]: '#e9ecef',
		[varBsBtnDisabledColor]: '#e9ecef',
		[varBsBtnDisabledBorderColor]: '#e9ecef',
	},
})

globalStyle(`${slateScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#272b30',
		[varBsBtnBorderColor]: '#272b30',
		[varBsBtnHoverBg]: '#272b30',
		[varBsBtnHoverBorderColor]: '#272b30',
		[varBsBtnFocusBoxShadowRgb]: '71, 75, 79',
		[varBsBtnActiveBg]: '#272b30',
		[varBsBtnActiveBorderColor]: '#272b30',
		[varBsBtnDisabledColor]: '#272b30',
		[varBsBtnDisabledBorderColor]: '#272b30',
	},
})

globalStyle(`${slateScope}${btnLink}, ${slateScope}${btnLink}:hover`, {
	borderColor: 'transparent',
})

globalStyle(`${slateScope}${btnGroup} ${btn}${btnActiveHook}`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btnCheck}:checked + ${slateScope}${btn}, ${slateScope}${btnCheck} + ${slateScope}${btn}:hover`, {
	color: '#fff',
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(
	[
		`fieldset:disabled ${slateScope}${btn}`,
		`${slateScope}${btn}:disabled`,
		`${slateScope}${btn}:disabled${btnActiveHook}`,
		`fieldset:disabled ${slateScope}${btn}${btnActiveHook}`,
	].join(', '),
	{
		borderColor: varBsBtnDisabledBorderColor,
	},
)
