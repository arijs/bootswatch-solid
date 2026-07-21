import { globalStyle } from '@vanilla-extract/css'
import { unitedScope } from '../../scope.css'

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

globalStyle(`${unitedScope}${nav}`, {
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

globalStyle(`${unitedScope}${navLink}`, {
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

globalStyle(`${unitedScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${unitedScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${unitedScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${unitedScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(233, 84, 32, 0.25)',
})

globalStyle(`${unitedScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${unitedScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${unitedScope}${navTabs}`, {
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

globalStyle(`${unitedScope}${navTabs} ${unitedScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${unitedScope}${navTabs} ${unitedScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${unitedScope}${navTabs} ${unitedScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${unitedScope}${navTabs} ${unitedScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${unitedScope}${navTabs} ${unitedScope}${navItem}${show} ${unitedScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${unitedScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#e95420',
	},
})

globalStyle(`${unitedScope}${navPills} ${unitedScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${unitedScope}${navPills} ${unitedScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${unitedScope}${navPills} ${unitedScope}${show} > ${unitedScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${unitedScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${unitedScope}${navUnderline} ${unitedScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${unitedScope}${navUnderline} ${unitedScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${unitedScope}${navUnderline} ${unitedScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${unitedScope}${navUnderline} ${unitedScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${unitedScope}${navUnderline} ${unitedScope}${show} > ${unitedScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${unitedScope}${navFill} > ${unitedScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${unitedScope}${navFill} ${unitedScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${unitedScope}${navJustified} > ${unitedScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${unitedScope}${navJustified} ${unitedScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${unitedScope}${navFill} ${unitedScope}${navItem} ${unitedScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${unitedScope}${navJustified} ${unitedScope}${navItem} ${unitedScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${unitedScope}${tabContent} > ${unitedScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${unitedScope}${tabContent} > ${unitedScope}${active}`, {
	display: 'block',
})

globalStyle(`${unitedScope}${navbarNav} ${unitedScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${unitedScope}${navbarNav} ${unitedScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${unitedScope}${navbarExpandSm} ${unitedScope}${navbarNav} ${unitedScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${unitedScope}${navbarExpandMd} ${unitedScope}${navbarNav} ${unitedScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${unitedScope}${navbarExpandLg} ${unitedScope}${navbarNav} ${unitedScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${unitedScope}${navbarExpandXl} ${unitedScope}${navbarNav} ${unitedScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${unitedScope}${navbarExpandXxl} ${unitedScope}${navbarNav} ${unitedScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${unitedScope}${navbarExpand} ${unitedScope}${navbarNav} ${unitedScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${unitedScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: '0',
})

globalStyle(`${unitedScope}${cardHeaderTabs} ${unitedScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})
