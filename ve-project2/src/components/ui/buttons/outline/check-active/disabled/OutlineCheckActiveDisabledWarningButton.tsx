import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnOutlineWarning, btnActiveHook } from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActiveDisabledWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<button disabled type="button" class={`${theme} ${btn} ${btnOutlineWarning} ${btnActiveHook} pwhook-btn`}>
			Warning
		</button>
	</div>
	)
}

export default OutlineCheckActiveDisabledWarningButton

// @screenshot *: 360x120 120
