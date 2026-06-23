import { globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

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

import { link } from '../../../../theme-contract/contents/basic/contract.css'
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
import {
	alert,
	alertDismissible,
	alertLight,
	alertSecondary,
} from '../../../../theme-contract/ui/alerts/contract.css'
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
import { modal, modalHeader } from '../../../../theme-contract/ui/modal/contract.css'
import { show } from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvas, offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toast, toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${materiaScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${materiaScope}${btnCheck}[disabled] + ${materiaScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${materiaScope}${btnCheck}:disabled + ${materiaScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${materiaScope}${inputGroup} ${materiaScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${materiaScope}${inputGroup} ${materiaScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${materiaScope}${inputGroupLg} > ${materiaScope}${btn}`, {
	padding: '1.25rem 0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupSm} > ${materiaScope}${btn}`, {
	padding: '0 0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnPaddingY]: '0.8rem',
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
	backgroundImage: varBsGradient,
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${materiaScope}${btnCheck} + ${materiaScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${materiaScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	backgroundImage: varBsGradient,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btnCheck}:focus-visible + ${materiaScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btnCheck}:checked + ${materiaScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	backgroundImage: 'none',
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${materiaScope}:not(${btnCheck}) + ${materiaScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	backgroundImage: 'none',
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${materiaScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	backgroundImage: 'none',
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${materiaScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	backgroundImage: 'none',
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${materiaScope}${btnCheck}:checked + ${materiaScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}:not(${btnCheck}) + ${materiaScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btnCheck}:checked:focus-visible + ${materiaScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${materiaScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	backgroundImage: 'none',
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${materiaScope}${fieldset}:disabled ${materiaScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	backgroundImage: 'none',
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${materiaScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#2196f3',
		[varBsBtnBorderColor]: '#2196f3',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1c80cf',
		[varBsBtnHoverBorderColor]: '#1a78c2',
		[varBsBtnFocusBoxShadowRgb]: '66, 166, 245',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1a78c2',
		[varBsBtnActiveBorderColor]: '#1971b6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#2196f3',
		[varBsBtnDisabledBorderColor]: '#2196f3',
	},
})

globalStyle(`${materiaScope}${btnSecondary}`, {
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

globalStyle(`${materiaScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#4caf50',
		[varBsBtnBorderColor]: '#4caf50',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#419544',
		[varBsBtnHoverBorderColor]: '#3d8c40',
		[varBsBtnFocusBoxShadowRgb]: '103, 187, 106',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3d8c40',
		[varBsBtnActiveBorderColor]: '#39833c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#4caf50',
		[varBsBtnDisabledBorderColor]: '#4caf50',
	},
})

globalStyle(`${materiaScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#9c27b0',
		[varBsBtnBorderColor]: '#9c27b0',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#852196',
		[varBsBtnHoverBorderColor]: '#7d1f8d',
		[varBsBtnFocusBoxShadowRgb]: '171, 71, 188',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#7d1f8d',
		[varBsBtnActiveBorderColor]: '#751d84',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#9c27b0',
		[varBsBtnDisabledBorderColor]: '#9c27b0',
	},
})

globalStyle(`${materiaScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ff9800',
		[varBsBtnBorderColor]: '#ff9800',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d98100',
		[varBsBtnHoverBorderColor]: '#cc7a00',
		[varBsBtnFocusBoxShadowRgb]: '255, 167, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc7a00',
		[varBsBtnActiveBorderColor]: '#bf7200',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ff9800',
		[varBsBtnDisabledBorderColor]: '#ff9800',
	},
})

globalStyle(`${materiaScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e51c23',
		[varBsBtnBorderColor]: '#e51c23',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c3181e',
		[varBsBtnHoverBorderColor]: '#b7161c',
		[varBsBtnFocusBoxShadowRgb]: '233, 62, 68',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b7161c',
		[varBsBtnActiveBorderColor]: '#ac151a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e51c23',
		[varBsBtnDisabledBorderColor]: '#e51c23',
	},
})

globalStyle(`${materiaScope}${btnLight}`, {
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

globalStyle(`${materiaScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#222',
		[varBsBtnBorderColor]: '#222',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#434343',
		[varBsBtnHoverBorderColor]: '#383838',
		[varBsBtnFocusBoxShadowRgb]: '67, 67, 67',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4e4e4e',
		[varBsBtnActiveBorderColor]: '#383838',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#222',
		[varBsBtnDisabledBorderColor]: '#222',
	},
})

globalStyle(`${materiaScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#2196f3',
		[varBsBtnBorderColor]: '#2196f3',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2196f3',
		[varBsBtnHoverBorderColor]: '#2196f3',
		[varBsBtnFocusBoxShadowRgb]: '33, 150, 243',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2196f3',
		[varBsBtnActiveBorderColor]: '#2196f3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#2196f3',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#2196f3',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineSecondary}`, {
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

globalStyle(`${materiaScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#4caf50',
		[varBsBtnBorderColor]: '#4caf50',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4caf50',
		[varBsBtnHoverBorderColor]: '#4caf50',
		[varBsBtnFocusBoxShadowRgb]: '76, 175, 80',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4caf50',
		[varBsBtnActiveBorderColor]: '#4caf50',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#4caf50',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#4caf50',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#9c27b0',
		[varBsBtnBorderColor]: '#9c27b0',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#9c27b0',
		[varBsBtnHoverBorderColor]: '#9c27b0',
		[varBsBtnFocusBoxShadowRgb]: '156, 39, 176',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#9c27b0',
		[varBsBtnActiveBorderColor]: '#9c27b0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#9c27b0',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#9c27b0',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ff9800',
		[varBsBtnBorderColor]: '#ff9800',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ff9800',
		[varBsBtnHoverBorderColor]: '#ff9800',
		[varBsBtnFocusBoxShadowRgb]: '255, 152, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ff9800',
		[varBsBtnActiveBorderColor]: '#ff9800',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ff9800',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ff9800',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#e51c23',
		[varBsBtnBorderColor]: '#e51c23',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e51c23',
		[varBsBtnHoverBorderColor]: '#e51c23',
		[varBsBtnFocusBoxShadowRgb]: '229, 28, 35',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e51c23',
		[varBsBtnActiveBorderColor]: '#e51c23',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e51c23',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e51c23',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnOutlineLight}`, {
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

globalStyle(`${materiaScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#222',
		[varBsBtnBorderColor]: '#222',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#222',
		[varBsBtnHoverBorderColor]: '#222',
		[varBsBtnFocusBoxShadowRgb]: '34, 34, 34',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#222',
		[varBsBtnActiveBorderColor]: '#222',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#222',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#222',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${materiaScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#666',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '66, 166, 245',
	},
	textDecoration: 'underline',
	backgroundImage: 'none',
})

globalStyle(`${materiaScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${materiaScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${materiaScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${materiaScope}${btnGroupLg} > ${materiaScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${materiaScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${materiaScope}${btnGroupSm} > ${materiaScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btnCheck}:checked + ${materiaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btnCheck}:focus + ${materiaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnCheck}:checked + ${materiaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnCheck}:focus + ${materiaScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}:not(${btnCheck}:first-child) + ${materiaScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btnGroup}:not(:last-child) > ${materiaScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}:not(${btnCheck}) + ${materiaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btnGroup}:not(:first-child) > ${materiaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup}:not(:last-child) > ${materiaScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}:not(${btnCheck}) + ${materiaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup}:not(:first-child) > ${materiaScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${materiaScope}${alertDismissible} ${materiaScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${materiaScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#fff',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.6',
		[varBsBtnCloseHoverOpacity]: '1',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
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

globalStyle(`${materiaScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${materiaScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${materiaScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${materiaScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${materiaScope}${toastHeader} ${materiaScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${materiaScope}${modalHeader} ${materiaScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${materiaScope}${offcanvasHeader} ${materiaScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${materiaScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${materiaScope}${btnPrimary}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnPrimary}:focus`, {
	backgroundColor: '#2196f3',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnPrimary}:hover`, {
	backgroundColor: '#1d84d6',
})

globalStyle(`${materiaScope}${btnPrimary}:active:hover`, {
	backgroundColor: '#1d84d6',
})

globalStyle(`${materiaScope}${btnPrimary}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnPrimary}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnPrimary}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnPrimary}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlinePrimary}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlinePrimary}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlinePrimary}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlinePrimary}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnSecondary}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnSecondary}:focus`, {
	backgroundColor: '#fff',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnSecondary}:hover`, {
	backgroundColor: '#e0e0e0',
})

globalStyle(`${materiaScope}${btnSecondary}:active:hover`, {
	backgroundColor: '#e0e0e0',
})

globalStyle(`${materiaScope}${btnSecondary}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnSecondary}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #bbb 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnSecondary}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnSecondary}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #bbb 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnSuccess}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnSuccess}:focus`, {
	backgroundColor: '#4caf50',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnSuccess}:hover`, {
	backgroundColor: '#439a46',
})

globalStyle(`${materiaScope}${btnSuccess}:active:hover`, {
	backgroundColor: '#439a46',
})

globalStyle(`${materiaScope}${btnSuccess}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnSuccess}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnSuccess}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnSuccess}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSuccess}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineSuccess}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineSuccess}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineSuccess}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnInfo}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnInfo}:focus`, {
	backgroundColor: '#9c27b0',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnInfo}:hover`, {
	backgroundColor: '#89229b',
})

globalStyle(`${materiaScope}${btnInfo}:active:hover`, {
	backgroundColor: '#89229b',
})

globalStyle(`${materiaScope}${btnInfo}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnInfo}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnInfo}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnInfo}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineInfo}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineInfo}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineInfo}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineInfo}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnWarning}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnWarning}:focus`, {
	backgroundColor: '#ff9800',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnWarning}:hover`, {
	backgroundColor: '#e08600',
})

globalStyle(`${materiaScope}${btnWarning}:active:hover`, {
	backgroundColor: '#e08600',
})

globalStyle(`${materiaScope}${btnWarning}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnWarning}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnWarning}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnWarning}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineWarning}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineWarning}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineWarning}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineWarning}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnDanger}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnDanger}:focus`, {
	backgroundColor: '#e51c23',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnDanger}:hover`, {
	backgroundColor: '#ca191f',
})

globalStyle(`${materiaScope}${btnDanger}:active:hover`, {
	backgroundColor: '#ca191f',
})

globalStyle(`${materiaScope}${btnDanger}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnDanger}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnDanger}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnDanger}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDanger}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineDanger}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineDanger}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDanger}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnDark}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnDark}:focus`, {
	backgroundColor: '#222',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnDark}:hover`, {
	backgroundColor: '#1e1e1e',
})

globalStyle(`${materiaScope}${btnDark}:active:hover`, {
	backgroundColor: '#1e1e1e',
})

globalStyle(`${materiaScope}${btnDark}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnDark}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnDark}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnDark}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDark}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineDark}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineDark}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineDark}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnLight}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnLight}:focus`, {
	backgroundColor: '#f8f9fa',
	boxShadow: '0 0 0 2px rgba(204, 204, 204, 0.5)',
})

globalStyle(`${materiaScope}${btnLight}:hover`, {
	backgroundColor: '#dadbdc',
})

globalStyle(`${materiaScope}${btnLight}:active:hover`, {
	backgroundColor: '#dadbdc',
})

globalStyle(`${materiaScope}${btnLight}:active`, {
	boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${btnLight}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnLight}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnLight}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btnOutlineLight}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${btnOutlineLight}::before`, {
	position: 'absolute',
	top: '0',
	left: '0',
	display: 'block',
	width: '100%',
	height: '100%',
	marginLeft: '0',
	pointerEvents: 'none',
	content: '""',
	backgroundPosition: '50%',
	backgroundSize: '1000% 1000%',
	border: 'none',
	opacity: '0',
	transition: 'background 0.5s, opacity 1s',
	backgroundImage: 'radial-gradient(circle, #fff 10%, transparent 10.01%)',
})

