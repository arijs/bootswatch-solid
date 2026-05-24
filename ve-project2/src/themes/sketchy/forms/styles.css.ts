import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
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
	inputGroup,
	inputGroupText,
	invalidFeedback,
	isInvalid,
	isValid,
	legend,
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
import { sketchyScope } from '../scope.css'

// AUTO-GENERATED family styles for bootstrap/forms
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// label { display: inline-block; }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`label`, {
	display: "inline-block",
})

// SOURCE CSS:
// input { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "input" — map to a contract class
globalStyle(`input`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// button { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; }
// [UNMAPPED_SELECTOR] element selector "button" — map to a contract class
globalStyle(`button`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
})

// SOURCE CSS:
// select { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; word-wrap: normal; }
// [UNMAPPED_SELECTOR] element selector "select" — map to a contract class
globalStyle(`select`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
	wordWrap: "normal",
})

// SOURCE CSS:
// optgroup { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "optgroup" — map to a contract class
globalStyle(`optgroup`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; resize: vertical; }
// [UNMAPPED_SELECTOR] element selector "textarea" — map to a contract class
globalStyle(`textarea`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	resize: "vertical",
})

// SOURCE CSS:
// .form-check { display: block; min-height: 1.5rem; padding-left: 1.5em; margin-bottom: 0.125rem; }
globalStyle(`${sketchyScope}${formCheck}`, {
	display: "block",
	minHeight: "1.5rem",
	paddingLeft: "1.5em",
	marginBottom: "0.125rem",
})

// SOURCE CSS:
// .form-check .form-check-input { float: left; margin-left: -1.5em; }
globalStyle(`${sketchyScope}${formCheck} ${sketchyScope}${formCheckInput}`, {
	float: "left",
	marginLeft: "-1.5em",
})

// SOURCE CSS:
// .form-check-input { --bs-form-check-bg: var(--bs-body-bg); flex-shrink: 0; width: 1em; height: 1em; margin-top: 0.25em; vertical-align: top; -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-form-check-bg); background-image: var(--bs-form-check-bg-image); background-repeat: no-repeat; background-position: center; background-size: contain; border: var(--bs-border-width) solid var(--bs-border-color); -webkit-print-color-adjust: exact; color-adjust: exact; print-color-adjust: exact; }
globalStyle(`${sketchyScope}${formCheckInput}`, {
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
	border: "var(--bs-border-width) solid var(--bs-border-color)",
	WebkitPrintColorAdjust: "exact",
	colorAdjust: "exact",
	printColorAdjust: "exact",
})

// SOURCE CSS:
// .form-check-input[type="checkbox"] { border-radius: 0.25em; }
globalStyle(`${sketchyScope}${formCheckInput}[type="checkbox"]`, {
	borderRadius: "0.25em",
})

// SOURCE CSS:
// .form-check-input:active { filter: brightness(90%); }
globalStyle(`${sketchyScope}${formCheckInput}:active`, {
	filter: "brightness(90%)",
})

// SOURCE CSS:
// .form-check-input:focus { border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${sketchyScope}${formCheckInput}:focus`, {
	borderColor: "#86b7fe",
	outline: 0,
	boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
})

// SOURCE CSS:
// .form-check-input:checked { background-color: #0d6efd; border-color: #0d6efd; }
globalStyle(`${sketchyScope}${formCheckInput}:checked`, {
	backgroundColor: "#0d6efd",
	borderColor: "#0d6efd",
})

// SOURCE CSS:
// .form-check-input:checked[type="checkbox"] { --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e"); }
globalStyle(`${sketchyScope}${formCheckInput}:checked[type="checkbox"]`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .form-check-input[type="checkbox"]:indeterminate { background-color: rgb(13, 110, 253); border-color: rgb(13, 110, 253); --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e"); }
globalStyle(`${sketchyScope}${formCheckInput}[type="checkbox"]:indeterminate`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")",
	},
	backgroundColor: "rgb(13, 110, 253)",
	borderColor: "rgb(13, 110, 253)",
})

// SOURCE CSS:
// .form-check-input:disabled { pointer-events: none; filter: none; opacity: 0.5; }
globalStyle(`${sketchyScope}${formCheckInput}:disabled`, {
	pointerEvents: "none",
	filter: "none",
	opacity: 0.5,
})

// SOURCE CSS:
// .form-check-input[disabled] ~ .form-check-label { cursor: default; opacity: 0.5; }
globalStyle(`${sketchyScope}${formCheckInput}[disabled] ~ ${sketchyScope}${formCheckLabel}`, {
	cursor: "default",
	opacity: 0.5,
})

// SOURCE CSS:
// .form-check-input:disabled ~ .form-check-label { cursor: default; opacity: 0.5; }
globalStyle(`${sketchyScope}${formCheckInput}:disabled ~ ${sketchyScope}${formCheckLabel}`, {
	cursor: "default",
	opacity: 0.5,
})

// SOURCE CSS:
// .mb-3 { margin-bottom: 1rem !important; }
// [UNMAPPED_SELECTOR] class ".mb-3" — no contract mapping
globalStyle(`.mb-3`, {
	marginBottom: "1rem !important",
})

