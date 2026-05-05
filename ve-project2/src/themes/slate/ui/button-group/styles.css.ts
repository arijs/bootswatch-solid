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
import { slateScope } from '../../scope.css'

// ── Toolbar ───────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .btn-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-start; }
globalStyle(`${slateScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

// ── Group container ───────────────────────────────────────────────────────────

// SOURCE CSS:
// .btn-group { position: relative; display: inline-flex; vertical-align: middle; }
// .btn-group { border-radius: var(--bs-border-radius); }
globalStyle(`${slateScope}${btnGroup}`, {
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

globalStyle(`${slateScope}${btnGroupButton}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${slateScope}${marginEnd2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(
	`${slateScope}${btnGroup} > ${slateScope}${btnCheck}:checked + ${slateScope}${btnGroupInteractive},` +
		`${slateScope}${btnGroup} > ${slateScope}${btnCheck}:focus + ${slateScope}${btnGroupInteractive},` +
		`${slateScope}${btnGroup} > ${slateScope}${btnGroupInteractive}:hover,` +
		`${slateScope}${btnGroup} > ${slateScope}${btnGroupInteractive}:focus,` +
		`${slateScope}${btnGroup} > ${slateScope}${btnGroupInteractive}:active,` +
		`${slateScope}${btnGroup} > ${slateScope}${btnGroupInteractive}${btnActiveHook}`,
	{
		zIndex: 1,
	},
)

// SOURCE CSS:
// .btn-group > :not(.btn-check:first-child) + .btn { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(
	`${slateScope}${btnGroup} > ${slateScope}${btnGroupButton} + ${slateScope}${btnGroupInteractive}`,
	{
		marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
	},
)

// Match Bootstrap: dropdown toggles keep their right radius even when a menu follows.
globalStyle(
	`${slateScope}${btnGroup} > ${slateScope}${btnGroupInteractive}:not(:last-child):not(${slateScope}${dropdownToggle})`,
	{
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	},
)

// Remove left radius from all buttons except the first
globalStyle(`${slateScope}${btnGroup} > ${slateScope}${btnGroupInteractive}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// Keep base .btn children grouped even if component omits utility classes.
globalStyle(`${slateScope}${btnGroup} > ${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${slateScope}${btnGroup} > ${btn} + ${btn}`, {
	marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
})

// Match Bootstrap: dropdown toggles keep their right radius even when a menu follows.
globalStyle(`${slateScope}${btnGroup} > ${btn}:not(:last-child):not(${slateScope}${dropdownToggle})`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// Remove left radius from all buttons except the first
globalStyle(`${slateScope}${btnGroup} > ${btn}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})
