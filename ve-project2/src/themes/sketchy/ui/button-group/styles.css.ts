import { globalStyle } from '@vanilla-extract/css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'
import {
	varBsBtnGroupBorderRadius,
	varBsBtnGroupBorderWidth,
} from '../../../../theme-contract/ui/button-group/_vars.css'
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'
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
	borderRadius: varBsBtnGroupBorderRadius,
})

// ── Buttons inside a group ────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${btnGroup} > ${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(
	`${sketchyScope}${btnGroup} > ${btn}:hover,` +
		`${sketchyScope}${btnGroup} > ${btn}:focus,` +
		`${sketchyScope}${btnGroup} > ${btn}:active`,
	{
		zIndex: 1,
	},
)

// Collapse adjacent button borders (negative margin equals Sketchy border-width = 2px)
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
