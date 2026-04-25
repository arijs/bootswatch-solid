import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBorderColor,
	varBsBorderWidth,
	varBsDangerRgb,
	varBsFormInvalidBorderColor,
	varBsFormInvalidColor,
	varBsFormValidBorderColor,
	varBsFormValidColor,
	varBsSuccessRgb,
} from '../../../../theme-contract/_vars.css'
import { inputGroup } from '../input-group/base.css'
import { formCheckInput } from '../overview/form-check.css'
import { formControl, formSelect } from '../sizing/controls.css'

const invalidIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")"

const validIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='m2.3 6.73.54.54 2.4-2.4-.53-.53-1.87 1.86-.8-.8-.53.53z'/%3e%3c/svg%3e\")"

export const row = style({
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

export const rowCol = style({
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%',
	paddingRight: 'calc(var(--bs-gutter-x) * 0.5)',
	paddingLeft: 'calc(var(--bs-gutter-x) * 0.5)',
	marginTop: 'var(--bs-gutter-y)',
})

export const g3 = style({
	vars: {
		'--bs-gutter-x': '1rem',
		'--bs-gutter-y': '1rem',
	},
})

export const colMd6 = style({
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

export const colMd3 = style({
	'@media': {
		'(min-width: 768px)': {
			flex: '0 0 auto',
			width: '25%',
		},
	},
})

export const colSm6 = style({
	'@media': {
		'(min-width: 576px)': {
			flex: '0 0 auto',
			width: '50%',
		},
	},
})

export const isValid = style({})
export const isInvalid = style({})
export const hasValidation = style({})

export const validFeedback = style({
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormValidColor,
})

export const invalidFeedback = style({
	display: 'none',
	width: '100%',
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsFormInvalidColor,
})

globalStyle(`${isValid} ~ ${validFeedback}`, {
	display: 'block',
})

globalStyle(`${isInvalid} ~ ${invalidFeedback}`, {
	display: 'block',
})

globalStyle(`${formControl}${isValid}, ${formControl}${isInvalid}`, {
	paddingRight: 'calc(1.5em + 0.75rem)',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'right calc(0.375em + 0.1875rem) center',
	backgroundSize: 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
})

globalStyle(`${formControl}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
	backgroundImage: validIcon,
})

globalStyle(`${formControl}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${formControl}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
	backgroundImage: invalidIcon,
})

globalStyle(`${formControl}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${formSelect}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${formSelect}${isValid}:focus`, {
	borderColor: varBsFormValidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${formSelect}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${formSelect}${isInvalid}:focus`, {
	borderColor: varBsFormInvalidBorderColor,
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${formCheckInput}${isValid}`, {
	borderColor: varBsFormValidBorderColor,
})

globalStyle(`${formCheckInput}${isValid}:checked`, {
	backgroundColor: varBsFormValidColor,
})

globalStyle(`${formCheckInput}${isValid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsSuccessRgb}, 0.25)`,
})

globalStyle(`${formCheckInput}${isInvalid}`, {
	borderColor: varBsFormInvalidBorderColor,
})

globalStyle(`${formCheckInput}${isInvalid}:checked`, {
	backgroundColor: varBsFormInvalidColor,
})

globalStyle(`${formCheckInput}${isInvalid}:focus`, {
	boxShadow: `0 0 0 0.25rem rgba(${varBsDangerRgb}, 0.25)`,
})

globalStyle(`${inputGroup}${hasValidation} > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

globalStyle(`${inputGroup}${hasValidation} > .dropdown-toggle:nth-last-child(n + 3)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

globalStyle(`${inputGroup}${hasValidation} > .form-floating:not(:last-child) > input, ${inputGroup}${hasValidation} > .form-floating:not(:last-child) > select`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

globalStyle(`${inputGroup} > ${formControl}:not(:focus)${isInvalid}, ${inputGroup} > ${formControl}:not(:focus)${isValid}, ${inputGroup} > ${formSelect}:not(:focus)${isInvalid}, ${inputGroup} > ${formSelect}:not(:focus)${isValid}`, {
	zIndex: 4,
})

globalStyle(`${isValid} ~ label`, {
	color: varBsFormValidColor,
})

globalStyle(`${isInvalid} ~ label`, {
	color: varBsFormInvalidColor,
})

globalStyle(`${inputGroup} > :not(:first-child):not(.dropdown-menu):not(${validFeedback}):not(${invalidFeedback})`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

globalStyle(`${inputGroup} > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

globalStyle(`${inputGroup} > ${formControl}`, {
	position: 'relative',
	flex: '1 1 auto',
	width: '1%',
	minWidth: 0,
})
