import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnOutlineSecondary, btnActiveHook } from '../../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckActiveDisabledSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<button disabled type="button" class={`${theme} ${btn} ${btnOutlineSecondary} ${btnActiveHook} pwhook-btn`}>
			Secondary
		</button>
	</div>
	)
}

export default OutlineCheckActiveDisabledSecondaryButton

// @screenshot *: 360x120 120
