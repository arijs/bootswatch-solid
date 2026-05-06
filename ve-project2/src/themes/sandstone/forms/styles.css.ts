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
import { sandstoneScope } from '../scope.css'

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

globalStyle(`${sandstoneScope}${mb3}`, {
	marginBottom: '1rem',
})

// Bootstrap grid utilities used by validation form demos.
globalStyle(`${sandstoneScope}${row}`, {
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

globalStyle(`${sandstoneScope}${rowCol}`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginTop: varBsGutterY,
})

globalStyle(`${sandstoneScope}${g3}`, {
	vars: {
		[varBsGutterX]: '1rem',
		[varBsGutterY]: '1rem',
	},
})

globalStyle(`${sandstoneScope}${colMd6}`, {
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

// ─── Form label / text ────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${formLabel}`, {
	display: 'inline-block',
	marginBottom: '0.5rem',
})

globalStyle(`${sandstoneScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

// ─── Form control (input/textarea) ────────────────────────────────────────────

globalStyle(`${sandstoneScope}${formControl}`, {
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	display: 'block',
	width: '100%',
	padding: '0.375rem 0.75rem',
	fontWeight: 400,
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

globalStyle(`${sandstoneScope}${formControl}:focus`, {
	color: varBsBodyColor,
	backgroundColor: varBsBodyBg,
	borderColor: '#86b7fe',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(50, 93, 136, 0.25)',
})

globalStyle(`${sandstoneScope}${formControl}::placeholder`, {
	color: varBsSecondaryColor,
	opacity: 1,
})

globalStyle(`${sandstoneScope}${formControl}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: 1,
})

globalStyle(`${sandstoneScope}${formControl}[type="file"]`, {
	overflow: 'hidden',
})

