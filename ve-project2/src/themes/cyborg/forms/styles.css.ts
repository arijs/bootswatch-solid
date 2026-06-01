import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsGutterX,
	varBsGutterY,
	varBsSecondaryBg,
	varBsSecondaryColor,
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
	btn,
} from '../../../theme-contract/ui/buttons/contract.css'
import {
	dropdown,
	dropdownToggle,
} from '../../../theme-contract/ui/dropdowns/contract.css'
import {
	flexWrap,
} from '../../../theme-contract/ui/modal/contract.css'
import { cyborgScope } from '../scope.css'

// AUTO-GENERATED family styles for bootstrap/forms
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .form-check { display: block; min-height: 1.5rem; padding-left: 1.5em; margin-bottom: 0.125rem; }
globalStyle(`${cyborgScope}${formCheck}`, {
	display: "block",
	minHeight: "1.5rem",
	paddingLeft: "1.5em",
	marginBottom: "0.125rem",
})

// SOURCE CSS:
// .form-check .form-check-input { float: left; margin-left: -1.5em; }
globalStyle(`${cyborgScope}${formCheck} ${cyborgScope}${formCheckInput}`, {
	float: "left",
	marginLeft: "-1.5em",
})

// SOURCE CSS:
// .form-check-input { --bs-form-check-bg: var(--bs-body-bg); flex-shrink: 0; width: 1em; height: 1em; margin-top: 0.25em; vertical-align: top; -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-form-check-bg); background-image: var(--bs-form-check-bg-image); background-repeat: no-repeat; background-position: center; background-size: contain; border: var(--bs-border-width) solid var(--bs-border-color); -webkit-print-color-adjust: exact; color-adjust: exact; print-color-adjust: exact; }
globalStyle(`${cyborgScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: "#fff",
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
	border: "none",
	WebkitPrintColorAdjust: "exact",
	colorAdjust: "exact",
	printColorAdjust: "exact",
})

// SOURCE CSS:
// .form-check-input[type="checkbox"] { border-radius: 0.25em; }
globalStyle(`${cyborgScope}${formCheckInput}[type="checkbox"]`, {
	borderRadius: "0.25em",
})

// SOURCE CSS:
// .form-check-input:active { filter: brightness(90%); }
globalStyle(`${cyborgScope}${formCheckInput}:active`, {
	filter: "brightness(90%)",
})

// SOURCE CSS:
// .form-check-input:focus { border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${cyborgScope}${formCheckInput}:focus`, {
	borderColor: "#95cfeb",
	outline: 0,
	boxShadow: "0 0 0 0.25rem rgba(42, 159, 214, 0.25)",
})

// SOURCE CSS:
// .form-check-input:checked { background-color: #0d6efd; border-color: #0d6efd; }
globalStyle(`${cyborgScope}${formCheckInput}:checked`, {
	backgroundColor: "#2a9fd6",
	borderColor: "#2a9fd6",
})

