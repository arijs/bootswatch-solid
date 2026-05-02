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
	inputFontFamily,
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
import { sketchyScope } from '../../scope.css'

// SOURCE CSS:
// button, input, optgroup, select, textarea {
//   font-family: Neucha, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
// }
// Keep this rule before the base btn rule so when an element has both classes
// (inputFontFamily + btn), the later btn declaration wins for font-family.
globalStyle(`${sketchyScope}${inputFontFamily}`, {
	fontFamily:
		'Neucha, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
})

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
//   --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
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

globalStyle(`${sketchyScope}${btn}`, {
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
})

// SOURCE CSS: .btn:hover { color: var(--bs-btn-hover-color); background-color: ...; ... }
globalStyle(`${sketchyScope}${btn}:hover`, {
color: varBsBtnHoverColor,
backgroundColor: varBsBtnHoverBg,
borderColor: varBsBtnHoverBorderColor,
})

// SOURCE CSS: .btn:focus-visible { color: ...; outline: 0; box-shadow: ...; }
globalStyle(`${sketchyScope}${btn}:focus-visible`, {
color: varBsBtnHoverColor,
backgroundColor: varBsBtnHoverBg,
borderColor: varBsBtnHoverBorderColor,
outline: 0,
boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS: .btn-check { position: absolute; clip: rect(0, 0, 0, 0); pointer-events: none; }
globalStyle(`${sketchyScope}${btnCheck}`, {
position: 'absolute',
clip: 'rect(0, 0, 0, 0)',
pointerEvents: 'none',
})

// SOURCE CSS: .btn-check { display: inline-block; opacity: 0; }
globalStyle(`${sketchyScope}${btnCheck}`, {
display: 'inline-block',
opacity: 0,
})

// SOURCE CSS: .btn-check + .btn:hover { color: var(--bs-btn-color); background-color: var(--bs-btn-bg); border-color: var(--bs-btn-border-color); }
globalStyle(`${sketchyScope}${btnCheck} + ${sketchyScope}${btn}:hover`, {
color: varBsBtnColor,
backgroundColor: varBsBtnBg,
borderColor: varBsBtnBorderColor,
})

// SOURCE CSS: .btn-check:focus-visible + .btn { border-color: var(--bs-btn-hover-border-color); outline: 0; box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${sketchyScope}${btnCheck}:focus-visible + ${sketchyScope}${btn}`, {
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
`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btn}`,
`:not(${sketchyScope}${btnCheck}) + ${sketchyScope}${btn}:active`,
`${sketchyScope}${btn}:first-child:active`,
`${sketchyScope}${btn}${btnActiveHook}`,
`${sketchyScope}${btn}${btnShowHook}`,
].join(', '),
{
color: varBsBtnActiveColor,
backgroundColor: varBsBtnActiveBg,
borderColor: varBsBtnActiveBorderColor,
},
)

// SOURCE CSS:
// .btn-check:checked + .btn:focus-visible, ... { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(
[
`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btn}:focus-visible`,
`:not(${sketchyScope}${btnCheck}) + ${sketchyScope}${btn}:active:focus-visible`,
`${sketchyScope}${btn}:first-child:active:focus-visible`,
`${sketchyScope}${btn}${btnActiveHook}:focus-visible`,
`${sketchyScope}${btn}${btnShowHook}:focus-visible`,
].join(', '),
{
boxShadow: varBsBtnFocusBoxShadow,
},
)

// SOURCE CSS: .btn-check:checked:focus-visible + .btn { box-shadow: var(--bs-btn-focus-box-shadow); }
globalStyle(`${sketchyScope}${btnCheck}:checked:focus-visible + ${sketchyScope}${btn}`, {
boxShadow: varBsBtnFocusBoxShadow,
})

// SOURCE CSS:
// .btn:disabled, .btn.disabled, fieldset:disabled .btn {
//   color: var(--bs-btn-disabled-color); pointer-events: none;
//   background-color: var(--bs-btn-disabled-bg);
//   border-color: var(--bs-btn-disabled-border-color);
//   opacity: var(--bs-btn-disabled-opacity); }
globalStyle(
[
`${sketchyScope}${btn}:disabled`,
`fieldset:disabled ${sketchyScope}${btn}`,
].join(', '),
{
color: varBsBtnDisabledColor,
pointerEvents: 'none',
backgroundColor: varBsBtnDisabledBg,
borderColor: varBsBtnDisabledBorderColor,
opacity: varBsBtnDisabledOpacity,
},
)