globalStyle(`${sandstoneScope}${formControl}[type="file"]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${sandstoneScope}${formControl}::-webkit-file-upload-button`, {
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

globalStyle(`${sandstoneScope}${formControl}::file-selector-button`, {
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
	`${sandstoneScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`,
	{ backgroundColor: varBsSecondaryBg },
)
globalStyle(
	`${sandstoneScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`,
	{ backgroundColor: varBsSecondaryBg },
)

// @media prefers-reduced-motion
globalStyle(`${sandstoneScope}${formControl}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

// ─── Form control sizing ───────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${formControlSm}`, {
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${sandstoneScope}${formControlSm}::-webkit-file-upload-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${sandstoneScope}${formControlSm}::file-selector-button`, {
	padding: '0.25rem 0.5rem',
	margin: '-0.25rem -0.5rem',
	WebkitMarginEnd: '0.5rem',
	marginInlineEnd: '0.5rem',
})

globalStyle(`${sandstoneScope}${formControlLg}`, {
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

globalStyle(`${sandstoneScope}${formControlLg}::-webkit-file-upload-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

globalStyle(`${sandstoneScope}${formControlLg}::file-selector-button`, {
	padding: '0.5rem 1rem',
	margin: '-0.5rem -1rem',
	WebkitMarginEnd: '1rem',
	marginInlineEnd: '1rem',
})

// ─── Form select ──────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${formSelect}`, {
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
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsBodyBg,
	backgroundImage: `${varBsFormSelectBgImg}, none`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 0.75rem center',
	backgroundSize: '16px 12px',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${sandstoneScope}${formSelect}:focus`, {
	borderColor: '#86b7fe',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(50, 93, 136, 0.25)',
})

globalStyle(`${sandstoneScope}${formSelect}:disabled`, {
	backgroundColor: varBsSecondaryBg,
	opacity: 1,
})

globalStyle(`${sandstoneScope}${formSelect}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

globalStyle(`${sandstoneScope}${formSelectSm}`, {
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

globalStyle(`${sandstoneScope}${formSelectLg}`, {
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

// ─── Form range ───────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${formRange}`, {
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

globalStyle(`${sandstoneScope}${formRange}:focus`, {
	outline: 0,
})

globalStyle(`${sandstoneScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(50, 93, 136, 0.25)',
})

globalStyle(`${sandstoneScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#325d88',
	border: 0,
	borderRadius: '1rem',
	transition:
		'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${sandstoneScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#b6d4fe',
})

globalStyle(`${sandstoneScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${sandstoneScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${sandstoneScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: varBsSecondaryColor,
})

// ─── Form check ───────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${sandstoneScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${sandstoneScope}${formCheckInput}`, {
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

globalStyle(`${sandstoneScope}${formCheckInput}[type="checkbox"]`, {
	borderRadius: '0.25em',
})

globalStyle(`${sandstoneScope}${formCheckInput}[type="radio"]`, {
	borderRadius: '50%',
})

globalStyle(`${sandstoneScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${sandstoneScope}${formCheckInput}:focus`, {
	borderColor: '#86b7fe',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(50, 93, 136, 0.25)',
})

globalStyle(`${sandstoneScope}${formCheckInput}:checked`, {
	backgroundColor: '#325d88',
	borderColor: '#325d88',
})

globalStyle(`${sandstoneScope}${formCheckInput}:checked[type="checkbox"]`, {
	vars: { [varBsFormCheckBgImage]: checkedMarkIcon },
})

globalStyle(`${sandstoneScope}${formCheckInput}:checked[type="radio"]`, {
	vars: { [varBsFormCheckBgImage]: checkedRadioIcon },
})

globalStyle(`${sandstoneScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: 0.5,
})

globalStyle(`${sandstoneScope}${formCheckLabel}`, {
	display: 'inline-block',
})

globalStyle(`${sandstoneScope}${formCheck} ${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${sandstoneScope}${formSwitch} ${formCheckInput}`, {
	width: '2em',
	marginLeft: '-2.5em',
	backgroundImage: varBsFormSwitchBg,
	backgroundPosition: 'left center',
	borderRadius: '2em',
	transition: 'background-position 0.15s ease-in-out',
})

globalStyle(`${sandstoneScope}${formSwitch} ${formCheckInput}:focus`, {
	vars: { [varBsFormSwitchBg]: switchKnobFocusIcon },
})

globalStyle(`${sandstoneScope}${formSwitch} ${formCheckInput}:checked`, {
	backgroundPosition: 'right center',
	vars: { [varBsFormSwitchBg]: switchKnobCheckedIcon },
})

globalStyle(
	`${sandstoneScope}${formCheckInput}[disabled] ~ ${formCheckLabel}, ${sandstoneScope}${formCheckInput}:disabled ~ ${formCheckLabel}`,
	{
		cursor: 'default',
		opacity: 0.5,
	},
)

globalStyle(`${sandstoneScope}${formSwitch} ${formCheckInput}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

// ─── Input group ──────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${sandstoneScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: varBsTertiaryBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
})

globalStyle(
	`${sandstoneScope}${inputGroup} > input, ${sandstoneScope}${inputGroup} > select, ${sandstoneScope}${inputGroup} > textarea, ${sandstoneScope}${inputGroup} > .form-floating`,
	{
		position: 'relative',
		flex: '1 1 auto',
		width: '1%',
		minWidth: 0,
	},
)

globalStyle(
	`${sandstoneScope}${inputGroup} > input:focus, ${sandstoneScope}${inputGroup} > select:focus, ${sandstoneScope}${inputGroup} > textarea:focus, ${sandstoneScope}${inputGroup} > .form-floating:focus-within`,
	{ zIndex: 5 },
)

globalStyle(
	`${sandstoneScope}${inputGroup} > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`,
	{ borderTopRightRadius: 0, borderBottomRightRadius: 0 },
)

globalStyle(
	`${sandstoneScope}${inputGroup} > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback)`,
	{
		marginLeft: `calc(-1 * ${varBsBorderWidth})`,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
)

// ─── Floating label ───────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${sandstoneScope}${floatingLabel}`, {
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

globalStyle(`${sandstoneScope}${floatingLabel}`, {
	'@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

globalStyle(`${sandstoneScope}${formControlFloating}`, {
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
	padding: '1rem 0.75rem',
})

globalStyle(`${sandstoneScope}${formControlFloating}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${sandstoneScope}${formControlFloating}:focus`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${sandstoneScope}${formControlFloating}:not(:placeholder-shown)`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${sandstoneScope}${formControlFloating}:-webkit-autofill`, {
	paddingTop: '1.625rem',
	paddingBottom: '0.625rem',
})

globalStyle(`${sandstoneScope}${formControlFloating}:focus ~ ${floatingLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(
	`${sandstoneScope}${formFloating} > ${formControlFloating}::placeholder`,
	{ color: 'transparent' },
)

globalStyle(
	`${sandstoneScope}${formFloating} > ${formControlFloating}::-webkit-input-placeholder`,
	{ color: 'transparent' },
)

globalStyle(
	`${sandstoneScope}${formControlFloating}:not(:placeholder-shown) ~ ${floatingLabel}`,
	{ transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)' },
)

globalStyle(`${sandstoneScope}${formControlFloating}:-webkit-autofill ~ ${floatingLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${sandstoneScope}${formControlFloating}:disabled ~ ${floatingLabel}`, {
	color: '#8e8c84',
})

// ─── Fieldset / legend ────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${fieldset}`, {
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
})

globalStyle(`${sandstoneScope}${legend}`, {
	float: 'left',
	width: '100%',
	padding: 0,
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': { '(min-width: 1200px)': { fontSize: '1.5rem' } },
})

globalStyle(`${sandstoneScope}${legendClear}`, {
	clear: 'left',
})

// ─── Validation ───────────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${validFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

globalStyle(`${sandstoneScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${sandstoneScope}${isValid} ~ ${validFeedback}`, {
	display: 'block',
})

globalStyle(`${sandstoneScope}${isInvalid} ~ ${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${sandstoneScope}${formControl}${isValid}, ${sandstoneScope}${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${sandstoneScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	backgroundImage: validIcon,
})

globalStyle(`${sandstoneScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${sandstoneScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	backgroundImage: invalidIcon,
})

globalStyle(`${sandstoneScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${sandstoneScope}${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${sandstoneScope}${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${sandstoneScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${sandstoneScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${sandstoneScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${sandstoneScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${sandstoneScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${sandstoneScope}${formCheckInput}${isValid} ~ ${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${sandstoneScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${sandstoneScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${sandstoneScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${sandstoneScope}${formCheckInput}${isInvalid} ~ ${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(
	`${sandstoneScope}${inputGroup}${hasValidation} > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`,
	{ borderTopRightRadius: 0, borderBottomRightRadius: 0 },
)

globalStyle(
	`${sandstoneScope}${inputGroup} > ${formControl}:not(:focus)${isInvalid}, ${sandstoneScope}${inputGroup} > ${formControl}:not(:focus)${isValid}, ${sandstoneScope}${inputGroup} > ${formSelect}:not(:focus)${isInvalid}, ${sandstoneScope}${inputGroup} > ${formSelect}:not(:focus)${isValid}`,
	{ zIndex: 4 },
)



