import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnSecondary } from '../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../theme-contract/theme-contract.css'

const SolidToggleSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-solid-toggle-secondary"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnSecondary}`} for="id-btn-solid-toggle-secondary">
				Toggle Secondary
			</label>
		</div>
	)
}

export default SolidToggleSecondaryButton

// @screenshot *: 360x120 120
