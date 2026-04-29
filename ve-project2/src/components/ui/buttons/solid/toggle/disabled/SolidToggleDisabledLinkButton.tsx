import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnLink, btnCheck } from '../../../../../../theme-contract/ui/buttons/contract.css'

const SolidToggleDisabledLinkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
	<div class="bd-example-ve2">
		<input disabled type="checkbox" class={`${theme} ${btnCheck}`} id="id-btn-solid-toggle-disabled-link" autocomplete="off" />
		<label class={`${theme} ${btn} ${btnLink}`} for="id-btn-solid-toggle-disabled-link">Toggle Link</label>
	</div>
	)
}

export default SolidToggleDisabledLinkButton

// @screenshot *: 360x120 120
