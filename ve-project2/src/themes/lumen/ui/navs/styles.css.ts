import { globalStyle } from '@vanilla-extract/css'
import { lumenScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsSecondaryBg,
	varBsSecondaryColor,
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

import { elLi } from '../../../../theme-contract/global-elements/contract.css'

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

globalStyle(`${lumenScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${lumenScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${lumenScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${lumenScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${lumenScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${lumenScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${lumenScope}${nav}`, {
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

globalStyle(`${lumenScope}${navLink}`, {
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

globalStyle(`${lumenScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${lumenScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${lumenScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${lumenScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(21, 140, 186, 0.25)',
})

globalStyle(`${lumenScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${lumenScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${lumenScope}${navTabs}`, {
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

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navItem}${show} ${lumenScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${lumenScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#158cba',
	},
})

globalStyle(`${lumenScope}${navPills} ${lumenScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${lumenScope}${navPills} ${lumenScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${lumenScope}${navPills} ${lumenScope}${show} > ${lumenScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${lumenScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${lumenScope}${navUnderline} ${lumenScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${lumenScope}${navUnderline} ${lumenScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${lumenScope}${navUnderline} ${lumenScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${lumenScope}${navUnderline} ${lumenScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${lumenScope}${navUnderline} ${lumenScope}${show} > ${lumenScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${lumenScope}${navFill} > ${lumenScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${lumenScope}${navFill} ${lumenScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${lumenScope}${navJustified} > ${lumenScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${lumenScope}${navJustified} ${lumenScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${lumenScope}${navFill} ${lumenScope}${navItem} ${lumenScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${lumenScope}${navJustified} ${lumenScope}${navItem} ${lumenScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${lumenScope}${tabContent} > ${lumenScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${lumenScope}${navbarNav} ${lumenScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${lumenScope}${navbarNav} ${lumenScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${lumenScope}${navbarExpandSm} ${lumenScope}${navbarNav} ${lumenScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${lumenScope}${navbarExpandMd} ${lumenScope}${navbarNav} ${lumenScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${lumenScope}${navbarExpandLg} ${lumenScope}${navbarNav} ${lumenScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${lumenScope}${navbarExpandXl} ${lumenScope}${navbarNav} ${lumenScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${lumenScope}${navbarExpandXxl} ${lumenScope}${navbarNav} ${lumenScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${lumenScope}${navbarExpand} ${lumenScope}${navbarNav} ${lumenScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${lumenScope}${cardHeaderTabs} ${lumenScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${lumenScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${lumenScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${lumenScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${lumenScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${lumenScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${lumenScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${lumenScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${lumenScope}${offcanvasBackdrop}${show}`, {
	opacity: '0.5',
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}`, {
	color: varBsBodyColor,
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}`, {
	marginTop: '6px',
	borderColor: varBsBorderColor,
	transition: 'padding-bottom 0.2s ease-in-out, margin-top 0.2s ease-in-out, border-bottom 0.2s ease-in-out',
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}${navLinkDisabled}`, {
	marginTop: '6px',
	borderColor: varBsBorderColor,
	transition: 'padding-bottom 0.2s ease-in-out, margin-top 0.2s ease-in-out, border-bottom 0.2s ease-in-out',
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}${navLinkDisabled}:hover`, {
	marginTop: '6px',
	borderColor: varBsBorderColor,
	transition: 'padding-bottom 0.2s ease-in-out, margin-top 0.2s ease-in-out, border-bottom 0.2s ease-in-out',
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}${navLinkDisabled}:focus`, {
	marginTop: '6px',
	borderColor: varBsBorderColor,
	transition: 'padding-bottom 0.2s ease-in-out, margin-top 0.2s ease-in-out, border-bottom 0.2s ease-in-out',
})

globalStyle(`${lumenScope}${navTabs} ${lumenScope}${navLink}${navLinkActive}`, {
	paddingBottom: 'calc(0.5rem + 6px)',
	marginTop: '0',
	color: varBsBodyColor,
	borderBottomColor: 'transparent',
})

globalStyle(`${lumenScope}${navTabs}${navJustified} > ${lumenScope}${elLi}`, {
	verticalAlign: 'bottom',
})
