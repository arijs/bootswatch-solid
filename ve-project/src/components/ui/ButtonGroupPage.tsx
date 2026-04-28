import type { Component } from 'solid-js'
import { useVeGlobalThemeClasses } from '../../themes/runtime/hooks'
import ButtonGroup from './ButtonGroup'

const ButtonGroupPage: Component = () => {
	const cls = useVeGlobalThemeClasses()

	return (
		<div class={`${cls.bsTheme} ${cls.body} ${cls.containerFluid}`}>
			<ButtonGroup />
		</div>
	)
}

export default ButtonGroupPage
