import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { visuallyHidden } from '../../../theme-contract/utilities/contract.css'
import {
	spinnerGrow,
	spinnerSecondary,
} from '../../../theme-contract/ui/spinners/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/spinners',
	'contents/basic',
	'utilities',
]

const GrowSecondarySpinner: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<div class={`${theme} ${spinnerGrow} ${spinnerSecondary}`}>
					<span class={`${theme} ${visuallyHidden}`}>Loading...</span>
				</div>
			</div>
		</div>
	)
}

export default GrowSecondarySpinner

// @screenshot *: 360x120 120
