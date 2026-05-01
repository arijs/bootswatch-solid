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
import { bootstrapScope } from '../../scope.css'

// ── Wrapper positioning ───────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown, .dropstart, .dropup-center, .dropdown-center { position: relative; }
globalStyle(
	[
		`${bootstrapScope}${dropdown}`,
		`${bootstrapScope}${dropstart}`,
		`${bootstrapScope}${dropupCenter}`,
		`${bootstrapScope}${dropdownCenter}`,
	].join(', '),
	{ position: 'relative' },
)

// ── Dropdown toggle caret ─────────────────────────────────────────────────────

// SOURCE CSS: .dropdown-toggle { white-space: nowrap; }
globalStyle(`${bootstrapScope}${dropdownToggle}`, { whiteSpace: 'nowrap' })

// SOURCE CSS: .dropdown-toggle::after { display: inline-block; margin-left: 0.255em;
//   vertical-align: 0.255em; content: ""; border-top: 0.3em solid;
//   border-right: 0.3em solid transparent; border-bottom: 0;
//   border-left: 0.3em solid transparent; }
globalStyle(`${bootstrapScope}${dropdownToggle}::after`, {
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
globalStyle(`${bootstrapScope}${dropdownToggle}:empty::after`, { marginLeft: 0 })

// ── Dropdown menu ─────────────────────────────────────────────────────────────

// SOURCE CSS: .dropdown-menu { --bs-dropdown-* vars + layout }
globalStyle(`${bootstrapScope}${dropdownMenu}`, {
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
		[varBsDropdownLinkActiveBg]: '#0d6efd',
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: '1rem',
		[varBsDropdownItemPaddingY]: '0.25rem',
		[varBsDropdownHeaderColor]: '#6c757d',
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
globalStyle(`${bootstrapScope}${dropdownMenu}[data-bs-popper]`, {
	top: '100%',
	left: 0,
	marginTop: varBsDropdownSpacer,
})

// ── Menu alignment modifiers ──────────────────────────────────────────────────

// SOURCE CSS: .dropdown-menu-start { --bs-position: start; }
globalStyle(`${bootstrapScope}${dropdownMenuStart}`, { vars: { '--bs-position': 'start' } })
globalStyle(`${bootstrapScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: 'auto',
	left: 0,
})

// SOURCE CSS: .dropdown-menu-end { --bs-position: end; }
globalStyle(`${bootstrapScope}${dropdownMenuEnd}`, { vars: { '--bs-position': 'end' } })
globalStyle(`${bootstrapScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: 0,
	left: 'auto',
})

// ── .dropup variant ───────────────────────────────────────────────────────────

// SOURCE CSS: .dropup .dropdown-menu[data-bs-popper] { top: auto; bottom: 100%; … }
globalStyle(`${bootstrapScope}${dropup} ${dropdownMenu}[data-bs-popper]`, {
	top: 'auto',
	bottom: '100%',
	marginTop: 0,
	marginBottom: varBsDropdownSpacer,
})

// SOURCE CSS: .dropup .dropdown-toggle::after { ... border-top: 0; border-bottom: 0.3em solid; }
globalStyle(`${bootstrapScope}${dropup} ${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: '0.255em',
	content: '""',
	borderTop: 0,
	borderRight: '0.3em solid transparent',
	borderBottom: '0.3em solid',
	borderLeft: '0.3em solid transparent',
})

globalStyle(`${bootstrapScope}${dropup} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── .dropend variant ──────────────────────────────────────────────────────────

// SOURCE CSS: .dropend .dropdown-menu[data-bs-popper] { top: 0; right: auto; left: 100%; … }
globalStyle(`${bootstrapScope}${dropend} ${dropdownMenu}[data-bs-popper]`, {
	top: 0,
	right: 'auto',
	left: '100%',
	marginTop: 0,
	marginLeft: varBsDropdownSpacer,
})

// SOURCE CSS: .dropend .dropdown-toggle::after { border-right: 0; border-left: 0.3em solid; … }
globalStyle(`${bootstrapScope}${dropend} ${dropdownToggle}::after`, {
	display: 'inline-block',
	marginLeft: '0.255em',
	verticalAlign: 0,
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: 0,
	borderBottom: '0.3em solid transparent',
	borderLeft: '0.3em solid',
})

globalStyle(`${bootstrapScope}${dropend} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── .dropstart variant ────────────────────────────────────────────────────────

// SOURCE CSS: .dropstart .dropdown-menu[data-bs-popper] { top: 0; right: 100%; left: auto; … }
globalStyle(`${bootstrapScope}${dropstart} ${dropdownMenu}[data-bs-popper]`, {
	top: 0,
	right: '100%',
	left: 'auto',
	marginTop: 0,
	marginRight: varBsDropdownSpacer,
})

// SOURCE CSS: .dropstart .dropdown-toggle::after { display: none; }
globalStyle(`${bootstrapScope}${dropstart} ${dropdownToggle}::after`, {
	display: 'none',
})

// SOURCE CSS: .dropstart .dropdown-toggle::before { ... border-right: 0.3em solid; }
globalStyle(`${bootstrapScope}${dropstart} ${dropdownToggle}::before`, {
	display: 'inline-block',
	marginRight: '0.255em',
	verticalAlign: 0,
	content: '""',
	borderTop: '0.3em solid transparent',
	borderRight: '0.3em solid',
	borderBottom: '0.3em solid transparent',
})

globalStyle(`${bootstrapScope}${dropstart} ${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── .dropdown-toggle-split ────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown-toggle-split { padding-right: 0.5625rem; padding-left: 0.5625rem; }
// .dropdown-toggle-split::after { margin-left: 0; }
globalStyle(`${bootstrapScope}${dropdownToggleSplit}`, {
	paddingRight: '0.5625rem',
	paddingLeft: '0.5625rem',
})
globalStyle(`${bootstrapScope}${dropdownToggleSplit}::after`, { marginLeft: 0 })
globalStyle(
	[
		`${bootstrapScope}${dropup} ${dropdownToggleSplit}::after`,
		`${bootstrapScope}${dropend} ${dropdownToggleSplit}::after`,
	].join(', '),
	{ marginLeft: 0 },
)
globalStyle(`${bootstrapScope}${dropstart} ${dropdownToggleSplit}::before`, {
	marginRight: 0,
})

// ── .dropdown-divider ─────────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown-divider { height: 0; margin: var(--bs-dropdown-divider-margin-y) 0;
//   overflow: hidden; border-top: 1px solid var(--bs-dropdown-divider-bg);
//   opacity: 1; }
globalStyle(`${bootstrapScope}${dropdownDivider}`, {
	height: 0,
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: 'hidden',
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
globalStyle(`${bootstrapScope}${dropdownItem}`, {
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
	`${bootstrapScope}${dropdownItem}:hover, ${bootstrapScope}${dropdownItem}:focus`,
	{
		color: varBsDropdownLinkHoverColor,
		backgroundColor: varBsDropdownLinkHoverBg,
	},
)

// SOURCE CSS: .dropdown-item.active, .dropdown-item:active { … }
globalStyle(
	`${bootstrapScope}${dropdownItem}${dropdownItemActive}, ${bootstrapScope}${dropdownItem}:active`,
	{
		color: varBsDropdownLinkActiveColor,
		textDecoration: 'none',
		backgroundColor: varBsDropdownLinkActiveBg,
	},
)

// SOURCE CSS: .dropdown-item.disabled, .dropdown-item:disabled { … }
globalStyle(
	`${bootstrapScope}${dropdownItem}${dropdownItemDisabled}, ${bootstrapScope}${dropdownItem}:disabled`,
	{
		color: varBsDropdownLinkDisabledColor,
		pointerEvents: 'none',
		backgroundColor: 'transparent',
	},
)

// ── .dropdown-menu.show ───────────────────────────────────────────────────────

globalStyle(`${bootstrapScope}${dropdownMenu}${dropdownMenuShow}`, { display: 'block' })

// ── .dropdown-header ──────────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown-header { display: block;
//   padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
//   margin-bottom: 0; font-size: 0.875rem;
//   color: var(--bs-dropdown-header-color); white-space: nowrap; }
globalStyle(`${bootstrapScope}${dropdownHeader}`, {
	display: 'block',
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: '0.875rem',
	color: varBsDropdownHeaderColor,
	whiteSpace: 'nowrap',
})

// ── .dropdown-item-text ───────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown-item-text { display: block;
//   padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
//   color: var(--bs-dropdown-link-color); }
globalStyle(`${bootstrapScope}${dropdownItemText}`, {
	display: 'block',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})

// ── .dropdown-menu-dark ───────────────────────────────────────────────────────

// SOURCE CSS:
// .dropdown-menu-dark { --bs-dropdown-color: #dee2e6; --bs-dropdown-bg: #343a40; … }
globalStyle(`${bootstrapScope}${dropdownMenuDark}`, {
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
