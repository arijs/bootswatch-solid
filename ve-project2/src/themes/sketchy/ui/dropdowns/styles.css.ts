import { globalStyle } from '@vanilla-extract/css'
import {
varBsBodyBg,
varBsBodyColor,
varBsBorderRadius,
varBsBorderWidth,
varBsBoxShadow,
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
import { h6 } from '../../../../theme-contract/contents/contract.css'
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
import { sketchyScope } from '../../scope.css'

// ── Wrapper positioning ───────────────────────────────────────────────────────

globalStyle(
[
`${sketchyScope}${dropdown}`,
`${sketchyScope}${dropstart}`,
`${sketchyScope}${dropupCenter}`,
`${sketchyScope}${dropdownCenter}`,
].join(', '),
{ position: 'relative' },
)

// ── Dropdown toggle caret ─────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropdownToggle}`, { whiteSpace: 'nowrap' })

globalStyle(`${sketchyScope}${dropdownToggle}::after`, {
display: 'inline-block',
marginLeft: '0.255em',
verticalAlign: '0.255em',
content: '""',
borderTop: '0.3em solid',
borderRight: '0.3em solid transparent',
borderBottom: 0,
borderLeft: '0.3em solid transparent',
})

globalStyle(`${sketchyScope}${dropdownToggle}:empty::after`, { marginLeft: 0 })

// ── Dropdown menu ─────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropdownMenu}`, {
vars: {
[varBsDropdownZindex]: '1000',
[varBsDropdownMinWidth]: '10rem',
[varBsDropdownPaddingX]: '0',
[varBsDropdownPaddingY]: '0.5rem',
[varBsDropdownSpacer]: '0.125rem',
[varBsDropdownFontSize]: '1rem',
[varBsDropdownColor]: varBsBodyColor,
[varBsDropdownBg]: varBsBodyBg,
[varBsDropdownBorderColor]: '#333',
[varBsDropdownBorderRadius]: varBsBorderRadius,
[varBsDropdownBorderWidth]: varBsBorderWidth,
[varBsDropdownInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
[varBsDropdownDividerBg]: '#333',
[varBsDropdownDividerMarginY]: '0.5rem',
[varBsDropdownBoxShadow]: varBsBoxShadow,
[varBsDropdownLinkColor]: varBsBodyColor,
[varBsDropdownLinkHoverColor]: '#fff',
[varBsDropdownLinkHoverBg]: '#333',
[varBsDropdownLinkActiveColor]: '#fff',
[varBsDropdownLinkActiveBg]: '#333',
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
margin: 0,
fontSize: varBsDropdownFontSize,
color: varBsDropdownColor,
textAlign: 'left',
listStyle: 'none',
backgroundColor: varBsDropdownBg,
backgroundClip: 'padding-box',
border: `${varBsDropdownBorderWidth} solid ${varBsDropdownBorderColor}`,
borderRadius: varBsDropdownBorderRadius,
overflow: 'hidden',
})

// Sketchy hand-drawn border-radius
globalStyle(`${sketchyScope}${dropdownMenu}`, {
borderRadius: '555px 25px 25px 25px/25px 25px 25px 555px',
})

globalStyle(`${sketchyScope}${dropdownMenu}[data-bs-popper]`, {
top: '100%',
left: 0,
marginTop: varBsDropdownSpacer,
})

// ── Menu alignment modifiers ──────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropdownMenuStart}`, { vars: { '--bs-position': 'start' } })
globalStyle(`${sketchyScope}${dropdownMenuStart}[data-bs-popper]`, {
right: 'auto',
left: 0,
})

globalStyle(`${sketchyScope}${dropdownMenuEnd}`, { vars: { '--bs-position': 'end' } })
globalStyle(`${sketchyScope}${dropdownMenuEnd}[data-bs-popper]`, {
right: 0,
left: 'auto',
})

// ── .dropup variant ───────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropup} ${dropdownMenu}[data-bs-popper]`, {
top: 'auto',
bottom: '100%',
marginTop: 0,
marginBottom: varBsDropdownSpacer,
})

globalStyle(`${sketchyScope}${dropup} ${dropdownToggle}::after`, {
display: 'inline-block',
marginLeft: '0.255em',
verticalAlign: '0.255em',
content: '""',
borderTop: 0,
borderRight: '0.3em solid transparent',
borderBottom: '0.3em solid',
borderLeft: '0.3em solid transparent',
})

globalStyle(`${sketchyScope}${dropup} ${dropdownToggle}:empty::after`, {
marginLeft: 0,
})

// ── .dropend variant ──────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropend} ${dropdownMenu}[data-bs-popper]`, {
top: 0,
right: 'auto',
left: '100%',
marginTop: 0,
marginLeft: varBsDropdownSpacer,
})

globalStyle(`${sketchyScope}${dropend} ${dropdownToggle}::after`, {
display: 'inline-block',
marginLeft: '0.255em',
verticalAlign: 0,
content: '""',
borderTop: '0.3em solid transparent',
borderRight: 0,
borderBottom: '0.3em solid transparent',
borderLeft: '0.3em solid',
})

globalStyle(`${sketchyScope}${dropend} ${dropdownToggle}:empty::after`, {
marginLeft: 0,
})

