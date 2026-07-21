import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { mintyScope } from '../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
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

globalStyle(`:where(${mintyScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${mintyScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${mintyScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${mintyScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${mintyScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.375rem 0.75rem',
	fontSize: '1rem',
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
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${mintyScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${mintyScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${mintyScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${mintyScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: '#bce1d6',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(120, 194, 173, 0.25)',
})

globalStyle(`${mintyScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${mintyScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${mintyScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${mintyScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${mintyScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: '1',
})

globalStyle(`${mintyScope}${formControl}::-webkit-file-upload-button`, {
	padding: '0.375rem 0.75rem',
	margin: '-0.375rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
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

globalStyle(`${mintyScope}${formControl}::file-selector-button`, {
	padding: '0.375rem 0.75rem',
	margin: '-0.375rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
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

globalStyle(`${mintyScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${mintyScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${mintyScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${mintyScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${mintyScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${mintyScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${mintyScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${mintyScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${mintyScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${mintyScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${mintyScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${mintyScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${mintyScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 0.75rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${mintyScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${mintyScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${mintyScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${mintyScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${mintyScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23343a40\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.375rem 2.25rem 0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsBodyBg,
	backgroundImage: `${varBsFormSelectBgImg}, ${fallbackVar(varBsFormSelectBgIcon, 'none')}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 0.75rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${mintyScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${mintyScope}${formSelect}:focus`, {
	borderColor: '#bce1d6',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(120, 194, 173, 0.25)',
})

globalStyle(`${mintyScope}${formSelect}[multiple]`, {
	paddingRight: '0.75rem',
	backgroundImage: 'none',
})

globalStyle(`${mintyScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '0.75rem',
	backgroundImage: 'none',
})

globalStyle(`${mintyScope}${formSelect}:disabled`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${mintyScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${mintyScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${mintyScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${mintyScope}[data-bs-theme=dark] ${mintyScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23eceeef\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${mintyScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${mintyScope}${formCheck} ${mintyScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${mintyScope}${formCheckReverse} ${mintyScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${mintyScope}${formCheckInput}`, {
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

globalStyle(`${mintyScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${mintyScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${mintyScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${mintyScope}${formCheckInput}:focus`, {
	borderColor: '#bce1d6',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(120, 194, 173, 0.25)',
})

globalStyle(`${mintyScope}${formCheckInput}:checked`, {
	backgroundColor: '#78c2ad',
	borderColor: '#78c2ad',
})

globalStyle(`${mintyScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${mintyScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${mintyScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#78c2ad',
	borderColor: '#78c2ad',
})

globalStyle(`${mintyScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${mintyScope}${formCheckInput}[disabled] ~ ${mintyScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${mintyScope}${formCheckInput}:disabled ~ ${mintyScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${mintyScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${mintyScope}${formSwitch} ${mintyScope}${formCheckInput}`, {
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

globalStyle(`${mintyScope}${formSwitch} ${mintyScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${mintyScope}${formSwitch} ${mintyScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23bce1d6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${mintyScope}${formSwitch} ${mintyScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${mintyScope}${formSwitch}${formCheckReverse} ${mintyScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${mintyScope}[data-bs-theme=dark] ${mintyScope}${formSwitch} ${mintyScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${mintyScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${mintyScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${mintyScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(120, 194, 173, 0.25)',
})

globalStyle(`${mintyScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(120, 194, 173, 0.25)',
})

globalStyle(`${mintyScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${mintyScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#78c2ad',
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${mintyScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${mintyScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#d7ede6',
})

globalStyle(`${mintyScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${mintyScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#78c2ad',
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${mintyScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${mintyScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#d7ede6',
})

globalStyle(`${mintyScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${mintyScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${mintyScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${mintyScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${mintyScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${elLabel}`, {
	position: 'absolute',
	top: '0',
	left: '0',
	zIndex: '2',
	maxWidth: '100%',
	height: '100%',
	padding: '1rem 0.75rem',
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

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}`, {
	padding: '1rem 0.75rem',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}:not(:-moz-placeholder-shown) ~ ${mintyScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}:focus ~ ${mintyScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}:not(:placeholder-shown) ~ ${mintyScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formSelect} ~ ${mintyScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}:-webkit-autofill ~ ${mintyScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${mintyScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${elTextarea}:focus ~ ${mintyScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${elTextarea}:not(:placeholder-shown) ~ ${mintyScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${elTextarea}:disabled ~ ${mintyScope}${elLabel}::after`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${mintyScope}${formFloating} > :disabled ~ ${mintyScope}${elLabel}`, {
	color: '#888',
})

globalStyle(`${mintyScope}${formFloating} > ${mintyScope}${formControl}:disabled ~ ${mintyScope}${elLabel}`, {
	color: '#888',
})

globalStyle(`${mintyScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${mintyScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: varBsTertiaryBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${mintyScope}${inputGroupLg} > ${mintyScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${mintyScope}${inputGroupLg} > ${mintyScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${mintyScope}${inputGroupLg} > ${mintyScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${mintyScope}${inputGroupSm} > ${mintyScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${mintyScope}${inputGroupSm} > ${mintyScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${mintyScope}${inputGroupSm} > ${mintyScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${mintyScope}${inputGroupLg} > ${mintyScope}${formSelect}`, {
	paddingRight: '3rem',
})

globalStyle(`${mintyScope}${inputGroupSm} > ${mintyScope}${formSelect}`, {
	paddingRight: '3rem',
})

globalStyle(`${mintyScope}${inputGroup}:not(${hasValidation}) > ${mintyScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${mintyScope}${inputGroup}:not(${hasValidation}) > ${mintyScope}${formFloating}:not(:last-child) > ${mintyScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${mintyScope}${inputGroup}:not(${hasValidation}) > ${mintyScope}${formFloating}:not(:last-child) > ${mintyScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${mintyScope}${inputGroup}${hasValidation} > ${mintyScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${mintyScope}${inputGroup}${hasValidation} > ${mintyScope}${formFloating}:nth-last-child(n+3) > ${mintyScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${mintyScope}${inputGroup}${hasValidation} > ${mintyScope}${formFloating}:nth-last-child(n+3) > ${mintyScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formFloating}:not(:first-child) > ${mintyScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formFloating}:not(:first-child) > ${mintyScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${mintyScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${mintyScope}${validTooltip}`, {
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

globalStyle(`${mintyScope}${wasValidated} :valid ~ ${mintyScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${mintyScope}${wasValidated} :valid ~ ${mintyScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${mintyScope}${isValid} ~ ${mintyScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${mintyScope}${isValid} ~ ${mintyScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2356cc9d\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2356cc9d\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${mintyScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${mintyScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2356cc9d\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2356cc9d\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2356cc9d\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2356cc9d\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${mintyScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${mintyScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formCheckInput}:valid ~ ${mintyScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${mintyScope}${formCheckInput}${isValid} ~ ${mintyScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${mintyScope}${formCheckInline} ${mintyScope}${formCheckInput} ~ ${mintyScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${inputGroup} > ${mintyScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${inputGroup} > ${mintyScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${inputGroup} > ${mintyScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${mintyScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${mintyScope}${invalidTooltip}`, {
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

globalStyle(`${mintyScope}${wasValidated} :invalid ~ ${mintyScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${mintyScope}${wasValidated} :invalid ~ ${mintyScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${mintyScope}${isInvalid} ~ ${mintyScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${mintyScope}${isInvalid} ~ ${mintyScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ff7851\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ff7851\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ff7851\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ff7851\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${mintyScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${mintyScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ff7851\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ff7851\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ff7851\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ff7851\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ff7851\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ff7851\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ff7851\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ff7851\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${mintyScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${mintyScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${formCheckInput}:invalid ~ ${mintyScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${mintyScope}${formCheckInput}${isInvalid} ~ ${mintyScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${mintyScope}${formCheckInline} ${mintyScope}${formCheckInput} ~ ${mintyScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${inputGroup} > ${mintyScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${inputGroup} > ${mintyScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${mintyScope}${wasValidated} ${mintyScope}${inputGroup} > ${mintyScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${mintyScope}${inputGroup} > ${mintyScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${mintyScope}${btnToolbar} ${mintyScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`:where(${mintyScope}${legend})`, {
	fontFamily: 'Montserrat, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
})

globalStyle(`${mintyScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${mintyScope}${formSwitch}`, {
	isolation: 'isolate',
})
