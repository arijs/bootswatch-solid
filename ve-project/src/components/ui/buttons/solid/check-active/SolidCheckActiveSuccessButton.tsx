import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidCheckActiveSuccessButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnSuccess,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnSuccess} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Success
		</button>
	</div>
	)
}

export default SolidCheckActiveSuccessButton

// @screenshot *: 360x120 120
