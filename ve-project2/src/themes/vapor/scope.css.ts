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

// Vapor theme scope class.
// Zero-style identifier used as a stable selector prefix.
export const vaporScope = style({})

// Global Bootstrap CSS custom properties (`--bs-*`) with Vapor values.
// Source: screenshots/vapor/theme.css :root block.
globalStyle(`${vaporScope}${vars}`, {
	vars: {
		// Semantic colours
		[varBsPrimary]: '#6f42c1',
		[varBsSecondary]: '#ea39b8',
		[varBsSuccess]: '#3cf281',
		[varBsInfo]: '#1ba2f6',
		[varBsWarning]: '#ffc107',
		[varBsDanger]: '#e44c55',
		[varBsLight]: '#44d9e8',
		[varBsDark]: '#170229',
		// RGB triples
		[varBsPrimaryRgb]: '111, 66, 193',
		[varBsSecondaryRgb]: '234, 57, 184',
		[varBsSuccessRgb]: '60, 242, 129',
		[varBsInfoRgb]: '27, 162, 246',
		[varBsWarningRgb]: '255, 193, 7',
		[varBsDangerRgb]: '228, 76, 85',
		[varBsLightRgb]: '68, 217, 232',
		[varBsDarkRgb]: '23, 2, 41',
		// Text-emphasis colours
		[varBsPrimaryTextEmphasis]: '#2c1a4d',
		[varBsSecondaryTextEmphasis]: '#5e174a',
		[varBsSuccessTextEmphasis]: '#186134',
		[varBsInfoTextEmphasis]: '#0b4162',
		[varBsWarningTextEmphasis]: '#664d03',
		[varBsDangerTextEmphasis]: '#5b1e22',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		// Subtle background colours
		[varBsPrimaryBgSubtle]: '#e2d9f3',
		[varBsSecondaryBgSubtle]: '#fbd7f1',
		[varBsSuccessBgSubtle]: '#d8fce6',
		[varBsInfoBgSubtle]: '#d1ecfd',
		[varBsWarningBgSubtle]: '#fff3cd',
		[varBsDangerBgSubtle]: '#fadbdd',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		// Subtle border colours
		[varBsPrimaryBorderSubtle]: '#c5b3e6',
		[varBsSecondaryBorderSubtle]: '#f7b0e3',
		[varBsSuccessBorderSubtle]: '#b1facd',
		[varBsInfoBorderSubtle]: '#a4dafb',
		[varBsWarningBorderSubtle]: '#ffe69c',
		[varBsDangerBorderSubtle]: '#f4b7bb',
		[varBsLightBorderSubtle]: '#e9ecef',
		[varBsDarkBorderSubtle]: '#adb5bd',
		// Typography
		[varBsFontSansSerif]: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		// Body defaults
		[varBsBodyColor]: '#32fbe2',
		[varBsBodyColorRgb]: '50, 251, 226',
		[varBsBodyBg]: '#1a0933',
		[varBsBodyBgRgb]: '26, 9, 51',
		// Borders
		[varBsBorderWidth]: '0',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: '#dee2e6',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		// Border radii
		[varBsBorderRadius]: '0.15rem',
		[varBsBorderRadiusSm]: '0.05rem',
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
		[varBsFocusRingColor]: 'rgba(111, 66, 193, 0.25)',
		// Contextual / semantic UI colours
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(50, 251, 226, 0.75)',
		[varBsSecondaryBg]: '#e9ecef',
		[varBsTertiaryColor]: 'rgba(50, 251, 226, 0.5)',
		[varBsTertiaryBg]: '#f8f9fa',
		[varBsHighlightColor]: '#32fbe2',
		[varBsHighlightBg]: '#fff3cd',
		// Links
		[varBsLinkColor]: '#32fbe2',
		[varBsLinkHoverColor]: '#28c9b5',
		// Code
		[varBsCodeColor]: '#ea39b8',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		// Form validation
		[varBsFormValidColor]: '#3cf281',
		[varBsFormValidBorderColor]: '#3cf281',
		[varBsFormInvalidColor]: '#e44c55',
		[varBsFormInvalidBorderColor]: '#e44c55',
	},
})

// ── Root / body styles ────────────────────────────────────────────────────────

globalStyle(`${vaporScope}${bodyText}`, {
	fontFamily: 'Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#32fbe2',
	// SOURCE: body { text-shadow: 0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2); }
	textShadow: '0 0 1px rgba(50, 251, 226, 0.3), 0 0 2px rgba(50, 251, 226, 0.3), 0 0 5px rgba(50, 251, 226, 0.2)',
})

globalStyle(`${vaporScope}${body}`, {
	backgroundColor: '#1a0933',
	backgroundImage: 'linear-gradient(#17082e 0%, #1a0933 7%, #1a0933 80%, #0c1f4c 100%)',
	padding: '1rem',
	display: 'block',
})

globalStyle(`${vaporScope}${bodyFrame}`, {
	minHeight: '100vh',
	display: 'flow-root',
	backgroundColor: '#1a0933',
	backgroundImage: 'linear-gradient(#17082e 0%, #1a0933 7%, #1a0933 80%, #0c1f4c 100%)',
})
