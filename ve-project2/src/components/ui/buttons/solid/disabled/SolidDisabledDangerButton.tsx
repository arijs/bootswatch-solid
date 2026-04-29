import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnDanger } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidDisabledDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<button disabled type="button" class={`${theme} ${btn} ${btnDanger} pwhook-btn`}>
			Danger
		</button>
	</div>
	)
}

export default SolidDisabledDangerButton

// @screenshot *: 360x120 120
