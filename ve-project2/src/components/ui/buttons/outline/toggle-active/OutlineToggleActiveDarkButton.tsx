import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnCheck,
	btnOutlineDark,
} from '../../../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const OutlineToggleActiveDarkButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-active-dark"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineDark}`}
				for="id-btn-outline-toggle-active-dark"
			>
				Checked Toggle Dark
			</label>
		</div>
	)
}

export default OutlineToggleActiveDarkButton

// @screenshot *: 360x120 120
