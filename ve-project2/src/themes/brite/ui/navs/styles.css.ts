import { globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
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

globalStyle(`${briteScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: '#000',
		[varBsNavLinkHoverColor]: '#000',
		[varBsNavLinkDisabledColor]: varBsSecondaryColor,
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${briteScope}${navLink}`, {
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

globalStyle(`${briteScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${briteScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${briteScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${briteScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 1px #000',
})

globalStyle(`${briteScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${briteScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${briteScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: 'transparent',
		[varBsNavTabsLinkActiveColor]: varBsEmphasisColor,
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${briteScope}${navTabs} ${briteScope}${navItem}${show} ${briteScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${briteScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#000',
		[varBsNavPillsLinkActiveBg]: '#a2e436',
	},
})

globalStyle(`${briteScope}${navPills} ${briteScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${briteScope}${navPills} ${briteScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${briteScope}${navPills} ${briteScope}${show} > ${briteScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${briteScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${briteScope}${navUnderline} ${briteScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${briteScope}${navUnderline} ${briteScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${briteScope}${navUnderline} ${briteScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${briteScope}${navUnderline} ${briteScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${briteScope}${navUnderline} ${briteScope}${show} > ${briteScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${briteScope}${navFill} > ${briteScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${briteScope}${navFill} ${briteScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${briteScope}${navJustified} > ${briteScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${briteScope}${navJustified} ${briteScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${briteScope}${navFill} ${briteScope}${navItem} ${briteScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${briteScope}${navJustified} ${briteScope}${navItem} ${briteScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${briteScope}${tabContent} > ${briteScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${briteScope}${tabContent} > ${briteScope}${active}`, {
	display: 'block',
})

globalStyle(`${briteScope}${navbarNav} ${briteScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${briteScope}${navbarNav} ${briteScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${briteScope}${navbarExpandSm} ${briteScope}${navbarNav} ${briteScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${briteScope}${navbarExpandMd} ${briteScope}${navbarNav} ${briteScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${briteScope}${navbarExpandLg} ${briteScope}${navbarNav} ${briteScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXl} ${briteScope}${navbarNav} ${briteScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${briteScope}${navbarExpandXxl} ${briteScope}${navbarNav} ${briteScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${briteScope}${navbarExpand} ${briteScope}${navbarNav} ${briteScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${briteScope}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: '0',
})

globalStyle(`${briteScope}${cardHeaderTabs} ${briteScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${briteScope}${nav}:not(${navTabs}, ${navPills}) ${briteScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
})

globalStyle(`${briteScope}${navTabs}`, {
	gap: '4px',
	padding: '0.4rem 0.4rem calc(0.4rem + 2px)',
	fontWeight: '500',
	border: '2px solid #000',
	borderRadius: '0.5rem',
})

globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}`, {
	borderWidth: '2px',
	borderRadius: '0.375rem',
})

globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}${navLinkActive}`, {
	border: '2px solid #000',
})

globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}:hover`, {
	border: '2px solid #000',
})

globalStyle(`${briteScope}${tabContent}`, {
	padding: '1rem',
	marginTop: '1rem',
	border: '2px solid #000',
	borderRadius: '0.5rem',
})

globalStyle(`${briteScope}${navPills}`, {
	gap: '4px',
	fontWeight: '500',
})

globalStyle(`${briteScope}${navPills} ${briteScope}${navLink}`, {
	border: '2px solid #000',
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${navTabs} ${briteScope}${navLink}`, {
	vars: {
		[varBsNavLinkColor]: '#fff',
	},
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${navPills} ${briteScope}${navLink}`, {
	vars: {
		[varBsNavLinkColor]: '#fff',
	},
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${navTabs} ${briteScope}${navLink}:hover`, {
	vars: {
		[varBsNavLinkHoverColor]: '#fff',
	},
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${navTabs} ${briteScope}${navLink}:focus`, {
	vars: {
		[varBsNavLinkHoverColor]: '#fff',
	},
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${navPills} ${briteScope}${navLink}:hover`, {
	vars: {
		[varBsNavLinkHoverColor]: '#fff',
	},
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${navPills} ${briteScope}${navLink}:focus`, {
	vars: {
		[varBsNavLinkHoverColor]: '#fff',
	},
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${nav} ${briteScope}${navLink}`, {
	vars: {
		[varBsNavLinkColor]: '#fff',
	},
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${nav} ${briteScope}${navLink}:hover`, {
	vars: {
		[varBsNavLinkHoverColor]: '#fff',
	},
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${nav} ${briteScope}${navLink}:focus`, {
	vars: {
		[varBsNavLinkHoverColor]: '#fff',
	},
})
