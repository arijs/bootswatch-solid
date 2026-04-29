import { globalStyle } from '@vanilla-extract/css'
import {
	btn,
	btnActiveHook,
	btnCheck,
	btnDanger,
	btnDark,
	btnInfo,
	btnLight,
	btnLink,
	btnLg,
	btnOutlineDanger,
	btnOutlineDark,
	btnOutlineInfo,
	btnOutlineLight,
	btnOutlinePrimary,
	btnOutlineSecondary,
	btnOutlineSuccess,
	btnOutlineWarning,
	btnPrimary,
	btnSecondary,
	btnSm,
	btnSuccess,
	btnWarning,
} from '../../../../theme-contract/ui/buttons/contract.css'
import { sketchyScope } from '../../scope.css'

// Sketchy theme uses an irregular border-radius to mimic a hand-drawn look.
const sketchyBorderRadius = '255px 15px 225px 15px / 15px 225px 15px 255px'
const sketchyBorderRadiusLg = '255px 25px 225px 25px / 25px 225px 25px 255px'
const sketchyBorderRadiusSm = '155px 10px 135px 10px / 10px 135px 10px 155px'

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

// Disabled state — opacity only
globalStyle(`${sketchyScope}${btn}:disabled`, {
	pointerEvents: 'none',
	opacity: '0.65',
})

// Size modifiers
globalStyle(`${sketchyScope}${btnLg}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: sketchyBorderRadiusLg,
})

globalStyle(`${sketchyScope}${btnSm}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: sketchyBorderRadiusSm,
})

// Hidden checkbox for toggle-button pattern
globalStyle(`${sketchyScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

// Toggle disabled: disabled checkbox makes the following label look disabled
globalStyle(`${sketchyScope}${btnCheck}:disabled + ${sketchyScope}${btn}`, {
	pointerEvents: 'none',
	opacity: '0.65',
})

// ── Solid colour variants ─────────────────────────────────────────────────────

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

globalStyle(`${sketchyScope}${btnLink}`, {
	color: '#0d6efd',
	fontWeight: 400,
	textDecoration: 'underline',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
})

globalStyle(`${sketchyScope}${btnLink}:disabled`, {
	color: '#6c757d',
})

// ── Active state via btnActiveHook ────────────────────────────────────────────

globalStyle(`${sketchyScope}${btnPrimary}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#0a58ca',
	borderColor: '#0a53be',
})

globalStyle(`${sketchyScope}${btnSecondary}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#565e64',
	borderColor: '#51585e',
})

globalStyle(`${sketchyScope}${btnSuccess}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#146c43',
	borderColor: '#13653f',
})

globalStyle(`${sketchyScope}${btnDanger}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#b02a37',
	borderColor: '#a52834',
})

globalStyle(`${sketchyScope}${btnWarning}${btnActiveHook}`, {
	color: '#000',
	backgroundColor: '#ffca2c',
	borderColor: '#ffc720',
})

globalStyle(`${sketchyScope}${btnInfo}${btnActiveHook}`, {
	color: '#000',
	backgroundColor: '#31d2f2',
	borderColor: '#25cff2',
})

globalStyle(`${sketchyScope}${btnLight}${btnActiveHook}`, {
	color: '#000',
	backgroundColor: '#d3d4d5',
	borderColor: '#c6c7c8',
})

globalStyle(`${sketchyScope}${btnDark}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#1c1f23',
	borderColor: '#161b1f',
})

// ── Toggle-active: checked checkbox makes the following label look active ─────

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnPrimary}`, {
	color: '#fff',
	backgroundColor: '#0a58ca',
	borderColor: '#0a53be',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnSecondary}`, {
	color: '#fff',
	backgroundColor: '#565e64',
	borderColor: '#51585e',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnSuccess}`, {
	color: '#fff',
	backgroundColor: '#146c43',
	borderColor: '#13653f',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnDanger}`, {
	color: '#fff',
	backgroundColor: '#b02a37',
	borderColor: '#a52834',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnWarning}`, {
	color: '#000',
	backgroundColor: '#ffca2c',
	borderColor: '#ffc720',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnInfo}`, {
	color: '#000',
	backgroundColor: '#31d2f2',
	borderColor: '#25cff2',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnLight}`, {
	color: '#000',
	backgroundColor: '#d3d4d5',
	borderColor: '#c6c7c8',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnDark}`, {
	color: '#fff',
	backgroundColor: '#1c1f23',
	borderColor: '#161b1f',
})

// ── Outline variants ──────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${btnOutlinePrimary}`, {
	color: '#0d6efd',
	borderColor: '#0d6efd',
	backgroundColor: 'transparent',
})

globalStyle(`${sketchyScope}${btnOutlinePrimary}:hover`, {
	color: '#fff',
	backgroundColor: '#0d6efd',
	borderColor: '#0d6efd',
})

