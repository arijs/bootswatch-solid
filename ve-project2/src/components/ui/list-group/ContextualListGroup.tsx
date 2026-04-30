import { vars } from '../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	listGroup,
	listGroupItem,
	listGroupItemAction,
	listGroupItemDanger,
	listGroupItemDark,
	listGroupItemInfo,
	listGroupItemLight,
	listGroupItemPrimary,
	listGroupItemSecondary,
	listGroupItemSuccess,
	listGroupItemWarning,
} from '../../../theme-contract/ui/list-group/contract.css'

const ContextualListGroup: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${vars} ${listGroup}`}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${listGroupItem} ${listGroupItemAction}`}
				>
					A simple default list group item
				</a>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${listGroupItem} ${listGroupItemAction} ${listGroupItemPrimary}`}
				>
					A simple primary list group item
				</a>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${listGroupItem} ${listGroupItemAction} ${listGroupItemSecondary}`}
				>
					A simple secondary list group item
				</a>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${listGroupItem} ${listGroupItemAction} ${listGroupItemSuccess}`}
				>
					A simple success list group item
				</a>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${listGroupItem} ${listGroupItemAction} ${listGroupItemDanger}`}
				>
					A simple danger list group item
				</a>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${listGroupItem} ${listGroupItemAction} ${listGroupItemWarning}`}
				>
					A simple warning list group item
				</a>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${listGroupItem} ${listGroupItemAction} ${listGroupItemInfo}`}
				>
					A simple info list group item
				</a>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${listGroupItem} ${listGroupItemAction} ${listGroupItemLight}`}
				>
					A simple light list group item
				</a>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${listGroupItem} ${listGroupItemAction} ${listGroupItemDark}`}
				>
					A simple dark list group item
				</a>
			</div>
		</div>
	)
}

export default ContextualListGroup

// @screenshot *: 360x370 370
