import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnLink } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../../theme-contract/theme-contract.css'

const SolidToggleActiveDisabledLinkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<input
				disabled
				type="checkbox"
				class={`${theme} ${vars} ${btnCheck}`}
				id="id-btn-solid-toggle-active-disabled-link"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnLink}`}
				for="id-btn-solid-toggle-active-disabled-link"
			>
				Checked Toggle Link
			</label>
		</div>
	)
}

export default SolidToggleActiveDisabledLinkButton

// @screenshot *: 360x120 120
