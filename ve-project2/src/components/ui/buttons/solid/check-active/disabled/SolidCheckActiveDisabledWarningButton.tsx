import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnWarning,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveDisabledWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				disabled
				type="button"
				class={`${theme} ${btn} ${btnWarning} ${btnActiveHook} pwhook-btn`}
			>
				Warning
			</button>
		</div>
	)
}

export default SolidCheckActiveDisabledWarningButton

// @screenshot *: 360x120 120
