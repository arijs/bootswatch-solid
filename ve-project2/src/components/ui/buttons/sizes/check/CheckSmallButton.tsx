import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnPrimary, btnSm } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
const CheckSmallButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${btn} ${btnPrimary} ${btnSm} pwhook-btn`}
				data-bs-toggle="button"
			>
				Small button
			</button>
		</div>
	)
}

export default CheckSmallButton

// @screenshot *: 360x120 120
