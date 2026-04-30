import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnCheck,
	btnOutlineLight,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActiveLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-active-light"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineLight}`}
				for="id-btn-outline-toggle-active-light"
			>
				Checked Toggle Light
			</label>
		</div>
	)
}

export default OutlineToggleActiveLightButton

// @screenshot *: 360x120 120
