import { vars } from '../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnOutlineInfo,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleInfoButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-outline-toggle-info"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnOutlineInfo}`} for="id-btn-outline-toggle-info">
				Toggle Info
			</label>
		</div>
	)
}

export default OutlineToggleInfoButton

// @screenshot *: 360x120 120
