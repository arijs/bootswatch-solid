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
import { quartzScope } from '../../scope.css'

// ── Base .btn ─────────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1.5rem',
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
		[varBsBtnBoxShadow]: '1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
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

globalStyle(`${quartzScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${quartzScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(
	[
		`${quartzScope}${btnCheck}:checked + ${quartzScope}${btn}`,
		`:not(${quartzScope}${btnCheck}) + ${quartzScope}${btn}:active`,
		`${quartzScope}${btn}:first-child:active`,
		`${quartzScope}${btn}${btnActiveHook}`,
		`${quartzScope}${btn}${btnShowHook}`,
	].join(', '),
	{
		color: varBsBtnActiveColor,
		backgroundColor: varBsBtnActiveBg,
		borderColor: varBsBtnActiveBorderColor,
	},
)

globalStyle(
	[
		`${quartzScope}${btnCheck}:checked + ${quartzScope}${btn}:focus-visible`,
		`:not(${quartzScope}${btnCheck}) + ${quartzScope}${btn}:active:focus-visible`,
		`${quartzScope}${btn}:first-child:active:focus-visible`,
		`${quartzScope}${btn}${btnActiveHook}:focus-visible`,
		`${quartzScope}${btn}${btnShowHook}:focus-visible`,
	].join(', '),
	{
		boxShadow: varBsBtnFocusBoxShadow,
	},
)

globalStyle(
	[
		`${quartzScope}${btn}:disabled`,
		`fieldset:disabled ${quartzScope}${btn}`,
	].join(', '),
	{
		color: varBsBtnDisabledColor,
		pointerEvents: 'none',
		backgroundColor: varBsBtnDisabledBg,
		borderColor: varBsBtnDisabledBorderColor,
		opacity: varBsBtnDisabledOpacity,
	},
)

globalStyle(`${quartzScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(
	[
		`${quartzScope}${btnCheck}[disabled] + ${quartzScope}${btn}`,
		`${quartzScope}${btnCheck}:disabled + ${quartzScope}${btn}`,
	].join(', '),
	{
		pointerEvents: 'none',
		filter: 'none',
		opacity: varBsBtnDisabledOpacity,
	},
)

// ── Size modifiers ────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${quartzScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

// ── .btn-link ─────────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '217, 217, 217',
	},
	textDecoration: 'underline',
})

// ── Solid colour variants ─────────────────────────────────────────────────────

globalStyle(`${quartzScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e83283',
		[varBsBtnBorderColor]: '#e83283',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c52b6f',
		[varBsBtnHoverBorderColor]: '#ba2869',
		[varBsBtnFocusBoxShadowRgb]: '235, 81, 150',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ba2869',
		[varBsBtnActiveBorderColor]: '#ae2662',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e83283',
		[varBsBtnDisabledBorderColor]: '#e83283',
	},
})

globalStyle(`${quartzScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: 'rgba(255, 255, 255, 0.49)',
		[varBsBtnHoverBorderColor]: 'rgba(255, 255, 255, 0.46)',
		[varBsBtnFocusBoxShadowRgb]: '149, 149, 149',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: 'rgba(255, 255, 255, 0.52)',
		[varBsBtnActiveBorderColor]: 'rgba(255, 255, 255, 0.46)',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnDisabledBorderColor]: 'rgba(255, 255, 255, 0.4)',
	},
	color: '#fff',
	border: 'none',
})

// Quartz: btn-secondary forces white text on hover/focus/disabled
globalStyle(`${quartzScope}${btnSecondary}:hover, ${quartzScope}${btnSecondary}:focus`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${btnSecondary}.disabled`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#41d7a7',
		[varBsBtnBorderColor]: '#41d7a7',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#37b78e',
		[varBsBtnHoverBorderColor]: '#34ac86',
		[varBsBtnFocusBoxShadowRgb]: '94, 221, 180',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#34ac86',
		[varBsBtnActiveBorderColor]: '#31a17d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#41d7a7',
		[varBsBtnDisabledBorderColor]: '#41d7a7',
	},
})

globalStyle(`${quartzScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#39cbfb',
		[varBsBtnBorderColor]: '#39cbfb',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#30add5',
		[varBsBtnHoverBorderColor]: '#2ea2c9',
		[varBsBtnFocusBoxShadowRgb]: '87, 211, 252',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2ea2c9',
		[varBsBtnActiveBorderColor]: '#2b98bc',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#39cbfb',
		[varBsBtnDisabledBorderColor]: '#39cbfb',
	},
})

