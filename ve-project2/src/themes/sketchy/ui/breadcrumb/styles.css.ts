import { globalStyle } from '@vanilla-extract/css'
import {
	breadcrumb,
	breadcrumbItem,
	breadcrumbItemActive,
} from '../../../../theme-contract/ui/breadcrumb/contract.css'
import { sketchyScope } from '../../scope.css'

// Sketchy theme values
// Breadcrumb gets a hand-drawn border and the organic sketchy border-radius.
// --bs-secondary-color: rgba(33, 37, 41, 0.75)

// ── Base breadcrumb ───────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${breadcrumb}`, {
	display: 'flex',
	flexWrap: 'wrap',
	padding: '0.375rem 0.75rem',
	marginBottom: '1rem',
	listStyle: 'none',
	border: '2px solid #333',
	borderRadius: '255px 25px 225px 25px / 25px 225px 25px 255px',
})

// ── Item sibling spacing and "/" divider ──────────────────────────────────────

globalStyle(`${sketchyScope}${breadcrumb} ${breadcrumbItem} + ${breadcrumbItem}`, {
	paddingLeft: '0.5rem',
})

globalStyle(
	`${sketchyScope}${breadcrumb} ${breadcrumbItem} + ${breadcrumbItem}::before`,
	{
		float: 'left',
		paddingRight: '0.5rem',
		color: '#333',
		content: '"/"',
	},
)

// ── Active item ───────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${breadcrumb} ${breadcrumbItemActive}`, {
	color: 'rgba(33, 37, 41, 0.75)',
})
