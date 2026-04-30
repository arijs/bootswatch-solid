import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnWarning } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../../theme-contract/theme-contract.css'

const SolidToggleDisabledWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-solid-toggle-disabled-warning"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnWarning}`}
				for="id-btn-solid-toggle-disabled-warning"
			>
				Toggle Warning
			</label>
		</div>
	)
}

export default SolidToggleDisabledWarningButton

// @screenshot *: 360x120 120
