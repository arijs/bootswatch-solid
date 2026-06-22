import { globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../../scope.css'

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

globalStyle(`${luxScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${luxScope}${btnCheck}[disabled] + ${luxScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${luxScope}${btnCheck}:disabled + ${luxScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${luxScope}${inputGroup} ${luxScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${luxScope}${inputGroup} ${luxScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${luxScope}${inputGroupLg} > ${luxScope}${btn}`, {
	padding: '2rem 2rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${inputGroupSm} > ${luxScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1.5rem',
		[varBsBtnPaddingY]: '0.75rem',
		[varBsBtnFontFamily]: '',
		[varBsBtnFontSize]: '1rem',
		[varBsBtnFontWeight]: '600',
		[varBsBtnLineHeight]: '1.5rem',
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

globalStyle(`${luxScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${luxScope}${btnCheck} + ${luxScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${luxScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btnCheck}:focus-visible + ${luxScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btnCheck}:checked + ${luxScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${luxScope}:not(${btnCheck}) + ${luxScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${luxScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${luxScope}${btnCheck}:checked + ${luxScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}:not(${btnCheck}) + ${luxScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btnCheck}:checked:focus-visible + ${luxScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${luxScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${luxScope}${fieldset}:disabled ${luxScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${luxScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#1a1a1a',
		[varBsBtnBorderColor]: '#1a1a1a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#161616',
		[varBsBtnHoverBorderColor]: '#151515',
		[varBsBtnFocusBoxShadowRgb]: '60, 60, 60',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#151515',
		[varBsBtnActiveBorderColor]: '#141414',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#1a1a1a',
		[varBsBtnDisabledBorderColor]: '#1a1a1a',
	},
})

globalStyle(`${luxScope}${btnSecondary}`, {
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

globalStyle(`${luxScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#4bbf73',
		[varBsBtnBorderColor]: '#4bbf73',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#40a262',
		[varBsBtnHoverBorderColor]: '#3c995c',
		[varBsBtnFocusBoxShadowRgb]: '102, 201, 136',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3c995c',
		[varBsBtnActiveBorderColor]: '#388f56',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#4bbf73',
		[varBsBtnDisabledBorderColor]: '#4bbf73',
	},
})

globalStyle(`${luxScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#1f9bcf',
		[varBsBtnBorderColor]: '#1f9bcf',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1a84b0',
		[varBsBtnHoverBorderColor]: '#197ca6',
		[varBsBtnFocusBoxShadowRgb]: '65, 170, 214',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#197ca6',
		[varBsBtnActiveBorderColor]: '#17749b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#1f9bcf',
		[varBsBtnDisabledBorderColor]: '#1f9bcf',
	},
})

globalStyle(`${luxScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f0ad4e',
		[varBsBtnBorderColor]: '#f0ad4e',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cc9342',
		[varBsBtnHoverBorderColor]: '#c08a3e',
		[varBsBtnFocusBoxShadowRgb]: '242, 185, 105',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c08a3e',
		[varBsBtnActiveBorderColor]: '#b4823b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f0ad4e',
		[varBsBtnDisabledBorderColor]: '#f0ad4e',
	},
})

globalStyle(`${luxScope}${btnDanger}`, {
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

globalStyle(`${luxScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f0f1f2',
		[varBsBtnBorderColor]: '#f0f1f2',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#cccdce',
		[varBsBtnHoverBorderColor]: '#c0c1c2',
		[varBsBtnFocusBoxShadowRgb]: '204, 205, 206',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#c0c1c2',
		[varBsBtnActiveBorderColor]: '#b4b5b6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f0f1f2',
		[varBsBtnDisabledBorderColor]: '#f0f1f2',
	},
})

globalStyle(`${luxScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#343a40',
		[varBsBtnBorderColor]: '#343a40',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#52585d',
		[varBsBtnHoverBorderColor]: '#484e53',
		[varBsBtnFocusBoxShadowRgb]: '82, 88, 93',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5d6166',
		[varBsBtnActiveBorderColor]: '#484e53',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#343a40',
		[varBsBtnDisabledBorderColor]: '#343a40',
	},
})

globalStyle(`${luxScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#1a1a1a',
		[varBsBtnBorderColor]: '#1a1a1a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1a1a1a',
		[varBsBtnHoverBorderColor]: '#1a1a1a',
		[varBsBtnFocusBoxShadowRgb]: '26, 26, 26',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1a1a1a',
		[varBsBtnActiveBorderColor]: '#1a1a1a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#1a1a1a',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#1a1a1a',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineSecondary}`, {
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

globalStyle(`${luxScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#4bbf73',
		[varBsBtnBorderColor]: '#4bbf73',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#4bbf73',
		[varBsBtnHoverBorderColor]: '#4bbf73',
		[varBsBtnFocusBoxShadowRgb]: '75, 191, 115',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#4bbf73',
		[varBsBtnActiveBorderColor]: '#4bbf73',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#4bbf73',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#4bbf73',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#1f9bcf',
		[varBsBtnBorderColor]: '#1f9bcf',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1f9bcf',
		[varBsBtnHoverBorderColor]: '#1f9bcf',
		[varBsBtnFocusBoxShadowRgb]: '31, 155, 207',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1f9bcf',
		[varBsBtnActiveBorderColor]: '#1f9bcf',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#1f9bcf',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#1f9bcf',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f0ad4e',
		[varBsBtnBorderColor]: '#f0ad4e',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f0ad4e',
		[varBsBtnHoverBorderColor]: '#f0ad4e',
		[varBsBtnFocusBoxShadowRgb]: '240, 173, 78',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f0ad4e',
		[varBsBtnActiveBorderColor]: '#f0ad4e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f0ad4e',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f0ad4e',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineDanger}`, {
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

globalStyle(`${luxScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#f0f1f2',
		[varBsBtnBorderColor]: '#f0f1f2',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f0f1f2',
		[varBsBtnHoverBorderColor]: '#f0f1f2',
		[varBsBtnFocusBoxShadowRgb]: '240, 241, 242',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f0f1f2',
		[varBsBtnActiveBorderColor]: '#f0f1f2',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f0f1f2',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f0f1f2',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#343a40',
		[varBsBtnBorderColor]: '#343a40',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#343a40',
		[varBsBtnHoverBorderColor]: '#343a40',
		[varBsBtnFocusBoxShadowRgb]: '52, 58, 64',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#343a40',
		[varBsBtnActiveBorderColor]: '#343a40',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#343a40',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#343a40',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${luxScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '300',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#919aa1',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '60, 60, 60',
	},
	textDecoration: 'underline',
})

globalStyle(`${luxScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${luxScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${luxScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '2rem',
		[varBsBtnPaddingX]: '2rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${luxScope}${btnGroupLg} > ${luxScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '2rem',
		[varBsBtnPaddingX]: '2rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${luxScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${luxScope}${btnGroupSm} > ${luxScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btnCheck}:checked + ${luxScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btnCheck}:focus + ${luxScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btnCheck}:checked + ${luxScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btnCheck}:focus + ${luxScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${luxScope}${btnGroup} > ${luxScope}:not(${btnCheck}:first-child) + ${luxScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}`, {
	width: '100%',
})

globalStyle(`${luxScope}${btnGroupVertical} > ${luxScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${luxScope}${alertDismissible} ${luxScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${luxScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
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

globalStyle(`${luxScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${luxScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${luxScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${luxScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${luxScope}${toastHeader} ${luxScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${luxScope}${modalHeader} ${luxScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${luxScope}${offcanvasHeader} ${luxScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${luxScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${luxScope}${btn}`, {
	fontSize: '0.875rem',
	textTransform: 'uppercase',
})

globalStyle(`${luxScope}${btnSm}`, {
	fontSize: '10px',
})

globalStyle(`${luxScope}${btnGroupSm} > ${luxScope}${btn}`, {
	fontSize: '10px',
})

globalStyle(`${luxScope}${btnPrimary}`, {
	vars: {
		[varBsBtnHoverBg]: '#000',
		[varBsBtnHoverBorderColor]: '#000',
		[varBsBtnActiveBg]: '#000',
		[varBsBtnActiveBorderColor]: '#000',
	},
})

globalStyle(`${luxScope}${btnSecondary}`, {
	vars: {
		[varBsBtnHoverBg]: '#f0f1f2',
		[varBsBtnHoverBorderColor]: '#f0f1f2',
		[varBsBtnActiveBg]: '#e0e1e2',
		[varBsBtnActiveBorderColor]: '#e0e1e2',
	},
})

globalStyle(`${luxScope}${btnLight}`, {
	vars: {
		[varBsBtnHoverBg]: '#e0e1e2',
		[varBsBtnHoverBorderColor]: '#e0e1e2',
		[varBsBtnActiveBg]: '#cdcecf',
		[varBsBtnActiveBorderColor]: '#cdcecf',
	},
})

globalStyle(`${luxScope}${btnLink}`, {
	fontWeight: '600',
})

globalStyle(`${luxScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnHoverBg]: '#f0f1f2',
		[varBsBtnHoverBorderColor]: '#f0f1f2',
		[varBsBtnActiveBg]: '#e0e1e2',
		[varBsBtnActiveBorderColor]: '#e0e1e2',
	},
	borderColor: '#f8f9fa',
})

globalStyle(`${luxScope}${btnOutlineLight}`, {
	color: varBsBtnActiveColor,
})

globalStyle(`${luxScope}${btnOutlineDanger}, ${luxScope}${btnOutlineDark}, ${luxScope}${btnOutlineInfo}, ${luxScope}${btnOutlineLight}, ${luxScope}${btnOutlinePrimary}, ${luxScope}${btnOutlineSecondary}, ${luxScope}${btnOutlineSuccess}, ${luxScope}${btnOutlineWarning}`, {
	borderWidth: '2px',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${btnPrimary}`, {
	vars: {
		[varBsBtnBg]: '#080808',
		[varBsBtnHoverBg]: '#000',
	},
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnHoverBg]: '#000',
	},
	color: '#fff',
	borderColor: '#080808',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f0f1f2',
		[varBsBtnHoverBorderColor]: '#f0f1f2',
		[varBsBtnActiveBg]: '#e0e1e2',
		[varBsBtnActiveBorderColor]: '#e0e1e2',
	},
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${btnOutlineLight}`, {
	color: '#fff',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${btnOutlineDark}`, {
	color: '#fff',
})
