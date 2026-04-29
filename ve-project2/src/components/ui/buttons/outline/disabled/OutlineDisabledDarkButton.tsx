import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineDark } from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineDisabledDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<button disabled type="button" class={`${theme} ${btn} ${btnOutlineDark} pwhook-btn`}>
			Dark
		</button>
	</div>
	)
}

export default OutlineDisabledDarkButton

// @screenshot *: 360x120 120
