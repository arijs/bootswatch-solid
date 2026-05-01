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
import { varBsBorderRadius, varBsBorderWidth } from '../../../../theme-contract/_vars.css'
import { bootstrapScope } from '../../scope.css'

// ── Toolbar ───────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .btn-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-start; }
globalStyle(`${bootstrapScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

// ── Group container ───────────────────────────────────────────────────────────

// SOURCE CSS:
// .btn-group { position: relative; display: inline-flex; vertical-align: middle; }
// .btn-group { border-radius: var(--bs-border-radius); }
globalStyle(`${bootstrapScope}${btnGroup}`, {
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

globalStyle(`${bootstrapScope}${btnGroupButton}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${bootstrapScope}${marginEnd2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(
	`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnGroupInteractive},` +
		`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnCheck}:focus + ${bootstrapScope}${btnGroupInteractive},` +
		`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupInteractive}:hover,` +
		`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupInteractive}:focus,` +
		`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupInteractive}:active,` +
		`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupInteractive}${btnActiveHook}`,
	{
		zIndex: 1,
	},
)

// SOURCE CSS:
// .btn-group > :not(.btn-check:first-child) + .btn { margin-left: calc(-1 * var(--bs-border-width)); }
globalStyle(
	`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupButton} + ${bootstrapScope}${btnGroupInteractive}`,
	{
		marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
	},
)

// Remove right radius from all buttons except the last
globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupInteractive}:not(:last-child)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// Remove left radius from all buttons except the first
globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupInteractive}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// Keep base .btn children grouped even if component omits utility classes.
globalStyle(`${bootstrapScope}${btnGroup} > ${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${bootstrapScope}${btnGroup} > ${btn} + ${btn}`, {
	marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
})

// Remove right radius from all buttons except the last
globalStyle(`${bootstrapScope}${btnGroup} > ${btn}:not(:last-child)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// Remove left radius from all buttons except the first
globalStyle(`${bootstrapScope}${btnGroup} > ${btn}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})
