import { globalStyle } from '@vanilla-extract/css'
import {
	alert,
	alertBtnClose,
	alertDanger,
	alertDark,
	alertDismissible,
	alertHeading,
	alertInfo,
	alertLight,
	alertLink,
	alertPrimary,
	alertSecondary,
	alertSuccess,
	alertWarning,
} from '../../../../theme-contract/ui/alerts/contract.css'
import { bootstrapScope } from '../../scope.css'

// Bootstrap default theme SVG × icon for the close button
const btnCloseSvg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e")`

// ── Base alert ────────────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${alert}`, {
	position: 'relative',
	padding: '1rem',
	marginBottom: '1rem',
	border: '1px solid transparent',
	borderRadius: '0.375rem',
})

// ── Colour variants ───────────────────────────────────────────────────────────
// Colors derived from Bootstrap 5.3 defaults:
//   text-emphasis  = shade(base-color, 60%)
//   bg-subtle      = tint(base-color, 80%)
//   border-subtle  = tint(base-color, 60%)

globalStyle(`${bootstrapScope}${alertPrimary}`, {
	color: '#052c65',
	backgroundColor: '#cfe2ff',
	borderColor: '#9ec5fe',
})

globalStyle(`${bootstrapScope}${alertSecondary}`, {
	color: '#2b2d2f',
	backgroundColor: '#e2e3e5',
	borderColor: '#c4c8cb',
})

globalStyle(`${bootstrapScope}${alertSuccess}`, {
	color: '#0a3622',
	backgroundColor: '#d1e7dd',
	borderColor: '#a3cfbb',
})

globalStyle(`${bootstrapScope}${alertDanger}`, {
	color: '#58151c',
	backgroundColor: '#f8d7da',
	borderColor: '#f1aeb5',
})

globalStyle(`${bootstrapScope}${alertWarning}`, {
	color: '#664d03',
	backgroundColor: '#fff3cd',
	borderColor: '#ffe69c',
})

globalStyle(`${bootstrapScope}${alertInfo}`, {
	color: '#055160',
	backgroundColor: '#cff4fc',
	borderColor: '#9eeaf9',
})

globalStyle(`${bootstrapScope}${alertLight}`, {
	color: '#495057',
	backgroundColor: '#fcfcfd',
	borderColor: '#e9ecef',
})

globalStyle(`${bootstrapScope}${alertDark}`, {
	color: '#495057',
	backgroundColor: '#ced4da',
	borderColor: '#adb5bd',
})

// ── Dismissible layout ────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${alertDismissible}`, {
	paddingRight: '3rem',
})

// ── Inner element hooks ───────────────────────────────────────────────────────

// Links inside alerts: bold, inherit text colour from the variant
globalStyle(`${bootstrapScope}${alert} ${alertLink}`, {
	fontWeight: 700,
	color: 'inherit',
})

// Headings inside alerts: inherit text colour from the variant
globalStyle(`${bootstrapScope}${alert} ${alertHeading}`, {
	color: 'inherit',
})

// Horizontal rule inside alert
globalStyle(`${bootstrapScope}${alert} hr`, {
	color: 'inherit',
	border: 0,
	borderTop: '1px solid',
	opacity: 0.25,
	margin: '1rem 0',
})

// Close button: positioned in the top-right corner of a dismissible alert
globalStyle(`${bootstrapScope}${alertBtnClose}`, {
	boxSizing: 'content-box',
	width: '1em',
	height: '1em',
	padding: '1.25rem 1rem',
	color: '#000',
	backgroundColor: 'transparent',
	backgroundImage: btnCloseSvg,
	backgroundPosition: 'center',
	backgroundSize: '1em auto',
	backgroundRepeat: 'no-repeat',
	border: 0,
	borderRadius: '0.375rem',
	opacity: 0.5,
	cursor: 'pointer',
	position: 'absolute',
	top: 0,
	right: 0,
	zIndex: 2,
})
