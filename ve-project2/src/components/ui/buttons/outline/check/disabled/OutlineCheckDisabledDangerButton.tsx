import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { btn, btnOutlineDanger } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../../theme-contract/theme-contract.css'

const OutlineCheckDisabledDangerButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button disabled type="button" class={`${theme} ${vars} ${btn} ${btnOutlineDanger} pwhook-btn`}>
				Danger
			</button>
		</div>
	)
}

export default OutlineCheckDisabledDangerButton

// @screenshot *: 360x120 120
