import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).
// Exception: visuallyHidden has no theme variation — styles are baked in directly.

// ── Accessibility ─────────────────────────────────────────────────────────────

/**
 * Visually hides an element while keeping it accessible to screen readers.
 * Equivalent to Bootstrap's .visually-hidden / .sr-only.
 * Note: no theme scope needed — these styles are universal.
 */
/**
 * Resets fieldset browser defaults — matches Bootstrap's fieldset reset rule:
 *   min-width: 0; padding: 0; margin: 0; border: 0;
 * Note: no theme scope needed — these styles are universal.
 */
export const fieldsetReset = style({
	minWidth: 0,
	padding: 0,
	margin: 0,
	border: 0,
})

export const visuallyHidden = style({
})

// ── Utilities ─────────────────────────────────────────────────────────────────

/**
 * Bootstrap utility class: .text-muted { color: var(--bs-secondary-color) !important; }
 * Theme-specific implementation is wired in each theme's utilities/styles.css.ts.
 */
export const textMuted = style({})

/**
 * Bootstrap utility class: .align-self-start { align-self: flex-start !important; }
 * Theme-specific implementation is wired in each theme's utilities/styles.css.ts.
 */
export const alignSelfStart = style({})

/**
 * Bootstrap utility class: .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
 * Theme-specific implementation is wired in each theme's utilities/styles.css.ts.
 */
export const px3 = style({})

/**
 * Bootstrap utility class: .px-2 { padding-right: ... !important; padding-left: ... !important; }
 * Value is theme-specific and wired in each theme's utilities/styles.css.ts.
 */
export const px2 = style({})

/**
 * Bootstrap utility class: .mb-3 { margin-bottom: ... !important; }
 * Value is theme-specific and wired in each theme's utilities/styles.css.ts.
 */
export const mb3 = style({})

/**
 * Bootstrap utility class: .mb-xl-2 { margin-bottom: ... !important; }
 * Value is applied only at xl breakpoint and is theme-specific.
 */
export const mbXl2 = style({})

/**
 * Bootstrap utility class: .mb-xl-5 { margin-bottom: ... !important; }
 * Value is applied only at xl breakpoint and is theme-specific.
 */
export const mbXl5 = style({})

/**
 * Bootstrap utility class: .mt-5 { margin-top: ... !important; }
 * Value is theme-specific and wired in each theme's utilities/styles.css.ts.
 */
export const mt5 = style({})

/**
 * Bootstrap utility class: .mt-xl-0 { margin-top: 0 !important; }
 * Applied only at xl breakpoint.
 */
export const mtXl0 = style({})

/**
 * Bootstrap utility class: .sticky-xl-top { position: sticky; top: 0; z-index: 1020; }
 * Applied only at xl breakpoint.
 */
export const stickyXlTop = style({})

/**
 * Bootstrap utility class: .fw-bold { font-weight: 700 !important; }
 */
export const fwBold = style({})

/**
 * Bootstrap utility class: .pt-3 { padding-top: ... !important; }
 * Value is theme-specific and wired in each theme's utilities/styles.css.ts.
 */
export const pt3 = style({})

/**
 * Bootstrap utility class: .pt-xl-5 { padding-top: ... !important; }
 * Value is applied only at xl breakpoint and is theme-specific.
 */
export const ptXl5 = style({})

/**
 * Bootstrap utility class: .pb-2 { padding-bottom: ... !important; }
 * Value is theme-specific and wired in each theme's utilities/styles.css.ts.
 */
export const pb2 = style({})

/**
 * Bootstrap utility class: .pb-xl-3 { padding-bottom: ... !important; }
 * Value is applied only at xl breakpoint and is theme-specific.
 */
export const pbXl3 = style({})

/**
 * Bootstrap utility class: .me-2 { margin-right: ... !important; }
 * Value is theme-specific and wired in each theme's utilities/styles.css.ts.
 */
export const me2 = style({})

/**
 * Bootstrap utility class: .me-auto { margin-right: auto !important; }
 */
export const meAuto = style({})

/**
 * Bootstrap utility class: .mb-2 { margin-bottom: ... !important; }
 * Value is theme-specific and wired in each theme's utilities/styles.css.ts.
 */
export const mb2 = style({})

/**
 * Bootstrap utility class: .mb-lg-0 { margin-bottom: 0 !important; }
 * Applied only at lg breakpoint.
 */
export const mbLg0 = style({})

/**
 * Bootstrap utility class: .d-flex { display: flex !important; }
 */
export const dFlex = style({})
