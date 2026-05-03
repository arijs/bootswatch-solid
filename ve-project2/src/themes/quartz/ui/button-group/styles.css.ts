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
import { quartzScope } from '../../scope.css'

// ── Toolbar ───────────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

// ── Group container ───────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${btnGroup}`, {
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

// ── Buttons inside a group ────────────────────────────────────────────────────

globalStyle(`${quartzScope}${btnGroupButton}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${quartzScope}${marginEnd2}`, {
	marginRight: '1rem !important',
})

globalStyle(
	`${quartzScope}${btnGroup} > ${quartzScope}${btnCheck}:checked + ${quartzScope}${btnGroupInteractive},` +
		`${quartzScope}${btnGroup} > ${quartzScope}${btnCheck}:focus + ${quartzScope}${btnGroupInteractive},` +
		`${quartzScope}${btnGroup} > ${quartzScope}${btnGroupInteractive}:hover,` +
		`${quartzScope}${btnGroup} > ${quartzScope}${btnGroupInteractive}:focus,` +
		`${quartzScope}${btnGroup} > ${quartzScope}${btnGroupInteractive}:active,` +
		`${quartzScope}${btnGroup} > ${quartzScope}${btnGroupInteractive}${btnActiveHook}`,
	{
		zIndex: 1,
	},
)

// Match Bootstrap/source adjacency behavior for split dropdowns.
globalStyle(
	`${quartzScope}${btnGroup} > ${quartzScope}${btnGroupButton} + ${quartzScope}${btnGroupInteractive}`,
	{
		marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
	},
)

// Match Bootstrap: dropdown toggles keep their right radius even when a menu follows.
globalStyle(
	`${quartzScope}${btnGroup} > ${quartzScope}${btnGroupInteractive}:not(:last-child):not(${quartzScope}${dropdownToggle})`,
	{
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	},
)

// Remove left radius from all buttons except the first
globalStyle(`${quartzScope}${btnGroup} > ${quartzScope}${btnGroupInteractive}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// Keep base .btn children grouped even if component omits utility classes.
globalStyle(`${quartzScope}${btnGroup} > ${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

// Match Bootstrap/source adjacency behavior for base .btn children too.
globalStyle(`${quartzScope}${btnGroup} > ${btn} + ${btn}`, {
	marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
})

// Match Bootstrap: dropdown toggles keep their right radius even when a menu follows.
globalStyle(`${quartzScope}${btnGroup} > ${btn}:not(:last-child):not(${quartzScope}${dropdownToggle})`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// Remove left radius from all buttons except the first
globalStyle(`${quartzScope}${btnGroup} > ${btn}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})
