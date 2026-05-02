import { globalStyle } from '@vanilla-extract/css'
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
	varBsDropdownPosition,
	varBsDropdownSpacer,
	varBsDropdownZindex,
} from '../../../../theme-contract/ui/dropdowns/_vars.css'
import {
	dropdown,
	dropdownCenter,
	dropdownDivider,
	dropend,
	dropdownHeader,
	dropdownItem,
	dropdownItemActive,
	dropdownItemDisabled,
	dropdownItemText,
	dropdownMenu,
	dropdownMenuDark,
	dropdownMenuEnd,
	dropdownMenuShow,
	dropdownMenuStart,
	dropdownToggle,
	dropdownToggleSplit,
	dropstart,
	dropup,
	dropupCenter,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import { h6 } from '../../../../theme-contract/contents/contract.css'
import { quartzScope } from '../../scope.css'

// ── Wrapper positioning ───────────────────────────────────────────────────────

globalStyle(
	[
		`${quartzScope}${dropdown}`,
		`${quartzScope}${dropstart}`,
		`${quartzScope}${dropupCenter}`,
		`${quartzScope}${dropdownCenter}`,
	].join(', '),
	{ position: 'relative' },
)

// ── Dropdown toggle caret ─────────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropdownToggle}`, { whiteSpace: 'nowrap' })

globalStyle(`${quartzScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid',
	borderRight: '0.3em solid transparent',
	borderBottom: 0,
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${quartzScope}${dropdownToggle}:empty::after`, { marginLeft: 0 })

// ── Dropdown menu ─────────────────────────────────────────────────────────────

// Quartz: glass treatment + white links on dropdown menu
globalStyle(`${quartzScope}${dropdownMenu}`, {
	vars: {
		[varBsDropdownZindex]: '1000',
		[varBsDropdownMinWidth]: '10rem',
		[varBsDropdownPaddingX]: '0',
		[varBsDropdownPaddingY]: '0.5rem',
		[varBsDropdownSpacer]: '0.125rem',
		[varBsDropdownFontSize]: '1rem',
		[varBsDropdownColor]: varBsBodyColor,
		[varBsDropdownBg]: 'transparent',
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBorderRadius]: varBsBorderRadius,
		[varBsDropdownBorderWidth]: '0',
		[varBsDropdownInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
		[varBsDropdownDividerBg]: 'rgba(255, 255, 255, 0.2)',
		[varBsDropdownDividerMarginY]: '1rem',
		[varBsDropdownBoxShadow]: varBsBoxShadow,
		[varBsDropdownLinkColor]: '#fff',
		[varBsDropdownLinkHoverColor]: '#fff',
		[varBsDropdownLinkHoverBg]: varBsTertiaryBg,
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#e83283',
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: '2rem',
		[varBsDropdownItemPaddingY]: '0.5rem',
		[varBsDropdownHeaderColor]: '#6c757d',
		[varBsDropdownHeaderPaddingX]: '2rem',
		[varBsDropdownHeaderPaddingY]: '0.5rem',
	},
	position: 'absolute',
	zIndex: varBsDropdownZindex,
	display: 'none',
	minWidth: varBsDropdownMinWidth,
	padding: `${varBsDropdownPaddingY} ${varBsDropdownPaddingX}`,
	margin: 0,
	fontSize: varBsDropdownFontSize,
	color: varBsDropdownColor,
	textAlign: 'left',
	listStyle: 'none',
	backgroundColor: 'transparent',
	backgroundImage: 'linear-gradient(125deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2) 70%)',
	backdropFilter: 'blur(5px)',
	boxShadow: 'inset 1px 1px rgba(255, 255, 255, 0.2), inset -1px -1px rgba(255, 255, 255, 0.1), 1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
	backgroundClip: 'padding-box',
	borderRadius: varBsDropdownBorderRadius,
})

globalStyle(`${quartzScope}${dropdownMenu} a`, { color: '#fff' })

globalStyle(`${quartzScope}${dropdownMenu}[data-bs-popper]`, {
	top: '100%',
	left: 0,
	marginTop: varBsDropdownSpacer,
})

// ── Menu alignment modifiers ──────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropdownMenuStart}`, {
	vars: { [varBsDropdownPosition]: 'start' },
})
globalStyle(`${quartzScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: 'auto',
	left: 0,
})

globalStyle(`${quartzScope}${dropdownMenuEnd}`, {
	vars: { [varBsDropdownPosition]: 'end' },
})
globalStyle(`${quartzScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: 0,
	left: 'auto',
})

// ── .dropup variant ───────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropup} ${dropdownMenu}[data-bs-popper]`, {
	top: 'auto',
	bottom: '100%',
	marginTop: 0,
	marginBottom: varBsDropdownSpacer,
})