// ── .dropstart variant ────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropstart} ${dropdownMenu}[data-bs-popper]`, {
top: 0,
right: '100%',
left: 'auto',
marginTop: 0,
marginRight: varBsDropdownSpacer,
})

globalStyle(`${sketchyScope}${dropstart} ${dropdownToggle}::after`, {
display: 'none',
})

globalStyle(`${sketchyScope}${dropstart} ${dropdownToggle}::before`, {
display: 'inline-block',
marginRight: '0.255em',
verticalAlign: 0,
content: '""',
borderTop: '0.3em solid transparent',
borderRight: '0.3em solid',
borderBottom: '0.3em solid transparent',
})

globalStyle(`${sketchyScope}${dropstart} ${dropdownToggle}:empty::after`, {
marginLeft: 0,
})

// ── .dropdown-toggle-split ────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropdownToggleSplit}`, {
paddingRight: '0.5625rem',
paddingLeft: '0.5625rem',
})
globalStyle(`${sketchyScope}${dropdownToggleSplit}::after`, { marginLeft: 0 })
globalStyle(
[
`${sketchyScope}${dropup} ${dropdownToggleSplit}::after`,
`${sketchyScope}${dropend} ${dropdownToggleSplit}::after`,
].join(', '),
{ marginLeft: 0 },
)
globalStyle(`${sketchyScope}${dropstart} ${dropdownToggleSplit}::before`, {
marginRight: 0,
})

// ── .dropdown-divider ─────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropdownDivider}`, {
height: 0,
margin: `${varBsDropdownDividerMarginY} 0`,
overflow: 'hidden',
border: 0,
borderTop: `1px solid ${varBsDropdownDividerBg}`,
borderTopWidth: '2px',
opacity: 1,
})

// ── .dropdown-item ────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropdownItem}`, {
display: 'block',
width: '100%',
padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
clear: 'both',
fontWeight: 400,
color: varBsBodyColor,
textAlign: 'inherit',
textDecoration: 'none',
whiteSpace: 'nowrap',
backgroundColor: 'transparent',
border: 0,
})

globalStyle(
`${sketchyScope}${dropdownItem}:hover, ${sketchyScope}${dropdownItem}:focus`,
{
color: varBsDropdownLinkHoverColor,
backgroundColor: varBsDropdownLinkHoverBg,
},
)

globalStyle(
`${sketchyScope}${dropdownItem}${dropdownItemActive}, ${sketchyScope}${dropdownItem}:active`,
{
color: varBsDropdownLinkActiveColor,
textDecoration: 'none',
backgroundColor: varBsDropdownLinkActiveBg,
},
)

globalStyle(
`${sketchyScope}${dropdownItem}${dropdownItemDisabled}, ${sketchyScope}${dropdownItem}:disabled`,
{
color: varBsDropdownLinkDisabledColor,
pointerEvents: 'none',
backgroundColor: 'transparent',
},
)

// ── .dropdown-menu.show ───────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropdownMenu}${dropdownMenuShow}`, { display: 'block' })

// Screenshot interactive scenarios force-open via literal `.show` class.
// Support both contract show class and literal class to keep parity in opened-state captures.
globalStyle(`${sketchyScope}${dropdownMenu}.show`, { display: 'block' })

// Fallback text coloring when opened-state class toggles bypass runtime class constants.
globalStyle(`${sketchyScope}${dropdownMenu}.show a`, {
	color: varBsBodyColor,
	textDecoration: 'none',
})

globalStyle(`${sketchyScope}${dropdownMenu}.show ${dropdownHeader}`, {
	color: '#868e96',
})

// ── .dropdown-header ──────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropdownHeader}`, {
	display: 'block',
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: '0.875rem',
	color: '#868e96',
	whiteSpace: 'nowrap',
})

// Heading element used as dropdown header inherits Sketchy heading font.
// Also re-asserts marginBottom:0 since the h6 heading rule (rendered later in CSS)
// would otherwise override dropdown-header's margin-bottom:0 with 0.5rem.
globalStyle(`${sketchyScope}${dropdownHeader}${h6}`, {
	marginBottom: 0,
	fontSize: '0.875rem',
	color: '#868e96',
	fontFamily: '"Cabin Sketch", cursive',
	fontWeight: 500,
	lineHeight: 1.2,
})

// ── .dropdown-item-text ───────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropdownItemText}`, {
	display: 'block',
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})

// ── .dropdown-menu-dark ───────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${dropdownMenuDark}`, {
vars: {
[varBsDropdownColor]: '#dee2e6',
[varBsDropdownBg]: '#343a40',
[varBsDropdownBorderColor]: '#333',
[varBsDropdownBoxShadow]: '',
[varBsDropdownLinkColor]: '#dee2e6',
[varBsDropdownLinkHoverColor]: '#fff',
[varBsDropdownDividerBg]: '#333',
[varBsDropdownLinkHoverBg]: 'rgba(255, 255, 255, 0.15)',
[varBsDropdownLinkActiveColor]: '#fff',
[varBsDropdownLinkActiveBg]: '#333',
[varBsDropdownLinkDisabledColor]: '#adb5bd',
[varBsDropdownHeaderColor]: '#868e96',
},
})
