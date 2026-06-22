import { globalStyle } from '@vanilla-extract/css'
import { slateScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsLinkColor,
	varBsLinkHoverColor,
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
	active,
	bgDanger,
	bgInfo,
	bgLight,
	bgPrimary,
	bgSecondary,
	bgSuccess,
	bgWarning,
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
import { bgDark } from '../../../../theme-contract/utilities/contract.css'

globalStyle(`${slateScope}${btn}${show}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${slateScope}${btn}${show}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${slateScope}${fade}`, {
	transition: 'opacity 0.15s linear',
})

globalStyle(`${slateScope}${fade}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${fade}:not(${show})`, {
	opacity: '0',
})

globalStyle(`${slateScope}${collapse}:not(${show})`, {
	display: 'none',
})

globalStyle(`${slateScope}${nav}`, {
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

globalStyle(`${slateScope}${navLink}`, {
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

globalStyle(`${slateScope}${navLink}`, {
	'@media': {
		'(prefers-reduced-motion: reduce)': {
			transition: 'none',
		},
	},
})

globalStyle(`${slateScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${slateScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

globalStyle(`${slateScope}${navLink}:focus-visible`, {
	outline: '0',
	boxShadow: '0 0 0 0.25rem rgba(58, 63, 68, 0.25)',
})

globalStyle(`${slateScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${slateScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: 'none',
	cursor: 'default',
})

globalStyle(`${slateScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: 'rgba(0, 0, 0, 0.6)',
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: 'rgba(0, 0, 0, 0.6)',
		[varBsNavTabsLinkActiveColor]: '#fff',
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: 'rgba(0, 0, 0, 0.6)',
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}:hover`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}:focus`, {
	isolation: 'isolate',
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navItem}${show} ${slateScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${slateScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#3a3f44',
	},
})

globalStyle(`${slateScope}${navPills} ${slateScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

globalStyle(`${slateScope}${navPills} ${slateScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${slateScope}${navPills} ${slateScope}${show} > ${slateScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

globalStyle(`${slateScope}${navUnderline}`, {
	vars: {
		[varBsNavUnderlineGap]: '1rem',
		[varBsNavUnderlineBorderWidth]: '0.125rem',
		[varBsNavUnderlineLinkActiveColor]: '#fff',
	},
	gap: varBsNavUnderlineGap,
})

globalStyle(`${slateScope}${navUnderline} ${slateScope}${navLink}`, {
	paddingRight: '0',
	paddingLeft: '0',
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})

globalStyle(`${slateScope}${navUnderline} ${slateScope}${navLink}:hover`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${slateScope}${navUnderline} ${slateScope}${navLink}:focus`, {
	borderBottomColor: 'currentcolor',
})

globalStyle(`${slateScope}${navUnderline} ${slateScope}${navLink}${navLinkActive}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${slateScope}${navUnderline} ${slateScope}${show} > ${slateScope}${navLink}`, {
	fontWeight: '700',
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: 'currentcolor',
})

globalStyle(`${slateScope}${navFill} > ${slateScope}${navLink}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${slateScope}${navFill} ${slateScope}${navItem}`, {
	flex: '1 1 auto',
	textAlign: 'center',
})

globalStyle(`${slateScope}${navJustified} > ${slateScope}${navLink}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${slateScope}${navJustified} ${slateScope}${navItem}`, {
	flexGrow: '1',
	flexBasis: '0',
	textAlign: 'center',
})

globalStyle(`${slateScope}${navFill} ${slateScope}${navItem} ${slateScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${slateScope}${navJustified} ${slateScope}${navItem} ${slateScope}${navLink}`, {
	width: '100%',
})

globalStyle(`${slateScope}${tabContent} > ${slateScope}${tabPane}`, {
	display: 'none',
})

globalStyle(`${slateScope}${navbarNav} ${slateScope}${navLink}${navLinkActive}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${slateScope}${navbarNav} ${slateScope}${navLink}${show}`, {
	color: varBsNavbarActiveColor,
})

globalStyle(`${slateScope}${navbarExpandSm} ${slateScope}${navbarNav} ${slateScope}${navLink}`, {
	'@media': {
		'(min-width: 576px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${slateScope}${navbarExpandMd} ${slateScope}${navbarNav} ${slateScope}${navLink}`, {
	'@media': {
		'(min-width: 768px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${slateScope}${navbarExpandLg} ${slateScope}${navbarNav} ${slateScope}${navLink}`, {
	'@media': {
		'(min-width: 992px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${slateScope}${navbarExpandXl} ${slateScope}${navbarNav} ${slateScope}${navLink}`, {
	'@media': {
		'(min-width: 1200px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${slateScope}${navbarExpandXxl} ${slateScope}${navbarNav} ${slateScope}${navLink}`, {
	'@media': {
		'(min-width: 1400px)': {
			paddingRight: varBsNavbarNavLinkPaddingX,
			paddingLeft: varBsNavbarNavLinkPaddingX,
		},
	},
})

globalStyle(`${slateScope}${navbarExpand} ${slateScope}${navbarNav} ${slateScope}${navLink}`, {
	paddingRight: varBsNavbarNavLinkPaddingX,
	paddingLeft: varBsNavbarNavLinkPaddingX,
})

globalStyle(`${slateScope}${cardHeaderTabs} ${slateScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})

globalStyle(`${slateScope}${offcanvasSm}${show}`, {
	'@media': {
		'(max-width: 575.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${slateScope}${offcanvasMd}${show}`, {
	'@media': {
		'(max-width: 767.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${slateScope}${offcanvasLg}${show}`, {
	'@media': {
		'(max-width: 991.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${slateScope}${offcanvasXl}${show}`, {
	'@media': {
		'(max-width: 1199.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${slateScope}${offcanvasXxl}${show}`, {
	'@media': {
		'(max-width: 1399.98px)': {
			visibility: 'visible',
		},
	},
})

globalStyle(`${slateScope}${offcanvas}${show}`, {
	visibility: 'visible',
})

globalStyle(`${slateScope}${offcanvasBackdrop}${fade}`, {
	opacity: '0',
})

globalStyle(`${slateScope}${offcanvasBackdrop}${show}`, {
	opacity: '0.5',
})

globalStyle(`${slateScope}${navbar} ${slateScope}${navLink}`, {
	padding: '1rem',
	borderRight: '1px solid rgba(0, 0, 0, 0.2)',
	borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
})

globalStyle(`${slateScope}${navbar} ${slateScope}${navItem}${active} ${slateScope}${navLink}`, {
	backgroundColor: 'rgba(0, 0, 0, 0.3)',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbarNav} ${slateScope}${navItem} + ${slateScope}${navItem}`, {
	marginLeft: '0',
})

globalStyle(`${slateScope}${navbar}${bgPrimary} ${slateScope}${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgPrimary} ${slateScope}${navLink}:active`, {
	backgroundImage: 'linear-gradient(#25282c, #292c30 40%, #2b2f32)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgPrimary} ${slateScope}${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#25282c, #292c30 40%, #2b2f32)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgSecondary} ${slateScope}${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#666d72, #6e757a 40%, #737a80)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgSecondary} ${slateScope}${navLink}:active`, {
	backgroundImage: 'linear-gradient(#4e5357, #555b5f 40%, #5a6065)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgSecondary} ${slateScope}${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#4e5357, #555b5f 40%, #5a6065)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgSuccess} ${slateScope}${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#52a552, #58b058 40%, #5cb85c)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgSuccess} ${slateScope}${navLink}:active`, {
	backgroundImage: 'linear-gradient(#3f7d3f, #458945 40%, #499149)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgSuccess} ${slateScope}${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#3f7d3f, #458945 40%, #499149)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgInfo} ${slateScope}${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#4ca1ba, #52adc8 40%, #56b4d1)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgInfo} ${slateScope}${navLink}:active`, {
	backgroundImage: 'linear-gradient(#3a7b8e, #40869b 40%, #438ea4)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgInfo} ${slateScope}${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#3a7b8e, #40869b 40%, #438ea4)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgWarning} ${slateScope}${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#d07c05, #df8505 40%, #e98b06)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgWarning} ${slateScope}${navLink}:active`, {
	backgroundImage: 'linear-gradient(#9f5f04, #ae6804 40%, #b86e04)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgWarning} ${slateScope}${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#9f5f04, #ae6804 40%, #b86e04)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgDanger} ${slateScope}${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#c8504c, #d65652 40%, #e05956)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgDanger} ${slateScope}${navLink}:active`, {
	backgroundImage: 'linear-gradient(#983d3a, #a74340 40%, #b04643)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgDanger} ${slateScope}${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#983d3a, #a74340 40%, #b04643)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgLight} ${slateScope}${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#c4c6c9, #d2d4d7 40%, #dbdee1)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgLight} ${slateScope}${navLink}:active`, {
	backgroundImage: 'linear-gradient(#959799, #a3a5a7 40%, #acafb1)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgLight} ${slateScope}${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#959799, #a3a5a7 40%, #acafb1)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgDark} ${slateScope}${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#212428, #23272b 40%, #25282d)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgDark} ${slateScope}${navLink}:active`, {
	backgroundImage: 'linear-gradient(#191c1f, #1b1e22 40%, #1d2024)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbar}${bgDark} ${slateScope}${navLink}${navLinkActive}`, {
	backgroundImage: 'linear-gradient(#191c1f, #1b1e22 40%, #1d2024)',
	filter: 'none',
	borderLeft: '1px solid rgba(0, 0, 0, 0.2)',
})

globalStyle(`${slateScope}${navbarExpandSm} ${slateScope}${navLink}`, {
	'@media': {
		'(max-width: 576px)': {
			border: 'none !important',
		},
	},
})

globalStyle(`${slateScope}${navbarExpandMd} ${slateScope}${navLink}`, {
	'@media': {
		'(max-width: 768px)': {
			border: 'none !important',
		},
	},
})

globalStyle(`${slateScope}${navbarExpandLg} ${slateScope}${navLink}`, {
	'@media': {
		'(max-width: 992px)': {
			border: 'none !important',
		},
	},
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
	border: '1px solid rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}${navLinkDisabled}`, {
	border: '1px solid rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}`, {
	color: '#fff',
})

globalStyle(`${slateScope}${navTabs} ${slateScope}${navLink}:hover`, {
	color: '#fff',
})

globalStyle(`${slateScope}${navPills} ${slateScope}${navLink}`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
	color: '#fff',
	textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
	border: '1px solid rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navPills} ${slateScope}${navLink}:hover`, {
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
	border: '1px solid rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navPills} ${slateScope}${navLink}${navLinkActive}`, {
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
	border: '1px solid rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navPills} ${slateScope}${navLink}:hover`, {
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(#313539, #34393d 40%, #373b40)',
	filter: 'none',
	border: '1px solid rgba(0, 0, 0, 0.6)',
})

globalStyle(`${slateScope}${navPills} ${slateScope}${navLink}${navLinkDisabled}`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
	color: varBsSecondaryColor,
})

globalStyle(`${slateScope}${navPills} ${slateScope}${navLink}${navLinkDisabled}:hover`, {
	backgroundImage: 'linear-gradient(#44494d, #3a3f44 20%, #2e3236)',
	filter: 'none',
	color: varBsSecondaryColor,
})
