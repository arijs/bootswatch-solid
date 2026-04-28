import type { Component } from 'solid-js'
import { useVeGlobalThemeClasses } from '../../themes/runtime/hooks'
import Badge from './Badge'

const BadgePage: Component = () => {
	const cls = useVeGlobalThemeClasses()

	return (
		<div class={`${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<Badge />
		</div>
	)
}

export default BadgePage