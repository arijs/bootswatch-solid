import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../scope.css'

import {
	varBsBodyColor,
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

import { elLabel, elOption, elTextarea } from '../../../theme-contract/global-elements/contract.css'

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
	bgLight,
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

globalStyle(`:where(${quartzScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${quartzScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${quartzScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${quartzScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${quartzScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundClip: 'padding-box',
	border: '1px solid rgba(255, 255, 255, 0.4)',
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${quartzScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${quartzScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: 'transparent',
	borderColor: 'rgba(255, 255, 255, 0.4)',
	outline: '0',
	boxShadow: 'none',
})

globalStyle(`${quartzScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${quartzScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${quartzScope}${formControl}::-moz-placeholder`, {
	color: 'rgba(255, 255, 255, 0.7)',
	opacity: '1',
})

globalStyle(`${quartzScope}${formControl}::placeholder`, {
	color: 'rgba(255, 255, 255, 0.7)',
	opacity: '1',
})

globalStyle(`${quartzScope}${formControl}:disabled`, {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
	opacity: '1',
})

globalStyle(`${quartzScope}${formControl}::-webkit-file-upload-button`, {
	padding: '0.75rem 1.5rem',
	margin: '-0.75rem -1.5rem',
	WebkitMarginEnd: '1.5rem',
	marginInlineEnd: '1.5rem',
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '1px',
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formControl}::file-selector-button`, {
	padding: '0.75rem 1.5rem',
	margin: '-0.75rem -1.5rem',
	WebkitMarginEnd: '1.5rem',
	marginInlineEnd: '1.5rem',
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '1px',
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${quartzScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${quartzScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${quartzScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${quartzScope}${formControlSm}`, {
	minHeight: 'calc(1.5em + 0.5rem + calc(1px * 2))',
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${quartzScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${quartzScope}${formControlLg}`, {
	minHeight: 'calc(1.5em + 1rem + calc(1px * 2))',
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${quartzScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${quartzScope}${elTextarea}${formControl}`, {
	minHeight: 'calc(1.5em + 1.5rem + calc(1px * 2))',
})

globalStyle(`${quartzScope}${elTextarea}${formControlSm}`, {
	minHeight: 'calc(1.5em + 0.5rem + calc(1px * 2))',
})

globalStyle(`${quartzScope}${elTextarea}${formControlLg}`, {
	minHeight: 'calc(1.5em + 1rem + calc(1px * 2))',
})

globalStyle(`${quartzScope}${formControlColor}${formControlSm}`, {
	height: 'calc(1.5em + 0.5rem + calc(1px * 2))',
})

globalStyle(`${quartzScope}${formControlColor}${formControlLg}`, {
	height: 'calc(1.5em + 1rem + calc(1px * 2))',
})

globalStyle(`${quartzScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.75rem 4.5rem 0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundImage: `${varBsFormSelectBgImg}, ${fallbackVar(varBsFormSelectBgIcon, 'none')}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 1.5rem center',
	backgroundSize: '16px 12px',
	border: '1px solid rgba(255, 255, 255, 0.4)',
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formSelect}:focus`, {
	borderColor: 'rgba(255, 255, 255, 0.4)',
	outline: '0',
	boxShadow: 'none',
})

globalStyle(`${quartzScope}${formSelect}[multiple]`, {
	paddingRight: '1.5rem',
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '1.5rem',
	backgroundImage: 'none',
})

globalStyle(`${quartzScope}${formSelect}:disabled`, {
	color: 'rgba(255, 255, 255, 0.7)',
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
})

globalStyle(`${quartzScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${quartzScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}[data-bs-theme=dark] ${quartzScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${quartzScope}${formCheck} ${quartzScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${quartzScope}${formCheckReverse} ${quartzScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${quartzScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: 'rgba(255, 255, 255, 0.3)',
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
	border: '1px solid rgba(255, 255, 255, 0.2)',
	WebkitPrintColorAdjust: 'exact',
	colorAdjust: 'exact',
	printColorAdjust: 'exact',
})

globalStyle(`${quartzScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${quartzScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${quartzScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${quartzScope}${formCheckInput}:focus`, {
	borderColor: 'rgba(255, 255, 255, 0.4)',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(232, 50, 131, 0.25)',
})

globalStyle(`${quartzScope}${formCheckInput}:checked`, {
	backgroundColor: '#e83283',
	borderColor: '#e83283',
})

globalStyle(`${quartzScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#e83283',
	borderColor: '#e83283',
})

globalStyle(`${quartzScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${quartzScope}${formCheckInput}[disabled] ~ ${quartzScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${quartzScope}${formCheckInput}:disabled ~ ${quartzScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${quartzScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${quartzScope}${formSwitch} ${quartzScope}${formCheckInput}`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	width: '2em',
	marginLeft: '-2.5em',
	backgroundImage: varBsFormSwitchBg,
	backgroundPosition: 'left center',
	borderRadius: '2em',
	transition: 'background-position 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formSwitch} ${quartzScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formSwitch} ${quartzScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${formSwitch} ${quartzScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${quartzScope}${formSwitch}${formCheckReverse} ${quartzScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${quartzScope}[data-bs-theme=dark] ${quartzScope}${formSwitch} ${quartzScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${quartzScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${quartzScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${quartzScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #686dc3, none',
})

globalStyle(`${quartzScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #686dc3, none',
})

globalStyle(`${quartzScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${quartzScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#e83283',
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#f8c2da',
})

globalStyle(`${quartzScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${quartzScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#e83283',
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#f8c2da',
})

globalStyle(`${quartzScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${quartzScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${quartzScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${quartzScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${quartzScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}`, {
	height: 'calc(3.5rem + calc(1px * 2))',
	minHeight: 'calc(3.5rem + calc(1px * 2))',
	lineHeight: '1.25',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formSelect}`, {
	height: 'calc(3.5rem + calc(1px * 2))',
	minHeight: 'calc(3.5rem + calc(1px * 2))',
	lineHeight: '1.25',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elLabel}`, {
	position: 'absolute',
	top: '0',
	left: '0',
	zIndex: '2',
	maxWidth: '100%',
	height: '100%',
	padding: '1rem 1.5rem',
	overflow: 'hidden',
	color: `rgba(${varBsBodyColorRgb}, 0.65)`,
	textAlign: 'start',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	pointerEvents: 'none',
	border: '1px solid transparent',
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}`, {
	padding: '1rem 1.5rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '1.5rem',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:not(:-moz-placeholder-shown) ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:focus ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:not(:placeholder-shown) ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formSelect} ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:-webkit-autofill ~ ${quartzScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${quartzScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elTextarea}:focus ~ ${quartzScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elTextarea}:not(:placeholder-shown) ~ ${quartzScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: 'transparent',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${elTextarea}:disabled ~ ${quartzScope}${elLabel}::after`, {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
})

globalStyle(`${quartzScope}${formFloating} > :disabled ~ ${quartzScope}${elLabel}`, {
	color: '#6c757d',
})

globalStyle(`${quartzScope}${formFloating} > ${quartzScope}${formControl}:disabled ~ ${quartzScope}${elLabel}`, {
	color: '#6c757d',
})

globalStyle(`${quartzScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${quartzScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: 'transparent',
	border: '1px solid rgba(255, 255, 255, 0.4)',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${inputGroupLg} > ${quartzScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}${inputGroupLg} > ${quartzScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}${inputGroupLg} > ${quartzScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}${inputGroupSm} > ${quartzScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${inputGroupSm} > ${quartzScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${inputGroupSm} > ${quartzScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${inputGroupLg} > ${quartzScope}${formSelect}`, {
	paddingRight: '6rem',
})

globalStyle(`${quartzScope}${inputGroupSm} > ${quartzScope}${formSelect}`, {
	paddingRight: '6rem',
})

globalStyle(`${quartzScope}${inputGroup}:not(${hasValidation}) > ${quartzScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}:not(${hasValidation}) > ${quartzScope}${formFloating}:not(:last-child) > ${quartzScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}:not(${hasValidation}) > ${quartzScope}${formFloating}:not(:last-child) > ${quartzScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}${hasValidation} > ${quartzScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}${hasValidation} > ${quartzScope}${formFloating}:nth-last-child(n+3) > ${quartzScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup}${hasValidation} > ${quartzScope}${formFloating}:nth-last-child(n+3) > ${quartzScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: 'calc(-1 * 1px)',
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:first-child) > ${quartzScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:first-child) > ${quartzScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${quartzScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${quartzScope}${validTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.5rem 1rem',
	marginTop: '0.1rem',
	fontSize: '0.875rem',
	color: '#fff',
	backgroundColor: varBsSuccess,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${wasValidated} :valid ~ ${quartzScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${wasValidated} :valid ~ ${quartzScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${isValid} ~ ${quartzScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${isValid} ~ ${quartzScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${quartzScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${quartzScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2341d7a7\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:valid ~ ${quartzScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid} ~ ${quartzScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${quartzScope}${formCheckInline} ${quartzScope}${formCheckInput} ~ ${quartzScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${quartzScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${invalidTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.5rem 1rem',
	marginTop: '0.1rem',
	fontSize: '0.875rem',
	color: '#fff',
	backgroundColor: varBsDanger,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${quartzScope}${wasValidated} :invalid ~ ${quartzScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${wasValidated} :invalid ~ ${quartzScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${isInvalid} ~ ${quartzScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${isInvalid} ~ ${quartzScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${quartzScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${quartzScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23fd7e14\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23fd7e14\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${formCheckInput}:invalid ~ ${quartzScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid} ~ ${quartzScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${formCheckInline} ${quartzScope}${formCheckInput} ~ ${quartzScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${wasValidated} ${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${quartzScope}${btnToolbar} ${quartzScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${quartzScope}${formControl}::-webkit-file-upload-button`, {
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	border: 'none',
})

globalStyle(`${quartzScope}${inputGroupText}`, {
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	border: 'none',
})

globalStyle(`${quartzScope}${formControl}::file-selector-button`, {
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	border: 'none',
})

globalStyle(`${quartzScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
})

globalStyle(`${quartzScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
})

globalStyle(`${quartzScope}${inputGroupText}`, {
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1)',
})

globalStyle(`${quartzScope}${inputGroup} > ${quartzScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: '0',
	borderLeft: 'none',
})

globalStyle(`${quartzScope}${inputGroup}:not(${hasValidation}) > ${quartzScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu})`, {
	borderRight: 'none',
})

globalStyle(`${quartzScope}${formSelect}:not([multiple])`, {
	transition: 'border-color 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formSelect}:not([multiple]) ${quartzScope}${elOption}`, {
	color: '#000',
})

globalStyle(`${quartzScope}${bgLight} ${quartzScope}${formControl}`, {
	color: '#343a40',
	borderColor: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope}${bgLight} ${quartzScope}${formControl}::-moz-placeholder`, {
	color: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope}${bgLight} ${quartzScope}${formControl}::placeholder`, {
	color: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${quartzScope}${formSwitch}`, {
	isolation: 'isolate',
})
