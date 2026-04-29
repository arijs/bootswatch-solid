import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	badge,
	badgeDanger,
	badgeDark,
	badgeInfo,
	badgeLight,
	badgePrimary,
	badgeRoundedPill,
	badgeSecondary,
	badgeSuccess,
	badgeWarning,
} from '../../../theme-contract/ui/badge/contract.css'

const PillBadges: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<span class={`${theme} ${badge} ${badgeRoundedPill} ${badgePrimary}`}>Primary</span>
			<span class={`${theme} ${badge} ${badgeRoundedPill} ${badgeSecondary}`}>Secondary</span>
			<span class={`${theme} ${badge} ${badgeRoundedPill} ${badgeSuccess}`}>Success</span>
			<span class={`${theme} ${badge} ${badgeRoundedPill} ${badgeDanger}`}>Danger</span>
			<span class={`${theme} ${badge} ${badgeRoundedPill} ${badgeWarning}`}>Warning</span>
			<span class={`${theme} ${badge} ${badgeRoundedPill} ${badgeInfo}`}>Info</span>
			<span class={`${theme} ${badge} ${badgeRoundedPill} ${badgeLight}`}>Light</span>
			<span class={`${theme} ${badge} ${badgeRoundedPill} ${badgeDark}`}>Dark</span>
		</div>
	)
}

export default PillBadges

// @screenshot *: 360x120 120
