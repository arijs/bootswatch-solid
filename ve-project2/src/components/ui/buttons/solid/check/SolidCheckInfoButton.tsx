import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnInfo } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckInfoButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${btn} ${btnInfo} pwhook-btn`}
				data-bs-toggle="button"
			>
				Info
			</button>
		</div>
	)
}

export default SolidCheckInfoButton

// @screenshot *: 360x120 120
