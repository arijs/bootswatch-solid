import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineDark, inputFontFamily } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
const OutlineDisabledDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button disabled type="button" class={`${theme} ${btn} ${btnOutlineDark} ${inputFontFamily} pwhook-btn`}>
				Dark
			</button>
		</div>
	)
}

export default OutlineDisabledDarkButton

// @screenshot *: 360x120 120
