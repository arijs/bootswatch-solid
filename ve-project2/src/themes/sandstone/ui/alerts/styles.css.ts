import { globalStyle } from '@vanilla-extract/css'
import { sandstoneScope } from '../../scope.css'

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
import { tableCell, tableHeaderCell } from '../../../../theme-contract/contents/tables/contract.css'

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
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'

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

globalStyle(`${sandstoneScope}${alertHeading}`, {
	color: 'inherit',
})

globalStyle(`${sandstoneScope}${alertLink}`, {
	fontWeight: '700',
	color: varBsAlertLinkColor,
})

globalStyle(`${sandstoneScope}${alertDismissible}`, {
	paddingRight: '3rem',
})

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

globalStyle(`${sandstoneScope}${alertInfo}`, {
	vars: {
		[varBsAlertColor]: varBsInfoTextEmphasis,
		[varBsAlertBg]: varBsInfoBgSubtle,
		[varBsAlertBorderColor]: varBsInfoBorderSubtle,
		[varBsAlertLinkColor]: varBsInfoTextEmphasis,
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

globalStyle(`${sandstoneScope}${alertDanger}`, {
	vars: {
		[varBsAlertColor]: varBsDangerTextEmphasis,
		[varBsAlertBg]: varBsDangerBgSubtle,
		[varBsAlertBorderColor]: varBsDangerBorderSubtle,
		[varBsAlertLinkColor]: varBsDangerTextEmphasis,
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

globalStyle(`${sandstoneScope}${alert}`, {
	color: '#fff',
})

globalStyle(`${sandstoneScope}${alert} ${sandstoneScope}${link}`, {
	color: '#fff',
	textDecoration: 'underline',
})

globalStyle(`${sandstoneScope}${alert} ${sandstoneScope}${alertLink}`, {
	color: '#fff',
	textDecoration: 'underline',
})

globalStyle(`${sandstoneScope}${alertPrimary}`, {
	backgroundColor: '#325d88',
})

globalStyle(`${sandstoneScope}${alertPrimary} > ${sandstoneScope}${tableHeaderCell}`, {
	backgroundColor: '#325d88',
})

globalStyle(`${sandstoneScope}${alertPrimary} > ${sandstoneScope}${tableCell}`, {
	backgroundColor: '#325d88',
})

globalStyle(`${sandstoneScope}${alertSecondary}`, {
	backgroundColor: '#8e8c84',
})

globalStyle(`${sandstoneScope}${alertSecondary} > ${sandstoneScope}${tableHeaderCell}`, {
	backgroundColor: '#8e8c84',
})

globalStyle(`${sandstoneScope}${alertSecondary} > ${sandstoneScope}${tableCell}`, {
	backgroundColor: '#8e8c84',
})

globalStyle(`${sandstoneScope}${alertSuccess}`, {
	backgroundColor: '#93c54b',
})

globalStyle(`${sandstoneScope}${alertSuccess} > ${sandstoneScope}${tableHeaderCell}`, {
	backgroundColor: '#93c54b',
})

globalStyle(`${sandstoneScope}${alertSuccess} > ${sandstoneScope}${tableCell}`, {
	backgroundColor: '#93c54b',
})

globalStyle(`${sandstoneScope}${alertInfo}`, {
	backgroundColor: '#29abe0',
})

globalStyle(`${sandstoneScope}${alertInfo} > ${sandstoneScope}${tableHeaderCell}`, {
	backgroundColor: '#29abe0',
})

globalStyle(`${sandstoneScope}${alertInfo} > ${sandstoneScope}${tableCell}`, {
	backgroundColor: '#29abe0',
})

globalStyle(`${sandstoneScope}${alertDanger}`, {
	backgroundColor: '#d9534f',
})

globalStyle(`${sandstoneScope}${alertDanger} > ${sandstoneScope}${tableHeaderCell}`, {
	backgroundColor: '#d9534f',
})

globalStyle(`${sandstoneScope}${alertDanger} > ${sandstoneScope}${tableCell}`, {
	backgroundColor: '#d9534f',
})

globalStyle(`${sandstoneScope}${alertWarning}`, {
	backgroundColor: '#f47c3c',
})

globalStyle(`${sandstoneScope}${alertWarning} > ${sandstoneScope}${tableHeaderCell}`, {
	backgroundColor: '#f47c3c',
})

globalStyle(`${sandstoneScope}${alertWarning} > ${sandstoneScope}${tableCell}`, {
	backgroundColor: '#f47c3c',
})

globalStyle(`${sandstoneScope}${alertDark}`, {
	backgroundColor: '#3e3f3a',
})

globalStyle(`${sandstoneScope}${alertDark} > ${sandstoneScope}${tableHeaderCell}`, {
	backgroundColor: '#3e3f3a',
})

globalStyle(`${sandstoneScope}${alertDark} > ${sandstoneScope}${tableCell}`, {
	backgroundColor: '#3e3f3a',
})

globalStyle(`${sandstoneScope}${alertLight}`, {
	backgroundColor: '#f8f5f0',
})

globalStyle(`${sandstoneScope}${alertLight} > ${sandstoneScope}${tableHeaderCell}`, {
	backgroundColor: '#f8f5f0',
})

globalStyle(`${sandstoneScope}${alertLight} > ${sandstoneScope}${tableCell}`, {
	backgroundColor: '#f8f5f0',
})

globalStyle(`${sandstoneScope}${alertLight}`, {
	color: '#3e3f3a',
})

globalStyle(`${sandstoneScope}${alertLight} ${sandstoneScope}${link}:not(${btn})`, {
	color: '#3e3f3a',
})

globalStyle(`${sandstoneScope}${alertLight} ${sandstoneScope}${alertLink}`, {
	color: '#3e3f3a',
})
