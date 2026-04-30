import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn, btnSuccess } from '../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../theme-contract/layout/container.css'
const SolidSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button type="button" class={`${theme} ${btn} ${btnSuccess} pwhook-btn`}>
				Success
			</button>
		</div>
	)
}

export default SolidSuccessButton

// @screenshot *: 360x120 120
