import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnPrimary } from '../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../theme-contract/theme-contract.css'

const SolidToggleActivePrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-solid-toggle-active-primary"
				checked
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnPrimary}`} for="id-btn-solid-toggle-active-primary">
				Checked Toggle Primary
			</label>
		</div>
	)
}

export default SolidToggleActivePrimaryButton

// @screenshot *: 360x120 120
