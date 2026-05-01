import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnLink } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
const SolidToggleActiveLinkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-active-link"
				checked
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnLink}`} for="id-btn-solid-toggle-active-link">
				Checked Toggle Link
			</label>
		</div>
	)
}

export default SolidToggleActiveLinkButton

// @screenshot *: 360x120 120