// SOURCE CSS:
// .form-check-input:checked[type="checkbox"] { --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e"); }
globalStyle(`${cyborgScope}${formCheckInput}:checked[type="checkbox"]`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .form-check-input[type="checkbox"]:indeterminate { background-color: rgb(13, 110, 253); border-color: rgb(13, 110, 253); --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e"); }
globalStyle(`${cyborgScope}${formCheckInput}[type="checkbox"]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")",
	},
	backgroundColor: "#2a9fd6",
	borderColor: "#2a9fd6",
})

// SOURCE CSS:
// .form-check-input:disabled { pointer-events: none; filter: none; opacity: 0.5; }
globalStyle(`${cyborgScope}${formCheckInput}:disabled`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.5,
})

// SOURCE CSS:
// .form-check-input[disabled] ~ .form-check-label { cursor: default; opacity: 0.5; }
globalStyle(`${cyborgScope}${formCheckInput}[disabled] ~ ${cyborgScope}${formCheckLabel}`, {
	cursor: "default",
	opacity: 0.5,
})

// SOURCE CSS:
// .form-check-input:disabled ~ .form-check-label { cursor: default; opacity: 0.5; }
globalStyle(`${cyborgScope}${formCheckInput}:disabled ~ ${cyborgScope}${formCheckLabel}`, {
	cursor: "default",
	opacity: 0.5,
})

// SOURCE CSS:
// .mb-3 { margin-bottom: 1rem !important; }
globalStyle(`${cyborgScope}${mb3}`, {
	marginBottom: "1rem !important",
})

// SOURCE CSS:
// fieldset { min-width: 0; padding: 0; margin: 0; border: 0; }
globalStyle(`${cyborgScope}${fieldset}`, {
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
})

// SOURCE CSS:
// .form-label { margin-bottom: 0.5rem; }
globalStyle(`${cyborgScope}${formLabel}`, {
	marginBottom: "0.5rem",
	display: "inline-block",
})

// SOURCE CSS:
// .form-control { display: block; width: 100%; padding: 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-body-bg); background-clip: padding-box; border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${cyborgScope}${formControl}`, {
	display: "block",
	width: "100%",
	padding: "0.375rem 1rem",
	fontSize: "1rem",
	fontWeight: 400,
	lineHeight: 1.5,
	fontFamily: "inherit",
	margin: 0,
	color: "#212529",
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: "#fff",
	backgroundClip: "padding-box",
	border: "0px solid #fff",
	borderRadius: varBsBorderRadius,
	transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control:focus { color: var(--bs-body-color); background-color: var(--bs-body-bg); border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${cyborgScope}${formControl}:focus`, {
	color: "#212529",
	backgroundColor: "#fff",
	borderColor: "#95cfeb",
	outline: 0,
	boxShadow: "0 0 0 0.25rem rgba(42, 159, 214, 0.25)",
})

// SOURCE CSS:
// .form-control::-webkit-date-and-time-value { min-width: 85px; height: 1.5em; margin: 0; }
globalStyle(`${cyborgScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: "85px",
	height: "1.5em",
	margin: 0,
})

// SOURCE CSS:
// .form-control::-webkit-datetime-edit { display: block; padding: 0; }
globalStyle(`${cyborgScope}${formControl}::-webkit-datetime-edit`, {
	display: "block",
	padding: 0,
})

// SOURCE CSS:
// .form-control::placeholder { color: var(--bs-secondary-color); opacity: 1; }
globalStyle(`${cyborgScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: 1,
})

// SOURCE CSS:
// .form-control:disabled { background-color: var(--bs-secondary-bg); opacity: 1; }
globalStyle(`${cyborgScope}${formControl}:disabled`, {
	backgroundColor: "#adafae",
	opacity: 1,
	borderColor: "transparent",
})

// SOURCE CSS:
// .form-control::-webkit-file-upload-button { padding: 0.375rem 0.75rem; margin: -0.375rem -0.75rem; -webkit-margin-end: 0.75rem; margin-inline-end: 0.75rem; color: var(--bs-body-color); background-color: var(--bs-tertiary-bg); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0; border-inline-end-width: var(--bs-border-width); border-radius: 0; -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${cyborgScope}${formControl}::-webkit-file-upload-button`, {
	padding: "0.375rem 1rem",
	margin: "-0.375rem -1rem",
	WebkitMarginEnd: "1rem",
	marginInlineEnd: "1rem",
	color: "#fff",
	backgroundColor: "#282828",
	pointerEvents: "none",
	borderColor: "inherit",
	borderStyle: "solid",
	borderWidth: 0,
	borderInlineEndWidth: "0px",
	borderRadius: 0,
	WebkitTransition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control::file-selector-button { padding: 0.375rem 0.75rem; margin: -0.375rem -0.75rem; -webkit-margin-end: 0.75rem; margin-inline-end: 0.75rem; color: var(--bs-body-color); background-color: var(--bs-tertiary-bg); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0; border-inline-end-width: var(--bs-border-width); border-radius: 0; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${cyborgScope}${formControl}::file-selector-button`, {
	padding: "0.375rem 1rem",
	margin: "-0.375rem -1rem",
	WebkitMarginEnd: "1rem",
	marginInlineEnd: "1rem",
	color: "#fff",
	backgroundColor: "#282828",
	pointerEvents: "none",
	borderColor: "inherit",
	borderStyle: "solid",
	borderWidth: 0,
	borderInlineEndWidth: "0px",
	borderRadius: 0,
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button { background-color: var(--bs-secondary-bg); }
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${cyborgScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: "#232323",
})

// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::file-selector-button { background-color: var(--bs-secondary-bg); }
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${cyborgScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: "#232323",
})

// SOURCE CSS:
// .form-select { --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"); display: block; width: 100%; padding: 0.375rem 2.25rem 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-body-bg); background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none); background-repeat: no-repeat; background-position: right 0.75rem center; background-size: 16px 12px; border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${cyborgScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23222' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")",
	},
	display: "block",
	width: "100%",
	padding: "0.375rem 3rem 0.375rem 1rem",
	fontSize: "1rem",
	fontWeight: 400,
	lineHeight: 1.5,
	color: "#212529",
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: "#fff",
	backgroundImage: `${varBsFormSelectBgImg} , ${varBsFormSelectBgIcon}`,
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right 1rem center",
	backgroundSize: "16px 12px",
	border: "0px solid #fff",
	borderRadius: varBsBorderRadius,
	transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-select:focus { border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${cyborgScope}${formSelect}:focus`, {
	borderColor: "#95cfeb",
	outline: 0,
	boxShadow: "0 0 0 0.25rem rgba(42, 159, 214, 0.25)",
})

// SOURCE CSS:
// .form-select:disabled { background-color: var(--bs-secondary-bg); }
globalStyle(`${cyborgScope}${formSelect}:disabled`, {
	backgroundColor: "#adafae",
	borderColor: "transparent",
	opacity: 1,
})

// SOURCE CSS:
// .form-control[type="file"] { overflow: hidden; }
globalStyle(`${cyborgScope}${formControl}[type="file"]`, {
	overflow: "hidden",
})

// SOURCE CSS:
// .form-control[type="file"]:not(:disabled):not([readonly]) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${cyborgScope}${formControl}[type="file"]:not(:disabled):not([readonly])`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .form-range { width: 100%; height: 1.5rem; padding: 0; -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: transparent; }
globalStyle(`${cyborgScope}${formRange}`, {
	width: "100%",
	height: "1.5rem",
	padding: 0,
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: "transparent",
})

// SOURCE CSS:
// .form-range:focus { outline: 0; }
globalStyle(`${cyborgScope}${formRange}:focus`, {
	outline: 0,
})

// SOURCE CSS:
// .form-range:focus::-webkit-slider-thumb { box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${cyborgScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: "0 0 0 1px #060606, 0 0 0 0.25rem rgba(42, 159, 214, 0.25)",
})

// SOURCE CSS:
// .form-range::-webkit-slider-thumb { width: 1rem; height: 1rem; margin-top: -0.25rem; -webkit-appearance: none; appearance: none; background-color: #0d6efd; border: 0; border-radius: 1rem; -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${cyborgScope}${formRange}::-webkit-slider-thumb`, {
	width: "1rem",
	height: "1rem",
	marginTop: "-0.25rem",
	WebkitAppearance: "none",
	appearance: "none",
	backgroundColor: "#2a9fd6",
	border: 0,
	borderRadius: "1rem",
	WebkitTransition: "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
	transition: "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-range::-webkit-slider-thumb:active { background-color: #b6d4fe; }
globalStyle(`${cyborgScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: "#bfe2f3",
})

// SOURCE CSS:
// .form-range::-webkit-slider-runnable-track { width: 100%; height: 0.5rem; color: transparent; cursor: pointer; background-color: var(--bs-secondary-bg); border-color: transparent; border-radius: 1rem; }
globalStyle(`${cyborgScope}${formRange}::-webkit-slider-runnable-track`, {
	width: "100%",
	height: "0.5rem",
	color: "transparent",
	cursor: "pointer",
	backgroundColor: varBsSecondaryBg,
	borderColor: "transparent",
	borderRadius: "1rem",
})

// SOURCE CSS:
// .form-range:disabled { pointer-events: none; }
globalStyle(`${cyborgScope}${formRange}:disabled`, {
	pointerEvents: "none",
})

// SOURCE CSS:
// .form-range:disabled::-webkit-slider-thumb { background-color: var(--bs-secondary-color); }
globalStyle(`${cyborgScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

// SOURCE CSS:
// .form-check-input[type="radio"] { border-radius: 50%; }
globalStyle(`${cyborgScope}${formCheckInput}[type="radio"]`, {
	borderRadius: "50%",
})

// SOURCE CSS:
// .form-check-input:checked[type="radio"] { --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e"); }
globalStyle(`${cyborgScope}${formCheckInput}:checked[type="radio"]`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .form-switch { padding-left: 2.5em; }
globalStyle(`${cyborgScope}${formSwitch}`, {
	paddingLeft: "2.5em",
})

// SOURCE CSS:
// .form-switch .form-check-input { --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e"); width: 2em; margin-left: -2.5em; background-image: var(--bs-form-switch-bg); background-position: left center; border-radius: 2em; transition: background-position 0.15s ease-in-out; }
globalStyle(`${cyborgScope}${formSwitch} ${cyborgScope}${formCheckInput}`, {
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
globalStyle(`${cyborgScope}${formSwitch} ${cyborgScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2395cfeb'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .form-switch .form-check-input:checked { background-position: right center; --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e"); }
globalStyle(`${cyborgScope}${formSwitch} ${cyborgScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
	},
	backgroundPosition: "right center",
})

// SOURCE CSS:
// .form-floating { position: relative; }
globalStyle(`${cyborgScope}${formFloating}`, {
	position: "relative",
})

// SOURCE CSS:
// .form-floating > .form-control { height: calc(3.5rem + calc(var(--bs-border-width) * 2)); min-height: calc(3.5rem + calc(var(--bs-border-width) * 2)); line-height: 1.25; padding: 1rem 0.75rem; }
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}`, {
	height: `calc(3.5rem + calc(0px * 2))`,
	minHeight: `calc(3.5rem + calc(0px * 2))`,
	lineHeight: 1.25,
	padding: "1rem 1rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext { height: calc(3.5rem + calc(var(--bs-border-width) * 2)); min-height: calc(3.5rem + calc(var(--bs-border-width) * 2)); line-height: 1.25; padding: 1rem 0.75rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${cyborgScope}${formFloating} > .form-control-plaintext`, {
	height: `calc(3.5rem + calc(0px * 2))`,
	minHeight: `calc(3.5rem + calc(0px * 2))`,
	lineHeight: 1.25,
	padding: "1rem 1rem",
})

// SOURCE CSS:
// .form-floating > .form-select { height: calc(3.5rem + calc(var(--bs-border-width) * 2)); min-height: calc(3.5rem + calc(var(--bs-border-width) * 2)); line-height: 1.25; }
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formSelect}`, {
	height: `calc(3.5rem + calc(0px * 2))`,
	minHeight: `calc(3.5rem + calc(0px * 2))`,
	lineHeight: 1.25,
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
	paddingLeft: "1rem",
})

// SOURCE CSS:
// .form-floating > label { position: absolute; top: 0; left: 0; z-index: 2; max-width: 100%; height: 100%; padding: 1rem 0.75rem; overflow: hidden; color: rgba(var(--bs-body-color-rgb), 0.65); text-align: start; text-overflow: ellipsis; white-space: nowrap; pointer-events: none; border: var(--bs-border-width) solid transparent; transform-origin: 0 0; transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out; }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > label`, {
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
	border: "0px solid transparent",
	transformOrigin: "0 0",
	transition: "opacity 0.1s ease-in-out, transform 0.1s ease-in-out",
})

// SOURCE CSS:
// .form-floating > .form-control::placeholder { color: transparent; }
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}::placeholder`, {
	color: "transparent",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext::placeholder { color: transparent; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${cyborgScope}${formFloating} > .form-control-plaintext::placeholder`, {
	color: "transparent",
})

// SOURCE CSS:
// .form-floating > .form-control:focus { padding-top: 1.625rem; padding-bottom: 0.625rem; }
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:focus`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control:not(:placeholder-shown) { padding-top: 1.625rem; padding-bottom: 0.625rem; }
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext:focus { padding-top: 1.625rem; padding-bottom: 0.625rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${cyborgScope}${formFloating} > .form-control-plaintext:focus`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext:not(:placeholder-shown) { padding-top: 1.625rem; padding-bottom: 0.625rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${cyborgScope}${formFloating} > .form-control-plaintext:not(:placeholder-shown)`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control:-webkit-autofill { padding-top: 1.625rem; padding-bottom: 0.625rem; }
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:-webkit-autofill`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext:-webkit-autofill { padding-top: 1.625rem; padding-bottom: 0.625rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${cyborgScope}${formFloating} > .form-control-plaintext:-webkit-autofill`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control:focus ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:focus ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > .form-control:not(:placeholder-shown) ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:not(:placeholder-shown) ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > .form-control-plaintext ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
	borderWidth: "0px 0",
})

// SOURCE CSS:
// .form-floating > .form-select ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formSelect} ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > .form-control:-webkit-autofill ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:-webkit-autofill ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > :disabled ~ label { color: #6c757d; }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > :disabled ~ label`, {
	color: "#555",
})

// SOURCE CSS:
// .form-floating > .form-control:disabled ~ label { color: #6c757d; }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:disabled ~ label`, {
	color: "#555",
})

// SOURCE CSS:
// .input-group { position: relative; display: flex; flex-wrap: wrap; align-items: stretch; width: 100%; }
globalStyle(`${cyborgScope}${inputGroup}`, {
	position: "relative",
	display: "flex",
	flexWrap: "wrap",
	alignItems: "stretch",
	width: "100%",
})

// SOURCE CSS:
// .input-group > .form-control { position: relative; flex: 1 1 auto; width: 1%; min-width: 0; }
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "1%",
	minWidth: 0,
})

