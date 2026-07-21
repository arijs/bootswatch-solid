import { globalStyle } from '@vanilla-extract/css'
import { zephyrScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
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
	navbarDark,
	navbarExpand,
	navbarExpandMd,
	navbarExpandSm,
	navbarExpandXl,
	navbarExpandXxl,
	navbarLight,
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

globalStyle(`${zephyrScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: '#495057',
		[varBsNavLinkHoverColor]: '#495057',
		[varBsNavLinkDisabledColor]: varBsSecondaryColor,
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${zephyrScope}${navLink}`, {
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

globalStyle(`${zephyrScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${zephyrScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${zephyrScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${zephyrScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(52, 89, 230, 0.25)',
})

globalStyle(`${zephyrScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${zephyrScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${zephyrScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: '0',
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: '#3459e6',
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${zephyrScope}${navTabs} ${zephyrScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${zephyrScope}${navTabs} ${zephyrScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${zephyrScope}${navTabs} ${zephyrScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${zephyrScope}${navTabs} ${zephyrScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${zephyrScope}${navTabs} ${zephyrScope}${navItem}${show} ${zephyrScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${zephyrScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#3459e6',
	},
})

globalStyle(`${zephyrScope}${navPills} ${zephyrScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${zephyrScope}${navPills} ${zephyrScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${zephyrScope}${navPills} ${zephyrScope}${show} > ${zephyrScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${zephyrScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${zephyrScope}${navUnderline} ${zephyrScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${zephyrScope}${navUnderline} ${zephyrScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${zephyrScope}${navUnderline} ${zephyrScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${zephyrScope}${navUnderline} ${zephyrScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${zephyrScope}${navUnderline} ${zephyrScope}${show} > ${zephyrScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${zephyrScope}${navFill} > ${zephyrScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${zephyrScope}${navFill} ${zephyrScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${zephyrScope}${navJustified} > ${zephyrScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${zephyrScope}${navJustified} ${zephyrScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${zephyrScope}${navFill} ${zephyrScope}${navItem} ${zephyrScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${zephyrScope}${navJustified} ${zephyrScope}${navItem} ${zephyrScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${zephyrScope}${tabContent} > ${zephyrScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${zephyrScope}${tabContent} > ${zephyrScope}${active}`, {
	display: 'block',
})

globalStyle(`${zephyrScope}${navbarNav} ${zephyrScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${zephyrScope}${navbarNav} ${zephyrScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${zephyrScope}${navbarExpandSm} ${zephyrScope}${navbarNav} ${zephyrScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${zephyrScope}${navbarExpandMd} ${zephyrScope}${navbarNav} ${zephyrScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${zephyrScope}${navbarExpandLg} ${zephyrScope}${navbarNav} ${zephyrScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${zephyrScope}${navbarExpandXl} ${zephyrScope}${navbarNav} ${zephyrScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${zephyrScope}${navbarExpandXxl} ${zephyrScope}${navbarNav} ${zephyrScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${zephyrScope}${navbarExpand} ${zephyrScope}${navbarNav} ${zephyrScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${zephyrScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: '0',
})

globalStyle(`${zephyrScope}${cardHeaderTabs} ${zephyrScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${zephyrScope}${navbar} ${zephyrScope}${navItem}`, {
	marginRight: '0.5rem',
	marginLeft: '0.5rem',
})

globalStyle(`${zephyrScope}${navbar} ${zephyrScope}${navbarNav} ${zephyrScope}${navLink}`, {
	borderRadius: '0.375rem',
})

globalStyle(`${zephyrScope}${navbarDark} ${zephyrScope}${navbarNav} ${zephyrScope}${navLink}:hover`, {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
})

globalStyle(`${zephyrScope}${navbarDark} ${zephyrScope}${navbarNav} ${zephyrScope}${navLink}${navLinkActive}`, {
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
})

globalStyle(`${zephyrScope}${navbarLight} ${zephyrScope}${navbarNav} ${zephyrScope}${navLink}:hover`, {
	backgroundColor: 'rgba(0, 0, 0, 0.03)',
})

globalStyle(`${zephyrScope}${navbarLight} ${zephyrScope}${navbarNav} ${zephyrScope}${navLink}${navLinkActive}`, {
	backgroundColor: 'rgba(0, 0, 0, 0.05)',
})

globalStyle(`${zephyrScope}${navTabs}`, {
	fontWeight: '500',
})

globalStyle(`${zephyrScope}${navTabs} ${zephyrScope}${navLink}`, {
	paddingTop: '1rem',
	paddingBottom: '1rem',
	borderWidth: '0 0 1px',
})

globalStyle(`${zephyrScope}${navTabs} ${zephyrScope}${navLink}${navLinkActive}`, {
	boxShadow: 'inset 0 -2px 0 #3459e6',
})

globalStyle(`${zephyrScope}${navTabs} ${zephyrScope}${navItem}${show} ${zephyrScope}${navLink}`, {
	boxShadow: 'inset 0 -2px 0 #3459e6',
})

globalStyle(`${zephyrScope}${navPills}`, {
	fontWeight: '500',
})
