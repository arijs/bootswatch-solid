import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineInfo, btnCheck } from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActiveInfoButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-outline-toggle-active-info" checked autocomplete="off" />
		<label class={`${theme} ${btn} ${btnOutlineInfo}`} for="id-btn-outline-toggle-active-info">Checked Toggle Info</label>
	</div>
	)
}

export default OutlineToggleActiveInfoButton

// @screenshot *: 360x120 120
