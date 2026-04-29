import { globalStyle, style } from '@vanilla-extract/css'
import { body, bodyText } from '../../theme-contract/theme-contract.css'

// Bootstrap theme scope class.
// Zero-style identifier — just a stable hashed class name used as a selector
// prefix in compound rules.  No CSS is embedded here; all Bootstrap root styles
// are wired through globalStyle compound selectors below so the same
// element-owned pattern used for components also applies to body-level traits.
export const bootstrapScope = style({})

// ── Root / body styles ────────────────────────────────────────────────────────

// Text-bearing root: sets the Bootstrap base typography that every descendant
// inherits.  Applied to any element that carries BOTH bootstrapScope + bodyText.
globalStyle(`${bootstrapScope}${bodyText}`, {
	fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#212529',
})

// Outer wrapper: sets background and layout for a Bootstrap-themed region.
// Applied to any element that carries BOTH bootstrapScope + body.
globalStyle(`${bootstrapScope}${body}`, {
	backgroundColor: '#fff',
	padding: '1rem',
	display: 'block',
})

