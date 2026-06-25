import { globalStyle } from '@vanilla-extract/css'
import { sandstoneScope } from '../../scope.css'

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
	dropdownToggle,
	dropdownToggleSplit,
	dropend,
	dropstart,
	dropup,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import { modal, modalHeader } from '../../../../theme-contract/ui/modal/contract.css'
import { show } from '../../../../theme-contract/ui/navs/contract.css'
import { offcanvas, offcanvasHeader } from '../../../../theme-contract/ui/offcanvas/contract.css'
import { toast, toastHeader } from '../../../../theme-contract/ui/toasts/contract.css'

globalStyle(`${sandstoneScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

globalStyle(`${sandstoneScope}${btnCheck}[disabled] + ${sandstoneScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${sandstoneScope}${btnCheck}:disabled + ${sandstoneScope}${btn}`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.65',
})

globalStyle(`${sandstoneScope}${inputGroup} ${sandstoneScope}${btn}`, {
	position: 'relative',
	zIndex: '2',
})

globalStyle(`${sandstoneScope}${inputGroup} ${sandstoneScope}${btn}:focus`, {
	zIndex: '5',
})

globalStyle(`${sandstoneScope}${inputGroupLg} > ${sandstoneScope}${btn}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${sandstoneScope}${inputGroupSm} > ${sandstoneScope}${btn}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${sandstoneScope}${btn}`, {
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

globalStyle(`${sandstoneScope}${btn}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${sandstoneScope}${btn}:hover`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
})

globalStyle(`${sandstoneScope}${btnCheck} + ${sandstoneScope}${btn}:hover`, {
	color: varBsBtnColor,
	backgroundColor: varBsBtnBg,
	borderColor: varBsBtnBorderColor,
})

globalStyle(`${sandstoneScope}${btn}:focus-visible`, {
	color: varBsBtnHoverColor,
	backgroundColor: varBsBtnHoverBg,
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sandstoneScope}${btnCheck}:focus-visible + ${sandstoneScope}${btn}`, {
	borderColor: varBsBtnHoverBorderColor,
	outline: '0',
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sandstoneScope}${btnCheck}:checked + ${sandstoneScope}${btn}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${sandstoneScope}:not(${btnCheck}) + ${sandstoneScope}${btn}:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${sandstoneScope}${btn}:first-child:active`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${sandstoneScope}${btn}${active}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${sandstoneScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${sandstoneScope}${btnCheck}:checked + ${sandstoneScope}${btn}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sandstoneScope}:not(${btnCheck}) + ${sandstoneScope}${btn}:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sandstoneScope}${btn}:first-child:active:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sandstoneScope}${btn}${active}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sandstoneScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sandstoneScope}${btnCheck}:checked:focus-visible + ${sandstoneScope}${btn}`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${sandstoneScope}${btn}:disabled`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${sandstoneScope}${btn}${disabled}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${sandstoneScope}${fieldset}:disabled ${sandstoneScope}${btn}`, {
	color: varBsBtnDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsBtnDisabledBg,
	borderColor: varBsBtnDisabledBorderColor,
	opacity: varBsBtnDisabledOpacity,
})

globalStyle(`${sandstoneScope}${btnPrimary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#325d88',
		[varBsBtnBorderColor]: '#325d88',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2b4f74',
		[varBsBtnHoverBorderColor]: '#284a6d',
		[varBsBtnFocusBoxShadowRgb]: '81, 117, 154',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#284a6d',
		[varBsBtnActiveBorderColor]: '#264666',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#325d88',
		[varBsBtnDisabledBorderColor]: '#325d88',
	},
})

globalStyle(`${sandstoneScope}${btnSecondary}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#8e8c84',
		[varBsBtnBorderColor]: '#8e8c84',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#797770',
		[varBsBtnHoverBorderColor]: '#72706a',
		[varBsBtnFocusBoxShadowRgb]: '159, 157, 150',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#72706a',
		[varBsBtnActiveBorderColor]: '#6b6963',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#8e8c84',
		[varBsBtnDisabledBorderColor]: '#8e8c84',
	},
})

