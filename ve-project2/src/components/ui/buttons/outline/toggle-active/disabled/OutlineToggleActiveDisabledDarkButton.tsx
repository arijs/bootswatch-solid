import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnCheck,
	btnOutlineDark,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActiveDisabledDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-active-disabled-dark"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineDark}`}
				for="id-btn-outline-toggle-active-disabled-dark"
			>
				Checked Toggle Dark
			</label>
		</div>
	)
}

export default OutlineToggleActiveDisabledDarkButton

// @screenshot *: 360x120 120
