import { vars } from '../../../theme-contract/theme-contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	listGroup,
	listGroupItem,
	listGroupItemDisabled,
} from '../../../theme-contract/ui/list-group/contract.css'

const DefaultListGroup: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<ul class={`${theme} ${vars} ${listGroup}`}>
				<li class={`${listGroupItem} ${listGroupItemDisabled}`} aria-disabled="true">
					A disabled item
				</li>
				<li class={listGroupItem}>A second item</li>
				<li class={listGroupItem}>A third item</li>
				<li class={listGroupItem}>A fourth item</li>
				<li class={listGroupItem}>And a fifth one</li>
			</ul>
		</div>
	)
}

export default DefaultListGroup

// @screenshot *: 360x206 206
