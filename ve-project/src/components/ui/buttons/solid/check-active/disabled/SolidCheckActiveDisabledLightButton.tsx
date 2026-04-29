import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidCheckActiveDisabledLightButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnActiveHook, btnLight } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${btn} ${btnLight} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Light
			</button>
		</div>
	)
}

export default SolidCheckActiveDisabledLightButton

// @screenshot *: 360x120 120
