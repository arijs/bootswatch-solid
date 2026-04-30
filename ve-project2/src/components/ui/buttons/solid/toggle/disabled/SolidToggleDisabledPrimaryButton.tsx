import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnPrimary } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
const SolidToggleDisabledPrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-disabled-primary"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnPrimary}`}
				for="id-btn-solid-toggle-disabled-primary"
			>
				Toggle Primary
			</label>
		</div>
	)
}

export default SolidToggleDisabledPrimaryButton

// @screenshot *: 360x120 120
