import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnDark } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../../theme-contract/theme-contract.css'

const SolidCheckDisabledDarkButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button disabled type="button" class={`${theme} ${vars} ${btn} ${btnDark} pwhook-btn`}>
				Dark
			</button>
		</div>
	)
}

export default SolidCheckDisabledDarkButton

// @screenshot *: 360x120 120
