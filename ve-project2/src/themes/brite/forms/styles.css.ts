import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../scope.css'

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

globalStyle(`:where(${briteScope}${legend})`, {
	float: 'left',
	width: '100%',
	padding: '0',
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`:where(${briteScope}${legend})`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${briteScope}${formLabel}`, {
	marginBottom: '0.5rem',
	fontWeight: '500',
})

globalStyle(`${briteScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

globalStyle(`${briteScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsBodyBg,
	backgroundClip: 'padding-box',
	border: `2px solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${briteScope}${formControl}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${briteScope}${formControl}[type=file]`, {
	overflow: 'hidden',
})

globalStyle(`${briteScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${briteScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: '#000',
	outline: '0',
	boxShadow: '0 0 0 1px #000',
})

globalStyle(`${briteScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: '85px',
	height: '1.5em',
	margin: '0',
})

globalStyle(`${briteScope}${formControl}::-webkit-datetime-edit`, {
	display: 'block',
	padding: '0',
})

globalStyle(`${briteScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${briteScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: '1',
})

globalStyle(`${briteScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: '1',
})

globalStyle(`${briteScope}${formControl}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '2px',
	borderRadius: '0',
	WebkitTransition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${briteScope}${formControl}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: '0',
	borderInlineEndWidth: '2px',
	borderRadius: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${briteScope}${formControl}::-webkit-file-upload-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${briteScope}${formControl}::file-selector-button`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${briteScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${briteScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${briteScope}${formControlPlaintext}${formControlSm}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${briteScope}${formControlPlaintext}${formControlLg}`, {
	paddingRight: '0',
	paddingLeft: '0',
})

globalStyle(`${briteScope}${formControlSm}`, {
	minHeight: 'calc(1.5em + 0.5rem + calc(2px * 2))',
	padding: '0.25rem 0.75rem',
	fontSize: '0.765625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${briteScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.75rem',
	margin: '-0.25rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
})

globalStyle(`${briteScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.75rem',
	margin: '-0.25rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
})

globalStyle(`${briteScope}${formControlLg}`, {
	minHeight: 'calc(1.5em + 1.5rem + calc(2px * 2))',
	padding: '0.75rem 1.25rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${briteScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.75rem 1.25rem',
	margin: '-0.75rem -1.25rem',
	WebkitMarginEnd: '1.25rem',
	marginInlineEnd: '1.25rem',
})

globalStyle(`${briteScope}${formControlLg}::file-selector-button`, {
	padding: '0.75rem 1.25rem',
	margin: '-0.75rem -1.25rem',
	WebkitMarginEnd: '1.25rem',
	marginInlineEnd: '1.25rem',
})

globalStyle(`${briteScope}${elTextarea}${formControl}`, {
	minHeight: 'calc(1.5em + 1rem + calc(2px * 2))',
})

globalStyle(`${briteScope}${elTextarea}${formControlSm}`, {
	minHeight: 'calc(1.5em + 0.5rem + calc(2px * 2))',
})

globalStyle(`${briteScope}${elTextarea}${formControlLg}`, {
	minHeight: 'calc(1.5em + 1.5rem + calc(2px * 2))',
})

globalStyle(`${briteScope}${formControlColor}${formControlSm}`, {
	height: 'calc(1.5em + 0.5rem + calc(2px * 2))',
})

globalStyle(`${briteScope}${formControlColor}${formControlLg}`, {
	height: 'calc(1.5em + 1.5rem + calc(2px * 2))',
})

globalStyle(`${briteScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23343a40\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
	display: 'block',
	width: '100%',
	padding: '0.5rem 3rem 0.5rem 1rem',
	fontSize: '0.875rem',
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
	border: `2px solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${briteScope}${formSelect}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${briteScope}${formSelect}:focus`, {
	borderColor: '#000',
	outline: '0',
	boxShadow: '0 0 0 1px #000',
})

globalStyle(`${briteScope}${formSelect}[multiple]`, {
	paddingRight: '1rem',
	backgroundImage: 'none',
})

globalStyle(`${briteScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: '1rem',
	backgroundImage: 'none',
})

globalStyle(`${briteScope}${formSelect}:disabled`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${briteScope}${formSelect}:-moz-focusring`, {
	color: 'transparent',
	textShadow: `0 0 0 ${varBsBodyColor}`,
})

globalStyle(`${briteScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.75rem',
	fontSize: '0.765625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${briteScope}${formSelectLg}`, {
	paddingTop: '0.75rem',
	paddingBottom: '0.75rem',
	paddingLeft: '1.25rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\'%3e%3cpath fill=\'none\' stroke=\'%23dee2e6\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m2 5 6 6 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${briteScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.3125rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${briteScope}${formCheck} ${briteScope}${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${briteScope}${formCheckReverse} ${briteScope}${formCheckInput}`, {
	float: 'right',
	marginRight: '-1.5em',
	marginLeft: '0',
})

globalStyle(`${briteScope}${formCheckInput}`, {
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

globalStyle(`${briteScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: '0.25em',
})

globalStyle(`${briteScope}${formCheckInput}[type=radio]`, {
	borderRadius: '50%',
})

globalStyle(`${briteScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${briteScope}${formCheckInput}:focus`, {
	borderColor: '#000',
	outline: '0',
	boxShadow: '0 0 0 1px #000',
})

globalStyle(`${briteScope}${formCheckInput}:checked`, {
	backgroundColor: '#a2e436',
	borderColor: '#000',
})

globalStyle(`${briteScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23000\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'m6 10 3 3 6-6\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${briteScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'2\' fill=\'%23000\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${briteScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23000\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'3\' d=\'M6 10h8\'/%3e%3c/svg%3e")',
	},
	backgroundColor: '#a2e436',
	borderColor: '#a2e436',
})

globalStyle(`${briteScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: '0.5',
})

globalStyle(`${briteScope}${formCheckInput}[disabled] ~ ${briteScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${briteScope}${formCheckInput}:disabled ~ ${briteScope}${formCheckLabel}`, {
	cursor: 'default',
	opacity: '0.5',
})

globalStyle(`${briteScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${briteScope}${formSwitch} ${briteScope}${formCheckInput}`, {
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

globalStyle(`${briteScope}${formSwitch} ${briteScope}${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${briteScope}${formSwitch} ${briteScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23000\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${briteScope}${formSwitch} ${briteScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'%23000\'/%3e%3c/svg%3e")',
	},
	backgroundPosition: 'right center',
})

globalStyle(`${briteScope}${formSwitch}${formCheckReverse} ${briteScope}${formCheckInput}`, {
	marginRight: '-2.5em',
	marginLeft: '0',
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${formSwitch} ${briteScope}${formCheckInput}:not(:checked):not(:focus)`, {
	vars: {
		[varBsFormSwitchBg]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3e%3ccircle r=\'3\' fill=\'rgba%28255, 255, 255, 0.25%29\'/%3e%3c/svg%3e")',
	},
})

globalStyle(`${briteScope}${formRange}`, {
	width: '100%',
	height: 'calc(1.2rem + 2px)',
	padding: '0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${briteScope}${formRange}:focus`, {
	outline: '0',
})

globalStyle(`${briteScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 1px #000',
})

globalStyle(`${briteScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 1px #000',
})

globalStyle(`${briteScope}${formRange}::-moz-focus-outer`, {
	border: '0',
})

globalStyle(`${briteScope}${formRange}::-webkit-slider-thumb`, {
	width: '1.2rem',
	height: '1.2rem',
	marginTop: '-0.3rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#a2e436',
	border: '2px solid #000',
	borderRadius: '1rem',
	WebkitTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${briteScope}${formRange}::-webkit-slider-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			WebkitTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${briteScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#e3f7c3',
})

globalStyle(`${briteScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.6rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${briteScope}${formRange}::-moz-range-thumb`, {
	width: '1.2rem',
	height: '1.2rem',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#a2e436',
	border: '2px solid #000',
	borderRadius: '1rem',
	MozTransition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${briteScope}${formRange}::-moz-range-thumb`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			MozTransition: 'none',
			transition: 'none',
		},
	},
})

globalStyle(`${briteScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: '#e3f7c3',
})

globalStyle(`${briteScope}${formRange}::-moz-range-track`, {
	width: '100%',
	height: '0.6rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${briteScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${briteScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: '#e9ecef',
})

globalStyle(`${briteScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: '#e9ecef',
})

globalStyle(`${briteScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}`, {
	height: 'calc(3.5rem + calc(2px * 2))',
	minHeight: 'calc(3.5rem + calc(2px * 2))',
	lineHeight: '1.25',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formSelect}`, {
	height: 'calc(3.5rem + calc(2px * 2))',
	minHeight: 'calc(3.5rem + calc(2px * 2))',
	lineHeight: '1.25',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${elLabel}`, {
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
	border: '2px solid transparent',
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${elLabel}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}`, {
	padding: '1rem 1rem',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}::-moz-placeholder`, {
	color: 'transparent',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formSelect}`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
	paddingLeft: '1rem',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:not(:-moz-placeholder-shown) ~ ${briteScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:focus ~ ${briteScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:not(:placeholder-shown) ~ ${briteScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formSelect} ~ ${briteScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:-webkit-autofill ~ ${briteScope}${elLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${elTextarea}:not(:-moz-placeholder-shown) ~ ${briteScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${elTextarea}:focus ~ ${briteScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${elTextarea}:not(:placeholder-shown) ~ ${briteScope}${elLabel}::after`, {
	position: 'absolute',
	inset: '1rem 0.5rem',
	zIndex: '-1',
	height: '1.5em',
	content: '""',
	backgroundColor: varBsBodyBg,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${elTextarea}:disabled ~ ${briteScope}${elLabel}::after`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${briteScope}${formFloating} > :disabled ~ ${briteScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:disabled ~ ${briteScope}${elLabel}`, {
	color: '#868e96',
})

globalStyle(`${briteScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formSelect}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: '0',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formControl}:focus`, {
	zIndex: '5',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formSelect}:focus`, {
	zIndex: '5',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formFloating}:focus-within`, {
	zIndex: '5',
})

globalStyle(`${briteScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.5rem 1rem',
	fontSize: '0.875rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: varBsTertiaryBg,
	border: `2px solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${briteScope}${inputGroupLg} > ${briteScope}${formControl}`, {
	padding: '0.75rem 1.25rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${briteScope}${inputGroupLg} > ${briteScope}${formSelect}`, {
	padding: '0.75rem 1.25rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${briteScope}${inputGroupLg} > ${briteScope}${inputGroupText}`, {
	padding: '0.75rem 1.25rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${briteScope}${inputGroupSm} > ${briteScope}${formControl}`, {
	padding: '0.25rem 0.75rem',
	fontSize: '0.765625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${briteScope}${inputGroupSm} > ${briteScope}${formSelect}`, {
	padding: '0.25rem 0.75rem',
	fontSize: '0.765625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${briteScope}${inputGroupSm} > ${briteScope}${inputGroupText}`, {
	padding: '0.25rem 0.75rem',
	fontSize: '0.765625rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${briteScope}${inputGroupLg} > ${briteScope}${formSelect}`, {
	paddingRight: '4rem',
})

globalStyle(`${briteScope}${inputGroupSm} > ${briteScope}${formSelect}`, {
	paddingRight: '4rem',
})

globalStyle(`${briteScope}${inputGroup}:not(${hasValidation}) > ${briteScope}:not(:last-child):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${briteScope}${inputGroup}:not(${hasValidation}) > ${briteScope}${formFloating}:not(:last-child) > ${briteScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${briteScope}${inputGroup}:not(${hasValidation}) > ${briteScope}${formFloating}:not(:last-child) > ${briteScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${briteScope}${inputGroup}${hasValidation} > ${briteScope}:nth-last-child(n+3):not(${dropdownToggle}):not(${dropdownMenu}):not(${formFloating})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${briteScope}${inputGroup}${hasValidation} > ${briteScope}${formFloating}:nth-last-child(n+3) > ${briteScope}${formControl}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${briteScope}${inputGroup}${hasValidation} > ${briteScope}${formFloating}:nth-last-child(n+3) > ${briteScope}${formSelect}`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}:not(:first-child):not(${dropdownMenu}):not(${validTooltip}):not(${validFeedback}):not(${invalidTooltip}):not(${invalidFeedback})`, {
	marginLeft: 'calc(-1 * 2px)',
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formFloating}:not(:first-child) > ${briteScope}${formControl}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formFloating}:not(:first-child) > ${briteScope}${formSelect}`, {
	borderTopLeftRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${briteScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${briteScope}${validTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.25rem 0.5rem',
	marginTop: '0.1rem',
	fontSize: '0.765625rem',
	color: '#fff',
	backgroundColor: varBsSuccess,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${briteScope}${wasValidated} :valid ~ ${briteScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${briteScope}${wasValidated} :valid ~ ${briteScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${briteScope}${isValid} ~ ${briteScope}${validFeedback}`, {
	display: 'block',
})

globalStyle(`${briteScope}${isValid} ~ ${briteScope}${validTooltip}`, {
	display: 'block',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2368d391\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2368d391\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 1px rgba(${varBsSuccessRgb}, 1)`,
})

globalStyle(`${briteScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 1px rgba(${varBsSuccessRgb}, 1)`,
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${elTextarea}${formControl}:valid`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${briteScope}${elTextarea}${formControl}${isValid}`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${briteScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2368d391\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2368d391\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2368d391\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3e%3cpath fill=\'%2368d391\' d=\'M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 1px rgba(${varBsSuccessRgb}, 1)`,
})

globalStyle(`${briteScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 1px rgba(${varBsSuccessRgb}, 1)`,
})

globalStyle(`${briteScope}${formControlColor}${isValid}`, {
	width: 'calc(3rem + calc(1.5em + 1rem))',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${briteScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${briteScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:valid:focus`, {
	boxShadow: `0 0 0 1px rgba(${varBsSuccessRgb}, 1)`,
})

globalStyle(`${briteScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 1px rgba(${varBsSuccessRgb}, 1)`,
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:valid ~ ${briteScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${briteScope}${formCheckInput}${isValid} ~ ${briteScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${briteScope}${formCheckInline} ${briteScope}${formCheckInput} ~ ${briteScope}${validFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${inputGroup} > ${briteScope}${formControl}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formControl}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${inputGroup} > ${briteScope}${formSelect}:not(:focus):valid`, {
	zIndex: '3',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formSelect}:not(:focus)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${inputGroup} > ${briteScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: '3',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formFloating}:not(:focus-within)${isValid}`, {
	zIndex: '3',
})

globalStyle(`${briteScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${briteScope}${invalidTooltip}`, {
	position: 'absolute',
	top: '100%',
	zIndex: '5',
	display: 'none',
	maxWidth: '100%',
	padding: '0.25rem 0.5rem',
	marginTop: '0.1rem',
	fontSize: '0.765625rem',
	color: '#fff',
	backgroundColor: varBsDanger,
	borderRadius: varBsBorderRadius,
})

globalStyle(`${briteScope}${wasValidated} :invalid ~ ${briteScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${briteScope}${wasValidated} :invalid ~ ${briteScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${briteScope}${isInvalid} ~ ${briteScope}${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${briteScope}${isInvalid} ~ ${briteScope}${invalidTooltip}`, {
	display: 'block',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f56565\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f56565\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f56565\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f56565\' stroke=\'none\'/%3e%3c/svg%3e")',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.25rem) center',
	backgroundSize: 'calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 1px rgba(${varBsDangerRgb}, 1)`,
})

globalStyle(`${briteScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 1px rgba(${varBsDangerRgb}, 1)`,
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${elTextarea}${formControl}:invalid`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${briteScope}${elTextarea}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 1rem)',
	backgroundPosition: 'top calc(0.375em + 0.25rem) right calc(0.375em + 0.25rem)',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${briteScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f56565\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f56565\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f56565\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f56565\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f56565\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f56565\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 12 12\' width=\'12\' height=\'12\' fill=\'none\' stroke=\'%23f56565\'%3e%3ccircle cx=\'6\' cy=\'6\' r=\'4.5\'/%3e%3cpath stroke-linejoin=\'round\' d=\'M5.8 3.6h.4L6 6.5z\'/%3e%3ccircle cx=\'6\' cy=\'8.2\' r=\'.6\' fill=\'%23f56565\' stroke=\'none\'/%3e%3c/svg%3e")',
	},
	paddingRight: '5.5rem',
	backgroundPosition: 'right 1rem center, center right 3rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 1px rgba(${varBsDangerRgb}, 1)`,
})

globalStyle(`${briteScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 1px rgba(${varBsDangerRgb}, 1)`,
})

globalStyle(`${briteScope}${formControlColor}${isInvalid}`, {
	width: 'calc(3rem + calc(1.5em + 1rem))',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${briteScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${briteScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:invalid:focus`, {
	boxShadow: `0 0 0 1px rgba(${varBsDangerRgb}, 1)`,
})

globalStyle(`${briteScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 1px rgba(${varBsDangerRgb}, 1)`,
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:invalid ~ ${briteScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${briteScope}${formCheckInput}${isInvalid} ~ ${briteScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${briteScope}${formCheckInline} ${briteScope}${formCheckInput} ~ ${briteScope}${invalidFeedback}`, {
	marginLeft: '0.5em',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${inputGroup} > ${briteScope}${formControl}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formControl}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${inputGroup} > ${briteScope}${formSelect}:not(:focus):invalid`, {
	zIndex: '4',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formSelect}:not(:focus)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${briteScope}${wasValidated} ${briteScope}${inputGroup} > ${briteScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: '4',
})

globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formFloating}:not(:focus-within)${isInvalid}`, {
	zIndex: '4',
})

globalStyle(`${briteScope}${btnToolbar} ${briteScope}${inputGroup}`, {
	width: 'auto',
})

globalStyle(`${briteScope}${formRange}:not([disabled])::-moz-range-progress`, {
	height: '0.6rem',
	backgroundColor: '#a2e436',
	borderRadius: '6px 0 0 6px',
})

globalStyle(`${briteScope}${formRange}:not([disabled])::-ms-fill-lower`, {
	height: '0.6rem',
	backgroundColor: '#a2e436',
	borderRadius: '6px 0 0 6px',
})

globalStyle(`${briteScope}${formRange}::-webkit-slider-runnable-track`, {
	border: '2px solid #000',
})

globalStyle(`${briteScope}${formRange}::-moz-range-track`, {
	border: '2px solid #000',
})

globalStyle(`${briteScope}${formRange}::-webkit-slider-thumb`, {
	marginTop: '-0.4rem',
})

globalStyle(`${briteScope}${formRange}::-moz-range-thumb`, {
	marginTop: '-0.4rem',
})

globalStyle(`${briteScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: 'none',
})

globalStyle(`${briteScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: 'none',
})

globalStyle(`${briteScope}${legendClear}`, {
	clear: 'left',
})

globalStyle(`${briteScope}${formSwitch}`, {
	isolation: 'isolate',
})
