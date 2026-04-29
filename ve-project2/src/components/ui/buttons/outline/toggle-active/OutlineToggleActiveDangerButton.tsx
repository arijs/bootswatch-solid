import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineDanger, btnCheck } from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActiveDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-outline-toggle-active-danger" checked autocomplete="off" />
		<label class={`${theme} ${btn} ${btnOutlineDanger}`} for="id-btn-outline-toggle-active-danger">Checked Toggle Danger</label>
	</div>
	)
}

export default OutlineToggleActiveDangerButton

// @screenshot *: 360x120 120
