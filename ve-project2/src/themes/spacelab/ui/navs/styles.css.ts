import { globalStyle } from '@vanilla-extract/css'
import { spacelabScope } from '../../scope.css'

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
	bgLight,
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
import {
	collapse,
	navbar,
	navbarExpandLg,
	navbarNav,
} from '../../../../theme-contract/ui/navbar/contract.css'
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

globalStyle(`${spacelabScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${spacelabScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${spacelabScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${spacelabScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${spacelabScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${spacelabScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${spacelabScope}${nav}`, {
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

globalStyle(`${spacelabScope}${navLink}`, {
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

globalStyle(`${spacelabScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${spacelabScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${spacelabScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${spacelabScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(68, 110, 155, 0.25)',
})

globalStyle(`${spacelabScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${spacelabScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${spacelabScope}${navTabs}`, {
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

globalStyle(`${spacelabScope}${navTabs} ${spacelabScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${spacelabScope}${navTabs} ${spacelabScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${spacelabScope}${navTabs} ${spacelabScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${spacelabScope}${navTabs} ${spacelabScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${spacelabScope}${navTabs} ${spacelabScope}${navItem}${show} ${spacelabScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${spacelabScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#446e9b',
	},
})

globalStyle(`${spacelabScope}${navPills} ${spacelabScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${spacelabScope}${navPills} ${spacelabScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${spacelabScope}${navPills} ${spacelabScope}${show} > ${spacelabScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${spacelabScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: varBsEmphasisColor,
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${spacelabScope}${navUnderline} ${spacelabScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${spacelabScope}${navUnderline} ${spacelabScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${spacelabScope}${navUnderline} ${spacelabScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${spacelabScope}${navUnderline} ${spacelabScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${spacelabScope}${navUnderline} ${spacelabScope}${show} > ${spacelabScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${spacelabScope}${navFill} > ${spacelabScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${spacelabScope}${navFill} ${spacelabScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${spacelabScope}${navJustified} > ${spacelabScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${spacelabScope}${navJustified} ${spacelabScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${spacelabScope}${navFill} ${spacelabScope}${navItem} ${spacelabScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${spacelabScope}${navJustified} ${spacelabScope}${navItem} ${spacelabScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${spacelabScope}${tabContent} > ${spacelabScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${spacelabScope}${navbarNav} ${spacelabScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${spacelabScope}${navbarNav} ${spacelabScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${spacelabScope}${navbarExpandSm} ${spacelabScope}${navbarNav} ${spacelabScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${spacelabScope}${navbarExpandMd} ${spacelabScope}${navbarNav} ${spacelabScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${spacelabScope}${navbarExpandLg} ${spacelabScope}${navbarNav} ${spacelabScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${spacelabScope}${navbarExpandXl} ${spacelabScope}${navbarNav} ${spacelabScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${spacelabScope}${navbarExpandXxl} ${spacelabScope}${navbarNav} ${spacelabScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${spacelabScope}${navbarExpand} ${spacelabScope}${navbarNav} ${spacelabScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${spacelabScope}${cardHeaderTabs} ${spacelabScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${spacelabScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${spacelabScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${spacelabScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${spacelabScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${spacelabScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${spacelabScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${spacelabScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${spacelabScope}${offcanvasBackdrop}${show}`, {
	opacity: '0.5',
})

globalStyle(`${spacelabScope}${navbar} ${spacelabScope}${navLink}`, {
	textShadow: '-1px -1px 0 rgba(0, 0, 0, 0.05)',
	transition: 'color ease-in-out 0.2s',
})

globalStyle(`${spacelabScope}${navbar}${bgLight} ${spacelabScope}${navLink}`, {
	textShadow: '1px 1px 0 rgba(255, 255, 255, 0.1)',
})
