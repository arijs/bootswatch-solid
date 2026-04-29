import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnLight, btnCheck } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleDisabledLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input disabled type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-solid-toggle-disabled-light" autocomplete="off" />
		<label class={`${theme} ${btn} ${btnLight}`} for="id-btn-solid-toggle-disabled-light">Toggle Light</label>
	</div>
	)
}

export default SolidToggleDisabledLightButton

// @screenshot *: 360x120 120
