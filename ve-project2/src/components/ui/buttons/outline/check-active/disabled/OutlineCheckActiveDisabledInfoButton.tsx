import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../../../../context/ThemeContext'
import { elButton } from '../../../../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import { active } from '../../../../../../theme-contract/literal/contract.css'
import {
	btn,
	btnActiveHook,
	btnOutlineInfo,
	inputFontFamily,
} from '../../../../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities/used',
]

const OutlineCheckActiveDisabledInfoButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${theme} ${elButton} ${btn} ${btnOutlineInfo} ${active} ${btnActiveHook} ${inputFontFamily} pwhook-btn`}
			>
				Info
			</button>
		</div>
	)
}

export default OutlineCheckActiveDisabledInfoButton

// @screenshot *: 360x120 120
