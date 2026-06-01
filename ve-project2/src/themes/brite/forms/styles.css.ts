import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsGutterX,
	varBsGutterY,
	varBsSecondaryBg,
	varBsSecondaryColor,
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
import {
	fieldset,
	form,
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
	g3,
	hasValidation,
	inputGroup,
	inputGroupText,
	invalidFeedback,
	isInvalid,
	isValid,
	mb3,
	row,
	validFeedback,
	wasValidated,
} from '../../../theme-contract/forms/contract.css'
import {
	dropdown,
	dropdownToggle,
} from '../../../theme-contract/ui/dropdowns/contract.css'
import {
	flexWrap,
} from '../../../theme-contract/ui/modal/contract.css'
import { briteScope } from '../scope.css'

// AUTO-GENERATED family styles for bootstrap/forms
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .form-check { display: block; min-height: 1.5rem; padding-left: 1.5em; margin-bottom: 0.125rem; }
globalStyle(`${briteScope}${formCheck}`, {
	display: "block",
	minHeight: "1.3125rem",
	paddingLeft: "1.5em",
	marginBottom: "0.125rem",
})

// SOURCE CSS:
// .form-check .form-check-input { float: left; margin-left: -1.5em; }
globalStyle(`${briteScope}${formCheck} ${briteScope}${formCheckInput}`, {
	float: "left",
	marginLeft: "-1.5em",
})

// SOURCE CSS:
// .form-check-input { --bs-form-check-bg: var(--bs-body-bg); flex-shrink: 0; width: 1em; height: 1em; margin-top: 0.25em; vertical-align: top; -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-form-check-bg); background-image: var(--bs-form-check-bg-image); background-repeat: no-repeat; background-position: center; background-size: contain; border: var(--bs-border-width) solid var(--bs-border-color); -webkit-print-color-adjust: exact; color-adjust: exact; print-color-adjust: exact; }
globalStyle(`${briteScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: varBsBodyBg,
	},
	flexShrink: 0,
	width: "1em",
	height: "1em",
	marginTop: "0.25em",
	verticalAlign: "top",
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: varBsFormCheckBg,
	backgroundImage: varBsFormCheckBgImage,
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	backgroundSize: "contain",
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	WebkitPrintColorAdjust: "exact",
	colorAdjust: "exact",
	printColorAdjust: "exact",
})

// SOURCE CSS:
// .form-check-input[type="checkbox"] { border-radius: 0.25em; }
globalStyle(`${briteScope}${formCheckInput}[type="checkbox"]`, {
	borderRadius: "0.25em",
})

// SOURCE CSS:
// .form-check-input:active { filter: brightness(90%); }
globalStyle(`${briteScope}${formCheckInput}:active`, {
	filter: "brightness(90%)",
})

// SOURCE CSS:
// .form-check-input:focus { border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${briteScope}${formCheckInput}:focus`, {
	borderColor: "#000",
	outline: 0,
	boxShadow: "0 0 0 1px #000",
})

// SOURCE CSS:
// .form-check-input:checked { background-color: #0d6efd; border-color: #0d6efd; }
globalStyle(`${briteScope}${formCheckInput}:checked`, {
	backgroundColor: "#a2e436",
	borderColor: "#000",
})

