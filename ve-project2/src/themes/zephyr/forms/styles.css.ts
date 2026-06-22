import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { zephyrScope } from '../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsBoxShadowInset,
	varBsDanger,
	varBsDangerRgb,
	varBsSecondaryBg,
	varBsSecondaryColor,
	varBsSuccess,
	varBsSuccessRgb,
	varBsTertiaryBg,
} from '../../../theme-contract/_vars.css'
import {
	varBsFormCheckBg,
	varBsFormCheckBgImage,
	varBsFormInvalidBorderColor,
	varBsFormInvalidColor,
	varBsFormSelectBgIcon,
	varBsFormSelectBgImg,
	varBsFormSwitchBg,
	varBsFormValidBorderColor,
	varBsFormValidColor,
} from '../../../theme-contract/forms/_vars.css'

import { elLabel, elTextarea } from '../../../theme-contract/global-elements/contract.css'

import {
	formCheck,
	formCheckInput,
	formCheckLabel,
	formControl,
	formControlLg,
	formControlSm,
	formFloating,
	formLabel,
	formRange,
	formSelect,
	formSelectLg,
	formSelectSm,
	formSwitch,
	formText,
	hasValidation,
	inputGroup,
	inputGroupText,
	invalidFeedback,
	isInvalid,
	isValid,
	legend,
	legendClear,
	validFeedback,
	wasValidated,
} from '../../../theme-contract/forms/contract.css'
import {
	formCheckInline,
	formCheckReverse,
	formControlColor,
	formControlPlaintext,
	inputGroupLg,
	inputGroupSm,
	invalidTooltip,
	validTooltip,
} from '../../../theme-contract/literal/contract.css'
import { btnToolbar } from '../../../theme-contract/ui/button-group/contract.css'
import { dropdownMenu, dropdownToggle } from '../../../theme-contract/ui/dropdowns/contract.css'

globalStyle(`:where(${zephyrScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${zephyrScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${zephyrScope}${formLabel}`, {
	marginBottom: '0.5rem',
	fontWeight: '500',
})

