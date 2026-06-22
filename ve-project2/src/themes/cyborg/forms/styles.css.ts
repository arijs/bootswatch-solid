import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { cyborgScope } from '../scope.css'

import {
	varBsBodyColorRgb,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsDanger,
	varBsDangerRgb,
	varBsSecondaryBg,
	varBsSecondaryColor,
	varBsSuccess,
	varBsSuccessRgb,
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

globalStyle(`:where(${cyborgScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${cyborgScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${cyborgScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${cyborgScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${cyborgScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.375rem 1rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#212529',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#fff',
	backgroundClip: 'padding-box',
	border: '0px solid #fff',
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${cyborgScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cyborgScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${cyborgScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${cyborgScope}${formControl}:focus`, {
	color: '#212529',
	backgroundColor: '#fff',
	borderColor: '#95cfeb',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(42, 159, 214, 0.25)',
})

globalStyle(`${cyborgScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${cyborgScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${cyborgScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${cyborgScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${cyborgScope}${formControl}:disabled`, {
	backgroundColor: '#adafae',
	opacity: '1',
})

globalStyle(`${cyborgScope}${formControl}::-webkit-file-upload-button`, {
	padding: '0.375rem 1rem',
	margin: '-0.375rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
	color: '#fff',
	backgroundColor: '#282828',
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '0px',
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${cyborgScope}${formControl}::file-selector-button`, {
	padding: '0.375rem 1rem',
	margin: '-0.375rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
	color: '#fff',
	backgroundColor: '#282828',
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '0px',
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${cyborgScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${cyborgScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cyborgScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: '#232323',
})

globalStyle(`${cyborgScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: '#232323',
})

globalStyle(`${cyborgScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${cyborgScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${cyborgScope}${formControlSm}`, {
	minHeight: 'calc(1.5em + 0.5rem + calc(0px * 2))',
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${cyborgScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${cyborgScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${cyborgScope}${formControlLg}`, {
	minHeight: 'calc(1.5em + 1rem + calc(0px * 2))',
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${cyborgScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${cyborgScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${cyborgScope}${elTextarea}${formControl}`, {
	minHeight: 'calc(1.5em + 0.75rem + calc(0px * 2))',
})

globalStyle(`${cyborgScope}${elTextarea}${formControlSm}`, {
	minHeight: 'calc(1.5em + 0.5rem + calc(0px * 2))',
})

globalStyle(`${cyborgScope}${elTextarea}${formControlLg}`, {
	minHeight: 'calc(1.5em + 1rem + calc(0px * 2))',
})

globalStyle(`${cyborgScope}${formControlColor}${formControlSm}`, {
	height: 'calc(1.5em + 0.5rem + calc(0px * 2))',
})

globalStyle(`${cyborgScope}${formControlColor}${formControlLg}`, {
	height: 'calc(1.5em + 1rem + calc(0px * 2))',
})

globalStyle(`${cyborgScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23222\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.375rem 3rem 0.375rem 1rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#212529',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#fff',
	backgroundImage: `${varBsFormSelectBgImg}, ${fallbackVar(varBsFormSelectBgIcon, 'none')}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 1rem center',
	backgroundSize: '16px 12px',
	border: '0px solid #fff',
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${cyborgScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cyborgScope}${formSelect}:focus`, {
	borderColor: '#95cfeb',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(42, 159, 214, 0.25)',
})

globalStyle(`${cyborgScope}${formSelect}[multiple]`, {
	paddingRight: '1rem',
	backgroundImage: 'none',
})

globalStyle(`${cyborgScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '1rem',
	backgroundImage: 'none',
})

globalStyle(`${cyborgScope}${formSelect}:disabled`, {
	backgroundColor: '#adafae',
})

globalStyle(`${cyborgScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: '0 0 0 #212529',
})

globalStyle(`${cyborgScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${cyborgScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${cyborgScope}[data-bs-theme=dark] ${cyborgScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${cyborgScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${cyborgScope}${formCheck} ${cyborgScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${cyborgScope}${formCheckReverse} ${cyborgScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${cyborgScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: '#fff',
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
	border: 'none',
	WebkitPrintColorAdjust: 'exact',
	colorAdjust: 'exact',
	printColorAdjust: 'exact',
})

globalStyle(`${cyborgScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${cyborgScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${cyborgScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${cyborgScope}${formCheckInput}:focus`, {
	borderColor: '#95cfeb',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(42, 159, 214, 0.25)',
})

globalStyle(`${cyborgScope}${formCheckInput}:checked`, {
	backgroundColor: '#2a9fd6',
	borderColor: '#2a9fd6',
})

globalStyle(`${cyborgScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${cyborgScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${cyborgScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#2a9fd6',
	borderColor: '#2a9fd6',
})

globalStyle(`${cyborgScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${cyborgScope}${formCheckInput}[disabled] ~ ${cyborgScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${cyborgScope}${formCheckInput}:disabled ~ ${cyborgScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${cyborgScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${cyborgScope}${formSwitch} ${cyborgScope}${formCheckInput}`, {
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

globalStyle(`${cyborgScope}${formSwitch} ${cyborgScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cyborgScope}${formSwitch} ${cyborgScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%2395cfeb\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${cyborgScope}${formSwitch} ${cyborgScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${cyborgScope}${formSwitch}${formCheckReverse} ${cyborgScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${cyborgScope}[data-bs-theme=dark] ${cyborgScope}${formSwitch} ${cyborgScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${cyborgScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${cyborgScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${cyborgScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #060606, 0 0 0 0.25rem rgba(42, 159, 214, 0.25)',
})

globalStyle(`${cyborgScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #060606, 0 0 0 0.25rem rgba(42, 159, 214, 0.25)',
})

globalStyle(`${cyborgScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${cyborgScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#2a9fd6',
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${cyborgScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${cyborgScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#bfe2f3',
})

globalStyle(`${cyborgScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${cyborgScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#2a9fd6',
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${cyborgScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${cyborgScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#bfe2f3',
})

globalStyle(`${cyborgScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${cyborgScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${cyborgScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${cyborgScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${cyborgScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}`, {
	height: 'calc(3.5rem + calc(0px * 2))',
	minHeight: 'calc(3.5rem + calc(0px * 2))',
	lineHeight: '1.25',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formSelect}`, {
	height: 'calc(3.5rem + calc(0px * 2))',
	minHeight: 'calc(3.5rem + calc(0px * 2))',
	lineHeight: '1.25',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${elLabel}`, {
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
	border: '0px solid transparent',
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}`, {
	padding: '1rem 1rem',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '1rem',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:not(:-moz-placeholder-shown) ~ ${cyborgScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:focus ~ ${cyborgScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:not(:placeholder-shown) ~ ${cyborgScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formSelect} ~ ${cyborgScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:-webkit-autofill ~ ${cyborgScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${cyborgScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${elTextarea}:focus ~ ${cyborgScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${elTextarea}:not(:placeholder-shown) ~ ${cyborgScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${elTextarea}:disabled ~ ${cyborgScope}${elLabel}::after`, {
	backgroundColor: '#adafae',
})

globalStyle(`${cyborgScope}${formFloating} > :disabled ~ ${cyborgScope}${elLabel}`, {
	color: '#555',
})

globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:disabled ~ ${cyborgScope}${elLabel}`, {
	color: '#555',
})

globalStyle(`${cyborgScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${cyborgScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.375rem 1rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#fff',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: '#282828',
	border: '0px solid transparent',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${cyborgScope}${inputGroupLg} > ${cyborgScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${cyborgScope}${inputGroupLg} > ${cyborgScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${cyborgScope}${inputGroupLg} > ${cyborgScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${cyborgScope}${inputGroupSm} > ${cyborgScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${cyborgScope}${inputGroupSm} > ${cyborgScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${cyborgScope}${inputGroupSm} > ${cyborgScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${cyborgScope}${inputGroupLg} > ${cyborgScope}${formSelect}`, {
	paddingRight: '4rem',
})

globalStyle(`${cyborgScope}${inputGroupSm} > ${cyborgScope}${formSelect}`, {
	paddingRight: '4rem',
})

globalStyle(`${cyborgScope}${inputGroup}:not(${hasValidation}) > ${cyborgScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${cyborgScope}${inputGroup}:not(${hasValidation}) > ${cyborgScope}${formFloating}:not(:last-child) > ${cyborgScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${cyborgScope}${inputGroup}:not(${hasValidation}) > ${cyborgScope}${formFloating}:not(:last-child) > ${cyborgScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${cyborgScope}${inputGroup}${hasValidation} > ${cyborgScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${cyborgScope}${inputGroup}${hasValidation} > ${cyborgScope}${formFloating}:nth-last-child(n+3) > ${cyborgScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${cyborgScope}${inputGroup}${hasValidation} > ${cyborgScope}${formFloating}:nth-last-child(n+3) > ${cyborgScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: 'calc(-1 * 0px)',
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:first-child) > ${cyborgScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:first-child) > ${cyborgScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${cyborgScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${cyborgScope}${validTooltip}`, {
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

globalStyle(`${cyborgScope}${wasValidated} :valid ~ ${cyborgScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${cyborgScope}${wasValidated} :valid ~ ${cyborgScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${cyborgScope}${isValid} ~ ${cyborgScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${cyborgScope}${isValid} ~ ${cyborgScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2377b300\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2377b300\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${cyborgScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${cyborgScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2377b300\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2377b300\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2377b300\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2377b300\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${cyborgScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${cyborgScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:valid ~ ${cyborgScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${cyborgScope}${formCheckInput}${isValid} ~ ${cyborgScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${cyborgScope}${formCheckInline} ${cyborgScope}${formCheckInput} ~ ${cyborgScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${cyborgScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${cyborgScope}${invalidTooltip}`, {
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

globalStyle(`${cyborgScope}${wasValidated} :invalid ~ ${cyborgScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${cyborgScope}${wasValidated} :invalid ~ ${cyborgScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${cyborgScope}${isInvalid} ~ ${cyborgScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${cyborgScope}${isInvalid} ~ ${cyborgScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c00\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c00\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${cyborgScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${cyborgScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c00\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c00\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c00\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c00\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${cyborgScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${cyborgScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:invalid ~ ${cyborgScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${cyborgScope}${formCheckInput}${isInvalid} ~ ${cyborgScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${cyborgScope}${formCheckInline} ${cyborgScope}${formCheckInput} ~ ${cyborgScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${cyborgScope}${btnToolbar} ${cyborgScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`:where(${cyborgScope}${legend})`, {
	color: '#fff',
})

globalStyle(`${cyborgScope}${formControl}:disabled`, {
	borderColor: 'transparent',
})

globalStyle(`${cyborgScope}${formControl}[readonly]`, {
	borderColor: 'transparent',
})

globalStyle(`${cyborgScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${cyborgScope}${formSwitch}`, {
	isolation: 'isolate',
})
