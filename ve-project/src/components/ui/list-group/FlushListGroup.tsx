import type { Component } from 'solid-js'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import {
	listGroup,
	listGroupFlush,
	listGroupItem,
} from '../../../themes/bootstrap/ui/list-group/base.css'

const FlushListGroup: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<ul class={`${listGroup} ${listGroupFlush} pwhook-list-group`}>
			<li class={listGroupItem}>An item</li>
			<li class={listGroupItem}>A second item</li>
			<li class={listGroupItem}>A third item</li>
			<li class={listGroupItem}>A fourth item</li>
			<li class={listGroupItem}>And a fifth one</li>
		</ul>
	</div>
)

export default FlushListGroup

// @screenshot *: 360x204 204
// @screenshot brite: 360x193 193
// @screenshot litera: 360x200 200
// @screenshot lux: 360x200 200
// @screenshot morph: 360x200 200
// @screenshot quartz: 360x280 280
// @screenshot sketchy: 360x212 212
// @screenshot vapor: 360x200 200
// @screenshot yeti: 360x189 189
// @screenshot zephyr: 360x284 284
