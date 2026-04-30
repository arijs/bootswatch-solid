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
import { sketchyScope } from '../../scope.css'

// Sketchy overrides --bs-border-radius (25px) and --bs-border-width (2px).
// These propagate automatically via varBsBorderRadius/varBsBorderWidth which
// already carry Sketchy values from the body scope, so no hardcoded values needed.

// ── Toolbar ───────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

// ── Group container ───────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${btnGroup}`, {
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

globalStyle(`${sketchyScope}${btnGroupButton}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${sketchyScope}${marginEnd2}`, {
	marginRight: '0.5rem !important',
})

globalStyle(
	`${sketchyScope}${btnGroup} > ${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnGroupInteractive},` +
		`${sketchyScope}${btnGroup} > ${sketchyScope}${btnCheck}:focus + ${sketchyScope}${btnGroupInteractive},` +
		`${sketchyScope}${btnGroup} > ${sketchyScope}${btnGroupInteractive}:hover,` +
		`${sketchyScope}${btnGroup} > ${sketchyScope}${btnGroupInteractive}:focus,` +
		`${sketchyScope}${btnGroup} > ${sketchyScope}${btnGroupInteractive}:active,` +
		`${sketchyScope}${btnGroup} > ${sketchyScope}${btnGroupInteractive}${btnActiveHook}`,
	{
		zIndex: 1,
	},
)

// Collapse adjacent button borders (negative margin equals Sketchy border-width = 2px)
globalStyle(
	`${sketchyScope}${btnGroup} > ${sketchyScope}${btnGroupButton} + ${sketchyScope}${btnGroupInteractive}`,
	{
		marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
	},
)

// Remove right radius from all buttons except the last
globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btnGroupInteractive}:not(:last-child)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// Remove left radius from all buttons except the first
globalStyle(`${sketchyScope}${btnGroup} > ${sketchyScope}${btnGroupInteractive}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// Keep base .btn children grouped even if component omits utility classes.
globalStyle(`${sketchyScope}${btnGroup} > ${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(`${sketchyScope}${btnGroup} > ${btn} + ${btn}`, {
	marginLeft: `calc(-1 * ${varBsBtnGroupBorderWidth})`,
})

// Remove right radius from all buttons except the last
globalStyle(`${sketchyScope}${btnGroup} > ${btn}:not(:last-child)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// Remove left radius from all buttons except the first
globalStyle(`${sketchyScope}${btnGroup} > ${btn}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})
