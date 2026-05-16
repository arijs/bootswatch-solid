import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../context/ThemeContext'
import { btn, btnCheck, btnPrimary } from '../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents',
	'utilities',
]

const SolidTogglePrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-primary"
				autocomplete="off"
			/>
			<label class={`${theme} ${btn} ${btnPrimary}`} for="id-btn-solid-toggle-primary">
				Toggle Primary
			</label>
		</div>
	)
}

export default SolidTogglePrimaryButton

// @screenshot *: 360x120 120
