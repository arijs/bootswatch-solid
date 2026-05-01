import type { Component } from 'solid-js'
import { useVeListGroupThemeClasses } from '../../../themes/runtime/hooks'

const FlushListGroup: Component = () => {
	const cls = useVeListGroupThemeClasses()

	return (
		<div class={`bd-example ${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<ul class={`${cls.listGroup} ${cls.listGroupFlush} pwhook-list-group`}>
				<li class={cls.listGroupItem}>An item</li>
				<li class={cls.listGroupItem}>A second item</li>
				<li class={cls.listGroupItem}>A third item</li>
				<li class={cls.listGroupItem}>A fourth item</li>
				<li class={cls.listGroupItem}>And a fifth one</li>
			</ul>
		</div>
	)
}

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
