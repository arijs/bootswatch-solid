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

// Slate theme scope class.
// Zero-style identifier used as a stable selector prefix.
export const slateScope = style({})

// Global Bootstrap CSS custom properties (`--bs-*`) with Slate values.
// Source: screenshots/slate/bootstrap.css :root block.
globalStyle(`${slateScope}${vars}`, {
	vars: {
		// Semantic colours
		[varBsPrimary]: '#3a3f44',
		[varBsSecondary]: '#7a8288',
		[varBsSuccess]: '#62c462',
		[varBsInfo]: '#5bc0de',
		[varBsWarning]: '#f89406',
		[varBsDanger]: '#ee5f5b',
		[varBsLight]: '#e9ecef',
		[varBsDark]: '#272b30',
		// RGB triples
		[varBsPrimaryRgb]: '58, 63, 68',
		[varBsSecondaryRgb]: '122, 130, 136',
		[varBsSuccessRgb]: '98, 196, 98',
		[varBsInfoRgb]: '91, 192, 222',
		[varBsWarningRgb]: '248, 148, 6',
		[varBsDangerRgb]: '238, 95, 91',
		[varBsLightRgb]: '233, 236, 239',
		[varBsDarkRgb]: '39, 43, 48',
		// Text-emphasis colours
		[varBsPrimaryTextEmphasis]: '#17191b',
		[varBsSecondaryTextEmphasis]: '#313436',
		[varBsSuccessTextEmphasis]: '#274e27',
		[varBsInfoTextEmphasis]: '#244d59',
		[varBsWarningTextEmphasis]: '#633b02',
		[varBsDangerTextEmphasis]: '#5f2624',
		[varBsLightTextEmphasis]: '#52575c',
		[varBsDarkTextEmphasis]: '#52575c',
		// Subtle background colours
		[varBsPrimaryBgSubtle]: '#515960',
		[varBsSecondaryBgSubtle]: '#e4e6e7',
		[varBsSuccessBgSubtle]: '#e0f3e0',
		[varBsInfoBgSubtle]: '#def2f8',
		[varBsWarningBgSubtle]: '#feeacd',
		[varBsDangerBgSubtle]: '#fcdfde',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		// Subtle border colours
		[varBsPrimaryBorderSubtle]: '#b0b2b4',
		[varBsSecondaryBorderSubtle]: '#cacdcf',
		[varBsSuccessBorderSubtle]: '#c0e7c0',
		[varBsInfoBorderSubtle]: '#bde6f2',
		[varBsWarningBorderSubtle]: '#fcd49b',
		[varBsDangerBorderSubtle]: '#f8bfbd',
		[varBsLightBorderSubtle]: '#e9ecef',
		[varBsDarkBorderSubtle]: '#999',
		// Typography (system-ui stack — no custom font)
		[varBsFontSansSerif]:
			'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		[varBsBodyFontFamily]: varBsFontSansSerif,
		// Body defaults
		[varBsBodyColor]: '#aaa',
		[varBsBodyColorRgb]: '170, 170, 170',
		[varBsBodyBg]: '#272b30',
		[varBsBodyBgRgb]: '39, 43, 48',
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
		[varBsFocusRingColor]: 'rgba(58, 63, 68, 0.25)',
		// Contextual / semantic UI colours
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(170, 170, 170, 0.75)',
		[varBsSecondaryBg]: '#e9ecef',
		[varBsTertiaryColor]: 'rgba(170, 170, 170, 0.5)',
		[varBsTertiaryBg]: '#f8f9fa',
		[varBsHighlightColor]: '#aaa',
		[varBsHighlightBg]: '#feeacd',
		// Links
		[varBsLinkColor]: '#fff',
		[varBsLinkHoverColor]: '#cccccc',
		// Code
		[varBsCodeColor]: '#e83e8c',
		[varBsFontMonospace]:
			'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
		// Form validation
		[varBsFormValidColor]: '#62c462',
		[varBsFormValidBorderColor]: '#62c462',
		[varBsFormInvalidColor]: '#ee5f5b',
		[varBsFormInvalidBorderColor]: '#ee5f5b',
	},
})

// ── Root / body styles ────────────────────────────────────────────────────────

globalStyle(`${slateScope}${bodyText}`, {
	fontFamily:
		'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#aaa',
})

globalStyle(`${slateScope}${body}`, {
	backgroundColor: '#272b30',
	padding: '1rem',
	display: 'block',
})

globalStyle(`${slateScope}${bodyFrame}`, {
	minHeight: '100vh',
	display: 'flow-root',
	backgroundColor: '#272b30',
})
