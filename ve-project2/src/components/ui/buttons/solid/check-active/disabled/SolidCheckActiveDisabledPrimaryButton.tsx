import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnPrimary, btnActiveHook } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveDisabledPrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<button disabled type="button" class={`${theme} ${btn} ${btnPrimary} ${btnActiveHook} pwhook-btn`}>
			Primary
		</button>
	</div>
	)
}

export default SolidCheckActiveDisabledPrimaryButton

// @screenshot *: 360x120 120