// .btn-check:disabled + .btn (Bootstrap toggle-button pattern)
globalStyle(`${sketchyScope}${btnCheck}:disabled + ${sketchyScope}${btn}`, {
pointerEvents: 'none',
opacity: varBsBtnDisabledOpacity,
})

// SOURCE CSS: .btn-check[disabled] + .btn, .btn-check:disabled + .btn { ... }
globalStyle(`${sketchyScope}${btnCheck}[disabled] + ${sketchyScope}${btn}`, {
pointerEvents: 'none',
opacity: varBsBtnDisabledOpacity,
})

// ── Sketchy-specific .btn override ────────────────────────────────────────────
//
// SOURCE CSS (Sketchy _bootswatch.scss):
// .btn { text-decoration: none; border-radius: 255px 25px 225px 25px/25px 225px 25px 255px; }
globalStyle(`${sketchyScope}${btn}`, {
textDecoration: 'none',
borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
})

// ── .btn-sm ───────────────────────────────────────────────────────────────────
//
// SOURCE CSS:
// .btn-sm, .btn-group-sm > .btn {
//   --bs-btn-padding-y: 0.25rem; --bs-btn-padding-x: 0.5rem;
//   --bs-btn-font-size: 0.875rem; --bs-btn-border-radius: var(--bs-border-radius-sm); }
// .btn-sm, .btn-group-sm > .btn { border-radius: 255px 25px 225px 25px/25px 225px 25px 255px; }
globalStyle(`${sketchyScope}${btnSm}`, {
vars: {
[varBsBtnPaddingY]: '0.25rem',
[varBsBtnPaddingX]: '0.5rem',
[varBsBtnFontSize]: '0.875rem',
[varBsBtnBorderRadius]: varBsBorderRadiusSm,
},
})
globalStyle(`${sketchyScope}${btnSm}`, {
borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
})

// ── .btn-lg ───────────────────────────────────────────────────────────────────
//
// SOURCE CSS:
// .btn-lg, .btn-group-lg > .btn {
//   --bs-btn-padding-y: 0.5rem; --bs-btn-padding-x: 1rem;
//   --bs-btn-font-size: 1.25rem; --bs-btn-border-radius: var(--bs-border-radius-lg); }
// .btn-lg, .btn-group-lg > .btn { border-radius: 55px 225px 15px 25px/25px 25px 35px 355px; }
globalStyle(`${sketchyScope}${btnLg}`, {
vars: {
[varBsBtnPaddingY]: '0.5rem',
[varBsBtnPaddingX]: '1rem',
[varBsBtnFontSize]: '1.25rem',
[varBsBtnBorderRadius]: varBsBorderRadiusLg,
},
})
globalStyle(`${sketchyScope}${btnLg}`, {
borderRadius: '55px 225px 15px 25px/25px 25px 35px 355px',
})

// ── Solid colour variants ─────────────────────────────────────────────────────
// Each variant only sets --bs-btn-* CSS vars; all layout/interaction is inherited
// from the base .btn rules above.
//
// SOURCE: screenshots/sketchy/ui/buttons/{variant}/static/style.css

// SOURCE CSS:
// .btn-primary { --bs-btn-color: #fff; --bs-btn-bg: #333; --bs-btn-border-color: #333;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #2b2b2b; --bs-btn-hover-border-color: #292929;
//   --bs-btn-focus-shadow-rgb: 82, 82, 82; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #292929; --bs-btn-active-border-color: #262626;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #333;
//   --bs-btn-disabled-border-color: #333; }
globalStyle(`${sketchyScope}${btnPrimary}`, {
vars: {
[varBsBtnColor]: '#fff',
[varBsBtnBg]: '#333',
[varBsBtnBorderColor]: '#333',
[varBsBtnHoverColor]: '#fff',
[varBsBtnHoverBg]: '#2b2b2b',
[varBsBtnHoverBorderColor]: '#292929',
[varBsBtnFocusBoxShadowRgb]: '82, 82, 82',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#292929',
[varBsBtnActiveBorderColor]: '#262626',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#fff',
[varBsBtnDisabledBg]: '#333',
[varBsBtnDisabledBorderColor]: '#333',
},
})

