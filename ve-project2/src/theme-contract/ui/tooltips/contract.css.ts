import { style } from '@vanilla-extract/css'
import { varBsBorderColor, varBsBorderStyle, varBsBorderWidth } from '../../_vars.css'

export const tooltipVe = style({})
export const tooltipFade = style({})
export const tooltipShow = style({})
export const tooltipArrow = style({})
export const tooltipInner = style({})

/** Demo frame — matches ve-project tooltips `frame` (flex + border + 16em height). */
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

export const justifyCenter = style({
	justifyContent: 'center',
})

export const justifyEnd = style({
	justifyContent: 'flex-end',
})

export const justifyStart = style({
	justifyContent: 'flex-start',
})
