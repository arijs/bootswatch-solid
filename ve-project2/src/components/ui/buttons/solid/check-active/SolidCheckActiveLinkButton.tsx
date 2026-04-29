import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnActiveHook, btnLink } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckActiveLinkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${btn} ${btnLink} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Link
			</button>
		</div>
	)
}

export default SolidCheckActiveLinkButton

// @screenshot *: 360x120 120
