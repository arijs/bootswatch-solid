import { globalStyle } from '@vanilla-extract/css'
import { btnGroup, btnToolbar } from '../../../../theme-contract/ui/button-group/contract.css'
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'
import { bootstrapScope } from '../../scope.css'

// Bootstrap default theme values
// --bs-border-radius: 0.375rem, --bs-border-width: 1px

// ── Toolbar ───────────────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${btnToolbar}`, {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
})

// ── Group container ───────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${btnGroup}`, {
	position: 'relative',
	display: 'inline-flex',
	verticalAlign: 'middle',
	borderRadius: '0.375rem',
})

// ── Buttons inside a group ────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${btnGroup} > ${btn}`, {
	position: 'relative',
	flex: '1 1 auto',
})

globalStyle(
	`${bootstrapScope}${btnGroup} > ${btn}:hover,` +
		`${bootstrapScope}${btnGroup} > ${btn}:focus,` +
		`${bootstrapScope}${btnGroup} > ${btn}:active`,
	{
		zIndex: 1,
	},
)

// Collapse adjacent button borders (negative margin equals border-width)
globalStyle(`${bootstrapScope}${btnGroup} > ${btn} + ${btn}`, {
	marginLeft: '-1px',
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
