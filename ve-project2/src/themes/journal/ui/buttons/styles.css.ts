import { globalStyle } from '@vanilla-extract/css'
import { journalScope } from '../../scope.css'

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

globalStyle(`${journalScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${journalScope}${btnCheck}[disabled] + ${journalScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${journalScope}${btnCheck}:disabled + ${journalScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${journalScope}${inputGroup} ${journalScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${journalScope}${inputGroup} ${journalScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${journalScope}${inputGroupLg} > ${journalScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${journalScope}${inputGroupSm} > ${journalScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${journalScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1rem',
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

globalStyle(`${journalScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${journalScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${journalScope}${btnCheck} + ${journalScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${journalScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${journalScope}${btnCheck}:focus-visible + ${journalScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${journalScope}${btnCheck}:checked + ${journalScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${journalScope}:not(${btnCheck}) + ${journalScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${journalScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${journalScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${journalScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${journalScope}${btnCheck}:checked + ${journalScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${journalScope}:not(${btnCheck}) + ${journalScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${journalScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${journalScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${journalScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${journalScope}${btnCheck}:checked:focus-visible + ${journalScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${journalScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${journalScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${journalScope}${fieldset}:disabled ${journalScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${journalScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#eb6864',
		[varBsBtnBorderColor]: '#eb6864',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c85855',
		[varBsBtnHoverBorderColor]: '#bc5350',
		[varBsBtnFocusBoxShadowRgb]: '238, 127, 123',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#bc5350',
		[varBsBtnActiveBorderColor]: '#b04e4b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#eb6864',
		[varBsBtnDisabledBorderColor]: '#eb6864',
	},
})

globalStyle(`${journalScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#aaa',
		[varBsBtnBorderColor]: '#aaa',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#919191',
		[varBsBtnHoverBorderColor]: '#888888',
		[varBsBtnFocusBoxShadowRgb]: '183, 183, 183',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#888888',
		[varBsBtnActiveBorderColor]: 'gray',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#aaa',
		[varBsBtnDisabledBorderColor]: '#aaa',
	},
})

globalStyle(`${journalScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#22b24c',
		[varBsBtnBorderColor]: '#22b24c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#1d9741',
		[varBsBtnHoverBorderColor]: '#1b8e3d',
		[varBsBtnFocusBoxShadowRgb]: '67, 190, 103',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#1b8e3d',
		[varBsBtnActiveBorderColor]: '#1a8639',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#22b24c',
		[varBsBtnDisabledBorderColor]: '#22b24c',
	},
})

globalStyle(`${journalScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#369',
		[varBsBtnBorderColor]: '#369',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2b5782',
		[varBsBtnHoverBorderColor]: '#29527a',
		[varBsBtnFocusBoxShadowRgb]: '82, 125, 168',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#29527a',
		[varBsBtnActiveBorderColor]: '#264d73',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#369',
		[varBsBtnDisabledBorderColor]: '#369',
	},
})

globalStyle(`${journalScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f5e625',
		[varBsBtnBorderColor]: '#f5e625',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d0c41f',
		[varBsBtnHoverBorderColor]: '#c4b81e',
		[varBsBtnFocusBoxShadowRgb]: '247, 234, 70',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c4b81e',
		[varBsBtnActiveBorderColor]: '#b8ad1c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f5e625',
		[varBsBtnDisabledBorderColor]: '#f5e625',
	},
})

globalStyle(`${journalScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f57a00',
		[varBsBtnBorderColor]: '#f57a00',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d06800',
		[varBsBtnHoverBorderColor]: '#c46200',
		[varBsBtnFocusBoxShadowRgb]: '247, 142, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c46200',
		[varBsBtnActiveBorderColor]: '#b85c00',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f57a00',
		[varBsBtnDisabledBorderColor]: '#f57a00',
	},
})

globalStyle(`${journalScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f8f9fa',
		[varBsBtnBorderColor]: '#f8f9fa',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#d3d4d5',
		[varBsBtnHoverBorderColor]: '#c6c7c8',
		[varBsBtnFocusBoxShadowRgb]: '211, 212, 213',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c6c7c8',
		[varBsBtnActiveBorderColor]: '#babbbc',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f8f9fa',
		[varBsBtnDisabledBorderColor]: '#f8f9fa',
	},
})

globalStyle(`${journalScope}${btnDark}`, {
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

globalStyle(`${journalScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#eb6864',
		[varBsBtnBorderColor]: '#eb6864',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#eb6864',
		[varBsBtnHoverBorderColor]: '#eb6864',
		[varBsBtnFocusBoxShadowRgb]: '235, 104, 100',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#eb6864',
		[varBsBtnActiveBorderColor]: '#eb6864',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#eb6864',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#eb6864',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${journalScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#aaa',
		[varBsBtnBorderColor]: '#aaa',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#aaa',
		[varBsBtnHoverBorderColor]: '#aaa',
		[varBsBtnFocusBoxShadowRgb]: '170, 170, 170',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#aaa',
		[varBsBtnActiveBorderColor]: '#aaa',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#aaa',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#aaa',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${journalScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#22b24c',
		[varBsBtnBorderColor]: '#22b24c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#22b24c',
		[varBsBtnHoverBorderColor]: '#22b24c',
		[varBsBtnFocusBoxShadowRgb]: '34, 178, 76',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#22b24c',
		[varBsBtnActiveBorderColor]: '#22b24c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#22b24c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#22b24c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${journalScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#369',
		[varBsBtnBorderColor]: '#369',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#369',
		[varBsBtnHoverBorderColor]: '#369',
		[varBsBtnFocusBoxShadowRgb]: '51, 102, 153',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#369',
		[varBsBtnActiveBorderColor]: '#369',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#369',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#369',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${journalScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f5e625',
		[varBsBtnBorderColor]: '#f5e625',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f5e625',
		[varBsBtnHoverBorderColor]: '#f5e625',
		[varBsBtnFocusBoxShadowRgb]: '245, 230, 37',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f5e625',
		[varBsBtnActiveBorderColor]: '#f5e625',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f5e625',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f5e625',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${journalScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#f57a00',
		[varBsBtnBorderColor]: '#f57a00',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f57a00',
		[varBsBtnHoverBorderColor]: '#f57a00',
		[varBsBtnFocusBoxShadowRgb]: '245, 122, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f57a00',
		[varBsBtnActiveBorderColor]: '#f57a00',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f57a00',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f57a00',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${journalScope}${btnOutlineLight}`, {
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

globalStyle(`${journalScope}${btnOutlineDark}`, {
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

globalStyle(`${journalScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '238, 127, 123',
	},
	textDecoration: 'underline',
})

globalStyle(`${journalScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${journalScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${journalScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${journalScope}${btnGroupLg} > ${journalScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${journalScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${journalScope}${btnGroupSm} > ${journalScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btnCheck}:checked + ${journalScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btnCheck}:focus + ${journalScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btnCheck}:checked + ${journalScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btnCheck}:focus + ${journalScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}:not(${btnCheck}:first-child) + ${journalScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btnGroup}:not(:last-child) > ${journalScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}:not(${btnCheck}) + ${journalScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${journalScope}${btnGroup} > ${journalScope}${btnGroup}:not(:first-child) > ${journalScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${journalScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${journalScope}${btnSm} + ${journalScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${journalScope}${btnGroupSm} > ${journalScope}${btn} + ${journalScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${journalScope}${btnLg} + ${journalScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${journalScope}${btnGroupLg} > ${journalScope}${btn} + ${journalScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btn}`, {
	width: '100%',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btnGroup}:not(:last-child) > ${journalScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}:not(${btnCheck}) + ${journalScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${journalScope}${btnGroupVertical} > ${journalScope}${btnGroup}:not(:first-child) > ${journalScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${journalScope}${alertDismissible} ${journalScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${journalScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(235, 104, 100, 0.25)',
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

globalStyle(`${journalScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${journalScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${journalScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${journalScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${journalScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${journalScope}${toastHeader} ${journalScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${journalScope}${modalHeader} ${journalScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${journalScope}${offcanvasHeader} ${journalScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${journalScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${journalScope}${btn}`, {
	fontFamily: '"News Cycle", "Arial Narrow Bold", sans-serif',
	fontWeight: '700',
})

globalStyle(`${journalScope}${btnSecondary}`, {
	color: '#fff',
})

globalStyle(`${journalScope}${btnWarning}`, {
	color: '#fff',
})
