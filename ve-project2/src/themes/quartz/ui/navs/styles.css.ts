import { globalStyle } from '@vanilla-extract/css'
import { quartzScope } from '../../scope.css'

import {
	varBsBorderColor,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsSecondaryBg,
} from '../../../../theme-contract/_vars.css'
import {
	varBsBtnActiveBg,
	varBsBtnActiveBorderColor,
	varBsBtnActiveColor,
	varBsBtnFocusBoxShadow,
} from '../../../../theme-contract/ui/buttons/_vars.css'
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

import { link } from '../../../../theme-contract/contents/basic/contract.css'

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
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'
import { cardHeaderTabs } from '../../../../theme-contract/ui/card-tabs/contract.css'
import { collapse, navbarExpandLg, navbarNav } from '../../../../theme-contract/ui/navbar/contract.css'
import {
	fade,
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
import {
	offcanvas,
	offcanvasBackdrop,
	offcanvasLg,
	offcanvasMd,
	offcanvasSm,
	offcanvasXl,
	offcanvasXxl,
} from '../../../../theme-contract/ui/offcanvas/contract.css'

globalStyle(`${quartzScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${quartzScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${quartzScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${quartzScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${quartzScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${quartzScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: 'rgba(255, 255, 255, 0.7)',
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${quartzScope}${navLink}`, {
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

globalStyle(`${quartzScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${quartzScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${quartzScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${quartzScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(232, 50, 131, 0.25)',
})

globalStyle(`${quartzScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${quartzScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${quartzScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: '0',
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: '0',
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: '#343a40',
		[varBsNavTabsLinkActiveBg]: '#fff',
		[varBsNavTabsLinkActiveBorderColor]: '#dee2e6 #dee2e6 #fff',
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${quartzScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: '50rem',
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#e83283',
	},
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${show} > ${quartzScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${quartzScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: '#fff',
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${quartzScope}${navUnderline} ${quartzScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${quartzScope}${navUnderline} ${quartzScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${quartzScope}${navUnderline} ${quartzScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${quartzScope}${navUnderline} ${quartzScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${quartzScope}${navUnderline} ${quartzScope}${show} > ${quartzScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${quartzScope}${navFill} > ${quartzScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${quartzScope}${navFill} ${quartzScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${quartzScope}${navJustified} > ${quartzScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${quartzScope}${navJustified} ${quartzScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${quartzScope}${navFill} ${quartzScope}${navItem} ${quartzScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${navJustified} ${quartzScope}${navItem} ${quartzScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${quartzScope}${tabContent} > ${quartzScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${quartzScope}${navbarNav} ${quartzScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${quartzScope}${navbarNav} ${quartzScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${quartzScope}${navbarExpandSm} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandMd} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandLg} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXl} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${quartzScope}${navbarExpandXxl} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${quartzScope}${navbarExpand} ${quartzScope}${navbarNav} ${quartzScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${quartzScope}${cardHeaderTabs} ${quartzScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${quartzScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${quartzScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${quartzScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${quartzScope}${offcanvasBackdrop}${show}`, {
	opacity: '0.5',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}`, {
	transition: 'none',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}:hover`, {
	color: '#fff',
	isolation: 'auto',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}:focus`, {
	color: '#fff',
	isolation: 'auto',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}`, {
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navLink}${navLinkDisabled}`, {
	backgroundColor: 'rgba(0, 0, 0, 0.2)',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}:first-child > ${quartzScope}${navLink}`, {
	borderRadius: '0.5rem 0 0 0.5rem',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}:last-child > ${quartzScope}${navLink}`, {
	borderRadius: '0 0.5rem 0.5rem 0',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem} ${quartzScope}${navLink}${navLinkActive}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, white, rgba(255, 255, 255, 0.9) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	borderRadius: '0.5rem',
	transform: 'scale(1.1)',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink}`, {
	border: 'none',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, white, rgba(255, 255, 255, 0.9) 70%)',
	WebkitBackdropFilter: 'blur(5px)',
	backdropFilter: 'blur(5px)',
	borderRadius: '0.5rem',
	transform: 'scale(1.1)',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem} ${quartzScope}${navLink}${navLinkActive} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink} ${quartzScope}${link}`, {
	color: '#fff',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem} ${quartzScope}${navLink}${navLinkActive}:hover`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem} ${quartzScope}${navLink}${navLinkActive}:focus`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink}:hover`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${navTabs} ${quartzScope}${navItem}${show} ${quartzScope}${navLink}:focus`, {
	color: '#343a40',
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${navLink}`, {
	transition: 'none',
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${navLink}:hover`, {
	color: '#fff',
	isolation: 'auto',
})

globalStyle(`${quartzScope}${navPills} ${quartzScope}${navLink}:focus`, {
	color: '#fff',
	isolation: 'auto',
})
