import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnCheck,
	btnOutlineDark,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-dark"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnOutlineDark}`} for="id-btn-outline-toggle-dark">
				Toggle Dark
			</label>
		</div>
	)
}

export default OutlineToggleDarkButton

// @screenshot *: 360x120 120
