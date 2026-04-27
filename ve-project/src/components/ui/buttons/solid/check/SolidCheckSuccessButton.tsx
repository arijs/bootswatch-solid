import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidCheckSuccessButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnSuccess,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnSuccess} pwhook-btn`} data-bs-toggle="button">
			Success
		</button>
	</div>
	)
}

export default SolidCheckSuccessButton

// @screenshot *: 360x120 120
