import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlineWarning } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
const OutlineCheckWarningButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${btn} ${btnOutlineWarning} pwhook-btn`}
				data-bs-toggle="button"
			>
				Warning
			</button>
		</div>
	)
}

export default OutlineCheckWarningButton

// @screenshot *: 360x120 120
