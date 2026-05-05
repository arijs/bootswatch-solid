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
	dropstart,
	dropdownToggle,
	dropdownToggleSplit,
	dropup,
	dropupCenter,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import { h6 } from '../../../../theme-contract/contents/contract.css'
import { solarScope } from '../../scope.css'

// ── Wrapper positioning ───────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown, .dropstart, .dropup-center, .dropdown-center { position: relative; }
globalStyle(
	[
		`${solarScope}${dropdown}`,
		`${solarScope}${dropstart}`,
		`${solarScope}${dropupCenter}`,
		`${solarScope}${dropdownCenter}`,
	].join(', '),
	{ position: 'relative' },
)

// ── Dropdown toggle caret ─────────────────────────────────────────────────────

// SOURCE CSS: .dropdown-toggle { white-space: nowrap; }
globalStyle(`${solarScope}${dropdownToggle}`, { whiteSpace: 'nowrap' })

// SOURCE CSS: .dropdown-toggle::after { display: inline-block; margin-left: 0.255em;
//   vertical-align: 0.255em; content: ""; border-top: 0.3em solid;
//   border-right: 0.3em solid transparent; border-bottom: 0;
//   border-left: 0.3em solid transparent; }
globalStyle(`${solarScope}${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: '0.3em solid',
	borderRight: '0.3em solid transparent',
	borderBottom: 0,
	borderLeft: '0.3em solid transparent',
})

// SOURCE CSS: .dropdown-toggle:empty::after { margin-left: 0; }
globalStyle(`${solarScope}${dropdownToggle}:empty::after`, { marginLeft: 0 })

// ── Dropdown menu ─────────────────────────────────────────────────────────────

// SOURCE CSS: .dropdown-menu { --bs-dropdown-* vars + layout }
globalStyle(`${solarScope}${dropdownMenu}`, {
	vars: {
		[varBsDropdownZindex]: '1000',
		[varBsDropdownMinWidth]: '10rem',
		[varBsDropdownPaddingX]: '0',
		[varBsDropdownPaddingY]: '0.5rem',
		[varBsDropdownSpacer]: '0.125rem',
		[varBsDropdownFontSize]: '1rem',
		[varBsDropdownColor]: varBsBodyColor,
		[varBsDropdownBg]: '#073642',
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBorderRadius]: varBsBorderRadius,
		[varBsDropdownBorderWidth]: varBsBorderWidth,
		[varBsDropdownInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
		[varBsDropdownDividerBg]: '#002b36',
		[varBsDropdownDividerMarginY]: '0.5rem',
		[varBsDropdownBoxShadow]: varBsBoxShadow,
		[varBsDropdownLinkColor]: '#839496',
		[varBsDropdownLinkHoverColor]: 'rgba(255, 255, 255, 0.75)',
		[varBsDropdownLinkHoverBg]: '#002b36',
		[varBsDropdownLinkActiveColor]: 'rgba(255, 255, 255, 0.75)',
		[varBsDropdownLinkActiveBg]: '#073642',
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: '1rem',
		[varBsDropdownItemPaddingY]: '0.25rem',
		[varBsDropdownHeaderColor]: '#839496',
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
	border: `${varBsDropdownBorderWidth} solid ${varBsDropdownBorderColor}`,
	borderRadius: varBsDropdownBorderRadius,
})

// SOURCE CSS: .dropdown-menu[data-bs-popper] { top: 100%; left: 0; margin-top: ...; }
globalStyle(`${solarScope}${dropdownMenu}[data-bs-popper]`, {
	top: '100%',
	left: 0,
	marginTop: varBsDropdownSpacer,
})

// ── Menu alignment modifiers ──────────────────────────────────────────────────

// SOURCE CSS: .dropdown-menu-start { --bs-position: start; }
globalStyle(`${solarScope}${dropdownMenuStart}`, {
	vars: { [varBsDropdownPosition]: 'start' },
})
globalStyle(`${solarScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: 'auto',
	left: 0,
})

