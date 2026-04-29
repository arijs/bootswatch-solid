import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnPrimary,
	btnSm,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const ToggleSmallButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-sizes-toggle-small"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnPrimary} ${btnSm}`} for="id-btn-sizes-toggle-small">
				Toggle Small button
			</label>
		</div>
	)
}

export default ToggleSmallButton

// @screenshot *: 360x120 120
