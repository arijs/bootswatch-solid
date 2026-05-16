import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../../context/ThemeContext'
import { btn, btnCheck, btnLink } from '../../../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents',
	'utilities',
]

const SolidToggleActiveDisabledLinkButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-solid-toggle-active-disabled-link"
				checked
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnLink}`}
				for="id-btn-solid-toggle-active-disabled-link"
			>
				Checked Toggle Link
			</label>
		</div>
	)
}

export default SolidToggleActiveDisabledLinkButton

// @screenshot *: 360x120 120
