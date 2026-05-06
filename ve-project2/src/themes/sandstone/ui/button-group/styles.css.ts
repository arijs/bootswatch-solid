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
import { sandstoneScope } from '../../scope.css'

// ── Toolbar ───────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .btn-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-start; }
globalStyle(`${sandstoneScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

// ── Group container ───────────────────────────────────────────────────────────

// SOURCE CSS:
// .btn-group { position: relative; display: inline-flex; vertical-align: middle; }
// .btn-group { border-radius: var(--bs-border-radius); }
globalStyle(`${sandstoneScope}${btnGroup}`, {
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

globalStyle(`${sandstoneScope}${btnGroupButton}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${sandstoneScope}${marginEnd2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(
	`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnCheck}:checked + ${sandstoneScope}${btnGroupInteractive},` +
		`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnCheck}:focus + ${sandstoneScope}${btnGroupInteractive},` +
		`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnGroupInteractive}:hover,` +
		`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnGroupInteractive}:focus,` +
		`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnGroupInteractive}:active,` +
		`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnGroupInteractive}${btnActiveHook}`,
	{
		zIndex: 1,
	},
)

// SOURCE CSS:
// .btn-group > :not(.btn-check:first-child) + .btn { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(
	`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnGroupButton} + ${sandstoneScope}${btnGroupInteractive}`,
	{
		marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
	},
)

// Match Bootstrap: dropdown toggles keep their right radius even when a menu follows.
globalStyle(
	`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnGroupInteractive}:not(:last-child):not(${sandstoneScope}${dropdownToggle})`,
	{
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	},
)

// Remove left radius from all buttons except the first
globalStyle(`${sandstoneScope}${btnGroup} > ${sandstoneScope}${btnGroupInteractive}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// Keep base .btn children grouped even if component omits utility classes.
globalStyle(`${sandstoneScope}${btnGroup} > ${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${sandstoneScope}${btnGroup} > ${btn} + ${btn}`, {
	marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
})

// Match Bootstrap: dropdown toggles keep their right radius even when a menu follows.
globalStyle(`${sandstoneScope}${btnGroup} > ${btn}:not(:last-child):not(${sandstoneScope}${dropdownToggle})`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// Remove left radius from all buttons except the first
globalStyle(`${sandstoneScope}${btnGroup} > ${btn}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

