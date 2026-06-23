import { globalStyle } from '@vanilla-extract/css'
import { sandstoneScope } from '../../scope.css'

import {
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
	varBsLinkColor,
	varBsLinkHoverColor,
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
import { navbar, navbarExpandLg, navbarNav } from '../../../../theme-contract/ui/navbar/contract.css'
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

globalStyle(`${sandstoneScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '0.9rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: '#dfd7ca',
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${sandstoneScope}${navLink}`, {
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

globalStyle(`${sandstoneScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${sandstoneScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${sandstoneScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${sandstoneScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(50, 93, 136, 0.25)',
})

globalStyle(`${sandstoneScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${sandstoneScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${sandstoneScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: '#dfd7ca',
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: '#dfd7ca',
		[varBsNavTabsLinkActiveColor]: varBsEmphasisColor,
		[varBsNavTabsLinkActiveBg]: '#fff',
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} #fff`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navItem}${show} ${sandstoneScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${sandstoneScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#8e8c84',
		[varBsNavPillsLinkActiveBg]: '#f8f5f0',
	},
})

globalStyle(`${sandstoneScope}${navPills} ${sandstoneScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${sandstoneScope}${navPills} ${sandstoneScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${sandstoneScope}${navPills} ${sandstoneScope}${show} > ${sandstoneScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${sandstoneScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${sandstoneScope}${navUnderline} ${sandstoneScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${sandstoneScope}${navUnderline} ${sandstoneScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${sandstoneScope}${navUnderline} ${sandstoneScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${sandstoneScope}${navUnderline} ${sandstoneScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${sandstoneScope}${navUnderline} ${sandstoneScope}${show} > ${sandstoneScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${sandstoneScope}${navFill} > ${sandstoneScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${sandstoneScope}${navFill} ${sandstoneScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${sandstoneScope}${navJustified} > ${sandstoneScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${sandstoneScope}${navJustified} ${sandstoneScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${sandstoneScope}${navFill} ${sandstoneScope}${navItem} ${sandstoneScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${sandstoneScope}${navJustified} ${sandstoneScope}${navItem} ${sandstoneScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${sandstoneScope}${tabContent} > ${sandstoneScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${sandstoneScope}${navbarNav} ${sandstoneScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${sandstoneScope}${navbarNav} ${sandstoneScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${sandstoneScope}${navbarExpandSm} ${sandstoneScope}${navbarNav} ${sandstoneScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${sandstoneScope}${navbarExpandMd} ${sandstoneScope}${navbarNav} ${sandstoneScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${sandstoneScope}${navbarExpandLg} ${sandstoneScope}${navbarNav} ${sandstoneScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${sandstoneScope}${navbarExpandXl} ${sandstoneScope}${navbarNav} ${sandstoneScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${sandstoneScope}${navbarExpandXxl} ${sandstoneScope}${navbarNav} ${sandstoneScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${sandstoneScope}${navbarExpand} ${sandstoneScope}${navbarNav} ${sandstoneScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${sandstoneScope}${cardHeaderTabs} ${sandstoneScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${sandstoneScope}${navPills} ${sandstoneScope}${navLink}`, {
	fontSize: '13px',
	fontWeight: '500',
	lineHeight: '22px',
	textTransform: 'uppercase',
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}`, {
	fontSize: '13px',
	fontWeight: '500',
	lineHeight: '22px',
	textTransform: 'uppercase',
})

globalStyle(`${sandstoneScope}${navbar} ${sandstoneScope}${navLink}`, {
	fontSize: '13px',
	fontWeight: '500',
	lineHeight: '22px',
	textTransform: 'uppercase',
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}`, {
	backgroundColor: '#f8f5f0',
	borderColor: '#dfd7ca',
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}`, {
	color: '#8e8c84',
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}:hover`, {
	color: '#8e8c84',
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}:focus`, {
	color: '#8e8c84',
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}${navLinkDisabled}`, {
	color: '#dfd7ca',
	backgroundColor: '#f8f5f0',
	borderColor: '#dfd7ca',
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}${navLinkDisabled}:hover`, {
	color: '#dfd7ca',
	backgroundColor: '#f8f5f0',
	borderColor: '#dfd7ca',
})

globalStyle(`${sandstoneScope}${navTabs} ${sandstoneScope}${navLink}${navLinkDisabled}:focus`, {
	color: '#dfd7ca',
	backgroundColor: '#f8f5f0',
	borderColor: '#dfd7ca',
})

globalStyle(`${sandstoneScope}${navPills} ${sandstoneScope}${navLink}`, {
	color: '#8e8c84',
	border: '1px solid transparent',
})

globalStyle(`${sandstoneScope}${navPills} ${sandstoneScope}${navLink}${navLinkActive}`, {
	backgroundColor: '#f8f5f0',
	borderColor: '#dfd7ca',
})

globalStyle(`${sandstoneScope}${navPills} ${sandstoneScope}${navLink}:hover`, {
	backgroundColor: '#f8f5f0',
	borderColor: '#dfd7ca',
})

globalStyle(`${sandstoneScope}${navPills} ${sandstoneScope}${navLink}:focus`, {
	backgroundColor: '#f8f5f0',
	borderColor: '#dfd7ca',
})

globalStyle(`${sandstoneScope}${navPills} ${sandstoneScope}${navLink}${navLinkDisabled}`, {
	color: '#dfd7ca',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
})

globalStyle(`${sandstoneScope}${navPills} ${sandstoneScope}${navLink}${navLinkDisabled}:hover`, {
	color: '#dfd7ca',
	backgroundColor: 'transparent',
	borderColor: 'transparent',
})
