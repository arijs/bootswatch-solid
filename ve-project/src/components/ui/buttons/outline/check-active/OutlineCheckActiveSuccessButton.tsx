import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineCheckActiveSuccessButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnActiveHook, btnOutlineSuccess } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				type="button"
				class={`${btn} ${btnOutlineSuccess} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Success
			</button>
		</div>
	)
}

export default OutlineCheckActiveSuccessButton

// @screenshot *: 360x120 120
