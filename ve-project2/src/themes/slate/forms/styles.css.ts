import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { slateScope } from '../scope.css'

import {
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
	inputGroupAddon,
	inputGroupLg,
	inputGroupSm,
	invalidTooltip,
	validTooltip,
} from '../../../theme-contract/literal/contract.css'
import { btnToolbar } from '../../../theme-contract/ui/button-group/contract.css'
import { dropdownMenu, dropdownToggle } from '../../../theme-contract/ui/dropdowns/contract.css'

globalStyle(`:where(${slateScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${slateScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${slateScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${slateScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${slateScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.75rem 1rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#272b30',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#fff',
	backgroundClip: 'padding-box',
	border: `${varBsBorderWidth} solid rgba(0, 0, 0, 0.6)`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${slateScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${slateScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${slateScope}${formControl}:focus`, {
	color: '#272b30',
	backgroundColor: '#fff',
	borderColor: '#9d9fa2',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(58, 63, 68, 0.25)',
})

globalStyle(`${slateScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${slateScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${slateScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${slateScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${slateScope}${formControl}:disabled`, {
	color: '#7a8288',
	backgroundColor: '#ccc',
	opacity: '1',
})

globalStyle(`${slateScope}${formControl}::-webkit-file-upload-button`, {
	padding: '0.75rem 1rem',
	margin: '-0.75rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
	color: '#999',
	backgroundColor: '#52575c',
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${slateScope}${formControl}::file-selector-button`, {
	padding: '0.75rem 1rem',
	margin: '-0.75rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
	color: '#999',
	backgroundColor: '#52575c',
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${slateScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: '#464a4f',
})

globalStyle(`${slateScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: '#464a4f',
})

globalStyle(`${slateScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${slateScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${slateScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${slateScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${slateScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${slateScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${slateScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${slateScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${slateScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 1.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${slateScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${slateScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${slateScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${slateScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${slateScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%233a3f44\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.75rem 3rem 0.75rem 1rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#272b30',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#fff',
	backgroundImage: `${varBsFormSelectBgImg}, ${fallbackVar(varBsFormSelectBgIcon, 'none')}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 1rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid rgba(0, 0, 0, 0.6)`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${slateScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${formSelect}:focus`, {
	borderColor: '#9d9fa2',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(58, 63, 68, 0.25)',
})

globalStyle(`${slateScope}${formSelect}[multiple]`, {
	paddingRight: '1rem',
	backgroundImage: 'none',
})

globalStyle(`${slateScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '1rem',
	backgroundImage: 'none',
})

globalStyle(`${slateScope}${formSelect}:disabled`, {
	color: '#7a8288',
	backgroundColor: '#ccc',
})

globalStyle(`${slateScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: '0 0 0 #272b30',
})

globalStyle(`${slateScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${slateScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${slateScope}[data-bs-theme=dark] ${slateScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${slateScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${slateScope}${formCheck} ${slateScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${slateScope}${formCheckReverse} ${slateScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${slateScope}${formCheckInput}`, {
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
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	WebkitPrintColorAdjust: 'exact',
	colorAdjust: 'exact',
	printColorAdjust: 'exact',
})

globalStyle(`${slateScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${slateScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${slateScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${slateScope}${formCheckInput}:focus`, {
	borderColor: '#9d9fa2',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(58, 63, 68, 0.25)',
})

globalStyle(`${slateScope}${formCheckInput}:checked`, {
	backgroundColor: '#3a3f44',
	borderColor: '#3a3f44',
})

globalStyle(`${slateScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${slateScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${slateScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#3a3f44',
	borderColor: '#3a3f44',
})

globalStyle(`${slateScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${slateScope}${formCheckInput}[disabled] ~ ${slateScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${slateScope}${formCheckInput}:disabled ~ ${slateScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${slateScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${slateScope}${formSwitch} ${slateScope}${formCheckInput}`, {
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

globalStyle(`${slateScope}${formSwitch} ${slateScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${formSwitch} ${slateScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%239d9fa2\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${slateScope}${formSwitch} ${slateScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${slateScope}${formSwitch}${formCheckReverse} ${slateScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${slateScope}[data-bs-theme=dark] ${slateScope}${formSwitch} ${slateScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${slateScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${slateScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${slateScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #272b30, 0 0 0 0.25rem rgba(58, 63, 68, 0.25)',
})

globalStyle(`${slateScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #272b30, 0 0 0 0.25rem rgba(58, 63, 68, 0.25)',
})

globalStyle(`${slateScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${slateScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#3a3f44',
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${slateScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#c4c5c7',
})

globalStyle(`${slateScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${slateScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#3a3f44',
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${slateScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#c4c5c7',
})

globalStyle(`${slateScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${slateScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${slateScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${slateScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${slateScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${elLabel}`, {
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
	border: `${varBsBorderWidth} solid transparent`,
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}`, {
	padding: '1rem 1rem',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '1rem',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}:not(:-moz-placeholder-shown) ~ ${slateScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}:focus ~ ${slateScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}:not(:placeholder-shown) ~ ${slateScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formSelect} ~ ${slateScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}:-webkit-autofill ~ ${slateScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${slateScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${elTextarea}:focus ~ ${slateScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${elTextarea}:not(:placeholder-shown) ~ ${slateScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: varBsBorderRadius,
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${elTextarea}:disabled ~ ${slateScope}${elLabel}::after`, {
	backgroundColor: '#ccc',
})

globalStyle(`${slateScope}${formFloating} > :disabled ~ ${slateScope}${elLabel}`, {
	color: '#7a8288',
})

globalStyle(`${slateScope}${formFloating} > ${slateScope}${formControl}:disabled ~ ${slateScope}${elLabel}`, {
	color: '#7a8288',
})

globalStyle(`${slateScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${slateScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.75rem 1rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: '#999',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: '#52575c',
	border: `${varBsBorderWidth} solid rgba(0, 0, 0, 0.6)`,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${slateScope}${inputGroupLg} > ${slateScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${slateScope}${inputGroupLg} > ${slateScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${slateScope}${inputGroupLg} > ${slateScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${slateScope}${inputGroupSm} > ${slateScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${slateScope}${inputGroupSm} > ${slateScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${slateScope}${inputGroupSm} > ${slateScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${slateScope}${inputGroupLg} > ${slateScope}${formSelect}`, {
	paddingRight: '4rem',
})

globalStyle(`${slateScope}${inputGroupSm} > ${slateScope}${formSelect}`, {
	paddingRight: '4rem',
})

globalStyle(`${slateScope}${inputGroup}:not(${hasValidation}) > ${slateScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${slateScope}${inputGroup}:not(${hasValidation}) > ${slateScope}${formFloating}:not(:last-child) > ${slateScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${slateScope}${inputGroup}:not(${hasValidation}) > ${slateScope}${formFloating}:not(:last-child) > ${slateScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${slateScope}${inputGroup}${hasValidation} > ${slateScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${slateScope}${inputGroup}${hasValidation} > ${slateScope}${formFloating}:nth-last-child(n+3) > ${slateScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${slateScope}${inputGroup}${hasValidation} > ${slateScope}${formFloating}:nth-last-child(n+3) > ${slateScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formFloating}:not(:first-child) > ${slateScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formFloating}:not(:first-child) > ${slateScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${slateScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${slateScope}${validTooltip}`, {
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

globalStyle(`${slateScope}${wasValidated} :valid ~ ${slateScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${slateScope}${wasValidated} :valid ~ ${slateScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${slateScope}${isValid} ~ ${slateScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${slateScope}${isValid} ~ ${slateScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2362c462\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2362c462\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${slateScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${slateScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${slateScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2362c462\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2362c462\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2362c462\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2362c462\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${slateScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${slateScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${slateScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${slateScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${slateScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formCheckInput}:valid ~ ${slateScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${slateScope}${formCheckInput}${isValid} ~ ${slateScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${slateScope}${formCheckInline} ${slateScope}${formCheckInput} ~ ${slateScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${inputGroup} > ${slateScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${inputGroup} > ${slateScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${inputGroup} > ${slateScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${slateScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${slateScope}${invalidTooltip}`, {
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

globalStyle(`${slateScope}${wasValidated} :invalid ~ ${slateScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${slateScope}${wasValidated} :invalid ~ ${slateScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${slateScope}${isInvalid} ~ ${slateScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${slateScope}${isInvalid} ~ ${slateScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ee5f5b\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ee5f5b\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ee5f5b\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ee5f5b\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${slateScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${slateScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundPosition: 'top calc(0.375em + 0.375rem) right calc(0.375em + 0.375rem)',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${slateScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ee5f5b\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ee5f5b\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ee5f5b\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ee5f5b\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ee5f5b\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ee5f5b\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23ee5f5b\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23ee5f5b\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${slateScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${slateScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 1.5rem))',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${slateScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${slateScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${slateScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${formCheckInput}:invalid ~ ${slateScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${slateScope}${formCheckInput}${isInvalid} ~ ${slateScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${slateScope}${formCheckInline} ${slateScope}${formCheckInput} ~ ${slateScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${inputGroup} > ${slateScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${inputGroup} > ${slateScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${slateScope}${wasValidated} ${slateScope}${inputGroup} > ${slateScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${slateScope}${inputGroup} > ${slateScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${slateScope}${btnToolbar} ${slateScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`:where(${slateScope}${legend})`, {
	color: '#fff',
})

globalStyle(`${slateScope}${inputGroupAddon}`, {
	backgroundImage: 'linear-gradient(#81888e, #7a8288 20%, #62686d)',
	filter: 'none',
	color: '#fff',
	textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
})

globalStyle(`${slateScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${slateScope}${formSwitch}`, {
	isolation: 'isolate',
})
