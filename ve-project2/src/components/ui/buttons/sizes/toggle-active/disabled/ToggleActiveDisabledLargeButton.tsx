import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnPrimary, btnLg, btnCheck } from '../../../../../../theme-contract/ui/buttons/contract.css'

const ToggleActiveDisabledLargeButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input disabled type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-sizes-toggle-active-active-disabled-large" checked autocomplete="off" />
		<label class={`${theme} ${btn} ${btnPrimary} ${btnLg}`} for="id-btn-sizes-toggle-active-active-disabled-large">Checked Toggle Large button</label>
	</div>
	)
}

export default ToggleActiveDisabledLargeButton

// @screenshot *: 360x120 120
