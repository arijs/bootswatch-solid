import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBorderWidth,
} from '../../../../theme-contract/_vars.css'
import { elFieldset } from '../../../../theme-contract/global-elements/contract.css'
import {
	btnGroup,
	btnGroupButton,
	btnGroupInteractive,
	btnToolbar,
} from '../../../../theme-contract/ui/button-group/contract.css'
import { bootstrapScope } from '../../scope.css'

// Bootstrap resets fieldset: min-width:0; padding:0; margin:0; border:0
globalStyle(`${bootstrapScope}${elFieldset}`, {
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
})

// SOURCE CSS:
// .btn-toolbar { display: flex; flex-wrap: wrap; justify-content: flex-start; }
globalStyle(`${bootstrapScope}${btnToolbar}`, {
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "flex-start",
})

// SOURCE CSS:
// .btn-group { position: relative; display: inline-flex; vertical-align: middle; border-radius: var(--bs-border-radius); }
globalStyle(`${bootstrapScope}${btnGroup}`, {
	position: "relative",
	display: "inline-flex",
	verticalAlign: "middle",
	borderRadius: varBsBorderRadius,
})

// SOURCE CSS:
// .btn-group > .btn { position: relative; flex: 1 1 auto; }
globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupButton}`, {
	position: "relative",
	flex: "1 1 auto",
})

// SOURCE CSS:
// .btn-group > :not(.btn-check:first-child) + .btn { margin-left: calc(-1 * var(--bs-border-width)); }
// Collapses double border between adjacent buttons in a group.
globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupButton} + ${bootstrapScope}${btnGroupButton}`, {
	marginLeft: `calc(-1 * ${varBsBorderWidth})`,
})

// SOURCE CSS:
// .btn-group > .btn:not(:last-child):not(.dropdown-toggle) { border-top-right-radius: 0; border-bottom-right-radius: 0; }
globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupButton}:not(:last-child)`, {
	borderTopRightRadius: 0,
	borderBottomRightRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn:nth-child(n+3), .btn-group > :not(.btn-check)+.btn { border-top-left-radius: 0; border-bottom-left-radius: 0; }
globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupButton}:not(:first-child)`, {
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
})

// SOURCE CSS:
// .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active { z-index: 1; }
globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupInteractive}:hover`, {
	zIndex: 1,
})
globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupInteractive}:focus`, {
	zIndex: 1,
})
globalStyle(`${bootstrapScope}${btnGroup} > ${bootstrapScope}${btnGroupInteractive}:active`, {
	zIndex: 1,
})
