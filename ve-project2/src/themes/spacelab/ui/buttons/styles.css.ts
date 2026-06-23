import { globalStyle } from '@vanilla-extract/css'
import { spacelabScope } from '../../scope.css'

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
import { show } from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${spacelabScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${spacelabScope}${btnCheck}[disabled] + ${spacelabScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${spacelabScope}${btnCheck}:disabled + ${spacelabScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${spacelabScope}${inputGroup} ${spacelabScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${spacelabScope}${inputGroup} ${spacelabScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${spacelabScope}${inputGroupLg} > ${spacelabScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${spacelabScope}${inputGroupSm} > ${spacelabScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${spacelabScope}${btn}`, {
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

globalStyle(`${spacelabScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${spacelabScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${spacelabScope}${btnCheck} + ${spacelabScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${spacelabScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${spacelabScope}${btnCheck}:focus-visible + ${spacelabScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${spacelabScope}${btnCheck}:checked + ${spacelabScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${spacelabScope}:not(${btnCheck}) + ${spacelabScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${spacelabScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${spacelabScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${spacelabScope}${btnCheck}:checked + ${spacelabScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${spacelabScope}:not(${btnCheck}) + ${spacelabScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${spacelabScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${spacelabScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${spacelabScope}${btnCheck}:checked:focus-visible + ${spacelabScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${spacelabScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${spacelabScope}${fieldset}:disabled ${spacelabScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${spacelabScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#446e9b',
		[varBsBtnBorderColor]: '#446e9b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3a5e84',
		[varBsBtnHoverBorderColor]: '#36587c',
		[varBsBtnFocusBoxShadowRgb]: '96, 132, 170',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#36587c',
		[varBsBtnActiveBorderColor]: '#335374',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#446e9b',
		[varBsBtnDisabledBorderColor]: '#446e9b',
	},
})

globalStyle(`${spacelabScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#999',
		[varBsBtnBorderColor]: '#999',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#828282',
		[varBsBtnHoverBorderColor]: '#7a7a7a',
		[varBsBtnFocusBoxShadowRgb]: '168, 168, 168',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#7a7a7a',
		[varBsBtnActiveBorderColor]: '#737373',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#999',
		[varBsBtnDisabledBorderColor]: '#999',
	},
})

globalStyle(`${spacelabScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3cb521',
		[varBsBtnBorderColor]: '#3cb521',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#339a1c',
		[varBsBtnHoverBorderColor]: '#30911a',
		[varBsBtnFocusBoxShadowRgb]: '89, 192, 66',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#30911a',
		[varBsBtnActiveBorderColor]: '#2d8819',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3cb521',
		[varBsBtnDisabledBorderColor]: '#3cb521',
	},
})

globalStyle(`${spacelabScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3399f3',
		[varBsBtnBorderColor]: '#3399f3',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2b82cf',
		[varBsBtnHoverBorderColor]: '#297ac2',
		[varBsBtnFocusBoxShadowRgb]: '82, 168, 245',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#297ac2',
		[varBsBtnActiveBorderColor]: '#2673b6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3399f3',
		[varBsBtnDisabledBorderColor]: '#3399f3',
	},
})

globalStyle(`${spacelabScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#d47500',
		[varBsBtnBorderColor]: '#d47500',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#b46300',
		[varBsBtnHoverBorderColor]: '#aa5e00',
		[varBsBtnFocusBoxShadowRgb]: '218, 138, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#aa5e00',
		[varBsBtnActiveBorderColor]: '#9f5800',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#d47500',
		[varBsBtnDisabledBorderColor]: '#d47500',
	},
})

globalStyle(`${spacelabScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#cd0200',
		[varBsBtnBorderColor]: '#cd0200',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ae0200',
		[varBsBtnHoverBorderColor]: '#a40200',
		[varBsBtnFocusBoxShadowRgb]: '213, 40, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#a40200',
		[varBsBtnActiveBorderColor]: '#9a0200',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#cd0200',
		[varBsBtnDisabledBorderColor]: '#cd0200',
	},
})

globalStyle(`${spacelabScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#eee',
		[varBsBtnBorderColor]: '#eee',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#cacaca',
		[varBsBtnHoverBorderColor]: '#bebebe',
		[varBsBtnFocusBoxShadowRgb]: '202, 202, 202',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#bebebe',
		[varBsBtnActiveBorderColor]: '#b3b3b3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#eee',
		[varBsBtnDisabledBorderColor]: '#eee',
	},
})

globalStyle(`${spacelabScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#333',
		[varBsBtnBorderColor]: '#333',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#525252',
		[varBsBtnHoverBorderColor]: '#474747',
		[varBsBtnFocusBoxShadowRgb]: '82, 82, 82',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5c5c5c',
		[varBsBtnActiveBorderColor]: '#474747',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#333',
		[varBsBtnDisabledBorderColor]: '#333',
	},
})

globalStyle(`${spacelabScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#446e9b',
		[varBsBtnBorderColor]: '#446e9b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#446e9b',
		[varBsBtnHoverBorderColor]: '#446e9b',
		[varBsBtnFocusBoxShadowRgb]: '68, 110, 155',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#446e9b',
		[varBsBtnActiveBorderColor]: '#446e9b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#446e9b',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#446e9b',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${spacelabScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#999',
		[varBsBtnBorderColor]: '#999',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#999',
		[varBsBtnHoverBorderColor]: '#999',
		[varBsBtnFocusBoxShadowRgb]: '153, 153, 153',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#999',
		[varBsBtnActiveBorderColor]: '#999',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#999',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#999',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${spacelabScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#3cb521',
		[varBsBtnBorderColor]: '#3cb521',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3cb521',
		[varBsBtnHoverBorderColor]: '#3cb521',
		[varBsBtnFocusBoxShadowRgb]: '60, 181, 33',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3cb521',
		[varBsBtnActiveBorderColor]: '#3cb521',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#3cb521',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3cb521',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${spacelabScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#3399f3',
		[varBsBtnBorderColor]: '#3399f3',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3399f3',
		[varBsBtnHoverBorderColor]: '#3399f3',
		[varBsBtnFocusBoxShadowRgb]: '51, 153, 243',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3399f3',
		[varBsBtnActiveBorderColor]: '#3399f3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#3399f3',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3399f3',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${spacelabScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#d47500',
		[varBsBtnBorderColor]: '#d47500',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d47500',
		[varBsBtnHoverBorderColor]: '#d47500',
		[varBsBtnFocusBoxShadowRgb]: '212, 117, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#d47500',
		[varBsBtnActiveBorderColor]: '#d47500',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#d47500',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#d47500',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${spacelabScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#cd0200',
		[varBsBtnBorderColor]: '#cd0200',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cd0200',
		[varBsBtnHoverBorderColor]: '#cd0200',
		[varBsBtnFocusBoxShadowRgb]: '205, 2, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cd0200',
		[varBsBtnActiveBorderColor]: '#cd0200',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#cd0200',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#cd0200',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${spacelabScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#eee',
		[varBsBtnBorderColor]: '#eee',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#eee',
		[varBsBtnHoverBorderColor]: '#eee',
		[varBsBtnFocusBoxShadowRgb]: '238, 238, 238',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#eee',
		[varBsBtnActiveBorderColor]: '#eee',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#eee',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#eee',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${spacelabScope}${btnOutlineDark}`, {
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
		[varBsGradient]: 'none',
	},
})

globalStyle(`${spacelabScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#777',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '82, 168, 245',
	},
	textDecoration: 'underline',
})

globalStyle(`${spacelabScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${spacelabScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${spacelabScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${spacelabScope}${btnGroupLg} > ${spacelabScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${spacelabScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${spacelabScope}${btnGroupSm} > ${spacelabScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}${btnCheck}:checked + ${spacelabScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}${btnCheck}:focus + ${spacelabScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btnCheck}:checked + ${spacelabScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btnCheck}:focus + ${spacelabScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}:not(${btnCheck}:first-child) + ${spacelabScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}${btnGroup}:not(:last-child) > ${spacelabScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}:not(${btnCheck}) + ${spacelabScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${spacelabScope}${btnGroup} > ${spacelabScope}${btnGroup}:not(:first-child) > ${spacelabScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btn}`, {
	width: '100%',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btnGroup}:not(:last-child) > ${spacelabScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}:not(${btnCheck}) + ${spacelabScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${spacelabScope}${btnGroupVertical} > ${spacelabScope}${btnGroup}:not(:first-child) > ${spacelabScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${spacelabScope}${alertDismissible} ${spacelabScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${spacelabScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(68, 110, 155, 0.25)',
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

globalStyle(`${spacelabScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${spacelabScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${spacelabScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${spacelabScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${spacelabScope}${toastHeader} ${spacelabScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${spacelabScope}${modalHeader} ${spacelabScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${spacelabScope}${offcanvasHeader} ${spacelabScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${spacelabScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${spacelabScope}${btn}`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.1)',
})

globalStyle(`${spacelabScope}${btnLink}`, {
	textShadow: 'none',
})

globalStyle(`${spacelabScope}${btnPrimary}`, {
	backgroundImage: 'linear-gradient(#7191b3, #446e9b 50%, #3f658f)',
	filter: 'none',
	border: '1px solid #36587c',
})

globalStyle(`${spacelabScope}${btnSecondary}`, {
	backgroundImage: 'linear-gradient(#b1b1b1, #999 50%, #8d8d8d)',
	filter: 'none',
	border: '1px solid #7a7a7a',
})

globalStyle(`${spacelabScope}${btnSuccess}`, {
	backgroundImage: 'linear-gradient(#6bc756, #3cb521 50%, #37a71e)',
	filter: 'none',
	border: '1px solid #30911a',
})

globalStyle(`${spacelabScope}${btnInfo}`, {
	backgroundImage: 'linear-gradient(#64b1f6, #3399f3 50%, #2f8de0)',
	filter: 'none',
	border: '1px solid #297ac2',
})

globalStyle(`${spacelabScope}${btnWarning}`, {
	backgroundImage: 'linear-gradient(#de963d, #d47500 50%, #c36c00)',
	filter: 'none',
	border: '1px solid #aa5e00',
})

globalStyle(`${spacelabScope}${btnDanger}`, {
	backgroundImage: 'linear-gradient(#d93f3d, #cd0200 50%, #bd0200)',
	filter: 'none',
	border: '1px solid #a40200',
})

globalStyle(`${spacelabScope}${btnLight}`, {
	backgroundImage: 'linear-gradient(#f2f2f2, #eee 50%, #dbdbdb)',
	filter: 'none',
	border: '1px solid #bebebe',
})

globalStyle(`${spacelabScope}${btnDark}`, {
	backgroundImage: 'linear-gradient(#646464, #333 50%, #2f2f2f)',
	filter: 'none',
	border: '1px solid #292929',
})

globalStyle(`${spacelabScope}${btnOutlineDanger}, ${spacelabScope}${btnOutlineDark}, ${spacelabScope}${btnOutlineInfo}, ${spacelabScope}${btnOutlineLight}, ${spacelabScope}${btnOutlinePrimary}, ${spacelabScope}${btnOutlineSecondary}, ${spacelabScope}${btnOutlineSuccess}, ${spacelabScope}${btnOutlineWarning}`, {
	textShadow: 'none',
})
