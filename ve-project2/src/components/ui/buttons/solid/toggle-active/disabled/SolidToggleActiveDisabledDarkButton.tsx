import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnDark } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
const SolidToggleActiveDisabledDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-active-disabled-dark"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnDark}`}
				for="id-btn-solid-toggle-active-disabled-dark"
			>
				Checked Toggle Dark
			</label>
		</div>
	)
}

export default SolidToggleActiveDisabledDarkButton

// @screenshot *: 360x120 120
