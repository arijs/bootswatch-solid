import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnDanger } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${btn} ${btnDanger} pwhook-btn`}
				data-bs-toggle="button"
			>
				Danger
			</button>
		</div>
	)
}

export default SolidCheckDangerButton

// @screenshot *: 360x120 120
