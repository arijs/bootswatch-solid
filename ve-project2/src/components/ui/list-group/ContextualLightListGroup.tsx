import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	listGroup,
	listGroupItem,
	listGroupItemAction,
	listGroupItemLight,
} from '../../../theme-contract/ui/list-group/contract.css'

const ContextualLightListGroup: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${listGroup}`}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${listGroupItem} ${listGroupItemAction} ${listGroupItemLight}`}
				>
					A simple light list group item
				</a>
			</div>
		</div>
	)
}

export default ContextualLightListGroup

// @screenshot *: 360x120 120
