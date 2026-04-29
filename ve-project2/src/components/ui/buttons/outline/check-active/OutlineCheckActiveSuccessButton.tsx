import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnOutlineSuccess,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActiveSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${btn} ${btnOutlineSuccess} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Success
			</button>
		</div>
	)
}

export default OutlineCheckActiveSuccessButton

// @screenshot *: 360x120 120
