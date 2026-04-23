import { style } from '@vanilla-extract/css'
import {
	varBsBlack,
	varBsBlackRgb,
	varBsBlue,
	varBsBodyBg,
	varBsBodyBgRgb,
	varBsBodyColor,
	varBsBodyColorRgb,
	varBsBodyFontFamily,
	varBsBodyFontSize,
	varBsBodyFontWeight,
	varBsBodyLineHeight,
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
	varBsBreakpointLg,
	varBsBreakpointMd,
	varBsBreakpointSm,
	varBsBreakpointXl,
	varBsBreakpointXs,
	varBsBreakpointXxl,
	varBsCarouselCaptionColor,
	varBsCarouselIndicatorActiveBg,
	varBsCodeColor,
	varBsCyan,
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
	varBsEmphasisColor,
	varBsEmphasisColorRgb,
	varBsFocusRingColor,
	varBsFocusRingOpacity,
	varBsFocusRingWidth,
	varBsFontMonospace,
	varBsFontSansSerif,
	varBsFormInvalidBorderColor,
	varBsFormInvalidColor,
	varBsFormValidBorderColor,
	varBsFormValidColor,
	varBsGradient,
	varBsGray,
	varBsGray100,
	varBsGray200,
	varBsGray300,
	varBsGray400,
	varBsGray500,
	varBsGray600,
	varBsGray700,
	varBsGray800,
	varBsGray900,
	varBsGrayDark,
	varBsGreen,
	varBsGutterX,
	varBsGutterY,
	varBsHeadingColor,
	varBsHighlightBg,
	varBsHighlightColor,
	varBsIndigo,
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
	varBsLinkColor,
	varBsLinkColorRgb,
	varBsLinkDecoration,
	varBsLinkHoverColor,
	varBsLinkHoverColorRgb,
	varBsOrange,
	varBsPink,
	varBsPrimary,
	varBsPrimaryBgSubtle,
	varBsPrimaryBorderSubtle,
	varBsPrimaryRgb,
	varBsPrimaryTextEmphasis,
	varBsPurple,
	varBsRed,
	varBsSecondary,
	varBsSecondaryBg,
	varBsSecondaryBgRgb,
	varBsSecondaryBgSubtle,
	varBsSecondaryBorderSubtle,
	varBsSecondaryColor,
	varBsSecondaryColorRgb,
	varBsSecondaryRgb,
	varBsSecondaryTextEmphasis,
	varBsSuccess,
	varBsSuccessBgSubtle,
	varBsSuccessBorderSubtle,
	varBsSuccessRgb,
	varBsSuccessTextEmphasis,
	varBsTeal,
	varBsTertiaryBg,
	varBsTertiaryBgRgb,
	varBsTertiaryColor,
	varBsTertiaryColorRgb,
	varBsWarning,
	varBsWarningBgSubtle,
	varBsWarningBorderSubtle,
	varBsWarningRgb,
	varBsWarningTextEmphasis,
	varBsWhite,
	varBsWhiteRgb,
	varBsYellow,
} from '../../theme-contract/_vars.css'

