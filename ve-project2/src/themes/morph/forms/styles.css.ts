import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../scope.css'

import {
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

globalStyle(`:where(${morphScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${morphScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${morphScope}${formLabel}`, {
	marginBottom: '0.5rem',
	fontWeight: '600',
})

globalStyle(`${morphScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${morphScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '1rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#f0f5fa',
	backgroundClip: 'padding-box',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	boxShadow: varBsBoxShadowInset,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${morphScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${morphScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${morphScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: '#f0f5fa',
	borderColor: '#9bc6fe',
	outline: '0',
	boxShadow: `${varBsBoxShadowInset}, 0 0 0 0.25rem rgba(55, 141, 252, 0.25)`,
})

globalStyle(`${morphScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${morphScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${morphScope}${formControl}::-moz-placeholder`, {
	color: '#adb6d3',
	opacity: '1',
})

globalStyle(`${morphScope}${formControl}::placeholder`, {
	color: '#adb6d3',
	opacity: '1',
})

globalStyle(`${morphScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: '1',
})

globalStyle(`${morphScope}${formControl}::-webkit-file-upload-button`, {
	padding: '1rem 1.5rem',
	margin: '-1rem -1.5rem',
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

globalStyle(`${morphScope}${formControl}::file-selector-button`, {
	padding: '1rem 1.5rem',
	margin: '-1rem -1.5rem',
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

globalStyle(`${morphScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${morphScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${morphScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${morphScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${morphScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${morphScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${morphScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${morphScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${morphScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${morphScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${morphScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 2rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${morphScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${morphScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${morphScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${morphScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${morphScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%237b8ab8\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '1rem 4.5rem 1rem 1.5rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#f0f5fa',
	backgroundImage: `${varBsFormSelectBgImg}, ${fallbackVar(varBsFormSelectBgIcon, 'none')}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 1.5rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	boxShadow: 'inset 2px 2px 8px rgba(55, 94, 148, 0.3), inset -3px -2px 5px rgba(255, 255, 255, 0.8)',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${morphScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${formSelect}:focus`, {
	borderColor: '#9bc6fe',
	outline: '0',
	boxShadow: 'inset 2px 2px 8px rgba(55, 94, 148, 0.3), inset -3px -2px 5px rgba(255, 255, 255, 0.8), 0 0 0 0.25rem rgba(55, 141, 252, 0.25)',
})

globalStyle(`${morphScope}${formSelect}[multiple]`, {
	paddingRight: '1.5rem',
	backgroundImage: 'none',
})

globalStyle(`${morphScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '1.5rem',
	backgroundImage: 'none',
})

globalStyle(`${morphScope}${formSelect}:disabled`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${morphScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${morphScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${morphScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${morphScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${morphScope}${formCheck} ${morphScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${morphScope}${formCheckReverse} ${morphScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${morphScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: '#f0f5fa',
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

globalStyle(`${morphScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${morphScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${morphScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${morphScope}${formCheckInput}:focus`, {
	borderColor: '#9bc6fe',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(55, 141, 252, 0.25)',
})

globalStyle(`${morphScope}${formCheckInput}:checked`, {
	backgroundColor: '#378dfc',
	borderColor: '#378dfc',
})

globalStyle(`${morphScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${morphScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${morphScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#378dfc',
	borderColor: '#378dfc',
})

globalStyle(`${morphScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${morphScope}${formCheckInput}[disabled] ~ ${morphScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${morphScope}${formCheckInput}:disabled ~ ${morphScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${morphScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${morphScope}${formSwitch} ${morphScope}${formCheckInput}`, {
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

globalStyle(`${morphScope}${formSwitch} ${morphScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${formSwitch} ${morphScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${morphScope}${formSwitch} ${morphScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${morphScope}${formSwitch}${formCheckReverse} ${morphScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${formSwitch} ${morphScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${morphScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${morphScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${morphScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #d9e3f1, 0 0 0 0.25rem rgba(55, 141, 252, 0.25)',
})

globalStyle(`${morphScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #d9e3f1, 0 0 0 0.25rem rgba(55, 141, 252, 0.25)',
})

globalStyle(`${morphScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${morphScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#f0f5fa',
	border: '0',
	borderRadius: '1rem',
	boxShadow: '0 0.1rem 0.25rem rgba(0, 0, 0, 0.1)',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${morphScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#f0f5fa',
})

globalStyle(`${morphScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: 'rgba(55, 94, 148, 0.15)',
	borderColor: 'transparent',
	borderRadius: '1rem',
	boxShadow: varBsBoxShadowInset,
})

globalStyle(`${morphScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#f0f5fa',
	border: '0',
	borderRadius: '1rem',
	boxShadow: '0 0.1rem 0.25rem rgba(0, 0, 0, 0.1)',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${morphScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#f0f5fa',
})

globalStyle(`${morphScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: 'rgba(55, 94, 148, 0.15)',
	borderColor: 'transparent',
	borderRadius: '1rem',
	boxShadow: varBsBoxShadowInset,
})

globalStyle(`${morphScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${morphScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: '#d9e3f1',
})

globalStyle(`${morphScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: '#d9e3f1',
})

globalStyle(`${morphScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${elLabel}`, {
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

globalStyle(`${morphScope}${formFloating} > ${morphScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}`, {
	padding: '1rem 1.5rem',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '1.5rem',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}:not(:-moz-placeholder-shown) ~ ${morphScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}:focus ~ ${morphScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}:not(:placeholder-shown) ~ ${morphScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formSelect} ~ ${morphScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}:-webkit-autofill ~ ${morphScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${morphScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#f0f5fa',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${elTextarea}:focus ~ ${morphScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#f0f5fa',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${elTextarea}:not(:placeholder-shown) ~ ${morphScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.75rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#f0f5fa',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${elTextarea}:disabled ~ ${morphScope}${elLabel}::after`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${morphScope}${formFloating} > :disabled ~ ${morphScope}${elLabel}`, {
	color: '#7f8a99',
})

globalStyle(`${morphScope}${formFloating} > ${morphScope}${formControl}:disabled ~ ${morphScope}${elLabel}`, {
	color: '#7f8a99',
})

globalStyle(`${morphScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${morphScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '1rem 1.5rem',
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

globalStyle(`${morphScope}${inputGroupLg} > ${morphScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${morphScope}${inputGroupLg} > ${morphScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${morphScope}${inputGroupLg} > ${morphScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${morphScope}${inputGroupSm} > ${morphScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${morphScope}${inputGroupSm} > ${morphScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${morphScope}${inputGroupSm} > ${morphScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${morphScope}${inputGroupLg} > ${morphScope}${formSelect}`, {
	paddingRight: '6rem',
})

globalStyle(`${morphScope}${inputGroupSm} > ${morphScope}${formSelect}`, {
	paddingRight: '6rem',
})

globalStyle(`${morphScope}${inputGroup}:not(${hasValidation}) > ${morphScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${morphScope}${inputGroup}:not(${hasValidation}) > ${morphScope}${formFloating}:not(:last-child) > ${morphScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${morphScope}${inputGroup}:not(${hasValidation}) > ${morphScope}${formFloating}:not(:last-child) > ${morphScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${morphScope}${inputGroup}${hasValidation} > ${morphScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${morphScope}${inputGroup}${hasValidation} > ${morphScope}${formFloating}:nth-last-child(n+3) > ${morphScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${morphScope}${inputGroup}${hasValidation} > ${morphScope}${formFloating}:nth-last-child(n+3) > ${morphScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formFloating}:not(:first-child) > ${morphScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formFloating}:not(:first-child) > ${morphScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${morphScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${morphScope}${validTooltip}`, {
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

globalStyle(`${morphScope}${wasValidated} :valid ~ ${morphScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${morphScope}${wasValidated} :valid ~ ${morphScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${morphScope}${isValid} ~ ${morphScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${morphScope}${isValid} ~ ${morphScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2343cc29\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2343cc29\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `${varBsBoxShadowInset}, 0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${morphScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `${varBsBoxShadowInset}, 0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${morphScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${morphScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2343cc29\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2343cc29\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2343cc29\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2343cc29\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `inset 2px 2px 8px rgba(55, 94, 148, 0.3), inset -3px -2px 5px rgba(255, 255, 255, 0.8), 0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${morphScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `inset 2px 2px 8px rgba(55, 94, 148, 0.3), inset -3px -2px 5px rgba(255, 255, 255, 0.8), 0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${morphScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 2rem))',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${morphScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${morphScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${morphScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formCheckInput}:valid ~ ${morphScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${morphScope}${formCheckInput}${isValid} ~ ${morphScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${morphScope}${formCheckInline} ${morphScope}${formCheckInput} ~ ${morphScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${inputGroup} > ${morphScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${inputGroup} > ${morphScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${inputGroup} > ${morphScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${morphScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${morphScope}${invalidTooltip}`, {
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

globalStyle(`${morphScope}${wasValidated} :invalid ~ ${morphScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${morphScope}${wasValidated} :invalid ~ ${morphScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${morphScope}${isInvalid} ~ ${morphScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${morphScope}${isInvalid} ~ ${morphScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e52527\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e52527\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e52527\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e52527\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `${varBsBoxShadowInset}, 0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${morphScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `${varBsBoxShadowInset}, 0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${morphScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundPosition: 'top calc(0.375em + 0.5rem) right calc(0.375em + 0.5rem)',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${morphScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e52527\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e52527\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e52527\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e52527\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e52527\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e52527\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23e52527\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23e52527\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `inset 2px 2px 8px rgba(55, 94, 148, 0.3), inset -3px -2px 5px rgba(255, 255, 255, 0.8), 0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${morphScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `inset 2px 2px 8px rgba(55, 94, 148, 0.3), inset -3px -2px 5px rgba(255, 255, 255, 0.8), 0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${morphScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 2rem))',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${morphScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${morphScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${morphScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${formCheckInput}:invalid ~ ${morphScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${morphScope}${formCheckInput}${isInvalid} ~ ${morphScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${morphScope}${formCheckInline} ${morphScope}${formCheckInput} ~ ${morphScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${inputGroup} > ${morphScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${inputGroup} > ${morphScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${morphScope}${wasValidated} ${morphScope}${inputGroup} > ${morphScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${morphScope}${btnToolbar} ${morphScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${morphScope}${inputGroup}`, {
	backgroundColor: '#f0f5fa',
	borderRadius: '0.375rem',
	boxShadow: 'inset 2px 2px 8px rgba(55, 94, 148, 0.3), inset -3px -2px 5px rgba(255, 255, 255, 0.8)',
})

globalStyle(`${morphScope}${inputGroup} > ${morphScope}${formControl}`, {
	background: 'none',
	boxShadow: 'none',
})

globalStyle(`${morphScope}${inputGroup} ${morphScope}${inputGroupText}`, {
	background: 'none',
})

globalStyle(`${morphScope}${formRange}::-webkit-slider-runnable-track`, {
	boxShadow: 'inset 1px 1px 4px rgba(0, 0, 0, 0.15)',
})

globalStyle(`${morphScope}${formRange}::-webkit-slider-thumb`, {
	boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.2), inset 2px 2px 8px rgba(120, 123, 125, 0.1)',
})

globalStyle(`${morphScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.2), inset 2px 2px 8px rgba(120, 123, 125, 0.1)',
})

globalStyle(`${morphScope}${formCheckInput}`, {
	backgroundColor: '#bed1e6',
	border: 'none',
	boxShadow: 'inset 1px 1px 7px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${morphScope}${formCheckInput}:focus`, {
	border: 'none',
	boxShadow: 'none',
})

globalStyle(`${morphScope}${formCheckInput}:active`, {
	filter: 'none',
})

globalStyle(`${morphScope}${formCheckInput}:checked`, {
	backgroundColor: '#378dfc',
	boxShadow: 'inset 1px 1px 7px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${morphScope}${formControl}::-webkit-file-upload-button`, {
	boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2), inset 3px 3px 10px rgba(120, 123, 125, 0.1)',
})

globalStyle(`${morphScope}${formControl}::file-selector-button`, {
	boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2), inset 3px 3px 10px rgba(120, 123, 125, 0.1)',
})

globalStyle(`${morphScope}${formSelect}:not([multiple])`, {
	position: 'relative',
	boxShadow: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${formControl}:disabled`, {
	backgroundColor: '#bed1e6',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${formControl}::-webkit-file-upload-button`, {
	boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2), inset 3px 3px 10px rgba(120, 123, 125, 0.1)',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${formControl}::file-selector-button`, {
	boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2), inset 3px 3px 10px rgba(120, 123, 125, 0.1)',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${formSelect}:not([multiple])`, {
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.05)',
})

globalStyle(`${morphScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${morphScope}${formSwitch}`, {
	isolation: 'isolate',
})
