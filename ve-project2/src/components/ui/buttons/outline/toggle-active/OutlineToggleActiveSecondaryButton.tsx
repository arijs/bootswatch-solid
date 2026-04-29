import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnOutlineSecondary,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActiveSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-active-secondary"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineSecondary}`}
				for="id-btn-outline-toggle-active-secondary"
			>
				Checked Toggle Secondary
			</label>
		</div>
	)
}

export default OutlineToggleActiveSecondaryButton

// @screenshot *: 360x120 120
