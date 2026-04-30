import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnSecondary } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
const SolidCheckSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${btn} ${btnSecondary} pwhook-btn`}
				data-bs-toggle="button"
			>
				Secondary
			</button>
		</div>
	)
}

export default SolidCheckSecondaryButton

// @screenshot *: 360x120 120
