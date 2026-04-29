import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn, btnOutlineSuccess } from '../../../../theme-contract/ui/buttons/contract.css'

const OutlineSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button type="button" class={`${theme} ${btn} ${btnOutlineSuccess} pwhook-btn`}>
				Success
			</button>
		</div>
	)
}

export default OutlineSuccessButton

// @screenshot *: 360x120 120
