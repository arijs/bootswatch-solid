import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnDark } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleDisabledDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-disabled-dark"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnDark}`} for="id-btn-solid-toggle-disabled-dark">
				Toggle Dark
			</label>
		</div>
	)
}

export default SolidToggleDisabledDarkButton

// @screenshot *: 360x120 120
