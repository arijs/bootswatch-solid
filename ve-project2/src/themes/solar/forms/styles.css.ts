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
	varBsGutterX,
	varBsGutterY,
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
import { solarScope } from '../scope.css'

// ─── SVG icons ────────────────────────────────────────────────────────────────

const checkedMarkIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")"

const checkedRadioIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='rgba%28255, 255, 255, 0.75%29'/%3e%3c/svg%3e\")"

const switchKnobIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.75%29'/%3e%3c/svg%3e\")"

const switchKnobFocusIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.75%29'/%3e%3c/svg%3e\")"

const switchKnobCheckedIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.75%29'/%3e%3c/svg%3e\")"

const selectChevronIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23073642' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")"

const invalidIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23d33682'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23d33682' stroke='none'/%3e%3c/svg%3e\")"

const validIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%232aa198' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")"

// ─── Utilities ────────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${mb3}`, {
	marginBottom: '1rem',
})

// Bootstrap grid utilities used by validation form demos.
globalStyle(`${solarScope}${row}`, {
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '0',
	},
	display: 'flex',
	flexWrap: 'wrap',
	marginTop: `calc(-1 * ${varBsGutterY})`,
	marginRight: `calc(-0.5 * ${varBsGutterX})`,
	marginLeft: `calc(-0.5 * ${varBsGutterX})`,
})

