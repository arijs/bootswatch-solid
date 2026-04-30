import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnOutlinePrimary } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../../theme-contract/theme-contract.css'

const OutlineCheckDisabledPrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				disabled
				type="button"
				class={`${theme} ${vars} ${btn} ${btnOutlinePrimary} pwhook-btn`}
			>
				Primary
			</button>
		</div>
	)
}

export default OutlineCheckDisabledPrimaryButton

// @screenshot *: 360x120 120
