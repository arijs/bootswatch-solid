import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnActiveHook, btnDark, inputFontFamily } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
const SolidCheckActiveDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${btn} ${btnDark} ${btnActiveHook} ${inputFontFamily} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Dark
			</button>
		</div>
	)
}

export default SolidCheckActiveDarkButton

// @screenshot *: 360x120 120
