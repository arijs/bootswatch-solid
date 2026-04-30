import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn, btnOutlineSecondary } from '../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../theme-contract/theme-contract.css'

const OutlineSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button type="button" class={`${theme} ${vars} ${btn} ${btnOutlineSecondary} pwhook-btn`}>
				Secondary
			</button>
		</div>
	)
}

export default OutlineSecondaryButton

// @screenshot *: 360x120 120
