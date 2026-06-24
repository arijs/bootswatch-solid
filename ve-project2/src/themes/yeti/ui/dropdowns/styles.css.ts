import { globalStyle } from '@vanilla-extract/css'
import { yetiScope } from '../../scope.css'

import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsEmphasisColorRgb,
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
	bgLight,
	bgPrimary,
	btnGroupVertical,
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
import { btnGroup } from '../../../../theme-contract/ui/button-group/contract.css'
import {
	btn,
	btnDanger,
	btnInfo,
	btnPrimary,
	btnSecondary,
	btnSuccess,
	btnWarning,
} from '../../../../theme-contract/ui/buttons/contract.css'
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
	dropend,
	dropstart,
	dropup,
	dropupCenter,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import { navbarExpandLg, navbarNav } from '../../../../theme-contract/ui/navbar/contract.css'
import { navTabs } from '../../../../theme-contract/ui/navs/contract.css'
import { bgDark } from '../../../../theme-contract/utilities/contract.css'

globalStyle(`${yetiScope}${inputGroup}:not(${hasValidation}) > ${yetiScope}${dropdownToggle}:nth-last-child(n+3)`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${yetiScope}${inputGroup}${hasValidation} > ${yetiScope}${dropdownToggle}:nth-last-child(n+4)`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${yetiScope}${btn}${btnShowHook}`, {
	color: varBsBtnActiveColor,
	backgroundColor: varBsBtnActiveBg,
	borderColor: varBsBtnActiveBorderColor,
})

globalStyle(`${yetiScope}${btn}${btnShowHook}:focus-visible`, {
	boxShadow: varBsBtnFocusBoxShadow,
})

globalStyle(`${yetiScope}${dropup}`, {
	position: 'relative',
})

globalStyle(`${yetiScope}${dropend}`, {
	position: 'relative',
})

globalStyle(`${yetiScope}${dropdown}`, {
	position: 'relative',
})

globalStyle(`${yetiScope}${dropstart}`, {
	position: 'relative',
})

globalStyle(`${yetiScope}${dropupCenter}`, {
	position: 'relative',
})

globalStyle(`${yetiScope}${dropdownCenter}`, {
	position: 'relative',
})

globalStyle(`${yetiScope}${dropdownToggle}`, {
	whiteSpace: 'nowrap',
})

