import { globalStyle } from '@vanilla-extract/css'
import { mintyScope } from '../../scope.css'

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

globalStyle(`${mintyScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${mintyScope}${btnCheck}[disabled] + ${mintyScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${mintyScope}${btnCheck}:disabled + ${mintyScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${mintyScope}${inputGroup} ${mintyScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${mintyScope}${inputGroup} ${mintyScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${mintyScope}${inputGroupLg} > ${mintyScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${mintyScope}${inputGroupSm} > ${mintyScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${mintyScope}${btn}`, {
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

globalStyle(`${mintyScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${mintyScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${mintyScope}${btnCheck} + ${mintyScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${mintyScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${mintyScope}${btnCheck}:focus-visible + ${mintyScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${mintyScope}${btnCheck}:checked + ${mintyScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${mintyScope}:not(${btnCheck}) + ${mintyScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${mintyScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${mintyScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${mintyScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${mintyScope}${btnCheck}:checked + ${mintyScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${mintyScope}:not(${btnCheck}) + ${mintyScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${mintyScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${mintyScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${mintyScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${mintyScope}${btnCheck}:checked:focus-visible + ${mintyScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${mintyScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${mintyScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${mintyScope}${fieldset}:disabled ${mintyScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${mintyScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#78c2ad',
		[varBsBtnBorderColor]: '#78c2ad',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#66a593',
		[varBsBtnHoverBorderColor]: '#609b8a',
		[varBsBtnFocusBoxShadowRgb]: '140, 203, 185',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#609b8a',
		[varBsBtnActiveBorderColor]: '#5a9282',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#78c2ad',
		[varBsBtnDisabledBorderColor]: '#78c2ad',
	},
})

globalStyle(`${mintyScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f3969a',
		[varBsBtnBorderColor]: '#f3969a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cf8083',
		[varBsBtnHoverBorderColor]: '#c2787b',
		[varBsBtnFocusBoxShadowRgb]: '245, 166, 169',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c2787b',
		[varBsBtnActiveBorderColor]: '#b67174',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f3969a',
		[varBsBtnDisabledBorderColor]: '#f3969a',
	},
})

globalStyle(`${mintyScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#56cc9d',
		[varBsBtnBorderColor]: '#56cc9d',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#49ad85',
		[varBsBtnHoverBorderColor]: '#45a37e',
		[varBsBtnFocusBoxShadowRgb]: '111, 212, 172',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#45a37e',
		[varBsBtnActiveBorderColor]: '#419976',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#56cc9d',
		[varBsBtnDisabledBorderColor]: '#56cc9d',
	},
})

globalStyle(`${mintyScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#6cc3d5',
		[varBsBtnBorderColor]: '#6cc3d5',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5ca6b5',
		[varBsBtnHoverBorderColor]: '#569caa',
		[varBsBtnFocusBoxShadowRgb]: '130, 204, 219',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#569caa',
		[varBsBtnActiveBorderColor]: '#5192a0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#6cc3d5',
		[varBsBtnDisabledBorderColor]: '#6cc3d5',
	},
})

globalStyle(`${mintyScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ffce67',
		[varBsBtnBorderColor]: '#ffce67',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d9af58',
		[varBsBtnHoverBorderColor]: '#cca552',
		[varBsBtnFocusBoxShadowRgb]: '255, 213, 126',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cca552',
		[varBsBtnActiveBorderColor]: '#bf9b4d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ffce67',
		[varBsBtnDisabledBorderColor]: '#ffce67',
	},
})

globalStyle(`${mintyScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ff7851',
		[varBsBtnBorderColor]: '#ff7851',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d96645',
		[varBsBtnHoverBorderColor]: '#cc6041',
		[varBsBtnFocusBoxShadowRgb]: '255, 140, 107',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc6041',
		[varBsBtnActiveBorderColor]: '#bf5a3d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ff7851',
		[varBsBtnDisabledBorderColor]: '#ff7851',
	},
})

