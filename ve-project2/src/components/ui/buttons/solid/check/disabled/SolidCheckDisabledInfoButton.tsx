import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnInfo } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
const SolidCheckDisabledInfoButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button disabled type="button" class={`${theme} ${btn} ${btnInfo} pwhook-btn`}>
				Info
			</button>
		</div>
	)
}

export default SolidCheckDisabledInfoButton

// @screenshot *: 360x120 120
