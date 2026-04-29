import { globalStyle } from '@vanilla-extract/css'
import {
	btn,
	btnActiveHook,
	btnCheck,
	btnDanger,
	btnDark,
	btnInfo,
	btnLg,
	btnLight,
	btnLink,
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
import { bootstrapScope } from '../../scope.css'

// Base button styles applied to every element that carries BOTH the `bootstrapScope`
// theme class AND the `btn` contract class (element-owned scope — compound selector).
globalStyle(`${bootstrapScope}${btn}`, {
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

// Disabled state — opacity only; colors remain from variant rules
globalStyle(`${bootstrapScope}${btn}:disabled`, {
	pointerEvents: 'none',
	opacity: '0.65',
})

// Size modifiers — override padding, font-size, border-radius from base btn
globalStyle(`${bootstrapScope}${btnLg}`, {
	padding: '0.5rem 1rem',
	fontSize: '1.25rem',
	borderRadius: '0.5rem',
})

globalStyle(`${bootstrapScope}${btnSm}`, {
	padding: '0.25rem 0.5rem',
	fontSize: '0.875rem',
	borderRadius: '0.25rem',
})

// Hidden checkbox for toggle-button pattern
globalStyle(`${bootstrapScope}${btnCheck}`, {
	position: 'absolute',
	clip: 'rect(0, 0, 0, 0)',
	pointerEvents: 'none',
})

// Toggle disabled: disabled checkbox makes the following label look disabled
globalStyle(`${bootstrapScope}${btnCheck}:disabled + ${bootstrapScope}${btn}`, {
	pointerEvents: 'none',
	opacity: '0.65',
})

// ── Solid colour variants ─────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${btnPrimary}`, {
	color: '#fff',
	backgroundColor: '#0d6efd',
	borderColor: '#0d6efd',
})

globalStyle(`${bootstrapScope}${btnSecondary}`, {
	color: '#fff',
	backgroundColor: '#6c757d',
	borderColor: '#6c757d',
})

globalStyle(`${bootstrapScope}${btnSuccess}`, {
	color: '#fff',
	backgroundColor: '#198754',
	borderColor: '#198754',
})

globalStyle(`${bootstrapScope}${btnDanger}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
	borderColor: '#dc3545',
})

globalStyle(`${bootstrapScope}${btnWarning}`, {
	color: '#000',
	backgroundColor: '#ffc107',
	borderColor: '#ffc107',
})

globalStyle(`${bootstrapScope}${btnInfo}`, {
	color: '#000',
	backgroundColor: '#0dcaf0',
	borderColor: '#0dcaf0',
})

globalStyle(`${bootstrapScope}${btnLight}`, {
	color: '#000',
	backgroundColor: '#f8f9fa',
	borderColor: '#f8f9fa',
})

globalStyle(`${bootstrapScope}${btnDark}`, {
	color: '#fff',
	backgroundColor: '#212529',
	borderColor: '#212529',
})

globalStyle(`${bootstrapScope}${btnLink}`, {
	color: '#0d6efd',
	fontWeight: 400,
	textDecoration: 'underline',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
})

globalStyle(`${bootstrapScope}${btnLink}:disabled`, {
	color: '#6c757d',
})

// ── Active state via btnActiveHook (check-active / aria-pressed pattern) ─────

globalStyle(`${bootstrapScope}${btnPrimary}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#0a58ca',
	borderColor: '#0a53be',
})

globalStyle(`${bootstrapScope}${btnSecondary}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#565e64',
	borderColor: '#51585e',
})

globalStyle(`${bootstrapScope}${btnSuccess}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#146c43',
	borderColor: '#13653f',
})

globalStyle(`${bootstrapScope}${btnDanger}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#b02a37',
	borderColor: '#a52834',
})

globalStyle(`${bootstrapScope}${btnWarning}${btnActiveHook}`, {
	color: '#000',
	backgroundColor: '#ffca2c',
	borderColor: '#ffc720',
})

globalStyle(`${bootstrapScope}${btnInfo}${btnActiveHook}`, {
	color: '#000',
	backgroundColor: '#31d2f2',
	borderColor: '#25cff2',
})

globalStyle(`${bootstrapScope}${btnLight}${btnActiveHook}`, {
	color: '#000',
	backgroundColor: '#d3d4d5',
	borderColor: '#c6c7c8',
})

globalStyle(`${bootstrapScope}${btnDark}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#1c1f23',
	borderColor: '#161b1f',
})

// ── Toggle-active: checked checkbox makes the following label look active ─────

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnPrimary}`, {
	color: '#fff',
	backgroundColor: '#0a58ca',
	borderColor: '#0a53be',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnSecondary}`, {
	color: '#fff',
	backgroundColor: '#565e64',
	borderColor: '#51585e',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnSuccess}`, {
	color: '#fff',
	backgroundColor: '#146c43',
	borderColor: '#13653f',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnDanger}`, {
	color: '#fff',
	backgroundColor: '#b02a37',
	borderColor: '#a52834',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnWarning}`, {
	color: '#000',
	backgroundColor: '#ffca2c',
	borderColor: '#ffc720',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnInfo}`, {
	color: '#000',
	backgroundColor: '#31d2f2',
	borderColor: '#25cff2',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnLight}`, {
	color: '#000',
	backgroundColor: '#d3d4d5',
	borderColor: '#c6c7c8',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnDark}`, {
	color: '#fff',
	backgroundColor: '#1c1f23',
	borderColor: '#161b1f',
})

