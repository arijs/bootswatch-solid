import type { Component } from 'solid-js'
import { useVeListGroupThemeClasses } from '../../../themes/runtime/hooks'

const DefaultListGroup: Component = () => {
	const cls = useVeListGroupThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<ul class={`${cls.listGroup} pwhook-list-group`}>
				<li
					class={`${cls.listGroupItem} ${cls.listGroupItemDisabled}`}
					aria-disabled="true"
				>
					A disabled item
				</li>
				<li class={cls.listGroupItem}>A second item</li>
				<li class={cls.listGroupItem}>A third item</li>
				<li class={cls.listGroupItem}>A fourth item</li>
				<li class={cls.listGroupItem}>And a fifth one</li>
			</ul>
		</div>
	)
}

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
