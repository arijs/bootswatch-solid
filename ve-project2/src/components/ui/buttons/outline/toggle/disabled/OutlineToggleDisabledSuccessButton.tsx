import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnOutlineSuccess, btnCheck } from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleDisabledSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input disabled type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-outline-toggle-disabled-success" autocomplete="off" />
		<label class={`${theme} ${btn} ${btnOutlineSuccess}`} for="id-btn-outline-toggle-disabled-success">Toggle Success</label>
	</div>
	)
}

export default OutlineToggleDisabledSuccessButton

// @screenshot *: 360x120 120