// ── Outline variants ──────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${btnOutlinePrimary}`, {
	color: '#0d6efd',
	borderColor: '#0d6efd',
	backgroundColor: 'transparent',
})

globalStyle(`${bootstrapScope}${btnOutlinePrimary}:hover`, {
	color: '#fff',
	backgroundColor: '#0d6efd',
	borderColor: '#0d6efd',
})

globalStyle(`${bootstrapScope}${btnOutlinePrimary}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#0d6efd',
	borderColor: '#0d6efd',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnOutlinePrimary}`, {
	color: '#fff',
	backgroundColor: '#0d6efd',
	borderColor: '#0d6efd',
})

globalStyle(`${bootstrapScope}${btnOutlineSecondary}`, {
	color: '#6c757d',
	borderColor: '#6c757d',
	backgroundColor: 'transparent',
})

globalStyle(`${bootstrapScope}${btnOutlineSecondary}:hover`, {
	color: '#fff',
	backgroundColor: '#6c757d',
	borderColor: '#6c757d',
})

globalStyle(`${bootstrapScope}${btnOutlineSecondary}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#6c757d',
	borderColor: '#6c757d',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnOutlineSecondary}`, {
	color: '#fff',
	backgroundColor: '#6c757d',
	borderColor: '#6c757d',
})

globalStyle(`${bootstrapScope}${btnOutlineSuccess}`, {
	color: '#198754',
	borderColor: '#198754',
	backgroundColor: 'transparent',
})

globalStyle(`${bootstrapScope}${btnOutlineSuccess}:hover`, {
	color: '#fff',
	backgroundColor: '#198754',
	borderColor: '#198754',
})

globalStyle(`${bootstrapScope}${btnOutlineSuccess}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#198754',
	borderColor: '#198754',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnOutlineSuccess}`, {
	color: '#fff',
	backgroundColor: '#198754',
	borderColor: '#198754',
})

globalStyle(`${bootstrapScope}${btnOutlineDanger}`, {
	color: '#dc3545',
	borderColor: '#dc3545',
	backgroundColor: 'transparent',
})

globalStyle(`${bootstrapScope}${btnOutlineDanger}:hover`, {
	color: '#fff',
	backgroundColor: '#dc3545',
	borderColor: '#dc3545',
})

globalStyle(`${bootstrapScope}${btnOutlineDanger}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
	borderColor: '#dc3545',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnOutlineDanger}`, {
	color: '#fff',
	backgroundColor: '#dc3545',
	borderColor: '#dc3545',
})

globalStyle(`${bootstrapScope}${btnOutlineWarning}`, {
	color: '#ffc107',
	borderColor: '#ffc107',
	backgroundColor: 'transparent',
})

globalStyle(`${bootstrapScope}${btnOutlineWarning}:hover`, {
	color: '#212529',
	backgroundColor: '#ffc107',
	borderColor: '#ffc107',
})

globalStyle(`${bootstrapScope}${btnOutlineWarning}${btnActiveHook}`, {
	color: '#212529',
	backgroundColor: '#ffc107',
	borderColor: '#ffc107',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnOutlineWarning}`, {
	color: '#212529',
	backgroundColor: '#ffc107',
	borderColor: '#ffc107',
})

globalStyle(`${bootstrapScope}${btnOutlineInfo}`, {
	color: '#0dcaf0',
	borderColor: '#0dcaf0',
	backgroundColor: 'transparent',
})

globalStyle(`${bootstrapScope}${btnOutlineInfo}:hover`, {
	color: '#212529',
	backgroundColor: '#0dcaf0',
	borderColor: '#0dcaf0',
})

globalStyle(`${bootstrapScope}${btnOutlineInfo}${btnActiveHook}`, {
	color: '#212529',
	backgroundColor: '#0dcaf0',
	borderColor: '#0dcaf0',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnOutlineInfo}`, {
	color: '#212529',
	backgroundColor: '#0dcaf0',
	borderColor: '#0dcaf0',
})

globalStyle(`${bootstrapScope}${btnOutlineLight}`, {
	color: '#f8f9fa',
	borderColor: '#f8f9fa',
	backgroundColor: 'transparent',
})

globalStyle(`${bootstrapScope}${btnOutlineLight}:hover`, {
	color: '#212529',
	backgroundColor: '#f8f9fa',
	borderColor: '#f8f9fa',
})

globalStyle(`${bootstrapScope}${btnOutlineLight}${btnActiveHook}`, {
	color: '#212529',
	backgroundColor: '#f8f9fa',
	borderColor: '#f8f9fa',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnOutlineLight}`, {
	color: '#212529',
	backgroundColor: '#f8f9fa',
	borderColor: '#f8f9fa',
})

globalStyle(`${bootstrapScope}${btnOutlineDark}`, {
	color: '#212529',
	borderColor: '#212529',
	backgroundColor: 'transparent',
})

globalStyle(`${bootstrapScope}${btnOutlineDark}:hover`, {
	color: '#fff',
	backgroundColor: '#212529',
	borderColor: '#212529',
})

globalStyle(`${bootstrapScope}${btnOutlineDark}${btnActiveHook}`, {
	color: '#fff',
	backgroundColor: '#212529',
	borderColor: '#212529',
})

globalStyle(`${bootstrapScope}${btnCheck}:checked + ${bootstrapScope}${btnOutlineDark}`, {
	color: '#fff',
	backgroundColor: '#212529',
	borderColor: '#212529',
})
