import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBlack,
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
import {
	varAlertBg,
	varAlertBorder,
	varAlertBorderColor,
	varAlertBorderRadius,
	varAlertColor,
	varAlertLinkColor,
	varAlertMarginBottom,
	varAlertPaddingX,
	varAlertPaddingY,
	varBsBtnCloseBg,
	varBsBtnCloseColor,
	varBsBtnCloseDisabledOpacity,
	varBsBtnCloseFilter,
	varBsBtnCloseFocusOpacity,
	varBsBtnCloseFocusShadow,
	varBsBtnCloseHoverOpacity,
	varBsBtnCloseOpacity,
} from '../../../../theme-contract/ui/alerts/_vars.css'

const closeIcon =
	"url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\")"

const alertVariant = (color: string, bg: string, borderColor: string) =>
	style({
		vars: {
			[varAlertColor]: color,
			[varAlertBg]: bg,
			[varAlertBorderColor]: borderColor,
			[varAlertLinkColor]: color,
		},
	})

// SOURCE CSS:
// .alert { --bs-alert-bg: transparent; --bs-alert-padding-x: 1rem; --bs-alert-padding-y: 1rem; --bs-alert-margin-bottom: 1rem; --bs-alert-color: inherit; --bs-alert-border-color: transparent; --bs-alert-border: var(--bs-border-width) solid var(--bs-alert-border-color); --bs-alert-border-radius: var(--bs-border-radius); --bs-alert-link-color: inherit; position: relative; padding: var(--bs-alert-padding-y) var(--bs-alert-padding-x); margin-bottom: var(--bs-alert-margin-bottom); color: var(--bs-alert-color); background-color: var(--bs-alert-bg); border: var(--bs-alert-border); border-radius: var(--bs-alert-border-radius); }

export const alert = style({
	vars: {
		[varAlertBg]: 'transparent',
		[varAlertPaddingX]: '1rem',
		[varAlertPaddingY]: '1rem',
		[varAlertMarginBottom]: '1rem',
		[varAlertColor]: 'inherit',
		[varAlertBorderColor]: 'transparent',
		[varAlertBorder]: `${varBsBorderWidth} solid ${varAlertBorderColor}`,
		[varAlertBorderRadius]: varBsBorderRadius,
		[varAlertLinkColor]: 'inherit',
	},
	position: 'relative',
	padding: `${varAlertPaddingY} ${varAlertPaddingX}`,
	marginBottom: varAlertMarginBottom,
	color: varAlertColor,
	backgroundColor: varAlertBg,
	border: varAlertBorder,
	borderRadius: varAlertBorderRadius,
})

export const alertDismissible = style({
	paddingRight: '3rem',
})

export const alertLink = style({
	fontWeight: '700',
	color: varAlertLinkColor,
})

export const alertHeading = style({
	color: 'inherit',
})

export const alertHr = style({
	margin: '1rem 0',
	color: 'inherit',
	border: 0,
	borderTop: `${varBsBorderWidth} solid`,
	opacity: 0.25,
})

export const fade = style({
	transition: 'opacity 0.15s linear',
})

export const show = style({
	opacity: 1,
})

globalStyle(`${fade}:not(${show})`, {
	opacity: 0,
})

export const btnClose = style({
	vars: {
		[varBsBtnCloseColor]: varBsBlack,
		[varBsBtnCloseBg]: closeIcon,
		[varBsBtnCloseOpacity]: '0.5',
		[varBsBtnCloseHoverOpacity]: '0.75',
		[varBsBtnCloseFocusShadow]: '0 0 0 0.25rem rgba(13, 110, 253, 0.25)',
		[varBsBtnCloseFocusOpacity]: '1',
		[varBsBtnCloseDisabledOpacity]: '0.25',
		[varBsBtnCloseFilter]: 'none',
	},
	boxSizing: 'content-box',
	width: '1em',
	height: '1em',
	// Bootstrap relies on a global button font-size reset; keep this local so dismiss buttons work without extra wrapper classes.
	fontSize: 'inherit',
	padding: '0.25em 0.25em',
	color: varBsBtnCloseColor,
	background: `transparent ${varBsBtnCloseBg} center / 1em auto no-repeat`,
	filter: varBsBtnCloseFilter,
	border: 0,
	borderRadius: '0.375rem',
	opacity: varBsBtnCloseOpacity,
})

globalStyle(`${btnClose}:hover`, {
	color: varBsBtnCloseColor,
	textDecoration: 'none',
	opacity: varBsBtnCloseHoverOpacity,
})

globalStyle(`${btnClose}:focus`, {
	outline: 0,
	boxShadow: varBsBtnCloseFocusShadow,
	opacity: varBsBtnCloseFocusOpacity,
})

globalStyle(`${btnClose}:disabled`, {
	pointerEvents: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	userSelect: 'none',
	opacity: varBsBtnCloseDisabledOpacity,
})

globalStyle(`${alertDismissible} ${btnClose}`, {
	position: 'absolute',
	top: 0,
	right: 0,
	zIndex: 2,
	padding: '1.25rem 1rem',
})

export const mb0 = style({
	marginBottom: '0 !important',
})

export const alertPrimary = alertVariant(
	varBsPrimaryTextEmphasis,
	varBsPrimaryBgSubtle,
	varBsPrimaryBorderSubtle,
)

export const alertSecondary = alertVariant(
	varBsSecondaryTextEmphasis,
	varBsSecondaryBgSubtle,
	varBsSecondaryBorderSubtle,
)

export const alertSuccess = alertVariant(
	varBsSuccessTextEmphasis,
	varBsSuccessBgSubtle,
	varBsSuccessBorderSubtle,
)

export const alertDanger = alertVariant(
	varBsDangerTextEmphasis,
	varBsDangerBgSubtle,
	varBsDangerBorderSubtle,
)

export const alertWarning = alertVariant(
	varBsWarningTextEmphasis,
	varBsWarningBgSubtle,
	varBsWarningBorderSubtle,
)

export const alertInfo = alertVariant(
	varBsInfoTextEmphasis,
	varBsInfoBgSubtle,
	varBsInfoBorderSubtle,
)

export const alertLight = alertVariant(
	varBsLightTextEmphasis,
	varBsLightBgSubtle,
	varBsLightBorderSubtle,
)

export const alertDark = alertVariant(
	varBsDarkTextEmphasis,
	varBsDarkBgSubtle,
	varBsDarkBorderSubtle,
)
