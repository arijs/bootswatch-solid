import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

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
	bgLight,
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

globalStyle(`${quartzScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${quartzScope}${btnCheck}[disabled] + ${quartzScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${quartzScope}${btnCheck}:disabled + ${quartzScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${quartzScope}${inputGroup} ${quartzScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${quartzScope}${inputGroup} ${quartzScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${quartzScope}${inputGroupLg} > ${quartzScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}${inputGroupSm} > ${quartzScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1.5rem',
		[varBsBtnPaddingY]: '0.75rem',
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
		[varBsBtnBoxShadow]: '1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
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

globalStyle(`${quartzScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${quartzScope}${btnCheck} + ${quartzScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${quartzScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btnCheck}:focus-visible + ${quartzScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btnCheck}:checked + ${quartzScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}:not(${btnCheck}) + ${quartzScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}${btnCheck}:checked + ${quartzScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}:not(${btnCheck}) + ${quartzScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btnCheck}:checked:focus-visible + ${quartzScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${quartzScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${quartzScope}${fieldset}:disabled ${quartzScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${quartzScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e83283',
		[varBsBtnBorderColor]: '#e83283',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c52b6f',
		[varBsBtnHoverBorderColor]: '#ba2869',
		[varBsBtnFocusBoxShadowRgb]: '235, 81, 150',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ba2869',
		[varBsBtnActiveBorderColor]: '#ae2662',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e83283',
		[varBsBtnDisabledBorderColor]: '#e83283',
	},
})

globalStyle(`${quartzScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: 'rgba(255, 255, 255, 0.49)',
		[varBsBtnHoverBorderColor]: 'rgba(255, 255, 255, 0.46)',
		[varBsBtnFocusBoxShadowRgb]: '149, 149, 149',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: 'rgba(255, 255, 255, 0.52)',
		[varBsBtnActiveBorderColor]: 'rgba(255, 255, 255, 0.46)',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnDisabledBorderColor]: 'rgba(255, 255, 255, 0.4)',
	},
})

globalStyle(`${quartzScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#41d7a7',
		[varBsBtnBorderColor]: '#41d7a7',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#37b78e',
		[varBsBtnHoverBorderColor]: '#34ac86',
		[varBsBtnFocusBoxShadowRgb]: '94, 221, 180',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#34ac86',
		[varBsBtnActiveBorderColor]: '#31a17d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#41d7a7',
		[varBsBtnDisabledBorderColor]: '#41d7a7',
	},
})

globalStyle(`${quartzScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#39cbfb',
		[varBsBtnBorderColor]: '#39cbfb',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#30add5',
		[varBsBtnHoverBorderColor]: '#2ea2c9',
		[varBsBtnFocusBoxShadowRgb]: '87, 211, 252',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2ea2c9',
		[varBsBtnActiveBorderColor]: '#2b98bc',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#39cbfb',
		[varBsBtnDisabledBorderColor]: '#39cbfb',
	},
})

globalStyle(`${quartzScope}${btnWarning}`, {
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

globalStyle(`${quartzScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#fd7e14',
		[varBsBtnBorderColor]: '#fd7e14',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d76b11',
		[varBsBtnHoverBorderColor]: '#ca6510',
		[varBsBtnFocusBoxShadowRgb]: '253, 145, 55',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ca6510',
		[varBsBtnActiveBorderColor]: '#be5f0f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#fd7e14',
		[varBsBtnDisabledBorderColor]: '#fd7e14',
	},
})

globalStyle(`${quartzScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#e9e9e8',
		[varBsBtnBorderColor]: '#e9e9e8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c6c6c5',
		[varBsBtnHoverBorderColor]: '#bababa',
		[varBsBtnFocusBoxShadowRgb]: '198, 198, 197',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#bababa',
		[varBsBtnActiveBorderColor]: '#afafae',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#e9e9e8',
		[varBsBtnDisabledBorderColor]: '#e9e9e8',
	},
})

globalStyle(`${quartzScope}${btnDark}`, {
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

globalStyle(`${quartzScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#e83283',
		[varBsBtnBorderColor]: '#e83283',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e83283',
		[varBsBtnHoverBorderColor]: '#e83283',
		[varBsBtnFocusBoxShadowRgb]: '232, 50, 131',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e83283',
		[varBsBtnActiveBorderColor]: '#e83283',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e83283',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e83283',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnHoverBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnFocusBoxShadowRgb]: '255, 255, 255',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnActiveBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: 'rgba(255, 255, 255, 0.4)',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#41d7a7',
		[varBsBtnBorderColor]: '#41d7a7',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#41d7a7',
		[varBsBtnHoverBorderColor]: '#41d7a7',
		[varBsBtnFocusBoxShadowRgb]: '65, 215, 167',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#41d7a7',
		[varBsBtnActiveBorderColor]: '#41d7a7',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#41d7a7',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#41d7a7',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#39cbfb',
		[varBsBtnBorderColor]: '#39cbfb',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#39cbfb',
		[varBsBtnHoverBorderColor]: '#39cbfb',
		[varBsBtnFocusBoxShadowRgb]: '57, 203, 251',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#39cbfb',
		[varBsBtnActiveBorderColor]: '#39cbfb',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#39cbfb',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#39cbfb',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineWarning}`, {
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

globalStyle(`${quartzScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#fd7e14',
		[varBsBtnBorderColor]: '#fd7e14',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#fd7e14',
		[varBsBtnHoverBorderColor]: '#fd7e14',
		[varBsBtnFocusBoxShadowRgb]: '253, 126, 20',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#fd7e14',
		[varBsBtnActiveBorderColor]: '#fd7e14',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fd7e14',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#fd7e14',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#e9e9e8',
		[varBsBtnBorderColor]: '#e9e9e8',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#e9e9e8',
		[varBsBtnHoverBorderColor]: '#e9e9e8',
		[varBsBtnFocusBoxShadowRgb]: '233, 233, 232',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#e9e9e8',
		[varBsBtnActiveBorderColor]: '#e9e9e8',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e9e9e8',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e9e9e8',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${quartzScope}${btnOutlineDark}`, {
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

globalStyle(`${quartzScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '217, 217, 217',
	},
	textDecoration: 'underline',
})

globalStyle(`${quartzScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${quartzScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${quartzScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${quartzScope}${btnGroupLg} > ${quartzScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${quartzScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${quartzScope}${btnGroupSm} > ${quartzScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnCheck}:checked + ${quartzScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnCheck}:focus + ${quartzScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnCheck}:checked + ${quartzScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnCheck}:focus + ${quartzScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}:not(${btnCheck}:first-child) + ${quartzScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnGroup}:not(:last-child) > ${quartzScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}:not(${btnCheck}) + ${quartzScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnGroup}:not(:first-child) > ${quartzScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${dropdownToggleSplit}`, {
	paddingRight: '1.125rem',
	paddingLeft: '1.125rem',
})

globalStyle(`${quartzScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${dropup} ${quartzScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${dropend} ${quartzScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${dropstart} ${quartzScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${quartzScope}${btnSm} + ${quartzScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${quartzScope}${btnGroupSm} > ${quartzScope}${btn} + ${quartzScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${quartzScope}${btnLg} + ${quartzScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${quartzScope}${btnGroupLg} > ${quartzScope}${btn} + ${quartzScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnGroup}:not(:last-child) > ${quartzScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}:not(${btnCheck}) + ${quartzScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btnGroup}:not(:first-child) > ${quartzScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${quartzScope}${alertDismissible} ${quartzScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '2.5rem 2rem',
})

globalStyle(`${quartzScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#fff',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(232, 50, 131, 0.25)',
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
	borderRadius: '0.5rem',
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${quartzScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${quartzScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${quartzScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${quartzScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${quartzScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${quartzScope}${toastHeader} ${quartzScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${quartzScope}${modalHeader} ${quartzScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${quartzScope}${offcanvasHeader} ${quartzScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${quartzScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${quartzScope}${btnSecondary}`, {
	color: '#fff',
	border: 'none',
})

globalStyle(`${quartzScope}${btnSecondary}:hover`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${btnSecondary}:focus`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${btnSecondary}${disabled}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btn}:not(:first-child)`, {
	marginLeft: '0',
})

globalStyle(`${quartzScope}${btnGroupVertical} > ${quartzScope}${btn}:not(:first-child)`, {
	marginTop: '0',
})

globalStyle(`${quartzScope}${bgLight} ${quartzScope}${btn}`, {
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
})
