import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../../../context/ThemeContext'
import { elInput, elLabel } from '../../../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnCheck,
	btnOutlineDark,
} from '../../../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities/used',
]

const OutlineToggleDarkButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${elInput} ${btnCheck}`}
				id="id-btn-outline-toggle-dark"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${elLabel} ${btn} ${btnOutlineDark}`}
				for="id-btn-outline-toggle-dark"
			>
				Toggle Dark
			</label>
		</div>
	)
}

export default OutlineToggleDarkButton

// @screenshot *: 360x120 120
