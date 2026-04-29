import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnInfo } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleDisabledInfoButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-disabled-info"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnInfo}`} for="id-btn-solid-toggle-disabled-info">
				Toggle Info
			</label>
		</div>
	)
}

export default SolidToggleDisabledInfoButton

// @screenshot *: 360x120 120
