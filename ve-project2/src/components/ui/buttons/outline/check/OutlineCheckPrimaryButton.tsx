import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../../context/ThemeContext'
import { btn, btnOutlinePrimary } from '../../../../../theme-contract/ui/buttons/contract.css'

const OutlineCheckPrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<button
				type="button"
				class={`${theme} ${btn} ${btnOutlinePrimary} pwhook-btn`}
				data-bs-toggle="button"
			>
				Primary
			</button>
		</div>
	)
}

export default OutlineCheckPrimaryButton

// @screenshot *: 360x120 120
