import { globalStyle } from '@vanilla-extract/css'
import {
	badge,
	badgeDanger,
	badgeDark,
	badgeInfo,
	badgeLight,
	badgePrimary,
	badgeRoundedPill,
	badgeSecondary,
	badgeSuccess,
	badgeWarning,
} from '../../../../theme-contract/ui/badge/contract.css'
import { sketchyScope } from '../../scope.css'

// Sketchy theme values
// Primary: #333333, Secondary: #555555, Success: #28a745, Danger: #dc3545
// Warning: #ffc107, Info: #17a2b8, Light: #ffffff, Dark: #555555

// ── Base badge ────────────────────────────────────────────────────────────────
// Sketchy overrides badge padding and uses a hand-drawn border-radius

globalStyle(`${sketchyScope}${badge}`, {
	display: 'inline-block',
	padding: '0.5em 1.2em',
	fontSize: '0.75em',
	fontWeight: 700,
	lineHeight: 1,
	color: '#fff',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	verticalAlign: 'baseline',
	borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
})

globalStyle(`${sketchyScope}${badge}:empty`, {
	display: 'none',
})

// ── Colour variants ───────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${badgePrimary}`, {
	backgroundColor: '#333333',
})

globalStyle(`${sketchyScope}${badgeSecondary}`, {
	backgroundColor: '#555555',
})

globalStyle(`${sketchyScope}${badgeSuccess}`, {
	backgroundColor: '#28a745',
})

globalStyle(`${sketchyScope}${badgeDanger}`, {
	backgroundColor: '#dc3545',
})

globalStyle(`${sketchyScope}${badgeWarning}`, {
	backgroundColor: '#ffc107',
	color: '#000',
})

globalStyle(`${sketchyScope}${badgeInfo}`, {
	backgroundColor: '#17a2b8',
	color: '#000',
})

// Light uses dark text for contrast; Sketchy uses #555 as dark text on white
globalStyle(`${sketchyScope}${badgeLight}`, {
	backgroundColor: '#ffffff',
	color: '#555555',
})

globalStyle(`${sketchyScope}${badgeDark}`, {
	backgroundColor: '#555555',
})

// ── Shape modifier ────────────────────────────────────────────────────────────
// Sketchy pill uses an organic rounded shape instead of a plain 50rem pill

globalStyle(`${sketchyScope}${badgeRoundedPill}`, {
	borderRadius: '7rem 8rem 8rem 8rem / 4rem 5rem 6rem 6rem',
})
