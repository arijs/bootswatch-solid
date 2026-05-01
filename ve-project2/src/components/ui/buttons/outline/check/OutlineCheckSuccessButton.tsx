import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineSuccess } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
const OutlineCheckSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${btn} ${btnOutlineSuccess} pwhook-btn`}
				data-bs-toggle="button"
			>
				Success
			</button>
		</div>
	)
}

export default OutlineCheckSuccessButton

// @screenshot *: 360x120 120
