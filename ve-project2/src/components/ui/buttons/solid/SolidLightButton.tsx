import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn, btnLight } from '../../../../theme-contract/ui/buttons/contract.css'

const SolidLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<button type="button" class={`${theme} ${btn} ${btnLight} pwhook-btn`}>
			Light
		</button>
	</div>
	)
}

export default SolidLightButton

// @screenshot *: 360x120 120
