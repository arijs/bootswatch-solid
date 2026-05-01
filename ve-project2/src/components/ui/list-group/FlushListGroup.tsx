import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	listGroup,
	listGroupFlush,
	listGroupItem,
} from '../../../theme-contract/ui/list-group/contract.css'

const FlushListGroup: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<ul class={`${theme} ${listGroup} ${listGroupFlush}`}>
				<li class={`${theme} ${listGroupItem}`}>An item</li>
				<li class={`${theme} ${listGroupItem}`}>A second item</li>
				<li class={`${theme} ${listGroupItem}`}>A third item</li>
				<li class={`${theme} ${listGroupItem}`}>A fourth item</li>
				<li class={`${theme} ${listGroupItem}`}>And a fifth one</li>
			</ul>
		</div>
	)
}

export default FlushListGroup

// @screenshot *: 360x204 204
