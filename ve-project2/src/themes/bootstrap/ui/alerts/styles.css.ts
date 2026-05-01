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
import { bootstrapScope } from '../../scope.css'

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
globalStyle(`${bootstrapScope}${alert}`, {
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

globalStyle(`${bootstrapScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: varBsPrimaryBgSubtle,
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
})

globalStyle(`${bootstrapScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: varBsSecondaryBgSubtle,
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
})

globalStyle(`${bootstrapScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: varBsSuccessBgSubtle,
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
})

globalStyle(`${bootstrapScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
})

globalStyle(`${bootstrapScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: varBsWarningBgSubtle,
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
})

globalStyle(`${bootstrapScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
})

globalStyle(`${bootstrapScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: varBsLightBgSubtle,
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
})

globalStyle(`${bootstrapScope}${alertDark}`, {
	vars: {
		[varBsAlertColor]: varBsDarkTextEmphasis,
		[varBsAlertBg]: varBsDarkBgSubtle,
		[varBsAlertBorderColor]: varBsDarkBorderSubtle,
		[varBsAlertLinkColor]: varBsDarkTextEmphasis,
	},
})

// ── Dismissible layout ────────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${alertDismissible}`, {
	paddingRight: '3rem',
})

// ── Inner element hooks ───────────────────────────────────────────────────────

// Links inside alerts: bold, use alert link colour
globalStyle(`${bootstrapScope}${alert} ${alertLink}`, {
	fontWeight: 700,
	color: varBsAlertLinkColor,
})

// Headings inside alerts: inherit text colour from the variant
globalStyle(`${bootstrapScope}${alert} ${alertHeading}`, {
	color: 'inherit',
})

// Base close button styles shared by alerts, modals, and toasts.
globalStyle(`${bootstrapScope}${alertBtnClose}`, {
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
globalStyle(`${bootstrapScope}${alertDismissible} ${alertBtnClose}`, {
	position: 'absolute',
	top: 0,
	right: 0,
	zIndex: 2,
	padding: '1.25rem 1rem',
})
