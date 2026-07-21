import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { superheroScope } from '../scope.css'

import {
	varBsBodyColorRgb,
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
	checkbox,
	formCheckInline,
	formCheckReverse,
	formControlColor,
	formControlPlaintext,
	helpBlock,
	inputGroupLg,
	inputGroupSm,
	invalidTooltip,
	radio,
	validTooltip,
} from '../../../theme-contract/literal/contract.css'
import { btnToolbar } from '../../../theme-contract/ui/button-group/contract.css'
import { dropdownMenu, dropdownToggle } from '../../../theme-contract/ui/dropdowns/contract.css'

globalStyle(`:where(${superheroScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${superheroScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${superheroScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${superheroScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${superheroScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#212529',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#fff',
	backgroundClip: 'padding-box',
	border: `${varBsBorderWidth} solid transparent`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${superheroScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${superheroScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${superheroScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${superheroScope}${formControl}:focus`, {
	color: '#212529',
	backgroundColor: '#fff',
	borderColor: '#efb48c',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(223, 105, 25, 0.25)',
})

globalStyle(`${superheroScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${superheroScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${superheroScope}${formControl}::-moz-placeholder`, {
	color: '#868e96',
	opacity: '1',
})

globalStyle(`${superheroScope}${formControl}::placeholder`, {
	color: '#868e96',
	opacity: '1',
})

globalStyle(`${superheroScope}${formControl}:disabled`, {
	color: '#4e5d6c',
	backgroundColor: '#ebebeb',
	opacity: '1',
})

