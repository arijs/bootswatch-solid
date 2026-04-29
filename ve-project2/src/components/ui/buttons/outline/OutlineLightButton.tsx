import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn, btnOutlineLight } from '../../../../theme-contract/ui/buttons/contract.css'

const OutlineLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button type="button" class={`${theme} ${btn} ${btnOutlineLight} pwhook-btn`}>
				Light
			</button>
		</div>
	)
}

export default OutlineLightButton

// @screenshot *: 360x120 120
