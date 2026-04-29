import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnLink } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidCheckDisabledLinkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<button disabled type="button" class={`${theme} ${btn} ${btnLink} pwhook-btn`}>
			Link
		</button>
	</div>
	)
}

export default SolidCheckDisabledLinkButton

// @screenshot *: 360x120 120
