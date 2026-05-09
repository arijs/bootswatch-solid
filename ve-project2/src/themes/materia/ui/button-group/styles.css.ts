import { globalStyle } from '@vanilla-extract/css'
import {
	btnGroup,
	btnGroupButton,
	btnGroupInteractive,
	btnToolbar,
	marginEnd2,
} from '../../../../theme-contract/ui/button-group/contract.css'
import {
	varBsBtnGroupBorderRadius,
	varBsBtnGroupBorderWidth,
} from '../../../../theme-contract/ui/button-group/_vars.css'
import { btn, btnActiveHook, btnCheck } from '../../../../theme-contract/ui/buttons/contract.css'
import { dropdownToggle } from '../../../../theme-contract/ui/dropdowns/contract.css'
import { varBsBorderRadius, varBsBorderWidth } from '../../../../theme-contract/_vars.css'
import { materiaScope } from '../../scope.css'

globalStyle(`${materiaScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

globalStyle(`${materiaScope}${btnGroup}`, {
	vars: {
		[varBsBtnGroupBorderRadius]: varBsBorderRadius,
		[varBsBtnGroupBorderWidth]: varBsBorderWidth,
	},
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
	borderRadius: varBsBtnGroupBorderRadius,
})

globalStyle(`${materiaScope}${btnGroupButton}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${materiaScope}${marginEnd2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(
	`${materiaScope}${btnGroup} > ${materiaScope}${btnCheck}:checked + ${materiaScope}${btnGroupInteractive},` +
		`${materiaScope}${btnGroup} > ${materiaScope}${btnCheck}:focus + ${materiaScope}${btnGroupInteractive},` +
		`${materiaScope}${btnGroup} > ${materiaScope}${btnGroupInteractive}:hover,` +
		`${materiaScope}${btnGroup} > ${materiaScope}${btnGroupInteractive}:focus,` +
		`${materiaScope}${btnGroup} > ${materiaScope}${btnGroupInteractive}:active,` +
		`${materiaScope}${btnGroup} > ${materiaScope}${btnGroupInteractive}${btnActiveHook}`,
	{
		zIndex: 1,
	},
)

globalStyle(
	`${materiaScope}${btnGroup} > ${materiaScope}${btnGroupButton} + ${materiaScope}${btnGroupInteractive}`,
	{
		marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
	},
)

globalStyle(
	`${materiaScope}${btnGroup} > :not(.btn-check:first-child) + ${btn}, ${materiaScope}${btnGroup} > ${materiaScope}${btnGroup}:not(:first-child)`,
	{
		marginLeft: `calc(-1 * ${varBsBorderWidth})`,
	},
)

globalStyle(
	`${materiaScope}${btnGroup} > ${materiaScope}${btnGroupInteractive}:not(:last-child):not(${materiaScope}${dropdownToggle})`,
	{
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	},
)

globalStyle(`${materiaScope}${btnGroup} > ${materiaScope}${btnGroupInteractive}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

globalStyle(`${materiaScope}${btnGroup} > ${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${materiaScope}${btnGroup} > ${btn} + ${btn}`, {
	marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
})

globalStyle(`${materiaScope}${btnGroup} > ${btn}:not(:last-child):not(${materiaScope}${dropdownToggle})`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

globalStyle(`${materiaScope}${btnGroup} > ${btn}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

globalStyle(
	[
		`${materiaScope}${btnGroup} ${btn} + ${btn}`,
		`${materiaScope}${btnGroup} ${btn} + ${materiaScope}${btnGroup} > ${materiaScope}${dropdownToggle}`,
	].join(', '),
	{
		boxShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)',
	},
)

