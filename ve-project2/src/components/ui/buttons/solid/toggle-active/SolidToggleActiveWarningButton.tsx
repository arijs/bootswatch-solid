import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnWarning } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleActiveWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-active-warning"
				checked
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnWarning}`} for="id-btn-solid-toggle-active-warning">
				Checked Toggle Warning
			</label>
		</div>
	)
}

export default SolidToggleActiveWarningButton

// @screenshot *: 360x120 120
