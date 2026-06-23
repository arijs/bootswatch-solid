import { globalStyle } from '@vanilla-extract/css'
import { cyborgScope } from '../../scope.css'

import {
	varBsBorderRadius,
	varBsBorderWidth,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import { varBsCardBg } from '../../../../theme-contract/ui/card/_vars.css'
import { varBsNavbarActiveColor, varBsNavbarNavLinkPaddingX } from '../../../../theme-contract/ui/navbar/_vars.css'
import {
	varBsNavLinkColor,
	varBsNavLinkDisabledColor,
	varBsNavLinkFontSize,
	varBsNavLinkFontWeight,
	varBsNavLinkHoverColor,
	varBsNavLinkPaddingX,
	varBsNavLinkPaddingY,
	varBsNavPillsBorderRadius,
	varBsNavPillsLinkActiveBg,
	varBsNavPillsLinkActiveColor,
	varBsNavTabsBorderColor,
	varBsNavTabsBorderRadius,
	varBsNavTabsBorderWidth,
	varBsNavTabsLinkActiveBg,
	varBsNavTabsLinkActiveBorderColor,
	varBsNavTabsLinkActiveColor,
	varBsNavTabsLinkHoverBorderColor,
} from '../../../../theme-contract/ui/navs/_vars.css'
import { varBsNavUnderlineBorderWidth, varBsNavUnderlineGap, varBsNavUnderlineLinkActiveColor } from '../../../../theme-contract/utilities/generated/_vars.css'

import {
	navFill,
	navJustified,
	navUnderline,
	navbarExpand,
	navbarExpandMd,
	navbarExpandSm,
	navbarExpandXl,
	navbarExpandXxl,
} from '../../../../theme-contract/literal/contract.css'
import { cardHeaderTabs } from '../../../../theme-contract/ui/card-tabs/contract.css'
import { navbarExpandLg, navbarNav } from '../../../../theme-contract/ui/navbar/contract.css'
import {
	nav,
	navItem,
	navLink,
	navLinkActive,
	navLinkDisabled,
	navPills,
	navTabs,
	show,
	tabContent,
	tabPane,
} from '../../../../theme-contract/ui/navs/contract.css'

globalStyle(`${cyborgScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: varBsSecondaryColor,
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${cyborgScope}${navLink}`, {
	display: 'block',
	padding: `${varBsNavLinkPaddingY} ${varBsNavLinkPaddingX}`,
	fontSize: varBsNavLinkFontSize,
	fontWeight: varBsNavLinkFontWeight,
	color: varBsNavLinkColor,
	textDecoration: 'none',
	background: 'none',
	border: '0',
	transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
})

globalStyle(`${cyborgScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cyborgScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${cyborgScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${cyborgScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(42, 159, 214, 0.25)',
})

globalStyle(`${cyborgScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${cyborgScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${cyborgScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: '#282828',
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: '#282828',
		[varBsNavTabsLinkActiveColor]: '#fff',
		[varBsNavTabsLinkActiveBg]: '#282828',
		[varBsNavTabsLinkActiveBorderColor]: '#282828',
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navItem}${show} ${cyborgScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${cyborgScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#2a9fd6',
	},
})

globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${show} > ${cyborgScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${cyborgScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: '#fff',
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${cyborgScope}${navUnderline} ${cyborgScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${cyborgScope}${navUnderline} ${cyborgScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${cyborgScope}${navUnderline} ${cyborgScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${cyborgScope}${navUnderline} ${cyborgScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${cyborgScope}${navUnderline} ${cyborgScope}${show} > ${cyborgScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${cyborgScope}${navFill} > ${cyborgScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${cyborgScope}${navFill} ${cyborgScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${cyborgScope}${navJustified} > ${cyborgScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${cyborgScope}${navJustified} ${cyborgScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${cyborgScope}${navFill} ${cyborgScope}${navItem} ${cyborgScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${cyborgScope}${navJustified} ${cyborgScope}${navItem} ${cyborgScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${cyborgScope}${tabContent} > ${cyborgScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${cyborgScope}${navbarNav} ${cyborgScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${cyborgScope}${navbarNav} ${cyborgScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${cyborgScope}${navbarExpandSm} ${cyborgScope}${navbarNav} ${cyborgScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${cyborgScope}${navbarExpandMd} ${cyborgScope}${navbarNav} ${cyborgScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${cyborgScope}${navbarExpandLg} ${cyborgScope}${navbarNav} ${cyborgScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${cyborgScope}${navbarExpandXl} ${cyborgScope}${navbarNav} ${cyborgScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${cyborgScope}${navbarExpandXxl} ${cyborgScope}${navbarNav} ${cyborgScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${cyborgScope}${navbarExpand} ${cyborgScope}${navbarNav} ${cyborgScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${cyborgScope}${cardHeaderTabs} ${cyborgScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}`, {
	color: '#fff',
})

globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}`, {
	color: '#fff',
})

globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}:hover`, {
	backgroundColor: '#282828',
})

globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}:hover`, {
	backgroundColor: '#282828',
})

globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}${navLinkDisabled}`, {
	color: varBsSecondaryColor,
	backgroundColor: 'transparent',
})

globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}${navLinkDisabled}:hover`, {
	color: varBsSecondaryColor,
	backgroundColor: 'transparent',
})

globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}${navLinkDisabled}`, {
	color: varBsSecondaryColor,
	backgroundColor: 'transparent',
})

globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}${navLinkDisabled}:hover`, {
	color: varBsSecondaryColor,
	backgroundColor: 'transparent',
})

globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}${navLinkActive}`, {
	backgroundColor: '#2a9fd6',
})

globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}${navLinkActive}`, {
	backgroundColor: '#2a9fd6',
})
