import { globalStyle } from '@vanilla-extract/css'
import { pulseScope } from '../../scope.css'

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

globalStyle(`${pulseScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${pulseScope}${btnCheck}[disabled] + ${pulseScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${pulseScope}${btnCheck}:disabled + ${pulseScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${pulseScope}${inputGroup} ${pulseScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${pulseScope}${inputGroup} ${pulseScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${pulseScope}${inputGroupLg} > ${pulseScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
})

globalStyle(`${pulseScope}${inputGroupSm} > ${pulseScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
})

globalStyle(`${pulseScope}${btn}`, {
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

globalStyle(`${pulseScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${pulseScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${pulseScope}${btnCheck} + ${pulseScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${pulseScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${pulseScope}${btnCheck}:focus-visible + ${pulseScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${pulseScope}${btnCheck}:checked + ${pulseScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${pulseScope}:not(${btnCheck}) + ${pulseScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${pulseScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${pulseScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${pulseScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${pulseScope}${btnCheck}:checked + ${pulseScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${pulseScope}:not(${btnCheck}) + ${pulseScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${pulseScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${pulseScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${pulseScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${pulseScope}${btnCheck}:checked:focus-visible + ${pulseScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${pulseScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${pulseScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${pulseScope}${fieldset}:disabled ${pulseScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${pulseScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#593196',
		[varBsBtnBorderColor]: '#593196',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4c2a80',
		[varBsBtnHoverBorderColor]: '#472778',
		[varBsBtnFocusBoxShadowRgb]: '114, 80, 166',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#472778',
		[varBsBtnActiveBorderColor]: '#432571',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#593196',
		[varBsBtnDisabledBorderColor]: '#593196',
	},
})

globalStyle(`${pulseScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#a991d4',
		[varBsBtnBorderColor]: '#a991d4',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#907bb4',
		[varBsBtnHoverBorderColor]: '#8774aa',
		[varBsBtnFocusBoxShadowRgb]: '182, 162, 218',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#8774aa',
		[varBsBtnActiveBorderColor]: '#7f6d9f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#a991d4',
		[varBsBtnDisabledBorderColor]: '#a991d4',
	},
})

globalStyle(`${pulseScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#13b955',
		[varBsBtnBorderColor]: '#13b955',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#109d48',
		[varBsBtnHoverBorderColor]: '#0f9444',
		[varBsBtnFocusBoxShadowRgb]: '54, 196, 111',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#0f9444',
		[varBsBtnActiveBorderColor]: '#0e8b40',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#13b955',
		[varBsBtnDisabledBorderColor]: '#13b955',
	},
})

globalStyle(`${pulseScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#009cdc',
		[varBsBtnBorderColor]: '#009cdc',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#0085bb',
		[varBsBtnHoverBorderColor]: '#007db0',
		[varBsBtnFocusBoxShadowRgb]: '38, 171, 225',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#007db0',
		[varBsBtnActiveBorderColor]: '#0075a5',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#009cdc',
		[varBsBtnDisabledBorderColor]: '#009cdc',
	},
})

globalStyle(`${pulseScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#efa31d',
		[varBsBtnBorderColor]: '#efa31d',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cb8b19',
		[varBsBtnHoverBorderColor]: '#bf8217',
		[varBsBtnFocusBoxShadowRgb]: '241, 177, 63',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#bf8217',
		[varBsBtnActiveBorderColor]: '#b37a16',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#efa31d',
		[varBsBtnDisabledBorderColor]: '#efa31d',
	},
})

globalStyle(`${pulseScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#fc3939',
		[varBsBtnBorderColor]: '#fc3939',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d63030',
		[varBsBtnHoverBorderColor]: '#ca2e2e',
		[varBsBtnFocusBoxShadowRgb]: '252, 87, 87',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ca2e2e',
		[varBsBtnActiveBorderColor]: '#bd2b2b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#fc3939',
		[varBsBtnDisabledBorderColor]: '#fc3939',
	},
})

