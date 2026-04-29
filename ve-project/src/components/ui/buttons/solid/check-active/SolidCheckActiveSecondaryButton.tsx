import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidCheckActiveSecondaryButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnActiveHook, btnSecondary } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				type="button"
				class={`${btn} ${btnSecondary} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Secondary
			</button>
		</div>
	)
}

export default SolidCheckActiveSecondaryButton

// @screenshot *: 360x120 120