globalStyle(`${solarScope}${rowCol}`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${solarScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${solarScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

// ─── Form label / text ────────────────────────────────────────────────────────

globalStyle(`${solarScope}${formLabel}`, {
	display: 'inline-block',
	marginBottom: '0.5rem',
})

globalStyle(`${solarScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Form control (input/textarea) ────────────────────────────────────────────

globalStyle(`${solarScope}${formControl}`, {
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	display: 'block',
	width: '100%',
	padding: '0.375rem 0.75rem',
	fontWeight: 400,
	color: '#073642',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#adb5bd',
	backgroundClip: 'padding-box',
	border: `${varBsBorderWidth} solid rgba(0, 0, 0, 0.15)`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${solarScope}${formControl}:focus`, {
	color: '#073642',
	backgroundColor: '#adb5bd',
	borderColor: '#839ba1',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(181, 137, 0, 0.25)',
})

globalStyle(`${solarScope}${formControl}::placeholder`, {
	color: '#657b83',
	opacity: 1,
})

globalStyle(`${solarScope}${formControl}:disabled`, {
	color: '#fdf6e3',
	backgroundColor: '#839496',
	opacity: 1,
})

globalStyle(`${solarScope}${formControl}[type="file"]`, {
	overflow: 'hidden',
})

globalStyle(`${solarScope}${formControl}[type="file"]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${solarScope}${formControl}::-webkit-file-upload-button`, {
	font: 'inherit',
	WebkitAppearance: 'button',
	padding: '0.375rem 0.75rem',
	margin: '-0.375rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
	color: '#839496',
	backgroundColor: varBsTertiaryBg,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: 0,
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${solarScope}${formControl}::file-selector-button`, {
	font: 'inherit',
	appearance: 'button',
	padding: '0.375rem 0.75rem',
	margin: '-0.375rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
	color: '#839496',
	backgroundColor: varBsTertiaryBg,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	borderInlineEndWidth: varBsBorderWidth,
	borderRadius: 0,
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(
	`${solarScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`,
	{ backgroundColor: varBsSecondaryBg },
)
globalStyle(
	`${solarScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`,
	{ backgroundColor: varBsSecondaryBg },
)

// @media prefers-reduced-motion
globalStyle(`${solarScope}${formControl}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

// ─── Form control sizing ───────────────────────────────────────────────────────

globalStyle(`${solarScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${solarScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${solarScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${solarScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${solarScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${solarScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

// ─── Form select ──────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${formSelect}`, {
	vars: { [varBsFormSelectBgImg]: selectChevronIcon },
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	textTransform: 'none',
	wordWrap: 'normal',
	display: 'block',
	width: '100%',
	padding: '0.375rem 2.25rem 0.375rem 0.75rem',
	fontWeight: 400,
	color: '#073642',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#adb5bd',
	backgroundImage: `${varBsFormSelectBgImg}, none`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 0.75rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid rgba(0, 0, 0, 0.15)`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${solarScope}${formSelect}:focus`, {
	borderColor: '#839ba1',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(181, 137, 0, 0.25)',
})

globalStyle(`${solarScope}${formSelect}:disabled`, {
	color: '#495057',
	backgroundColor: '#839496',
	opacity: 1,
})

globalStyle(`${solarScope}${formSelect}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

globalStyle(`${solarScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${solarScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

// ─── Form range ───────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${formRange}`, {
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

globalStyle(`${solarScope}${formRange}:focus`, {
	outline: 0,
})

globalStyle(`${solarScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #002b36, 0 0 0 0.25rem rgba(181, 137, 0, 0.25)',
})

globalStyle(`${solarScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#b58900',
	border: 0,
	borderRadius: '1rem',
	transition:
		'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${solarScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#b5c3c6',
})

globalStyle(`${solarScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: '#073642',
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${solarScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${solarScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

// ─── Form check ───────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${solarScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${solarScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: 'rgba(255, 255, 255, 0.75)',
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
	border: `${varBsBorderWidth} solid #fff`,
	WebkitPrintColorAdjust: 'exact',
	printColorAdjust: 'exact',
})

globalStyle(`${solarScope}${formCheckInput}[type="checkbox"]`, {
	borderRadius: '0.25em',
})

globalStyle(`${solarScope}${formCheckInput}[type="radio"]`, {
	borderRadius: '50%',
})

globalStyle(`${solarScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${solarScope}${formCheckInput}:focus`, {
	borderColor: '#839ba1',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(181, 137, 0, 0.25)',
})

globalStyle(`${solarScope}${formCheckInput}:checked`, {
	backgroundColor: '#b58900',
	borderColor: '#b58900',
})

globalStyle(`${solarScope}${formCheckInput}[type="checkbox"]:indeterminate`, {
	backgroundColor: '#073642',
	borderColor: '#073642',
	vars: {
		[varBsFormCheckBgImage]:
			"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='rgba%28255, 255, 255, 0.75%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")",
	},
})

globalStyle(`${solarScope}${formCheckInput}:checked[type="checkbox"]`, {
	vars: { [varBsFormCheckBgImage]: checkedMarkIcon },
})

globalStyle(`${solarScope}${formCheckInput}:checked[type="radio"]`, {
	vars: { [varBsFormCheckBgImage]: checkedRadioIcon },
})

globalStyle(`${solarScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: 0.5,
})

globalStyle(`${solarScope}${formCheckLabel}`, {
	display: 'inline-block',
})

globalStyle(`${solarScope}${formCheck} ${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${solarScope}${formSwitch} ${formCheckInput}`, {
	width: '2em',
	marginLeft: '-2.5em',
	backgroundImage: varBsFormSwitchBg,
	backgroundPosition: 'left center',
	borderRadius: '2em',
	transition: 'background-position 0.15s ease-in-out',
})

globalStyle(`${solarScope}${formSwitch} ${formCheckInput}:focus`, {
	vars: { [varBsFormSwitchBg]: switchKnobFocusIcon },
})

globalStyle(`${solarScope}${formSwitch} ${formCheckInput}:checked`, {
	backgroundPosition: 'right center',
	vars: { [varBsFormSwitchBg]: switchKnobCheckedIcon },
})

globalStyle(
	`${solarScope}${formCheckInput}[disabled] ~ ${formCheckLabel}, ${solarScope}${formCheckInput}:disabled ~ ${formCheckLabel}`,
	{
		cursor: 'default',
		opacity: 0.5,
	},
)

globalStyle(`${solarScope}${formSwitch} ${formCheckInput}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

// ─── Input group ──────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${solarScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: '1.5',
	color: '#839496',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: '#073642',
	border: `${varBsBorderWidth} solid rgba(0, 0, 0, 0.15)`,
	borderRadius: varBsBorderRadius,
})

globalStyle(
	`${solarScope}${inputGroup} > input, ${solarScope}${inputGroup} > select, ${solarScope}${inputGroup} > textarea, ${solarScope}${inputGroup} > .form-floating`,
	{
		position: 'relative',
		flex: '1 1 auto',
		width: '1%',
		minWidth: 0,
	},
)

globalStyle(
	`${solarScope}${inputGroup} > input:focus, ${solarScope}${inputGroup} > select:focus, ${solarScope}${inputGroup} > textarea:focus, ${solarScope}${inputGroup} > .form-floating:focus-within`,
	{ zIndex: 5 },
)

globalStyle(
	`${solarScope}${inputGroup} > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`,
	{ borderTopRightRadius: 0, borderBottomRightRadius: 0 },
)

globalStyle(
	`${solarScope}${inputGroup} > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback)`,
	{
		marginLeft: `calc(-1 * ${varBsBorderWidth})`,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
)

// ─── Floating label ───────────────────────────────────────────────────────────

globalStyle(`${solarScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${solarScope}${floatingLabel}`, {
	position: 'absolute',
	top: 0,
	left: 0,
	zIndex: 2,
	maxWidth: '100%',
	height: '100%',
	padding: '1rem 0.75rem',
	overflow: 'hidden',
	color: 'rgba(131, 148, 150, 0.65)',
	textAlign: 'start',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	pointerEvents: 'none',
	border: `${varBsBorderWidth} solid transparent`,
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${solarScope}${floatingLabel}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

globalStyle(`${solarScope}${formControlFloating}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
	padding: '1rem 0.75rem',
})

globalStyle(`${solarScope}${formControlFloating}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${solarScope}${formControlFloating}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${solarScope}${formControlFloating}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${solarScope}${formControlFloating}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${solarScope}${formControlFloating}:focus ~ ${floatingLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(
	`${solarScope}${formFloating} > ${formControlFloating}::placeholder`,
	{ color: 'transparent' },
)

globalStyle(
	`${solarScope}${formFloating} > ${formControlFloating}::-webkit-input-placeholder`,
	{ color: 'transparent' },
)

globalStyle(
	`${solarScope}${formControlFloating}:not(:placeholder-shown) ~ ${floatingLabel}`,
	{ transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)' },
)

globalStyle(`${solarScope}${formControlFloating}:-webkit-autofill ~ ${floatingLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${solarScope}${formControlFloating}:disabled ~ ${floatingLabel}`, {
	color: '#839496',
})

globalStyle(
	`${solarScope}${formFloating} > textarea${formControlFloating}:focus ~ ${floatingLabel}::after, ${solarScope}${formFloating} > textarea${formControlFloating}:not(:placeholder-shown) ~ ${floatingLabel}::after`,
	{
		position: 'absolute',
		inset: '1rem 0.375rem',
		zIndex: -1,
		height: '1.5em',
		content: '',
		backgroundColor: '#adb5bd',
		borderRadius: varBsBorderRadius,
	},
)

globalStyle(`${solarScope}${formFloating} > textarea${formControlFloating}:disabled ~ ${floatingLabel}::after`, {
	backgroundColor: '#839496',
})

// ─── Fieldset / legend ────────────────────────────────────────────────────────

globalStyle(`${solarScope}${fieldset}`, {
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
})

globalStyle(`${solarScope}${legend}`, {
	float: 'left',
	width: '100%',
	padding: 0,
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '1.5rem' } },
})

globalStyle(`${solarScope}${legendClear}`, {
	clear: 'left',
})

// ─── Validation ───────────────────────────────────────────────────────────────

globalStyle(`${solarScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${solarScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${solarScope}${isValid} ~ ${validFeedback}`, {
	display: 'block',
})

globalStyle(`${solarScope}${isInvalid} ~ ${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${solarScope}${formControl}${isValid}, ${solarScope}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${solarScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	backgroundColor: '#adb5bd',
	backgroundImage: validIcon,
})

globalStyle(`${solarScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${solarScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	backgroundColor: '#adb5bd',
	backgroundImage: invalidIcon,
})

globalStyle(`${solarScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${solarScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	backgroundColor: '#adb5bd',
	paddingRight: '4.125rem',
	backgroundImage: `${varBsFormSelectBgImg}, ${validIcon}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize:
		'16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${solarScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${solarScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	backgroundColor: '#adb5bd',
	paddingRight: '4.125rem',
	backgroundImage: `${varBsFormSelectBgImg}, ${invalidIcon}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 0.75rem center, center right 2.25rem',
	backgroundSize:
		'16px 12px, calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${solarScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${solarScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${solarScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${solarScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${solarScope}${formCheckInput}${isValid} ~ ${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${solarScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${solarScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${solarScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${solarScope}${formCheckInput}${isInvalid} ~ ${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(
	`${solarScope}${inputGroup}${hasValidation} > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`,
	{ borderTopRightRadius: 0, borderBottomRightRadius: 0 },
)

globalStyle(
	`${solarScope}${inputGroup} > ${formControl}:not(:focus)${isInvalid}, ${solarScope}${inputGroup} > ${formControl}:not(:focus)${isValid}, ${solarScope}${inputGroup} > ${formSelect}:not(:focus)${isInvalid}, ${solarScope}${inputGroup} > ${formSelect}:not(:focus)${isValid}`,
	{ zIndex: 4 },
)