// SOURCE CSS: .dropdown-menu-end { --bs-position: end; }
globalStyle(`${solarScope}${dropdownMenuEnd}`, {
	vars: { [varBsDropdownPosition]: 'end' },
})
globalStyle(`${solarScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: 0,
	left: 'auto',
})

// ── .dropup variant ───────────────────────────────────────────────────────────

// SOURCE CSS: .dropup .dropdown-menu[data-bs-popper] { top: auto; bottom: 100%; … }
globalStyle(`${solarScope}${dropup} ${dropdownMenu}[data-bs-popper]`, {
	top: 'auto',
	bottom: '100%',
	marginTop: 0,
	marginBottom: varBsDropdownSpacer,
})

// SOURCE CSS: .dropup .dropdown-toggle::after { ... border-top: 0; border-bottom: 0.3em solid; }
globalStyle(`${solarScope}${dropup} ${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: 0,
	borderRight: '0.3em solid transparent',
	borderBottom: '0.3em solid',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${solarScope}${dropup} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── .dropend variant ──────────────────────────────────────────────────────────

// SOURCE CSS: .dropend .dropdown-menu[data-bs-popper] { top: 0; right: auto; left: 100%; … }
globalStyle(`${solarScope}${dropend} ${dropdownMenu}[data-bs-popper]`, {
	top: 0,
	right: 'auto',
	left: '100%',
	marginTop: 0,
	marginLeft: varBsDropdownSpacer,
})

// SOURCE CSS: .dropend .dropdown-toggle::after { border-right: 0; border-left: 0.3em solid; … }
globalStyle(`${solarScope}${dropend} ${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: 0,
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: 0,
	borderBottom: '0.3em solid transparent',
	borderLeft: '0.3em solid',
})

globalStyle(`${solarScope}${dropend} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── .dropstart variant ────────────────────────────────────────────────────────

// SOURCE CSS: .dropstart .dropdown-menu[data-bs-popper] { top: 0; right: 100%; left: auto; … }
globalStyle(`${solarScope}${dropstart} ${dropdownMenu}[data-bs-popper]`, {
	top: 0,
	right: '100%',
	left: 'auto',
	marginTop: 0,
	marginRight: varBsDropdownSpacer,
})

// SOURCE CSS: .dropstart .dropdown-toggle::after { display: none; }
globalStyle(`${solarScope}${dropstart} ${dropdownToggle}::after`, {
	display: 'none',
})

// SOURCE CSS: .dropstart .dropdown-toggle::before { ... border-right: 0.3em solid; }
globalStyle(`${solarScope}${dropstart} ${dropdownToggle}::before`, {
	display: 'inline-block',
	marginRight: '0.255em',
	verticalAlign: 0,
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0.3em solid',
	borderBottom: '0.3em solid transparent',
})

globalStyle(`${solarScope}${dropstart} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── .dropdown-toggle-split ────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown-toggle-split { padding-right: 0.5625rem; padding-left: 0.5625rem; }
// .dropdown-toggle-split::after { margin-left: 0; }
globalStyle(`${solarScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
	borderTopRightRadius: varBsBorderRadius,
	borderBottomRightRadius: varBsBorderRadius,
})
globalStyle(`${solarScope}${dropdownToggleSplit}::after`, { marginLeft: 0 })
globalStyle(
	[
		`${solarScope}${dropup} ${dropdownToggleSplit}::after`,
		`${solarScope}${dropend} ${dropdownToggleSplit}::after`,
	].join(', '),
	{ marginLeft: 0 },
)
globalStyle(`${solarScope}${dropstart} ${dropdownToggleSplit}::before`, {
	marginRight: 0,
})

// ── .dropdown-divider ─────────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown-divider { height: 0; margin: var(--bs-dropdown-divider-margin-y) 0;
//   overflow: hidden; border-top: 1px solid var(--bs-dropdown-divider-bg);
//   opacity: 1; }
globalStyle(`${solarScope}${dropdownDivider}`, {
	height: 0,
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: 'hidden',
	border: 0,
	borderTop: `1px solid ${varBsDropdownDividerBg}`,
	opacity: 1,
})

// ── .dropdown-item ────────────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown-item { display: block; width: 100%;
//   padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
//   clear: both; font-weight: 400; color: var(--bs-dropdown-link-color);
//   text-align: inherit; text-decoration: none; white-space: nowrap;
//   background-color: transparent; border: 0;
//   border-radius: var(--bs-dropdown-item-border-radius, 0); }
globalStyle(`${solarScope}${dropdownItem}`, {
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

// SOURCE CSS: .dropdown-item:hover, .dropdown-item:focus { … }
globalStyle(
	`${solarScope}${dropdownItem}:hover, ${solarScope}${dropdownItem}:focus`,
	{
		color: varBsDropdownLinkHoverColor,
		backgroundColor: varBsDropdownLinkHoverBg,
	},
)

// SOURCE CSS: .dropdown-item.active, .dropdown-item:active { … }
globalStyle(
	`${solarScope}${dropdownItem}${dropdownItemActive}, ${solarScope}${dropdownItem}:active`,
	{
		color: varBsDropdownLinkActiveColor,
		textDecoration: 'none',
		backgroundColor: varBsDropdownLinkActiveBg,
	},
)

// SOURCE CSS: .dropdown-item.disabled, .dropdown-item:disabled { … }
globalStyle(
	`${solarScope}${dropdownItem}${dropdownItemDisabled}, ${solarScope}${dropdownItem}:disabled`,
	{
		color: varBsDropdownLinkDisabledColor,
		pointerEvents: 'none',
		backgroundColor: 'transparent',
	},
)

// ── .dropdown-menu.show ───────────────────────────────────────────────────────

globalStyle(`${solarScope}${dropdownMenu}${dropdownMenuShow}`, { display: 'block' })

// ── .dropdown-header ──────────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown-header { display: block;
//   padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
//   margin-bottom: 0; font-size: 0.875rem;
//   color: var(--bs-dropdown-header-color); white-space: nowrap; }
globalStyle(`${solarScope}${dropdownHeader}`, {
	display: 'block',
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: '0.875rem',
	color: varBsDropdownHeaderColor,
	whiteSpace: 'nowrap',
})

// Dropdown header is rendered as <h6>; keep dropdown-header semantics over heading defaults.
globalStyle(`${solarScope}${dropdownHeader}${h6}`, {
	marginBottom: 0,
	fontSize: '0.875rem',
	color: varBsDropdownHeaderColor,
})

// ── .dropdown-item-text ───────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown-item-text { display: block;
//   padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
//   color: var(--bs-dropdown-link-color); }
globalStyle(`${solarScope}${dropdownItemText}`, {
	display: 'block',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})

// ── .dropdown-menu-dark ───────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown-menu-dark { --bs-dropdown-color: #dee2e6; --bs-dropdown-bg: #343a40; … }
globalStyle(`${solarScope}${dropdownMenuDark}`, {
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

