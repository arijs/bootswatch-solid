import { h1, h2, h3, h4, h5, h6 } from '../../contents/generated.css'
import {
	badge,
	bgDark,
	bgDanger,
	bgInfo,
	bgLight as badgeBgLight,
	bgPrimary as badgeBgPrimary,
	bgSecondary,
	bgSuccess,
	bgWarning,
	roundedPill,
	textDark,
} from './base.css'

export const bootstrapBadgeRuntimeClasses = {
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
