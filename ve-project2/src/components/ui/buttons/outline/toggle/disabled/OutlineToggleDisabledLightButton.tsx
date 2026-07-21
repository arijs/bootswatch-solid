import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../../../../context/ThemeContext'
import { elInput, elLabel } from '../../../../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnCheck,
	btnOutlineLight,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities/used',
]

const OutlineToggleDisabledLightButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${elInput} ${btnCheck}`}
				id="id-btn-outline-toggle-disabled-light"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${elLabel} ${btn} ${btnOutlineLight}`}
				for="id-btn-outline-toggle-disabled-light"
			>
				Toggle Light
			</label>
		</div>
	)
}

export default OutlineToggleDisabledLightButton

// @screenshot *: 360x120 120
