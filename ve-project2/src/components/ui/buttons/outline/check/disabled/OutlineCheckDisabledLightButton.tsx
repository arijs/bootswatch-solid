import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnOutlineLight } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../../theme-contract/theme-contract.css'

const OutlineCheckDisabledLightButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button disabled type="button" class={`${theme} ${vars} ${btn} ${btnOutlineLight} pwhook-btn`}>
				Light
			</button>
		</div>
	)
}

export default OutlineCheckDisabledLightButton

// @screenshot *: 360x120 120
