import { globalStyle } from '@vanilla-extract/css'
import { ceruleanScope } from '../../scope.css'

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
import { dropdownToggle, dropdownToggleSplit } from '../../../../theme-contract/ui/dropdowns/contract.css'
import { modalHeader } from '../../../../theme-contract/ui/modal/contract.css'
import { show } from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${ceruleanScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${ceruleanScope}${btnCheck}[disabled] + ${ceruleanScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${ceruleanScope}${btnCheck}:disabled + ${ceruleanScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${ceruleanScope}${inputGroup} ${ceruleanScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${ceruleanScope}${inputGroup} ${ceruleanScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${ceruleanScope}${inputGroupLg} > ${ceruleanScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${ceruleanScope}${inputGroupSm} > ${ceruleanScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${ceruleanScope}${btn}`, {
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

globalStyle(`${ceruleanScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${ceruleanScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${ceruleanScope}${btnCheck} + ${ceruleanScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${ceruleanScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${ceruleanScope}${btnCheck}:focus-visible + ${ceruleanScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${ceruleanScope}:not(${btnCheck}) + ${ceruleanScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${ceruleanScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${ceruleanScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${ceruleanScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${ceruleanScope}:not(${btnCheck}) + ${ceruleanScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${ceruleanScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${ceruleanScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${ceruleanScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${ceruleanScope}${btnCheck}:checked:focus-visible + ${ceruleanScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${ceruleanScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${ceruleanScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${ceruleanScope}${fieldset}:disabled ${ceruleanScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${ceruleanScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#2fa4e7',
		[varBsBtnBorderColor]: '#2fa4e7',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#288bc4',
		[varBsBtnHoverBorderColor]: '#2683b9',
		[varBsBtnFocusBoxShadowRgb]: '78, 178, 235',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2683b9',
		[varBsBtnActiveBorderColor]: '#237bad',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#2fa4e7',
		[varBsBtnDisabledBorderColor]: '#2fa4e7',
	},
})

globalStyle(`${ceruleanScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#e9ecef',
		[varBsBtnBorderColor]: '#e9ecef',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#eceff1',
		[varBsBtnHoverBorderColor]: '#ebeef1',
		[varBsBtnFocusBoxShadowRgb]: '198, 201, 203',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#edf0f2',
		[varBsBtnActiveBorderColor]: '#ebeef1',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#e9ecef',
		[varBsBtnDisabledBorderColor]: '#e9ecef',
	},
})

globalStyle(`${ceruleanScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#73a839',
		[varBsBtnBorderColor]: '#73a839',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#628f30',
		[varBsBtnHoverBorderColor]: '#5c862e',
		[varBsBtnFocusBoxShadowRgb]: '136, 181, 87',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5c862e',
		[varBsBtnActiveBorderColor]: '#567e2b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#73a839',
		[varBsBtnDisabledBorderColor]: '#73a839',
	},
})

globalStyle(`${ceruleanScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#033c73',
		[varBsBtnBorderColor]: '#033c73',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#033362',
		[varBsBtnHoverBorderColor]: '#02305c',
		[varBsBtnFocusBoxShadowRgb]: '41, 89, 136',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#02305c',
		[varBsBtnActiveBorderColor]: '#022d56',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#033c73',
		[varBsBtnDisabledBorderColor]: '#033c73',
	},
})

globalStyle(`${ceruleanScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#dd5600',
		[varBsBtnBorderColor]: '#dd5600',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#bc4900',
		[varBsBtnHoverBorderColor]: '#b14500',
		[varBsBtnFocusBoxShadowRgb]: '226, 111, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b14500',
		[varBsBtnActiveBorderColor]: '#a64100',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#dd5600',
		[varBsBtnDisabledBorderColor]: '#dd5600',
	},
})

globalStyle(`${ceruleanScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#c71c22',
		[varBsBtnBorderColor]: '#c71c22',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#a9181d',
		[varBsBtnHoverBorderColor]: '#9f161b',
		[varBsBtnFocusBoxShadowRgb]: '207, 62, 67',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#9f161b',
		[varBsBtnActiveBorderColor]: '#95151a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#c71c22',
		[varBsBtnDisabledBorderColor]: '#c71c22',
	},
})

globalStyle(`${ceruleanScope}${btnLight}`, {
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

globalStyle(`${ceruleanScope}${btnDark}`, {
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

globalStyle(`${ceruleanScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#2fa4e7',
		[varBsBtnBorderColor]: '#2fa4e7',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2fa4e7',
		[varBsBtnHoverBorderColor]: '#2fa4e7',
		[varBsBtnFocusBoxShadowRgb]: '47, 164, 231',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2fa4e7',
		[varBsBtnActiveBorderColor]: '#2fa4e7',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#2fa4e7',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#2fa4e7',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${ceruleanScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#e9ecef',
		[varBsBtnBorderColor]: '#e9ecef',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#e9ecef',
		[varBsBtnHoverBorderColor]: '#e9ecef',
		[varBsBtnFocusBoxShadowRgb]: '233, 236, 239',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#e9ecef',
		[varBsBtnActiveBorderColor]: '#e9ecef',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e9ecef',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e9ecef',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${ceruleanScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#73a839',
		[varBsBtnBorderColor]: '#73a839',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#73a839',
		[varBsBtnHoverBorderColor]: '#73a839',
		[varBsBtnFocusBoxShadowRgb]: '115, 168, 57',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#73a839',
		[varBsBtnActiveBorderColor]: '#73a839',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#73a839',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#73a839',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${ceruleanScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#033c73',
		[varBsBtnBorderColor]: '#033c73',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#033c73',
		[varBsBtnHoverBorderColor]: '#033c73',
		[varBsBtnFocusBoxShadowRgb]: '3, 60, 115',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#033c73',
		[varBsBtnActiveBorderColor]: '#033c73',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#033c73',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#033c73',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${ceruleanScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#dd5600',
		[varBsBtnBorderColor]: '#dd5600',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#dd5600',
		[varBsBtnHoverBorderColor]: '#dd5600',
		[varBsBtnFocusBoxShadowRgb]: '221, 86, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#dd5600',
		[varBsBtnActiveBorderColor]: '#dd5600',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#dd5600',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#dd5600',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${ceruleanScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#c71c22',
		[varBsBtnBorderColor]: '#c71c22',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c71c22',
		[varBsBtnHoverBorderColor]: '#c71c22',
		[varBsBtnFocusBoxShadowRgb]: '199, 28, 34',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c71c22',
		[varBsBtnActiveBorderColor]: '#c71c22',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#c71c22',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#c71c22',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${ceruleanScope}${btnOutlineLight}`, {
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

globalStyle(`${ceruleanScope}${btnOutlineDark}`, {
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

globalStyle(`${ceruleanScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '78, 178, 235',
	},
	textDecoration: 'underline',
})

globalStyle(`${ceruleanScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${ceruleanScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${ceruleanScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${ceruleanScope}${btnGroupLg} > ${ceruleanScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${ceruleanScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${ceruleanScope}${btnGroupSm} > ${ceruleanScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btnCheck}:focus + ${ceruleanScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btnCheck}:focus + ${ceruleanScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}:not(${btnCheck}:first-child) + ${ceruleanScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btnGroup}:not(:last-child) > ${ceruleanScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}:not(${btnCheck}) + ${ceruleanScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${ceruleanScope}${btnGroup} > ${ceruleanScope}${btnGroup}:not(:first-child) > ${ceruleanScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${ceruleanScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${ceruleanScope}${btnSm} + ${ceruleanScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${ceruleanScope}${btnGroupSm} > ${ceruleanScope}${btn} + ${ceruleanScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${ceruleanScope}${btnLg} + ${ceruleanScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${ceruleanScope}${btnGroupLg} > ${ceruleanScope}${btn} + ${ceruleanScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btn}`, {
	width: '100%',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btnGroup}:not(:last-child) > ${ceruleanScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}:not(${btnCheck}) + ${ceruleanScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${ceruleanScope}${btnGroupVertical} > ${ceruleanScope}${btnGroup}:not(:first-child) > ${ceruleanScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${ceruleanScope}${alertDismissible} ${ceruleanScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${ceruleanScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(47, 164, 231, 0.25)',
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

globalStyle(`${ceruleanScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${ceruleanScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${ceruleanScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${ceruleanScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${ceruleanScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${ceruleanScope}${toastHeader} ${ceruleanScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${ceruleanScope}${modalHeader} ${ceruleanScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${ceruleanScope}${offcanvasHeader} ${ceruleanScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${ceruleanScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${ceruleanScope}${btn}`, {
	textShadow: '0 1px 0 rgba(0, 0, 0, 0.05)',
})

globalStyle(`${ceruleanScope}${btnSecondary}`, {
	color: '#495057',
})

globalStyle(`${ceruleanScope}${btnOutlineSecondary}`, {
	color: '#495057',
})

globalStyle(`${ceruleanScope}${btnPrimary}`, {
	backgroundImage: 'linear-gradient(#50b3eb, #2fa4e7 60%, #2c9ad9)',
})

globalStyle(`${ceruleanScope}${btnPrimary}:hover`, {
	backgroundImage: 'linear-gradient(#2fa4e7, #2d9cdb 60%, #288bc4)',
})

globalStyle(`${ceruleanScope}${btnPrimary}:active`, {
	backgroundImage: 'linear-gradient(#2683b9, #2683b9 60%, #2173a2)',
})

globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnPrimary}`, {
	backgroundImage: 'linear-gradient(#2683b9, #2683b9 60%, #2173a2)',
})

globalStyle(`${ceruleanScope}${btnSecondary}`, {
	backgroundImage: 'linear-gradient(#edeff2, #e9ecef 60%, #dbdee1)',
})

globalStyle(`${ceruleanScope}${btnSecondary}:hover`, {
	backgroundImage: 'linear-gradient(#e9ecef, #dde0e3 60%, #c6c9cb)',
})

globalStyle(`${ceruleanScope}${btnSecondary}:active`, {
	backgroundImage: 'linear-gradient(#babdbf, #babdbf 60%, #a3a5a7)',
})

globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnSecondary}`, {
	backgroundImage: 'linear-gradient(#babdbf, #babdbf 60%, #a3a5a7)',
})

globalStyle(`${ceruleanScope}${btnSuccess}`, {
	backgroundImage: 'linear-gradient(#89b659, #73a839 60%, #6c9e36)',
})

globalStyle(`${ceruleanScope}${btnSuccess}:hover`, {
	backgroundImage: 'linear-gradient(#73a839, #6da036 60%, #628f30)',
})

globalStyle(`${ceruleanScope}${btnSuccess}:active`, {
	backgroundImage: 'linear-gradient(#5c862e, #5c862e 60%, #517628)',
})

globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnSuccess}`, {
	backgroundImage: 'linear-gradient(#5c862e, #5c862e 60%, #517628)',
})

globalStyle(`${ceruleanScope}${btnInfo}`, {
	backgroundImage: 'linear-gradient(#2b5b89, #033c73 60%, #03386c)',
})

globalStyle(`${ceruleanScope}${btnInfo}:hover`, {
	backgroundImage: 'linear-gradient(#033c73, #03396d 60%, #033362)',
})

globalStyle(`${ceruleanScope}${btnInfo}:active`, {
	backgroundImage: 'linear-gradient(#02305c, #02305c 60%, #022a51)',
})

globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnInfo}`, {
	backgroundImage: 'linear-gradient(#02305c, #02305c 60%, #022a51)',
})

globalStyle(`${ceruleanScope}${btnWarning}`, {
	backgroundImage: 'linear-gradient(#e27129, #dd5600 60%, #d05100)',
})

globalStyle(`${ceruleanScope}${btnWarning}:hover`, {
	backgroundImage: 'linear-gradient(#dd5600, #d25200 60%, #bc4900)',
})

globalStyle(`${ceruleanScope}${btnWarning}:active`, {
	backgroundImage: 'linear-gradient(#b14500, #b14500 60%, #9b3c00)',
})

globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnWarning}`, {
	backgroundImage: 'linear-gradient(#b14500, #b14500 60%, #9b3c00)',
})

globalStyle(`${ceruleanScope}${btnDanger}`, {
	backgroundImage: 'linear-gradient(#d04045, #c71c22 60%, #bb1a20)',
})

globalStyle(`${ceruleanScope}${btnDanger}:hover`, {
	backgroundImage: 'linear-gradient(#c71c22, #bd1b20 60%, #a9181d)',
})

globalStyle(`${ceruleanScope}${btnDanger}:active`, {
	backgroundImage: 'linear-gradient(#9f161b, #9f161b 60%, #8b1418)',
})

globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnDanger}`, {
	backgroundImage: 'linear-gradient(#9f161b, #9f161b 60%, #8b1418)',
})

globalStyle(`${ceruleanScope}${btnLight}`, {
	backgroundImage: 'linear-gradient(#f9fafb, #f8f9fa 60%, #e9eaeb)',
})

globalStyle(`${ceruleanScope}${btnLight}:hover`, {
	backgroundImage: 'linear-gradient(#f8f9fa, #ecedee 60%, #d3d4d5)',
})

globalStyle(`${ceruleanScope}${btnLight}:active`, {
	backgroundImage: 'linear-gradient(#c6c7c8, #c6c7c8 60%, #aeaeaf)',
})

globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnLight}`, {
	backgroundImage: 'linear-gradient(#c6c7c8, #c6c7c8 60%, #aeaeaf)',
})

globalStyle(`${ceruleanScope}${btnDark}`, {
	backgroundImage: 'linear-gradient(#545a5f, #343a40 60%, #31373c)',
})

globalStyle(`${ceruleanScope}${btnDark}:hover`, {
	backgroundImage: 'linear-gradient(#343a40, #31373d 60%, #2c3136)',
})

globalStyle(`${ceruleanScope}${btnDark}:active`, {
	backgroundImage: 'linear-gradient(#2a2e33, #2a2e33 60%, #24292d)',
})

globalStyle(`${ceruleanScope}${btnCheck}:checked + ${ceruleanScope}${btnDark}`, {
	backgroundImage: 'linear-gradient(#2a2e33, #2a2e33 60%, #24292d)',
})
