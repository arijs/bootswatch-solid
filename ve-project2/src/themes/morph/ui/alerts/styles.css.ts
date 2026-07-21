import { globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../../scope.css'

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

globalStyle(`${morphScope}${alert}`, {
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

globalStyle(`${morphScope}${alertHeading}`, {
	color: 'inherit',
})

globalStyle(`${morphScope}${alertLink}`, {
	fontWeight: '700',
	color: varBsAlertLinkColor,
})

globalStyle(`${morphScope}${alertDismissible}`, {
	paddingRight: '3rem',
})

globalStyle(`${morphScope}${alertPrimary}`, {
	vars: {
		[varBsAlertColor]: varBsPrimaryTextEmphasis,
		[varBsAlertBg]: varBsPrimaryBgSubtle,
		[varBsAlertBorderColor]: varBsPrimaryBorderSubtle,
		[varBsAlertLinkColor]: varBsPrimaryTextEmphasis,
	},
})

globalStyle(`${morphScope}${alertSecondary}`, {
	vars: {
		[varBsAlertColor]: varBsSecondaryTextEmphasis,
		[varBsAlertBg]: varBsSecondaryBgSubtle,
		[varBsAlertBorderColor]: varBsSecondaryBorderSubtle,
		[varBsAlertLinkColor]: varBsSecondaryTextEmphasis,
	},
})

globalStyle(`${morphScope}${alertSuccess}`, {
	vars: {
		[varBsAlertColor]: varBsSuccessTextEmphasis,
		[varBsAlertBg]: varBsSuccessBgSubtle,
		[varBsAlertBorderColor]: varBsSuccessBorderSubtle,
		[varBsAlertLinkColor]: varBsSuccessTextEmphasis,
	},
})

globalStyle(`${morphScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
	},
})

globalStyle(`${morphScope}${alertWarning}`, {
	vars: {
		[varBsAlertColor]: varBsWarningTextEmphasis,
		[varBsAlertBg]: varBsWarningBgSubtle,
		[varBsAlertBorderColor]: varBsWarningBorderSubtle,
		[varBsAlertLinkColor]: varBsWarningTextEmphasis,
	},
})

globalStyle(`${morphScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
	},
})

globalStyle(`${morphScope}${alertLight}`, {
	vars: {
		[varBsAlertColor]: varBsLightTextEmphasis,
		[varBsAlertBg]: varBsLightBgSubtle,
		[varBsAlertBorderColor]: varBsLightBorderSubtle,
		[varBsAlertLinkColor]: varBsLightTextEmphasis,
	},
})

globalStyle(`${morphScope}${alertDark}`, {
	vars: {
		[varBsAlertColor]: varBsDarkTextEmphasis,
		[varBsAlertBg]: varBsDarkBgSubtle,
		[varBsAlertBorderColor]: varBsDarkBorderSubtle,
		[varBsAlertLinkColor]: varBsDarkTextEmphasis,
	},
})

globalStyle(`${morphScope}${alert}`, {
	WebkitBackdropFilter: 'blur(3px)',
	backdropFilter: 'blur(3px)',
	boxShadow: '8px 8px 40px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(255, 255, 255, 0.5), inset -5px -5px 20px rgba(0, 0, 0, 0.05)',
})

globalStyle(`${morphScope}${alertPrimary}`, {
	backgroundColor: 'rgba(55, 141, 252, 0.75)',
	boxShadow: '8px 8px 40px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(215, 232, 254, 0.4), inset -5px -5px 20px rgba(11, 28, 50, 0.05)',
})

globalStyle(`${morphScope}${alertSecondary}`, {
	backgroundColor: 'rgba(217, 227, 241, 0.75)',
	boxShadow: '8px 8px 40px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(247, 249, 252, 0.4), inset -5px -5px 20px rgba(43, 45, 48, 0.05)',
})

globalStyle(`${morphScope}${alertSuccess}`, {
	backgroundColor: 'rgba(67, 204, 41, 0.75)',
	boxShadow: '8px 8px 40px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(217, 245, 212, 0.4), inset -5px -5px 20px rgba(13, 41, 8, 0.05)',
})

globalStyle(`${morphScope}${alertInfo}`, {
	backgroundColor: 'rgba(91, 98, 244, 0.75)',
	boxShadow: '8px 8px 40px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(222, 224, 253, 0.4), inset -5px -5px 20px rgba(18, 20, 49, 0.05)',
})

globalStyle(`${morphScope}${alertWarning}`, {
	backgroundColor: 'rgba(255, 193, 7, 0.75)',
	boxShadow: '8px 8px 40px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(255, 243, 205, 0.4), inset -5px -5px 20px rgba(51, 39, 1, 0.05)',
})

globalStyle(`${morphScope}${alertDanger}`, {
	backgroundColor: 'rgba(229, 37, 39, 0.75)',
	boxShadow: '8px 8px 40px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(250, 211, 212, 0.4), inset -5px -5px 20px rgba(46, 7, 8, 0.05)',
})

globalStyle(`${morphScope}${alertLight}`, {
	backgroundColor: 'rgba(240, 245, 250, 0.75)',
	boxShadow: '8px 8px 40px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(252, 253, 254, 0.4), inset -5px -5px 20px rgba(48, 49, 50, 0.05)',
})

globalStyle(`${morphScope}${alertDark}`, {
	backgroundColor: 'rgba(33, 37, 41, 0.75)',
	boxShadow: '8px 8px 40px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(211, 211, 212, 0.4), inset -5px -5px 20px rgba(7, 7, 8, 0.05)',
})