// SOURCE CSS:
// select:disabled { opacity: 1; }
// [UNMAPPED_SELECTOR] element selector "select:disabled" — map to a contract class
globalStyle(`select:disabled`, {
	opacity: 1,
})

// SOURCE CSS:
// fieldset { min-width: 0; padding: 0; margin: 0; border: 0; }
globalStyle(`fieldset`, {
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
})

// SOURCE CSS:
// .form-label { margin-bottom: 0.5rem; }
globalStyle(`${sketchyScope}${formLabel}`, {
	marginBottom: "0.5rem",
})

// SOURCE CSS:
// .form-control { display: block; width: 100%; padding: 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-body-bg); background-clip: padding-box; border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${sketchyScope}${formControl}`, {
	display: "block",
	width: "100%",
	padding: "0.375rem 0.75rem",
	fontSize: "1rem",
	fontWeight: 400,
	lineHeight: 1.5,
	color: varBsBodyColor,
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: varBsBodyBg,
	backgroundClip: "padding-box",
	border: "var(--bs-border-width) solid var(--bs-border-color)",
	borderRadius: varBsBorderRadius,
	transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control:focus { color: var(--bs-body-color); background-color: var(--bs-body-bg); border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${sketchyScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: "#86b7fe",
	outline: 0,
	boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
})

// SOURCE CSS:
// .form-control::-webkit-date-and-time-value { min-width: 85px; height: 1.5em; margin: 0; }
globalStyle(`${sketchyScope}${formControl}::-webkit-date-and-time-value`, {
	minWidth: "85px",
	height: "1.5em",
	margin: 0,
})

// SOURCE CSS:
// .form-control::-webkit-datetime-edit { display: block; padding: 0; }
globalStyle(`${sketchyScope}${formControl}::-webkit-datetime-edit`, {
	display: "block",
	padding: 0,
})

// SOURCE CSS:
// .form-control::placeholder { color: var(--bs-secondary-color); opacity: 1; }
globalStyle(`${sketchyScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: 1,
})

// SOURCE CSS:
// .form-control:disabled { background-color: var(--bs-secondary-bg); opacity: 1; }
globalStyle(`${sketchyScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: 1,
})

