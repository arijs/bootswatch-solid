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
import {
	varBsFormValidColor,
	varBsFormValidBorderColor,
	varBsFormInvalidColor,
	varBsFormInvalidBorderColor,
} from '../../theme-contract/forms/_vars.css'
import { body, bodyText, vars } from '../../theme-contract/theme-contract.css'

// Bootstrap theme scope class.
// Zero-style identifier used as a stable selector prefix.
export const bootstrapScope = style({})

// Global Bootstrap CSS custom properties (`--bs-*`) are assigned on the
// dedicated vars contract class to keep root var hosting separate from body
// layout/background styles.
globalStyle(`${bootstrapScope}${vars}`, {
	vars: {
		// Semantic colours
		[varBsPrimary]: '#0d6efd',
		[varBsSecondary]: '#6c757d',
		[varBsSuccess]: '#198754',
		[varBsInfo]: '#0dcaf0',
		[varBsWarning]: '#ffc107',
		[varBsDanger]: '#dc3545',
		[varBsLight]: '#f8f9fa',
		[varBsDark]: '#212529',
		// RGB triples
		[varBsPrimaryRgb]: '13, 110, 253',
		[varBsSecondaryRgb]: '108, 117, 125',
		[varBsSuccessRgb]: '25, 135, 84',
		[varBsInfoRgb]: '13, 202, 240',
		[varBsWarningRgb]: '255, 193, 7',
		[varBsDangerRgb]: '220, 53, 69',
		[varBsLightRgb]: '248, 249, 250',
		[varBsDarkRgb]: '33, 37, 41',
		// Text-emphasis colours
		[varBsPrimaryTextEmphasis]: '#052c65',
		[varBsSecondaryTextEmphasis]: '#2b2f32',
		[varBsSuccessTextEmphasis]: '#0a3622',
		[varBsInfoTextEmphasis]: '#055160',
		[varBsWarningTextEmphasis]: '#664d03',
		[varBsDangerTextEmphasis]: '#58151c',
		[varBsLightTextEmphasis]: '#495057',
		[varBsDarkTextEmphasis]: '#495057',
		// Subtle background colours
		[varBsPrimaryBgSubtle]: '#cfe2ff',
		[varBsSecondaryBgSubtle]: '#e2e3e5',
		[varBsSuccessBgSubtle]: '#d1e7dd',
		[varBsInfoBgSubtle]: '#cff4fc',
		[varBsWarningBgSubtle]: '#fff3cd',
		[varBsDangerBgSubtle]: '#f8d7da',
		[varBsLightBgSubtle]: '#fcfcfd',
		[varBsDarkBgSubtle]: '#ced4da',
		// Subtle border colours
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
		[varBsBodyColorRgb]: '33, 37, 41',
		[varBsBodyBg]: '#fff',
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
		[varBsFocusRingColor]: 'rgba(13, 110, 253, 0.25)',
		// Contextual / semantic UI colours
		[varBsEmphasisColor]: '#000',
		[varBsEmphasisColorRgb]: '0, 0, 0',
		[varBsSecondaryColor]: 'rgba(33, 37, 41, 0.75)',
		[varBsSecondaryBg]: '#e9ecef',
		[varBsTertiaryColor]: 'rgba(33, 37, 41, 0.5)',
		[varBsTertiaryBg]: '#f8f9fa',
		// Links
		[varBsLinkColor]: '#0d6efd',
		[varBsLinkHoverColor]: '#0a58ca',
		// Form validation
		[varBsFormValidColor]: '#198754',
		[varBsFormValidBorderColor]: '#198754',
		[varBsFormInvalidColor]: '#dc3545',
		[varBsFormInvalidBorderColor]: '#dc3545',
	},
})

// ── Root / body styles ────────────────────────────────────────────────────────

// Text-bearing root: sets the Bootstrap base typography that every descendant
// inherits.  Applied to any element that carries BOTH bootstrapScope + bodyText.
globalStyle(`${bootstrapScope}${bodyText}`, {
	fontFamily:
		'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
	fontSize: '1rem',
	fontWeight: 400,
	lineHeight: 1.5,
	color: '#212529',
})

// Outer wrapper for direct body-level properties (layout/background).
// Applied to any element that carries BOTH bootstrapScope + body.
globalStyle(`${bootstrapScope}${body}`, {
	backgroundColor: '#fff',
	padding: '1rem',
	display: 'block',
})
