import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnOutlineSuccess,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActiveDisabledSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				disabled
				type="button"
				class={`${theme} ${btn} ${btnOutlineSuccess} ${btnActiveHook} pwhook-btn`}
			>
				Success
			</button>
		</div>
	)
}

export default OutlineCheckActiveDisabledSuccessButton

// @screenshot *: 360x120 120
