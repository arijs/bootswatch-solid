import type { Component } from 'solid-js'
import { useVeListGroupThemeClasses } from '../../../themes/runtime/hooks'

const ContextualListGroup: Component = () => {
	const cls = useVeListGroupThemeClasses()

	return (
	<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
		<div class={`${cls.listGroup} pwhook-list-group`}>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class={`${cls.listGroupItem} ${cls.listGroupItemAction}`}
			>
				A simple default list group item
			</a>

			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class={`${cls.listGroupItem} ${cls.listGroupItemAction} ${cls.listGroupItemPrimary}`}
			>
				A simple primary list group item
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class={`${cls.listGroupItem} ${cls.listGroupItemAction} ${cls.listGroupItemSecondary}`}
			>
				A simple secondary list group item
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class={`${cls.listGroupItem} ${cls.listGroupItemAction} ${cls.listGroupItemSuccess}`}
			>
				A simple success list group item
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class={`${cls.listGroupItem} ${cls.listGroupItemAction} ${cls.listGroupItemDanger}`}
			>
				A simple danger list group item
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class={`${cls.listGroupItem} ${cls.listGroupItemAction} ${cls.listGroupItemWarning}`}
			>
				A simple warning list group item
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class={`${cls.listGroupItem} ${cls.listGroupItemAction} ${cls.listGroupItemInfo}`}
			>
				A simple info list group item
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class={`${cls.listGroupItem} ${cls.listGroupItemAction} ${cls.listGroupItemLight}`}
			>
				A simple light list group item
			</a>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class={`${cls.listGroupItem} ${cls.listGroupItemAction} ${cls.listGroupItemDark}`}
			>
				A simple dark list group item
			</a>
		</div>
	</div>
	)
}

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
