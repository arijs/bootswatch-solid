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
import { sketchyScopeL } from '../../scope.layer.css'

// Sketchy button styles placed in @layer sketchy.
// Because the layer order declared by import sequence is bootstrap < sketchy,
// @layer sketchy wins over @layer bootstrap for any element that matches both
// .bootstrapScopeL .btn and .sketchyScopeL .btn (e.g. the inner theme in a
// bootstrapScopeL > sketchyScopeL nesting).

const sketchyBorderRadius = '255px 15px 225px 15px / 15px 225px 15px 255px'

globalStyle(`${sketchyScopeL} ${btn}`, {
	'@layer': {
		sketchy: {
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
			border: '2px solid #212529',
			borderRadius: sketchyBorderRadius,
			transition:
				'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
		},
	},
})

globalStyle(`${sketchyScopeL} ${btnPrimary}`, {
	'@layer': {
		sketchy: { color: '#fff', backgroundColor: '#0d6efd', borderColor: '#0d6efd' },
	},
})

globalStyle(`${sketchyScopeL} ${btnSecondary}`, {
	'@layer': {
		sketchy: { color: '#fff', backgroundColor: '#6c757d', borderColor: '#6c757d' },
	},
})

globalStyle(`${sketchyScopeL} ${btnSuccess}`, {
	'@layer': {
		sketchy: { color: '#fff', backgroundColor: '#198754', borderColor: '#198754' },
	},
})

globalStyle(`${sketchyScopeL} ${btnDanger}`, {
	'@layer': {
		sketchy: { color: '#fff', backgroundColor: '#dc3545', borderColor: '#dc3545' },
	},
})

globalStyle(`${sketchyScopeL} ${btnWarning}`, {
	'@layer': {
		sketchy: { color: '#000', backgroundColor: '#ffc107', borderColor: '#ffc107' },
	},
})

globalStyle(`${sketchyScopeL} ${btnInfo}`, {
	'@layer': {
		sketchy: { color: '#000', backgroundColor: '#0dcaf0', borderColor: '#0dcaf0' },
	},
})

globalStyle(`${sketchyScopeL} ${btnLight}`, {
	'@layer': {
		sketchy: { color: '#000', backgroundColor: '#f8f9fa', borderColor: '#212529' },
	},
})

globalStyle(`${sketchyScopeL} ${btnDark}`, {
	'@layer': {
		sketchy: { color: '#fff', backgroundColor: '#212529', borderColor: '#212529' },
	},
})
