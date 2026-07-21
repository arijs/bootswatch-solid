import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../scope.css'

import {
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

globalStyle(`:where(${luxScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${luxScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${luxScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${luxScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${luxScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '300',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#f0f1f2',
	backgroundClip: 'padding-box',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: '0',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${luxScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${luxScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: '#f0f1f2',
	borderColor: '#8d8d8d',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
})

globalStyle(`${luxScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${luxScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${luxScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${luxScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${luxScope}${formControl}:disabled`, {
	backgroundColor: '#e0e1e2',
	opacity: '1',
})

globalStyle(`${luxScope}${formControl}::-webkit-file-upload-button`, {
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
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formControl}::file-selector-button`, {
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
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${luxScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${luxScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${luxScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${luxScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${luxScope}${formControlSm}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${luxScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 4rem + calc(${varBsBorderWidth} * 2))`,
	padding: '2rem 2rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '2rem 2rem',
	margin: '-2rem -2rem',
	WebkitMarginEnd: '2rem',
	marginInlineEnd: '2rem',
})

globalStyle(`${luxScope}${formControlLg}::file-selector-button`, {
	padding: '2rem 2rem',
	margin: '-2rem -2rem',
	WebkitMarginEnd: '2rem',
	marginInlineEnd: '2rem',
})

globalStyle(`${luxScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 1.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${luxScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${luxScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 4rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${luxScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${luxScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 4rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${luxScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23343a40\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.75rem 4.5rem 0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '300',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#f0f1f2',
	backgroundImage: `${varBsFormSelectBgImg}, ${fallbackVar(varBsFormSelectBgIcon, 'none')}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 1.5rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: '0',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formSelect}:focus`, {
	borderColor: '#8d8d8d',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
})

globalStyle(`${luxScope}${formSelect}[multiple]`, {
	paddingRight: '1.5rem',
	backgroundImage: 'none',
})

globalStyle(`${luxScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '1.5rem',
	backgroundImage: 'none',
})

globalStyle(`${luxScope}${formSelect}:disabled`, {
	color: '#919aa1',
	backgroundColor: '#e0e1e2',
})

globalStyle(`${luxScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${luxScope}${formSelectSm}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${formSelectLg}`, {
	paddingTop: '2rem',
	paddingBottom: '2rem',
	paddingLeft: '2rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23e0e1e2\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${luxScope}${formCheck} ${luxScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${luxScope}${formCheckReverse} ${luxScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${luxScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: '#f0f1f2',
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

globalStyle(`${luxScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${luxScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${luxScope}${formCheckInput}:focus`, {
	borderColor: '#8d8d8d',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
})

globalStyle(`${luxScope}${formCheckInput}:checked`, {
	backgroundColor: '#1a1a1a',
	borderColor: '#1a1a1a',
})

globalStyle(`${luxScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#1a1a1a',
	borderColor: '#1a1a1a',
})

globalStyle(`${luxScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${luxScope}${formCheckInput}[disabled] ~ ${luxScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${luxScope}${formCheckInput}:disabled ~ ${luxScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${luxScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${luxScope}${formSwitch} ${luxScope}${formCheckInput}`, {
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

globalStyle(`${luxScope}${formSwitch} ${luxScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formSwitch} ${luxScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%238d8d8d\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${formSwitch} ${luxScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${luxScope}${formSwitch}${formCheckReverse} ${luxScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formSwitch} ${luxScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${luxScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${luxScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${luxScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
})

globalStyle(`${luxScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(26, 26, 26, 0.25)',
})

globalStyle(`${luxScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${luxScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#1a1a1a',
	border: '0',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#bababa',
})

globalStyle(`${luxScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
})

globalStyle(`${luxScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#1a1a1a',
	border: '0',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${luxScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#bababa',
})

globalStyle(`${luxScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
})

globalStyle(`${luxScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${luxScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${luxScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${luxScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elLabel}`, {
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
	border: `${varBsBorderWidth} solid transparent`,
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}`, {
	padding: '1rem 1.5rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '1.5rem',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:not(:-moz-placeholder-shown) ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:focus ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:not(:placeholder-shown) ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formSelect} ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:-webkit-autofill ~ ${luxScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${luxScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#f0f1f2',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elTextarea}:focus ~ ${luxScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#f0f1f2',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elTextarea}:not(:placeholder-shown) ~ ${luxScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#f0f1f2',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${elTextarea}:disabled ~ ${luxScope}${elLabel}::after`, {
	backgroundColor: '#e0e1e2',
})

globalStyle(`${luxScope}${formFloating} > :disabled ~ ${luxScope}${elLabel}`, {
	color: '#919aa1',
})

globalStyle(`${luxScope}${formFloating} > ${luxScope}${formControl}:disabled ~ ${luxScope}${elLabel}`, {
	color: '#919aa1',
})

globalStyle(`${luxScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${luxScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '300',
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: '#e0e1e2',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
})

globalStyle(`${luxScope}${inputGroupLg} > ${luxScope}${formControl}`, {
	padding: '2rem 2rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${inputGroupLg} > ${luxScope}${formSelect}`, {
	padding: '2rem 2rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${inputGroupLg} > ${luxScope}${inputGroupText}`, {
	padding: '2rem 2rem',
	fontSize: '1.25rem',
})

globalStyle(`${luxScope}${inputGroupSm} > ${luxScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${inputGroupSm} > ${luxScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${inputGroupSm} > ${luxScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
})

globalStyle(`${luxScope}${inputGroupLg} > ${luxScope}${formSelect}`, {
	paddingRight: '6rem',
})

globalStyle(`${luxScope}${inputGroupSm} > ${luxScope}${formSelect}`, {
	paddingRight: '6rem',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

globalStyle(`${luxScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${luxScope}${validTooltip}`, {
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

globalStyle(`${luxScope}${wasValidated} :valid ~ ${luxScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${luxScope}${wasValidated} :valid ~ ${luxScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${luxScope}${isValid} ~ ${luxScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${luxScope}${isValid} ~ ${luxScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${luxScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${luxScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%234bbf73\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${luxScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${luxScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:valid ~ ${luxScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${luxScope}${formCheckInput}${isValid} ~ ${luxScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${luxScope}${formCheckInline} ${luxScope}${formCheckInput} ~ ${luxScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${luxScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${luxScope}${invalidTooltip}`, {
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

globalStyle(`${luxScope}${wasValidated} :invalid ~ ${luxScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${luxScope}${wasValidated} :invalid ~ ${luxScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${luxScope}${isInvalid} ~ ${luxScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${luxScope}${isInvalid} ~ ${luxScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${luxScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${luxScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${luxScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${luxScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${formCheckInput}:invalid ~ ${luxScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${luxScope}${formCheckInput}${isInvalid} ~ ${luxScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${luxScope}${formCheckInline} ${luxScope}${formCheckInput} ~ ${luxScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${wasValidated} ${luxScope}${inputGroup} > ${luxScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${inputGroup} > ${luxScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${luxScope}${btnToolbar} ${luxScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formControl}`, {
	color: '#55595c',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formControl}::-moz-placeholder`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formControl}::placeholder`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControl}:not(:-moz-placeholder-shown) ~ ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControl}:focus ~ ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControl}:not(:placeholder-shown) ~ ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formSelect} ~ ${luxScope}${elLabel}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formFloating} > ${luxScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formCheckInput}:checked`, {
	backgroundColor: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formSwitch} ${luxScope}${formCheckInput}`, {
	backgroundImage: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'><circle r=\'3\' fill=\'rgba(0, 0, 0, 0.25)\'/></svg>")',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formRange}::-webkit-slider-thumb`, {
	backgroundColor: '#919aa1',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: '#343a40',
})

globalStyle(`${luxScope}[data-bs-theme=dark] ${luxScope}${inputGroupText}`, {
	color: 'rgba(85, 89, 92, 0.75)',
})

globalStyle(`${luxScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${luxScope}${formSwitch}`, {
	isolation: 'isolate',
})
