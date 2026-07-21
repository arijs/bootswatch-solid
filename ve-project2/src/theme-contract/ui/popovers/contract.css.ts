import { style } from '@vanilla-extract/css'
import { varBsBorderColor, varBsBorderStyle, varBsBorderWidth } from '../../_vars.css'

export const popoverVe = style({})
export const popoverFade = style({})
export const popoverShow = style({})
export const bsPopoverTop = style({})
export const bsPopoverEnd = style({})
export const bsPopoverBottom = style({})
export const bsPopoverStart = style({})
export const bsPopoverAuto = style({})
export const popoverArrow = style({})
export const popoverHeader = style({})
export const popoverBody = style({})

/** Demo frame — matches ve-project popovers `frame` (flex + border + 16em height). */
export const frame = style({
	display: 'flex',
	border: `${varBsBorderWidth} ${varBsBorderStyle} ${varBsBorderColor}`,
	height: '16em',
})

export const frameColumn = style({
	flexDirection: 'column',
	alignItems: 'center',
})

export const frameRow = style({
	flexDirection: 'row',
	alignItems: 'center',
})

export const justifyEnd = style({
	justifyContent: 'flex-end',
})

export const justifyStart = style({
	justifyContent: 'flex-start',
})