// SOURCE CSS:
// .btn-secondary { --bs-btn-color: #fff; --bs-btn-bg: #555; --bs-btn-border-color: #555;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #484848; --bs-btn-hover-border-color: #444444;
//   --bs-btn-focus-shadow-rgb: 111, 111, 111; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #444444; --bs-btn-active-border-color: #404040;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #555;
//   --bs-btn-disabled-border-color: #555; }
globalStyle(`${sketchyScope}${btnSecondary}`, {
vars: {
[varBsBtnColor]: '#fff',
[varBsBtnBg]: '#555',
[varBsBtnBorderColor]: '#555',
[varBsBtnHoverColor]: '#fff',
[varBsBtnHoverBg]: '#484848',
[varBsBtnHoverBorderColor]: '#444444',
[varBsBtnFocusBoxShadowRgb]: '111, 111, 111',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#444444',
[varBsBtnActiveBorderColor]: '#404040',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#fff',
[varBsBtnDisabledBg]: '#555',
[varBsBtnDisabledBorderColor]: '#555',
},
})

// SOURCE CSS:
// .btn-success { --bs-btn-color: #fff; --bs-btn-bg: #28a745; --bs-btn-border-color: #28a745;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #228e3b; --bs-btn-hover-border-color: #208637;
//   --bs-btn-focus-shadow-rgb: 72, 180, 97; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #208637; --bs-btn-active-border-color: #1e7d34;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #28a745;
//   --bs-btn-disabled-border-color: #28a745; }
globalStyle(`${sketchyScope}${btnSuccess}`, {
vars: {
[varBsBtnColor]: '#fff',
[varBsBtnBg]: '#28a745',
[varBsBtnBorderColor]: '#28a745',
[varBsBtnHoverColor]: '#fff',
[varBsBtnHoverBg]: '#228e3b',
[varBsBtnHoverBorderColor]: '#208637',
[varBsBtnFocusBoxShadowRgb]: '72, 180, 97',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#208637',
[varBsBtnActiveBorderColor]: '#1e7d34',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#fff',
[varBsBtnDisabledBg]: '#28a745',
[varBsBtnDisabledBorderColor]: '#28a745',
},
})