// SOURCE CSS:
// .form-check-input:checked[type="checkbox"] { --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e"); }
globalStyle(`${briteScope}${formCheckInput}:checked[type="checkbox"]`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .form-check-input[type="checkbox"]:indeterminate { background-color: rgb(13, 110, 253); border-color: rgb(13, 110, 253); --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e"); }
globalStyle(`${briteScope}${formCheckInput}[type="checkbox"]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")",
	},
	backgroundColor: "rgb(162, 228, 54)",
	borderColor: "rgb(162, 228, 54)",
})

// SOURCE CSS:
// .form-check-input:disabled { pointer-events: none; filter: none; opacity: 0.5; }
globalStyle(`${briteScope}${formCheckInput}:disabled`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.5,
})

// SOURCE CSS:
// .form-check-input[disabled] ~ .form-check-label { cursor: default; opacity: 0.5; }
globalStyle(`${briteScope}${formCheckInput}[disabled] ~ ${briteScope}${formCheckLabel}`, {
	cursor: "default",
	opacity: 0.5,
})

// SOURCE CSS:
// .form-check-input:disabled ~ .form-check-label { cursor: default; opacity: 0.5; }
globalStyle(`${briteScope}${formCheckInput}:disabled ~ ${briteScope}${formCheckLabel}`, {
	cursor: "default",
	opacity: 0.5,
})

// SOURCE CSS:
// .mb-3 { margin-bottom: 1rem !important; }
globalStyle(`${briteScope}${mb3}`, {
	marginBottom: "1rem !important",
})

// SOURCE CSS:
// fieldset { min-width: 0; padding: 0; margin: 0; border: 0; }
globalStyle(`${briteScope}${fieldset}`, {
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
})

// SOURCE CSS:
// .form-label { margin-bottom: 0.5rem; }
globalStyle(`${briteScope}${formLabel}`, {
	marginBottom: "0.5rem",
	display: "inline-block",
	fontWeight: 500,
})

// SOURCE CSS:
// .form-control { display: block; width: 100%; padding: 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-body-bg); background-clip: padding-box; border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${briteScope}${formControl}`, {
	display: "block",
	width: "100%",
	padding: "0.5rem 1rem",
	fontSize: "0.875rem",
	fontWeight: 400,
	lineHeight: 1.5,
	fontFamily: "inherit",
	margin: 0,
	color: varBsBodyColor,
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: varBsBodyBg,
	backgroundClip: "padding-box",
	border: `2px solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control:focus { color: var(--bs-body-color); background-color: var(--bs-body-bg); border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${briteScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: "#000",
	outline: 0,
	boxShadow: "0 0 0 1px #000",
})

// SOURCE CSS:
// .form-control::-webkit-date-and-time-value { min-width: 85px; height: 1.5em; margin: 0; }
globalStyle(`${briteScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: "85px",
	height: "1.5em",
	margin: 0,
})

// SOURCE CSS:
// .form-control::-webkit-datetime-edit { display: block; padding: 0; }
globalStyle(`${briteScope}${formControl}::-webkit-datetime-edit`, {
	display: "block",
	padding: 0,
})

// SOURCE CSS:
// .form-control::placeholder { color: var(--bs-secondary-color); opacity: 1; }
globalStyle(`${briteScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: 1,
})

// SOURCE CSS:
// .form-control:disabled { background-color: var(--bs-secondary-bg); opacity: 1; }
globalStyle(`${briteScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: 1,
})

// SOURCE CSS:
// .form-control::-webkit-file-upload-button { padding: 0.375rem 0.75rem; margin: -0.375rem -0.75rem; -webkit-margin-end: 0.75rem; margin-inline-end: 0.75rem; color: var(--bs-body-color); background-color: var(--bs-tertiary-bg); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0; border-inline-end-width: var(--bs-border-width); border-radius: 0; -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${briteScope}${formControl}::-webkit-file-upload-button`, {
	padding: "0.5rem 1rem",
	margin: "-0.5rem -1rem",
	WebkitMarginEnd: "1rem",
	marginInlineEnd: "1rem",
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: "none",
	borderColor: "inherit",
	borderStyle: "solid",
	borderWidth: 0,
	borderInlineEndWidth: "2px",
	borderRadius: 0,
	WebkitTransition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control::file-selector-button { padding: 0.375rem 0.75rem; margin: -0.375rem -0.75rem; -webkit-margin-end: 0.75rem; margin-inline-end: 0.75rem; color: var(--bs-body-color); background-color: var(--bs-tertiary-bg); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0; border-inline-end-width: var(--bs-border-width); border-radius: 0; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${briteScope}${formControl}::file-selector-button`, {
	padding: "0.5rem 1rem",
	margin: "-0.5rem -1rem",
	WebkitMarginEnd: "1rem",
	marginInlineEnd: "1rem",
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: "none",
	borderColor: "inherit",
	borderStyle: "solid",
	borderWidth: 0,
	borderInlineEndWidth: "2px",
	borderRadius: 0,
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button { background-color: var(--bs-secondary-bg); }
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${briteScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::file-selector-button { background-color: var(--bs-secondary-bg); }
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${briteScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// .form-select { --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"); display: block; width: 100%; padding: 0.375rem 2.25rem 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-body-bg); background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none); background-repeat: no-repeat; background-position: right 0.75rem center; background-size: 16px 12px; border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${briteScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")",
	},
	display: "block",
	width: "100%",
	padding: "0.5rem 3rem 0.5rem 1rem",
	fontSize: "0.875rem",
	fontWeight: 400,
	lineHeight: 1.5,
	color: varBsBodyColor,
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: varBsBodyBg,
	backgroundImage: `${varBsFormSelectBgImg} , ${varBsFormSelectBgIcon}`,
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right 1rem center",
	backgroundSize: "16px 12px",
	border: `2px solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-select:focus { border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${briteScope}${formSelect}:focus`, {
	borderColor: "#000",
	outline: 0,
	boxShadow: "0 0 0 1px #000",
})

// SOURCE CSS:
// .form-select:disabled { background-color: var(--bs-secondary-bg); }
globalStyle(`${briteScope}${formSelect}:disabled`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// .form-control[type="file"] { overflow: hidden; }
globalStyle(`${briteScope}${formControl}[type="file"]`, {
	overflow: "hidden",
})

// SOURCE CSS:
// .form-control[type="file"]:not(:disabled):not([readonly]) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${briteScope}${formControl}[type="file"]:not(:disabled):not([readonly])`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .form-range { width: 100%; height: 1.5rem; padding: 0; -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: transparent; }
globalStyle(`${briteScope}${formRange}`, {
	width: "100%",
	height: `calc(1.2rem + 2px)`,
	padding: 0,
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: "transparent",
})

// SOURCE CSS:
// .form-range:focus { outline: 0; }
globalStyle(`${briteScope}${formRange}:focus`, {
	outline: 0,
})

// SOURCE CSS:
// .form-range:focus::-webkit-slider-thumb { box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${briteScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: "none",
})

// SOURCE CSS:
// .form-range::-webkit-slider-thumb { width: 1rem; height: 1rem; margin-top: -0.25rem; -webkit-appearance: none; appearance: none; background-color: #0d6efd; border: 0; border-radius: 1rem; -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${briteScope}${formRange}::-webkit-slider-thumb`, {
	width: "1.2rem",
	height: "1.2rem",
	marginTop: "-0.4rem",
	WebkitAppearance: "none",
	appearance: "none",
	backgroundColor: "#a2e436",
	border: "2px solid #000",
	borderRadius: "1rem",
	WebkitTransition: "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
	transition: "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-range::-webkit-slider-thumb:active { background-color: #b6d4fe; }
globalStyle(`${briteScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: "#e3f7c3",
})

// SOURCE CSS:
// .form-range::-webkit-slider-runnable-track { width: 100%; height: 0.5rem; color: transparent; cursor: pointer; background-color: var(--bs-secondary-bg); border-color: transparent; border-radius: 1rem; }
globalStyle(`${briteScope}${formRange}::-webkit-slider-runnable-track`, {
	width: "100%",
	height: "0.6rem",
	color: "transparent",
	cursor: "pointer",
	backgroundColor: varBsSecondaryBg,
	borderColor: "transparent",
	borderRadius: "1rem",
	border: "2px solid #000",
})

// SOURCE CSS:
// .form-range:disabled { pointer-events: none; }
globalStyle(`${briteScope}${formRange}:disabled`, {
	pointerEvents: "none",
})

// SOURCE CSS:
// .form-range:disabled::-webkit-slider-thumb { background-color: var(--bs-secondary-color); }
globalStyle(`${briteScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: "#e9ecef",
})

// SOURCE CSS:
// .form-check-input[type="radio"] { border-radius: 50%; }
globalStyle(`${briteScope}${formCheckInput}[type="radio"]`, {
	borderRadius: "50%",
})

// SOURCE CSS:
// .form-check-input:checked[type="radio"] { --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e"); }
globalStyle(`${briteScope}${formCheckInput}:checked[type="radio"]`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23000'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .form-switch { padding-left: 2.5em; }
globalStyle(`${briteScope}${formSwitch}`, {
	paddingLeft: "2.5em",
})

// SOURCE CSS:
// .form-switch .form-check-input { --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e"); width: 2em; margin-left: -2.5em; background-image: var(--bs-form-switch-bg); background-position: left center; border-radius: 2em; transition: background-position 0.15s ease-in-out; }
globalStyle(`${briteScope}${formSwitch} ${briteScope}${formCheckInput}`, {
	vars: {
		[varBsFormSwitchBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\")",
	},
	width: "2em",
	marginLeft: "-2.5em",
	backgroundImage: varBsFormSwitchBg,
	backgroundPosition: "left center",
	borderRadius: "2em",
	transition: "background-position 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-switch .form-check-input:focus { --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e"); }
globalStyle(`${briteScope}${formSwitch} ${briteScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23000'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .form-switch .form-check-input:checked { background-position: right center; --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e"); }
globalStyle(`${briteScope}${formSwitch} ${briteScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23000'/%3e%3c/svg%3e\")",
	},
	backgroundPosition: "right center",
})

// SOURCE CSS:
// .form-floating { position: relative; }
globalStyle(`${briteScope}${formFloating}`, {
	position: "relative",
})

// SOURCE CSS:
// .form-floating > .form-control { height: calc(3.5rem + calc(var(--bs-border-width) * 2)); min-height: calc(3.5rem + calc(var(--bs-border-width) * 2)); line-height: 1.25; padding: 1rem 0.75rem; }
globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}`, {
	height: `calc(3.5rem + calc(2px * 2))`,
	minHeight: `calc(3.5rem + calc(2px * 2))`,
	lineHeight: 1.25,
	padding: "1rem 1rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext { height: calc(3.5rem + calc(var(--bs-border-width) * 2)); min-height: calc(3.5rem + calc(var(--bs-border-width) * 2)); line-height: 1.25; padding: 1rem 0.75rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${briteScope}${formFloating} > .form-control-plaintext`, {
	height: `calc(3.5rem + calc(2px * 2))`,
	minHeight: `calc(3.5rem + calc(2px * 2))`,
	lineHeight: 1.25,
	padding: "1rem 1rem",
})

// SOURCE CSS:
// .form-floating > .form-select { height: calc(3.5rem + calc(var(--bs-border-width) * 2)); min-height: calc(3.5rem + calc(var(--bs-border-width) * 2)); line-height: 1.25; }
globalStyle(`${briteScope}${formFloating} > ${briteScope}${formSelect}`, {
	height: `calc(3.5rem + calc(2px * 2))`,
	minHeight: `calc(3.5rem + calc(2px * 2))`,
	lineHeight: 1.25,
})

// SOURCE CSS:
// .form-floating > label { position: absolute; top: 0; left: 0; z-index: 2; max-width: 100%; height: 100%; padding: 1rem 0.75rem; overflow: hidden; color: rgba(var(--bs-body-color-rgb), 0.65); text-align: start; text-overflow: ellipsis; white-space: nowrap; pointer-events: none; border: var(--bs-border-width) solid transparent; transform-origin: 0 0; transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out; }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${briteScope}${formFloating} > label`, {
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: 2,
	maxWidth: "100%",
	height: "100%",
	padding: "1rem 1rem",
	overflow: "hidden",
	color: `rgba(${varBsBodyColorRgb}, 0.65)`,
	textAlign: "start",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	pointerEvents: "none",
	border: "2px solid transparent",
	transformOrigin: "0 0",
	transition: "opacity 0.1s ease-in-out, transform 0.1s ease-in-out",
})

