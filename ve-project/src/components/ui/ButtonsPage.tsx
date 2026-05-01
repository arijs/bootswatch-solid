import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../themes/runtime/hooks'
import Buttons from './Buttons'

const ButtonsPage: Component = () => {
	const { bsTheme, body, containerFluid } = useVeButtonThemeClasses()

	return (
		<div class={`${bsTheme} ${body} ${containerFluid}`}>
			<Buttons />
		</div>
	)
}

export default ButtonsPage
