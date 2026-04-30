import { vars } from '../../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnLink,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveDisabledLinkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				disabled
				type="button"
				class={`${theme} ${vars} ${btn} ${btnLink} ${btnActiveHook} pwhook-btn`}
			>
				Link
			</button>
		</div>
	)
}

export default SolidCheckActiveDisabledLinkButton

// @screenshot *: 360x120 120
