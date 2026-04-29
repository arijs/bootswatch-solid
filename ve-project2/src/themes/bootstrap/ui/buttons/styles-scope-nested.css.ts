import { globalStyle } from '@vanilla-extract/css'
import {
	btn,
	btnDanger,
	btnDark,
	btnInfo,
	btnLight,
	btnPrimary,
	btnSecondary,
	btnSuccess,
	btnWarning,
} from '../../../../theme-contract/ui/buttons/contract.css'
import { sketchyScope } from '../../../sketchy/scope.css'
import { bootstrapScope } from '../../scope.css'

// Reverse-nesting fix using specificity alone — no @layer required.
//
// Problem: with a flat stylesheet, `.sketchyScope .btn` (2 class selectors, defined
// last) beats `.bootstrapScope .btn` (2 class selectors, defined first) even when
// `.bootstrapScope` is the inner/closer ancestor.
//
// Fix: add an explicit two-ancestor-scope selector that includes BOTH the outer and
// inner scope classes. It carries 3 class selectors (0-3-0) vs 2 for any single-scope
// rule (0-2-0), so it always wins on specificity alone — no @layer needed.
//
// Selector: .sketchyScope .bootstrapScope .btn
//   specificity: 0-3-0  >  .sketchyScope .btn (0-2-0)  >  .bootstrapScope .btn (0-2-0)

globalStyle(`${sketchyScope} ${bootstrapScope} ${btn}`, {
	appearance: 'button',
	display: 'inline-block',
	padding: '0.375rem 0.75rem',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#212529',
	textAlign: 'center',
	textDecoration: 'none',
	verticalAlign: 'middle',
	cursor: 'pointer',
	userSelect: 'none',
	backgroundColor: 'transparent',
	border: '1px solid transparent',
	borderRadius: '0.375rem',
	transition:
		'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
})

globalStyle(`${sketchyScope} ${bootstrapScope} ${btnPrimary}`, {
	color: '#fff',
	backgroundColor: '#0d6efd',
	borderColor: '#0d6efd',
})

globalStyle(`${sketchyScope} ${bootstrapScope} ${btnSecondary}`, {
	color: '#fff',
	backgroundColor: '#6c757d',
	borderColor: '#6c757d',
})

globalStyle(`${sketchyScope} ${bootstrapScope} ${btnSuccess}`, {
	color: '#fff',
	backgroundColor: '#198754',
	borderColor: '#198754',
})

globalStyle(`${sketchyScope} ${bootstrapScope} ${btnDanger}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
	borderColor: '#dc3545',
})

globalStyle(`${sketchyScope} ${bootstrapScope} ${btnWarning}`, {
	color: '#000',
	backgroundColor: '#ffc107',
	borderColor: '#ffc107',
})

globalStyle(`${sketchyScope} ${bootstrapScope} ${btnInfo}`, {
	color: '#000',
	backgroundColor: '#0dcaf0',
	borderColor: '#0dcaf0',
})

globalStyle(`${sketchyScope} ${bootstrapScope} ${btnLight}`, {
	color: '#000',
	backgroundColor: '#f8f9fa',
	borderColor: '#f8f9fa',
})

globalStyle(`${sketchyScope} ${bootstrapScope} ${btnDark}`, {
	color: '#fff',
	backgroundColor: '#212529',
	borderColor: '#212529',
})
