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
	colMd6,
	formSwitch,
	formText,
	g3,
	hasValidation,
	inputGroup,
	inputGroupText,
	invalidFeedback,
	isInvalid,
	isValid,
	legend,
	legendClear,
	mb3,
	row,
	rowCol,
	validFeedback,
} from '../../../theme-contract/forms/contract.css'
import { sketchyScope } from '../scope.css'

// ─── SVG icons ────────────────────────────────────────────────────────────────

const checkedMarkIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")"

const checkedRadioIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")"

const switchKnobIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\")"

const switchKnobFocusIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")"

const switchKnobCheckedIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")"

const selectChevronIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")"

const invalidIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"

const validIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='m2.3 6.73.54.54 2.4-2.4-.53-.53-1.87 1.86-.8-.8-.53.53z'/%3e%3c/svg%3e\")"



// ─── Utilities ────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${mb3}`, {
	marginBottom: '1rem',
})

// ─── Form label / text ────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${formLabel}`, {
	display: 'inline-block',
	marginBottom: '0.5rem',
})

globalStyle(`${sketchyScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Form control (input/textarea) ────────────────────────────────────────────

globalStyle(`${sketchyScope}${formControl}`, {
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	display: 'block',
	width: '100%',
	padding: '0.375rem 0.75rem',
	fontWeight: 700,
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsBodyBg,
	backgroundClip: 'padding-box',
	border: `${varBsBorderWidth} solid #333`,
	borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${sketchyScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: '#333',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(51, 51, 51, 0.25)',
})

globalStyle(`${sketchyScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: 1,
})

globalStyle(`${sketchyScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	borderColor: '#868e96',
	opacity: 1,
})

globalStyle(`${sketchyScope}${formControl}[type="file"]`, {
	overflow: 'hidden',
})

