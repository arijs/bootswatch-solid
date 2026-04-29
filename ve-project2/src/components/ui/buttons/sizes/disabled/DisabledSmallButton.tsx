import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnPrimary, btnSm } from '../../../../../theme-contract/ui/buttons/contract.css'

const DisabledSmallButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				disabled
				type="button"
				class={`${theme} ${btn} ${btnPrimary} ${btnSm} pwhook-btn`}
			>
				Small button
			</button>
		</div>
	)
}

export default DisabledSmallButton

// @screenshot *: 360x120 120