const defBsBlue = { [varBsBlue]: '#0d6efd' }
export const bsBlue = style({ vars: defBsBlue })
const defBsIndigo = { [varBsIndigo]: '#6610f2' }
export const bsIndigo = style({ vars: defBsIndigo })
const defBsPurple = { [varBsPurple]: '#6f42c1' }
export const bsPurple = style({ vars: defBsPurple })
const defBsPink = { [varBsPink]: '#d63384' }
export const bsPink = style({ vars: defBsPink })
const defBsRed = { [varBsRed]: '#dc3545' }
export const bsRed = style({ vars: defBsRed })
const defBsOrange = { [varBsOrange]: '#fd7e14' }
export const bsOrange = style({ vars: defBsOrange })
const defBsYellow = { [varBsYellow]: '#ffc107' }
export const bsYellow = style({ vars: defBsYellow })
const defBsGreen = { [varBsGreen]: '#198754' }
export const bsGreen = style({ vars: defBsGreen })
const defBsTeal = { [varBsTeal]: '#20c997' }
export const bsTeal = style({ vars: defBsTeal })
const defBsCyan = { [varBsCyan]: '#0dcaf0' }
export const bsCyan = style({ vars: defBsCyan })
const defBsBlack = { [varBsBlack]: '#000' }
export const bsBlack = style({ vars: defBsBlack })
const defBsWhite = { [varBsWhite]: '#fff' }
export const bsWhite = style({ vars: defBsWhite })
const defBsGray = { [varBsGray]: '#6c757d' }
export const bsGray = style({ vars: defBsGray })
const defBsGrayDark = { [varBsGrayDark]: '#343a40' }
export const bsGrayDark = style({ vars: defBsGrayDark })
const defBsGray100 = { [varBsGray100]: '#f8f9fa' }
export const bsGray100 = style({ vars: defBsGray100 })
const defBsGray200 = { [varBsGray200]: '#e9ecef' }
export const bsGray200 = style({ vars: defBsGray200 })
const defBsGray300 = { [varBsGray300]: '#dee2e6' }
export const bsGray300 = style({ vars: defBsGray300 })
const defBsGray400 = { [varBsGray400]: '#ced4da' }
export const bsGray400 = style({ vars: defBsGray400 })
const defBsGray500 = { [varBsGray500]: '#adb5bd' }
export const bsGray500 = style({ vars: defBsGray500 })
const defBsGray600 = { [varBsGray600]: '#6c757d' }
export const bsGray600 = style({ vars: defBsGray600 })
const defBsGray700 = { [varBsGray700]: '#495057' }
export const bsGray700 = style({ vars: defBsGray700 })
const defBsGray800 = { [varBsGray800]: '#343a40' }
export const bsGray800 = style({ vars: defBsGray800 })
const defBsGray900 = { [varBsGray900]: '#212529' }
export const bsGray900 = style({ vars: defBsGray900 })
const defBsPrimary = { [varBsPrimary]: '#0d6efd' }
export const bsPrimary = style({ vars: defBsPrimary })
const defBsSecondary = { [varBsSecondary]: '#6c757d' }
export const bsSecondary = style({ vars: defBsSecondary })
const defBsSuccess = { [varBsSuccess]: '#198754' }
export const bsSuccess = style({ vars: defBsSuccess })
const defBsInfo = { [varBsInfo]: '#0dcaf0' }
export const bsInfo = style({ vars: defBsInfo })
const defBsWarning = { [varBsWarning]: '#ffc107' }
export const bsWarning = style({ vars: defBsWarning })
const defBsDanger = { [varBsDanger]: '#dc3545' }
export const bsDanger = style({ vars: defBsDanger })
const defBsLight = { [varBsLight]: '#f8f9fa' }
export const bsLight = style({ vars: defBsLight })
const defBsDark = { [varBsDark]: '#212529' }
export const bsDark = style({ vars: defBsDark })
const defBsPrimaryRgb = { [varBsPrimaryRgb]: '13, 110, 253' }
export const bsPrimaryRgb = style({ vars: defBsPrimaryRgb })
const defBsSecondaryRgb = { [varBsSecondaryRgb]: '108, 117, 125' }
export const bsSecondaryRgb = style({ vars: defBsSecondaryRgb })
const defBsSuccessRgb = { [varBsSuccessRgb]: '25, 135, 84' }
export const bsSuccessRgb = style({ vars: defBsSuccessRgb })
const defBsInfoRgb = { [varBsInfoRgb]: '13, 202, 240' }
export const bsInfoRgb = style({ vars: defBsInfoRgb })
const defBsWarningRgb = { [varBsWarningRgb]: '255, 193, 7' }
export const bsWarningRgb = style({ vars: defBsWarningRgb })
const defBsDangerRgb = { [varBsDangerRgb]: '220, 53, 69' }
export const bsDangerRgb = style({ vars: defBsDangerRgb })
const defBsLightRgb = { [varBsLightRgb]: '248, 249, 250' }
export const bsLightRgb = style({ vars: defBsLightRgb })
const defBsDarkRgb = { [varBsDarkRgb]: '33, 37, 41' }
export const bsDarkRgb = style({ vars: defBsDarkRgb })
const defBsPrimaryTextEmphasis = { [varBsPrimaryTextEmphasis]: '#052c65' }
export const bsPrimaryTextEmphasis = style({ vars: defBsPrimaryTextEmphasis })
const defBsSecondaryTextEmphasis = { [varBsSecondaryTextEmphasis]: '#2b2f32' }
export const bsSecondaryTextEmphasis = style({ vars: defBsSecondaryTextEmphasis })
const defBsSuccessTextEmphasis = { [varBsSuccessTextEmphasis]: '#0a3622' }
export const bsSuccessTextEmphasis = style({ vars: defBsSuccessTextEmphasis })
const defBsInfoTextEmphasis = { [varBsInfoTextEmphasis]: '#055160' }
export const bsInfoTextEmphasis = style({ vars: defBsInfoTextEmphasis })
const defBsWarningTextEmphasis = { [varBsWarningTextEmphasis]: '#664d03' }
export const bsWarningTextEmphasis = style({ vars: defBsWarningTextEmphasis })
const defBsDangerTextEmphasis = { [varBsDangerTextEmphasis]: '#58151c' }
export const bsDangerTextEmphasis = style({ vars: defBsDangerTextEmphasis })
const defBsLightTextEmphasis = { [varBsLightTextEmphasis]: '#495057' }
export const bsLightTextEmphasis = style({ vars: defBsLightTextEmphasis })
const defBsDarkTextEmphasis = { [varBsDarkTextEmphasis]: '#495057' }
export const bsDarkTextEmphasis = style({ vars: defBsDarkTextEmphasis })
const defBsPrimaryBgSubtle = { [varBsPrimaryBgSubtle]: '#cfe2ff' }
export const bsPrimaryBgSubtle = style({ vars: defBsPrimaryBgSubtle })
const defBsSecondaryBgSubtle = { [varBsSecondaryBgSubtle]: '#e2e3e5' }
export const bsSecondaryBgSubtle = style({ vars: defBsSecondaryBgSubtle })
const defBsSuccessBgSubtle = { [varBsSuccessBgSubtle]: '#d1e7dd' }
export const bsSuccessBgSubtle = style({ vars: defBsSuccessBgSubtle })
const defBsInfoBgSubtle = { [varBsInfoBgSubtle]: '#cff4fc' }
export const bsInfoBgSubtle = style({ vars: defBsInfoBgSubtle })
const defBsWarningBgSubtle = { [varBsWarningBgSubtle]: '#fff3cd' }
export const bsWarningBgSubtle = style({ vars: defBsWarningBgSubtle })
const defBsDangerBgSubtle = { [varBsDangerBgSubtle]: '#f8d7da' }
export const bsDangerBgSubtle = style({ vars: defBsDangerBgSubtle })
const defBsLightBgSubtle = { [varBsLightBgSubtle]: '#fcfcfd' }
export const bsLightBgSubtle = style({ vars: defBsLightBgSubtle })
const defBsDarkBgSubtle = { [varBsDarkBgSubtle]: '#ced4da' }
export const bsDarkBgSubtle = style({ vars: defBsDarkBgSubtle })
const defBsPrimaryBorderSubtle = { [varBsPrimaryBorderSubtle]: '#9ec5fe' }
export const bsPrimaryBorderSubtle = style({ vars: defBsPrimaryBorderSubtle })
const defBsSecondaryBorderSubtle = { [varBsSecondaryBorderSubtle]: '#c4c8cb' }
export const bsSecondaryBorderSubtle = style({ vars: defBsSecondaryBorderSubtle })
const defBsSuccessBorderSubtle = { [varBsSuccessBorderSubtle]: '#a3cfbb' }
export const bsSuccessBorderSubtle = style({ vars: defBsSuccessBorderSubtle })
const defBsInfoBorderSubtle = { [varBsInfoBorderSubtle]: '#9eeaf9' }
export const bsInfoBorderSubtle = style({ vars: defBsInfoBorderSubtle })
const defBsWarningBorderSubtle = { [varBsWarningBorderSubtle]: '#ffe69c' }
export const bsWarningBorderSubtle = style({ vars: defBsWarningBorderSubtle })
const defBsDangerBorderSubtle = { [varBsDangerBorderSubtle]: '#f1aeb5' }
export const bsDangerBorderSubtle = style({ vars: defBsDangerBorderSubtle })
const defBsLightBorderSubtle = { [varBsLightBorderSubtle]: '#e9ecef' }
export const bsLightBorderSubtle = style({ vars: defBsLightBorderSubtle })
const defBsDarkBorderSubtle = { [varBsDarkBorderSubtle]: '#adb5bd' }
export const bsDarkBorderSubtle = style({ vars: defBsDarkBorderSubtle })
const defBsWhiteRgb = { [varBsWhiteRgb]: '255, 255, 255' }
export const bsWhiteRgb = style({ vars: defBsWhiteRgb })
const defBsBlackRgb = { [varBsBlackRgb]: '0, 0, 0' }
export const bsBlackRgb = style({ vars: defBsBlackRgb })
const defBsFontSansSerif = {
	[varBsFontSansSerif]:
		'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
}
export const bsFontSansSerif = style({
	vars: defBsFontSansSerif,
})
const defBsFontMonospace = {
	[varBsFontMonospace]:
		'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
}
export const bsFontMonospace = style({
	vars: defBsFontMonospace,
})
const defBsGradient = {
	[varBsGradient]: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
}
export const bsGradient = style({
	vars: defBsGradient,
})
const defBsBodyFontFamily = { [varBsBodyFontFamily]: varBsFontSansSerif }
export const bsBodyFontFamily = style({
	vars: defBsBodyFontFamily,
})
const defBsBodyFontSize = { [varBsBodyFontSize]: '1em' }
export const bsBodyFontSize = style({ vars: defBsBodyFontSize })
const defBsBodyFontWeight = { [varBsBodyFontWeight]: '400' }
export const bsBodyFontWeight = style({ vars: defBsBodyFontWeight })
const defBsBodyLineHeight = { [varBsBodyLineHeight]: '1.5' }
export const bsBodyLineHeight = style({ vars: defBsBodyLineHeight })
const defBsBodyColor = { [varBsBodyColor]: '#212529' }
export const bsBodyColor = style({ vars: defBsBodyColor })
const defBsBodyColorRgb = { [varBsBodyColorRgb]: '33, 37, 41' }
export const bsBodyColorRgb = style({ vars: defBsBodyColorRgb })
const defBsBodyBg = { [varBsBodyBg]: '#fff' }
export const bsBodyBg = style({ vars: defBsBodyBg })
const defBsBodyBgRgb = { [varBsBodyBgRgb]: '255, 255, 255' }
export const bsBodyBgRgb = style({ vars: defBsBodyBgRgb })
const defBsEmphasisColor = { [varBsEmphasisColor]: '#000' }
export const bsEmphasisColor = style({ vars: defBsEmphasisColor })
const defBsEmphasisColorRgb = { [varBsEmphasisColorRgb]: '0, 0, 0' }
export const bsEmphasisColorRgb = style({ vars: defBsEmphasisColorRgb })
const defBsSecondaryColor = { [varBsSecondaryColor]: 'rgba(33, 37, 41, 0.75)' }
export const bsSecondaryColor = style({ vars: defBsSecondaryColor })
const defBsSecondaryColorRgb = { [varBsSecondaryColorRgb]: '33, 37, 41' }
export const bsSecondaryColorRgb = style({ vars: defBsSecondaryColorRgb })
const defBsSecondaryBg = { [varBsSecondaryBg]: '#e9ecef' }
export const bsSecondaryBg = style({ vars: defBsSecondaryBg })
const defBsSecondaryBgRgb = { [varBsSecondaryBgRgb]: '233, 236, 239' }
export const bsSecondaryBgRgb = style({ vars: defBsSecondaryBgRgb })
const defBsTertiaryColor = { [varBsTertiaryColor]: 'rgba(33, 37, 41, 0.5)' }
export const bsTertiaryColor = style({ vars: defBsTertiaryColor })
const defBsTertiaryColorRgb = { [varBsTertiaryColorRgb]: '33, 37, 41' }
export const bsTertiaryColorRgb = style({ vars: defBsTertiaryColorRgb })
const defBsTertiaryBg = { [varBsTertiaryBg]: '#f8f9fa' }
export const bsTertiaryBg = style({ vars: defBsTertiaryBg })
const defBsTertiaryBgRgb = { [varBsTertiaryBgRgb]: '248, 249, 250' }
export const bsTertiaryBgRgb = style({ vars: defBsTertiaryBgRgb })
const defBsHeadingColor = { [varBsHeadingColor]: 'inherit' }
export const bsHeadingColor = style({ vars: defBsHeadingColor })
const defBsLinkColor = { [varBsLinkColor]: '#0d6efd' }
export const bsLinkColor = style({ vars: defBsLinkColor })
const defBsLinkColorRgb = { [varBsLinkColorRgb]: '13, 110, 253' }
export const bsLinkColorRgb = style({ vars: defBsLinkColorRgb })
const defBsLinkDecoration = { [varBsLinkDecoration]: 'underline' }
export const bsLinkDecoration = style({ vars: defBsLinkDecoration })
const defBsLinkHoverColor = { [varBsLinkHoverColor]: '#0a58ca' }
export const bsLinkHoverColor = style({ vars: defBsLinkHoverColor })
const defBsLinkHoverColorRgb = { [varBsLinkHoverColorRgb]: '10, 88, 202' }
export const bsLinkHoverColorRgb = style({ vars: defBsLinkHoverColorRgb })
const defBsCodeColor = { [varBsCodeColor]: '#d63384' }
export const bsCodeColor = style({ vars: defBsCodeColor })
const defBsHighlightColor = { [varBsHighlightColor]: '#212529' }
export const bsHighlightColor = style({ vars: defBsHighlightColor })
const defBsHighlightBg = { [varBsHighlightBg]: '#fff3cd' }
export const bsHighlightBg = style({ vars: defBsHighlightBg })
const defBsBorderWidth = { [varBsBorderWidth]: '1px' }
export const bsBorderWidth = style({ vars: defBsBorderWidth })
const defBsBorderStyle = { [varBsBorderStyle]: 'solid' }
export const bsBorderStyle = style({ vars: defBsBorderStyle })
const defBsBorderColor = { [varBsBorderColor]: '#dee2e6' }
export const bsBorderColor = style({ vars: defBsBorderColor })
const defBsBorderColorTranslucent = { [varBsBorderColorTranslucent]: 'rgba(0, 0, 0, 0.175)' }
export const bsBorderColorTranslucent = style({ vars: defBsBorderColorTranslucent })
const defBsBorderRadius = { [varBsBorderRadius]: '0.375rem' }
export const bsBorderRadius = style({ vars: defBsBorderRadius })
const defBsBorderRadiusSm = { [varBsBorderRadiusSm]: '0.25em' }
export const bsBorderRadiusSm = style({ vars: defBsBorderRadiusSm })
const defBsBorderRadiusLg = { [varBsBorderRadiusLg]: '0.5em' }
export const bsBorderRadiusLg = style({ vars: defBsBorderRadiusLg })
const defBsBorderRadiusXl = { [varBsBorderRadiusXl]: '1em' }
export const bsBorderRadiusXl = style({ vars: defBsBorderRadiusXl })
const defBsBorderRadiusXxl = { [varBsBorderRadiusXxl]: '2em' }
export const bsBorderRadiusXxl = style({ vars: defBsBorderRadiusXxl })
const defBsBorderRadius2xl = { [varBsBorderRadius2xl]: 'var(--bs-border-radius-xxl)' }
export const bsBorderRadius2xl = style({ vars: defBsBorderRadius2xl })
const defBsBorderRadiusPill = { [varBsBorderRadiusPill]: '50em' }
export const bsBorderRadiusPill = style({ vars: defBsBorderRadiusPill })
const defBsBoxShadow = { [varBsBoxShadow]: '0 0.5em 1em rgba(0, 0, 0, 0.15)' }
export const bsBoxShadow = style({ vars: defBsBoxShadow })
const defBsBoxShadowSm = { [varBsBoxShadowSm]: '0 0.125em 0.25em rgba(0, 0, 0, 0.075)' }
export const bsBoxShadowSm = style({ vars: defBsBoxShadowSm })
const defBsBoxShadowLg = { [varBsBoxShadowLg]: '0 1em 3em rgba(0, 0, 0, 0.175)' }
export const bsBoxShadowLg = style({ vars: defBsBoxShadowLg })
const defBsBoxShadowInset = { [varBsBoxShadowInset]: 'inset 0 1px 2px rgba(0, 0, 0, 0.075)' }
export const bsBoxShadowInset = style({ vars: defBsBoxShadowInset })
const defBsFocusRingWidth = { [varBsFocusRingWidth]: '0.25em' }
export const bsFocusRingWidth = style({ vars: defBsFocusRingWidth })
const defBsFocusRingOpacity = { [varBsFocusRingOpacity]: '0.25' }
export const bsFocusRingOpacity = style({ vars: defBsFocusRingOpacity })
const defBsFocusRingColor = { [varBsFocusRingColor]: 'rgba(13, 110, 253, 0.25)' }
export const bsFocusRingColor = style({ vars: defBsFocusRingColor })
const defBsFormValidColor = { [varBsFormValidColor]: '#198754' }
export const bsFormValidColor = style({ vars: defBsFormValidColor })
const defBsFormValidBorderColor = { [varBsFormValidBorderColor]: '#198754' }
export const bsFormValidBorderColor = style({ vars: defBsFormValidBorderColor })
const defBsFormInvalidColor = { [varBsFormInvalidColor]: '#dc3545' }
export const bsFormInvalidColor = style({ vars: defBsFormInvalidColor })
const defBsFormInvalidBorderColor = { [varBsFormInvalidBorderColor]: '#dc3545' }
export const bsFormInvalidBorderColor = style({ vars: defBsFormInvalidBorderColor })
const defBsGutterX = { [varBsGutterX]: '1.5em' }
export const bsGutterX = style({ vars: defBsGutterX })
const defBsGutterY = { [varBsGutterY]: '0' }
export const bsGutterY = style({ vars: defBsGutterY })
const defBsBreakpointXs = { [varBsBreakpointXs]: '0' }
export const bsBreakpointXs = style({ vars: defBsBreakpointXs })
const defBsBreakpointSm = { [varBsBreakpointSm]: '576px' }
export const bsBreakpointSm = style({ vars: defBsBreakpointSm })
const defBsBreakpointMd = { [varBsBreakpointMd]: '768px' }
export const bsBreakpointMd = style({ vars: defBsBreakpointMd })
const defBsBreakpointLg = { [varBsBreakpointLg]: '992px' }
export const bsBreakpointLg = style({ vars: defBsBreakpointLg })
const defBsBreakpointXl = { [varBsBreakpointXl]: '1200px' }
export const bsBreakpointXl = style({ vars: defBsBreakpointXl })
const defBsBreakpointXxl = { [varBsBreakpointXxl]: '1400px' }
export const bsBreakpointXxl = style({ vars: defBsBreakpointXxl })
const defBsCarouselIndicatorActiveBg = { [varBsCarouselIndicatorActiveBg]: '#fff' }
export const bsCarouselIndicatorActiveBg = style({ vars: defBsCarouselIndicatorActiveBg })
const defBsCarouselCaptionColor = { [varBsCarouselCaptionColor]: '#fff' }
export const bsCarouselCaptionColor = style({ vars: defBsCarouselCaptionColor })

