import { globalStyle, style } from '@vanilla-extract/css'
import { body, bodyText } from '../../theme-contract/theme-contract.css'
import {
	varBsBorderColor,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderRadius2xl,
	varBsBorderRadiusLg,
	varBsBorderRadiusPill,
	varBsBorderRadiusSm,
	varBsBorderRadiusXl,
	varBsBorderRadiusXxl,
	varBsBorderStyle,
	varBsBorderWidth,
	varBsBodyBg,
	varBsBodyColor,
	varBsBoxShadow,
	varBsBoxShadowInset,
	varBsBoxShadowLg,
	varBsBoxShadowSm,
	varBsDanger,
	varBsDangerBgSubtle,
	varBsDangerBorderSubtle,
	varBsDangerRgb,
	varBsDangerTextEmphasis,
	varBsDark,
	varBsDarkBgSubtle,
	varBsDarkBorderSubtle,
	varBsDarkRgb,
	varBsDarkTextEmphasis,
	varBsFocusRingColor,
	varBsFocusRingOpacity,
	varBsFocusRingWidth,
	varBsInfo,
	varBsInfoBgSubtle,
	varBsInfoBorderSubtle,
	varBsInfoRgb,
	varBsInfoTextEmphasis,
	varBsLight,
	varBsLightBgSubtle,
	varBsLightBorderSubtle,
	varBsLightRgb,
	varBsLightTextEmphasis,
	varBsPrimary,
	varBsPrimaryBgSubtle,
	varBsPrimaryBorderSubtle,
	varBsPrimaryRgb,
	varBsPrimaryTextEmphasis,
	varBsSecondary,
	varBsSecondaryBgSubtle,
	varBsSecondaryBorderSubtle,
	varBsSecondaryRgb,
	varBsSecondaryTextEmphasis,
	varBsSuccess,
	varBsSuccessBgSubtle,
	varBsSuccessBorderSubtle,
	varBsSuccessRgb,
	varBsSuccessTextEmphasis,
	varBsWarning,
	varBsWarningBgSubtle,
	varBsWarningBorderSubtle,
	varBsWarningRgb,
	varBsWarningTextEmphasis,
} from '../../theme-contract/_vars.css'

// Sketchy theme scope class.
// Zero-style identifier — just a stable hashed class name used as a selector
// prefix in compound rules.  No CSS is embedded here; all Sketchy root styles
// are wired through globalStyle compound selectors below so the same
// element-owned pattern used for components also applies to body-level traits.
//
// Key visual differentiators vs Bootstrap:
//   - Font: 'Neucha', cursive  (the hand-written Bootswatch Sketchy typeface)
//   - Buttons: 2 px border, irregular border-radius (hand-drawn look)
export const sketchyScope = style({})

// ── Root / body styles ────────────────────────────────────────────────────────

// Text-bearing root: sets the Sketchy base typography (Neucha handwritten font).
// Applied to any element that carries BOTH sketchyScope + bodyText.
globalStyle(`${sketchyScope}${bodyText}`, {
	fontFamily: "'Neucha', cursive",
	fontSize: '1rem',
	fontWeight: 700,
	lineHeight: 1.5,
	color: '#212529',
})

// Outer wrapper: sets Sketchy's global CSS custom properties so every
// component inside inherits them, then applies background and layout.
// Applied to any element that carries BOTH sketchyScope + body.
//
// SOURCE CSS (Sketchy :root block — values that differ from Bootstrap default):
//   --bs-border-width: 2px; --bs-border-radius: 25px; --bs-primary: #333; …
globalStyle(`${sketchyScope}${body}`, {
	vars: {
		// Semantic colours (Sketchy overrides)
		[varBsPrimary]: '#333',
		[varBsSecondary]: '#555',
		[varBsSuccess]: '#28a745',
		[varBsInfo]: '#17a2b8',
		[varBsWarning]: '#ffc107',
		[varBsDanger]: '#dc3545',
		[varBsLight]: '#fff',
		[varBsDark]: '#555',
		// RGB triples (Sketchy overrides)
		[varBsPrimaryRgb]: '51, 51, 51',
		[varBsSecondaryRgb]: '85, 85, 85',
		[varBsSuccessRgb]: '40, 167, 69',
		[varBsInfoRgb]: '23, 162, 184',
		[varBsWarningRgb]: '255, 193, 7',
		[varBsDangerRgb]: '220, 53, 69',
		[varBsLightRgb]: '255, 255, 255',
		[varBsDarkRgb]: '85, 85, 85',
		// Text-emphasis colours (Sketchy overrides)
		[varBsPrimaryTextEmphasis]: '#141414',
		[varBsSecondaryTextEmphasis]: '#222222',
		[varBsSuccessTextEmphasis]: '#10431c',
		[varBsInfoTextEmphasis]: '#09414a',
		[varBsWarningTextEmphasis]: '#664d03',
		[varBsDangerTextEmphasis]: '#58151c',
		[varBsLightTextEmphasis]: '#555',
		[varBsDarkTextEmphasis]: '#222',
		// Subtle background colours (Bootstrap defaults, retained)
		[varBsPrimaryBgSubtle]: '#cfe2ff',
		[varBsSecondaryBgSubtle]: '#e2e3e5',
		[varBsSuccessBgSubtle]: '#d1e7dd',
		[varBsInfoBgSubtle]: '#cff4fc',
		[varBsWarningBgSubtle]: '#fff3cd',
		[varBsDangerBgSubtle]: '#f8d7da',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		// Subtle border colours (Bootstrap defaults, retained)
		[varBsPrimaryBorderSubtle]: '#9ec5fe',
		[varBsSecondaryBorderSubtle]: '#c4c8cb',
		[varBsSuccessBorderSubtle]: '#a3cfbb',
		[varBsInfoBorderSubtle]: '#9eeaf9',
		[varBsWarningBorderSubtle]: '#ffe69c',
		[varBsDangerBorderSubtle]: '#f1aeb5',
		[varBsLightBorderSubtle]: '#e9ecef',
		[varBsDarkBorderSubtle]: '#adb5bd',
		// Body defaults
		[varBsBodyColor]: '#212529',
		[varBsBodyBg]: '#fff',
		// Borders (Sketchy uses 2px width and 25px radius)
		[varBsBorderWidth]: '2px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#dee2e6',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		// Border radii (Sketchy uses larger radii for hand-drawn look)
		[varBsBorderRadius]: '25px',
		[varBsBorderRadiusSm]: '15px',
		[varBsBorderRadiusLg]: '35px',
		[varBsBorderRadiusXl]: '1rem',
		[varBsBorderRadiusXxl]: '2rem',
		[varBsBorderRadius2xl]: '2rem',
		[varBsBorderRadiusPill]: '50rem',
		// Shadows (same as Bootstrap)
		[varBsBoxShadow]: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
		[varBsBoxShadowSm]: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
		[varBsBoxShadowLg]: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
		[varBsBoxShadowInset]: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)',
		// Focus ring (same as Bootstrap)
		[varBsFocusRingWidth]: '0.25rem',
		[varBsFocusRingOpacity]: '0.25',
		[varBsFocusRingColor]: 'rgba(13, 110, 253, 0.25)',
	},
	backgroundColor: '#fff',
	padding: '1rem',
	display: 'block',
})

