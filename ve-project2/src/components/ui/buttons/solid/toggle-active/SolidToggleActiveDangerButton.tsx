import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnDanger } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const SolidToggleActiveDangerButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-active-danger"
				checked
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnDanger}`} for="id-btn-solid-toggle-active-danger">
				Checked Toggle Danger
			</label>
		</div>
	)
}

export default SolidToggleActiveDangerButton

// @screenshot *: 360x120 120
