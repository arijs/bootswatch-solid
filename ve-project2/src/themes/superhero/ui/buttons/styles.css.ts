import { globalStyle } from '@vanilla-extract/css'
import { superheroScope } from '../../scope.css'

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

import { table } from '../../../../theme-contract/contents/tables/contract.css'
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

globalStyle(`${superheroScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${superheroScope}${btnCheck}[disabled] + ${superheroScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${superheroScope}${btnCheck}:disabled + ${superheroScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${superheroScope}${inputGroup} ${superheroScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${superheroScope}${inputGroup} ${superheroScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${superheroScope}${inputGroupLg} > ${superheroScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${superheroScope}${inputGroupSm} > ${superheroScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${superheroScope}${btn}`, {
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

globalStyle(`${superheroScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${superheroScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${superheroScope}${btnCheck} + ${superheroScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${superheroScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${superheroScope}${btnCheck}:focus-visible + ${superheroScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${superheroScope}${btnCheck}:checked + ${superheroScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${superheroScope}:not(${btnCheck}) + ${superheroScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${superheroScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${superheroScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${superheroScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${superheroScope}${btnCheck}:checked + ${superheroScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${superheroScope}:not(${btnCheck}) + ${superheroScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${superheroScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${superheroScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${superheroScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${superheroScope}${btnCheck}:checked:focus-visible + ${superheroScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${superheroScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${superheroScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${superheroScope}${fieldset}:disabled ${superheroScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${superheroScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#df6919',
		[varBsBtnBorderColor]: '#df6919',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#be5915',
		[varBsBtnHoverBorderColor]: '#b25414',
		[varBsBtnFocusBoxShadowRgb]: '228, 128, 60',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b25414',
		[varBsBtnActiveBorderColor]: '#a74f13',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#df6919',
		[varBsBtnDisabledBorderColor]: '#df6919',
	},
})

globalStyle(`${superheroScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#4e5d6c',
		[varBsBtnBorderColor]: '#4e5d6c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#424f5c',
		[varBsBtnHoverBorderColor]: '#3e4a56',
		[varBsBtnFocusBoxShadowRgb]: '105, 117, 130',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3e4a56',
		[varBsBtnActiveBorderColor]: '#3b4651',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#4e5d6c',
		[varBsBtnDisabledBorderColor]: '#4e5d6c',
	},
})

globalStyle(`${superheroScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#5cb85c',
		[varBsBtnBorderColor]: '#5cb85c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4e9c4e',
		[varBsBtnHoverBorderColor]: '#4a934a',
		[varBsBtnFocusBoxShadowRgb]: '116, 195, 116',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4a934a',
		[varBsBtnActiveBorderColor]: '#458a45',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#5cb85c',
		[varBsBtnDisabledBorderColor]: '#5cb85c',
	},
})

globalStyle(`${superheroScope}${btnInfo}`, {
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

globalStyle(`${superheroScope}${btnWarning}`, {
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

globalStyle(`${superheroScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#d9534f',
		[varBsBtnBorderColor]: '#d9534f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#b84743',
		[varBsBtnHoverBorderColor]: '#ae423f',
		[varBsBtnFocusBoxShadowRgb]: '223, 109, 105',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ae423f',
		[varBsBtnActiveBorderColor]: '#a33e3b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#d9534f',
		[varBsBtnDisabledBorderColor]: '#d9534f',
	},
})

globalStyle(`${superheroScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#abb6c2',
		[varBsBtnBorderColor]: '#abb6c2',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#919ba5',
		[varBsBtnHoverBorderColor]: '#89929b',
		[varBsBtnFocusBoxShadowRgb]: '184, 193, 203',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#89929b',
		[varBsBtnActiveBorderColor]: '#808992',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#abb6c2',
		[varBsBtnDisabledBorderColor]: '#abb6c2',
	},
})

globalStyle(`${superheroScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#20374c',
		[varBsBtnBorderColor]: '#20374c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#415567',
		[varBsBtnHoverBorderColor]: '#364b5e',
		[varBsBtnFocusBoxShadowRgb]: '65, 85, 103',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4d5f70',
		[varBsBtnActiveBorderColor]: '#364b5e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#20374c',
		[varBsBtnDisabledBorderColor]: '#20374c',
	},
})

