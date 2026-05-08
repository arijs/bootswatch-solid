import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsGradient,
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
import { materiaScope } from '../../scope.css'

// SOURCE CSS:
// body, input, button { letter-spacing: 0.1px; }
// Process mapping: body -> bodyText in scope.css.ts, input/button -> inputFontFamily contract.
globalStyle(`${materiaScope}${inputFontFamily}`, {
	letterSpacing: '0.1px',
})

// Base button system
globalStyle(`${materiaScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnPaddingY]: '0.8rem',
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
	border: `${varBsBtnBorderWidth} solid ${varBsBtnBorderColor}`,
	borderRadius: varBsBtnBorderRadius,
	backgroundColor: varBsBtnBg,
	backgroundImage: varBsGradient,
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${materiaScope}${btnCheck} + ${materiaScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${materiaScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	backgroundImage: varBsGradient,
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btnCheck}:focus-visible + ${materiaScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: 0,
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(
	[
		`${materiaScope}${btnCheck}:checked + ${materiaScope}${btn}`,
		`:not(${materiaScope}${btnCheck}) + ${materiaScope}${btn}:active`,
		`${materiaScope}${btn}:first-child:active`,
		`${materiaScope}${btn}${btnActiveHook}`,
		`${materiaScope}${btn}${btnShowHook}`,
	].join(', '),
	{
		color: varBsBtnActiveColor,
		backgroundColor: varBsBtnActiveBg,
		backgroundImage: 'none',
		borderColor: varBsBtnActiveBorderColor,
	},
)

globalStyle(
	[
		`${materiaScope}${btnCheck}:checked + ${materiaScope}${btn}:focus-visible`,
		`:not(${materiaScope}${btnCheck}) + ${materiaScope}${btn}:active:focus-visible`,
		`${materiaScope}${btn}:first-child:active:focus-visible`,
		`${materiaScope}${btn}${btnActiveHook}:focus-visible`,
		`${materiaScope}${btn}${btnShowHook}:focus-visible`,
	].join(', '),
	{
		boxShadow: varBsBtnFocusBoxShadow,
	},
)

globalStyle(`${materiaScope}${btnCheck}:checked:focus-visible + ${materiaScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(
	[
		`${materiaScope}${btn}:disabled`,
		`fieldset:disabled ${materiaScope}${btn}`,
	].join(', '),
	{
		color: varBsBtnDisabledColor,
		pointerEvents: 'none',
		backgroundColor: varBsBtnDisabledBg,
		borderColor: varBsBtnDisabledBorderColor,
		opacity: varBsBtnDisabledOpacity,
	},
)

globalStyle(`${materiaScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(
	[
		`${materiaScope}${btnCheck}[disabled] + ${materiaScope}${btn}`,
		`${materiaScope}${btnCheck}:disabled + ${materiaScope}${btn}`,
	].join(', '),
	{
		pointerEvents: 'none',
		opacity: varBsBtnDisabledOpacity,
	},
)

globalStyle(`${materiaScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${materiaScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${materiaScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#666',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '66, 166, 245',
	},
	textDecoration: 'underline',
})

// Solid variants
globalStyle(`${materiaScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#2196f3',
		[varBsBtnBorderColor]: '#2196f3',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1c80cf',
		[varBsBtnHoverBorderColor]: '#1a78c2',
		[varBsBtnFocusBoxShadowRgb]: '66, 166, 245',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1a78c2',
		[varBsBtnActiveBorderColor]: '#1971b6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#2196f3',
		[varBsBtnDisabledBorderColor]: '#2196f3',
	},
})

globalStyle(`${materiaScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#fff',
		[varBsBtnBorderColor]: '#fff',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: 'white',
		[varBsBtnHoverBorderColor]: 'white',
		[varBsBtnFocusBoxShadowRgb]: '217, 217, 217',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: 'white',
		[varBsBtnActiveBorderColor]: 'white',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#fff',
		[varBsBtnDisabledBorderColor]: '#fff',
	},
})

globalStyle(`${materiaScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#4caf50',
		[varBsBtnBorderColor]: '#4caf50',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#419544',
		[varBsBtnHoverBorderColor]: '#3d8c40',
		[varBsBtnFocusBoxShadowRgb]: '103, 187, 106',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3d8c40',
		[varBsBtnActiveBorderColor]: '#39833c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#4caf50',
		[varBsBtnDisabledBorderColor]: '#4caf50',
	},
})

globalStyle(`${materiaScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#9c27b0',
		[varBsBtnBorderColor]: '#9c27b0',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#852196',
		[varBsBtnHoverBorderColor]: '#7d1f8d',
		[varBsBtnFocusBoxShadowRgb]: '171, 71, 188',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#7d1f8d',
		[varBsBtnActiveBorderColor]: '#751d84',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#9c27b0',
		[varBsBtnDisabledBorderColor]: '#9c27b0',
	},
})

globalStyle(`${materiaScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ff9800',
		[varBsBtnBorderColor]: '#ff9800',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d98100',
		[varBsBtnHoverBorderColor]: '#cc7a00',
		[varBsBtnFocusBoxShadowRgb]: '255, 167, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc7a00',
		[varBsBtnActiveBorderColor]: '#bf7200',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ff9800',
		[varBsBtnDisabledBorderColor]: '#ff9800',
	},
})

globalStyle(`${materiaScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e51c23',
		[varBsBtnBorderColor]: '#e51c23',
		[varBsBtnBoxShadow]: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 4px rgba(0, 0, 0, 0.4)',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c3181e',
		[varBsBtnHoverBorderColor]: '#b7161c',
		[varBsBtnFocusBoxShadowRgb]: '233, 62, 68',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b7161c',
		[varBsBtnActiveBorderColor]: '#ac151a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e51c23',
		[varBsBtnDisabledBorderColor]: '#e51c23',
	},
})

