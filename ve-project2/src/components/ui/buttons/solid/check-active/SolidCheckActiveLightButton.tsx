import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnActiveHook, btnLight } from '../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../theme-contract/theme-contract.css'

const SolidCheckActiveLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${vars} ${btn} ${btnLight} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Light
			</button>
		</div>
	)
}

export default SolidCheckActiveLightButton

// @screenshot *: 360x120 120
