import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../scope.css'

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

globalStyle(`:where(${literaScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${literaScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${literaScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${literaScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${literaScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.5rem 1.1rem',
	fontSize: '1.1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsBodyBg,
	backgroundClip: 'padding-box',
	border: `${varBsBorderWidth} solid rgba(0, 0, 0, 0.1)`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${literaScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${literaScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${literaScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${literaScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: '#a2c1f6',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(69, 130, 236, 0.25)',
})

globalStyle(`${literaScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${literaScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${literaScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${literaScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${literaScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: '1',
})

globalStyle(`${literaScope}${formControl}::-webkit-file-upload-button`, {
	padding: '0.5rem 1.1rem',
	margin: '-0.5rem -1.1rem',
	WebkitMarginEnd: '1.1rem',
	marginInlineEnd: '1.1rem',
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

globalStyle(`${literaScope}${formControl}::file-selector-button`, {
	padding: '0.5rem 1.1rem',
	margin: '-0.5rem -1.1rem',
	WebkitMarginEnd: '1.1rem',
	marginInlineEnd: '1.1rem',
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

globalStyle(`${literaScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${literaScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${literaScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${literaScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${literaScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${literaScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${literaScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.9625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${literaScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${literaScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${literaScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: 'calc(1.2625rem + 0.15vw)',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${literaScope}${formControlLg}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.375rem',
		},
	},
})

globalStyle(`${literaScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${literaScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${literaScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${literaScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${literaScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${literaScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${literaScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${literaScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23343a40\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.5rem 3.3rem 0.5rem 1.1rem',
	fontSize: '1.1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsBodyBg,
	backgroundImage: `${varBsFormSelectBgImg}, ${fallbackVar(varBsFormSelectBgIcon, 'none')}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 1.1rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid rgba(0, 0, 0, 0.1)`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${literaScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${literaScope}${formSelect}:focus`, {
	borderColor: '#a2c1f6',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(69, 130, 236, 0.25)',
})

globalStyle(`${literaScope}${formSelect}[multiple]`, {
	paddingRight: '1.1rem',
	backgroundImage: 'none',
})

globalStyle(`${literaScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '1.1rem',
	backgroundImage: 'none',
})

globalStyle(`${literaScope}${formSelect}:disabled`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${literaScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${literaScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.9625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${literaScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: 'calc(1.2625rem + 0.15vw)',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${literaScope}${formSelectLg}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.375rem',
		},
	},
})

globalStyle(`${literaScope}[data-bs-theme=dark] ${literaScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23ddd\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${literaScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.65rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${literaScope}${formCheck} ${literaScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${literaScope}${formCheckReverse} ${literaScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${literaScope}${formCheckInput}`, {
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

globalStyle(`${literaScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${literaScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${literaScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${literaScope}${formCheckInput}:focus`, {
	borderColor: '#a2c1f6',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(69, 130, 236, 0.25)',
})

globalStyle(`${literaScope}${formCheckInput}:checked`, {
	backgroundColor: '#4582ec',
	borderColor: '#4582ec',
})

globalStyle(`${literaScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${literaScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${literaScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#4582ec',
	borderColor: '#4582ec',
})

globalStyle(`${literaScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${literaScope}${formCheckInput}[disabled] ~ ${literaScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${literaScope}${formCheckInput}:disabled ~ ${literaScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${literaScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${literaScope}${formSwitch} ${literaScope}${formCheckInput}`, {
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

globalStyle(`${literaScope}${formSwitch} ${literaScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${literaScope}${formSwitch} ${literaScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23a2c1f6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${literaScope}${formSwitch} ${literaScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${literaScope}${formSwitch}${formCheckReverse} ${literaScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${literaScope}[data-bs-theme=dark] ${literaScope}${formSwitch} ${literaScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${literaScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${literaScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${literaScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(69, 130, 236, 0.25)',
})

globalStyle(`${literaScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(69, 130, 236, 0.25)',
})

globalStyle(`${literaScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${literaScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#4582ec',
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${literaScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${literaScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#c7daf9',
})

globalStyle(`${literaScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${literaScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#4582ec',
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${literaScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${literaScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#c7daf9',
})

globalStyle(`${literaScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${literaScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${literaScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${literaScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${literaScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${elLabel}`, {
	position: 'absolute',
	top: '0',
	left: '0',
	zIndex: '2',
	maxWidth: '100%',
	height: '100%',
	padding: '1rem 1.1rem',
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

globalStyle(`${literaScope}${formFloating} > ${literaScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}`, {
	padding: '1rem 1.1rem',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '1.1rem',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}:not(:-moz-placeholder-shown) ~ ${literaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}:focus ~ ${literaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}:not(:placeholder-shown) ~ ${literaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formSelect} ~ ${literaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}:-webkit-autofill ~ ${literaScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${literaScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.55rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${elTextarea}:focus ~ ${literaScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.55rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${elTextarea}:not(:placeholder-shown) ~ ${literaScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.55rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${elTextarea}:disabled ~ ${literaScope}${elLabel}::after`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${literaScope}${formFloating} > :disabled ~ ${literaScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${literaScope}${formFloating} > ${literaScope}${formControl}:disabled ~ ${literaScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${literaScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${literaScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.5rem 1.1rem',
	fontSize: '1.1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: '#e9ecef',
	border: `${varBsBorderWidth} solid rgba(0, 0, 0, 0.1)`,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${literaScope}${inputGroupLg} > ${literaScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: 'calc(1.2625rem + 0.15vw)',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${literaScope}${inputGroupLg} > ${literaScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: 'calc(1.2625rem + 0.15vw)',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${literaScope}${inputGroupLg} > ${literaScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: 'calc(1.2625rem + 0.15vw)',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${literaScope}${inputGroupLg} > ${literaScope}${formControl}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.375rem',
		},
	},
})

globalStyle(`${literaScope}${inputGroupLg} > ${literaScope}${formSelect}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.375rem',
		},
	},
})

globalStyle(`${literaScope}${inputGroupLg} > ${literaScope}${inputGroupText}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.375rem',
		},
	},
})

globalStyle(`${literaScope}${inputGroupSm} > ${literaScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.9625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${literaScope}${inputGroupSm} > ${literaScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.9625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${literaScope}${inputGroupSm} > ${literaScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.9625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${literaScope}${inputGroupLg} > ${literaScope}${formSelect}`, {
	paddingRight: '4.4rem',
})

globalStyle(`${literaScope}${inputGroupSm} > ${literaScope}${formSelect}`, {
	paddingRight: '4.4rem',
})

globalStyle(`${literaScope}${inputGroup}:not(${hasValidation}) > ${literaScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${literaScope}${inputGroup}:not(${hasValidation}) > ${literaScope}${formFloating}:not(:last-child) > ${literaScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${literaScope}${inputGroup}:not(${hasValidation}) > ${literaScope}${formFloating}:not(:last-child) > ${literaScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${literaScope}${inputGroup}${hasValidation} > ${literaScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${literaScope}${inputGroup}${hasValidation} > ${literaScope}${formFloating}:nth-last-child(n+3) > ${literaScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${literaScope}${inputGroup}${hasValidation} > ${literaScope}${formFloating}:nth-last-child(n+3) > ${literaScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formFloating}:not(:first-child) > ${literaScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formFloating}:not(:first-child) > ${literaScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${literaScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${literaScope}${validTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.25rem 0.5rem',
	marginTop: '0.1rem',
	fontSize: '0.6875rem',
	color: '#fff',
	backgroundColor: varBsSuccess,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${literaScope}${wasValidated} :valid ~ ${literaScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${literaScope}${wasValidated} :valid ~ ${literaScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${literaScope}${isValid} ~ ${literaScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${literaScope}${isValid} ~ ${literaScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2302b875\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2302b875\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${literaScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${literaScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${literaScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2302b875\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '6.05rem',
	backgroundPosition: 'right 1.1rem center, center right 3.3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2302b875\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '6.05rem',
	backgroundPosition: 'right 1.1rem center, center right 3.3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2302b875\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '6.05rem',
	backgroundPosition: 'right 1.1rem center, center right 3.3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2302b875\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '6.05rem',
	backgroundPosition: 'right 1.1rem center, center right 3.3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${literaScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${literaScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 1rem))',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${literaScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${literaScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${literaScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formCheckInput}:valid ~ ${literaScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${literaScope}${formCheckInput}${isValid} ~ ${literaScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${literaScope}${formCheckInline} ${literaScope}${formCheckInput} ~ ${literaScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${inputGroup} > ${literaScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${inputGroup} > ${literaScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${inputGroup} > ${literaScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${literaScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${literaScope}${invalidTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.25rem 0.5rem',
	marginTop: '0.1rem',
	fontSize: '0.6875rem',
	color: '#fff',
	backgroundColor: varBsDanger,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${literaScope}${wasValidated} :invalid ~ ${literaScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${literaScope}${wasValidated} :invalid ~ ${literaScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${literaScope}${isInvalid} ~ ${literaScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${literaScope}${isInvalid} ~ ${literaScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${literaScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${literaScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${literaScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '6.05rem',
	backgroundPosition: 'right 1.1rem center, center right 3.3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '6.05rem',
	backgroundPosition: 'right 1.1rem center, center right 3.3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '6.05rem',
	backgroundPosition: 'right 1.1rem center, center right 3.3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '6.05rem',
	backgroundPosition: 'right 1.1rem center, center right 3.3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${literaScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${literaScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 1rem))',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${literaScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${literaScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${literaScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${formCheckInput}:invalid ~ ${literaScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${literaScope}${formCheckInput}${isInvalid} ~ ${literaScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${literaScope}${formCheckInline} ${literaScope}${formCheckInput} ~ ${literaScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${inputGroup} > ${literaScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${inputGroup} > ${literaScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${literaScope}${wasValidated} ${literaScope}${inputGroup} > ${literaScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${literaScope}${inputGroup} > ${literaScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${literaScope}${btnToolbar} ${literaScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${literaScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${literaScope}${formSwitch}`, {
	isolation: 'isolate',
})
