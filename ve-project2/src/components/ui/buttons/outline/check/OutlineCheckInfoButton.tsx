import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineInfo } from '../../../../../theme-contract/ui/buttons/contract.css'
import { vars } from '../../../../../theme-contract/theme-contract.css'

const OutlineCheckInfoButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${vars} ${btn} ${btnOutlineInfo} pwhook-btn`}
				data-bs-toggle="button"
			>
				Info
			</button>
		</div>
	)
}

export default OutlineCheckInfoButton

// @screenshot *: 360x120 120
