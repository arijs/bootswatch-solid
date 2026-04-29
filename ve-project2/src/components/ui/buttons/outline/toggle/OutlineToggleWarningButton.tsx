import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnOutlineWarning,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-warning"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineWarning}`}
				for="id-btn-outline-toggle-warning"
			>
				Toggle Warning
			</label>
		</div>
	)
}

export default OutlineToggleWarningButton

// @screenshot *: 360x120 120
