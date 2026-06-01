import { createVar, style } from '@vanilla-extract/css'

// Bootstrap container gutter vars
export const varBsGutterX = createVar()
export const varBsGutterY = createVar()

// .container-fluid equivalent — zero-style hook; theme families wire scoped globalStyle.
export const containerFluid = style({})
