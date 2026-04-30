import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnSuccess } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../../theme-contract/theme-contract.css'

const SolidCheckDisabledSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button disabled type="button" class={`${theme} ${vars} ${btn} ${btnSuccess} pwhook-btn`}>
				Success
			</button>
		</div>
	)
}

export default SolidCheckDisabledSuccessButton

// @screenshot *: 360x120 120
