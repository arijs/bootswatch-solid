import { globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../../scope.css'

import {
	varBsBodyColor,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsGradient,
	varBsLinkColor,
	varBsLinkHoverColor,
} from '../../../../theme-contract/_vars.css'
import {
	varBsBtnCloseBg,
	varBsBtnCloseColor,
	varBsBtnCloseDisabledOpacity,
	varBsBtnCloseFocusOpacity,
	varBsBtnCloseFocusShadow,
	varBsBtnCloseHoverOpacity,
	varBsBtnCloseOpacity,
} from '../../../../theme-contract/ui/alerts/_vars.css'
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
import { varBsModalHeaderPaddingX, varBsModalHeaderPaddingY } from '../../../../theme-contract/ui/modal/_vars.css'
import { varBsToastPaddingX } from '../../../../theme-contract/ui/toasts/_vars.css'
import { varBsBtnCloseFilter, varBsOffcanvasPaddingX, varBsOffcanvasPaddingY } from '../../../../theme-contract/utilities/generated/_vars.css'

import { fieldset } from '../../../../theme-contract/forms/contract.css'

import { inputGroup } from '../../../../theme-contract/forms/contract.css'
import {
	btnClose,
	btnCloseWhite,
	btnGroupLg,
	btnGroupSm,
	btnGroupVertical,
	inputGroupLg,
	inputGroupSm,
	placeholder,
} from '../../../../theme-contract/literal/contract.css'
import { alertDismissible } from '../../../../theme-contract/ui/alerts/contract.css'
import { btnGroup } from '../../../../theme-contract/ui/button-group/contract.css'
import {
	btn,
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
import { modalHeader } from '../../../../theme-contract/ui/modal/contract.css'
import { offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${literaScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${literaScope}${btnCheck}[disabled] + ${literaScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${literaScope}${btnCheck}:disabled + ${literaScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${literaScope}${inputGroup} ${literaScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${literaScope}${inputGroup} ${literaScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${literaScope}${inputGroupLg} > ${literaScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: 'calc(1.2625rem + 0.15vw)',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${literaScope}${inputGroupLg} > ${literaScope}${btn}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.375rem',
		},
	},
})

globalStyle(`${literaScope}${inputGroupSm} > ${literaScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.9625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${literaScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1.1rem',
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnFontFamily]: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnFontWeight]: '400',
		[varBsBtnLineHeight]: '1.5',
		[varBsBtnColor]: varBsBodyColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderWidth]: varBsBorderWidth,
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnBorderRadius]: '1.078em',
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
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
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${literaScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${literaScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${literaScope}${btnCheck} + ${literaScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${literaScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${literaScope}${btnCheck}:focus-visible + ${literaScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${literaScope}${btnCheck}:checked + ${literaScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${literaScope}:not(${btnCheck}) + ${literaScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${literaScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${literaScope}${btnCheck}:checked + ${literaScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${literaScope}:not(${btnCheck}) + ${literaScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${literaScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${literaScope}${btnCheck}:checked:focus-visible + ${literaScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${literaScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${literaScope}${fieldset}:disabled ${literaScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${literaScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#4582ec',
		[varBsBtnBorderColor]: '#4582ec',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3b6fc9',
		[varBsBtnHoverBorderColor]: '#3768bd',
		[varBsBtnFocusBoxShadowRgb]: '97, 149, 239',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3768bd',
		[varBsBtnActiveBorderColor]: '#3462b1',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#4582ec',
		[varBsBtnDisabledBorderColor]: '#4582ec',
	},
})

globalStyle(`${literaScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#adb5bd',
		[varBsBtnBorderColor]: '#adb5bd',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#939aa1',
		[varBsBtnHoverBorderColor]: '#8a9197',
		[varBsBtnFocusBoxShadowRgb]: '185, 192, 199',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#8a9197',
		[varBsBtnActiveBorderColor]: '#82888e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#adb5bd',
		[varBsBtnDisabledBorderColor]: '#adb5bd',
	},
})

globalStyle(`${literaScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#02b875',
		[varBsBtnBorderColor]: '#02b875',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#029c63',
		[varBsBtnHoverBorderColor]: '#02935e',
		[varBsBtnFocusBoxShadowRgb]: '40, 195, 138',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#02935e',
		[varBsBtnActiveBorderColor]: '#028a58',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#02b875',
		[varBsBtnDisabledBorderColor]: '#02b875',
	},
})

globalStyle(`${literaScope}${btnInfo}`, {
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

globalStyle(`${literaScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f0ad4e',
		[varBsBtnBorderColor]: '#f0ad4e',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cc9342',
		[varBsBtnHoverBorderColor]: '#c08a3e',
		[varBsBtnFocusBoxShadowRgb]: '242, 185, 105',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c08a3e',
		[varBsBtnActiveBorderColor]: '#b4823b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f0ad4e',
		[varBsBtnDisabledBorderColor]: '#f0ad4e',
	},
})

globalStyle(`${literaScope}${btnDanger}`, {
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

globalStyle(`${literaScope}${btnLight}`, {
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

globalStyle(`${literaScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#343a40',
		[varBsBtnBorderColor]: '#343a40',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#52585d',
		[varBsBtnHoverBorderColor]: '#484e53',
		[varBsBtnFocusBoxShadowRgb]: '82, 88, 93',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5d6166',
		[varBsBtnActiveBorderColor]: '#484e53',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#343a40',
		[varBsBtnDisabledBorderColor]: '#343a40',
	},
})

globalStyle(`${literaScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#4582ec',
		[varBsBtnBorderColor]: '#4582ec',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4582ec',
		[varBsBtnHoverBorderColor]: '#4582ec',
		[varBsBtnFocusBoxShadowRgb]: '69, 130, 236',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4582ec',
		[varBsBtnActiveBorderColor]: '#4582ec',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#4582ec',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#4582ec',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${literaScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#adb5bd',
		[varBsBtnBorderColor]: '#adb5bd',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#adb5bd',
		[varBsBtnHoverBorderColor]: '#adb5bd',
		[varBsBtnFocusBoxShadowRgb]: '173, 181, 189',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#adb5bd',
		[varBsBtnActiveBorderColor]: '#adb5bd',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#adb5bd',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#adb5bd',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${literaScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#02b875',
		[varBsBtnBorderColor]: '#02b875',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#02b875',
		[varBsBtnHoverBorderColor]: '#02b875',
		[varBsBtnFocusBoxShadowRgb]: '2, 184, 117',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#02b875',
		[varBsBtnActiveBorderColor]: '#02b875',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#02b875',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#02b875',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${literaScope}${btnOutlineInfo}`, {
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
		[varBsGradient]: 'none',
	},
})

globalStyle(`${literaScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f0ad4e',
		[varBsBtnBorderColor]: '#f0ad4e',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f0ad4e',
		[varBsBtnHoverBorderColor]: '#f0ad4e',
		[varBsBtnFocusBoxShadowRgb]: '240, 173, 78',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f0ad4e',
		[varBsBtnActiveBorderColor]: '#f0ad4e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f0ad4e',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f0ad4e',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${literaScope}${btnOutlineDanger}`, {
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
		[varBsGradient]: 'none',
	},
})

globalStyle(`${literaScope}${btnOutlineLight}`, {
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

globalStyle(`${literaScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#343a40',
		[varBsBtnBorderColor]: '#343a40',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#343a40',
		[varBsBtnHoverBorderColor]: '#343a40',
		[varBsBtnFocusBoxShadowRgb]: '52, 58, 64',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#343a40',
		[varBsBtnActiveBorderColor]: '#343a40',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#343a40',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#343a40',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${literaScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '97, 149, 239',
	},
	textDecoration: 'underline',
})

globalStyle(`${literaScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${literaScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${literaScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: 'calc(1.2625rem + 0.15vw)',
		[varBsBtnBorderRadius]: '2.688em',
	},
})

globalStyle(`${literaScope}${btnGroupLg} > ${literaScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: 'calc(1.2625rem + 0.15vw)',
		[varBsBtnBorderRadius]: '2.688em',
	},
})

globalStyle(`${literaScope}${btnLg}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsBtnFontSize]: '1.375rem',
			},
		},
	},
})

globalStyle(`${literaScope}${btnGroupLg} > ${literaScope}${btn}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsBtnFontSize]: '1.375rem',
			},
		},
	},
})

globalStyle(`${literaScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.688rem',
		[varBsBtnBorderRadius]: '0.844em',
	},
})

globalStyle(`${literaScope}${btnGroupSm} > ${literaScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.688rem',
		[varBsBtnBorderRadius]: '0.844em',
	},
})

globalStyle(`${literaScope}${btnGroup} > ${literaScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${literaScope}${btnGroup} > ${literaScope}${btnCheck}:checked + ${literaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${literaScope}${btnGroup} > ${literaScope}${btnCheck}:focus + ${literaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${literaScope}${btnGroup} > ${literaScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${literaScope}${btnGroup} > ${literaScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${literaScope}${btnGroup} > ${literaScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}${btnCheck}:checked + ${literaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}${btnCheck}:focus + ${literaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${literaScope}${btnGroup} > ${literaScope}:not(${btnCheck}:first-child) + ${literaScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${literaScope}${btnGroup} > ${literaScope}${btnGroup}:not(:last-child) > ${literaScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${literaScope}${btnGroup} > ${literaScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${literaScope}${btnGroup} > ${literaScope}:not(${btnCheck}) + ${literaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${literaScope}${btnGroup} > ${literaScope}${btnGroup}:not(:first-child) > ${literaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}${btn}`, {
	width: '100%',
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}${btnGroup}:not(:last-child) > ${literaScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}:not(${btnCheck}) + ${literaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${literaScope}${btnGroupVertical} > ${literaScope}${btnGroup}:not(:first-child) > ${literaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${literaScope}${alertDismissible} ${literaScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${literaScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(69, 130, 236, 0.25)',
		[varBsBtnCloseFocusOpacity]: '1',
		[varBsBtnCloseDisabledOpacity]: '0.25',
	},
	boxSizing: 'content-box',
	width: '1em',
	height: '1em',
	padding: '0.25em 0.25em',
	color: varBsBtnCloseColor,
	background: `transparent ${varBsBtnCloseBg} center/1em auto no-repeat`,
	filter: varBsBtnCloseFilter,
	border: '0',
	borderRadius: '0.375rem',
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${literaScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${literaScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${literaScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${literaScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${literaScope}${toastHeader} ${literaScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${literaScope}${modalHeader} ${literaScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${literaScope}${offcanvasHeader} ${literaScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${literaScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})