export const bsTheme = style({
	vars: {
		...defBsBlue,
		...defBsIndigo,
		...defBsPurple,
		...defBsPink,
		...defBsRed,
		...defBsOrange,
		...defBsYellow,
		...defBsGreen,
		...defBsTeal,
		...defBsCyan,
		...defBsBlack,
		...defBsWhite,
		...defBsGray,
		...defBsGrayDark,
		...defBsGray100,
		...defBsGray200,
		...defBsGray300,
		...defBsGray400,
		...defBsGray500,
		...defBsGray600,
		...defBsGray700,
		...defBsGray800,
		...defBsGray900,
		...defBsPrimary,
		...defBsSecondary,
		...defBsSuccess,
		...defBsInfo,
		...defBsWarning,
		...defBsDanger,
		...defBsLight,
		...defBsDark,
		...defBsPrimaryRgb,
		...defBsSecondaryRgb,
		...defBsSuccessRgb,
		...defBsInfoRgb,
		...defBsWarningRgb,
		...defBsDangerRgb,
		...defBsLightRgb,
		...defBsDarkRgb,
		...defBsPrimaryTextEmphasis,
		...defBsSecondaryTextEmphasis,
		...defBsSuccessTextEmphasis,
		...defBsInfoTextEmphasis,
		...defBsWarningTextEmphasis,
		...defBsDangerTextEmphasis,
		...defBsLightTextEmphasis,
		...defBsDarkTextEmphasis,
		...defBsPrimaryBgSubtle,
		...defBsSecondaryBgSubtle,
		...defBsSuccessBgSubtle,
		...defBsInfoBgSubtle,
		...defBsWarningBgSubtle,
		...defBsDangerBgSubtle,
		...defBsLightBgSubtle,
		...defBsDarkBgSubtle,
		...defBsPrimaryBorderSubtle,
		...defBsSecondaryBorderSubtle,
		...defBsSuccessBorderSubtle,
		...defBsInfoBorderSubtle,
		...defBsWarningBorderSubtle,
		...defBsDangerBorderSubtle,
		...defBsLightBorderSubtle,
		...defBsDarkBorderSubtle,
		...defBsWhiteRgb,
		...defBsBlackRgb,
		...defBsFontSansSerif,
		...defBsFontMonospace,
		...defBsGradient,
		...defBsBodyFontFamily,
		...defBsBodyFontSize,
		...defBsBodyFontWeight,
		...defBsBodyLineHeight,
		...defBsBodyColor,
		...defBsBodyColorRgb,
		...defBsBodyBg,
		...defBsBodyBgRgb,
		...defBsEmphasisColor,
		...defBsEmphasisColorRgb,
		...defBsSecondaryColor,
		...defBsSecondaryColorRgb,
		...defBsSecondaryBg,
		...defBsSecondaryBgRgb,
		...defBsTertiaryColor,
		...defBsTertiaryColorRgb,
		...defBsTertiaryBg,
		...defBsTertiaryBgRgb,
		...defBsHeadingColor,
		...defBsLinkColor,
		...defBsLinkColorRgb,
		...defBsLinkDecoration,
		...defBsLinkHoverColor,
		...defBsLinkHoverColorRgb,
		...defBsCodeColor,
		...defBsHighlightColor,
		...defBsHighlightBg,
		...defBsBorderWidth,
		...defBsBorderStyle,
		...defBsBorderColor,
		...defBsBorderColorTranslucent,
		...defBsBorderRadius,
		...defBsBorderRadiusSm,
		...defBsBorderRadiusLg,
		...defBsBorderRadiusXl,
		...defBsBorderRadiusXxl,
		...defBsBorderRadius2xl,
		...defBsBorderRadiusPill,
		...defBsBoxShadow,
		...defBsBoxShadowSm,
		...defBsBoxShadowLg,
		...defBsBoxShadowInset,
		...defBsFocusRingWidth,
		...defBsFocusRingOpacity,
		...defBsFocusRingColor,
		...defBsFormValidColor,
		...defBsFormValidBorderColor,
		...defBsFormInvalidColor,
		...defBsFormInvalidBorderColor,
		...defBsGutterX,
		...defBsGutterY,
		...defBsBreakpointXs,
		...defBsBreakpointSm,
		...defBsBreakpointMd,
		...defBsBreakpointLg,
		...defBsBreakpointXl,
		...defBsBreakpointXxl,
		...defBsCarouselIndicatorActiveBg,
		...defBsCarouselCaptionColor,
	},
})

