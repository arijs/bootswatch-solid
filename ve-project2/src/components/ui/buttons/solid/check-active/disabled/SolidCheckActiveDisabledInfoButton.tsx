import { vars } from '../../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnInfo,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveDisabledInfoButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				disabled
				type="button"
				class={`${theme} ${vars} ${btn} ${btnInfo} ${btnActiveHook} pwhook-btn`}
			>
				Info
			</button>
		</div>
	)
}

export default SolidCheckActiveDisabledInfoButton

// @screenshot *: 360x120 120
