import { style } from '@vanilla-extract/css'

// Layered variant of the Bootstrap scope class, used exclusively in the @layer demo.
// Identical visual properties to bootstrapScope; a separate hash is needed to avoid
// interference from the non-layered styles already in the bundle.
export const bootstrapScopeL = style({
	fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#212529',
	backgroundColor: '#fff',
	padding: '1rem',
	display: 'block',
})
