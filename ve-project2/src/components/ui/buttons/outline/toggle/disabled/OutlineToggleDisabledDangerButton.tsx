import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnCheck,
	btnOutlineDanger,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const OutlineToggleDisabledDangerButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${theme} ${btnCheck}`}
				id="id-btn-outline-toggle-disabled-danger"
				autocomplete="off"
			/>
			<label
				class={`${theme} ${btn} ${btnOutlineDanger}`}
				for="id-btn-outline-toggle-disabled-danger"
			>
				Toggle Danger
			</label>
		</div>
	)
}

export default OutlineToggleDisabledDangerButton

// @screenshot *: 360x120 120
