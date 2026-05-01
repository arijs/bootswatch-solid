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
	// vanilla-extract uses csstype which doesn't allow '!important' in values, so we cast
	// https://github.com/vanilla-extract-css/vanilla-extract/issues/541
	position: 'absolute !important' as 'absolute',
	width: '1px !important',
	height: '1px !important',
	padding: '0 !important',
	margin: '-1px !important',
	overflow: 'hidden !important',
	clip: 'rect(0, 0, 0, 0) !important',
	whiteSpace: 'nowrap !important',
	border: '0 !important',
})

// ── Utilities ─────────────────────────────────────────────────────────────────

/**
 * Bootstrap utility class: .text-muted { color: var(--bs-secondary-color) !important; }
 * Theme-specific implementation is wired in each theme's utilities/styles.css.ts.
 */
export const textMuted = style({})

/**
 * Bootstrap utility class: .px-3 { padding-right: 1rem !important; padding-left: 1rem !important; }
 * Theme-specific implementation is wired in each theme's utilities/styles.css.ts.
 */
export const px3 = style({})
