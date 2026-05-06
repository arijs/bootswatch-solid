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
	varBsDangerBgSubtle,
	varBsDangerBorderSubtle,
	varBsDangerTextEmphasis,
	varBsDarkBgSubtle,
	varBsDarkBorderSubtle,
	varBsDarkTextEmphasis,
	varBsInfoBgSubtle,
	varBsInfoBorderSubtle,
	varBsInfoTextEmphasis,
	varBsLightBgSubtle,
	varBsLightBorderSubtle,
	varBsLightTextEmphasis,
	varBsPrimaryBgSubtle,
	varBsPrimaryBorderSubtle,
	varBsPrimaryTextEmphasis,
	varBsSecondaryBgSubtle,
	varBsSecondaryBorderSubtle,
	varBsSecondaryTextEmphasis,
	varBsSuccessBgSubtle,
	varBsSuccessBorderSubtle,
	varBsSuccessTextEmphasis,
	varBsWarningBgSubtle,
	varBsWarningBorderSubtle,
	varBsWarningTextEmphasis,
} from '../../../../theme-contract/_vars.css'
import { sandstoneScope } from '../../scope.css'

// Bootstrap default theme SVG × icon for the close button
const btnCloseSvg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e")`

// ── Base alert ────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .alert {
//   --bs-alert-bg: transparent; --bs-alert-padding-x: 1rem; --bs-alert-padding-y: 1rem;
//   --bs-alert-margin-bottom: 1rem; --bs-alert-color: inherit;
//   --bs-alert-border-color: transparent;
//   --bs-alert-border: var(--bs-border-width) solid var(--bs-alert-border-color);
//   --bs-alert-border-radius: var(--bs-border-radius); --bs-alert-link-color: inherit;
//   position: relative;
//   padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x);
//   margin-bottom: var(--bs-alert-margin-bottom);
//   color: var(--bs-alert-color); background-color: var(--bs-alert-bg);
//   border: var(--bs-alert-border); border-radius: var(--bs-alert-border-radius);
// }
globalStyle(`${sandstoneScope}${alert}`, {
	vars: {
		[varBsAlertBg]: 'transparent',
		[varBsAlertPaddingX]: '1rem',
		[varBsAlertPaddingY]: '1rem',
		[varBsAlertMarginBottom]: '1rem',
		[varBsAlertColor]: 'inherit',
		[varBsAlertBorderColor]: 'transparent',
		[varBsAlertBorder]: `${varBsBorderWidth} solid ${varBsAlertBorderColor}`,
		[varBsAlertBorderRadius]: varBsBorderRadius,
		[varBsAlertLinkColor]: 'inherit',
	},
	position: 'relative',
	padding: `${varBsAlertPaddingY} ${varBsAlertPaddingX}`,
	marginBottom: varBsAlertMarginBottom,
	color: varBsAlertColor,
	backgroundColor: varBsAlertBg,
	border: varBsAlertBorder,
	borderRadius: varBsAlertBorderRadius,
})

// ── Colour variants ───────────────────────────────────────────────────────────

// SOURCE CSS:
// .alert-primary {
//   --bs-alert-color: var(--bs-primary-text-emphasis);
//   --bs-alert-bg: var(--bs-primary-bg-subtle);
//   --bs-alert-border-color: var(--bs-primary-border-subtle);
//   --bs-alert-link-color: var(--bs-primary-text-emphasis);
// }
// (same pattern for all variants)

globalStyle(`${sandstoneScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: varBsPrimaryBgSubtle,
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
})

globalStyle(`${sandstoneScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: varBsSecondaryBgSubtle,
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
})

globalStyle(`${sandstoneScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: varBsSuccessBgSubtle,
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
})

globalStyle(`${sandstoneScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
})

globalStyle(`${sandstoneScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: varBsWarningBgSubtle,
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
})

globalStyle(`${sandstoneScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
})

globalStyle(`${sandstoneScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: varBsLightBgSubtle,
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
})

globalStyle(`${sandstoneScope}${alertDark}`, {
	vars: {
		[varBsAlertColor]: varBsDarkTextEmphasis,
		[varBsAlertBg]: varBsDarkBgSubtle,
		[varBsAlertBorderColor]: varBsDarkBorderSubtle,
		[varBsAlertLinkColor]: varBsDarkTextEmphasis,
	},
})

// ── Dismissible layout ────────────────────────────────────────────────────────

globalStyle(`${sandstoneScope}${alertDismissible}`, {
	paddingRight: '3rem',
})

// ── Inner element hooks ───────────────────────────────────────────────────────

// Links inside alerts: bold, use alert link colour
globalStyle(`${sandstoneScope}${alert} ${alertLink}`, {
	fontWeight: 700,
	color: varBsAlertLinkColor,
})

// Headings inside alerts: inherit text colour from the variant
globalStyle(`${sandstoneScope}${alert} ${alertHeading}`, {
	color: 'inherit',
})

// Base close button styles shared by alerts, modals, and toasts.
globalStyle(`${sandstoneScope}${alertBtnClose}`, {
	boxSizing: 'content-box',
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	width: '1em',
	height: '1em',
	padding: '0.25em 0.25em',
	color: '#000',
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

// Dismissible alerts place the close button in the top-right corner.
globalStyle(`${sandstoneScope}${alertDismissible} ${alertBtnClose}`, {
	position: 'absolute',
	top: 0,
	right: 0,
	zIndex: 2,
	padding: '1.25rem 1rem',
})

// ── Sandstone overrides: solid background colours ─────────────────────────────

// All alerts default to white text and underlined links
globalStyle(`${sandstoneScope}${alert}`, {
	color: '#fff',
})
globalStyle(`${sandstoneScope}${alert} a, ${sandstoneScope}${alert} ${alertLink}`, {
	color: '#fff',
	textDecoration: 'underline',
})

// Per-variant solid background colours (sourced from screenshots/sandstone/theme.css)
globalStyle(`${sandstoneScope}${alertPrimary}`, { backgroundColor: '#325d88' })
globalStyle(`${sandstoneScope}${alertSecondary}`, { backgroundColor: '#8e8c84' })
globalStyle(`${sandstoneScope}${alertSuccess}`, { backgroundColor: '#93c54b' })
globalStyle(`${sandstoneScope}${alertInfo}`, { backgroundColor: '#29abe0' })
globalStyle(`${sandstoneScope}${alertWarning}`, { backgroundColor: '#f47c3c' })
globalStyle(`${sandstoneScope}${alertDanger}`, { backgroundColor: '#d9534f' })
globalStyle(`${sandstoneScope}${alertLight}`, { backgroundColor: '#f8f5f0' })
globalStyle(`${sandstoneScope}${alertDark}`, { backgroundColor: '#3e3f3a' })

// Light alert exception: dark text on a light background
globalStyle(
	`${sandstoneScope}${alertLight}, ${sandstoneScope}${alertLight} a:not(.btn), ${sandstoneScope}${alertLight} ${alertLink}`,
	{ color: '#3e3f3a' },
)

