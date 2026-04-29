import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnSecondary } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleActiveSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-active-secondary"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnSecondary}`}
				for="id-btn-solid-toggle-active-secondary"
			>
				Checked Toggle Secondary
			</label>
		</div>
	)
}

export default SolidToggleActiveSecondaryButton

// @screenshot *: 360x120 120
