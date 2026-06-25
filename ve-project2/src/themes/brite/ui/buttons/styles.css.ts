import { globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../../scope.css'

import {
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
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
	dropdownToggle,
	dropdownToggleSplit,
	dropend,
	dropstart,
	dropup,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import { modalHeader } from '../../../../theme-contract/ui/modal/contract.css'
import { show } from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${briteScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${briteScope}${btnCheck}[disabled] + ${briteScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${briteScope}${btnCheck}:disabled + ${briteScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${briteScope}${inputGroup} ${briteScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${briteScope}${inputGroup} ${briteScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${briteScope}${inputGroupLg} > ${briteScope}${btn}`, {
	padding: '0.75rem 1.25rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${briteScope}${inputGroupSm} > ${briteScope}${btn}`, {
	padding: '0.25rem 0.75rem',
	fontSize: '0.765625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${briteScope}${btn}`, {
	vars: {
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnFontFamily]: '',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnFontWeight]: '400',
		[varBsBtnLineHeight]: '1.5',
		[varBsBtnColor]: varBsBodyColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderWidth]: '2px',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnBorderRadius]: varBsBorderRadius,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
		[varBsBtnDisabledOpacity]: '0.65',
		[varBsBtnFocusBoxShadow]: `0 0 0 1px rgba(${varBsBtnFocusBoxShadowRgb}, .5)`,
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

globalStyle(`${briteScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${briteScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${briteScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${briteScope}${btnCheck}:focus-visible + ${briteScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${briteScope}:not(${btnCheck}) + ${briteScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${briteScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${briteScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${briteScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${briteScope}${btnCheck}:checked + ${briteScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${briteScope}:not(${btnCheck}) + ${briteScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${briteScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${briteScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${briteScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${briteScope}${btnCheck}:checked:focus-visible + ${briteScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${briteScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${briteScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${briteScope}${fieldset}:disabled ${briteScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${briteScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#a2e436',
		[varBsBtnBorderColor]: '#a2e436',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#b0e854',
		[varBsBtnHoverBorderColor]: '#abe74a',
		[varBsBtnFocusBoxShadowRgb]: '138, 194, 46',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#b5e95e',
		[varBsBtnActiveBorderColor]: '#abe74a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#a2e436',
		[varBsBtnDisabledBorderColor]: '#a2e436',
	},
})

globalStyle(`${briteScope}${btnSecondary}`, {
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

globalStyle(`${briteScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#68d391',
		[varBsBtnBorderColor]: '#68d391',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#7fdaa2',
		[varBsBtnHoverBorderColor]: '#77d79c',
		[varBsBtnFocusBoxShadowRgb]: '88, 179, 123',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#86dca7',
		[varBsBtnActiveBorderColor]: '#77d79c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#68d391',
		[varBsBtnDisabledBorderColor]: '#68d391',
	},
})

globalStyle(`${briteScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#22d2ed',
		[varBsBtnBorderColor]: '#22d2ed',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#43d9f0',
		[varBsBtnHoverBorderColor]: '#38d7ef',
		[varBsBtnFocusBoxShadowRgb]: '29, 179, 201',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#4edbf1',
		[varBsBtnActiveBorderColor]: '#38d7ef',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#22d2ed',
		[varBsBtnDisabledBorderColor]: '#22d2ed',
	},
})

globalStyle(`${briteScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#ffc700',
		[varBsBtnBorderColor]: '#ffc700',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#ffcf26',
		[varBsBtnHoverBorderColor]: '#ffcd1a',
		[varBsBtnFocusBoxShadowRgb]: '217, 169, 0',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#ffd233',
		[varBsBtnActiveBorderColor]: '#ffcd1a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#ffc700',
		[varBsBtnDisabledBorderColor]: '#ffc700',
	},
})

globalStyle(`${briteScope}${btnDanger}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f56565',
		[varBsBtnBorderColor]: '#f56565',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f77c7c',
		[varBsBtnHoverBorderColor]: '#f67474',
		[varBsBtnFocusBoxShadowRgb]: '208, 86, 86',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f78484',
		[varBsBtnActiveBorderColor]: '#f67474',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f56565',
		[varBsBtnDisabledBorderColor]: '#f56565',
	},
})

globalStyle(`${briteScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#e9ecef',
		[varBsBtnBorderColor]: '#e9ecef',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#c6c9cb',
		[varBsBtnHoverBorderColor]: '#babdbf',
		[varBsBtnFocusBoxShadowRgb]: '198, 201, 203',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#babdbf',
		[varBsBtnActiveBorderColor]: '#afb1b3',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#e9ecef',
		[varBsBtnDisabledBorderColor]: '#e9ecef',
	},
})

globalStyle(`${briteScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#000',
		[varBsBtnBorderColor]: '#000',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#262626',
		[varBsBtnHoverBorderColor]: '#1a1a1a',
		[varBsBtnFocusBoxShadowRgb]: '38, 38, 38',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#333333',
		[varBsBtnActiveBorderColor]: '#1a1a1a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#000',
		[varBsBtnDisabledBorderColor]: '#000',
	},
})

globalStyle(`${briteScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#a2e436',
		[varBsBtnBorderColor]: '#a2e436',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#a2e436',
		[varBsBtnHoverBorderColor]: '#a2e436',
		[varBsBtnFocusBoxShadowRgb]: '162, 228, 54',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#a2e436',
		[varBsBtnActiveBorderColor]: '#a2e436',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#a2e436',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#a2e436',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${briteScope}${btnOutlineSecondary}`, {
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

globalStyle(`${briteScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#68d391',
		[varBsBtnBorderColor]: '#68d391',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#68d391',
		[varBsBtnHoverBorderColor]: '#68d391',
		[varBsBtnFocusBoxShadowRgb]: '104, 211, 145',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#68d391',
		[varBsBtnActiveBorderColor]: '#68d391',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#68d391',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#68d391',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${briteScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#22d2ed',
		[varBsBtnBorderColor]: '#22d2ed',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#22d2ed',
		[varBsBtnHoverBorderColor]: '#22d2ed',
		[varBsBtnFocusBoxShadowRgb]: '34, 210, 237',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#22d2ed',
		[varBsBtnActiveBorderColor]: '#22d2ed',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#22d2ed',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#22d2ed',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${briteScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#ffc700',
		[varBsBtnBorderColor]: '#ffc700',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#ffc700',
		[varBsBtnHoverBorderColor]: '#ffc700',
		[varBsBtnFocusBoxShadowRgb]: '255, 199, 0',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#ffc700',
		[varBsBtnActiveBorderColor]: '#ffc700',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#ffc700',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#ffc700',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${briteScope}${btnOutlineDanger}`, {
	vars: {
		[varBsBtnColor]: '#f56565',
		[varBsBtnBorderColor]: '#f56565',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f56565',
		[varBsBtnHoverBorderColor]: '#f56565',
		[varBsBtnFocusBoxShadowRgb]: '245, 101, 101',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f56565',
		[varBsBtnActiveBorderColor]: '#f56565',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f56565',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f56565',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${briteScope}${btnOutlineLight}`, {
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

globalStyle(`${briteScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBorderColor]: '#000',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#000',
		[varBsBtnHoverBorderColor]: '#000',
		[varBsBtnFocusBoxShadowRgb]: '0, 0, 0',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#000',
		[varBsBtnActiveBorderColor]: '#000',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#000',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${briteScope}${btnLink}`, {
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
		[varBsBtnFocusBoxShadowRgb]: '38, 38, 38',
	},
	textDecoration: 'underline',
})

globalStyle(`${briteScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${briteScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${briteScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.75rem',
		[varBsBtnPaddingX]: '1.25rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${briteScope}${btnGroupLg} > ${briteScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.75rem',
		[varBsBtnPaddingX]: '1.25rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${briteScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.75rem',
		[varBsBtnFontSize]: '0.765625rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${briteScope}${btnGroupSm} > ${briteScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.75rem',
		[varBsBtnFontSize]: '0.765625rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnCheck}:focus + ${briteScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btnCheck}:focus + ${briteScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}:not(${btnCheck}:first-child) + ${briteScope}${btn}`, {
	marginLeft: 'calc(-1 * 2px)',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnGroup}:not(:last-child) > ${briteScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}:not(${btnCheck}) + ${briteScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnGroup}:not(:first-child) > ${briteScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${briteScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${briteScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${briteScope}${dropup} ${briteScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${briteScope}${dropend} ${briteScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${briteScope}${dropstart} ${briteScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${briteScope}${btnSm} + ${briteScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${briteScope}${btnGroupSm} > ${briteScope}${btn} + ${briteScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${briteScope}${btnLg} + ${briteScope}${dropdownToggleSplit}`, {
	paddingRight: '0.9375rem',
	paddingLeft: '0.9375rem',
})

globalStyle(`${briteScope}${btnGroupLg} > ${briteScope}${btn} + ${briteScope}${dropdownToggleSplit}`, {
	paddingRight: '0.9375rem',
	paddingLeft: '0.9375rem',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btn}`, {
	width: '100%',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btn}:not(:first-child)`, {
	marginTop: 'calc(-1 * 2px)',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btnGroup}:not(:last-child) > ${briteScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}:not(${btnCheck}) + ${briteScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btnGroup}:not(:first-child) > ${briteScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${briteScope}${alertDismissible} ${briteScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${briteScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#000',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23000\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '1',
		[varBsBtnCloseHoverOpacity]: '1',
		[varBsBtnCloseFocusShadow]: '0 0 0 1px #000',
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

globalStyle(`${briteScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${briteScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${briteScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${briteScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${briteScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${briteScope}${toastHeader} ${briteScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${briteScope}${modalHeader} ${briteScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${briteScope}${offcanvasHeader} ${briteScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${briteScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${briteScope}${btn}`, {
	margin: '3px 0 0 3px',
	borderColor: '#000',
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transition: 'all 0.3s',
	transform: 'translate(-3px, -3px)',
})

globalStyle(`${briteScope}${btn}:hover`, {
	borderColor: '#000',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btn}${disabled}`, {
	borderColor: '#000',
})

globalStyle(`${briteScope}${btnLink}`, {
	color: '#000',
})

globalStyle(`${briteScope}${btnLink}:hover`, {
	color: '#000',
})

globalStyle(`${briteScope}${btnOutlinePrimary}`, {
	color: '#000',
	backgroundColor: '#a2e436',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btnOutlinePrimary}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: 'translate(-3px, -3px)',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnPrimary}:hover`, {
	backgroundColor: '#a2e436',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlinePrimary}:hover`, {
	backgroundColor: '#a2e436',
})

globalStyle(`${briteScope}${btnOutlineSecondary}`, {
	color: '#000',
	backgroundColor: '#fff',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btnOutlineSecondary}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: 'translate(-3px, -3px)',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnSecondary}:hover`, {
	backgroundColor: '#fff',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineSecondary}:hover`, {
	backgroundColor: '#fff',
})

globalStyle(`${briteScope}${btnOutlineSuccess}`, {
	color: '#000',
	backgroundColor: '#68d391',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btnOutlineSuccess}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: 'translate(-3px, -3px)',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnSuccess}:hover`, {
	backgroundColor: '#68d391',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineSuccess}:hover`, {
	backgroundColor: '#68d391',
})

globalStyle(`${briteScope}${btnOutlineInfo}`, {
	color: '#000',
	backgroundColor: '#22d2ed',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btnOutlineInfo}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: 'translate(-3px, -3px)',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnInfo}:hover`, {
	backgroundColor: '#22d2ed',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineInfo}:hover`, {
	backgroundColor: '#22d2ed',
})

globalStyle(`${briteScope}${btnOutlineWarning}`, {
	color: '#000',
	backgroundColor: '#ffc700',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btnOutlineWarning}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: 'translate(-3px, -3px)',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnWarning}:hover`, {
	backgroundColor: '#ffc700',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineWarning}:hover`, {
	backgroundColor: '#ffc700',
})

globalStyle(`${briteScope}${btnOutlineDanger}`, {
	color: '#000',
	backgroundColor: '#f56565',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btnOutlineDanger}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: 'translate(-3px, -3px)',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnDanger}:hover`, {
	backgroundColor: '#f56565',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineDanger}:hover`, {
	backgroundColor: '#f56565',
})

globalStyle(`${briteScope}${btnOutlineLight}`, {
	color: '#000',
	backgroundColor: '#e9ecef',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btnOutlineLight}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: 'translate(-3px, -3px)',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnLight}:hover`, {
	backgroundColor: '#e9ecef',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineLight}:hover`, {
	backgroundColor: '#e9ecef',
})

globalStyle(`${briteScope}${btnOutlineDark}`, {
	color: '#000',
	backgroundColor: '#000',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btnOutlineDark}:hover`, {
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: 'translate(-3px, -3px)',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnDark}:hover`, {
	backgroundColor: '#000',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btnOutlineDark}:hover`, {
	backgroundColor: '#000',
})

globalStyle(`${briteScope}${btnOutlineDark}`, {
	color: '#fff',
})

globalStyle(`${briteScope}${btnGroup} ${briteScope}${btn}`, {
	marginLeft: '0',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btn}${active}`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btnGroup} ${briteScope}${btn}:hover`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btnGroup} ${briteScope}${btn}:active`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btnGroup} ${briteScope}${btn}:focus`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btnGroupVertical} ${briteScope}${btn}:hover`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btnGroupVertical} ${briteScope}${btn}:active`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btnGroupVertical} ${briteScope}${btn}:focus`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnCheck}:focus + ${briteScope}${btn}`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btnGroup} > ${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btnCheck}:focus + ${briteScope}${btn}`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btnGroupVertical} > ${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	zIndex: '0',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btn}`, {
	borderColor: '#000',
	boxShadow: `3px 3px 0 0 ${varBsBorderColor}`,
	transform: 'translate(-3px, -3px)',
})

globalStyle(`${briteScope}${btnCheck} + ${briteScope}${btn}:hover`, {
	color: '#000',
	borderColor: '#000',
})

globalStyle(`${briteScope}${btnCheck}:checked + ${briteScope}${btn}`, {
	borderColor: '#000',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}:not(${btnCheck}) + ${briteScope}${btn}:active`, {
	borderColor: '#000',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btn}:first-child:active`, {
	borderColor: '#000',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btn}${active}`, {
	borderColor: '#000',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}${btn}${show}`, {
	borderColor: '#000',
	boxShadow: 'none',
	transform: 'translate(0, 0)',
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${btnLink}`, {
	color: '#fff',
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${btnLink}:hover`, {
	color: '#fff',
})
