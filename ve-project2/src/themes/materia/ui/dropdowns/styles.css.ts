// ve-project2/src/themes/materia/ui/dropdowns/styles.css.ts
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
import { btnGroup } from '../../../../theme-contract/ui/button-group/contract.css'
import { h6 } from '../../../../theme-contract/contents/contract.css'
import { materiaScope } from '../../scope.css'

// ── Wrapper positioning ───────────────────────────────────────────────────────

globalStyle(
	[
		`${materiaScope}${dropdown}`,
		`${materiaScope}${dropstart}`,
		`${materiaScope}${dropupCenter}`,
		`${materiaScope}${dropdownCenter}`,
	].join(', '),
	{ position: 'relative' },
)

// ── Dropdown toggle caret ─────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropdownToggle}`, { whiteSpace: 'nowrap' })

globalStyle(`${materiaScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid',
	borderRight: '0.3em solid transparent',
	borderBottom: 0,
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${materiaScope}${dropdownToggle}:empty::after`, { marginLeft: 0 })

// ── Dropdown menu ─────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropdownMenu}`, {
	vars: {
		[varBsDropdownZindex]: '1000',
		[varBsDropdownMinWidth]: '10rem',
		[varBsDropdownPaddingX]: '0',
		[varBsDropdownPaddingY]: '0.5rem',
		[varBsDropdownSpacer]: '0.125rem',
		[varBsDropdownFontSize]: '1rem',
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
		[varBsDropdownLinkActiveBg]: '#2196f3',
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: '1rem',
		[varBsDropdownItemPaddingY]: '0.25rem',
		[varBsDropdownHeaderColor]: '#666',
		[varBsDropdownHeaderPaddingX]: '1rem',
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
	backgroundColor: varBsDropdownBg,
	backgroundClip: 'padding-box',
	border: 'none',
	borderRadius: varBsDropdownBorderRadius,
	boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
})

globalStyle(`${materiaScope}${dropdownMenu}[data-bs-popper]`, {
	top: '100%',
	left: 0,
	marginTop: 0,
})

// Materia split dropdowns align 1px further left in baseline captures.
globalStyle(`${materiaScope}${btnGroup} > ${dropdownMenu}[data-bs-popper]`, {
	marginLeft: '-1px',
})

// ── Menu alignment modifiers ──────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropdownMenuStart}`, {
	vars: { [varBsDropdownPosition]: 'start' },
})
globalStyle(`${materiaScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: 'auto',
	left: 0,
})

globalStyle(`${materiaScope}${dropdownMenuEnd}`, {
	vars: { [varBsDropdownPosition]: 'end' },
})
globalStyle(`${materiaScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: 0,
	left: 'auto',
})

// ── .dropup variant ───────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropup} ${dropdownMenu}[data-bs-popper]`, {
	top: 'auto',
	bottom: '100%',
	marginTop: 0,
	marginBottom: varBsDropdownSpacer,
})

globalStyle(`${materiaScope}${dropup} ${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: 0,
	borderRight: '0.3em solid transparent',
	borderBottom: '0.3em solid',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${materiaScope}${dropup} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── .dropend variant ──────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropend} ${dropdownMenu}[data-bs-popper]`, {
	top: 0,
	right: 'auto',
	left: '100%',
	marginTop: 0,
	marginLeft: varBsDropdownSpacer,
})

globalStyle(`${materiaScope}${dropend} ${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: 0,
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: 0,
	borderBottom: '0.3em solid transparent',
	borderLeft: '0.3em solid',
})

globalStyle(`${materiaScope}${dropend} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── .dropstart variant ────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropstart} ${dropdownMenu}[data-bs-popper]`, {
	top: 0,
	right: '100%',
	left: 'auto',
	marginTop: 0,
	marginRight: varBsDropdownSpacer,
})

globalStyle(`${materiaScope}${dropstart} ${dropdownToggle}::after`, {
	display: 'none',
})

globalStyle(`${materiaScope}${dropstart} ${dropdownToggle}::before`, {
	display: 'inline-block',
	marginRight: '0.255em',
	verticalAlign: 0,
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0.3em solid',
	borderBottom: '0.3em solid transparent',
})

globalStyle(`${materiaScope}${dropstart} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// Materia uses a larger caret than Bootstrap defaults.
globalStyle(
	[
		`${materiaScope}${dropdownToggle}::after`,
		`${materiaScope}${dropup} ${dropdownToggle}::after`,
		`${materiaScope}${dropstart} ${dropdownToggle}::after`,
		`${materiaScope}${dropend} ${dropdownToggle}::after`,
	].join(', '),
	{ borderWidth: '4px' },
)

// ── .dropdown-toggle-split ────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropdownToggleSplit}`, {
	paddingRight: '0.75rem',
	paddingLeft: '0.75rem',
})
globalStyle(`${materiaScope}${dropdownToggleSplit}::after`, { marginLeft: 0 })
globalStyle(
	[
		`${materiaScope}${dropup} ${dropdownToggleSplit}::after`,
		`${materiaScope}${dropend} ${dropdownToggleSplit}::after`,
	].join(', '),
	{ marginLeft: 0 },
)
globalStyle(`${materiaScope}${dropstart} ${dropdownToggleSplit}::before`, {
	marginRight: 0,
})

// ── .dropdown-divider ─────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropdownDivider}`, {
	height: 0,
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: 'hidden',
	border: 0,
	borderTop: `1px solid ${varBsDropdownDividerBg}`,
	opacity: 1,
})

// ── .dropdown-item ────────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropdownItem}`, {
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
	`${materiaScope}${dropdownItem}:hover, ${materiaScope}${dropdownItem}:focus`,
	{
		color: varBsDropdownLinkHoverColor,
		backgroundColor: varBsDropdownLinkHoverBg,
	},
)

globalStyle(
	`${materiaScope}${dropdownItem}${dropdownItemActive}, ${materiaScope}${dropdownItem}:active`,
	{
		color: varBsDropdownLinkActiveColor,
		textDecoration: 'none',
		backgroundColor: varBsDropdownLinkActiveBg,
	},
)

globalStyle(
	`${materiaScope}${dropdownItem}${dropdownItemDisabled}, ${materiaScope}${dropdownItem}:disabled`,
	{
		color: varBsDropdownLinkDisabledColor,
		pointerEvents: 'none',
		backgroundColor: 'transparent',
	},
)

// ── .dropdown-menu.show ───────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropdownMenu}${dropdownMenuShow}`, { display: 'block' })

// ── .dropdown-header ──────────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropdownHeader}`, {
	display: 'block',
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: '0.875rem',
	color: varBsDropdownHeaderColor,
	whiteSpace: 'nowrap',
})

globalStyle(`${materiaScope}${dropdownHeader}${h6}`, {
	marginBottom: 0,
	fontSize: '0.875rem',
	fontWeight: 500,
	color: varBsDropdownHeaderColor,
})

// ── .dropdown-item-text ───────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropdownItemText}`, {
	display: 'block',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})

// ── .dropdown-menu-dark ───────────────────────────────────────────────────────

globalStyle(`${materiaScope}${dropdownMenuDark}`, {
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
		[varBsDropdownLinkActiveBg]: '#2196f3',
		[varBsDropdownLinkDisabledColor]: '#adb5bd',
		[varBsDropdownHeaderColor]: '#adb5bd',
	},
})

