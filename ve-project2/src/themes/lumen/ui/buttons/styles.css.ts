import { globalStyle } from '@vanilla-extract/css'
import { lumenScope } from '../../scope.css'

import {
	varBsBodyColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsGradient,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsTertiaryColor,
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
import {
	dropdownToggleSplit,
	dropend,
	dropstart,
	dropup,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import { modal, modalHeader } from '../../../../theme-contract/ui/modal/contract.css'
import { show } from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvas, offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toast, toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${lumenScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${lumenScope}${btnCheck}[disabled] + ${lumenScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${lumenScope}${btnCheck}:disabled + ${lumenScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${lumenScope}${inputGroup} ${lumenScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${lumenScope}${inputGroup} ${lumenScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${lumenScope}${inputGroupLg} > ${lumenScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${lumenScope}${inputGroupSm} > ${lumenScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${lumenScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '0.75rem',
		[varBsBtnPaddingY]: '0.375rem',
		[varBsBtnFontFamily]: '',
		[varBsBtnFontSize]: '1rem',
		[varBsBtnFontWeight]: '700',
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

globalStyle(`${lumenScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${lumenScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${lumenScope}${btnCheck} + ${lumenScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${lumenScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${lumenScope}${btnCheck}:focus-visible + ${lumenScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${lumenScope}${btnCheck}:checked + ${lumenScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${lumenScope}:not(${btnCheck}) + ${lumenScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${lumenScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${lumenScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${lumenScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${lumenScope}${btnCheck}:checked + ${lumenScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${lumenScope}:not(${btnCheck}) + ${lumenScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${lumenScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${lumenScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${lumenScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${lumenScope}${btnCheck}:checked:focus-visible + ${lumenScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${lumenScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${lumenScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${lumenScope}${fieldset}:disabled ${lumenScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${lumenScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#158cba',
		[varBsBtnBorderColor]: '#158cba',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#12779e',
		[varBsBtnHoverBorderColor]: '#117095',
		[varBsBtnFocusBoxShadowRgb]: '56, 157, 196',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#117095',
		[varBsBtnActiveBorderColor]: '#10698c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#158cba',
		[varBsBtnDisabledBorderColor]: '#158cba',
	},
})

globalStyle(`${lumenScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f0f0f0',
		[varBsBtnBorderColor]: '#f0f0f0',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f2f2f2',
		[varBsBtnHoverBorderColor]: '#f2f2f2',
		[varBsBtnFocusBoxShadowRgb]: '204, 204, 204',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f3f3f3',
		[varBsBtnActiveBorderColor]: '#f2f2f2',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f0f0f0',
		[varBsBtnDisabledBorderColor]: '#f0f0f0',
	},
})

globalStyle(`${lumenScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#28b62c',
		[varBsBtnBorderColor]: '#28b62c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#229b25',
		[varBsBtnHoverBorderColor]: '#209223',
		[varBsBtnFocusBoxShadowRgb]: '72, 193, 76',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#209223',
		[varBsBtnActiveBorderColor]: '#1e8921',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#28b62c',
		[varBsBtnDisabledBorderColor]: '#28b62c',
	},
})

globalStyle(`${lumenScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#75caeb',
		[varBsBtnBorderColor]: '#75caeb',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#63acc8',
		[varBsBtnHoverBorderColor]: '#5ea2bc',
		[varBsBtnFocusBoxShadowRgb]: '138, 210, 238',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#5ea2bc',
		[varBsBtnActiveBorderColor]: '#5898b0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#75caeb',
		[varBsBtnDisabledBorderColor]: '#75caeb',
	},
})

globalStyle(`${lumenScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ff851b',
		[varBsBtnBorderColor]: '#ff851b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d97117',
		[varBsBtnHoverBorderColor]: '#cc6a16',
		[varBsBtnFocusBoxShadowRgb]: '255, 151, 61',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc6a16',
		[varBsBtnActiveBorderColor]: '#bf6414',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ff851b',
		[varBsBtnDisabledBorderColor]: '#ff851b',
	},
})

globalStyle(`${lumenScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#ff4136',
		[varBsBtnBorderColor]: '#ff4136',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d9372e',
		[varBsBtnHoverBorderColor]: '#cc342b',
		[varBsBtnFocusBoxShadowRgb]: '255, 94, 84',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#cc342b',
		[varBsBtnActiveBorderColor]: '#bf3129',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#ff4136',
		[varBsBtnDisabledBorderColor]: '#ff4136',
	},
})

globalStyle(`${lumenScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f6f6f6',
		[varBsBtnBorderColor]: '#f6f6f6',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d1d1d1',
		[varBsBtnHoverBorderColor]: '#c5c5c5',
		[varBsBtnFocusBoxShadowRgb]: '209, 209, 209',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#c5c5c5',
		[varBsBtnActiveBorderColor]: '#b9b9b9',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f6f6f6',
		[varBsBtnDisabledBorderColor]: '#f6f6f6',
	},
})

globalStyle(`${lumenScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#555',
		[varBsBtnBorderColor]: '#555',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#6f6f6f',
		[varBsBtnHoverBorderColor]: '#666666',
		[varBsBtnFocusBoxShadowRgb]: '111, 111, 111',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#777777',
		[varBsBtnActiveBorderColor]: '#666666',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#555',
		[varBsBtnDisabledBorderColor]: '#555',
	},
})

globalStyle(`${lumenScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#158cba',
		[varBsBtnBorderColor]: '#158cba',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#158cba',
		[varBsBtnHoverBorderColor]: '#158cba',
		[varBsBtnFocusBoxShadowRgb]: '21, 140, 186',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#158cba',
		[varBsBtnActiveBorderColor]: '#158cba',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#158cba',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#158cba',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${lumenScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#f0f0f0',
		[varBsBtnBorderColor]: '#f0f0f0',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f0f0f0',
		[varBsBtnHoverBorderColor]: '#f0f0f0',
		[varBsBtnFocusBoxShadowRgb]: '240, 240, 240',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f0f0f0',
		[varBsBtnActiveBorderColor]: '#f0f0f0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f0f0f0',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f0f0f0',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${lumenScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#28b62c',
		[varBsBtnBorderColor]: '#28b62c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#28b62c',
		[varBsBtnHoverBorderColor]: '#28b62c',
		[varBsBtnFocusBoxShadowRgb]: '40, 182, 44',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#28b62c',
		[varBsBtnActiveBorderColor]: '#28b62c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#28b62c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#28b62c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${lumenScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#75caeb',
		[varBsBtnBorderColor]: '#75caeb',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#75caeb',
		[varBsBtnHoverBorderColor]: '#75caeb',
		[varBsBtnFocusBoxShadowRgb]: '117, 202, 235',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#75caeb',
		[varBsBtnActiveBorderColor]: '#75caeb',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#75caeb',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#75caeb',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${lumenScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ff851b',
		[varBsBtnBorderColor]: '#ff851b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ff851b',
		[varBsBtnHoverBorderColor]: '#ff851b',
		[varBsBtnFocusBoxShadowRgb]: '255, 133, 27',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ff851b',
		[varBsBtnActiveBorderColor]: '#ff851b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ff851b',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ff851b',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${lumenScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#ff4136',
		[varBsBtnBorderColor]: '#ff4136',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#ff4136',
		[varBsBtnHoverBorderColor]: '#ff4136',
		[varBsBtnFocusBoxShadowRgb]: '255, 65, 54',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ff4136',
		[varBsBtnActiveBorderColor]: '#ff4136',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ff4136',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ff4136',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${lumenScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#f6f6f6',
		[varBsBtnBorderColor]: '#f6f6f6',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f6f6f6',
		[varBsBtnHoverBorderColor]: '#f6f6f6',
		[varBsBtnFocusBoxShadowRgb]: '246, 246, 246',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f6f6f6',
		[varBsBtnActiveBorderColor]: '#f6f6f6',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f6f6f6',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f6f6f6',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${lumenScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#555',
		[varBsBtnBorderColor]: '#555',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#555',
		[varBsBtnHoverBorderColor]: '#555',
		[varBsBtnFocusBoxShadowRgb]: '85, 85, 85',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#555',
		[varBsBtnActiveBorderColor]: '#555',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#555',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#555',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${lumenScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#999',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '56, 157, 196',
	},
	textDecoration: 'underline',
})

globalStyle(`${lumenScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${lumenScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${lumenScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${lumenScope}${btnGroupLg} > ${lumenScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${lumenScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${lumenScope}${btnGroupSm} > ${lumenScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btnCheck}:checked + ${lumenScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btnCheck}:focus + ${lumenScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btnCheck}:checked + ${lumenScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btnCheck}:focus + ${lumenScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}:not(${btnCheck}:first-child) + ${lumenScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btnGroup}:not(:last-child) > ${lumenScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}:not(${btnCheck}) + ${lumenScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${lumenScope}${btnGroup} > ${lumenScope}${btnGroup}:not(:first-child) > ${lumenScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${lumenScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${lumenScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${lumenScope}${dropup} ${lumenScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${lumenScope}${dropend} ${lumenScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${lumenScope}${dropstart} ${lumenScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${lumenScope}${btnSm} + ${lumenScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${lumenScope}${btnGroupSm} > ${lumenScope}${btn} + ${lumenScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${lumenScope}${btnLg} + ${lumenScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${lumenScope}${btnGroupLg} > ${lumenScope}${btn} + ${lumenScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btn}`, {
	width: '100%',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btnGroup}:not(:last-child) > ${lumenScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}:not(${btnCheck}) + ${lumenScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${lumenScope}${btnGroupVertical} > ${lumenScope}${btnGroup}:not(:first-child) > ${lumenScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${lumenScope}${alertDismissible} ${lumenScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${lumenScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#fff',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.4',
		[varBsBtnCloseHoverOpacity]: '1',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(21, 140, 186, 0.25)',
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

globalStyle(`${lumenScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${lumenScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${lumenScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${lumenScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${lumenScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${lumenScope}${toastHeader} ${lumenScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${lumenScope}${modalHeader} ${lumenScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${lumenScope}${offcanvasHeader} ${lumenScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${lumenScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${lumenScope}${btn}`, {
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
	textTransform: 'uppercase',
})

globalStyle(`${lumenScope}${btn}:not(${disabled}):hover`, {
	marginTop: '1px',
	borderBottomWidth: '3px',
})

globalStyle(`${lumenScope}${btn}:not(${disabled}):active`, {
	marginTop: '2px',
	borderBottomWidth: '2px',
})

globalStyle(`${lumenScope}${btnPrimary}:hover`, {
	backgroundColor: '#158cba',
})

globalStyle(`${lumenScope}${btnPrimary}:active`, {
	backgroundColor: '#158cba',
})

globalStyle(`${lumenScope}${btnPrimary}:focus`, {
	backgroundColor: '#158cba',
})

globalStyle(`${lumenScope}${btnPrimary}`, {
	borderColor: '#137ea7',
})

globalStyle(`${lumenScope}${btnPrimary}:not(${disabled}):hover`, {
	borderColor: '#137ea7',
})

globalStyle(`${lumenScope}${btnPrimary}:not(${disabled}):active`, {
	borderColor: '#137ea7',
})

globalStyle(`${lumenScope}${btnPrimary}:focus`, {
	borderColor: '#137ea7',
})

globalStyle(`${lumenScope}${btnSecondary}:hover`, {
	backgroundColor: '#f0f0f0',
})

globalStyle(`${lumenScope}${btnSecondary}:active`, {
	backgroundColor: '#f0f0f0',
})

globalStyle(`${lumenScope}${btnSecondary}:focus`, {
	backgroundColor: '#f0f0f0',
})

globalStyle(`${lumenScope}${btnSecondary}`, {
	borderColor: '#d8d8d8',
})

globalStyle(`${lumenScope}${btnSecondary}:not(${disabled}):hover`, {
	borderColor: '#d8d8d8',
})

globalStyle(`${lumenScope}${btnSecondary}:not(${disabled}):active`, {
	borderColor: '#d8d8d8',
})

globalStyle(`${lumenScope}${btnSecondary}:focus`, {
	borderColor: '#d8d8d8',
})

globalStyle(`${lumenScope}${btnSuccess}:hover`, {
	backgroundColor: '#28b62c',
})

globalStyle(`${lumenScope}${btnSuccess}:active`, {
	backgroundColor: '#28b62c',
})

globalStyle(`${lumenScope}${btnSuccess}:focus`, {
	backgroundColor: '#28b62c',
})

globalStyle(`${lumenScope}${btnSuccess}`, {
	borderColor: '#24a428',
})

globalStyle(`${lumenScope}${btnSuccess}:not(${disabled}):hover`, {
	borderColor: '#24a428',
})

globalStyle(`${lumenScope}${btnSuccess}:not(${disabled}):active`, {
	borderColor: '#24a428',
})

globalStyle(`${lumenScope}${btnSuccess}:focus`, {
	borderColor: '#24a428',
})

globalStyle(`${lumenScope}${btnInfo}:hover`, {
	backgroundColor: '#75caeb',
})

globalStyle(`${lumenScope}${btnInfo}:active`, {
	backgroundColor: '#75caeb',
})

globalStyle(`${lumenScope}${btnInfo}:focus`, {
	backgroundColor: '#75caeb',
})

globalStyle(`${lumenScope}${btnInfo}`, {
	borderColor: '#69b6d4',
})

globalStyle(`${lumenScope}${btnInfo}:not(${disabled}):hover`, {
	borderColor: '#69b6d4',
})

globalStyle(`${lumenScope}${btnInfo}:not(${disabled}):active`, {
	borderColor: '#69b6d4',
})

globalStyle(`${lumenScope}${btnInfo}:focus`, {
	borderColor: '#69b6d4',
})

globalStyle(`${lumenScope}${btnWarning}:hover`, {
	backgroundColor: '#ff851b',
})

globalStyle(`${lumenScope}${btnWarning}:active`, {
	backgroundColor: '#ff851b',
})

globalStyle(`${lumenScope}${btnWarning}:focus`, {
	backgroundColor: '#ff851b',
})

globalStyle(`${lumenScope}${btnWarning}`, {
	borderColor: '#e67818',
})

globalStyle(`${lumenScope}${btnWarning}:not(${disabled}):hover`, {
	borderColor: '#e67818',
})

globalStyle(`${lumenScope}${btnWarning}:not(${disabled}):active`, {
	borderColor: '#e67818',
})

globalStyle(`${lumenScope}${btnWarning}:focus`, {
	borderColor: '#e67818',
})

globalStyle(`${lumenScope}${btnDanger}:hover`, {
	backgroundColor: '#ff4136',
})

globalStyle(`${lumenScope}${btnDanger}:active`, {
	backgroundColor: '#ff4136',
})

globalStyle(`${lumenScope}${btnDanger}:focus`, {
	backgroundColor: '#ff4136',
})

globalStyle(`${lumenScope}${btnDanger}`, {
	borderColor: '#e63b31',
})

globalStyle(`${lumenScope}${btnDanger}:not(${disabled}):hover`, {
	borderColor: '#e63b31',
})

globalStyle(`${lumenScope}${btnDanger}:not(${disabled}):active`, {
	borderColor: '#e63b31',
})

globalStyle(`${lumenScope}${btnDanger}:focus`, {
	borderColor: '#e63b31',
})

globalStyle(`${lumenScope}${btnLight}:hover`, {
	backgroundColor: '#f6f6f6',
})

globalStyle(`${lumenScope}${btnLight}:active`, {
	backgroundColor: '#f6f6f6',
})

globalStyle(`${lumenScope}${btnLight}:focus`, {
	backgroundColor: '#f6f6f6',
})

globalStyle(`${lumenScope}${btnLight}`, {
	borderColor: '#dddddd',
})

globalStyle(`${lumenScope}${btnLight}:not(${disabled}):hover`, {
	borderColor: '#dddddd',
})

globalStyle(`${lumenScope}${btnLight}:not(${disabled}):active`, {
	borderColor: '#dddddd',
})

globalStyle(`${lumenScope}${btnLight}:focus`, {
	borderColor: '#dddddd',
})

globalStyle(`${lumenScope}${btnDark}:hover`, {
	backgroundColor: '#555',
})

globalStyle(`${lumenScope}${btnDark}:active`, {
	backgroundColor: '#555',
})

globalStyle(`${lumenScope}${btnDark}:focus`, {
	backgroundColor: '#555',
})

globalStyle(`${lumenScope}${btnDark}`, {
	borderColor: '#4d4d4d',
})

globalStyle(`${lumenScope}${btnDark}:not(${disabled}):hover`, {
	borderColor: '#4d4d4d',
})

globalStyle(`${lumenScope}${btnDark}:not(${disabled}):active`, {
	borderColor: '#4d4d4d',
})

globalStyle(`${lumenScope}${btnDark}:focus`, {
	borderColor: '#4d4d4d',
})

globalStyle(`${lumenScope}${btnOutlineSecondary}`, {
	color: varBsTertiaryColor,
})

globalStyle(`${lumenScope}${btnOutlineDanger}, ${lumenScope}${btnOutlineDark}, ${lumenScope}${btnOutlineInfo}, ${lumenScope}${btnOutlineLight}, ${lumenScope}${btnOutlinePrimary}, ${lumenScope}${btnOutlineSecondary}, ${lumenScope}${btnOutlineSuccess}, ${lumenScope}${btnOutlineWarning}`, {
	borderTopWidth: '1px',
})

globalStyle(`${lumenScope}${btnGroupVertical} ${lumenScope}${btn} + ${lumenScope}${btn}:hover`, {
	marginTop: '-1px',
	borderTopWidth: '1px',
})

globalStyle(`${lumenScope}${btnGroupVertical} ${lumenScope}${btn} + ${lumenScope}${btn}:active`, {
	marginTop: '-1px',
	borderTopWidth: '2px',
})

globalStyle(`${lumenScope}${btnClose}`, {
	textDecoration: 'none',
	opacity: '0.4',
})

globalStyle(`${lumenScope}${btnClose}:hover`, {
	opacity: '1',
})

globalStyle(`${lumenScope}${btnClose}:focus`, {
	opacity: '1',
})

globalStyle(`${lumenScope}${modal} ${lumenScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})

globalStyle(`${lumenScope}${toast} ${lumenScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})

globalStyle(`${lumenScope}${offcanvas} ${lumenScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})
