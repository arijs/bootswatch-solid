import { globalStyle } from '@vanilla-extract/css'
import { bootstrapScope } from '../../scope.css'

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
	dropdownToggleSplit,
	dropend,
	dropstart,
	dropup,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import { modalHeader } from '../../../../theme-contract/ui/modal/contract.css'
import { show } from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${bootstrapScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${bootstrapScope}${btnCheck}[disabled] + ${bootstrapScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${bootstrapScope}${btnCheck}:disabled + ${bootstrapScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${bootstrapScope}${inputGroup} ${bootstrapScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${bootstrapScope}${inputGroup} ${bootstrapScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${bootstrapScope}${inputGroupLg} > ${bootstrapScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${bootstrapScope}${inputGroupSm} > ${bootstrapScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${bootstrapScope}${btn}`, {
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

globalStyle(`${bootstrapScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${bootstrapScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${bootstrapScope}${btnCheck} + ${bootstrapScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${bootstrapScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${bootstrapScope}${btnCheck}:focus-visible + ${bootstrapScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${bootstrapScope}:not(${btnCheck}) + ${bootstrapScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${bootstrapScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${bootstrapScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${bootstrapScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${bootstrapScope}:not(${btnCheck}) + ${bootstrapScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${bootstrapScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${bootstrapScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${bootstrapScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${bootstrapScope}${btnCheck}:checked:focus-visible + ${bootstrapScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${bootstrapScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${bootstrapScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${bootstrapScope}${fieldset}:disabled ${bootstrapScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${bootstrapScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#0d6efd',
		[varBsBtnBorderColor]: '#0d6efd',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#0b5ed7',
		[varBsBtnHoverBorderColor]: '#0a58ca',
		[varBsBtnFocusBoxShadowRgb]: '49, 132, 253',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#0a58ca',
		[varBsBtnActiveBorderColor]: '#0a53be',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#0d6efd',
		[varBsBtnDisabledBorderColor]: '#0d6efd',
	},
})

globalStyle(`${bootstrapScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#6c757d',
		[varBsBtnBorderColor]: '#6c757d',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5c636a',
		[varBsBtnHoverBorderColor]: '#565e64',
		[varBsBtnFocusBoxShadowRgb]: '130, 138, 145',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#565e64',
		[varBsBtnActiveBorderColor]: '#51585e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#6c757d',
		[varBsBtnDisabledBorderColor]: '#6c757d',
	},
})

globalStyle(`${bootstrapScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#198754',
		[varBsBtnBorderColor]: '#198754',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#157347',
		[varBsBtnHoverBorderColor]: '#146c43',
		[varBsBtnFocusBoxShadowRgb]: '60, 153, 110',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#146c43',
		[varBsBtnActiveBorderColor]: '#13653f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#198754',
		[varBsBtnDisabledBorderColor]: '#198754',
	},
})

globalStyle(`${bootstrapScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#0dcaf0',
		[varBsBtnBorderColor]: '#0dcaf0',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#31d2f2',
		[varBsBtnHoverBorderColor]: '#25cff2',
		[varBsBtnFocusBoxShadowRgb]: '11, 172, 204',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#3dd5f3',
		[varBsBtnActiveBorderColor]: '#25cff2',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#0dcaf0',
		[varBsBtnDisabledBorderColor]: '#0dcaf0',
	},
})

globalStyle(`${bootstrapScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#ffc107',
		[varBsBtnBorderColor]: '#ffc107',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#ffca2c',
		[varBsBtnHoverBorderColor]: '#ffc720',
		[varBsBtnFocusBoxShadowRgb]: '217, 164, 6',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#ffcd39',
		[varBsBtnActiveBorderColor]: '#ffc720',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#ffc107',
		[varBsBtnDisabledBorderColor]: '#ffc107',
	},
})

globalStyle(`${bootstrapScope}${btnDanger}`, {
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

globalStyle(`${bootstrapScope}${btnLight}`, {
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

globalStyle(`${bootstrapScope}${btnDark}`, {
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

globalStyle(`${bootstrapScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#0d6efd',
		[varBsBtnBorderColor]: '#0d6efd',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#0d6efd',
		[varBsBtnHoverBorderColor]: '#0d6efd',
		[varBsBtnFocusBoxShadowRgb]: '13, 110, 253',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#0d6efd',
		[varBsBtnActiveBorderColor]: '#0d6efd',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#0d6efd',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#0d6efd',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${bootstrapScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#6c757d',
		[varBsBtnBorderColor]: '#6c757d',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#6c757d',
		[varBsBtnHoverBorderColor]: '#6c757d',
		[varBsBtnFocusBoxShadowRgb]: '108, 117, 125',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#6c757d',
		[varBsBtnActiveBorderColor]: '#6c757d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#6c757d',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#6c757d',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${bootstrapScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#198754',
		[varBsBtnBorderColor]: '#198754',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#198754',
		[varBsBtnHoverBorderColor]: '#198754',
		[varBsBtnFocusBoxShadowRgb]: '25, 135, 84',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#198754',
		[varBsBtnActiveBorderColor]: '#198754',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#198754',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#198754',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${bootstrapScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#0dcaf0',
		[varBsBtnBorderColor]: '#0dcaf0',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#0dcaf0',
		[varBsBtnHoverBorderColor]: '#0dcaf0',
		[varBsBtnFocusBoxShadowRgb]: '13, 202, 240',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#0dcaf0',
		[varBsBtnActiveBorderColor]: '#0dcaf0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#0dcaf0',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#0dcaf0',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${bootstrapScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ffc107',
		[varBsBtnBorderColor]: '#ffc107',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#ffc107',
		[varBsBtnHoverBorderColor]: '#ffc107',
		[varBsBtnFocusBoxShadowRgb]: '255, 193, 7',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#ffc107',
		[varBsBtnActiveBorderColor]: '#ffc107',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ffc107',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ffc107',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${bootstrapScope}${btnOutlineDanger}`, {
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
		[varBsGradient]: 'none',
	},
})

globalStyle(`${bootstrapScope}${btnOutlineLight}`, {
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

globalStyle(`${bootstrapScope}${btnOutlineDark}`, {
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
		[varBsGradient]: 'none',
	},
})

globalStyle(`${bootstrapScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '49, 132, 253',
	},
	textDecoration: 'underline',
})

globalStyle(`${bootstrapScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${bootstrapScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${bootstrapScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${bootstrapScope}${btnGroupLg} > ${bootstrapScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${bootstrapScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${bootstrapScope}${btnGroupSm} > ${bootstrapScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnCheck}:focus + ${bootstrapScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btnCheck}:focus + ${bootstrapScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}:not(${btnCheck}:first-child) + ${bootstrapScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroup}:not(:last-child) > ${bootstrapScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}:not(${btnCheck}) + ${bootstrapScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroup}:not(:first-child) > ${bootstrapScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${bootstrapScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${bootstrapScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${bootstrapScope}${dropup} ${bootstrapScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${bootstrapScope}${dropend} ${bootstrapScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${bootstrapScope}${dropstart} ${bootstrapScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${bootstrapScope}${btnSm} + ${bootstrapScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${bootstrapScope}${btnGroupSm} > ${bootstrapScope}${btn} + ${bootstrapScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${bootstrapScope}${btnLg} + ${bootstrapScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${bootstrapScope}${btnGroupLg} > ${bootstrapScope}${btn} + ${bootstrapScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btn}`, {
	width: '100%',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btnGroup}:not(:last-child) > ${bootstrapScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}:not(${btnCheck}) + ${bootstrapScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${bootstrapScope}${btnGroupVertical} > ${bootstrapScope}${btnGroup}:not(:first-child) > ${bootstrapScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${bootstrapScope}${alertDismissible} ${bootstrapScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${bootstrapScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(13, 110, 253, 0.25)',
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

globalStyle(`${bootstrapScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${bootstrapScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${bootstrapScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${bootstrapScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${bootstrapScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${bootstrapScope}${toastHeader} ${bootstrapScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${bootstrapScope}${modalHeader} ${bootstrapScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${bootstrapScope}${offcanvasHeader} ${bootstrapScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${bootstrapScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})
