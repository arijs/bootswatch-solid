import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnActiveHook,
	btnLg,
	btnPrimary,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const CheckActiveDisabledLargeButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${theme} ${btn} ${btnPrimary} ${btnLg} ${btnActiveHook} pwhook-btn`}
			>
				Large button
			</button>
		</div>
	)
}

export default CheckActiveDisabledLargeButton

// @screenshot *: 360x120 120
