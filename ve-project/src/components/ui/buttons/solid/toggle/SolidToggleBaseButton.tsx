import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleBaseButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-base" autocomplete="off" />
		<label class={`${btn}`} for="id-btn-solid-toggle-base">Toggle Button</label>
	</div>
	)
}

export default SolidToggleBaseButton

// @screenshot *: 360x120 120
