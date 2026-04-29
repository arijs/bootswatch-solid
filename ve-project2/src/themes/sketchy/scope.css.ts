import { globalStyle, style } from '@vanilla-extract/css'
import { body, bodyText } from '../../theme-contract/theme-contract.css'

// Sketchy theme scope class.
// Zero-style identifier — just a stable hashed class name used as a selector
// prefix in compound rules.  No CSS is embedded here; all Sketchy root styles
// are wired through globalStyle compound selectors below so the same
// element-owned pattern used for components also applies to body-level traits.
//
// Key visual differentiators vs Bootstrap:
//   - Font: 'Neucha', cursive  (the hand-written Bootswatch Sketchy typeface)
//   - Buttons: 2 px border, irregular border-radius (hand-drawn look)
export const sketchyScope = style({})

// ── Root / body styles ────────────────────────────────────────────────────────

// Text-bearing root: sets the Sketchy base typography (Neucha handwritten font).
// Applied to any element that carries BOTH sketchyScope + bodyText.
globalStyle(`${sketchyScope}${bodyText}`, {
	fontFamily: "'Neucha', cursive",
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#212529',
})

// Outer wrapper: sets background and layout for a Sketchy-themed region.
// Applied to any element that carries BOTH sketchyScope + body.
globalStyle(`${sketchyScope}${body}`, {
	backgroundColor: '#fff',
	padding: '1rem',
	display: 'block',
})

