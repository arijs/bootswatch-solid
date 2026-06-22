import { globalStyle } from '@vanilla-extract/css'
import { zephyrScope } from '../../scope.css'

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
	btnClose,
	btnCloseWhite,
	btnGroupLg,
	btnGroupSm,
	btnGroupVertical,
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
import { dropdownToggle } from '../../../../theme-contract/ui/dropdowns/contract.css'
import { modalHeader } from '../../../../theme-contract/ui/modal/contract.css'
import { show } from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${zephyrScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${zephyrScope}${btnCheck}[disabled] + ${zephyrScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${zephyrScope}${btnCheck}:disabled + ${zephyrScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${zephyrScope}${inputGroup} ${zephyrScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${zephyrScope}${inputGroup} ${zephyrScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${zephyrScope}${inputGroupLg} > ${zephyrScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${zephyrScope}${inputGroupSm} > ${zephyrScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${zephyrScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnFontFamily]: '',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnFontWeight]: '500',
		[varBsBtnLineHeight]: '1.5',
		[varBsBtnColor]: varBsBodyColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderWidth]: varBsBorderWidth,
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnBorderRadius]: varBsBorderRadius,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
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
	boxShadow: varBsBtnBoxShadow,
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${zephyrScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${zephyrScope}${btnCheck} + ${zephyrScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${zephyrScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: `${varBsBtnBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${zephyrScope}${btnCheck}:focus-visible + ${zephyrScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: `${varBsBtnBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${zephyrScope}${btnCheck}:checked + ${zephyrScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
	boxShadow: varBsBtnActiveBoxShadow,
})

globalStyle(`${zephyrScope}:not(${btnCheck}) + ${zephyrScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
	boxShadow: varBsBtnActiveBoxShadow,
})

globalStyle(`${zephyrScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
	boxShadow: varBsBtnActiveBoxShadow,
})

globalStyle(`${zephyrScope}${btnCheck}:checked + ${zephyrScope}${btn}:focus-visible`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${zephyrScope}:not(${btnCheck}) + ${zephyrScope}${btn}:active:focus-visible`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${zephyrScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${zephyrScope}${btnCheck}:checked:focus-visible + ${zephyrScope}${btn}`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${zephyrScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
	boxShadow: 'none',
})

globalStyle(`${zephyrScope}${fieldset}:disabled ${zephyrScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
	boxShadow: 'none',
})

globalStyle(`${zephyrScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3459e6',
		[varBsBtnBorderColor]: '#3459e6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2c4cc4',
		[varBsBtnHoverBorderColor]: '#2a47b8',
		[varBsBtnFocusBoxShadowRgb]: '82, 114, 234',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2a47b8',
		[varBsBtnActiveBorderColor]: '#2743ad',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3459e6',
		[varBsBtnDisabledBorderColor]: '#3459e6',
	},
})

globalStyle(`${zephyrScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#fff',
		[varBsBtnBorderColor]: '#fff',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: 'white',
		[varBsBtnHoverBorderColor]: 'white',
		[varBsBtnFocusBoxShadowRgb]: '217, 217, 217',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: 'white',
		[varBsBtnActiveBorderColor]: 'white',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#fff',
		[varBsBtnDisabledBorderColor]: '#fff',
	},
})

globalStyle(`${zephyrScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#2fb380',
		[varBsBtnBorderColor]: '#2fb380',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#28986d',
		[varBsBtnHoverBorderColor]: '#268f66',
		[varBsBtnFocusBoxShadowRgb]: '78, 190, 147',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#268f66',
		[varBsBtnActiveBorderColor]: '#238660',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#2fb380',
		[varBsBtnDisabledBorderColor]: '#2fb380',
	},
})

globalStyle(`${zephyrScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#287bb5',
		[varBsBtnBorderColor]: '#287bb5',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#22699a',
		[varBsBtnHoverBorderColor]: '#206291',
		[varBsBtnFocusBoxShadowRgb]: '72, 143, 192',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#206291',
		[varBsBtnActiveBorderColor]: '#1e5c88',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#287bb5',
		[varBsBtnDisabledBorderColor]: '#287bb5',
	},
})

globalStyle(`${zephyrScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f4bd61',
		[varBsBtnBorderColor]: '#f4bd61',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cfa152',
		[varBsBtnHoverBorderColor]: '#c3974e',
		[varBsBtnFocusBoxShadowRgb]: '246, 199, 121',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c3974e',
		[varBsBtnActiveBorderColor]: '#b78e49',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f4bd61',
		[varBsBtnDisabledBorderColor]: '#f4bd61',
	},
})

globalStyle(`${zephyrScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#da292e',
		[varBsBtnBorderColor]: '#da292e',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#b92327',
		[varBsBtnHoverBorderColor]: '#ae2125',
		[varBsBtnFocusBoxShadowRgb]: '224, 73, 77',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ae2125',
		[varBsBtnActiveBorderColor]: '#a41f23',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#da292e',
		[varBsBtnDisabledBorderColor]: '#da292e',
	},
})

globalStyle(`${zephyrScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f8f9fa',
		[varBsBtnBorderColor]: '#f8f9fa',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d3d4d5',
		[varBsBtnHoverBorderColor]: '#c6c7c8',
		[varBsBtnFocusBoxShadowRgb]: '211, 212, 213',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c6c7c8',
		[varBsBtnActiveBorderColor]: '#babbbc',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f8f9fa',
		[varBsBtnDisabledBorderColor]: '#f8f9fa',
	},
})

globalStyle(`${zephyrScope}${btnDark}`, {
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
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#212529',
		[varBsBtnDisabledBorderColor]: '#212529',
	},
})

globalStyle(`${zephyrScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#3459e6',
		[varBsBtnBorderColor]: '#3459e6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3459e6',
		[varBsBtnHoverBorderColor]: '#3459e6',
		[varBsBtnFocusBoxShadowRgb]: '52, 89, 230',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3459e6',
		[varBsBtnActiveBorderColor]: '#3459e6',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#3459e6',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3459e6',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${zephyrScope}${btnOutlineSecondary}`, {
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
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#fff',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${zephyrScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#2fb380',
		[varBsBtnBorderColor]: '#2fb380',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2fb380',
		[varBsBtnHoverBorderColor]: '#2fb380',
		[varBsBtnFocusBoxShadowRgb]: '47, 179, 128',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2fb380',
		[varBsBtnActiveBorderColor]: '#2fb380',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#2fb380',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#2fb380',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${zephyrScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#287bb5',
		[varBsBtnBorderColor]: '#287bb5',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#287bb5',
		[varBsBtnHoverBorderColor]: '#287bb5',
		[varBsBtnFocusBoxShadowRgb]: '40, 123, 181',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#287bb5',
		[varBsBtnActiveBorderColor]: '#287bb5',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#287bb5',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#287bb5',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${zephyrScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f4bd61',
		[varBsBtnBorderColor]: '#f4bd61',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f4bd61',
		[varBsBtnHoverBorderColor]: '#f4bd61',
		[varBsBtnFocusBoxShadowRgb]: '244, 189, 97',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f4bd61',
		[varBsBtnActiveBorderColor]: '#f4bd61',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#f4bd61',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f4bd61',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${zephyrScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#da292e',
		[varBsBtnBorderColor]: '#da292e',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#da292e',
		[varBsBtnHoverBorderColor]: '#da292e',
		[varBsBtnFocusBoxShadowRgb]: '218, 41, 46',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#da292e',
		[varBsBtnActiveBorderColor]: '#da292e',
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#da292e',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#da292e',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${zephyrScope}${btnOutlineLight}`, {
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
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#f8f9fa',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f8f9fa',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${zephyrScope}${btnOutlineDark}`, {
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
		[varBsBtnActiveBoxShadow]: '0 1px 2px rgba(0, 0, 0, 0.05)',
		[varBsBtnDisabledColor]: '#212529',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#212529',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${zephyrScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '82, 114, 234',
	},
	textDecoration: 'underline',
})

globalStyle(`${zephyrScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${zephyrScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${zephyrScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${zephyrScope}${btnGroupLg} > ${zephyrScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${zephyrScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${zephyrScope}${btnGroupSm} > ${zephyrScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${zephyrScope}${btnGroup} > ${zephyrScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${zephyrScope}${btnGroup} > ${zephyrScope}${btnCheck}:checked + ${zephyrScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${zephyrScope}${btnGroup} > ${zephyrScope}${btnCheck}:focus + ${zephyrScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${zephyrScope}${btnGroup} > ${zephyrScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${zephyrScope}${btnGroup} > ${zephyrScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${zephyrScope}${btnGroup} > ${zephyrScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}${btnCheck}:checked + ${zephyrScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}${btnCheck}:focus + ${zephyrScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${zephyrScope}${btnGroup} > ${zephyrScope}:not(${btnCheck}:first-child) + ${zephyrScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${zephyrScope}${btnGroup} > ${zephyrScope}${btnGroup}:not(:last-child) > ${zephyrScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${zephyrScope}${btnGroup} > ${zephyrScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${zephyrScope}${btnGroup} > ${zephyrScope}:not(${btnCheck}) + ${zephyrScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${zephyrScope}${btnGroup} > ${zephyrScope}${btnGroup}:not(:first-child) > ${zephyrScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${zephyrScope}${btnGroup}${show} ${zephyrScope}${dropdownToggle}${btnLink}`, {
	boxShadow: 'none',
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}${btn}`, {
	width: '100%',
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}${btnGroup}:not(:last-child) > ${zephyrScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}:not(${btnCheck}) + ${zephyrScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${zephyrScope}${btnGroupVertical} > ${zephyrScope}${btnGroup}:not(:first-child) > ${zephyrScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${zephyrScope}${alertDismissible} ${zephyrScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${zephyrScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(52, 89, 230, 0.25)',
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

globalStyle(`${zephyrScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${zephyrScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${zephyrScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${zephyrScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${zephyrScope}${toastHeader} ${zephyrScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${zephyrScope}${modalHeader} ${zephyrScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${zephyrScope}${offcanvasHeader} ${zephyrScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${zephyrScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${zephyrScope}${btnSecondary}`, {
	color: '#212529',
})

globalStyle(`${zephyrScope}${btnLight}`, {
	color: '#212529',
})

globalStyle(`${zephyrScope}${btnOutlineSecondary}`, {
	color: '#212529',
})

globalStyle(`${zephyrScope}${btnOutlineLight}`, {
	color: '#212529',
})

globalStyle(`${zephyrScope}${btnSecondary}:disabled`, {
	border: '1px solid #e6e6e6',
})

globalStyle(`${zephyrScope}${btnLight}:disabled`, {
	border: '1px solid #e6e6e6',
})

globalStyle(`${zephyrScope}${btnOutlineSecondary}:disabled`, {
	border: '1px solid #e6e6e6',
})

globalStyle(`${zephyrScope}${btnOutlineLight}:disabled`, {
	border: '1px solid #e6e6e6',
})

globalStyle(`${zephyrScope}${btnSecondary}`, {
	borderColor: '#e6e6e6',
})

globalStyle(`${zephyrScope}${btnOutlineSecondary}`, {
	borderColor: '#e6e6e6',
})

globalStyle(`${zephyrScope}${btnSecondary}:hover`, {
	backgroundColor: '#e6e6e6',
	borderColor: '#e6e6e6',
})

globalStyle(`${zephyrScope}${btnSecondary}:active`, {
	backgroundColor: '#e6e6e6',
	borderColor: '#e6e6e6',
})

globalStyle(`${zephyrScope}${btnOutlineSecondary}:hover`, {
	backgroundColor: '#e6e6e6',
	borderColor: '#e6e6e6',
})

globalStyle(`${zephyrScope}${btnOutlineSecondary}:active`, {
	backgroundColor: '#e6e6e6',
	borderColor: '#e6e6e6',
})

globalStyle(`${zephyrScope}${btnLight}`, {
	borderColor: '#dfe0e1',
})

globalStyle(`${zephyrScope}${btnOutlineLight}`, {
	borderColor: '#dfe0e1',
})

globalStyle(`${zephyrScope}${btnLight}:hover`, {
	backgroundColor: '#dfe0e1',
	borderColor: '#dfe0e1',
})

globalStyle(`${zephyrScope}${btnLight}:active`, {
	backgroundColor: '#dfe0e1',
	borderColor: '#dfe0e1',
})

globalStyle(`${zephyrScope}${btnOutlineLight}:hover`, {
	backgroundColor: '#dfe0e1',
	borderColor: '#dfe0e1',
})

globalStyle(`${zephyrScope}${btnOutlineLight}:active`, {
	backgroundColor: '#dfe0e1',
	borderColor: '#dfe0e1',
})

globalStyle(`${zephyrScope}${alert} ${zephyrScope}${btnClose}`, {
	color: 'inherit',
})
