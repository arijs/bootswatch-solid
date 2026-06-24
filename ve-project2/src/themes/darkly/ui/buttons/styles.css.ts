import { globalStyle } from '@vanilla-extract/css'
import { darklyScope } from '../../scope.css'

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

globalStyle(`${darklyScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${darklyScope}${btnCheck}[disabled] + ${darklyScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${darklyScope}${btnCheck}:disabled + ${darklyScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${darklyScope}${inputGroup} ${darklyScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${darklyScope}${inputGroup} ${darklyScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${darklyScope}${inputGroupLg} > ${darklyScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${darklyScope}${inputGroupSm} > ${darklyScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${darklyScope}${btn}`, {
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

globalStyle(`${darklyScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${darklyScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${darklyScope}${btnCheck} + ${darklyScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${darklyScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${darklyScope}${btnCheck}:focus-visible + ${darklyScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${darklyScope}${btnCheck}:checked + ${darklyScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${darklyScope}:not(${btnCheck}) + ${darklyScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${darklyScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${darklyScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${darklyScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${darklyScope}${btnCheck}:checked + ${darklyScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${darklyScope}:not(${btnCheck}) + ${darklyScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${darklyScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${darklyScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${darklyScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${darklyScope}${btnCheck}:checked:focus-visible + ${darklyScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${darklyScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${darklyScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${darklyScope}${fieldset}:disabled ${darklyScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${darklyScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#375a7f',
		[varBsBtnBorderColor]: '#375a7f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2f4d6c',
		[varBsBtnHoverBorderColor]: '#2c4866',
		[varBsBtnFocusBoxShadowRgb]: '85, 115, 146',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2c4866',
		[varBsBtnActiveBorderColor]: '#29445f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#375a7f',
		[varBsBtnDisabledBorderColor]: '#375a7f',
	},
})

globalStyle(`${darklyScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#444',
		[varBsBtnBorderColor]: '#444',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3a3a3a',
		[varBsBtnHoverBorderColor]: '#363636',
		[varBsBtnFocusBoxShadowRgb]: '96, 96, 96',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#363636',
		[varBsBtnActiveBorderColor]: '#333333',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#444',
		[varBsBtnDisabledBorderColor]: '#444',
	},
})

globalStyle(`${darklyScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#00bc8c',
		[varBsBtnBorderColor]: '#00bc8c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#00a077',
		[varBsBtnHoverBorderColor]: '#009670',
		[varBsBtnFocusBoxShadowRgb]: '38, 198, 157',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#009670',
		[varBsBtnActiveBorderColor]: '#008d69',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#00bc8c',
		[varBsBtnDisabledBorderColor]: '#00bc8c',
	},
})

globalStyle(`${darklyScope}${btnInfo}`, {
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

globalStyle(`${darklyScope}${btnWarning}`, {
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

globalStyle(`${darklyScope}${btnDanger}`, {
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

globalStyle(`${darklyScope}${btnLight}`, {
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

globalStyle(`${darklyScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#303030',
		[varBsBtnBorderColor]: '#303030',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4f4f4f',
		[varBsBtnHoverBorderColor]: '#454545',
		[varBsBtnFocusBoxShadowRgb]: '79, 79, 79',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#595959',
		[varBsBtnActiveBorderColor]: '#454545',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#303030',
		[varBsBtnDisabledBorderColor]: '#303030',
	},
})

globalStyle(`${darklyScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#375a7f',
		[varBsBtnBorderColor]: '#375a7f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#375a7f',
		[varBsBtnHoverBorderColor]: '#375a7f',
		[varBsBtnFocusBoxShadowRgb]: '55, 90, 127',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#375a7f',
		[varBsBtnActiveBorderColor]: '#375a7f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#375a7f',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#375a7f',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${darklyScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#444',
		[varBsBtnBorderColor]: '#444',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#444',
		[varBsBtnHoverBorderColor]: '#444',
		[varBsBtnFocusBoxShadowRgb]: '68, 68, 68',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#444',
		[varBsBtnActiveBorderColor]: '#444',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#444',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#444',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${darklyScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#00bc8c',
		[varBsBtnBorderColor]: '#00bc8c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#00bc8c',
		[varBsBtnHoverBorderColor]: '#00bc8c',
		[varBsBtnFocusBoxShadowRgb]: '0, 188, 140',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#00bc8c',
		[varBsBtnActiveBorderColor]: '#00bc8c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#00bc8c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#00bc8c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${darklyScope}${btnOutlineInfo}`, {
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

globalStyle(`${darklyScope}${btnOutlineWarning}`, {
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

globalStyle(`${darklyScope}${btnOutlineDanger}`, {
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

globalStyle(`${darklyScope}${btnOutlineLight}`, {
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

globalStyle(`${darklyScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#303030',
		[varBsBtnBorderColor]: '#303030',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#303030',
		[varBsBtnHoverBorderColor]: '#303030',
		[varBsBtnFocusBoxShadowRgb]: '48, 48, 48',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#303030',
		[varBsBtnActiveBorderColor]: '#303030',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#303030',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#303030',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${darklyScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '38, 198, 157',
	},
	textDecoration: 'underline',
})

globalStyle(`${darklyScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${darklyScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${darklyScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${darklyScope}${btnGroupLg} > ${darklyScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${darklyScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${darklyScope}${btnGroupSm} > ${darklyScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btnCheck}:checked + ${darklyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btnCheck}:focus + ${darklyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btnCheck}:checked + ${darklyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btnCheck}:focus + ${darklyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}:not(${btnCheck}:first-child) + ${darklyScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btnGroup}:not(:last-child) > ${darklyScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}:not(${btnCheck}) + ${darklyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${darklyScope}${btnGroup} > ${darklyScope}${btnGroup}:not(:first-child) > ${darklyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${darklyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${darklyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${darklyScope}${dropup} ${darklyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${darklyScope}${dropend} ${darklyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${darklyScope}${dropstart} ${darklyScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${darklyScope}${btnSm} + ${darklyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${darklyScope}${btnGroupSm} > ${darklyScope}${btn} + ${darklyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${darklyScope}${btnLg} + ${darklyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${darklyScope}${btnGroupLg} > ${darklyScope}${btn} + ${darklyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btn}`, {
	width: '100%',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btnGroup}:not(:last-child) > ${darklyScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}:not(${btnCheck}) + ${darklyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${darklyScope}${btnGroupVertical} > ${darklyScope}${btnGroup}:not(:first-child) > ${darklyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${darklyScope}${alertDismissible} ${darklyScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${darklyScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#fff',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.4',
		[varBsBtnCloseHoverOpacity]: '1',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(55, 90, 127, 0.25)',
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

globalStyle(`${darklyScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${darklyScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${darklyScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${darklyScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${darklyScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${darklyScope}${toastHeader} ${darklyScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${darklyScope}${modalHeader} ${darklyScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${darklyScope}${offcanvasHeader} ${darklyScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${darklyScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})
