import { vars } from '../../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnOutlineDark,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActiveDisabledDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				disabled
				type="button"
				class={`${theme} ${vars} ${btn} ${btnOutlineDark} ${btnActiveHook} pwhook-btn`}
			>
				Dark
			</button>
		</div>
	)
}

export default OutlineCheckActiveDisabledDarkButton

// @screenshot *: 360x120 120
