import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineLight } from '../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../theme-contract/theme-contract.css'

const OutlineCheckLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${vars} ${btn} ${btnOutlineLight} pwhook-btn`}
				data-bs-toggle="button"
			>
				Light
			</button>
		</div>
	)
}

export default OutlineCheckLightButton

// @screenshot *: 360x120 120
