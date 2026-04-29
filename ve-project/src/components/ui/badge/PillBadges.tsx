import type { Component } from 'solid-js'
import { useVeBadgeThemeClasses } from '../../../themes/runtime/hooks'

const PillBadges: Component = () => {
	const {
		body,
		containerFluid,
		bsTheme,
		badge,
		bgDark,
		bgDanger,
		bgInfo,
		bgLight,
		bgPrimary,
		bgSecondary,
		bgSuccess,
		bgWarning,
		roundedPill,
		textDark,
	} = useVeBadgeThemeClasses()

	return (
		<div class={`bd-example ${containerFluid} ${bsTheme} ${body}`}>
			<span class={`${badge} ${roundedPill} ${bgPrimary}`}>Primary</span>
			<span class={`${badge} ${roundedPill} ${bgSecondary}`}>Secondary</span>
			<span class={`${badge} ${roundedPill} ${bgSuccess}`}>Success</span>
			<span class={`${badge} ${roundedPill} ${bgDanger}`}>Danger</span>
			<span class={`${badge} ${roundedPill} ${bgWarning} ${textDark}`}>Warning</span>
			<span class={`${badge} ${roundedPill} ${bgInfo} ${textDark}`}>Info</span>
			<span class={`${badge} ${roundedPill} ${bgLight} ${textDark}`}>Light</span>
			<span class={`${badge} ${roundedPill} ${bgDark}`}>Dark</span>
		</div>
	)
}

export default PillBadges

// @screenshot *: 360x120 120
