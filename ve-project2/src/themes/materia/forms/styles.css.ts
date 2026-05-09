import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColorRgb,
	varBsDangerRgb,
	varBsGradient,
	varBsSecondaryBg,
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
	fieldset,
	legend,
	legendClear,
	g3,
	hasValidation,
	inputGroup,
	inputGroupText,
	invalidFeedback,
	isInvalid,
	isValid,
	mb3,
	row,
	rowCol,
	validFeedback,
	wasValidated,
} from '../../../theme-contract/forms/contract.css'
import { materiaScope } from '../scope.css'

const formCheckMarkIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")"
const formCheckMarkIconMateria =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-width='2' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")"
const formCheckRadioIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")"
const formSwitchKnobIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\")"
const formSwitchFocusIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2390cbf9'/%3e%3c/svg%3e\")"
const formSwitchCheckedIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")"
const invalidIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23e51c23'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23e51c23' stroke='none'/%3e%3c/svg%3e\")"
const validIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%234caf50' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\")"
const formSelectChevron =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23222' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")"
const formSelectBgIconFallback = varBsFormSelectBgIcon.replace(')', ', none)')
const selectChevron =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 4'%3e%3cpath fill='%23666' d='M8 0 4 4 0 0z'/%3e%3c/svg%3e\")"
const selectChevronFocus =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 4'%3e%3cpath fill='%23212121' d='M8 0 4 4 0 0z'/%3e%3c/svg%3e\")"

globalStyle(`${materiaScope}${mb3}`, {
	marginBottom: '1rem !important',
})

globalStyle(`${materiaScope} input, ${materiaScope} button, ${materiaScope} select, ${materiaScope} optgroup, ${materiaScope} textarea`, {
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
})

globalStyle(`${materiaScope} label`, {
	display: 'inline-block',
})

globalStyle(`${materiaScope} button, ${materiaScope} select`, {
	textTransform: 'none',
})

globalStyle(`${materiaScope} select`, {
	wordWrap: 'normal',
})

globalStyle(`${materiaScope}${fieldset}`, {
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
})

globalStyle(`${materiaScope}${legend}`, {
	float: 'left',
	width: '100%',
	padding: 0,
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
})

