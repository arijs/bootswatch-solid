import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnCheck,
	btnOutlineLight,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleDisabledLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-disabled-light"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineLight}`}
				for="id-btn-outline-toggle-disabled-light"
			>
				Toggle Light
			</label>
		</div>
	)
}

export default OutlineToggleDisabledLightButton

// @screenshot *: 360x120 120
