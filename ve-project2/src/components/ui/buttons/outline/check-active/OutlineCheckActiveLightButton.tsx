import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnOutlineLight,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActiveLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${btn} ${btnOutlineLight} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Light
			</button>
		</div>
	)
}

export default OutlineCheckActiveLightButton

// @screenshot *: 360x120 120