globalStyle(`${superheroScope}${formControl}::-webkit-file-upload-button`, {
	padding: '0.375rem 0.75rem',
	margin: '-0.375rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
	color: '#ebebeb',
	backgroundColor: '#4e5d6c',
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${superheroScope}${formControl}::file-selector-button`, {
	padding: '0.375rem 0.75rem',
	margin: '-0.375rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
	color: '#ebebeb',
	backgroundColor: '#4e5d6c',
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${superheroScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${superheroScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${superheroScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: '#43505d',
})

globalStyle(`${superheroScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: '#43505d',
})

globalStyle(`${superheroScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${superheroScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${superheroScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${superheroScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${superheroScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${superheroScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${superheroScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${superheroScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${superheroScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 0.75rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${superheroScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${superheroScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${superheroScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${superheroScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${superheroScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23343a40\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.375rem 2.25rem 0.375rem 0.75rem',
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
	backgroundPosition: 'right 0.75rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid transparent`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${superheroScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${superheroScope}${formSelect}:focus`, {
	borderColor: '#efb48c',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(223, 105, 25, 0.25)',
})

globalStyle(`${superheroScope}${formSelect}[multiple]`, {
	paddingRight: '0.75rem',
	backgroundImage: 'none',
})

globalStyle(`${superheroScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '0.75rem',
	backgroundImage: 'none',
})

globalStyle(`${superheroScope}${formSelect}:disabled`, {
	color: '#4e5d6c',
	backgroundColor: '#ebebeb',
})

globalStyle(`${superheroScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: '0 0 0 #212529',
})

globalStyle(`${superheroScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${superheroScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${superheroScope}[data-bs-theme=dark] ${superheroScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23ced4da\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${superheroScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${superheroScope}${formCheck} ${superheroScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${superheroScope}${formCheckReverse} ${superheroScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${superheroScope}${formCheckInput}`, {
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

globalStyle(`${superheroScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${superheroScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${superheroScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${superheroScope}${formCheckInput}:focus`, {
	borderColor: '#efb48c',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(223, 105, 25, 0.25)',
})

globalStyle(`${superheroScope}${formCheckInput}:checked`, {
	backgroundColor: '#df6919',
	borderColor: '#df6919',
})

globalStyle(`${superheroScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${superheroScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${superheroScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#df6919',
	borderColor: '#df6919',
})

globalStyle(`${superheroScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${superheroScope}${formCheckInput}[disabled] ~ ${superheroScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${superheroScope}${formCheckInput}:disabled ~ ${superheroScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${superheroScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${superheroScope}${formSwitch} ${superheroScope}${formCheckInput}`, {
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

globalStyle(`${superheroScope}${formSwitch} ${superheroScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${superheroScope}${formSwitch} ${superheroScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23efb48c\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${superheroScope}${formSwitch} ${superheroScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${superheroScope}${formSwitch}${formCheckReverse} ${superheroScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${superheroScope}[data-bs-theme=dark] ${superheroScope}${formSwitch} ${superheroScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${superheroScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${superheroScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${superheroScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #0f2537, 0 0 0 0.25rem rgba(223, 105, 25, 0.25)',
})

globalStyle(`${superheroScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #0f2537, 0 0 0 0.25rem rgba(223, 105, 25, 0.25)',
})

globalStyle(`${superheroScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${superheroScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#df6919',
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${superheroScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${superheroScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#f5d2ba',
})

globalStyle(`${superheroScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${superheroScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#df6919',
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${superheroScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${superheroScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#f5d2ba',
})

globalStyle(`${superheroScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${superheroScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${superheroScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${superheroScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${superheroScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${elLabel}`, {
	position: 'absolute',
	top: '0',
	left: '0',
	zIndex: '2',
	maxWidth: '100%',
	height: '100%',
	padding: '1rem 0.75rem',
	overflow: 'hidden',
	color: `rgba(${varBsBodyColorRgb}, 1)`,
	textAlign: 'start',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	pointerEvents: 'none',
	border: `${varBsBorderWidth} solid transparent`,
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}`, {
	padding: '1rem 0.75rem',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '0.75rem',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:not(:-moz-placeholder-shown) ~ ${superheroScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:focus ~ ${superheroScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:not(:placeholder-shown) ~ ${superheroScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formSelect} ~ ${superheroScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:-webkit-autofill ~ ${superheroScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${superheroScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${elTextarea}:focus ~ ${superheroScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${elTextarea}:not(:placeholder-shown) ~ ${superheroScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.375rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${elTextarea}:disabled ~ ${superheroScope}${elLabel}::after`, {
	backgroundColor: '#ebebeb',
})

globalStyle(`${superheroScope}${formFloating} > :disabled ~ ${superheroScope}${elLabel}`, {
	color: '#4e5d6c',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:disabled ~ ${superheroScope}${elLabel}`, {
	color: '#4e5d6c',
})

globalStyle(`${superheroScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${superheroScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#ebebeb',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: '#4e5d6c',
	border: `${varBsBorderWidth} solid transparent`,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${superheroScope}${inputGroupLg} > ${superheroScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${superheroScope}${inputGroupLg} > ${superheroScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${superheroScope}${inputGroupLg} > ${superheroScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${superheroScope}${inputGroupSm} > ${superheroScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${superheroScope}${inputGroupSm} > ${superheroScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${superheroScope}${inputGroupSm} > ${superheroScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${superheroScope}${inputGroupLg} > ${superheroScope}${formSelect}`, {
	paddingRight: '3rem',
})

globalStyle(`${superheroScope}${inputGroupSm} > ${superheroScope}${formSelect}`, {
	paddingRight: '3rem',
})

globalStyle(`${superheroScope}${inputGroup}:not(${hasValidation}) > ${superheroScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${superheroScope}${inputGroup}:not(${hasValidation}) > ${superheroScope}${formFloating}:not(:last-child) > ${superheroScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${superheroScope}${inputGroup}:not(${hasValidation}) > ${superheroScope}${formFloating}:not(:last-child) > ${superheroScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${superheroScope}${inputGroup}${hasValidation} > ${superheroScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${superheroScope}${inputGroup}${hasValidation} > ${superheroScope}${formFloating}:nth-last-child(n+3) > ${superheroScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${superheroScope}${inputGroup}${hasValidation} > ${superheroScope}${formFloating}:nth-last-child(n+3) > ${superheroScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formFloating}:not(:first-child) > ${superheroScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formFloating}:not(:first-child) > ${superheroScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${superheroScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${superheroScope}${validTooltip}`, {
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

globalStyle(`${superheroScope}${wasValidated} :valid ~ ${superheroScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${superheroScope}${wasValidated} :valid ~ ${superheroScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${superheroScope}${isValid} ~ ${superheroScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${superheroScope}${isValid} ~ ${superheroScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%235cb85c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%235cb85c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${superheroScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${superheroScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%235cb85c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%235cb85c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%235cb85c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%235cb85c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${superheroScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${superheroScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formCheckInput}:valid ~ ${superheroScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${superheroScope}${formCheckInput}${isValid} ~ ${superheroScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${superheroScope}${formCheckInline} ${superheroScope}${formCheckInput} ~ ${superheroScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${inputGroup} > ${superheroScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${inputGroup} > ${superheroScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${inputGroup} > ${superheroScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${superheroScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${superheroScope}${invalidTooltip}`, {
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

globalStyle(`${superheroScope}${wasValidated} :invalid ~ ${superheroScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${superheroScope}${wasValidated} :invalid ~ ${superheroScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${superheroScope}${isInvalid} ~ ${superheroScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${superheroScope}${isInvalid} ~ ${superheroScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${superheroScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${superheroScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23d9534f\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23d9534f\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '4.125rem',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${superheroScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${superheroScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${formCheckInput}:invalid ~ ${superheroScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${superheroScope}${formCheckInput}${isInvalid} ~ ${superheroScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${superheroScope}${formCheckInline} ${superheroScope}${formCheckInput} ~ ${superheroScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${inputGroup} > ${superheroScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${inputGroup} > ${superheroScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${superheroScope}${wasValidated} ${superheroScope}${inputGroup} > ${superheroScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${superheroScope}${inputGroup} > ${superheroScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${superheroScope}${btnToolbar} ${superheroScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${superheroScope}${radio} ${superheroScope}${elLabel}`, {
	fontSize: '0.875rem',
})

globalStyle(`${superheroScope}${checkbox} ${superheroScope}${elLabel}`, {
	fontSize: '0.875rem',
})

globalStyle(`${superheroScope}${helpBlock}`, {
	fontSize: '0.875rem',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:not(:-moz-placeholder-shown) ~ ${superheroScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:focus ~ ${superheroScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${superheroScope}${formFloating} > ${superheroScope}${formControl}:not(:placeholder-shown) ~ ${superheroScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${superheroScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${superheroScope}${formSwitch}`, {
	isolation: 'isolate',
})
