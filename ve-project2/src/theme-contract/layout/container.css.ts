import { createVar, style } from '@vanilla-extract/css'

// Bootstrap container gutter vars
export const varBsGutterX = createVar()
export const varBsGutterY = createVar()

// .container-fluid equivalent used by demo wrappers/components.
export const containerFluid = style({
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '0',
	},
	width: '100%',
	paddingRight: `calc(${varBsGutterX} * 0.5)`,
	paddingLeft: `calc(${varBsGutterX} * 0.5)`,
	marginRight: 'auto',
	marginLeft: 'auto',
})