globalStyle(`${quartzScope}${dropup} ${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: 0,
	borderRight: '0.3em solid transparent',
	borderBottom: '0.3em solid',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${quartzScope}${dropup} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── .dropend variant ──────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropend} ${dropdownMenu}[data-bs-popper]`, {
	top: 0,
	right: 'auto',
	left: '100%',
	marginTop: 0,
	marginLeft: varBsDropdownSpacer,
})

globalStyle(`${quartzScope}${dropend} ${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: 0,
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: 0,
	borderBottom: '0.3em solid transparent',
	borderLeft: '0.3em solid',
})

globalStyle(`${quartzScope}${dropend} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── .dropstart variant ────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropstart} ${dropdownMenu}[data-bs-popper]`, {
	top: 0,
	right: '100%',
	left: 'auto',
	marginTop: 0,
	marginRight: varBsDropdownSpacer,
})

globalStyle(`${quartzScope}${dropstart} ${dropdownToggle}::after`, {
	display: 'none',
})

globalStyle(`${quartzScope}${dropstart} ${dropdownToggle}::before`, {
	display: 'inline-block',
	marginRight: '0.255em',
	verticalAlign: 0,
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0.3em solid',
	borderBottom: '0.3em solid transparent',
})

globalStyle(`${quartzScope}${dropstart} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── .dropdown-toggle-split ────────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropdownToggleSplit}`, {
	paddingRight: '1.125rem',
	paddingLeft: '1.125rem',
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
	borderTopRightRadius: varBsBorderRadius,
	borderBottomRightRadius: varBsBorderRadius,
})
globalStyle(`${quartzScope}${dropdownToggleSplit}::after`, { marginLeft: 0 })
globalStyle(
	[
		`${quartzScope}${dropup} ${dropdownToggleSplit}::after`,
		`${quartzScope}${dropend} ${dropdownToggleSplit}::after`,
	].join(', '),
	{ marginLeft: 0 },
)
globalStyle(`${quartzScope}${dropstart} ${dropdownToggleSplit}::before`, {
	marginRight: 0,
})

// ── .dropdown-divider ─────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropdownDivider}`, {
	height: 0,
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: 'hidden',
	border: 0,
	borderTop: `1px solid ${varBsDropdownDividerBg}`,
	opacity: 1,
})

// ── .dropdown-item ────────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropdownItem}`, {
	display: 'block',
	width: '100%',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	clear: 'both',
	fontWeight: 400,
	color: varBsDropdownLinkColor,
	textAlign: 'inherit',
	textDecoration: 'none',
	whiteSpace: 'nowrap',
	backgroundColor: 'transparent',
	border: 0,
})

globalStyle(
	`${quartzScope}${dropdownItem}:hover, ${quartzScope}${dropdownItem}:focus`,
	{
		color: varBsDropdownLinkHoverColor,
		backgroundColor: varBsDropdownLinkHoverBg,
	},
)

globalStyle(
	`${quartzScope}${dropdownItem}${dropdownItemActive}, ${quartzScope}${dropdownItem}:active`,
	{
		color: varBsDropdownLinkActiveColor,
		textDecoration: 'none',
		backgroundColor: varBsDropdownLinkActiveBg,
	},
)

globalStyle(
	`${quartzScope}${dropdownItem}${dropdownItemDisabled}, ${quartzScope}${dropdownItem}:disabled`,
	{
		color: varBsDropdownLinkDisabledColor,
		pointerEvents: 'none',
		backgroundColor: 'transparent',
	},
)

// ── .dropdown-menu.show ───────────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropdownMenu}${dropdownMenuShow}`, { display: 'block' })

// ── .dropdown-header ──────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropdownHeader}`, {
	display: 'block',
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: '0.875rem',
	color: varBsDropdownHeaderColor,
	whiteSpace: 'nowrap',
})

globalStyle(`${quartzScope}${dropdownHeader}${h6}`, {
	marginBottom: 0,
	fontSize: '0.875rem',
	color: varBsDropdownHeaderColor,
})

// ── .dropdown-item-text ───────────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropdownItemText}`, {
	display: 'block',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})

// ── .dropdown-menu-dark ───────────────────────────────────────────────────────

globalStyle(`${quartzScope}${dropdownMenuDark}`, {
	vars: {
		[varBsDropdownColor]: '#dee2e6',
		[varBsDropdownBg]: '#343a40',
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBoxShadow]: '',
		[varBsDropdownLinkColor]: '#dee2e6',
		[varBsDropdownLinkHoverColor]: '#fff',
		[varBsDropdownDividerBg]: varBsBorderColorTranslucent,
		[varBsDropdownLinkHoverBg]: 'rgba(255, 255, 255, 0.15)',
		[varBsDropdownLinkActiveColor]: '#fff',
		[varBsDropdownLinkActiveBg]: '#0d6efd',
		[varBsDropdownLinkDisabledColor]: '#adb5bd',
		[varBsDropdownHeaderColor]: '#adb5bd',
	},
})
