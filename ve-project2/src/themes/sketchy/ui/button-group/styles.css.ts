import { globalStyle } from '@vanilla-extract/css'
import {
	btnGroup,
	btnToolbar,
} from '../../../../theme-contract/ui/button-group/contract.css'
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'
import { sketchyScope } from '../../scope.css'

// Sketchy theme values
// --bs-border-radius: 25px, --bs-border-width: 2px
// Sketchy has no special btn-group overrides beyond the changed border values.

// ── Toolbar ───────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

// ── Group container ───────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
	borderRadius: '25px',
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

// Collapse adjacent button borders (2px for sketchy)
globalStyle(`${sketchyScope}${btnGroup} > ${btn} + ${btn}`, {
	marginLeft: '-2px',
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
