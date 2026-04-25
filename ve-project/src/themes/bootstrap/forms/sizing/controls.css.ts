import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderRadiusLg,
	varBsBorderRadiusSm,
	varBsBorderWidth,
	varBsSecondaryBg,
	varBsSecondaryColor,
	varBsTertiaryBg,
} from '../../../../theme-contract/_vars.css'
import { varBsFormSelectBgImg } from '../../../../theme-contract/ui/forms/_vars.css'

const selectChevronIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")"

export const mb3 = style({
	marginBottom: '1rem',
})

export const formLabel = style({
	display: 'inline-block',
	marginBottom: '0.5rem',
})

export const formText = style({
	marginTop: '0.25rem',
	fontSize: '0.875em',
	color: varBsSecondaryColor,
})

export const formRange = style({
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
	selectors: {
		'&:focus': {
			outline: 0,
		},
		'&:focus::-webkit-slider-thumb': {
			boxShadow: '0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25)',
		},
		'&::-webkit-slider-thumb': {
			width: '1rem',
			height: '1rem',
			marginTop: '-0.25rem',
			WebkitAppearance: 'none',
			appearance: 'none',
			backgroundColor: '#0d6efd',
			border: 0,
			borderRadius: '1rem',
			transition:
				'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
		},
		'&::-webkit-slider-thumb:active': {
			backgroundColor: '#b6d4fe',
		},
		'&::-webkit-slider-runnable-track': {
			width: '100%',
			height: '0.5rem',
			color: 'transparent',
			cursor: 'pointer',
			backgroundColor: varBsSecondaryBg,
			borderColor: 'transparent',
			borderRadius: '1rem',
		},
		'&:disabled': {
			pointerEvents: 'none',
		},
		'&:disabled::-webkit-slider-thumb': {
			backgroundColor: varBsSecondaryColor,
		},
	},
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			selectors: {
				'&::-webkit-slider-thumb': {
					transition: 'none',
				},
			},
		},
	},
})

export const formFloating = style({
	position: 'relative',
})

export const floatingLabel = style({
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
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

export const formControlFloating = style({
	height: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	minHeight: `calc(3.5rem + calc(${varBsBorderWidth} * 2))`,
	lineHeight: '1.25',
	padding: '1rem 0.75rem',
	selectors: {
		'&::placeholder': {
			color: 'transparent',
		},
		'&:focus': {
			paddingTop: '1.625rem',
			paddingBottom: '0.625rem',
		},
		'&:not(:placeholder-shown)': {
			paddingTop: '1.625rem',
			paddingBottom: '0.625rem',
		},
		'&:-webkit-autofill': {
			paddingTop: '1.625rem',
			paddingBottom: '0.625rem',
		},
	},
})

globalStyle(`${formControlFloating}:focus ~ ${floatingLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${formFloating} > ${formControlFloating}::placeholder`, {
	color: 'transparent',
})

globalStyle(`${formFloating} > ${formControlFloating}::-webkit-input-placeholder`, {
	color: 'transparent',
})

globalStyle(`${formControlFloating}:not(:placeholder-shown) ~ ${floatingLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${formControlFloating}:-webkit-autofill ~ ${floatingLabel}`, {
	transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
})

globalStyle(`${formControlFloating}:disabled ~ ${floatingLabel}`, {
	color: '#6c757d',
})

export const formControl = style({
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	display: 'block',
	width: '100%',
	padding: '0.375rem 0.75rem',
	fontWeight: '400',
	color: varBsBodyColor,
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
	backgroundColor: varBsBodyBg,
	backgroundClip: 'padding-box',
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
	transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
	selectors: {
		'&[type="file"]': {
			overflow: 'hidden',
		},
		'&[type="file"]:not(:disabled):not([readonly])': {
			cursor: 'pointer',
		},
		'&:focus': {
			color: varBsBodyColor,
			backgroundColor: varBsBodyBg,
			borderColor: '#86b7fe',
			outline: 0,
			boxShadow: '0 0 0 0.25rem rgba(13, 110, 253, 0.25)',
		},
		'&::placeholder': {
			color: varBsSecondaryColor,
			opacity: 1,
		},
		'&:disabled': {
			backgroundColor: varBsSecondaryBg,
			opacity: 1,
		},
		'&::-webkit-date-and-time-value': {
			minWidth: '85px',
			height: '1.5em',
			margin: 0,
		},
		'&::-webkit-datetime-edit': {
			display: 'block',
			padding: 0,
		},
		'&::-webkit-file-upload-button': {
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
		},
		'&::file-selector-button': {
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
		},
		'&:hover:not(:disabled):not([readonly])::-webkit-file-upload-button': {
			backgroundColor: varBsSecondaryBg,
		},
		'&:hover:not(:disabled):not([readonly])::file-selector-button': {
			backgroundColor: varBsSecondaryBg,
		},
		'&:is([type="button"], [type="reset"], [type="submit"])': {
			WebkitAppearance: 'button',
		},
	},
})

export const formControlSm = style({
	minHeight: `calc(1.5em + 0.5rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
	selectors: {
		'&::-webkit-file-upload-button': {
			padding: '0.25rem 0.5rem',
			margin: '-0.25rem -0.5rem',
			WebkitMarginEnd: '0.5rem',
			marginInlineEnd: '0.5rem',
		},
		'&::file-selector-button': {
			padding: '0.25rem 0.5rem',
			margin: '-0.25rem -0.5rem',
			WebkitMarginEnd: '0.5rem',
			marginInlineEnd: '0.5rem',
		},
	},
})

export const formControlLg = style({
	minHeight: `calc(1.5em + 1rem + calc(${varBsBorderWidth} * 2))`,
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
	selectors: {
		'&::-webkit-file-upload-button': {
			padding: '0.5rem 1rem',
			margin: '-0.5rem -1rem',
			WebkitMarginEnd: '1rem',
			marginInlineEnd: '1rem',
		},
		'&::file-selector-button': {
			padding: '0.5rem 1rem',
			margin: '-0.5rem -1rem',
			WebkitMarginEnd: '1rem',
			marginInlineEnd: '1rem',
		},
	},
})

export const formSelect = style({
	vars: {
		[varBsFormSelectBgImg]: selectChevronIcon,
	},
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	textTransform: 'none',
	wordWrap: 'normal',
	display: 'block',
	width: '100%',
	padding: '0.375rem 2.25rem 0.375rem 0.75rem',
	fontWeight: '400',
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
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
	selectors: {
		'&:focus': {
			borderColor: '#86b7fe',
			outline: 0,
			boxShadow: '0 0 0 0.25rem rgba(13, 110, 253, 0.25)',
		},
		'&:disabled': {
			backgroundColor: varBsSecondaryBg,
			opacity: 1,
		},
	},
})

export const formSelectSm = style({
	paddingTop: '0.25rem',
	paddingBottom: '0.25rem',
	paddingLeft: '0.5rem',
	fontSize: '0.875rem',
	borderRadius: varBsBorderRadiusSm,
})

export const formSelectLg = style({
	paddingTop: '0.5rem',
	paddingBottom: '0.5rem',
	paddingLeft: '1rem',
	fontSize: '1.25rem',
	borderRadius: varBsBorderRadiusLg,
})

export const form = style({})

export const fieldset = style({
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
})

export const legend = style({
	float: 'left',
	width: '100%',
	padding: 0,
	marginBottom: '0.5rem',
	lineHeight: 'inherit',
	fontSize: 'calc(1.275rem + 0.3vw)',
	'@media': {
		'(min-width: 1200px)': {
			fontSize: '1.5rem',
		},
	},
})

export const legendClear = style({
	clear: 'left',
})
