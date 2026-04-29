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
import { sketchyScopeL } from '../../../sketchy/scope.layer.css'
import { bootstrapScopeL } from '../../scope.layer.css'

// Nested-bootstrap override: Bootstrap scope nested INSIDE Sketchy scope.
//
// Without @layer, `.sketchyScopeL .btn` (sketchy, defined last) wins even when
// bootstrapScopeL is the inner/closer scope — the "reverse nesting" problem.
//
// The fix: place the explicit two-scope selector in @layer nestedBootstrap, which
// is declared AFTER @layer sketchy (by being imported last in the consuming file).
// Layer order established by import sequence:
//   @layer bootstrap  (styles-layer.css.ts — first import)
//   @layer sketchy    (styles-layer.css.ts — second import)
//   @layer nestedBootstrap  (this file — third import, highest priority)
//
// Result:
//   .sketchyScopeL .bootstrapScopeL .btn  →  matches nestedBootstrap layer  →  bootstrap wins ✓
//   .bootstrapScopeL .sketchyScopeL .btn  →  matches only sketchy layer      →  sketchy wins ✓

globalStyle(`${sketchyScopeL} ${bootstrapScopeL} ${btn}`, {
	'@layer': {
		nestedBootstrap: {
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
		},
	},
})

globalStyle(`${sketchyScopeL} ${bootstrapScopeL} ${btnPrimary}`, {
	'@layer': {
		nestedBootstrap: { color: '#fff', backgroundColor: '#0d6efd', borderColor: '#0d6efd' },
	},
})

globalStyle(`${sketchyScopeL} ${bootstrapScopeL} ${btnSecondary}`, {
	'@layer': {
		nestedBootstrap: { color: '#fff', backgroundColor: '#6c757d', borderColor: '#6c757d' },
	},
})

globalStyle(`${sketchyScopeL} ${bootstrapScopeL} ${btnSuccess}`, {
	'@layer': {
		nestedBootstrap: { color: '#fff', backgroundColor: '#198754', borderColor: '#198754' },
	},
})

globalStyle(`${sketchyScopeL} ${bootstrapScopeL} ${btnDanger}`, {
	'@layer': {
		nestedBootstrap: { color: '#fff', backgroundColor: '#dc3545', borderColor: '#dc3545' },
	},
})

globalStyle(`${sketchyScopeL} ${bootstrapScopeL} ${btnWarning}`, {
	'@layer': {
		nestedBootstrap: { color: '#000', backgroundColor: '#ffc107', borderColor: '#ffc107' },
	},
})

globalStyle(`${sketchyScopeL} ${bootstrapScopeL} ${btnInfo}`, {
	'@layer': {
		nestedBootstrap: { color: '#000', backgroundColor: '#0dcaf0', borderColor: '#0dcaf0' },
	},
})

globalStyle(`${sketchyScopeL} ${bootstrapScopeL} ${btnLight}`, {
	'@layer': {
		nestedBootstrap: { color: '#000', backgroundColor: '#f8f9fa', borderColor: '#f8f9fa' },
	},
})

globalStyle(`${sketchyScopeL} ${bootstrapScopeL} ${btnDark}`, {
	'@layer': {
		nestedBootstrap: { color: '#fff', backgroundColor: '#212529', borderColor: '#212529' },
	},
})
