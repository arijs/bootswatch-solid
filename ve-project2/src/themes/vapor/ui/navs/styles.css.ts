import { globalStyle } from '@vanilla-extract/css'
import { vaporScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsSecondaryBg,
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

globalStyle(`${vaporScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: 'rgba(50, 251, 226, 0.3)',
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${vaporScope}${navLink}`, {
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

globalStyle(`${vaporScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${vaporScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${vaporScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${vaporScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(111, 66, 193, 0.25)',
})

globalStyle(`${vaporScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${vaporScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${vaporScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: '#ea39b8',
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navItem}${show} ${vaporScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${vaporScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#ea39b8',
	},
})

globalStyle(`${vaporScope}${navPills} ${vaporScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${vaporScope}${navPills} ${vaporScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${vaporScope}${navPills} ${vaporScope}${show} > ${vaporScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${vaporScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: '#ea39b8',
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${show} > ${vaporScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${vaporScope}${navFill} > ${vaporScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${vaporScope}${navFill} ${vaporScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${vaporScope}${navJustified} > ${vaporScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${vaporScope}${navJustified} ${vaporScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${vaporScope}${navFill} ${vaporScope}${navItem} ${vaporScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${navJustified} ${vaporScope}${navItem} ${vaporScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${vaporScope}${tabContent} > ${vaporScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${vaporScope}${navbarNav} ${vaporScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${vaporScope}${navbarNav} ${vaporScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${vaporScope}${navbarExpandSm} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandMd} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandLg} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXl} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${vaporScope}${navbarExpandXxl} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${vaporScope}${navbarExpand} ${vaporScope}${navbarNav} ${vaporScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${vaporScope}${cardHeaderTabs} ${vaporScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${vaporScope}${navLink}${navLinkDisabled}`, {
	textShadow: '0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navLink}${navLinkActive}`, {
	textShadow: '0 0 1px rgba(234, 57, 184, 0.3), 0 0 2px rgba(234, 57, 184, 0.3), 0 0 5px rgba(234, 57, 184, 0.2)',
})

globalStyle(`${vaporScope}${navTabs} ${vaporScope}${navItem}${show} ${vaporScope}${navLink}`, {
	textShadow: '0 0 1px rgba(234, 57, 184, 0.3), 0 0 2px rgba(234, 57, 184, 0.3), 0 0 5px rgba(234, 57, 184, 0.2)',
})

globalStyle(`${vaporScope}${navPills} ${vaporScope}${navLink}${navLinkActive}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${navPills} ${vaporScope}${show} > ${vaporScope}${navLink}`, {
	boxShadow: '0 0 2px rgba(234, 57, 184, 0.9), 0 0 4px rgba(234, 57, 184, 0.4), 0 0 1rem rgba(234, 57, 184, 0.3), 0 0 4rem rgba(234, 57, 184, 0.1)',
})

globalStyle(`${vaporScope}${navUnderline} ${vaporScope}${navLink}${navLinkActive}`, {
	textShadow: '0 0 1px rgba(234, 57, 184, 0.3), 0 0 2px rgba(234, 57, 184, 0.3), 0 0 5px rgba(234, 57, 184, 0.2)',
})
