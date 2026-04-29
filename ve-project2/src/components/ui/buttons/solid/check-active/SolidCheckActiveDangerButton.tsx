import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnDanger,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${btn} ${btnDanger} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Danger
			</button>
		</div>
	)
}

export default SolidCheckActiveDangerButton

// @screenshot *: 360x120 120