globalStyle(`${quartzScope}${btnWarning}`, {
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

globalStyle(`${quartzScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#fd7e14',
		[varBsBtnBorderColor]: '#fd7e14',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d76b11',
		[varBsBtnHoverBorderColor]: '#ca6510',
		[varBsBtnFocusBoxShadowRgb]: '253, 145, 55',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ca6510',
		[varBsBtnActiveBorderColor]: '#be5f0f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#fd7e14',
		[varBsBtnDisabledBorderColor]: '#fd7e14',
	},
})

globalStyle(`${quartzScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#e9e9e8',
		[varBsBtnBorderColor]: '#e9e9e8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c6c6c5',
		[varBsBtnHoverBorderColor]: '#bababa',
		[varBsBtnFocusBoxShadowRgb]: '198, 198, 197',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#bababa',
		[varBsBtnActiveBorderColor]: '#afafae',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#e9e9e8',
		[varBsBtnDisabledBorderColor]: '#e9e9e8',
	},
})

globalStyle(`${quartzScope}${btnDark}`, {
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

globalStyle(`${quartzScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#e83283',
		[varBsBtnBorderColor]: '#e83283',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e83283',
		[varBsBtnHoverBorderColor]: '#e83283',
		[varBsBtnFocusBoxShadowRgb]: '232, 50, 131',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e83283',
		[varBsBtnActiveBorderColor]: '#e83283',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e83283',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e83283',
	},
})

globalStyle(`${quartzScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnHoverBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnFocusBoxShadowRgb]: '255, 255, 255',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnActiveBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: 'rgba(255, 255, 255, 0.4)',
	},
})

globalStyle(`${quartzScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#41d7a7',
		[varBsBtnBorderColor]: '#41d7a7',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#41d7a7',
		[varBsBtnHoverBorderColor]: '#41d7a7',
		[varBsBtnFocusBoxShadowRgb]: '65, 215, 167',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#41d7a7',
		[varBsBtnActiveBorderColor]: '#41d7a7',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#41d7a7',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#41d7a7',
	},
})

globalStyle(`${quartzScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#39cbfb',
		[varBsBtnBorderColor]: '#39cbfb',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#39cbfb',
		[varBsBtnHoverBorderColor]: '#39cbfb',
		[varBsBtnFocusBoxShadowRgb]: '57, 203, 251',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#39cbfb',
		[varBsBtnActiveBorderColor]: '#39cbfb',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#39cbfb',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#39cbfb',
	},
})

globalStyle(`${quartzScope}${btnOutlineWarning}`, {
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

globalStyle(`${quartzScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#fd7e14',
		[varBsBtnBorderColor]: '#fd7e14',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#fd7e14',
		[varBsBtnHoverBorderColor]: '#fd7e14',
		[varBsBtnFocusBoxShadowRgb]: '253, 126, 20',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#fd7e14',
		[varBsBtnActiveBorderColor]: '#fd7e14',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fd7e14',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#fd7e14',
	},
})

globalStyle(`${quartzScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#e9e9e8',
		[varBsBtnBorderColor]: '#e9e9e8',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#e9e9e8',
		[varBsBtnHoverBorderColor]: '#e9e9e8',
		[varBsBtnFocusBoxShadowRgb]: '233, 233, 232',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#e9e9e8',
		[varBsBtnActiveBorderColor]: '#e9e9e8',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e9e9e8',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e9e9e8',
	},
})

globalStyle(`${quartzScope}${btnOutlineDark}`, {
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
