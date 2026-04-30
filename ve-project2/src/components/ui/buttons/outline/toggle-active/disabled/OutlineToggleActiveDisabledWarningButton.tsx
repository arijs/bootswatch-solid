import { vars } from '../../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnOutlineWarning,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActiveDisabledWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-outline-toggle-active-disabled-warning"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineWarning}`}
				for="id-btn-outline-toggle-active-disabled-warning"
			>
				Checked Toggle Warning
			</label>
		</div>
	)
}

export default OutlineToggleActiveDisabledWarningButton

// @screenshot *: 360x120 120
