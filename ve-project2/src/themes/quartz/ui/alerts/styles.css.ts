import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

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

import { link } from '../../../../theme-contract/contents/basic/contract.css'

import {
	alert,
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

globalStyle(`${quartzScope}${alert}`, {
	vars: {
		[varBsAlertBg]: 'transparent',
		[varBsAlertPaddingX]: '2rem',
		[varBsAlertPaddingY]: '2rem',
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

globalStyle(`${quartzScope}${alertHeading}`, {
	color: 'inherit',
})

globalStyle(`${quartzScope}${alertLink}`, {
	fontWeight: '700',
	color: varBsAlertLinkColor,
})

globalStyle(`${quartzScope}${alertDismissible}`, {
	paddingRight: '6rem',
})

globalStyle(`${quartzScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: varBsPrimaryBgSubtle,
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: varBsSecondaryBgSubtle,
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: varBsSuccessBgSubtle,
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: varBsWarningBgSubtle,
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: varBsLightBgSubtle,
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alertDark}`, {
	vars: {
		[varBsAlertColor]: varBsDarkTextEmphasis,
		[varBsAlertBg]: varBsDarkBgSubtle,
		[varBsAlertBorderColor]: varBsDarkBorderSubtle,
		[varBsAlertLinkColor]: varBsDarkTextEmphasis,
	},
})

globalStyle(`${quartzScope}${alert}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	position: 'relative',
	overflow: 'hidden',
	color: '#fff',
})

globalStyle(`${quartzScope}${alert} :where(${quartzScope}${link})`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${alertPrimary}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#e83283',
})

globalStyle(`${quartzScope}${alertSecondary}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: 'rgba(255, 255, 255, 0.4)',
})

globalStyle(`${quartzScope}${alertSuccess}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#41d7a7',
})

globalStyle(`${quartzScope}${alertInfo}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#39cbfb',
})

globalStyle(`${quartzScope}${alertWarning}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#ffc107',
})

globalStyle(`${quartzScope}${alertDanger}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#fd7e14',
})

globalStyle(`${quartzScope}${alertLight}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#e9e9e8',
})

globalStyle(`${quartzScope}${alertDark}::after`, {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '0.5rem',
	height: '100%',
	content: '""',
	backgroundColor: '#212529',
})

globalStyle(`${quartzScope}${alert} ${quartzScope}${alertLink}`, {
	color: '#fff',
})
