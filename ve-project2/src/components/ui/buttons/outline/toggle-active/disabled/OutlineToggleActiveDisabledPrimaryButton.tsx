import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnCheck,
	btnOutlinePrimary,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActiveDisabledPrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-active-disabled-primary"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlinePrimary}`}
				for="id-btn-outline-toggle-active-disabled-primary"
			>
				Checked Toggle Primary
			</label>
		</div>
	)
}

export default OutlineToggleActiveDisabledPrimaryButton

// @screenshot *: 360x120 120
