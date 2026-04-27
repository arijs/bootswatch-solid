import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../themes/runtime/hooks'

const SolidLightButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnLight,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnLight} pwhook-btn`}>
			Light
		</button>
	</div>
	)
}

export default SolidLightButton

// @screenshot *: 360x120 120
