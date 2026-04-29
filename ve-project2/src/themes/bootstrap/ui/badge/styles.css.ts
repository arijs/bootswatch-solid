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
import { bootstrapScope } from '../../scope.css'

// Bootstrap default theme values
// Primary: #0d6efd, Secondary: #6c757d, Success: #198754, Danger: #dc3545
// Warning: #ffc107, Info: #0dcaf0, Light: #f8f9fa, Dark: #212529

// ── Base badge ────────────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${badge}`, {
	display: 'inline-block',
	padding: '0.35em 0.65em',
	fontSize: '0.75em',
	fontWeight: 700,
	lineHeight: 1,
	color: '#fff',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	verticalAlign: 'baseline',
	borderRadius: '0.375rem',
})

globalStyle(`${bootstrapScope}${badge}:empty`, {
	display: 'none',
})

// ── Colour variants ───────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${badgePrimary}`, {
	backgroundColor: '#0d6efd',
})

globalStyle(`${bootstrapScope}${badgeSecondary}`, {
	backgroundColor: '#6c757d',
})

globalStyle(`${bootstrapScope}${badgeSuccess}`, {
	backgroundColor: '#198754',
})

globalStyle(`${bootstrapScope}${badgeDanger}`, {
	backgroundColor: '#dc3545',
})

// Warning and Info use dark text for contrast
globalStyle(`${bootstrapScope}${badgeWarning}`, {
	backgroundColor: '#ffc107',
	color: '#000',
})

globalStyle(`${bootstrapScope}${badgeInfo}`, {
	backgroundColor: '#0dcaf0',
	color: '#000',
})

// Light uses dark text for contrast
globalStyle(`${bootstrapScope}${badgeLight}`, {
	backgroundColor: '#f8f9fa',
	color: '#212529',
})

globalStyle(`${bootstrapScope}${badgeDark}`, {
	backgroundColor: '#212529',
})

// ── Shape modifier ────────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${badgeRoundedPill}`, {
	borderRadius: '50rem',
})
