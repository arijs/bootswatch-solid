import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../../../context/ThemeContext'
import { elButton } from '../../../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
import {
	btn,
	btnSecondary,
	inputFontFamily,
} from '../../../../../theme-contract/ui/buttons/contract.css'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities/used',
]

const SolidCheckSecondaryButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${elButton} ${btn} ${btnSecondary} ${inputFontFamily} pwhook-btn`}
				data-bs-toggle="button"
			>
				Secondary
			</button>
		</div>
	)
}

export default SolidCheckSecondaryButton

// @screenshot *: 360x120 120
