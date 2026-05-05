import { globalStyle, style } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyBgRgb,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBodyFontFamily,
	varBsFontSansSerif,
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
	varBsHighlightColor,
	varBsHighlightBg,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsCodeColor,
	varBsFontMonospace,
} from '../../theme-contract/_vars.css'
import {
	varBsFormValidColor,
	varBsFormValidBorderColor,
	varBsFormInvalidColor,
	varBsFormInvalidBorderColor,
} from '../../theme-contract/forms/_vars.css'
import { body, bodyText, bodyFrame, vars } from '../../theme-contract/theme-contract.css'

// Solar theme scope class.
// Zero-style identifier used as a stable selector prefix.
export const solarScope = style({})

// Global Solar CSS custom properties (`--bs-*`) are assigned on the
// dedicated vars contract class to keep root var hosting separate from body
// layout/background styles.
globalStyle(`${solarScope}${vars}`, {
	vars: {
		// Semantic colours
		[varBsPrimary]: '#b58900',
		[varBsSecondary]: '#839496',
		[varBsSuccess]: '#2aa198',
		[varBsInfo]: '#268bd2',
		[varBsWarning]: '#cb4b16',
		[varBsDanger]: '#d33682',
		[varBsLight]: '#fdf6e3',
		[varBsDark]: '#073642',
		// RGB triples
		[varBsPrimaryRgb]: '181, 137, 0',
		[varBsSecondaryRgb]: '131, 148, 150',
		[varBsSuccessRgb]: '42, 161, 152',
		[varBsInfoRgb]: '38, 139, 210',
		[varBsWarningRgb]: '203, 75, 22',
		[varBsDangerRgb]: '211, 54, 130',
		[varBsLightRgb]: '253, 246, 227',
		[varBsDarkRgb]: '7, 54, 66',
		// Text-emphasis colours
		[varBsPrimaryTextEmphasis]: '#483700',
		[varBsSecondaryTextEmphasis]: '#343b3c',
		[varBsSuccessTextEmphasis]: '#11403d',
		[varBsInfoTextEmphasis]: '#0f3854',
		[varBsWarningTextEmphasis]: '#511e09',
		[varBsDangerTextEmphasis]: '#541634',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		// Subtle background colours
		[varBsPrimaryBgSubtle]: '#f0e7cc',
		[varBsSecondaryBgSubtle]: '#e6eaea',
		[varBsSuccessBgSubtle]: '#d4ecea',
		[varBsInfoBgSubtle]: '#d4e8f6',
		[varBsWarningBgSubtle]: '#f5dbd0',
		[varBsDangerBgSubtle]: '#f6d7e6',
		[varBsLightBgSubtle]: '#fefbf1',
		[varBsDarkBgSubtle]: '#ced4da',
		// Subtle border colours
		[varBsPrimaryBorderSubtle]: '#e1d099',
		[varBsSecondaryBorderSubtle]: '#cdd4d5',
		[varBsSuccessBorderSubtle]: '#aad9d6',
		[varBsInfoBorderSubtle]: '#a8d1ed',
		[varBsWarningBorderSubtle]: '#eab7a2',
		[varBsDangerBorderSubtle]: '#edafcd',
		[varBsLightBorderSubtle]: '#eee8d5',
		[varBsDarkBorderSubtle]: '#adb5bd',
		// Typography
		[varBsFontSansSerif]: '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		// Body defaults
		[varBsBodyColor]: '#839496',
		[varBsBodyColorRgb]: '131, 148, 150',
		[varBsBodyBg]: '#002b36',
		[varBsBodyBgRgb]: '0, 43, 54',
		// Borders
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#dee2e6',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		// Border radii
		[varBsBorderRadius]: '0.375rem',
		[varBsBorderRadiusSm]: '0.25rem',
		[varBsBorderRadiusLg]: '0.5rem',
		[varBsBorderRadiusXl]: '1rem',
		[varBsBorderRadiusXxl]: '2rem',
		[varBsBorderRadius2xl]: '2rem',
		[varBsBorderRadiusPill]: '50rem',
		// Shadows
		[varBsBoxShadow]: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
		[varBsBoxShadowSm]: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
		[varBsBoxShadowLg]: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
		[varBsBoxShadowInset]: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)',
		// Focus ring
		[varBsFocusRingWidth]: '0.25rem',
		[varBsFocusRingOpacity]: '0.25',
		[varBsFocusRingColor]: 'rgba(181, 137, 0, 0.25)',
		// Contextual / semantic UI colours
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(131, 148, 150, 0.75)',
		[varBsSecondaryBg]: '#eee8d5',
		[varBsTertiaryColor]: 'rgba(131, 148, 150, 0.5)',
		[varBsTertiaryBg]: '#fdf6e3',
		[varBsHighlightColor]: '#839496',
		[varBsHighlightBg]: '#f5dbd0',
		// Links
		[varBsLinkColor]: '#2aa198',
		[varBsLinkHoverColor]: '#2aa198',
		// Code
		[varBsCodeColor]: '#e83e8c',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		// Form validation
		[varBsFormValidColor]: '#2aa198',
		[varBsFormValidBorderColor]: '#2aa198',
		[varBsFormInvalidColor]: '#d33682',
		[varBsFormInvalidBorderColor]: '#d33682',
	},
})

// ── Root / body styles ────────────────────────────────────────────────────────

// Text-bearing root: sets the Solar base typography that every descendant
// inherits.  Applied to any element that carries BOTH solarScope + bodyText.
globalStyle(`${solarScope}${bodyText}`, {
	fontFamily:
		'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#839496',
})

globalStyle(`${solarScope}${body}`, {
	backgroundColor: '#002b36',
	padding: '1rem',
	display: 'block',
})

globalStyle(`${solarScope}${bodyFrame}`, {
	minHeight: '100vh',
	display: 'flow-root',
	backgroundColor: '#002b36',
})

