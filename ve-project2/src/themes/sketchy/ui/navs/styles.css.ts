import { globalStyle } from '@vanilla-extract/css'
import {
	nav,
	navLink,
	navLinkActive,
	navLinkDisabled,
	navPills,
	navTabs,
} from '../../../../theme-contract/ui/navs/contract.css'
import {
	varBsNavLinkColor,
	varBsNavLinkDisabledColor,
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
import {
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBodyBg,
	varBsEmphasisColor,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import { sketchyScope } from '../../scope.css'

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
	// SOURCE CSS (bootswatch Sketchy override): .nav-link { text-decoration: none; }
	textDecoration: 'none',
	background: 'none',
	appearance: 'none',
	border: 0,
	fontFamily: 'inherit',
	fontSize: 'inherit',
	lineHeight: 'inherit',
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
		[varBsNavTabsBorderColor]: '#333',
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: '#333',
		[varBsNavTabsLinkActiveColor]: varBsEmphasisColor,
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: '#333',
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

// ── .nav-pills ────────────────────────────────────────────────────────────────

globalStyle(`${sketchyScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: '#fff',
		[varBsNavPillsLinkActiveBg]: '#333',
	},
})

// SOURCE CSS (bootswatch Sketchy override):
// .nav-pills .nav-link { border-radius: $border-radius-sketchy; }
// $border-radius-sketchy = 255px 25px 225px 25px/25px 225px 25px 255px
globalStyle(`${sketchyScope}${navPills} ${navLink}`, {
	borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
})

globalStyle(`${sketchyScope}${navPills} ${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})
