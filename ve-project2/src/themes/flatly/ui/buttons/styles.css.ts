import { globalStyle } from '@vanilla-extract/css'
import { flatlyScope } from '../../scope.css'

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
import { modal, modalHeader } from '../../../../theme-contract/ui/modal/contract.css'
import { show } from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvas, offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toast, toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${flatlyScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${flatlyScope}${btnCheck}[disabled] + ${flatlyScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${flatlyScope}${btnCheck}:disabled + ${flatlyScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${flatlyScope}${inputGroup} ${flatlyScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${flatlyScope}${inputGroup} ${flatlyScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${flatlyScope}${inputGroupLg} > ${flatlyScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${flatlyScope}${inputGroupSm} > ${flatlyScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${flatlyScope}${btn}`, {
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

globalStyle(`${flatlyScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${flatlyScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${flatlyScope}${btnCheck} + ${flatlyScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${flatlyScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${flatlyScope}${btnCheck}:focus-visible + ${flatlyScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${flatlyScope}${btnCheck}:checked + ${flatlyScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${flatlyScope}:not(${btnCheck}) + ${flatlyScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${flatlyScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${flatlyScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${flatlyScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${flatlyScope}${btnCheck}:checked + ${flatlyScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${flatlyScope}:not(${btnCheck}) + ${flatlyScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${flatlyScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${flatlyScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${flatlyScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${flatlyScope}${btnCheck}:checked:focus-visible + ${flatlyScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${flatlyScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${flatlyScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${flatlyScope}${fieldset}:disabled ${flatlyScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${flatlyScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#2c3e50',
		[varBsBtnBorderColor]: '#2c3e50',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#253544',
		[varBsBtnHoverBorderColor]: '#233240',
		[varBsBtnFocusBoxShadowRgb]: '76, 91, 106',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#233240',
		[varBsBtnActiveBorderColor]: '#212f3c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#2c3e50',
		[varBsBtnDisabledBorderColor]: '#2c3e50',
	},
})

globalStyle(`${flatlyScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#95a5a6',
		[varBsBtnBorderColor]: '#95a5a6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#7f8c8d',
		[varBsBtnHoverBorderColor]: '#778485',
		[varBsBtnFocusBoxShadowRgb]: '165, 179, 179',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#778485',
		[varBsBtnActiveBorderColor]: '#707c7d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#95a5a6',
		[varBsBtnDisabledBorderColor]: '#95a5a6',
	},
})

globalStyle(`${flatlyScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#18bc9c',
		[varBsBtnBorderColor]: '#18bc9c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#14a085',
		[varBsBtnHoverBorderColor]: '#13967d',
		[varBsBtnFocusBoxShadowRgb]: '59, 198, 171',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#13967d',
		[varBsBtnActiveBorderColor]: '#128d75',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#18bc9c',
		[varBsBtnDisabledBorderColor]: '#18bc9c',
	},
})

globalStyle(`${flatlyScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3498db',
		[varBsBtnBorderColor]: '#3498db',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2c81ba',
		[varBsBtnHoverBorderColor]: '#2a7aaf',
		[varBsBtnFocusBoxShadowRgb]: '82, 167, 224',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2a7aaf',
		[varBsBtnActiveBorderColor]: '#2772a4',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3498db',
		[varBsBtnDisabledBorderColor]: '#3498db',
	},
})

globalStyle(`${flatlyScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f39c12',
		[varBsBtnBorderColor]: '#f39c12',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cf850f',
		[varBsBtnHoverBorderColor]: '#c27d0e',
		[varBsBtnFocusBoxShadowRgb]: '245, 171, 54',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c27d0e',
		[varBsBtnActiveBorderColor]: '#b6750e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f39c12',
		[varBsBtnDisabledBorderColor]: '#f39c12',
	},
})

globalStyle(`${flatlyScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e74c3c',
		[varBsBtnBorderColor]: '#e74c3c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c44133',
		[varBsBtnHoverBorderColor]: '#b93d30',
		[varBsBtnFocusBoxShadowRgb]: '235, 103, 89',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b93d30',
		[varBsBtnActiveBorderColor]: '#ad392d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e74c3c',
		[varBsBtnDisabledBorderColor]: '#e74c3c',
	},
})

globalStyle(`${flatlyScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#ecf0f1',
		[varBsBtnBorderColor]: '#ecf0f1',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#c9cccd',
		[varBsBtnHoverBorderColor]: '#bdc0c1',
		[varBsBtnFocusBoxShadowRgb]: '201, 204, 205',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#bdc0c1',
		[varBsBtnActiveBorderColor]: '#b1b4b5',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#ecf0f1',
		[varBsBtnDisabledBorderColor]: '#ecf0f1',
	},
})

globalStyle(`${flatlyScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#7b8a8b',
		[varBsBtnBorderColor]: '#7b8a8b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#8f9c9c',
		[varBsBtnHoverBorderColor]: '#889697',
		[varBsBtnFocusBoxShadowRgb]: '143, 156, 156',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#95a1a2',
		[varBsBtnActiveBorderColor]: '#889697',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#7b8a8b',
		[varBsBtnDisabledBorderColor]: '#7b8a8b',
	},
})

globalStyle(`${flatlyScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#2c3e50',
		[varBsBtnBorderColor]: '#2c3e50',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2c3e50',
		[varBsBtnHoverBorderColor]: '#2c3e50',
		[varBsBtnFocusBoxShadowRgb]: '44, 62, 80',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2c3e50',
		[varBsBtnActiveBorderColor]: '#2c3e50',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#2c3e50',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#2c3e50',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${flatlyScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#95a5a6',
		[varBsBtnBorderColor]: '#95a5a6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#95a5a6',
		[varBsBtnHoverBorderColor]: '#95a5a6',
		[varBsBtnFocusBoxShadowRgb]: '149, 165, 166',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#95a5a6',
		[varBsBtnActiveBorderColor]: '#95a5a6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#95a5a6',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#95a5a6',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${flatlyScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#18bc9c',
		[varBsBtnBorderColor]: '#18bc9c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#18bc9c',
		[varBsBtnHoverBorderColor]: '#18bc9c',
		[varBsBtnFocusBoxShadowRgb]: '24, 188, 156',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#18bc9c',
		[varBsBtnActiveBorderColor]: '#18bc9c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#18bc9c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#18bc9c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${flatlyScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#3498db',
		[varBsBtnBorderColor]: '#3498db',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3498db',
		[varBsBtnHoverBorderColor]: '#3498db',
		[varBsBtnFocusBoxShadowRgb]: '52, 152, 219',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3498db',
		[varBsBtnActiveBorderColor]: '#3498db',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#3498db',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3498db',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${flatlyScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f39c12',
		[varBsBtnBorderColor]: '#f39c12',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f39c12',
		[varBsBtnHoverBorderColor]: '#f39c12',
		[varBsBtnFocusBoxShadowRgb]: '243, 156, 18',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f39c12',
		[varBsBtnActiveBorderColor]: '#f39c12',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f39c12',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f39c12',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${flatlyScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#e74c3c',
		[varBsBtnBorderColor]: '#e74c3c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e74c3c',
		[varBsBtnHoverBorderColor]: '#e74c3c',
		[varBsBtnFocusBoxShadowRgb]: '231, 76, 60',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e74c3c',
		[varBsBtnActiveBorderColor]: '#e74c3c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e74c3c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e74c3c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${flatlyScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#ecf0f1',
		[varBsBtnBorderColor]: '#ecf0f1',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#ecf0f1',
		[varBsBtnHoverBorderColor]: '#ecf0f1',
		[varBsBtnFocusBoxShadowRgb]: '236, 240, 241',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#ecf0f1',
		[varBsBtnActiveBorderColor]: '#ecf0f1',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ecf0f1',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ecf0f1',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${flatlyScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#7b8a8b',
		[varBsBtnBorderColor]: '#7b8a8b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#7b8a8b',
		[varBsBtnHoverBorderColor]: '#7b8a8b',
		[varBsBtnFocusBoxShadowRgb]: '123, 138, 139',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#7b8a8b',
		[varBsBtnActiveBorderColor]: '#7b8a8b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#7b8a8b',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#7b8a8b',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${flatlyScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#95a5a6',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '59, 198, 171',
	},
	textDecoration: 'underline',
})

globalStyle(`${flatlyScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${flatlyScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${flatlyScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${flatlyScope}${btnGroupLg} > ${flatlyScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${flatlyScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${flatlyScope}${btnGroupSm} > ${flatlyScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}${btnCheck}:checked + ${flatlyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}${btnCheck}:focus + ${flatlyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btnCheck}:checked + ${flatlyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btnCheck}:focus + ${flatlyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}:not(${btnCheck}:first-child) + ${flatlyScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}${btnGroup}:not(:last-child) > ${flatlyScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}:not(${btnCheck}) + ${flatlyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${flatlyScope}${btnGroup} > ${flatlyScope}${btnGroup}:not(:first-child) > ${flatlyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${flatlyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${flatlyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${flatlyScope}${dropup} ${flatlyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${flatlyScope}${dropend} ${flatlyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${flatlyScope}${dropstart} ${flatlyScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${flatlyScope}${btnSm} + ${flatlyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${flatlyScope}${btnGroupSm} > ${flatlyScope}${btn} + ${flatlyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${flatlyScope}${btnLg} + ${flatlyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${flatlyScope}${btnGroupLg} > ${flatlyScope}${btn} + ${flatlyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btn}`, {
	width: '100%',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btnGroup}:not(:last-child) > ${flatlyScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}:not(${btnCheck}) + ${flatlyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${flatlyScope}${btnGroupVertical} > ${flatlyScope}${btnGroup}:not(:first-child) > ${flatlyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${flatlyScope}${alertDismissible} ${flatlyScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${flatlyScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#fff',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.4',
		[varBsBtnCloseHoverOpacity]: '1',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(44, 62, 80, 0.25)',
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

globalStyle(`${flatlyScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${flatlyScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${flatlyScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${flatlyScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${flatlyScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${flatlyScope}${toastHeader} ${flatlyScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${flatlyScope}${modalHeader} ${flatlyScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${flatlyScope}${offcanvasHeader} ${flatlyScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${flatlyScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${flatlyScope}${modal} ${flatlyScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})

globalStyle(`${flatlyScope}${toast} ${flatlyScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})

globalStyle(`${flatlyScope}${offcanvas} ${flatlyScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})
