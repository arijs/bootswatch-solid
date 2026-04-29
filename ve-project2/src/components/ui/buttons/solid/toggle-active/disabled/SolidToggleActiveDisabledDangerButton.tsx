import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnDanger } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleActiveDisabledDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-active-disabled-danger"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnDanger}`}
				for="id-btn-solid-toggle-active-disabled-danger"
			>
				Checked Toggle Danger
			</label>
		</div>
	)
}

export default SolidToggleActiveDisabledDangerButton

// @screenshot *: 360x120 120
