import { globalStyle } from '@vanilla-extract/css'
import { simplexScope } from '../../scope.css'

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
import { modalHeader } from '../../../../theme-contract/ui/modal/contract.css'
import { offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${simplexScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${simplexScope}${btnCheck}[disabled] + ${simplexScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${simplexScope}${btnCheck}:disabled + ${simplexScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${simplexScope}${inputGroup} ${simplexScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${simplexScope}${inputGroup} ${simplexScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${simplexScope}${inputGroupLg} > ${simplexScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${simplexScope}${inputGroupSm} > ${simplexScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${simplexScope}${btn}`, {
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

globalStyle(`${simplexScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${simplexScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${simplexScope}${btnCheck} + ${simplexScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${simplexScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${simplexScope}${btnCheck}:focus-visible + ${simplexScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${simplexScope}${btnCheck}:checked + ${simplexScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${simplexScope}:not(${btnCheck}) + ${simplexScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${simplexScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${simplexScope}${btnCheck}:checked + ${simplexScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${simplexScope}:not(${btnCheck}) + ${simplexScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${simplexScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${simplexScope}${btnCheck}:checked:focus-visible + ${simplexScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${simplexScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${simplexScope}${fieldset}:disabled ${simplexScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${simplexScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#d9230f',
		[varBsBtnBorderColor]: '#d9230f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#b81e0d',
		[varBsBtnHoverBorderColor]: '#ae1c0c',
		[varBsBtnFocusBoxShadowRgb]: '223, 68, 51',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ae1c0c',
		[varBsBtnActiveBorderColor]: '#a31a0b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#d9230f',
		[varBsBtnDisabledBorderColor]: '#d9230f',
	},
})

globalStyle(`${simplexScope}${btnSecondary}`, {
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
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#fff',
		[varBsBtnDisabledBorderColor]: '#fff',
	},
})

globalStyle(`${simplexScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#469408',
		[varBsBtnBorderColor]: '#469408',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3c7e07',
		[varBsBtnHoverBorderColor]: '#387606',
		[varBsBtnFocusBoxShadowRgb]: '98, 164, 45',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#387606',
		[varBsBtnActiveBorderColor]: '#356f06',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#469408',
		[varBsBtnDisabledBorderColor]: '#469408',
	},
})

globalStyle(`${simplexScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#029acf',
		[varBsBtnBorderColor]: '#029acf',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#0283b0',
		[varBsBtnHoverBorderColor]: '#027ba6',
		[varBsBtnFocusBoxShadowRgb]: '40, 169, 214',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#027ba6',
		[varBsBtnActiveBorderColor]: '#02749b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#029acf',
		[varBsBtnDisabledBorderColor]: '#029acf',
	},
})

globalStyle(`${simplexScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#d9831f',
		[varBsBtnBorderColor]: '#d9831f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#b86f1a',
		[varBsBtnHoverBorderColor]: '#ae6919',
		[varBsBtnFocusBoxShadowRgb]: '223, 150, 65',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ae6919',
		[varBsBtnActiveBorderColor]: '#a36217',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#d9831f',
		[varBsBtnDisabledBorderColor]: '#d9831f',
	},
})

globalStyle(`${simplexScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#9b479f',
		[varBsBtnBorderColor]: '#9b479f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#843c87',
		[varBsBtnHoverBorderColor]: '#7c397f',
		[varBsBtnFocusBoxShadowRgb]: '170, 99, 173',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#7c397f',
		[varBsBtnActiveBorderColor]: '#743577',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#9b479f',
		[varBsBtnDisabledBorderColor]: '#9b479f',
	},
})

globalStyle(`${simplexScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#fff',
		[varBsBtnBorderColor]: '#fff',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d9d9d9',
		[varBsBtnHoverBorderColor]: '#cccccc',
		[varBsBtnFocusBoxShadowRgb]: '217, 217, 217',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#cccccc',
		[varBsBtnActiveBorderColor]: '#bfbfbf',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#fff',
		[varBsBtnDisabledBorderColor]: '#fff',
	},
})

globalStyle(`${simplexScope}${btnDark}`, {
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

globalStyle(`${simplexScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#d9230f',
		[varBsBtnBorderColor]: '#d9230f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d9230f',
		[varBsBtnHoverBorderColor]: '#d9230f',
		[varBsBtnFocusBoxShadowRgb]: '217, 35, 15',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#d9230f',
		[varBsBtnActiveBorderColor]: '#d9230f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#d9230f',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#d9230f',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${simplexScope}${btnOutlineSecondary}`, {
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

globalStyle(`${simplexScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#469408',
		[varBsBtnBorderColor]: '#469408',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#469408',
		[varBsBtnHoverBorderColor]: '#469408',
		[varBsBtnFocusBoxShadowRgb]: '70, 148, 8',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#469408',
		[varBsBtnActiveBorderColor]: '#469408',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#469408',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#469408',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${simplexScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#029acf',
		[varBsBtnBorderColor]: '#029acf',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#029acf',
		[varBsBtnHoverBorderColor]: '#029acf',
		[varBsBtnFocusBoxShadowRgb]: '2, 154, 207',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#029acf',
		[varBsBtnActiveBorderColor]: '#029acf',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#029acf',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#029acf',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${simplexScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#d9831f',
		[varBsBtnBorderColor]: '#d9831f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d9831f',
		[varBsBtnHoverBorderColor]: '#d9831f',
		[varBsBtnFocusBoxShadowRgb]: '217, 131, 31',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#d9831f',
		[varBsBtnActiveBorderColor]: '#d9831f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#d9831f',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#d9831f',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${simplexScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#9b479f',
		[varBsBtnBorderColor]: '#9b479f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#9b479f',
		[varBsBtnHoverBorderColor]: '#9b479f',
		[varBsBtnFocusBoxShadowRgb]: '155, 71, 159',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#9b479f',
		[varBsBtnActiveBorderColor]: '#9b479f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#9b479f',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#9b479f',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${simplexScope}${btnOutlineLight}`, {
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

globalStyle(`${simplexScope}${btnOutlineDark}`, {
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

globalStyle(`${simplexScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#777',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '223, 68, 51',
	},
	textDecoration: 'underline',
})

globalStyle(`${simplexScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${simplexScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${simplexScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${simplexScope}${btnGroupLg} > ${simplexScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${simplexScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${simplexScope}${btnGroupSm} > ${simplexScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}${btnCheck}:checked + ${simplexScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}${btnCheck}:focus + ${simplexScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btnCheck}:checked + ${simplexScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btnCheck}:focus + ${simplexScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}:not(${btnCheck}:first-child) + ${simplexScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}${btnGroup}:not(:last-child) > ${simplexScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}:not(${btnCheck}) + ${simplexScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${simplexScope}${btnGroup} > ${simplexScope}${btnGroup}:not(:first-child) > ${simplexScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btn}`, {
	width: '100%',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btnGroup}:not(:last-child) > ${simplexScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}:not(${btnCheck}) + ${simplexScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${simplexScope}${btnGroupVertical} > ${simplexScope}${btnGroup}:not(:first-child) > ${simplexScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${simplexScope}${alertDismissible} ${simplexScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${simplexScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(217, 35, 15, 0.25)',
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

globalStyle(`${simplexScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${simplexScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${simplexScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${simplexScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${simplexScope}${toastHeader} ${simplexScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${simplexScope}${modalHeader} ${simplexScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${simplexScope}${offcanvasHeader} ${simplexScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${simplexScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${simplexScope}${btnPrimary}`, {
	backgroundImage: 'linear-gradient(#db301d, #d9230f 6%, #cc210e)',
	filter: 'none',
	border: '1px solid #bd1e0d',
})

globalStyle(`${simplexScope}${btnPrimary}:hover`, {
	backgroundImage: 'linear-gradient(#db301d, #d9230f 6%, #cc210e)',
	filter: 'none',
	border: '1px solid #bd1e0d',
})

globalStyle(`${simplexScope}${btnSecondary}`, {
	backgroundImage: 'linear-gradient(white, #fff 6%, #f0f0f0)',
	filter: 'none',
	border: '1px solid #dedede',
})

globalStyle(`${simplexScope}${btnSecondary}:hover`, {
	backgroundImage: 'linear-gradient(white, #fff 6%, #f0f0f0)',
	filter: 'none',
	border: '1px solid #dedede',
})

globalStyle(`${simplexScope}${btnSecondary}:focus`, {
	boxShadow: '0 0 0 0.2rem rgba(221, 221, 221, 0.5)',
})

globalStyle(`${simplexScope}${btnSuccess}`, {
	backgroundImage: 'linear-gradient(#519a17, #469408 6%, #428b08)',
	filter: 'none',
	border: '1px solid #3d8107',
})

globalStyle(`${simplexScope}${btnSuccess}:hover`, {
	backgroundImage: 'linear-gradient(#519a17, #469408 6%, #428b08)',
	filter: 'none',
	border: '1px solid #3d8107',
})

globalStyle(`${simplexScope}${btnInfo}`, {
	backgroundImage: 'linear-gradient(#11a0d2, #029acf 6%, #0291c3)',
	filter: 'none',
	border: '1px solid #0286b4',
})

globalStyle(`${simplexScope}${btnInfo}:hover`, {
	backgroundImage: 'linear-gradient(#11a0d2, #029acf 6%, #0291c3)',
	filter: 'none',
	border: '1px solid #0286b4',
})

globalStyle(`${simplexScope}${btnWarning}`, {
	backgroundImage: 'linear-gradient(#db8a2c, #d9831f 6%, #cc7b1d)',
	filter: 'none',
	border: '1px solid #bd721b',
})

globalStyle(`${simplexScope}${btnWarning}:hover`, {
	backgroundImage: 'linear-gradient(#db8a2c, #d9831f 6%, #cc7b1d)',
	filter: 'none',
	border: '1px solid #bd721b',
})

globalStyle(`${simplexScope}${btnDanger}`, {
	backgroundImage: 'linear-gradient(#a152a5, #9b479f 6%, #924395)',
	filter: 'none',
	border: '1px solid #873e8a',
})

globalStyle(`${simplexScope}${btnDanger}:hover`, {
	backgroundImage: 'linear-gradient(#a152a5, #9b479f 6%, #924395)',
	filter: 'none',
	border: '1px solid #873e8a',
})

globalStyle(`${simplexScope}${btnDark}`, {
	backgroundImage: 'linear-gradient(#434648, #373a3c 6%, #343738)',
	filter: 'none',
	border: '1px solid #303234',
})

globalStyle(`${simplexScope}${btnDark}:hover`, {
	backgroundImage: 'linear-gradient(#434648, #373a3c 6%, #343738)',
	filter: 'none',
	border: '1px solid #303234',
})

globalStyle(`${simplexScope}${btnLight}`, {
	backgroundImage: 'linear-gradient(white, #fff 6%, #f0f0f0)',
	filter: 'none',
	border: '1px solid #dedede',
})

globalStyle(`${simplexScope}${btnLight}:hover`, {
	backgroundImage: 'linear-gradient(white, #fff 6%, #f0f0f0)',
	filter: 'none',
	border: '1px solid #dedede',
})

globalStyle(`${simplexScope}${btnOutlineSecondary}`, {
	color: '#bbb',
	borderColor: '#bbb',
})

globalStyle(`${simplexScope}${btnOutlineSecondary}:hover`, {
	color: '#fff',
	backgroundColor: '#bbb',
})
