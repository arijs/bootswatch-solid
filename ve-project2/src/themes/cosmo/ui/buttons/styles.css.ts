import { globalStyle } from '@vanilla-extract/css'
import { cosmoScope } from '../../scope.css'

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

globalStyle(`${cosmoScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${cosmoScope}${btnCheck}[disabled] + ${cosmoScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${cosmoScope}${btnCheck}:disabled + ${cosmoScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${cosmoScope}${inputGroup} ${cosmoScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${cosmoScope}${inputGroup} ${cosmoScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${cosmoScope}${inputGroupLg} > ${cosmoScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
})

globalStyle(`${cosmoScope}${inputGroupSm} > ${cosmoScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
})

globalStyle(`${cosmoScope}${btn}`, {
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
	backgroundColor: varBsBtnBg,
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${cosmoScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cosmoScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${cosmoScope}${btnCheck} + ${cosmoScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${cosmoScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cosmoScope}${btnCheck}:focus-visible + ${cosmoScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cosmoScope}${btnCheck}:checked + ${cosmoScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cosmoScope}:not(${btnCheck}) + ${cosmoScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cosmoScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cosmoScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cosmoScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cosmoScope}${btnCheck}:checked + ${cosmoScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cosmoScope}:not(${btnCheck}) + ${cosmoScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cosmoScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cosmoScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cosmoScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cosmoScope}${btnCheck}:checked:focus-visible + ${cosmoScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cosmoScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${cosmoScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${cosmoScope}${fieldset}:disabled ${cosmoScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${cosmoScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#2780e3',
		[varBsBtnBorderColor]: '#2780e3',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#216dc1',
		[varBsBtnHoverBorderColor]: '#1f66b6',
		[varBsBtnFocusBoxShadowRgb]: '71, 147, 231',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1f66b6',
		[varBsBtnActiveBorderColor]: '#1d60aa',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#2780e3',
		[varBsBtnDisabledBorderColor]: '#2780e3',
	},
})

globalStyle(`${cosmoScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#373a3c',
		[varBsBtnBorderColor]: '#373a3c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2f3133',
		[varBsBtnHoverBorderColor]: '#2c2e30',
		[varBsBtnFocusBoxShadowRgb]: '85, 88, 89',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2c2e30',
		[varBsBtnActiveBorderColor]: '#292c2d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#373a3c',
		[varBsBtnDisabledBorderColor]: '#373a3c',
	},
})

globalStyle(`${cosmoScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3fb618',
		[varBsBtnBorderColor]: '#3fb618',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#369b14',
		[varBsBtnHoverBorderColor]: '#329213',
		[varBsBtnFocusBoxShadowRgb]: '92, 193, 59',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#329213',
		[varBsBtnActiveBorderColor]: '#2f8912',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3fb618',
		[varBsBtnDisabledBorderColor]: '#3fb618',
	},
})

globalStyle(`${cosmoScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#9954bb',
		[varBsBtnBorderColor]: '#9954bb',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#82479f',
		[varBsBtnHoverBorderColor]: '#7a4396',
		[varBsBtnFocusBoxShadowRgb]: '168, 110, 197',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#7a4396',
		[varBsBtnActiveBorderColor]: '#733f8c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#9954bb',
		[varBsBtnDisabledBorderColor]: '#9954bb',
	},
})

globalStyle(`${cosmoScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ff7518',
		[varBsBtnBorderColor]: '#ff7518',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d96314',
		[varBsBtnHoverBorderColor]: '#cc5e13',
		[varBsBtnFocusBoxShadowRgb]: '255, 138, 59',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc5e13',
		[varBsBtnActiveBorderColor]: '#bf5812',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ff7518',
		[varBsBtnDisabledBorderColor]: '#ff7518',
	},
})

globalStyle(`${cosmoScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ff0039',
		[varBsBtnBorderColor]: '#ff0039',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d90030',
		[varBsBtnHoverBorderColor]: '#cc002e',
		[varBsBtnFocusBoxShadowRgb]: '255, 38, 87',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc002e',
		[varBsBtnActiveBorderColor]: '#bf002b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ff0039',
		[varBsBtnDisabledBorderColor]: '#ff0039',
	},
})

globalStyle(`${cosmoScope}${btnLight}`, {
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

globalStyle(`${cosmoScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#373a3c',
		[varBsBtnBorderColor]: '#373a3c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#555859',
		[varBsBtnHoverBorderColor]: '#4b4e50',
		[varBsBtnFocusBoxShadowRgb]: '85, 88, 89',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5f6163',
		[varBsBtnActiveBorderColor]: '#4b4e50',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#373a3c',
		[varBsBtnDisabledBorderColor]: '#373a3c',
	},
})

globalStyle(`${cosmoScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#2780e3',
		[varBsBtnBorderColor]: '#2780e3',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2780e3',
		[varBsBtnHoverBorderColor]: '#2780e3',
		[varBsBtnFocusBoxShadowRgb]: '39, 128, 227',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2780e3',
		[varBsBtnActiveBorderColor]: '#2780e3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#2780e3',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#2780e3',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cosmoScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#373a3c',
		[varBsBtnBorderColor]: '#373a3c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#373a3c',
		[varBsBtnHoverBorderColor]: '#373a3c',
		[varBsBtnFocusBoxShadowRgb]: '55, 58, 60',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#373a3c',
		[varBsBtnActiveBorderColor]: '#373a3c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#373a3c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#373a3c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cosmoScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#3fb618',
		[varBsBtnBorderColor]: '#3fb618',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3fb618',
		[varBsBtnHoverBorderColor]: '#3fb618',
		[varBsBtnFocusBoxShadowRgb]: '63, 182, 24',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3fb618',
		[varBsBtnActiveBorderColor]: '#3fb618',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#3fb618',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3fb618',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cosmoScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#9954bb',
		[varBsBtnBorderColor]: '#9954bb',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#9954bb',
		[varBsBtnHoverBorderColor]: '#9954bb',
		[varBsBtnFocusBoxShadowRgb]: '153, 84, 187',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#9954bb',
		[varBsBtnActiveBorderColor]: '#9954bb',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#9954bb',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#9954bb',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cosmoScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ff7518',
		[varBsBtnBorderColor]: '#ff7518',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ff7518',
		[varBsBtnHoverBorderColor]: '#ff7518',
		[varBsBtnFocusBoxShadowRgb]: '255, 117, 24',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ff7518',
		[varBsBtnActiveBorderColor]: '#ff7518',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ff7518',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ff7518',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cosmoScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#ff0039',
		[varBsBtnBorderColor]: '#ff0039',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ff0039',
		[varBsBtnHoverBorderColor]: '#ff0039',
		[varBsBtnFocusBoxShadowRgb]: '255, 0, 57',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ff0039',
		[varBsBtnActiveBorderColor]: '#ff0039',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ff0039',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ff0039',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cosmoScope}${btnOutlineLight}`, {
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

globalStyle(`${cosmoScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#373a3c',
		[varBsBtnBorderColor]: '#373a3c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#373a3c',
		[varBsBtnHoverBorderColor]: '#373a3c',
		[varBsBtnFocusBoxShadowRgb]: '55, 58, 60',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#373a3c',
		[varBsBtnActiveBorderColor]: '#373a3c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#373a3c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#373a3c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${cosmoScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '71, 147, 231',
	},
	textDecoration: 'underline',
})

globalStyle(`${cosmoScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${cosmoScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${cosmoScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${cosmoScope}${btnGroupLg} > ${cosmoScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${cosmoScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${cosmoScope}${btnGroupSm} > ${cosmoScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${cosmoScope}${btnGroupVertical} > ${cosmoScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btnCheck}:checked + ${cosmoScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btnCheck}:focus + ${cosmoScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroupVertical} > ${cosmoScope}${btnCheck}:checked + ${cosmoScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroupVertical} > ${cosmoScope}${btnCheck}:focus + ${cosmoScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroupVertical} > ${cosmoScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroupVertical} > ${cosmoScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroupVertical} > ${cosmoScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroupVertical} > ${cosmoScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${cosmoScope}${btnGroup} > ${cosmoScope}:not(${btnCheck}:first-child) + ${cosmoScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${cosmoScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${cosmoScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${cosmoScope}${dropup} ${cosmoScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${cosmoScope}${dropend} ${cosmoScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${cosmoScope}${dropstart} ${cosmoScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${cosmoScope}${btnSm} + ${cosmoScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${cosmoScope}${btnGroupSm} > ${cosmoScope}${btn} + ${cosmoScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${cosmoScope}${btnLg} + ${cosmoScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${cosmoScope}${btnGroupLg} > ${cosmoScope}${btn} + ${cosmoScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${cosmoScope}${btnGroupVertical} > ${cosmoScope}${btn}`, {
	width: '100%',
})

globalStyle(`${cosmoScope}${btnGroupVertical} > ${cosmoScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${cosmoScope}${alertDismissible} ${cosmoScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${cosmoScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(39, 128, 227, 0.25)',
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
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${cosmoScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${cosmoScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${cosmoScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${cosmoScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${cosmoScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${cosmoScope}${toastHeader} ${cosmoScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${cosmoScope}${modalHeader} ${cosmoScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${cosmoScope}${offcanvasHeader} ${cosmoScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${cosmoScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})
