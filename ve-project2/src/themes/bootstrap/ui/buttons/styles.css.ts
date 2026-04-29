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
import { bootstrapScope } from '../../scope.css'

// Base button styles applied to every element carrying the `btn` contract class
// that lives inside a `bootstrapScope` container.
globalStyle(`${bootstrapScope} ${btn}`, {
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

globalStyle(`${bootstrapScope} ${btnPrimary}`, {
	color: '#fff',
	backgroundColor: '#0d6efd',
	borderColor: '#0d6efd',
})

globalStyle(`${bootstrapScope} ${btnSecondary}`, {
	color: '#fff',
	backgroundColor: '#6c757d',
	borderColor: '#6c757d',
})

globalStyle(`${bootstrapScope} ${btnSuccess}`, {
	color: '#fff',
	backgroundColor: '#198754',
	borderColor: '#198754',
})

globalStyle(`${bootstrapScope} ${btnDanger}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
	borderColor: '#dc3545',
})

globalStyle(`${bootstrapScope} ${btnWarning}`, {
	color: '#000',
	backgroundColor: '#ffc107',
	borderColor: '#ffc107',
})

globalStyle(`${bootstrapScope} ${btnInfo}`, {
	color: '#000',
	backgroundColor: '#0dcaf0',
	borderColor: '#0dcaf0',
})

globalStyle(`${bootstrapScope} ${btnLight}`, {
	color: '#000',
	backgroundColor: '#f8f9fa',
	borderColor: '#f8f9fa',
})

globalStyle(`${bootstrapScope} ${btnDark}`, {
	color: '#fff',
	backgroundColor: '#212529',
	borderColor: '#212529',
})