// SOURCE CSS:
// .form-floating > .form-control::placeholder { color: transparent; }
globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}::placeholder`, {
	color: "transparent",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext::placeholder { color: transparent; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${briteScope}${formFloating} > .form-control-plaintext::placeholder`, {
	color: "transparent",
})

// SOURCE CSS:
// .form-floating > .form-control:focus { padding-top: 1.625rem; padding-bottom: 0.625rem; }
globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:focus`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control:not(:placeholder-shown) { padding-top: 1.625rem; padding-bottom: 0.625rem; }
globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext:focus { padding-top: 1.625rem; padding-bottom: 0.625rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${briteScope}${formFloating} > .form-control-plaintext:focus`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext:not(:placeholder-shown) { padding-top: 1.625rem; padding-bottom: 0.625rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${briteScope}${formFloating} > .form-control-plaintext:not(:placeholder-shown)`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control:-webkit-autofill { padding-top: 1.625rem; padding-bottom: 0.625rem; }
globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:-webkit-autofill`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext:-webkit-autofill { padding-top: 1.625rem; padding-bottom: 0.625rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${briteScope}${formFloating} > .form-control-plaintext:-webkit-autofill`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control:focus ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:focus ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > .form-control:not(:placeholder-shown) ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:not(:placeholder-shown) ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${briteScope}${formFloating} > .form-control-plaintext ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > .form-select ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${briteScope}${formFloating} > ${briteScope}${formSelect} ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > .form-control:-webkit-autofill ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:-webkit-autofill ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > :disabled ~ label { color: #6c757d; }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${briteScope}${formFloating} > :disabled ~ label`, {
	color: "#868e96",
})

// SOURCE CSS:
// .form-floating > .form-control:disabled ~ label { color: #6c757d; }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${briteScope}${formFloating} > ${briteScope}${formControl}:disabled ~ label`, {
	color: "#868e96",
})

