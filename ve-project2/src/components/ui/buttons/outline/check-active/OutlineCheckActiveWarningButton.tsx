import { vars } from '../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnOutlineWarning,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActiveWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${vars} ${btn} ${btnOutlineWarning} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Warning
			</button>
		</div>
	)
}

export default OutlineCheckActiveWarningButton

// @screenshot *: 360x120 120
