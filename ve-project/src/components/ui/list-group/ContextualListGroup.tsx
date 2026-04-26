import type { Component } from 'solid-js'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
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
} from '../../../themes/bootstrap/ui/list-group/base.css'

const ContextualListGroup: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={`${listGroup} pwhook-list-group`}>
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

export default ContextualListGroup

// @screenshot *: 360x370 370
// @screenshot brite: 360x353 353
// @screenshot litera: 360x362 362
// @screenshot lux: 360x360 360
// @screenshot morph: 360x360 360
// @screenshot quartz: 360x504 504
// @screenshot sketchy: 360x380 380
// @screenshot vapor: 360x360 360
// @screenshot yeti: 360x343 343
// @screenshot zephyr: 360x514 514
