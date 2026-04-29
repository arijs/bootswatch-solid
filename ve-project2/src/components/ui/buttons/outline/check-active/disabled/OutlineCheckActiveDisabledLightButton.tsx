import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnOutlineLight, btnActiveHook } from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActiveDisabledLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<button disabled type="button" class={`${theme} ${btn} ${btnOutlineLight} ${btnActiveHook} pwhook-btn`}>
			Light
		</button>
	</div>
	)
}

export default OutlineCheckActiveDisabledLightButton

// @screenshot *: 360x120 120
