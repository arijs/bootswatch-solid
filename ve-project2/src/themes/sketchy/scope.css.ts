import { style } from '@vanilla-extract/css'

// Sketchy theme scope class.
// Apply this to a container element; all contract-class descendants inside
// will receive Sketchy styling via the globalStyle rules in ui/buttons/styles.css.ts.
//
// Key visual differentiators vs Bootstrap:
//   - Font: 'Neucha', cursive  (the hand-written Bootswatch Sketchy typeface)
//   - Buttons: 2 px border, irregular border-radius (hand-drawn look)
export const sketchyScope = style({
	fontFamily: "'Neucha', cursive",
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#212529',
	backgroundColor: '#fff',
	padding: '1rem',
	display: 'block',
})
