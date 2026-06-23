import { globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
	varBsGradient,
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

globalStyle(`${materiaScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: '#bbb',
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${materiaScope}${navLink}`, {
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

globalStyle(`${materiaScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${materiaScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${materiaScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${materiaScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(33, 150, 243, 0.25)',
})

globalStyle(`${materiaScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${materiaScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${materiaScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: 'transparent',
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} transparent`,
		[varBsNavTabsLinkActiveColor]: varBsEmphasisColor,
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navItem}${show} ${materiaScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${materiaScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#2196f3',
	},
})

globalStyle(`${materiaScope}${navPills} ${materiaScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${materiaScope}${navPills} ${materiaScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${navPills} ${materiaScope}${show} > ${materiaScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${materiaScope}${navUnderline} ${materiaScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${materiaScope}${navUnderline} ${materiaScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${materiaScope}${navUnderline} ${materiaScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${materiaScope}${navUnderline} ${materiaScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${materiaScope}${navUnderline} ${materiaScope}${show} > ${materiaScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${materiaScope}${navFill} > ${materiaScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${materiaScope}${navFill} ${materiaScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${materiaScope}${navJustified} > ${materiaScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${materiaScope}${navJustified} ${materiaScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${materiaScope}${navFill} ${materiaScope}${navItem} ${materiaScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${navJustified} ${materiaScope}${navItem} ${materiaScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${materiaScope}${tabContent} > ${materiaScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${materiaScope}${navbarNav} ${materiaScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${materiaScope}${navbarNav} ${materiaScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${materiaScope}${navbarExpandSm} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandMd} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandLg} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXl} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${materiaScope}${navbarExpandXxl} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${materiaScope}${navbarExpand} ${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${materiaScope}${cardHeaderTabs} ${materiaScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${materiaScope}${navbarNav} ${materiaScope}${navLink}`, {
	paddingTop: '0.9rem',
	paddingBottom: '0.9rem',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navItem} + ${materiaScope}${navItem}`, {
	marginLeft: '0',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}`, {
	marginRight: '0',
	color: '#444',
	backgroundColor: 'transparent',
	border: 'none',
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'color 0.2s, box-shadow 0.2s',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}:focus`, {
	marginRight: '0',
	color: '#444',
	backgroundColor: 'transparent',
	border: 'none',
	boxShadow: 'inset 0 -1px 0 #ddd',
	transition: 'color 0.2s, box-shadow 0.2s',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}:hover`, {
	color: '#2196f3',
	backgroundColor: 'transparent',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}:focus:hover`, {
	color: '#2196f3',
	backgroundColor: 'transparent',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${navLinkActive}`, {
	color: '#2196f3',
	border: 'none',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${navLinkActive}:focus`, {
	color: '#2196f3',
	border: 'none',
	boxShadow: 'inset 0 -2px 0 #2196f3',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${navLinkActive}:hover`, {
	color: '#2196f3',
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${navLinkActive}:focus:hover`, {
	color: '#2196f3',
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs} ${materiaScope}${navLink}${navLinkDisabled}`, {
	boxShadow: 'inset 0 -1px 0 #ddd',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}`, {
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}:hover`, {
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}:focus`, {
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}${navLinkActive}`, {
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}${navLinkActive}:hover`, {
	border: 'none',
})

globalStyle(`${materiaScope}${navTabs}${navJustified} ${materiaScope}${navLink}${navLinkActive}:focus`, {
	border: 'none',
})
