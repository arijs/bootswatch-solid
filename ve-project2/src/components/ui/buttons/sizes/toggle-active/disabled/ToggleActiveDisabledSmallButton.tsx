import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnPrimary, btnSm, btnCheck } from '../../../../../../theme-contract/ui/buttons/contract.css'

const ToggleActiveDisabledSmallButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input disabled type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-sizes-toggle-active-disabled-small" checked autocomplete="off" />
		<label class={`${theme} ${btn} ${btnPrimary} ${btnSm}`} for="id-btn-sizes-toggle-active-disabled-small">Checked Toggle Small button</label>
	</div>
	)
}

export default ToggleActiveDisabledSmallButton

// @screenshot *: 360x120 120
