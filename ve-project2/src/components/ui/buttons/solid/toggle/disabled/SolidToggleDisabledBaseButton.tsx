import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnCheck } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleDisabledBaseButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input disabled type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-solid-toggle-disabled-base" autocomplete="off" />
		<label class={`${theme} ${btn}`} for="id-btn-solid-toggle-disabled-base">Toggle Button</label>
	</div>
	)
}

export default SolidToggleDisabledBaseButton

// @screenshot *: 360x120 120
