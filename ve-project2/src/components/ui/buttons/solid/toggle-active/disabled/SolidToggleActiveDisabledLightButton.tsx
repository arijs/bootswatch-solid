import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnLight, btnCheck } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleActiveDisabledLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input disabled type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-solid-toggle-active-disabled-light" checked autocomplete="off" />
		<label class={`${theme} ${btn} ${btnLight}`} for="id-btn-solid-toggle-active-disabled-light">Checked Toggle Light</label>
	</div>
	)
}

export default SolidToggleActiveDisabledLightButton

// @screenshot *: 360x120 120
