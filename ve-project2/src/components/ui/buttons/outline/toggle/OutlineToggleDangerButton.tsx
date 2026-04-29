import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineDanger, btnCheck } from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-outline-toggle-danger" autocomplete="off" />
		<label class={`${theme} ${btn} ${btnOutlineDanger}`} for="id-btn-outline-toggle-danger">Toggle Danger</label>
	</div>
	)
}

export default OutlineToggleDangerButton

// @screenshot *: 360x120 120