globalStyle(`${materiaScope}${btnLight}`, {
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

globalStyle(`${materiaScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#222',
		[varBsBtnBorderColor]: '#222',
		[varBsBtnBoxShadow]: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 4px rgba(0, 0, 0, 0.4)',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#434343',
		[varBsBtnHoverBorderColor]: '#383838',
		[varBsBtnFocusBoxShadowRgb]: '67, 67, 67',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4e4e4e',
		[varBsBtnActiveBorderColor]: '#383838',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#222',
		[varBsBtnDisabledBorderColor]: '#222',
	},
})

// Outline variants
globalStyle(`${materiaScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#2196f3',
		[varBsBtnBorderColor]: '#2196f3',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2196f3',
		[varBsBtnHoverBorderColor]: '#2196f3',
		[varBsBtnFocusBoxShadowRgb]: '33, 150, 243',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2196f3',
		[varBsBtnActiveBorderColor]: '#2196f3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#2196f3',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#2196f3',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineSecondary}`, {
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
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#4caf50',
		[varBsBtnBorderColor]: '#4caf50',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4caf50',
		[varBsBtnHoverBorderColor]: '#4caf50',
		[varBsBtnFocusBoxShadowRgb]: '76, 175, 80',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4caf50',
		[varBsBtnActiveBorderColor]: '#4caf50',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#4caf50',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#4caf50',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#9c27b0',
		[varBsBtnBorderColor]: '#9c27b0',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#9c27b0',
		[varBsBtnHoverBorderColor]: '#9c27b0',
		[varBsBtnFocusBoxShadowRgb]: '156, 39, 176',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#9c27b0',
		[varBsBtnActiveBorderColor]: '#9c27b0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#9c27b0',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#9c27b0',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ff9800',
		[varBsBtnBorderColor]: '#ff9800',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ff9800',
		[varBsBtnHoverBorderColor]: '#ff9800',
		[varBsBtnFocusBoxShadowRgb]: '255, 152, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ff9800',
		[varBsBtnActiveBorderColor]: '#ff9800',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ff9800',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ff9800',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#e51c23',
		[varBsBtnBorderColor]: '#e51c23',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e51c23',
		[varBsBtnHoverBorderColor]: '#e51c23',
		[varBsBtnFocusBoxShadowRgb]: '229, 28, 35',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e51c23',
		[varBsBtnActiveBorderColor]: '#e51c23',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e51c23',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e51c23',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineLight}`, {
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
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#222',
		[varBsBtnBorderColor]: '#222',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#222',
		[varBsBtnHoverBorderColor]: '#222',
		[varBsBtnFocusBoxShadowRgb]: '34, 34, 34',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#222',
		[varBsBtnActiveBorderColor]: '#222',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#222',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#222',
		[varBsGradient]: 'none',
	},
})

// Materia-specific visual treatment
globalStyle(`${materiaScope}${btn}`, {
	textTransform: 'uppercase',
	border: 'none',
	boxShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
	transition:
		'color 0.4s, background-color 0.4s, border-color 0.4s, box-shadow 0.4s',
})

globalStyle(`${materiaScope}${btnLink}`, {
	color: '#2196f3',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${btnLink}:hover, ${materiaScope}${btnLink}:focus`, {
	color: '#1a78c2',
	boxShadow: 'none',
})

globalStyle(
	[
		`${materiaScope}${btnLink}:disabled:hover`,
		`${materiaScope}${btnLink}:disabled:active:hover`,
		`${materiaScope}${btnLink}[disabled]:hover`,
		`${materiaScope}${btnLink}[disabled]:active:hover`,
		`fieldset[disabled] ${materiaScope}${btnLink}:hover`,
		`fieldset[disabled] ${materiaScope}${btnLink}:active:hover`,
	].join(', '),
	{
		color: '#666',
		textDecoration: 'none',
	},
)

globalStyle(
	[
		`${materiaScope}${btnSecondary}:disabled`,
		`${materiaScope}${btnSecondary}[disabled]`,
		`fieldset[disabled] ${materiaScope}${btnSecondary}`,
	].join(', '),
	{
		color: 'rgba(0, 0, 0, 0.4)',
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		opacity: 1,
	},
)

globalStyle(
	[
		`${materiaScope}${btnSecondary}:disabled:hover`,
		`${materiaScope}${btnSecondary}:disabled:focus`,
		`${materiaScope}${btnSecondary}[disabled]:hover`,
		`${materiaScope}${btnSecondary}[disabled]:focus`,
		`fieldset[disabled] ${materiaScope}${btnSecondary}:hover`,
		`fieldset[disabled] ${materiaScope}${btnSecondary}:focus`,
	].join(', '),
	{
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
)

globalStyle(`${materiaScope}${btnOutlineSecondary}`, {
	color: '#dee2e6',
	borderColor: '#eee',
})

globalStyle(`${materiaScope}${btnWarning}`, {
	color: '#fff',
})

const rippleWhiteTargets = [
	btnPrimary,
	btnOutlinePrimary,
	btnSuccess,
	btnOutlineSuccess,
	btnInfo,
	btnOutlineInfo,
	btnWarning,
	btnOutlineWarning,
	btnDanger,
	btnOutlineDanger,
	btnDark,
	btnOutlineDark,
	btnLight,
	btnOutlineLight,
]

const rippleGrayTargets = [btnSecondary, btnOutlineSecondary]

for (const target of [...rippleWhiteTargets, ...rippleGrayTargets]) {
	globalStyle(`${materiaScope}${target}`, {
		position: 'relative',
	})

	globalStyle(`${materiaScope}${target}::before`, {
		position: 'absolute',
		top: 0,
		left: 0,
		display: 'block',
		width: '100%',
		height: '100%',
		marginLeft: 0,
		pointerEvents: 'none',
		content: '',
		backgroundPosition: '50%',
		backgroundSize: '1000% 1000%',
		border: 'none',
		opacity: 0,
		transition: 'background 0.5s, opacity 1s',
		backgroundImage: `radial-gradient(circle, ${
			rippleGrayTargets.includes(target) ? '#bbb' : '#fff'
		} 10%, transparent 10.01%)`,
	})

	globalStyle(`${materiaScope}${target}:active::before`, {
		backgroundSize: '0 0',
		opacity: 0.2,
		transition: 'none',
	})

	globalStyle(
		`${materiaScope}${target}:disabled::before, ${materiaScope}${target}[disabled]::before`,
		{
			display: 'none',
		},
	)
}

globalStyle(`${materiaScope}${btnPrimary}:focus`, {
	backgroundColor: '#2196f3',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnPrimary}:hover, ${materiaScope}${btnPrimary}:active:hover`, {
	backgroundColor: '#1d84d6',
})

globalStyle(`${materiaScope}${btnPrimary}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnSecondary}:focus`, {
	backgroundColor: '#fff',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(
	`${materiaScope}${btnSecondary}:hover, ${materiaScope}${btnSecondary}:active:hover`,
	{
		backgroundColor: '#e0e0e0',
	},
)

globalStyle(`${materiaScope}${btnSecondary}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnSuccess}:focus`, {
	backgroundColor: '#4caf50',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnSuccess}:hover, ${materiaScope}${btnSuccess}:active:hover`, {
	backgroundColor: '#439a46',
})

globalStyle(`${materiaScope}${btnSuccess}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnInfo}:focus`, {
	backgroundColor: '#9c27b0',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnInfo}:hover, ${materiaScope}${btnInfo}:active:hover`, {
	backgroundColor: '#89229b',
})

globalStyle(`${materiaScope}${btnInfo}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnWarning}:focus`, {
	backgroundColor: '#ff9800',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnWarning}:hover, ${materiaScope}${btnWarning}:active:hover`, {
	backgroundColor: '#e08600',
})

globalStyle(`${materiaScope}${btnWarning}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnDanger}:focus`, {
	backgroundColor: '#e51c23',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnDanger}:hover, ${materiaScope}${btnDanger}:active:hover`, {
	backgroundColor: '#ca191f',
})

globalStyle(`${materiaScope}${btnDanger}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnDark}:focus`, {
	backgroundColor: '#222',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnDark}:hover, ${materiaScope}${btnDark}:active:hover`, {
	backgroundColor: '#1e1e1e',
})

globalStyle(`${materiaScope}${btnDark}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnLight}:focus`, {
	backgroundColor: '#f8f9fa',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnLight}:hover, ${materiaScope}${btnLight}:active:hover`, {
	backgroundColor: '#dadbdc',
})

globalStyle(`${materiaScope}${btnLight}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

