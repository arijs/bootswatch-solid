import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderWidth,
} from '../../../../theme-contract/_vars.css'
import {
	varBsFormCheckBg,
	varBsFormCheckBgImage,
	varBsFormSwitchBg,
} from '../../../../theme-contract/ui/forms/_vars.css'

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

export const formCheck = style({
	display: 'block',
	minHeight: '1.5rem',
	paddingLeft: '1.5em',
	marginBottom: '0.125rem',
})

export const formSwitch = style({
	paddingLeft: '2.5em',
})

export const formCheckInput = style({
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
	selectors: {
		'&[type="checkbox"]': {
			borderRadius: '0.25em',
		},
		'&[type="radio"]': {
			borderRadius: '50%',
		},
		'&:active': {
			filter: 'brightness(90%)',
		},
		'&:focus': {
			borderColor: '#86b7fe',
			outline: 0,
			boxShadow: '0 0 0 0.25rem rgba(13, 110, 253, 0.25)',
		},
		'&:checked': {
			backgroundColor: '#0d6efd',
			borderColor: '#0d6efd',
		},
		'&:checked[type="checkbox"]': {
			vars: {
				[varBsFormCheckBgImage]: checkedMarkIcon,
			},
		},
		'&:checked[type="radio"]': {
			vars: {
				[varBsFormCheckBgImage]: checkedRadioIcon,
			},
		},
		'&:disabled': {
			pointerEvents: 'none',
			filter: 'none',
			opacity: 0.5,
		},
	},
})

export const formCheckLabel = style({
	display: 'inline-block',
})

globalStyle(`${formCheck} ${formCheckInput}`, {
	float: 'left',
	marginLeft: '-1.5em',
})

globalStyle(`${formSwitch} ${formCheckInput}`, {
	width: '2em',
	marginLeft: '-2.5em',
	backgroundImage: varBsFormSwitchBg,
	backgroundPosition: 'left center',
	borderRadius: '2em',
	transition: 'background-position 0.15s ease-in-out',
})

globalStyle(`${formSwitch} ${formCheckInput}:focus`, {
	vars: {
		[varBsFormSwitchBg]: switchKnobFocusIcon,
	},
})

globalStyle(`${formSwitch} ${formCheckInput}:checked`, {
	backgroundPosition: 'right center',
	vars: {
		[varBsFormSwitchBg]: switchKnobCheckedIcon,
	},
})

globalStyle(
	`${formCheckInput}[disabled] ~ ${formCheckLabel}, ${formCheckInput}:disabled ~ ${formCheckLabel}`,
	{
		cursor: 'default',
		opacity: 0.5,
	},
)

globalStyle(`${formSwitch} ${formCheckInput}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})
