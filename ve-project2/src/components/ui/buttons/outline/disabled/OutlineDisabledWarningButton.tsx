import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineWarning } from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineDisabledWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				disabled
				type="button"
				class={`${theme} ${btn} ${btnOutlineWarning} pwhook-btn`}
			>
				Warning
			</button>
		</div>
	)
}

export default OutlineDisabledWarningButton

// @screenshot *: 360x120 120
