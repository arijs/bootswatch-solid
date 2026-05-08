import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnSuccess, inputFontFamily } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
const SolidCheckDisabledSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button disabled type="button" class={`${theme} ${btn} ${btnSuccess} ${inputFontFamily} pwhook-btn`}>
				Success
			</button>
		</div>
	)
}

export default SolidCheckDisabledSuccessButton

// @screenshot *: 360x120 120