// SOURCE CSS:
// .input-group { position: relative; display: flex; flex-wrap: wrap; align-items: stretch; width: 100%; }
globalStyle(`${briteScope}${inputGroup}`, {
	position: "relative",
	display: "flex",
	flexWrap: "wrap",
	alignItems: "stretch",
	width: "100%",
})

// SOURCE CSS:
// .input-group > .form-control { position: relative; flex: 1 1 auto; width: 1%; min-width: 0; }
globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formControl}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "1%",
	minWidth: 0,
})

// SOURCE CSS:
// .input-group > .form-select { position: relative; flex: 1 1 auto; width: 1%; min-width: 0; }
globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formSelect}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "1%",
	minWidth: 0,
})

// SOURCE CSS:
// .input-group > .form-floating { position: relative; flex: 1 1 auto; width: 1%; min-width: 0; }
globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formFloating}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "1%",
	minWidth: 0,
})

// SOURCE CSS:
// .input-group > .form-control:focus { z-index: 5; }
globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formControl}:focus`, {
	zIndex: 5,
})

// SOURCE CSS:
// .input-group > .form-select:focus { z-index: 5; }
globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formSelect}:focus`, {
	zIndex: 5,
})

// SOURCE CSS:
// .input-group > .form-floating:focus-within { z-index: 5; }
globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formFloating}:focus-within`, {
	zIndex: 5,
})

// SOURCE CSS:
// .input-group-text { display: flex; align-items: center; padding: 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); text-align: center; white-space: nowrap; background-color: var(--bs-tertiary-bg); border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); }
globalStyle(`${briteScope}${inputGroupText}`, {
	display: "flex",
	alignItems: "center",
	padding: "0.5rem 1rem",
	fontSize: "0.875rem",
	fontWeight: 400,
	lineHeight: 1.5,
	color: varBsBodyColor,
	textAlign: "center",
	whiteSpace: "nowrap",
	backgroundColor: varBsTertiaryBg,
	border: `2px solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${briteScope}${inputGroup}:not(${briteScope}${hasValidation}) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${briteScope}${inputGroup}:not(${briteScope}${hasValidation}) > ${briteScope}${dropdownToggle}:nth-last-child(n+3)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${briteScope}${inputGroup}:not(${briteScope}${hasValidation}) > ${briteScope}${formFloating}:not(:last-child) > ${briteScope}${formControl}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${briteScope}${inputGroup}:not(${briteScope}${hasValidation}) > ${briteScope}${formFloating}:not(:last-child) > ${briteScope}${formSelect}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) { margin-left: calc(-1 * var(--bs-border-width)); border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${briteScope}${inputGroup} > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback)`, {
	marginLeft: `calc(-1 * 2px)`,
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .form-text { margin-top: 0.25rem; font-size: 0.875em; color: var(--bs-secondary-color); }
globalStyle(`${briteScope}${formText}`, {
	marginTop: "0.25rem",
	fontSize: "0.875em",
	color: varBsSecondaryColor,
})

// SOURCE CSS:
// .form-control-lg { min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2)); padding: 0.5rem 1rem; font-size: 1.25rem; border-radius: var(--bs-border-radius-lg); }
globalStyle(`${briteScope}${formControl}${formControlLg}`, {
	minHeight: `calc(1.5em + 1.5rem + calc(2px * 2))`,
	padding: "0.75rem 1.25rem",
	fontSize: "0.875rem",
	borderRadius: varBsBorderRadiusLg,
})

// SOURCE CSS:
// .form-control-lg::-webkit-file-upload-button { padding: 0.5rem 1rem; margin: -0.5rem -1rem; -webkit-margin-end: 1rem; margin-inline-end: 1rem; }
globalStyle(`${briteScope}${formControl}${formControlLg}::-webkit-file-upload-button`, {
	padding: "0.75rem 1.25rem",
	margin: "-0.75rem -1.25rem",
	WebkitMarginEnd: "1.25rem",
	marginInlineEnd: "1.25rem",
})

// SOURCE CSS:
// .form-control-lg::file-selector-button { padding: 0.5rem 1rem; margin: -0.5rem -1rem; -webkit-margin-end: 1rem; margin-inline-end: 1rem; }
globalStyle(`${briteScope}${formControl}${formControlLg}::file-selector-button`, {
	padding: "0.75rem 1.25rem",
	margin: "-0.75rem -1.25rem",
	WebkitMarginEnd: "1.25rem",
	marginInlineEnd: "1.25rem",
})

// SOURCE CSS:
// .form-select-lg { padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left: 1rem; font-size: 1.25rem; border-radius: var(--bs-border-radius-lg); }
globalStyle(`${briteScope}${formSelectLg}`, {
	paddingTop: "0.75rem",
	paddingBottom: "0.75rem",
	paddingLeft: "1.25rem",
	fontSize: "0.875rem",
	borderRadius: varBsBorderRadiusLg,
})

// SOURCE CSS:
// .form-control-sm { min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2)); padding: 0.25rem 0.5rem; font-size: 0.875rem; border-radius: var(--bs-border-radius-sm); }
globalStyle(`${briteScope}${formControl}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(2px * 2))`,
	padding: "0.25rem 0.75rem",
	fontSize: "0.765625rem",
	fontFamily: "inherit",
	margin: 0,
	borderRadius: varBsBorderRadiusSm,
})

// SOURCE CSS:
// .form-control-sm::-webkit-file-upload-button { padding: 0.25rem 0.5rem; margin: -0.25rem -0.5rem; -webkit-margin-end: 0.5rem; margin-inline-end: 0.5rem; }
globalStyle(`${briteScope}${formControl}${formControlSm}::-webkit-file-upload-button`, {
	padding: "0.25rem 0.75rem",
	margin: "-0.25rem -0.75rem",
	WebkitMarginEnd: "0.75rem",
	marginInlineEnd: "0.75rem",
})

// SOURCE CSS:
// .form-control-sm::file-selector-button { padding: 0.25rem 0.5rem; margin: -0.25rem -0.5rem; -webkit-margin-end: 0.5rem; margin-inline-end: 0.5rem; }
globalStyle(`${briteScope}${formControl}${formControlSm}::file-selector-button`, {
	padding: "0.25rem 0.75rem",
	margin: "-0.25rem -0.75rem",
	WebkitMarginEnd: "0.75rem",
	marginInlineEnd: "0.75rem",
})

// SOURCE CSS:
// .form-select-sm { padding-top: 0.25rem; padding-bottom: 0.25rem; padding-left: 0.5rem; font-size: 0.875rem; border-radius: var(--bs-border-radius-sm); }
globalStyle(`${briteScope}${formSelectSm}`, {
	paddingTop: "0.25rem",
	paddingBottom: "0.25rem",
	paddingLeft: "0.75rem",
	fontSize: "0.765625rem",
	fontFamily: "inherit",
	borderRadius: varBsBorderRadiusSm,
})

// SOURCE CSS:
// .row { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; display: flex; flex-wrap: wrap; margin-top: calc(-1 * var(--bs-gutter-y)); margin-right: calc(-0.5 * var(--bs-gutter-x)); margin-left: calc(-0.5 * var(--bs-gutter-x)); }
globalStyle(`${briteScope}${row}`, {
	vars: {
		[varBsGutterX]: "1.5rem",
		[varBsGutterY]: 0,
	},
	display: "flex",
	flexWrap: "wrap",
	marginTop: `calc(-1 * ${varBsGutterY})`,
	marginRight: `calc(-0.5 * ${varBsGutterX})`,
	marginLeft: `calc(-0.5 * ${varBsGutterX})`,
})

// SOURCE CSS:
// .row > * { flex-shrink: 0; width: 100%; max-width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-top: var(--bs-gutter-y); }
// [UNMAPPED_SELECTOR] element selector "*" — map to a contract class
globalStyle(`${briteScope}${row} > *`, {
	flexShrink: 0,
	width: "100%",
	maxWidth: "100%",
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

// SOURCE CSS:
// .g-3 { --bs-gutter-x: 1rem; --bs-gutter-y: 1rem; }
globalStyle(`${briteScope}${g3}`, {
	vars: {
		[varBsGutterX]: "1rem",
		[varBsGutterY]: "1rem",
	},
})

// SOURCE CSS:
// .invalid-feedback { display: none; width: 100%; margin-top: 0.25rem; font-size: 0.875em; color: var(--bs-form-invalid-color); }
globalStyle(`${briteScope}${invalidFeedback}`, {
	display: "none",
	width: "100%",
	marginTop: "0.25rem",
	fontSize: "0.875em",
	color: varBsFormInvalidColor,
})

// SOURCE CSS:
// .was-validated :invalid ~ .invalid-feedback { display: block; }
globalStyle(`${briteScope}${wasValidated} :invalid ~ ${briteScope}${invalidFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated :invalid ~ .invalid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".invalid-tooltip" — no contract mapping
globalStyle(`${briteScope}${wasValidated} :invalid ~ .invalid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .is-invalid ~ .invalid-feedback { display: block; }
globalStyle(`${briteScope}${isInvalid} ~ ${briteScope}${invalidFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .is-invalid ~ .invalid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".invalid-tooltip" — no contract mapping
globalStyle(`${briteScope}${isInvalid} ~ .invalid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .form-check-input.is-invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${briteScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid:checked { background-color: var(--bs-form-invalid-color); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

// SOURCE CSS:
// .form-check-input.is-invalid:checked { background-color: var(--bs-form-invalid-color); }
globalStyle(`${briteScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:invalid:focus`, {
	boxShadow: "0 0 0 1px rgba(var(--bs-danger-rgb), 1)",
})

// SOURCE CSS:
// .form-check-input.is-invalid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${briteScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: "0 0 0 1px rgba(var(--bs-danger-rgb), 1)",
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid ~ .form-check-label { color: var(--bs-form-invalid-color); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:invalid ~ ${briteScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

// SOURCE CSS:
// .form-check-input.is-invalid ~ .form-check-label { color: var(--bs-form-invalid-color); }
globalStyle(`${briteScope}${formCheckInput}${isInvalid} ~ ${briteScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

// SOURCE CSS:
// .was-validated .form-control:invalid { border-color: var(--bs-form-invalid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: `calc(1.5em + 1rem)`,
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23f56565'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23f56565' stroke='none'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.25rem) center",
	backgroundSize: `calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)`,
})

// SOURCE CSS:
// .form-control.is-invalid { border-color: var(--bs-form-invalid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${briteScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: `calc(1.5em + 1rem)`,
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23f56565'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23f56565' stroke='none'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.25rem) center",
	backgroundSize: `calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)`,
})

