import { vars } from '../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnLg,
	btnPrimary,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const CheckActiveLargeButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${vars} ${btn} ${btnPrimary} ${btnLg} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Large button
			</button>
		</div>
	)
}

export default CheckActiveLargeButton

// @screenshot *: 360x120 120
