import type { Component } from 'solid-js'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import {
	listGroup,
	listGroupItem,
	listGroupItemDisabled,
} from '../../../themes/bootstrap/ui/list-group/base.css'

const DefaultListGroup: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<ul class={`${listGroup} pwhook-list-group`}>
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

export default DefaultListGroup

// @screenshot *: 360x206 206
// @screenshot brite: 360x197 197
// @screenshot litera: 360x202 202
// @screenshot lux: 360x200 200
// @screenshot morph: 360x200 200
// @screenshot quartz: 360x280 280
// @screenshot sketchy: 360x212 212
// @screenshot vapor: 360x200 200
// @screenshot yeti: 360x191 191
// @screenshot zephyr: 360x286 286
