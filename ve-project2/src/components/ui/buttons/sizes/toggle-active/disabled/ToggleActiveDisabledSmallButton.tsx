import {
	elInput,
	elLabel,
} from '../../../../../../theme-contract/global-elements/contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnCheck,
	btnPrimary,
	btnSm,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const ToggleActiveDisabledSmallButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${elInput} ${btnCheck}`}
				id="id-btn-sizes-toggle-active-disabled-small"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${elLabel} ${btn} ${btnPrimary} ${btnSm}`}
				for="id-btn-sizes-toggle-active-disabled-small"
			>
				Checked Toggle Small button
			</label>
		</div>
	)
}

export default ToggleActiveDisabledSmallButton

// @screenshot *: 360x120 120
