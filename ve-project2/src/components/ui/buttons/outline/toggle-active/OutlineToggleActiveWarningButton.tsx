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
	btnOutlineWarning,
} from '../../../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities/used',
]

const OutlineToggleActiveWarningButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${elInput} ${btnCheck}`}
				id="id-btn-outline-toggle-active-warning"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${elLabel} ${btn} ${btnOutlineWarning}`}
				for="id-btn-outline-toggle-active-warning"
			>
				Checked Toggle Warning
			</label>
		</div>
	)
}

export default OutlineToggleActiveWarningButton

// @screenshot *: 360x120 120
