import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
const SolidToggleBaseButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-base"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn}`} for="id-btn-solid-toggle-base">
				Toggle Button
			</label>
		</div>
	)
}

export default SolidToggleBaseButton

// @screenshot *: 360x120 120
