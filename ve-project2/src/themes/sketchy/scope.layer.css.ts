import { style } from '@vanilla-extract/css'

// Layered variant of the Sketchy scope class, used exclusively in the @layer demo.
// Identical visual properties to sketchyScope; a separate hash is needed to avoid
// interference from the non-layered styles already in the bundle.
export const sketchyScopeL = style({
	fontFamily: "'Neucha', cursive",
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#212529',
	backgroundColor: '#fff',
	padding: '1rem',
	display: 'block',
})
