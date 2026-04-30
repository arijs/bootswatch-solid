import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnSuccess } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../../theme-contract/theme-contract.css'

const SolidToggleDisabledSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-solid-toggle-disabled-success"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnSuccess}`}
				for="id-btn-solid-toggle-disabled-success"
			>
				Toggle Success
			</label>
		</div>
	)
}

export default SolidToggleDisabledSuccessButton

// @screenshot *: 360x120 120
