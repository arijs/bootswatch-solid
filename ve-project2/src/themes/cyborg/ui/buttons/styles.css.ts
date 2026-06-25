import { globalStyle } from '@vanilla-extract/css'
import { cyborgScope } from '../../scope.css'

import {
	varBsBodyColor,
	varBsBorderRadius,
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
	active,
	btnClose,
	btnCloseWhite,
	btnGroupLg,
	btnGroupSm,
	btnGroupVertical,
	disabled,
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
import {
	dropdownToggle,
	dropdownToggleSplit,
	dropend,
	dropstart,
	dropup,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import { modalHeader } from '../../../../theme-contract/ui/modal/contract.css'
import { show } from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${cyborgScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${cyborgScope}${btnCheck}[disabled] + ${cyborgScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${cyborgScope}${btnCheck}:disabled + ${cyborgScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${cyborgScope}${inputGroup} ${cyborgScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${cyborgScope}${inputGroup} ${cyborgScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${cyborgScope}${inputGroupLg} > ${cyborgScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${cyborgScope}${inputGroupSm} > ${cyborgScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${cyborgScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1rem',
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

globalStyle(`${cyborgScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cyborgScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${cyborgScope}${btnCheck} + ${cyborgScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${cyborgScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cyborgScope}${btnCheck}:focus-visible + ${cyborgScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cyborgScope}${btnCheck}:checked + ${cyborgScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cyborgScope}:not(${btnCheck}) + ${cyborgScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cyborgScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cyborgScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cyborgScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cyborgScope}${btnCheck}:checked + ${cyborgScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cyborgScope}:not(${btnCheck}) + ${cyborgScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cyborgScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cyborgScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cyborgScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cyborgScope}${btnCheck}:checked:focus-visible + ${cyborgScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cyborgScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${cyborgScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${cyborgScope}${fieldset}:disabled ${cyborgScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${cyborgScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#2a9fd6',
		[varBsBtnBorderColor]: '#2a9fd6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2487b6',
		[varBsBtnHoverBorderColor]: '#227fab',
		[varBsBtnFocusBoxShadowRgb]: '74, 173, 220',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#227fab',
		[varBsBtnActiveBorderColor]: '#2077a1',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#2a9fd6',
		[varBsBtnDisabledBorderColor]: '#2a9fd6',
	},
})

globalStyle(`${cyborgScope}${btnSecondary}`, {
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

globalStyle(`${cyborgScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#77b300',
		[varBsBtnBorderColor]: '#77b300',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#659800',
		[varBsBtnHoverBorderColor]: '#5f8f00',
		[varBsBtnFocusBoxShadowRgb]: '139, 190, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5f8f00',
		[varBsBtnActiveBorderColor]: '#598600',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#77b300',
		[varBsBtnDisabledBorderColor]: '#77b300',
	},
})

globalStyle(`${cyborgScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#93c',
		[varBsBtnBorderColor]: '#93c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#822bad',
		[varBsBtnHoverBorderColor]: '#7a29a3',
		[varBsBtnFocusBoxShadowRgb]: '168, 82, 212',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#7a29a3',
		[varBsBtnActiveBorderColor]: '#732699',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#93c',
		[varBsBtnDisabledBorderColor]: '#93c',
	},
})

globalStyle(`${cyborgScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f80',
		[varBsBtnBorderColor]: '#f80',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d97400',
		[varBsBtnHoverBorderColor]: '#cc6d00',
		[varBsBtnFocusBoxShadowRgb]: '255, 154, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc6d00',
		[varBsBtnActiveBorderColor]: '#bf6600',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f80',
		[varBsBtnDisabledBorderColor]: '#f80',
	},
})

globalStyle(`${cyborgScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#c00',
		[varBsBtnBorderColor]: '#c00',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ad0000',
		[varBsBtnHoverBorderColor]: '#a30000',
		[varBsBtnFocusBoxShadowRgb]: '212, 38, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#a30000',
		[varBsBtnActiveBorderColor]: '#990000',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#c00',
		[varBsBtnDisabledBorderColor]: '#c00',
	},
})

globalStyle(`${cyborgScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#222',
		[varBsBtnBorderColor]: '#222',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1d1d1d',
		[varBsBtnHoverBorderColor]: '#1b1b1b',
		[varBsBtnFocusBoxShadowRgb]: '67, 67, 67',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1b1b1b',
		[varBsBtnActiveBorderColor]: '#1a1a1a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#222',
		[varBsBtnDisabledBorderColor]: '#222',
	},
})

globalStyle(`${cyborgScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#adafae',
		[varBsBtnBorderColor]: '#adafae',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#b9bbba',
		[varBsBtnHoverBorderColor]: '#b5b7b6',
		[varBsBtnFocusBoxShadowRgb]: '147, 149, 148',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#bdbfbe',
		[varBsBtnActiveBorderColor]: '#b5b7b6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#adafae',
		[varBsBtnDisabledBorderColor]: '#adafae',
	},
})

globalStyle(`${cyborgScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#2a9fd6',
		[varBsBtnBorderColor]: '#2a9fd6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2a9fd6',
		[varBsBtnHoverBorderColor]: '#2a9fd6',
		[varBsBtnFocusBoxShadowRgb]: '42, 159, 214',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2a9fd6',
		[varBsBtnActiveBorderColor]: '#2a9fd6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#2a9fd6',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#2a9fd6',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cyborgScope}${btnOutlineSecondary}`, {
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
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cyborgScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#77b300',
		[varBsBtnBorderColor]: '#77b300',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#77b300',
		[varBsBtnHoverBorderColor]: '#77b300',
		[varBsBtnFocusBoxShadowRgb]: '119, 179, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#77b300',
		[varBsBtnActiveBorderColor]: '#77b300',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#77b300',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#77b300',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cyborgScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#93c',
		[varBsBtnBorderColor]: '#93c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#93c',
		[varBsBtnHoverBorderColor]: '#93c',
		[varBsBtnFocusBoxShadowRgb]: '153, 51, 204',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#93c',
		[varBsBtnActiveBorderColor]: '#93c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#93c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#93c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cyborgScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f80',
		[varBsBtnBorderColor]: '#f80',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f80',
		[varBsBtnHoverBorderColor]: '#f80',
		[varBsBtnFocusBoxShadowRgb]: '255, 136, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f80',
		[varBsBtnActiveBorderColor]: '#f80',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f80',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f80',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cyborgScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#c00',
		[varBsBtnBorderColor]: '#c00',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c00',
		[varBsBtnHoverBorderColor]: '#c00',
		[varBsBtnFocusBoxShadowRgb]: '204, 0, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c00',
		[varBsBtnActiveBorderColor]: '#c00',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#c00',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#c00',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cyborgScope}${btnOutlineLight}`, {
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

globalStyle(`${cyborgScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#adafae',
		[varBsBtnBorderColor]: '#adafae',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#adafae',
		[varBsBtnHoverBorderColor]: '#adafae',
		[varBsBtnFocusBoxShadowRgb]: '173, 175, 174',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#adafae',
		[varBsBtnActiveBorderColor]: '#adafae',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#adafae',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#adafae',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cyborgScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#555',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '74, 173, 220',
	},
	textDecoration: 'underline',
})

globalStyle(`${cyborgScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${cyborgScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${cyborgScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${cyborgScope}${btnGroupLg} > ${cyborgScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${cyborgScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${cyborgScope}${btnGroupSm} > ${cyborgScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btnCheck}:checked + ${cyborgScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btnCheck}:focus + ${cyborgScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btnCheck}:checked + ${cyborgScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btnCheck}:focus + ${cyborgScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}:not(${btnCheck}:first-child) + ${cyborgScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btnGroup}:not(:last-child) > ${cyborgScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}:not(${btnCheck}) + ${cyborgScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${cyborgScope}${btnGroup} > ${cyborgScope}${btnGroup}:not(:first-child) > ${cyborgScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${cyborgScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${cyborgScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${cyborgScope}${dropup} ${cyborgScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${cyborgScope}${dropend} ${cyborgScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${cyborgScope}${dropstart} ${cyborgScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${cyborgScope}${btnSm} + ${cyborgScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${cyborgScope}${btnGroupSm} > ${cyborgScope}${btn} + ${cyborgScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${cyborgScope}${btnLg} + ${cyborgScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${cyborgScope}${btnGroupLg} > ${cyborgScope}${btn} + ${cyborgScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btn}`, {
	width: '100%',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btnGroup}:not(:last-child) > ${cyborgScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}:not(${btnCheck}) + ${cyborgScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${cyborgScope}${btnGroupVertical} > ${cyborgScope}${btnGroup}:not(:first-child) > ${cyborgScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${cyborgScope}${alertDismissible} ${cyborgScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${cyborgScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#fff',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.6',
		[varBsBtnCloseHoverOpacity]: '1',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(42, 159, 214, 0.25)',
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

globalStyle(`${cyborgScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${cyborgScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${cyborgScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${cyborgScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${cyborgScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${cyborgScope}${toastHeader} ${cyborgScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${cyborgScope}${modalHeader} ${cyborgScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${cyborgScope}${offcanvasHeader} ${cyborgScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${cyborgScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${cyborgScope}${btnPrimary}`, {
	backgroundColor: '#2a9fd6',
})

globalStyle(`${cyborgScope}${btnSecondary}`, {
	backgroundColor: '#555',
})

globalStyle(`${cyborgScope}${btnSuccess}`, {
	backgroundColor: '#77b300',
})

globalStyle(`${cyborgScope}${btnInfo}`, {
	backgroundColor: '#93c',
})

globalStyle(`${cyborgScope}${btnWarning}`, {
	backgroundColor: '#f80',
})

globalStyle(`${cyborgScope}${btnDanger}`, {
	backgroundColor: '#c00',
})

globalStyle(`${cyborgScope}${btnLight}`, {
	backgroundColor: '#222',
})

globalStyle(`${cyborgScope}${btnDark}`, {
	backgroundColor: '#adafae',
})
