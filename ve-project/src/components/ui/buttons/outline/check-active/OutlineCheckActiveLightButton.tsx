import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineCheckActiveLightButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnActiveHook, btnOutlineLight } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				type="button"
				class={`${btn} ${btnOutlineLight} ${btnActiveHook} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Light
			</button>
		</div>
	)
}

export default OutlineCheckActiveLightButton

// @screenshot *: 360x120 120
