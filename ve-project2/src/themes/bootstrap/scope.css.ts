import { style } from '@vanilla-extract/css'

// Bootstrap theme scope class.
// Apply this to a container element; all contract-class descendants inside
// will receive Bootstrap styling via the globalStyle rules in ui/buttons/styles.css.ts.
export const bootstrapScope = style({
	fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#212529',
	backgroundColor: '#fff',
	padding: '1rem',
	display: 'block',
})
