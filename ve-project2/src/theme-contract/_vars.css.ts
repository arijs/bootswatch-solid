import { createVar } from '@vanilla-extract/css'

// Global Bootstrap CSS custom properties (--bs-*).
// These are the variables declared in Bootstrap's :root block and referenced
// throughout its component CSS.  Each createVar() produces a stable hashed
// CSS custom property name; theme style files set actual values via
//   globalStyle(`${scope}${vars}`, { vars: { [varBsBorderRadius]: '0.375rem', … } })
// so that every component inside a themed vars host inherits them.

// ── Colour palette ────────────────────────────────────────────────────────────

export const varBsBlue = createVar()
export const varBsIndigo = createVar()
export const varBsPurple = createVar()
export const varBsPink = createVar()
export const varBsRed = createVar()
export const varBsOrange = createVar()
export const varBsYellow = createVar()
export const varBsGreen = createVar()
export const varBsTeal = createVar()
export const varBsCyan = createVar()
export const varBsBlack = createVar()
export const varBsWhite = createVar()

// Gray scale
export const varBsGray = createVar()
export const varBsGrayDark = createVar()
export const varBsGray100 = createVar()
export const varBsGray200 = createVar()
export const varBsGray300 = createVar()
export const varBsGray400 = createVar()
export const varBsGray500 = createVar()
export const varBsGray600 = createVar()
export const varBsGray700 = createVar()
export const varBsGray800 = createVar()
export const varBsGray900 = createVar()

// ── Semantic colours ──────────────────────────────────────────────────────────

export const varBsPrimary = createVar()
export const varBsSecondary = createVar()
export const varBsSuccess = createVar()
export const varBsInfo = createVar()
export const varBsWarning = createVar()
export const varBsDanger = createVar()
export const varBsLight = createVar()
export const varBsDark = createVar()

// RGB triples (used in rgba() expressions)
export const varBsPrimaryRgb = createVar()
export const varBsSecondaryRgb = createVar()
export const varBsSuccessRgb = createVar()
export const varBsInfoRgb = createVar()
export const varBsWarningRgb = createVar()
export const varBsDangerRgb = createVar()
export const varBsLightRgb = createVar()
export const varBsDarkRgb = createVar()
export const varBsWhiteRgb = createVar()
export const varBsBlackRgb = createVar()

// Emphasis text colours
export const varBsPrimaryTextEmphasis = createVar()
export const varBsSecondaryTextEmphasis = createVar()
export const varBsSuccessTextEmphasis = createVar()
export const varBsInfoTextEmphasis = createVar()
export const varBsWarningTextEmphasis = createVar()
export const varBsDangerTextEmphasis = createVar()
export const varBsLightTextEmphasis = createVar()
export const varBsDarkTextEmphasis = createVar()

// Subtle background colours
export const varBsPrimaryBgSubtle = createVar()
export const varBsSecondaryBgSubtle = createVar()
export const varBsSuccessBgSubtle = createVar()
export const varBsInfoBgSubtle = createVar()
export const varBsWarningBgSubtle = createVar()
export const varBsDangerBgSubtle = createVar()
export const varBsLightBgSubtle = createVar()
export const varBsDarkBgSubtle = createVar()

// Subtle border colours
export const varBsPrimaryBorderSubtle = createVar()
export const varBsSecondaryBorderSubtle = createVar()
export const varBsSuccessBorderSubtle = createVar()
export const varBsInfoBorderSubtle = createVar()
export const varBsWarningBorderSubtle = createVar()
export const varBsDangerBorderSubtle = createVar()
export const varBsLightBorderSubtle = createVar()
export const varBsDarkBorderSubtle = createVar()

// ── Typography ────────────────────────────────────────────────────────────────

export const varBsFontSansSerif = createVar()
export const varBsFontMonospace = createVar()
export const varBsBodyFontFamily = createVar()
export const varBsBodyFontSize = createVar()
export const varBsBodyFontWeight = createVar()
export const varBsBodyLineHeight = createVar()
export const varBsBodyColor = createVar()
export const varBsBodyColorRgb = createVar()
export const varBsBodyBg = createVar()
export const varBsBodyBgRgb = createVar()
export const varBsHeadingColor = createVar()

// ── Links ─────────────────────────────────────────────────────────────────────

export const varBsLinkColor = createVar()
export const varBsLinkColorRgb = createVar()
export const varBsLinkDecoration = createVar()
export const varBsLinkHoverColor = createVar()
export const varBsLinkHoverColorRgb = createVar()

// ── Borders ───────────────────────────────────────────────────────────────────

export const varBsBorderWidth = createVar()
export const varBsBorderStyle = createVar()
export const varBsBorderColor = createVar()
export const varBsBorderColorTranslucent = createVar()

// Border radii
export const varBsBorderRadius = createVar()
export const varBsBorderRadiusSm = createVar()
export const varBsBorderRadiusLg = createVar()
export const varBsBorderRadiusXl = createVar()
export const varBsBorderRadiusXxl = createVar()
export const varBsBorderRadius2xl = createVar()
export const varBsBorderRadiusPill = createVar()

// ── Shadows ───────────────────────────────────────────────────────────────────

export const varBsBoxShadow = createVar()
export const varBsBoxShadowSm = createVar()
export const varBsBoxShadowLg = createVar()
export const varBsBoxShadowInset = createVar()

// ── Focus ring ────────────────────────────────────────────────────────────────

export const varBsFocusRingWidth = createVar()
export const varBsFocusRingOpacity = createVar()
export const varBsFocusRingColor = createVar()

// ── Contextual / semantic UI colours ─────────────────────────────────────────

export const varBsEmphasisColor = createVar()           // --bs-emphasis-color
export const varBsSecondaryColor = createVar()          // --bs-secondary-color
export const varBsSecondaryBg = createVar()             // --bs-secondary-bg
export const varBsTertiaryColor = createVar()           // --bs-tertiary-color
export const varBsTertiaryBg = createVar()              // --bs-tertiary-bg
