import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsTertiaryBg,
	varBsTertiaryColor,
} from '../../../../theme-contract/_vars.css'
import {
	varBsBtnActiveBg,
	varBsBtnActiveBorderColor,
	varBsBtnActiveColor,
	varBsBtnFocusBoxShadow,
} from '../../../../theme-contract/ui/buttons/_vars.css'
import {
	varBsDropdownBg,
	varBsDropdownBorderColor,
	varBsDropdownBorderRadius,
	varBsDropdownBorderWidth,
	varBsDropdownBoxShadow,
	varBsDropdownColor,
	varBsDropdownDividerBg,
	varBsDropdownDividerMarginY,
	varBsDropdownFontSize,
	varBsDropdownHeaderColor,
	varBsDropdownHeaderPaddingX,
	varBsDropdownHeaderPaddingY,
	varBsDropdownInnerBorderRadius,
	varBsDropdownItemBorderRadius,
	varBsDropdownItemPaddingX,
	varBsDropdownItemPaddingY,
	varBsDropdownLinkActiveBg,
	varBsDropdownLinkActiveColor,
	varBsDropdownLinkColor,
	varBsDropdownLinkDisabledColor,
	varBsDropdownLinkHoverBg,
	varBsDropdownLinkHoverColor,
	varBsDropdownMinWidth,
	varBsDropdownPaddingX,
	varBsDropdownPaddingY,
	varBsDropdownSpacer,
	varBsDropdownZindex,
} from '../../../../theme-contract/ui/dropdowns/_vars.css'
import { varBsNavTabsBorderWidth } from '../../../../theme-contract/ui/navs/_vars.css'
import { varBsPosition } from '../../../../theme-contract/utilities/generated/_vars.css'

