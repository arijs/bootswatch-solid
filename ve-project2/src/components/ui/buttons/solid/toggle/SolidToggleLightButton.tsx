import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnLight } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
const SolidToggleLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-light"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnLight}`} for="id-btn-solid-toggle-light">
				Toggle Light
			</label>
		</div>
	)
}

export default SolidToggleLightButton

// @screenshot *: 360x120 120
