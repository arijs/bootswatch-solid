import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/basic/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	listGroup,
	listGroupItem,
	listGroupItemAction,
	listGroupItemPrimary,
} from '../../../theme-contract/ui/list-group/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/list-group',
	'contents/basic',
	'utilities',
]

const ContextualPrimaryListGroup: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${listGroup}`}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${theme} ${link} ${listGroupItem} ${listGroupItemAction} pwhook-list-group-item ${listGroupItemPrimary}`}
				>
					A simple primary list group item
				</a>
			</div>
		</div>
	)
}

export default ContextualPrimaryListGroup

// @screenshot *: 360x120 120
