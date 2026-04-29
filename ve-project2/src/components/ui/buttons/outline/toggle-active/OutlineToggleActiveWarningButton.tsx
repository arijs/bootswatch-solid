import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineWarning, btnCheck } from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleActiveWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-outline-toggle-active-warning" checked autocomplete="off" />
		<label class={`${theme} ${btn} ${btnOutlineWarning}`} for="id-btn-outline-toggle-active-warning">Checked Toggle Warning</label>
	</div>
	)
}

export default OutlineToggleActiveWarningButton

// @screenshot *: 360x120 120
