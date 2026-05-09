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
import { h1, h2, h3, h4, h5, h6 } from '../../../../theme-contract/contents/contract.css'
import { materiaScope } from '../../scope.css'

const btnCloseSvg = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e")`

globalStyle(`${materiaScope}${alert}`, {
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

globalStyle(`${materiaScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: varBsPrimaryBgSubtle,
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: varBsSecondaryBgSubtle,
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: varBsSuccessBgSubtle,
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: varBsWarningBgSubtle,
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: varBsLightBgSubtle,
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertDark}`, {
	vars: {
		[varBsAlertColor]: varBsDarkTextEmphasis,
		[varBsAlertBg]: varBsDarkBgSubtle,
		[varBsAlertBorderColor]: varBsDarkBorderSubtle,
		[varBsAlertLinkColor]: varBsDarkTextEmphasis,
	},
})

globalStyle(`${materiaScope}${alertDismissible}`, {
	paddingRight: '3rem',
})

globalStyle(`${materiaScope}${alert} ${alertLink}`, {
	fontWeight: 700,
	color: varBsAlertLinkColor,
})

globalStyle(`${materiaScope}${alert} ${alertHeading}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${alert} ${alertHeading}${h4}`, {
	fontWeight: 500,
	lineHeight: 1.2,
})

globalStyle(`${materiaScope}${alertBtnClose}`, {
	boxSizing: 'content-box',
	margin: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
	width: '1em',
	height: '1em',
	padding: '0.25em 0.25em',
	color: '#fff',
	background: `transparent ${btnCloseSvg} center/1em auto no-repeat`,
	filter: 'none',
	border: 0,
	borderRadius: '0.375rem',
	opacity: 0.6,
})

globalStyle(`${materiaScope}${alertDismissible} ${alertBtnClose}`, {
	position: 'absolute',
	top: 0,
	right: 0,
	zIndex: 2,
	padding: '1.25rem 1rem',
})

// Materia-specific alert appearance
globalStyle(`${materiaScope}${alert}`, {
	paddingRight: '2.5rem',
	border: 'none',
})

globalStyle(
	[
		`${materiaScope}${alert}`,
		`${materiaScope}${alert} ${h1}`,
		`${materiaScope}${alert} ${h2}`,
		`${materiaScope}${alert} ${h3}`,
		`${materiaScope}${alert} ${h4}`,
		`${materiaScope}${alert} ${h5}`,
		`${materiaScope}${alert} ${h6}`,
	].join(', '),
	{
		color: '#fff',
	},
)

globalStyle(`${materiaScope}${alertPrimary}`, {
	background: '#2196f3 linear-gradient(180deg, #42a6f5, #2196f3) repeat-x',
})

globalStyle(`${materiaScope}${alertSecondary}`, {
	background: '#fff linear-gradient(180deg, white, #fff) repeat-x',
})

globalStyle(`${materiaScope}${alertSuccess}`, {
	background: '#4caf50 linear-gradient(180deg, #67bb6a, #4caf50) repeat-x',
})

globalStyle(`${materiaScope}${alertInfo}`, {
	background: '#9c27b0 linear-gradient(180deg, #ab47bc, #9c27b0) repeat-x',
})

globalStyle(`${materiaScope}${alertWarning}`, {
	background: '#ff9800 linear-gradient(180deg, #ffa726, #ff9800) repeat-x',
})

globalStyle(`${materiaScope}${alertDanger}`, {
	background: '#e51c23 linear-gradient(180deg, #e93e44, #e51c23) repeat-x',
})

globalStyle(`${materiaScope}${alertLight}`, {
	background: '#f8f9fa linear-gradient(180deg, #f9fafb, #f8f9fa) repeat-x',
})

globalStyle(`${materiaScope}${alertDark}`, {
	background: '#222 linear-gradient(180deg, #434343, #222) repeat-x',
})

globalStyle(`${materiaScope}${alert} a:not(${alertBtnClose}), ${materiaScope}${alert} ${alertLink}`, {
	fontWeight: 700,
	color: '#fff',
})

globalStyle(
	[
		`${materiaScope}${alertSecondary}`,
		`${materiaScope}${alertSecondary} a:not(${alertBtnClose})`,
		`${materiaScope}${alertSecondary} ${alertLink}`,
		`${materiaScope}${alertLight}`,
		`${materiaScope}${alertLight} a:not(${alertBtnClose})`,
		`${materiaScope}${alertLight} ${alertLink}`,
	].join(', '),
	{
		color: '#444',
	},
)

