import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnSuccess } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidDisabledSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button disabled type="button" class={`${theme} ${btn} ${btnSuccess} pwhook-btn`}>
				Success
			</button>
		</div>
	)
}

export default SolidDisabledSuccessButton

// @screenshot *: 360x120 120
