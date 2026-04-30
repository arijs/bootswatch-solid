import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnInfo } from '../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../theme-contract/theme-contract.css'

const SolidToggleInfoButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-solid-toggle-info"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnInfo}`} for="id-btn-solid-toggle-info">
				Toggle Info
			</label>
		</div>
	)
}

export default SolidToggleInfoButton

// @screenshot *: 360x120 120
