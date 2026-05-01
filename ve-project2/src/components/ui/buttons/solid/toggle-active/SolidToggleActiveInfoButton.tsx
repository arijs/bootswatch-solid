import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnInfo } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
const SolidToggleActiveInfoButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-active-info"
				checked
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnInfo}`} for="id-btn-solid-toggle-active-info">
				Checked Toggle Info
			</label>
		</div>
	)
}

export default SolidToggleActiveInfoButton

// @screenshot *: 360x120 120
