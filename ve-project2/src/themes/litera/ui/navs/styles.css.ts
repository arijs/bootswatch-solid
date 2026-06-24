import { globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsSecondaryBg,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import { varBsCardBg, varBsCardCapPaddingX, varBsCardCapPaddingY } from '../../../../theme-contract/ui/card/_vars.css'
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
	active,
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

globalStyle(`${literaScope}${nav}`, {
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

globalStyle(`${literaScope}${navLink}`, {
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

globalStyle(`${literaScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${literaScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${literaScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${literaScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(69, 130, 236, 0.25)',
})

globalStyle(`${literaScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${literaScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${literaScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: varBsEmphasisColor,
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${literaScope}${navTabs} ${literaScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${literaScope}${navTabs} ${literaScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${literaScope}${navTabs} ${literaScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${literaScope}${navTabs} ${literaScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${literaScope}${navTabs} ${literaScope}${navItem}${show} ${literaScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${literaScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#4582ec',
	},
})

globalStyle(`${literaScope}${navPills} ${literaScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${literaScope}${navPills} ${literaScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${literaScope}${navPills} ${literaScope}${show} > ${literaScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${literaScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${literaScope}${navUnderline} ${literaScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${literaScope}${navUnderline} ${literaScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${literaScope}${navUnderline} ${literaScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${literaScope}${navUnderline} ${literaScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${literaScope}${navUnderline} ${literaScope}${show} > ${literaScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${literaScope}${navFill} > ${literaScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${literaScope}${navFill} ${literaScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${literaScope}${navJustified} > ${literaScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${literaScope}${navJustified} ${literaScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${literaScope}${navFill} ${literaScope}${navItem} ${literaScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${literaScope}${navJustified} ${literaScope}${navItem} ${literaScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${literaScope}${tabContent} > ${literaScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${literaScope}${tabContent} > ${literaScope}${active}`, {
	display: 'block',
})

globalStyle(`${literaScope}${navbarNav} ${literaScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${literaScope}${navbarNav} ${literaScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${literaScope}${navbarExpandSm} ${literaScope}${navbarNav} ${literaScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${literaScope}${navbarExpandMd} ${literaScope}${navbarNav} ${literaScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${literaScope}${navbarExpandLg} ${literaScope}${navbarNav} ${literaScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${literaScope}${navbarExpandXl} ${literaScope}${navbarNav} ${literaScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${literaScope}${navbarExpandXxl} ${literaScope}${navbarNav} ${literaScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${literaScope}${navbarExpand} ${literaScope}${navbarNav} ${literaScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${literaScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: '0',
})

globalStyle(`${literaScope}${cardHeaderTabs} ${literaScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${literaScope}${nav}`, {
	fontSize: '0.9625rem',
})
