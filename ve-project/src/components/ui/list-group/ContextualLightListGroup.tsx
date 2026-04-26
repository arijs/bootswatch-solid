import type { Component } from 'solid-js'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import {
	listGroup,
	listGroupItem,
	listGroupItemAction,
	listGroupItemLight,
} from '../../../themes/bootstrap/ui/list-group/base.css'

const ContextualLightListGroup: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={listGroup}>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class={`${listGroupItem} ${listGroupItemAction} ${listGroupItemLight} pwhook-list-group-item`}
			>
				A simple light list group item
			</a>
		</div>
	</div>
)

export default ContextualLightListGroup

// @screenshot *: 360x120 120
