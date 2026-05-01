import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnActiveHook,
	btnOutlineSecondary,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActiveDisabledSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${theme} ${btn} ${btnOutlineSecondary} ${btnActiveHook} pwhook-btn`}
			>
				Secondary
			</button>
		</div>
	)
}

export default OutlineCheckActiveDisabledSecondaryButton

// @screenshot *: 360x120 120