globalStyle(`${yetiScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid',
	borderRight: '0.3em solid transparent',
	borderBottom: '0',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${yetiScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${yetiScope}${dropdownMenu}`, {
	vars: {
		[varBsDropdownZindex]: '1000',
		[varBsDropdownMinWidth]: '10rem',
		[varBsDropdownPaddingX]: '0',
		[varBsDropdownPaddingY]: '0.5rem',
		[varBsDropdownSpacer]: '0.125rem',
		[varBsDropdownFontSize]: '1rem',
		[varBsDropdownColor]: varBsBodyColor,
		[varBsDropdownBg]: varBsBodyBg,
		[varBsDropdownBorderColor]: 'rgba(0, 0, 0, 0.1)',
		[varBsDropdownBorderRadius]: varBsBorderRadius,
		[varBsDropdownBorderWidth]: varBsBorderWidth,
		[varBsDropdownInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
		[varBsDropdownDividerBg]: 'rgba(0, 0, 0, 0.1)',
		[varBsDropdownDividerMarginY]: '0.5rem',
		[varBsDropdownBoxShadow]: varBsBoxShadow,
		[varBsDropdownLinkColor]: varBsBodyColor,
		[varBsDropdownLinkHoverColor]: varBsBodyColor,
		[varBsDropdownLinkHoverBg]: varBsTertiaryBg,
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#008cba',
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: '1rem',
		[varBsDropdownItemPaddingY]: '0.25rem',
		[varBsDropdownHeaderColor]: '#888',
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

globalStyle(`${yetiScope}${dropdownMenu}[data-bs-popper]`, {
	top: '100%',
	left: '0',
	marginTop: varBsDropdownSpacer,
})

globalStyle(`${yetiScope}${dropdownMenuStart}`, {
	vars: {
		[varBsPosition]: 'start',
	},
})

globalStyle(`${yetiScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: 'auto',
	left: '0',
})

globalStyle(`${yetiScope}${dropdownMenuEnd}`, {
	vars: {
		[varBsPosition]: 'end',
	},
})

globalStyle(`${yetiScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: '0',
	left: 'auto',
})

globalStyle(`${yetiScope}${dropdownMenuSmStart}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuSmStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuSmEnd}`, {
	'@media': {
		'(min-width: 576px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuSmEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 576px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuMdStart}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuMdStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuMdEnd}`, {
	'@media': {
		'(min-width: 768px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuMdEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 768px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuLgStart}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuLgStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuLgEnd}`, {
	'@media': {
		'(min-width: 992px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuLgEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 992px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuXlStart}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuXlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuXlEnd}`, {
	'@media': {
		'(min-width: 1200px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuXlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1200px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuXxlStart}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'start',
			},
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuXxlStart}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: 'auto',
			left: '0',
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuXxlEnd}`, {
	'@media': {
		'(min-width: 1400px)': {
			vars: {
				[varBsPosition]: 'end',
			},
		},
	},
})

globalStyle(`${yetiScope}${dropdownMenuXxlEnd}[data-bs-popper]`, {
	'@media': {
		'(min-width: 1400px)': {
			right: '0',
			left: 'auto',
		},
	},
})

globalStyle(`${yetiScope}${dropup} ${yetiScope}${dropdownMenu}[data-bs-popper]`, {
	top: 'auto',
	bottom: '100%',
	marginTop: '0',
	marginBottom: varBsDropdownSpacer,
})

globalStyle(`${yetiScope}${dropup} ${yetiScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0',
	borderRight: '0.3em solid transparent',
	borderBottom: '0.3em solid',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${yetiScope}${dropup} ${yetiScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${yetiScope}${dropend} ${yetiScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: 'auto',
	left: '100%',
	marginTop: '0',
	marginLeft: varBsDropdownSpacer,
})

globalStyle(`${yetiScope}${dropend} ${yetiScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0',
	borderBottom: '0.3em solid transparent',
	borderLeft: '0.3em solid',
})

globalStyle(`${yetiScope}${dropend} ${yetiScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${yetiScope}${dropend} ${yetiScope}${dropdownToggle}::after`, {
	verticalAlign: '0',
})

globalStyle(`${yetiScope}${dropstart} ${yetiScope}${dropdownMenu}[data-bs-popper]`, {
	top: '0',
	right: '100%',
	left: 'auto',
	marginTop: '0',
	marginRight: varBsDropdownSpacer,
})

globalStyle(`${yetiScope}${dropstart} ${yetiScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
})

globalStyle(`${yetiScope}${dropstart} ${yetiScope}${dropdownToggle}::after`, {
	display: 'none',
})

globalStyle(`${yetiScope}${dropstart} ${yetiScope}${dropdownToggle}::before`, {
	display: 'inline-block',
	marginRight: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0.3em solid',
	borderBottom: '0.3em solid transparent',
})

globalStyle(`${yetiScope}${dropstart} ${yetiScope}${dropdownToggle}:empty::after`, {
	marginLeft: '0',
})

globalStyle(`${yetiScope}${dropstart} ${yetiScope}${dropdownToggle}::before`, {
	verticalAlign: '0',
})

globalStyle(`${yetiScope}${dropdownDivider}`, {
	height: '0',
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: 'hidden',
	borderTop: `1px solid ${varBsDropdownDividerBg}`,
	opacity: '1',
})

globalStyle(`${yetiScope}${dropdownItem}`, {
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
	borderRadius: 'var(--bs-dropdown-item-border-radius, 0)',
})

globalStyle(`${yetiScope}${dropdownItem}:hover`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

globalStyle(`${yetiScope}${dropdownItem}:focus`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

globalStyle(`${yetiScope}${dropdownItem}${active}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${yetiScope}${dropdownItem}:active`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: 'none',
	backgroundColor: varBsDropdownLinkActiveBg,
})

globalStyle(`${yetiScope}${dropdownItem}${disabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${yetiScope}${dropdownItem}:disabled`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: 'none',
	backgroundColor: 'transparent',
})

globalStyle(`${yetiScope}${dropdownMenu}${dropdownMenuShow}`, {
	display: 'block',
})

globalStyle(`${yetiScope}${dropdownHeader}`, {
	display: 'block',
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: '0',
	fontSize: '0.875rem',
	color: varBsDropdownHeaderColor,
	whiteSpace: 'nowrap',
})

globalStyle(`${yetiScope}${dropdownItemText}`, {
	display: 'block',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})

globalStyle(`${yetiScope}${dropdownMenuDark}`, {
	vars: {
		[varBsDropdownColor]: '#dee2e6',
		[varBsDropdownBg]: '#333',
		[varBsDropdownBorderColor]: 'rgba(0, 0, 0, 0.1)',
		[varBsDropdownBoxShadow]: '',
		[varBsDropdownLinkColor]: '#dee2e6',
		[varBsDropdownLinkHoverColor]: '#fff',
		[varBsDropdownDividerBg]: 'rgba(0, 0, 0, 0.1)',
		[varBsDropdownLinkHoverBg]: 'rgba(255, 255, 255, 0.15)',
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#008cba',
		[varBsDropdownLinkDisabledColor]: '#adb5bd',
		[varBsDropdownHeaderColor]: '#adb5bd',
	},
})

globalStyle(`${yetiScope}${btnGroup} > ${yetiScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderTopRightRadius: '0',
	borderBottomRightRadius: '0',
})

globalStyle(`${yetiScope}${btnGroupVertical} > ${yetiScope}${btn}:not(:last-child):not(${dropdownToggle})`, {
	borderBottomRightRadius: '0',
	borderBottomLeftRadius: '0',
})

globalStyle(`${yetiScope}${navTabs} ${yetiScope}${dropdownMenu}`, {
	marginTop: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	borderTopLeftRadius: '0',
	borderTopRightRadius: '0',
})

globalStyle(`${yetiScope}${navbarNav} ${yetiScope}${dropdownMenu}`, {
	position: 'static',
})

globalStyle(`${yetiScope}${navbarExpandSm} ${yetiScope}${navbarNav} ${yetiScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 576px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${yetiScope}${navbarExpandMd} ${yetiScope}${navbarNav} ${yetiScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 768px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${yetiScope}${navbarExpandLg} ${yetiScope}${navbarNav} ${yetiScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 992px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${yetiScope}${navbarExpandXl} ${yetiScope}${navbarNav} ${yetiScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1200px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${yetiScope}${navbarExpandXxl} ${yetiScope}${navbarNav} ${yetiScope}${dropdownMenu}`, {
	'@media': {
		'(min-width: 1400px)': {
			position: 'absolute',
		},
	},
})

globalStyle(`${yetiScope}${navbarExpand} ${yetiScope}${navbarNav} ${yetiScope}${dropdownMenu}`, {
	position: 'absolute',
})

globalStyle(`${yetiScope}${bgPrimary} ${yetiScope}${dropdownMenu}`, {
	backgroundColor: '#008cba',
})

globalStyle(`${yetiScope}${bgPrimary} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}`, {
	color: 'rgba(255, 255, 255, 0.7)',
})

globalStyle(`${yetiScope}${bgPrimary} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	color: 'rgba(255, 255, 255, 0.7)',
})

globalStyle(`${yetiScope}${bgPrimary} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}${active}`, {
	color: '#fff',
	backgroundColor: '#007ea7',
})

globalStyle(`${yetiScope}${bgPrimary} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:hover`, {
	color: '#fff',
	backgroundColor: '#007ea7',
})

globalStyle(`${yetiScope}${bgPrimary} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	color: '#fff',
	backgroundColor: '#007ea7',
})

globalStyle(`${yetiScope}${bgDark} ${yetiScope}${dropdownMenu}`, {
	backgroundColor: '#333',
})

globalStyle(`${yetiScope}${bgDark} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}`, {
	color: 'rgba(255, 255, 255, 0.7)',
})

globalStyle(`${yetiScope}${bgDark} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	color: 'rgba(255, 255, 255, 0.7)',
})

globalStyle(`${yetiScope}${bgDark} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}${active}`, {
	color: '#fff',
	backgroundColor: '#2e2e2e',
})

globalStyle(`${yetiScope}${bgDark} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:hover`, {
	color: '#fff',
	backgroundColor: '#2e2e2e',
})

globalStyle(`${yetiScope}${bgDark} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	color: '#fff',
	backgroundColor: '#2e2e2e',
})

globalStyle(`${yetiScope}${bgLight} ${yetiScope}${dropdownMenu}`, {
	backgroundColor: '#eee',
})

globalStyle(`${yetiScope}${bgLight} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}`, {
	color: `rgba(${varBsEmphasisColorRgb}, 0.65)`,
})

globalStyle(`${yetiScope}${bgLight} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	color: `rgba(${varBsEmphasisColorRgb}, 0.65)`,
})

globalStyle(`${yetiScope}${bgLight} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}${active}`, {
	color: `rgba(${varBsEmphasisColorRgb}, 0.8)`,
	backgroundColor: '#f0f0f0',
})

globalStyle(`${yetiScope}${bgLight} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:hover`, {
	color: `rgba(${varBsEmphasisColorRgb}, 0.8)`,
	backgroundColor: '#f0f0f0',
})

globalStyle(`${yetiScope}${bgLight} ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	color: `rgba(${varBsEmphasisColorRgb}, 0.8)`,
	backgroundColor: '#f0f0f0',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownMenu}`, {
	borderTopWidth: '0',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnPrimary} ~ ${yetiScope}${dropdownMenu}`, {
	backgroundColor: '#008cba',
	borderColor: '#007ea7',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnPrimary} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}`, {
	color: '#fff',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnPrimary} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:hover`, {
	backgroundColor: '#00769c',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnPrimary} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	backgroundColor: '#00769c',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnSecondary} ~ ${yetiScope}${dropdownMenu}`, {
	backgroundColor: '#eee',
	borderColor: '#d6d6d6',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnSecondary} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}`, {
	color: '#222',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnSecondary} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:hover`, {
	backgroundColor: '#c8c8c8',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnSecondary} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	backgroundColor: '#c8c8c8',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnSuccess} ~ ${yetiScope}${dropdownMenu}`, {
	backgroundColor: '#43ac6a',
	borderColor: '#3c9b5f',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnSuccess} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}`, {
	color: '#fff',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnSuccess} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:hover`, {
	backgroundColor: '#389059',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnSuccess} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	backgroundColor: '#389059',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnInfo} ~ ${yetiScope}${dropdownMenu}`, {
	backgroundColor: '#5bc0de',
	borderColor: '#52adc8',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnInfo} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}`, {
	color: '#fff',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnInfo} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:hover`, {
	backgroundColor: '#4ca1ba',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnInfo} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	backgroundColor: '#4ca1ba',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnWarning} ~ ${yetiScope}${dropdownMenu}`, {
	backgroundColor: '#e99002',
	borderColor: '#d28202',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnWarning} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}`, {
	color: '#fff',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnWarning} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:hover`, {
	backgroundColor: '#c47902',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnWarning} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	backgroundColor: '#c47902',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnDanger} ~ ${yetiScope}${dropdownMenu}`, {
	backgroundColor: '#f04124',
	borderColor: '#d83b20',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnDanger} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}`, {
	color: '#fff',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnDanger} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:hover`, {
	backgroundColor: '#ca371e',
})

globalStyle(`${yetiScope}${btnGroup} ${yetiScope}${dropdownToggle}${btnDanger} ~ ${yetiScope}${dropdownMenu} ${yetiScope}${dropdownItem}:focus`, {
	backgroundColor: '#ca371e',
})

globalStyle(`${yetiScope}${dropdownItem}`, {
	paddingTop: '0.75rem',
	paddingBottom: '0.75rem',
	fontSize: '0.875rem',
	fontWeight: '300',
})
