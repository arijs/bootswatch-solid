import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckActiveDisabledSuccessButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnActiveHook, btnSuccess } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${btn} ${btnSuccess} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Success
			</button>
		</div>
	)
}

export default SolidCheckActiveDisabledSuccessButton

// @screenshot *: 360x120 120