globalStyle(`${mintyScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f8f9fa',
		[varBsBtnBorderColor]: '#f8f9fa',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d3d4d5',
		[varBsBtnHoverBorderColor]: '#c6c7c8',
		[varBsBtnFocusBoxShadowRgb]: '211, 212, 213',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c6c7c8',
		[varBsBtnActiveBorderColor]: '#babbbc',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f8f9fa',
		[varBsBtnDisabledBorderColor]: '#f8f9fa',
	},
})

globalStyle(`${mintyScope}${btnDark}`, {
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

globalStyle(`${mintyScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#78c2ad',
		[varBsBtnBorderColor]: '#78c2ad',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#78c2ad',
		[varBsBtnHoverBorderColor]: '#78c2ad',
		[varBsBtnFocusBoxShadowRgb]: '120, 194, 173',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#78c2ad',
		[varBsBtnActiveBorderColor]: '#78c2ad',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#78c2ad',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#78c2ad',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${mintyScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#f3969a',
		[varBsBtnBorderColor]: '#f3969a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f3969a',
		[varBsBtnHoverBorderColor]: '#f3969a',
		[varBsBtnFocusBoxShadowRgb]: '243, 150, 154',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f3969a',
		[varBsBtnActiveBorderColor]: '#f3969a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f3969a',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f3969a',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${mintyScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#56cc9d',
		[varBsBtnBorderColor]: '#56cc9d',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#56cc9d',
		[varBsBtnHoverBorderColor]: '#56cc9d',
		[varBsBtnFocusBoxShadowRgb]: '86, 204, 157',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#56cc9d',
		[varBsBtnActiveBorderColor]: '#56cc9d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#56cc9d',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#56cc9d',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${mintyScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#6cc3d5',
		[varBsBtnBorderColor]: '#6cc3d5',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#6cc3d5',
		[varBsBtnHoverBorderColor]: '#6cc3d5',
		[varBsBtnFocusBoxShadowRgb]: '108, 195, 213',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#6cc3d5',
		[varBsBtnActiveBorderColor]: '#6cc3d5',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#6cc3d5',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#6cc3d5',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${mintyScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ffce67',
		[varBsBtnBorderColor]: '#ffce67',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ffce67',
		[varBsBtnHoverBorderColor]: '#ffce67',
		[varBsBtnFocusBoxShadowRgb]: '255, 206, 103',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ffce67',
		[varBsBtnActiveBorderColor]: '#ffce67',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ffce67',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ffce67',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${mintyScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#ff7851',
		[varBsBtnBorderColor]: '#ff7851',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ff7851',
		[varBsBtnHoverBorderColor]: '#ff7851',
		[varBsBtnFocusBoxShadowRgb]: '255, 120, 81',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ff7851',
		[varBsBtnActiveBorderColor]: '#ff7851',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ff7851',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ff7851',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${mintyScope}${btnOutlineLight}`, {
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

globalStyle(`${mintyScope}${btnOutlineDark}`, {
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

globalStyle(`${mintyScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '140, 203, 185',
	},
	textDecoration: 'underline',
})

globalStyle(`${mintyScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${mintyScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${mintyScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${mintyScope}${btnGroupLg} > ${mintyScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${mintyScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${mintyScope}${btnGroupSm} > ${mintyScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btnCheck}:checked + ${mintyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btnCheck}:focus + ${mintyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btnCheck}:checked + ${mintyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btnCheck}:focus + ${mintyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}:not(${btnCheck}:first-child) + ${mintyScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btnGroup}:not(:last-child) > ${mintyScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}:not(${btnCheck}) + ${mintyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${mintyScope}${btnGroup} > ${mintyScope}${btnGroup}:not(:first-child) > ${mintyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${mintyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${mintyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${mintyScope}${dropup} ${mintyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${mintyScope}${dropend} ${mintyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${mintyScope}${dropstart} ${mintyScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${mintyScope}${btnSm} + ${mintyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${mintyScope}${btnGroupSm} > ${mintyScope}${btn} + ${mintyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${mintyScope}${btnLg} + ${mintyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${mintyScope}${btnGroupLg} > ${mintyScope}${btn} + ${mintyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btn}`, {
	width: '100%',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btnGroup}:not(:last-child) > ${mintyScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}:not(${btnCheck}) + ${mintyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${mintyScope}${btnGroupVertical} > ${mintyScope}${btnGroup}:not(:first-child) > ${mintyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${mintyScope}${alertDismissible} ${mintyScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${mintyScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(120, 194, 173, 0.25)',
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
	borderRadius: '0.4rem',
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${mintyScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${mintyScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${mintyScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${mintyScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${mintyScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${mintyScope}${toastHeader} ${mintyScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${mintyScope}${modalHeader} ${mintyScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${mintyScope}${offcanvasHeader} ${mintyScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${mintyScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${mintyScope}${btn}`, {
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
})

globalStyle(`${mintyScope}${btn}`, {
	color: '#fff',
})

globalStyle(`${mintyScope}${btn}:hover`, {
	color: '#fff',
})

globalStyle(`${mintyScope}${btnLight}`, {
	color: '#5a5a5a',
})

globalStyle(`${mintyScope}${btnLight}:hover`, {
	color: '#5a5a5a',
})

globalStyle(`${mintyScope}${btnLink}`, {
	color: '#78c2ad',
})

globalStyle(`${mintyScope}${btnLink}:hover`, {
	color: '#78c2ad',
})

globalStyle(`${mintyScope}${btnLink}${disabled}:hover`, {
	color: '#888',
})

globalStyle(`${mintyScope}${btnOutlinePrimary}`, {
	color: '#78c2ad',
})

globalStyle(`${mintyScope}${btnOutlineSecondary}`, {
	color: '#f3969a',
})

globalStyle(`${mintyScope}${btnOutlineSuccess}`, {
	color: '#56cc9d',
})

globalStyle(`${mintyScope}${btnOutlineInfo}`, {
	color: '#6cc3d5',
})

globalStyle(`${mintyScope}${btnOutlineWarning}`, {
	color: '#ffce67',
})

globalStyle(`${mintyScope}${btnOutlineDanger}`, {
	color: '#ff7851',
})

globalStyle(`${mintyScope}${btnOutlineDark}`, {
	color: '#343a40',
})

globalStyle(`${mintyScope}${btnOutlineLight}`, {
	color: '#f8f9fa',
})
