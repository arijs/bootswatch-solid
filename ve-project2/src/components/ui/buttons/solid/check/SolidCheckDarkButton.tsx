import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnDark } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${btn} ${btnDark} pwhook-btn`}
				data-bs-toggle="button"
			>
				Dark
			</button>
		</div>
	)
}

export default SolidCheckDarkButton

// @screenshot *: 360x120 120
