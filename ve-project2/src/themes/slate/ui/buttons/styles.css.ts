import { globalStyle } from '@vanilla-extract/css'
import { slateScope } from '../../scope.css'

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

globalStyle(`${slateScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${slateScope}${btnCheck}[disabled] + ${slateScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${slateScope}${btnCheck}:disabled + ${slateScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${slateScope}${inputGroup} ${slateScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${slateScope}${inputGroup} ${slateScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${slateScope}${inputGroupLg} > ${slateScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${slateScope}${inputGroupSm} > ${slateScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${slateScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1rem',
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

globalStyle(`${slateScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${slateScope}${btnCheck} + ${slateScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${slateScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${slateScope}${btnCheck}:focus-visible + ${slateScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${slateScope}${btnCheck}:checked + ${slateScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${slateScope}:not(${btnCheck}) + ${slateScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${slateScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${slateScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${slateScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${slateScope}${btnCheck}:checked + ${slateScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${slateScope}:not(${btnCheck}) + ${slateScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${slateScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${slateScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${slateScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${slateScope}${btnCheck}:checked:focus-visible + ${slateScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${slateScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${slateScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${slateScope}${fieldset}:disabled ${slateScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${slateScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3a3f44',
		[varBsBtnBorderColor]: '#3a3f44',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#31363a',
		[varBsBtnHoverBorderColor]: '#2e3236',
		[varBsBtnFocusBoxShadowRgb]: '88, 92, 96',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2e3236',
		[varBsBtnActiveBorderColor]: '#2c2f33',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3a3f44',
		[varBsBtnDisabledBorderColor]: '#3a3f44',
	},
})

globalStyle(`${slateScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#7a8288',
		[varBsBtnBorderColor]: '#7a8288',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#686f74',
		[varBsBtnHoverBorderColor]: '#62686d',
		[varBsBtnFocusBoxShadowRgb]: '142, 149, 154',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#62686d',
		[varBsBtnActiveBorderColor]: '#5c6266',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#7a8288',
		[varBsBtnDisabledBorderColor]: '#7a8288',
	},
})

globalStyle(`${slateScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#62c462',
		[varBsBtnBorderColor]: '#62c462',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#53a753',
		[varBsBtnHoverBorderColor]: '#4e9d4e',
		[varBsBtnFocusBoxShadowRgb]: '122, 205, 122',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4e9d4e',
		[varBsBtnActiveBorderColor]: '#4a934a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#62c462',
		[varBsBtnDisabledBorderColor]: '#62c462',
	},
})

globalStyle(`${slateScope}${btnInfo}`, {
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

globalStyle(`${slateScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f89406',
		[varBsBtnBorderColor]: '#f89406',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d37e05',
		[varBsBtnHoverBorderColor]: '#c67605',
		[varBsBtnFocusBoxShadowRgb]: '249, 164, 43',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c67605',
		[varBsBtnActiveBorderColor]: '#ba6f05',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f89406',
		[varBsBtnDisabledBorderColor]: '#f89406',
	},
})

globalStyle(`${slateScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ee5f5b',
		[varBsBtnBorderColor]: '#ee5f5b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ca514d',
		[varBsBtnHoverBorderColor]: '#be4c49',
		[varBsBtnFocusBoxShadowRgb]: '241, 119, 116',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#be4c49',
		[varBsBtnActiveBorderColor]: '#b34744',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ee5f5b',
		[varBsBtnDisabledBorderColor]: '#ee5f5b',
	},
})

globalStyle(`${slateScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#e9ecef',
		[varBsBtnBorderColor]: '#e9ecef',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#c6c9cb',
		[varBsBtnHoverBorderColor]: '#babdbf',
		[varBsBtnFocusBoxShadowRgb]: '198, 201, 203',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#babdbf',
		[varBsBtnActiveBorderColor]: '#afb1b3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#e9ecef',
		[varBsBtnDisabledBorderColor]: '#e9ecef',
	},
})

globalStyle(`${slateScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#272b30',
		[varBsBtnBorderColor]: '#272b30',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#474b4f',
		[varBsBtnHoverBorderColor]: '#3d4045',
		[varBsBtnFocusBoxShadowRgb]: '71, 75, 79',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#525559',
		[varBsBtnActiveBorderColor]: '#3d4045',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#272b30',
		[varBsBtnDisabledBorderColor]: '#272b30',
	},
})

globalStyle(`${slateScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#3a3f44',
		[varBsBtnBorderColor]: '#3a3f44',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3a3f44',
		[varBsBtnHoverBorderColor]: '#3a3f44',
		[varBsBtnFocusBoxShadowRgb]: '58, 63, 68',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3a3f44',
		[varBsBtnActiveBorderColor]: '#3a3f44',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#3a3f44',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3a3f44',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${slateScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#7a8288',
		[varBsBtnBorderColor]: '#7a8288',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#7a8288',
		[varBsBtnHoverBorderColor]: '#7a8288',
		[varBsBtnFocusBoxShadowRgb]: '122, 130, 136',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#7a8288',
		[varBsBtnActiveBorderColor]: '#7a8288',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#7a8288',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#7a8288',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${slateScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#62c462',
		[varBsBtnBorderColor]: '#62c462',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#62c462',
		[varBsBtnHoverBorderColor]: '#62c462',
		[varBsBtnFocusBoxShadowRgb]: '98, 196, 98',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#62c462',
		[varBsBtnActiveBorderColor]: '#62c462',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#62c462',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#62c462',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${slateScope}${btnOutlineInfo}`, {
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

globalStyle(`${slateScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f89406',
		[varBsBtnBorderColor]: '#f89406',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f89406',
		[varBsBtnHoverBorderColor]: '#f89406',
		[varBsBtnFocusBoxShadowRgb]: '248, 148, 6',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f89406',
		[varBsBtnActiveBorderColor]: '#f89406',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f89406',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f89406',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${slateScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#ee5f5b',
		[varBsBtnBorderColor]: '#ee5f5b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ee5f5b',
		[varBsBtnHoverBorderColor]: '#ee5f5b',
		[varBsBtnFocusBoxShadowRgb]: '238, 95, 91',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ee5f5b',
		[varBsBtnActiveBorderColor]: '#ee5f5b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ee5f5b',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ee5f5b',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${slateScope}${btnOutlineLight}`, {
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

globalStyle(`${slateScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#272b30',
		[varBsBtnBorderColor]: '#272b30',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#272b30',
		[varBsBtnHoverBorderColor]: '#272b30',
		[varBsBtnFocusBoxShadowRgb]: '39, 43, 48',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#272b30',
		[varBsBtnActiveBorderColor]: '#272b30',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#272b30',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#272b30',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${slateScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#7a8288',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '217, 217, 217',
	},
	textDecoration: 'underline',
})

globalStyle(`${slateScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${slateScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${slateScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${slateScope}${btnGroupLg} > ${slateScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${slateScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${slateScope}${btnGroupSm} > ${slateScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btnCheck}:checked + ${slateScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btnCheck}:focus + ${slateScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btnCheck}:checked + ${slateScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btnCheck}:focus + ${slateScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}:not(${btnCheck}:first-child) + ${slateScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btnGroup}:not(:last-child) > ${slateScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}:not(${btnCheck}) + ${slateScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btnGroup}:not(:first-child) > ${slateScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${slateScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${slateScope}${btnSm} + ${slateScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${slateScope}${btnGroupSm} > ${slateScope}${btn} + ${slateScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${slateScope}${btnLg} + ${slateScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${slateScope}${btnGroupLg} > ${slateScope}${btn} + ${slateScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btn}`, {
	width: '100%',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btnGroup}:not(:last-child) > ${slateScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}:not(${btnCheck}) + ${slateScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${slateScope}${btnGroupVertical} > ${slateScope}${btnGroup}:not(:first-child) > ${slateScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${slateScope}${alertDismissible} ${slateScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${slateScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(58, 63, 68, 0.25)',
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

globalStyle(`${slateScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${slateScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${slateScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${slateScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${slateScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${slateScope}${toastHeader} ${slateScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${slateScope}${modalHeader} ${slateScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${slateScope}${offcanvasHeader} ${slateScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${slateScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${slateScope}${btn}`, {
	textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btn}:not([disabled]):not(${disabled})${active}`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
	boxShadow: 'none',
})

globalStyle(`${slateScope}${btn}${disabled}`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
	boxShadow: 'none',
})

globalStyle(`${slateScope}${btn}:hover`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btn}:focus`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btn}:not([disabled]):not(${disabled}):active`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btn}:not([disabled]):not(${disabled}):active:hover`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btn}:not([disabled]):not(${disabled})${active}:hover`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btnPrimary}`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnPrimary}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnPrimary}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#25282c, #292c30 40%, #2b2f32)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnPrimary}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#25282c, #292c30 40%, #2b2f32)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSecondary}`, {
	backgroundImage: 'linear-gradient(#81888e, #7a8288 20%, #62686d)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSecondary}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#666d72, #6e757a 40%, #737a80)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSecondary}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#4e5357, #555b5f 40%, #5a6065)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSecondary}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#4e5357, #555b5f 40%, #5a6065)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSuccess}`, {
	backgroundImage: 'linear-gradient(#6ac76a, #62c462 20%, #4e9d4e)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSuccess}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#52a552, #58b058 40%, #5cb85c)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSuccess}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#3f7d3f, #458945 40%, #499149)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnSuccess}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#3f7d3f, #458945 40%, #499149)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnInfo}`, {
	backgroundImage: 'linear-gradient(#63c3e0, #5bc0de 20%, #499ab2)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnInfo}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#4ca1ba, #52adc8 40%, #56b4d1)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnInfo}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#3a7b8e, #40869b 40%, #438ea4)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnInfo}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#3a7b8e, #40869b 40%, #438ea4)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnWarning}`, {
	backgroundImage: 'linear-gradient(#f89912, #f89406 20%, #c67605)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnWarning}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#d07c05, #df8505 40%, #e98b06)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnWarning}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#9f5f04, #ae6804 40%, #b86e04)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnWarning}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#9f5f04, #ae6804 40%, #b86e04)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDanger}`, {
	backgroundImage: 'linear-gradient(#ef6763, #ee5f5b 20%, #be4c49)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDanger}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#c8504c, #d65652 40%, #e05956)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDanger}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#983d3a, #a74340 40%, #b04643)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDanger}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#983d3a, #a74340 40%, #b04643)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnLight}`, {
	backgroundImage: 'linear-gradient(#eaedf0, #e9ecef 20%, #babdbf)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnLight}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#c4c6c9, #d2d4d7 40%, #dbdee1)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnLight}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#959799, #a3a5a7 40%, #acafb1)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnLight}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#959799, #a3a5a7 40%, #acafb1)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDark}`, {
	backgroundImage: 'linear-gradient(#32363a, #272b30 20%, #1f2226)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDark}:not([disabled]):not(${disabled}):hover`, {
	backgroundImage: 'linear-gradient(#212428, #23272b 40%, #25282d)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDark}:not([disabled]):not(${disabled}):active:hover`, {
	backgroundImage: 'linear-gradient(#191c1f, #1b1e22 40%, #1d2024)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnDark}:not([disabled]):not(${disabled})${active}:hover`, {
	backgroundImage: 'linear-gradient(#191c1f, #1b1e22 40%, #1d2024)',
	filter: 'none',
})

globalStyle(`${slateScope}${btnOutlinePrimary}`, {
	color: '#fff',
})

globalStyle(`${slateScope}${btnLink}`, {
	borderColor: 'transparent',
})

globalStyle(`${slateScope}${btnLink}:hover`, {
	borderColor: 'transparent',
})

globalStyle(`${slateScope}${btnGroup} ${slateScope}${btn}${active}`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btnGroupVertical} ${slateScope}${btn}${active}`, {
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btnCheck}:checked + ${slateScope}${btn}`, {
	color: '#fff',
	borderColor: 'rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${btnCheck} + ${slateScope}${btn}:hover`, {
	color: '#fff',
	borderColor: 'rgba(0, 0, 0, 0.6)',
})
