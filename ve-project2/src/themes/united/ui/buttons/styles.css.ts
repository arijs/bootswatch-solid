import { globalStyle } from '@vanilla-extract/css'
import { unitedScope } from '../../scope.css'

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

globalStyle(`${unitedScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${unitedScope}${btnCheck}[disabled] + ${unitedScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${unitedScope}${btnCheck}:disabled + ${unitedScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${unitedScope}${inputGroup} ${unitedScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${unitedScope}${inputGroup} ${unitedScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${unitedScope}${inputGroupLg} > ${unitedScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${unitedScope}${inputGroupSm} > ${unitedScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${unitedScope}${btn}`, {
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

globalStyle(`${unitedScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${unitedScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${unitedScope}${btnCheck} + ${unitedScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${unitedScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${unitedScope}${btnCheck}:focus-visible + ${unitedScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${unitedScope}${btnCheck}:checked + ${unitedScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${unitedScope}:not(${btnCheck}) + ${unitedScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${unitedScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${unitedScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${unitedScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${unitedScope}${btnCheck}:checked + ${unitedScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${unitedScope}:not(${btnCheck}) + ${unitedScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${unitedScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${unitedScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${unitedScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${unitedScope}${btnCheck}:checked:focus-visible + ${unitedScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${unitedScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${unitedScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${unitedScope}${fieldset}:disabled ${unitedScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${unitedScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#e95420',
		[varBsBtnBorderColor]: '#e95420',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#c6471b',
		[varBsBtnHoverBorderColor]: '#ba431a',
		[varBsBtnFocusBoxShadowRgb]: '236, 110, 65',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#ba431a',
		[varBsBtnActiveBorderColor]: '#af3f18',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#e95420',
		[varBsBtnDisabledBorderColor]: '#e95420',
	},
})

globalStyle(`${unitedScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#aea79f',
		[varBsBtnBorderColor]: '#aea79f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#948e87',
		[varBsBtnHoverBorderColor]: '#8b867f',
		[varBsBtnFocusBoxShadowRgb]: '186, 180, 173',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#8b867f',
		[varBsBtnActiveBorderColor]: '#837d77',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#aea79f',
		[varBsBtnDisabledBorderColor]: '#aea79f',
	},
})

globalStyle(`${unitedScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#38b44a',
		[varBsBtnBorderColor]: '#38b44a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#30993f',
		[varBsBtnHoverBorderColor]: '#2d903b',
		[varBsBtnFocusBoxShadowRgb]: '86, 191, 101',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2d903b',
		[varBsBtnActiveBorderColor]: '#2a8738',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#38b44a',
		[varBsBtnDisabledBorderColor]: '#38b44a',
	},
})

globalStyle(`${unitedScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#17a2b8',
		[varBsBtnBorderColor]: '#17a2b8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#148a9c',
		[varBsBtnHoverBorderColor]: '#128293',
		[varBsBtnFocusBoxShadowRgb]: '58, 176, 195',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#128293',
		[varBsBtnActiveBorderColor]: '#117a8a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#17a2b8',
		[varBsBtnDisabledBorderColor]: '#17a2b8',
	},
})

globalStyle(`${unitedScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#efb73e',
		[varBsBtnBorderColor]: '#efb73e',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cb9c35',
		[varBsBtnHoverBorderColor]: '#bf9232',
		[varBsBtnFocusBoxShadowRgb]: '241, 194, 91',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#bf9232',
		[varBsBtnActiveBorderColor]: '#b3892f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#efb73e',
		[varBsBtnDisabledBorderColor]: '#efb73e',
	},
})

globalStyle(`${unitedScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#df382c',
		[varBsBtnBorderColor]: '#df382c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#be3025',
		[varBsBtnHoverBorderColor]: '#b22d23',
		[varBsBtnFocusBoxShadowRgb]: '228, 86, 76',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#b22d23',
		[varBsBtnActiveBorderColor]: '#a72a21',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#df382c',
		[varBsBtnDisabledBorderColor]: '#df382c',
	},
})

globalStyle(`${unitedScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#e9ecef',
		[varBsBtnBorderColor]: '#e9ecef',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#c6c9cb',
		[varBsBtnHoverBorderColor]: '#babdbf',
		[varBsBtnFocusBoxShadowRgb]: '198, 201, 203',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#babdbf',
		[varBsBtnActiveBorderColor]: '#afb1b3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#e9ecef',
		[varBsBtnDisabledBorderColor]: '#e9ecef',
	},
})

globalStyle(`${unitedScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#772953',
		[varBsBtnBorderColor]: '#772953',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#8b496d',
		[varBsBtnHoverBorderColor]: '#853e64',
		[varBsBtnFocusBoxShadowRgb]: '139, 73, 109',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#925475',
		[varBsBtnActiveBorderColor]: '#853e64',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#772953',
		[varBsBtnDisabledBorderColor]: '#772953',
	},
})