globalStyle(`${sandstoneScope}${btnSuccess}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#93c54b',
		[varBsBtnBorderColor]: '#93c54b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#7da740',
		[varBsBtnHoverBorderColor]: '#769e3c',
		[varBsBtnFocusBoxShadowRgb]: '163, 206, 102',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#769e3c',
		[varBsBtnActiveBorderColor]: '#6e9438',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#93c54b',
		[varBsBtnDisabledBorderColor]: '#93c54b',
	},
})

globalStyle(`${sandstoneScope}${btnInfo}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#29abe0',
		[varBsBtnBorderColor]: '#29abe0',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#2391be',
		[varBsBtnHoverBorderColor]: '#2189b3',
		[varBsBtnFocusBoxShadowRgb]: '73, 184, 229',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#2189b3',
		[varBsBtnActiveBorderColor]: '#1f80a8',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#29abe0',
		[varBsBtnDisabledBorderColor]: '#29abe0',
	},
})

globalStyle(`${sandstoneScope}${btnWarning}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#f47c3c',
		[varBsBtnBorderColor]: '#f47c3c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#cf6933',
		[varBsBtnHoverBorderColor]: '#c36330',
		[varBsBtnFocusBoxShadowRgb]: '246, 144, 89',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#c36330',
		[varBsBtnActiveBorderColor]: '#b75d2d',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#f47c3c',
		[varBsBtnDisabledBorderColor]: '#f47c3c',
	},
})

globalStyle(`${sandstoneScope}${btnDanger}`, {
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

globalStyle(`${sandstoneScope}${btnLight}`, {
	vars: {
		[varBsBtnColor]: '#000',
		[varBsBtnBg]: '#f8f5f0',
		[varBsBtnBorderColor]: '#f8f5f0',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#d3d0cc',
		[varBsBtnHoverBorderColor]: '#c6c4c0',
		[varBsBtnFocusBoxShadowRgb]: '211, 208, 204',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#c6c4c0',
		[varBsBtnActiveBorderColor]: '#bab8b4',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#000',
		[varBsBtnDisabledBg]: '#f8f5f0',
		[varBsBtnDisabledBorderColor]: '#f8f5f0',
	},
})

globalStyle(`${sandstoneScope}${btnDark}`, {
	vars: {
		[varBsBtnColor]: '#fff',
		[varBsBtnBg]: '#3e3f3a',
		[varBsBtnBorderColor]: '#3e3f3a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#5b5c58',
		[varBsBtnHoverBorderColor]: '#51524e',
		[varBsBtnFocusBoxShadowRgb]: '91, 92, 88',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#656561',
		[varBsBtnActiveBorderColor]: '#51524e',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#fff',
		[varBsBtnDisabledBg]: '#3e3f3a',
		[varBsBtnDisabledBorderColor]: '#3e3f3a',
	},
})

globalStyle(`${sandstoneScope}${btnOutlinePrimary}`, {
	vars: {
		[varBsBtnColor]: '#325d88',
		[varBsBtnBorderColor]: '#325d88',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#325d88',
		[varBsBtnHoverBorderColor]: '#325d88',
		[varBsBtnFocusBoxShadowRgb]: '50, 93, 136',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#325d88',
		[varBsBtnActiveBorderColor]: '#325d88',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#325d88',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#325d88',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${sandstoneScope}${btnOutlineSecondary}`, {
	vars: {
		[varBsBtnColor]: '#8e8c84',
		[varBsBtnBorderColor]: '#8e8c84',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#8e8c84',
		[varBsBtnHoverBorderColor]: '#8e8c84',
		[varBsBtnFocusBoxShadowRgb]: '142, 140, 132',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#8e8c84',
		[varBsBtnActiveBorderColor]: '#8e8c84',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#8e8c84',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#8e8c84',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${sandstoneScope}${btnOutlineSuccess}`, {
	vars: {
		[varBsBtnColor]: '#93c54b',
		[varBsBtnBorderColor]: '#93c54b',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#93c54b',
		[varBsBtnHoverBorderColor]: '#93c54b',
		[varBsBtnFocusBoxShadowRgb]: '147, 197, 75',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#93c54b',
		[varBsBtnActiveBorderColor]: '#93c54b',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#93c54b',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#93c54b',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${sandstoneScope}${btnOutlineInfo}`, {
	vars: {
		[varBsBtnColor]: '#29abe0',
		[varBsBtnBorderColor]: '#29abe0',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#29abe0',
		[varBsBtnHoverBorderColor]: '#29abe0',
		[varBsBtnFocusBoxShadowRgb]: '41, 171, 224',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#29abe0',
		[varBsBtnActiveBorderColor]: '#29abe0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#29abe0',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#29abe0',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${sandstoneScope}${btnOutlineWarning}`, {
	vars: {
		[varBsBtnColor]: '#f47c3c',
		[varBsBtnBorderColor]: '#f47c3c',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#f47c3c',
		[varBsBtnHoverBorderColor]: '#f47c3c',
		[varBsBtnFocusBoxShadowRgb]: '244, 124, 60',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#f47c3c',
		[varBsBtnActiveBorderColor]: '#f47c3c',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f47c3c',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f47c3c',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${sandstoneScope}${btnOutlineDanger}`, {
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

globalStyle(`${sandstoneScope}${btnOutlineLight}`, {
	vars: {
		[varBsBtnColor]: '#f8f5f0',
		[varBsBtnBorderColor]: '#f8f5f0',
		[varBsBtnHoverColor]: '#000',
		[varBsBtnHoverBg]: '#f8f5f0',
		[varBsBtnHoverBorderColor]: '#f8f5f0',
		[varBsBtnFocusBoxShadowRgb]: '248, 245, 240',
		[varBsBtnActiveColor]: '#000',
		[varBsBtnActiveBg]: '#f8f5f0',
		[varBsBtnActiveBorderColor]: '#f8f5f0',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#f8f5f0',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#f8f5f0',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${sandstoneScope}${btnOutlineDark}`, {
	vars: {
		[varBsBtnColor]: '#3e3f3a',
		[varBsBtnBorderColor]: '#3e3f3a',
		[varBsBtnHoverColor]: '#fff',
		[varBsBtnHoverBg]: '#3e3f3a',
		[varBsBtnHoverBorderColor]: '#3e3f3a',
		[varBsBtnFocusBoxShadowRgb]: '62, 63, 58',
		[varBsBtnActiveColor]: '#fff',
		[varBsBtnActiveBg]: '#3e3f3a',
		[varBsBtnActiveBorderColor]: '#3e3f3a',
		[varBsBtnActiveBoxShadow]: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
		[varBsBtnDisabledColor]: '#3e3f3a',
		[varBsBtnDisabledBg]: 'transparent',
		[varBsBtnDisabledBorderColor]: '#3e3f3a',
		[varBsGradient]: 'none',
	},
})

globalStyle(`${sandstoneScope}${btnLink}`, {
	vars: {
		[varBsBtnFontWeight]: '400',
		[varBsBtnColor]: varBsLinkColor,
		[varBsBtnBg]: 'transparent',
		[varBsBtnBorderColor]: 'transparent',
		[varBsBtnHoverColor]: varBsLinkHoverColor,
		[varBsBtnHoverBorderColor]: 'transparent',
		[varBsBtnActiveColor]: varBsLinkHoverColor,
		[varBsBtnActiveBorderColor]: 'transparent',
		[varBsBtnDisabledColor]: '#8e8c84',
		[varBsBtnDisabledBorderColor]: 'transparent',
		[varBsBtnBoxShadow]: '0 0 0 #000',
		[varBsBtnFocusBoxShadowRgb]: '163, 206, 102',
	},
	textDecoration: 'underline',
})

globalStyle(`${sandstoneScope}${btnLink}:focus-visible`, {
	color: varBsBtnColor,
})

globalStyle(`${sandstoneScope}${btnLink}:hover`, {
	color: varBsBtnHoverColor,
})

globalStyle(`${sandstoneScope}${btnLg}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${sandstoneScope}${btnGroupLg} > ${sandstoneScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.5rem',
		[varBsBtnPaddingX]: '1rem',
		[varBsBtnFontSize]: '1.25rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusLg,
	},
})

globalStyle(`${sandstoneScope}${btnSm}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${sandstoneScope}${btnGroupSm} > ${sandstoneScope}${btn}`, {
	vars: {
		[varBsBtnPaddingY]: '0.25rem',
		[varBsBtnPaddingX]: '0.5rem',
		[varBsBtnFontSize]: '0.875rem',
		[varBsBtnBorderRadius]: varBsBorderRadiusSm,
	},
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnCheck}:checked + ${sandstoneScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnCheck}:focus + ${sandstoneScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btnCheck}:checked + ${sandstoneScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btnCheck}:focus + ${sandstoneScope}${btn}`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btn}:hover`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btn}:focus`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btn}:active`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btn}${active}`, {
	zIndex: '1',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}:not(${btnCheck}:first-child) + ${sandstoneScope}${btn}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btn}${dropdownToggleSplit}:first-child`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnGroup}:not(:last-child) > ${sandstoneScope}${btn}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}:not(${btnCheck}) + ${sandstoneScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnGroup}:not(:first-child) > ${sandstoneScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${sandstoneScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})

globalStyle(`${sandstoneScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${sandstoneScope}${dropup} ${sandstoneScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${sandstoneScope}${dropend} ${sandstoneScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${sandstoneScope}${dropstart} ${sandstoneScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${sandstoneScope}${btnSm} + ${sandstoneScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${sandstoneScope}${btnGroupSm} > ${sandstoneScope}${btn} + ${sandstoneScope}${dropdownToggleSplit}`, {
	paddingRight: '0.375rem',
	paddingLeft: '0.375rem',
})

globalStyle(`${sandstoneScope}${btnLg} + ${sandstoneScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${sandstoneScope}${btnGroupLg} > ${sandstoneScope}${btn} + ${sandstoneScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btn}`, {
	width: '100%',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btn}:not(:first-child)`, {
	marginTop: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btnGroup}:not(:last-child) > ${sandstoneScope}${btn}`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btn}:nth-child(n+3)`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}:not(${btnCheck}) + ${sandstoneScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${sandstoneScope}${btnGroupVertical} > ${sandstoneScope}${btnGroup}:not(:first-child) > ${sandstoneScope}${btn}`, {
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${sandstoneScope}${alertDismissible} ${sandstoneScope}${btnClose}`, {
	position: 'absolute',
	top: '0',
	right: '0',
	zIndex: '2',
	padding: '1.25rem 1rem',
})

globalStyle(`${sandstoneScope}${btnClose}`, {
	vars: {
		[varBsBtnCloseColor]: '#fff',
		[varBsBtnCloseBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23fff\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414\'/%3e%3c/svg%3e")',
		[varBsBtnCloseOpacity]: '0.8',
		[varBsBtnCloseHoverOpacity]: '1',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(50, 93, 136, 0.25)',
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

globalStyle(`${sandstoneScope}${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${sandstoneScope}${btnClose}:focus`, {
	outline: '0',
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${sandstoneScope}${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${sandstoneScope}${btnClose}${disabled}`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${sandstoneScope}${btnCloseWhite}`, {
	vars: {
		[varBsBtnCloseFilter]: 'invert(1) grayscale(100%) brightness(200%)',
	},
})

globalStyle(`${sandstoneScope}${toastHeader} ${sandstoneScope}${btnClose}`, {
	marginRight: `calc(-0.5 * ${varBsToastPaddingX})`,
	marginLeft: varBsToastPaddingX,
})

globalStyle(`${sandstoneScope}${modalHeader} ${sandstoneScope}${btnClose}`, {
	padding: `calc(${varBsModalHeaderPaddingY} * 0.5) calc(${varBsModalHeaderPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsModalHeaderPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsModalHeaderPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${sandstoneScope}${offcanvasHeader} ${sandstoneScope}${btnClose}`, {
	padding: `calc(${varBsOffcanvasPaddingY} * 0.5) calc(${varBsOffcanvasPaddingX} * 0.5)`,
	marginTop: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginRight: `calc(-0.5 * ${varBsOffcanvasPaddingX})`,
	marginBottom: `calc(-0.5 * ${varBsOffcanvasPaddingY})`,
	marginLeft: 'auto',
})

globalStyle(`${sandstoneScope}${placeholder}${btn}::before`, {
	display: 'inline-block',
	content: '""',
})

globalStyle(`${sandstoneScope}${btn}`, {
	fontSize: '13px',
	fontWeight: '500',
	lineHeight: '22px',
	textTransform: 'uppercase',
})

globalStyle(`${sandstoneScope}${btn}:hover`, {
	borderColor: 'transparent',
})

globalStyle(`${sandstoneScope}${btnSuccess}`, {
	color: '#fff',
})

globalStyle(`${sandstoneScope}${btnWarning}`, {
	color: '#fff',
})

globalStyle(`${sandstoneScope}${modal} ${sandstoneScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23dfd7ca\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})

globalStyle(`${sandstoneScope}${toast} ${sandstoneScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23dfd7ca\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})

globalStyle(`${sandstoneScope}${offcanvas} ${sandstoneScope}${btnClose}`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'%23dfd7ca\'%3e%3cpath d=\'M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z\'/%3e%3c/svg%3e")',
})