// SOURCE CSS:
// .was-validated .form-control:invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 1px rgba(var(--bs-danger-rgb), 1)",
})

// SOURCE CSS:
// .form-control.is-invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${briteScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 1px rgba(var(--bs-danger-rgb), 1)",
})

// SOURCE CSS:
// .was-validated .form-select:invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .form-select.is-invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${briteScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .was-validated .form-select:invalid:not([multiple]):not([size]) { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "[size]" — map to a contract class
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23f56565'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23f56565' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "5.5rem",
	backgroundPosition: "right 1rem center, center right 3rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)",
})

// SOURCE CSS:
// .was-validated .form-select:invalid:not([multiple])[size="1"] { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23f56565'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23f56565' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "5.5rem",
	backgroundPosition: "right 1rem center, center right 3rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)",
})

// SOURCE CSS:
// .form-select.is-invalid:not([multiple]):not([size]) { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "[size]" — map to a contract class
globalStyle(`${briteScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23f56565'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23f56565' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "5.5rem",
	backgroundPosition: "right 1rem center, center right 3rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)",
})

// SOURCE CSS:
// .form-select.is-invalid:not([multiple])[size="1"] { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
globalStyle(`${briteScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23f56565'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23f56565' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "5.5rem",
	backgroundPosition: "right 1rem center, center right 3rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)",
})

