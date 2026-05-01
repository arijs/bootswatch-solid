import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn, btnOutlineDanger } from '../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../theme-contract/layout/container.css'
const OutlineDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button type="button" class={`${theme} ${btn} ${btnOutlineDanger} pwhook-btn`}>
				Danger
			</button>
		</div>
	)
}

export default OutlineDangerButton

// @screenshot *: 360x120 120
