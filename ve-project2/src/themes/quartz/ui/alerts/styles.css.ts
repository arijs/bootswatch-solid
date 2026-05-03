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
import {
	varBsAlertBg,
	varBsAlertBorder,
	varBsAlertBorderColor,
	varBsAlertBorderRadius,
	varBsAlertColor,
	varBsAlertLinkColor,
	varBsAlertMarginBottom,
	varBsAlertPaddingX,
	varBsAlertPaddingY,
} from '../../../../theme-contract/ui/alerts/_vars.css'
import {
	varBsBorderRadius,
	varBsBorderWidth,
	varBsDanger,
	varBsDark,
	varBsInfo,
	varBsLight,
	varBsPrimary,
	varBsSecondary,
	varBsSuccess,
	varBsWarning,
} from '../../../../theme-contract/_vars.css'
import { quartzScope } from '../../scope.css'

// Quartz theme SVG × icon for the close button (white fill)
const btnCloseSvg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e")`

// Glass mixin
const glassMixin = {
	border: 'none',
	boxShadow:
		'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage:
		'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	backdropFilter: 'blur(5px)',
} as const

// ── Base alert ────────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${alert}`, {
	vars: {
		[varBsAlertBg]: 'transparent',
		[varBsAlertPaddingX]: '2rem',
		[varBsAlertPaddingY]: '2rem',
		[varBsAlertMarginBottom]: '1rem',
		[varBsAlertColor]: '#fff',
		[varBsAlertBorderColor]: 'transparent',
		[varBsAlertBorder]: `${varBsBorderWidth} solid ${varBsAlertBorderColor}`,
		[varBsAlertBorderRadius]: varBsBorderRadius,
		[varBsAlertLinkColor]: '#fff',
	},
	...glassMixin,
	position: 'relative',
	overflow: 'hidden',
	padding: `${varBsAlertPaddingY} ${varBsAlertPaddingX}`,
	marginBottom: varBsAlertMarginBottom,
	color: varBsAlertColor,
	borderRadius: varBsAlertBorderRadius,
})

// Links and alert-links inside quartz alerts are white
globalStyle(`${quartzScope}${alert} a`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${alert} ${alertLink}`, {
	fontWeight: 700,
	color: '#fff',
})

// Headings inside alerts inherit alert text colour
globalStyle(`${quartzScope}${alert} ${alertHeading}`, {
	color: 'inherit',
})

// ── Per-variant left-bar pseudo-element ───────────────────────────────────────

// Each alert variant gets a coloured vertical strip on the left edge.
const afterBar = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '0.5rem',
	height: '100%',
	content: '""',
} as const

globalStyle(`${quartzScope}${alertPrimary}::after`, {
	...afterBar,
	backgroundColor: varBsPrimary,
})

globalStyle(`${quartzScope}${alertSecondary}::after`, {
	...afterBar,
	backgroundColor: varBsSecondary,
})

globalStyle(`${quartzScope}${alertSuccess}::after`, {
	...afterBar,
	backgroundColor: varBsSuccess,
})

globalStyle(`${quartzScope}${alertDanger}::after`, {
	...afterBar,
	backgroundColor: varBsDanger,
})

globalStyle(`${quartzScope}${alertWarning}::after`, {
	...afterBar,
	backgroundColor: varBsWarning,
})

globalStyle(`${quartzScope}${alertInfo}::after`, {
	...afterBar,
	backgroundColor: varBsInfo,
})

globalStyle(`${quartzScope}${alertLight}::after`, {
	...afterBar,
	backgroundColor: varBsLight,
})

globalStyle(`${quartzScope}${alertDark}::after`, {
	...afterBar,
	backgroundColor: varBsDark,
})

// ── Dismissible alert ─────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${alertDismissible}`, {
	paddingRight: '6rem',
})

// ── Close button ──────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${alertBtnClose}`, {
	boxSizing: 'content-box',
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	width: '1em',
	height: '1em',
	padding: '0.25em 0.25em',
	color: '#fff',
	backgroundColor: 'transparent',
	backgroundImage: btnCloseSvg,
	backgroundPosition: 'center',
	backgroundSize: '1em auto',
	backgroundRepeat: 'no-repeat',
	border: 0,
	borderRadius: varBsBorderRadius,
	opacity: 0.5,
	cursor: 'pointer',
})

globalStyle(`${quartzScope}${alertDismissible} ${alertBtnClose}`, {
	position: 'absolute',
	top: 0,
	right: 0,
	zIndex: 2,
	padding: '2.5rem 2rem',
})
