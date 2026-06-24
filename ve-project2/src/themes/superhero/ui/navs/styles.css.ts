import { globalStyle } from '@vanilla-extract/css'
import { superheroScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsLinkColor,
	varBsLinkHoverColor,
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

globalStyle(`${superheroScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: 'rgba(255, 255, 255, 0.4)',
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${superheroScope}${navLink}`, {
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

globalStyle(`${superheroScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${superheroScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${superheroScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${superheroScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(223, 105, 25, 0.25)',
})

globalStyle(`${superheroScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${superheroScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${superheroScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: '#4e5d6c',
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: '#4e5d6c',
		[varBsNavTabsLinkActiveColor]: '#ebebeb',
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: '#4e5d6c',
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${superheroScope}${navTabs} ${superheroScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${superheroScope}${navTabs} ${superheroScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${superheroScope}${navTabs} ${superheroScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${superheroScope}${navTabs} ${superheroScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${superheroScope}${navTabs} ${superheroScope}${navItem}${show} ${superheroScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${superheroScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#df6919',
	},
})

globalStyle(`${superheroScope}${navPills} ${superheroScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${superheroScope}${navPills} ${superheroScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${superheroScope}${navPills} ${superheroScope}${show} > ${superheroScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${superheroScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: '#fff',
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${superheroScope}${navUnderline} ${superheroScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${superheroScope}${navUnderline} ${superheroScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${superheroScope}${navUnderline} ${superheroScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${superheroScope}${navUnderline} ${superheroScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${superheroScope}${navUnderline} ${superheroScope}${show} > ${superheroScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${superheroScope}${navFill} > ${superheroScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${superheroScope}${navFill} ${superheroScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${superheroScope}${navJustified} > ${superheroScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${superheroScope}${navJustified} ${superheroScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${superheroScope}${navFill} ${superheroScope}${navItem} ${superheroScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${superheroScope}${navJustified} ${superheroScope}${navItem} ${superheroScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${superheroScope}${tabContent} > ${superheroScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${superheroScope}${tabContent} > ${superheroScope}${active}`, {
	display: 'block',
})

globalStyle(`${superheroScope}${navbarNav} ${superheroScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${superheroScope}${navbarNav} ${superheroScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${superheroScope}${navbarExpandSm} ${superheroScope}${navbarNav} ${superheroScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${superheroScope}${navbarExpandMd} ${superheroScope}${navbarNav} ${superheroScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${superheroScope}${navbarExpandLg} ${superheroScope}${navbarNav} ${superheroScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${superheroScope}${navbarExpandXl} ${superheroScope}${navbarNav} ${superheroScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${superheroScope}${navbarExpandXxl} ${superheroScope}${navbarNav} ${superheroScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${superheroScope}${navbarExpand} ${superheroScope}${navbarNav} ${superheroScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${superheroScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: '0',
})

globalStyle(`${superheroScope}${cardHeaderTabs} ${superheroScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${superheroScope}${navTabs} ${superheroScope}${navLink}`, {
	color: '#ebebeb',
})

globalStyle(`${superheroScope}${navTabs} ${superheroScope}${navLink}:hover`, {
	color: '#ebebeb',
})

globalStyle(`${superheroScope}${navPills} ${superheroScope}${navLink}`, {
	color: '#ebebeb',
})

globalStyle(`${superheroScope}${navPills} ${superheroScope}${navLink}:hover`, {
	color: '#ebebeb',
})

globalStyle(`${superheroScope}${navTabs} ${superheroScope}${navLink}${navLinkDisabled}`, {
	color: 'rgba(255, 255, 255, 0.4)',
})

globalStyle(`${superheroScope}${navPills} ${superheroScope}${navLink}${navLinkDisabled}`, {
	color: 'rgba(255, 255, 255, 0.4)',
})
