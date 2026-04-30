import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnOutlineDanger,
} from '../../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../../theme-contract/theme-contract.css'

const OutlineToggleActiveDisabledDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-outline-toggle-active-disabled-danger"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineDanger}`}
				for="id-btn-outline-toggle-active-disabled-danger"
			>
				Checked Toggle Danger
			</label>
		</div>
	)
}

export default OutlineToggleActiveDisabledDangerButton

// @screenshot *: 360x120 120