globalStyle(`${sketchyScope}${btnOutlinePrimary}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#0d6efd',
	borderColor: '#0d6efd',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnOutlinePrimary}`, {
	color: '#fff',
	backgroundColor: '#0d6efd',
	borderColor: '#0d6efd',
})

globalStyle(`${sketchyScope}${btnOutlineSecondary}`, {
	color: '#6c757d',
	borderColor: '#6c757d',
	backgroundColor: 'transparent',
})

globalStyle(`${sketchyScope}${btnOutlineSecondary}:hover`, {
	color: '#fff',
	backgroundColor: '#6c757d',
	borderColor: '#6c757d',
})

globalStyle(`${sketchyScope}${btnOutlineSecondary}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#6c757d',
	borderColor: '#6c757d',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnOutlineSecondary}`, {
	color: '#fff',
	backgroundColor: '#6c757d',
	borderColor: '#6c757d',
})

globalStyle(`${sketchyScope}${btnOutlineSuccess}`, {
	color: '#198754',
	borderColor: '#198754',
	backgroundColor: 'transparent',
})

globalStyle(`${sketchyScope}${btnOutlineSuccess}:hover`, {
	color: '#fff',
	backgroundColor: '#198754',
	borderColor: '#198754',
})

globalStyle(`${sketchyScope}${btnOutlineSuccess}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#198754',
	borderColor: '#198754',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnOutlineSuccess}`, {
	color: '#fff',
	backgroundColor: '#198754',
	borderColor: '#198754',
})

globalStyle(`${sketchyScope}${btnOutlineDanger}`, {
	color: '#dc3545',
	borderColor: '#dc3545',
	backgroundColor: 'transparent',
})

globalStyle(`${sketchyScope}${btnOutlineDanger}:hover`, {
	color: '#fff',
	backgroundColor: '#dc3545',
	borderColor: '#dc3545',
})

globalStyle(`${sketchyScope}${btnOutlineDanger}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
	borderColor: '#dc3545',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnOutlineDanger}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
	borderColor: '#dc3545',
})

globalStyle(`${sketchyScope}${btnOutlineWarning}`, {
	color: '#ffc107',
	borderColor: '#ffc107',
	backgroundColor: 'transparent',
})

globalStyle(`${sketchyScope}${btnOutlineWarning}:hover`, {
	color: '#212529',
	backgroundColor: '#ffc107',
	borderColor: '#ffc107',
})

globalStyle(`${sketchyScope}${btnOutlineWarning}${btnActiveHook}`, {
	color: '#212529',
	backgroundColor: '#ffc107',
	borderColor: '#ffc107',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnOutlineWarning}`, {
	color: '#212529',
	backgroundColor: '#ffc107',
	borderColor: '#ffc107',
})

globalStyle(`${sketchyScope}${btnOutlineInfo}`, {
	color: '#0dcaf0',
	borderColor: '#0dcaf0',
	backgroundColor: 'transparent',
})

globalStyle(`${sketchyScope}${btnOutlineInfo}:hover`, {
	color: '#212529',
	backgroundColor: '#0dcaf0',
	borderColor: '#0dcaf0',
})

globalStyle(`${sketchyScope}${btnOutlineInfo}${btnActiveHook}`, {
	color: '#212529',
	backgroundColor: '#0dcaf0',
	borderColor: '#0dcaf0',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnOutlineInfo}`, {
	color: '#212529',
	backgroundColor: '#0dcaf0',
	borderColor: '#0dcaf0',
})

globalStyle(`${sketchyScope}${btnOutlineLight}`, {
	color: '#f8f9fa',
	borderColor: '#f8f9fa',
	backgroundColor: 'transparent',
})

globalStyle(`${sketchyScope}${btnOutlineLight}:hover`, {
	color: '#212529',
	backgroundColor: '#f8f9fa',
	borderColor: '#f8f9fa',
})

globalStyle(`${sketchyScope}${btnOutlineLight}${btnActiveHook}`, {
	color: '#212529',
	backgroundColor: '#f8f9fa',
	borderColor: '#f8f9fa',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnOutlineLight}`, {
	color: '#212529',
	backgroundColor: '#f8f9fa',
	borderColor: '#f8f9fa',
})

globalStyle(`${sketchyScope}${btnOutlineDark}`, {
	color: '#212529',
	borderColor: '#212529',
	backgroundColor: 'transparent',
})

globalStyle(`${sketchyScope}${btnOutlineDark}:hover`, {
	color: '#fff',
	backgroundColor: '#212529',
	borderColor: '#212529',
})

globalStyle(`${sketchyScope}${btnOutlineDark}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#212529',
	borderColor: '#212529',
})

globalStyle(`${sketchyScope}${btnCheck}:checked + ${sketchyScope}${btnOutlineDark}`, {
	color: '#fff',
	backgroundColor: '#212529',
	borderColor: '#212529',
})

