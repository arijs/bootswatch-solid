import { globalStyle } from '@vanilla-extract/css'
import { vaporScope } from '../../scope.css'

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
import { show } from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${vaporScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${vaporScope}${btnCheck}[disabled] + ${vaporScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${vaporScope}${btnCheck}:disabled + ${vaporScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${vaporScope}${inputGroup} ${vaporScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${vaporScope}${inputGroup} ${vaporScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${vaporScope}${inputGroupLg} > ${vaporScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${vaporScope}${inputGroupSm} > ${vaporScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${vaporScope}${btn}`, {
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

globalStyle(`${vaporScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${vaporScope}${btnCheck} + ${vaporScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${vaporScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btnCheck}:focus-visible + ${vaporScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btnCheck}:checked + ${vaporScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${vaporScope}:not(${btnCheck}) + ${vaporScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${vaporScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${vaporScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${vaporScope}${btnCheck}:checked + ${vaporScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}:not(${btnCheck}) + ${vaporScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btnCheck}:checked:focus-visible + ${vaporScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${vaporScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${vaporScope}${fieldset}:disabled ${vaporScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${vaporScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#6f42c1',
		[varBsBtnBorderColor]: '#6f42c1',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5e38a4',
		[varBsBtnHoverBorderColor]: '#59359a',
		[varBsBtnFocusBoxShadowRgb]: '133, 94, 202',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#59359a',
		[varBsBtnActiveBorderColor]: '#533291',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#6f42c1',
		[varBsBtnDisabledBorderColor]: '#6f42c1',
	},
})

globalStyle(`${vaporScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ea39b8',
		[varBsBtnBorderColor]: '#ea39b8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c7309c',
		[varBsBtnHoverBorderColor]: '#bb2e93',
		[varBsBtnFocusBoxShadowRgb]: '237, 87, 195',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#bb2e93',
		[varBsBtnActiveBorderColor]: '#b02b8a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ea39b8',
		[varBsBtnDisabledBorderColor]: '#ea39b8',
	},
})

globalStyle(`${vaporScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3cf281',
		[varBsBtnBorderColor]: '#3cf281',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#33ce6e',
		[varBsBtnHoverBorderColor]: '#30c267',
		[varBsBtnFocusBoxShadowRgb]: '89, 244, 148',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#30c267',
		[varBsBtnActiveBorderColor]: '#2db661',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3cf281',
		[varBsBtnDisabledBorderColor]: '#3cf281',
	},
})

globalStyle(`${vaporScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#1ba2f6',
		[varBsBtnBorderColor]: '#1ba2f6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#178ad1',
		[varBsBtnHoverBorderColor]: '#1682c5',
		[varBsBtnFocusBoxShadowRgb]: '61, 176, 247',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1682c5',
		[varBsBtnActiveBorderColor]: '#147ab9',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#1ba2f6',
		[varBsBtnDisabledBorderColor]: '#1ba2f6',
	},
})

globalStyle(`${vaporScope}${btnWarning}`, {
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

globalStyle(`${vaporScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e44c55',
		[varBsBtnBorderColor]: '#e44c55',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c24148',
		[varBsBtnHoverBorderColor]: '#b63d44',
		[varBsBtnFocusBoxShadowRgb]: '232, 103, 111',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b63d44',
		[varBsBtnActiveBorderColor]: '#ab3940',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e44c55',
		[varBsBtnDisabledBorderColor]: '#e44c55',
	},
})

globalStyle(`${vaporScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#44d9e8',
		[varBsBtnBorderColor]: '#44d9e8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3ab8c5',
		[varBsBtnHoverBorderColor]: '#36aeba',
		[varBsBtnFocusBoxShadowRgb]: '96, 223, 235',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#36aeba',
		[varBsBtnActiveBorderColor]: '#33a3ae',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#44d9e8',
		[varBsBtnDisabledBorderColor]: '#44d9e8',
	},
})

globalStyle(`${vaporScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#170229',
		[varBsBtnBorderColor]: '#170229',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3a2849',
		[varBsBtnHoverBorderColor]: '#2e1b3e',
		[varBsBtnFocusBoxShadowRgb]: '58, 40, 73',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#453554',
		[varBsBtnActiveBorderColor]: '#2e1b3e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#170229',
		[varBsBtnDisabledBorderColor]: '#170229',
	},
})

globalStyle(`${vaporScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#6f42c1',
		[varBsBtnBorderColor]: '#6f42c1',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#6f42c1',
		[varBsBtnHoverBorderColor]: '#6f42c1',
		[varBsBtnFocusBoxShadowRgb]: '111, 66, 193',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#6f42c1',
		[varBsBtnActiveBorderColor]: '#6f42c1',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#6f42c1',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#6f42c1',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#ea39b8',
		[varBsBtnBorderColor]: '#ea39b8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ea39b8',
		[varBsBtnHoverBorderColor]: '#ea39b8',
		[varBsBtnFocusBoxShadowRgb]: '234, 57, 184',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ea39b8',
		[varBsBtnActiveBorderColor]: '#ea39b8',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ea39b8',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ea39b8',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#3cf281',
		[varBsBtnBorderColor]: '#3cf281',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3cf281',
		[varBsBtnHoverBorderColor]: '#3cf281',
		[varBsBtnFocusBoxShadowRgb]: '60, 242, 129',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3cf281',
		[varBsBtnActiveBorderColor]: '#3cf281',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#3cf281',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3cf281',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#1ba2f6',
		[varBsBtnBorderColor]: '#1ba2f6',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1ba2f6',
		[varBsBtnHoverBorderColor]: '#1ba2f6',
		[varBsBtnFocusBoxShadowRgb]: '27, 162, 246',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1ba2f6',
		[varBsBtnActiveBorderColor]: '#1ba2f6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#1ba2f6',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#1ba2f6',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineWarning}`, {
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

globalStyle(`${vaporScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#e44c55',
		[varBsBtnBorderColor]: '#e44c55',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e44c55',
		[varBsBtnHoverBorderColor]: '#e44c55',
		[varBsBtnFocusBoxShadowRgb]: '228, 76, 85',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e44c55',
		[varBsBtnActiveBorderColor]: '#e44c55',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e44c55',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e44c55',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#44d9e8',
		[varBsBtnBorderColor]: '#44d9e8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#44d9e8',
		[varBsBtnHoverBorderColor]: '#44d9e8',
		[varBsBtnFocusBoxShadowRgb]: '68, 217, 232',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#44d9e8',
		[varBsBtnActiveBorderColor]: '#44d9e8',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#44d9e8',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#44d9e8',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#170229',
		[varBsBtnBorderColor]: '#170229',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#170229',
		[varBsBtnHoverBorderColor]: '#170229',
		[varBsBtnFocusBoxShadowRgb]: '23, 2, 41',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#170229',
		[varBsBtnActiveBorderColor]: '#170229',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#170229',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#170229',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${vaporScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '81, 252, 230',
	},
	textDecoration: 'underline',
})

globalStyle(`${vaporScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${vaporScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${vaporScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${vaporScope}${btnGroupLg} > ${vaporScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${vaporScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${vaporScope}${btnGroupSm} > ${vaporScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btnCheck}:checked + ${vaporScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btnCheck}:focus + ${vaporScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btnCheck}:checked + ${vaporScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btnCheck}:focus + ${vaporScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}:not(${btnCheck}:first-child) + ${vaporScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btnGroup}:not(:last-child) > ${vaporScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}:not(${btnCheck}) + ${vaporScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${btnGroup} > ${vaporScope}${btnGroup}:not(:first-child) > ${vaporScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btnGroup}:not(:last-child) > ${vaporScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}:not(${btnCheck}) + ${vaporScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${vaporScope}${btnGroupVertical} > ${vaporScope}${btnGroup}:not(:first-child) > ${vaporScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${vaporScope}${alertDismissible} ${vaporScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${vaporScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(111, 66, 193, 0.25)',
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
	borderRadius: '0.15rem',
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${vaporScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${vaporScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${vaporScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${vaporScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${vaporScope}${toastHeader} ${vaporScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${vaporScope}${modalHeader} ${vaporScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${vaporScope}${offcanvasHeader} ${vaporScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${vaporScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${vaporScope}${btnPrimary}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlinePrimary}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${btnPrimary}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlinePrimary}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnSecondary}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineSecondary}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${btnSecondary}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineSecondary}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnSuccess}`, {
	boxShadow: '0 0 2px rgba(60, 242, 129, 0.9), 0 0 4px rgba(60, 242, 129, 0.4), 0 0 1rem rgba(60, 242, 129, 0.3), 0 0 4rem rgba(60, 242, 129, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineSuccess}`, {
	boxShadow: '0 0 2px rgba(60, 242, 129, 0.9), 0 0 4px rgba(60, 242, 129, 0.4), 0 0 1rem rgba(60, 242, 129, 0.3), 0 0 4rem rgba(60, 242, 129, 0.1)',
})

globalStyle(`${vaporScope}${btnSuccess}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineSuccess}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnInfo}`, {
	boxShadow: '0 0 2px rgba(27, 162, 246, 0.9), 0 0 4px rgba(27, 162, 246, 0.4), 0 0 1rem rgba(27, 162, 246, 0.3), 0 0 4rem rgba(27, 162, 246, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineInfo}`, {
	boxShadow: '0 0 2px rgba(27, 162, 246, 0.9), 0 0 4px rgba(27, 162, 246, 0.4), 0 0 1rem rgba(27, 162, 246, 0.3), 0 0 4rem rgba(27, 162, 246, 0.1)',
})

globalStyle(`${vaporScope}${btnInfo}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineInfo}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnWarning}`, {
	boxShadow: '0 0 2px rgba(255, 193, 7, 0.9), 0 0 4px rgba(255, 193, 7, 0.4), 0 0 1rem rgba(255, 193, 7, 0.3), 0 0 4rem rgba(255, 193, 7, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineWarning}`, {
	boxShadow: '0 0 2px rgba(255, 193, 7, 0.9), 0 0 4px rgba(255, 193, 7, 0.4), 0 0 1rem rgba(255, 193, 7, 0.3), 0 0 4rem rgba(255, 193, 7, 0.1)',
})

globalStyle(`${vaporScope}${btnWarning}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineWarning}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnDanger}`, {
	boxShadow: '0 0 2px rgba(228, 76, 85, 0.9), 0 0 4px rgba(228, 76, 85, 0.4), 0 0 1rem rgba(228, 76, 85, 0.3), 0 0 4rem rgba(228, 76, 85, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineDanger}`, {
	boxShadow: '0 0 2px rgba(228, 76, 85, 0.9), 0 0 4px rgba(228, 76, 85, 0.4), 0 0 1rem rgba(228, 76, 85, 0.3), 0 0 4rem rgba(228, 76, 85, 0.1)',
})

globalStyle(`${vaporScope}${btnDanger}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineDanger}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnLight}`, {
	boxShadow: '0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4), 0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineLight}`, {
	boxShadow: '0 0 2px rgba(68, 217, 232, 0.9), 0 0 4px rgba(68, 217, 232, 0.4), 0 0 1rem rgba(68, 217, 232, 0.3), 0 0 4rem rgba(68, 217, 232, 0.1)',
})

globalStyle(`${vaporScope}${btnLight}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineLight}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnDark}`, {
	boxShadow: '0 0 2px rgba(23, 2, 41, 0.9), 0 0 4px rgba(23, 2, 41, 0.4), 0 0 1rem rgba(23, 2, 41, 0.3), 0 0 4rem rgba(23, 2, 41, 0.1)',
})

globalStyle(`${vaporScope}${btnOutlineDark}`, {
	boxShadow: '0 0 2px rgba(23, 2, 41, 0.9), 0 0 4px rgba(23, 2, 41, 0.4), 0 0 1rem rgba(23, 2, 41, 0.3), 0 0 4rem rgba(23, 2, 41, 0.1)',
})

globalStyle(`${vaporScope}${btnDark}`, {
	textShadow: '0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineDark}`, {
	color: '#fff',
	borderWidth: '2px',
})

globalStyle(`${vaporScope}${btnDark}`, {
	boxShadow: '0 0 2px rgba(111, 66, 193, 0.9), 0 0 4px rgba(111, 66, 193, 0.4), 0 0 1rem rgba(111, 66, 193, 0.3), 0 0 4rem rgba(111, 66, 193, 0.1)',
})

globalStyle(`${vaporScope}${btnLink}`, {
	boxShadow: 'none',
	textShadow: '0 0 1px rgba(50, 251, 226, 0.6), 0 0 3px rgba(50, 251, 226, 0.5), 0 0 0.5rem rgba(50, 251, 226, 0.3), 0 0 2rem rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${btnOutlineDark}`, {
	color: '#fff',
})