// SOURCE CSS:
// .btn-danger { --bs-btn-color: #fff; --bs-btn-bg: #dc3545; --bs-btn-border-color: #dc3545;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #bb2d3b; --bs-btn-hover-border-color: #b02a37;
//   --bs-btn-focus-shadow-rgb: 225, 83, 97; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #b02a37; --bs-btn-active-border-color: #a52834;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #dc3545;
//   --bs-btn-disabled-border-color: #dc3545; }
globalStyle(`${sketchyScope}${btnDanger}`, {
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
// .btn-warning { --bs-btn-color: #fff; --bs-btn-bg: #ffc107; --bs-btn-border-color: #ffc107;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #d9a406; --bs-btn-hover-border-color: #cc9a06;
//   --bs-btn-focus-shadow-rgb: 255, 202, 44; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #cc9a06; --bs-btn-active-border-color: #bf9105;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #ffc107;
//   --bs-btn-disabled-border-color: #ffc107; }
globalStyle(`${sketchyScope}${btnWarning}`, {
vars: {
[varBsBtnColor]: '#fff',
[varBsBtnBg]: '#ffc107',
[varBsBtnBorderColor]: '#ffc107',
[varBsBtnHoverColor]: '#fff',
[varBsBtnHoverBg]: '#d9a406',
[varBsBtnHoverBorderColor]: '#cc9a06',
[varBsBtnFocusBoxShadowRgb]: '255, 202, 44',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#cc9a06',
[varBsBtnActiveBorderColor]: '#bf9105',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#fff',
[varBsBtnDisabledBg]: '#ffc107',
[varBsBtnDisabledBorderColor]: '#ffc107',
},
})

// SOURCE CSS:
// .btn-info { --bs-btn-color: #fff; --bs-btn-bg: #17a2b8; --bs-btn-border-color: #17a2b8;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #148a9c; --bs-btn-hover-border-color: #128293;
//   --bs-btn-focus-shadow-rgb: 58, 176, 195; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #128293; --bs-btn-active-border-color: #117a8a;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #17a2b8;
//   --bs-btn-disabled-border-color: #17a2b8; }
globalStyle(`${sketchyScope}${btnInfo}`, {
vars: {
[varBsBtnColor]: '#fff',
[varBsBtnBg]: '#17a2b8',
[varBsBtnBorderColor]: '#17a2b8',
[varBsBtnHoverColor]: '#fff',
[varBsBtnHoverBg]: '#148a9c',
[varBsBtnHoverBorderColor]: '#128293',
[varBsBtnFocusBoxShadowRgb]: '58, 176, 195',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#128293',
[varBsBtnActiveBorderColor]: '#117a8a',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#fff',
[varBsBtnDisabledBg]: '#17a2b8',
[varBsBtnDisabledBorderColor]: '#17a2b8',
},
})

// SOURCE CSS:
// .btn-light { --bs-btn-color: #000; --bs-btn-bg: #fff; --bs-btn-border-color: #fff;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #d9d9d9; --bs-btn-hover-border-color: #cccccc;
//   --bs-btn-focus-shadow-rgb: 217, 217, 217; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #cccccc; --bs-btn-active-border-color: #bfbfbf;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #000; --bs-btn-disabled-bg: #fff;
//   --bs-btn-disabled-border-color: #fff; }
globalStyle(`${sketchyScope}${btnLight}`, {
vars: {
[varBsBtnColor]: '#000',
[varBsBtnBg]: '#fff',
[varBsBtnBorderColor]: '#fff',
[varBsBtnHoverColor]: '#000',
[varBsBtnHoverBg]: '#d9d9d9',
[varBsBtnHoverBorderColor]: '#cccccc',
[varBsBtnFocusBoxShadowRgb]: '217, 217, 217',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#cccccc',
[varBsBtnActiveBorderColor]: '#bfbfbf',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#000',
[varBsBtnDisabledBg]: '#fff',
[varBsBtnDisabledBorderColor]: '#fff',
},
})

// SOURCE CSS:
// .btn-dark { --bs-btn-color: #fff; --bs-btn-bg: #555; --bs-btn-border-color: #555;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #6f6f6f; --bs-btn-hover-border-color: #666666;
//   --bs-btn-focus-shadow-rgb: 111, 111, 111; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #777777; --bs-btn-active-border-color: #666666;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: #555;
//   --bs-btn-disabled-border-color: #555; }
globalStyle(`${sketchyScope}${btnDark}`, {
vars: {
[varBsBtnColor]: '#fff',
[varBsBtnBg]: '#555',
[varBsBtnBorderColor]: '#555',
[varBsBtnHoverColor]: '#fff',
[varBsBtnHoverBg]: '#6f6f6f',
[varBsBtnHoverBorderColor]: '#666666',
[varBsBtnFocusBoxShadowRgb]: '111, 111, 111',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#777777',
[varBsBtnActiveBorderColor]: '#666666',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#fff',
[varBsBtnDisabledBg]: '#555',
[varBsBtnDisabledBorderColor]: '#555',
},
})

// ── .btn-link ─────────────────────────────────────────────────────────────────
//
// SOURCE CSS:
// .btn-link { --bs-btn-font-weight: 400; --bs-btn-color: var(--bs-link-color);
//   --bs-btn-bg: transparent; --bs-btn-border-color: transparent;
//   --bs-btn-hover-color: var(--bs-link-hover-color); --bs-btn-hover-border-color: transparent;
//   --bs-btn-active-color: var(--bs-link-hover-color); --bs-btn-active-border-color: transparent;
//   --bs-btn-disabled-color: #868e96; --bs-btn-disabled-border-color: transparent;
//   --bs-btn-box-shadow: 0 0 0 #000; --bs-btn-focus-shadow-rgb: 82, 82, 82;
//   text-decoration: underline; }
globalStyle(`${sketchyScope}${btnLink}`, {
vars: {
[varBsBtnFontWeight]: '400',
[varBsBtnColor]: varBsLinkColor,
[varBsBtnBg]: 'transparent',
[varBsBtnBorderColor]: 'transparent',
[varBsBtnHoverColor]: varBsLinkHoverColor,
[varBsBtnHoverBorderColor]: 'transparent',
[varBsBtnActiveColor]: varBsLinkHoverColor,
[varBsBtnActiveBorderColor]: 'transparent',
[varBsBtnDisabledColor]: '#868e96',
[varBsBtnDisabledBorderColor]: 'transparent',
[varBsBtnBoxShadow]: '0 0 0 #000',
[varBsBtnFocusBoxShadowRgb]: '82, 82, 82',
},
// Sketchy overrides .btn { text-decoration: none } after .btn-link, so no underline
textDecoration: 'none',
})

// SOURCE CSS: .btn-link:focus-visible { color: var(--bs-btn-color); }
globalStyle(`${sketchyScope}${btnLink}:focus-visible`, {
color: varBsBtnColor,
})

// SOURCE CSS: .btn-link:hover { color: var(--bs-btn-hover-color); }
globalStyle(`${sketchyScope}${btnLink}:hover`, {
color: varBsBtnHoverColor,
})

// ── Outline variants ──────────────────────────────────────────────────────────
// Each outline variant sets only --bs-btn-* CSS vars.
// Hover and active states are handled by the base .btn:hover / active rules
// using var(--bs-btn-hover-bg) etc. set here per variant.
//
// SOURCE: screenshots/sketchy/ui/buttons/outline-{variant}-button/static/style.css

// SOURCE CSS:
// .btn-outline-primary { --bs-btn-color: #333; --bs-btn-border-color: #333;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #333; --bs-btn-hover-border-color: #333;
//   --bs-btn-focus-shadow-rgb: 51, 51, 51; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #333; --bs-btn-active-border-color: #333;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #333; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #333; }
globalStyle(`${sketchyScope}${btnOutlinePrimary}`, {
vars: {
[varBsBtnColor]: '#333',
[varBsBtnBorderColor]: '#333',
[varBsBtnHoverColor]: '#fff',
[varBsBtnHoverBg]: '#333',
[varBsBtnHoverBorderColor]: '#333',
[varBsBtnFocusBoxShadowRgb]: '51, 51, 51',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#333',
[varBsBtnActiveBorderColor]: '#333',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#333',
[varBsBtnDisabledBg]: 'transparent',
[varBsBtnDisabledBorderColor]: '#333',
},
})

// SOURCE CSS:
// .btn-outline-secondary { --bs-btn-color: #555; --bs-btn-border-color: #555;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #555; --bs-btn-hover-border-color: #555;
//   --bs-btn-focus-shadow-rgb: 85, 85, 85; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #555; --bs-btn-active-border-color: #555;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #555; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #555; }
globalStyle(`${sketchyScope}${btnOutlineSecondary}`, {
vars: {
[varBsBtnColor]: '#555',
[varBsBtnBorderColor]: '#555',
[varBsBtnHoverColor]: '#fff',
[varBsBtnHoverBg]: '#555',
[varBsBtnHoverBorderColor]: '#555',
[varBsBtnFocusBoxShadowRgb]: '85, 85, 85',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#555',
[varBsBtnActiveBorderColor]: '#555',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#555',
[varBsBtnDisabledBg]: 'transparent',
[varBsBtnDisabledBorderColor]: '#555',
},
})

// SOURCE CSS:
// .btn-outline-success { --bs-btn-color: #28a745; --bs-btn-border-color: #28a745;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #28a745; --bs-btn-hover-border-color: #28a745;
//   --bs-btn-focus-shadow-rgb: 40, 167, 69; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #28a745; --bs-btn-active-border-color: #28a745;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #28a745; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #28a745; }
globalStyle(`${sketchyScope}${btnOutlineSuccess}`, {
vars: {
[varBsBtnColor]: '#28a745',
[varBsBtnBorderColor]: '#28a745',
[varBsBtnHoverColor]: '#fff',
[varBsBtnHoverBg]: '#28a745',
[varBsBtnHoverBorderColor]: '#28a745',
[varBsBtnFocusBoxShadowRgb]: '40, 167, 69',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#28a745',
[varBsBtnActiveBorderColor]: '#28a745',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#28a745',
[varBsBtnDisabledBg]: 'transparent',
[varBsBtnDisabledBorderColor]: '#28a745',
},
})

// SOURCE CSS:
// .btn-outline-danger { --bs-btn-color: #dc3545; --bs-btn-border-color: #dc3545;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #dc3545; --bs-btn-hover-border-color: #dc3545;
//   --bs-btn-focus-shadow-rgb: 220, 53, 69; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #dc3545; --bs-btn-active-border-color: #dc3545;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #dc3545; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #dc3545; }
globalStyle(`${sketchyScope}${btnOutlineDanger}`, {
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
// .btn-outline-warning { --bs-btn-color: #ffc107; --bs-btn-border-color: #ffc107;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #ffc107; --bs-btn-hover-border-color: #ffc107;
//   --bs-btn-focus-shadow-rgb: 255, 193, 7; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #ffc107; --bs-btn-active-border-color: #ffc107;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #ffc107; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #ffc107; }
globalStyle(`${sketchyScope}${btnOutlineWarning}`, {
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
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#ffc107',
[varBsBtnDisabledBg]: 'transparent',
[varBsBtnDisabledBorderColor]: '#ffc107',
},
})

// SOURCE CSS:
// .btn-outline-info { --bs-btn-color: #17a2b8; --bs-btn-border-color: #17a2b8;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #17a2b8; --bs-btn-hover-border-color: #17a2b8;
//   --bs-btn-focus-shadow-rgb: 23, 162, 184; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #17a2b8; --bs-btn-active-border-color: #17a2b8;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #17a2b8; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #17a2b8; }
globalStyle(`${sketchyScope}${btnOutlineInfo}`, {
vars: {
[varBsBtnColor]: '#17a2b8',
[varBsBtnBorderColor]: '#17a2b8',
[varBsBtnHoverColor]: '#fff',
[varBsBtnHoverBg]: '#17a2b8',
[varBsBtnHoverBorderColor]: '#17a2b8',
[varBsBtnFocusBoxShadowRgb]: '23, 162, 184',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#17a2b8',
[varBsBtnActiveBorderColor]: '#17a2b8',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#17a2b8',
[varBsBtnDisabledBg]: 'transparent',
[varBsBtnDisabledBorderColor]: '#17a2b8',
},
})

// SOURCE CSS:
// .btn-outline-light { --bs-btn-color: #fff; --bs-btn-border-color: #fff;
//   --bs-btn-hover-color: #000; --bs-btn-hover-bg: #fff; --bs-btn-hover-border-color: #fff;
//   --bs-btn-focus-shadow-rgb: 255, 255, 255; --bs-btn-active-color: #000;
//   --bs-btn-active-bg: #fff; --bs-btn-active-border-color: #fff;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #fff; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #fff; }
globalStyle(`${sketchyScope}${btnOutlineLight}`, {
vars: {
[varBsBtnColor]: '#fff',
[varBsBtnBorderColor]: '#fff',
[varBsBtnHoverColor]: '#000',
[varBsBtnHoverBg]: '#fff',
[varBsBtnHoverBorderColor]: '#fff',
[varBsBtnFocusBoxShadowRgb]: '255, 255, 255',
[varBsBtnActiveColor]: '#000',
[varBsBtnActiveBg]: '#fff',
[varBsBtnActiveBorderColor]: '#fff',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#fff',
[varBsBtnDisabledBg]: 'transparent',
[varBsBtnDisabledBorderColor]: '#fff',
},
})

// SOURCE CSS:
// .btn-outline-dark { --bs-btn-color: #555; --bs-btn-border-color: #555;
//   --bs-btn-hover-color: #fff; --bs-btn-hover-bg: #555; --bs-btn-hover-border-color: #555;
//   --bs-btn-focus-shadow-rgb: 85, 85, 85; --bs-btn-active-color: #fff;
//   --bs-btn-active-bg: #555; --bs-btn-active-border-color: #555;
//   --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//   --bs-btn-disabled-color: #555; --bs-btn-disabled-bg: transparent;
//   --bs-btn-disabled-border-color: #555; }
globalStyle(`${sketchyScope}${btnOutlineDark}`, {
vars: {
[varBsBtnColor]: '#555',
[varBsBtnBorderColor]: '#555',
[varBsBtnHoverColor]: '#fff',
[varBsBtnHoverBg]: '#555',
[varBsBtnHoverBorderColor]: '#555',
[varBsBtnFocusBoxShadowRgb]: '85, 85, 85',
[varBsBtnActiveColor]: '#fff',
[varBsBtnActiveBg]: '#555',
[varBsBtnActiveBorderColor]: '#555',
[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
[varBsBtnDisabledColor]: '#555',
[varBsBtnDisabledBg]: 'transparent',
[varBsBtnDisabledBorderColor]: '#555',
},
})
