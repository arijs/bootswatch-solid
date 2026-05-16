import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnDark } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
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
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-disabled-dark"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnDark}`} for="id-btn-solid-toggle-disabled-dark">
				Toggle Dark
			</label>
		</div>
	)
}

export default SolidToggleDisabledDarkButton

// @screenshot *: 360x120 120
