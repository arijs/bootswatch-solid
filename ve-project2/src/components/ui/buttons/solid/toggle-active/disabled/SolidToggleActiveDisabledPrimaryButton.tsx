import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnPrimary } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../../theme-contract/theme-contract.css'

const SolidToggleActiveDisabledPrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-solid-toggle-active-disabled-primary"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnPrimary}`}
				for="id-btn-solid-toggle-active-disabled-primary"
			>
				Checked Toggle Primary
			</label>
		</div>
	)
}

export default SolidToggleActiveDisabledPrimaryButton

// @screenshot *: 360x120 120
