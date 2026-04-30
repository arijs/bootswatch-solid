import { globalStyle } from '@vanilla-extract/css'
import {
cardHeaderTabs,
nav,
navLink,
navLinkActive,
navLinkDisabled,
navTabs,
} from '../../../../theme-contract/ui/card-tabs/contract.css'
import {
varBsNavLinkColor,
varBsNavLinkDisabledColor,
varBsNavLinkFontWeight,
varBsNavLinkHoverColor,
varBsNavLinkPaddingX,
varBsNavLinkPaddingY,
varBsNavTabsBorderColor,
varBsNavTabsBorderRadius,
varBsNavTabsBorderWidth,
varBsNavTabsLinkActiveBg,
varBsNavTabsLinkActiveBorderColor,
varBsNavTabsLinkActiveColor,
varBsNavTabsLinkHoverBorderColor,
} from '../../../../theme-contract/ui/card-tabs/_vars.css'
import {
varBsBorderColor,
varBsBorderRadius,
varBsBorderWidth,
varBsBodyBg,
varBsEmphasisColor,
varBsLinkColor,
varBsLinkHoverColor,
varBsSecondaryBg,
varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import { sketchyScope } from '../../scope.css'
import {
varBsCardBg,
varBsCardCapPaddingX,
varBsCardCapPaddingY,
} from '../../../../theme-contract/ui/card/_vars.css'

// ── .nav base ─────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${nav}`, {
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
paddingLeft: 0,
marginBottom: 0,
listStyle: 'none',
})

// ── .nav-link ─────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${navLink}`, {
display: 'block',
padding: `${varBsNavLinkPaddingY} ${varBsNavLinkPaddingX}`,
fontWeight: varBsNavLinkFontWeight,
color: varBsNavLinkColor,
textDecoration: 'none',
background: 'none',
border: 0,
transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
})

globalStyle(`${sketchyScope}${navLink}:hover, ${sketchyScope}${navLink}:focus`, {
color: varBsNavLinkHoverColor,
})

globalStyle(
`${sketchyScope}${navLink}${navLinkDisabled}, ${sketchyScope}${navLink}:disabled`,
{
color: varBsNavLinkDisabledColor,
pointerEvents: 'none',
cursor: 'default',
},
)

// ── .nav-tabs ─────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${navTabs}`, {
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

// SOURCE CSS (bootswatch Sketchy override):
// .nav-tabs .nav-link { border-radius: 45px 15px 225px 5px/25px 225px 25px 255px; }
globalStyle(`${sketchyScope}${navTabs} ${navLink}`, {
marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
border: `${varBsNavTabsBorderWidth} solid transparent`,
borderRadius: '45px 15px 225px 5px/25px 225px 25px 255px',
})

globalStyle(
`${sketchyScope}${navTabs} ${navLink}:hover, ${sketchyScope}${navTabs} ${navLink}:focus`,
{
isolation: 'isolate',
borderColor: varBsNavTabsLinkHoverBorderColor,
},
)

globalStyle(`${sketchyScope}${navTabs} ${navLink}${navLinkActive}`, {
color: varBsNavTabsLinkActiveColor,
backgroundColor: varBsNavTabsLinkActiveBg,
borderColor: varBsNavTabsLinkActiveBorderColor,
})

// ── .card-header-tabs ─────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${cardHeaderTabs}`, {
marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
borderBottom: 0,
})

globalStyle(`${sketchyScope}${cardHeaderTabs} ${navLink}${navLinkActive}`, {
backgroundColor: varBsCardBg,
borderBottomColor: varBsCardBg,
})
