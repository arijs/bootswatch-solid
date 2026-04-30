import { vars } from '../../../../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import {
	btn,
	btnCheck,
	btnOutlinePrimary,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleDisabledPrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-outline-toggle-disabled-primary"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlinePrimary}`}
				for="id-btn-outline-toggle-disabled-primary"
			>
				Toggle Primary
			</label>
		</div>
	)
}

export default OutlineToggleDisabledPrimaryButton

// @screenshot *: 360x120 120
