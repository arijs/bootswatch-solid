import { globalStyle } from '@vanilla-extract/css'
import { sketchyScope } from '../../scope.css'

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
import { alert, alertDismissible } from '../../../../theme-contract/ui/alerts/contract.css'
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

globalStyle(`${sketchyScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${sketchyScope}${btnCheck}[disabled] + ${sketchyScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${sketchyScope}${btnCheck}:disabled + ${sketchyScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${sketchyScope}${inputGroup} ${sketchyScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${sketchyScope}${inputGroup} ${sketchyScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${sketchyScope}${inputGroupLg} > ${sketchyScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${sketchyScope}${inputGroupSm} > ${sketchyScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${sketchyScope}${btn}`, {
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

globalStyle(`${sketchyScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${sketchyScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${sketchyScope}${btnCheck} + ${sketchyScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${sketchyScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sketchyScope}${btnCheck}:focus-visible + ${sketchyScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${sketchyScope}:not(${btnCheck}) + ${sketchyScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${sketchyScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${sketchyScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${sketchyScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sketchyScope}:not(${btnCheck}) + ${sketchyScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sketchyScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sketchyScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sketchyScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sketchyScope}${btnCheck}:checked:focus-visible + ${sketchyScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sketchyScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${sketchyScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${sketchyScope}${fieldset}:disabled ${sketchyScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${sketchyScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#333',
		[varBsBtnBorderColor]: '#333',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2b2b2b',
		[varBsBtnHoverBorderColor]: '#292929',
		[varBsBtnFocusBoxShadowRgb]: '82, 82, 82',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#292929',
		[varBsBtnActiveBorderColor]: '#262626',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#333',
		[varBsBtnDisabledBorderColor]: '#333',
	},
})

globalStyle(`${sketchyScope}${btnSecondary}`, {
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

globalStyle(`${sketchyScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#28a745',
		[varBsBtnBorderColor]: '#28a745',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#228e3b',
		[varBsBtnHoverBorderColor]: '#208637',
		[varBsBtnFocusBoxShadowRgb]: '72, 180, 97',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#208637',
		[varBsBtnActiveBorderColor]: '#1e7d34',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#28a745',
		[varBsBtnDisabledBorderColor]: '#28a745',
	},
})

globalStyle(`${sketchyScope}${btnInfo}`, {
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

globalStyle(`${sketchyScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ffc107',
		[varBsBtnBorderColor]: '#ffc107',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d9a406',
		[varBsBtnHoverBorderColor]: '#cc9a06',
		[varBsBtnFocusBoxShadowRgb]: '255, 202, 44',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc9a06',
		[varBsBtnActiveBorderColor]: '#bf9105',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ffc107',
		[varBsBtnDisabledBorderColor]: '#ffc107',
	},
})

globalStyle(`${sketchyScope}${btnDanger}`, {
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

globalStyle(`${sketchyScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#fff',
		[varBsBtnBorderColor]: '#fff',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d9d9d9',
		[varBsBtnHoverBorderColor]: '#cccccc',
		[varBsBtnFocusBoxShadowRgb]: '217, 217, 217',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cccccc',
		[varBsBtnActiveBorderColor]: '#bfbfbf',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#fff',
		[varBsBtnDisabledBorderColor]: '#fff',
	},
})

globalStyle(`${sketchyScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#555',
		[varBsBtnBorderColor]: '#555',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#6f6f6f',
		[varBsBtnHoverBorderColor]: '#666666',
		[varBsBtnFocusBoxShadowRgb]: '111, 111, 111',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#777777',
		[varBsBtnActiveBorderColor]: '#666666',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#555',
		[varBsBtnDisabledBorderColor]: '#555',
	},
})

globalStyle(`${sketchyScope}${btnOutlinePrimary}`, {
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

globalStyle(`${sketchyScope}${btnOutlineSecondary}`, {
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

globalStyle(`${sketchyScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#28a745',
		[varBsBtnBorderColor]: '#28a745',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#28a745',
		[varBsBtnHoverBorderColor]: '#28a745',
		[varBsBtnFocusBoxShadowRgb]: '40, 167, 69',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#28a745',
		[varBsBtnActiveBorderColor]: '#28a745',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#28a745',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#28a745',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${sketchyScope}${btnOutlineInfo}`, {
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

globalStyle(`${sketchyScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ffc107',
		[varBsBtnBorderColor]: '#ffc107',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ffc107',
		[varBsBtnHoverBorderColor]: '#ffc107',
		[varBsBtnFocusBoxShadowRgb]: '255, 193, 7',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ffc107',
		[varBsBtnActiveBorderColor]: '#ffc107',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ffc107',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ffc107',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${sketchyScope}${btnOutlineDanger}`, {
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

globalStyle(`${sketchyScope}${btnOutlineLight}`, {
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

globalStyle(`${sketchyScope}${btnOutlineDark}`, {
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

globalStyle(`${sketchyScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '82, 82, 82',
	},
	textDecoration: 'underline',
})

globalStyle(`${sketchyScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${sketchyScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${sketchyScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${sketchyScope}${btnGroupLg} > ${sketchyScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${sketchyScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${sketchyScope}${btnGroupSm} > ${sketchyScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btnCheck}:focus + ${sketchyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btnCheck}:focus + ${sketchyScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}:not(${btnCheck}:first-child) + ${sketchyScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btnGroup}:not(:last-child) > ${sketchyScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}:not(${btnCheck}) + ${sketchyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btnGroup}:not(:first-child) > ${sketchyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${sketchyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${sketchyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${sketchyScope}${dropup} ${sketchyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${sketchyScope}${dropend} ${sketchyScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${sketchyScope}${dropstart} ${sketchyScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${sketchyScope}${btnSm} + ${sketchyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${sketchyScope}${btnGroupSm} > ${sketchyScope}${btn} + ${sketchyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${sketchyScope}${btnLg} + ${sketchyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${sketchyScope}${btnGroupLg} > ${sketchyScope}${btn} + ${sketchyScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btn}`, {
	width: '100%',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btnGroup}:not(:last-child) > ${sketchyScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}:not(${btnCheck}) + ${sketchyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${sketchyScope}${btnGroupVertical} > ${sketchyScope}${btnGroup}:not(:first-child) > ${sketchyScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${sketchyScope}${alertDismissible} ${sketchyScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${sketchyScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: 'inherit',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'inherit\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '1',
		[varBsBtnCloseHoverOpacity]: '1',
		[varBsBtnCloseFocusShadow]: 'none',
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
	borderRadius: '25px',
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${sketchyScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${sketchyScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${sketchyScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${sketchyScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${sketchyScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${sketchyScope}${toastHeader} ${sketchyScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${sketchyScope}${modalHeader} ${sketchyScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${sketchyScope}${offcanvasHeader} ${sketchyScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${sketchyScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${sketchyScope}${btn}`, {
	textDecoration: 'none',
	borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
})

globalStyle(`${sketchyScope}${btnLg}`, {
	borderRadius: '55px 225px 15px 25px/25px 25px 35px 355px',
})

globalStyle(`${sketchyScope}${btnGroupLg} > ${sketchyScope}${btn}`, {
	borderRadius: '55px 225px 15px 25px/25px 25px 35px 355px',
})

globalStyle(`${sketchyScope}${btnSm}`, {
	borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
})

globalStyle(`${sketchyScope}${btnGroupSm} > ${sketchyScope}${btn}`, {
	borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
})

globalStyle(`${sketchyScope}${btnCheck}`, {
	display: 'inline-block',
	opacity: '0',
})

globalStyle(`${sketchyScope}[data-bs-theme=dark] ${sketchyScope}${btnPrimary}`, {
	vars: {
		[varBsBtnBg]: '#f8f9fa',
		[varBsBtnHoverBg]: '#dee2e6',
		[varBsBtnActiveBg]: '#ccc',
		[varBsBtnDisabledBg]: '#aaa',
		[varBsBtnColor]: '#000',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnDisabledColor]: '#000',
	},
})

globalStyle(`${sketchyScope}[data-bs-theme=dark] ${sketchyScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnHoverBg]: '#dee2e6',
		[varBsBtnActiveBg]: '#f8f9fa',
		[varBsBtnDisabledBg]: '#aaa',
		[varBsBtnBorderColor]: '#f8f9fa',
		[varBsBtnHoverBorderColor]: '#dee2e6',
		[varBsBtnActiveBorderColor]: '#f8f9fa',
		[varBsBtnDisabledBorderColor]: '#aaa',
		[varBsBtnColor]: '#f8f9fa',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnDisabledColor]: '#000',
	},
})

globalStyle(`${sketchyScope}[data-bs-theme=dark] ${sketchyScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
	},
})

globalStyle(`${sketchyScope}[data-bs-theme=dark] ${sketchyScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
	},
})

globalStyle(`${sketchyScope}${alert} ${sketchyScope}${btnClose}::before`, {
	color: 'inherit',
})

globalStyle(`${sketchyScope}${btnClose}`, {
	backgroundImage: 'none',
})

globalStyle(`${sketchyScope}${btnClose}::before`, {
	position: 'absolute',
	top: '0.8rem',
	right: '1rem',
	content: '"X"',
})

globalStyle(`${sketchyScope}${toastHeader} ${sketchyScope}${btnClose}::before`, {
	position: 'static',
	top: 'auto',
	right: 'auto',
})
