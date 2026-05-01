import { h1, h2, h3, h4, h5, h6 } from '../../contents/generated.css'
import {
badge,
bgLight as badgeBgLight,
bgPrimary as badgeBgPrimary,
bgDanger,
bgDark,
bgInfo,
bgSecondary,
bgSuccess,
bgWarning,
roundedPill,
textDark,
} from './base.css'

export const sketchyBadgeRuntimeClasses = {
badge,
bgDark,
bgDanger,
bgInfo,
bgLight: badgeBgLight,
bgPrimary: badgeBgPrimary,
bgSecondary,
bgSuccess,
bgWarning,
h1,
h2,
h3,
h4,
h5,
h6,
roundedPill,
textDark,
} as const