globalStyle(`${zephyrScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${zephyrScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsBodyBg,
	backgroundClip: 'padding-box',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${zephyrScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${zephyrScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${zephyrScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: '#9aacf3',
	outline: '0',
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 0.25rem rgba(52, 89, 230, 0.25)',
})

globalStyle(`${zephyrScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${zephyrScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${zephyrScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${zephyrScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${zephyrScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: '1',
})

globalStyle(`${zephyrScope}${formControl}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${zephyrScope}${formControl}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${zephyrScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${zephyrScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${zephyrScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${zephyrScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${zephyrScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${zephyrScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${zephyrScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${zephyrScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${zephyrScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${zephyrScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${zephyrScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${zephyrScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${zephyrScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${zephyrScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${zephyrScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${zephyrScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23343a40\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.5rem 3rem 0.5rem 1rem',
	fontSize: '0.875rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsBodyBg,
	backgroundImage: `${varBsFormSelectBgImg}, ${fallbackVar(varBsFormSelectBgIcon, 'none')}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 1rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	boxShadow: varBsBoxShadowInset,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${zephyrScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${formSelect}:focus`, {
	borderColor: '#9aacf3',
	outline: '0',
	boxShadow: `${varBsBoxShadowInset}, 0 0 0 0.25rem rgba(52, 89, 230, 0.25)`,
})

globalStyle(`${zephyrScope}${formSelect}[multiple]`, {
	paddingRight: '1rem',
	backgroundImage: 'none',
})

globalStyle(`${zephyrScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '1rem',
	backgroundImage: 'none',
})

globalStyle(`${zephyrScope}${formSelect}:disabled`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${zephyrScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${zephyrScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${zephyrScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${zephyrScope}[data-bs-theme=dark] ${zephyrScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${zephyrScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${zephyrScope}${formCheck} ${zephyrScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${zephyrScope}${formCheckReverse} ${zephyrScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${zephyrScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: varBsBodyBg,
	},
	flexShrink: '0',
	width: '1em',
	height: '1em',
	marginTop: '0.25em',
	verticalAlign: 'top',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsFormCheckBg,
	backgroundImage: varBsFormCheckBgImage,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: 'contain',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	WebkitPrintColorAdjust: 'exact',
	colorAdjust: 'exact',
	printColorAdjust: 'exact',
})

globalStyle(`${zephyrScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${zephyrScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${zephyrScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${zephyrScope}${formCheckInput}:focus`, {
	borderColor: '#9aacf3',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(52, 89, 230, 0.25)',
})

globalStyle(`${zephyrScope}${formCheckInput}:checked`, {
	backgroundColor: '#3459e6',
	borderColor: '#3459e6',
})

globalStyle(`${zephyrScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${zephyrScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${zephyrScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#3459e6',
	borderColor: '#3459e6',
})

globalStyle(`${zephyrScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${zephyrScope}${formCheckInput}[disabled] ~ ${zephyrScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${zephyrScope}${formCheckInput}:disabled ~ ${zephyrScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${zephyrScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${zephyrScope}${formSwitch} ${zephyrScope}${formCheckInput}`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%280, 0, 0, 0.25%29\'/%3e%3c/svg%3e")',
	},
	width: '2em',
	marginLeft: '-2.5em',
	backgroundImage: varBsFormSwitchBg,
	backgroundPosition: 'left center',
	borderRadius: '2em',
	transition: 'background-position 0.15s ease-in-out',
})

globalStyle(`${zephyrScope}${formSwitch} ${zephyrScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${formSwitch} ${zephyrScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%239aacf3\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${zephyrScope}${formSwitch} ${zephyrScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${zephyrScope}${formSwitch}${formCheckReverse} ${zephyrScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${zephyrScope}[data-bs-theme=dark] ${zephyrScope}${formSwitch} ${zephyrScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${zephyrScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${zephyrScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${zephyrScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(52, 89, 230, 0.25)',
})

globalStyle(`${zephyrScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(52, 89, 230, 0.25)',
})

globalStyle(`${zephyrScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${zephyrScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#3459e6',
	border: '0',
	borderRadius: '1rem',
	boxShadow: '0 0.1rem 0.25rem rgba(0, 0, 0, 0.1)',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${zephyrScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#c2cdf8',
})

globalStyle(`${zephyrScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
	boxShadow: varBsBoxShadowInset,
})

globalStyle(`${zephyrScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#3459e6',
	border: '0',
	borderRadius: '1rem',
	boxShadow: '0 0.1rem 0.25rem rgba(0, 0, 0, 0.1)',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${zephyrScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#c2cdf8',
})

globalStyle(`${zephyrScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
	boxShadow: varBsBoxShadowInset,
})

globalStyle(`${zephyrScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${zephyrScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${zephyrScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${zephyrScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${elLabel}`, {
	position: 'absolute',
	top: '0',
	left: '0',
	zIndex: '2',
	maxWidth: '100%',
	height: '100%',
	padding: '1rem 1rem',
	overflow: 'hidden',
	color: `rgba(${varBsBodyColorRgb}, 0.65)`,
	textAlign: 'start',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	pointerEvents: 'none',
	border: `${varBsBorderWidth} solid transparent`,
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}`, {
	padding: '1rem 1rem',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '1rem',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}:not(:-moz-placeholder-shown) ~ ${zephyrScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}:focus ~ ${zephyrScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}:not(:placeholder-shown) ~ ${zephyrScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formSelect} ~ ${zephyrScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}:-webkit-autofill ~ ${zephyrScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${zephyrScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${elTextarea}:focus ~ ${zephyrScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${elTextarea}:not(:placeholder-shown) ~ ${zephyrScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${elTextarea}:disabled ~ ${zephyrScope}${elLabel}::after`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${zephyrScope}${formFloating} > :disabled ~ ${zephyrScope}${elLabel}`, {
	color: '#6c757d',
})

globalStyle(`${zephyrScope}${formFloating} > ${zephyrScope}${formControl}:disabled ~ ${zephyrScope}${elLabel}`, {
	color: '#6c757d',
})

globalStyle(`${zephyrScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${zephyrScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: varBsTertiaryBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${zephyrScope}${inputGroupLg} > ${zephyrScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${zephyrScope}${inputGroupLg} > ${zephyrScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${zephyrScope}${inputGroupLg} > ${zephyrScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${zephyrScope}${inputGroupSm} > ${zephyrScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${zephyrScope}${inputGroupSm} > ${zephyrScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${zephyrScope}${inputGroupSm} > ${zephyrScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${zephyrScope}${inputGroupLg} > ${zephyrScope}${formSelect}`, {
	paddingRight: '4rem',
})

globalStyle(`${zephyrScope}${inputGroupSm} > ${zephyrScope}${formSelect}`, {
	paddingRight: '4rem',
})

globalStyle(`${zephyrScope}${inputGroup}:not(${hasValidation}) > ${zephyrScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${zephyrScope}${inputGroup}:not(${hasValidation}) > ${zephyrScope}${formFloating}:not(:last-child) > ${zephyrScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${zephyrScope}${inputGroup}:not(${hasValidation}) > ${zephyrScope}${formFloating}:not(:last-child) > ${zephyrScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${zephyrScope}${inputGroup}${hasValidation} > ${zephyrScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${zephyrScope}${inputGroup}${hasValidation} > ${zephyrScope}${formFloating}:nth-last-child(n+3) > ${zephyrScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${zephyrScope}${inputGroup}${hasValidation} > ${zephyrScope}${formFloating}:nth-last-child(n+3) > ${zephyrScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formFloating}:not(:first-child) > ${zephyrScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formFloating}:not(:first-child) > ${zephyrScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${zephyrScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${zephyrScope}${validTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.25rem 0.5rem',
	marginTop: '0.1rem',
	fontSize: '0.875rem',
	color: '#fff',
	backgroundColor: varBsSuccess,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${zephyrScope}${wasValidated} :valid ~ ${zephyrScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${zephyrScope}${wasValidated} :valid ~ ${zephyrScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${zephyrScope}${isValid} ~ ${zephyrScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${zephyrScope}${isValid} ~ ${zephyrScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%232fb380\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%232fb380\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${zephyrScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${zephyrScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%232fb380\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%232fb380\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%232fb380\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%232fb380\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `${varBsBoxShadowInset}, 0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `${varBsBoxShadowInset}, 0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 1rem))',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${zephyrScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${zephyrScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formCheckInput}:valid ~ ${zephyrScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${zephyrScope}${formCheckInput}${isValid} ~ ${zephyrScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${zephyrScope}${formCheckInline} ${zephyrScope}${formCheckInput} ~ ${zephyrScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${inputGroup} > ${zephyrScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${inputGroup} > ${zephyrScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${inputGroup} > ${zephyrScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${zephyrScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${zephyrScope}${invalidTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.25rem 0.5rem',
	marginTop: '0.1rem',
	fontSize: '0.875rem',
	color: '#fff',
	backgroundColor: varBsDanger,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${zephyrScope}${wasValidated} :invalid ~ ${zephyrScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${zephyrScope}${wasValidated} :invalid ~ ${zephyrScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${zephyrScope}${isInvalid} ~ ${zephyrScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${zephyrScope}${isInvalid} ~ ${zephyrScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23da292e\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23da292e\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23da292e\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23da292e\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${zephyrScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${zephyrScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23da292e\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23da292e\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23da292e\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23da292e\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23da292e\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23da292e\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23da292e\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23da292e\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `${varBsBoxShadowInset}, 0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `${varBsBoxShadowInset}, 0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 1rem))',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${zephyrScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${zephyrScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${formCheckInput}:invalid ~ ${zephyrScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${zephyrScope}${formCheckInput}${isInvalid} ~ ${zephyrScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${zephyrScope}${formCheckInline} ${zephyrScope}${formCheckInput} ~ ${zephyrScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${inputGroup} > ${zephyrScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${inputGroup} > ${zephyrScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${zephyrScope}${wasValidated} ${zephyrScope}${inputGroup} > ${zephyrScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${zephyrScope}${inputGroup} > ${zephyrScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${zephyrScope}${btnToolbar} ${zephyrScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${zephyrScope}${inputGroupText}`, {
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
})

globalStyle(`${zephyrScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${zephyrScope}${formSwitch}`, {
	isolation: 'isolate',
})
