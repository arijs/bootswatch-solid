import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn, btnOutlinePrimary } from '../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../theme-contract/layout/container.css'
const OutlinePrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button type="button" class={`${theme} ${btn} ${btnOutlinePrimary} pwhook-btn`}>
				Primary
			</button>
		</div>
	)
}

export default OutlinePrimaryButton

// @screenshot *: 360x120 120