// SOURCE CSS:
// .form-control::-webkit-file-upload-button { padding: 0.375rem 0.75rem; margin: -0.375rem -0.75rem; -webkit-margin-end: 0.75rem; margin-inline-end: 0.75rem; color: var(--bs-body-color); background-color: var(--bs-tertiary-bg); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0; border-inline-end-width: var(--bs-border-width); border-radius: 0; -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${sketchyScope}${formControl}::-webkit-file-upload-button`, {
	padding: "0.375rem 0.75rem",
	margin: "-0.375rem -0.75rem",
	WebkitMarginEnd: "0.75rem",
	marginInlineEnd: "0.75rem",
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: "none",
	borderColor: "inherit",
	borderStyle: "solid",
	borderWidth: 0,
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: 0,
	WebkitTransition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control::file-selector-button { padding: 0.375rem 0.75rem; margin: -0.375rem -0.75rem; -webkit-margin-end: 0.75rem; margin-inline-end: 0.75rem; color: var(--bs-body-color); background-color: var(--bs-tertiary-bg); pointer-events: none; border-color: inherit; border-style: solid; border-width: 0; border-inline-end-width: var(--bs-border-width); border-radius: 0; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${sketchyScope}${formControl}::file-selector-button`, {
	padding: "0.375rem 0.75rem",
	margin: "-0.375rem -0.75rem",
	WebkitMarginEnd: "0.75rem",
	marginInlineEnd: "0.75rem",
	color: varBsBodyColor,
	backgroundColor: varBsTertiaryBg,
	pointerEvents: "none",
	borderColor: "inherit",
	borderStyle: "solid",
	borderWidth: 0,
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: 0,
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button { background-color: var(--bs-secondary-bg); }
globalStyle(`${sketchyScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// .form-control:hover:not(:disabled):not([readonly])::file-selector-button { background-color: var(--bs-secondary-bg); }
globalStyle(`${sketchyScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// .form-select { --bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"); display: block; width: 100%; padding: 0.375rem 2.25rem 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: var(--bs-body-bg); background-image: var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none); background-repeat: no-repeat; background-position: right 0.75rem center; background-size: 16px 12px; border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${sketchyScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")",
	},
	display: "block",
	width: "100%",
	padding: "0.375rem 2.25rem 0.375rem 0.75rem",
	fontSize: "1rem",
	fontWeight: 400,
	lineHeight: 1.5,
	color: varBsBodyColor,
	WebkitAppearance: "none",
	MozAppearance: "none",
	appearance: "none",
	backgroundColor: varBsBodyBg,
	backgroundImage: "var(--bs-form-select-bg-img), var(--bs-form-select-bg-icon, none)",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right 0.75rem center",
	backgroundSize: "16px 12px",
	border: "var(--bs-border-width) solid var(--bs-border-color)",
	borderRadius: varBsBorderRadius,
	transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-select:focus { border-color: #86b7fe; outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${sketchyScope}${formSelect}:focus`, {
	borderColor: "#86b7fe",
	outline: 0,
	boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
})

// SOURCE CSS:
// .form-select:disabled { background-color: var(--bs-secondary-bg); }
globalStyle(`${sketchyScope}${formSelect}:disabled`, {
	backgroundColor: varBsSecondaryBg,
})

// SOURCE CSS:
// ::file-selector-button { font: inherit; appearance: button; }
globalStyle(`::file-selector-button`, {
	font: "inherit",
	appearance: "button",
})

// SOURCE CSS:
// ::-webkit-file-upload-button { font: inherit; -webkit-appearance: button; }
globalStyle(`::-webkit-file-upload-button`, {
	font: "inherit",
	WebkitAppearance: "button",
})

// SOURCE CSS:
// .form-control[type="file"] { overflow: hidden; }
globalStyle(`${sketchyScope}${formControl}[type="file"]`, {
	overflow: "hidden",
})

// SOURCE CSS:
// .form-control[type="file"]:not(:disabled):not([readonly]) { cursor: pointer; }
globalStyle(`${sketchyScope}${formControl}[type="file"]:not(:disabled):not([readonly])`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .form-range { width: 100%; height: 1.5rem; padding: 0; -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: transparent; }
globalStyle(`${sketchyScope}${formRange}`, {
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
globalStyle(`${sketchyScope}${formRange}:focus`, {
	outline: 0,
})

// SOURCE CSS:
// .form-range:focus::-webkit-slider-thumb { box-shadow: 0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${sketchyScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: "0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
})

// SOURCE CSS:
// .form-range::-webkit-slider-thumb { width: 1rem; height: 1rem; margin-top: -0.25rem; -webkit-appearance: none; appearance: none; background-color: #0d6efd; border: 0; border-radius: 1rem; -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
globalStyle(`${sketchyScope}${formRange}::-webkit-slider-thumb`, {
	width: "1rem",
	height: "1rem",
	marginTop: "-0.25rem",
	WebkitAppearance: "none",
	appearance: "none",
	backgroundColor: "#0d6efd",
	border: 0,
	borderRadius: "1rem",
	WebkitTransition: "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
	transition: "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
})

// SOURCE CSS:
// .form-range::-webkit-slider-thumb:active { background-color: #b6d4fe; }
globalStyle(`${sketchyScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: "#b6d4fe",
})

// SOURCE CSS:
// .form-range::-webkit-slider-runnable-track { width: 100%; height: 0.5rem; color: transparent; cursor: pointer; background-color: var(--bs-secondary-bg); border-color: transparent; border-radius: 1rem; }
globalStyle(`${sketchyScope}${formRange}::-webkit-slider-runnable-track`, {
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
globalStyle(`${sketchyScope}${formRange}:disabled`, {
	pointerEvents: "none",
})

// SOURCE CSS:
// .form-range:disabled::-webkit-slider-thumb { background-color: var(--bs-secondary-color); }
globalStyle(`${sketchyScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

// SOURCE CSS:
// legend { float: left; width: 100%; padding: 0; margin-bottom: 0.5rem; line-height: inherit; font-size: calc(1.275rem + 0.3vw); }
// [UNMAPPED_SELECTOR] element selector "legend" — map to a contract class
globalStyle(`legend`, {
	float: "left",
	width: "100%",
	padding: 0,
	marginBottom: "0.5rem",
	lineHeight: "inherit",
	fontSize: "calc(1.275rem + 0.3vw)",
})

// SOURCE CSS:
// legend + * { clear: left; }
// [UNMAPPED_SELECTOR] element selector "legend" — map to a contract class
// [UNMAPPED_SELECTOR] element selector "*" — map to a contract class
globalStyle(`legend + *`, {
	clear: "left",
})

// SOURCE CSS:
// .form-check-input[type="radio"] { border-radius: 50%; }
globalStyle(`${sketchyScope}${formCheckInput}[type="radio"]`, {
	borderRadius: "50%",
})

// SOURCE CSS:
// .form-check-input:checked[type="radio"] { --bs-form-check-bg-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e"); }
globalStyle(`${sketchyScope}${formCheckInput}:checked[type="radio"]`, {
	vars: {
		[varBsFormCheckBgImage]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .form-switch { padding-left: 2.5em; }
globalStyle(`${sketchyScope}${formSwitch}`, {
	paddingLeft: "2.5em",
})

// SOURCE CSS:
// .form-switch .form-check-input { --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e"); width: 2em; margin-left: -2.5em; background-image: var(--bs-form-switch-bg); background-position: left center; border-radius: 2em; transition: background-position 0.15s ease-in-out; }
globalStyle(`${sketchyScope}${formSwitch} ${sketchyScope}${formCheckInput}`, {
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
globalStyle(`${sketchyScope}${formSwitch} ${sketchyScope}${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")",
	},
})

// SOURCE CSS:
// .form-switch .form-check-input:checked { background-position: right center; --bs-form-switch-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e"); }
globalStyle(`${sketchyScope}${formSwitch} ${sketchyScope}${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
	},
	backgroundPosition: "right center",
})

// SOURCE CSS:
// .form-floating { position: relative; }
globalStyle(`${sketchyScope}${formFloating}`, {
	position: "relative",
})

// SOURCE CSS:
// .form-floating > .form-control { height: calc(3.5rem + calc(var(--bs-border-width) * 2)); min-height: calc(3.5rem + calc(var(--bs-border-width) * 2)); line-height: 1.25; padding: 1rem 0.75rem; }
globalStyle(`${sketchyScope}${formFloating} > ${sketchyScope}${formControl}`, {
	height: "calc(3.5rem + calc(var(--bs-border-width) * 2))",
	minHeight: "calc(3.5rem + calc(var(--bs-border-width) * 2))",
	lineHeight: 1.25,
	padding: "1rem 0.75rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext { height: calc(3.5rem + calc(var(--bs-border-width) * 2)); min-height: calc(3.5rem + calc(var(--bs-border-width) * 2)); line-height: 1.25; padding: 1rem 0.75rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${sketchyScope}${formFloating} > .form-control-plaintext`, {
	height: "calc(3.5rem + calc(var(--bs-border-width) * 2))",
	minHeight: "calc(3.5rem + calc(var(--bs-border-width) * 2))",
	lineHeight: 1.25,
	padding: "1rem 0.75rem",
})

// SOURCE CSS:
// .form-floating > .form-select { height: calc(3.5rem + calc(var(--bs-border-width) * 2)); min-height: calc(3.5rem + calc(var(--bs-border-width) * 2)); line-height: 1.25; }
globalStyle(`${sketchyScope}${formFloating} > ${sketchyScope}${formSelect}`, {
	height: "calc(3.5rem + calc(var(--bs-border-width) * 2))",
	minHeight: "calc(3.5rem + calc(var(--bs-border-width) * 2))",
	lineHeight: 1.25,
})

// SOURCE CSS:
// .form-floating > label { position: absolute; top: 0; left: 0; z-index: 2; max-width: 100%; height: 100%; padding: 1rem 0.75rem; overflow: hidden; color: rgba(var(--bs-body-color-rgb), 0.65); text-align: start; text-overflow: ellipsis; white-space: nowrap; pointer-events: none; border: var(--bs-border-width) solid transparent; transform-origin: 0 0; transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out; }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${sketchyScope}${formFloating} > label`, {
	position: "absolute",
	top: 0,
	left: 0,
	zIndex: 2,
	maxWidth: "100%",
	height: "100%",
	padding: "1rem 0.75rem",
	overflow: "hidden",
	color: `rgba(${varBsBodyColorRgb}, 0.65)`,
	textAlign: "start",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	pointerEvents: "none",
	border: "var(--bs-border-width) solid transparent",
	transformOrigin: "0 0",
	transition: "opacity 0.1s ease-in-out, transform 0.1s ease-in-out",
})

// SOURCE CSS:
// .form-floating > .form-control::placeholder { color: transparent; }
globalStyle(`${sketchyScope}${formFloating} > ${sketchyScope}${formControl}::placeholder`, {
	color: "transparent",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext::placeholder { color: transparent; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${sketchyScope}${formFloating} > .form-control-plaintext::placeholder`, {
	color: "transparent",
})

// SOURCE CSS:
// .form-floating > .form-control:focus { padding-top: 1.625rem; padding-bottom: 0.625rem; }
globalStyle(`${sketchyScope}${formFloating} > ${sketchyScope}${formControl}:focus`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control:not(:placeholder-shown) { padding-top: 1.625rem; padding-bottom: 0.625rem; }
globalStyle(`${sketchyScope}${formFloating} > ${sketchyScope}${formControl}:not(:placeholder-shown)`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext:focus { padding-top: 1.625rem; padding-bottom: 0.625rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${sketchyScope}${formFloating} > .form-control-plaintext:focus`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext:not(:placeholder-shown) { padding-top: 1.625rem; padding-bottom: 0.625rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${sketchyScope}${formFloating} > .form-control-plaintext:not(:placeholder-shown)`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control:-webkit-autofill { padding-top: 1.625rem; padding-bottom: 0.625rem; }
globalStyle(`${sketchyScope}${formFloating} > ${sketchyScope}${formControl}:-webkit-autofill`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext:-webkit-autofill { padding-top: 1.625rem; padding-bottom: 0.625rem; }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
globalStyle(`${sketchyScope}${formFloating} > .form-control-plaintext:-webkit-autofill`, {
	paddingTop: "1.625rem",
	paddingBottom: "0.625rem",
})

// SOURCE CSS:
// .form-floating > .form-control:focus ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${sketchyScope}${formFloating} > ${sketchyScope}${formControl}:focus ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > .form-control:not(:placeholder-shown) ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${sketchyScope}${formFloating} > ${sketchyScope}${formControl}:not(:placeholder-shown) ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > .form-control-plaintext ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] class ".form-control-plaintext" — no contract mapping
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${sketchyScope}${formFloating} > .form-control-plaintext ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > .form-select ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${sketchyScope}${formFloating} > ${sketchyScope}${formSelect} ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > .form-control:-webkit-autofill ~ label { transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${sketchyScope}${formFloating} > ${sketchyScope}${formControl}:-webkit-autofill ~ label`, {
	transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
})

// SOURCE CSS:
// .form-floating > :disabled ~ label { color: #6c757d; }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${sketchyScope}${formFloating} > :disabled ~ label`, {
	color: "#6c757d",
})

// SOURCE CSS:
// .form-floating > .form-control:disabled ~ label { color: #6c757d; }
// [UNMAPPED_SELECTOR] element selector "label" — map to a contract class
globalStyle(`${sketchyScope}${formFloating} > ${sketchyScope}${formControl}:disabled ~ label`, {
	color: "#6c757d",
})

// SOURCE CSS:
// .input-group { position: relative; display: flex; flex-wrap: wrap; align-items: stretch; width: 100%; }
globalStyle(`${sketchyScope}${inputGroup}`, {
	position: "relative",
	display: "flex",
	flexWrap: "wrap",
	alignItems: "stretch",
	width: "100%",
})

// SOURCE CSS:
// .input-group > .form-control { position: relative; flex: 1 1 auto; width: 1%; min-width: 0; }
globalStyle(`${sketchyScope}${inputGroup} > ${sketchyScope}${formControl}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "1%",
	minWidth: 0,
})

// SOURCE CSS:
// .input-group > .form-select { position: relative; flex: 1 1 auto; width: 1%; min-width: 0; }
globalStyle(`${sketchyScope}${inputGroup} > ${sketchyScope}${formSelect}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "1%",
	minWidth: 0,
})

// SOURCE CSS:
// .input-group > .form-floating { position: relative; flex: 1 1 auto; width: 1%; min-width: 0; }
globalStyle(`${sketchyScope}${inputGroup} > ${sketchyScope}${formFloating}`, {
	position: "relative",
	flex: "1 1 auto",
	width: "1%",
	minWidth: 0,
})

// SOURCE CSS:
// .input-group > .form-control:focus { z-index: 5; }
globalStyle(`${sketchyScope}${inputGroup} > ${sketchyScope}${formControl}:focus`, {
	zIndex: 5,
})

// SOURCE CSS:
// .input-group > .form-select:focus { z-index: 5; }
globalStyle(`${sketchyScope}${inputGroup} > ${sketchyScope}${formSelect}:focus`, {
	zIndex: 5,
})

// SOURCE CSS:
// .input-group > .form-floating:focus-within { z-index: 5; }
globalStyle(`${sketchyScope}${inputGroup} > ${sketchyScope}${formFloating}:focus-within`, {
	zIndex: 5,
})

// SOURCE CSS:
// .input-group-text { display: flex; align-items: center; padding: 0.375rem 0.75rem; font-size: 1rem; font-weight: 400; line-height: 1.5; color: var(--bs-body-color); text-align: center; white-space: nowrap; background-color: var(--bs-tertiary-bg); border: var(--bs-border-width) solid var(--bs-border-color); border-radius: var(--bs-border-radius); }
globalStyle(`${sketchyScope}${inputGroupText}`, {
	display: "flex",
	alignItems: "center",
	padding: "0.375rem 0.75rem",
	fontSize: "1rem",
	fontWeight: 400,
	lineHeight: 1.5,
	color: varBsBodyColor,
	textAlign: "center",
	whiteSpace: "nowrap",
	backgroundColor: varBsTertiaryBg,
	border: "var(--bs-border-width) solid var(--bs-border-color)",
	borderRadius: varBsBorderRadius,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${sketchyScope}${inputGroup}:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${sketchyScope}${inputGroup}:not(.has-validation) > ${sketchyScope}${dropdownToggle}:nth-last-child(n+3)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${sketchyScope}${inputGroup}:not(.has-validation) > ${sketchyScope}${formFloating}:not(:last-child) > ${sketchyScope}${formControl}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${sketchyScope}${inputGroup}:not(.has-validation) > ${sketchyScope}${formFloating}:not(:last-child) > ${sketchyScope}${formSelect}`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) { margin-left: calc(-1 * var(--bs-border-width)); border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${sketchyScope}${inputGroup} > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback)`, {
	marginLeft: "calc(-1 * var(--bs-border-width))",
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// textarea.form-control { min-height: calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2)); }
// [UNMAPPED_SELECTOR] element selector "textarea.form-control" — map to a contract class
globalStyle(`textarea.form-control`, {
	minHeight: "calc(1.5em + 0.75rem + calc(var(--bs-border-width) * 2))",
})

// SOURCE CSS:
// .form-text { margin-top: 0.25rem; font-size: 0.875em; color: var(--bs-secondary-color); }
globalStyle(`${sketchyScope}${formText}`, {
	marginTop: "0.25rem",
	fontSize: "0.875em",
	color: varBsSecondaryColor,
})

// SOURCE CSS:
// .form-control-lg { min-height: calc(1.5em + 1rem + calc(var(--bs-border-width) * 2)); padding: 0.5rem 1rem; font-size: 1.25rem; border-radius: var(--bs-border-radius-lg); }
globalStyle(`${sketchyScope}${formControlLg}`, {
	minHeight: "calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))",
	padding: "0.5rem 1rem",
	fontSize: "1.25rem",
	borderRadius: varBsBorderRadiusLg,
})

// SOURCE CSS:
// .form-control-lg::-webkit-file-upload-button { padding: 0.5rem 1rem; margin: -0.5rem -1rem; -webkit-margin-end: 1rem; margin-inline-end: 1rem; }
globalStyle(`${sketchyScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: "0.5rem 1rem",
	margin: "-0.5rem -1rem",
	WebkitMarginEnd: "1rem",
	marginInlineEnd: "1rem",
})

// SOURCE CSS:
// .form-control-lg::file-selector-button { padding: 0.5rem 1rem; margin: -0.5rem -1rem; -webkit-margin-end: 1rem; margin-inline-end: 1rem; }
globalStyle(`${sketchyScope}${formControlLg}::file-selector-button`, {
	padding: "0.5rem 1rem",
	margin: "-0.5rem -1rem",
	WebkitMarginEnd: "1rem",
	marginInlineEnd: "1rem",
})

// SOURCE CSS:
// .form-select-lg { padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left: 1rem; font-size: 1.25rem; border-radius: var(--bs-border-radius-lg); }
globalStyle(`${sketchyScope}${formSelectLg}`, {
	paddingTop: "0.5rem",
	paddingBottom: "0.5rem",
	paddingLeft: "1rem",
	fontSize: "1.25rem",
	borderRadius: varBsBorderRadiusLg,
})

// SOURCE CSS:
// .form-control-sm { min-height: calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2)); padding: 0.25rem 0.5rem; font-size: 0.875rem; border-radius: var(--bs-border-radius-sm); }
globalStyle(`${sketchyScope}${formControlSm}`, {
	minHeight: "calc(1.5em + 0.5rem + calc(var(--bs-border-width) * 2))",
	padding: "0.25rem 0.5rem",
	fontSize: "0.875rem",
	borderRadius: varBsBorderRadiusSm,
})

// SOURCE CSS:
// .form-control-sm::-webkit-file-upload-button { padding: 0.25rem 0.5rem; margin: -0.25rem -0.5rem; -webkit-margin-end: 0.5rem; margin-inline-end: 0.5rem; }
globalStyle(`${sketchyScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: "0.25rem 0.5rem",
	margin: "-0.25rem -0.5rem",
	WebkitMarginEnd: "0.5rem",
	marginInlineEnd: "0.5rem",
})

// SOURCE CSS:
// .form-control-sm::file-selector-button { padding: 0.25rem 0.5rem; margin: -0.25rem -0.5rem; -webkit-margin-end: 0.5rem; margin-inline-end: 0.5rem; }
globalStyle(`${sketchyScope}${formControlSm}::file-selector-button`, {
	padding: "0.25rem 0.5rem",
	margin: "-0.25rem -0.5rem",
	WebkitMarginEnd: "0.5rem",
	marginInlineEnd: "0.5rem",
})

// SOURCE CSS:
// .form-select-sm { padding-top: 0.25rem; padding-bottom: 0.25rem; padding-left: 0.5rem; font-size: 0.875rem; border-radius: var(--bs-border-radius-sm); }
globalStyle(`${sketchyScope}${formSelectSm}`, {
	paddingTop: "0.25rem",
	paddingBottom: "0.25rem",
	paddingLeft: "0.5rem",
	fontSize: "0.875rem",
	borderRadius: varBsBorderRadiusSm,
})

// SOURCE CSS:
// .row { --bs-gutter-x: 1.5rem; --bs-gutter-y: 0; display: flex; flex-wrap: wrap; margin-top: calc(-1 * var(--bs-gutter-y)); margin-right: calc(-0.5 * var(--bs-gutter-x)); margin-left: calc(-0.5 * var(--bs-gutter-x)); }
globalStyle(`${sketchyScope}${row}`, {
	vars: {
		[varBsGutterX]: "1.5rem",
		[varBsGutterY]: 0,
	},
	display: "flex",
	flexWrap: "wrap",
	marginTop: "calc(-1 * var(--bs-gutter-y))",
	marginRight: "calc(-0.5 * var(--bs-gutter-x))",
	marginLeft: "calc(-0.5 * var(--bs-gutter-x))",
})

// SOURCE CSS:
// .row > * { flex-shrink: 0; width: 100%; max-width: 100%; padding-right: calc(var(--bs-gutter-x) * 0.5); padding-left: calc(var(--bs-gutter-x) * 0.5); margin-top: var(--bs-gutter-y); }
// [UNMAPPED_SELECTOR] element selector "*" — map to a contract class
globalStyle(`${sketchyScope}${row} > *`, {
	flexShrink: 0,
	width: "100%",
	maxWidth: "100%",
	paddingRight: "calc(var(--bs-gutter-x) * 0.5)",
	paddingLeft: "calc(var(--bs-gutter-x) * 0.5)",
	marginTop: varBsGutterY,
})

// SOURCE CSS:
// .g-3 { --bs-gutter-x: 1rem; --bs-gutter-y: 1rem; }
// [UNMAPPED_SELECTOR] class ".g-3" — no contract mapping
globalStyle(`.g-3`, {
	vars: {
		[varBsGutterX]: "1rem",
		[varBsGutterY]: "1rem",
	},
})

// SOURCE CSS:
// .gx-3 { --bs-gutter-x: 1rem; }
// [UNMAPPED_SELECTOR] class ".gx-3" — no contract mapping
globalStyle(`.gx-3`, {
	vars: {
		[varBsGutterX]: "1rem",
	},
})

// SOURCE CSS:
// .gy-3 { --bs-gutter-y: 1rem; }
// [UNMAPPED_SELECTOR] class ".gy-3" — no contract mapping
globalStyle(`.gy-3`, {
	vars: {
		[varBsGutterY]: "1rem",
	},
})

// SOURCE CSS:
// .invalid-feedback { display: none; width: 100%; margin-top: 0.25rem; font-size: 0.875em; color: var(--bs-form-invalid-color); }
globalStyle(`${sketchyScope}${invalidFeedback}`, {
	display: "none",
	width: "100%",
	marginTop: "0.25rem",
	fontSize: "0.875em",
	color: varBsFormInvalidColor,
})

// SOURCE CSS:
// .was-validated :invalid ~ .invalid-feedback { display: block; }
globalStyle(`${sketchyScope}${wasValidated} :invalid ~ ${sketchyScope}${invalidFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated :invalid ~ .invalid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".invalid-tooltip" — no contract mapping
globalStyle(`${sketchyScope}${wasValidated} :invalid ~ .invalid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .is-invalid ~ .invalid-feedback { display: block; }
globalStyle(`${sketchyScope}${isInvalid} ~ ${sketchyScope}${invalidFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .is-invalid ~ .invalid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".invalid-tooltip" — no contract mapping
globalStyle(`${sketchyScope}${isInvalid} ~ .invalid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formCheckInput}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .form-check-input.is-invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${sketchyScope}${formCheckInput}.is-invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid:checked { background-color: var(--bs-form-invalid-color); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formCheckInput}:invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

// SOURCE CSS:
// .form-check-input.is-invalid:checked { background-color: var(--bs-form-invalid-color); }
globalStyle(`${sketchyScope}${formCheckInput}.is-invalid:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formCheckInput}:invalid:focus`, {
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .form-check-input.is-invalid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${sketchyScope}${formCheckInput}.is-invalid:focus`, {
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .was-validated .form-check-input:invalid ~ .form-check-label { color: var(--bs-form-invalid-color); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formCheckInput}:invalid ~ ${sketchyScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

// SOURCE CSS:
// .form-check-input.is-invalid ~ .form-check-label { color: var(--bs-form-invalid-color); }
globalStyle(`${sketchyScope}${formCheckInput}.is-invalid ~ ${sketchyScope}${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

// SOURCE CSS:
// .was-validated .form-control:invalid { border-color: var(--bs-form-invalid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formControl}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: "calc(1.5em + 0.75rem)",
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.1875rem) center",
	backgroundSize: "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})

// SOURCE CSS:
// .form-control.is-invalid { border-color: var(--bs-form-invalid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${sketchyScope}${formControl}.is-invalid`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: "calc(1.5em + 0.75rem)",
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.1875rem) center",
	backgroundSize: "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})

// SOURCE CSS:
// .was-validated .form-control:invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formControl}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .form-control.is-invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${sketchyScope}${formControl}.is-invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .was-validated .form-select:invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formSelect}:invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .form-select.is-invalid { border-color: var(--bs-form-invalid-border-color); }
globalStyle(`${sketchyScope}${formSelect}.is-invalid`, {
	borderColor: varBsFormInvalidBorderColor,
})

// SOURCE CSS:
// .was-validated .form-select:invalid:not([multiple]):not([size]) { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formSelect}:invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "4.125rem",
	backgroundPosition: "right 0.75rem center, center right 2.25rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})

// SOURCE CSS:
// .was-validated .form-select:invalid:not([multiple])[size="1"] { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formSelect}:invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "4.125rem",
	backgroundPosition: "right 0.75rem center, center right 2.25rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})

// SOURCE CSS:
// .form-select.is-invalid:not([multiple]):not([size]) { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${sketchyScope}${formSelect}.is-invalid:not([multiple]):not([size])`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "4.125rem",
	backgroundPosition: "right 0.75rem center, center right 2.25rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})

// SOURCE CSS:
// .form-select.is-invalid:not([multiple])[size="1"] { --bs-form-select-bg-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e"); padding-right: 4.125rem; background-position: right 0.75rem center, center right 2.25rem; background-size: 16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${sketchyScope}${formSelect}.is-invalid:not([multiple])[size="1"]`, {
	vars: {
		[varBsFormSelectBgIcon]: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")",
	},
	paddingRight: "4.125rem",
	backgroundPosition: "right 0.75rem center, center right 2.25rem",
	backgroundSize: "16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})

// SOURCE CSS:
// .was-validated .form-select:invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formSelect}:invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .form-select.is-invalid:focus { border-color: var(--bs-form-invalid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25); }
globalStyle(`${sketchyScope}${formSelect}.is-invalid:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-danger-rgb), 0.25)",
})

// SOURCE CSS:
// .was-validated .input-group > .form-control:not(:focus):invalid { z-index: 4; }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${inputGroup} > ${sketchyScope}${formControl}:not(:focus):invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .input-group > .form-control:not(:focus).is-invalid { z-index: 4; }
globalStyle(`${sketchyScope}${inputGroup} > ${sketchyScope}${formControl}:not(:focus).is-invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .was-validated .input-group > .form-select:not(:focus):invalid { z-index: 4; }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${inputGroup} > ${sketchyScope}${formSelect}:not(:focus):invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .input-group > .form-select:not(:focus).is-invalid { z-index: 4; }
globalStyle(`${sketchyScope}${inputGroup} > ${sketchyScope}${formSelect}:not(:focus).is-invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .was-validated .input-group > .form-floating:not(:focus-within):invalid { z-index: 4; }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${inputGroup} > ${sketchyScope}${formFloating}:not(:focus-within):invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .input-group > .form-floating:not(:focus-within).is-invalid { z-index: 4; }
globalStyle(`${sketchyScope}${inputGroup} > ${sketchyScope}${formFloating}:not(:focus-within).is-invalid`, {
	zIndex: 4,
})

// SOURCE CSS:
// .valid-feedback { display: none; width: 100%; margin-top: 0.25rem; font-size: 0.875em; color: var(--bs-form-valid-color); }
globalStyle(`${sketchyScope}${validFeedback}`, {
	display: "none",
	width: "100%",
	marginTop: "0.25rem",
	fontSize: "0.875em",
	color: varBsFormValidColor,
})

// SOURCE CSS:
// .was-validated :valid ~ .valid-feedback { display: block; }
globalStyle(`${sketchyScope}${wasValidated} :valid ~ ${sketchyScope}${validFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated :valid ~ .valid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".valid-tooltip" — no contract mapping
globalStyle(`${sketchyScope}${wasValidated} :valid ~ .valid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .is-valid ~ .valid-feedback { display: block; }
globalStyle(`${sketchyScope}${isValid} ~ ${sketchyScope}${validFeedback}`, {
	display: "block",
})

// SOURCE CSS:
// .is-valid ~ .valid-tooltip { display: block; }
// [UNMAPPED_SELECTOR] class ".valid-tooltip" — no contract mapping
globalStyle(`${sketchyScope}${isValid} ~ .valid-tooltip`, {
	display: "block",
})

// SOURCE CSS:
// .was-validated .form-check-input:valid { border-color: var(--bs-form-valid-border-color); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formCheckInput}:valid`, {
	borderColor: varBsFormValidBorderColor,
})

// SOURCE CSS:
// .form-check-input.is-valid { border-color: var(--bs-form-valid-border-color); }
globalStyle(`${sketchyScope}${formCheckInput}.is-valid`, {
	borderColor: varBsFormValidBorderColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:valid:checked { background-color: var(--bs-form-valid-color); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formCheckInput}:valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

// SOURCE CSS:
// .form-check-input.is-valid:checked { background-color: var(--bs-form-valid-color); }
globalStyle(`${sketchyScope}${formCheckInput}.is-valid:checked`, {
	backgroundColor: varBsFormValidColor,
})

// SOURCE CSS:
// .was-validated .form-check-input:valid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formCheckInput}:valid:focus`, {
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25)",
})

// SOURCE CSS:
// .form-check-input.is-valid:focus { box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${sketchyScope}${formCheckInput}.is-valid:focus`, {
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25)",
})

// SOURCE CSS:
// .was-validated .form-check-input:valid ~ .form-check-label { color: var(--bs-form-valid-color); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formCheckInput}:valid ~ ${sketchyScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

// SOURCE CSS:
// .form-check-input.is-valid ~ .form-check-label { color: var(--bs-form-valid-color); }
globalStyle(`${sketchyScope}${formCheckInput}.is-valid ~ ${sketchyScope}${formCheckLabel}`, {
	color: varBsFormValidColor,
})

// SOURCE CSS:
// .was-validated .form-control:valid { border-color: var(--bs-form-valid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formControl}:valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: "calc(1.5em + 0.75rem)",
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.1875rem) center",
	backgroundSize: "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})

// SOURCE CSS:
// .form-control.is-valid { border-color: var(--bs-form-valid-border-color); padding-right: calc(1.5em + 0.75rem); background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e"); background-repeat: no-repeat; background-position: right calc(0.375em + 0.1875rem) center; background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem); }
globalStyle(`${sketchyScope}${formControl}.is-valid`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: "calc(1.5em + 0.75rem)",
	backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "right calc(0.375em + 0.1875rem) center",
	backgroundSize: "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)",
})

// SOURCE CSS:
// .was-validated .form-control:valid:focus { border-color: var(--bs-form-valid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${sketchyScope}${wasValidated} ${sketchyScope}${formControl}:valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25)",
})

// SOURCE CSS:
// .form-control.is-valid:focus { border-color: var(--bs-form-valid-border-color); box-shadow: 0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25); }
globalStyle(`${sketchyScope}${formControl}.is-valid:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: "0 0 0 0.25rem rgba(var(--bs-success-rgb), 0.25)",
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
// [DELTA] unmapped selector: .form-switch .form-check-input::before
// [DELTA] unmapped selector: .form-switch .form-check-input::after
// [DELTA] unmapped selector: .form-switch .form-check-input:checked::after
// [DELTA] unmapped selector: .form-switch .form-check-label
