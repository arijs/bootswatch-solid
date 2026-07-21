import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { journalScope } from '../scope.css'

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

globalStyle(`:where(${journalScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${journalScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${journalScope}${formLabel}`, {
	marginBottom: '0.5rem',
})

globalStyle(`${journalScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${journalScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.375rem 1rem',
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

globalStyle(`${journalScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${journalScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${journalScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${journalScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: '#f5b4b2',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(235, 104, 100, 0.25)',
})

globalStyle(`${journalScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${journalScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${journalScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${journalScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${journalScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: '1',
})

globalStyle(`${journalScope}${formControl}::-webkit-file-upload-button`, {
	padding: '0.375rem 1rem',
	margin: '-0.375rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
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

globalStyle(`${journalScope}${formControl}::file-selector-button`, {
	padding: '0.375rem 1rem',
	margin: '-0.375rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
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

globalStyle(`${journalScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${journalScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${journalScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${journalScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${journalScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${journalScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${journalScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${journalScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${journalScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${journalScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${journalScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${journalScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${journalScope}${elTextarea}${formControl}`, {
	minHeight: `calc(1.5em + 0.75rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${journalScope}${elTextarea}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${journalScope}${elTextarea}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${journalScope}${formControlColor}${formControlSm}`, {
	height: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${journalScope}${formControlColor}${formControlLg}`, {
	height: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
})

globalStyle(`${journalScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23333\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.375rem 3rem 0.375rem 1rem',
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
	backgroundPosition: 'right 1rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${journalScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${journalScope}${formSelect}:focus`, {
	borderColor: '#f5b4b2',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(235, 104, 100, 0.25)',
})

globalStyle(`${journalScope}${formSelect}[multiple]`, {
	paddingRight: '1rem',
	backgroundImage: 'none',
})

globalStyle(`${journalScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '1rem',
	backgroundImage: 'none',
})

globalStyle(`${journalScope}${formSelect}:disabled`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${journalScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${journalScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${journalScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${journalScope}[data-bs-theme=dark] ${journalScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${journalScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${journalScope}${formCheck} ${journalScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${journalScope}${formCheckReverse} ${journalScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${journalScope}${formCheckInput}`, {
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

globalStyle(`${journalScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${journalScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${journalScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${journalScope}${formCheckInput}:focus`, {
	borderColor: '#f5b4b2',
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(235, 104, 100, 0.25)',
})

globalStyle(`${journalScope}${formCheckInput}:checked`, {
	backgroundColor: '#eb6864',
	borderColor: '#eb6864',
})

globalStyle(`${journalScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${journalScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${journalScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#eb6864',
	borderColor: '#eb6864',
})

globalStyle(`${journalScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${journalScope}${formCheckInput}[disabled] ~ ${journalScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${journalScope}${formCheckInput}:disabled ~ ${journalScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${journalScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${journalScope}${formSwitch} ${journalScope}${formCheckInput}`, {
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

globalStyle(`${journalScope}${formSwitch} ${journalScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${journalScope}${formSwitch} ${journalScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23f5b4b2\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${journalScope}${formSwitch} ${journalScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23fff\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${journalScope}${formSwitch}${formCheckReverse} ${journalScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${journalScope}[data-bs-theme=dark] ${journalScope}${formSwitch} ${journalScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${journalScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${journalScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${journalScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(235, 104, 100, 0.25)',
})

globalStyle(`${journalScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(235, 104, 100, 0.25)',
})

globalStyle(`${journalScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${journalScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#eb6864',
	border: '0',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${journalScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${journalScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#f9d2d1',
})

globalStyle(`${journalScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${journalScope}${formRange}::-moz-range-thumb`, {
	width: '1rem',
	height: '1rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#eb6864',
	border: '0',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${journalScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${journalScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#f9d2d1',
})

globalStyle(`${journalScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${journalScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${journalScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${journalScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

globalStyle(`${journalScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formSelect}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${elLabel}`, {
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

globalStyle(`${journalScope}${formFloating} > ${journalScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}`, {
	padding: '1rem 1rem',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '1rem',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}:not(:-moz-placeholder-shown) ~ ${journalScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}:focus ~ ${journalScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}:not(:placeholder-shown) ~ ${journalScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formSelect} ~ ${journalScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}:-webkit-autofill ~ ${journalScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${journalScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${elTextarea}:focus ~ ${journalScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${elTextarea}:not(:placeholder-shown) ~ ${journalScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${elTextarea}:disabled ~ ${journalScope}${elLabel}::after`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${journalScope}${formFloating} > :disabled ~ ${journalScope}${elLabel}`, {
	color: '#777',
})

globalStyle(`${journalScope}${formFloating} > ${journalScope}${formControl}:disabled ~ ${journalScope}${elLabel}`, {
	color: '#777',
})

globalStyle(`${journalScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${journalScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.375rem 1rem',
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

globalStyle(`${journalScope}${inputGroupLg} > ${journalScope}${formControl}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${journalScope}${inputGroupLg} > ${journalScope}${formSelect}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${journalScope}${inputGroupLg} > ${journalScope}${inputGroupText}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${journalScope}${inputGroupSm} > ${journalScope}${formControl}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${journalScope}${inputGroupSm} > ${journalScope}${formSelect}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${journalScope}${inputGroupSm} > ${journalScope}${inputGroupText}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${journalScope}${inputGroupLg} > ${journalScope}${formSelect}`, {
	paddingRight: '4rem',
})

globalStyle(`${journalScope}${inputGroupSm} > ${journalScope}${formSelect}`, {
	paddingRight: '4rem',
})

globalStyle(`${journalScope}${inputGroup}:not(${hasValidation}) > ${journalScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${journalScope}${inputGroup}:not(${hasValidation}) > ${journalScope}${formFloating}:not(:last-child) > ${journalScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${journalScope}${inputGroup}:not(${hasValidation}) > ${journalScope}${formFloating}:not(:last-child) > ${journalScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${journalScope}${inputGroup}${hasValidation} > ${journalScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${journalScope}${inputGroup}${hasValidation} > ${journalScope}${formFloating}:nth-last-child(n+3) > ${journalScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${journalScope}${inputGroup}${hasValidation} > ${journalScope}${formFloating}:nth-last-child(n+3) > ${journalScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formFloating}:not(:first-child) > ${journalScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formFloating}:not(:first-child) > ${journalScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${journalScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${journalScope}${validTooltip}`, {
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

globalStyle(`${journalScope}${wasValidated} :valid ~ ${journalScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${journalScope}${wasValidated} :valid ~ ${journalScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${journalScope}${isValid} ~ ${journalScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${journalScope}${isValid} ~ ${journalScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2322b24c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2322b24c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${journalScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${journalScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${journalScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2322b24c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2322b24c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2322b24c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2322b24c\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${journalScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${journalScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${journalScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${journalScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${journalScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formCheckInput}:valid ~ ${journalScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${journalScope}${formCheckInput}${isValid} ~ ${journalScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${journalScope}${formCheckInline} ${journalScope}${formCheckInput} ~ ${journalScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${inputGroup} > ${journalScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${inputGroup} > ${journalScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${inputGroup} > ${journalScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${journalScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${journalScope}${invalidTooltip}`, {
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

globalStyle(`${journalScope}${wasValidated} :invalid ~ ${journalScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${journalScope}${wasValidated} :invalid ~ ${journalScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${journalScope}${isInvalid} ~ ${journalScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${journalScope}${isInvalid} ~ ${journalScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f57a00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f57a00\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f57a00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f57a00\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${journalScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${journalScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundPosition: 'top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${journalScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f57a00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f57a00\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f57a00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f57a00\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f57a00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f57a00\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f57a00\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f57a00\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${journalScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${journalScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 0.75rem))',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${journalScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${journalScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${journalScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${formCheckInput}:invalid ~ ${journalScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${journalScope}${formCheckInput}${isInvalid} ~ ${journalScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${journalScope}${formCheckInline} ${journalScope}${formCheckInput} ~ ${journalScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${inputGroup} > ${journalScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${inputGroup} > ${journalScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${journalScope}${wasValidated} ${journalScope}${inputGroup} > ${journalScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${journalScope}${inputGroup} > ${journalScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${journalScope}${btnToolbar} ${journalScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${journalScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${journalScope}${formSwitch}`, {
	isolation: 'isolate',
})
