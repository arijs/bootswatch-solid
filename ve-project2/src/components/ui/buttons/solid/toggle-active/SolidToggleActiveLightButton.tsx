import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnLight } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
const SolidToggleActiveLightButton: Component = () => {
	const theme = useContext(ThemeContext)

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