// SOURCE CSS:
// .input-group > .form-select { position: relative; flex: 1 1 auto; width: 1%; min-width: 0; }
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "1%",
	minWidth: 0,
})

// SOURCE CSS:
// .input-group > .form-floating { position: relative; flex: 1 1 auto; width: 1%; min-width: 0; }
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "1%",
	minWidth: 0,
})

// SOURCE CSS:
// .input-group > .form-control:focus { z-index: 5; }
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}:focus`, {
	zIndex: 5,
})

// SOURCE CSS:
// .input-group > .form-select:focus { z-index: 5; }
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}:focus`, {
	zIndex: 5,
})

// SOURCE CSS:
// .input-group > .form-floating:focus-within { z-index: 5; }
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:focus-within`, {
	zIndex: 5,
})

// SOURCE CSS:
// .input-group-text { display: flex; align-items: center; padding: 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); text-align: center; white-space: nowrap; background-color: var(--bs-tertiary-bg); border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); }
globalStyle(`${cyborgScope}${inputGroupText}`, {
	display: "flex",
	alignItems: "center",
	padding: "0.375rem 1rem",
	fontSize: "1rem",
	fontWeight: 400,
	lineHeight: 1.5,
	color: "#fff",
	textAlign: "center",
	whiteSpace: "nowrap",
	backgroundColor: "#282828",
	border: "0px solid transparent",
	borderRadius: varBsBorderRadius,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${cyborgScope}${inputGroup}:not(${cyborgScope}${hasValidation}) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${cyborgScope}${inputGroup}:not(${cyborgScope}${hasValidation}) > ${cyborgScope}${dropdownToggle}:nth-last-child(n+3)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${cyborgScope}${inputGroup}:not(${cyborgScope}${hasValidation}) > ${cyborgScope}${formFloating}:not(:last-child) > ${cyborgScope}${formControl}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${cyborgScope}${inputGroup}:not(${cyborgScope}${hasValidation}) > ${cyborgScope}${formFloating}:not(:last-child) > ${cyborgScope}${formSelect}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) { margin-left: calc(-1 * var(--bs-border-width)); border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${cyborgScope}${inputGroup} > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback)`, {
	marginLeft: `calc(-1 * 0px)`,
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .form-text { margin-top: 0.25rem; font-size: 0.875em; color: var(--bs-secondary-color); }
globalStyle(`${cyborgScope}${formText}`, {
	marginTop: "0.25rem",
	fontSize: "0.875em",
	color: varBsSecondaryColor,
})

// SOURCE CSS:
// .form-control-lg { min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2)); padding: 0.5rem 1rem; font-size: 1.25rem; border-radius: var(--bs-border-radius-lg); }
globalStyle(`${cyborgScope}${formControl}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(0px * 2))`,
	padding: "0.5rem 1rem",
	fontSize: "1.25rem",
	borderRadius: varBsBorderRadiusLg,
})

