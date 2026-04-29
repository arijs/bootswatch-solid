import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnOutlineDark,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActiveDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
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