globalStyle(`${superheroScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#df6919',
		[varBsBtnBorderColor]: '#df6919',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#df6919',
		[varBsBtnHoverBorderColor]: '#df6919',
		[varBsBtnFocusBoxShadowRgb]: '223, 105, 25',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#df6919',
		[varBsBtnActiveBorderColor]: '#df6919',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#df6919',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#df6919',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${superheroScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#4e5d6c',
		[varBsBtnBorderColor]: '#4e5d6c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4e5d6c',
		[varBsBtnHoverBorderColor]: '#4e5d6c',
		[varBsBtnFocusBoxShadowRgb]: '78, 93, 108',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4e5d6c',
		[varBsBtnActiveBorderColor]: '#4e5d6c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#4e5d6c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#4e5d6c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${superheroScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#5cb85c',
		[varBsBtnBorderColor]: '#5cb85c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5cb85c',
		[varBsBtnHoverBorderColor]: '#5cb85c',
		[varBsBtnFocusBoxShadowRgb]: '92, 184, 92',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5cb85c',
		[varBsBtnActiveBorderColor]: '#5cb85c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#5cb85c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#5cb85c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${superheroScope}${btnOutlineInfo}`, {
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

globalStyle(`${superheroScope}${btnOutlineWarning}`, {
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

globalStyle(`${superheroScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#d9534f',
		[varBsBtnBorderColor]: '#d9534f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d9534f',
		[varBsBtnHoverBorderColor]: '#d9534f',
		[varBsBtnFocusBoxShadowRgb]: '217, 83, 79',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#d9534f',
		[varBsBtnActiveBorderColor]: '#d9534f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#d9534f',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#d9534f',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${superheroScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#abb6c2',
		[varBsBtnBorderColor]: '#abb6c2',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#abb6c2',
		[varBsBtnHoverBorderColor]: '#abb6c2',
		[varBsBtnFocusBoxShadowRgb]: '171, 182, 194',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#abb6c2',
		[varBsBtnActiveBorderColor]: '#abb6c2',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#abb6c2',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#abb6c2',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${superheroScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#20374c',
		[varBsBtnBorderColor]: '#20374c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#20374c',
		[varBsBtnHoverBorderColor]: '#20374c',
		[varBsBtnFocusBoxShadowRgb]: '32, 55, 76',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#20374c',
		[varBsBtnActiveBorderColor]: '#20374c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#20374c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#20374c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${superheroScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#4e5d6c',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '228, 128, 60',
	},
	textDecoration: 'underline',
})

globalStyle(`${superheroScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${superheroScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${superheroScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${superheroScope}${btnGroupLg} > ${superheroScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${superheroScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${superheroScope}${btnGroupSm} > ${superheroScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}${btnCheck}:checked + ${superheroScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}${btnCheck}:focus + ${superheroScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btnCheck}:checked + ${superheroScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btnCheck}:focus + ${superheroScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}:not(${btnCheck}:first-child) + ${superheroScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}${btnGroup}:not(:last-child) > ${superheroScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}:not(${btnCheck}) + ${superheroScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${superheroScope}${btnGroup} > ${superheroScope}${btnGroup}:not(:first-child) > ${superheroScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${superheroScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${superheroScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${superheroScope}${dropup} ${superheroScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${superheroScope}${dropend} ${superheroScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${superheroScope}${dropstart} ${superheroScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${superheroScope}${btnSm} + ${superheroScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${superheroScope}${btnGroupSm} > ${superheroScope}${btn} + ${superheroScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${superheroScope}${btnLg} + ${superheroScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${superheroScope}${btnGroupLg} > ${superheroScope}${btn} + ${superheroScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btn}`, {
	width: '100%',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btnGroup}:not(:last-child) > ${superheroScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}:not(${btnCheck}) + ${superheroScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${superheroScope}${btnGroupVertical} > ${superheroScope}${btnGroup}:not(:first-child) > ${superheroScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${superheroScope}${alertDismissible} ${superheroScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${superheroScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#fff',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '1',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(223, 105, 25, 0.25)',
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
	borderRadius: '0',
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${superheroScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${superheroScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${superheroScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${superheroScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${superheroScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${superheroScope}${toastHeader} ${superheroScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${superheroScope}${modalHeader} ${superheroScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${superheroScope}${offcanvasHeader} ${superheroScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${superheroScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${superheroScope}${btnPrimary}`, {
	backgroundColor: '#df6919',
})

globalStyle(`${superheroScope}${btnSecondary}`, {
	backgroundColor: '#4e5d6c',
})

globalStyle(`${superheroScope}${btnSuccess}`, {
	backgroundColor: '#5cb85c',
})

globalStyle(`${superheroScope}${btnInfo}`, {
	backgroundColor: '#5bc0de',
})

globalStyle(`${superheroScope}${btnWarning}`, {
	backgroundColor: '#ffc107',
})

globalStyle(`${superheroScope}${btnDanger}`, {
	backgroundColor: '#d9534f',
})

globalStyle(`${superheroScope}${btnLight}`, {
	backgroundColor: '#abb6c2',
})

globalStyle(`${superheroScope}${btnDark}`, {
	backgroundColor: '#20374c',
})

globalStyle(`${superheroScope}${table} ${superheroScope}${link}:not(${btn})`, {
	color: '#fff',
	textDecoration: 'underline',
})
