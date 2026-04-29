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
import { sketchyScope } from '../../scope.css'

// Sketchy theme uses an irregular border-radius to mimic a hand-drawn look.
const sketchyBorderRadius = '255px 15px 225px 15px / 15px 225px 15px 255px'

// Base button styles for the Sketchy theme.
// Same layout as Bootstrap but with 2 px solid border and organic border-radius.
// Font inherits 'Neucha', cursive from the scope class on the same element.
globalStyle(`${sketchyScope}${btn}`, {
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
})

globalStyle(`${sketchyScope}${btnPrimary}`, {
	color: '#fff',
	backgroundColor: '#0d6efd',
	borderColor: '#0d6efd',
})

globalStyle(`${sketchyScope}${btnSecondary}`, {
	color: '#fff',
	backgroundColor: '#6c757d',
	borderColor: '#6c757d',
})

globalStyle(`${sketchyScope}${btnSuccess}`, {
	color: '#fff',
	backgroundColor: '#198754',
	borderColor: '#198754',
})

globalStyle(`${sketchyScope}${btnDanger}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
	borderColor: '#dc3545',
})

globalStyle(`${sketchyScope}${btnWarning}`, {
	color: '#000',
	backgroundColor: '#ffc107',
	borderColor: '#ffc107',
})

globalStyle(`${sketchyScope}${btnInfo}`, {
	color: '#000',
	backgroundColor: '#0dcaf0',
	borderColor: '#0dcaf0',
})

globalStyle(`${sketchyScope}${btnLight}`, {
	color: '#000',
	backgroundColor: '#f8f9fa',
	borderColor: '#212529',
})

globalStyle(`${sketchyScope}${btnDark}`, {
	color: '#fff',
	backgroundColor: '#212529',
	borderColor: '#212529',
})
