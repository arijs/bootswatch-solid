import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnPrimary } from '../../../../../theme-contract/ui/buttons/contract.css'

const SolidDisabledPrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button disabled type="button" class={`${theme} ${btn} ${btnPrimary} pwhook-btn`}>
				Primary
			</button>
		</div>
	)
}

export default SolidDisabledPrimaryButton

// @screenshot *: 360x120 120
