import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../theme-contract/theme-contract.css'

const SolidBaseButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button type="button" class={`${theme} ${vars} ${btn} pwhook-btn`}>
				Button
			</button>
		</div>
	)
}

export default SolidBaseButton

// @screenshot *: 360x120 120
