import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnActiveHook,
	btnSuccess,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${btn} ${btnSuccess} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Success
			</button>
		</div>
	)
}

export default SolidCheckActiveSuccessButton

// @screenshot *: 360x120 120
