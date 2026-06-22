import { globalStyle } from '@vanilla-extract/css'
import { cosmoScope } from '../../scope.css'

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

globalStyle(`${cosmoScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${cosmoScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${cosmoScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${cosmoScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cosmoScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${cosmoScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${cosmoScope}${nav}`, {
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

globalStyle(`${cosmoScope}${navLink}`, {
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

globalStyle(`${cosmoScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${cosmoScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${cosmoScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${cosmoScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(39, 128, 227, 0.25)',
})

globalStyle(`${cosmoScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${cosmoScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${cosmoScope}${navTabs}`, {
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

globalStyle(`${cosmoScope}${navTabs} ${cosmoScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
})

globalStyle(`${cosmoScope}${navTabs} ${cosmoScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${cosmoScope}${navTabs} ${cosmoScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${cosmoScope}${navTabs} ${cosmoScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${cosmoScope}${navTabs} ${cosmoScope}${navItem}${show} ${cosmoScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${cosmoScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#2780e3',
	},
})

globalStyle(`${cosmoScope}${navPills} ${cosmoScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${cosmoScope}${navPills} ${cosmoScope}${show} > ${cosmoScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${cosmoScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${cosmoScope}${navUnderline} ${cosmoScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${cosmoScope}${navUnderline} ${cosmoScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${cosmoScope}${navUnderline} ${cosmoScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${cosmoScope}${navUnderline} ${cosmoScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${cosmoScope}${navUnderline} ${cosmoScope}${show} > ${cosmoScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${cosmoScope}${navFill} > ${cosmoScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${cosmoScope}${navFill} ${cosmoScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${cosmoScope}${navJustified} > ${cosmoScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${cosmoScope}${navJustified} ${cosmoScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${cosmoScope}${navFill} ${cosmoScope}${navItem} ${cosmoScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${cosmoScope}${navJustified} ${cosmoScope}${navItem} ${cosmoScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${cosmoScope}${tabContent} > ${cosmoScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${cosmoScope}${navbarNav} ${cosmoScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${cosmoScope}${navbarNav} ${cosmoScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${cosmoScope}${navbarExpandSm} ${cosmoScope}${navbarNav} ${cosmoScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${cosmoScope}${navbarExpandMd} ${cosmoScope}${navbarNav} ${cosmoScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${cosmoScope}${navbarExpandLg} ${cosmoScope}${navbarNav} ${cosmoScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${cosmoScope}${navbarExpandXl} ${cosmoScope}${navbarNav} ${cosmoScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${cosmoScope}${navbarExpandXxl} ${cosmoScope}${navbarNav} ${cosmoScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${cosmoScope}${navbarExpand} ${cosmoScope}${navbarNav} ${cosmoScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${cosmoScope}${cardHeaderTabs} ${cosmoScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${cosmoScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${cosmoScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${cosmoScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${cosmoScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${cosmoScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${cosmoScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${cosmoScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${cosmoScope}${offcanvasBackdrop}${show}`, {
	opacity: '0.5',
})
