import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnActiveHook,
	btnOutlineDanger,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActiveDisabledDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${theme} ${btn} ${btnOutlineDanger} ${btnActiveHook} pwhook-btn`}
			>
				Danger
			</button>
		</div>
	)
}

export default OutlineCheckActiveDisabledDangerButton

// @screenshot *: 360x120 120
