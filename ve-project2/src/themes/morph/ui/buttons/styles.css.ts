import { globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../../scope.css'

import {
	varBsBodyColor,
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

globalStyle(`${morphScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${morphScope}${btnCheck}[disabled] + ${morphScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${morphScope}${btnCheck}:disabled + ${morphScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${morphScope}${inputGroup} ${morphScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${morphScope}${inputGroup} ${morphScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${morphScope}${inputGroupLg} > ${morphScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${morphScope}${inputGroupSm} > ${morphScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${morphScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1.5rem',
		[varBsBtnPaddingY]: '1rem',
		[varBsBtnFontFamily]: '',
		[varBsBtnFontSize]: '1rem',
		[varBsBtnFontWeight]: '600',
		[varBsBtnLineHeight]: '1.5',
		[varBsBtnColor]: varBsBodyColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderWidth]: varBsBorderWidth,
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnBorderRadius]: '50rem',
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
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

globalStyle(`${morphScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${morphScope}${btnCheck} + ${morphScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${morphScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: `${varBsBtnBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${morphScope}${btnCheck}:focus-visible + ${morphScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: `${varBsBtnBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
	boxShadow: varBsBtnActiveBoxShadow,
})

globalStyle(`${morphScope}:not(${btnCheck}) + ${morphScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
	boxShadow: varBsBtnActiveBoxShadow,
})

globalStyle(`${morphScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
	boxShadow: varBsBtnActiveBoxShadow,
})

globalStyle(`${morphScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
	boxShadow: varBsBtnActiveBoxShadow,
})

globalStyle(`${morphScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
	boxShadow: varBsBtnActiveBoxShadow,
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btn}:focus-visible`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${morphScope}:not(${btnCheck}) + ${morphScope}${btn}:active:focus-visible`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${morphScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${morphScope}${btn}${active}:focus-visible`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${morphScope}${btn}${show}:focus-visible`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${morphScope}${btnCheck}:checked:focus-visible + ${morphScope}${btn}`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${morphScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
	boxShadow: 'none',
})

globalStyle(`${morphScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
	boxShadow: 'none',
})

globalStyle(`${morphScope}${fieldset}:disabled ${morphScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
	boxShadow: 'none',
})

globalStyle(`${morphScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#378dfc',
		[varBsBtnBorderColor]: '#378dfc',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2f78d6',
		[varBsBtnHoverBorderColor]: '#2c71ca',
		[varBsBtnFocusBoxShadowRgb]: '85, 158, 252',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2c71ca',
		[varBsBtnActiveBorderColor]: '#296abd',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#378dfc',
		[varBsBtnDisabledBorderColor]: '#378dfc',
	},
})

globalStyle(`${morphScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#d9e3f1',
		[varBsBtnBorderColor]: '#d9e3f1',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#dfe7f3',
		[varBsBtnHoverBorderColor]: '#dde6f2',
		[varBsBtnFocusBoxShadowRgb]: '184, 193, 205',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#e1e9f4',
		[varBsBtnActiveBorderColor]: '#dde6f2',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#d9e3f1',
		[varBsBtnDisabledBorderColor]: '#d9e3f1',
	},
})

globalStyle(`${morphScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#43cc29',
		[varBsBtnBorderColor]: '#43cc29',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#39ad23',
		[varBsBtnHoverBorderColor]: '#36a321',
		[varBsBtnFocusBoxShadowRgb]: '95, 212, 73',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#36a321',
		[varBsBtnActiveBorderColor]: '#32991f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#43cc29',
		[varBsBtnDisabledBorderColor]: '#43cc29',
	},
})

globalStyle(`${morphScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#5b62f4',
		[varBsBtnBorderColor]: '#5b62f4',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4d53cf',
		[varBsBtnHoverBorderColor]: '#494ec3',
		[varBsBtnFocusBoxShadowRgb]: '116, 122, 246',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#494ec3',
		[varBsBtnActiveBorderColor]: '#444ab7',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#5b62f4',
		[varBsBtnDisabledBorderColor]: '#5b62f4',
	},
})

globalStyle(`${morphScope}${btnWarning}`, {
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

globalStyle(`${morphScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e52527',
		[varBsBtnBorderColor]: '#e52527',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c31f21',
		[varBsBtnHoverBorderColor]: '#b71e1f',
		[varBsBtnFocusBoxShadowRgb]: '233, 70, 71',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b71e1f',
		[varBsBtnActiveBorderColor]: '#ac1c1d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e52527',
		[varBsBtnDisabledBorderColor]: '#e52527',
	},
})

globalStyle(`${morphScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f0f5fa',
		[varBsBtnBorderColor]: '#f0f5fa',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ccd0d5',
		[varBsBtnHoverBorderColor]: '#c0c4c8',
		[varBsBtnFocusBoxShadowRgb]: '204, 208, 213',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c0c4c8',
		[varBsBtnActiveBorderColor]: '#b4b8bc',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f0f5fa',
		[varBsBtnDisabledBorderColor]: '#f0f5fa',
	},
})

globalStyle(`${morphScope}${btnDark}`, {
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

globalStyle(`${morphScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#378dfc',
		[varBsBtnBorderColor]: '#378dfc',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#378dfc',
		[varBsBtnHoverBorderColor]: '#378dfc',
		[varBsBtnFocusBoxShadowRgb]: '55, 141, 252',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#378dfc',
		[varBsBtnActiveBorderColor]: '#378dfc',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#378dfc',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#378dfc',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${morphScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#d9e3f1',
		[varBsBtnBorderColor]: '#d9e3f1',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d9e3f1',
		[varBsBtnHoverBorderColor]: '#d9e3f1',
		[varBsBtnFocusBoxShadowRgb]: '217, 227, 241',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#d9e3f1',
		[varBsBtnActiveBorderColor]: '#d9e3f1',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#d9e3f1',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#d9e3f1',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${morphScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#43cc29',
		[varBsBtnBorderColor]: '#43cc29',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#43cc29',
		[varBsBtnHoverBorderColor]: '#43cc29',
		[varBsBtnFocusBoxShadowRgb]: '67, 204, 41',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#43cc29',
		[varBsBtnActiveBorderColor]: '#43cc29',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#43cc29',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#43cc29',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${morphScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#5b62f4',
		[varBsBtnBorderColor]: '#5b62f4',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5b62f4',
		[varBsBtnHoverBorderColor]: '#5b62f4',
		[varBsBtnFocusBoxShadowRgb]: '91, 98, 244',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5b62f4',
		[varBsBtnActiveBorderColor]: '#5b62f4',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#5b62f4',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#5b62f4',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${morphScope}${btnOutlineWarning}`, {
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

globalStyle(`${morphScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#e52527',
		[varBsBtnBorderColor]: '#e52527',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e52527',
		[varBsBtnHoverBorderColor]: '#e52527',
		[varBsBtnFocusBoxShadowRgb]: '229, 37, 39',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e52527',
		[varBsBtnActiveBorderColor]: '#e52527',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e52527',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e52527',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${morphScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#f0f5fa',
		[varBsBtnBorderColor]: '#f0f5fa',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f0f5fa',
		[varBsBtnHoverBorderColor]: '#f0f5fa',
		[varBsBtnFocusBoxShadowRgb]: '240, 245, 250',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f0f5fa',
		[varBsBtnActiveBorderColor]: '#f0f5fa',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f0f5fa',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f0f5fa',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${morphScope}${btnOutlineDark}`, {
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

globalStyle(`${morphScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#7f8a99',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '99, 112, 151',
	},
	textDecoration: 'underline',
})

globalStyle(`${morphScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${morphScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${morphScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '1.5rem',
		[varBsBtnPaddingX]: '2.25rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: '50rem',
	},
})

globalStyle(`${morphScope}${btnGroupLg} > ${morphScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '1.5rem',
		[varBsBtnPaddingX]: '2.25rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: '50rem',
	},
})

globalStyle(`${morphScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: '50rem',
	},
})

globalStyle(`${morphScope}${btnGroupSm} > ${morphScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: '50rem',
	},
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btnCheck}:checked + ${morphScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btnCheck}:focus + ${morphScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnCheck}:checked + ${morphScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnCheck}:focus + ${morphScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}:not(${btnCheck}:first-child) + ${morphScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btnGroup}:not(:last-child) > ${morphScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}:not(${btnCheck}) + ${morphScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btnGroup}:not(:first-child) > ${morphScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${dropdownToggleSplit}`, {
	paddingRight: '1.125rem',
	paddingLeft: '1.125rem',
})

globalStyle(`${morphScope}${btnSm} + ${morphScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${morphScope}${btnGroupSm} > ${morphScope}${btn} + ${morphScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${morphScope}${btnLg} + ${morphScope}${dropdownToggleSplit}`, {
	paddingRight: '1.6875rem',
	paddingLeft: '1.6875rem',
})

globalStyle(`${morphScope}${btnGroupLg} > ${morphScope}${btn} + ${morphScope}${dropdownToggleSplit}`, {
	paddingRight: '1.6875rem',
	paddingLeft: '1.6875rem',
})

globalStyle(`${morphScope}${btnGroup}${show} ${morphScope}${dropdownToggle}${btnLink}`, {
	boxShadow: 'none',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}`, {
	width: '100%',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}:not(:last-child) > ${morphScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}:not(${btnCheck}) + ${morphScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}:not(:first-child) > ${morphScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${alertDismissible} ${morphScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${morphScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#485785',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23485785\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(55, 141, 252, 0.25)',
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

globalStyle(`${morphScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${morphScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${morphScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${morphScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${morphScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${morphScope}${toastHeader} ${morphScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${morphScope}${modalHeader} ${morphScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${morphScope}${offcanvasHeader} ${morphScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${morphScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${morphScope}${btn}`, {
	position: 'relative',
	color: '#7b8ab8',
	borderRadius: '50rem',
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
})

globalStyle(`${morphScope}${btn}:focus`, {
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btn}:hover`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btn}:focus`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btn}:active`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btn}:active:focus`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btn}:active`, {
	borderColor: 'transparent',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.2), inset -3px -2px 6px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${morphScope}${btn}:active:focus`, {
	borderColor: 'transparent',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.2), inset -3px -2px 6px rgba(255, 255, 255, 0.2)',
})

globalStyle(`${morphScope}${btnPrimary}:active`, {
	color: '#fff',
	backgroundColor: '#378dfc',
})

globalStyle(`${morphScope}${btnPrimary}:active:focus`, {
	color: '#fff',
	backgroundColor: '#378dfc',
})

globalStyle(`${morphScope}${btnSecondary}:active`, {
	color: '#7b8ab8',
	backgroundColor: '#d9e3f1',
})

globalStyle(`${morphScope}${btnSecondary}:active:focus`, {
	color: '#7b8ab8',
	backgroundColor: '#d9e3f1',
})

globalStyle(`${morphScope}${btnSuccess}:active`, {
	color: '#fff',
	backgroundColor: '#43cc29',
})

globalStyle(`${morphScope}${btnSuccess}:active:focus`, {
	color: '#fff',
	backgroundColor: '#43cc29',
})

globalStyle(`${morphScope}${btnInfo}:active`, {
	color: '#fff',
	backgroundColor: '#5b62f4',
})

globalStyle(`${morphScope}${btnInfo}:active:focus`, {
	color: '#fff',
	backgroundColor: '#5b62f4',
})

globalStyle(`${morphScope}${btnWarning}:active`, {
	color: '#fff',
	backgroundColor: '#ffc107',
})

globalStyle(`${morphScope}${btnWarning}:active:focus`, {
	color: '#fff',
	backgroundColor: '#ffc107',
})

globalStyle(`${morphScope}${btnDanger}:active`, {
	color: '#fff',
	backgroundColor: '#e52527',
})

globalStyle(`${morphScope}${btnDanger}:active:focus`, {
	color: '#fff',
	backgroundColor: '#e52527',
})

globalStyle(`${morphScope}${btnLight}:active`, {
	color: '#7b8ab8',
	backgroundColor: '#d9e3f1',
})

globalStyle(`${morphScope}${btnLight}:active:focus`, {
	color: '#7b8ab8',
	backgroundColor: '#d9e3f1',
})

globalStyle(`${morphScope}${btnDark}:active`, {
	color: '#fff',
	backgroundColor: '#212529',
})

globalStyle(`${morphScope}${btnDark}:active:focus`, {
	color: '#fff',
	backgroundColor: '#212529',
})

globalStyle(`${morphScope}${btnLink}`, {
	fontWeight: '600',
})

globalStyle(`${morphScope}${btnLink}:hover`, {
	color: '#212529',
})

globalStyle(`${morphScope}${btnLink}:active`, {
	color: '#212529',
})

globalStyle(`${morphScope}${btnLink}:active:focus`, {
	color: '#212529',
})

globalStyle(`${morphScope}${btn}${disabled}`, {
	color: '#7b8ab8',
	backgroundColor: '#d9e3f1',
	boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1), -2px -2px 5px rgba(255, 255, 255, 0.5)',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${btn}`, {
	backgroundColor: '#212529',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.05)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	color: 'rgba(255, 255, 255, 0.75)',
})

globalStyle(`${morphScope}${btnOutlinePrimary}`, {
	backgroundColor: '#378dfc',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlinePrimary}:hover`, {
	backgroundColor: '#378dfc',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlinePrimary}:focus`, {
	backgroundColor: '#378dfc',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlinePrimary}:active`, {
	backgroundColor: '#378dfc',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlinePrimary}:active:focus`, {
	backgroundColor: '#378dfc',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineSecondary}`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnOutlineSecondary}:hover`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnOutlineSecondary}:focus`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnOutlineSecondary}:active`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnOutlineSecondary}:active:focus`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnOutlineSuccess}`, {
	backgroundColor: '#43cc29',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineSuccess}:hover`, {
	backgroundColor: '#43cc29',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineSuccess}:focus`, {
	backgroundColor: '#43cc29',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineSuccess}:active`, {
	backgroundColor: '#43cc29',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineSuccess}:active:focus`, {
	backgroundColor: '#43cc29',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineInfo}`, {
	backgroundColor: '#5b62f4',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineInfo}:hover`, {
	backgroundColor: '#5b62f4',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineInfo}:focus`, {
	backgroundColor: '#5b62f4',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineInfo}:active`, {
	backgroundColor: '#5b62f4',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineInfo}:active:focus`, {
	backgroundColor: '#5b62f4',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineWarning}`, {
	backgroundColor: '#ffc107',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineWarning}:hover`, {
	backgroundColor: '#ffc107',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineWarning}:focus`, {
	backgroundColor: '#ffc107',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineWarning}:active`, {
	backgroundColor: '#ffc107',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineWarning}:active:focus`, {
	backgroundColor: '#ffc107',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineDanger}`, {
	backgroundColor: '#e52527',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineDanger}:hover`, {
	backgroundColor: '#e52527',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineDanger}:focus`, {
	backgroundColor: '#e52527',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineDanger}:active`, {
	backgroundColor: '#e52527',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineDanger}:active:focus`, {
	backgroundColor: '#e52527',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineLight}`, {
	backgroundColor: '#f0f5fa',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnOutlineLight}:hover`, {
	backgroundColor: '#f0f5fa',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnOutlineLight}:focus`, {
	backgroundColor: '#f0f5fa',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnOutlineLight}:active`, {
	backgroundColor: '#f0f5fa',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnOutlineLight}:active:focus`, {
	backgroundColor: '#f0f5fa',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnOutlineDark}`, {
	backgroundColor: '#212529',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineDark}:hover`, {
	backgroundColor: '#212529',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineDark}:focus`, {
	backgroundColor: '#212529',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineDark}:active`, {
	backgroundColor: '#212529',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnOutlineDark}:active:focus`, {
	backgroundColor: '#212529',
	border: 'none',
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.1), inset -3px -2px 6px rgba(255, 255, 255, 0.1)',
	color: '#fff',
})

globalStyle(`${morphScope}${btnGroup} ${morphScope}${btn}`, {
	margin: '0',
	border: 'none',
	boxShadow: 'none',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btn}`, {
	margin: '0',
	border: 'none',
	boxShadow: 'none',
})

globalStyle(`${morphScope}${btnGroup} ${morphScope}${btn}:hover`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroup} ${morphScope}${btn}:active`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroup} ${morphScope}${btn}:focus`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroup} ${morphScope}${btn}:active:focus`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btn}:hover`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btn}:active`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btn}:focus`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btn}:active:focus`, {
	border: 'none',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}:nth-child(n+3)`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}:not(${btnCheck}) + ${morphScope}${btn}`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btnGroup}:not(:first-child) > ${morphScope}${btn}`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}:nth-child(n+3):hover`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}:nth-child(n+3):active`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}:nth-child(n+3):active:focus`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}:not(${btnCheck}) + ${morphScope}${btn}:hover`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}:not(${btnCheck}) + ${morphScope}${btn}:active`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}:not(${btnCheck}) + ${morphScope}${btn}:active:focus`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btnGroup}:not(:first-child) > ${morphScope}${btn}:hover`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btnGroup}:not(:first-child) > ${morphScope}${btn}:active`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btnGroup}:not(:first-child) > ${morphScope}${btn}:active:focus`, {
	borderLeft: '1px solid rgba(55, 94, 148, 0.1)',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroup} > ${morphScope}${btnGroup}:not(:last-child) > ${morphScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btn}`, {
	borderRadius: '1rem',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btn}:hover`, {
	borderRadius: '1rem',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btn}:active`, {
	borderRadius: '1rem',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btn}:focus`, {
	borderRadius: '1rem',
})

globalStyle(`${morphScope}${btnGroupVertical} ${morphScope}${btn}:active:focus`, {
	borderRadius: '1rem',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:nth-child(n+3)`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}:not(${btnCheck}) + ${morphScope}${btn}`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}:not(:first-child) > ${morphScope}${btn}`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:nth-child(n+3):hover`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:nth-child(n+3):active`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:nth-child(n+3):active:focus`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}:not(${btnCheck}) + ${morphScope}${btn}:hover`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}:not(${btnCheck}) + ${morphScope}${btn}:active`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}:not(${btnCheck}) + ${morphScope}${btn}:active:focus`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}:not(:first-child) > ${morphScope}${btn}:hover`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}:not(:first-child) > ${morphScope}${btn}:active`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}:not(:first-child) > ${morphScope}${btn}:active:focus`, {
	borderTop: '1px solid rgba(0, 0, 0, 0.05)',
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}:not(:last-child) > ${morphScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:not(:last-child):not(${dropdownToggle}):hover`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:not(:last-child):not(${dropdownToggle}):active`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btn}:not(:last-child):not(${dropdownToggle}):active:focus`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}:not(:last-child) > ${morphScope}${btn}:hover`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}:not(:last-child) > ${morphScope}${btn}:active`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnGroupVertical} > ${morphScope}${btnGroup}:not(:last-child) > ${morphScope}${btn}:active:focus`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btn}`, {
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btn}`, {
	boxShadow: 'inset 2px 3px 6px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnPrimary}`, {
	backgroundColor: '#378dfc',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnPrimary}`, {
	backgroundColor: '#378dfc',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:checked + ${morphScope}${btnPrimary}`, {
	color: '#378dfc',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:checked + ${morphScope}${btnPrimary}`, {
	color: '#378dfc',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:active + ${morphScope}${btnPrimary}`, {
	color: '#378dfc',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:active + ${morphScope}${btnPrimary}`, {
	color: '#378dfc',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnSecondary}`, {
	backgroundColor: '#d9e3f1',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnSecondary}`, {
	backgroundColor: '#d9e3f1',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:checked + ${morphScope}${btnSecondary}`, {
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:checked + ${morphScope}${btnSecondary}`, {
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:active + ${morphScope}${btnSecondary}`, {
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:active + ${morphScope}${btnSecondary}`, {
	color: '#7b8ab8',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnSuccess}`, {
	backgroundColor: '#43cc29',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnSuccess}`, {
	backgroundColor: '#43cc29',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:checked + ${morphScope}${btnSuccess}`, {
	color: '#43cc29',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:checked + ${morphScope}${btnSuccess}`, {
	color: '#43cc29',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:active + ${morphScope}${btnSuccess}`, {
	color: '#43cc29',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:active + ${morphScope}${btnSuccess}`, {
	color: '#43cc29',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnInfo}`, {
	backgroundColor: '#5b62f4',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnInfo}`, {
	backgroundColor: '#5b62f4',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:checked + ${morphScope}${btnInfo}`, {
	color: '#5b62f4',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:checked + ${morphScope}${btnInfo}`, {
	color: '#5b62f4',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:active + ${morphScope}${btnInfo}`, {
	color: '#5b62f4',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:active + ${morphScope}${btnInfo}`, {
	color: '#5b62f4',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnWarning}`, {
	backgroundColor: '#ffc107',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnWarning}`, {
	backgroundColor: '#ffc107',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:checked + ${morphScope}${btnWarning}`, {
	color: '#ffc107',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:checked + ${morphScope}${btnWarning}`, {
	color: '#ffc107',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:active + ${morphScope}${btnWarning}`, {
	color: '#ffc107',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:active + ${morphScope}${btnWarning}`, {
	color: '#ffc107',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnDanger}`, {
	backgroundColor: '#e52527',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnDanger}`, {
	backgroundColor: '#e52527',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:checked + ${morphScope}${btnDanger}`, {
	color: '#e52527',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:checked + ${morphScope}${btnDanger}`, {
	color: '#e52527',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:active + ${morphScope}${btnDanger}`, {
	color: '#e52527',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:active + ${morphScope}${btnDanger}`, {
	color: '#e52527',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnLight}`, {
	backgroundColor: '#f0f5fa',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnLight}`, {
	backgroundColor: '#f0f5fa',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:checked + ${morphScope}${btnLight}`, {
	color: '#f0f5fa',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:checked + ${morphScope}${btnLight}`, {
	color: '#f0f5fa',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:active + ${morphScope}${btnLight}`, {
	color: '#f0f5fa',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:active + ${morphScope}${btnLight}`, {
	color: '#f0f5fa',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnDark}`, {
	backgroundColor: '#212529',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnDark}`, {
	backgroundColor: '#212529',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:checked + ${morphScope}${btnDark}`, {
	color: '#212529',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:checked + ${morphScope}${btnDark}`, {
	color: '#212529',
})

globalStyle(`${morphScope}${btnCheck}:checked + ${morphScope}${btnCheck}:active + ${morphScope}${btnDark}`, {
	color: '#212529',
})

globalStyle(`${morphScope}${btnCheck}:active + ${morphScope}${btnCheck}:active + ${morphScope}${btnDark}`, {
	color: '#212529',
})

globalStyle(`${morphScope}${btnCheck}:not(:checked) + ${morphScope}${btn}`, {
	color: '#7b8ab8',
	backgroundColor: '#d9e3f1',
})

globalStyle(`${morphScope}${btnCheck}:not(:checked) + ${morphScope}${btn}:active`, {
	color: '#7b8ab8',
	backgroundColor: '#d9e3f1',
})

globalStyle(`${morphScope}${btnCheck}:checked ~ ${morphScope}${btnCheck}:active + ${morphScope}${btn}`, {
	boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${morphScope}${btnCheck}:checked ~ ${morphScope}${btnCheck}:checked + ${morphScope}${btn}`, {
	boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${btnCheck}:not(:checked) + ${morphScope}${btn}`, {
	color: 'rgba(255, 255, 255, 0.75)',
	backgroundColor: '#212529',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${btnCheck}:not(:checked) + ${morphScope}${btn}:active`, {
	color: 'rgba(255, 255, 255, 0.75)',
	backgroundColor: '#212529',
})

globalStyle(`${morphScope}${inputGroup} ${morphScope}${btn}`, {
	border: 'none',
	borderRadius: '0',
})

globalStyle(`${morphScope}${inputGroup} ${morphScope}${btn}:first-child`, {
	borderRadius: '0.375rem 0 0 0.375rem',
})

globalStyle(`${morphScope}${inputGroup} ${morphScope}${btn}:last-child`, {
	borderRadius: '0 0.375rem 0.375rem 0',
})
