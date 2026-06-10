import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	bgDanger,
	bgInfo,
	bgLight,
	bgPrimary,
	bgSecondary,
	bgSuccess,
	bgWarning,
	roundedPill,
} from '../../../theme-contract/literal/contract.css'
import { badge } from '../../../theme-contract/ui/badge/contract.css'
import { bgDark, textDark } from '../../../theme-contract/utilities/contract.css'

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
			<span class={`${theme} ${badge} ${roundedPill} ${bgPrimary}`}>Primary</span>
			<span class={`${theme} ${badge} ${roundedPill} ${bgSecondary}`}>Secondary</span>
			<span class={`${theme} ${badge} ${roundedPill} ${bgSuccess}`}>Success</span>
			<span class={`${theme} ${badge} ${roundedPill} ${bgDanger}`}>Danger</span>
			<span class={`${theme} ${badge} ${roundedPill} ${bgWarning} ${textDark}`}>Warning</span>
			<span class={`${theme} ${badge} ${roundedPill} ${bgInfo} ${textDark}`}>Info</span>
			<span class={`${theme} ${badge} ${roundedPill} ${bgLight} ${textDark}`}>Light</span>
			<span class={`${theme} ${badge} ${roundedPill} ${bgDark}`}>Dark</span>
		</div>
	)
}

export default PillBadges

// @screenshot *: 360x120 120
