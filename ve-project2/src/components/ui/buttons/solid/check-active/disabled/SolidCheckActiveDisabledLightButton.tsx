import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnLight,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveDisabledLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				disabled
				type="button"
				class={`${theme} ${btn} ${btnLight} ${btnActiveHook} pwhook-btn`}
			>
				Light
			</button>
		</div>
	)
}

export default SolidCheckActiveDisabledLightButton

// @screenshot *: 360x120 120
