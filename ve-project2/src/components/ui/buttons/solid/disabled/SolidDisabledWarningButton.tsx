import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnWarning } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidDisabledWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button disabled type="button" class={`${theme} ${btn} ${btnWarning} pwhook-btn`}>
				Warning
			</button>
		</div>
	)
}

export default SolidDisabledWarningButton

// @screenshot *: 360x120 120
