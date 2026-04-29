import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckBaseButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button type="button" class={`${theme} ${btn} pwhook-btn`} data-bs-toggle="button">
				Button
			</button>
		</div>
	)
}

export default SolidCheckBaseButton

// @screenshot *: 360x120 120
