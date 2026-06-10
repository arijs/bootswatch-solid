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
import { btn, btnCheck, btnDark } from '../../../../../../theme-contract/ui/buttons/contract.css'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const SolidToggleDisabledDarkButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${elInput} ${btnCheck}`}
				id="id-btn-solid-toggle-disabled-dark"
				autocomplete="off"
			/>
			<label class={`${theme} ${elLabel} ${btn} ${btnDark}`} for="id-btn-solid-toggle-disabled-dark">
				Toggle Dark
			</label>
		</div>
	)
}

export default SolidToggleDisabledDarkButton

// @screenshot *: 360x120 120
