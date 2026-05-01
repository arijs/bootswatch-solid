import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBodyColorRgb,
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
	varBsEmphasisColor,
	varBsEmphasisColorRgb,
	varBsSecondaryColor,
	varBsSecondaryBg,
	varBsTertiaryColor,
	varBsTertiaryBg,
	varBsLinkColor,
	varBsLinkHoverColor,
} from '../../theme-contract/_vars.css'
import { body, bodyText, vars } from '../../theme-contract/theme-contract.css'

// Sketchy theme scope class.
// Zero-style identifier used as a stable selector prefix.
//
// Key visual differentiators vs Bootstrap:
//   - Font: 'Neucha', cursive  (the hand-written Bootswatch Sketchy typeface)
//   - Buttons: 2 px border, irregular border-radius (hand-drawn look)
export const sketchyScope = style({})

// Global Sketchy CSS custom properties (`--bs-*`) are assigned on the
// dedicated vars contract class to keep root var hosting separate from body
// layout/background styles.
globalStyle(`${sketchyScope}${vars}`, {
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
		[varBsDarkTextEmphasis]: '#555',
		// Subtle background colours (Bootstrap defaults, retained)
		[varBsPrimaryBgSubtle]: '#d6d6d6',
		[varBsSecondaryBgSubtle]: '#dddddd',
		[varBsSuccessBgSubtle]: '#d4edda',
		[varBsInfoBgSubtle]: '#d1ecf1',
		[varBsWarningBgSubtle]: '#fff3cd',
		[varBsDangerBgSubtle]: '#f8d7da',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ccc',
		// Subtle border colours (Sketchy overrides)
		[varBsPrimaryBorderSubtle]: '#adadad',
		[varBsSecondaryBorderSubtle]: '#bbbbbb',
		[varBsSuccessBorderSubtle]: '#a9dcb5',
		[varBsInfoBorderSubtle]: '#a2dae3',
		[varBsWarningBorderSubtle]: '#ffe69c',
		[varBsDangerBorderSubtle]: '#f1aeb5',
		[varBsLightBorderSubtle]: '#f7f7f9',
		[varBsDarkBorderSubtle]: '#aaa',
		// Body defaults
		[varBsBodyColor]: '#212529',
		[varBsBodyColorRgb]: '33, 37, 41',
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
		[varBsFocusRingColor]: 'rgba(51, 51, 51, 0.25)',
		// Contextual / semantic UI colours (same as Bootstrap)
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(33, 37, 41, 0.75)',
		[varBsSecondaryBg]: '#f7f7f9',
		[varBsTertiaryColor]: 'rgba(33, 37, 41, 0.5)',
		[varBsTertiaryBg]: '#f8f9fa',
		// Links (same as Bootstrap)
		[varBsLinkColor]: '#333',
		[varBsLinkHoverColor]: '#292929',
	},
})

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

// Outer wrapper for direct body-level properties (layout/background).
// Applied to any element that carries BOTH sketchyScope + body.
globalStyle(`${sketchyScope}${body}`, {
	backgroundColor: '#fff',
	padding: '1rem',
	display: 'block',
})