/*
:root, [data-bs-theme="light"] { 
--bs-blue: #0d6efd; 
--bs-indigo: #6610f2; 
--bs-purple: #6f42c1; 
--bs-pink: #d63384; 
--bs-red: #dc3545; 
--bs-orange: #fd7e14; 
--bs-yellow: #ffc107; 
--bs-green: #198754; 
--bs-teal: #20c997; 
--bs-cyan: #0dcaf0; 
--bs-black: #000; 
--bs-white: #fff; 
--bs-gray: #6c757d; 
--bs-gray-dark: #343a40; 
--bs-gray-100: #f8f9fa; 
--bs-gray-200: #e9ecef; 
--bs-gray-300: #dee2e6; 
--bs-gray-400: #ced4da; 
--bs-gray-500: #adb5bd; 
--bs-gray-600: #6c757d; 
--bs-gray-700: #495057; 
--bs-gray-800: #343a40; 
--bs-gray-900: #212529; 
--bs-primary: #0d6efd; 
--bs-secondary: #6c757d; 
--bs-success: #198754; 
--bs-info: #0dcaf0; 
--bs-warning: #ffc107; 
--bs-danger: #dc3545; 
--bs-light: #f8f9fa; 
--bs-dark: #212529; 
--bs-primary-rgb: 13, 110, 253; 
--bs-secondary-rgb: 108, 117, 125; 
--bs-success-rgb: 25, 135, 84; 
--bs-info-rgb: 13, 202, 240; 
--bs-warning-rgb: 255, 193, 7; 
--bs-danger-rgb: 220, 53, 69; 
--bs-light-rgb: 248, 249, 250; 
--bs-dark-rgb: 33, 37, 41; 
--bs-primary-text-emphasis: #052c65; 
--bs-secondary-text-emphasis: #2b2f32; 
--bs-success-text-emphasis: #0a3622; 
--bs-info-text-emphasis: #055160; 
--bs-warning-text-emphasis: #664d03; 
--bs-danger-text-emphasis: #58151c; 
--bs-light-text-emphasis: #495057; 
--bs-dark-text-emphasis: #495057; 
--bs-primary-bg-subtle: #cfe2ff; 
--bs-secondary-bg-subtle: #e2e3e5; 
--bs-success-bg-subtle: #d1e7dd; 
--bs-info-bg-subtle: #cff4fc; 
--bs-warning-bg-subtle: #fff3cd; 
--bs-danger-bg-subtle: #f8d7da; 
--bs-light-bg-subtle: #fcfcfd; 
--bs-dark-bg-subtle: #ced4da; 
--bs-primary-border-subtle: #9ec5fe; 
--bs-secondary-border-subtle: #c4c8cb; 
--bs-success-border-subtle: #a3cfbb; 
--bs-info-border-subtle: #9eeaf9; 
--bs-warning-border-subtle: #ffe69c; 
--bs-danger-border-subtle: #f1aeb5; 
--bs-light-border-subtle: #e9ecef; 
--bs-dark-border-subtle: #adb5bd; 
--bs-white-rgb: 255, 255, 255; 
--bs-black-rgb: 0, 0, 0; 
--bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; 
--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; 
--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)); 
--bs-body-font-family: var(--bs-font-sans-serif); 
--bs-body-font-size: 1rem; 
--bs-body-font-weight: 400; 
--bs-body-line-height: 1.5; 
--bs-body-color: #212529; 
--bs-body-color-rgb: 33, 37, 41; 
--bs-body-bg: #fff; 
--bs-body-bg-rgb: 255, 255, 255; 
--bs-emphasis-color: #000; 
--bs-emphasis-color-rgb: 0, 0, 0; 
--bs-secondary-color: rgba(33, 37, 41, 0.75); 
--bs-secondary-color-rgb: 33, 37, 41; 
--bs-secondary-bg: #e9ecef; 
--bs-secondary-bg-rgb: 233, 236, 239; 
--bs-tertiary-color: rgba(33, 37, 41, 0.5); 
--bs-tertiary-color-rgb: 33, 37, 41; 
--bs-tertiary-bg: #f8f9fa; 
--bs-tertiary-bg-rgb: 248, 249, 250; 
--bs-heading-color: inherit; 
--bs-link-color: #0d6efd; 
--bs-link-color-rgb: 13, 110, 253; 
--bs-link-decoration: underline; 
--bs-link-hover-color: #0a58ca; 
--bs-link-hover-color-rgb: 10, 88, 202; 
--bs-code-color: #d63384; 
--bs-highlight-color: #212529; 
--bs-highlight-bg: #fff3cd; 
--bs-border-width: 1px; 
--bs-border-style: solid; 
--bs-border-color: #dee2e6; 
--bs-border-color-translucent: rgba(0, 0, 0, 0.175); 
--bs-border-radius: 0.375rem; 
--bs-border-radius-sm: 0.25rem; 
--bs-border-radius-lg: 0.5rem; 
--bs-border-radius-xl: 1rem; 
--bs-border-radius-xxl: 2rem; 
--bs-border-radius-2xl: var(--bs-border-radius-xxl); 
--bs-border-radius-pill: 50rem; 
--bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); 
--bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); 
--bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175); 
--bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075); 
--bs-focus-ring-width: 0.25rem; 
--bs-focus-ring-opacity: 0.25; 
--bs-focus-ring-color: rgba(13, 110, 253, 0.25); 
--bs-form-valid-color: #198754; 
--bs-form-valid-border-color: #198754; 
--bs-form-invalid-color: #dc3545; 
--bs-form-invalid-border-color: #dc3545; 
}

*, ::before, ::after { box-sizing: border-box; 
}

@media (prefers-reduced-motion: no-preference) {
:root { scroll-behavior: smooth; 
}
}

body { margin: 0; 
font-family: var(--bs-body-font-family); 
font-size: var(--bs-body-font-size); 
font-weight: var(--bs-body-font-weight); 
line-height: var(--bs-body-line-height); 
color: var(--bs-body-color); 
text-align: var(--bs-body-text-align); 
background-color: var(--bs-body-bg); 
-webkit-text-size-adjust: 100%; 
-webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
}

.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm { --bs-gutter-x: 1.5rem; 
--bs-gutter-y: 0; 
width: 100%; 
padding-right: calc(var(--bs-gutter-x) * 0.5); 
padding-left: calc(var(--bs-gutter-x) * 0.5); 
margin-right: auto; 
margin-left: auto; 
}

:root { --bs-breakpoint-xs: 0; 
--bs-breakpoint-sm: 576px; 
--bs-breakpoint-md: 768px; 
--bs-breakpoint-lg: 992px; 
--bs-breakpoint-xl: 1200px; 
--bs-breakpoint-xxl: 1400px; 
}

:root, [data-bs-theme="light"] { --bs-carousel-indicator-active-bg: #fff; 
--bs-carousel-caption-color: #fff; 
}

*/
