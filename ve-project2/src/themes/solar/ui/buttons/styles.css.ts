import { globalStyle } from '@vanilla-extract/css'
import { solarScope } from '../../scope.css'

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

globalStyle(`${solarScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${solarScope}${btnCheck}[disabled] + ${solarScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${solarScope}${btnCheck}:disabled + ${solarScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${solarScope}${inputGroup} ${solarScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${solarScope}${inputGroup} ${solarScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${solarScope}${inputGroupLg} > ${solarScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${solarScope}${inputGroupSm} > ${solarScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${solarScope}${btn}`, {
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

globalStyle(`${solarScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${solarScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${solarScope}${btnCheck} + ${solarScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${solarScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${solarScope}${btnCheck}:focus-visible + ${solarScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${solarScope}${btnCheck}:checked + ${solarScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${solarScope}:not(${btnCheck}) + ${solarScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${solarScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${solarScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${solarScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${solarScope}${btnCheck}:checked + ${solarScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${solarScope}:not(${btnCheck}) + ${solarScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${solarScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${solarScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${solarScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${solarScope}${btnCheck}:checked:focus-visible + ${solarScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${solarScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${solarScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${solarScope}${fieldset}:disabled ${solarScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${solarScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#b58900',
		[varBsBtnBorderColor]: '#b58900',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#9a7400',
		[varBsBtnHoverBorderColor]: '#916e00',
		[varBsBtnFocusBoxShadowRgb]: '192, 155, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#916e00',
		[varBsBtnActiveBorderColor]: '#886700',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#b58900',
		[varBsBtnDisabledBorderColor]: '#b58900',
	},
})

globalStyle(`${solarScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#839496',
		[varBsBtnBorderColor]: '#839496',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#6f7e80',
		[varBsBtnHoverBorderColor]: '#697678',
		[varBsBtnFocusBoxShadowRgb]: '150, 164, 166',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#697678',
		[varBsBtnActiveBorderColor]: '#626f71',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#839496',
		[varBsBtnDisabledBorderColor]: '#839496',
	},
})

globalStyle(`${solarScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#2aa198',
		[varBsBtnBorderColor]: '#2aa198',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#248981',
		[varBsBtnHoverBorderColor]: '#22817a',
		[varBsBtnFocusBoxShadowRgb]: '74, 175, 167',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#22817a',
		[varBsBtnActiveBorderColor]: '#207972',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#2aa198',
		[varBsBtnDisabledBorderColor]: '#2aa198',
	},
})

globalStyle(`${solarScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#268bd2',
		[varBsBtnBorderColor]: '#268bd2',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2076b3',
		[varBsBtnHoverBorderColor]: '#1e6fa8',
		[varBsBtnFocusBoxShadowRgb]: '71, 156, 217',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1e6fa8',
		[varBsBtnActiveBorderColor]: '#1d689e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#268bd2',
		[varBsBtnDisabledBorderColor]: '#268bd2',
	},
})

globalStyle(`${solarScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#cb4b16',
		[varBsBtnBorderColor]: '#cb4b16',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ad4013',
		[varBsBtnHoverBorderColor]: '#a23c12',
		[varBsBtnFocusBoxShadowRgb]: '211, 102, 57',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#a23c12',
		[varBsBtnActiveBorderColor]: '#983811',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#cb4b16',
		[varBsBtnDisabledBorderColor]: '#cb4b16',
	},
})

globalStyle(`${solarScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#d33682',
		[varBsBtnBorderColor]: '#d33682',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#b32e6f',
		[varBsBtnHoverBorderColor]: '#a92b68',
		[varBsBtnFocusBoxShadowRgb]: '218, 84, 149',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#a92b68',
		[varBsBtnActiveBorderColor]: '#9e2962',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#d33682',
		[varBsBtnDisabledBorderColor]: '#d33682',
	},
})

globalStyle(`${solarScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#fdf6e3',
		[varBsBtnBorderColor]: '#fdf6e3',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d7d1c1',
		[varBsBtnHoverBorderColor]: '#cac5b6',
		[varBsBtnFocusBoxShadowRgb]: '215, 209, 193',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#cac5b6',
		[varBsBtnActiveBorderColor]: '#beb9aa',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#fdf6e3',
		[varBsBtnDisabledBorderColor]: '#fdf6e3',
	},
})

globalStyle(`${solarScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#073642',
		[varBsBtnBorderColor]: '#073642',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2c545e',
		[varBsBtnHoverBorderColor]: '#204a55',
		[varBsBtnFocusBoxShadowRgb]: '44, 84, 94',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#395e68',
		[varBsBtnActiveBorderColor]: '#204a55',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#073642',
		[varBsBtnDisabledBorderColor]: '#073642',
	},
})

