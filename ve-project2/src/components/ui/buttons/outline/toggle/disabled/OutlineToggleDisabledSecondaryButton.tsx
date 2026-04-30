import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnCheck,
	btnOutlineSecondary,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineToggleDisabledSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-disabled-secondary"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineSecondary}`}
				for="id-btn-outline-toggle-disabled-secondary"
			>
				Toggle Secondary
			</label>
		</div>
	)
}

export default OutlineToggleDisabledSecondaryButton

// @screenshot *: 360x120 120
