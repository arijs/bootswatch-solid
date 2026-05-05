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
import { solarScope } from '../../scope.css'

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

globalStyle(`${solarScope}${btn}`, {
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
globalStyle(`${solarScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

// SOURCE CSS: .btn:focus-visible { color: ...; outline: 0; box-shadow: ...; }
globalStyle(`${solarScope}${btn}:focus-visible`, {
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
		`${solarScope}${btnCheck}:checked + ${solarScope}${btn}`,
		`:not(${solarScope}${btnCheck}) + ${solarScope}${btn}:active`,
		`${solarScope}${btn}:first-child:active`,
		`${solarScope}${btn}${btnActiveHook}`,
		`${solarScope}${btn}${btnShowHook}`,
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
		`${solarScope}${btnCheck}:checked + ${solarScope}${btn}:focus-visible`,
		`:not(${solarScope}${btnCheck}) + ${solarScope}${btn}:active:focus-visible`,
		`${solarScope}${btn}:first-child:active:focus-visible`,
		`${solarScope}${btn}${btnActiveHook}:focus-visible`,
		`${solarScope}${btn}${btnShowHook}:focus-visible`,
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
		`${solarScope}${btn}:disabled`,
		`fieldset:disabled ${solarScope}${btn}`,
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
globalStyle(`${solarScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

// SOURCE CSS:
// .btn-check[disabled] + .btn, .btn-check:disabled + .btn {
//   pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(
	[
		`${solarScope}${btnCheck}[disabled] + ${solarScope}${btn}`,
		`${solarScope}${btnCheck}:disabled + ${solarScope}${btn}`,
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
globalStyle(`${solarScope}${btnSm}`, {
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
globalStyle(`${solarScope}${btnLg}`, {
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
globalStyle(`${solarScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#839496',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '74, 175, 167',
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
globalStyle(`${solarScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#b58900',
		[varBsBtnBorderColor]: '#b58900',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#9a7400',
		[varBsBtnHoverBorderColor]: '#916e00',
		[varBsBtnFocusBoxShadowRgb]: '192, 155, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#916e00',
		[varBsBtnActiveBorderColor]: '#886700',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#b58900',
		[varBsBtnDisabledBorderColor]: '#b58900',
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
globalStyle(`${solarScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#839496',
		[varBsBtnBorderColor]: '#839496',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#6f7e80',
		[varBsBtnHoverBorderColor]: '#697678',
		[varBsBtnFocusBoxShadowRgb]: '150, 164, 166',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#697678',
		[varBsBtnActiveBorderColor]: '#626f71',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#839496',
		[varBsBtnDisabledBorderColor]: '#839496',
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
globalStyle(`${solarScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#2aa198',
		[varBsBtnBorderColor]: '#2aa198',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#248981',
		[varBsBtnHoverBorderColor]: '#22817a',
		[varBsBtnFocusBoxShadowRgb]: '74, 175, 167',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#22817a',
		[varBsBtnActiveBorderColor]: '#207972',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#2aa198',
		[varBsBtnDisabledBorderColor]: '#2aa198',
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
globalStyle(`${solarScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#268bd2',
		[varBsBtnBorderColor]: '#268bd2',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2076b3',
		[varBsBtnHoverBorderColor]: '#1e6fa8',
		[varBsBtnFocusBoxShadowRgb]: '71, 156, 217',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1e6fa8',
		[varBsBtnActiveBorderColor]: '#1d689e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#268bd2',
		[varBsBtnDisabledBorderColor]: '#268bd2',
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
globalStyle(`${solarScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#cb4b16',
		[varBsBtnBorderColor]: '#cb4b16',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ad4013',
		[varBsBtnHoverBorderColor]: '#a23c12',
		[varBsBtnFocusBoxShadowRgb]: '211, 102, 57',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#a23c12',
		[varBsBtnActiveBorderColor]: '#983811',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#cb4b16',
		[varBsBtnDisabledBorderColor]: '#cb4b16',
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
globalStyle(`${solarScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#d33682',
		[varBsBtnBorderColor]: '#d33682',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#b32e6f',
		[varBsBtnHoverBorderColor]: '#a92b68',
		[varBsBtnFocusBoxShadowRgb]: '218, 84, 149',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#a92b68',
		[varBsBtnActiveBorderColor]: '#9e2962',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#d33682',
		[varBsBtnDisabledBorderColor]: '#d33682',
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
globalStyle(`${solarScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#fdf6e3',
		[varBsBtnBorderColor]: '#fdf6e3',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d7d1c1',
		[varBsBtnHoverBorderColor]: '#cac5b6',
		[varBsBtnFocusBoxShadowRgb]: '215, 209, 193',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#cac5b6',
		[varBsBtnActiveBorderColor]: '#beb9aa',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#fdf6e3',
		[varBsBtnDisabledBorderColor]: '#fdf6e3',
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
globalStyle(`${solarScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#073642',
		[varBsBtnBorderColor]: '#073642',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2c545e',
		[varBsBtnHoverBorderColor]: '#204a55',
		[varBsBtnFocusBoxShadowRgb]: '44, 84, 94',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#395e68',
		[varBsBtnActiveBorderColor]: '#204a55',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#073642',
		[varBsBtnDisabledBorderColor]: '#073642',
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
globalStyle(`${solarScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#b58900',
		[varBsBtnBorderColor]: '#b58900',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#b58900',
		[varBsBtnHoverBorderColor]: '#b58900',
		[varBsBtnFocusBoxShadowRgb]: '181, 137, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b58900',
		[varBsBtnActiveBorderColor]: '#b58900',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#b58900',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#b58900',
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
globalStyle(`${solarScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#839496',
		[varBsBtnBorderColor]: '#839496',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#839496',
		[varBsBtnHoverBorderColor]: '#839496',
		[varBsBtnFocusBoxShadowRgb]: '131, 148, 150',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#839496',
		[varBsBtnActiveBorderColor]: '#839496',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#839496',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#839496',
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
globalStyle(`${solarScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#2aa198',
		[varBsBtnBorderColor]: '#2aa198',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2aa198',
		[varBsBtnHoverBorderColor]: '#2aa198',
		[varBsBtnFocusBoxShadowRgb]: '42, 161, 152',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2aa198',
		[varBsBtnActiveBorderColor]: '#2aa198',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#2aa198',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#2aa198',
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
globalStyle(`${solarScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#268bd2',
		[varBsBtnBorderColor]: '#268bd2',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#268bd2',
		[varBsBtnHoverBorderColor]: '#268bd2',
		[varBsBtnFocusBoxShadowRgb]: '38, 139, 210',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#268bd2',
		[varBsBtnActiveBorderColor]: '#268bd2',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#268bd2',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#268bd2',
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
globalStyle(`${solarScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#cb4b16',
		[varBsBtnBorderColor]: '#cb4b16',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cb4b16',
		[varBsBtnHoverBorderColor]: '#cb4b16',
		[varBsBtnFocusBoxShadowRgb]: '203, 75, 22',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cb4b16',
		[varBsBtnActiveBorderColor]: '#cb4b16',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#cb4b16',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#cb4b16',
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
globalStyle(`${solarScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#d33682',
		[varBsBtnBorderColor]: '#d33682',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d33682',
		[varBsBtnHoverBorderColor]: '#d33682',
		[varBsBtnFocusBoxShadowRgb]: '211, 54, 130',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#d33682',
		[varBsBtnActiveBorderColor]: '#d33682',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#d33682',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#d33682',
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
globalStyle(`${solarScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#fdf6e3',
		[varBsBtnBorderColor]: '#fdf6e3',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#fdf6e3',
		[varBsBtnHoverBorderColor]: '#fdf6e3',
		[varBsBtnFocusBoxShadowRgb]: '253, 246, 227',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#fdf6e3',
		[varBsBtnActiveBorderColor]: '#fdf6e3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fdf6e3',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#fdf6e3',
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
globalStyle(`${solarScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#073642',
		[varBsBtnBorderColor]: '#073642',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#073642',
		[varBsBtnHoverBorderColor]: '#073642',
		[varBsBtnFocusBoxShadowRgb]: '7, 54, 66',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#073642',
		[varBsBtnActiveBorderColor]: '#073642',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#073642',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#073642',
	},
})

globalStyle(`${solarScope}${btnPrimary}`, { backgroundColor: '#b58900' })
globalStyle(`${solarScope}${btnSecondary}`, { backgroundColor: '#839496' })
globalStyle(`${solarScope}${btnSuccess}`, { backgroundColor: '#2aa198' })
globalStyle(`${solarScope}${btnInfo}`, { backgroundColor: '#268bd2' })
globalStyle(`${solarScope}${btnWarning}`, { backgroundColor: '#cb4b16' })
globalStyle(`${solarScope}${btnDanger}`, { backgroundColor: '#d33682' })
globalStyle(`${solarScope}${btnLight}`, { backgroundColor: '#fdf6e3' })
globalStyle(`${solarScope}${btnDark}`, { backgroundColor: '#073642' })

