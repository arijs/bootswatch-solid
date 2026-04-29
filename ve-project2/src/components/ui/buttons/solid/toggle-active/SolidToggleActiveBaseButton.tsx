import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleActiveBaseButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-solid-toggle-active-base" checked autocomplete="off" />
		<label class={`${theme} ${btn}`} for="id-btn-solid-toggle-active-base">Checked Toggle Button</label>
	</div>
	)
}

export default SolidToggleActiveBaseButton

// @screenshot *: 360x120 120
