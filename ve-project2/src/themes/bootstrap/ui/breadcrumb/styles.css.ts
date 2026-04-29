import { globalStyle } from '@vanilla-extract/css'
import {
	breadcrumb,
	breadcrumbItem,
	breadcrumbItemActive,
} from '../../../../theme-contract/ui/breadcrumb/contract.css'
import { bootstrapScope } from '../../scope.css'

// Bootstrap default theme values
// --bs-secondary-color: rgba(33, 37, 41, 0.75)

// ── Base breadcrumb ───────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${breadcrumb}`, {
	display: 'flex',
	flexWrap: 'wrap',
	padding: '0',
	marginBottom: '1rem',
	listStyle: 'none',
})

// ── Item sibling spacing and "/" divider ──────────────────────────────────────

globalStyle(`${bootstrapScope}${breadcrumb} ${breadcrumbItem} + ${breadcrumbItem}`, {
	paddingLeft: '0.5rem',
})

globalStyle(`${bootstrapScope}${breadcrumb} ${breadcrumbItem} + ${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: '0.5rem',
	color: 'rgba(33, 37, 41, 0.75)',
	content: '"/"',
})

// ── Active item ───────────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${breadcrumb} ${breadcrumbItemActive}`, {
	color: 'rgba(33, 37, 41, 0.75)',
})
