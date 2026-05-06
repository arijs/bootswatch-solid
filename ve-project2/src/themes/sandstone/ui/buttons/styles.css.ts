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
import { sandstoneScope } from '../../scope.css'

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

globalStyle(`${sandstoneScope}${btn}`, {
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
globalStyle(`${sandstoneScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

// SOURCE CSS: .btn:focus-visible { color: ...; outline: 0; box-shadow: ...; }
globalStyle(`${sandstoneScope}${btn}:focus-visible`, {
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
		`${sandstoneScope}${btnCheck}:checked + ${sandstoneScope}${btn}`,
		`:not(${sandstoneScope}${btnCheck}) + ${sandstoneScope}${btn}:active`,
		`${sandstoneScope}${btn}:first-child:active`,
		`${sandstoneScope}${btn}${btnActiveHook}`,
		`${sandstoneScope}${btn}${btnShowHook}`,
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
		`${sandstoneScope}${btnCheck}:checked + ${sandstoneScope}${btn}:focus-visible`,
		`:not(${sandstoneScope}${btnCheck}) + ${sandstoneScope}${btn}:active:focus-visible`,
		`${sandstoneScope}${btn}:first-child:active:focus-visible`,
		`${sandstoneScope}${btn}${btnActiveHook}:focus-visible`,
		`${sandstoneScope}${btn}${btnShowHook}:focus-visible`,
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
		`${sandstoneScope}${btn}:disabled`,
		`fieldset:disabled ${sandstoneScope}${btn}`,
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
globalStyle(`${sandstoneScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

// SOURCE CSS:
// .btn-check[disabled] + .btn, .btn-check:disabled + .btn {
//   pointer-events: none; filter: none; opacity: 0.65; }
globalStyle(
	[
		`${sandstoneScope}${btnCheck}[disabled] + ${sandstoneScope}${btn}`,
		`${sandstoneScope}${btnCheck}:disabled + ${sandstoneScope}${btn}`,
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
globalStyle(`${sandstoneScope}${btnSm}`, {
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
globalStyle(`${sandstoneScope}${btnLg}`, {
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
//   --bs-btn-disabled-color: #8e8c84; --bs-btn-disabled-border-color: transparent;
//   --bs-btn-box-shadow: 0 0 0 #000; --bs-btn-focus-shadow-rgb: 49, 132, 253;
//   text-decoration: underline; }
globalStyle(`${sandstoneScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#8e8c84',
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
// .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #325d88; --bs-btn-border-color: #325d88;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #0b5ed7; --bs-btn-hover-border-color: #0a58ca;
//   --bs-btn-focus-shadow-rgb: 49, 132, 253; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #0a58ca; --bs-btn-active-border-color: #0a53be;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #325d88;
//   --bs-btn-disabled-border-color: #325d88; }
globalStyle(`${sandstoneScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#325d88',
		[varBsBtnBorderColor]: '#325d88',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2b4f74',
		[varBsBtnHoverBorderColor]: '#284a6d',
		[varBsBtnFocusBoxShadowRgb]: '81, 117, 154',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#284a6d',
		[varBsBtnActiveBorderColor]: '#264666',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#325d88',
		[varBsBtnDisabledBorderColor]: '#325d88',
	},
})

// SOURCE CSS:
// .btn-secondary { --bs-btn-color: #fff; --bs-btn-bg: #8e8c84; --bs-btn-border-color: #8e8c84;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #5c636a; --bs-btn-hover-border-color: #565e64;
//   --bs-btn-focus-shadow-rgb: 130, 138, 145; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #565e64; --bs-btn-active-border-color: #51585e;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #8e8c84;
//   --bs-btn-disabled-border-color: #8e8c84; }
globalStyle(`${sandstoneScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#8e8c84',
		[varBsBtnBorderColor]: '#8e8c84',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#797770',
		[varBsBtnHoverBorderColor]: '#72706a',
		[varBsBtnFocusBoxShadowRgb]: '159, 157, 150',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#72706a',
		[varBsBtnActiveBorderColor]: '#6b6963',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#8e8c84',
		[varBsBtnDisabledBorderColor]: '#8e8c84',
	},
})

// SOURCE CSS:
// .btn-success { --bs-btn-color: #fff; --bs-btn-bg: #93c54b; --bs-btn-border-color: #93c54b;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #157347; --bs-btn-hover-border-color: #146c43;
//   --bs-btn-focus-shadow-rgb: 60, 153, 110; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #146c43; --bs-btn-active-border-color: #13653f;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #93c54b;
//   --bs-btn-disabled-border-color: #93c54b; }
globalStyle(`${sandstoneScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#93c54b',
		[varBsBtnBorderColor]: '#93c54b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#7da740',
		[varBsBtnHoverBorderColor]: '#769e3c',
		[varBsBtnFocusBoxShadowRgb]: '163, 206, 102',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#769e3c',
		[varBsBtnActiveBorderColor]: '#6e9438',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#93c54b',
		[varBsBtnDisabledBorderColor]: '#93c54b',
	},
})

// SOURCE CSS:
// .btn-info { --bs-btn-color: #000; --bs-btn-bg: #29abe0; --bs-btn-border-color: #29abe0;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #31d2f2; --bs-btn-hover-border-color: #25cff2;
//   --bs-btn-focus-shadow-rgb: 11, 172, 204; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #3dd5f3; --bs-btn-active-border-color: #25cff2;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #29abe0;
//   --bs-btn-disabled-border-color: #29abe0; }
globalStyle(`${sandstoneScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#29abe0',
		[varBsBtnBorderColor]: '#29abe0',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2391be',
		[varBsBtnHoverBorderColor]: '#2189b3',
		[varBsBtnFocusBoxShadowRgb]: '73, 184, 229',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2189b3',
		[varBsBtnActiveBorderColor]: '#1f80a8',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#29abe0',
		[varBsBtnDisabledBorderColor]: '#29abe0',
	},
})

// SOURCE CSS:
// .btn-warning { --bs-btn-color: #000; --bs-btn-bg: #f47c3c; --bs-btn-border-color: #f47c3c;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #ffca2c; --bs-btn-hover-border-color: #ffc720;
//   --bs-btn-focus-shadow-rgb: 217, 164, 6; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #ffcd39; --bs-btn-active-border-color: #ffc720;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #f47c3c;
//   --bs-btn-disabled-border-color: #f47c3c; }
globalStyle(`${sandstoneScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f47c3c',
		[varBsBtnBorderColor]: '#f47c3c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cf6933',
		[varBsBtnHoverBorderColor]: '#c36330',
		[varBsBtnFocusBoxShadowRgb]: '246, 144, 89',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c36330',
		[varBsBtnActiveBorderColor]: '#b75d2d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f47c3c',
		[varBsBtnDisabledBorderColor]: '#f47c3c',
	},
})

// SOURCE CSS:
// .btn-danger { --bs-btn-color: #fff; --bs-btn-bg: #d9534f; --bs-btn-border-color: #d9534f;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #bb2d3b; --bs-btn-hover-border-color: #b02a37;
//   --bs-btn-focus-shadow-rgb: 225, 83, 97; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #b02a37; --bs-btn-active-border-color: #a52834;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #d9534f;
//   --bs-btn-disabled-border-color: #d9534f; }
globalStyle(`${sandstoneScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#d9534f',
		[varBsBtnBorderColor]: '#d9534f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#b84743',
		[varBsBtnHoverBorderColor]: '#ae423f',
		[varBsBtnFocusBoxShadowRgb]: '223, 109, 105',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ae423f',
		[varBsBtnActiveBorderColor]: '#a33e3b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#d9534f',
		[varBsBtnDisabledBorderColor]: '#d9534f',
	},
})

// SOURCE CSS:
// .btn-light { --bs-btn-color: #000; --bs-btn-bg: #f8f5f0; --bs-btn-border-color: #f8f5f0;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #d3d4d5; --bs-btn-hover-border-color: #c6c7c8;
//   --bs-btn-focus-shadow-rgb: 211, 212, 213; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #c6c7c8; --bs-btn-active-border-color: #babbbc;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #f8f5f0;
//   --bs-btn-disabled-border-color: #f8f5f0; }
globalStyle(`${sandstoneScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f8f5f0',
		[varBsBtnBorderColor]: '#f8f5f0',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d3d0cc',
		[varBsBtnHoverBorderColor]: '#c6c4c0',
		[varBsBtnFocusBoxShadowRgb]: '211, 208, 204',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#c6c4c0',
		[varBsBtnActiveBorderColor]: '#bab8b4',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f8f5f0',
		[varBsBtnDisabledBorderColor]: '#f8f5f0',
	},
})

// SOURCE CSS:
// .btn-dark { --bs-btn-color: #fff; --bs-btn-bg: #3e3f3a; --bs-btn-border-color: #3e3f3a;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #424649; --bs-btn-hover-border-color: #373b3e;
//   --bs-btn-focus-shadow-rgb: 66, 70, 73; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #4d5154; --bs-btn-active-border-color: #373b3e;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #3e3f3a;
//   --bs-btn-disabled-border-color: #3e3f3a; }
globalStyle(`${sandstoneScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3e3f3a',
		[varBsBtnBorderColor]: '#3e3f3a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5b5c58',
		[varBsBtnHoverBorderColor]: '#51524e',
		[varBsBtnFocusBoxShadowRgb]: '91, 92, 88',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#656561',
		[varBsBtnActiveBorderColor]: '#51524e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3e3f3a',
		[varBsBtnDisabledBorderColor]: '#3e3f3a',
	},
})

// ── Outline variants ──────────────────────────────────────────────────────────
// Each outline variant sets only --bs-btn-* CSS vars.
// Hover and active states are handled by the base .btn:hover / active rules
// using var(--bs-btn-hover-bg) etc. set here per variant.
//
// SOURCE CSS: screenshots/bootstrap/bootstrap.css — .btn-outline-* { --bs-btn-* }

// SOURCE CSS:
// .btn-outline-primary { --bs-btn-color: #325d88; --bs-btn-border-color: #325d88;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #325d88; --bs-btn-hover-border-color: #325d88;
//   --bs-btn-focus-shadow-rgb: 50, 93, 136; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #325d88; --bs-btn-active-border-color: #325d88;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #325d88; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #325d88; }
globalStyle(`${sandstoneScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#325d88',
		[varBsBtnBorderColor]: '#325d88',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#325d88',
		[varBsBtnHoverBorderColor]: '#325d88',
		[varBsBtnFocusBoxShadowRgb]: '50, 93, 136',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#325d88',
		[varBsBtnActiveBorderColor]: '#325d88',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#325d88',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#325d88',
	},
})

// SOURCE CSS:
// .btn-outline-secondary { --bs-btn-color: #8e8c84; --bs-btn-border-color: #8e8c84;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #8e8c84; --bs-btn-hover-border-color: #8e8c84;
//   --bs-btn-focus-shadow-rgb: 142, 140, 132; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #8e8c84; --bs-btn-active-border-color: #8e8c84;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #8e8c84; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #8e8c84; }
globalStyle(`${sandstoneScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#8e8c84',
		[varBsBtnBorderColor]: '#8e8c84',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#8e8c84',
		[varBsBtnHoverBorderColor]: '#8e8c84',
		[varBsBtnFocusBoxShadowRgb]: '142, 140, 132',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#8e8c84',
		[varBsBtnActiveBorderColor]: '#8e8c84',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#8e8c84',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#8e8c84',
	},
})

// SOURCE CSS:
// .btn-outline-success { --bs-btn-color: #93c54b; --bs-btn-border-color: #93c54b;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #93c54b; --bs-btn-hover-border-color: #93c54b;
//   --bs-btn-focus-shadow-rgb: 147, 197, 75; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #93c54b; --bs-btn-active-border-color: #93c54b;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #93c54b; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #93c54b; }
globalStyle(`${sandstoneScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#93c54b',
		[varBsBtnBorderColor]: '#93c54b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#93c54b',
		[varBsBtnHoverBorderColor]: '#93c54b',
		[varBsBtnFocusBoxShadowRgb]: '147, 197, 75',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#93c54b',
		[varBsBtnActiveBorderColor]: '#93c54b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#93c54b',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#93c54b',
	},
})

// SOURCE CSS:
// .btn-outline-info { --bs-btn-color: #29abe0; --bs-btn-border-color: #29abe0;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #29abe0; --bs-btn-hover-border-color: #29abe0;
//   --bs-btn-focus-shadow-rgb: 41, 171, 224; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #29abe0; --bs-btn-active-border-color: #29abe0;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #29abe0; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #29abe0; }
globalStyle(`${sandstoneScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#29abe0',
		[varBsBtnBorderColor]: '#29abe0',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#29abe0',
		[varBsBtnHoverBorderColor]: '#29abe0',
		[varBsBtnFocusBoxShadowRgb]: '41, 171, 224',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#29abe0',
		[varBsBtnActiveBorderColor]: '#29abe0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#29abe0',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#29abe0',
	},
})

// SOURCE CSS:
// .btn-outline-warning { --bs-btn-color: #f47c3c; --bs-btn-border-color: #f47c3c;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #f47c3c; --bs-btn-hover-border-color: #f47c3c;
//   --bs-btn-focus-shadow-rgb: 244, 124, 60; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #f47c3c; --bs-btn-active-border-color: #f47c3c;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #f47c3c; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #f47c3c; }
globalStyle(`${sandstoneScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f47c3c',
		[varBsBtnBorderColor]: '#f47c3c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f47c3c',
		[varBsBtnHoverBorderColor]: '#f47c3c',
		[varBsBtnFocusBoxShadowRgb]: '244, 124, 60',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f47c3c',
		[varBsBtnActiveBorderColor]: '#f47c3c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f47c3c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f47c3c',
	},
})

// SOURCE CSS:
// .btn-outline-danger { --bs-btn-color: #d9534f; --bs-btn-border-color: #d9534f;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #d9534f; --bs-btn-hover-border-color: #d9534f;
//   --bs-btn-focus-shadow-rgb: 217, 83, 79; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #d9534f; --bs-btn-active-border-color: #d9534f;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #d9534f; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #d9534f; }
globalStyle(`${sandstoneScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#d9534f',
		[varBsBtnBorderColor]: '#d9534f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d9534f',
		[varBsBtnHoverBorderColor]: '#d9534f',
		[varBsBtnFocusBoxShadowRgb]: '217, 83, 79',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#d9534f',
		[varBsBtnActiveBorderColor]: '#d9534f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#d9534f',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#d9534f',
	},
})

// SOURCE CSS:
// .btn-outline-light { --bs-btn-color: #f8f5f0; --bs-btn-border-color: #f8f5f0;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #f8f5f0; --bs-btn-hover-border-color: #f8f5f0;
//   --bs-btn-focus-shadow-rgb: 248, 249, 250; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #f8f5f0; --bs-btn-active-border-color: #f8f5f0;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #f8f5f0; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #f8f5f0; }
globalStyle(`${sandstoneScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#f8f5f0',
		[varBsBtnBorderColor]: '#f8f5f0',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f8f5f0',
		[varBsBtnHoverBorderColor]: '#f8f5f0',
		[varBsBtnFocusBoxShadowRgb]: '248, 249, 250',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f8f5f0',
		[varBsBtnActiveBorderColor]: '#f8f5f0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f8f5f0',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f8f5f0',
	},
})

// SOURCE CSS:
// .btn-outline-dark { --bs-btn-color: #3e3f3a; --bs-btn-border-color: #3e3f3a;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #3e3f3a; --bs-btn-hover-border-color: #3e3f3a;
//   --bs-btn-focus-shadow-rgb: 33, 37, 41; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #3e3f3a; --bs-btn-active-border-color: #3e3f3a;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0,0,0,0.125);
//   --bs-btn-disabled-color: #3e3f3a; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #3e3f3a; }
globalStyle(`${sandstoneScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#3e3f3a',
		[varBsBtnBorderColor]: '#3e3f3a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3e3f3a',
		[varBsBtnHoverBorderColor]: '#3e3f3a',
		[varBsBtnFocusBoxShadowRgb]: '33, 37, 41',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3e3f3a',
		[varBsBtnActiveBorderColor]: '#3e3f3a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#3e3f3a',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3e3f3a',
	},
})



