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

// Quartz theme scope class.
// Zero-style identifier used as a stable selector prefix.
export const quartzScope = style({})

// Global Bootstrap CSS custom properties (`--bs-*`) with quartz values.
globalStyle(`${quartzScope}${vars}`, {
	vars: {
		// Semantic colours
		[varBsPrimary]: '#e83283',
		[varBsSecondary]: 'rgba(255, 255, 255, 0.4)',
		[varBsSuccess]: '#41d7a7',
		[varBsInfo]: '#39cbfb',
		[varBsWarning]: '#ffc107',
		[varBsDanger]: '#fd7e14',
		[varBsLight]: '#e9e9e8',
		[varBsDark]: '#212529',
		// RGB triples
		[varBsPrimaryRgb]: '232, 50, 131',
		[varBsSecondaryRgb]: '255, 255, 255',
		[varBsSuccessRgb]: '65, 215, 167',
		[varBsInfoRgb]: '57, 203, 251',
		[varBsWarningRgb]: '255, 193, 7',
		[varBsDangerRgb]: '253, 126, 20',
		[varBsLightRgb]: '233, 233, 232',
		[varBsDarkRgb]: '33, 37, 41',
		// Text-emphasis colours
		[varBsPrimaryTextEmphasis]: '#5d1434',
		[varBsSecondaryTextEmphasis]: 'rgba(36, 36, 36, 0.76)',
		[varBsSuccessTextEmphasis]: '#1a5643',
		[varBsInfoTextEmphasis]: '#175164',
		[varBsWarningTextEmphasis]: '#664d03',
		[varBsDangerTextEmphasis]: '#653208',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		// Subtle background colours
		[varBsPrimaryBgSubtle]: '#fad6e6',
		[varBsSecondaryBgSubtle]: 'rgba(255, 255, 255, 0.88)',
		[varBsSuccessBgSubtle]: '#d9f7ed',
		[varBsInfoBgSubtle]: '#d7f5fe',
		[varBsWarningBgSubtle]: '#fff3cd',
		[varBsDangerBgSubtle]: '#ffe5d0',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		// Subtle border colours
		[varBsPrimaryBorderSubtle]: '#f6adcd',
		[varBsSecondaryBorderSubtle]: 'rgba(255, 255, 255, 0.76)',
		[varBsSuccessBorderSubtle]: '#b3efdc',
		[varBsInfoBorderSubtle]: '#b0eafd',
		[varBsWarningBorderSubtle]: '#ffe69c',
		[varBsDangerBorderSubtle]: '#fecba1',
		[varBsLightBorderSubtle]: '#e9e9e8',
		[varBsDarkBorderSubtle]: '#adb5bd',
		// Typography
		[varBsFontSansSerif]: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		// Body defaults
		[varBsBodyColor]: '#fff',
		[varBsBodyColorRgb]: '255, 255, 255',
		[varBsBodyBg]: '#686dc3',
		[varBsBodyBgRgb]: '104, 109, 195',
		// Borders
		[varBsBorderWidth]: '1px',
		[varBsBorderStyle]: 'solid',
		[varBsBorderColor]: 'rgba(255, 255, 255, 0.2)',
		[varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)',
		// Border radii
		[varBsBorderRadius]: '0.5rem',
		[varBsBorderRadiusSm]: '0.6rem',
		[varBsBorderRadiusLg]: '0.7rem',
		[varBsBorderRadiusXl]: '1rem',
		[varBsBorderRadiusXxl]: '2rem',
		[varBsBorderRadius2xl]: '2rem',
		[varBsBorderRadiusPill]: '50rem',
		// Shadows
		[varBsBoxShadow]: '1px 3px 24px -1px rgba(0, 0, 0, 0.15)',
		[varBsBoxShadowSm]: '0 1px 1px rgba(0, 0, 0, 0.1)',
		[varBsBoxShadowLg]: '0 1rem 3rem rgba(0, 0, 0, 0.175)',
		[varBsBoxShadowInset]: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)',
		// Focus ring
		[varBsFocusRingWidth]: '0.25rem',
		[varBsFocusRingOpacity]: '0.25',
		[varBsFocusRingColor]: 'rgba(232, 50, 131, 0.25)',
		// Contextual / semantic UI colours
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(255, 255, 255, 0.75)',
		[varBsSecondaryBg]: '#e9e9e8',
		[varBsTertiaryColor]: 'rgba(255, 255, 255, 0.5)',
		[varBsTertiaryBg]: '#f8f9fa',			[varBsHighlightColor]: '#fff',
			[varBsHighlightBg]: '#fff3cd',		// Links
		[varBsLinkColor]: '#fff',
		[varBsLinkHoverColor]: '#cccccc',
		// Code
		[varBsCodeColor]: '#e83283',
		[varBsFontMonospace]: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		// Form validation
		[varBsFormValidColor]: '#41d7a7',
		[varBsFormValidBorderColor]: '#41d7a7',
		[varBsFormInvalidColor]: '#fd7e14',
		[varBsFormInvalidBorderColor]: '#fd7e14',
	},
})

// ── Root / body styles ────────────────────────────────────────────────────────

globalStyle(`${quartzScope}${bodyText}`, {
	fontFamily:
		'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#fff',
})

globalStyle(`${quartzScope}${body}`, {
	backgroundColor: '#686dc3',
	backgroundImage: 'linear-gradient(90deg, #33b7e2, #5e62b0, #dc307c)',
	padding: '1rem',
	display: 'block',
})

globalStyle(`${quartzScope}${bodyFrame}`, {
	minHeight: '100vh',
	backgroundColor: '#686dc3',
	backgroundImage: 'linear-gradient(90deg, #33b7e2, #5e62b0, #dc307c)',
})
