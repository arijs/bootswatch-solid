import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineSuccess } from '../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../theme-contract/theme-contract.css'

const OutlineCheckSuccessButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${vars} ${btn} ${btnOutlineSuccess} pwhook-btn`}
				data-bs-toggle="button"
			>
				Success
			</button>
		</div>
	)
}

export default OutlineCheckSuccessButton

// @screenshot *: 360x120 120
