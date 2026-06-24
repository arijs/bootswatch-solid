import { globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

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
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'

import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../../theme-contract/literal/contract.css'
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

globalStyle(`${materiaScope}${alertHeading}`, {
	color: 'inherit',
})

globalStyle(`${materiaScope}${alertLink}`, {
	fontWeight: '700',
	color: varBsAlertLinkColor,
})

globalStyle(`${materiaScope}${alertDismissible}`, {
	paddingRight: '3rem',
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

globalStyle(`${materiaScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
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

globalStyle(`${materiaScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
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

globalStyle(`${materiaScope}${alert}`, {
	paddingRight: '2.5rem',
	border: 'none',
})

globalStyle(`${materiaScope}${alert}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h1}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h2}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h3}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h4}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h5}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${h6}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${alert} ${materiaScope}${clsH6}`, {
	color: '#fff',
})

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

globalStyle(`${materiaScope}${alert} ${materiaScope}${alertLink}`, {
	fontWeight: '700',
	color: '#fff',
})

globalStyle(`${materiaScope}${alertSecondary}`, {
	color: '#444',
})

globalStyle(`${materiaScope}${alertSecondary} ${materiaScope}${alertLink}`, {
	color: '#444',
})

globalStyle(`${materiaScope}${alertLight}`, {
	color: '#444',
})

globalStyle(`${materiaScope}${alertLight} ${materiaScope}${alertLink}`, {
	color: '#444',
})
