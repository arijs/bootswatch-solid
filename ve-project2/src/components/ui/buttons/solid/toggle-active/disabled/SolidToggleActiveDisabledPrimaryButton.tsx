import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnPrimary } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const SolidToggleActiveDisabledPrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-active-disabled-primary"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnPrimary}`}
				for="id-btn-solid-toggle-active-disabled-primary"
			>
				Checked Toggle Primary
			</label>
		</div>
	)
}

export default SolidToggleActiveDisabledPrimaryButton

// @screenshot *: 360x120 120