globalStyle(`${sketchyScope}${formControl}[type="file"]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${sketchyScope}${formControl}::-webkit-file-upload-button`, {
	font: 'inherit',
	WebkitAppearance: 'button',
	padding: '0.375rem 0.75rem',
	margin: '-0.375rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
	color: varBsBodyColor,
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

globalStyle(`${sketchyScope}${formControl}::file-selector-button`, {
	font: 'inherit',
	appearance: 'button',
	padding: '0.375rem 0.75rem',
	margin: '-0.375rem -0.75rem',
	WebkitMarginEnd: '0.75rem',
	marginInlineEnd: '0.75rem',
	color: varBsBodyColor,
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
	`${sketchyScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`,
	{ backgroundColor: varBsSecondaryBg },
)
globalStyle(
	`${sketchyScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`,
	{ backgroundColor: varBsSecondaryBg },
)

globalStyle(`${sketchyScope}${formControl}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

// ─── Form control sizing ───────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
})

globalStyle(`${sketchyScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${sketchyScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${sketchyScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
})

globalStyle(`${sketchyScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${sketchyScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

// ─── Form select ──────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${formSelect}`, {
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
	fontWeight: 700,
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsBodyBg,
	backgroundImage: `${varBsFormSelectBgImg}, none`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 0.75rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid #333`,
	borderRadius: '55px 225px 15px 25px/25px 25px 35px 355px',
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${sketchyScope}${formSelect}:focus`, {
	borderColor: '#333',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(51, 51, 51, 0.25)',
})

globalStyle(`${sketchyScope}${formSelect}:disabled`, {
	color: '#868e96',
	backgroundColor: varBsSecondaryBg,
	borderColor: '#868e96',
	opacity: 1,
})

globalStyle(`${sketchyScope}${formSelect}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

globalStyle(`${sketchyScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${sketchyScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

// Sketchy textarea/select controls use a distinct hand-drawn shape.
globalStyle(
	`${sketchyScope} textarea, ${sketchyScope} textarea${formControl}, ${sketchyScope} select, ${sketchyScope} select${formControl}`,
	{
		borderRadius: '55px 225px 15px 25px/25px 25px 35px 355px !important',
	},
)

// ─── Form range ───────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${formRange}`, {
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

globalStyle(`${sketchyScope}${formRange}:focus`, {
	outline: 0,
})

globalStyle(`${sketchyScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(51, 51, 51, 0.25)',
})

globalStyle(`${sketchyScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#333',
	border: 0,
	borderRadius: '1rem',
	transition:
		'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${sketchyScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#c2c2c2',
})

globalStyle(`${sketchyScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${sketchyScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${sketchyScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

// ─── Form check ───────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${sketchyScope}${formSwitch}`, {
	paddingLeft: 0,
})

globalStyle(`${sketchyScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: varBsBodyBg,
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
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	WebkitPrintColorAdjust: 'exact',
	printColorAdjust: 'exact',
})

globalStyle(`${sketchyScope}${formCheckInput}[type="checkbox"]`, {
	borderRadius: '0.25em',
})

// Sketchy hand-drawn checkbox: replace native checkbox with pseudo-element box + "x" mark.
globalStyle(`${sketchyScope}${formCheckInput}[type="checkbox"]`, {
	position: 'relative',
	width: 0,
	height: 0,
	border: 'none',
})

globalStyle(`${sketchyScope}${formCheckInput}[type="checkbox"]::before`, {
	position: 'absolute',
	top: '-0.1em',
	left: 0,
	display: 'inline-block',
	width: '15px',
	height: '16px',
	content: '""',
	border: '2px solid #333',
	borderRadius: '2px 8px 2px 4px/5px 3px 5px 3px',
})

globalStyle(`${sketchyScope}${formCheckInput}[type="checkbox"]:focus::before`, {
	boxShadow: '0 0 0 0.25rem rgba(51, 51, 51, 0.25)',
})

globalStyle(`${sketchyScope}${formCheckInput}[type="checkbox"]:checked::after`, {
	position: 'absolute',
	top: 0,
	left: '0.1em',
	fontSize: '1.5rem',
	lineHeight: 0.5,
	color: '#333',
	content: '"x"',
})

globalStyle(`${sketchyScope}${formCheckInput}[type="checkbox"]:disabled::before`, {
	border: '2px solid #aaa',
})

// Sketchy hand-drawn radio button: replace native with pseudo-element circle.
globalStyle(`${sketchyScope}${formCheckInput}[type="radio"]`, {
	position: 'relative',
	width: 0,
	height: 0,
	border: 'none',
})

globalStyle(`${sketchyScope}${formCheckInput}[type="radio"]::before`, {
	position: 'absolute',
	top: '-0.1em',
	left: 0,
	display: 'inline-block',
	width: '16px',
	height: '16px',
	content: '""',
	border: '2px solid #333',
	borderRadius: '50% 45% 40% 50%/40% 50% 50% 45%',
})

globalStyle(`${sketchyScope}${formCheckInput}[type="radio"]:focus::before`, {
	boxShadow: '0 0 0 0.25rem rgba(51, 51, 51, 0.25)',
})

globalStyle(`${sketchyScope}${formCheckInput}[type="radio"]:checked::before`, {
	backgroundColor: '#333',
})

globalStyle(`${sketchyScope}${formCheckInput}[type="radio"]:disabled::before`, {
	border: '2px solid #aaa',
})

globalStyle(`${sketchyScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${sketchyScope}${formCheckInput}:focus`, {
	borderColor: '#333',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(51, 51, 51, 0.25)',
})

globalStyle(`${sketchyScope}${formCheckInput}:checked`, {
	backgroundColor: '#333',
	borderColor: '#333',
})

globalStyle(`${sketchyScope}${formCheckInput}:checked[type="checkbox"]`, {
	vars: { [varBsFormCheckBgImage]: checkedMarkIcon },
})

globalStyle(`${sketchyScope}${formCheckInput}:checked[type="radio"]`, {
	vars: { [varBsFormCheckBgImage]: checkedRadioIcon },
})

globalStyle(`${sketchyScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: 0.5,
})

globalStyle(`${sketchyScope}${formCheckLabel}`, {
	display: 'inline-block',
})

globalStyle(`${sketchyScope}${formCheck} ${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

// Sketchy form-switch uses pseudo-elements instead of background-image toggle.
// Use [type="checkbox"] to beat specificity of formCheckInput[type="checkbox"] width:0/height:0 rule.
globalStyle(`${sketchyScope}${formSwitch} ${formCheckInput}[type="checkbox"]`, {
	position: 'relative',
	marginLeft: 0,
	width: '2em',
	height: '1em',
	backgroundImage: 'none',
	backgroundColor: varBsBodyBg,
})

globalStyle(`${sketchyScope}${formSwitch} ${formCheckInput}[type="checkbox"]:checked`, {
	backgroundColor: varBsBodyBg,
	borderColor: '#333',
	vars: { [varBsFormCheckBgImage]: 'none' },
})

globalStyle(`${sketchyScope}${formSwitch} ${formCheckInput}[type="checkbox"]:focus`, {
	boxShadow: 'none',
})

globalStyle(`${sketchyScope}${formSwitch} ${formCheckInput}[type="checkbox"]::before`, {
	width: '32px',
	borderRadius: '30% 35% 30% 30%/30% 50% 30% 45%',
})

globalStyle(`${sketchyScope}${formSwitch} ${formCheckInput}[type="checkbox"]::after`, {
	position: 'absolute',
	top: 0,
	left: 0,
	display: 'inline-block',
	width: '12px',
	height: '12px',
	content: '""',
	backgroundColor: '#fff',
	border: '2px solid #333',
	borderRadius: '50% 45% 40% 50%/40% 50% 50% 45%',
	transition: 'none',
})

globalStyle(`${sketchyScope}${formSwitch} ${formCheckInput}[type="checkbox"]:checked::after`, {
	content: '""',
	top: 0,
	left: '18px',
	backgroundColor: '#333',
})

globalStyle(`${sketchyScope}${formSwitch} ${formCheckLabel}`, {
	marginLeft: '0.5em',
})

globalStyle(
	`${sketchyScope}${formCheckInput}[disabled] ~ ${formCheckLabel}, ${sketchyScope}${formCheckInput}:disabled ~ ${formCheckLabel}`,
	{
		cursor: 'default',
		opacity: 0.5,
	},
)

globalStyle(`${sketchyScope}${formSwitch} ${formCheckInput}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

// ─── Input group ──────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${sketchyScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: 700,
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: varBsTertiaryBg,
	border: `${varBsBorderWidth} solid #333`,
	borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
})

globalStyle(
	`${sketchyScope}${inputGroup} > input, ${sketchyScope}${inputGroup} > select, ${sketchyScope}${inputGroup} > textarea, ${sketchyScope}${inputGroup} > .form-floating`,
	{
		position: 'relative',
		flex: '1 1 auto',
		width: '1%',
		minWidth: 0,
	},
)

globalStyle(
	`${sketchyScope}${inputGroup} > input:focus, ${sketchyScope}${inputGroup} > select:focus, ${sketchyScope}${inputGroup} > textarea:focus, ${sketchyScope}${inputGroup} > .form-floating:focus-within`,
	{ zIndex: 5 },
)

globalStyle(
	`${sketchyScope}${inputGroup} > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`,
	{ borderTopRightRadius: 0, borderBottomRightRadius: 0 },
)

globalStyle(
	`${sketchyScope}${inputGroup} > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback)`,
	{
		marginLeft: `calc(-1 * ${varBsBorderWidth})`,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
)

// ─── Floating label ───────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${sketchyScope}${floatingLabel}`, {
	position: 'absolute',
	top: 0,
	left: 0,
	zIndex: 2,
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

globalStyle(`${sketchyScope}${floatingLabel}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

globalStyle(`${sketchyScope}${formControlFloating}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
	padding: '1rem 0.75rem',
})

globalStyle(`${sketchyScope}${formControlFloating}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${sketchyScope}${formControlFloating}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${sketchyScope}${formControlFloating}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${sketchyScope}${formControlFloating}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${sketchyScope}${formControlFloating}:focus ~ ${floatingLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(
	`${sketchyScope}${formFloating} > ${formControlFloating}::placeholder`,
	{ color: 'transparent' },
)

globalStyle(
	`${sketchyScope}${formFloating} > ${formControlFloating}::-webkit-input-placeholder`,
	{ color: 'transparent' },
)

globalStyle(
	`${sketchyScope}${formControlFloating}:not(:placeholder-shown) ~ ${floatingLabel}`,
	{ transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)' },
)

globalStyle(`${sketchyScope}${formControlFloating}:-webkit-autofill ~ ${floatingLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${sketchyScope}${formControlFloating}:disabled ~ ${floatingLabel}`, {
	color: '#6c757d',
})

// ─── Fieldset / legend ────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${fieldset}`, {
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
})

globalStyle(`${sketchyScope}${legend}`, {
	float: 'left',
	width: '100%',
	padding: 0,
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '1.5rem' } },
})

globalStyle(`${sketchyScope}${legendClear}`, {
	clear: 'left',
})

// ─── Validation ───────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${sketchyScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${sketchyScope}${isValid} ~ ${validFeedback}`, {
	display: 'block',
})

globalStyle(`${sketchyScope}${isInvalid} ~ ${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${sketchyScope}${formControl}${isValid}, ${sketchyScope}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${sketchyScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	backgroundImage: validIcon,
})

globalStyle(`${sketchyScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${sketchyScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	backgroundImage: invalidIcon,
})

globalStyle(`${sketchyScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${sketchyScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${sketchyScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${sketchyScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${sketchyScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${sketchyScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${sketchyScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${sketchyScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${sketchyScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${sketchyScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${sketchyScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${sketchyScope}${formCheckInput}${isValid} ~ ${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${sketchyScope}${formCheckInput}${isInvalid} ~ ${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

// Bootstrap grid utilities used by validation form demos.
globalStyle(`${sketchyScope}${row}`, {
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

globalStyle(`${sketchyScope}${rowCol}`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: 'calc(var(--bs-gutter-x) * 0.5)',
	paddingLeft: 'calc(var(--bs-gutter-x) * 0.5)',
	marginTop: 'var(--bs-gutter-y)',
})

globalStyle(`${sketchyScope}${g3}`, {
	vars: {
		'--bs-gutter-x': '1rem',
		'--bs-gutter-y': '1rem',
	},
})

globalStyle(`${sketchyScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

globalStyle(
	`${sketchyScope}${inputGroup}${hasValidation} > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`,
	{ borderTopRightRadius: 0, borderBottomRightRadius: 0 },
)

globalStyle(
	`${sketchyScope}${inputGroup} > ${formControl}:not(:focus)${isInvalid}, ${sketchyScope}${inputGroup} > ${formControl}:not(:focus)${isValid}, ${sketchyScope}${inputGroup} > ${formSelect}:not(:focus)${isInvalid}, ${sketchyScope}${inputGroup} > ${formSelect}:not(:focus)${isValid}`,
	{ zIndex: 4 },
)
