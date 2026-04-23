import { style } from '@vanilla-extract/css'
import { varBsBorderRadius, varBsBorderWidth } from '../../../../theme-contract/_vars.css'
import { btnActiveHook, btnCheckHook } from '../buttons/base.css'

export const btnToolbar = style({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

export const btnGroup = style({
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
	borderRadius: varBsBorderRadius,
})

export const btnGroupButton = style({
	position: 'relative',
	flex: '1 1 auto',
})

export const marginEnd2 = style({
	marginRight: '0.5rem !important' as '0.5rem',
})

export const btnGroupInteractive = style({
	selectors: {
		[`${btnGroup} > ${btnCheckHook}:checked + &, ${btnGroup} > ${btnCheckHook}:focus + &, ${btnGroup} > &:hover, ${btnGroup} > &:focus, ${btnGroup} > &:active, ${btnGroup} > &${btnActiveHook}`]: {
			zIndex: 1,
		},
		[`${btnGroup} > ${btnGroupButton} + &`]: {
			marginLeft: `calc(-1 * ${varBsBorderWidth})`,
		},
		[`${btnGroup} > &:not(:last-child)`]: {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		},
		[`${btnGroup} > &:not(:first-child)`]: {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
		},
	},
})
