import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnDanger } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-danger"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnDanger}`} for="id-btn-solid-toggle-danger">
				Toggle Danger
			</label>
		</div>
	)
}

export default SolidToggleDangerButton

// @screenshot *: 360x120 120