globalStyle(`${materiaScope}${btnOutlineLight}:active::before`, {
	backgroundSize: '0 0',
	opacity: '0.2',
	transition: 'none',
})

globalStyle(`${materiaScope}${btnOutlineLight}[disabled]::before`, {
	display: 'none',
})

globalStyle(`${materiaScope}${btn}`, {
	textTransform: 'uppercase',
	border: 'none',
	boxShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
	transition: 'color 0.4s, background-color 0.4s, border-color 0.4s, box-shadow 0.4s',
})

globalStyle(`${materiaScope}${btnLink}`, {
	color: '#2196f3',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${btnLink}:hover`, {
	color: '#1a78c2',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${btnLink}:focus`, {
	color: '#1a78c2',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${btnLink}[disabled]:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${btnLink}[disabled]:active:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${fieldset}[disabled] ${materiaScope}${btnLink}:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${fieldset}[disabled] ${materiaScope}${btnLink}:active:hover`, {
	color: '#666',
	textDecoration: 'none',
})

globalStyle(`${materiaScope}${btnSecondary}[disabled]`, {
	color: 'rgba(0, 0, 0, 0.4)',
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
	opacity: '1',
})

globalStyle(`${materiaScope}${fieldset}[disabled] ${materiaScope}${btnSecondary}`, {
	color: 'rgba(0, 0, 0, 0.4)',
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
	opacity: '1',
})

globalStyle(`${materiaScope}${btnSecondary}[disabled]:hover`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${btnSecondary}[disabled]:focus`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${fieldset}[disabled] ${materiaScope}${btnSecondary}:hover`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${fieldset}[disabled] ${materiaScope}${btnSecondary}:focus`, {
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${btnOutlineSecondary}`, {
	color: '#dee2e6',
	borderColor: '#eee',
})

globalStyle(`${materiaScope}${btnWarning}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${btnGroup} ${materiaScope}${btn} + ${materiaScope}${btn}`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${btnGroup} ${materiaScope}${btnGroup} + ${materiaScope}${btn}`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btn} + ${materiaScope}${btn}`, {
	marginTop: '0',
})

globalStyle(`${materiaScope}${btnGroupVertical} > ${materiaScope}${btnGroup} + ${materiaScope}${btn}`, {
	marginTop: '0',
})

globalStyle(`${materiaScope}${btnGroup} ${materiaScope}${btn} + ${materiaScope}${btn}`, {
	boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${link}:not(${btn})`, {
	fontWeight: '700',
	color: '#fff',
})

globalStyle(`${materiaScope}${alertSecondary} ${materiaScope}${link}:not(${btn})`, {
	color: '#444',
})

globalStyle(`${materiaScope}${alertLight} ${materiaScope}${link}:not(${btn})`, {
	color: '#444',
})

globalStyle(`${materiaScope}${modal} ${materiaScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})

globalStyle(`${materiaScope}${toast} ${materiaScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})

globalStyle(`${materiaScope}${offcanvas} ${materiaScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})
