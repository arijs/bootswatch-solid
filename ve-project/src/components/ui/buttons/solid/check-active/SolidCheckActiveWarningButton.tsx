import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidCheckActiveWarningButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnActiveHook,
		btnWarning,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnWarning} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Warning
		</button>
	</div>
	)
}

export default SolidCheckActiveWarningButton

// @screenshot *: 360x120 120
