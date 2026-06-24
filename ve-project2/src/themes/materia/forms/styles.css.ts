import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../scope.css'

import {
	varBsBodyColorRgb,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsDanger,
	varBsDangerRgb,
	varBsGradient,
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

import {
	elInput,
	elLabel,
	elSelect,
	elTextarea,
} from '../../../theme-contract/global-elements/contract.css'

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
	disabled,
	formCheckInline,
	formCheckReverse,
	formControlColor,
	formControlPlaintext,
	formGroupLg,
	hasDanger,
	hasSuccess,
	hasWarning,
	inputGroupAddon,
	inputGroupLg,
	inputGroupSm,
	inputLg,
	inputSm,
	invalidTooltip,
	validTooltip,
} from '../../../theme-contract/literal/contract.css'
import { btnToolbar } from '../../../theme-contract/ui/button-group/contract.css'
import { dropdownMenu, dropdownToggle } from '../../../theme-contract/ui/dropdowns/contract.css'

globalStyle(`:where(${materiaScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${materiaScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${materiaScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${materiaScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${materiaScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '1rem 0',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#666',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundClip: 'padding-box',
	border: '0 solid transparent',
	borderRadius: '0',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${materiaScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${materiaScope}${formControl}:focus`, {
	color: '#666',
	backgroundColor: 'transparent',
	borderColor: '#90cbf9',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${materiaScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${materiaScope}${formControl}::-moz-placeholder`, {
	color: 'rgba(0, 0, 0, 0.4)',
	opacity: '1',
})

globalStyle(`${materiaScope}${formControl}::placeholder`, {
	color: 'rgba(0, 0, 0, 0.4)',
	opacity: '1',
})

globalStyle(`${materiaScope}${formControl}:disabled`, {
	backgroundColor: 'transparent',
	opacity: '1',
})

globalStyle(`${materiaScope}${formControl}::-webkit-file-upload-button`, {
	padding: '1rem 0',
	margin: '-1rem 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
	color: '#666',
	backgroundColor: varBsTertiaryBg,
	backgroundImage: varBsGradient,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '0',
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formControl}::file-selector-button`, {
	padding: '1rem 0',
	margin: '-1rem 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
	color: '#666',
	backgroundColor: varBsTertiaryBg,
	backgroundImage: varBsGradient,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '0',
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${materiaScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${materiaScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${materiaScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${materiaScope}${formControlSm}`, {
	minHeight: '1.5em',
	padding: '0 0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0 0',
	margin: '0 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
})

globalStyle(`${materiaScope}${formControlSm}::file-selector-button`, {
	padding: '0 0',
	margin: '0 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
})

globalStyle(`${materiaScope}${formControlLg}`, {
	minHeight: 'calc(1.5em + 2.5rem)',
	padding: '1.25rem 0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '1.25rem 0',
	margin: '-1.25rem 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
})

globalStyle(`${materiaScope}${formControlLg}::file-selector-button`, {
	padding: '1.25rem 0',
	margin: '-1.25rem 0',
	WebkitMarginEnd: '0',
	marginInlineEnd: '0',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}`, {
	minHeight: 'calc(1.5em + 2rem)',
})

globalStyle(`${materiaScope}${elTextarea}${formControlSm}`, {
	minHeight: '1.5em',
})

globalStyle(`${materiaScope}${elTextarea}${formControlLg}`, {
	minHeight: 'calc(1.5em + 2.5rem)',
})

globalStyle(`${materiaScope}${formControlColor}${formControlSm}`, {
	height: '1.5em',
})

globalStyle(`${materiaScope}${formControlColor}${formControlLg}`, {
	height: 'calc(1.5em + 2.5rem)',
})

globalStyle(`${materiaScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23222\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '1rem 0 1rem 0',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#666',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundImage: `${varBsFormSelectBgImg}, ${fallbackVar(varBsFormSelectBgIcon, 'none')}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 0 center',
	backgroundSize: '16px 12px',
	border: '0 solid transparent',
	borderRadius: '0',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formSelect}:focus`, {
	borderColor: '#90cbf9',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formSelect}[multiple]`, {
	paddingRight: '0',
	backgroundImage: 'none',
})

globalStyle(`${materiaScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '0',
	backgroundImage: 'none',
})

globalStyle(`${materiaScope}${formSelect}:disabled`, {
	backgroundColor: 'transparent',
})

globalStyle(`${materiaScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: '0 0 0 #666',
})

globalStyle(`${materiaScope}${formSelectSm}`, {
	paddingTop: '0',
	paddingBottom: '0',
	paddingLeft: '0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formSelectLg}`, {
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	paddingLeft: '0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}[data-bs-theme=dark] ${materiaScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${materiaScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${materiaScope}${formCheck} ${materiaScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${materiaScope}${formCheckReverse} ${materiaScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${materiaScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: 'transparent',
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

globalStyle(`${materiaScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${materiaScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${materiaScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${materiaScope}${formCheckInput}:focus`, {
	borderColor: '#90cbf9',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formCheckInput}:checked`, {
	backgroundColor: '#2196f3',
	borderColor: '#2196f3',
})

globalStyle(`${materiaScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e"), ${varBsGradient}`,
	},
})

globalStyle(`${materiaScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e"), ${varBsGradient}`,
	},
})

globalStyle(`${materiaScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e"), ${varBsGradient}`,
	},
	backgroundColor: '#2196f3',
	borderColor: '#2196f3',
})

globalStyle(`${materiaScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${materiaScope}${formCheckInput}[disabled] ~ ${materiaScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${materiaScope}${formCheckInput}:disabled ~ ${materiaScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${materiaScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}`, {
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

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%2390cbf9\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e"), ${varBsGradient}`,
	},
	backgroundPosition: 'right center',
})

globalStyle(`${materiaScope}${formSwitch}${formCheckReverse} ${materiaScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${materiaScope}[data-bs-theme=dark] ${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${materiaScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${materiaScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${materiaScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${materiaScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#2196f3',
	backgroundImage: varBsGradient,
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#bce0fb',
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${materiaScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#2196f3',
	backgroundImage: varBsGradient,
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#bce0fb',
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${materiaScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${materiaScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${materiaScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${materiaScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}`, {
	height: '3.5rem',
	minHeight: '3.5rem',
	lineHeight: '1.25',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formSelect}`, {
	height: '3.5rem',
	minHeight: '3.5rem',
	lineHeight: '1.25',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elLabel}`, {
	position: 'absolute',
	top: '0',
	left: '0',
	zIndex: '2',
	maxWidth: '100%',
	height: '100%',
	padding: '1rem 0',
	overflow: 'hidden',
	color: `rgba(${varBsBodyColorRgb}, 0.65)`,
	textAlign: 'start',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	pointerEvents: 'none',
	border: '0 solid transparent',
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}`, {
	padding: '1rem 0',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '0',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:not(:-moz-placeholder-shown) ~ ${materiaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:focus ~ ${materiaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:not(:placeholder-shown) ~ ${materiaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formSelect} ~ ${materiaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:-webkit-autofill ~ ${materiaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${materiaScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elTextarea}:focus ~ ${materiaScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elTextarea}:not(:placeholder-shown) ~ ${materiaScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${elTextarea}:disabled ~ ${materiaScope}${elLabel}::after`, {
	backgroundColor: 'transparent',
})

globalStyle(`${materiaScope}${formFloating} > :disabled ~ ${materiaScope}${elLabel}`, {
	color: '#666',
})

globalStyle(`${materiaScope}${formFloating} > ${materiaScope}${formControl}:disabled ~ ${materiaScope}${elLabel}`, {
	color: '#666',
})

globalStyle(`${materiaScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${materiaScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '1rem 0',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#666',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: 'transparent',
	border: '0 solid transparent',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupLg} > ${materiaScope}${formControl}`, {
	padding: '1.25rem 0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupLg} > ${materiaScope}${formSelect}`, {
	padding: '1.25rem 0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupLg} > ${materiaScope}${inputGroupText}`, {
	padding: '1.25rem 0',
	fontSize: '1.25rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupSm} > ${materiaScope}${formControl}`, {
	padding: '0 0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupSm} > ${materiaScope}${formSelect}`, {
	padding: '0 0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupSm} > ${materiaScope}${inputGroupText}`, {
	padding: '0 0',
	fontSize: '0.875rem',
	borderRadius: '0',
})

globalStyle(`${materiaScope}${inputGroupLg} > ${materiaScope}${formSelect}`, {
	paddingRight: '0',
})

globalStyle(`${materiaScope}${inputGroupSm} > ${materiaScope}${formSelect}`, {
	paddingRight: '0',
})

globalStyle(`${materiaScope}${inputGroup}:not(${hasValidation}) > ${materiaScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}:not(${hasValidation}) > ${materiaScope}${formFloating}:not(:last-child) > ${materiaScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}:not(${hasValidation}) > ${materiaScope}${formFloating}:not(:last-child) > ${materiaScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}${hasValidation} > ${materiaScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}${hasValidation} > ${materiaScope}${formFloating}:nth-last-child(n+3) > ${materiaScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup}${hasValidation} > ${materiaScope}${formFloating}:nth-last-child(n+3) > ${materiaScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: 'calc(-1 * 0)',
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:first-child) > ${materiaScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:first-child) > ${materiaScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${materiaScope}${validTooltip}`, {
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

globalStyle(`${materiaScope}${wasValidated} :valid ~ ${materiaScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${wasValidated} :valid ~ ${materiaScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${isValid} ~ ${materiaScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${isValid} ~ ${materiaScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${materiaScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234caf50\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 2rem))',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:valid ~ ${materiaScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isValid} ~ ${materiaScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${materiaScope}${formCheckInline} ${materiaScope}${formCheckInput} ~ ${materiaScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${materiaScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${invalidTooltip}`, {
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

globalStyle(`${materiaScope}${wasValidated} :invalid ~ ${materiaScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${wasValidated} :invalid ~ ${materiaScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${isInvalid} ~ ${materiaScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${isInvalid} ~ ${materiaScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${materiaScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e51c23\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e51c23\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '0',
	backgroundPosition: 'right 0 center, center right 0',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 2rem))',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${formCheckInput}:invalid ~ ${materiaScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${formCheckInput}${isInvalid} ~ ${materiaScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${formCheckInline} ${materiaScope}${formCheckInput} ~ ${materiaScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${wasValidated} ${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${inputGroup} > ${materiaScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${materiaScope}${btnToolbar} ${materiaScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elInput}${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}[type=text]${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}[type=password]${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}[type=email]${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}[type=tel]${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'box-shadow 0.2s',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elInput}${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}[type=text]${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}[type=password]${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}[type=email]${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}[type=tel]${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}:focus`, {
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elInput}${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=text]${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=text]${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=password]${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=password]${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=email]${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=email]${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=tel]${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[type=tel]${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}[disabled]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}[readonly]`, {
	borderBottom: '1px dotted #ddd',
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=text]${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=password]${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=email]${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=tel]${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}[disabled]::-moz-placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elTextarea}${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elInput}${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=text]${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=text]${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=password]${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=password]${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=email]${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=email]${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=tel]${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[type=tel]${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}[disabled]`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}[contenteditable]${formControl}[disabled]::placeholder`, {
	color: '#ddd',
})

globalStyle(`${materiaScope}${elSelect}${formControl}`, {
	padding: '0.5rem 0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 4\'%3e%3cpath fill=\'%23666\' d=\'M8 0 4 4 0 0z\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right center',
	backgroundSize: '8px 4px',
	boxShadow: 'inset 0 -1px 0 #ddd',
})

globalStyle(`${materiaScope}${elSelect}${inputSm}`, {
	fontSize: '0.875rem',
})

globalStyle(`${materiaScope}${elSelect}${formControl}${inputSm}`, {
	fontSize: '0.875rem',
})

globalStyle(`${materiaScope}${elSelect}${inputLg}`, {
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${elSelect}${formControl}${inputLg}`, {
	fontSize: '1.25rem',
})

globalStyle(`${materiaScope}${elSelect}${formControl}:focus`, {
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 4\'%3e%3cpath fill=\'%23212121\' d=\'M8 0 4 4 0 0z\'/%3e%3c/svg%3e")',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${elSelect}${formControl}[multiple]`, {
	background: 'none',
})

globalStyle(`${materiaScope}${formCheckInput}`, {
	width: '1.25em',
	height: '1.25em',
	marginTop: '1px',
	border: '2px solid #ced4da',
})

globalStyle(`${materiaScope}:not(${formCheck}) > ${materiaScope}${formCheckInput}:checked[type=radio]`, {
	backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%232196f3' stroke='%23fff'/%3e%3c/svg%3e"), ${varBsGradient}`,
	backgroundSize: '1.8em',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}`, {
	position: 'relative',
	height: '0.8em',
	marginTop: '0.29em',
	backgroundColor: '#ced4da',
	backgroundImage: 'none',
	border: 'none',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:focus`, {
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}::before`, {
	position: 'absolute',
	top: '-0.2em',
	left: '-0.2em',
	width: '1.2em',
	height: '1.2em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: '50%',
	boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
	transition: 'left 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}::after`, {
	position: 'absolute',
	top: '-0.2em',
	left: '-0.2em',
	zIndex: '-1',
	width: '1.2em',
	height: '1.2em',
	content: '""',
	borderRadius: '50%',
	boxShadow: '0 0 0 9px rgba(0, 0, 0, 0.05)',
	transition: 'left 0.15s ease-in-out, transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transform: 'scale(0)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:hover:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:focus:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:focus:not(${disabled})::after`, {
	boxShadow: '0 0 0 9px rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked`, {
	backgroundColor: 'rgba(33, 150, 243, 0.3)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked::before`, {
	left: 'calc(100% - 0.8em)',
	backgroundColor: 'rgb(33, 150, 243)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked::after`, {
	left: 'calc(100% - 0.8em)',
	boxShadow: '0 0 0 9px rgba(33, 150, 243, 0.1)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked:hover:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked:focus:not(${disabled})::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${materiaScope}${formCheckInput}:checked:focus:not(${disabled})::after`, {
	boxShadow: '0 0 0 9px rgba(33, 150, 243, 0.2)',
})

globalStyle(`${materiaScope}${formCheck}:not(${formSwitch}) ${materiaScope}${formCheckInput}:checked[type=checkbox]`, {
	backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-width='2' d='m6 10 3 3 6-6'/%3e%3c/svg%3e"), ${varBsGradient}`,
	backgroundSize: '1.6em',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${elInput}:not([type=checkbox])`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${formControl}`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${elInput}${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${elInput}[type=text][readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}[type=text]${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${elInput}:not([type=checkbox]):focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${formControl}:focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #ff9800',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${elInput}:not([type=checkbox])`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${formControl}`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${elInput}${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${elInput}[type=text][readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}[type=text]${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${elInput}:not([type=checkbox]):focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${formControl}:focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #e51c23',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${elInput}:not([type=checkbox])`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${formControl}`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${elInput}${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${elInput}[type=text][readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}[type=text]${formControl}[readonly]`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${elInput}:not([type=checkbox]):focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${formControl}:focus`, {
	borderBottom: 'none',
	boxShadow: 'inset 0 -2px 0 #4caf50',
})

globalStyle(`${materiaScope}${hasWarning} ${materiaScope}${inputGroupAddon}`, {
	color: '#666',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
})

globalStyle(`${materiaScope}${hasDanger} ${materiaScope}${inputGroupAddon}`, {
	color: '#666',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
})

globalStyle(`${materiaScope}${hasSuccess} ${materiaScope}${inputGroupAddon}`, {
	color: '#666',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
})

globalStyle(`${materiaScope}${formGroupLg} ${materiaScope}${elSelect}`, {
	lineHeight: '1.5',
})

globalStyle(`${materiaScope}${formGroupLg} ${materiaScope}${elSelect}${formControl}`, {
	lineHeight: '1.5',
})

globalStyle(`${materiaScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${materiaScope}${formSwitch}`, {
	isolation: 'isolate',
})
