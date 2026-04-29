import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnOutlineLight, btnCheck } from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActiveDisabledLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input disabled type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-outline-toggle-active-active-disabled-light" checked autocomplete="off" />
		<label class={`${theme} ${btn} ${btnOutlineLight}`} for="id-btn-outline-toggle-active-active-disabled-light">Checked Toggle Light</label>
	</div>
	)
}

export default OutlineToggleActiveDisabledLightButton

// @screenshot *: 360x120 120
