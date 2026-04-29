import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineSuccess, btnCheck } from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActiveSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-outline-toggle-active-success" checked autocomplete="off" />
		<label class={`${theme} ${btn} ${btnOutlineSuccess}`} for="id-btn-outline-toggle-active-success">Checked Toggle Success</label>
	</div>
	)
}

export default OutlineToggleActiveSuccessButton

// @screenshot *: 360x120 120