globalStyle(`${solarScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#b58900',
		[varBsBtnBorderColor]: '#b58900',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#b58900',
		[varBsBtnHoverBorderColor]: '#b58900',
		[varBsBtnFocusBoxShadowRgb]: '181, 137, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b58900',
		[varBsBtnActiveBorderColor]: '#b58900',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#b58900',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#b58900',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${solarScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#839496',
		[varBsBtnBorderColor]: '#839496',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#839496',
		[varBsBtnHoverBorderColor]: '#839496',
		[varBsBtnFocusBoxShadowRgb]: '131, 148, 150',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#839496',
		[varBsBtnActiveBorderColor]: '#839496',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#839496',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#839496',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${solarScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#2aa198',
		[varBsBtnBorderColor]: '#2aa198',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2aa198',
		[varBsBtnHoverBorderColor]: '#2aa198',
		[varBsBtnFocusBoxShadowRgb]: '42, 161, 152',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2aa198',
		[varBsBtnActiveBorderColor]: '#2aa198',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#2aa198',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#2aa198',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${solarScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#268bd2',
		[varBsBtnBorderColor]: '#268bd2',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#268bd2',
		[varBsBtnHoverBorderColor]: '#268bd2',
		[varBsBtnFocusBoxShadowRgb]: '38, 139, 210',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#268bd2',
		[varBsBtnActiveBorderColor]: '#268bd2',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#268bd2',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#268bd2',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${solarScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#cb4b16',
		[varBsBtnBorderColor]: '#cb4b16',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cb4b16',
		[varBsBtnHoverBorderColor]: '#cb4b16',
		[varBsBtnFocusBoxShadowRgb]: '203, 75, 22',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cb4b16',
		[varBsBtnActiveBorderColor]: '#cb4b16',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#cb4b16',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#cb4b16',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${solarScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#d33682',
		[varBsBtnBorderColor]: '#d33682',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d33682',
		[varBsBtnHoverBorderColor]: '#d33682',
		[varBsBtnFocusBoxShadowRgb]: '211, 54, 130',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#d33682',
		[varBsBtnActiveBorderColor]: '#d33682',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#d33682',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#d33682',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${solarScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#fdf6e3',
		[varBsBtnBorderColor]: '#fdf6e3',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#fdf6e3',
		[varBsBtnHoverBorderColor]: '#fdf6e3',
		[varBsBtnFocusBoxShadowRgb]: '253, 246, 227',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#fdf6e3',
		[varBsBtnActiveBorderColor]: '#fdf6e3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fdf6e3',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#fdf6e3',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${solarScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#073642',
		[varBsBtnBorderColor]: '#073642',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#073642',
		[varBsBtnHoverBorderColor]: '#073642',
		[varBsBtnFocusBoxShadowRgb]: '7, 54, 66',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#073642',
		[varBsBtnActiveBorderColor]: '#073642',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#073642',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#073642',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${solarScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#839496',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '74, 175, 167',
	},
	textDecoration: 'underline',
})

globalStyle(`${solarScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${solarScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${solarScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${solarScope}${btnGroupLg} > ${solarScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${solarScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${solarScope}${btnGroupSm} > ${solarScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btnCheck}:checked + ${solarScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btnCheck}:focus + ${solarScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btnCheck}:checked + ${solarScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btnCheck}:focus + ${solarScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}:not(${btnCheck}:first-child) + ${solarScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btnGroup}:not(:last-child) > ${solarScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}:not(${btnCheck}) + ${solarScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${solarScope}${btnGroup} > ${solarScope}${btnGroup}:not(:first-child) > ${solarScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${solarScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${solarScope}${btnSm} + ${solarScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${solarScope}${btnGroupSm} > ${solarScope}${btn} + ${solarScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${solarScope}${btnLg} + ${solarScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${solarScope}${btnGroupLg} > ${solarScope}${btn} + ${solarScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btn}`, {
	width: '100%',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btnGroup}:not(:last-child) > ${solarScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}:not(${btnCheck}) + ${solarScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${solarScope}${btnGroupVertical} > ${solarScope}${btnGroup}:not(:first-child) > ${solarScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${solarScope}${alertDismissible} ${solarScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${solarScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#fff',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(181, 137, 0, 0.25)',
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

globalStyle(`${solarScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${solarScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${solarScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${solarScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${solarScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${solarScope}${toastHeader} ${solarScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${solarScope}${modalHeader} ${solarScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${solarScope}${offcanvasHeader} ${solarScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${solarScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${solarScope}${btnPrimary}`, {
	backgroundColor: '#b58900',
})

globalStyle(`${solarScope}${btnSecondary}`, {
	backgroundColor: '#839496',
})

globalStyle(`${solarScope}${btnSuccess}`, {
	backgroundColor: '#2aa198',
})

globalStyle(`${solarScope}${btnInfo}`, {
	backgroundColor: '#268bd2',
})

globalStyle(`${solarScope}${btnWarning}`, {
	backgroundColor: '#cb4b16',
})

globalStyle(`${solarScope}${btnDanger}`, {
	backgroundColor: '#d33682',
})

globalStyle(`${solarScope}${btnLight}`, {
	backgroundColor: '#fdf6e3',
})

globalStyle(`${solarScope}${btnDark}`, {
	backgroundColor: '#073642',
})
