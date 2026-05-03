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
	varBsDangerRgb,
	varBsSecondaryBg,
	varBsSecondaryColor,
	varBsSuccessRgb,
	varBsTertiaryBg,
} from '../../../theme-contract/_vars.css'
import {
	varBsFormCheckBg,
	varBsFormCheckBgImage,
	varBsFormSelectBgImg,
	varBsFormSwitchBg,
	varBsFormValidColor,
	varBsFormValidBorderColor,
	varBsFormInvalidColor,
	varBsFormInvalidBorderColor,
} from '../../../theme-contract/forms/_vars.css'
import {
	colMd6,
	fieldset,
	floatingLabel,
	form,
	formCheck,
	formCheckInput,
	formCheckLabel,
	formControl,
	formControlFloating,
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
	mb3,
	g3,
	row,
	rowCol,
	validFeedback,
} from '../../../theme-contract/forms/contract.css'
import { quartzScope } from '../scope.css'

// ─── SVG icons ────────────────────────────────────────────────────────────────

const checkedMarkIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")"

const checkedRadioIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")"

const switchKnobIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")"

const switchKnobFocusIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")"

const switchKnobCheckedIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")"

const selectChevronIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")"

const invalidIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23fd7e14'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23fd7e14' stroke='none'/%3e%3c/svg%3e\")"

const validIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2341d7a7' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")"

// ─── Utilities ────────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${mb3}`, {
	marginBottom: '2rem',
})

// Bootstrap grid utilities used by validation form demos.
globalStyle(`${quartzScope}${row}`, {
	vars: {
		'--bs-gutter-x': '1.5rem',
		'--bs-gutter-y': '0',
	},
	display: 'flex',
	flexWrap: 'wrap',
	marginTop: 'calc(-1 * var(--bs-gutter-y))',
	marginRight: 'calc(-0.5 * var(--bs-gutter-x))',
	marginLeft: 'calc(-0.5 * var(--bs-gutter-x))',
})

globalStyle(`${quartzScope}${rowCol}`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: 'calc(var(--bs-gutter-x) * 0.5)',
	paddingLeft: 'calc(var(--bs-gutter-x) * 0.5)',
	marginTop: 'var(--bs-gutter-y)',
})

globalStyle(`${quartzScope}${g3}`, {
	vars: {
		'--bs-gutter-x': '1rem',
		'--bs-gutter-y': '2rem',
	},
})

globalStyle(`${quartzScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

// ─── Form label / text ────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${formLabel}`, {
	display: 'inline-block',
	marginBottom: '0.5rem',
})