globalStyle(`${pulseScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f9f8fc',
		[varBsBtnBorderColor]: '#f9f8fc',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d4d3d6',
		[varBsBtnHoverBorderColor]: '#c7c6ca',
		[varBsBtnFocusBoxShadowRgb]: '212, 211, 214',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#c7c6ca',
		[varBsBtnActiveBorderColor]: '#bbbabd',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f9f8fc',
		[varBsBtnDisabledBorderColor]: '#f9f8fc',
	},
})

globalStyle(`${pulseScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#17141f',
		[varBsBtnBorderColor]: '#17141f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3a3741',
		[varBsBtnHoverBorderColor]: '#2e2c35',
		[varBsBtnFocusBoxShadowRgb]: '58, 55, 65',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#45434c',
		[varBsBtnActiveBorderColor]: '#2e2c35',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#17141f',
		[varBsBtnDisabledBorderColor]: '#17141f',
	},
})

globalStyle(`${pulseScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#593196',
		[varBsBtnBorderColor]: '#593196',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#593196',
		[varBsBtnHoverBorderColor]: '#593196',
		[varBsBtnFocusBoxShadowRgb]: '89, 49, 150',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#593196',
		[varBsBtnActiveBorderColor]: '#593196',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#593196',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#593196',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${pulseScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#a991d4',
		[varBsBtnBorderColor]: '#a991d4',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#a991d4',
		[varBsBtnHoverBorderColor]: '#a991d4',
		[varBsBtnFocusBoxShadowRgb]: '169, 145, 212',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#a991d4',
		[varBsBtnActiveBorderColor]: '#a991d4',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#a991d4',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#a991d4',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${pulseScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#13b955',
		[varBsBtnBorderColor]: '#13b955',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#13b955',
		[varBsBtnHoverBorderColor]: '#13b955',
		[varBsBtnFocusBoxShadowRgb]: '19, 185, 85',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#13b955',
		[varBsBtnActiveBorderColor]: '#13b955',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#13b955',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#13b955',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${pulseScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#009cdc',
		[varBsBtnBorderColor]: '#009cdc',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#009cdc',
		[varBsBtnHoverBorderColor]: '#009cdc',
		[varBsBtnFocusBoxShadowRgb]: '0, 156, 220',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#009cdc',
		[varBsBtnActiveBorderColor]: '#009cdc',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#009cdc',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#009cdc',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${pulseScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#efa31d',
		[varBsBtnBorderColor]: '#efa31d',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#efa31d',
		[varBsBtnHoverBorderColor]: '#efa31d',
		[varBsBtnFocusBoxShadowRgb]: '239, 163, 29',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#efa31d',
		[varBsBtnActiveBorderColor]: '#efa31d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#efa31d',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#efa31d',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${pulseScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#fc3939',
		[varBsBtnBorderColor]: '#fc3939',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#fc3939',
		[varBsBtnHoverBorderColor]: '#fc3939',
		[varBsBtnFocusBoxShadowRgb]: '252, 57, 57',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#fc3939',
		[varBsBtnActiveBorderColor]: '#fc3939',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fc3939',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#fc3939',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${pulseScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#f9f8fc',
		[varBsBtnBorderColor]: '#f9f8fc',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f9f8fc',
		[varBsBtnHoverBorderColor]: '#f9f8fc',
		[varBsBtnFocusBoxShadowRgb]: '249, 248, 252',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f9f8fc',
		[varBsBtnActiveBorderColor]: '#f9f8fc',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f9f8fc',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f9f8fc',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${pulseScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#17141f',
		[varBsBtnBorderColor]: '#17141f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#17141f',
		[varBsBtnHoverBorderColor]: '#17141f',
		[varBsBtnFocusBoxShadowRgb]: '23, 20, 31',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#17141f',
		[varBsBtnActiveBorderColor]: '#17141f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#17141f',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#17141f',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${pulseScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '114, 80, 166',
	},
	textDecoration: 'underline',
})

globalStyle(`${pulseScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${pulseScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${pulseScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${pulseScope}${btnGroupLg} > ${pulseScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${pulseScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${pulseScope}${btnGroupSm} > ${pulseScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${pulseScope}${btnGroup} > ${pulseScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${pulseScope}${btnGroupVertical} > ${pulseScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${pulseScope}${btnGroup} > ${pulseScope}${btnCheck}:checked + ${pulseScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroup} > ${pulseScope}${btnCheck}:focus + ${pulseScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroup} > ${pulseScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroup} > ${pulseScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroup} > ${pulseScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroup} > ${pulseScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroupVertical} > ${pulseScope}${btnCheck}:checked + ${pulseScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroupVertical} > ${pulseScope}${btnCheck}:focus + ${pulseScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroupVertical} > ${pulseScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroupVertical} > ${pulseScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroupVertical} > ${pulseScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroupVertical} > ${pulseScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${pulseScope}${btnGroup} > ${pulseScope}:not(${btnCheck}:first-child) + ${pulseScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${pulseScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${pulseScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${pulseScope}${dropup} ${pulseScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${pulseScope}${dropend} ${pulseScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${pulseScope}${dropstart} ${pulseScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${pulseScope}${btnSm} + ${pulseScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${pulseScope}${btnGroupSm} > ${pulseScope}${btn} + ${pulseScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${pulseScope}${btnLg} + ${pulseScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${pulseScope}${btnGroupLg} > ${pulseScope}${btn} + ${pulseScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${pulseScope}${btnGroupVertical} > ${pulseScope}${btn}`, {
	width: '100%',
})

globalStyle(`${pulseScope}${btnGroupVertical} > ${pulseScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${pulseScope}${alertDismissible} ${pulseScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${pulseScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(89, 49, 150, 0.25)',
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

globalStyle(`${pulseScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${pulseScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${pulseScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${pulseScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${pulseScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${pulseScope}${toastHeader} ${pulseScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${pulseScope}${modalHeader} ${pulseScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${pulseScope}${offcanvasHeader} ${pulseScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${pulseScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${pulseScope}${btn}:focus`, {
	outline: 'none',
})

globalStyle(`${pulseScope}${btn}:active`, {
	outline: 'none',
})

globalStyle(`${pulseScope}${btn}:active:focus`, {
	outline: 'none',
})

globalStyle(`${pulseScope}${btn}${active}:focus`, {
	outline: 'none',
})

globalStyle(`${pulseScope}${btnSecondary}`, {
	color: '#17141f',
	backgroundColor: '#fff',
	borderColor: '#ccc',
})

globalStyle(`${pulseScope}${btnSecondary}:hover`, {
	color: '#17141f',
	backgroundColor: '#ededed',
	borderColor: '#adb5bd',
})

globalStyle(`${pulseScope}${btnSecondary}${disabled}`, {
	color: '#23202a',
	backgroundColor: '#fff',
	borderColor: '#cfcfcf',
})

globalStyle(`${pulseScope}${btnWarning}`, {
	color: '#fff',
})

globalStyle(`${pulseScope}${btnPrimary}:focus`, {
	boxShadow: '0 0 5px #6a46a1',
})

globalStyle(`${pulseScope}${btnSecondary}:focus`, {
	boxShadow: '0 0 5px #cbc8d0',
})

globalStyle(`${pulseScope}${btnSuccess}:focus`, {
	boxShadow: '0 0 5px #2bc066',
})

globalStyle(`${pulseScope}${btnInfo}:focus`, {
	boxShadow: '0 0 5px #1aa6e0',
})

globalStyle(`${pulseScope}${btnWarning}:focus`, {
	boxShadow: '0 0 5px #f1ac34',
})

globalStyle(`${pulseScope}${btnDanger}:focus`, {
	boxShadow: '0 0 5px #fc4d4d',
})

globalStyle(`${pulseScope}${btn}${disabled}:focus`, {
	boxShadow: 'none',
})
