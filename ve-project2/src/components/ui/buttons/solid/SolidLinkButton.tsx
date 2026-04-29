import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn, btnLink } from '../../../../theme-contract/ui/buttons/contract.css'

const SolidLinkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button type="button" class={`${theme} ${btn} ${btnLink} pwhook-btn`}>
				Link
			</button>
		</div>
	)
}

export default SolidLinkButton

// @screenshot *: 360x120 120
