import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { pulseScope } from '../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderColor,
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
import { dropdownMenu } from '../../../theme-contract/ui/dropdowns/contract.css'

globalStyle(`:where(${pulseScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${pulseScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${pulseScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${pulseScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${pulseScope}${formControl}`, {
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
	borderRadius: '0',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${pulseScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${pulseScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${pulseScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${pulseScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: '#593196',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(89, 49, 150, 0.25)',
})

globalStyle(`${pulseScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${pulseScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${pulseScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${pulseScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${pulseScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: '1',
})

globalStyle(`${pulseScope}${formControl}::-webkit-file-upload-button`, {
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

globalStyle(`${pulseScope}${formControl}::file-selector-button`, {
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

globalStyle(`${pulseScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${pulseScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${pulseScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${pulseScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${pulseScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${pulseScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${pulseScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
})

globalStyle(`${pulseScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${pulseScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${pulseScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
})

globalStyle(`${pulseScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${pulseScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${pulseScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 0.75rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${pulseScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${pulseScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${pulseScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${pulseScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${pulseScope}${formSelect}`, {
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
	borderRadius: '0',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${pulseScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${pulseScope}${formSelect}:focus`, {
	borderColor: '#593196',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(89, 49, 150, 0.25)',
})

globalStyle(`${pulseScope}${formSelect}[multiple]`, {
	paddingRight: '0.75rem',
	backgroundImage: 'none',
})

globalStyle(`${pulseScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '0.75rem',
	backgroundImage: 'none',
})

globalStyle(`${pulseScope}${formSelect}:disabled`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${pulseScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${pulseScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
})

globalStyle(`${pulseScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
})

globalStyle(`${pulseScope}[data-bs-theme=dark] ${pulseScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23ededed\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${pulseScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${pulseScope}${formCheck} ${pulseScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${pulseScope}${formCheckReverse} ${pulseScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${pulseScope}${formCheckInput}`, {
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

globalStyle(`${pulseScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${pulseScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${pulseScope}${formCheckInput}:focus`, {
	borderColor: '#593196',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(89, 49, 150, 0.25)',
})

globalStyle(`${pulseScope}${formCheckInput}:checked`, {
	backgroundColor: '#593196',
	borderColor: '#593196',
})

globalStyle(`${pulseScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${pulseScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${pulseScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#593196',
	borderColor: '#593196',
})

globalStyle(`${pulseScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${pulseScope}${formCheckInput}[disabled] ~ ${pulseScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${pulseScope}${formCheckInput}:disabled ~ ${pulseScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${pulseScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${pulseScope}${formSwitch} ${pulseScope}${formCheckInput}`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%280, 0, 0, 0.25%29\'/%3e%3c/svg%3e")',
	},
	width: '2em',
	marginLeft: '-2.5em',
	backgroundImage: varBsFormSwitchBg,
	backgroundPosition: 'left center',
	borderRadius: '0',
	transition: 'background-position 0.15s ease-in-out',
})

globalStyle(`${pulseScope}${formSwitch} ${pulseScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${pulseScope}${formSwitch} ${pulseScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23593196\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${pulseScope}${formSwitch} ${pulseScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${pulseScope}${formSwitch}${formCheckReverse} ${pulseScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${pulseScope}[data-bs-theme=dark] ${pulseScope}${formSwitch} ${pulseScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${pulseScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${pulseScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${pulseScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(89, 49, 150, 0.25)',
})

globalStyle(`${pulseScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(89, 49, 150, 0.25)',
})

globalStyle(`${pulseScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${pulseScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#593196',
	border: '0',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${pulseScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${pulseScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#cdc1e0',
})

globalStyle(`${pulseScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
})

globalStyle(`${pulseScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#593196',
	border: '0',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${pulseScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${pulseScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#cdc1e0',
})

globalStyle(`${pulseScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
})

globalStyle(`${pulseScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${pulseScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${pulseScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${pulseScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${elLabel}`, {
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

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}`, {
	padding: '1rem 0.75rem',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}:not(:-moz-placeholder-shown) ~ ${pulseScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}:focus ~ ${pulseScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}:not(:placeholder-shown) ~ ${pulseScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formSelect} ~ ${pulseScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}:-webkit-autofill ~ ${pulseScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${pulseScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${elTextarea}:focus ~ ${pulseScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${elTextarea}:not(:placeholder-shown) ~ ${pulseScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${elTextarea}:disabled ~ ${pulseScope}${elLabel}::after`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${pulseScope}${formFloating} > :disabled ~ ${pulseScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${pulseScope}${formFloating} > ${pulseScope}${formControl}:disabled ~ ${pulseScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${pulseScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${pulseScope}${inputGroupText}`, {
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
})

globalStyle(`${pulseScope}${inputGroupLg} > ${pulseScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
})

globalStyle(`${pulseScope}${inputGroupLg} > ${pulseScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
})

globalStyle(`${pulseScope}${inputGroupLg} > ${pulseScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
})

globalStyle(`${pulseScope}${inputGroupSm} > ${pulseScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
})

globalStyle(`${pulseScope}${inputGroupSm} > ${pulseScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
})

globalStyle(`${pulseScope}${inputGroupSm} > ${pulseScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
})

globalStyle(`${pulseScope}${inputGroupLg} > ${pulseScope}${formSelect}`, {
	paddingRight: '3rem',
})

globalStyle(`${pulseScope}${inputGroupSm} > ${pulseScope}${formSelect}`, {
	paddingRight: '3rem',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${pulseScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${pulseScope}${validTooltip}`, {
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
})

globalStyle(`${pulseScope}${wasValidated} :valid ~ ${pulseScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${pulseScope}${wasValidated} :valid ~ ${pulseScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${pulseScope}${isValid} ~ ${pulseScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${pulseScope}${isValid} ~ ${pulseScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2313b955\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2313b955\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${pulseScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${pulseScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2313b955\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2313b955\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2313b955\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2313b955\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${pulseScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${pulseScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formCheckInput}:valid ~ ${pulseScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${pulseScope}${formCheckInput}${isValid} ~ ${pulseScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${pulseScope}${formCheckInline} ${pulseScope}${formCheckInput} ~ ${pulseScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${inputGroup} > ${pulseScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${inputGroup} > ${pulseScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${inputGroup} > ${pulseScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${pulseScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${pulseScope}${invalidTooltip}`, {
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
})

globalStyle(`${pulseScope}${wasValidated} :invalid ~ ${pulseScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${pulseScope}${wasValidated} :invalid ~ ${pulseScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${pulseScope}${isInvalid} ~ ${pulseScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${pulseScope}${isInvalid} ~ ${pulseScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fc3939\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fc3939\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fc3939\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fc3939\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${pulseScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${pulseScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fc3939\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fc3939\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fc3939\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fc3939\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fc3939\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fc3939\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fc3939\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fc3939\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${pulseScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${pulseScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${formCheckInput}:invalid ~ ${pulseScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${pulseScope}${formCheckInput}${isInvalid} ~ ${pulseScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${pulseScope}${formCheckInline} ${pulseScope}${formCheckInput} ~ ${pulseScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${inputGroup} > ${pulseScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${inputGroup} > ${pulseScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${pulseScope}${wasValidated} ${pulseScope}${inputGroup} > ${pulseScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${pulseScope}${inputGroup} > ${pulseScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${pulseScope}${btnToolbar} ${pulseScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${pulseScope}${formControl}:focus`, {
	boxShadow: '0 0 5px rgba(100, 65, 164, 0.4)',
})

globalStyle(`${pulseScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${pulseScope}${formSwitch}`, {
	isolation: 'isolate',
})