// SOURCE CSS:
// .form-control-lg::-webkit-file-upload-button { padding: 0.5rem 1rem; margin: -0.5rem -1rem; -webkit-margin-end: 1rem; margin-inline-end: 1rem; }
globalStyle(`${cyborgScope}${formControl}${formControlLg}::-webkit-file-upload-button`, {
	padding: "0.5rem 1rem",
	margin: "-0.5rem -1rem",
	WebkitMarginEnd: "1rem",
	marginInlineEnd: "1rem",
})

// SOURCE CSS:
// .form-control-lg::file-selector-button { padding: 0.5rem 1rem; margin: -0.5rem -1rem; -webkit-margin-end: 1rem; margin-inline-end: 1rem; }
globalStyle(`${cyborgScope}${formControl}${formControlLg}::file-selector-button`, {
	padding: "0.5rem 1rem",
	margin: "-0.5rem -1rem",
	WebkitMarginEnd: "1rem",
	marginInlineEnd: "1rem",
})

// SOURCE CSS:
// .form-select-lg { padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left: 1rem; font-size: 1.25rem; border-radius: var(--bs-border-radius-lg); }
globalStyle(`${cyborgScope}${formSelectLg}`, {
	paddingTop: "0.5rem",
	paddingBottom: "0.5rem",
	paddingLeft: "1rem",
	fontSize: "1.25rem",
	borderRadius: varBsBorderRadiusLg,
})

// SOURCE CSS:
// .form-control-sm { min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2)); padding: 0.25rem 0.5rem; font-size: 0.875rem; border-radius: var(--bs-border-radius-sm); }
globalStyle(`${cyborgScope}${formControl}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(0px * 2))`,
	padding: "0.25rem 0.5rem",
	fontSize: "0.875rem",
	fontFamily: "inherit",
	margin: 0,
	borderRadius: varBsBorderRadiusSm,
})

// SOURCE CSS:
// .form-control-sm::-webkit-file-upload-button { padding: 0.25rem 0.5rem; margin: -0.25rem -0.5rem; -webkit-margin-end: 0.5rem; margin-inline-end: 0.5rem; }
globalStyle(`${cyborgScope}${formControl}${formControlSm}::-webkit-file-upload-button`, {
	padding: "0.25rem 0.5rem",
	margin: "-0.25rem -0.5rem",
	WebkitMarginEnd: "0.5rem",
	marginInlineEnd: "0.5rem",
})

// SOURCE CSS:
// .form-control-sm::file-selector-button { padding: 0.25rem 0.5rem; margin: -0.25rem -0.5rem; -webkit-margin-end: 0.5rem; margin-inline-end: 0.5rem; }
globalStyle(`${cyborgScope}${formControl}${formControlSm}::file-selector-button`, {
	padding: "0.25rem 0.5rem",
	margin: "-0.25rem -0.5rem",
	WebkitMarginEnd: "0.5rem",
	marginInlineEnd: "0.5rem",
})

// SOURCE CSS:
// .form-select-sm { padding-top: 0.25rem; padding-bottom: 0.25rem; padding-left: 0.5rem; font-size: 0.875rem; border-radius: var(--bs-border-radius-sm); }
globalStyle(`${cyborgScope}${formSelectSm}`, {
	paddingTop: "0.25rem",
	paddingBottom: "0.25rem",
	paddingLeft: "0.5rem",
	fontSize: "0.875rem",
	fontFamily: "inherit",
	borderRadius: varBsBorderRadiusSm,
})

