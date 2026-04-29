import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnActiveHook } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveBaseButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<button type="button" class={`${theme} ${btn} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Button
		</button>
	</div>
	)
}

export default SolidCheckActiveBaseButton

// @screenshot *: 360x120 120
