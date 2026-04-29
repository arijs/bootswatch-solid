import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnLink } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleLinkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-link"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnLink}`} for="id-btn-solid-toggle-link">
				Toggle Link
			</label>
		</div>
	)
}

export default SolidToggleLinkButton

// @screenshot *: 360x120 120
