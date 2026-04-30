import { vars } from '../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnSecondary,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${vars} ${btn} ${btnSecondary} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Secondary
			</button>
		</div>
	)
}

export default SolidCheckActiveSecondaryButton

// @screenshot *: 360x120 120
