import type { Component } from 'solid-js'
import { useVeListGroupThemeClasses } from '../../../themes/runtime/hooks'

const ContextualDefaultListGroup: Component = () => {
	const cls = useVeListGroupThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div class={cls.listGroup}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${cls.listGroupItem} ${cls.listGroupItemAction} pwhook-list-group-item`}
				>
					A simple default list group item
				</a>
			</div>
		</div>
	)
}

export default ContextualDefaultListGroup

// @screenshot *: 360x120 120
