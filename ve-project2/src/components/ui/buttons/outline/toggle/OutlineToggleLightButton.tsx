import { vars } from '../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnOutlineLight,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-outline-toggle-light"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnOutlineLight}`} for="id-btn-outline-toggle-light">
				Toggle Light
			</label>
		</div>
	)
}

export default OutlineToggleLightButton

// @screenshot *: 360x120 120
