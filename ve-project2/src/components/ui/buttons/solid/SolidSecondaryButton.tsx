import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn, btnSecondary } from '../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../theme-contract/theme-contract.css'

const SolidSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button type="button" class={`${theme} ${vars} ${btn} ${btnSecondary} pwhook-btn`}>
				Secondary
			</button>
		</div>
	)
}

export default SolidSecondaryButton

// @screenshot *: 360x120 120
