import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn, btnPrimary } from '../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../theme-contract/theme-contract.css'

const SolidPrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button type="button" class={`${theme} ${vars} ${btn} ${btnPrimary} pwhook-btn`}>
				Primary
			</button>
		</div>
	)
}

export default SolidPrimaryButton

// @screenshot *: 360x120 120