// SOURCE CSS:
// .row { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; display: flex; flex-wrap: wrap; margin-top: calc(-1 * var(--bs-gutter-y)); margin-right: calc(-0.5 * var(--bs-gutter-x)); margin-left: calc(-0.5 * var(--bs-gutter-x)); }
globalStyle(`${cyborgScope}${row}`, {
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
globalStyle(`${cyborgScope}${row} > *`, {
	flexShrink: 0,
	width: "100%",
	maxWidth: "100%",
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

// SOURCE CSS:
// .g-3 { --bs-gutter-x: 1rem; --bs-gutter-y: 1rem; }
globalStyle(`${cyborgScope}${g3}`, {
	vars: {
		[varBsGutterX]: "1rem",
		[varBsGutterY]: "1rem",
	},
})

// SOURCE CSS:
// .invalid-feedback { display: none; width: 100%; margin-top: 0.25rem; font-size: 0.875em; color: var(--bs-form-invalid-color); }
globalStyle(`${cyborgScope}${invalidFeedback}`, {
	display: "none",
	width: "100%",
	marginTop: "0.25rem",
	fontSize: "0.875em",
	color: varBsFormInvalidColor,
})

// SOURCE CSS:
// .was-validated :invalid ~ .invalid-feedback { display: block; }
globalStyle(`${cyborgScope}${wasValidated} :invalid ~ ${cyborgScope}${invalidFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated :invalid ~ .invalid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".invalid-tooltip" — no contract mapping
globalStyle(`${cyborgScope}${wasValidated} :invalid ~ .invalid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .is-invalid ~ .invalid-feedback { display: block; }
globalStyle(`${cyborgScope}${isInvalid} ~ ${cyborgScope}${invalidFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .is-invalid ~ .invalid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".invalid-tooltip" — no contract mapping
globalStyle(`${cyborgScope}${isInvalid} ~ .invalid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .form-check-input.is-invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${cyborgScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid:checked { background-color: var(--bs-form-invalid-color); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

// SOURCE CSS:
// .form-check-input.is-invalid:checked { background-color: var(--bs-form-invalid-color); }
globalStyle(`${cyborgScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:invalid:focus`, {
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .form-check-input.is-invalid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${cyborgScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid ~ .form-check-label { color: var(--bs-form-invalid-color); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:invalid ~ ${cyborgScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

// SOURCE CSS:
// .form-check-input.is-invalid ~ .form-check-label { color: var(--bs-form-invalid-color); }
globalStyle(`${cyborgScope}${formCheckInput}${isInvalid} ~ ${cyborgScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

// SOURCE CSS:
// .was-validated .form-control:invalid { border-color: var(--bs-form-invalid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: `calc(1.5em + 0.75rem)`,
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23c00'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23c00' stroke='none'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.1875rem) center",
	backgroundSize: `calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)`,
})

// SOURCE CSS:
// .form-control.is-invalid { border-color: var(--bs-form-invalid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${cyborgScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: `calc(1.5em + 0.75rem)`,
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23c00'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23c00' stroke='none'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.1875rem) center",
	backgroundSize: `calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)`,
})

// SOURCE CSS:
// .was-validated .form-control:invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .form-control.is-invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${cyborgScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .was-validated .form-select:invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .form-select.is-invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${cyborgScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .was-validated .form-select:invalid:not([multiple]):not([size]) { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "[size]" — map to a contract class
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23c00'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23c00' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "5.5rem",
	backgroundPosition: "right 1rem center, center right 3rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})

// SOURCE CSS:
// .was-validated .form-select:invalid:not([multiple])[size="1"] { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "4.125rem",
	backgroundPosition: "right 0.75rem center, center right 2.25rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})

// SOURCE CSS:
// .form-select.is-invalid:not([multiple]):not([size]) { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "[size]" — map to a contract class
globalStyle(`${cyborgScope}${formSelect}${isInvalid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23c00'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23c00' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "5.5rem",
	backgroundPosition: "right 1rem center, center right 3rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})

// SOURCE CSS:
// .form-select.is-invalid:not([multiple])[size="1"] { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
globalStyle(`${cyborgScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "4.125rem",
	backgroundPosition: "right 1rem center",
	backgroundSize: "16px 12px",
	display: "block",
	width: "100%",
	padding: "0.375rem 3rem 0.375rem 1rem",
	fontSize: "1rem",
	fontWeight: 400,
	lineHeight: 1.5,
	color: "#212529",
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: "#fff",
	backgroundImage: `${varBsFormSelectBgImg} , ${varBsFormSelectBgIcon}`,
	backgroundRepeat: "no-repeat",
	border: "0px solid #fff",
	borderRadius: varBsBorderRadius,
	transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .was-validated .form-select:invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .form-select.is-invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${cyborgScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .was-validated .input-group > .form-control:not(:focus):invalid { z-index: 4; }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}:not(:focus):invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .input-group > .form-control:not(:focus).is-invalid { z-index: 4; }
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}:not(:focus).is-invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .was-validated .input-group > .form-select:not(:focus):invalid { z-index: 4; }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}:not(:focus):invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .input-group > .form-select:not(:focus).is-invalid { z-index: 4; }
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}:not(:focus).is-invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .was-validated .input-group > .form-floating:not(:focus-within):invalid { z-index: 4; }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .input-group > .form-floating:not(:focus-within).is-invalid { z-index: 4; }
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:focus-within).is-invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .valid-feedback { display: none; width: 100%; margin-top: 0.25rem; font-size: 0.875em; color: var(--bs-form-valid-color); }
globalStyle(`${cyborgScope}${validFeedback}`, {
	display: "none",
	width: "100%",
	marginTop: "0.25rem",
	fontSize: "0.875em",
	color: varBsFormValidColor,
})

// SOURCE CSS:
// .was-validated :valid ~ .valid-feedback { display: block; }
globalStyle(`${cyborgScope}${wasValidated} :valid ~ ${cyborgScope}${validFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated :valid ~ .valid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".valid-tooltip" — no contract mapping
globalStyle(`${cyborgScope}${wasValidated} :valid ~ .valid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .is-valid ~ .valid-feedback { display: block; }
globalStyle(`${cyborgScope}${isValid} ~ ${cyborgScope}${validFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .is-valid ~ .valid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".valid-tooltip" — no contract mapping
globalStyle(`${cyborgScope}${isValid} ~ .valid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated .form-check-input:valid { border-color: var(--bs-form-valid-border-color); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

// SOURCE CSS:
// .form-check-input.is-valid { border-color: var(--bs-form-valid-border-color); }
globalStyle(`${cyborgScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:valid:checked { background-color: var(--bs-form-valid-color); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

// SOURCE CSS:
// .form-check-input.is-valid:checked { background-color: var(--bs-form-valid-color); }
globalStyle(`${cyborgScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:valid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:valid:focus`, {
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25)",
})

// SOURCE CSS:
// .form-check-input.is-valid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${cyborgScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25)",
})

// SOURCE CSS:
// .was-validated .form-check-input:valid ~ .form-check-label { color: var(--bs-form-valid-color); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formCheckInput}:valid ~ ${cyborgScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

// SOURCE CSS:
// .form-check-input.is-valid ~ .form-check-label { color: var(--bs-form-valid-color); }
globalStyle(`${cyborgScope}${formCheckInput}${isValid} ~ ${cyborgScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

// SOURCE CSS:
// .was-validated .form-control:valid { border-color: var(--bs-form-valid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: `calc(1.5em + 0.75rem)`,
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.1875rem) center",
	backgroundSize: `calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)`,
})

// SOURCE CSS:
// .form-control.is-valid { border-color: var(--bs-form-valid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${cyborgScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: `calc(1.5em + 0.75rem)`,
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.1875rem) center",
	backgroundSize: `calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)`,
})

// SOURCE CSS:
// .was-validated .form-control:valid:focus { border-color: var(--bs-form-valid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25)",
})

// SOURCE CSS:
// .form-control.is-valid:focus { border-color: var(--bs-form-valid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${cyborgScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25)",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .form-control[type=file] { overflow: hidden; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formControl}[type=file]`, {
	overflow: "hidden",
})
// SOURCE CSS:
// .form-control[type=file]:not(:disabled):not([readonly]) { cursor: pointer; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "[readonly]" — map to a contract class
globalStyle(`${cyborgScope}${formControl}[type=file]:not(:disabled):not([readonly])`, {
	cursor: "pointer",
})
// SOURCE CSS:
// .form-control::-moz-placeholder { color: var(--bs-secondary-color); opacity: 1; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formControl}::-moz-placeholder`, {
	color: varBsSecondaryColor,
	opacity: 1,
})
// SOURCE CSS:
// .form-select[multiple] { padding-right: 1rem; background-image: none; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formSelect}[multiple]`, {
	paddingRight: "1rem",
	backgroundImage: "none",
})
// SOURCE CSS:
// .form-select[size]:not([size="1"]) { padding-right: 1rem; background-image: none; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "[size="1"]" — map to a contract class
globalStyle(`${cyborgScope}${formSelect}[size]:not([size="1"])`, {
	paddingRight: "1rem",
	backgroundImage: "none",
})
// SOURCE CSS:
// .form-select:-moz-focusring { color: transparent; text-shadow: 0 0 0 #212529; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formSelect}:-moz-focusring`, {
	color: "transparent",
	textShadow: "0 0 0 #212529",
})
// SOURCE CSS:
// .form-check-reverse .form-check-input { float: right; margin-right: -1.5em; margin-left: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".form-check-reverse" — no contract mapping
globalStyle(`.form-check-reverse ${cyborgScope}${formCheckInput}`, {
	float: "right",
	marginRight: "-1.5em",
	marginLeft: 0,
})
// SOURCE CSS:
// .form-check-input[type=checkbox] { border-radius: 0.25em; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formCheckInput}[type=checkbox]`, {
	borderRadius: "0.25em",
})
// SOURCE CSS:
// .form-check-input[type=radio] { border-radius: 50%; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formCheckInput}[type=radio]`, {
	borderRadius: "50%",
})
// SOURCE CSS:
// .form-check-input:checked[type=checkbox] { --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e"); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formCheckInput}:checked[type=checkbox]`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")",
	},
})
// SOURCE CSS:
// .form-check-input:checked[type=radio] { --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e"); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formCheckInput}:checked[type=radio]`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")",
	},
})
// SOURCE CSS:
// .form-check-input[type=checkbox]:indeterminate { background-color: #2a9fd6; border-color: #2a9fd6; --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e"); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formCheckInput}[type=checkbox]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")",
	},
	backgroundColor: "#2a9fd6",
	borderColor: "#2a9fd6",
})
// SOURCE CSS:
// .form-switch.form-check-reverse { padding-right: 2.5em; padding-left: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".form-check-reverse" — no contract mapping
globalStyle(`${cyborgScope}${formSwitch}.form-check-reverse`, {
	paddingRight: "2.5em",
	paddingLeft: 0,
})
// SOURCE CSS:
// .form-switch.form-check-reverse .form-check-input { margin-right: -2.5em; margin-left: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".form-check-reverse" — no contract mapping
globalStyle(`${cyborgScope}${formSwitch}.form-check-reverse ${cyborgScope}${formCheckInput}`, {
	marginRight: "-2.5em",
	marginLeft: 0,
})
// SOURCE CSS:
// .form-range:focus::-moz-range-thumb { box-shadow: 0 0 0 1px #060606, 0 0 0 0.25rem rgba(42, 159, 214, 0.25); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formRange}:focus::-moz-range-thumb`, {
	boxShadow: "0 0 0 1px #060606, 0 0 0 0.25rem rgba(42, 159, 214, 0.25)",
})
// SOURCE CSS:
// .form-range::-moz-focus-outer { border: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formRange}::-moz-focus-outer`, {
	border: 0,
})
// SOURCE CSS:
// .form-range::-moz-range-thumb { width: 1rem; height: 1rem; -moz-appearance: none; appearance: none; background-color: #2a9fd6; border: 0; border-radius: 1rem; -moz-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formRange}::-moz-range-thumb`, {
	width: "1rem",
	height: "1rem",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: "#2a9fd6",
	border: 0,
	borderRadius: "1rem",
	MozTransition: "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
	transition: "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})
