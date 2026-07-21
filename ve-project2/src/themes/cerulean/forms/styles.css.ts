import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { ceruleanScope } from '../scope.css'

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

globalStyle(`:where(${ceruleanScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${ceruleanScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${ceruleanScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${ceruleanScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${ceruleanScope}${formControl}`, {
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

globalStyle(`${ceruleanScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${ceruleanScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${ceruleanScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${ceruleanScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: '#97d2f3',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(47, 164, 231, 0.25)',
})

globalStyle(`${ceruleanScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${ceruleanScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${ceruleanScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${ceruleanScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${ceruleanScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: '1',
})

globalStyle(`${ceruleanScope}${formControl}::-webkit-file-upload-button`, {
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

globalStyle(`${ceruleanScope}${formControl}::file-selector-button`, {
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

globalStyle(`${ceruleanScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${ceruleanScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${ceruleanScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${ceruleanScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${ceruleanScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${ceruleanScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${ceruleanScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${ceruleanScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${ceruleanScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${ceruleanScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${ceruleanScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${ceruleanScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${ceruleanScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 0.75rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${ceruleanScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${ceruleanScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${ceruleanScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${ceruleanScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${ceruleanScope}${formSelect}`, {
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

globalStyle(`${ceruleanScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${ceruleanScope}${formSelect}:focus`, {
	borderColor: '#97d2f3',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(47, 164, 231, 0.25)',
})

globalStyle(`${ceruleanScope}${formSelect}[multiple]`, {
	paddingRight: '0.75rem',
	backgroundImage: 'none',
})

globalStyle(`${ceruleanScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '0.75rem',
	backgroundImage: 'none',
})

globalStyle(`${ceruleanScope}${formSelect}:disabled`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${ceruleanScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${ceruleanScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${ceruleanScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${ceruleanScope}[data-bs-theme=dark] ${ceruleanScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${ceruleanScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${ceruleanScope}${formCheck} ${ceruleanScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${ceruleanScope}${formCheckReverse} ${ceruleanScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${ceruleanScope}${formCheckInput}`, {
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

globalStyle(`${ceruleanScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${ceruleanScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${ceruleanScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${ceruleanScope}${formCheckInput}:focus`, {
	borderColor: '#97d2f3',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(47, 164, 231, 0.25)',
})

globalStyle(`${ceruleanScope}${formCheckInput}:checked`, {
	backgroundColor: '#2fa4e7',
	borderColor: '#2fa4e7',
})

globalStyle(`${ceruleanScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${ceruleanScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${ceruleanScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#2fa4e7',
	borderColor: '#2fa4e7',
})

globalStyle(`${ceruleanScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${ceruleanScope}${formCheckInput}[disabled] ~ ${ceruleanScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${ceruleanScope}${formCheckInput}:disabled ~ ${ceruleanScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${ceruleanScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${ceruleanScope}${formSwitch} ${ceruleanScope}${formCheckInput}`, {
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

globalStyle(`${ceruleanScope}${formSwitch} ${ceruleanScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${ceruleanScope}${formSwitch} ${ceruleanScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%2397d2f3\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${ceruleanScope}${formSwitch} ${ceruleanScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${ceruleanScope}${formSwitch}${formCheckReverse} ${ceruleanScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${ceruleanScope}[data-bs-theme=dark] ${ceruleanScope}${formSwitch} ${ceruleanScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${ceruleanScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${ceruleanScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${ceruleanScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(47, 164, 231, 0.25)',
})

globalStyle(`${ceruleanScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(47, 164, 231, 0.25)',
})

globalStyle(`${ceruleanScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${ceruleanScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#2fa4e7',
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${ceruleanScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${ceruleanScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#c1e4f8',
})

globalStyle(`${ceruleanScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${ceruleanScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#2fa4e7',
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${ceruleanScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${ceruleanScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#c1e4f8',
})

globalStyle(`${ceruleanScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${ceruleanScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${ceruleanScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${ceruleanScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${ceruleanScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${elLabel}`, {
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

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}`, {
	padding: '1rem 0.75rem',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}:not(:-moz-placeholder-shown) ~ ${ceruleanScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}:focus ~ ${ceruleanScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}:not(:placeholder-shown) ~ ${ceruleanScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formSelect} ~ ${ceruleanScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}:-webkit-autofill ~ ${ceruleanScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${ceruleanScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${elTextarea}:focus ~ ${ceruleanScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${elTextarea}:not(:placeholder-shown) ~ ${ceruleanScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${elTextarea}:disabled ~ ${ceruleanScope}${elLabel}::after`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${ceruleanScope}${formFloating} > :disabled ~ ${ceruleanScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${ceruleanScope}${formFloating} > ${ceruleanScope}${formControl}:disabled ~ ${ceruleanScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${ceruleanScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${ceruleanScope}${inputGroupText}`, {
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

globalStyle(`${ceruleanScope}${inputGroupLg} > ${ceruleanScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${ceruleanScope}${inputGroupLg} > ${ceruleanScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${ceruleanScope}${inputGroupLg} > ${ceruleanScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${ceruleanScope}${inputGroupSm} > ${ceruleanScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${ceruleanScope}${inputGroupSm} > ${ceruleanScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${ceruleanScope}${inputGroupSm} > ${ceruleanScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${ceruleanScope}${inputGroupLg} > ${ceruleanScope}${formSelect}`, {
	paddingRight: '3rem',
})

globalStyle(`${ceruleanScope}${inputGroupSm} > ${ceruleanScope}${formSelect}`, {
	paddingRight: '3rem',
})

globalStyle(`${ceruleanScope}${inputGroup}:not(${hasValidation}) > ${ceruleanScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${ceruleanScope}${inputGroup}:not(${hasValidation}) > ${ceruleanScope}${formFloating}:not(:last-child) > ${ceruleanScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${ceruleanScope}${inputGroup}:not(${hasValidation}) > ${ceruleanScope}${formFloating}:not(:last-child) > ${ceruleanScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${ceruleanScope}${inputGroup}${hasValidation} > ${ceruleanScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${ceruleanScope}${inputGroup}${hasValidation} > ${ceruleanScope}${formFloating}:nth-last-child(n+3) > ${ceruleanScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${ceruleanScope}${inputGroup}${hasValidation} > ${ceruleanScope}${formFloating}:nth-last-child(n+3) > ${ceruleanScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formFloating}:not(:first-child) > ${ceruleanScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formFloating}:not(:first-child) > ${ceruleanScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${ceruleanScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${ceruleanScope}${validTooltip}`, {
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

globalStyle(`${ceruleanScope}${wasValidated} :valid ~ ${ceruleanScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${ceruleanScope}${wasValidated} :valid ~ ${ceruleanScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${ceruleanScope}${isValid} ~ ${ceruleanScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${ceruleanScope}${isValid} ~ ${ceruleanScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2373a839\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2373a839\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${ceruleanScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${ceruleanScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2373a839\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2373a839\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2373a839\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2373a839\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${ceruleanScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${ceruleanScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formCheckInput}:valid ~ ${ceruleanScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${ceruleanScope}${formCheckInput}${isValid} ~ ${ceruleanScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${ceruleanScope}${formCheckInline} ${ceruleanScope}${formCheckInput} ~ ${ceruleanScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${inputGroup} > ${ceruleanScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${inputGroup} > ${ceruleanScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${inputGroup} > ${ceruleanScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${ceruleanScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${ceruleanScope}${invalidTooltip}`, {
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

globalStyle(`${ceruleanScope}${wasValidated} :invalid ~ ${ceruleanScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${ceruleanScope}${wasValidated} :invalid ~ ${ceruleanScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${ceruleanScope}${isInvalid} ~ ${ceruleanScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${ceruleanScope}${isInvalid} ~ ${ceruleanScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c71c22\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c71c22\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c71c22\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c71c22\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${ceruleanScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${ceruleanScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c71c22\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c71c22\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c71c22\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c71c22\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c71c22\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c71c22\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23c71c22\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23c71c22\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${ceruleanScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${ceruleanScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${formCheckInput}:invalid ~ ${ceruleanScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${ceruleanScope}${formCheckInput}${isInvalid} ~ ${ceruleanScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${ceruleanScope}${formCheckInline} ${ceruleanScope}${formCheckInput} ~ ${ceruleanScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${inputGroup} > ${ceruleanScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${inputGroup} > ${ceruleanScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${ceruleanScope}${wasValidated} ${ceruleanScope}${inputGroup} > ${ceruleanScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${ceruleanScope}${inputGroup} > ${ceruleanScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${ceruleanScope}${btnToolbar} ${ceruleanScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${ceruleanScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${ceruleanScope}${formSwitch}`, {
	isolation: 'isolate',
})
