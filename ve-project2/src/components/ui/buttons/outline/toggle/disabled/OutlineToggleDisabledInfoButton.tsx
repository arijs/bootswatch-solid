import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnOutlineInfo,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleDisabledInfoButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-disabled-info"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineInfo}`}
				for="id-btn-outline-toggle-disabled-info"
			>
				Toggle Info
			</label>
		</div>
	)
}

export default OutlineToggleDisabledInfoButton

// @screenshot *: 360x120 120