// SOURCE CSS:
// .form-range::-moz-range-thumb:active { background-color: #bfe2f3; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formRange}::-moz-range-thumb:active`, {
	backgroundColor: "#bfe2f3",
})
// SOURCE CSS:
// .form-range::-moz-range-track { width: 100%; height: 0.5rem; color: transparent; cursor: pointer; background-color: var(--bs-secondary-bg); border-color: transparent; border-radius: 1rem; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formRange}::-moz-range-track`, {
	width: "100%",
	height: "0.5rem",
	color: "transparent",
	cursor: "pointer",
	backgroundColor: varBsSecondaryBg,
	borderColor: "transparent",
	borderRadius: "1rem",
})
// SOURCE CSS:
// .form-range:disabled::-moz-range-thumb { background-color: var(--bs-secondary-color); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formRange}:disabled::-moz-range-thumb`, {
	backgroundColor: varBsSecondaryColor,
})
// SOURCE CSS:
// .form-floating > .form-control::-moz-placeholder { color: transparent; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}::-moz-placeholder`, {
	color: "transparent",
})
// SOURCE CSS:
// .form-floating > .form-control-plaintext::-moz-placeholder { color: transparent; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${cyborgScope}${formFloating} > .form-control-plaintext::-moz-placeholder`, {
	color: "transparent",
})
// SOURCE CSS:
// .form-floating > .form-control:not(:-moz-placeholder-shown) { padding-top: 1.625rem; padding-bottom: 0.625rem; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:not(:-moz-placeholder-shown)`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})
// SOURCE CSS:
// .form-floating > .form-control-plaintext:not(:-moz-placeholder-shown) { padding-top: 1.625rem; padding-bottom: 0.625rem; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${cyborgScope}${formFloating} > .form-control-plaintext:not(:-moz-placeholder-shown)`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})
// SOURCE CSS:
// .form-floating > .form-control:not(:-moz-placeholder-shown) ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > ${cyborgScope}${formControl}:not(:-moz-placeholder-shown) ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})
// SOURCE CSS:
// .form-floating > textarea:not(:-moz-placeholder-shown) ~ label::after { position: absolute; inset: 1rem 0.5rem; z-index: -1; height: 1.5em; content: ""; background-color: #fff; border-radius: var(--bs-border-radius); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea:not(:-moz-placeholder-shown)" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "label::after" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > textarea:not(:-moz-placeholder-shown) ~ label::after`, {
	position: "absolute",
	inset: "1rem 0.5rem",
	zIndex: -1,
	height: "1.5em",
	content: "\"\"",
	backgroundColor: "#fff",
	borderRadius: varBsBorderRadius,
})
// SOURCE CSS:
// .form-floating > textarea:focus ~ label::after { position: absolute; inset: 1rem 0.5rem; z-index: -1; height: 1.5em; content: ""; background-color: #fff; border-radius: var(--bs-border-radius); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea:focus" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "label::after" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > textarea:focus ~ label::after`, {
	position: "absolute",
	inset: "1rem 0.5rem",
	zIndex: -1,
	height: "1.5em",
	content: "\"\"",
	backgroundColor: "#fff",
	borderRadius: varBsBorderRadius,
})
// SOURCE CSS:
// .form-floating > textarea:not(:placeholder-shown) ~ label::after { position: absolute; inset: 1rem 0.5rem; z-index: -1; height: 1.5em; content: ""; background-color: #fff; border-radius: var(--bs-border-radius); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea:not(:placeholder-shown)" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "label::after" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > textarea:not(:placeholder-shown) ~ label::after`, {
	position: "absolute",
	inset: "1rem 0.5rem",
	zIndex: -1,
	height: "1.5em",
	content: "\"\"",
	backgroundColor: "#fff",
	borderRadius: varBsBorderRadius,
})
// SOURCE CSS:
// .form-floating > textarea:disabled ~ label::after { background-color: #adafae; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea:disabled" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "label::after" — map to a contract class
globalStyle(`${cyborgScope}${formFloating} > textarea:disabled ~ label::after`, {
	backgroundColor: "#adafae",
})
// SOURCE CSS:
// .input-group .btn { position: relative; z-index: 2; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${inputGroup} ${cyborgScope}${btn}`, {
	position: "relative",
	zIndex: 2,
})
// SOURCE CSS:
// .input-group .btn:focus { z-index: 5; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${inputGroup} ${cyborgScope}${btn}:focus`, {
	zIndex: 5,
})
// SOURCE CSS:
// .input-group-lg > .form-control { padding: 0.5rem 1rem; font-size: 1.25rem; border-radius: var(--bs-border-radius-lg); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".input-group-lg" — no contract mapping
globalStyle(`.input-group-lg > ${cyborgScope}${formControl}`, {
	padding: "0.5rem 1rem",
	fontSize: "1.25rem",
	borderRadius: varBsBorderRadiusLg,
})
// SOURCE CSS:
// .input-group-lg > .form-select { padding: 0.5rem 1rem; font-size: 1.25rem; border-radius: var(--bs-border-radius-lg); padding-right: 4rem; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".input-group-lg" — no contract mapping
globalStyle(`.input-group-lg > ${cyborgScope}${formSelect}`, {
	padding: "0.5rem 1rem",
	fontSize: "1.25rem",
	borderRadius: varBsBorderRadiusLg,
	paddingRight: "4rem",
})
// SOURCE CSS:
// .input-group-lg > .input-group-text { padding: 0.5rem 1rem; font-size: 1.25rem; border-radius: var(--bs-border-radius-lg); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".input-group-lg" — no contract mapping
globalStyle(`.input-group-lg > ${cyborgScope}${inputGroupText}`, {
	padding: "0.5rem 1rem",
	fontSize: "1.25rem",
	borderRadius: varBsBorderRadiusLg,
})
// SOURCE CSS:
// .input-group-lg > .btn { padding: 0.5rem 1rem; font-size: 1.25rem; border-radius: var(--bs-border-radius-lg); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".input-group-lg" — no contract mapping
globalStyle(`.input-group-lg > ${cyborgScope}${btn}`, {
	padding: "0.5rem 1rem",
	fontSize: "1.25rem",
	borderRadius: varBsBorderRadiusLg,
})
// SOURCE CSS:
// .input-group-sm > .form-control { padding: 0.25rem 0.5rem; font-size: 0.875rem; border-radius: var(--bs-border-radius-sm); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".input-group-sm" — no contract mapping
globalStyle(`.input-group-sm > ${cyborgScope}${formControl}`, {
	padding: "0.25rem 0.5rem",
	fontSize: "0.875rem",
	borderRadius: varBsBorderRadiusSm,
})
// SOURCE CSS:
// .input-group-sm > .form-select { padding: 0.25rem 0.5rem; font-size: 0.875rem; border-radius: var(--bs-border-radius-sm); padding-right: 4rem; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".input-group-sm" — no contract mapping
globalStyle(`.input-group-sm > ${cyborgScope}${formSelect}`, {
	padding: "0.25rem 0.5rem",
	fontSize: "0.875rem",
	borderRadius: varBsBorderRadiusSm,
	paddingRight: "4rem",
})
// SOURCE CSS:
// .input-group-sm > .input-group-text { padding: 0.25rem 0.5rem; font-size: 0.875rem; border-radius: var(--bs-border-radius-sm); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".input-group-sm" — no contract mapping
globalStyle(`.input-group-sm > ${cyborgScope}${inputGroupText}`, {
	padding: "0.25rem 0.5rem",
	fontSize: "0.875rem",
	borderRadius: varBsBorderRadiusSm,
})
// SOURCE CSS:
// .input-group-sm > .btn { padding: 0.25rem 0.5rem; font-size: 0.875rem; border-radius: var(--bs-border-radius-sm); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".input-group-sm" — no contract mapping
globalStyle(`.input-group-sm > ${cyborgScope}${btn}`, {
	padding: "0.25rem 0.5rem",
	fontSize: "0.875rem",
	borderRadius: varBsBorderRadiusSm,
})
// SOURCE CSS:
// .input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${inputGroup}${hasValidation} > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})
// SOURCE CSS:
// .input-group.has-validation > .dropdown-toggle:nth-last-child(n+4) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${inputGroup}${hasValidation} > ${cyborgScope}${dropdownToggle}:nth-last-child(n+4)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})
// SOURCE CSS:
// .input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control { border-top-right-radius: 0; border-bottom-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${inputGroup}${hasValidation} > ${cyborgScope}${formFloating}:nth-last-child(n+3) > ${cyborgScope}${formControl}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})
// SOURCE CSS:
// .input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select { border-top-right-radius: 0; border-bottom-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${inputGroup}${hasValidation} > ${cyborgScope}${formFloating}:nth-last-child(n+3) > ${cyborgScope}${formSelect}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})
// SOURCE CSS:
// .input-group > .form-floating:not(:first-child) > .form-control { border-top-left-radius: 0; border-bottom-left-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:first-child) > ${cyborgScope}${formControl}`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})
// SOURCE CSS:
// .input-group > .form-floating:not(:first-child) > .form-select { border-top-left-radius: 0; border-bottom-left-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:first-child) > ${cyborgScope}${formSelect}`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})
// SOURCE CSS:
// .was-validated textarea.form-control:valid { padding-right: calc(1.5em + 0.75rem); background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea.form-control:valid" — map to a contract class
globalStyle(`${cyborgScope}${wasValidated} textarea.form-control:valid`, {
	paddingRight: `calc(1.5em + 0.75rem)`,
	backgroundPosition: "top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)",
})
// SOURCE CSS:
// .was-validated .form-select:valid { border-color: var(--bs-form-valid-border-color); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:valid`, {
	borderColor: varBsFormValidBorderColor,
})
// SOURCE CSS:
// .form-select.is-valid { border-color: var(--bs-form-valid-border-color); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})
// SOURCE CSS:
// .was-validated .form-select:valid:not([multiple]):not([size]) { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e"); padding-right: 5.5rem; background-position: right 1rem center, center right 3rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "[size]" — map to a contract class
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:valid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")",
	},
	paddingRight: "5.5rem",
	backgroundPosition: "right 1rem center, center right 3rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})
