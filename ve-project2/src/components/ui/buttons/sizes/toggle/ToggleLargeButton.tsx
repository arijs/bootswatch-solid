import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnLg,
	btnPrimary,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const ToggleLargeButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-sizes-toggle-large"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnPrimary} ${btnLg}`} for="id-btn-sizes-toggle-large">
				Toggle Large button
			</label>
		</div>
	)
}

export default ToggleLargeButton

// @screenshot *: 360x120 120
