import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnLg, btnPrimary } from '../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../theme-contract/theme-contract.css'

const DisabledLargeButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				disabled
				type="button"
				class={`${theme} ${vars} ${btn} ${btnPrimary} ${btnLg} pwhook-btn`}
			>
				Large button
			</button>
		</div>
	)
}

export default DisabledLargeButton

// @screenshot *: 360x120 120
