import { vars } from '../../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnDanger,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveDisabledDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				disabled
				type="button"
				class={`${theme} ${vars} ${btn} ${btnDanger} ${btnActiveHook} pwhook-btn`}
			>
				Danger
			</button>
		</div>
	)
}

export default SolidCheckActiveDisabledDangerButton

// @screenshot *: 360x120 120
