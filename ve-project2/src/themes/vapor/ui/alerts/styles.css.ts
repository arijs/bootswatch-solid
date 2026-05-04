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
import { h1, h2, h3, h4, h5, h6 } from '../../../../theme-contract/contents/contract.css'
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
import { vaporScope } from '../../scope.css'

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
globalStyle(`${vaporScope}${alert}`, {
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

globalStyle(`${vaporScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: varBsPrimaryBgSubtle,
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: varBsSecondaryBgSubtle,
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: varBsSuccessBgSubtle,
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: varBsWarningBgSubtle,
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: varBsLightBgSubtle,
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
})

globalStyle(`${vaporScope}${alertDark}`, {
	vars: {
		[varBsAlertColor]: varBsDarkTextEmphasis,
		[varBsAlertBg]: varBsDarkBgSubtle,
		[varBsAlertBorderColor]: varBsDarkBorderSubtle,
		[varBsAlertLinkColor]: varBsDarkTextEmphasis,
	},
})

// ── Dismissible layout ────────────────────────────────────────────────────────

globalStyle(`${vaporScope}${alertDismissible}`, {
	paddingRight: '3rem',
})

// ── Inner element hooks ───────────────────────────────────────────────────────

// Links inside alerts: bold, use alert link colour
globalStyle(`${vaporScope}${alert} ${alertLink}`, {
	fontWeight: 700,
	color: varBsAlertLinkColor,
})

// Headings inside alerts: inherit text colour from the variant
globalStyle(`${vaporScope}${alert} ${alertHeading}`, {
	color: 'inherit',
})

// Base close button styles shared by alerts, modals, and toasts.
globalStyle(`${vaporScope}${alertBtnClose}`, {
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
globalStyle(`${vaporScope}${alertDismissible} ${alertBtnClose}`, {
	position: 'absolute',
	top: 0,
	right: 0,
	zIndex: 2,
	padding: '1.25rem 1rem',
})

const vaporLightTextShadow =
	'0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2)'
const vaporDarkTextShadow =
	'0 0 1px rgba(0, 0, 0, 0.3), 0 0 2px rgba(0, 0, 0, 0.3), 0 0 5px rgba(0, 0, 0, 0.2)'

const setVaporAlert = (
	cls: string,
	bg: string,
	color: string,
	rgb: string,
	textShadow: string,
) => {
	globalStyle(`${vaporScope}${cls}`, {
		vars: {
			[varBsAlertBg]: bg,
			[varBsAlertColor]: color,
			[varBsAlertBorderColor]: bg,
			[varBsAlertLinkColor]: '#fff',
		},
		textShadow,
		boxShadow: `0 0 2rem rgba(${rgb}, 0.4), 0 0 8rem rgba(${rgb}, 0.3)`,
	})
}

globalStyle(`${vaporScope}${alert} ${alertLink}, ${vaporScope}${alert} a`, {
	color: '#fff',
})

setVaporAlert(alertPrimary, '#6f42c1', '#fff', '111, 66, 193', vaporLightTextShadow)
setVaporAlert(alertSecondary, '#ea39b8', '#fff', '234, 57, 184', vaporLightTextShadow)
setVaporAlert(alertSuccess, '#3cf281', '#fff', '80, 243, 142', vaporLightTextShadow)
setVaporAlert(alertInfo, '#1ba2f6', '#fff', '27, 162, 246', vaporLightTextShadow)
setVaporAlert(alertWarning, '#ffc107', '#fff', '255, 199, 32', vaporLightTextShadow)
setVaporAlert(alertDanger, '#e44c55', '#fff', '231, 94, 102', vaporLightTextShadow)
setVaporAlert(alertLight, '#44d9e8', '#fff', '87, 221, 234', vaporLightTextShadow)
setVaporAlert(alertDark, '#170229', '#fff', '23, 2, 41', vaporLightTextShadow)

// Headings inside alerts use white glow instead of cyan heading glow.
// Triple compound selector (scope + alertHeading + hN) gives specificity 0,3,0
// which beats the global heading rule (0,2,0) regardless of load order.
globalStyle(
	[h1, h2, h3, h4, h5, h6].map(h => `${vaporScope}${alertHeading}${h}`).join(', '),
	{
		textShadow:
			'0 0 1px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0.5rem rgba(255, 255, 255, 0.3), 0 0 2rem rgba(255, 255, 255, 0.2)',
	},
)