globalStyle(`${unitedScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#e95420',
		[varBsBtnBorderColor]: '#e95420',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#e95420',
		[varBsBtnHoverBorderColor]: '#e95420',
		[varBsBtnFocusBoxShadowRgb]: '233, 84, 32',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#e95420',
		[varBsBtnActiveBorderColor]: '#e95420',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e95420',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e95420',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${unitedScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#aea79f',
		[varBsBtnBorderColor]: '#aea79f',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#aea79f',
		[varBsBtnHoverBorderColor]: '#aea79f',
		[varBsBtnFocusBoxShadowRgb]: '174, 167, 159',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#aea79f',
		[varBsBtnActiveBorderColor]: '#aea79f',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#aea79f',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#aea79f',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${unitedScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#38b44a',
		[varBsBtnBorderColor]: '#38b44a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#38b44a',
		[varBsBtnHoverBorderColor]: '#38b44a',
		[varBsBtnFocusBoxShadowRgb]: '56, 180, 74',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#38b44a',
		[varBsBtnActiveBorderColor]: '#38b44a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#38b44a',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#38b44a',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${unitedScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#17a2b8',
		[varBsBtnBorderColor]: '#17a2b8',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#17a2b8',
		[varBsBtnHoverBorderColor]: '#17a2b8',
		[varBsBtnFocusBoxShadowRgb]: '23, 162, 184',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#17a2b8',
		[varBsBtnActiveBorderColor]: '#17a2b8',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#17a2b8',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#17a2b8',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${unitedScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#efb73e',
		[varBsBtnBorderColor]: '#efb73e',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#efb73e',
		[varBsBtnHoverBorderColor]: '#efb73e',
		[varBsBtnFocusBoxShadowRgb]: '239, 183, 62',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#efb73e',
		[varBsBtnActiveBorderColor]: '#efb73e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#efb73e',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#efb73e',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${unitedScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#df382c',
		[varBsBtnBorderColor]: '#df382c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#df382c',
		[varBsBtnHoverBorderColor]: '#df382c',
		[varBsBtnFocusBoxShadowRgb]: '223, 56, 44',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#df382c',
		[varBsBtnActiveBorderColor]: '#df382c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#df382c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#df382c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${unitedScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#e9ecef',
		[varBsBtnBorderColor]: '#e9ecef',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#e9ecef',
		[varBsBtnHoverBorderColor]: '#e9ecef',
		[varBsBtnFocusBoxShadowRgb]: '233, 236, 239',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#e9ecef',
		[varBsBtnActiveBorderColor]: '#e9ecef',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#e9ecef',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#e9ecef',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${unitedScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#772953',
		[varBsBtnBorderColor]: '#772953',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#772953',
		[varBsBtnHoverBorderColor]: '#772953',
		[varBsBtnFocusBoxShadowRgb]: '119, 41, 83',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#772953',
		[varBsBtnActiveBorderColor]: '#772953',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#772953',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#772953',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${unitedScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#868e96',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '236, 110, 65',
	},
	textDecoration: 'underline',
})

globalStyle(`${unitedScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${unitedScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${unitedScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${unitedScope}${btnGroupLg} > ${unitedScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${unitedScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${unitedScope}${btnGroupSm} > ${unitedScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}${btnCheck}:checked + ${unitedScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}${btnCheck}:focus + ${unitedScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btnCheck}:checked + ${unitedScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btnCheck}:focus + ${unitedScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}:not(${btnCheck}:first-child) + ${unitedScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}${btnGroup}:not(:last-child) > ${unitedScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}:not(${btnCheck}) + ${unitedScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${unitedScope}${btnGroup} > ${unitedScope}${btnGroup}:not(:first-child) > ${unitedScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${unitedScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${unitedScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${unitedScope}${dropup} ${unitedScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${unitedScope}${dropend} ${unitedScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${unitedScope}${dropstart} ${unitedScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${unitedScope}${btnSm} + ${unitedScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${unitedScope}${btnGroupSm} > ${unitedScope}${btn} + ${unitedScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${unitedScope}${btnLg} + ${unitedScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${unitedScope}${btnGroupLg} > ${unitedScope}${btn} + ${unitedScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btn}`, {
	width: '100%',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btnGroup}:not(:last-child) > ${unitedScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}:not(${btnCheck}) + ${unitedScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${unitedScope}${btnGroupVertical} > ${unitedScope}${btnGroup}:not(:first-child) > ${unitedScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${unitedScope}${alertDismissible} ${unitedScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${unitedScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(233, 84, 32, 0.25)',
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

globalStyle(`${unitedScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${unitedScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${unitedScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${unitedScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${unitedScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${unitedScope}${toastHeader} ${unitedScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${unitedScope}${modalHeader} ${unitedScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${unitedScope}${offcanvasHeader} ${unitedScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${unitedScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})