globalStyle(`${quartzScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Form control (input/textarea) ────────────────────────────────────────────

globalStyle(`${quartzScope}${formControl}`, {
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	display: 'block',
	width: '100%',
	padding: '0.75rem 1.5rem',
	fontWeight: 400,
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundClip: 'padding-box',
	border: '1px solid rgba(255, 255, 255, 0.4)',
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: 'transparent',
	borderColor: 'rgba(255, 255, 255, 0.4)',
	outline: 0,
	boxShadow: 'none',
})

globalStyle(`${quartzScope}${formControl}::placeholder`, {
	color: 'rgba(255, 255, 255, 0.7)',
	opacity: 1,
})

globalStyle(`${quartzScope}${formControl}:disabled`, {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
	opacity: 1,
})

globalStyle(`${quartzScope}${formControl}[type="file"]`, {
	overflow: 'hidden',
})

globalStyle(`${quartzScope}${formControl}[type="file"]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${quartzScope}${formControl}::-webkit-file-upload-button`, {
	font: 'inherit',
	WebkitAppearance: 'button',
	padding: '0.75rem 1.5rem',
	margin: '-0.75rem -1.5rem',
	WebkitMarginEnd: '1.5rem',
	marginInlineEnd: '1.5rem',
	color: varBsBodyColor,
	backgroundColor: 'transparent',
	backgroundImage:
		'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	backdropFilter: 'blur(5px)',
	pointerEvents: 'none',
	border: 'none',
	borderRadius: 0,
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formControl}::file-selector-button`, {
	font: 'inherit',
	appearance: 'button',
	padding: '0.75rem 1.5rem',
	margin: '-0.75rem -1.5rem',
	WebkitMarginEnd: '1.5rem',
	marginInlineEnd: '1.5rem',
	color: varBsBodyColor,
	backgroundColor: 'transparent',
	backgroundImage:
		'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	backdropFilter: 'blur(5px)',
	pointerEvents: 'none',
	border: 'none',
	borderRadius: 0,
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(
	`${quartzScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`,
	{ backgroundColor: 'rgba(255, 255, 255, 0.1)' },
)
globalStyle(
	`${quartzScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`,
	{ backgroundColor: 'rgba(255, 255, 255, 0.1)' },
)

// @media prefers-reduced-motion
globalStyle(`${quartzScope}${formControl}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

// ─── Form control sizing ───────────────────────────────────────────────────────

globalStyle(`${quartzScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${quartzScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${quartzScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${quartzScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${quartzScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

// ─── Form select ──────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${formSelect}`, {
	vars: { [varBsFormSelectBgImg]: selectChevronIcon },
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	textTransform: 'none',
	wordWrap: 'normal',
	display: 'block',
	width: '100%',
	padding: '0.75rem 4.5rem 0.75rem 1.5rem',
	fontWeight: 400,
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundImage: `${varBsFormSelectBgImg}, var(--bs-form-select-bg-icon, none)`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 1.5rem center',
	backgroundSize: '16px 12px',
	border: '1px solid rgba(255, 255, 255, 0.4)',
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formSelect}:focus`, {
	borderColor: 'rgba(255, 255, 255, 0.4)',
	outline: 0,
	boxShadow: 'none',
})

globalStyle(`${quartzScope}${formSelect}:disabled`, {
	color: 'rgba(255, 255, 255, 0.7)',
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
	opacity: 1,
})

globalStyle(`${quartzScope}${formSelect}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

globalStyle(`${quartzScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${quartzScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

// ─── Form range ───────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${formRange}`, {
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	width: '100%',
	height: '1.5rem',
	padding: 0,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${quartzScope}${formRange}:focus`, {
	outline: 0,
})

globalStyle(`${quartzScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#e83283',
	border: 0,
	borderRadius: '1rem',
	transition:
		'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#f8c2da',
})

globalStyle(`${quartzScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${quartzScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${quartzScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

// ─── Form check ───────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${quartzScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${quartzScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: 'rgba(255, 255, 255, 0.3)',
		[varBsFormCheckBgImage]: 'none',
		[varBsFormSwitchBg]: switchKnobIcon,
	},
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	flexShrink: 0,
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
	border: '1px solid rgba(255, 255, 255, 0.2)',
	WebkitPrintColorAdjust: 'exact',
	printColorAdjust: 'exact',
})

globalStyle(`${quartzScope}${formCheckInput}[type="checkbox"]`, {
	borderRadius: '0.25em',
})

globalStyle(`${quartzScope}${formCheckInput}[type="radio"]`, {
	borderRadius: '50%',
})

globalStyle(`${quartzScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${quartzScope}${formCheckInput}:focus`, {
	borderColor: 'rgba(255, 255, 255, 0.4)',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(232, 50, 131, 0.25)',
})

globalStyle(`${quartzScope}${formCheckInput}:checked`, {
	backgroundColor: '#e83283',
	borderColor: '#e83283',
})

globalStyle(`${quartzScope}${formCheckInput}:checked[type="checkbox"]`, {
	vars: { [varBsFormCheckBgImage]: checkedMarkIcon },
})

globalStyle(`${quartzScope}${formCheckInput}:checked[type="radio"]`, {
	vars: { [varBsFormCheckBgImage]: checkedRadioIcon },
})

globalStyle(`${quartzScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: 0.5,
})

globalStyle(`${quartzScope}${formCheckLabel}`, {
	display: 'inline-block',
})

globalStyle(`${quartzScope}${formCheck} ${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${quartzScope}${formSwitch} ${formCheckInput}`, {
	width: '2em',
	marginLeft: '-2.5em',
	backgroundImage: varBsFormSwitchBg,
	backgroundPosition: 'left center',
	borderRadius: '2em',
	transition: 'background-position 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formSwitch} ${formCheckInput}:focus`, {
	vars: { [varBsFormSwitchBg]: switchKnobFocusIcon },
})

globalStyle(`${quartzScope}${formSwitch} ${formCheckInput}:checked`, {
	backgroundPosition: 'right center',
	vars: { [varBsFormSwitchBg]: switchKnobCheckedIcon },
})

globalStyle(
	`${quartzScope}${formCheckInput}[disabled] ~ ${formCheckLabel}, ${quartzScope}${formCheckInput}:disabled ~ ${formCheckLabel}`,
	{
		cursor: 'default',
		opacity: 0.5,
	},
)

globalStyle(`${quartzScope}${formSwitch} ${formCheckInput}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

// ─── Input group ──────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${quartzScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.75rem 1.5rem',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: 'transparent',
	backgroundImage:
		'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	backdropFilter: 'blur(5px)',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1)',
	border: 'none',
	borderRadius: varBsBorderRadius,
})

globalStyle(
	`${quartzScope}${inputGroup} > input, ${quartzScope}${inputGroup} > select, ${quartzScope}${inputGroup} > textarea, ${quartzScope}${inputGroup} > .form-floating`,
	{
		position: 'relative',
		flex: '1 1 auto',
		width: '1%',
		minWidth: 0,
	},
)

globalStyle(
	`${quartzScope}${inputGroup} > input:focus, ${quartzScope}${inputGroup} > select:focus, ${quartzScope}${inputGroup} > textarea:focus, ${quartzScope}${inputGroup} > .form-floating:focus-within`,
	{ zIndex: 5 },
)

globalStyle(
	`${quartzScope}${inputGroup} > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`,
	{ borderTopRightRadius: 0, borderBottomRightRadius: 0 },
)

globalStyle(
	`${quartzScope}${inputGroup} > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback)`,
	{
		marginLeft: 0,
		borderLeft: 'none',
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
)

// ─── Floating label ───────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${quartzScope}${floatingLabel}`, {
	position: 'absolute',
	top: 0,
	left: 0,
	zIndex: 2,
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

globalStyle(`${quartzScope}${floatingLabel}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

globalStyle(`${quartzScope}${formControlFloating}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
	padding: '1rem 1.5rem',
})

globalStyle(`${quartzScope}${formControlFloating}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${quartzScope}${formControlFloating}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formControlFloating}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formControlFloating}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${quartzScope}${formControlFloating}:focus ~ ${floatingLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(
	`${quartzScope}${formFloating} > ${formControlFloating}::placeholder`,
	{ color: 'transparent' },
)

globalStyle(
	`${quartzScope}${formFloating} > ${formControlFloating}::-webkit-input-placeholder`,
	{ color: 'transparent' },
)

globalStyle(
	`${quartzScope}${formControlFloating}:not(:placeholder-shown) ~ ${floatingLabel}`,
	{ transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)' },
)

globalStyle(`${quartzScope}${formControlFloating}:-webkit-autofill ~ ${floatingLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${quartzScope}${formControlFloating}:disabled ~ ${floatingLabel}`, {
	color: '#6c757d',
})

// ─── Fieldset / legend ────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${fieldset}`, {
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
})

globalStyle(`${quartzScope}${legend}`, {
	float: 'left',
	width: '100%',
	padding: 0,
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '1.5rem' } },
})

globalStyle(`${quartzScope}${legendClear}`, {
	clear: 'left',
})

// ─── Validation ───────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${quartzScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${isValid} ~ ${validFeedback}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${isInvalid} ~ ${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${quartzScope}${formControl}${isValid}, ${quartzScope}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 1.5rem)',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.375rem) center',
	backgroundSize: 'calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	backgroundImage: validIcon,
})

globalStyle(`${quartzScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	backgroundImage: invalidIcon,
})

globalStyle(`${quartzScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${quartzScope}${formSelect}${isValid}:not([multiple]):not([size]), ${quartzScope}${formSelect}${isValid}:not([multiple])[size="1"]`, {
	vars: { '--bs-form-select-bg-icon': validIcon },
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${quartzScope}${formSelect}${isInvalid}:not([multiple]):not([size]), ${quartzScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`, {
	vars: { '--bs-form-select-bg-icon': invalidIcon },
	paddingRight: '8.25rem',
	backgroundPosition: 'right 1.5rem center, center right 4.5rem',
	backgroundSize: '16px 12px, calc(0.75em + 0.75rem) calc(0.75em + 0.75rem)',
})

globalStyle(`${quartzScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formCheckInput}${isValid} ~ ${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${quartzScope}${formCheckInput}${isInvalid} ~ ${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(
	`${quartzScope}${inputGroup}${hasValidation} > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`,
	{ borderTopRightRadius: 0, borderBottomRightRadius: 0 },
)

globalStyle(
	`${quartzScope}${inputGroup}:not(${hasValidation}) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu), ${quartzScope}${inputGroup}:not(${hasValidation}) > .dropdown-toggle:nth-last-child(n + 3)`,
	{ borderRight: 'none' },
)

globalStyle(`${quartzScope}${formSelect}:not([multiple])`, {
	transition: 'border-color 0.15s ease-in-out',
})

globalStyle(`${quartzScope}${formSelect}:not([multiple]) option`, {
	color: '#000',
})

globalStyle(`${quartzScope} .bg-light ${formControl}`, {
	color: '#343a40',
	borderColor: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope} .bg-light ${formControl}::placeholder`, {
	color: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(
	`${quartzScope}${inputGroup} > ${formControl}:not(:focus)${isInvalid}, ${quartzScope}${inputGroup} > ${formControl}:not(:focus)${isValid}, ${quartzScope}${inputGroup} > ${formSelect}:not(:focus)${isInvalid}, ${quartzScope}${inputGroup} > ${formSelect}:not(:focus)${isValid}`,
	{ zIndex: 4 },
)

