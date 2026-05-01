import { createVar } from '@vanilla-extract/css'

// Bootstrap CSS custom properties for .progress family.
// SOURCE CSS: screenshots/bootstrap/bootstrap.css — .progress { --bs-progress-* }

export const varBsProgressHeight = createVar()            // --bs-progress-height
export const varBsProgressFontSize = createVar()          // --bs-progress-font-size
export const varBsProgressBg = createVar()                // --bs-progress-bg
export const varBsProgressBorderRadius = createVar()      // --bs-progress-border-radius
export const varBsProgressBoxShadow = createVar()         // --bs-progress-box-shadow
export const varBsProgressBarColor = createVar()          // --bs-progress-bar-color
export const varBsProgressBarBg = createVar()             // --bs-progress-bar-bg
export const varBsProgressBarTransition = createVar()     // --bs-progress-bar-transition