// SOURCE CSS:
// .was-validated .form-select:valid:not([multiple])[size="1"] { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e"); padding-right: 5.5rem; background-position: right 1rem center, center right 3rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:valid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")",
	},
	paddingRight: "5.5rem",
	backgroundPosition: "right 1rem center, center right 3rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})
// SOURCE CSS:
// .form-select.is-valid:not([multiple]):not([size]) { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e"); padding-right: 5.5rem; background-position: right 1rem center, center right 3rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "[size]" — map to a contract class
globalStyle(`${cyborgScope}${formSelect}${isValid}:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")",
	},
	paddingRight: "5.5rem",
	backgroundPosition: "right 1rem center, center right 3rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})
// SOURCE CSS:
// .form-select.is-valid:not([multiple])[size="1"] { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e"); padding-right: 5.5rem; background-position: right 1rem center, center right 3rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "[multiple]" — map to a contract class
globalStyle(`${cyborgScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")",
	},
	paddingRight: "5.5rem",
	backgroundPosition: "right 1rem center, center right 3rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})
// SOURCE CSS:
// .was-validated .form-select:valid:focus { border-color: var(--bs-form-valid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${formSelect}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25)",
})
// SOURCE CSS:
// .form-select.is-valid:focus { border-color: var(--bs-form-valid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25)",
})
// SOURCE CSS:
// .was-validated .form-control-color:valid { width: calc(3rem + calc(1.5em + 0.75rem)); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".form-control-color" — no contract mapping
globalStyle(`${cyborgScope}${wasValidated} .form-control-color:valid`, {
	width: `calc(3rem + calc(1.5em + 0.75rem))`,
})
// SOURCE CSS:
// .form-check-inline .form-check-input ~ .valid-feedback { margin-left: 0.5em; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".form-check-inline" — no contract mapping
globalStyle(`.form-check-inline ${cyborgScope}${formCheckInput} ~ ${cyborgScope}${validFeedback}`, {
	marginLeft: "0.5em",
})
// SOURCE CSS:
// .was-validated .input-group > .form-control:not(:focus):valid { z-index: 3; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}:not(:focus):valid`, {
	zIndex: 3,
})
// SOURCE CSS:
// .input-group > .form-control:not(:focus).is-valid { z-index: 3; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formControl}:not(:focus).is-valid`, {
	zIndex: 3,
})
// SOURCE CSS:
// .was-validated .input-group > .form-select:not(:focus):valid { z-index: 3; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}:not(:focus):valid`, {
	zIndex: 3,
})
// SOURCE CSS:
// .input-group > .form-select:not(:focus).is-valid { z-index: 3; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formSelect}:not(:focus).is-valid`, {
	zIndex: 3,
})
// SOURCE CSS:
// .was-validated .input-group > .form-floating:not(:focus-within):valid { z-index: 3; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${wasValidated} ${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:focus-within):valid`, {
	zIndex: 3,
})
// SOURCE CSS:
// .input-group > .form-floating:not(:focus-within).is-valid { z-index: 3; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${inputGroup} > ${cyborgScope}${formFloating}:not(:focus-within).is-valid`, {
	zIndex: 3,
})
// SOURCE CSS:
// .was-validated textarea.form-control:invalid { padding-right: calc(1.5em + 0.75rem); background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea.form-control:invalid" — map to a contract class
globalStyle(`${cyborgScope}${wasValidated} textarea.form-control:invalid`, {
	paddingRight: `calc(1.5em + 0.75rem)`,
	backgroundPosition: "top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)",
})
// SOURCE CSS:
// .was-validated .form-control-color:invalid { width: calc(3rem + calc(1.5em + 0.75rem)); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".form-control-color" — no contract mapping
globalStyle(`${cyborgScope}${wasValidated} .form-control-color:invalid`, {
	width: `calc(3rem + calc(1.5em + 0.75rem))`,
})
// SOURCE CSS:
// .form-check-inline .form-check-input ~ .invalid-feedback { margin-left: 0.5em; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".form-check-inline" — no contract mapping
globalStyle(`.form-check-inline ${cyborgScope}${formCheckInput} ~ ${cyborgScope}${invalidFeedback}`, {
	marginLeft: "0.5em",
})
// SOURCE CSS:
// .form-control[readonly] { border-color: transparent; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${formControl}[readonly]`, {
	borderColor: "transparent",
})
