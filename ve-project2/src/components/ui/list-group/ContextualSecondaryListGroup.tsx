import { vars } from '../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	listGroup,
	listGroupItem,
	listGroupItemAction,
	listGroupItemSecondary,
} from '../../../theme-contract/ui/list-group/contract.css'

const ContextualSecondaryListGroup: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${vars} ${listGroup}`}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${listGroupItem} ${listGroupItemAction} ${listGroupItemSecondary}`}
				>
					A simple secondary list group item
				</a>
			</div>
		</div>
	)
}

export default ContextualSecondaryListGroup

// @screenshot *: 360x120 120
