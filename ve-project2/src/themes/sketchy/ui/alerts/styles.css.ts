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
import { sketchyScope } from '../../scope.css'

// Sketchy hand-drawn border-radius for alerts
const sketchyBorderRadius = '255px 25px 225px 25px / 25px 225px 25px 255px'

// ── Base alert ────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${alert}`, {
	position: 'relative',
	padding: '1rem',
	marginBottom: '1rem',
	border: '1px solid transparent',
	borderRadius: sketchyBorderRadius,
})

// ── Colour variants ───────────────────────────────────────────────────────────
// Colors derived from Sketchy Bootswatch theme CSS variables:
//   --bs-*-text-emphasis / --bs-*-bg-subtle / --bs-*-border-subtle (light mode)

globalStyle(`${sketchyScope}${alertPrimary}`, {
	color: '#141414',
	backgroundColor: '#d6d6d6',
	borderColor: '#adadad',
})

globalStyle(`${sketchyScope}${alertSecondary}`, {
	color: '#222222',
	backgroundColor: '#dddddd',
	borderColor: '#bbbbbb',
})

globalStyle(`${sketchyScope}${alertSuccess}`, {
	color: '#10431c',
	backgroundColor: '#d4edda',
	borderColor: '#a9dcb5',
})

globalStyle(`${sketchyScope}${alertDanger}`, {
	color: '#58151c',
	backgroundColor: '#f8d7da',
	borderColor: '#f1aeb5',
})

globalStyle(`${sketchyScope}${alertWarning}`, {
	color: '#664d03',
	backgroundColor: '#fff3cd',
	borderColor: '#ffe69c',
})

globalStyle(`${sketchyScope}${alertInfo}`, {
	color: '#09414a',
	backgroundColor: '#d1ecf1',
	borderColor: '#a2dae3',
})

globalStyle(`${sketchyScope}${alertLight}`, {
	color: '#555555',
	backgroundColor: '#fcfcfd',
	borderColor: '#f7f7f9',
})

globalStyle(`${sketchyScope}${alertDark}`, {
	color: '#555555',
	backgroundColor: '#cccccc',
	borderColor: '#aaaaaa',
})

// ── Dismissible layout ────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${alertDismissible}`, {
	paddingRight: '3rem',
})

// ── Inner element hooks ───────────────────────────────────────────────────────

// Links inside alerts: bold, inherit text colour
globalStyle(`${sketchyScope}${alert} ${alertLink}`, {
	fontWeight: 700,
	color: 'inherit',
})

// Headings inside alerts: inherit text colour
globalStyle(`${sketchyScope}${alert} ${alertHeading}`, {
	color: 'inherit',
})

// Horizontal rule inside alert
globalStyle(`${sketchyScope}${alert} hr`, {
	color: 'inherit',
	border: 0,
	borderTop: '1px solid',
	opacity: 0.25,
	margin: '1rem 0',
})

// Close button: Sketchy uses a text "X" character instead of the SVG background image
globalStyle(`${sketchyScope}${alertBtnClose}`, {
	backgroundColor: 'transparent',
	border: 0,
	cursor: 'pointer',
	position: 'absolute',
	top: 0,
	right: 0,
	zIndex: 2,
	padding: '1.25rem 1rem',
	width: '1em',
	height: '1em',
	boxSizing: 'content-box',
})

globalStyle(`${sketchyScope}${alertBtnClose}::before`, {
	content: '"X"',
	color: 'inherit',
	position: 'absolute',
	top: '0.8rem',
	right: '1rem',
})
