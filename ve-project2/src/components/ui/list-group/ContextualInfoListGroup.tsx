import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	listGroup,
	listGroupItem,
	listGroupItemAction,
	listGroupItemInfo,
} from '../../../theme-contract/ui/list-group/contract.css'

const ContextualInfoListGroup: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${listGroup}`}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${theme} ${listGroupItem} ${listGroupItemAction} pwhook-list-group-item ${listGroupItemInfo}`}
				>
					A simple info list group item
				</a>
			</div>
		</div>
	)
}

export default ContextualInfoListGroup

// @screenshot *: 360x120 120