import { hasValidation, inputGroup } from '../../../../theme-contract/forms/contract.css'
import {
	active,
	disabled,
	dropdownMenuLgEnd,
	dropdownMenuLgStart,
	dropdownMenuMdEnd,
	dropdownMenuMdStart,
	dropdownMenuSmEnd,
	dropdownMenuSmStart,
	dropdownMenuXlEnd,
	dropdownMenuXlStart,
	dropdownMenuXxlEnd,
	dropdownMenuXxlStart,
	navbarExpand,
	navbarExpandMd,
	navbarExpandSm,
	navbarExpandXl,
	navbarExpandXxl,
} from '../../../../theme-contract/literal/contract.css'
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'
import {
	btnShowHook,
	dropdown,
	dropdownCenter,
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownItemText,
	dropdownMenu,
	dropdownMenuDark,
	dropdownMenuEnd,
	dropdownMenuShow,
	dropdownMenuStart,
	dropdownToggle,
	dropdownToggleSplit,
	dropend,
	dropstart,
	dropup,
	dropupCenter,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import { navbarExpandLg, navbarNav } from '../../../../theme-contract/ui/navbar/contract.css'
import { navTabs } from '../../../../theme-contract/ui/navs/contract.css'

globalStyle(`${literaScope}${inputGroup}:not(${hasValidation}) > ${literaScope}${dropdownToggle}:nth-last-child(n+3)`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${literaScope}${inputGroup}${hasValidation} > ${literaScope}${dropdownToggle}:nth-last-child(n+4)`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${literaScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${literaScope}${btn}${btnShowHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${literaScope}${dropup}`, {
	position: 'relative',
})

globalStyle(`${literaScope}${dropend}`, {
	position: 'relative',
})

globalStyle(`${literaScope}${dropdown}`, {
	position: 'relative',
})

globalStyle(`${literaScope}${dropstart}`, {
	position: 'relative',
})

globalStyle(`${literaScope}${dropupCenter}`, {
	position: 'relative',
})

globalStyle(`${literaScope}${dropdownCenter}`, {
	position: 'relative',
})

globalStyle(`${literaScope}${dropdownToggle}`, {
	whiteSpace: 'nowrap',
})

globalStyle(`${literaScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid',
	borderRight: '0.3em solid transparent',
	borderBottom: '0',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${literaScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${literaScope}${dropdownMenu}`, {
	vars: {
		[varBsDropdownZindex]: '1000',
		[varBsDropdownMinWidth]: '10rem',
		[varBsDropdownPaddingX]: '0',
		[varBsDropdownPaddingY]: '0.5rem',
		[varBsDropdownSpacer]: '0.125rem',
		[varBsDropdownFontSize]: '1.1rem',
		[varBsDropdownColor]: varBsBodyColor,
		[varBsDropdownBg]: varBsBodyBg,
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBorderRadius]: varBsBorderRadius,
		[varBsDropdownBorderWidth]: varBsBorderWidth,
		[varBsDropdownInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
		[varBsDropdownDividerBg]: varBsBorderColorTranslucent,
		[varBsDropdownDividerMarginY]: '0.5rem',
		[varBsDropdownBoxShadow]: varBsBoxShadow,
		[varBsDropdownLinkColor]: varBsBodyColor,
		[varBsDropdownLinkHoverColor]: varBsBodyColor,
		[varBsDropdownLinkHoverBg]: varBsTertiaryBg,
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#4582ec',
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: '1rem',
		[varBsDropdownItemPaddingY]: '0.25rem',
		[varBsDropdownHeaderColor]: '#868e96',
		[varBsDropdownHeaderPaddingX]: '1rem',
		[varBsDropdownHeaderPaddingY]: '0.5rem',
	},
	position: 'absolute',
	zIndex: varBsDropdownZindex,
	display: 'none',
	minWidth: varBsDropdownMinWidth,
	padding: `${varBsDropdownPaddingY} ${varBsDropdownPaddingX}`,
	margin: '0',
	fontSize: varBsDropdownFontSize,
	color: varBsDropdownColor,
	textAlign: 'left',
	listStyle: 'none',
	backgroundColor: varBsDropdownBg,
	backgroundClip: 'padding-box',
	border: `${varBsDropdownBorderWidth} solid ${varBsDropdownBorderColor}`,
	borderRadius: varBsDropdownBorderRadius,
})

globalStyle(`${literaScope}${dropdownMenu}[data-bs-popper]`, {
	top: '100%',
	left: '0',
	marginTop: varBsDropdownSpacer,
})

globalStyle(`${literaScope}${dropdownMenuStart}`, {
	vars: {
		[varBsPosition]: 'start',
	},
})

globalStyle(`${literaScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: 'auto',
	left: '0',
})

globalStyle(`${literaScope}${dropdownMenuEnd}`, {
	vars: {
		[varBsPosition]: 'end',
	},
})

globalStyle(`${literaScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: '0',
	left: 'auto',
})

globalStyle(`${literaScope}${dropdownMenuSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuSmStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuSmEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuMdStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuMdEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuLgStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuLgEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuXlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuXlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuXxlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${literaScope}${dropdownMenuXxlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${literaScope}${dropup} ${literaScope}${dropdownMenu}[data-bs-popper]`, {
	top: 'auto',
	bottom: '100%',
	marginTop: '0',
	marginBottom: varBsDropdownSpacer,
})

globalStyle(`${literaScope}${dropup} ${literaScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0',
	borderRight: '0.3em solid transparent',
	borderBottom: '0.3em solid',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${literaScope}${dropup} ${literaScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${literaScope}${dropend} ${literaScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: 'auto',
	left: '100%',
	marginTop: '0',
	marginLeft: varBsDropdownSpacer,
})

globalStyle(`${literaScope}${dropend} ${literaScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0',
	borderBottom: '0.3em solid transparent',
	borderLeft: '0.3em solid',
})

globalStyle(`${literaScope}${dropend} ${literaScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${literaScope}${dropend} ${literaScope}${dropdownToggle}::after`, {
	verticalAlign: '0',
})

globalStyle(`${literaScope}${dropstart} ${literaScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: '100%',
	left: 'auto',
	marginTop: '0',
	marginRight: varBsDropdownSpacer,
})

globalStyle(`${literaScope}${dropstart} ${literaScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
})

globalStyle(`${literaScope}${dropstart} ${literaScope}${dropdownToggle}::after`, {
	display: 'none',
})

globalStyle(`${literaScope}${dropstart} ${literaScope}${dropdownToggle}::before`, {
	display: 'inline-block',
	marginRight: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0.3em solid',
	borderBottom: '0.3em solid transparent',
})

globalStyle(`${literaScope}${dropstart} ${literaScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${literaScope}${dropstart} ${literaScope}${dropdownToggle}::before`, {
	verticalAlign: '0',
})

globalStyle(`${literaScope}${dropdownDivider}`, {
	height: '0',
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: 'hidden',
	borderTop: `1px solid ${varBsDropdownDividerBg}`,
	opacity: '1',
})

globalStyle(`${literaScope}${dropdownItem}`, {
	display: 'block',
	width: '100%',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	clear: 'both',
	fontWeight: '400',
	color: varBsDropdownLinkColor,
	textAlign: 'inherit',
	textDecoration: 'none',
	whiteSpace: 'nowrap',
	backgroundColor: 'transparent',
	border: '0',
	borderRadius: fallbackVar(varBsDropdownItemBorderRadius, '0'),
})

globalStyle(`${literaScope}${dropdownItem}:hover`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

globalStyle(`${literaScope}${dropdownItem}:focus`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

globalStyle(`${literaScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${literaScope}${dropdownItem}:active`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${literaScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${literaScope}${dropdownItem}:disabled`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${literaScope}${dropdownMenu}${dropdownMenuShow}`, {
	display: 'block',
})

globalStyle(`${literaScope}${dropdownHeader}`, {
	display: 'block',
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: '0.9625rem',
	color: varBsDropdownHeaderColor,
	whiteSpace: 'nowrap',
})

globalStyle(`${literaScope}${dropdownItemText}`, {
	display: 'block',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})

globalStyle(`${literaScope}${dropdownMenuDark}`, {
	vars: {
		[varBsDropdownColor]: '#ddd',
		[varBsDropdownBg]: '#343a40',
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBoxShadow]: '',
		[varBsDropdownLinkColor]: '#ddd',
		[varBsDropdownLinkHoverColor]: '#fff',
		[varBsDropdownDividerBg]: varBsBorderColorTranslucent,
		[varBsDropdownLinkHoverBg]: 'rgba(255, 255, 255, 0.15)',
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#4582ec',
		[varBsDropdownLinkDisabledColor]: '#adb5bd',
		[varBsDropdownHeaderColor]: '#adb5bd',
	},
})

globalStyle(`${literaScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${literaScope}${dropup} ${literaScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${literaScope}${dropend} ${literaScope}${dropdownToggleSplit}::after`, {
	marginLeft: '0',
})

globalStyle(`${literaScope}${dropstart} ${literaScope}${dropdownToggleSplit}::before`, {
	marginRight: '0',
})

globalStyle(`${literaScope}${navTabs} ${literaScope}${dropdownMenu}`, {
	marginTop: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${literaScope}${navbarNav} ${literaScope}${dropdownMenu}`, {
	position: 'static',
})

globalStyle(`${literaScope}${navbarExpandSm} ${literaScope}${navbarNav} ${literaScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${literaScope}${navbarExpandMd} ${literaScope}${navbarNav} ${literaScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${literaScope}${navbarExpandLg} ${literaScope}${navbarNav} ${literaScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${literaScope}${navbarExpandXl} ${literaScope}${navbarNav} ${literaScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${literaScope}${navbarExpandXxl} ${literaScope}${navbarNav} ${literaScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${literaScope}${navbarExpand} ${literaScope}${navbarNav} ${literaScope}${dropdownMenu}`, {
	position: 'absolute',
})

globalStyle(`${literaScope}${dropdownMenu}`, {
	fontSize: '0.9625rem',
})
