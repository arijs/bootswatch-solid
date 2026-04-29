import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineSecondary, btnCheck } from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-outline-toggle-secondary" autocomplete="off" />
		<label class={`${theme} ${btn} ${btnOutlineSecondary}`} for="id-btn-outline-toggle-secondary">Toggle Secondary</label>
	</div>
	)
}

export default OutlineToggleSecondaryButton

// @screenshot *: 360x120 120
