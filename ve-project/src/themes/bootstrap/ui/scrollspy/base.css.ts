import { style } from '@vanilla-extract/css'

export const px3 = style({
	paddingRight: '1rem !important' as '1rem',
	paddingLeft: '1rem !important' as '1rem',
})

export const scrollspyExample = style({
	position: 'relative',
	height: '200px',
	marginTop: '0.5rem',
	overflow: 'auto',
})