import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnSecondary, btnCheck } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleDisabledSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input disabled type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-solid-toggle-disabled-secondary" autocomplete="off" />
		<label class={`${theme} ${btn} ${btnSecondary}`} for="id-btn-solid-toggle-disabled-secondary">Toggle Secondary</label>
	</div>
	)
}

export default SolidToggleDisabledSecondaryButton

// @screenshot *: 360x120 120
