import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckDisabledLightButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnLight,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnLight} pwhook-btn`} data-bs-toggle="button">
			Light
		</button>
	</div>
	)
}

export default SolidCheckDisabledLightButton

// @screenshot *: 360x120 120
