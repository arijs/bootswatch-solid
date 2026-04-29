import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnActiveHook } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveDisabledBaseButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button disabled type="button" class={`${theme} ${btn} ${btnActiveHook} pwhook-btn`}>
				Button
			</button>
		</div>
	)
}

export default SolidCheckActiveDisabledBaseButton

// @screenshot *: 360x120 120
