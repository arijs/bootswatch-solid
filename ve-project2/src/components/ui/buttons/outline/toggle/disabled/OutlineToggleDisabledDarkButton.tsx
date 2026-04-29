import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnOutlineDark,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleDisabledDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-disabled-dark"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineDark}`}
				for="id-btn-outline-toggle-disabled-dark"
			>
				Toggle Dark
			</label>
		</div>
	)
}

export default OutlineToggleDisabledDarkButton

// @screenshot *: 360x120 120
