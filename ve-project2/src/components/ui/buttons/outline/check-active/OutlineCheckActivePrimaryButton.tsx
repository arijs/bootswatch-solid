import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnActiveHook,
	btnOutlinePrimary,
} from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActivePrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${btn} ${btnOutlinePrimary} ${btnActiveHook} pwhook-btn`}
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
