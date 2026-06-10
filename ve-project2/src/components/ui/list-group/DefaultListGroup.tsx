import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { disabled } from '../../../theme-contract/literal/contract.css'
import {
	listGroup,
	listGroupItem,
	listGroupItemDisabled,
} from '../../../theme-contract/ui/list-group/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/list-group',
	'contents/basic',
	'utilities',
]

const DefaultListGroup: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<ul class={`${theme} ${listGroup}`}>
				<li
					class={`${theme} ${listGroupItem} ${listGroupItemDisabled} ${disabled}`}
					aria-disabled="true"
				>
					A disabled item
				</li>
				<li class={`${theme} ${listGroupItem}`}>A second item</li>
				<li class={`${theme} ${listGroupItem}`}>A third item</li>
				<li class={`${theme} ${listGroupItem}`}>A fourth item</li>
				<li class={`${theme} ${listGroupItem}`}>And a fifth one</li>
			</ul>
		</div>
	)
}

export default DefaultListGroup

// @screenshot *: 360x206 206
