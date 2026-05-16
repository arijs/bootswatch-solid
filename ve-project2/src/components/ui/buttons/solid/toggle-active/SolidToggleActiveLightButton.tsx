import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnLight } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const SolidToggleActiveLightButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-active-light"
				checked
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnLight}`} for="id-btn-solid-toggle-active-light">
				Checked Toggle Light
			</label>
		</div>
	)
}

export default SolidToggleActiveLightButton

// @screenshot *: 360x120 120
