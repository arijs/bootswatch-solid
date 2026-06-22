import { globalStyle } from '@vanilla-extract/css'
import { morphScope } from '../../scope.css'

import {
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
	varBsSecondaryBg,
} from '../../../../theme-contract/_vars.css'
import {
	varBsBtnActiveBg,
	varBsBtnActiveBorderColor,
	varBsBtnActiveBoxShadow,
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

globalStyle(`${morphScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
	boxShadow: varBsBtnActiveBoxShadow,
})

globalStyle(`${morphScope}${btn}${show}:focus-visible`, {
	boxShadow: `${varBsBtnActiveBoxShadow}, ${varBsBtnFocusBoxShadow}`,
})

globalStyle(`${morphScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${morphScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${morphScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${morphScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '1rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: '#7b8ab8',
		[varBsNavLinkHoverColor]: '#7b8ab8',
		[varBsNavLinkDisabledColor]: '#adb6d3',
	},
	display: 'flex',
	flexWrap: 'wrap',
	paddingLeft: '0',
	marginBottom: '0',
	listStyle: 'none',
})

globalStyle(`${morphScope}${navLink}`, {
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

globalStyle(`${morphScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${morphScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${morphScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${morphScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(55, 141, 252, 0.25)',
})

globalStyle(`${morphScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${morphScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${morphScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: '0',
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: '#fff',
		[varBsNavTabsLinkActiveBg]: '#378dfc',
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} #378dfc`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${morphScope}${navTabs} ${morphScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${morphScope}${navTabs} ${morphScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${morphScope}${navTabs} ${morphScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${morphScope}${navTabs} ${morphScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${morphScope}${navTabs} ${morphScope}${navItem}${show} ${morphScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${morphScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#378dfc',
	},
})

globalStyle(`${morphScope}${navPills} ${morphScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${morphScope}${navPills} ${morphScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${morphScope}${navPills} ${morphScope}${show} > ${morphScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${morphScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${morphScope}${navUnderline} ${morphScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${morphScope}${navUnderline} ${morphScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${morphScope}${navUnderline} ${morphScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${morphScope}${navUnderline} ${morphScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${morphScope}${navUnderline} ${morphScope}${show} > ${morphScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${morphScope}${navFill} > ${morphScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${morphScope}${navFill} ${morphScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${morphScope}${navJustified} > ${morphScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${morphScope}${navJustified} ${morphScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${morphScope}${navFill} ${morphScope}${navItem} ${morphScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${morphScope}${navJustified} ${morphScope}${navItem} ${morphScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${morphScope}${tabContent} > ${morphScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${morphScope}${navbarNav} ${morphScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${morphScope}${navbarNav} ${morphScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${morphScope}${navbarExpandSm} ${morphScope}${navbarNav} ${morphScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${morphScope}${navbarExpandMd} ${morphScope}${navbarNav} ${morphScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${morphScope}${navbarExpandLg} ${morphScope}${navbarNav} ${morphScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${morphScope}${navbarExpandXl} ${morphScope}${navbarNav} ${morphScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${morphScope}${navbarExpandXxl} ${morphScope}${navbarNav} ${morphScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${morphScope}${navbarExpand} ${morphScope}${navbarNav} ${morphScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${morphScope}${cardHeaderTabs} ${morphScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${morphScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${morphScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${morphScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${morphScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${morphScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${morphScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${morphScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${morphScope}${offcanvasBackdrop}${show}`, {
	opacity: '0.5',
})

globalStyle(`${morphScope}${navTabs}`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	borderRadius: '0.375rem',
})

globalStyle(`${morphScope}${navTabs} ${morphScope}${navItem}`, {
	boxShadow: '1px 0 rgba(55, 94, 148, 0.1)',
})

globalStyle(`${morphScope}${navTabs} ${morphScope}${navItem}:first-child ${morphScope}${navLink}`, {
	borderTopLeftRadius: '0.375rem',
	borderBottomLeftRadius: '0.375rem',
})

globalStyle(`${morphScope}${navTabs} ${morphScope}${navItem}:last-child ${morphScope}${navLink}`, {
	borderTopRightRadius: '0.375rem',
	borderBottomRightRadius: '0.375rem',
})

globalStyle(`${morphScope}${navTabs} ${morphScope}${navLink}${navLinkActive}`, {
	boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${morphScope}${navTabs} ${morphScope}${navItem}${show} ${morphScope}${navLink}`, {
	boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${morphScope}${navPills}`, {
	backgroundColor: '#d9e3f1',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(55, 94, 148, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.4)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	padding: '1rem',
	borderRadius: '0.375rem',
})

globalStyle(`${morphScope}${navPills} ${morphScope}${navLink}${navLinkActive}`, {
	boxShadow: 'inset 0 3px 6px rgba(0, 0, 0, 0.2)',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${navTabs}`, {
	backgroundColor: '#212529',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.05)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	color: 'rgba(255, 255, 255, 0.75)',
})

globalStyle(`${morphScope}[data-bs-theme=dark] ${morphScope}${navPills}`, {
	backgroundColor: '#212529',
	border: 'none',
	boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.05)',
	transition: 'background-color 0.15s ease-in-out, border 0.15s ease-in-out, box-shadow 0.15s ease-in-out, color 0.15s ease-in-out',
	color: 'rgba(255, 255, 255, 0.75)',
})
