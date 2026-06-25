import { globalStyle } from '@vanilla-extract/css'
import { yetiScope } from '../../scope.css'

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

globalStyle(`${yetiScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${yetiScope}${btnCheck}[disabled] + ${yetiScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${yetiScope}${btnCheck}:disabled + ${yetiScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${yetiScope}${inputGroup} ${yetiScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${yetiScope}${inputGroup} ${yetiScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${yetiScope}${inputGroupLg} > ${yetiScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${yetiScope}${inputGroupSm} > ${yetiScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${yetiScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnPaddingY]: '0.375rem',
		[varBsBtnFontFamily]: '',
		[varBsBtnFontSize]: '1rem',
		[varBsBtnFontWeight]: '300',
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

globalStyle(`${yetiScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${yetiScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${yetiScope}${btnCheck} + ${yetiScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${yetiScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${yetiScope}${btnCheck}:focus-visible + ${yetiScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${yetiScope}${btnCheck}:checked + ${yetiScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${yetiScope}:not(${btnCheck}) + ${yetiScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${yetiScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${yetiScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${yetiScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${yetiScope}${btnCheck}:checked + ${yetiScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${yetiScope}:not(${btnCheck}) + ${yetiScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${yetiScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${yetiScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${yetiScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${yetiScope}${btnCheck}:checked:focus-visible + ${yetiScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${yetiScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${yetiScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${yetiScope}${fieldset}:disabled ${yetiScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${yetiScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#008cba',
		[varBsBtnBorderColor]: '#008cba',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#00779e',
		[varBsBtnHoverBorderColor]: '#007095',
		[varBsBtnFocusBoxShadowRgb]: '38, 157, 196',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#007095',
		[varBsBtnActiveBorderColor]: '#00698c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#008cba',
		[varBsBtnDisabledBorderColor]: '#008cba',
	},
})

globalStyle(`${yetiScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#eee',
		[varBsBtnBorderColor]: '#eee',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f1f1f1',
		[varBsBtnHoverBorderColor]: '#f0f0f0',
		[varBsBtnFocusBoxShadowRgb]: '202, 202, 202',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f1f1f1',
		[varBsBtnActiveBorderColor]: '#f0f0f0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#eee',
		[varBsBtnDisabledBorderColor]: '#eee',
	},
})

globalStyle(`${yetiScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#43ac6a',
		[varBsBtnBorderColor]: '#43ac6a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#39925a',
		[varBsBtnHoverBorderColor]: '#368a55',
		[varBsBtnFocusBoxShadowRgb]: '95, 184, 128',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#368a55',
		[varBsBtnActiveBorderColor]: '#328150',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#43ac6a',
		[varBsBtnDisabledBorderColor]: '#43ac6a',
	},
})

globalStyle(`${yetiScope}${btnInfo}`, {
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

globalStyle(`${yetiScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e99002',
		[varBsBtnBorderColor]: '#e99002',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c67a02',
		[varBsBtnHoverBorderColor]: '#ba7302',
		[varBsBtnFocusBoxShadowRgb]: '236, 161, 40',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ba7302',
		[varBsBtnActiveBorderColor]: '#af6c02',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e99002',
		[varBsBtnDisabledBorderColor]: '#e99002',
	},
})

globalStyle(`${yetiScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f04124',
		[varBsBtnBorderColor]: '#f04124',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cc371f',
		[varBsBtnHoverBorderColor]: '#c0341d',
		[varBsBtnFocusBoxShadowRgb]: '242, 94, 69',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c0341d',
		[varBsBtnActiveBorderColor]: '#b4311b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f04124',
		[varBsBtnDisabledBorderColor]: '#f04124',
	},
})

globalStyle(`${yetiScope}${btnLight}`, {
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

globalStyle(`${yetiScope}${btnDark}`, {
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

globalStyle(`${yetiScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#008cba',
		[varBsBtnBorderColor]: '#008cba',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#008cba',
		[varBsBtnHoverBorderColor]: '#008cba',
		[varBsBtnFocusBoxShadowRgb]: '0, 140, 186',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#008cba',
		[varBsBtnActiveBorderColor]: '#008cba',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#008cba',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#008cba',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${yetiScope}${btnOutlineSecondary}`, {
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

globalStyle(`${yetiScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#43ac6a',
		[varBsBtnBorderColor]: '#43ac6a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#43ac6a',
		[varBsBtnHoverBorderColor]: '#43ac6a',
		[varBsBtnFocusBoxShadowRgb]: '67, 172, 106',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#43ac6a',
		[varBsBtnActiveBorderColor]: '#43ac6a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#43ac6a',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#43ac6a',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${yetiScope}${btnOutlineInfo}`, {
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
		[varBsGradient]: 'none',
	},
})

globalStyle(`${yetiScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#e99002',
		[varBsBtnBorderColor]: '#e99002',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e99002',
		[varBsBtnHoverBorderColor]: '#e99002',
		[varBsBtnFocusBoxShadowRgb]: '233, 144, 2',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e99002',
		[varBsBtnActiveBorderColor]: '#e99002',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e99002',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e99002',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${yetiScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#f04124',
		[varBsBtnBorderColor]: '#f04124',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f04124',
		[varBsBtnHoverBorderColor]: '#f04124',
		[varBsBtnFocusBoxShadowRgb]: '240, 65, 36',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f04124',
		[varBsBtnActiveBorderColor]: '#f04124',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f04124',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f04124',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${yetiScope}${btnOutlineLight}`, {
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

globalStyle(`${yetiScope}${btnOutlineDark}`, {
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

globalStyle(`${yetiScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#888',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '38, 157, 196',
	},
	textDecoration: 'underline',
})

globalStyle(`${yetiScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${yetiScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${yetiScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${yetiScope}${btnGroupLg} > ${yetiScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${yetiScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${yetiScope}${btnGroupSm} > ${yetiScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btnCheck}:checked + ${yetiScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btnCheck}:focus + ${yetiScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btnCheck}:checked + ${yetiScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btnCheck}:focus + ${yetiScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}:not(${btnCheck}:first-child) + ${yetiScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btnGroup}:not(:last-child) > ${yetiScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}:not(${btnCheck}) + ${yetiScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btnGroup}:not(:first-child) > ${yetiScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${yetiScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${yetiScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${yetiScope}${dropup} ${yetiScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${yetiScope}${dropend} ${yetiScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${yetiScope}${dropstart} ${yetiScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${yetiScope}${btnSm} + ${yetiScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${yetiScope}${btnGroupSm} > ${yetiScope}${btn} + ${yetiScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${yetiScope}${btnLg} + ${yetiScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${yetiScope}${btnGroupLg} > ${yetiScope}${btn} + ${yetiScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btn}`, {
	width: '100%',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btnGroup}:not(:last-child) > ${yetiScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}:not(${btnCheck}) + ${yetiScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btnGroup}:not(:first-child) > ${yetiScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${yetiScope}${alertDismissible} ${yetiScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${yetiScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#888',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23888\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.6',
		[varBsBtnCloseHoverOpacity]: '1',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(0, 140, 186, 0.25)',
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
	borderRadius: '0',
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${yetiScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${yetiScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${yetiScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${yetiScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${yetiScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${yetiScope}${toastHeader} ${yetiScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${yetiScope}${modalHeader} ${yetiScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${yetiScope}${offcanvasHeader} ${yetiScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${yetiScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${yetiScope}${btnPrimary}`, {
	borderColor: '#007ea7',
})

globalStyle(`${yetiScope}${btnSecondary}`, {
	borderColor: '#d6d6d6',
})

globalStyle(`${yetiScope}${btnSuccess}`, {
	borderColor: '#3c9b5f',
})

globalStyle(`${yetiScope}${btnInfo}`, {
	color: '#fff',
	borderColor: '#52adc8',
})

globalStyle(`${yetiScope}${btnDanger}`, {
	borderColor: '#d83b20',
})

globalStyle(`${yetiScope}${btnWarning}`, {
	color: '#fff',
	borderColor: '#d28202',
})

globalStyle(`${yetiScope}${btnLight}`, {
	borderColor: '#d6d6d6',
})

globalStyle(`${yetiScope}${btnDark}`, {
	borderColor: '#2e2e2e',
})

globalStyle(`${yetiScope}${btnOutlineSecondary}`, {
	color: 'var(--bs-primary-color)',
})
