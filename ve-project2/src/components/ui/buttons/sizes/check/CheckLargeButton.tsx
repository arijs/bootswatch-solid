import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnPrimary, btnLg } from '../../../../../theme-contract/ui/buttons/contract.css'

const CheckLargeButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<button type="button" class={`${theme} ${btn} ${btnPrimary} ${btnLg} pwhook-btn`} data-bs-toggle="button">
			Large button
		</button>
	</div>
	)
}

export default CheckLargeButton

// @screenshot *: 360x120 120
