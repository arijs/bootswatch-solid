import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Components always use these names — no runtime resolution needed.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

// ── Carousel wrapper ──────────────────────────────────────────────────────────

export const carousel = style({})
export const carouselSlide = style({})     // modifier: slide animation
export const carouselFade = style({})      // modifier: crossfade animation

// ── Carousel inner track ──────────────────────────────────────────────────────

export const carouselInner = style({})
export const carouselItem = style({})
export const carouselItemActive = style({})
export const carouselItemNext = style({})
export const carouselItemPrev = style({})
export const carouselItemStart = style({})
export const carouselItemEnd = style({})

// ── Navigation controls ───────────────────────────────────────────────────────

export const carouselControlPrev = style({})
export const carouselControlNext = style({})
export const carouselControlPrevIcon = style({})
export const carouselControlNextIcon = style({})

// ── Indicator dots ────────────────────────────────────────────────────────────

export const carouselIndicators = style({})
export const carouselIndicatorActive = style({})

// ── Caption overlay ───────────────────────────────────────────────────────────

export const carouselCaption = style({})

// ── Dark variant ──────────────────────────────────────────────────────────────

export const carouselDark = style({})
