import { vars } from '../../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnSecondary,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleActiveDisabledSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-solid-toggle-active-disabled-secondary"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnSecondary}`}
				for="id-btn-solid-toggle-active-disabled-secondary"
			>
				Checked Toggle Secondary
			</label>
		</div>
	)
}

export default SolidToggleActiveDisabledSecondaryButton

// @screenshot *: 360x120 120
