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
import { bootstrapScopeL } from '../../scope.layer.css'

// Bootstrap button styles placed in @layer bootstrap.
// Layer order (bootstrap < sketchy < nestedBootstrap) is established by import order
// in the consuming component: this file first, sketchy second, nested-bootstrap last.

globalStyle(`${bootstrapScopeL} ${btn}`, {
	'@layer': {
		bootstrap: {
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

globalStyle(`${bootstrapScopeL} ${btnPrimary}`, {
	'@layer': {
		bootstrap: { color: '#fff', backgroundColor: '#0d6efd', borderColor: '#0d6efd' },
	},
})

globalStyle(`${bootstrapScopeL} ${btnSecondary}`, {
	'@layer': {
		bootstrap: { color: '#fff', backgroundColor: '#6c757d', borderColor: '#6c757d' },
	},
})

globalStyle(`${bootstrapScopeL} ${btnSuccess}`, {
	'@layer': {
		bootstrap: { color: '#fff', backgroundColor: '#198754', borderColor: '#198754' },
	},
})

globalStyle(`${bootstrapScopeL} ${btnDanger}`, {
	'@layer': {
		bootstrap: { color: '#fff', backgroundColor: '#dc3545', borderColor: '#dc3545' },
	},
})

globalStyle(`${bootstrapScopeL} ${btnWarning}`, {
	'@layer': {
		bootstrap: { color: '#000', backgroundColor: '#ffc107', borderColor: '#ffc107' },
	},
})

globalStyle(`${bootstrapScopeL} ${btnInfo}`, {
	'@layer': {
		bootstrap: { color: '#000', backgroundColor: '#0dcaf0', borderColor: '#0dcaf0' },
	},
})

globalStyle(`${bootstrapScopeL} ${btnLight}`, {
	'@layer': {
		bootstrap: { color: '#000', backgroundColor: '#f8f9fa', borderColor: '#f8f9fa' },
	},
})

globalStyle(`${bootstrapScopeL} ${btnDark}`, {
	'@layer': {
		bootstrap: { color: '#fff', backgroundColor: '#212529', borderColor: '#212529' },
	},
})