// SOURCE CSS:
// .was-validated .form-select:invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 1px rgba(var(--bs-danger-rgb), 1)",
})

// SOURCE CSS:
// .form-select.is-invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${briteScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 1px rgba(var(--bs-danger-rgb), 1)",
})

// SOURCE CSS:
// .was-validated .input-group > .form-control:not(:focus):invalid { z-index: 4; }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${inputGroup} > ${briteScope}${formControl}:not(:focus):invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .input-group > .form-control:not(:focus).is-invalid { z-index: 4; }
globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formControl}:not(:focus).is-invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .was-validated .input-group > .form-select:not(:focus):invalid { z-index: 4; }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${inputGroup} > ${briteScope}${formSelect}:not(:focus):invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .input-group > .form-select:not(:focus).is-invalid { z-index: 4; }
globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formSelect}:not(:focus).is-invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .was-validated .input-group > .form-floating:not(:focus-within):invalid { z-index: 4; }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${inputGroup} > ${briteScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .input-group > .form-floating:not(:focus-within).is-invalid { z-index: 4; }
globalStyle(`${briteScope}${inputGroup} > ${briteScope}${formFloating}:not(:focus-within).is-invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .valid-feedback { display: none; width: 100%; margin-top: 0.25rem; font-size: 0.875em; color: var(--bs-form-valid-color); }
globalStyle(`${briteScope}${validFeedback}`, {
	display: "none",
	width: "100%",
	marginTop: "0.25rem",
	fontSize: "0.875em",
	color: varBsFormValidColor,
})

// SOURCE CSS:
// .was-validated :valid ~ .valid-feedback { display: block; }
globalStyle(`${briteScope}${wasValidated} :valid ~ ${briteScope}${validFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated :valid ~ .valid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".valid-tooltip" — no contract mapping
globalStyle(`${briteScope}${wasValidated} :valid ~ .valid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .is-valid ~ .valid-feedback { display: block; }
globalStyle(`${briteScope}${isValid} ~ ${briteScope}${validFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .is-valid ~ .valid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".valid-tooltip" — no contract mapping
globalStyle(`${briteScope}${isValid} ~ .valid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated .form-check-input:valid { border-color: var(--bs-form-valid-border-color); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

// SOURCE CSS:
// .form-check-input.is-valid { border-color: var(--bs-form-valid-border-color); }
globalStyle(`${briteScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:valid:checked { background-color: var(--bs-form-valid-color); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

// SOURCE CSS:
// .form-check-input.is-valid:checked { background-color: var(--bs-form-valid-color); }
globalStyle(`${briteScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:valid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:valid:focus`, {
	boxShadow: "0 0 0 1px rgba(var(--bs-success-rgb), 1)",
})

// SOURCE CSS:
// .form-check-input.is-valid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${briteScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: "0 0 0 1px rgba(var(--bs-success-rgb), 1)",
})

// SOURCE CSS:
// .was-validated .form-check-input:valid ~ .form-check-label { color: var(--bs-form-valid-color); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formCheckInput}:valid ~ ${briteScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

// SOURCE CSS:
// .form-check-input.is-valid ~ .form-check-label { color: var(--bs-form-valid-color); }
globalStyle(`${briteScope}${formCheckInput}${isValid} ~ ${briteScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

// SOURCE CSS:
// .was-validated .form-control:valid { border-color: var(--bs-form-valid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: `calc(1.5em + 1rem)`,
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2368d391' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.25rem) center",
	backgroundSize: `calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)`,
})

// SOURCE CSS:
// .form-control.is-valid { border-color: var(--bs-form-valid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${briteScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: `calc(1.5em + 1rem)`,
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2368d391' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.25rem) center",
	backgroundSize: `calc(0.75em + 0.5rem) calc(0.75em + 0.5rem)`,
})

// SOURCE CSS:
// .was-validated .form-control:valid:focus { border-color: var(--bs-form-valid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${briteScope}${wasValidated} ${briteScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: "0 0 0 1px rgba(var(--bs-success-rgb), 1)",
})

// SOURCE CSS:
// .form-control.is-valid:focus { border-color: var(--bs-form-valid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${briteScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: "0 0 0 1px rgba(var(--bs-success-rgb), 1)",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
