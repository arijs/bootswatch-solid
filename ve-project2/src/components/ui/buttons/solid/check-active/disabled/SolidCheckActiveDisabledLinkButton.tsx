import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnActiveHook,
	btnLink,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveDisabledLinkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${theme} ${btn} ${btnLink} ${btnActiveHook} pwhook-btn`}
			>
				Link
			</button>
		</div>
	)
}

export default SolidCheckActiveDisabledLinkButton

// @screenshot *: 360x120 120
