import type { Component } from 'solid-js'
import { useVeListGroupThemeClasses } from '../../../themes/runtime/hooks'

const ContextualDarkListGroup: Component = () => {
	const cls = useVeListGroupThemeClasses()

	return (
	<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
		<div class={cls.listGroup}>
			{/* biome-ignore lint: <a> is used for demonstration purposes */}
			<a
				href="#"
				onClick={(e) => e.preventDefault()}
				class={`${cls.listGroupItem} ${cls.listGroupItemAction} ${cls.listGroupItemDark} pwhook-list-group-item`}
			>
				A simple dark list group item
			</a>
		</div>
	</div>
	)
}

export default ContextualDarkListGroup

// @screenshot *: 360x120 120
