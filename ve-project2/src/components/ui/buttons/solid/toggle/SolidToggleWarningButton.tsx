import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnWarning } from '../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../theme-contract/theme-contract.css'

const SolidToggleWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-solid-toggle-warning"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnWarning}`} for="id-btn-solid-toggle-warning">
				Toggle Warning
			</label>
		</div>
	)
}

export default SolidToggleWarningButton

// @screenshot *: 360x120 120
