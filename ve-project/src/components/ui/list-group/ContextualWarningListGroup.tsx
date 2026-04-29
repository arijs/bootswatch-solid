import type { Component } from 'solid-js'
import { useVeListGroupThemeClasses } from '../../../themes/runtime/hooks'

const ContextualWarningListGroup: Component = () => {
	const cls = useVeListGroupThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<div class={cls.listGroup}>
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${cls.listGroupItem} ${cls.listGroupItemAction} ${cls.listGroupItemWarning} pwhook-list-group-item`}
				>
					A simple warning list group item
				</a>
			</div>
		</div>
	)
}

export default ContextualWarningListGroup

// @screenshot *: 360x120 120
