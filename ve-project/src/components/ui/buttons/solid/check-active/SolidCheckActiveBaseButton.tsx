import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidCheckActiveBaseButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Button
		</button>
	</div>
	)
}

export default SolidCheckActiveBaseButton

// @screenshot *: 360x120 120
