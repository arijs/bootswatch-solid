import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnDanger, btnCheck } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleDisabledDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input disabled type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-solid-toggle-disabled-danger" autocomplete="off" />
		<label class={`${theme} ${btn} ${btnDanger}`} for="id-btn-solid-toggle-disabled-danger">Toggle Danger</label>
	</div>
	)
}

export default SolidToggleDisabledDangerButton

// @screenshot *: 360x120 120
