import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsTertiaryBg,
} from '../../../../theme-contract/_vars.css'

export const inputGroup = style({
	position: 'relative',
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'stretch',
	width: '100%',
})

export const inputGroupText = style({
	display: 'flex',
	alignItems: 'center',
	padding: '0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: '400',
	lineHeight: '1.5',
	color: varBsBodyColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	backgroundColor: varBsTertiaryBg,
	border: `${varBsBorderWidth} solid ${varBsBorderColor}`,
	borderRadius: varBsBorderRadius,
})

globalStyle(
	`${inputGroup} > input, ${inputGroup} > select, ${inputGroup} > textarea, ${inputGroup} > .form-floating`,
	{
		position: 'relative',
		flex: '1 1 auto',
		width: '1%',
		minWidth: 0,
	},
)

globalStyle(
	`${inputGroup} > input:focus, ${inputGroup} > select:focus, ${inputGroup} > textarea:focus, ${inputGroup} > .form-floating:focus-within`,
	{
		zIndex: 5,
	},
)

globalStyle(
	`${inputGroup} > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating)`,
	{
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	},
)

globalStyle(
	`${inputGroup} > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback)`,
	{
		marginLeft: `calc(-1 * ${varBsBorderWidth})`,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	},
)
