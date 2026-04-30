import { vars } from '../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import {
	btn,
	btnActiveHook,
	btnOutlinePrimary,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActivePrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${vars} ${btn} ${btnOutlinePrimary} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Primary
			</button>
		</div>
	)
}

export default OutlineCheckActivePrimaryButton

// @screenshot *: 360x120 120
