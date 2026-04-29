import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnOutlinePrimary,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActivePrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-active-primary"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlinePrimary}`}
				for="id-btn-outline-toggle-active-primary"
			>
				Checked Toggle Primary
			</label>
		</div>
	)
}

export default OutlineToggleActivePrimaryButton

// @screenshot *: 360x120 120