globalStyle(`${materiaScope}${legend}`, {
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

globalStyle(`${materiaScope}${legend} + ${legendClear}`, {
	clear: 'left',
})

globalStyle(`${materiaScope}${legend} + *`, {
	clear: 'left',
})

globalStyle(`${materiaScope}${row}`, {
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

globalStyle(`${materiaScope}${rowCol}`, {
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: 'calc(var(--bs-gutter-x) * 0.5)',
	paddingLeft: 'calc(var(--bs-gutter-x) * 0.5)',
	marginTop: 'var(--bs-gutter-y)',
})

globalStyle(`${materiaScope}${g3}`, {
	vars: {
		'--bs-gutter-x': '1rem',
		'--bs-gutter-y': '1rem',
	},
})

globalStyle(`${materiaScope}${formLabel}`, {
	display: 'inline-block',
	marginBottom: '0.5rem',
})

globalStyle(`${materiaScope}${formText}`, {
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: '#666',
})

globalStyle(`${materiaScope}::file-selector-button`, {
	font: 'inherit',
	appearance: 'button',
})

globalStyle(`${materiaScope}::-webkit-file-upload-button`, {
	font: 'inherit',
	WebkitAppearance: 'button',
})

globalStyle(`${materiaScope}${formCheck}`, {
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

globalStyle(`${materiaScope}${formCheck} ${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${materiaScope}${formControl}`, {
	display: 'block',
	width: '100%',
	padding: '1rem 0',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#666',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundClip: 'padding-box',
	border: '0 solid transparent',
	borderRadius: 0,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formControl}:focus`, {
	color: '#666',
	backgroundColor: 'transparent',
	borderColor: '#90cbf9',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formControl}::placeholder`, {
	color: 'rgba(0, 0, 0, 0.4)',
	opacity: 1,
})

globalStyle(`${materiaScope}${formControl}:disabled`, {
	backgroundColor: 'transparent',
	opacity: 1,
})

globalStyle(`${materiaScope}${formControl}[type="file"]`, {
	overflow: 'hidden',
})

globalStyle(`${materiaScope}${formControl}[type="file"]:not(:disabled):not([readonly])`, {
	cursor: 'pointer',
})

globalStyle(`${materiaScope}${formControl}::-webkit-file-upload-button`, {
	font: 'inherit',
	WebkitAppearance: 'button',
	padding: '1rem 0',
	margin: '-1rem 0',
	WebkitMarginEnd: 0,
	marginInlineEnd: 0,
	color: '#666',
	backgroundColor: varBsTertiaryBg,
	backgroundImage: varBsGradient,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	borderInlineEndWidth: 0,
	borderRadius: 0,
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formControl}::file-selector-button`, {
	font: 'inherit',
	appearance: 'button',
	padding: '1rem 0',
	margin: '-1rem 0',
	WebkitMarginEnd: 0,
	marginInlineEnd: 0,
	color: '#666',
	backgroundColor: varBsTertiaryBg,
	backgroundImage: varBsGradient,
	pointerEvents: 'none',
	borderColor: 'inherit',
	borderStyle: 'solid',
	borderWidth: 0,
	borderInlineEndWidth: 0,
	borderRadius: 0,
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formControl}:hover:not(:disabled):not([readonly])::-webkit-file-upload-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${materiaScope}${formControl}:hover:not(:disabled):not([readonly])::file-selector-button`, {
	backgroundColor: varBsSecondaryBg,
})

globalStyle(`${materiaScope}${formControlSm}`, {
	minHeight: '1.5em',
	padding: '0 0',
	fontSize: '0.875rem',
	borderRadius: 0,
})

globalStyle(`${materiaScope}${formControlLg}`, {
	minHeight: 'calc(1.5em + 2.5rem)',
	padding: '1.25rem 0',
	fontSize: '1.25rem',
	borderRadius: 0,
})

globalStyle(`${materiaScope}${formControlSm}::-webkit-file-upload-button, ${materiaScope}${formControlSm}::file-selector-button`, {
	padding: '0 0',
	margin: '0 0',
	WebkitMarginEnd: 0,
	marginInlineEnd: 0,
})

globalStyle(`${materiaScope}${formControlLg}::-webkit-file-upload-button, ${materiaScope}${formControlLg}::file-selector-button`, {
	padding: '1.25rem 0',
	margin: '-1.25rem 0',
	WebkitMarginEnd: 0,
	marginInlineEnd: 0,
})

globalStyle(
	`${materiaScope} textarea, ${materiaScope} textarea${formControl}, ${materiaScope} input${formControl}, ${materiaScope} input[type="text"], ${materiaScope} input[type="password"], ${materiaScope} input[type="email"], ${materiaScope} input[type="number"], ${materiaScope} [type="text"]${formControl}, ${materiaScope} [type="password"]${formControl}, ${materiaScope} [type="email"]${formControl}, ${materiaScope} [type="tel"]${formControl}, ${materiaScope} [contenteditable]${formControl}`,
	{
		boxShadow: 'rgb(221, 221, 221) 0px -1px 0px inset',
		transition: 'box-shadow 0.2s',
	},
)

globalStyle(
	`${materiaScope} textarea:focus, ${materiaScope} textarea${formControl}:focus, ${materiaScope} input${formControl}:focus, ${materiaScope} input[type="text"]:focus, ${materiaScope} input[type="password"]:focus, ${materiaScope} input[type="email"]:focus, ${materiaScope} input[type="number"]:focus, ${materiaScope} [type="text"]${formControl}:focus, ${materiaScope} [type="password"]${formControl}:focus, ${materiaScope} [type="email"]${formControl}:focus, ${materiaScope} [type="tel"]${formControl}:focus, ${materiaScope} [contenteditable]${formControl}:focus`,
	{
		boxShadow: 'rgb(33, 150, 243) 0px -2px 0px inset',
	},
)

globalStyle(
	`${materiaScope} textarea[disabled], ${materiaScope} textarea[readonly], ${materiaScope} textarea${formControl}[disabled], ${materiaScope} textarea${formControl}[readonly], ${materiaScope} input${formControl}[disabled], ${materiaScope} input${formControl}[readonly], ${materiaScope} input[type="text"][disabled], ${materiaScope} input[type="text"][readonly], ${materiaScope} input[type="password"][disabled], ${materiaScope} input[type="password"][readonly], ${materiaScope} input[type="email"][disabled], ${materiaScope} input[type="email"][readonly], ${materiaScope} input[type="number"][disabled], ${materiaScope} input[type="number"][readonly], ${materiaScope} [type="text"]${formControl}[disabled], ${materiaScope} [type="text"]${formControl}[readonly], ${materiaScope} [type="password"]${formControl}[disabled], ${materiaScope} [type="password"]${formControl}[readonly], ${materiaScope} [type="email"]${formControl}[disabled], ${materiaScope} [type="email"]${formControl}[readonly], ${materiaScope} [type="tel"]${formControl}[disabled], ${materiaScope} [type="tel"]${formControl}[readonly], ${materiaScope} [contenteditable]${formControl}[disabled], ${materiaScope} [contenteditable]${formControl}[readonly]`,
	{
		borderBottom: '1px dotted rgb(221, 221, 221)',
		boxShadow: 'none',
	},
)

globalStyle(
	`${materiaScope} textarea[disabled], ${materiaScope} textarea[disabled]::placeholder, ${materiaScope} textarea${formControl}[disabled], ${materiaScope} textarea${formControl}[disabled]::placeholder, ${materiaScope} input${formControl}[disabled], ${materiaScope} input${formControl}[disabled]::placeholder, ${materiaScope} input[type="text"][disabled], ${materiaScope} input[type="text"][disabled]::placeholder, ${materiaScope} input[type="password"][disabled], ${materiaScope} input[type="password"][disabled]::placeholder, ${materiaScope} input[type="email"][disabled], ${materiaScope} input[type="email"][disabled]::placeholder, ${materiaScope} input[type="number"][disabled], ${materiaScope} input[type="number"][disabled]::placeholder, ${materiaScope} [type="text"]${formControl}[disabled], ${materiaScope} [type="text"]${formControl}[disabled]::placeholder, ${materiaScope} [type="password"]${formControl}[disabled], ${materiaScope} [type="password"]${formControl}[disabled]::placeholder, ${materiaScope} [type="email"]${formControl}[disabled], ${materiaScope} [type="email"]${formControl}[disabled]::placeholder, ${materiaScope} [type="tel"]${formControl}[disabled], ${materiaScope} [type="tel"]${formControl}[disabled]::placeholder, ${materiaScope} [contenteditable]${formControl}[disabled], ${materiaScope} [contenteditable]${formControl}[disabled]::placeholder`,
	{
		color: 'rgb(221, 221, 221)',
	},
)

globalStyle(`${materiaScope}${formSelect}`, {
	vars: {
		[varBsFormSelectBgImg]: formSelectChevron,
	},
	display: 'block',
	width: '100%',
	padding: '1rem 0',
	paddingRight: 0,
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#666',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	backgroundImage: `${varBsFormSelectBgImg}, ${formSelectBgIconFallback}`,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right 0 center',
	backgroundSize: '16px 12px',
	border: '0 solid transparent',
	borderRadius: 0,
	boxShadow: 'inset 0 -1px 0 #ddd',
})

globalStyle(`${materiaScope}${formSelect}:focus`, {
	vars: {
		[varBsFormSelectBgImg]: formSelectChevron,
	},
	borderColor: '#90cbf9',
	outline: 0,
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${formSelect}:disabled`, {
	backgroundColor: 'transparent',
	opacity: 1,
})

globalStyle(`${materiaScope} select:disabled`, {
	opacity: 1,
})

globalStyle(`${materiaScope} select, ${materiaScope} select${formControl}`, {
	letterSpacing: 'normal',
	padding: '0.5rem 0',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundImage: selectChevron,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right center',
	backgroundSize: '8px 4px',
	boxShadow: 'inset 0 -1px 0 #ddd',
})

globalStyle(`${materiaScope} select:focus, ${materiaScope} select${formControl}:focus`, {
	backgroundImage: selectChevronFocus,
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${formSelectSm}`, {
	paddingTop: 0,
	paddingBottom: 0,
	paddingLeft: 0,
	fontSize: '0.875rem',
	borderRadius: 0,
})

globalStyle(`${materiaScope}${formSelectLg}`, {
	paddingTop: '1.25rem',
	paddingBottom: '1.25rem',
	paddingLeft: 0,
	fontSize: '1.25rem',
	borderRadius: 0,
})

globalStyle(`${materiaScope}${formCheckInput}`, {
	vars: {
		[varBsFormCheckBg]: 'transparent',
	},
	flexShrink: 0,
	width: '1.25em',
	height: '1.25em',
	marginTop: '1px',
	verticalAlign: 'top',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsFormCheckBg,
	backgroundImage: varBsFormCheckBgImage,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	backgroundSize: 'contain',
	border: '2px solid #ced4da',
	WebkitPrintColorAdjust: 'exact',
	printColorAdjust: 'exact',
})

globalStyle(`${materiaScope}${formCheckInput}[type="checkbox"]`, {
	borderRadius: '0.25em',
})

globalStyle(`${materiaScope}${formCheckInput}[type="radio"]`, {
	borderRadius: '50%',
})

globalStyle(`${materiaScope}${formCheckInput}:active`, {
	filter: 'brightness(90%)',
})

globalStyle(`${materiaScope}${formCheckInput}:disabled`, {
	pointerEvents: 'none',
	filter: 'none',
	opacity: 0.5,
})

globalStyle(
	`${materiaScope}${formCheckInput}[disabled] ~ ${formCheckLabel}, ${materiaScope}${formCheckInput}:disabled ~ ${formCheckLabel}`,
	{
		cursor: 'default',
		opacity: 0.5,
	},
)

globalStyle(`${materiaScope}${formCheckInput}:focus`, {
	borderColor: '#90cbf9',
	outline: 0,
	boxShadow: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formCheckInput}:checked`, {
	backgroundColor: '#2196f3',
	borderColor: '#2196f3',
})

globalStyle(`${materiaScope}${formCheckInput}:checked[type="checkbox"]`, {
	vars: {
		[varBsFormCheckBgImage]: `${formCheckMarkIcon}, ${varBsGradient}`,
	},
})

globalStyle(`${materiaScope}${formCheckInput}:checked[type="radio"]`, {
	vars: {
		[varBsFormCheckBgImage]: `${formCheckRadioIcon}, ${varBsGradient}`,
	},
})

globalStyle(`${materiaScope}${formCheck}:not(${formSwitch}) ${formCheckInput}:checked[type="checkbox"]`, {
	backgroundImage: `${formCheckMarkIconMateria}, ${varBsGradient}`,
	backgroundSize: '1.6em',
})

globalStyle(`${materiaScope}${formSwitch}`, {
	paddingLeft: '2.5em',
})

globalStyle(`${materiaScope}${formSwitch} ${formCheckInput}`, {
	vars: {
		[varBsFormSwitchBg]: formSwitchKnobIcon,
	},
	position: 'relative',
	width: '2em',
	height: '0.8em',
	marginTop: '0.29em',
	marginLeft: '-2.5em',
	backgroundColor: '#ced4da',
	backgroundImage: 'none',
	backgroundPosition: 'left center',
	border: 'none',
	borderRadius: '2em',
})

globalStyle(`${materiaScope}${formSwitch} ${formCheckInput}::before`, {
	position: 'absolute',
	zIndex: 1,
	top: '-0.2em',
	left: '-0.2em',
	width: '1.2em',
	height: '1.2em',
	content: '""',
	backgroundColor: '#fff',
	borderRadius: '50%',
	boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
	transition: 'left 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formSwitch} ${formCheckInput}::after`, {
	position: 'absolute',
	top: '-0.2em',
	left: '-0.2em',
	zIndex: 0,
	width: '1.2em',
	height: '1.2em',
	content: '""',
	borderRadius: '50%',
	boxShadow: '0 0 0 9px rgba(0, 0, 0, 0.05)',
	transform: 'scale(0)',
	transition: 'left 0.15s ease-in-out, transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formSwitch} ${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: formSwitchFocusIcon,
	},
	border: 'none',
	outline: 0,
	boxShadow: 'none',
})

globalStyle(`${materiaScope}${formSwitch} ${formCheckInput}:focus:not(.disabled):not(:disabled)::after`, {
	boxShadow: '0 0 0 9px rgba(0, 0, 0, 0.1)',
})

globalStyle(`${materiaScope}${formSwitch} ${formCheckInput}:hover:not(.disabled):not(:disabled)::after, ${materiaScope}${formSwitch} ${formCheckInput}:focus:not(.disabled):not(:disabled)::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${formSwitch} ${formCheckInput}:checked`, {
	vars: {
		[varBsFormSwitchBg]: `${formSwitchCheckedIcon}, ${varBsGradient}`,
	},
	backgroundColor: 'rgba(33, 150, 243, 0.3)',
	backgroundPosition: 'right center',
})

globalStyle(`${materiaScope}${formSwitch} ${formCheckInput}:checked::before`, {
	left: 'calc(100% - 0.8em)',
	backgroundColor: 'rgb(33, 150, 243)',
})

globalStyle(`${materiaScope}${formSwitch} ${formCheckInput}:checked::after`, {
	left: 'calc(100% - 0.8em)',
	boxShadow: '0 0 0 9px rgba(33, 150, 243, 0.1)',
})

globalStyle(`${materiaScope}${formSwitch} ${formCheckInput}:checked:focus:not(.disabled):not(:disabled)::after`, {
	boxShadow: '0 0 0 9px rgba(33, 150, 243, 0.2)',
})

globalStyle(`${materiaScope}${formSwitch} ${formCheckInput}:checked:hover:not(.disabled):not(:disabled)::after, ${materiaScope}${formSwitch} ${formCheckInput}:checked:focus:not(.disabled):not(:disabled)::after`, {
	transform: 'scale(0.9)',
})

globalStyle(`${materiaScope}${inputGroupText}`, {
	display: 'flex',
	alignItems: 'center',
	padding: '1rem 0',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#666',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: 'transparent',
	border: '0 solid transparent',
	borderRadius: 0,
})

globalStyle(`${materiaScope}${inputGroup}`, {
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

globalStyle(`${materiaScope}${inputGroup} > ${formControl}, ${materiaScope}${inputGroup} > ${formSelect}, ${materiaScope}${inputGroup} > ${formFloating}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: 0,
})

globalStyle(`${materiaScope}${inputGroup} > ${formControl}:focus, ${materiaScope}${inputGroup} > ${formSelect}:focus, ${materiaScope}${inputGroup} > ${formFloating}:focus-within`, {
	zIndex: 5,
})

globalStyle(`${materiaScope}${formFloating} > ${formControl}, ${materiaScope}${formFloating} > ${formSelect}`, {
	height: '3.5rem',
	minHeight: '3.5rem',
	lineHeight: 1.25,
	padding: '1rem 0',
})

globalStyle(`${materiaScope}${formFloating}`, {
	position: 'relative',
})

globalStyle(`${materiaScope}${formFloating} > ${formControl}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${materiaScope}${formFloating} > label`, {
	position: 'absolute',
	top: 0,
	left: 0,
	zIndex: 2,
	maxWidth: '100%',
	height: '100%',
	overflow: 'hidden',
	textAlign: 'start',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	pointerEvents: 'none',
	border: '0 solid transparent',
	transformOrigin: '0 0',
	transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
})

globalStyle(`${materiaScope}${formFloating} > ${formControl}:focus ~ label, ${materiaScope}${formFloating} > ${formControl}:not(:placeholder-shown) ~ label, ${materiaScope}${formFloating} > ${formSelect} ~ label`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${materiaScope}${validFeedback}, ${materiaScope}${invalidFeedback}`, {
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
})

globalStyle(`${materiaScope}${validFeedback}`, {
	color: varBsFormValidColor,
})

globalStyle(`${materiaScope}${invalidFeedback}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${wasValidated} :valid ~ ${validFeedback}, ${materiaScope} ${isValid} ~ ${validFeedback}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${wasValidated} :invalid ~ ${invalidFeedback}, ${materiaScope} ${isInvalid} ~ ${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${materiaScope}${wasValidated} ${formControl}:invalid, ${materiaScope}${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: invalidIcon,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${formControl}:valid, ${materiaScope}${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	paddingRight: 'calc(1.5em + 2rem)',
	backgroundImage: validIcon,
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.5rem) center',
	backgroundSize: 'calc(0.75em + 1rem) calc(0.75em + 1rem)',
})

globalStyle(`${materiaScope}${wasValidated} ${formControl}:invalid:focus, ${materiaScope}${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${formControl}:valid:focus, ${materiaScope}${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${formCheckInput}:invalid, ${materiaScope}${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${materiaScope}${wasValidated} ${formCheckInput}:valid, ${materiaScope}${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${materiaScope}${wasValidated} ${formCheckInput}:invalid ~ ${formCheckLabel}, ${materiaScope}${formCheckInput}${isInvalid} ~ ${formCheckLabel}`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${wasValidated} ${formCheckInput}:valid ~ ${formCheckLabel}, ${materiaScope}${formCheckInput}${isValid} ~ ${formCheckLabel}`, {
	color: varBsFormValidColor,
})

globalStyle(`${materiaScope}${wasValidated} ${formCheckInput}:invalid:focus, ${materiaScope}${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${formCheckInput}:valid:focus, ${materiaScope}${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${materiaScope}${wasValidated} ${formCheckInput}:invalid:checked, ${materiaScope}${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${materiaScope}${wasValidated} ${formCheckInput}:valid:checked, ${materiaScope}${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${materiaScope}${wasValidated} ${formSelect}:invalid, ${materiaScope}${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${materiaScope}${wasValidated} ${formSelect}:invalid:focus, ${materiaScope}${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(
	`${materiaScope}${wasValidated} ${formSelect}:invalid:not([multiple]):not([size]), ${materiaScope}${wasValidated} ${formSelect}:invalid:not([multiple])[size="1"], ${materiaScope}${formSelect}${isInvalid}:not([multiple]):not([size]), ${materiaScope}${formSelect}${isInvalid}:not([multiple])[size="1"]`,
	{
		vars: {
			[varBsFormSelectBgIcon]: invalidIcon,
		},
		paddingRight: 0,
		backgroundPosition: 'right 0 center, center right 0',
		backgroundSize: '16px 12px, calc(0.75em + 1rem) calc(0.75em + 1rem)',
	},
)

globalStyle(`${materiaScope} body, ${materiaScope} input, ${materiaScope} button`, {
	letterSpacing: '0.1px',
})

globalStyle(`${materiaScope}${formRange}`, {
	width: '100%',
	height: '1.5rem',
	padding: 0,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${materiaScope}${formRange}:focus`, {
	outline: 0,
})

globalStyle(`${materiaScope}${formRange}::-webkit-slider-runnable-track`, {
	width: '100%',
	height: '0.5rem',
	color: 'transparent',
	cursor: 'pointer',
	backgroundColor: varBsSecondaryBg,
	borderColor: 'transparent',
	borderRadius: '1rem',
})

globalStyle(`${materiaScope}${formRange}:focus::-webkit-slider-thumb`, {
	boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${formRange}::-webkit-slider-thumb`, {
	width: '1rem',
	height: '1rem',
	marginTop: '-0.25rem',
	WebkitAppearance: 'none',
	appearance: 'none',
	backgroundColor: '#2196f3',
	backgroundImage: varBsGradient,
	border: 0,
	borderRadius: '1rem',
	transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
})

globalStyle(`${materiaScope}${formRange}::-webkit-slider-thumb:active`, {
	backgroundColor: '#bce0fb',
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${formRange}:disabled`, {
	pointerEvents: 'none',
})

globalStyle(`${materiaScope}${formRange}:disabled::-webkit-slider-thumb`, {
	backgroundColor: 'rgba(68, 68, 68, 0.75)',
	opacity: 1,
})

globalStyle(`${materiaScope}${inputGroup}:not(${hasValidation}) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

globalStyle(`${materiaScope}${inputGroup} > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback)`, {
	marginLeft: 0,
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

globalStyle(`${materiaScope}${formFloating} > label`, {
	padding: '1rem 0',
	color: `rgba(${varBsBodyColorRgb}, 0.65)`,
})

