import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnDanger } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents',
	'utilities',
]

const SolidToggleDisabledDangerButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-disabled-danger"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnDanger}`} for="id-btn-solid-toggle-disabled-danger">
				Toggle Danger
			</label>
		</div>
	)
}

export default SolidToggleDisabledDangerButton

// @screenshot *: 360x120 120
