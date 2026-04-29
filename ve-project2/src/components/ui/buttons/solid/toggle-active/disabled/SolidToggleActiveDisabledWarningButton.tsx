import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnWarning, btnCheck } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleActiveDisabledWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input disabled type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-solid-toggle-active-active-disabled-warning" checked autocomplete="off" />
		<label class={`${theme} ${btn} ${btnWarning}`} for="id-btn-solid-toggle-active-active-disabled-warning">Checked Toggle Warning</label>
	</div>
	)
}

export default SolidToggleActiveDisabledWarningButton

// @screenshot *: 360x120 120
