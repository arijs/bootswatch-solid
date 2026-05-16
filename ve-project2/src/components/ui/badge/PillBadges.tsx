import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
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

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/badge',
	'contents/basic',
	'utilities',
]

const PillBadges: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
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
